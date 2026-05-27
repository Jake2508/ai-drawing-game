(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Bp={exports:{}},Sl={},Hp={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Po=Symbol.for("react.element"),O_=Symbol.for("react.portal"),k_=Symbol.for("react.fragment"),z_=Symbol.for("react.strict_mode"),B_=Symbol.for("react.profiler"),H_=Symbol.for("react.provider"),V_=Symbol.for("react.context"),G_=Symbol.for("react.forward_ref"),W_=Symbol.for("react.suspense"),X_=Symbol.for("react.memo"),j_=Symbol.for("react.lazy"),Id=Symbol.iterator;function Y_(t){return t===null||typeof t!="object"?null:(t=Id&&t[Id]||t["@@iterator"],typeof t=="function"?t:null)}var Vp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gp=Object.assign,Wp={};function Ps(t,e,n){this.props=t,this.context=e,this.refs=Wp,this.updater=n||Vp}Ps.prototype.isReactComponent={};Ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xp(){}Xp.prototype=Ps.prototype;function xf(t,e,n){this.props=t,this.context=e,this.refs=Wp,this.updater=n||Vp}var Sf=xf.prototype=new Xp;Sf.constructor=xf;Gp(Sf,Ps.prototype);Sf.isPureReactComponent=!0;var Ud=Array.isArray,jp=Object.prototype.hasOwnProperty,yf={current:null},Yp={key:!0,ref:!0,__self:!0,__source:!0};function qp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jp.call(e,i)&&!Yp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Po,type:t,key:s,ref:o,props:r,_owner:yf.current}}function q_(t,e){return{$$typeof:Po,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Po}function $_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Fd=/\/+/g;function jl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$_(""+t.key):e.toString(36)}function Aa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Po:case O_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+jl(o,0):i,Ud(r)?(n="",t!=null&&(n=t.replace(Fd,"$&/")+"/"),Aa(r,e,n,"",function(u){return u})):r!=null&&(Mf(r)&&(r=q_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Fd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ud(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+jl(s,a);o+=Aa(s,e,n,l,r)}else if(l=Y_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+jl(s,a++),o+=Aa(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Bo(t,e,n){if(t==null)return t;var i=[],r=0;return Aa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function K_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Ca={transition:null},Z_={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Ca,ReactCurrentOwner:yf};function $p(){throw Error("act(...) is not supported in production builds of React.")}Oe.Children={map:Bo,forEach:function(t,e,n){Bo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Bo(t,function(){e++}),e},toArray:function(t){return Bo(t,function(e){return e})||[]},only:function(t){if(!Mf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Oe.Component=Ps;Oe.Fragment=k_;Oe.Profiler=B_;Oe.PureComponent=xf;Oe.StrictMode=z_;Oe.Suspense=W_;Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z_;Oe.act=$p;Oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Gp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)jp.call(e,l)&&!Yp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Po,type:t.type,key:r,ref:s,props:i,_owner:o}};Oe.createContext=function(t){return t={$$typeof:V_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:H_,_context:t},t.Consumer=t};Oe.createElement=qp;Oe.createFactory=function(t){var e=qp.bind(null,t);return e.type=t,e};Oe.createRef=function(){return{current:null}};Oe.forwardRef=function(t){return{$$typeof:G_,render:t}};Oe.isValidElement=Mf;Oe.lazy=function(t){return{$$typeof:j_,_payload:{_status:-1,_result:t},_init:K_}};Oe.memo=function(t,e){return{$$typeof:X_,type:t,compare:e===void 0?null:e}};Oe.startTransition=function(t){var e=Ca.transition;Ca.transition={};try{t()}finally{Ca.transition=e}};Oe.unstable_act=$p;Oe.useCallback=function(t,e){return qt.current.useCallback(t,e)};Oe.useContext=function(t){return qt.current.useContext(t)};Oe.useDebugValue=function(){};Oe.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};Oe.useEffect=function(t,e){return qt.current.useEffect(t,e)};Oe.useId=function(){return qt.current.useId()};Oe.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};Oe.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};Oe.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};Oe.useMemo=function(t,e){return qt.current.useMemo(t,e)};Oe.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};Oe.useRef=function(t){return qt.current.useRef(t)};Oe.useState=function(t){return qt.current.useState(t)};Oe.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};Oe.useTransition=function(){return qt.current.useTransition()};Oe.version="18.3.1";Hp.exports=Oe;var xt=Hp.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_=xt,J_=Symbol.for("react.element"),ev=Symbol.for("react.fragment"),tv=Object.prototype.hasOwnProperty,nv=Q_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,iv={key:!0,ref:!0,__self:!0,__source:!0};function Kp(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)tv.call(e,i)&&!iv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:J_,type:t,key:s,ref:o,props:r,_owner:nv.current}}Sl.Fragment=ev;Sl.jsx=Kp;Sl.jsxs=Kp;Bp.exports=Sl;var me=Bp.exports,Zp={exports:{}},mn={},Qp={exports:{}},Jp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,Y){var Z=D.length;D.push(Y);e:for(;0<Z;){var se=Z-1>>>1,ye=D[se];if(0<r(ye,Y))D[se]=Y,D[Z]=ye,Z=se;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var Y=D[0],Z=D.pop();if(Z!==Y){D[0]=Z;e:for(var se=0,ye=D.length,Ve=ye>>>1;se<Ve;){var G=2*(se+1)-1,te=D[G],fe=G+1,ue=D[fe];if(0>r(te,Z))fe<ye&&0>r(ue,te)?(D[se]=ue,D[fe]=Z,se=fe):(D[se]=te,D[G]=Z,se=G);else if(fe<ye&&0>r(ue,Z))D[se]=ue,D[fe]=Z,se=fe;else break e}}return Y}function r(D,Y){var Z=D.sortIndex-Y.sortIndex;return Z!==0?Z:D.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,h=null,d=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var Y=n(u);Y!==null;){if(Y.callback===null)i(u);else if(Y.startTime<=D)i(u),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(u)}}function y(D){if(x=!1,_(D),!v)if(n(l)!==null)v=!0,V(R);else{var Y=n(u);Y!==null&&$(y,Y.startTime-D)}}function R(D,Y){v=!1,x&&(x=!1,c(P),P=-1),p=!0;var Z=d;try{for(_(Y),h=n(l);h!==null&&(!(h.expirationTime>Y)||D&&!b());){var se=h.callback;if(typeof se=="function"){h.callback=null,d=h.priorityLevel;var ye=se(h.expirationTime<=Y);Y=t.unstable_now(),typeof ye=="function"?h.callback=ye:h===n(l)&&i(l),_(Y)}else i(l);h=n(l)}if(h!==null)var Ve=!0;else{var G=n(u);G!==null&&$(y,G.startTime-Y),Ve=!1}return Ve}finally{h=null,d=Z,p=!1}}var w=!1,A=null,P=-1,T=5,S=-1;function b(){return!(t.unstable_now()-S<T)}function B(){if(A!==null){var D=t.unstable_now();S=D;var Y=!0;try{Y=A(!0,D)}finally{Y?k():(w=!1,A=null)}}else w=!1}var k;if(typeof g=="function")k=function(){g(B)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,X=W.port2;W.port1.onmessage=B,k=function(){X.postMessage(null)}}else k=function(){m(B,0)};function V(D){A=D,w||(w=!0,k())}function $(D,Y){P=m(function(){D(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,V(R))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var Y=3;break;default:Y=d}var Z=d;d=Y;try{return D()}finally{d=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,Y){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Z=d;d=D;try{return Y()}finally{d=Z}},t.unstable_scheduleCallback=function(D,Y,Z){var se=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?se+Z:se):Z=se,D){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=Z+ye,D={id:f++,callback:Y,priorityLevel:D,startTime:Z,expirationTime:ye,sortIndex:-1},Z>se?(D.sortIndex=Z,e(u,D),n(l)===null&&D===n(u)&&(x?(c(P),P=-1):x=!0,$(y,Z-se))):(D.sortIndex=ye,e(l,D),v||p||(v=!0,V(R))),D},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(D){var Y=d;return function(){var Z=d;d=Y;try{return D.apply(this,arguments)}finally{d=Z}}}})(Jp);Qp.exports=Jp;var rv=Qp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv=xt,pn=rv;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var em=new Set,co={};function Rr(t,e){_s(t,e),_s(t+"Capture",e)}function _s(t,e){for(co[t]=e,t=0;t<e.length;t++)em.add(e[t])}var mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ju=Object.prototype.hasOwnProperty,ov=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Od={},kd={};function av(t){return ju.call(kd,t)?!0:ju.call(Od,t)?!1:ov.test(t)?kd[t]=!0:(Od[t]=!0,!1)}function lv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function uv(t,e,n,i){if(e===null||typeof e>"u"||lv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ef=/[\-:]([a-z])/g;function Tf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ef,Tf);Ot[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ef,Tf);Ot[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ef,Tf);Ot[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function wf(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uv(e,n,r,i)&&(n=null),i||r===null?av(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Mi=sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ho=Symbol.for("react.element"),$r=Symbol.for("react.portal"),Kr=Symbol.for("react.fragment"),Af=Symbol.for("react.strict_mode"),Yu=Symbol.for("react.profiler"),tm=Symbol.for("react.provider"),nm=Symbol.for("react.context"),Cf=Symbol.for("react.forward_ref"),qu=Symbol.for("react.suspense"),$u=Symbol.for("react.suspense_list"),Rf=Symbol.for("react.memo"),Li=Symbol.for("react.lazy"),im=Symbol.for("react.offscreen"),zd=Symbol.iterator;function Us(t){return t===null||typeof t!="object"?null:(t=zd&&t[zd]||t["@@iterator"],typeof t=="function"?t:null)}var lt=Object.assign,Yl;function $s(t){if(Yl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yl=e&&e[1]||""}return`
`+Yl+t}var ql=!1;function $l(t,e){if(!t||ql)return"";ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ql=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$s(t):""}function cv(t){switch(t.tag){case 5:return $s(t.type);case 16:return $s("Lazy");case 13:return $s("Suspense");case 19:return $s("SuspenseList");case 0:case 2:case 15:return t=$l(t.type,!1),t;case 11:return t=$l(t.type.render,!1),t;case 1:return t=$l(t.type,!0),t;default:return""}}function Ku(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Kr:return"Fragment";case $r:return"Portal";case Yu:return"Profiler";case Af:return"StrictMode";case qu:return"Suspense";case $u:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case nm:return(t.displayName||"Context")+".Consumer";case tm:return(t._context.displayName||"Context")+".Provider";case Cf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rf:return e=t.displayName||null,e!==null?e:Ku(t.type)||"Memo";case Li:e=t._payload,t=t._init;try{return Ku(t(e))}catch{}}return null}function fv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ku(e);case 8:return e===Af?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dv(t){var e=rm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Vo(t){t._valueTracker||(t._valueTracker=dv(t))}function sm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=rm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Wa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Zu(t,e){var n=e.checked;return lt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=qi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function om(t,e){e=e.checked,e!=null&&wf(t,"checked",e,!1)}function Qu(t,e){om(t,e);var n=qi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ju(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ju(t,e.type,qi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ju(t,e,n){(e!=="number"||Wa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ks=Array.isArray;function ls(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+qi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ec(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return lt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(Ks(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qi(n)}}function am(t,e){var n=qi(e.value),i=qi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Gd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function lm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?lm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Go,um=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Go=Go||document.createElement("div"),Go.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Go.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function fo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hv=["Webkit","ms","Moz","O"];Object.keys(eo).forEach(function(t){hv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),eo[e]=eo[t]})});function cm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||eo.hasOwnProperty(t)&&eo[t]?(""+e).trim():e+"px"}function fm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=cm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var pv=lt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nc(t,e){if(e){if(pv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function ic(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rc=null;function Pf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sc=null,us=null,cs=null;function Wd(t){if(t=Do(t)){if(typeof sc!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=wl(e),sc(t.stateNode,t.type,e))}}function dm(t){us?cs?cs.push(t):cs=[t]:us=t}function hm(){if(us){var t=us,e=cs;if(cs=us=null,Wd(t),e)for(t=0;t<e.length;t++)Wd(e[t])}}function pm(t,e){return t(e)}function mm(){}var Kl=!1;function gm(t,e,n){if(Kl)return t(e,n);Kl=!0;try{return pm(t,e,n)}finally{Kl=!1,(us!==null||cs!==null)&&(mm(),hm())}}function ho(t,e){var n=t.stateNode;if(n===null)return null;var i=wl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var oc=!1;if(mi)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){oc=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{oc=!1}function mv(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var to=!1,Xa=null,ja=!1,ac=null,gv={onError:function(t){to=!0,Xa=t}};function _v(t,e,n,i,r,s,o,a,l){to=!1,Xa=null,mv.apply(gv,arguments)}function vv(t,e,n,i,r,s,o,a,l){if(_v.apply(this,arguments),to){if(to){var u=Xa;to=!1,Xa=null}else throw Error(ee(198));ja||(ja=!0,ac=u)}}function Pr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _m(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xd(t){if(Pr(t)!==t)throw Error(ee(188))}function xv(t){var e=t.alternate;if(!e){if(e=Pr(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Xd(r),t;if(s===i)return Xd(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function vm(t){return t=xv(t),t!==null?xm(t):null}function xm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xm(t);if(e!==null)return e;t=t.sibling}return null}var Sm=pn.unstable_scheduleCallback,jd=pn.unstable_cancelCallback,Sv=pn.unstable_shouldYield,yv=pn.unstable_requestPaint,ht=pn.unstable_now,Mv=pn.unstable_getCurrentPriorityLevel,bf=pn.unstable_ImmediatePriority,ym=pn.unstable_UserBlockingPriority,Ya=pn.unstable_NormalPriority,Ev=pn.unstable_LowPriority,Mm=pn.unstable_IdlePriority,yl=null,Kn=null;function Tv(t){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(yl,t,void 0,(t.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:Cv,wv=Math.log,Av=Math.LN2;function Cv(t){return t>>>=0,t===0?32:31-(wv(t)/Av|0)|0}var Wo=64,Xo=4194304;function Zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function qa(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Zs(a):(s&=o,s!==0&&(i=Zs(s)))}else o=n&~r,o!==0?i=Zs(o):s!==0&&(i=Zs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-zn(e),r=1<<n,i|=t[n],e&=~r;return i}function Rv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-zn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Rv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function lc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Em(){var t=Wo;return Wo<<=1,!(Wo&4194240)&&(Wo=64),t}function Zl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function bo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zn(e),t[e]=n}function bv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Lf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ze=0;function Tm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var wm,Df,Am,Cm,Rm,uc=!1,jo=[],ki=null,zi=null,Bi=null,po=new Map,mo=new Map,Ni=[],Lv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yd(t,e){switch(t){case"focusin":case"focusout":ki=null;break;case"dragenter":case"dragleave":zi=null;break;case"mouseover":case"mouseout":Bi=null;break;case"pointerover":case"pointerout":po.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(e.pointerId)}}function Os(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Do(e),e!==null&&Df(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Dv(t,e,n,i,r){switch(e){case"focusin":return ki=Os(ki,t,e,n,i,r),!0;case"dragenter":return zi=Os(zi,t,e,n,i,r),!0;case"mouseover":return Bi=Os(Bi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return po.set(s,Os(po.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,mo.set(s,Os(mo.get(s)||null,t,e,n,i,r)),!0}return!1}function Pm(t){var e=pr(t.target);if(e!==null){var n=Pr(e);if(n!==null){if(e=n.tag,e===13){if(e=_m(n),e!==null){t.blockedOn=e,Rm(t.priority,function(){Am(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ra(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);rc=i,n.target.dispatchEvent(i),rc=null}else return e=Do(n),e!==null&&Df(e),t.blockedOn=n,!1;e.shift()}return!0}function qd(t,e,n){Ra(t)&&n.delete(e)}function Nv(){uc=!1,ki!==null&&Ra(ki)&&(ki=null),zi!==null&&Ra(zi)&&(zi=null),Bi!==null&&Ra(Bi)&&(Bi=null),po.forEach(qd),mo.forEach(qd)}function ks(t,e){t.blockedOn===e&&(t.blockedOn=null,uc||(uc=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,Nv)))}function go(t){function e(r){return ks(r,t)}if(0<jo.length){ks(jo[0],t);for(var n=1;n<jo.length;n++){var i=jo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ki!==null&&ks(ki,t),zi!==null&&ks(zi,t),Bi!==null&&ks(Bi,t),po.forEach(e),mo.forEach(e),n=0;n<Ni.length;n++)i=Ni[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ni.length&&(n=Ni[0],n.blockedOn===null);)Pm(n),n.blockedOn===null&&Ni.shift()}var fs=Mi.ReactCurrentBatchConfig,$a=!0;function Iv(t,e,n,i){var r=Ze,s=fs.transition;fs.transition=null;try{Ze=1,Nf(t,e,n,i)}finally{Ze=r,fs.transition=s}}function Uv(t,e,n,i){var r=Ze,s=fs.transition;fs.transition=null;try{Ze=4,Nf(t,e,n,i)}finally{Ze=r,fs.transition=s}}function Nf(t,e,n,i){if($a){var r=cc(t,e,n,i);if(r===null)au(t,e,i,Ka,n),Yd(t,i);else if(Dv(r,t,e,n,i))i.stopPropagation();else if(Yd(t,i),e&4&&-1<Lv.indexOf(t)){for(;r!==null;){var s=Do(r);if(s!==null&&wm(s),s=cc(t,e,n,i),s===null&&au(t,e,i,Ka,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else au(t,e,i,null,n)}}var Ka=null;function cc(t,e,n,i){if(Ka=null,t=Pf(i),t=pr(t),t!==null)if(e=Pr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=_m(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ka=t,null}function bm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mv()){case bf:return 1;case ym:return 4;case Ya:case Ev:return 16;case Mm:return 536870912;default:return 16}default:return 16}}var Fi=null,If=null,Pa=null;function Lm(){if(Pa)return Pa;var t,e=If,n=e.length,i,r="value"in Fi?Fi.value:Fi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Pa=r.slice(t,1<i?1-i:void 0)}function ba(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Yo(){return!0}function $d(){return!1}function gn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Yo:$d,this.isPropagationStopped=$d,this}return lt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),e}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uf=gn(bs),Lo=lt({},bs,{view:0,detail:0}),Fv=gn(Lo),Ql,Jl,zs,Ml=lt({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ff,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(Ql=t.screenX-zs.screenX,Jl=t.screenY-zs.screenY):Jl=Ql=0,zs=t),Ql)},movementY:function(t){return"movementY"in t?t.movementY:Jl}}),Kd=gn(Ml),Ov=lt({},Ml,{dataTransfer:0}),kv=gn(Ov),zv=lt({},Lo,{relatedTarget:0}),eu=gn(zv),Bv=lt({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),Hv=gn(Bv),Vv=lt({},bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Gv=gn(Vv),Wv=lt({},bs,{data:0}),Zd=gn(Wv),Xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Yv[t])?!!e[t]:!1}function Ff(){return qv}var $v=lt({},Lo,{key:function(t){if(t.key){var e=Xv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ba(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ff,charCode:function(t){return t.type==="keypress"?ba(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ba(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Kv=gn($v),Zv=lt({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qd=gn(Zv),Qv=lt({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ff}),Jv=gn(Qv),e0=lt({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),t0=gn(e0),n0=lt({},Ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),i0=gn(n0),r0=[9,13,27,32],Of=mi&&"CompositionEvent"in window,no=null;mi&&"documentMode"in document&&(no=document.documentMode);var s0=mi&&"TextEvent"in window&&!no,Dm=mi&&(!Of||no&&8<no&&11>=no),Jd=" ",eh=!1;function Nm(t,e){switch(t){case"keyup":return r0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Im(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function o0(t,e){switch(t){case"compositionend":return Im(e);case"keypress":return e.which!==32?null:(eh=!0,Jd);case"textInput":return t=e.data,t===Jd&&eh?null:t;default:return null}}function a0(t,e){if(Zr)return t==="compositionend"||!Of&&Nm(t,e)?(t=Lm(),Pa=If=Fi=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Dm&&e.locale!=="ko"?null:e.data;default:return null}}var l0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function th(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!l0[t.type]:e==="textarea"}function Um(t,e,n,i){dm(i),e=Za(e,"onChange"),0<e.length&&(n=new Uf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var io=null,_o=null;function u0(t){jm(t,0)}function El(t){var e=es(t);if(sm(e))return t}function c0(t,e){if(t==="change")return e}var Fm=!1;if(mi){var tu;if(mi){var nu="oninput"in document;if(!nu){var nh=document.createElement("div");nh.setAttribute("oninput","return;"),nu=typeof nh.oninput=="function"}tu=nu}else tu=!1;Fm=tu&&(!document.documentMode||9<document.documentMode)}function ih(){io&&(io.detachEvent("onpropertychange",Om),_o=io=null)}function Om(t){if(t.propertyName==="value"&&El(_o)){var e=[];Um(e,_o,t,Pf(t)),gm(u0,e)}}function f0(t,e,n){t==="focusin"?(ih(),io=e,_o=n,io.attachEvent("onpropertychange",Om)):t==="focusout"&&ih()}function d0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return El(_o)}function h0(t,e){if(t==="click")return El(e)}function p0(t,e){if(t==="input"||t==="change")return El(e)}function m0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:m0;function vo(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ju.call(e,r)||!Hn(t[r],e[r]))return!1}return!0}function rh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sh(t,e){var n=rh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rh(n)}}function km(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?km(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function zm(){for(var t=window,e=Wa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wa(t.document)}return e}function kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function g0(t){var e=zm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&km(n.ownerDocument.documentElement,n)){if(i!==null&&kf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=sh(n,s);var o=sh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _0=mi&&"documentMode"in document&&11>=document.documentMode,Qr=null,fc=null,ro=null,dc=!1;function oh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dc||Qr==null||Qr!==Wa(i)||(i=Qr,"selectionStart"in i&&kf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ro&&vo(ro,i)||(ro=i,i=Za(fc,"onSelect"),0<i.length&&(e=new Uf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Qr)))}function qo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Jr={animationend:qo("Animation","AnimationEnd"),animationiteration:qo("Animation","AnimationIteration"),animationstart:qo("Animation","AnimationStart"),transitionend:qo("Transition","TransitionEnd")},iu={},Bm={};mi&&(Bm=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function Tl(t){if(iu[t])return iu[t];if(!Jr[t])return t;var e=Jr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Bm)return iu[t]=e[n];return t}var Hm=Tl("animationend"),Vm=Tl("animationiteration"),Gm=Tl("animationstart"),Wm=Tl("transitionend"),Xm=new Map,ah="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(t,e){Xm.set(t,e),Rr(e,[t])}for(var ru=0;ru<ah.length;ru++){var su=ah[ru],v0=su.toLowerCase(),x0=su[0].toUpperCase()+su.slice(1);Zi(v0,"on"+x0)}Zi(Hm,"onAnimationEnd");Zi(Vm,"onAnimationIteration");Zi(Gm,"onAnimationStart");Zi("dblclick","onDoubleClick");Zi("focusin","onFocus");Zi("focusout","onBlur");Zi(Wm,"onTransitionEnd");_s("onMouseEnter",["mouseout","mouseover"]);_s("onMouseLeave",["mouseout","mouseover"]);_s("onPointerEnter",["pointerout","pointerover"]);_s("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qs));function lh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,vv(i,e,void 0,t),t.currentTarget=null}function jm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;lh(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;lh(r,a,u),s=l}}}if(ja)throw t=ac,ja=!1,ac=null,t}function tt(t,e){var n=e[_c];n===void 0&&(n=e[_c]=new Set);var i=t+"__bubble";n.has(i)||(Ym(e,t,2,!1),n.add(i))}function ou(t,e,n){var i=0;e&&(i|=4),Ym(n,t,i,e)}var $o="_reactListening"+Math.random().toString(36).slice(2);function xo(t){if(!t[$o]){t[$o]=!0,em.forEach(function(n){n!=="selectionchange"&&(S0.has(n)||ou(n,!1,t),ou(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$o]||(e[$o]=!0,ou("selectionchange",!1,e))}}function Ym(t,e,n,i){switch(bm(e)){case 1:var r=Iv;break;case 4:r=Uv;break;default:r=Nf}n=r.bind(null,e,n,t),r=void 0,!oc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function au(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=pr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}gm(function(){var u=s,f=Pf(n),h=[];e:{var d=Xm.get(t);if(d!==void 0){var p=Uf,v=t;switch(t){case"keypress":if(ba(n)===0)break e;case"keydown":case"keyup":p=Kv;break;case"focusin":v="focus",p=eu;break;case"focusout":v="blur",p=eu;break;case"beforeblur":case"afterblur":p=eu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Jv;break;case Hm:case Vm:case Gm:p=Hv;break;case Wm:p=t0;break;case"scroll":p=Fv;break;case"wheel":p=i0;break;case"copy":case"cut":case"paste":p=Gv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Qd}var x=(e&4)!==0,m=!x&&t==="scroll",c=x?d!==null?d+"Capture":null:d;x=[];for(var g=u,_;g!==null;){_=g;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,c!==null&&(y=ho(g,c),y!=null&&x.push(So(g,y,_)))),m)break;g=g.return}0<x.length&&(d=new p(d,v,null,n,f),h.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==rc&&(v=n.relatedTarget||n.fromElement)&&(pr(v)||v[gi]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?pr(v):null,v!==null&&(m=Pr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(x=Kd,y="onMouseLeave",c="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=Qd,y="onPointerLeave",c="onPointerEnter",g="pointer"),m=p==null?d:es(p),_=v==null?d:es(v),d=new x(y,g+"leave",p,n,f),d.target=m,d.relatedTarget=_,y=null,pr(f)===u&&(x=new x(c,g+"enter",v,n,f),x.target=_,x.relatedTarget=m,y=x),m=y,p&&v)t:{for(x=p,c=v,g=0,_=x;_;_=Lr(_))g++;for(_=0,y=c;y;y=Lr(y))_++;for(;0<g-_;)x=Lr(x),g--;for(;0<_-g;)c=Lr(c),_--;for(;g--;){if(x===c||c!==null&&x===c.alternate)break t;x=Lr(x),c=Lr(c)}x=null}else x=null;p!==null&&uh(h,d,p,x,!1),v!==null&&m!==null&&uh(h,m,v,x,!0)}}e:{if(d=u?es(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var R=c0;else if(th(d))if(Fm)R=p0;else{R=d0;var w=f0}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=h0);if(R&&(R=R(t,u))){Um(h,R,n,f);break e}w&&w(t,d,u),t==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&Ju(d,"number",d.value)}switch(w=u?es(u):window,t){case"focusin":(th(w)||w.contentEditable==="true")&&(Qr=w,fc=u,ro=null);break;case"focusout":ro=fc=Qr=null;break;case"mousedown":dc=!0;break;case"contextmenu":case"mouseup":case"dragend":dc=!1,oh(h,n,f);break;case"selectionchange":if(_0)break;case"keydown":case"keyup":oh(h,n,f)}var A;if(Of)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Zr?Nm(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Dm&&n.locale!=="ko"&&(Zr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Zr&&(A=Lm()):(Fi=f,If="value"in Fi?Fi.value:Fi.textContent,Zr=!0)),w=Za(u,P),0<w.length&&(P=new Zd(P,t,null,n,f),h.push({event:P,listeners:w}),A?P.data=A:(A=Im(n),A!==null&&(P.data=A)))),(A=s0?o0(t,n):a0(t,n))&&(u=Za(u,"onBeforeInput"),0<u.length&&(f=new Zd("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=A))}jm(h,e)})}function So(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Za(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ho(t,n),s!=null&&i.unshift(So(t,s,r)),s=ho(t,e),s!=null&&i.push(So(t,s,r))),t=t.return}return i}function Lr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function uh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ho(n,s),l!=null&&o.unshift(So(n,l,a))):r||(l=ho(n,s),l!=null&&o.push(So(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var y0=/\r\n?/g,M0=/\u0000|\uFFFD/g;function ch(t){return(typeof t=="string"?t:""+t).replace(y0,`
`).replace(M0,"")}function Ko(t,e,n){if(e=ch(e),ch(t)!==e&&n)throw Error(ee(425))}function Qa(){}var hc=null,pc=null;function mc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gc=typeof setTimeout=="function"?setTimeout:void 0,E0=typeof clearTimeout=="function"?clearTimeout:void 0,fh=typeof Promise=="function"?Promise:void 0,T0=typeof queueMicrotask=="function"?queueMicrotask:typeof fh<"u"?function(t){return fh.resolve(null).then(t).catch(w0)}:gc;function w0(t){setTimeout(function(){throw t})}function lu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),go(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);go(e)}function Hi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),qn="__reactFiber$"+Ls,yo="__reactProps$"+Ls,gi="__reactContainer$"+Ls,_c="__reactEvents$"+Ls,A0="__reactListeners$"+Ls,C0="__reactHandles$"+Ls;function pr(t){var e=t[qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gi]||n[qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dh(t);t!==null;){if(n=t[qn])return n;t=dh(t)}return e}t=n,n=t.parentNode}return null}function Do(t){return t=t[qn]||t[gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function wl(t){return t[yo]||null}var vc=[],ts=-1;function Qi(t){return{current:t}}function it(t){0>ts||(t.current=vc[ts],vc[ts]=null,ts--)}function et(t,e){ts++,vc[ts]=t.current,t.current=e}var $i={},Wt=Qi($i),en=Qi(!1),yr=$i;function vs(t,e){var n=t.type.contextTypes;if(!n)return $i;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function tn(t){return t=t.childContextTypes,t!=null}function Ja(){it(en),it(Wt)}function hh(t,e,n){if(Wt.current!==$i)throw Error(ee(168));et(Wt,e),et(en,n)}function qm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,fv(t)||"Unknown",r));return lt({},n,i)}function el(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$i,yr=Wt.current,et(Wt,t),et(en,en.current),!0}function ph(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=qm(t,e,yr),i.__reactInternalMemoizedMergedChildContext=t,it(en),it(Wt),et(Wt,t)):it(en),et(en,n)}var li=null,Al=!1,uu=!1;function $m(t){li===null?li=[t]:li.push(t)}function R0(t){Al=!0,$m(t)}function Ji(){if(!uu&&li!==null){uu=!0;var t=0,e=Ze;try{var n=li;for(Ze=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}li=null,Al=!1}catch(r){throw li!==null&&(li=li.slice(t+1)),Sm(bf,Ji),r}finally{Ze=e,uu=!1}}return null}var ns=[],is=0,tl=null,nl=0,xn=[],Sn=0,Mr=null,ci=1,fi="";function lr(t,e){ns[is++]=nl,ns[is++]=tl,tl=t,nl=e}function Km(t,e,n){xn[Sn++]=ci,xn[Sn++]=fi,xn[Sn++]=Mr,Mr=t;var i=ci;t=fi;var r=32-zn(i)-1;i&=~(1<<r),n+=1;var s=32-zn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ci=1<<32-zn(e)+r|n<<r|i,fi=s+t}else ci=1<<s|n<<r|i,fi=t}function zf(t){t.return!==null&&(lr(t,1),Km(t,1,0))}function Bf(t){for(;t===tl;)tl=ns[--is],ns[is]=null,nl=ns[--is],ns[is]=null;for(;t===Mr;)Mr=xn[--Sn],xn[Sn]=null,fi=xn[--Sn],xn[Sn]=null,ci=xn[--Sn],xn[Sn]=null}var dn=null,fn=null,rt=!1,Fn=null;function Zm(t,e){var n=Mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,fn=Hi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mr!==null?{id:ci,overflow:fi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,fn=null,!0):!1;default:return!1}}function xc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Sc(t){if(rt){var e=fn;if(e){var n=e;if(!mh(t,e)){if(xc(t))throw Error(ee(418));e=Hi(n.nextSibling);var i=dn;e&&mh(t,e)?Zm(i,n):(t.flags=t.flags&-4097|2,rt=!1,dn=t)}}else{if(xc(t))throw Error(ee(418));t.flags=t.flags&-4097|2,rt=!1,dn=t}}}function gh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function Zo(t){if(t!==dn)return!1;if(!rt)return gh(t),rt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!mc(t.type,t.memoizedProps)),e&&(e=fn)){if(xc(t))throw Qm(),Error(ee(418));for(;e;)Zm(t,e),e=Hi(e.nextSibling)}if(gh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fn=Hi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fn=null}}else fn=dn?Hi(t.stateNode.nextSibling):null;return!0}function Qm(){for(var t=fn;t;)t=Hi(t.nextSibling)}function xs(){fn=dn=null,rt=!1}function Hf(t){Fn===null?Fn=[t]:Fn.push(t)}var P0=Mi.ReactCurrentBatchConfig;function Bs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function Qo(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _h(t){var e=t._init;return e(t._payload)}function Jm(t){function e(c,g){if(t){var _=c.deletions;_===null?(c.deletions=[g],c.flags|=16):_.push(g)}}function n(c,g){if(!t)return null;for(;g!==null;)e(c,g),g=g.sibling;return null}function i(c,g){for(c=new Map;g!==null;)g.key!==null?c.set(g.key,g):c.set(g.index,g),g=g.sibling;return c}function r(c,g){return c=Xi(c,g),c.index=0,c.sibling=null,c}function s(c,g,_){return c.index=_,t?(_=c.alternate,_!==null?(_=_.index,_<g?(c.flags|=2,g):_):(c.flags|=2,g)):(c.flags|=1048576,g)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,g,_,y){return g===null||g.tag!==6?(g=gu(_,c.mode,y),g.return=c,g):(g=r(g,_),g.return=c,g)}function l(c,g,_,y){var R=_.type;return R===Kr?f(c,g,_.props.children,y,_.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Li&&_h(R)===g.type)?(y=r(g,_.props),y.ref=Bs(c,g,_),y.return=c,y):(y=Oa(_.type,_.key,_.props,null,c.mode,y),y.ref=Bs(c,g,_),y.return=c,y)}function u(c,g,_,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=_u(_,c.mode,y),g.return=c,g):(g=r(g,_.children||[]),g.return=c,g)}function f(c,g,_,y,R){return g===null||g.tag!==7?(g=Sr(_,c.mode,y,R),g.return=c,g):(g=r(g,_),g.return=c,g)}function h(c,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=gu(""+g,c.mode,_),g.return=c,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ho:return _=Oa(g.type,g.key,g.props,null,c.mode,_),_.ref=Bs(c,null,g),_.return=c,_;case $r:return g=_u(g,c.mode,_),g.return=c,g;case Li:var y=g._init;return h(c,y(g._payload),_)}if(Ks(g)||Us(g))return g=Sr(g,c.mode,_,null),g.return=c,g;Qo(c,g)}return null}function d(c,g,_,y){var R=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return R!==null?null:a(c,g,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ho:return _.key===R?l(c,g,_,y):null;case $r:return _.key===R?u(c,g,_,y):null;case Li:return R=_._init,d(c,g,R(_._payload),y)}if(Ks(_)||Us(_))return R!==null?null:f(c,g,_,y,null);Qo(c,_)}return null}function p(c,g,_,y,R){if(typeof y=="string"&&y!==""||typeof y=="number")return c=c.get(_)||null,a(g,c,""+y,R);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ho:return c=c.get(y.key===null?_:y.key)||null,l(g,c,y,R);case $r:return c=c.get(y.key===null?_:y.key)||null,u(g,c,y,R);case Li:var w=y._init;return p(c,g,_,w(y._payload),R)}if(Ks(y)||Us(y))return c=c.get(_)||null,f(g,c,y,R,null);Qo(g,y)}return null}function v(c,g,_,y){for(var R=null,w=null,A=g,P=g=0,T=null;A!==null&&P<_.length;P++){A.index>P?(T=A,A=null):T=A.sibling;var S=d(c,A,_[P],y);if(S===null){A===null&&(A=T);break}t&&A&&S.alternate===null&&e(c,A),g=s(S,g,P),w===null?R=S:w.sibling=S,w=S,A=T}if(P===_.length)return n(c,A),rt&&lr(c,P),R;if(A===null){for(;P<_.length;P++)A=h(c,_[P],y),A!==null&&(g=s(A,g,P),w===null?R=A:w.sibling=A,w=A);return rt&&lr(c,P),R}for(A=i(c,A);P<_.length;P++)T=p(A,c,P,_[P],y),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?P:T.key),g=s(T,g,P),w===null?R=T:w.sibling=T,w=T);return t&&A.forEach(function(b){return e(c,b)}),rt&&lr(c,P),R}function x(c,g,_,y){var R=Us(_);if(typeof R!="function")throw Error(ee(150));if(_=R.call(_),_==null)throw Error(ee(151));for(var w=R=null,A=g,P=g=0,T=null,S=_.next();A!==null&&!S.done;P++,S=_.next()){A.index>P?(T=A,A=null):T=A.sibling;var b=d(c,A,S.value,y);if(b===null){A===null&&(A=T);break}t&&A&&b.alternate===null&&e(c,A),g=s(b,g,P),w===null?R=b:w.sibling=b,w=b,A=T}if(S.done)return n(c,A),rt&&lr(c,P),R;if(A===null){for(;!S.done;P++,S=_.next())S=h(c,S.value,y),S!==null&&(g=s(S,g,P),w===null?R=S:w.sibling=S,w=S);return rt&&lr(c,P),R}for(A=i(c,A);!S.done;P++,S=_.next())S=p(A,c,P,S.value,y),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?P:S.key),g=s(S,g,P),w===null?R=S:w.sibling=S,w=S);return t&&A.forEach(function(B){return e(c,B)}),rt&&lr(c,P),R}function m(c,g,_,y){if(typeof _=="object"&&_!==null&&_.type===Kr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ho:e:{for(var R=_.key,w=g;w!==null;){if(w.key===R){if(R=_.type,R===Kr){if(w.tag===7){n(c,w.sibling),g=r(w,_.props.children),g.return=c,c=g;break e}}else if(w.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Li&&_h(R)===w.type){n(c,w.sibling),g=r(w,_.props),g.ref=Bs(c,w,_),g.return=c,c=g;break e}n(c,w);break}else e(c,w);w=w.sibling}_.type===Kr?(g=Sr(_.props.children,c.mode,y,_.key),g.return=c,c=g):(y=Oa(_.type,_.key,_.props,null,c.mode,y),y.ref=Bs(c,g,_),y.return=c,c=y)}return o(c);case $r:e:{for(w=_.key;g!==null;){if(g.key===w)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(c,g.sibling),g=r(g,_.children||[]),g.return=c,c=g;break e}else{n(c,g);break}else e(c,g);g=g.sibling}g=_u(_,c.mode,y),g.return=c,c=g}return o(c);case Li:return w=_._init,m(c,g,w(_._payload),y)}if(Ks(_))return v(c,g,_,y);if(Us(_))return x(c,g,_,y);Qo(c,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(c,g.sibling),g=r(g,_),g.return=c,c=g):(n(c,g),g=gu(_,c.mode,y),g.return=c,c=g),o(c)):n(c,g)}return m}var Ss=Jm(!0),eg=Jm(!1),il=Qi(null),rl=null,rs=null,Vf=null;function Gf(){Vf=rs=rl=null}function Wf(t){var e=il.current;it(il),t._currentValue=e}function yc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ds(t,e){rl=t,Vf=rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(Vf!==t)if(t={context:t,memoizedValue:e,next:null},rs===null){if(rl===null)throw Error(ee(308));rs=t,rl.dependencies={lanes:0,firstContext:t}}else rs=rs.next=t;return e}var mr=null;function Xf(t){mr===null?mr=[t]:mr.push(t)}function tg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Xf(e)):(n.next=r.next,r.next=n),e.interleaved=n,_i(t,i)}function _i(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Di=!1;function jf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ng(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,_i(t,n)}return r=i.interleaved,r===null?(e.next=e,Xf(i)):(e.next=r.next,r.next=e),i.interleaved=e,_i(t,n)}function La(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Lf(t,n)}}function vh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function sl(t,e,n,i){var r=t.updateQueue;Di=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(d=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){h=v.call(p,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,d=typeof v=="function"?v.call(p,h,d):v,d==null)break e;h=lt({},h,d);break e;case 2:Di=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=p,l=h):f=f.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Tr|=o,t.lanes=o,t.memoizedState=h}}function xh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var No={},Zn=Qi(No),Mo=Qi(No),Eo=Qi(No);function gr(t){if(t===No)throw Error(ee(174));return t}function Yf(t,e){switch(et(Eo,e),et(Mo,t),et(Zn,No),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:tc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=tc(e,t)}it(Zn),et(Zn,e)}function ys(){it(Zn),it(Mo),it(Eo)}function ig(t){gr(Eo.current);var e=gr(Zn.current),n=tc(e,t.type);e!==n&&(et(Mo,t),et(Zn,n))}function qf(t){Mo.current===t&&(it(Zn),it(Mo))}var ot=Qi(0);function ol(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cu=[];function $f(){for(var t=0;t<cu.length;t++)cu[t]._workInProgressVersionPrimary=null;cu.length=0}var Da=Mi.ReactCurrentDispatcher,fu=Mi.ReactCurrentBatchConfig,Er=0,at=null,yt=null,Pt=null,al=!1,so=!1,To=0,b0=0;function kt(){throw Error(ee(321))}function Kf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function Zf(t,e,n,i,r,s){if(Er=s,at=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Da.current=t===null||t.memoizedState===null?I0:U0,t=n(i,r),so){s=0;do{if(so=!1,To=0,25<=s)throw Error(ee(301));s+=1,Pt=yt=null,e.updateQueue=null,Da.current=F0,t=n(i,r)}while(so)}if(Da.current=ll,e=yt!==null&&yt.next!==null,Er=0,Pt=yt=at=null,al=!1,e)throw Error(ee(300));return t}function Qf(){var t=To!==0;return To=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?at.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function Cn(){if(yt===null){var t=at.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var e=Pt===null?at.memoizedState:Pt.next;if(e!==null)Pt=e,yt=t;else{if(t===null)throw Error(ee(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Pt===null?at.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function wo(t,e){return typeof e=="function"?e(t):e}function du(t){var e=Cn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=yt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((Er&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,at.lanes|=f,Tr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Hn(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,at.lanes|=s,Tr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hu(t){var e=Cn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Hn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function rg(){}function sg(t,e){var n=at,i=Cn(),r=e(),s=!Hn(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,Jf(lg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,Ao(9,ag.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(ee(349));Er&30||og(n,e,r)}return r}function og(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=at.updateQueue,e===null?(e={lastEffect:null,stores:null},at.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ag(t,e,n,i){e.value=n,e.getSnapshot=i,ug(e)&&cg(t)}function lg(t,e,n){return n(function(){ug(e)&&cg(t)})}function ug(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function cg(t){var e=_i(t,1);e!==null&&Bn(e,t,1,-1)}function Sh(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:t},e.queue=t,t=t.dispatch=N0.bind(null,at,t),[e.memoizedState,t]}function Ao(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=at.updateQueue,e===null?(e={lastEffect:null,stores:null},at.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function fg(){return Cn().memoizedState}function Na(t,e,n,i){var r=Xn();at.flags|=t,r.memoizedState=Ao(1|e,n,void 0,i===void 0?null:i)}function Cl(t,e,n,i){var r=Cn();i=i===void 0?null:i;var s=void 0;if(yt!==null){var o=yt.memoizedState;if(s=o.destroy,i!==null&&Kf(i,o.deps)){r.memoizedState=Ao(e,n,s,i);return}}at.flags|=t,r.memoizedState=Ao(1|e,n,s,i)}function yh(t,e){return Na(8390656,8,t,e)}function Jf(t,e){return Cl(2048,8,t,e)}function dg(t,e){return Cl(4,2,t,e)}function hg(t,e){return Cl(4,4,t,e)}function pg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mg(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4,4,pg.bind(null,e,t),n)}function ed(){}function gg(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function _g(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function vg(t,e,n){return Er&21?(Hn(n,e)||(n=Em(),at.lanes|=n,Tr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function L0(t,e){var n=Ze;Ze=n!==0&&4>n?n:4,t(!0);var i=fu.transition;fu.transition={};try{t(!1),e()}finally{Ze=n,fu.transition=i}}function xg(){return Cn().memoizedState}function D0(t,e,n){var i=Wi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Sg(t))yg(e,n);else if(n=tg(t,e,n,i),n!==null){var r=Yt();Bn(n,t,i,r),Mg(n,e,i)}}function N0(t,e,n){var i=Wi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sg(t))yg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Hn(a,o)){var l=e.interleaved;l===null?(r.next=r,Xf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=tg(t,e,r,i),n!==null&&(r=Yt(),Bn(n,t,i,r),Mg(n,e,i))}}function Sg(t){var e=t.alternate;return t===at||e!==null&&e===at}function yg(t,e){so=al=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Mg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Lf(t,n)}}var ll={readContext:An,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},I0={readContext:An,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:yh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Na(4194308,4,pg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Na(4194308,4,t,e)},useInsertionEffect:function(t,e){return Na(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Xn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=D0.bind(null,at,t),[i.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:Sh,useDebugValue:ed,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=Sh(!1),e=t[0];return t=L0.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=at,r=Xn();if(rt){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Dt===null)throw Error(ee(349));Er&30||og(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,yh(lg.bind(null,i,s,t),[t]),i.flags|=2048,Ao(9,ag.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Xn(),e=Dt.identifierPrefix;if(rt){var n=fi,i=ci;n=(i&~(1<<32-zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=To++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=b0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},U0={readContext:An,useCallback:gg,useContext:An,useEffect:Jf,useImperativeHandle:mg,useInsertionEffect:dg,useLayoutEffect:hg,useMemo:_g,useReducer:du,useRef:fg,useState:function(){return du(wo)},useDebugValue:ed,useDeferredValue:function(t){var e=Cn();return vg(e,yt.memoizedState,t)},useTransition:function(){var t=du(wo)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:rg,useSyncExternalStore:sg,useId:xg,unstable_isNewReconciler:!1},F0={readContext:An,useCallback:gg,useContext:An,useEffect:Jf,useImperativeHandle:mg,useInsertionEffect:dg,useLayoutEffect:hg,useMemo:_g,useReducer:hu,useRef:fg,useState:function(){return hu(wo)},useDebugValue:ed,useDeferredValue:function(t){var e=Cn();return yt===null?e.memoizedState=t:vg(e,yt.memoizedState,t)},useTransition:function(){var t=hu(wo)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:rg,useSyncExternalStore:sg,useId:xg,unstable_isNewReconciler:!1};function In(t,e){if(t&&t.defaultProps){e=lt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Mc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:lt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Rl={isMounted:function(t){return(t=t._reactInternals)?Pr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Wi(t),s=pi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Vi(t,s,r),e!==null&&(Bn(e,t,r,i),La(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Wi(t),s=pi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Vi(t,s,r),e!==null&&(Bn(e,t,r,i),La(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),i=Wi(t),r=pi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Vi(t,r,i),e!==null&&(Bn(e,t,i,n),La(e,t,i))}};function Mh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!vo(n,i)||!vo(r,s):!0}function Eg(t,e,n){var i=!1,r=$i,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(r=tn(e)?yr:Wt.current,i=e.contextTypes,s=(i=i!=null)?vs(t,r):$i),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Rl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Eh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Rl.enqueueReplaceState(e,e.state,null)}function Ec(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},jf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=An(s):(s=tn(e)?yr:Wt.current,r.context=vs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Rl.enqueueReplaceState(r,r.state,null),sl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ms(t,e){try{var n="",i=e;do n+=cv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function pu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Tc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var O0=typeof WeakMap=="function"?WeakMap:Map;function Tg(t,e,n){n=pi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){cl||(cl=!0,Ic=i),Tc(t,e)},n}function wg(t,e,n){n=pi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Tc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Tc(t,e),typeof i!="function"&&(Gi===null?Gi=new Set([this]):Gi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Th(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new O0;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Z0.bind(null,t,e,n),e.then(t,t))}function wh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ah(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pi(-1,1),e.tag=2,Vi(n,e,1))),n.lanes|=1),t)}var k0=Mi.ReactCurrentOwner,Jt=!1;function jt(t,e,n,i){e.child=t===null?eg(e,null,n,i):Ss(e,t.child,n,i)}function Ch(t,e,n,i,r){n=n.render;var s=e.ref;return ds(e,r),i=Zf(t,e,n,i,s,r),n=Qf(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(rt&&n&&zf(e),e.flags|=1,jt(t,e,i,r),e.child)}function Rh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!ld(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ag(t,e,s,i,r)):(t=Oa(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(o,i)&&t.ref===e.ref)return vi(t,e,r)}return e.flags|=1,t=Xi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ag(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(vo(s,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,vi(t,e,r)}return wc(t,e,n,i,r)}function Cg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(os,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,et(os,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,et(os,cn),cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,et(os,cn),cn|=i;return jt(t,e,r,n),e.child}function Rg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function wc(t,e,n,i,r){var s=tn(n)?yr:Wt.current;return s=vs(e,s),ds(e,r),n=Zf(t,e,n,i,s,r),i=Qf(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(rt&&i&&zf(e),e.flags|=1,jt(t,e,n,r),e.child)}function Ph(t,e,n,i,r){if(tn(n)){var s=!0;el(e)}else s=!1;if(ds(e,r),e.stateNode===null)Ia(t,e),Eg(e,n,i),Ec(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=An(u):(u=tn(n)?yr:Wt.current,u=vs(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Eh(e,o,i,u),Di=!1;var d=e.memoizedState;o.state=d,sl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||en.current||Di?(typeof f=="function"&&(Mc(e,n,f,i),l=e.memoizedState),(a=Di||Mh(e,n,a,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,ng(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:In(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=tn(n)?yr:Wt.current,l=vs(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Eh(e,o,i,l),Di=!1,d=e.memoizedState,o.state=d,sl(e,i,o,r);var v=e.memoizedState;a!==h||d!==v||en.current||Di?(typeof p=="function"&&(Mc(e,n,p,i),v=e.memoizedState),(u=Di||Mh(e,n,u,i,d,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Ac(t,e,n,i,s,r)}function Ac(t,e,n,i,r,s){Rg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&ph(e,n,!1),vi(t,e,s);i=e.stateNode,k0.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ss(e,t.child,null,s),e.child=Ss(e,null,a,s)):jt(t,e,a,s),e.memoizedState=i.state,r&&ph(e,n,!0),e.child}function Pg(t){var e=t.stateNode;e.pendingContext?hh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hh(t,e.context,!1),Yf(t,e.containerInfo)}function bh(t,e,n,i,r){return xs(),Hf(r),e.flags|=256,jt(t,e,n,i),e.child}var Cc={dehydrated:null,treeContext:null,retryLane:0};function Rc(t){return{baseLanes:t,cachePool:null,transitions:null}}function bg(t,e,n){var i=e.pendingProps,r=ot.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),et(ot,r&1),t===null)return Sc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ll(o,i,0,null),t=Sr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Rc(n),e.memoizedState=Cc,t):td(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return z0(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Xi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Xi(a,s):(s=Sr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Rc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Cc,i}return s=t.child,t=s.sibling,i=Xi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function td(t,e){return e=Ll({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Jo(t,e,n,i){return i!==null&&Hf(i),Ss(e,t.child,null,n),t=td(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function z0(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=pu(Error(ee(422))),Jo(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ll({mode:"visible",children:i.children},r,0,null),s=Sr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ss(e,t.child,null,o),e.child.memoizedState=Rc(o),e.memoizedState=Cc,s);if(!(e.mode&1))return Jo(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=pu(s,i,void 0),Jo(t,e,o,i)}if(a=(o&t.childLanes)!==0,Jt||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,_i(t,r),Bn(i,t,r,-1))}return ad(),i=pu(Error(ee(421))),Jo(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Q0.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,fn=Hi(r.nextSibling),dn=e,rt=!0,Fn=null,t!==null&&(xn[Sn++]=ci,xn[Sn++]=fi,xn[Sn++]=Mr,ci=t.id,fi=t.overflow,Mr=e),e=td(e,i.children),e.flags|=4096,e)}function Lh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),yc(t.return,e,n)}function mu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Lg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(jt(t,e,i.children,n),i=ot.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lh(t,n,e);else if(t.tag===19)Lh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(et(ot,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ol(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),mu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ol(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}mu(e,!0,n,null,s);break;case"together":mu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ia(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Tr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=Xi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function B0(t,e,n){switch(e.tag){case 3:Pg(e),xs();break;case 5:ig(e);break;case 1:tn(e.type)&&el(e);break;case 4:Yf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;et(il,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(et(ot,ot.current&1),e.flags|=128,null):n&e.child.childLanes?bg(t,e,n):(et(ot,ot.current&1),t=vi(t,e,n),t!==null?t.sibling:null);et(ot,ot.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Lg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),et(ot,ot.current),i)break;return null;case 22:case 23:return e.lanes=0,Cg(t,e,n)}return vi(t,e,n)}var Dg,Pc,Ng,Ig;Dg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pc=function(){};Ng=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,gr(Zn.current);var s=null;switch(n){case"input":r=Zu(t,r),i=Zu(t,i),s=[];break;case"select":r=lt({},r,{value:void 0}),i=lt({},i,{value:void 0}),s=[];break;case"textarea":r=ec(t,r),i=ec(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Qa)}nc(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(co.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(co.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&tt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ig=function(t,e,n,i){n!==i&&(e.flags|=4)};function Hs(t,e){if(!rt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function H0(t,e,n){var i=e.pendingProps;switch(Bf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return tn(e.type)&&Ja(),zt(e),null;case 3:return i=e.stateNode,ys(),it(en),it(Wt),$f(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Zo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(Oc(Fn),Fn=null))),Pc(t,e),zt(e),null;case 5:qf(e);var r=gr(Eo.current);if(n=e.type,t!==null&&e.stateNode!=null)Ng(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return zt(e),null}if(t=gr(Zn.current),Zo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[qn]=e,i[yo]=s,t=(e.mode&1)!==0,n){case"dialog":tt("cancel",i),tt("close",i);break;case"iframe":case"object":case"embed":tt("load",i);break;case"video":case"audio":for(r=0;r<Qs.length;r++)tt(Qs[r],i);break;case"source":tt("error",i);break;case"img":case"image":case"link":tt("error",i),tt("load",i);break;case"details":tt("toggle",i);break;case"input":Bd(i,s),tt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},tt("invalid",i);break;case"textarea":Vd(i,s),tt("invalid",i)}nc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ko(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ko(i.textContent,a,t),r=["children",""+a]):co.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&tt("scroll",i)}switch(n){case"input":Vo(i),Hd(i,s,!0);break;case"textarea":Vo(i),Gd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Qa)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=lm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[qn]=e,t[yo]=i,Dg(t,e,!1,!1),e.stateNode=t;e:{switch(o=ic(n,i),n){case"dialog":tt("cancel",t),tt("close",t),r=i;break;case"iframe":case"object":case"embed":tt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Qs.length;r++)tt(Qs[r],t);r=i;break;case"source":tt("error",t),r=i;break;case"img":case"image":case"link":tt("error",t),tt("load",t),r=i;break;case"details":tt("toggle",t),r=i;break;case"input":Bd(t,i),r=Zu(t,i),tt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=lt({},i,{value:void 0}),tt("invalid",t);break;case"textarea":Vd(t,i),r=ec(t,i),tt("invalid",t);break;default:r=i}nc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?fm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&um(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&fo(t,l):typeof l=="number"&&fo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(co.hasOwnProperty(s)?l!=null&&s==="onScroll"&&tt("scroll",t):l!=null&&wf(t,s,l,o))}switch(n){case"input":Vo(t),Hd(t,i,!1);break;case"textarea":Vo(t),Gd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+qi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ls(t,!!i.multiple,s,!1):i.defaultValue!=null&&ls(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Qa)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)Ig(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=gr(Eo.current),gr(Zn.current),Zo(e)){if(i=e.stateNode,n=e.memoizedProps,i[qn]=e,(s=i.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:Ko(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ko(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[qn]=e,e.stateNode=i}return zt(e),null;case 13:if(it(ot),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(rt&&fn!==null&&e.mode&1&&!(e.flags&128))Qm(),xs(),e.flags|=98560,s=!1;else if(s=Zo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[qn]=e}else xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else Fn!==null&&(Oc(Fn),Fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ot.current&1?Mt===0&&(Mt=3):ad())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return ys(),Pc(t,e),t===null&&xo(e.stateNode.containerInfo),zt(e),null;case 10:return Wf(e.type._context),zt(e),null;case 17:return tn(e.type)&&Ja(),zt(e),null;case 19:if(it(ot),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Hs(s,!1);else{if(Mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ol(t),o!==null){for(e.flags|=128,Hs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return et(ot,ot.current&1|2),e.child}t=t.sibling}s.tail!==null&&ht()>Es&&(e.flags|=128,i=!0,Hs(s,!1),e.lanes=4194304)}else{if(!i)if(t=ol(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Hs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!rt)return zt(e),null}else 2*ht()-s.renderingStartTime>Es&&n!==1073741824&&(e.flags|=128,i=!0,Hs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ht(),e.sibling=null,n=ot.current,et(ot,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return od(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?cn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function V0(t,e){switch(Bf(e),e.tag){case 1:return tn(e.type)&&Ja(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ys(),it(en),it(Wt),$f(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qf(e),null;case 13:if(it(ot),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return it(ot),null;case 4:return ys(),null;case 10:return Wf(e.type._context),null;case 22:case 23:return od(),null;case 24:return null;default:return null}}var ea=!1,Vt=!1,G0=typeof WeakSet=="function"?WeakSet:Set,de=null;function ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){dt(t,e,i)}else n.current=null}function bc(t,e,n){try{n()}catch(i){dt(t,e,i)}}var Dh=!1;function W0(t,e){if(hc=$a,t=zm(),kf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++f===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pc={focusedElem:t,selectionRange:n},$a=!1,de=e;de!==null;)if(e=de,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,de=t;else for(;de!==null;){e=de;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,c=e.stateNode,g=c.getSnapshotBeforeUpdate(e.elementType===e.type?x:In(e.type,x),m);c.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(y){dt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}return v=Dh,Dh=!1,v}function oo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&bc(e,n,s)}r=r.next}while(r!==i)}}function Pl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Lc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ug(t){var e=t.alternate;e!==null&&(t.alternate=null,Ug(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qn],delete e[yo],delete e[_c],delete e[A0],delete e[C0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Fg(t){return t.tag===5||t.tag===3||t.tag===4}function Nh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Fg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Dc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Qa));else if(i!==4&&(t=t.child,t!==null))for(Dc(t,e,n),t=t.sibling;t!==null;)Dc(t,e,n),t=t.sibling}function Nc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Nc(t,e,n),t=t.sibling;t!==null;)Nc(t,e,n),t=t.sibling}var Ut=null,Un=!1;function Ti(t,e,n){for(n=n.child;n!==null;)Og(t,e,n),n=n.sibling}function Og(t,e,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(yl,n)}catch{}switch(n.tag){case 5:Vt||ss(n,e);case 6:var i=Ut,r=Un;Ut=null,Ti(t,e,n),Ut=i,Un=r,Ut!==null&&(Un?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(Un?(t=Ut,n=n.stateNode,t.nodeType===8?lu(t.parentNode,n):t.nodeType===1&&lu(t,n),go(t)):lu(Ut,n.stateNode));break;case 4:i=Ut,r=Un,Ut=n.stateNode.containerInfo,Un=!0,Ti(t,e,n),Ut=i,Un=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&bc(n,e,o),r=r.next}while(r!==i)}Ti(t,e,n);break;case 1:if(!Vt&&(ss(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){dt(n,e,a)}Ti(t,e,n);break;case 21:Ti(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,Ti(t,e,n),Vt=i):Ti(t,e,n);break;default:Ti(t,e,n)}}function Ih(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new G0),e.forEach(function(i){var r=J0.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ut=a.stateNode,Un=!1;break e;case 3:Ut=a.stateNode.containerInfo,Un=!0;break e;case 4:Ut=a.stateNode.containerInfo,Un=!0;break e}a=a.return}if(Ut===null)throw Error(ee(160));Og(s,o,r),Ut=null,Un=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){dt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)kg(e,t),e=e.sibling}function kg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bn(e,t),Wn(t),i&4){try{oo(3,t,t.return),Pl(3,t)}catch(x){dt(t,t.return,x)}try{oo(5,t,t.return)}catch(x){dt(t,t.return,x)}}break;case 1:bn(e,t),Wn(t),i&512&&n!==null&&ss(n,n.return);break;case 5:if(bn(e,t),Wn(t),i&512&&n!==null&&ss(n,n.return),t.flags&32){var r=t.stateNode;try{fo(r,"")}catch(x){dt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&om(r,s),ic(a,o);var u=ic(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?fm(r,h):f==="dangerouslySetInnerHTML"?um(r,h):f==="children"?fo(r,h):wf(r,f,h,u)}switch(a){case"input":Qu(r,s);break;case"textarea":am(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ls(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?ls(r,!!s.multiple,s.defaultValue,!0):ls(r,!!s.multiple,s.multiple?[]:"",!1))}r[yo]=s}catch(x){dt(t,t.return,x)}}break;case 6:if(bn(e,t),Wn(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){dt(t,t.return,x)}}break;case 3:if(bn(e,t),Wn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{go(e.containerInfo)}catch(x){dt(t,t.return,x)}break;case 4:bn(e,t),Wn(t);break;case 13:bn(e,t),Wn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(rd=ht())),i&4&&Ih(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(u=Vt)||f,bn(e,t),Vt=u):bn(e,t),Wn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(de=t,f=t.child;f!==null;){for(h=de=f;de!==null;){switch(d=de,p=d.child,d.tag){case 0:case 11:case 14:case 15:oo(4,d,d.return);break;case 1:ss(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){dt(i,n,x)}}break;case 5:ss(d,d.return);break;case 22:if(d.memoizedState!==null){Fh(h);continue}}p!==null?(p.return=d,de=p):Fh(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=cm("display",o))}catch(x){dt(t,t.return,x)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){dt(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:bn(e,t),Wn(t),i&4&&Ih(t);break;case 21:break;default:bn(e,t),Wn(t)}}function Wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Fg(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(fo(r,""),i.flags&=-33);var s=Nh(t);Nc(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Nh(t);Dc(t,a,o);break;default:throw Error(ee(161))}}catch(l){dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function X0(t,e,n){de=t,zg(t)}function zg(t,e,n){for(var i=(t.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ea;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Vt;a=ea;var u=Vt;if(ea=o,(Vt=l)&&!u)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?Oh(r):l!==null?(l.return=o,de=l):Oh(r);for(;s!==null;)de=s,zg(s),s=s.sibling;de=r,ea=a,Vt=u}Uh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,de=s):Uh(t)}}function Uh(t){for(;de!==null;){var e=de;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||Pl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:In(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}xh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&go(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Vt||e.flags&512&&Lc(e)}catch(d){dt(e,e.return,d)}}if(e===t){de=null;break}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}}function Fh(t){for(;de!==null;){var e=de;if(e===t){de=null;break}var n=e.sibling;if(n!==null){n.return=e.return,de=n;break}de=e.return}}function Oh(t){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Pl(4,e)}catch(l){dt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){dt(e,r,l)}}var s=e.return;try{Lc(e)}catch(l){dt(e,s,l)}break;case 5:var o=e.return;try{Lc(e)}catch(l){dt(e,o,l)}}}catch(l){dt(e,e.return,l)}if(e===t){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var j0=Math.ceil,ul=Mi.ReactCurrentDispatcher,nd=Mi.ReactCurrentOwner,wn=Mi.ReactCurrentBatchConfig,We=0,Dt=null,St=null,Ft=0,cn=0,os=Qi(0),Mt=0,Co=null,Tr=0,bl=0,id=0,ao=null,Zt=null,rd=0,Es=1/0,ai=null,cl=!1,Ic=null,Gi=null,ta=!1,Oi=null,fl=0,lo=0,Uc=null,Ua=-1,Fa=0;function Yt(){return We&6?ht():Ua!==-1?Ua:Ua=ht()}function Wi(t){return t.mode&1?We&2&&Ft!==0?Ft&-Ft:P0.transition!==null?(Fa===0&&(Fa=Em()),Fa):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:bm(t.type)),t):1}function Bn(t,e,n,i){if(50<lo)throw lo=0,Uc=null,Error(ee(185));bo(t,n,i),(!(We&2)||t!==Dt)&&(t===Dt&&(!(We&2)&&(bl|=n),Mt===4&&Ii(t,Ft)),nn(t,i),n===1&&We===0&&!(e.mode&1)&&(Es=ht()+500,Al&&Ji()))}function nn(t,e){var n=t.callbackNode;Pv(t,e);var i=qa(t,t===Dt?Ft:0);if(i===0)n!==null&&jd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&jd(n),e===1)t.tag===0?R0(kh.bind(null,t)):$m(kh.bind(null,t)),T0(function(){!(We&6)&&Ji()}),n=null;else{switch(Tm(i)){case 1:n=bf;break;case 4:n=ym;break;case 16:n=Ya;break;case 536870912:n=Mm;break;default:n=Ya}n=Yg(n,Bg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Bg(t,e){if(Ua=-1,Fa=0,We&6)throw Error(ee(327));var n=t.callbackNode;if(hs()&&t.callbackNode!==n)return null;var i=qa(t,t===Dt?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=dl(t,i);else{e=i;var r=We;We|=2;var s=Vg();(Dt!==t||Ft!==e)&&(ai=null,Es=ht()+500,xr(t,e));do try{$0();break}catch(a){Hg(t,a)}while(!0);Gf(),ul.current=s,We=r,St!==null?e=0:(Dt=null,Ft=0,e=Mt)}if(e!==0){if(e===2&&(r=lc(t),r!==0&&(i=r,e=Fc(t,r))),e===1)throw n=Co,xr(t,0),Ii(t,i),nn(t,ht()),n;if(e===6)Ii(t,i);else{if(r=t.current.alternate,!(i&30)&&!Y0(r)&&(e=dl(t,i),e===2&&(s=lc(t),s!==0&&(i=s,e=Fc(t,s))),e===1))throw n=Co,xr(t,0),Ii(t,i),nn(t,ht()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:ur(t,Zt,ai);break;case 3:if(Ii(t,i),(i&130023424)===i&&(e=rd+500-ht(),10<e)){if(qa(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Yt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=gc(ur.bind(null,t,Zt,ai),e);break}ur(t,Zt,ai);break;case 4:if(Ii(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-zn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=ht()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*j0(i/1960))-i,10<i){t.timeoutHandle=gc(ur.bind(null,t,Zt,ai),i);break}ur(t,Zt,ai);break;case 5:ur(t,Zt,ai);break;default:throw Error(ee(329))}}}return nn(t,ht()),t.callbackNode===n?Bg.bind(null,t):null}function Fc(t,e){var n=ao;return t.current.memoizedState.isDehydrated&&(xr(t,e).flags|=256),t=dl(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&Oc(e)),t}function Oc(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function Y0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Hn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ii(t,e){for(e&=~id,e&=~bl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zn(e),i=1<<n;t[n]=-1,e&=~i}}function kh(t){if(We&6)throw Error(ee(327));hs();var e=qa(t,0);if(!(e&1))return nn(t,ht()),null;var n=dl(t,e);if(t.tag!==0&&n===2){var i=lc(t);i!==0&&(e=i,n=Fc(t,i))}if(n===1)throw n=Co,xr(t,0),Ii(t,e),nn(t,ht()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ur(t,Zt,ai),nn(t,ht()),null}function sd(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(Es=ht()+500,Al&&Ji())}}function wr(t){Oi!==null&&Oi.tag===0&&!(We&6)&&hs();var e=We;We|=1;var n=wn.transition,i=Ze;try{if(wn.transition=null,Ze=1,t)return t()}finally{Ze=i,wn.transition=n,We=e,!(We&6)&&Ji()}}function od(){cn=os.current,it(os)}function xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,E0(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(Bf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ja();break;case 3:ys(),it(en),it(Wt),$f();break;case 5:qf(i);break;case 4:ys();break;case 13:it(ot);break;case 19:it(ot);break;case 10:Wf(i.type._context);break;case 22:case 23:od()}n=n.return}if(Dt=t,St=t=Xi(t.current,null),Ft=cn=e,Mt=0,Co=null,id=bl=Tr=0,Zt=ao=null,mr!==null){for(e=0;e<mr.length;e++)if(n=mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}mr=null}return t}function Hg(t,e){do{var n=St;try{if(Gf(),Da.current=ll,al){for(var i=at.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}al=!1}if(Er=0,Pt=yt=at=null,so=!1,To=0,nd.current=null,n===null||n.return===null){Mt=1,Co=e,St=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=wh(o);if(p!==null){p.flags&=-257,Ah(p,o,a,s,e),p.mode&1&&Th(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){Th(s,u,e),ad();break e}l=Error(ee(426))}}else if(rt&&a.mode&1){var m=wh(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Ah(m,o,a,s,e),Hf(Ms(l,a));break e}}s=l=Ms(l,a),Mt!==4&&(Mt=2),ao===null?ao=[s]:ao.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=Tg(s,l,e);vh(s,c);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Gi===null||!Gi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=wg(s,a,e);vh(s,y);break e}}s=s.return}while(s!==null)}Wg(n)}catch(R){e=R,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function Vg(){var t=ul.current;return ul.current=ll,t===null?ll:t}function ad(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),Dt===null||!(Tr&268435455)&&!(bl&268435455)||Ii(Dt,Ft)}function dl(t,e){var n=We;We|=2;var i=Vg();(Dt!==t||Ft!==e)&&(ai=null,xr(t,e));do try{q0();break}catch(r){Hg(t,r)}while(!0);if(Gf(),We=n,ul.current=i,St!==null)throw Error(ee(261));return Dt=null,Ft=0,Mt}function q0(){for(;St!==null;)Gg(St)}function $0(){for(;St!==null&&!Sv();)Gg(St)}function Gg(t){var e=jg(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?Wg(t):St=e,nd.current=null}function Wg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=V0(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,St=null;return}}else if(n=H0(n,e,cn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Mt===0&&(Mt=5)}function ur(t,e,n){var i=Ze,r=wn.transition;try{wn.transition=null,Ze=1,K0(t,e,n,i)}finally{wn.transition=r,Ze=i}return null}function K0(t,e,n,i){do hs();while(Oi!==null);if(We&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(bv(t,s),t===Dt&&(St=Dt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ta||(ta=!0,Yg(Ya,function(){return hs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wn.transition,wn.transition=null;var o=Ze;Ze=1;var a=We;We|=4,nd.current=null,W0(t,n),kg(n,t),g0(pc),$a=!!hc,pc=hc=null,t.current=n,X0(n),yv(),We=a,Ze=o,wn.transition=s}else t.current=n;if(ta&&(ta=!1,Oi=t,fl=r),s=t.pendingLanes,s===0&&(Gi=null),Tv(n.stateNode),nn(t,ht()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(cl)throw cl=!1,t=Ic,Ic=null,t;return fl&1&&t.tag!==0&&hs(),s=t.pendingLanes,s&1?t===Uc?lo++:(lo=0,Uc=t):lo=0,Ji(),null}function hs(){if(Oi!==null){var t=Tm(fl),e=wn.transition,n=Ze;try{if(wn.transition=null,Ze=16>t?16:t,Oi===null)var i=!1;else{if(t=Oi,Oi=null,fl=0,We&6)throw Error(ee(331));var r=We;for(We|=4,de=t.current;de!==null;){var s=de,o=s.child;if(de.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(de=u;de!==null;){var f=de;switch(f.tag){case 0:case 11:case 15:oo(8,f,s)}var h=f.child;if(h!==null)h.return=f,de=h;else for(;de!==null;){f=de;var d=f.sibling,p=f.return;if(Ug(f),f===u){de=null;break}if(d!==null){d.return=p,de=d;break}de=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}de=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oo(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,de=c;break e}de=s.return}}var g=t.current;for(de=g;de!==null;){o=de;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,de=_;else e:for(o=g;de!==null;){if(a=de,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Pl(9,a)}}catch(R){dt(a,a.return,R)}if(a===o){de=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,de=y;break e}de=a.return}}if(We=r,Ji(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(yl,t)}catch{}i=!0}return i}finally{Ze=n,wn.transition=e}}return!1}function zh(t,e,n){e=Ms(n,e),e=Tg(t,e,1),t=Vi(t,e,1),e=Yt(),t!==null&&(bo(t,1,e),nn(t,e))}function dt(t,e,n){if(t.tag===3)zh(t,t,n);else for(;e!==null;){if(e.tag===3){zh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Gi===null||!Gi.has(i))){t=Ms(n,t),t=wg(e,t,1),e=Vi(e,t,1),t=Yt(),e!==null&&(bo(e,1,t),nn(e,t));break}}e=e.return}}function Z0(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Ft&n)===n&&(Mt===4||Mt===3&&(Ft&130023424)===Ft&&500>ht()-rd?xr(t,0):id|=n),nn(t,e)}function Xg(t,e){e===0&&(t.mode&1?(e=Xo,Xo<<=1,!(Xo&130023424)&&(Xo=4194304)):e=1);var n=Yt();t=_i(t,e),t!==null&&(bo(t,e,n),nn(t,n))}function Q0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Xg(t,n)}function J0(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),Xg(t,n)}var jg;jg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,B0(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,rt&&e.flags&1048576&&Km(e,nl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ia(t,e),t=e.pendingProps;var r=vs(e,Wt.current);ds(e,n),r=Zf(null,e,i,t,r,n);var s=Qf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(s=!0,el(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,jf(e),r.updater=Rl,e.stateNode=r,r._reactInternals=e,Ec(e,i,t,n),e=Ac(null,e,i,!0,s,n)):(e.tag=0,rt&&s&&zf(e),jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ia(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=tx(i),t=In(i,t),r){case 0:e=wc(null,e,i,t,n);break e;case 1:e=Ph(null,e,i,t,n);break e;case 11:e=Ch(null,e,i,t,n);break e;case 14:e=Rh(null,e,i,In(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),wc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Ph(t,e,i,r,n);case 3:e:{if(Pg(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,ng(t,e),sl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ms(Error(ee(423)),e),e=bh(t,e,i,n,r);break e}else if(i!==r){r=Ms(Error(ee(424)),e),e=bh(t,e,i,n,r);break e}else for(fn=Hi(e.stateNode.containerInfo.firstChild),dn=e,rt=!0,Fn=null,n=eg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xs(),i===r){e=vi(t,e,n);break e}jt(t,e,i,n)}e=e.child}return e;case 5:return ig(e),t===null&&Sc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,mc(i,r)?o=null:s!==null&&mc(i,s)&&(e.flags|=32),Rg(t,e),jt(t,e,o,n),e.child;case 6:return t===null&&Sc(e),null;case 13:return bg(t,e,n);case 4:return Yf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ss(e,null,i,n):jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Ch(t,e,i,r,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,et(il,i._currentValue),i._currentValue=o,s!==null)if(Hn(s.value,o)){if(s.children===r.children&&!en.current){e=vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=pi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),yc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),yc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ds(e,n),r=An(r),i=i(r),e.flags|=1,jt(t,e,i,n),e.child;case 14:return i=e.type,r=In(i,e.pendingProps),r=In(i.type,r),Rh(t,e,i,r,n);case 15:return Ag(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Ia(t,e),e.tag=1,tn(i)?(t=!0,el(e)):t=!1,ds(e,n),Eg(e,i,r),Ec(e,i,r,n),Ac(null,e,i,!0,t,n);case 19:return Lg(t,e,n);case 22:return Cg(t,e,n)}throw Error(ee(156,e.tag))};function Yg(t,e){return Sm(t,e)}function ex(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(t,e,n,i){return new ex(t,e,n,i)}function ld(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tx(t){if(typeof t=="function")return ld(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Cf)return 11;if(t===Rf)return 14}return 2}function Xi(t,e){var n=t.alternate;return n===null?(n=Mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Oa(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")ld(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Kr:return Sr(n.children,r,s,e);case Af:o=8,r|=8;break;case Yu:return t=Mn(12,n,e,r|2),t.elementType=Yu,t.lanes=s,t;case qu:return t=Mn(13,n,e,r),t.elementType=qu,t.lanes=s,t;case $u:return t=Mn(19,n,e,r),t.elementType=$u,t.lanes=s,t;case im:return Ll(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tm:o=10;break e;case nm:o=9;break e;case Cf:o=11;break e;case Rf:o=14;break e;case Li:o=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=Mn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Sr(t,e,n,i){return t=Mn(7,t,i,e),t.lanes=n,t}function Ll(t,e,n,i){return t=Mn(22,t,i,e),t.elementType=im,t.lanes=n,t.stateNode={isHidden:!1},t}function gu(t,e,n){return t=Mn(6,t,null,e),t.lanes=n,t}function _u(t,e,n){return e=Mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function nx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zl(0),this.expirationTimes=Zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ud(t,e,n,i,r,s,o,a,l){return t=new nx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jf(s),t}function ix(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$r,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function qg(t){if(!t)return $i;t=t._reactInternals;e:{if(Pr(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(tn(n))return qm(t,n,e)}return e}function $g(t,e,n,i,r,s,o,a,l){return t=ud(n,i,!0,t,r,s,o,a,l),t.context=qg(null),n=t.current,i=Yt(),r=Wi(n),s=pi(i,r),s.callback=e??null,Vi(n,s,r),t.current.lanes=r,bo(t,r,i),nn(t,i),t}function Dl(t,e,n,i){var r=e.current,s=Yt(),o=Wi(r);return n=qg(n),e.context===null?e.context=n:e.pendingContext=n,e=pi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Vi(r,e,o),t!==null&&(Bn(t,r,o,s),La(t,r,o)),o}function hl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function cd(t,e){Bh(t,e),(t=t.alternate)&&Bh(t,e)}function rx(){return null}var Kg=typeof reportError=="function"?reportError:function(t){console.error(t)};function fd(t){this._internalRoot=t}Nl.prototype.render=fd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));Dl(t,e,null,null)};Nl.prototype.unmount=fd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wr(function(){Dl(null,t,null,null)}),e[gi]=null}};function Nl(t){this._internalRoot=t}Nl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Cm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ni.length&&e!==0&&e<Ni[n].priority;n++);Ni.splice(n,0,t),n===0&&Pm(t)}};function dd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Il(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hh(){}function sx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=hl(o);s.call(u)}}var o=$g(e,i,t,0,null,!1,!1,"",Hh);return t._reactRootContainer=o,t[gi]=o.current,xo(t.nodeType===8?t.parentNode:t),wr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=hl(l);a.call(u)}}var l=ud(t,0,!1,null,null,!1,!1,"",Hh);return t._reactRootContainer=l,t[gi]=l.current,xo(t.nodeType===8?t.parentNode:t),wr(function(){Dl(e,l,n,i)}),l}function Ul(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=hl(o);a.call(l)}}Dl(e,o,t,r)}else o=sx(n,e,t,r,i);return hl(o)}wm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zs(e.pendingLanes);n!==0&&(Lf(e,n|1),nn(e,ht()),!(We&6)&&(Es=ht()+500,Ji()))}break;case 13:wr(function(){var i=_i(t,1);if(i!==null){var r=Yt();Bn(i,t,1,r)}}),cd(t,1)}};Df=function(t){if(t.tag===13){var e=_i(t,134217728);if(e!==null){var n=Yt();Bn(e,t,134217728,n)}cd(t,134217728)}};Am=function(t){if(t.tag===13){var e=Wi(t),n=_i(t,e);if(n!==null){var i=Yt();Bn(n,t,e,i)}cd(t,e)}};Cm=function(){return Ze};Rm=function(t,e){var n=Ze;try{return Ze=t,e()}finally{Ze=n}};sc=function(t,e,n){switch(e){case"input":if(Qu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=wl(i);if(!r)throw Error(ee(90));sm(i),Qu(i,r)}}}break;case"textarea":am(t,n);break;case"select":e=n.value,e!=null&&ls(t,!!n.multiple,e,!1)}};pm=sd;mm=wr;var ox={usingClientEntryPoint:!1,Events:[Do,es,wl,dm,hm,sd]},Vs={findFiberByHostInstance:pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ax={bundleType:Vs.bundleType,version:Vs.version,rendererPackageName:Vs.rendererPackageName,rendererConfig:Vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vm(t),t===null?null:t.stateNode},findFiberByHostInstance:Vs.findFiberByHostInstance||rx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!na.isDisabled&&na.supportsFiber)try{yl=na.inject(ax),Kn=na}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ox;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dd(e))throw Error(ee(200));return ix(t,e,null,n)};mn.createRoot=function(t,e){if(!dd(t))throw Error(ee(299));var n=!1,i="",r=Kg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ud(t,1,!1,null,null,n,!1,i,r),t[gi]=e.current,xo(t.nodeType===8?t.parentNode:t),new fd(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=vm(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return wr(t)};mn.hydrate=function(t,e,n){if(!Il(e))throw Error(ee(200));return Ul(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!dd(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Kg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$g(e,null,t,1,n??null,r,!1,s,o),t[gi]=e.current,xo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Nl(e)};mn.render=function(t,e,n){if(!Il(e))throw Error(ee(200));return Ul(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!Il(t))throw Error(ee(40));return t._reactRootContainer?(wr(function(){Ul(null,null,t,!1,function(){t._reactRootContainer=null,t[gi]=null})}),!0):!1};mn.unstable_batchedUpdates=sd;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Il(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return Ul(t,e,n,!1,i)};mn.version="18.3.1-next-f1338f8080-20240426";function Zg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zg)}catch(t){console.error(t)}}Zg(),Zp.exports=mn;var lx=Zp.exports,Qg,Vh=lx;Qg=Vh.createRoot,Vh.hydrateRoot;const Gt={POINTS_PER_CORRECT:10,TOP_SCORES_COUNT:3,HIGH_SCORES_KEY:"aiDrawGame_scores",CAMERA_Z:4.5,OBJECT_ROTATION_SPEED:.008,OBJECT_FLOAT_SPEED:.6,OBJECT_FLOAT_AMOUNT:.07,SHADER_TIME_SPEED:.4,SHADER_NOISE_SCALE:4,SHADER_GLOW_INTENSITY:.4,FEEDBACK_DURATION_MS:800,TRANSITION_DURATION_MS:400},Jg={shapes:{label:"Shapes",emoji:"🔷",items:[{id:"snowman",label:"Snowman",color:[.95,.97,1],aliases:["snow man"]},{id:"donut",label:"Donut",color:[.9,.55,.25],aliases:["doughnut","torus","ring"]},{id:"diamond",label:"Diamond",color:[.45,.85,1],aliases:["gem","jewel"]},{id:"pyramid",label:"Pyramid",color:[.95,.82,.25],aliases:[]},{id:"cube",label:"Cube",color:[.5,.38,.95],aliases:["box","square"]}]},space:{label:"Space",emoji:"🚀",items:[{id:"saturn",label:"Saturn",color:[.92,.74,.42],aliases:["planet","ringed planet"]},{id:"moon",label:"Moon",color:[.82,.82,.76],aliases:["crescent","lunar"]},{id:"rocket",label:"Rocket",color:[.75,.22,.22],aliases:["spaceship","spacecraft"]},{id:"ufo",label:"UFO",color:[.35,.92,.5],aliases:["flying saucer","alien ship"]},{id:"comet",label:"Comet",color:[.55,.7,1],aliases:["meteor","shooting star"]}]},nature:{label:"Nature",emoji:"🌿",items:[{id:"tree",label:"Tree",color:[.18,.68,.22],aliases:["pine","fir","christmas tree"]},{id:"apple",label:"Apple",color:[.92,.18,.18],aliases:["fruit"]},{id:"mushroom",label:"Mushroom",color:[.82,.3,.18],aliases:["toadstool","fungi","fungus"]},{id:"mountain",label:"Mountain",color:[.5,.52,.62],aliases:["hill","volcano","peak"]},{id:"flower",label:"Flower",color:[.95,.4,.72],aliases:["daisy","rose","bloom"]}]}};function hd(){try{const t=localStorage.getItem(Gt.HIGH_SCORES_KEY);return t?JSON.parse(t):[]}catch{return[]}}function ux(t,e){const n=hd();n.push({name:t.trim()||"Anonymous",score:e,date:new Date().toLocaleDateString()}),n.sort((r,s)=>s.score-r.score);const i=n.slice(0,Gt.TOP_SCORES_COUNT);return localStorage.setItem(Gt.HIGH_SCORES_KEY,JSON.stringify(i)),i}function cx(t){if(t<=0)return!1;const e=hd();return e.length<Gt.TOP_SCORES_COUNT?!0:t>e[e.length-1].score}function e_({compact:t=!1}){const e=hd();if(e.length===0)return me.jsx("div",{className:"scoreboard scoreboard--empty",children:me.jsx("p",{children:"No high scores yet — play to set one!"})});const n=["🥇","🥈","🥉"];return me.jsxs("div",{className:`scoreboard${t?" scoreboard--compact":""}`,children:[me.jsxs("h3",{className:"scoreboard__title",children:["Top ",Gt.TOP_SCORES_COUNT," Scores"]}),me.jsx("ol",{className:"scoreboard__list",children:e.map((i,r)=>me.jsxs("li",{className:"scoreboard__entry",children:[me.jsx("span",{className:"score-medal",children:n[r]??`#${r+1}`}),me.jsx("span",{className:"score-name",children:i.name}),me.jsxs("span",{className:"score-pts",children:[i.score," pts"]}),me.jsx("span",{className:"score-date",children:i.date})]},r))})]})}function fx({onPlay:t}){const[e,n]=xt.useState("shapes");return me.jsxs("div",{className:"home-page",children:[me.jsxs("div",{className:"home-hero",children:[me.jsxs("h1",{className:"home-title",children:[me.jsx("span",{className:"title-highlight",children:"AI"})," Draw & Guess"]}),me.jsx("p",{className:"home-subtitle",children:"Procedural 3D objects — can you name them all?"}),me.jsxs("div",{className:"theme-picker",children:[me.jsx("p",{className:"theme-picker__label",children:"Choose a theme"}),me.jsx("div",{className:"theme-picker__options",children:Object.entries(Jg).map(([i,r])=>me.jsxs("button",{className:`theme-btn${e===i?" theme-btn--active":""}`,onClick:()=>n(i),"aria-pressed":e===i,children:[me.jsx("span",{className:"theme-btn__emoji",children:r.emoji}),r.label]},i))})]}),me.jsx("button",{className:"play-btn",onClick:()=>t(e),children:"▶ Play"})]}),me.jsx("div",{className:"home-scores",children:me.jsx(e_,{compact:!0})})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pd="168",dx=0,Gh=1,hx=2,t_=1,px=2,oi=3,Ki=0,rn=1,ui=2,ji=0,ps=1,Wh=2,Xh=3,jh=4,mx=5,dr=100,gx=101,_x=102,vx=103,xx=104,Sx=200,yx=201,Mx=202,Ex=203,kc=204,zc=205,Tx=206,wx=207,Ax=208,Cx=209,Rx=210,Px=211,bx=212,Lx=213,Dx=214,Nx=0,Ix=1,Ux=2,pl=3,Fx=4,Ox=5,kx=6,zx=7,n_=0,Bx=1,Hx=2,Yi=0,Vx=1,Gx=2,Wx=3,Xx=4,jx=5,Yx=6,qx=7,i_=300,Ts=301,ws=302,Bc=303,Hc=304,Fl=306,Vc=1e3,_r=1001,Gc=1002,En=1003,$x=1004,ia=1005,On=1006,vu=1007,vr=1008,xi=1009,r_=1010,s_=1011,Ro=1012,md=1013,Ar=1014,di=1015,Io=1016,gd=1017,_d=1018,As=1020,o_=35902,a_=1021,l_=1022,kn=1023,u_=1024,c_=1025,ms=1026,Cs=1027,f_=1028,vd=1029,d_=1030,xd=1031,Sd=1033,ka=33776,za=33777,Ba=33778,Ha=33779,Wc=35840,Xc=35841,jc=35842,Yc=35843,qc=36196,$c=37492,Kc=37496,Zc=37808,Qc=37809,Jc=37810,ef=37811,tf=37812,nf=37813,rf=37814,sf=37815,of=37816,af=37817,lf=37818,uf=37819,cf=37820,ff=37821,Va=36492,df=36494,hf=36495,h_=36283,pf=36284,mf=36285,gf=36286,Kx=3200,Zx=3201,Qx=0,Jx=1,Ui="",jn="srgb",er="srgb-linear",yd="display-p3",Ol="display-p3-linear",ml="linear",nt="srgb",gl="rec709",_l="p3",Dr=7680,Yh=519,eS=512,tS=513,nS=514,p_=515,iS=516,rS=517,sS=518,oS=519,qh=35044,$h="300 es",hi=2e3,vl=2001;class Ds{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xu=Math.PI/180,_f=180/Math.PI;function Uo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Qt(t,e,n){return Math.max(e,Math.min(n,t))}function aS(t,e){return(t%e+e)%e}function Su(t,e,n){return(1-n)*t+n*e}function Gs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Kt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,n=0){He.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,n,i,r,s,o,a,l,u){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],h=i[7],d=i[2],p=i[5],v=i[8],x=r[0],m=r[3],c=r[6],g=r[1],_=r[4],y=r[7],R=r[2],w=r[5],A=r[8];return s[0]=o*x+a*g+l*R,s[3]=o*m+a*_+l*w,s[6]=o*c+a*y+l*A,s[1]=u*x+f*g+h*R,s[4]=u*m+f*_+h*w,s[7]=u*c+f*y+h*A,s[2]=d*x+p*g+v*R,s[5]=d*m+p*_+v*w,s[8]=d*c+p*y+v*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=f*o-a*u,d=a*l-f*s,p=u*s-o*l,v=n*h+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=h*x,e[1]=(r*u-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(yu.makeScale(e,n)),this}rotate(e){return this.premultiply(yu.makeRotation(-e)),this}translate(e,n){return this.premultiply(yu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yu=new Ue;function m_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function xl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function lS(){const t=xl("canvas");return t.style.display="block",t}const Kh={};function uo(t){t in Kh||(Kh[t]=!0,console.warn(t))}function uS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Zh=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qh=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ws={[er]:{transfer:ml,primaries:gl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[jn]:{transfer:nt,primaries:gl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ol]:{transfer:ml,primaries:_l,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Qh),fromReference:t=>t.applyMatrix3(Zh)},[yd]:{transfer:nt,primaries:_l,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Qh),fromReference:t=>t.applyMatrix3(Zh).convertLinearToSRGB()}},cS=new Set([er,Ol]),$e={enabled:!0,_workingColorSpace:er,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!cS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ws[e].toReference,r=Ws[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ws[t].primaries},getTransfer:function(t){return t===Ui?ml:Ws[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ws[e].luminanceCoefficients)}};function gs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Mu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Nr;class fS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Nr===void 0&&(Nr=xl("canvas")),Nr.width=e.width,Nr.height=e.height;const i=Nr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Nr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=xl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=gs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(gs(n[i]/255)*255):n[i]=gs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dS=0;class g_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=Uo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Eu(r[o].image)):s.push(Eu(r[o]))}else s=Eu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Eu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?fS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hS=0;class sn extends Ds{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=_r,r=_r,s=On,o=vr,a=kn,l=xi,u=sn.DEFAULT_ANISOTROPY,f=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=Uo(),this.name="",this.source=new g_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==i_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vc:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case Gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vc:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case Gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=i_;sn.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],h=l[8],d=l[1],p=l[5],v=l[9],x=l[2],m=l[6],c=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+x)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,y=(p+1)/2,R=(c+1)/2,w=(f+d)/4,A=(h+x)/4,P=(v+m)/4;return _>y&&_>R?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=w/i,s=A/i):y>R?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=P/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=P/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(h-x)*(h-x)+(d-f)*(d-f));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(h-x)/g,this.z=(d-f)/g,this.w=Math.acos((u+p+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pS extends Ds{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new g_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends pS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class __ extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mS extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(h!==x||l!==d||u!==p||f!==v){let m=1-a;const c=l*d+u*p+f*v+h*x,g=c>=0?1:-1,_=1-c*c;if(_>Number.EPSILON){const R=Math.sqrt(_),w=Math.atan2(R,c*g);m=Math.sin(m*w)/R,a=Math.sin(a*w)/R}const y=a*g;if(l=l*m+d*y,u=u*m+p*y,f=f*m+v*y,h=h*m+x*y,m===1-a){const R=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=R,u*=R,f*=R,h*=R}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],h=s[o],d=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+f*h+l*p-u*d,e[n+1]=l*v+f*d+u*h-a*p,e[n+2]=u*v+f*p+a*d-l*h,e[n+3]=f*v-a*h-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*f*h+u*p*v,this._y=u*p*h-d*f*v,this._z=u*f*v+d*p*h,this._w=u*f*h-d*p*v;break;case"YXZ":this._x=d*f*h+u*p*v,this._y=u*p*h-d*f*v,this._z=u*f*v-d*p*h,this._w=u*f*h+d*p*v;break;case"ZXY":this._x=d*f*h-u*p*v,this._y=u*p*h+d*f*v,this._z=u*f*v+d*p*h,this._w=u*f*h-d*p*v;break;case"ZYX":this._x=d*f*h-u*p*v,this._y=u*p*h+d*f*v,this._z=u*f*v-d*p*h,this._w=u*f*h+d*p*v;break;case"YZX":this._x=d*f*h+u*p*v,this._y=u*p*h+d*f*v,this._z=u*f*v-d*p*h,this._w=u*f*h-d*p*v;break;case"XZY":this._x=d*f*h-u*p*v,this._y=u*p*h-d*f*v,this._z=u*f*v+d*p*h,this._w=u*f*h+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),h=Math.sin((1-n)*f)/u,d=Math.sin(n*f)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Jh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Jh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*u+o*h-a*f,this.y=i+l*f+a*u-s*h,this.z=r+l*h+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tu.copy(this).projectOnVector(e),this.sub(Tu)}reflect(e){return this.sub(Tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tu=new F,Jh=new Fo;class Oo{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ln.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ln.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ln.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(s,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ra.copy(i.boundingBox)),ra.applyMatrix4(e.matrixWorld),this.union(ra)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),sa.subVectors(this.max,Xs),Ir.subVectors(e.a,Xs),Ur.subVectors(e.b,Xs),Fr.subVectors(e.c,Xs),wi.subVectors(Ur,Ir),Ai.subVectors(Fr,Ur),nr.subVectors(Ir,Fr);let n=[0,-wi.z,wi.y,0,-Ai.z,Ai.y,0,-nr.z,nr.y,wi.z,0,-wi.x,Ai.z,0,-Ai.x,nr.z,0,-nr.x,-wi.y,wi.x,0,-Ai.y,Ai.x,0,-nr.y,nr.x,0];return!wu(n,Ir,Ur,Fr,sa)||(n=[1,0,0,0,1,0,0,0,1],!wu(n,Ir,Ur,Fr,sa))?!1:(oa.crossVectors(wi,Ai),n=[oa.x,oa.y,oa.z],wu(n,Ir,Ur,Fr,sa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new F,new F,new F,new F,new F,new F,new F,new F],Ln=new F,ra=new Oo,Ir=new F,Ur=new F,Fr=new F,wi=new F,Ai=new F,nr=new F,Xs=new F,sa=new F,oa=new F,ir=new F;function wu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ir.fromArray(t,s);const a=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),l=e.dot(ir),u=n.dot(ir),f=i.dot(ir);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const gS=new Oo,js=new F,Au=new F;class Md{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):gS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const n=js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Au.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(Au)),this.expandByPoint(js.copy(e.center).sub(Au))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new F,Cu=new F,aa=new F,Ci=new F,Ru=new F,la=new F,Pu=new F;class _S{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,n),ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Cu.copy(e).add(n).multiplyScalar(.5),aa.copy(n).sub(e).normalize(),Ci.copy(this.origin).sub(Cu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(aa),a=Ci.dot(this.direction),l=-Ci.dot(aa),u=Ci.lengthSq(),f=Math.abs(1-o*o);let h,d,p,v;if(f>0)if(h=o*l-a,d=o*a-l,v=s*f,h>=0)if(d>=-v)if(d<=v){const x=1/f;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d<=-v?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Cu).addScaledVector(aa,d),p}intersectSphere(e,n){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),r=ni.dot(ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,n,i,r,s){Ru.subVectors(n,e),la.subVectors(i,e),Pu.crossVectors(Ru,la);let o=this.direction.dot(Pu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);const l=a*this.direction.dot(la.crossVectors(Ci,la));if(l<0)return null;const u=a*this.direction.dot(Ru.cross(Ci));if(u<0||l+u>o)return null;const f=-a*Ci.dot(Pu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,n,i,r,s,o,a,l,u,f,h,d,p,v,x,m){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,h,d,p,v,x,m)}set(e,n,i,r,s,o,a,l,u,f,h,d,p,v,x,m){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=h,c[14]=d,c[3]=p,c[7]=v,c[11]=x,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Or.setFromMatrixColumn(e,0).length(),s=1/Or.setFromMatrixColumn(e,1).length(),o=1/Or.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,p=o*h,v=a*f,x=a*h;n[0]=l*f,n[4]=-l*h,n[8]=u,n[1]=p+v*u,n[5]=d-x*u,n[9]=-a*l,n[2]=x-d*u,n[6]=v+p*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,p=l*h,v=u*f,x=u*h;n[0]=d+x*a,n[4]=v*a-p,n[8]=o*u,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=p*a-v,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,p=l*h,v=u*f,x=u*h;n[0]=d-x*a,n[4]=-o*h,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*f,n[9]=x-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,p=o*h,v=a*f,x=a*h;n[0]=l*f,n[4]=v*u-p,n[8]=d*u+x,n[1]=l*h,n[5]=x*u+d,n[9]=p*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,v=a*l,x=a*u;n[0]=l*f,n[4]=x-d*h,n[8]=v*h+p,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=p*h+v,n[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,p=o*u,v=a*l,x=a*u;n[0]=l*f,n[4]=-h,n[8]=u*f,n[1]=d*h+x,n[5]=o*f,n[9]=p*h-v,n[2]=v*h-p,n[6]=a*f,n[10]=x*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vS,e,xS)}lookAt(e,n,i){const r=this.elements;return ln.subVectors(e,n),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Ri.crossVectors(i,ln),Ri.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Ri.crossVectors(i,ln)),Ri.normalize(),ua.crossVectors(ln,Ri),r[0]=Ri.x,r[4]=ua.x,r[8]=ln.x,r[1]=Ri.y,r[5]=ua.y,r[9]=ln.y,r[2]=Ri.z,r[6]=ua.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],h=i[5],d=i[9],p=i[13],v=i[2],x=i[6],m=i[10],c=i[14],g=i[3],_=i[7],y=i[11],R=i[15],w=r[0],A=r[4],P=r[8],T=r[12],S=r[1],b=r[5],B=r[9],k=r[13],W=r[2],X=r[6],V=r[10],$=r[14],D=r[3],Y=r[7],Z=r[11],se=r[15];return s[0]=o*w+a*S+l*W+u*D,s[4]=o*A+a*b+l*X+u*Y,s[8]=o*P+a*B+l*V+u*Z,s[12]=o*T+a*k+l*$+u*se,s[1]=f*w+h*S+d*W+p*D,s[5]=f*A+h*b+d*X+p*Y,s[9]=f*P+h*B+d*V+p*Z,s[13]=f*T+h*k+d*$+p*se,s[2]=v*w+x*S+m*W+c*D,s[6]=v*A+x*b+m*X+c*Y,s[10]=v*P+x*B+m*V+c*Z,s[14]=v*T+x*k+m*$+c*se,s[3]=g*w+_*S+y*W+R*D,s[7]=g*A+_*b+y*X+R*Y,s[11]=g*P+_*B+y*V+R*Z,s[15]=g*T+_*k+y*$+R*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],h=e[6],d=e[10],p=e[14],v=e[3],x=e[7],m=e[11],c=e[15];return v*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*p-i*l*p)+x*(+n*l*p-n*u*d+s*o*d-r*o*p+r*u*f-s*l*f)+m*(+n*u*h-n*a*p-s*o*h+i*o*p+s*a*f-i*u*f)+c*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],p=e[11],v=e[12],x=e[13],m=e[14],c=e[15],g=h*m*u-x*d*u+x*l*p-a*m*p-h*l*c+a*d*c,_=v*d*u-f*m*u-v*l*p+o*m*p+f*l*c-o*d*c,y=f*x*u-v*h*u+v*a*p-o*x*p-f*a*c+o*h*c,R=v*h*l-f*x*l-v*a*d+o*x*d+f*a*m-o*h*m,w=n*g+i*_+r*y+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=g*A,e[1]=(x*d*s-h*m*s-x*r*p+i*m*p+h*r*c-i*d*c)*A,e[2]=(a*m*s-x*l*s+x*r*u-i*m*u-a*r*c+i*l*c)*A,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*p-i*l*p)*A,e[4]=_*A,e[5]=(f*m*s-v*d*s+v*r*p-n*m*p-f*r*c+n*d*c)*A,e[6]=(v*l*s-o*m*s-v*r*u+n*m*u+o*r*c-n*l*c)*A,e[7]=(o*d*s-f*l*s+f*r*u-n*d*u-o*r*p+n*l*p)*A,e[8]=y*A,e[9]=(v*h*s-f*x*s-v*i*p+n*x*p+f*i*c-n*h*c)*A,e[10]=(o*x*s-v*a*s+v*i*u-n*x*u-o*i*c+n*a*c)*A,e[11]=(f*a*s-o*h*s-f*i*u+n*h*u+o*i*p-n*a*p)*A,e[12]=R*A,e[13]=(f*x*r-v*h*r+v*i*d-n*x*d-f*i*m+n*h*m)*A,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*m-n*a*m)*A,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,h=a+a,d=s*u,p=s*f,v=s*h,x=o*f,m=o*h,c=a*h,g=l*u,_=l*f,y=l*h,R=i.x,w=i.y,A=i.z;return r[0]=(1-(x+c))*R,r[1]=(p+y)*R,r[2]=(v-_)*R,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(d+c))*w,r[6]=(m+g)*w,r[7]=0,r[8]=(v+_)*A,r[9]=(m-g)*A,r[10]=(1-(d+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Or.set(r[0],r[1],r[2]).length();const o=Or.set(r[4],r[5],r[6]).length(),a=Or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dn.copy(this);const u=1/s,f=1/o,h=1/a;return Dn.elements[0]*=u,Dn.elements[1]*=u,Dn.elements[2]*=u,Dn.elements[4]*=f,Dn.elements[5]*=f,Dn.elements[6]*=f,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,n.setFromRotationMatrix(Dn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=hi){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,v;if(a===hi)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===vl)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=hi){const l=this.elements,u=1/(n-e),f=1/(i-r),h=1/(o-s),d=(n+e)*u,p=(i+r)*f;let v,x;if(a===hi)v=(o+s)*h,x=-2*h;else if(a===vl)v=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Or=new F,Dn=new Tt,vS=new F(0,0,0),xS=new F(1,1,1),Ri=new F,ua=new F,ln=new F,ep=new Tt,tp=new Fo;class Si{constructor(e=0,n=0,i=0,r=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ep,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return tp.setFromEuler(this),this.setFromQuaternion(tp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class v_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let SS=0;const np=new F,kr=new Fo,ii=new Tt,ca=new F,Ys=new F,yS=new F,MS=new Fo,ip=new F(1,0,0),rp=new F(0,1,0),sp=new F(0,0,1),op={type:"added"},ES={type:"removed"},zr={type:"childadded",child:null},bu={type:"childremoved",child:null};class hn extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new F,n=new Si,i=new Fo,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ue}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new v_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return kr.setFromAxisAngle(e,n),this.quaternion.multiply(kr),this}rotateOnWorldAxis(e,n){return kr.setFromAxisAngle(e,n),this.quaternion.premultiply(kr),this}rotateX(e){return this.rotateOnAxis(ip,e)}rotateY(e){return this.rotateOnAxis(rp,e)}rotateZ(e){return this.rotateOnAxis(sp,e)}translateOnAxis(e,n){return np.copy(e).applyQuaternion(this.quaternion),this.position.add(np.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ip,e)}translateY(e){return this.translateOnAxis(rp,e)}translateZ(e){return this.translateOnAxis(sp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ca.copy(e):ca.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Ys,ca,this.up):ii.lookAt(ca,Ys,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),kr.setFromRotationMatrix(ii),this.quaternion.premultiply(kr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(op),zr.child=e,this.dispatchEvent(zr),zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ES),bu.child=e,this.dispatchEvent(bu),bu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(op),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,yS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,MS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hn.DEFAULT_UP=new F(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new F,ri=new F,Lu=new F,si=new F,Br=new F,Hr=new F,ap=new F,Du=new F,Nu=new F,Iu=new F;class $n{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Nn.subVectors(e,n),r.cross(Nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Nn.subVectors(r,n),ri.subVectors(i,n),Lu.subVectors(e,n);const o=Nn.dot(Nn),a=Nn.dot(ri),l=Nn.dot(Lu),u=ri.dot(ri),f=ri.dot(Lu),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(u*l-a*f)*d,v=(o*f-a*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static isFrontFacing(e,n,i,r){return Nn.subVectors(i,n),ri.subVectors(e,n),Nn.cross(ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Nn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return $n.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return $n.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Br.subVectors(r,i),Hr.subVectors(s,i),Du.subVectors(e,i);const l=Br.dot(Du),u=Hr.dot(Du);if(l<=0&&u<=0)return n.copy(i);Nu.subVectors(e,r);const f=Br.dot(Nu),h=Hr.dot(Nu);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*u;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Br,o);Iu.subVectors(e,s);const p=Br.dot(Iu),v=Hr.dot(Iu);if(v>=0&&p<=v)return n.copy(s);const x=p*u-l*v;if(x<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(Hr,a);const m=f*v-p*h;if(m<=0&&h-f>=0&&p-v>=0)return ap.subVectors(s,r),a=(h-f)/(h-f+(p-v)),n.copy(r).addScaledVector(ap,a);const c=1/(m+x+d);return o=x*c,a=d*c,n.copy(i).addScaledVector(Br,o).addScaledVector(Hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const x_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},fa={h:0,s:0,l:0};function Uu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=aS(e,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Uu(o,s,e+1/3),this.g=Uu(o,s,e),this.b=Uu(o,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,n=jn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=jn){const i=x_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}copyLinearToSRGB(e){return this.r=Mu(e.r),this.g=Mu(e.g),this.b=Mu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return $e.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Qt(Ht.r*255,0,255))*65536+Math.round(Qt(Ht.g*255,0,255))*256+Math.round(Qt(Ht.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=$e.workingColorSpace){return $e.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=jn){$e.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==jn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+n,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Pi),e.getHSL(fa);const i=Su(Pi.h,fa.h,n),r=Su(Pi.s,fa.s,n),s=Su(Pi.l,fa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Je;Je.NAMES=x_;let TS=0;class kl extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=Uo(),this.name="",this.type="Material",this.blending=ps,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kc,this.blendDst=zc,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=pl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kc&&(i.blendSrc=this.blendSrc),this.blendDst!==zc&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class S_ extends kl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=n_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new F,da=new He;class Qn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=qh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return uo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)da.fromBufferAttribute(this,n),da.applyMatrix3(e),this.setXY(n,da.x,da.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix3(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix4(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyNormalMatrix(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.transformDirection(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Gs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Gs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Gs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Gs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Gs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qh&&(e.usage=this.usage),e}}class y_ extends Qn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class M_ extends Qn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class wt extends Qn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let wS=0;const vn=new Tt,Fu=new hn,Vr=new F,un=new Oo,qs=new Oo,Rt=new F;class Vn extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(m_(e)?M_:y_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,n,i){return vn.makeTranslation(e,n,i),this.applyMatrix4(vn),this}scale(e,n,i){return vn.makeScale(e,n,i),this.applyMatrix4(vn),this}lookAt(e){return Fu.lookAt(e),Fu.updateMatrix(),this.applyMatrix4(Fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new wt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Md);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(un.min,qs.min),un.expandByPoint(Rt),Rt.addVectors(un.max,qs.max),un.expandByPoint(Rt)):(un.expandByPoint(qs.min),un.expandByPoint(qs.max))}un.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Rt.fromBufferAttribute(a,u),l&&(Vr.fromBufferAttribute(e,u),Rt.add(Vr)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new F,l[P]=new F;const u=new F,f=new F,h=new F,d=new He,p=new He,v=new He,x=new F,m=new F;function c(P,T,S){u.fromBufferAttribute(i,P),f.fromBufferAttribute(i,T),h.fromBufferAttribute(i,S),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,T),v.fromBufferAttribute(s,S),f.sub(u),h.sub(u),p.sub(d),v.sub(d);const b=1/(p.x*v.y-v.x*p.y);isFinite(b)&&(x.copy(f).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(b),m.copy(h).multiplyScalar(p.x).addScaledVector(f,-v.x).multiplyScalar(b),a[P].add(x),a[T].add(x),a[S].add(x),l[P].add(m),l[T].add(m),l[S].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let P=0,T=g.length;P<T;++P){const S=g[P],b=S.start,B=S.count;for(let k=b,W=b+B;k<W;k+=3)c(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const _=new F,y=new F,R=new F,w=new F;function A(P){R.fromBufferAttribute(r,P),w.copy(R);const T=a[P];_.copy(T),_.sub(R.multiplyScalar(R.dot(T))).normalize(),y.crossVectors(w,T);const b=y.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,b)}for(let P=0,T=g.length;P<T;++P){const S=g[P],b=S.start,B=S.count;for(let k=b,W=b+B;k<W;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,u=new F,f=new F,h=new F;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),a.add(f),l.add(f),u.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,h=a.normalized,d=new u.constructor(l.length*f);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*f;for(let c=0;c<f;c++)d[v++]=u[p++]}return new Qn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,h=u.length;f<h;f++){const d=u[f],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,d=u.length;h<d;h++){const p=u[h];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],h=s[u];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lp=new Tt,rr=new _S,ha=new Md,up=new F,Gr=new F,Wr=new F,Xr=new F,Ou=new F,pa=new F,ma=new He,ga=new He,_a=new He,cp=new F,fp=new F,dp=new F,va=new F,xa=new F;class Tn extends hn{constructor(e=new Vn,n=new S_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){pa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],h=s[l];f!==0&&(Ou.fromBufferAttribute(h,e),o?pa.addScaledVector(Ou,f):pa.addScaledVector(Ou.sub(n),f))}n.add(pa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ha.copy(i.boundingSphere),ha.applyMatrix4(s),rr.copy(e.ray).recast(e.near),!(ha.containsPoint(rr.origin)===!1&&(rr.intersectSphere(ha,up)===null||rr.origin.distanceToSquared(up)>(e.far-e.near)**2))&&(lp.copy(s).invert(),rr.copy(e.ray).applyMatrix4(lp),!(i.boundingBox!==null&&rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,rr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],c=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,R=_;y<R;y+=3){const w=a.getX(y),A=a.getX(y+1),P=a.getX(y+2);r=Sa(this,c,e,i,u,f,h,w,A,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,c=x;m<c;m+=3){const g=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);r=Sa(this,o,e,i,u,f,h,g,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],c=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,R=_;y<R;y+=3){const w=y,A=y+1,P=y+2;r=Sa(this,c,e,i,u,f,h,w,A,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,c=x;m<c;m+=3){const g=m,_=m+1,y=m+2;r=Sa(this,o,e,i,u,f,h,g,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function AS(t,e,n,i,r,s,o,a){let l;if(e.side===rn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ki,a),l===null)return null;xa.copy(a),xa.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(xa);return u<n.near||u>n.far?null:{distance:u,point:xa.clone(),object:t}}function Sa(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Gr),t.getVertexPosition(l,Wr),t.getVertexPosition(u,Xr);const f=AS(t,e,n,i,Gr,Wr,Xr,va);if(f){r&&(ma.fromBufferAttribute(r,a),ga.fromBufferAttribute(r,l),_a.fromBufferAttribute(r,u),f.uv=$n.getInterpolation(va,Gr,Wr,Xr,ma,ga,_a,new He)),s&&(ma.fromBufferAttribute(s,a),ga.fromBufferAttribute(s,l),_a.fromBufferAttribute(s,u),f.uv1=$n.getInterpolation(va,Gr,Wr,Xr,ma,ga,_a,new He)),o&&(cp.fromBufferAttribute(o,a),fp.fromBufferAttribute(o,l),dp.fromBufferAttribute(o,u),f.normal=$n.getInterpolation(va,Gr,Wr,Xr,cp,fp,dp,new F),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new F,materialIndex:0};$n.getNormal(Gr,Wr,Xr,h.normal),f.face=h}return f}class Ns extends Vn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],h=[];let d=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(f,3)),this.setAttribute("uv",new wt(h,2));function v(x,m,c,g,_,y,R,w,A,P,T){const S=y/A,b=R/P,B=y/2,k=R/2,W=w/2,X=A+1,V=P+1;let $=0,D=0;const Y=new F;for(let Z=0;Z<V;Z++){const se=Z*b-k;for(let ye=0;ye<X;ye++){const Ve=ye*S-B;Y[x]=Ve*g,Y[m]=se*_,Y[c]=W,u.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[c]=w>0?1:-1,f.push(Y.x,Y.y,Y.z),h.push(ye/A),h.push(1-Z/P),$+=1}}for(let Z=0;Z<P;Z++)for(let se=0;se<A;se++){const ye=d+se+X*Z,Ve=d+se+X*(Z+1),G=d+(se+1)+X*(Z+1),te=d+(se+1)+X*Z;l.push(ye,Ve,te),l.push(Ve,G,te),D+=6}a.addGroup(p,D,T),p+=D,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=Rs(t[n]);for(const r in i)e[r]=i[r]}return e}function CS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function E_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const RS={clone:Rs,merge:Xt};var PS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends kl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PS,this.fragmentShader=bS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=CS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class T_ extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new F,hp=new He,pp=new He;class yn extends T_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_f*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _f*2*Math.atan(Math.tan(xu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,n){return this.getViewBounds(e,hp,pp),n.subVectors(pp,hp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(xu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const jr=-90,Yr=1;class LS extends hn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(jr,Yr,e,n);r.layers=this.layers,this.add(r);const s=new yn(jr,Yr,e,n);s.layers=this.layers,this.add(s);const o=new yn(jr,Yr,e,n);o.layers=this.layers,this.add(o);const a=new yn(jr,Yr,e,n);a.layers=this.layers,this.add(a);const l=new yn(jr,Yr,e,n);l.layers=this.layers,this.add(l);const u=new yn(jr,Yr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class w_ extends sn{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Ts,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class DS extends Cr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new w_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:On}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ns(5,5,5),s=new yi({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:ji});s.uniforms.tEquirect.value=n;const o=new Tn(r,s),a=n.minFilter;return n.minFilter===vr&&(n.minFilter=On),new LS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ku=new F,NS=new F,IS=new Ue;class cr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ku.subVectors(i,n).cross(NS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ku),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||IS.getNormalMatrix(e),r=this.coplanarPoint(ku).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new Md,ya=new F;class A_{constructor(e=new cr,n=new cr,i=new cr,r=new cr,s=new cr,o=new cr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=hi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],p=r[8],v=r[9],x=r[10],m=r[11],c=r[12],g=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,d-u,m-p,y-c).normalize(),i[1].setComponents(l+s,d+u,m+p,y+c).normalize(),i[2].setComponents(l+o,d+f,m+v,y+g).normalize(),i[3].setComponents(l-o,d-f,m-v,y-g).normalize(),i[4].setComponents(l-a,d-h,m-x,y-_).normalize(),n===hi)i[5].setComponents(l+a,d+h,m+x,y+_).normalize();else if(n===vl)i[5].setComponents(a,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ya.x=r.normal.x>0?e.max.x:e.min.x,ya.y=r.normal.y>0?e.max.y:e.min.y,ya.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ya)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function C_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function US(t){const e=new WeakMap;function n(a,l){const u=a.array,f=a.usage,h=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,f),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const f=l.array,h=l._updateRange,d=l.updateRanges;if(t.bindBuffer(u,a),h.count===-1&&d.length===0&&t.bufferSubData(u,0,f),d.length!==0){for(let p=0,v=d.length;p<v;p++){const x=d[p];t.bufferSubData(u,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(u,h.offset*f.BYTES_PER_ELEMENT,f,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class zl extends Vn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,h=e/a,d=n/l,p=[],v=[],x=[],m=[];for(let c=0;c<f;c++){const g=c*d-o;for(let _=0;_<u;_++){const y=_*h-s;v.push(y,-g,0),x.push(0,0,1),m.push(_/a),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let g=0;g<a;g++){const _=g+u*c,y=g+u*(c+1),R=g+1+u*(c+1),w=g+1+u*c;p.push(_,y,w),p.push(y,R,w)}this.setIndex(p),this.setAttribute("position",new wt(v,3)),this.setAttribute("normal",new wt(x,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.width,e.height,e.widthSegments,e.heightSegments)}}var FS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,GS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,XS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,YS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$S=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,KS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ZS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,QS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ey=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ty=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ny=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ry=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,sy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ay=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ly=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dy="gl_FragColor = linearToOutputTexel( gl_FragColor );",hy=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,py=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,my=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_y=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,My=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ey=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ty=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ay=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ry=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Py=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,by=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ly=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ny=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Iy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Uy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Oy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ky=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,By=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$y=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ky=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_M=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,SM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,EM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,PM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,LM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,IM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,VM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,GM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,WM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,XM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$M=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,KM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,eE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,oE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:FS,alphahash_pars_fragment:OS,alphamap_fragment:kS,alphamap_pars_fragment:zS,alphatest_fragment:BS,alphatest_pars_fragment:HS,aomap_fragment:VS,aomap_pars_fragment:GS,batching_pars_vertex:WS,batching_vertex:XS,begin_vertex:jS,beginnormal_vertex:YS,bsdfs:qS,iridescence_fragment:$S,bumpmap_pars_fragment:KS,clipping_planes_fragment:ZS,clipping_planes_pars_fragment:QS,clipping_planes_pars_vertex:JS,clipping_planes_vertex:ey,color_fragment:ty,color_pars_fragment:ny,color_pars_vertex:iy,color_vertex:ry,common:sy,cube_uv_reflection_fragment:oy,defaultnormal_vertex:ay,displacementmap_pars_vertex:ly,displacementmap_vertex:uy,emissivemap_fragment:cy,emissivemap_pars_fragment:fy,colorspace_fragment:dy,colorspace_pars_fragment:hy,envmap_fragment:py,envmap_common_pars_fragment:my,envmap_pars_fragment:gy,envmap_pars_vertex:_y,envmap_physical_pars_fragment:Ry,envmap_vertex:vy,fog_vertex:xy,fog_pars_vertex:Sy,fog_fragment:yy,fog_pars_fragment:My,gradientmap_pars_fragment:Ey,lightmap_pars_fragment:Ty,lights_lambert_fragment:wy,lights_lambert_pars_fragment:Ay,lights_pars_begin:Cy,lights_toon_fragment:Py,lights_toon_pars_fragment:by,lights_phong_fragment:Ly,lights_phong_pars_fragment:Dy,lights_physical_fragment:Ny,lights_physical_pars_fragment:Iy,lights_fragment_begin:Uy,lights_fragment_maps:Fy,lights_fragment_end:Oy,logdepthbuf_fragment:ky,logdepthbuf_pars_fragment:zy,logdepthbuf_pars_vertex:By,logdepthbuf_vertex:Hy,map_fragment:Vy,map_pars_fragment:Gy,map_particle_fragment:Wy,map_particle_pars_fragment:Xy,metalnessmap_fragment:jy,metalnessmap_pars_fragment:Yy,morphinstance_vertex:qy,morphcolor_vertex:$y,morphnormal_vertex:Ky,morphtarget_pars_vertex:Zy,morphtarget_vertex:Qy,normal_fragment_begin:Jy,normal_fragment_maps:eM,normal_pars_fragment:tM,normal_pars_vertex:nM,normal_vertex:iM,normalmap_pars_fragment:rM,clearcoat_normal_fragment_begin:sM,clearcoat_normal_fragment_maps:oM,clearcoat_pars_fragment:aM,iridescence_pars_fragment:lM,opaque_fragment:uM,packing:cM,premultiplied_alpha_fragment:fM,project_vertex:dM,dithering_fragment:hM,dithering_pars_fragment:pM,roughnessmap_fragment:mM,roughnessmap_pars_fragment:gM,shadowmap_pars_fragment:_M,shadowmap_pars_vertex:vM,shadowmap_vertex:xM,shadowmask_pars_fragment:SM,skinbase_vertex:yM,skinning_pars_vertex:MM,skinning_vertex:EM,skinnormal_vertex:TM,specularmap_fragment:wM,specularmap_pars_fragment:AM,tonemapping_fragment:CM,tonemapping_pars_fragment:RM,transmission_fragment:PM,transmission_pars_fragment:bM,uv_pars_fragment:LM,uv_pars_vertex:DM,uv_vertex:NM,worldpos_vertex:IM,background_vert:UM,background_frag:FM,backgroundCube_vert:OM,backgroundCube_frag:kM,cube_vert:zM,cube_frag:BM,depth_vert:HM,depth_frag:VM,distanceRGBA_vert:GM,distanceRGBA_frag:WM,equirect_vert:XM,equirect_frag:jM,linedashed_vert:YM,linedashed_frag:qM,meshbasic_vert:$M,meshbasic_frag:KM,meshlambert_vert:ZM,meshlambert_frag:QM,meshmatcap_vert:JM,meshmatcap_frag:eE,meshnormal_vert:tE,meshnormal_frag:nE,meshphong_vert:iE,meshphong_frag:rE,meshphysical_vert:sE,meshphysical_frag:oE,meshtoon_vert:aE,meshtoon_frag:lE,points_vert:uE,points_frag:cE,shadow_vert:fE,shadow_frag:dE,sprite_vert:hE,sprite_frag:pE},ae={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Yn={basic:{uniforms:Xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Xt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Xt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Xt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Xt([ae.points,ae.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Xt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Xt([ae.common,ae.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Xt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Xt([ae.sprite,ae.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Xt([ae.common,ae.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Xt([ae.lights,ae.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Yn.physical={uniforms:Xt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Ma={r:0,b:0,g:0},or=new Si,mE=new Tt;function gE(t,e,n,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,u,f,h=null,d=0,p=null;function v(g){let _=g.isScene===!0?g.background:null;return _&&_.isTexture&&(_=(g.backgroundBlurriness>0?n:e).get(_)),_}function x(g){let _=!1;const y=v(g);y===null?c(a,l):y&&y.isColor&&(c(y,1),_=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,_){const y=v(_);y&&(y.isCubeTexture||y.mapping===Fl)?(f===void 0&&(f=new Tn(new Ns(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:Rs(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),or.copy(_.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),f.material.uniforms.envMap.value=y,f.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(mE.makeRotationFromEuler(or)),f.material.toneMapped=$e.getTransfer(y.colorSpace)!==nt,(h!==y||d!==y.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,h=y,d=y.version,p=t.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new Tn(new zl(2,2),new yi({name:"BackgroundMaterial",uniforms:Rs(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=$e.getTransfer(y.colorSpace)!==nt,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function c(g,_){g.getRGB(Ma,E_(t)),i.buffers.color.setClear(Ma.r,Ma.g,Ma.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),l=_,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,c(a,l)},render:x,addToRenderList:m}}function _E(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,b,B,k,W){let X=!1;const V=h(k,B,b);s!==V&&(s=V,u(s.object)),X=p(S,k,B,W),X&&v(S,k,B,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(S,b,B,k),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function f(S){return t.deleteVertexArray(S)}function h(S,b,B){const k=B.wireframe===!0;let W=i[S.id];W===void 0&&(W={},i[S.id]=W);let X=W[b.id];X===void 0&&(X={},W[b.id]=X);let V=X[k];return V===void 0&&(V=d(l()),X[k]=V),V}function d(S){const b=[],B=[],k=[];for(let W=0;W<n;W++)b[W]=0,B[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:B,attributeDivisors:k,object:S,attributes:{},index:null}}function p(S,b,B,k){const W=s.attributes,X=b.attributes;let V=0;const $=B.getAttributes();for(const D in $)if($[D].location>=0){const Z=W[D];let se=X[D];if(se===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),Z===void 0||Z.attribute!==se||se&&Z.data!==se.data)return!0;V++}return s.attributesNum!==V||s.index!==k}function v(S,b,B,k){const W={},X=b.attributes;let V=0;const $=B.getAttributes();for(const D in $)if($[D].location>=0){let Z=X[D];Z===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const se={};se.attribute=Z,Z&&Z.data&&(se.data=Z.data),W[D]=se,V++}s.attributes=W,s.attributesNum=V,s.index=k}function x(){const S=s.newAttributes;for(let b=0,B=S.length;b<B;b++)S[b]=0}function m(S){c(S,0)}function c(S,b){const B=s.newAttributes,k=s.enabledAttributes,W=s.attributeDivisors;B[S]=1,k[S]===0&&(t.enableVertexAttribArray(S),k[S]=1),W[S]!==b&&(t.vertexAttribDivisor(S,b),W[S]=b)}function g(){const S=s.newAttributes,b=s.enabledAttributes;for(let B=0,k=b.length;B<k;B++)b[B]!==S[B]&&(t.disableVertexAttribArray(B),b[B]=0)}function _(S,b,B,k,W,X,V){V===!0?t.vertexAttribIPointer(S,b,B,W,X):t.vertexAttribPointer(S,b,B,k,W,X)}function y(S,b,B,k){x();const W=k.attributes,X=B.getAttributes(),V=b.defaultAttributeValues;for(const $ in X){const D=X[$];if(D.location>=0){let Y=W[$];if(Y===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor)),Y!==void 0){const Z=Y.normalized,se=Y.itemSize,ye=e.get(Y);if(ye===void 0)continue;const Ve=ye.buffer,G=ye.type,te=ye.bytesPerElement,fe=G===t.INT||G===t.UNSIGNED_INT||Y.gpuType===md;if(Y.isInterleavedBufferAttribute){const ue=Y.data,Ae=ue.stride,Le=Y.offset;if(ue.isInstancedInterleavedBuffer){for(let ke=0;ke<D.locationSize;ke++)c(D.location+ke,ue.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ke=0;ke<D.locationSize;ke++)m(D.location+ke);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let ke=0;ke<D.locationSize;ke++)_(D.location+ke,se/D.locationSize,G,Z,Ae*te,(Le+se/D.locationSize*ke)*te,fe)}else{if(Y.isInstancedBufferAttribute){for(let ue=0;ue<D.locationSize;ue++)c(D.location+ue,Y.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ue=0;ue<D.locationSize;ue++)m(D.location+ue);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let ue=0;ue<D.locationSize;ue++)_(D.location+ue,se/D.locationSize,G,Z,se*te,se/D.locationSize*ue*te,fe)}}else if(V!==void 0){const Z=V[$];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(D.location,Z);break;case 3:t.vertexAttrib3fv(D.location,Z);break;case 4:t.vertexAttrib4fv(D.location,Z);break;default:t.vertexAttrib1fv(D.location,Z)}}}}g()}function R(){P();for(const S in i){const b=i[S];for(const B in b){const k=b[B];for(const W in k)f(k[W].object),delete k[W];delete b[B]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const b=i[S.id];for(const B in b){const k=b[B];for(const W in k)f(k[W].object),delete k[W];delete b[B]}delete i[S.id]}function A(S){for(const b in i){const B=i[b];if(B[S.id]===void 0)continue;const k=B[S.id];for(const W in k)f(k[W].object),delete k[W];delete B[S.id]}}function P(){T(),o=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function vE(t,e,n){let i;function r(u){i=u}function s(u,f){t.drawArrays(i,u,f),n.update(f,i,1)}function o(u,f,h){h!==0&&(t.drawArraysInstanced(i,u,f,h),n.update(f,i,h))}function a(u,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,h);let p=0;for(let v=0;v<h;v++)p+=f[v];n.update(p,i,1)}function l(u,f,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<u.length;v++)o(u[v],f[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,f,0,d,0,h);let v=0;for(let x=0;x<h;x++)v+=f[x];for(let x=0;x<d.length;x++)n.update(v,i,d[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==kn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const A=w===Io&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==xi&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==di&&!A)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=l(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const h=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),c=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:c,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:y,maxSamples:R}}function SE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new cr,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,p){const v=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,c=t.get(h);if(!r||v===null||v.length===0||s&&!m)s?f(null):u();else{const g=s?0:i,_=g*4;let y=c.clippingState||null;l.value=y,y=f(v,d,_,p);for(let R=0;R!==_;++R)y[R]=n[R];c.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,p,v){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const c=p+x*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<c)&&(m=new Float32Array(c));for(let _=0,y=p;_!==x;++_,y+=4)o.copy(h[_]).applyMatrix4(g,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function yE(t){let e=new WeakMap;function n(o,a){return a===Bc?o.mapping=Ts:a===Hc&&(o.mapping=ws),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Bc||a===Hc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new DS(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ME extends T_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const as=4,mp=[.125,.215,.35,.446,.526,.582],hr=20,zu=new ME,gp=new Je;let Bu=null,Hu=0,Vu=0,Gu=!1;const fr=(1+Math.sqrt(5))/2,qr=1/fr,_p=[new F(-fr,qr,0),new F(fr,qr,0),new F(-qr,0,fr),new F(qr,0,fr),new F(0,fr,-qr),new F(0,fr,qr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class vp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Bu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Vu=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bu,Hu,Vu),this._renderer.xr.enabled=Gu,e.scissorTest=!1,Ea(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ts||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Vu=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:Io,format:kn,colorSpace:er,depthBuffer:!1},r=xp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=EE(s)),this._blurMaterial=TE(s,e,n)}return r}_compileMaterial(e){const n=new Tn(this._lodPlanes[0],e);this._renderer.compile(n,zu)}_sceneToCubeUV(e,n,i,r){const a=new yn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(gp),f.toneMapping=Yi,f.autoClear=!1;const p=new S_({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),v=new Tn(new Ns,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(gp),x=!0);for(let c=0;c<6;c++){const g=c%3;g===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):g===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const _=this._cubeSize;Ea(r,g*_,c>2?_:0,_,_),f.setRenderTarget(r),x&&f.render(v,a),f.render(e,a)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ts||e.mapping===ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Tn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ea(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,zu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=_p[(r-s-1)%_p.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Tn(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*hr-1),x=s/v,m=isFinite(s)?1+Math.floor(f*x):hr;m>hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hr}`);const c=[];let g=0;for(let A=0;A<hr;++A){const P=A/x,T=Math.exp(-P*P/2);c.push(T),A===0?g+=T:A<m&&(g+=2*T)}for(let A=0;A<c.length;A++)c[A]=c[A]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=c,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=v,d.mipInt.value=_-i;const y=this._sizeLods[r],R=3*y*(r>_-as?r-_+as:0),w=4*(this._cubeSize-y);Ea(n,R,w,3*y,2*y),l.setRenderTarget(n),l.render(h,zu)}}function EE(t){const e=[],n=[],i=[];let r=t;const s=t-as+1+mp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-as?l=mp[o-t+as-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,v=6,x=3,m=2,c=1,g=new Float32Array(x*v*p),_=new Float32Array(m*v*p),y=new Float32Array(c*v*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,P=w>2?0:-1,T=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];g.set(T,x*v*w),_.set(d,m*v*w);const S=[w,w,w,w,w,w];y.set(S,c*v*w)}const R=new Vn;R.setAttribute("position",new Qn(g,x)),R.setAttribute("uv",new Qn(_,m)),R.setAttribute("faceIndex",new Qn(y,c)),e.push(R),r>as&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function xp(t,e,n){const i=new Cr(t,e,n);return i.texture.mapping=Fl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ea(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function TE(t,e,n){const i=new Float32Array(hr),r=new F(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Sp(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function yp(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Ed(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Bc||l===Hc,f=l===Ts||l===ws;if(u||f){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new vp(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return u&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new vp(t)),h=u?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function AE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&uo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function CE(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let m=0,c=x.length;m<c;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const x=p[v];for(let m=0,c=x.length;m<c;m++)e.update(x[m],t.ARRAY_BUFFER)}}function u(h){const d=[],p=h.index,v=h.attributes.position;let x=0;if(p!==null){const g=p.array;x=p.version;for(let _=0,y=g.length;_<y;_+=3){const R=g[_+0],w=g[_+1],A=g[_+2];d.push(R,w,w,A,A,R)}}else if(v!==void 0){const g=v.array;x=v.version;for(let _=0,y=g.length/3-1;_<y;_+=3){const R=_+0,w=_+1,A=_+2;d.push(R,w,w,A,A,R)}}else return;const m=new(m_(d)?M_:y_)(d,1);m.version=x;const c=s.get(h);c&&e.remove(c),s.set(h,m)}function f(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function RE(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function u(d,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,d*o,v),n.update(p,i,v))}function f(d,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,v);let m=0;for(let c=0;c<v;c++)m+=p[c];n.update(m,i,1)}function h(d,p,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let c=0;c<d.length;c++)u(d[c]/o,p[c],x[c]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,x,0,v);let c=0;for(let g=0;g<v;g++)c+=p[g];for(let g=0;g<x.length;g++)n.update(c,i,x[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function PE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function bE(t,e,n){const i=new WeakMap,r=new bt;function s(o,a,l){const u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;v===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let R=a.attributes.position.count*y,w=1;R>e.maxTextureSize&&(w=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*w*4*h),P=new __(A,R,w,h);P.type=di,P.needsUpdate=!0;const T=y*4;for(let b=0;b<h;b++){const B=c[b],k=g[b],W=_[b],X=R*w*4*b;for(let V=0;V<B.count;V++){const $=V*T;v===!0&&(r.fromBufferAttribute(B,V),A[X+$+0]=r.x,A[X+$+1]=r.y,A[X+$+2]=r.z,A[X+$+3]=0),x===!0&&(r.fromBufferAttribute(k,V),A[X+$+4]=r.x,A[X+$+5]=r.y,A[X+$+6]=r.z,A[X+$+7]=0),m===!0&&(r.fromBufferAttribute(W,V),A[X+$+8]=r.x,A[X+$+9]=r.y,A[X+$+10]=r.z,A[X+$+11]=W.itemSize===4?r.w:1)}}d={count:h,texture:P,size:new He(R,w)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<u.length;m++)v+=u[m];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function LE(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class R_ extends sn{constructor(e,n,i,r,s,o,a,l,u,f=ms){if(f!==ms&&f!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===ms&&(i=Ar),i===void 0&&f===Cs&&(i=As),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:En,this.minFilter=l!==void 0?l:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const P_=new sn,Mp=new R_(1,1),b_=new __,L_=new mS,D_=new w_,Ep=[],Tp=[],wp=new Float32Array(16),Ap=new Float32Array(9),Cp=new Float32Array(4);function Is(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ep[r];if(s===void 0&&(s=new Float32Array(r),Ep[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function At(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Bl(t,e){let n=Tp[e];n===void 0&&(n=new Int32Array(e),Tp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function DE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function NE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function IE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(At(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function UE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function FE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;Cp.set(i),t.uniformMatrix2fv(this.addr,!1,Cp),Ct(n,i)}}function OE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;Ap.set(i),t.uniformMatrix3fv(this.addr,!1,Ap),Ct(n,i)}}function kE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;wp.set(i),t.uniformMatrix4fv(this.addr,!1,wp),Ct(n,i)}}function zE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function BE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function HE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function VE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function GE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function XE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function jE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function YE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Mp.compareFunction=p_,s=Mp):s=P_,n.setTexture2D(e||s,r)}function qE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||L_,r)}function $E(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||D_,r)}function KE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||b_,r)}function ZE(t){switch(t){case 5126:return DE;case 35664:return NE;case 35665:return IE;case 35666:return UE;case 35674:return FE;case 35675:return OE;case 35676:return kE;case 5124:case 35670:return zE;case 35667:case 35671:return BE;case 35668:case 35672:return HE;case 35669:case 35673:return VE;case 5125:return GE;case 36294:return WE;case 36295:return XE;case 36296:return jE;case 35678:case 36198:case 36298:case 36306:case 35682:return YE;case 35679:case 36299:case 36307:return qE;case 35680:case 36300:case 36308:case 36293:return $E;case 36289:case 36303:case 36311:case 36292:return KE}}function QE(t,e){t.uniform1fv(this.addr,e)}function JE(t,e){const n=Is(e,this.size,2);t.uniform2fv(this.addr,n)}function eT(t,e){const n=Is(e,this.size,3);t.uniform3fv(this.addr,n)}function tT(t,e){const n=Is(e,this.size,4);t.uniform4fv(this.addr,n)}function nT(t,e){const n=Is(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function iT(t,e){const n=Is(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function rT(t,e){const n=Is(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function sT(t,e){t.uniform1iv(this.addr,e)}function oT(t,e){t.uniform2iv(this.addr,e)}function aT(t,e){t.uniform3iv(this.addr,e)}function lT(t,e){t.uniform4iv(this.addr,e)}function uT(t,e){t.uniform1uiv(this.addr,e)}function cT(t,e){t.uniform2uiv(this.addr,e)}function fT(t,e){t.uniform3uiv(this.addr,e)}function dT(t,e){t.uniform4uiv(this.addr,e)}function hT(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||P_,s[o])}function pT(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||L_,s[o])}function mT(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||D_,s[o])}function gT(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||b_,s[o])}function _T(t){switch(t){case 5126:return QE;case 35664:return JE;case 35665:return eT;case 35666:return tT;case 35674:return nT;case 35675:return iT;case 35676:return rT;case 5124:case 35670:return sT;case 35667:case 35671:return oT;case 35668:case 35672:return aT;case 35669:case 35673:return lT;case 5125:return uT;case 36294:return cT;case 36295:return fT;case 36296:return dT;case 35678:case 36198:case 36298:case 36306:case 35682:return hT;case 35679:case 36299:case 36307:return pT;case 35680:case 36300:case 36308:case 36293:return mT;case 36289:case 36303:case 36311:case 36292:return gT}}class vT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ZE(n.type)}}class xT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=_T(n.type)}}class ST{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Wu=/(\w+)(\])?(\[|\.)?/g;function Rp(t,e){t.seq.push(e),t.map[e.id]=e}function yT(t,e,n){const i=t.name,r=i.length;for(Wu.lastIndex=0;;){const s=Wu.exec(i),o=Wu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Rp(n,u===void 0?new vT(a,t,e):new xT(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new ST(a),Rp(n,h)),n=h}}}class Ga{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);yT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Pp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const MT=37297;let ET=0;function TT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function wT(t){const e=$e.getPrimaries($e.workingColorSpace),n=$e.getPrimaries(t);let i;switch(e===n?i="":e===_l&&n===gl?i="LinearDisplayP3ToLinearSRGB":e===gl&&n===_l&&(i="LinearSRGBToLinearDisplayP3"),t){case er:case Ol:return[i,"LinearTransferOETF"];case jn:case yd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function bp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+TT(t.getShaderSource(e),o)}else return r}function AT(t,e){const n=wT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function CT(t,e){let n;switch(e){case Vx:n="Linear";break;case Gx:n="Reinhard";break;case Wx:n="Cineon";break;case Xx:n="ACESFilmic";break;case Yx:n="AgX";break;case qx:n="Neutral";break;case jx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ta=new F;function RT(){$e.getLuminanceCoefficients(Ta);const t=Ta.x.toFixed(4),e=Ta.y.toFixed(4),n=Ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function bT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function LT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Js(t){return t!==""}function Lp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DT=/^[ \t]*#include +<([\w\d./]+)>/gm;function vf(t){return t.replace(DT,IT)}const NT=new Map;function IT(t,e){let n=Ie[e];if(n===void 0){const i=NT.get(e);if(i!==void 0)n=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vf(n)}const UT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Np(t){return t.replace(UT,FT)}function FT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ip(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function OT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===t_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===px?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function kT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ts:case ws:e="ENVMAP_TYPE_CUBE";break;case Fl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ws:e="ENVMAP_MODE_REFRACTION";break}return e}function BT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case n_:e="ENVMAP_BLENDING_MULTIPLY";break;case Bx:e="ENVMAP_BLENDING_MIX";break;case Hx:e="ENVMAP_BLENDING_ADD";break}return e}function HT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function VT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=OT(n),u=kT(n),f=zT(n),h=BT(n),d=HT(n),p=PT(n),v=bT(s),x=r.createProgram();let m,c,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Js).join(`
`),m.length>0&&(m+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Js).join(`
`),c.length>0&&(c+=`
`)):(m=[Ip(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),c=[Ip(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yi?"#define TONE_MAPPING":"",n.toneMapping!==Yi?Ie.tonemapping_pars_fragment:"",n.toneMapping!==Yi?CT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,AT("linearToOutputTexel",n.outputColorSpace),RT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Js).join(`
`)),o=vf(o),o=Lp(o,n),o=Dp(o,n),a=vf(a),a=Lp(a,n),a=Dp(a,n),o=Np(o),a=Np(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",n.glslVersion===$h?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const _=g+m+o,y=g+c+a,R=Pp(r,r.VERTEX_SHADER,_),w=Pp(r,r.FRAGMENT_SHADER,y);r.attachShader(x,R),r.attachShader(x,w),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(b){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(x).trim(),k=r.getShaderInfoLog(R).trim(),W=r.getShaderInfoLog(w).trim();let X=!0,V=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,R,w);else{const $=bp(r,R,"vertex"),D=bp(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+B+`
`+$+`
`+D)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(k===""||W==="")&&(V=!1);V&&(b.diagnostics={runnable:X,programLog:B,vertexShader:{log:k,prefix:m},fragmentShader:{log:W,prefix:c}})}r.deleteShader(R),r.deleteShader(w),P=new Ga(r,x),T=LT(r,x)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,MT)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ET++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=w,this}let GT=0;class WT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new XT(e),n.set(e,i)),i}}class XT{constructor(e){this.id=GT++,this.code=e,this.usedTimes=0}}function jT(t,e,n,i,r,s,o){const a=new v_,l=new WT,u=new Set,f=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return u.add(T),T===0?"uv":`uv${T}`}function m(T,S,b,B,k){const W=B.fog,X=k.geometry,V=T.isMeshStandardMaterial?B.environment:null,$=(T.isMeshStandardMaterial?n:e).get(T.envMap||V),D=$&&$.mapping===Fl?$.image.height:null,Y=v[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const Z=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,se=Z!==void 0?Z.length:0;let ye=0;X.morphAttributes.position!==void 0&&(ye=1),X.morphAttributes.normal!==void 0&&(ye=2),X.morphAttributes.color!==void 0&&(ye=3);let Ve,G,te,fe;if(Y){const Xe=Yn[Y];Ve=Xe.vertexShader,G=Xe.fragmentShader}else Ve=T.vertexShader,G=T.fragmentShader,l.update(T),te=l.getVertexShaderID(T),fe=l.getFragmentShaderID(T);const ue=t.getRenderTarget(),Ae=k.isInstancedMesh===!0,Le=k.isBatchedMesh===!0,ke=!!T.map,ut=!!T.matcap,L=!!$,pt=!!T.aoMap,Ke=!!T.lightMap,Qe=!!T.bumpMap,Me=!!T.normalMap,mt=!!T.displacementMap,Pe=!!T.emissiveMap,De=!!T.metalnessMap,C=!!T.roughnessMap,M=T.anisotropy>0,H=T.clearcoat>0,K=T.dispersion>0,J=T.iridescence>0,Q=T.sheen>0,Ee=T.transmission>0,le=M&&!!T.anisotropyMap,pe=H&&!!T.clearcoatMap,Ne=H&&!!T.clearcoatNormalMap,ne=H&&!!T.clearcoatRoughnessMap,he=J&&!!T.iridescenceMap,Be=J&&!!T.iridescenceThicknessMap,Re=Q&&!!T.sheenColorMap,ge=Q&&!!T.sheenRoughnessMap,be=!!T.specularMap,Fe=!!T.specularColorMap,st=!!T.specularIntensityMap,N=Ee&&!!T.transmissionMap,ie=Ee&&!!T.thicknessMap,j=!!T.gradientMap,q=!!T.alphaMap,oe=T.alphaTest>0,Te=!!T.alphaHash,Ge=!!T.extensions;let gt=Yi;T.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(gt=t.toneMapping);const Nt={shaderID:Y,shaderType:T.type,shaderName:T.name,vertexShader:Ve,fragmentShader:G,defines:T.defines,customVertexShaderID:te,customFragmentShaderID:fe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Le,batchingColor:Le&&k._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&k.instanceColor!==null,instancingMorph:Ae&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?t.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:er,alphaToCoverage:!!T.alphaToCoverage,map:ke,matcap:ut,envMap:L,envMapMode:L&&$.mapping,envMapCubeUVHeight:D,aoMap:pt,lightMap:Ke,bumpMap:Qe,normalMap:Me,displacementMap:d&&mt,emissiveMap:Pe,normalMapObjectSpace:Me&&T.normalMapType===Jx,normalMapTangentSpace:Me&&T.normalMapType===Qx,metalnessMap:De,roughnessMap:C,anisotropy:M,anisotropyMap:le,clearcoat:H,clearcoatMap:pe,clearcoatNormalMap:Ne,clearcoatRoughnessMap:ne,dispersion:K,iridescence:J,iridescenceMap:he,iridescenceThicknessMap:Be,sheen:Q,sheenColorMap:Re,sheenRoughnessMap:ge,specularMap:be,specularColorMap:Fe,specularIntensityMap:st,transmission:Ee,transmissionMap:N,thicknessMap:ie,gradientMap:j,opaque:T.transparent===!1&&T.blending===ps&&T.alphaToCoverage===!1,alphaMap:q,alphaTest:oe,alphaHash:Te,combine:T.combine,mapUv:ke&&x(T.map.channel),aoMapUv:pt&&x(T.aoMap.channel),lightMapUv:Ke&&x(T.lightMap.channel),bumpMapUv:Qe&&x(T.bumpMap.channel),normalMapUv:Me&&x(T.normalMap.channel),displacementMapUv:mt&&x(T.displacementMap.channel),emissiveMapUv:Pe&&x(T.emissiveMap.channel),metalnessMapUv:De&&x(T.metalnessMap.channel),roughnessMapUv:C&&x(T.roughnessMap.channel),anisotropyMapUv:le&&x(T.anisotropyMap.channel),clearcoatMapUv:pe&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:ge&&x(T.sheenRoughnessMap.channel),specularMapUv:be&&x(T.specularMap.channel),specularColorMapUv:Fe&&x(T.specularColorMap.channel),specularIntensityMapUv:st&&x(T.specularIntensityMap.channel),transmissionMapUv:N&&x(T.transmissionMap.channel),thicknessMapUv:ie&&x(T.thicknessMap.channel),alphaMapUv:q&&x(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Me||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(ke||q),fog:!!W,useFog:T.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ye,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:gt,decodeVideoTexture:ke&&T.map.isVideoTexture===!0&&$e.getTransfer(T.map.colorSpace)===nt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ui,flipSided:T.side===rn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ge&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&T.extensions.multiDraw===!0||Le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Nt.vertexUv1s=u.has(1),Nt.vertexUv2s=u.has(2),Nt.vertexUv3s=u.has(3),u.clear(),Nt}function c(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const b in T.defines)S.push(b),S.push(T.defines[b]);return T.isRawShaderMaterial===!1&&(g(S,T),_(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function g(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function _(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),T.push(a.mask)}function y(T){const S=v[T.type];let b;if(S){const B=Yn[S];b=RS.clone(B.uniforms)}else b=T.uniforms;return b}function R(T,S){let b;for(let B=0,k=f.length;B<k;B++){const W=f[B];if(W.cacheKey===S){b=W,++b.usedTimes;break}}return b===void 0&&(b=new VT(t,S,T,s),f.push(b)),b}function w(T){if(--T.usedTimes===0){const S=f.indexOf(T);f[S]=f[f.length-1],f.pop(),T.destroy()}}function A(T){l.remove(T)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:y,acquireProgram:R,releaseProgram:w,releaseShaderCache:A,programs:f,dispose:P}}function YT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function qT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Up(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Fp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,p,v,x,m){let c=t[e];return c===void 0?(c={id:h.id,object:h,geometry:d,material:p,groupOrder:v,renderOrder:h.renderOrder,z:x,group:m},t[e]=c):(c.id=h.id,c.object=h,c.geometry=d,c.material=p,c.groupOrder=v,c.renderOrder=h.renderOrder,c.z=x,c.group=m),e++,c}function a(h,d,p,v,x,m){const c=o(h,d,p,v,x,m);p.transmission>0?i.push(c):p.transparent===!0?r.push(c):n.push(c)}function l(h,d,p,v,x,m){const c=o(h,d,p,v,x,m);p.transmission>0?i.unshift(c):p.transparent===!0?r.unshift(c):n.unshift(c)}function u(h,d){n.length>1&&n.sort(h||qT),i.length>1&&i.sort(d||Up),r.length>1&&r.sort(d||Up)}function f(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function $T(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Fp,t.set(i,[o])):r>=s.length?(o=new Fp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function KT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Je};break;case"SpotLight":n={position:new F,direction:new F,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function ZT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let QT=0;function JT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function e1(t){const e=new KT,n=ZT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new F);const r=new F,s=new Tt,o=new Tt;function a(u){let f=0,h=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,v=0,x=0,m=0,c=0,g=0,_=0,y=0,R=0,w=0,A=0;u.sort(JT);for(let T=0,S=u.length;T<S;T++){const b=u[T],B=b.color,k=b.intensity,W=b.distance,X=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)f+=B.r*k,h+=B.g*k,d+=B.b*k;else if(b.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(b.sh.coefficients[V],k);A++}else if(b.isDirectionalLight){const V=e.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const $=b.shadow,D=n.get(b);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=b.shadow.matrix,g++}i.directional[p]=V,p++}else if(b.isSpotLight){const V=e.get(b);V.position.setFromMatrixPosition(b.matrixWorld),V.color.copy(B).multiplyScalar(k),V.distance=W,V.coneCos=Math.cos(b.angle),V.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),V.decay=b.decay,i.spot[x]=V;const $=b.shadow;if(b.map&&(i.spotLightMap[R]=b.map,R++,$.updateMatrices(b),b.castShadow&&w++),i.spotLightMatrix[x]=$.matrix,b.castShadow){const D=n.get(b);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,i.spotShadow[x]=D,i.spotShadowMap[x]=X,y++}x++}else if(b.isRectAreaLight){const V=e.get(b);V.color.copy(B).multiplyScalar(k),V.halfWidth.set(b.width*.5,0,0),V.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=V,m++}else if(b.isPointLight){const V=e.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),V.distance=b.distance,V.decay=b.decay,b.castShadow){const $=b.shadow,D=n.get(b);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,D.shadowCameraNear=$.camera.near,D.shadowCameraFar=$.camera.far,i.pointShadow[v]=D,i.pointShadowMap[v]=X,i.pointShadowMatrix[v]=b.shadow.matrix,_++}i.point[v]=V,v++}else if(b.isHemisphereLight){const V=e.get(b);V.skyColor.copy(b.color).multiplyScalar(k),V.groundColor.copy(b.groundColor).multiplyScalar(k),i.hemi[c]=V,c++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==p||P.pointLength!==v||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==c||P.numDirectionalShadows!==g||P.numPointShadows!==_||P.numSpotShadows!==y||P.numSpotMaps!==R||P.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=c,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+R-w,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,P.directionalLength=p,P.pointLength=v,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=c,P.numDirectionalShadows=g,P.numPointShadows=_,P.numSpotShadows=y,P.numSpotMaps=R,P.numLightProbes=A,i.version=QT++)}function l(u,f){let h=0,d=0,p=0,v=0,x=0;const m=f.matrixWorldInverse;for(let c=0,g=u.length;c<g;c++){const _=u[c];if(_.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(_.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Op(t){const e=new e1(t),n=[],i=[];function r(f){u.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function t1(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Op(t),e.set(r,[a])):s>=o.length?(a=new Op(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class n1 extends kl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class i1 extends kl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const r1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function o1(t,e,n){let i=new A_;const r=new He,s=new He,o=new bt,a=new n1({depthPacking:Zx}),l=new i1,u={},f=n.maxTextureSize,h={[Ki]:rn,[rn]:Ki,[ui]:ui},d=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:r1,fragmentShader:s1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new Vn;v.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Tn(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=t_;let c=this.type;this.render=function(w,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),B=t.state;B.setBlending(ji),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=c!==oi&&this.type===oi,W=c===oi&&this.type!==oi;for(let X=0,V=w.length;X<V;X++){const $=w[X],D=$.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const Y=D.getFrameExtents();if(r.multiply(Y),s.copy(D.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Y.x),r.x=s.x*Y.x,D.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Y.y),r.y=s.y*Y.y,D.mapSize.y=s.y)),D.map===null||k===!0||W===!0){const se=this.type!==oi?{minFilter:En,magFilter:En}:{};D.map!==null&&D.map.dispose(),D.map=new Cr(r.x,r.y,se),D.map.texture.name=$.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const Z=D.getViewportCount();for(let se=0;se<Z;se++){const ye=D.getViewport(se);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),B.viewport(o),D.updateMatrices($,se),i=D.getFrustum(),y(A,P,D.camera,$,this.type)}D.isPointLightShadow!==!0&&this.type===oi&&g(D,P),D.needsUpdate=!1}c=this.type,m.needsUpdate=!1,t.setRenderTarget(T,S,b)};function g(w,A){const P=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Cr(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(A,null,P,d,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(A,null,P,p,x,null)}function _(w,A,P,T){let S=null;const b=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(b!==void 0)S=b;else if(S=P.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const B=S.uuid,k=A.uuid;let W=u[B];W===void 0&&(W={},u[B]=W);let X=W[k];X===void 0&&(X=S.clone(),W[k]=X,A.addEventListener("dispose",R)),S=X}if(S.visible=A.visible,S.wireframe=A.wireframe,T===oi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=t.properties.get(S);B.light=P}return S}function y(w,A,P,T,S){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===oi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const k=e.update(w),W=w.material;if(Array.isArray(W)){const X=k.groups;for(let V=0,$=X.length;V<$;V++){const D=X[V],Y=W[D.materialIndex];if(Y&&Y.visible){const Z=_(w,Y,T,S);w.onBeforeShadow(t,w,A,P,k,Z,D),t.renderBufferDirect(P,null,k,Z,w,D),w.onAfterShadow(t,w,A,P,k,Z,D)}}}else if(W.visible){const X=_(w,W,T,S);w.onBeforeShadow(t,w,A,P,k,X,null),t.renderBufferDirect(P,null,k,X,w,null),w.onAfterShadow(t,w,A,P,k,X,null)}}const B=w.children;for(let k=0,W=B.length;k<W;k++)y(B[k],A,P,T,S)}function R(w){w.target.removeEventListener("dispose",R);for(const P in u){const T=u[P],S=w.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}function a1(t){function e(){let N=!1;const ie=new bt;let j=null;const q=new bt(0,0,0,0);return{setMask:function(oe){j!==oe&&!N&&(t.colorMask(oe,oe,oe,oe),j=oe)},setLocked:function(oe){N=oe},setClear:function(oe,Te,Ge,gt,Nt){Nt===!0&&(oe*=gt,Te*=gt,Ge*=gt),ie.set(oe,Te,Ge,gt),q.equals(ie)===!1&&(t.clearColor(oe,Te,Ge,gt),q.copy(ie))},reset:function(){N=!1,j=null,q.set(-1,0,0,0)}}}function n(){let N=!1,ie=null,j=null,q=null;return{setTest:function(oe){oe?fe(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(oe){ie!==oe&&!N&&(t.depthMask(oe),ie=oe)},setFunc:function(oe){if(j!==oe){switch(oe){case Nx:t.depthFunc(t.NEVER);break;case Ix:t.depthFunc(t.ALWAYS);break;case Ux:t.depthFunc(t.LESS);break;case pl:t.depthFunc(t.LEQUAL);break;case Fx:t.depthFunc(t.EQUAL);break;case Ox:t.depthFunc(t.GEQUAL);break;case kx:t.depthFunc(t.GREATER);break;case zx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}j=oe}},setLocked:function(oe){N=oe},setClear:function(oe){q!==oe&&(t.clearDepth(oe),q=oe)},reset:function(){N=!1,ie=null,j=null,q=null}}}function i(){let N=!1,ie=null,j=null,q=null,oe=null,Te=null,Ge=null,gt=null,Nt=null;return{setTest:function(Xe){N||(Xe?fe(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(Xe){ie!==Xe&&!N&&(t.stencilMask(Xe),ie=Xe)},setFunc:function(Xe,ei,Gn){(j!==Xe||q!==ei||oe!==Gn)&&(t.stencilFunc(Xe,ei,Gn),j=Xe,q=ei,oe=Gn)},setOp:function(Xe,ei,Gn){(Te!==Xe||Ge!==ei||gt!==Gn)&&(t.stencilOp(Xe,ei,Gn),Te=Xe,Ge=ei,gt=Gn)},setLocked:function(Xe){N=Xe},setClear:function(Xe){Nt!==Xe&&(t.clearStencil(Xe),Nt=Xe)},reset:function(){N=!1,ie=null,j=null,q=null,oe=null,Te=null,Ge=null,gt=null,Nt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},f={},h=new WeakMap,d=[],p=null,v=!1,x=null,m=null,c=null,g=null,_=null,y=null,R=null,w=new Je(0,0,0),A=0,P=!1,T=null,S=null,b=null,B=null,k=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,V=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec($)[1]),X=V>=1):$.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=V>=2);let D=null,Y={};const Z=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),ye=new bt().fromArray(Z),Ve=new bt().fromArray(se);function G(N,ie,j,q){const oe=new Uint8Array(4),Te=t.createTexture();t.bindTexture(N,Te),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<j;Ge++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,t.RGBA,1,1,q,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(ie+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return Te}const te={};te[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),fe(t.DEPTH_TEST),s.setFunc(pl),Qe(!1),Me(Gh),fe(t.CULL_FACE),pt(ji);function fe(N){u[N]!==!0&&(t.enable(N),u[N]=!0)}function ue(N){u[N]!==!1&&(t.disable(N),u[N]=!1)}function Ae(N,ie){return f[N]!==ie?(t.bindFramebuffer(N,ie),f[N]=ie,N===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ie),N===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ie),!0):!1}function Le(N,ie){let j=d,q=!1;if(N){j=h.get(ie),j===void 0&&(j=[],h.set(ie,j));const oe=N.textures;if(j.length!==oe.length||j[0]!==t.COLOR_ATTACHMENT0){for(let Te=0,Ge=oe.length;Te<Ge;Te++)j[Te]=t.COLOR_ATTACHMENT0+Te;j.length=oe.length,q=!0}}else j[0]!==t.BACK&&(j[0]=t.BACK,q=!0);q&&t.drawBuffers(j)}function ke(N){return p!==N?(t.useProgram(N),p=N,!0):!1}const ut={[dr]:t.FUNC_ADD,[gx]:t.FUNC_SUBTRACT,[_x]:t.FUNC_REVERSE_SUBTRACT};ut[vx]=t.MIN,ut[xx]=t.MAX;const L={[Sx]:t.ZERO,[yx]:t.ONE,[Mx]:t.SRC_COLOR,[kc]:t.SRC_ALPHA,[Rx]:t.SRC_ALPHA_SATURATE,[Ax]:t.DST_COLOR,[Tx]:t.DST_ALPHA,[Ex]:t.ONE_MINUS_SRC_COLOR,[zc]:t.ONE_MINUS_SRC_ALPHA,[Cx]:t.ONE_MINUS_DST_COLOR,[wx]:t.ONE_MINUS_DST_ALPHA,[Px]:t.CONSTANT_COLOR,[bx]:t.ONE_MINUS_CONSTANT_COLOR,[Lx]:t.CONSTANT_ALPHA,[Dx]:t.ONE_MINUS_CONSTANT_ALPHA};function pt(N,ie,j,q,oe,Te,Ge,gt,Nt,Xe){if(N===ji){v===!0&&(ue(t.BLEND),v=!1);return}if(v===!1&&(fe(t.BLEND),v=!0),N!==mx){if(N!==x||Xe!==P){if((m!==dr||_!==dr)&&(t.blendEquation(t.FUNC_ADD),m=dr,_=dr),Xe)switch(N){case ps:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wh:t.blendFunc(t.ONE,t.ONE);break;case Xh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case jh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ps:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Xh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case jh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}c=null,g=null,y=null,R=null,w.set(0,0,0),A=0,x=N,P=Xe}return}oe=oe||ie,Te=Te||j,Ge=Ge||q,(ie!==m||oe!==_)&&(t.blendEquationSeparate(ut[ie],ut[oe]),m=ie,_=oe),(j!==c||q!==g||Te!==y||Ge!==R)&&(t.blendFuncSeparate(L[j],L[q],L[Te],L[Ge]),c=j,g=q,y=Te,R=Ge),(gt.equals(w)===!1||Nt!==A)&&(t.blendColor(gt.r,gt.g,gt.b,Nt),w.copy(gt),A=Nt),x=N,P=!1}function Ke(N,ie){N.side===ui?ue(t.CULL_FACE):fe(t.CULL_FACE);let j=N.side===rn;ie&&(j=!j),Qe(j),N.blending===ps&&N.transparent===!1?pt(ji):pt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const q=N.stencilWrite;o.setTest(q),q&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Pe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(N){T!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),T=N)}function Me(N){N!==dx?(fe(t.CULL_FACE),N!==S&&(N===Gh?t.cullFace(t.BACK):N===hx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),S=N}function mt(N){N!==b&&(X&&t.lineWidth(N),b=N)}function Pe(N,ie,j){N?(fe(t.POLYGON_OFFSET_FILL),(B!==ie||k!==j)&&(t.polygonOffset(ie,j),B=ie,k=j)):ue(t.POLYGON_OFFSET_FILL)}function De(N){N?fe(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function C(N){N===void 0&&(N=t.TEXTURE0+W-1),D!==N&&(t.activeTexture(N),D=N)}function M(N,ie,j){j===void 0&&(D===null?j=t.TEXTURE0+W-1:j=D);let q=Y[j];q===void 0&&(q={type:void 0,texture:void 0},Y[j]=q),(q.type!==N||q.texture!==ie)&&(D!==j&&(t.activeTexture(j),D=j),t.bindTexture(N,ie||te[N]),q.type=N,q.texture=ie)}function H(){const N=Y[D];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function K(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Be(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(N){ye.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),ye.copy(N))}function ge(N){Ve.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Ve.copy(N))}function be(N,ie){let j=l.get(ie);j===void 0&&(j=new WeakMap,l.set(ie,j));let q=j.get(N);q===void 0&&(q=t.getUniformBlockIndex(ie,N.name),j.set(N,q))}function Fe(N,ie){const q=l.get(ie).get(N);a.get(ie)!==q&&(t.uniformBlockBinding(ie,q,N.__bindingPointIndex),a.set(ie,q))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},D=null,Y={},f={},h=new WeakMap,d=[],p=null,v=!1,x=null,m=null,c=null,g=null,_=null,y=null,R=null,w=new Je(0,0,0),A=0,P=!1,T=null,S=null,b=null,B=null,k=null,ye.set(0,0,t.canvas.width,t.canvas.height),Ve.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:fe,disable:ue,bindFramebuffer:Ae,drawBuffers:Le,useProgram:ke,setBlending:pt,setMaterial:Ke,setFlipSided:Qe,setCullFace:Me,setLineWidth:mt,setPolygonOffset:Pe,setScissorTest:De,activeTexture:C,bindTexture:M,unbindTexture:H,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:he,texImage3D:Be,updateUBOMapping:be,uniformBlockBinding:Fe,texStorage2D:Ne,texStorage3D:ne,texSubImage2D:Q,texSubImage3D:Ee,compressedTexSubImage2D:le,compressedTexSubImage3D:pe,scissor:Re,viewport:ge,reset:st}}function kp(t,e,n,i){const r=l1(i);switch(n){case a_:return t*e;case u_:return t*e;case c_:return t*e*2;case f_:return t*e/r.components*r.byteLength;case vd:return t*e/r.components*r.byteLength;case d_:return t*e*2/r.components*r.byteLength;case xd:return t*e*2/r.components*r.byteLength;case l_:return t*e*3/r.components*r.byteLength;case kn:return t*e*4/r.components*r.byteLength;case Sd:return t*e*4/r.components*r.byteLength;case ka:case za:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ba:case Ha:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xc:case Yc:return Math.max(t,16)*Math.max(e,8)/4;case Wc:case jc:return Math.max(t,8)*Math.max(e,8)/2;case qc:case $c:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Kc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ef:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case tf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case nf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case rf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case sf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case of:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case af:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case lf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case uf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case cf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ff:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Va:case df:case hf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case h_:case pf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case mf:case gf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function l1(t){switch(t){case xi:case r_:return{byteLength:1,components:1};case Ro:case s_:case Io:return{byteLength:2,components:1};case gd:case _d:return{byteLength:2,components:4};case Ar:case md:case di:return{byteLength:4,components:1};case o_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function u1(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new He,f=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,M){return p?new OffscreenCanvas(C,M):xl("canvas")}function x(C,M,H){let K=1;const J=De(C);if((J.width>H||J.height>H)&&(K=H/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Q=Math.floor(K*J.width),Ee=Math.floor(K*J.height);h===void 0&&(h=v(Q,Ee));const le=M?v(Q,Ee):h;return le.width=Q,le.height=Ee,le.getContext("2d").drawImage(C,0,0,Q,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Q+"x"+Ee+")."),le}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==En&&C.minFilter!==On}function c(C){t.generateMipmap(C)}function g(C,M,H,K,J=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=M;if(M===t.RED&&(H===t.FLOAT&&(Q=t.R32F),H===t.HALF_FLOAT&&(Q=t.R16F),H===t.UNSIGNED_BYTE&&(Q=t.R8)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(Q=t.R8UI),H===t.UNSIGNED_SHORT&&(Q=t.R16UI),H===t.UNSIGNED_INT&&(Q=t.R32UI),H===t.BYTE&&(Q=t.R8I),H===t.SHORT&&(Q=t.R16I),H===t.INT&&(Q=t.R32I)),M===t.RG&&(H===t.FLOAT&&(Q=t.RG32F),H===t.HALF_FLOAT&&(Q=t.RG16F),H===t.UNSIGNED_BYTE&&(Q=t.RG8)),M===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(Q=t.RG8UI),H===t.UNSIGNED_SHORT&&(Q=t.RG16UI),H===t.UNSIGNED_INT&&(Q=t.RG32UI),H===t.BYTE&&(Q=t.RG8I),H===t.SHORT&&(Q=t.RG16I),H===t.INT&&(Q=t.RG32I)),M===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),M===t.RGBA){const Ee=J?ml:$e.getTransfer(K);H===t.FLOAT&&(Q=t.RGBA32F),H===t.HALF_FLOAT&&(Q=t.RGBA16F),H===t.UNSIGNED_BYTE&&(Q=Ee===nt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function _(C,M){let H;return C?M===null||M===Ar||M===As?H=t.DEPTH24_STENCIL8:M===di?H=t.DEPTH32F_STENCIL8:M===Ro&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ar||M===As?H=t.DEPTH_COMPONENT24:M===di?H=t.DEPTH_COMPONENT32F:M===Ro&&(H=t.DEPTH_COMPONENT16),H}function y(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==En&&C.minFilter!==On?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function R(C){const M=C.target;M.removeEventListener("dispose",R),A(M),M.isVideoTexture&&f.delete(M)}function w(C){const M=C.target;M.removeEventListener("dispose",w),T(M)}function A(C){const M=i.get(C);if(M.__webglInit===void 0)return;const H=C.source,K=d.get(H);if(K){const J=K[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(C),Object.keys(K).length===0&&d.delete(H)}i.remove(C)}function P(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const H=C.source,K=d.get(H);delete K[M.__cacheKey],o.memory.textures--}function T(C){const M=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let J=0;J<M.__webglFramebuffer[K].length;J++)t.deleteFramebuffer(M.__webglFramebuffer[K][J]);else t.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)t.deleteFramebuffer(M.__webglFramebuffer[K]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=C.textures;for(let K=0,J=H.length;K<J;K++){const Q=i.get(H[K]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(H[K])}i.remove(C)}let S=0;function b(){S=0}function B(){const C=S;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),S+=1,C}function k(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function W(C,M){const H=i.get(C);if(C.isVideoTexture&&mt(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(H,C,M);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function X(C,M){const H=i.get(C);if(C.version>0&&H.__version!==C.version){Ve(H,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function V(C,M){const H=i.get(C);if(C.version>0&&H.__version!==C.version){Ve(H,C,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function $(C,M){const H=i.get(C);if(C.version>0&&H.__version!==C.version){G(H,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const D={[Vc]:t.REPEAT,[_r]:t.CLAMP_TO_EDGE,[Gc]:t.MIRRORED_REPEAT},Y={[En]:t.NEAREST,[$x]:t.NEAREST_MIPMAP_NEAREST,[ia]:t.NEAREST_MIPMAP_LINEAR,[On]:t.LINEAR,[vu]:t.LINEAR_MIPMAP_NEAREST,[vr]:t.LINEAR_MIPMAP_LINEAR},Z={[eS]:t.NEVER,[oS]:t.ALWAYS,[tS]:t.LESS,[p_]:t.LEQUAL,[nS]:t.EQUAL,[sS]:t.GEQUAL,[iS]:t.GREATER,[rS]:t.NOTEQUAL};function se(C,M){if(M.type===di&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===On||M.magFilter===vu||M.magFilter===ia||M.magFilter===vr||M.minFilter===On||M.minFilter===vu||M.minFilter===ia||M.minFilter===vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,D[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,D[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,D[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Y[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Y[M.minFilter]),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Z[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===En||M.minFilter!==ia&&M.minFilter!==vr||M.type===di&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ye(C,M){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",R));const K=M.source;let J=d.get(K);J===void 0&&(J={},d.set(K,J));const Q=k(M);if(Q!==C.__cacheKey){J[Q]===void 0&&(J[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),J[Q].usedTimes++;const Ee=J[C.__cacheKey];Ee!==void 0&&(J[C.__cacheKey].usedTimes--,Ee.usedTimes===0&&P(M)),C.__cacheKey=Q,C.__webglTexture=J[Q].texture}return H}function Ve(C,M,H){let K=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=t.TEXTURE_3D);const J=ye(C,M),Q=M.source;n.bindTexture(K,C.__webglTexture,t.TEXTURE0+H);const Ee=i.get(Q);if(Q.version!==Ee.__version||J===!0){n.activeTexture(t.TEXTURE0+H);const le=$e.getPrimaries($e.workingColorSpace),pe=M.colorSpace===Ui?null:$e.getPrimaries(M.colorSpace),Ne=M.colorSpace===Ui||le===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ne=x(M.image,!1,r.maxTextureSize);ne=Pe(M,ne);const he=s.convert(M.format,M.colorSpace),Be=s.convert(M.type);let Re=g(M.internalFormat,he,Be,M.colorSpace,M.isVideoTexture);se(K,M);let ge;const be=M.mipmaps,Fe=M.isVideoTexture!==!0,st=Ee.__version===void 0||J===!0,N=Q.dataReady,ie=y(M,ne);if(M.isDepthTexture)Re=_(M.format===Cs,M.type),st&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,Re,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,Re,ne.width,ne.height,0,he,Be,null));else if(M.isDataTexture)if(be.length>0){Fe&&st&&n.texStorage2D(t.TEXTURE_2D,ie,Re,be[0].width,be[0].height);for(let j=0,q=be.length;j<q;j++)ge=be[j],Fe?N&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ge.width,ge.height,he,Be,ge.data):n.texImage2D(t.TEXTURE_2D,j,Re,ge.width,ge.height,0,he,Be,ge.data);M.generateMipmaps=!1}else Fe?(st&&n.texStorage2D(t.TEXTURE_2D,ie,Re,ne.width,ne.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ne.width,ne.height,he,Be,ne.data)):n.texImage2D(t.TEXTURE_2D,0,Re,ne.width,ne.height,0,he,Be,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Fe&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,Re,be[0].width,be[0].height,ne.depth);for(let j=0,q=be.length;j<q;j++)if(ge=be[j],M.format!==kn)if(he!==null)if(Fe){if(N)if(M.layerUpdates.size>0){const oe=kp(ge.width,ge.height,M.format,M.type);for(const Te of M.layerUpdates){const Ge=ge.data.subarray(Te*oe/ge.data.BYTES_PER_ELEMENT,(Te+1)*oe/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,Te,ge.width,ge.height,1,he,Ge,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,ge.width,ge.height,ne.depth,he,ge.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,Re,ge.width,ge.height,ne.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,ge.width,ge.height,ne.depth,he,Be,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,Re,ge.width,ge.height,ne.depth,0,he,Be,ge.data)}else{Fe&&st&&n.texStorage2D(t.TEXTURE_2D,ie,Re,be[0].width,be[0].height);for(let j=0,q=be.length;j<q;j++)ge=be[j],M.format!==kn?he!==null?Fe?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,ge.width,ge.height,he,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,j,Re,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?N&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ge.width,ge.height,he,Be,ge.data):n.texImage2D(t.TEXTURE_2D,j,Re,ge.width,ge.height,0,he,Be,ge.data)}else if(M.isDataArrayTexture)if(Fe){if(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,Re,ne.width,ne.height,ne.depth),N)if(M.layerUpdates.size>0){const j=kp(ne.width,ne.height,M.format,M.type);for(const q of M.layerUpdates){const oe=ne.data.subarray(q*j/ne.data.BYTES_PER_ELEMENT,(q+1)*j/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,q,ne.width,ne.height,1,he,Be,oe)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,he,Be,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,ne.width,ne.height,ne.depth,0,he,Be,ne.data);else if(M.isData3DTexture)Fe?(st&&n.texStorage3D(t.TEXTURE_3D,ie,Re,ne.width,ne.height,ne.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,he,Be,ne.data)):n.texImage3D(t.TEXTURE_3D,0,Re,ne.width,ne.height,ne.depth,0,he,Be,ne.data);else if(M.isFramebufferTexture){if(st)if(Fe)n.texStorage2D(t.TEXTURE_2D,ie,Re,ne.width,ne.height);else{let j=ne.width,q=ne.height;for(let oe=0;oe<ie;oe++)n.texImage2D(t.TEXTURE_2D,oe,Re,j,q,0,he,Be,null),j>>=1,q>>=1}}else if(be.length>0){if(Fe&&st){const j=De(be[0]);n.texStorage2D(t.TEXTURE_2D,ie,Re,j.width,j.height)}for(let j=0,q=be.length;j<q;j++)ge=be[j],Fe?N&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,he,Be,ge):n.texImage2D(t.TEXTURE_2D,j,Re,he,Be,ge);M.generateMipmaps=!1}else if(Fe){if(st){const j=De(ne);n.texStorage2D(t.TEXTURE_2D,ie,Re,j.width,j.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,Be,ne)}else n.texImage2D(t.TEXTURE_2D,0,Re,he,Be,ne);m(M)&&c(K),Ee.__version=Q.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function G(C,M,H){if(M.image.length!==6)return;const K=ye(C,M),J=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+H);const Q=i.get(J);if(J.version!==Q.__version||K===!0){n.activeTexture(t.TEXTURE0+H);const Ee=$e.getPrimaries($e.workingColorSpace),le=M.colorSpace===Ui?null:$e.getPrimaries(M.colorSpace),pe=M.colorSpace===Ui||Ee===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ne=M.isCompressedTexture||M.image[0].isCompressedTexture,ne=M.image[0]&&M.image[0].isDataTexture,he=[];for(let q=0;q<6;q++)!Ne&&!ne?he[q]=x(M.image[q],!0,r.maxCubemapSize):he[q]=ne?M.image[q].image:M.image[q],he[q]=Pe(M,he[q]);const Be=he[0],Re=s.convert(M.format,M.colorSpace),ge=s.convert(M.type),be=g(M.internalFormat,Re,ge,M.colorSpace),Fe=M.isVideoTexture!==!0,st=Q.__version===void 0||K===!0,N=J.dataReady;let ie=y(M,Be);se(t.TEXTURE_CUBE_MAP,M);let j;if(Ne){Fe&&st&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ie,be,Be.width,Be.height);for(let q=0;q<6;q++){j=he[q].mipmaps;for(let oe=0;oe<j.length;oe++){const Te=j[oe];M.format!==kn?Re!==null?Fe?N&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,oe,0,0,Te.width,Te.height,Re,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,oe,be,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,oe,0,0,Te.width,Te.height,Re,ge,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,oe,be,Te.width,Te.height,0,Re,ge,Te.data)}}}else{if(j=M.mipmaps,Fe&&st){j.length>0&&ie++;const q=De(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ie,be,q.width,q.height)}for(let q=0;q<6;q++)if(ne){Fe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,he[q].width,he[q].height,Re,ge,he[q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,be,he[q].width,he[q].height,0,Re,ge,he[q].data);for(let oe=0;oe<j.length;oe++){const Ge=j[oe].image[q].image;Fe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,oe+1,0,0,Ge.width,Ge.height,Re,ge,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,oe+1,be,Ge.width,Ge.height,0,Re,ge,Ge.data)}}else{Fe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Re,ge,he[q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,be,Re,ge,he[q]);for(let oe=0;oe<j.length;oe++){const Te=j[oe];Fe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,oe+1,0,0,Re,ge,Te.image[q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,oe+1,be,Re,ge,Te.image[q])}}}m(M)&&c(t.TEXTURE_CUBE_MAP),Q.__version=J.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function te(C,M,H,K,J,Q){const Ee=s.convert(H.format,H.colorSpace),le=s.convert(H.type),pe=g(H.internalFormat,Ee,le,H.colorSpace);if(!i.get(M).__hasExternalTextures){const ne=Math.max(1,M.width>>Q),he=Math.max(1,M.height>>Q);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,Q,pe,ne,he,M.depth,0,Ee,le,null):n.texImage2D(J,Q,pe,ne,he,0,Ee,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Me(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,J,i.get(H).__webglTexture,0,Qe(M)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,J,i.get(H).__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(C,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer){const K=M.depthTexture,J=K&&K.isDepthTexture?K.type:null,Q=_(M.stencilBuffer,J),Ee=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=Qe(M);Me(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,Q,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,Q,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Q,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,C)}else{const K=M.textures;for(let J=0;J<K.length;J++){const Q=K[J],Ee=s.convert(Q.format,Q.colorSpace),le=s.convert(Q.type),pe=g(Q.internalFormat,Ee,le,Q.colorSpace),Ne=Qe(M);H&&Me(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,pe,M.width,M.height):Me(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ne,pe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,pe,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ue(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const K=i.get(M.depthTexture).__webglTexture,J=Qe(M);if(M.depthTexture.format===ms)Me(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0);else if(M.depthTexture.format===Cs)Me(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ae(C){const M=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=K}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ue(M.__webglFramebuffer,C)}else if(H){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=t.createRenderbuffer(),fe(M.__webglDepthbuffer[K],C,!1);else{const J=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,Q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),fe(M.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,J)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Le(C,M,H){const K=i.get(C);M!==void 0&&te(K.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Ae(C)}function ke(C){const M=C.texture,H=i.get(C),K=i.get(M);C.addEventListener("dispose",w);const J=C.textures,Q=C.isWebGLCubeRenderTarget===!0,Ee=J.length>1;if(Ee||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=M.version,o.memory.textures++),Q){H.__webglFramebuffer=[];for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[le]=[];for(let pe=0;pe<M.mipmaps.length;pe++)H.__webglFramebuffer[le][pe]=t.createFramebuffer()}else H.__webglFramebuffer[le]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)H.__webglFramebuffer[le]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let le=0,pe=J.length;le<pe;le++){const Ne=i.get(J[le]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&Me(C)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){const pe=J[le];H.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[le]);const Ne=s.convert(pe.format,pe.colorSpace),ne=s.convert(pe.type),he=g(pe.internalFormat,Ne,ne,pe.colorSpace,C.isXRRenderTarget===!0),Be=Qe(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,he,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,H.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(H.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),se(t.TEXTURE_CUBE_MAP,M);for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)te(H.__webglFramebuffer[le][pe],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,pe);else te(H.__webglFramebuffer[le],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(M)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let le=0,pe=J.length;le<pe;le++){const Ne=J[le],ne=i.get(Ne);n.bindTexture(t.TEXTURE_2D,ne.__webglTexture),se(t.TEXTURE_2D,Ne),te(H.__webglFramebuffer,C,Ne,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),m(Ne)&&c(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,K.__webglTexture),se(le,M),M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)te(H.__webglFramebuffer[pe],C,M,t.COLOR_ATTACHMENT0,le,pe);else te(H.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,le,0);m(M)&&c(le),n.unbindTexture()}C.depthBuffer&&Ae(C)}function ut(C){const M=C.textures;for(let H=0,K=M.length;H<K;H++){const J=M[H];if(m(J)){const Q=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ee=i.get(J).__webglTexture;n.bindTexture(Q,Ee),c(Q),n.unbindTexture()}}}const L=[],pt=[];function Ke(C){if(C.samples>0){if(Me(C)===!1){const M=C.textures,H=C.width,K=C.height;let J=t.COLOR_BUFFER_BIT;const Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(C),le=M.length>1;if(le)for(let pe=0;pe<M.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let pe=0;pe<M.length;pe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[pe]);const Ne=i.get(M[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ne,0)}t.blitFramebuffer(0,0,H,K,0,0,H,K,J,t.NEAREST),l===!0&&(L.length=0,pt.length=0,L.push(t.COLOR_ATTACHMENT0+pe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(L.push(Q),pt.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,pt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,L))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let pe=0;pe<M.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[pe]);const Ne=i.get(M[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,Ne,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Qe(C){return Math.min(r.maxSamples,C.samples)}function Me(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function mt(C){const M=o.render.frame;f.get(C)!==M&&(f.set(C,M),C.update())}function Pe(C,M){const H=C.colorSpace,K=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==er&&H!==Ui&&($e.getTransfer(H)===nt?(K!==kn||J!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function De(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=b,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=V,this.setTextureCube=$,this.rebindTextures=Le,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Me}function c1(t,e){function n(i,r=Ui){let s;const o=$e.getTransfer(r);if(i===xi)return t.UNSIGNED_BYTE;if(i===gd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===_d)return t.UNSIGNED_SHORT_5_5_5_1;if(i===o_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===r_)return t.BYTE;if(i===s_)return t.SHORT;if(i===Ro)return t.UNSIGNED_SHORT;if(i===md)return t.INT;if(i===Ar)return t.UNSIGNED_INT;if(i===di)return t.FLOAT;if(i===Io)return t.HALF_FLOAT;if(i===a_)return t.ALPHA;if(i===l_)return t.RGB;if(i===kn)return t.RGBA;if(i===u_)return t.LUMINANCE;if(i===c_)return t.LUMINANCE_ALPHA;if(i===ms)return t.DEPTH_COMPONENT;if(i===Cs)return t.DEPTH_STENCIL;if(i===f_)return t.RED;if(i===vd)return t.RED_INTEGER;if(i===d_)return t.RG;if(i===xd)return t.RG_INTEGER;if(i===Sd)return t.RGBA_INTEGER;if(i===ka||i===za||i===Ba||i===Ha)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ka)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ka)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===za)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ba)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ha)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wc||i===Xc||i===jc||i===Yc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Wc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qc||i===$c||i===Kc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===qc||i===$c)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Kc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Zc||i===Qc||i===Jc||i===ef||i===tf||i===nf||i===rf||i===sf||i===of||i===af||i===lf||i===uf||i===cf||i===ff)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Zc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ef)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===of)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===af)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===lf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ff)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Va||i===df||i===hf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Va)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===df)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===h_||i===pf||i===mf||i===gf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Va)return s.COMPRESSED_RED_RGTC1_EXT;if(i===pf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===As?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class f1 extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Et extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const d1={type:"move"};class Xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),c=this._getHandJoint(u,x);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,v=.005;u.inputState.pinching&&d>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(d1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Et;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const h1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class m1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new sn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new yi({vertexShader:h1,fragmentShader:p1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Tn(new zl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g1 extends Ds{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,h=null,d=null,p=null,v=null;const x=new m1,m=n.getContextAttributes();let c=null,g=null;const _=[],y=[],R=new He;let w=null;const A=new yn;A.layers.enable(1),A.viewport=new bt;const P=new yn;P.layers.enable(2),P.viewport=new bt;const T=[A,P],S=new f1;S.layers.enable(1),S.layers.enable(2);let b=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let te=_[G];return te===void 0&&(te=new Xu,_[G]=te),te.getTargetRaySpace()},this.getControllerGrip=function(G){let te=_[G];return te===void 0&&(te=new Xu,_[G]=te),te.getGripSpace()},this.getHand=function(G){let te=_[G];return te===void 0&&(te=new Xu,_[G]=te),te.getHandSpace()};function k(G){const te=y.indexOf(G.inputSource);if(te===-1)return;const fe=_[te];fe!==void 0&&(fe.update(G.inputSource,G.frame,u||o),fe.dispatchEvent({type:G.type,data:G.inputSource}))}function W(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",X);for(let G=0;G<_.length;G++){const te=y[G];te!==null&&(y[G]=null,_[G].disconnect(te))}b=null,B=null,x.reset(),e.setRenderTarget(c),p=null,d=null,h=null,r=null,g=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",W),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Cr(p.framebufferWidth,p.framebufferHeight,{format:kn,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,fe=null,ue=null;m.depth&&(ue=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=m.stencil?Cs:ms,fe=m.stencil?As:Ar);const Ae={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Ae),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new Cr(d.textureWidth,d.textureHeight,{format:kn,type:xi,depthTexture:new R_(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(G){for(let te=0;te<G.removed.length;te++){const fe=G.removed[te],ue=y.indexOf(fe);ue>=0&&(y[ue]=null,_[ue].disconnect(fe))}for(let te=0;te<G.added.length;te++){const fe=G.added[te];let ue=y.indexOf(fe);if(ue===-1){for(let Le=0;Le<_.length;Le++)if(Le>=y.length){y.push(fe),ue=Le;break}else if(y[Le]===null){y[Le]=fe,ue=Le;break}if(ue===-1)break}const Ae=_[ue];Ae&&Ae.connect(fe)}}const V=new F,$=new F;function D(G,te,fe){V.setFromMatrixPosition(te.matrixWorld),$.setFromMatrixPosition(fe.matrixWorld);const ue=V.distanceTo($),Ae=te.projectionMatrix.elements,Le=fe.projectionMatrix.elements,ke=Ae[14]/(Ae[10]-1),ut=Ae[14]/(Ae[10]+1),L=(Ae[9]+1)/Ae[5],pt=(Ae[9]-1)/Ae[5],Ke=(Ae[8]-1)/Ae[0],Qe=(Le[8]+1)/Le[0],Me=ke*Ke,mt=ke*Qe,Pe=ue/(-Ke+Qe),De=Pe*-Ke;if(te.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(De),G.translateZ(Pe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Ae[10]===-1)G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const C=ke+Pe,M=ut+Pe,H=Me-De,K=mt+(ue-De),J=L*ut/M*C,Q=pt*ut/M*C;G.projectionMatrix.makePerspective(H,K,J,Q,C,M),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function Y(G,te){te===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(te.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let te=G.near,fe=G.far;x.texture!==null&&(x.depthNear>0&&(te=x.depthNear),x.depthFar>0&&(fe=x.depthFar)),S.near=P.near=A.near=te,S.far=P.far=A.far=fe,(b!==S.near||B!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,B=S.far);const ue=G.parent,Ae=S.cameras;Y(S,ue);for(let Le=0;Le<Ae.length;Le++)Y(Ae[Le],ue);Ae.length===2?D(S,A,P):S.projectionMatrix.copy(A.projectionMatrix),Z(G,S,ue)};function Z(G,te,fe){fe===null?G.matrix.copy(te.matrixWorld):(G.matrix.copy(fe.matrixWorld),G.matrix.invert(),G.matrix.multiply(te.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=_f*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let se=null;function ye(G,te){if(f=te.getViewerPose(u||o),v=te,f!==null){const fe=f.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let ue=!1;fe.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let Le=0;Le<fe.length;Le++){const ke=fe[Le];let ut=null;if(p!==null)ut=p.getViewport(ke);else{const pt=h.getViewSubImage(d,ke);ut=pt.viewport,Le===0&&(e.setRenderTargetTextures(g,pt.colorTexture,d.ignoreDepthValues?void 0:pt.depthStencilTexture),e.setRenderTarget(g))}let L=T[Le];L===void 0&&(L=new yn,L.layers.enable(Le),L.viewport=new bt,T[Le]=L),L.matrix.fromArray(ke.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(ke.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(ut.x,ut.y,ut.width,ut.height),Le===0&&(S.matrix.copy(L.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(L)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Le=h.getDepthInformation(fe[0]);Le&&Le.isValid&&Le.texture&&x.init(e,Le,r.renderState)}}for(let fe=0;fe<_.length;fe++){const ue=y[fe],Ae=_[fe];ue!==null&&Ae!==void 0&&Ae.update(ue,te,u||o)}se&&se(G,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),v=null}const Ve=new C_;Ve.setAnimationLoop(ye),this.setAnimationLoop=function(G){se=G},this.dispose=function(){}}}const ar=new Si,_1=new Tt;function v1(t,e){function n(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,E_(t)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function r(m,c,g,_,y){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(m,c):c.isMeshToonMaterial?(s(m,c),h(m,c)):c.isMeshPhongMaterial?(s(m,c),f(m,c)):c.isMeshStandardMaterial?(s(m,c),d(m,c),c.isMeshPhysicalMaterial&&p(m,c,y)):c.isMeshMatcapMaterial?(s(m,c),v(m,c)):c.isMeshDepthMaterial?s(m,c):c.isMeshDistanceMaterial?(s(m,c),x(m,c)):c.isMeshNormalMaterial?s(m,c):c.isLineBasicMaterial?(o(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?l(m,c,g,_):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,n(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===rn&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,n(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===rn&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,n(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,n(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const g=e.get(c),_=g.envMap,y=g.envMapRotation;_&&(m.envMap.value=_,ar.copy(y),ar.x*=-1,ar.y*=-1,ar.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),m.envMapRotation.value.setFromMatrix4(_1.makeRotationFromEuler(ar)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,m.lightMapTransform)),c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,m.aoMapTransform))}function o(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform))}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,g,_){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*g,m.scale.value=_*.5,c.map&&(m.map.value=c.map,n(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function f(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function h(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function d(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,m.roughnessMapTransform)),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,g){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===rn&&m.clearcoatNormalScale.value.negate())),c.dispersion>0&&(m.dispersion.value=c.dispersion),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,c){c.matcap&&(m.matcap.value=c.matcap)}function x(m,c){const g=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function x1(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const y=_.program;i.uniformBlockBinding(g,y)}function u(g,_){let y=r[g.id];y===void 0&&(v(g),y=f(g),r[g.id]=y,g.addEventListener("dispose",m));const R=_.program;i.updateUBOMapping(g,R);const w=e.render.frame;s[g.id]!==w&&(d(g),s[g.id]=w)}function f(g){const _=h();g.__bindingPointIndex=_;const y=t.createBuffer(),R=g.__size,w=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,R,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const _=r[g.id],y=g.uniforms,R=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let w=0,A=y.length;w<A;w++){const P=Array.isArray(y[w])?y[w]:[y[w]];for(let T=0,S=P.length;T<S;T++){const b=P[T];if(p(b,w,T,R)===!0){const B=b.__offset,k=Array.isArray(b.value)?b.value:[b.value];let W=0;for(let X=0;X<k.length;X++){const V=k[X],$=x(V);typeof V=="number"||typeof V=="boolean"?(b.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,B+W,b.__data)):V.isMatrix3?(b.__data[0]=V.elements[0],b.__data[1]=V.elements[1],b.__data[2]=V.elements[2],b.__data[3]=0,b.__data[4]=V.elements[3],b.__data[5]=V.elements[4],b.__data[6]=V.elements[5],b.__data[7]=0,b.__data[8]=V.elements[6],b.__data[9]=V.elements[7],b.__data[10]=V.elements[8],b.__data[11]=0):(V.toArray(b.__data,W),W+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,b.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,_,y,R){const w=g.value,A=_+"_"+y;if(R[A]===void 0)return typeof w=="number"||typeof w=="boolean"?R[A]=w:R[A]=w.clone(),!0;{const P=R[A];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return R[A]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function v(g){const _=g.uniforms;let y=0;const R=16;for(let A=0,P=_.length;A<P;A++){const T=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,b=T.length;S<b;S++){const B=T[S],k=Array.isArray(B.value)?B.value:[B.value];for(let W=0,X=k.length;W<X;W++){const V=k[W],$=x(V),D=y%R,Y=D%$.boundary,Z=D+Y;y+=Y,Z!==0&&R-Z<$.storage&&(y+=R-Z),B.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=$.storage}}}const w=y%R;return w>0&&(y+=R-w),g.__size=y,g.__cache={},this}function x(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function c(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class S1{constructor(e={}){const{canvas:n=lS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const c=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this.toneMapping=Yi,this.toneMappingExposure=1;const _=this;let y=!1,R=0,w=0,A=null,P=-1,T=null;const S=new bt,b=new bt;let B=null;const k=new Je(0);let W=0,X=n.width,V=n.height,$=1,D=null,Y=null;const Z=new bt(0,0,X,V),se=new bt(0,0,X,V);let ye=!1;const Ve=new A_;let G=!1,te=!1;const fe=new Tt,ue=new F,Ae=new bt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function ut(){return A===null?$:1}let L=i;function pt(E,I){return n.getContext(E,I)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${pd}`),n.addEventListener("webglcontextlost",j,!1),n.addEventListener("webglcontextrestored",q,!1),n.addEventListener("webglcontextcreationerror",oe,!1),L===null){const I="webgl2";if(L=pt(I,E),L===null)throw pt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ke,Qe,Me,mt,Pe,De,C,M,H,K,J,Q,Ee,le,pe,Ne,ne,he,Be,Re,ge,be,Fe,st;function N(){Ke=new AE(L),Ke.init(),be=new c1(L,Ke),Qe=new xE(L,Ke,e,be),Me=new a1(L),mt=new PE(L),Pe=new YT,De=new u1(L,Ke,Me,Pe,Qe,be,mt),C=new yE(_),M=new wE(_),H=new US(L),Fe=new _E(L,H),K=new CE(L,H,mt,Fe),J=new LE(L,K,H,mt),Be=new bE(L,Qe,De),Ne=new SE(Pe),Q=new jT(_,C,M,Ke,Qe,Fe,Ne),Ee=new v1(_,Pe),le=new $T,pe=new t1(Ke),he=new gE(_,C,M,Me,J,d,l),ne=new o1(_,J,Qe),st=new x1(L,mt,Qe,Me),Re=new vE(L,Ke,mt),ge=new RE(L,Ke,mt),mt.programs=Q.programs,_.capabilities=Qe,_.extensions=Ke,_.properties=Pe,_.renderLists=le,_.shadowMap=ne,_.state=Me,_.info=mt}N();const ie=new g1(_,L);this.xr=ie,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Ke.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ke.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(X,V,!1))},this.getSize=function(E){return E.set(X,V)},this.setSize=function(E,I,O=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,V=I,n.width=Math.floor(E*$),n.height=Math.floor(I*$),O===!0&&(n.style.width=E+"px",n.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(X*$,V*$).floor()},this.setDrawingBufferSize=function(E,I,O){X=E,V=I,$=O,n.width=Math.floor(E*O),n.height=Math.floor(I*O),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,I,O,z){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,I,O,z),Me.viewport(S.copy(Z).multiplyScalar($).round())},this.getScissor=function(E){return E.copy(se)},this.setScissor=function(E,I,O,z){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,I,O,z),Me.scissor(b.copy(se).multiplyScalar($).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(E){Me.setScissorTest(ye=E)},this.setOpaqueSort=function(E){D=E},this.setTransparentSort=function(E){Y=E},this.getClearColor=function(E){return E.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(E=!0,I=!0,O=!0){let z=0;if(E){let U=!1;if(A!==null){const re=A.texture.format;U=re===Sd||re===xd||re===vd}if(U){const re=A.texture.type,ce=re===xi||re===Ar||re===Ro||re===As||re===gd||re===_d,_e=he.getClearColor(),ve=he.getClearAlpha(),we=_e.r,Ce=_e.g,xe=_e.b;ce?(p[0]=we,p[1]=Ce,p[2]=xe,p[3]=ve,L.clearBufferuiv(L.COLOR,0,p)):(v[0]=we,v[1]=Ce,v[2]=xe,v[3]=ve,L.clearBufferiv(L.COLOR,0,v))}else z|=L.COLOR_BUFFER_BIT}I&&(z|=L.DEPTH_BUFFER_BIT),O&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",j,!1),n.removeEventListener("webglcontextrestored",q,!1),n.removeEventListener("webglcontextcreationerror",oe,!1),le.dispose(),pe.dispose(),Pe.dispose(),C.dispose(),M.dispose(),J.dispose(),Fe.dispose(),st.dispose(),Q.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Gn),ie.removeEventListener("sessionend",Cd),tr.stop()};function j(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=mt.autoReset,I=ne.enabled,O=ne.autoUpdate,z=ne.needsUpdate,U=ne.type;N(),mt.autoReset=E,ne.enabled=I,ne.autoUpdate=O,ne.needsUpdate=z,ne.type=U}function oe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Te(E){const I=E.target;I.removeEventListener("dispose",Te),Ge(I)}function Ge(E){gt(E),Pe.remove(E)}function gt(E){const I=Pe.get(E).programs;I!==void 0&&(I.forEach(function(O){Q.releaseProgram(O)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,O,z,U,re){I===null&&(I=Le);const ce=U.isMesh&&U.matrixWorld.determinant()<0,_e=N_(E,I,O,z,U);Me.setMaterial(z,ce);let ve=O.index,we=1;if(z.wireframe===!0){if(ve=K.getWireframeAttribute(O),ve===void 0)return;we=2}const Ce=O.drawRange,xe=O.attributes.position;let je=Ce.start*we,ct=(Ce.start+Ce.count)*we;re!==null&&(je=Math.max(je,re.start*we),ct=Math.min(ct,(re.start+re.count)*we)),ve!==null?(je=Math.max(je,0),ct=Math.min(ct,ve.count)):xe!=null&&(je=Math.max(je,0),ct=Math.min(ct,xe.count));const ft=ct-je;if(ft<0||ft===1/0)return;Fe.setup(U,z,_e,O,ve);let on,Ye=Re;if(ve!==null&&(on=H.get(ve),Ye=ge,Ye.setIndex(on)),U.isMesh)z.wireframe===!0?(Me.setLineWidth(z.wireframeLinewidth*ut()),Ye.setMode(L.LINES)):Ye.setMode(L.TRIANGLES);else if(U.isLine){let Se=z.linewidth;Se===void 0&&(Se=1),Me.setLineWidth(Se*ut()),U.isLineSegments?Ye.setMode(L.LINES):U.isLineLoop?Ye.setMode(L.LINE_LOOP):Ye.setMode(L.LINE_STRIP)}else U.isPoints?Ye.setMode(L.POINTS):U.isSprite&&Ye.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ye.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))Ye.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Se=U._multiDrawStarts,It=U._multiDrawCounts,qe=U._multiDrawCount,Pn=ve?H.get(ve).bytesPerElement:1,br=Pe.get(z).currentProgram.getUniforms();for(let an=0;an<qe;an++)br.setValue(L,"_gl_DrawID",an),Ye.render(Se[an]/Pn,It[an])}else if(U.isInstancedMesh)Ye.renderInstances(je,ft,U.count);else if(O.isInstancedBufferGeometry){const Se=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,It=Math.min(O.instanceCount,Se);Ye.renderInstances(je,ft,It)}else Ye.render(je,ft)};function Nt(E,I,O){E.transparent===!0&&E.side===ui&&E.forceSinglePass===!1?(E.side=rn,E.needsUpdate=!0,zo(E,I,O),E.side=Ki,E.needsUpdate=!0,zo(E,I,O),E.side=ui):zo(E,I,O)}this.compile=function(E,I,O=null){O===null&&(O=E),m=pe.get(O),m.init(I),g.push(m),O.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),E!==O&&E.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const z=new Set;return E.traverse(function(U){const re=U.material;if(re)if(Array.isArray(re))for(let ce=0;ce<re.length;ce++){const _e=re[ce];Nt(_e,O,U),z.add(_e)}else Nt(re,O,U),z.add(re)}),g.pop(),m=null,z},this.compileAsync=function(E,I,O=null){const z=this.compile(E,I,O);return new Promise(U=>{function re(){if(z.forEach(function(ce){Pe.get(ce).currentProgram.isReady()&&z.delete(ce)}),z.size===0){U(E);return}setTimeout(re,10)}Ke.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Xe=null;function ei(E){Xe&&Xe(E)}function Gn(){tr.stop()}function Cd(){tr.start()}const tr=new C_;tr.setAnimationLoop(ei),typeof self<"u"&&tr.setContext(self),this.setAnimationLoop=function(E){Xe=E,ie.setAnimationLoop(E),E===null?tr.stop():tr.start()},ie.addEventListener("sessionstart",Gn),ie.addEventListener("sessionend",Cd),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(I),I=ie.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,I,A),m=pe.get(E,g.length),m.init(I),g.push(m),fe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ve.setFromProjectionMatrix(fe),te=this.localClippingEnabled,G=Ne.init(this.clippingPlanes,te),x=le.get(E,c.length),x.init(),c.push(x),ie.enabled===!0&&ie.isPresenting===!0){const re=_.xr.getDepthSensingMesh();re!==null&&Vl(re,I,-1/0,_.sortObjects)}Vl(E,I,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(D,Y),ke=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ke&&he.addToRenderList(x,E),this.info.render.frame++,G===!0&&Ne.beginShadows();const O=m.state.shadowsArray;ne.render(O,E,I),G===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=x.opaque,U=x.transmissive;if(m.setupLights(),I.isArrayCamera){const re=I.cameras;if(U.length>0)for(let ce=0,_e=re.length;ce<_e;ce++){const ve=re[ce];Pd(z,U,E,ve)}ke&&he.render(E);for(let ce=0,_e=re.length;ce<_e;ce++){const ve=re[ce];Rd(x,E,ve,ve.viewport)}}else U.length>0&&Pd(z,U,E,I),ke&&he.render(E),Rd(x,E,I);A!==null&&(De.updateMultisampleRenderTarget(A),De.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(_,E,I),Fe.resetDefaultState(),P=-1,T=null,g.pop(),g.length>0?(m=g[g.length-1],G===!0&&Ne.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,c.pop(),c.length>0?x=c[c.length-1]:x=null};function Vl(E,I,O,z){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)O=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ve.intersectsSprite(E)){z&&Ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4(fe);const ce=J.update(E),_e=E.material;_e.visible&&x.push(E,ce,_e,O,Ae.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ve.intersectsObject(E))){const ce=J.update(E),_e=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ae.copy(E.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Ae.copy(ce.boundingSphere.center)),Ae.applyMatrix4(E.matrixWorld).applyMatrix4(fe)),Array.isArray(_e)){const ve=ce.groups;for(let we=0,Ce=ve.length;we<Ce;we++){const xe=ve[we],je=_e[xe.materialIndex];je&&je.visible&&x.push(E,ce,je,O,Ae.z,xe)}}else _e.visible&&x.push(E,ce,_e,O,Ae.z,null)}}const re=E.children;for(let ce=0,_e=re.length;ce<_e;ce++)Vl(re[ce],I,O,z)}function Rd(E,I,O,z){const U=E.opaque,re=E.transmissive,ce=E.transparent;m.setupLightsView(O),G===!0&&Ne.setGlobalState(_.clippingPlanes,O),z&&Me.viewport(S.copy(z)),U.length>0&&ko(U,I,O),re.length>0&&ko(re,I,O),ce.length>0&&ko(ce,I,O),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Pd(E,I,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new Cr(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?Io:xi,minFilter:vr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const re=m.state.transmissionRenderTarget[z.id],ce=z.viewport||S;re.setSize(ce.z,ce.w);const _e=_.getRenderTarget();_.setRenderTarget(re),_.getClearColor(k),W=_.getClearAlpha(),W<1&&_.setClearColor(16777215,.5),_.clear(),ke&&he.render(O);const ve=_.toneMapping;_.toneMapping=Yi;const we=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),G===!0&&Ne.setGlobalState(_.clippingPlanes,z),ko(E,O,z),De.updateMultisampleRenderTarget(re),De.updateRenderTargetMipmap(re),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let xe=0,je=I.length;xe<je;xe++){const ct=I[xe],ft=ct.object,on=ct.geometry,Ye=ct.material,Se=ct.group;if(Ye.side===ui&&ft.layers.test(z.layers)){const It=Ye.side;Ye.side=rn,Ye.needsUpdate=!0,bd(ft,O,z,on,Ye,Se),Ye.side=It,Ye.needsUpdate=!0,Ce=!0}}Ce===!0&&(De.updateMultisampleRenderTarget(re),De.updateRenderTargetMipmap(re))}_.setRenderTarget(_e),_.setClearColor(k,W),we!==void 0&&(z.viewport=we),_.toneMapping=ve}function ko(E,I,O){const z=I.isScene===!0?I.overrideMaterial:null;for(let U=0,re=E.length;U<re;U++){const ce=E[U],_e=ce.object,ve=ce.geometry,we=z===null?ce.material:z,Ce=ce.group;_e.layers.test(O.layers)&&bd(_e,I,O,ve,we,Ce)}}function bd(E,I,O,z,U,re){E.onBeforeRender(_,I,O,z,U,re),E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(_,I,O,z,E,re),U.transparent===!0&&U.side===ui&&U.forceSinglePass===!1?(U.side=rn,U.needsUpdate=!0,_.renderBufferDirect(O,I,z,U,E,re),U.side=Ki,U.needsUpdate=!0,_.renderBufferDirect(O,I,z,U,E,re),U.side=ui):_.renderBufferDirect(O,I,z,U,E,re),E.onAfterRender(_,I,O,z,U,re)}function zo(E,I,O){I.isScene!==!0&&(I=Le);const z=Pe.get(E),U=m.state.lights,re=m.state.shadowsArray,ce=U.state.version,_e=Q.getParameters(E,U.state,re,I,O),ve=Q.getProgramCacheKey(_e);let we=z.programs;z.environment=E.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(E.isMeshStandardMaterial?M:C).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,we===void 0&&(E.addEventListener("dispose",Te),we=new Map,z.programs=we);let Ce=we.get(ve);if(Ce!==void 0){if(z.currentProgram===Ce&&z.lightsStateVersion===ce)return Dd(E,_e),Ce}else _e.uniforms=Q.getUniforms(E),E.onBeforeCompile(_e,_),Ce=Q.acquireProgram(_e,ve),we.set(ve,Ce),z.uniforms=_e.uniforms;const xe=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(xe.clippingPlanes=Ne.uniform),Dd(E,_e),z.needsLights=U_(E),z.lightsStateVersion=ce,z.needsLights&&(xe.ambientLightColor.value=U.state.ambient,xe.lightProbe.value=U.state.probe,xe.directionalLights.value=U.state.directional,xe.directionalLightShadows.value=U.state.directionalShadow,xe.spotLights.value=U.state.spot,xe.spotLightShadows.value=U.state.spotShadow,xe.rectAreaLights.value=U.state.rectArea,xe.ltc_1.value=U.state.rectAreaLTC1,xe.ltc_2.value=U.state.rectAreaLTC2,xe.pointLights.value=U.state.point,xe.pointLightShadows.value=U.state.pointShadow,xe.hemisphereLights.value=U.state.hemi,xe.directionalShadowMap.value=U.state.directionalShadowMap,xe.directionalShadowMatrix.value=U.state.directionalShadowMatrix,xe.spotShadowMap.value=U.state.spotShadowMap,xe.spotLightMatrix.value=U.state.spotLightMatrix,xe.spotLightMap.value=U.state.spotLightMap,xe.pointShadowMap.value=U.state.pointShadowMap,xe.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Ce,z.uniformsList=null,Ce}function Ld(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=Ga.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function Dd(E,I){const O=Pe.get(E);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.batchingColor=I.batchingColor,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.instancingMorph=I.instancingMorph,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function N_(E,I,O,z,U){I.isScene!==!0&&(I=Le),De.resetTextureUnits();const re=I.fog,ce=z.isMeshStandardMaterial?I.environment:null,_e=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:er,ve=(z.isMeshStandardMaterial?M:C).get(z.envMap||ce),we=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ce=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),xe=!!O.morphAttributes.position,je=!!O.morphAttributes.normal,ct=!!O.morphAttributes.color;let ft=Yi;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ft=_.toneMapping);const on=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ye=on!==void 0?on.length:0,Se=Pe.get(z),It=m.state.lights;if(G===!0&&(te===!0||E!==T)){const _n=E===T&&z.id===P;Ne.setState(z,E,_n)}let qe=!1;z.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==It.state.version||Se.outputColorSpace!==_e||U.isBatchedMesh&&Se.batching===!1||!U.isBatchedMesh&&Se.batching===!0||U.isBatchedMesh&&Se.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Se.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Se.instancing===!1||!U.isInstancedMesh&&Se.instancing===!0||U.isSkinnedMesh&&Se.skinning===!1||!U.isSkinnedMesh&&Se.skinning===!0||U.isInstancedMesh&&Se.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Se.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Se.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Se.instancingMorph===!1&&U.morphTexture!==null||Se.envMap!==ve||z.fog===!0&&Se.fog!==re||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Ne.numPlanes||Se.numIntersection!==Ne.numIntersection)||Se.vertexAlphas!==we||Se.vertexTangents!==Ce||Se.morphTargets!==xe||Se.morphNormals!==je||Se.morphColors!==ct||Se.toneMapping!==ft||Se.morphTargetsCount!==Ye)&&(qe=!0):(qe=!0,Se.__version=z.version);let Pn=Se.currentProgram;qe===!0&&(Pn=zo(z,I,U));let br=!1,an=!1,Gl=!1;const _t=Pn.getUniforms(),Ei=Se.uniforms;if(Me.useProgram(Pn.program)&&(br=!0,an=!0,Gl=!0),z.id!==P&&(P=z.id,an=!0),br||T!==E){_t.setValue(L,"projectionMatrix",E.projectionMatrix),_t.setValue(L,"viewMatrix",E.matrixWorldInverse);const _n=_t.map.cameraPosition;_n!==void 0&&_n.setValue(L,ue.setFromMatrixPosition(E.matrixWorld)),Qe.logarithmicDepthBuffer&&_t.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&_t.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),T!==E&&(T=E,an=!0,Gl=!0)}if(U.isSkinnedMesh){_t.setOptional(L,U,"bindMatrix"),_t.setOptional(L,U,"bindMatrixInverse");const _n=U.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),_t.setValue(L,"boneTexture",_n.boneTexture,De))}U.isBatchedMesh&&(_t.setOptional(L,U,"batchingTexture"),_t.setValue(L,"batchingTexture",U._matricesTexture,De),_t.setOptional(L,U,"batchingIdTexture"),_t.setValue(L,"batchingIdTexture",U._indirectTexture,De),_t.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&_t.setValue(L,"batchingColorTexture",U._colorsTexture,De));const Wl=O.morphAttributes;if((Wl.position!==void 0||Wl.normal!==void 0||Wl.color!==void 0)&&Be.update(U,O,Pn),(an||Se.receiveShadow!==U.receiveShadow)&&(Se.receiveShadow=U.receiveShadow,_t.setValue(L,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ei.envMap.value=ve,Ei.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(Ei.envMapIntensity.value=I.environmentIntensity),an&&(_t.setValue(L,"toneMappingExposure",_.toneMappingExposure),Se.needsLights&&I_(Ei,Gl),re&&z.fog===!0&&Ee.refreshFogUniforms(Ei,re),Ee.refreshMaterialUniforms(Ei,z,$,V,m.state.transmissionRenderTarget[E.id]),Ga.upload(L,Ld(Se),Ei,De)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ga.upload(L,Ld(Se),Ei,De),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&_t.setValue(L,"center",U.center),_t.setValue(L,"modelViewMatrix",U.modelViewMatrix),_t.setValue(L,"normalMatrix",U.normalMatrix),_t.setValue(L,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const _n=z.uniformsGroups;for(let Xl=0,F_=_n.length;Xl<F_;Xl++){const Nd=_n[Xl];st.update(Nd,Pn),st.bind(Nd,Pn)}}return Pn}function I_(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function U_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,I,O){Pe.get(E.texture).__webglTexture=I,Pe.get(E.depthTexture).__webglTexture=O;const z=Pe.get(E);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=O===void 0,z.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,I){const O=Pe.get(E);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,O=0){A=E,R=I,w=O;let z=!0,U=null,re=!1,ce=!1;if(E){const ve=Pe.get(E);if(ve.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(L.FRAMEBUFFER,null),z=!1;else if(ve.__webglFramebuffer===void 0)De.setupRenderTarget(E);else if(ve.__hasExternalTextures)De.rebindTextures(E,Pe.get(E.texture).__webglTexture,Pe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const xe=E.depthTexture;if(ve.__boundDepthTexture!==xe){if(xe!==null&&Pe.has(xe)&&(E.width!==xe.image.width||E.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(E)}}const we=E.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ce=!0);const Ce=Pe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ce[I])?U=Ce[I][O]:U=Ce[I],re=!0):E.samples>0&&De.useMultisampledRTT(E)===!1?U=Pe.get(E).__webglMultisampledFramebuffer:Array.isArray(Ce)?U=Ce[O]:U=Ce,S.copy(E.viewport),b.copy(E.scissor),B=E.scissorTest}else S.copy(Z).multiplyScalar($).floor(),b.copy(se).multiplyScalar($).floor(),B=ye;if(Me.bindFramebuffer(L.FRAMEBUFFER,U)&&z&&Me.drawBuffers(E,U),Me.viewport(S),Me.scissor(b),Me.setScissorTest(B),re){const ve=Pe.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,ve.__webglTexture,O)}else if(ce){const ve=Pe.get(E.texture),we=I||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ve.__webglTexture,O||0,we)}P=-1},this.readRenderTargetPixels=function(E,I,O,z,U,re,ce){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ce!==void 0&&(_e=_e[ce]),_e){Me.bindFramebuffer(L.FRAMEBUFFER,_e);try{const ve=E.texture,we=ve.format,Ce=ve.type;if(!Qe.textureFormatReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-z&&O>=0&&O<=E.height-U&&L.readPixels(I,O,z,U,be.convert(we),be.convert(Ce),re)}finally{const ve=A!==null?Pe.get(A).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(E,I,O,z,U,re,ce){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ce!==void 0&&(_e=_e[ce]),_e){Me.bindFramebuffer(L.FRAMEBUFFER,_e);try{const ve=E.texture,we=ve.format,Ce=ve.type;if(!Qe.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=E.width-z&&O>=0&&O<=E.height-U){const xe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,xe),L.bufferData(L.PIXEL_PACK_BUFFER,re.byteLength,L.STREAM_READ),L.readPixels(I,O,z,U,be.convert(we),be.convert(Ce),0),L.flush();const je=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await uS(L,je,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,xe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,re)}finally{L.deleteBuffer(xe),L.deleteSync(je)}return re}}finally{const ve=A!==null?Pe.get(A).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,ve)}}},this.copyFramebufferToTexture=function(E,I=null,O=0){E.isTexture!==!0&&(uo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,E=arguments[1]);const z=Math.pow(2,-O),U=Math.floor(E.image.width*z),re=Math.floor(E.image.height*z),ce=I!==null?I.x:0,_e=I!==null?I.y:0;De.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,O,0,0,ce,_e,U,re),Me.unbindTexture()},this.copyTextureToTexture=function(E,I,O=null,z=null,U=0){E.isTexture!==!0&&(uo("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1],I=arguments[2],U=arguments[3]||0,O=null);let re,ce,_e,ve,we,Ce;O!==null?(re=O.max.x-O.min.x,ce=O.max.y-O.min.y,_e=O.min.x,ve=O.min.y):(re=E.image.width,ce=E.image.height,_e=0,ve=0),z!==null?(we=z.x,Ce=z.y):(we=0,Ce=0);const xe=be.convert(I.format),je=be.convert(I.type);De.setTexture2D(I,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const ct=L.getParameter(L.UNPACK_ROW_LENGTH),ft=L.getParameter(L.UNPACK_IMAGE_HEIGHT),on=L.getParameter(L.UNPACK_SKIP_PIXELS),Ye=L.getParameter(L.UNPACK_SKIP_ROWS),Se=L.getParameter(L.UNPACK_SKIP_IMAGES),It=E.isCompressedTexture?E.mipmaps[U]:E.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,It.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,It.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,_e),L.pixelStorei(L.UNPACK_SKIP_ROWS,ve),E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,we,Ce,re,ce,xe,je,It.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,we,Ce,It.width,It.height,xe,It.data):L.texSubImage2D(L.TEXTURE_2D,U,we,Ce,re,ce,xe,je,It),L.pixelStorei(L.UNPACK_ROW_LENGTH,ct),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft),L.pixelStorei(L.UNPACK_SKIP_PIXELS,on),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ye),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Se),U===0&&I.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(E,I,O=null,z=null,U=0){E.isTexture!==!0&&(uo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,z=arguments[1]||null,E=arguments[2],I=arguments[3],U=arguments[4]||0);let re,ce,_e,ve,we,Ce,xe,je,ct;const ft=E.isCompressedTexture?E.mipmaps[U]:E.image;O!==null?(re=O.max.x-O.min.x,ce=O.max.y-O.min.y,_e=O.max.z-O.min.z,ve=O.min.x,we=O.min.y,Ce=O.min.z):(re=ft.width,ce=ft.height,_e=ft.depth,ve=0,we=0,Ce=0),z!==null?(xe=z.x,je=z.y,ct=z.z):(xe=0,je=0,ct=0);const on=be.convert(I.format),Ye=be.convert(I.type);let Se;if(I.isData3DTexture)De.setTexture3D(I,0),Se=L.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)De.setTexture2DArray(I,0),Se=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const It=L.getParameter(L.UNPACK_ROW_LENGTH),qe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Pn=L.getParameter(L.UNPACK_SKIP_PIXELS),br=L.getParameter(L.UNPACK_SKIP_ROWS),an=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ft.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ve),L.pixelStorei(L.UNPACK_SKIP_ROWS,we),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ce),E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Se,U,xe,je,ct,re,ce,_e,on,Ye,ft.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(Se,U,xe,je,ct,re,ce,_e,on,ft.data):L.texSubImage3D(Se,U,xe,je,ct,re,ce,_e,on,Ye,ft),L.pixelStorei(L.UNPACK_ROW_LENGTH,It),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,qe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Pn),L.pixelStorei(L.UNPACK_SKIP_ROWS,br),L.pixelStorei(L.UNPACK_SKIP_IMAGES,an),U===0&&I.generateMipmaps&&L.generateMipmap(Se),Me.unbindTexture()},this.initRenderTarget=function(E){Pe.get(E).__webglFramebuffer===void 0&&De.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?De.setTextureCube(E,0):E.isData3DTexture?De.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?De.setTexture2DArray(E,0):De.setTexture2D(E,0),Me.unbindTexture()},this.resetState=function(){R=0,w=0,A=null,Me.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===yd?"display-p3":"srgb",n.unpackColorSpace=$e.workingColorSpace===Ol?"display-p3":"srgb"}}class y1 extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Rn extends Vn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],d=[],p=[];let v=0;const x=[],m=i/2;let c=0;g(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(f),this.setAttribute("position",new wt(h,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(p,2));function g(){const y=new F,R=new F;let w=0;const A=(n-e)/i;for(let P=0;P<=s;P++){const T=[],S=P/s,b=S*(n-e)+e;for(let B=0;B<=r;B++){const k=B/r,W=k*l+a,X=Math.sin(W),V=Math.cos(W);R.x=b*X,R.y=-S*i+m,R.z=b*V,h.push(R.x,R.y,R.z),y.set(X,A,V).normalize(),d.push(y.x,y.y,y.z),p.push(k,1-S),T.push(v++)}x.push(T)}for(let P=0;P<r;P++)for(let T=0;T<s;T++){const S=x[T][P],b=x[T+1][P],B=x[T+1][P+1],k=x[T][P+1];f.push(S,b,k),f.push(b,B,k),w+=6}u.addGroup(c,w,0),c+=w}function _(y){const R=v,w=new He,A=new F;let P=0;const T=y===!0?e:n,S=y===!0?1:-1;for(let B=1;B<=r;B++)h.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),v++;const b=v;for(let B=0;B<=r;B++){const W=B/r*l+a,X=Math.cos(W),V=Math.sin(W);A.x=T*V,A.y=m*S,A.z=T*X,h.push(A.x,A.y,A.z),d.push(0,S,0),w.x=X*.5+.5,w.y=V*.5*S+.5,p.push(w.x,w.y),v++}for(let B=0;B<r;B++){const k=R+B,W=b+B;y===!0?f.push(W,W+1,k):f.push(W+1,W,k),P+=3}u.addGroup(c,P,y===!0?1:2),c+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jn extends Rn{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Jn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Td extends Vn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),u(i),f(),this.setAttribute("position",new wt(s,3)),this.setAttribute("normal",new wt(s.slice(),3)),this.setAttribute("uv",new wt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const _=new F,y=new F,R=new F;for(let w=0;w<n.length;w+=3)p(n[w+0],_),p(n[w+1],y),p(n[w+2],R),l(_,y,R,g)}function l(g,_,y,R){const w=R+1,A=[];for(let P=0;P<=w;P++){A[P]=[];const T=g.clone().lerp(y,P/w),S=_.clone().lerp(y,P/w),b=w-P;for(let B=0;B<=b;B++)B===0&&P===w?A[P][B]=T:A[P][B]=T.clone().lerp(S,B/b)}for(let P=0;P<w;P++)for(let T=0;T<2*(w-P)-1;T++){const S=Math.floor(T/2);T%2===0?(d(A[P][S+1]),d(A[P+1][S]),d(A[P][S])):(d(A[P][S+1]),d(A[P+1][S+1]),d(A[P+1][S]))}}function u(g){const _=new F;for(let y=0;y<s.length;y+=3)_.x=s[y+0],_.y=s[y+1],_.z=s[y+2],_.normalize().multiplyScalar(g),s[y+0]=_.x,s[y+1]=_.y,s[y+2]=_.z}function f(){const g=new F;for(let _=0;_<s.length;_+=3){g.x=s[_+0],g.y=s[_+1],g.z=s[_+2];const y=m(g)/2/Math.PI+.5,R=c(g)/Math.PI+.5;o.push(y,1-R)}v(),h()}function h(){for(let g=0;g<o.length;g+=6){const _=o[g+0],y=o[g+2],R=o[g+4],w=Math.max(_,y,R),A=Math.min(_,y,R);w>.9&&A<.1&&(_<.2&&(o[g+0]+=1),y<.2&&(o[g+2]+=1),R<.2&&(o[g+4]+=1))}}function d(g){s.push(g.x,g.y,g.z)}function p(g,_){const y=g*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function v(){const g=new F,_=new F,y=new F,R=new F,w=new He,A=new He,P=new He;for(let T=0,S=0;T<s.length;T+=9,S+=6){g.set(s[T+0],s[T+1],s[T+2]),_.set(s[T+3],s[T+4],s[T+5]),y.set(s[T+6],s[T+7],s[T+8]),w.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),P.set(o[S+4],o[S+5]),R.copy(g).add(_).add(y).divideScalar(3);const b=m(R);x(w,S+0,g,b),x(A,S+2,_,b),x(P,S+4,y,b)}}function x(g,_,y,R){R<0&&g.x===1&&(o[_]=g.x-1),y.x===0&&y.z===0&&(o[_]=R/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function c(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Td(e.vertices,e.indices,e.radius,e.details)}}class wd extends Td{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new wd(e.radius,e.detail)}}class Lt extends Vn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const f=[],h=new F,d=new F,p=[],v=[],x=[],m=[];for(let c=0;c<=i;c++){const g=[],_=c/i;let y=0;c===0&&o===0?y=.5/n:c===i&&l===Math.PI&&(y=-.5/n);for(let R=0;R<=n;R++){const w=R/n;h.x=-e*Math.cos(r+w*s)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(r+w*s)*Math.sin(o+_*a),v.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(w+y,1-_),g.push(u++)}f.push(g)}for(let c=0;c<i;c++)for(let g=0;g<n;g++){const _=f[c][g+1],y=f[c][g],R=f[c+1][g],w=f[c+1][g+1];(c!==0||o>0)&&p.push(_,y,w),(c!==i-1||l<Math.PI)&&p.push(y,R,w)}this.setIndex(p),this.setAttribute("position",new wt(v,3)),this.setAttribute("normal",new wt(x,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Hl extends Vn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],u=[],f=new F,h=new F,d=new F;for(let p=0;p<=i;p++)for(let v=0;v<=r;v++){const x=v/r*s,m=p/i*Math.PI*2;h.x=(e+n*Math.cos(m))*Math.cos(x),h.y=(e+n*Math.cos(m))*Math.sin(x),h.z=n*Math.sin(m),a.push(h.x,h.y,h.z),f.x=e*Math.cos(x),f.y=e*Math.sin(x),d.subVectors(h,f).normalize(),l.push(d.x,d.y,d.z),u.push(v/r),u.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=r;v++){const x=(r+1)*p+v-1,m=(r+1)*(p-1)+v-1,c=(r+1)*(p-1)+v,g=(r+1)*p+v;o.push(x,m,g),o.push(m,c,g)}this.setIndex(o),this.setAttribute("position",new wt(a,3)),this.setAttribute("normal",new wt(l,3)),this.setAttribute("uv",new wt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class M1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=zp();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function zp(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pd);const E1=`
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
`,T1=`
  uniform float uTime;
  uniform vec3  uColor;
  uniform float uNoiseScale;
  uniform float uGlowIntensity;

  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  // ── Value noise helpers ──────────────────────────────────────
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);   // cubic smoothstep
    return mix(
      mix(hash(i),                hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  // Fractal Brownian Motion — 5 octaves of noise
  float fbm(vec2 p) {
    float v = 0.0, amp = 0.5;
    for (int i = 0; i < 5; i++) {
      v   += amp * noise(p);
      p   *= 2.1;
      amp *= 0.5;
    }
    return v;
  }
  // ─────────────────────────────────────────────────────────────

  void main() {
    vec3 normal = normalize(vNormal);

    // Directional light (all calculations in view-space)
    vec3  lightDir = normalize(vec3(1.2, 1.8, 1.0));
    float diffuse  = max(dot(normal, lightDir), 0.0);
    float ambient  = 0.30;

    // Blinn-Phong specular
    vec3  viewDir  = normalize(vViewPosition);
    vec3  halfDir  = normalize(lightDir + viewDir);
    float spec     = pow(max(dot(normal, halfDir), 0.0), 32.0) * 0.45;

    // Animated fBm noise drives subtle surface texture
    float n = fbm(vUv * uNoiseScale + vec2(uTime * 0.07, uTime * 0.04));

    // Rim / edge glow — bright where the surface faces away from camera
    float rim = 1.0 - max(dot(normal, viewDir), 0.0);
    rim = pow(rim, 2.5);

    // Compose
    vec3 baseColor = uColor * (0.80 + 0.20 * n);
    vec3 lit       = baseColor * (ambient + (1.0 - ambient) * diffuse) + spec;
    vec3 glow      = uColor * 1.6 * rim * uGlowIntensity;

    gl_FragColor   = vec4(lit + glow, 1.0);
  }
`;function Ad(t,e=Gt.SHADER_NOISE_SCALE,n=Gt.SHADER_GLOW_INTENSITY){return new yi({uniforms:{uTime:{value:0},uColor:{value:new F(...t)},uNoiseScale:{value:e},uGlowIntensity:{value:n}},vertexShader:E1,fragmentShader:T1})}function ze(t,e,n,i={}){const r=new Tn(e,Ad(n,i.noise,i.glow));return i.pos&&r.position.set(...i.pos),i.rot&&r.rotation.set(...i.rot),i.scale&&r.scale.set(...i.scale),t.add(r),r}function w1(t){const e=new Et,n=t.color,i=[.95,.45,.05],r=[.06,.06,.12],s=[.08,.08,.14];ze(e,new Lt(.72,32,32),n,{pos:[0,-.72,0]}),ze(e,new Lt(.52,32,32),n,{pos:[0,.3,0]}),ze(e,new Lt(.36,32,32),n,{pos:[0,1.08,0]}),ze(e,new Jn(.055,.28,8),i,{pos:[0,1.08,.36],rot:[Math.PI/2,0,0]});const o=new Lt(.045,8,8);return ze(e,o,r,{pos:[-.13,1.18,.32]}),ze(e,o,r,{pos:[.13,1.18,.32]}),ze(e,new Rn(.44,.44,.06,32),s,{pos:[0,1.42,0]}),ze(e,new Rn(.26,.28,.36,32),s,{pos:[0,1.63,0]}),e}function A1(t){const e=new Et;return ze(e,new Hl(.8,.32,32,100),t.color),e}function C1(t){const e=new Et;return ze(e,new wd(1,0),t.color,{scale:[1,.72,1],noise:2,glow:.65}),e}function R1(t){const e=new Et;return ze(e,new Jn(1,1.6,4,1),t.color,{noise:3,glow:.28}),e}function P1(t){const e=new Et;return ze(e,new Ns(1.4,1.4,1.4),t.color,{noise:2,glow:.32}),e}function b1(t){const e=new Et;ze(e,new Lt(.9,32,32),t.color);const n=new Tn(new Hl(1.5,.15,8,80),Ad([.75,.62,.38],3,.18));return n.rotation.x=Math.PI/2.6,e.add(n),e}function L1(t){const e=new Et;ze(e,new Lt(1,32,32),t.color,{noise:9,glow:.12});const n=[.55,.55,.5];return[{pos:[.52,.6,.68],r:.19},{pos:[-.4,-.28,.84],r:.23},{pos:[.1,-.62,.72],r:.15}].forEach(({pos:r,r:s})=>ze(e,new Lt(s,16,16),n,{pos:r,glow:.04})),e}function D1(t){const e=new Et,n=[.82,.84,.88],i=[.28,.28,.34];ze(e,new Rn(.34,.34,1.4,24),t.color),ze(e,new Jn(.34,.8,24),n,{pos:[0,1.1,0]}),ze(e,new Rn(.24,.37,.22,16),i,{pos:[0,-.81,0]});for(let r=0;r<3;r++){const s=r/3*Math.PI*2,o=new Tn(new Jn(.27,.52,3,1),Ad(t.color));o.position.set(Math.sin(s)*.42,-.7,Math.cos(s)*.42),o.rotation.set(Math.PI,-s,0),e.add(o)}return e}function N1(t){const e=new Et,n=[.55,.9,1],i=[1,.95,.28];ze(e,new Rn(1.1,.7,.28,32),t.color),ze(e,new Lt(.55,32,16,0,Math.PI*2,0,Math.PI/2),n,{pos:[0,.14,0],noise:2,glow:.55});const r=new Lt(.07,8,8);for(let s=0;s<8;s++){const o=s/8*Math.PI*2;ze(e,r,i,{pos:[Math.sin(o)*.9,-.06,Math.cos(o)*.9],glow:1.1})}return e}function I1(t){const e=new Et;return ze(e,new Lt(.44,32,32),t.color,{noise:6,glow:.55}),[{z:-.62,r:.28,h:.7,glow:.35},{z:-1.2,r:.2,h:1,glow:.22},{z:-1.9,r:.12,h:1.1,glow:.12}].forEach(({z:i,r,h:s,glow:o})=>{const a=t.color.map((l,u)=>l*(.8-u*.05));ze(e,new Jn(r,s,6),a,{pos:[0,0,i],rot:[Math.PI/2,0,0],glow:o})}),e}function U1(t){const e=new Et,n=[.42,.26,.1];return ze(e,new Rn(.15,.22,.9,12),n,{pos:[0,-.8,0],noise:3,glow:.14}),[{y:.05,rb:.76,h:.9},{y:.65,rb:.58,h:.85},{y:1.18,rb:.4,h:.8}].forEach(({y:i,rb:r,h:s})=>ze(e,new Jn(r,s,8),t.color,{pos:[0,i,0],noise:5,glow:.24})),e}function F1(t){const e=new Et,n=[.3,.18,.06],i=[.2,.72,.18];return ze(e,new Lt(.85,32,32),t.color,{scale:[1,.92,1]}),ze(e,new Rn(.035,.045,.38,8),n,{pos:[0,.9,0],noise:2,glow:.1}),ze(e,new Lt(.2,8,4),i,{pos:[.18,.96,0],scale:[1.8,.35,1],rot:[0,0,.5],noise:3,glow:.2}),e}function O1(t){const e=new Et,n=[.94,.9,.85],i=[.98,.98,.98];ze(e,new Rn(.28,.35,.9,16),n,{pos:[0,-.35,0],noise:3,glow:.14}),ze(e,new Lt(.8,32,16,0,Math.PI*2,0,Math.PI/2),t.color,{pos:[0,.2,0],noise:5,glow:.28});const r=new Lt(.08,8,8);return[[0,.78,.36],[.38,.65,.22],[-.32,.68,.29],[.1,.6,-.42]].forEach(s=>ze(e,r,i,{pos:s,glow:.2})),e}function k1(t){const e=new Et,n=[.97,.98,1];return ze(e,new Jn(1.1,2,5,1),t.color,{noise:6,glow:.18}),ze(e,new Jn(.34,.55,5,1),n,{pos:[0,.95,0],noise:3,glow:.38}),e}function z1(t){const e=new Et,n=[.98,.88,.18],i=[.2,.7,.22];ze(e,new Lt(.28,16,16),n,{noise:2,glow:.45});const r=new Lt(.25,12,8);for(let s=0;s<8;s++){const o=s/8*Math.PI*2;ze(e,r,t.color,{pos:[Math.cos(o)*.52,Math.sin(o)*.52,0],scale:[1,.45,.45],rot:[0,0,o],noise:3,glow:.28})}return ze(e,new Rn(.05,.06,1,8),i,{pos:[0,-.78,0],noise:2,glow:.14}),e}const B1={snowman:w1,donut:A1,diamond:C1,pyramid:R1,cube:P1,saturn:b1,moon:L1,rocket:D1,ufo:N1,comet:I1,tree:U1,apple:F1,mushroom:O1,mountain:k1,flower:z1};function H1(t){const e=B1[t.id];if(!e)throw new Error(`No builder registered for item id: "${t.id}"`);return e(t)}function V1({item:t}){const e=xt.useRef(null);return xt.useEffect(()=>{if(!t||!e.current)return;const n=e.current,i=new y1,r=new yn(45,n.clientWidth/n.clientHeight,.1,100);r.position.z=Gt.CAMERA_Z;const s=new S1({antialias:!0,alpha:!0});s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setSize(n.clientWidth,n.clientHeight),n.appendChild(s.domElement);const o=H1(t);i.add(o);const a=new M1;let l;function u(){l=requestAnimationFrame(u);const h=a.getElapsedTime();o.rotation.y+=Gt.OBJECT_ROTATION_SPEED,o.position.y=Math.sin(h*Gt.OBJECT_FLOAT_SPEED)*Gt.OBJECT_FLOAT_AMOUNT,o.traverse(d=>{var p,v;d.isMesh&&((v=(p=d.material)==null?void 0:p.uniforms)!=null&&v.uTime)&&(d.material.uniforms.uTime.value=h*Gt.SHADER_TIME_SPEED)}),s.render(i,r)}u();const f=new ResizeObserver(()=>{const h=n.clientWidth,d=n.clientHeight;!h||!d||(s.setSize(h,d),r.aspect=h/d,r.updateProjectionMatrix())});return f.observe(n),()=>{cancelAnimationFrame(l),f.disconnect(),n.contains(s.domElement)&&n.removeChild(s.domElement),o.traverse(h=>{h.isMesh&&(h.geometry.dispose(),h.material.dispose())}),s.dispose()}},[t]),me.jsx("div",{ref:e,className:"three-mount"})}function G1({score:t,lastItem:e,onPlayAgain:n,onHome:i}){const[r,s]=xt.useState(""),[o,a]=xt.useState(!1),l=cx(t);function u(f){f.preventDefault(),!o&&(ux(r,t),a(!0))}return me.jsx("div",{className:"gameover-overlay",children:me.jsxs("div",{className:"gameover-card",children:[me.jsx("h2",{className:"gameover-title",children:"Game Over"}),e&&me.jsxs("p",{className:"gameover-answer",children:["The answer was ",me.jsx("strong",{children:e.label})]}),me.jsxs("div",{className:"gameover-score",children:[me.jsx("span",{className:"gameover-score__number",children:t}),me.jsx("span",{className:"gameover-score__label",children:"points"})]}),l&&!o&&me.jsxs("div",{className:"hs-entry",children:[me.jsx("p",{className:"hs-entry__badge",children:"🏆 New High Score!"}),me.jsxs("form",{className:"hs-entry__form",onSubmit:u,children:[me.jsx("input",{type:"text",className:"hs-entry__input",placeholder:"Your name",value:r,onChange:f=>s(f.target.value),maxLength:20,autoFocus:!0}),me.jsx("button",{type:"submit",className:"hs-entry__btn",children:"Save"})]})]}),o&&me.jsx("p",{className:"hs-saved-msg",children:"Score saved! 🎉"}),me.jsx(e_,{}),me.jsxs("div",{className:"gameover-actions",children:[me.jsx("button",{className:"action-btn action-btn--primary",onClick:n,children:"Play Again"}),me.jsx("button",{className:"action-btn action-btn--secondary",onClick:i,children:"Home"})]})]})})}function W1(t){return t[Math.floor(Math.random()*t.length)]}function wa(t,e){const n=t.items.filter(i=>!e.includes(i.id));return n.length?W1(n):null}function X1(t,e){const n=t.trim().toLowerCase();return[e.label,...e.aliases??[]].map(r=>r.toLowerCase()).includes(n)}function j1({themeId:t,onHome:e}){const n=Jg[t],[i,r]=xt.useState("playing"),[s,o]=xt.useState(()=>wa(n,[])),[a,l]=xt.useState([]),[u,f]=xt.useState(0),[h,d]=xt.useState(1),[p,v]=xt.useState(""),[x,m]=xt.useState(null),c=xt.useRef(null);xt.useEffect(()=>{var _;i==="playing"&&!x&&((_=c.current)==null||_.focus())},[i,x,s]);const g=xt.useCallback(_=>{if(_.preventDefault(),!(!p.trim()||x||i!=="playing"))if(X1(p,s)){m("correct");const y=u+Gt.POINTS_PER_CORRECT;f(y),v(""),setTimeout(()=>{m(null);const R=[...a,s.id];let w=wa(n,R);if(w)l(R);else{const A=[s.id];l(A),d(P=>P+1),w=wa(n,A)}o(w)},Gt.FEEDBACK_DURATION_MS)}else m("wrong"),setTimeout(()=>r("gameover"),Gt.FEEDBACK_DURATION_MS)},[p,x,i,s,u,a,n]);return i==="gameover"?me.jsx(G1,{score:u,lastItem:s,onPlayAgain:()=>{r("playing"),f(0),l([]),d(1),m(null),v(""),o(wa(n,[]))},onHome:e}):me.jsxs("div",{className:"game-screen",children:[me.jsxs("header",{className:"game-hud",children:[me.jsx("button",{className:"hud-home-btn",onClick:e,title:"Back to home",children:"← Home"}),me.jsxs("div",{className:"hud-center",children:[me.jsxs("span",{className:"hud-theme",children:[n.emoji," ",n.label]}),h>1&&me.jsxs("span",{className:"hud-round",children:["Round ",h]})]}),me.jsxs("div",{className:"hud-score",children:["Score: ",me.jsx("strong",{children:u})]})]}),me.jsxs("div",{className:"canvas-wrapper",children:[me.jsx(V1,{item:s}),x&&me.jsx("div",{className:`feedback-overlay feedback-overlay--${x}`,children:x==="correct"?`✓ Correct!  +${Gt.POINTS_PER_CORRECT}`:"✗ Wrong!"})]}),me.jsxs("div",{className:"guess-area",children:[me.jsx("p",{className:"guess-prompt",children:"What is this object?"}),me.jsxs("form",{className:"guess-form",onSubmit:g,children:[me.jsx("input",{ref:c,type:"text",className:"guess-input",placeholder:"Type your guess and press Enter…",value:p,onChange:_=>v(_.target.value),disabled:!!x,autoComplete:"off",spellCheck:"false"}),me.jsx("button",{type:"submit",className:"guess-submit",disabled:!!x,children:"Guess"})]})]})]})}function Y1(){const[t,e]=xt.useState("home"),[n,i]=xt.useState("shapes");return me.jsxs("div",{className:"app",children:[t==="home"&&me.jsx(fx,{onPlay:r=>{i(r),e("game")}}),t==="game"&&me.jsx(j1,{themeId:n,onHome:()=>e("home")})]})}Qg(document.getElementById("root")).render(me.jsx(xt.StrictMode,{children:me.jsx(Y1,{})}));
