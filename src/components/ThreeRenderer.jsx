/**
 * ThreeRenderer
 *
 * Mounts a Three.js WebGL canvas inside a flex container.
 * Re-creates the scene entirely whenever `item` changes so there
 * are no stale geometry / material references.
 *
 * Props
 *   item — one of the item objects from gameConfig.js THEMES
 */
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { CONFIG } from '../config/gameConfig';
import { buildObject } from '../objects/objectBuilders';

export default function ThreeRenderer({ item }) {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!item || !mountRef.current) return;
    const mount = mountRef.current;

    // ── Scene ────────────────────────────────────────────────────
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100,
    );
    camera.position.z = CONFIG.CAMERA_Z;

    // ── Renderer ─────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // ── Object ───────────────────────────────────────────────────
    const group = buildObject(item);
    scene.add(group);

    // ── Animation loop ───────────────────────────────────────────
    const clock = new THREE.Clock();
    let animId;

    function animate() {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Rotate + gentle vertical bob
      group.rotation.y   += CONFIG.OBJECT_ROTATION_SPEED;
      group.position.y    = Math.sin(t * CONFIG.OBJECT_FLOAT_SPEED) * CONFIG.OBJECT_FLOAT_AMOUNT;

      // Feed elapsed time into every shader material
      group.traverse((child) => {
        if (child.isMesh && child.material?.uniforms?.uTime) {
          child.material.uniforms.uTime.value = t * CONFIG.SHADER_TIME_SPEED;
        }
      });

      renderer.render(scene, camera);
    }

    animate();

    // ── Responsive resize ─────────────────────────────────────────
    const ro = new ResizeObserver(() => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });
    ro.observe(mount);

    // ── Cleanup ───────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      // Dispose GPU resources to prevent memory leaks
      group.traverse((child) => {
        if (child.isMesh) {
          child.geometry.dispose();
          child.material.dispose();
        }
      });
      renderer.dispose();
    };
  }, [item]); // re-runs whenever the displayed item changes

  return <div ref={mountRef} className="three-mount" />;
}
