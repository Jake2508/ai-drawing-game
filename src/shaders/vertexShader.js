// Vertex shader — passes UV coords, the view-space normal, and the view-space
// position to the fragment stage so it can do lighting & rim calculations.
const vertexShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  void main() {
    vUv           = uv;
    vNormal       = normalize(normalMatrix * normal);
    vec4 mvPos    = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPos.xyz;           // vector from fragment toward camera
    gl_Position   = projectionMatrix * mvPos;
  }
`;

export default vertexShader;
