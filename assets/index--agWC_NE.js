function E1(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var $a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function cy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var uy={exports:{}},Wu={},fy={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pl=Symbol.for("react.element"),M1=Symbol.for("react.portal"),w1=Symbol.for("react.fragment"),T1=Symbol.for("react.strict_mode"),b1=Symbol.for("react.profiler"),C1=Symbol.for("react.provider"),A1=Symbol.for("react.context"),R1=Symbol.for("react.forward_ref"),P1=Symbol.for("react.suspense"),L1=Symbol.for("react.memo"),D1=Symbol.for("react.lazy"),rg=Symbol.iterator;function N1(t){return t===null||typeof t!="object"?null:(t=rg&&t[rg]||t["@@iterator"],typeof t=="function"?t:null)}var dy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hy=Object.assign,py={};function ha(t,e,n){this.props=t,this.context=e,this.refs=py,this.updater=n||dy}ha.prototype.isReactComponent={};ha.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ha.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function my(){}my.prototype=ha.prototype;function Cp(t,e,n){this.props=t,this.context=e,this.refs=py,this.updater=n||dy}var Ap=Cp.prototype=new my;Ap.constructor=Cp;hy(Ap,ha.prototype);Ap.isPureReactComponent=!0;var sg=Array.isArray,gy=Object.prototype.hasOwnProperty,Rp={current:null},vy={key:!0,ref:!0,__self:!0,__source:!0};function yy(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)gy.call(e,i)&&!vy.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var c=Array(a),f=0;f<a;f++)c[f]=arguments[f+2];r.children=c}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Pl,type:t,key:s,ref:o,props:r,_owner:Rp.current}}function I1(t,e){return{$$typeof:Pl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Pl}function k1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var og=/\/+/g;function sd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?k1(""+t.key):e.toString(36)}function Yc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Pl:case M1:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+sd(o,0):i,sg(r)?(n="",t!=null&&(n=t.replace(og,"$&/")+"/"),Yc(r,e,n,"",function(f){return f})):r!=null&&(Pp(r)&&(r=I1(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(og,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",sg(t))for(var a=0;a<t.length;a++){s=t[a];var c=i+sd(s,a);o+=Yc(s,e,n,c,r)}else if(c=N1(t),typeof c=="function")for(t=c.call(t),a=0;!(s=t.next()).done;)s=s.value,c=i+sd(s,a++),o+=Yc(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function tc(t,e,n){if(t==null)return t;var i=[],r=0;return Yc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function O1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xn={current:null},Kc={transition:null},U1={ReactCurrentDispatcher:Xn,ReactCurrentBatchConfig:Kc,ReactCurrentOwner:Rp};function _y(){throw Error("act(...) is not supported in production builds of React.")}mt.Children={map:tc,forEach:function(t,e,n){tc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return tc(t,function(){e++}),e},toArray:function(t){return tc(t,function(e){return e})||[]},only:function(t){if(!Pp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};mt.Component=ha;mt.Fragment=w1;mt.Profiler=b1;mt.PureComponent=Cp;mt.StrictMode=T1;mt.Suspense=P1;mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U1;mt.act=_y;mt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=hy({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Rp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)gy.call(e,c)&&!vy.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){a=Array(c);for(var f=0;f<c;f++)a[f]=arguments[f+2];i.children=a}return{$$typeof:Pl,type:t.type,key:r,ref:s,props:i,_owner:o}};mt.createContext=function(t){return t={$$typeof:A1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:C1,_context:t},t.Consumer=t};mt.createElement=yy;mt.createFactory=function(t){var e=yy.bind(null,t);return e.type=t,e};mt.createRef=function(){return{current:null}};mt.forwardRef=function(t){return{$$typeof:R1,render:t}};mt.isValidElement=Pp;mt.lazy=function(t){return{$$typeof:D1,_payload:{_status:-1,_result:t},_init:O1}};mt.memo=function(t,e){return{$$typeof:L1,type:t,compare:e===void 0?null:e}};mt.startTransition=function(t){var e=Kc.transition;Kc.transition={};try{t()}finally{Kc.transition=e}};mt.unstable_act=_y;mt.useCallback=function(t,e){return Xn.current.useCallback(t,e)};mt.useContext=function(t){return Xn.current.useContext(t)};mt.useDebugValue=function(){};mt.useDeferredValue=function(t){return Xn.current.useDeferredValue(t)};mt.useEffect=function(t,e){return Xn.current.useEffect(t,e)};mt.useId=function(){return Xn.current.useId()};mt.useImperativeHandle=function(t,e,n){return Xn.current.useImperativeHandle(t,e,n)};mt.useInsertionEffect=function(t,e){return Xn.current.useInsertionEffect(t,e)};mt.useLayoutEffect=function(t,e){return Xn.current.useLayoutEffect(t,e)};mt.useMemo=function(t,e){return Xn.current.useMemo(t,e)};mt.useReducer=function(t,e,n){return Xn.current.useReducer(t,e,n)};mt.useRef=function(t){return Xn.current.useRef(t)};mt.useState=function(t){return Xn.current.useState(t)};mt.useSyncExternalStore=function(t,e,n){return Xn.current.useSyncExternalStore(t,e,n)};mt.useTransition=function(){return Xn.current.useTransition()};mt.version="18.3.1";fy.exports=mt;var Mt=fy.exports;const Ai=cy(Mt),ag=E1({__proto__:null,default:Ai},[Mt]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F1=Mt,z1=Symbol.for("react.element"),B1=Symbol.for("react.fragment"),H1=Object.prototype.hasOwnProperty,V1=F1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G1={key:!0,ref:!0,__self:!0,__source:!0};function xy(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)H1.call(e,i)&&!G1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:z1,type:t,key:s,ref:o,props:r,_owner:V1.current}}Wu.Fragment=B1;Wu.jsx=xy;Wu.jsxs=xy;uy.exports=Wu;var ee=uy.exports,yh={},Sy={exports:{}},mi={},Ey={exports:{}},My={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,re){var oe=H.length;H.push(re);e:for(;0<oe;){var Ae=oe-1>>>1,Ve=H[Ae];if(0<r(Ve,re))H[Ae]=re,H[oe]=Ve,oe=Ae;else break e}}function n(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var re=H[0],oe=H.pop();if(oe!==re){H[0]=oe;e:for(var Ae=0,Ve=H.length,_t=Ve>>>1;Ae<_t;){var se=2*(Ae+1)-1,Ee=H[se],Ue=se+1,be=H[Ue];if(0>r(Ee,oe))Ue<Ve&&0>r(be,Ee)?(H[Ae]=be,H[Ue]=oe,Ae=Ue):(H[Ae]=Ee,H[se]=oe,Ae=se);else if(Ue<Ve&&0>r(be,oe))H[Ae]=be,H[Ue]=oe,Ae=Ue;else break e}}return re}function r(H,re){var oe=H.sortIndex-re.sortIndex;return oe!==0?oe:H.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var c=[],f=[],h=1,p=null,m=3,_=!1,E=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(H){for(var re=n(f);re!==null;){if(re.callback===null)i(f);else if(re.startTime<=H)i(f),re.sortIndex=re.expirationTime,e(c,re);else break;re=n(f)}}function R(H){if(S=!1,M(H),!E)if(n(c)!==null)E=!0,Se(U);else{var re=n(f);re!==null&&ve(R,re.startTime-H)}}function U(H,re){E=!1,S&&(S=!1,g(V),V=-1),_=!0;var oe=m;try{for(M(re),p=n(c);p!==null&&(!(p.expirationTime>re)||H&&!X());){var Ae=p.callback;if(typeof Ae=="function"){p.callback=null,m=p.priorityLevel;var Ve=Ae(p.expirationTime<=re);re=t.unstable_now(),typeof Ve=="function"?p.callback=Ve:p===n(c)&&i(c),M(re)}else i(c);p=n(c)}if(p!==null)var _t=!0;else{var se=n(f);se!==null&&ve(R,se.startTime-re),_t=!1}return _t}finally{p=null,m=oe,_=!1}}var N=!1,d=null,V=-1,L=5,A=-1;function X(){return!(t.unstable_now()-A<L)}function ce(){if(d!==null){var H=t.unstable_now();A=H;var re=!0;try{re=d(!0,H)}finally{re?z():(N=!1,d=null)}}else N=!1}var z;if(typeof w=="function")z=function(){w(ce)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,he=ue.port2;ue.port1.onmessage=ce,z=function(){he.postMessage(null)}}else z=function(){x(ce,0)};function Se(H){d=H,N||(N=!0,z())}function ve(H,re){V=x(function(){H(t.unstable_now())},re)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){E||_||(E=!0,Se(U))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(H){switch(m){case 1:case 2:case 3:var re=3;break;default:re=m}var oe=m;m=re;try{return H()}finally{m=oe}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,re){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var oe=m;m=H;try{return re()}finally{m=oe}},t.unstable_scheduleCallback=function(H,re,oe){var Ae=t.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?Ae+oe:Ae):oe=Ae,H){case 1:var Ve=-1;break;case 2:Ve=250;break;case 5:Ve=1073741823;break;case 4:Ve=1e4;break;default:Ve=5e3}return Ve=oe+Ve,H={id:h++,callback:re,priorityLevel:H,startTime:oe,expirationTime:Ve,sortIndex:-1},oe>Ae?(H.sortIndex=oe,e(f,H),n(c)===null&&H===n(f)&&(S?(g(V),V=-1):S=!0,ve(R,oe-Ae))):(H.sortIndex=Ve,e(c,H),E||_||(E=!0,Se(U))),H},t.unstable_shouldYield=X,t.unstable_wrapCallback=function(H){var re=m;return function(){var oe=m;m=re;try{return H.apply(this,arguments)}finally{m=oe}}}})(My);Ey.exports=My;var W1=Ey.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j1=Mt,pi=W1;function xe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wy=new Set,ll={};function so(t,e){ta(t,e),ta(t+"Capture",e)}function ta(t,e){for(ll[t]=e,t=0;t<e.length;t++)wy.add(e[t])}var Ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_h=Object.prototype.hasOwnProperty,$1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lg={},cg={};function X1(t){return _h.call(cg,t)?!0:_h.call(lg,t)?!1:$1.test(t)?cg[t]=!0:(lg[t]=!0,!1)}function q1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Y1(t,e,n,i){if(e===null||typeof e>"u"||q1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Dn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Dn[t]=new qn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Dn[e]=new qn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Dn[t]=new qn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Dn[t]=new qn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Dn[t]=new qn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Dn[t]=new qn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Dn[t]=new qn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Dn[t]=new qn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Dn[t]=new qn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Lp=/[\-:]([a-z])/g;function Dp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Lp,Dp);Dn[e]=new qn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Lp,Dp);Dn[e]=new qn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Lp,Dp);Dn[e]=new qn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Dn[t]=new qn(t,1,!1,t.toLowerCase(),null,!1,!1)});Dn.xlinkHref=new qn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Dn[t]=new qn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Np(t,e,n,i){var r=Dn.hasOwnProperty(e)?Dn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Y1(e,n,r,i)&&(n=null),i||r===null?X1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var zr=j1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nc=Symbol.for("react.element"),Do=Symbol.for("react.portal"),No=Symbol.for("react.fragment"),Ip=Symbol.for("react.strict_mode"),xh=Symbol.for("react.profiler"),Ty=Symbol.for("react.provider"),by=Symbol.for("react.context"),kp=Symbol.for("react.forward_ref"),Sh=Symbol.for("react.suspense"),Eh=Symbol.for("react.suspense_list"),Op=Symbol.for("react.memo"),es=Symbol.for("react.lazy"),Cy=Symbol.for("react.offscreen"),ug=Symbol.iterator;function La(t){return t===null||typeof t!="object"?null:(t=ug&&t[ug]||t["@@iterator"],typeof t=="function"?t:null)}var rn=Object.assign,od;function Xa(t){if(od===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);od=e&&e[1]||""}return`
`+od+t}var ad=!1;function ld(t,e){if(!t||ad)return"";ad=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(f){var i=f}Reflect.construct(t,[],e)}else{try{e.call()}catch(f){i=f}t.call(e.prototype)}else{try{throw Error()}catch(f){i=f}t()}}catch(f){if(f&&i&&typeof f.stack=="string"){for(var r=f.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var c=`
`+r[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=a);break}}}finally{ad=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Xa(t):""}function K1(t){switch(t.tag){case 5:return Xa(t.type);case 16:return Xa("Lazy");case 13:return Xa("Suspense");case 19:return Xa("SuspenseList");case 0:case 2:case 15:return t=ld(t.type,!1),t;case 11:return t=ld(t.type.render,!1),t;case 1:return t=ld(t.type,!0),t;default:return""}}function Mh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case No:return"Fragment";case Do:return"Portal";case xh:return"Profiler";case Ip:return"StrictMode";case Sh:return"Suspense";case Eh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case by:return(t.displayName||"Context")+".Consumer";case Ty:return(t._context.displayName||"Context")+".Provider";case kp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Op:return e=t.displayName||null,e!==null?e:Mh(t.type)||"Memo";case es:e=t._payload,t=t._init;try{return Mh(t(e))}catch{}}return null}function Q1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mh(e);case 8:return e===Ip?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ys(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ay(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Z1(t){var e=Ay(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ic(t){t._valueTracker||(t._valueTracker=Z1(t))}function Ry(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ay(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function du(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wh(t,e){var n=e.checked;return rn({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ys(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Py(t,e){e=e.checked,e!=null&&Np(t,"checked",e,!1)}function Th(t,e){Py(t,e);var n=ys(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bh(t,e.type,n):e.hasOwnProperty("defaultValue")&&bh(t,e.type,ys(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bh(t,e,n){(e!=="number"||du(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qa=Array.isArray;function jo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ys(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ch(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(xe(91));return rn({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(xe(92));if(qa(n)){if(1<n.length)throw Error(xe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ys(n)}}function Ly(t,e){var n=ys(e.value),i=ys(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function pg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Dy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ah(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Dy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var rc,Ny=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(rc=rc||document.createElement("div"),rc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=rc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function cl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ja={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J1=["Webkit","ms","Moz","O"];Object.keys(Ja).forEach(function(t){J1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ja[e]=Ja[t]})});function Iy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ja.hasOwnProperty(t)&&Ja[t]?(""+e).trim():e+"px"}function ky(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Iy(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var eE=rn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rh(t,e){if(e){if(eE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(xe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(xe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(xe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(xe(62))}}function Ph(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lh=null;function Up(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dh=null,$o=null,Xo=null;function mg(t){if(t=Nl(t)){if(typeof Dh!="function")throw Error(xe(280));var e=t.stateNode;e&&(e=Yu(e),Dh(t.stateNode,t.type,e))}}function Oy(t){$o?Xo?Xo.push(t):Xo=[t]:$o=t}function Uy(){if($o){var t=$o,e=Xo;if(Xo=$o=null,mg(t),e)for(t=0;t<e.length;t++)mg(e[t])}}function Fy(t,e){return t(e)}function zy(){}var cd=!1;function By(t,e,n){if(cd)return t(e,n);cd=!0;try{return Fy(t,e,n)}finally{cd=!1,($o!==null||Xo!==null)&&(zy(),Uy())}}function ul(t,e){var n=t.stateNode;if(n===null)return null;var i=Yu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(xe(231,e,typeof n));return n}var Nh=!1;if(Ir)try{var Da={};Object.defineProperty(Da,"passive",{get:function(){Nh=!0}}),window.addEventListener("test",Da,Da),window.removeEventListener("test",Da,Da)}catch{Nh=!1}function tE(t,e,n,i,r,s,o,a,c){var f=Array.prototype.slice.call(arguments,3);try{e.apply(n,f)}catch(h){this.onError(h)}}var el=!1,hu=null,pu=!1,Ih=null,nE={onError:function(t){el=!0,hu=t}};function iE(t,e,n,i,r,s,o,a,c){el=!1,hu=null,tE.apply(nE,arguments)}function rE(t,e,n,i,r,s,o,a,c){if(iE.apply(this,arguments),el){if(el){var f=hu;el=!1,hu=null}else throw Error(xe(198));pu||(pu=!0,Ih=f)}}function oo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Hy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gg(t){if(oo(t)!==t)throw Error(xe(188))}function sE(t){var e=t.alternate;if(!e){if(e=oo(t),e===null)throw Error(xe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return gg(r),t;if(s===i)return gg(r),e;s=s.sibling}throw Error(xe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(xe(189))}}if(n.alternate!==i)throw Error(xe(190))}if(n.tag!==3)throw Error(xe(188));return n.stateNode.current===n?t:e}function Vy(t){return t=sE(t),t!==null?Gy(t):null}function Gy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Gy(t);if(e!==null)return e;t=t.sibling}return null}var Wy=pi.unstable_scheduleCallback,vg=pi.unstable_cancelCallback,oE=pi.unstable_shouldYield,aE=pi.unstable_requestPaint,cn=pi.unstable_now,lE=pi.unstable_getCurrentPriorityLevel,Fp=pi.unstable_ImmediatePriority,jy=pi.unstable_UserBlockingPriority,mu=pi.unstable_NormalPriority,cE=pi.unstable_LowPriority,$y=pi.unstable_IdlePriority,ju=null,dr=null;function uE(t){if(dr&&typeof dr.onCommitFiberRoot=="function")try{dr.onCommitFiberRoot(ju,t,void 0,(t.current.flags&128)===128)}catch{}}var Wi=Math.clz32?Math.clz32:hE,fE=Math.log,dE=Math.LN2;function hE(t){return t>>>=0,t===0?32:31-(fE(t)/dE|0)|0}var sc=64,oc=4194304;function Ya(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ya(a):(s&=o,s!==0&&(i=Ya(s)))}else o=n&~r,o!==0?i=Ya(o):s!==0&&(i=Ya(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Wi(e),r=1<<n,i|=t[n],e&=~r;return i}function pE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Wi(s),a=1<<o,c=r[o];c===-1?(!(a&n)||a&i)&&(r[o]=pE(a,e)):c<=e&&(t.expiredLanes|=a),s&=~a}}function kh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Xy(){var t=sc;return sc<<=1,!(sc&4194240)&&(sc=64),t}function ud(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ll(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wi(e),t[e]=n}function gE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Wi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function zp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Wi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ut=0;function qy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Yy,Bp,Ky,Qy,Zy,Oh=!1,ac=[],ls=null,cs=null,us=null,fl=new Map,dl=new Map,ns=[],vE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yg(t,e){switch(t){case"focusin":case"focusout":ls=null;break;case"dragenter":case"dragleave":cs=null;break;case"mouseover":case"mouseout":us=null;break;case"pointerover":case"pointerout":fl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":dl.delete(e.pointerId)}}function Na(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Nl(e),e!==null&&Bp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function yE(t,e,n,i,r){switch(e){case"focusin":return ls=Na(ls,t,e,n,i,r),!0;case"dragenter":return cs=Na(cs,t,e,n,i,r),!0;case"mouseover":return us=Na(us,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return fl.set(s,Na(fl.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,dl.set(s,Na(dl.get(s)||null,t,e,n,i,r)),!0}return!1}function Jy(t){var e=js(t.target);if(e!==null){var n=oo(e);if(n!==null){if(e=n.tag,e===13){if(e=Hy(n),e!==null){t.blockedOn=e,Zy(t.priority,function(){Ky(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Lh=i,n.target.dispatchEvent(i),Lh=null}else return e=Nl(n),e!==null&&Bp(e),t.blockedOn=n,!1;e.shift()}return!0}function _g(t,e,n){Qc(t)&&n.delete(e)}function _E(){Oh=!1,ls!==null&&Qc(ls)&&(ls=null),cs!==null&&Qc(cs)&&(cs=null),us!==null&&Qc(us)&&(us=null),fl.forEach(_g),dl.forEach(_g)}function Ia(t,e){t.blockedOn===e&&(t.blockedOn=null,Oh||(Oh=!0,pi.unstable_scheduleCallback(pi.unstable_NormalPriority,_E)))}function hl(t){function e(r){return Ia(r,t)}if(0<ac.length){Ia(ac[0],t);for(var n=1;n<ac.length;n++){var i=ac[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ls!==null&&Ia(ls,t),cs!==null&&Ia(cs,t),us!==null&&Ia(us,t),fl.forEach(e),dl.forEach(e),n=0;n<ns.length;n++)i=ns[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ns.length&&(n=ns[0],n.blockedOn===null);)Jy(n),n.blockedOn===null&&ns.shift()}var qo=zr.ReactCurrentBatchConfig,vu=!0;function xE(t,e,n,i){var r=Ut,s=qo.transition;qo.transition=null;try{Ut=1,Hp(t,e,n,i)}finally{Ut=r,qo.transition=s}}function SE(t,e,n,i){var r=Ut,s=qo.transition;qo.transition=null;try{Ut=4,Hp(t,e,n,i)}finally{Ut=r,qo.transition=s}}function Hp(t,e,n,i){if(vu){var r=Uh(t,e,n,i);if(r===null)xd(t,e,i,yu,n),yg(t,i);else if(yE(r,t,e,n,i))i.stopPropagation();else if(yg(t,i),e&4&&-1<vE.indexOf(t)){for(;r!==null;){var s=Nl(r);if(s!==null&&Yy(s),s=Uh(t,e,n,i),s===null&&xd(t,e,i,yu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else xd(t,e,i,null,n)}}var yu=null;function Uh(t,e,n,i){if(yu=null,t=Up(i),t=js(t),t!==null)if(e=oo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Hy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yu=t,null}function e_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lE()){case Fp:return 1;case jy:return 4;case mu:case cE:return 16;case $y:return 536870912;default:return 16}default:return 16}}var ss=null,Vp=null,Zc=null;function t_(){if(Zc)return Zc;var t,e=Vp,n=e.length,i,r="value"in ss?ss.value:ss.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Zc=r.slice(t,1<i?1-i:void 0)}function Jc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lc(){return!0}function xg(){return!1}function gi(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?lc:xg,this.isPropagationStopped=xg,this}return rn(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lc)},persist:function(){},isPersistent:lc}),e}var pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gp=gi(pa),Dl=rn({},pa,{view:0,detail:0}),EE=gi(Dl),fd,dd,ka,$u=rn({},Dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ka&&(ka&&t.type==="mousemove"?(fd=t.screenX-ka.screenX,dd=t.screenY-ka.screenY):dd=fd=0,ka=t),fd)},movementY:function(t){return"movementY"in t?t.movementY:dd}}),Sg=gi($u),ME=rn({},$u,{dataTransfer:0}),wE=gi(ME),TE=rn({},Dl,{relatedTarget:0}),hd=gi(TE),bE=rn({},pa,{animationName:0,elapsedTime:0,pseudoElement:0}),CE=gi(bE),AE=rn({},pa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),RE=gi(AE),PE=rn({},pa,{data:0}),Eg=gi(PE),LE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},DE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},NE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function IE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=NE[t])?!!e[t]:!1}function Wp(){return IE}var kE=rn({},Dl,{key:function(t){if(t.key){var e=LE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Jc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?DE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wp,charCode:function(t){return t.type==="keypress"?Jc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OE=gi(kE),UE=rn({},$u,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mg=gi(UE),FE=rn({},Dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wp}),zE=gi(FE),BE=rn({},pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),HE=gi(BE),VE=rn({},$u,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),GE=gi(VE),WE=[9,13,27,32],jp=Ir&&"CompositionEvent"in window,tl=null;Ir&&"documentMode"in document&&(tl=document.documentMode);var jE=Ir&&"TextEvent"in window&&!tl,n_=Ir&&(!jp||tl&&8<tl&&11>=tl),wg=" ",Tg=!1;function i_(t,e){switch(t){case"keyup":return WE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function r_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Io=!1;function $E(t,e){switch(t){case"compositionend":return r_(e);case"keypress":return e.which!==32?null:(Tg=!0,wg);case"textInput":return t=e.data,t===wg&&Tg?null:t;default:return null}}function XE(t,e){if(Io)return t==="compositionend"||!jp&&i_(t,e)?(t=t_(),Zc=Vp=ss=null,Io=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return n_&&e.locale!=="ko"?null:e.data;default:return null}}var qE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qE[t.type]:e==="textarea"}function s_(t,e,n,i){Oy(i),e=_u(e,"onChange"),0<e.length&&(n=new Gp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var nl=null,pl=null;function YE(t){g_(t,0)}function Xu(t){var e=Uo(t);if(Ry(e))return t}function KE(t,e){if(t==="change")return e}var o_=!1;if(Ir){var pd;if(Ir){var md="oninput"in document;if(!md){var Cg=document.createElement("div");Cg.setAttribute("oninput","return;"),md=typeof Cg.oninput=="function"}pd=md}else pd=!1;o_=pd&&(!document.documentMode||9<document.documentMode)}function Ag(){nl&&(nl.detachEvent("onpropertychange",a_),pl=nl=null)}function a_(t){if(t.propertyName==="value"&&Xu(pl)){var e=[];s_(e,pl,t,Up(t)),By(YE,e)}}function QE(t,e,n){t==="focusin"?(Ag(),nl=e,pl=n,nl.attachEvent("onpropertychange",a_)):t==="focusout"&&Ag()}function ZE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xu(pl)}function JE(t,e){if(t==="click")return Xu(e)}function eM(t,e){if(t==="input"||t==="change")return Xu(e)}function tM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $i=typeof Object.is=="function"?Object.is:tM;function ml(t,e){if($i(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!_h.call(e,r)||!$i(t[r],e[r]))return!1}return!0}function Rg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pg(t,e){var n=Rg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rg(n)}}function l_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?l_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function c_(){for(var t=window,e=du();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=du(t.document)}return e}function $p(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nM(t){var e=c_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&l_(n.ownerDocument.documentElement,n)){if(i!==null&&$p(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Pg(n,s);var o=Pg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iM=Ir&&"documentMode"in document&&11>=document.documentMode,ko=null,Fh=null,il=null,zh=!1;function Lg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zh||ko==null||ko!==du(i)||(i=ko,"selectionStart"in i&&$p(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),il&&ml(il,i)||(il=i,i=_u(Fh,"onSelect"),0<i.length&&(e=new Gp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ko)))}function cc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Oo={animationend:cc("Animation","AnimationEnd"),animationiteration:cc("Animation","AnimationIteration"),animationstart:cc("Animation","AnimationStart"),transitionend:cc("Transition","TransitionEnd")},gd={},u_={};Ir&&(u_=document.createElement("div").style,"AnimationEvent"in window||(delete Oo.animationend.animation,delete Oo.animationiteration.animation,delete Oo.animationstart.animation),"TransitionEvent"in window||delete Oo.transitionend.transition);function qu(t){if(gd[t])return gd[t];if(!Oo[t])return t;var e=Oo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in u_)return gd[t]=e[n];return t}var f_=qu("animationend"),d_=qu("animationiteration"),h_=qu("animationstart"),p_=qu("transitionend"),m_=new Map,Dg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ms(t,e){m_.set(t,e),so(e,[t])}for(var vd=0;vd<Dg.length;vd++){var yd=Dg[vd],rM=yd.toLowerCase(),sM=yd[0].toUpperCase()+yd.slice(1);Ms(rM,"on"+sM)}Ms(f_,"onAnimationEnd");Ms(d_,"onAnimationIteration");Ms(h_,"onAnimationStart");Ms("dblclick","onDoubleClick");Ms("focusin","onFocus");Ms("focusout","onBlur");Ms(p_,"onTransitionEnd");ta("onMouseEnter",["mouseout","mouseover"]);ta("onMouseLeave",["mouseout","mouseover"]);ta("onPointerEnter",["pointerout","pointerover"]);ta("onPointerLeave",["pointerout","pointerover"]);so("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));so("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));so("onBeforeInput",["compositionend","keypress","textInput","paste"]);so("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));so("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));so("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ka));function Ng(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,rE(i,e,void 0,t),t.currentTarget=null}function g_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],c=a.instance,f=a.currentTarget;if(a=a.listener,c!==s&&r.isPropagationStopped())break e;Ng(r,a,f),s=c}else for(o=0;o<i.length;o++){if(a=i[o],c=a.instance,f=a.currentTarget,a=a.listener,c!==s&&r.isPropagationStopped())break e;Ng(r,a,f),s=c}}}if(pu)throw t=Ih,pu=!1,Ih=null,t}function $t(t,e){var n=e[Wh];n===void 0&&(n=e[Wh]=new Set);var i=t+"__bubble";n.has(i)||(v_(e,t,2,!1),n.add(i))}function _d(t,e,n){var i=0;e&&(i|=4),v_(n,t,i,e)}var uc="_reactListening"+Math.random().toString(36).slice(2);function gl(t){if(!t[uc]){t[uc]=!0,wy.forEach(function(n){n!=="selectionchange"&&(oM.has(n)||_d(n,!1,t),_d(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[uc]||(e[uc]=!0,_d("selectionchange",!1,e))}}function v_(t,e,n,i){switch(e_(e)){case 1:var r=xE;break;case 4:r=SE;break;default:r=Hp}n=r.bind(null,e,n,t),r=void 0,!Nh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function xd(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;o=o.return}for(;a!==null;){if(o=js(a),o===null)return;if(c=o.tag,c===5||c===6){i=s=o;continue e}a=a.parentNode}}i=i.return}By(function(){var f=s,h=Up(n),p=[];e:{var m=m_.get(t);if(m!==void 0){var _=Gp,E=t;switch(t){case"keypress":if(Jc(n)===0)break e;case"keydown":case"keyup":_=OE;break;case"focusin":E="focus",_=hd;break;case"focusout":E="blur",_=hd;break;case"beforeblur":case"afterblur":_=hd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Sg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=wE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=zE;break;case f_:case d_:case h_:_=CE;break;case p_:_=HE;break;case"scroll":_=EE;break;case"wheel":_=GE;break;case"copy":case"cut":case"paste":_=RE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Mg}var S=(e&4)!==0,x=!S&&t==="scroll",g=S?m!==null?m+"Capture":null:m;S=[];for(var w=f,M;w!==null;){M=w;var R=M.stateNode;if(M.tag===5&&R!==null&&(M=R,g!==null&&(R=ul(w,g),R!=null&&S.push(vl(w,R,M)))),x)break;w=w.return}0<S.length&&(m=new _(m,E,null,n,h),p.push({event:m,listeners:S}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==Lh&&(E=n.relatedTarget||n.fromElement)&&(js(E)||E[kr]))break e;if((_||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,_?(E=n.relatedTarget||n.toElement,_=f,E=E?js(E):null,E!==null&&(x=oo(E),E!==x||E.tag!==5&&E.tag!==6)&&(E=null)):(_=null,E=f),_!==E)){if(S=Sg,R="onMouseLeave",g="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(S=Mg,R="onPointerLeave",g="onPointerEnter",w="pointer"),x=_==null?m:Uo(_),M=E==null?m:Uo(E),m=new S(R,w+"leave",_,n,h),m.target=x,m.relatedTarget=M,R=null,js(h)===f&&(S=new S(g,w+"enter",E,n,h),S.target=M,S.relatedTarget=x,R=S),x=R,_&&E)t:{for(S=_,g=E,w=0,M=S;M;M=po(M))w++;for(M=0,R=g;R;R=po(R))M++;for(;0<w-M;)S=po(S),w--;for(;0<M-w;)g=po(g),M--;for(;w--;){if(S===g||g!==null&&S===g.alternate)break t;S=po(S),g=po(g)}S=null}else S=null;_!==null&&Ig(p,m,_,S,!1),E!==null&&x!==null&&Ig(p,x,E,S,!0)}}e:{if(m=f?Uo(f):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var U=KE;else if(bg(m))if(o_)U=eM;else{U=ZE;var N=QE}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(U=JE);if(U&&(U=U(t,f))){s_(p,U,n,h);break e}N&&N(t,m,f),t==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&bh(m,"number",m.value)}switch(N=f?Uo(f):window,t){case"focusin":(bg(N)||N.contentEditable==="true")&&(ko=N,Fh=f,il=null);break;case"focusout":il=Fh=ko=null;break;case"mousedown":zh=!0;break;case"contextmenu":case"mouseup":case"dragend":zh=!1,Lg(p,n,h);break;case"selectionchange":if(iM)break;case"keydown":case"keyup":Lg(p,n,h)}var d;if(jp)e:{switch(t){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else Io?i_(t,n)&&(V="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(V="onCompositionStart");V&&(n_&&n.locale!=="ko"&&(Io||V!=="onCompositionStart"?V==="onCompositionEnd"&&Io&&(d=t_()):(ss=h,Vp="value"in ss?ss.value:ss.textContent,Io=!0)),N=_u(f,V),0<N.length&&(V=new Eg(V,t,null,n,h),p.push({event:V,listeners:N}),d?V.data=d:(d=r_(n),d!==null&&(V.data=d)))),(d=jE?$E(t,n):XE(t,n))&&(f=_u(f,"onBeforeInput"),0<f.length&&(h=new Eg("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:f}),h.data=d))}g_(p,e)})}function vl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _u(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ul(t,n),s!=null&&i.unshift(vl(t,s,r)),s=ul(t,e),s!=null&&i.push(vl(t,s,r))),t=t.return}return i}function po(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ig(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,c=a.alternate,f=a.stateNode;if(c!==null&&c===i)break;a.tag===5&&f!==null&&(a=f,r?(c=ul(n,s),c!=null&&o.unshift(vl(n,c,a))):r||(c=ul(n,s),c!=null&&o.push(vl(n,c,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var aM=/\r\n?/g,lM=/\u0000|\uFFFD/g;function kg(t){return(typeof t=="string"?t:""+t).replace(aM,`
`).replace(lM,"")}function fc(t,e,n){if(e=kg(e),kg(t)!==e&&n)throw Error(xe(425))}function xu(){}var Bh=null,Hh=null;function Vh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gh=typeof setTimeout=="function"?setTimeout:void 0,cM=typeof clearTimeout=="function"?clearTimeout:void 0,Og=typeof Promise=="function"?Promise:void 0,uM=typeof queueMicrotask=="function"?queueMicrotask:typeof Og<"u"?function(t){return Og.resolve(null).then(t).catch(fM)}:Gh;function fM(t){setTimeout(function(){throw t})}function Sd(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),hl(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);hl(e)}function fs(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ug(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ma=Math.random().toString(36).slice(2),lr="__reactFiber$"+ma,yl="__reactProps$"+ma,kr="__reactContainer$"+ma,Wh="__reactEvents$"+ma,dM="__reactListeners$"+ma,hM="__reactHandles$"+ma;function js(t){var e=t[lr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[kr]||n[lr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ug(t);t!==null;){if(n=t[lr])return n;t=Ug(t)}return e}t=n,n=t.parentNode}return null}function Nl(t){return t=t[lr]||t[kr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Uo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(xe(33))}function Yu(t){return t[yl]||null}var jh=[],Fo=-1;function ws(t){return{current:t}}function qt(t){0>Fo||(t.current=jh[Fo],jh[Fo]=null,Fo--)}function jt(t,e){Fo++,jh[Fo]=t.current,t.current=e}var _s={},Hn=ws(_s),ei=ws(!1),Js=_s;function na(t,e){var n=t.type.contextTypes;if(!n)return _s;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function ti(t){return t=t.childContextTypes,t!=null}function Su(){qt(ei),qt(Hn)}function Fg(t,e,n){if(Hn.current!==_s)throw Error(xe(168));jt(Hn,e),jt(ei,n)}function y_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(xe(108,Q1(t)||"Unknown",r));return rn({},n,i)}function Eu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_s,Js=Hn.current,jt(Hn,t),jt(ei,ei.current),!0}function zg(t,e,n){var i=t.stateNode;if(!i)throw Error(xe(169));n?(t=y_(t,e,Js),i.__reactInternalMemoizedMergedChildContext=t,qt(ei),qt(Hn),jt(Hn,t)):qt(ei),jt(ei,n)}var Ar=null,Ku=!1,Ed=!1;function __(t){Ar===null?Ar=[t]:Ar.push(t)}function pM(t){Ku=!0,__(t)}function Ts(){if(!Ed&&Ar!==null){Ed=!0;var t=0,e=Ut;try{var n=Ar;for(Ut=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ar=null,Ku=!1}catch(r){throw Ar!==null&&(Ar=Ar.slice(t+1)),Wy(Fp,Ts),r}finally{Ut=e,Ed=!1}}return null}var zo=[],Bo=0,Mu=null,wu=0,Ei=[],Mi=0,eo=null,Pr=1,Lr="";function zs(t,e){zo[Bo++]=wu,zo[Bo++]=Mu,Mu=t,wu=e}function x_(t,e,n){Ei[Mi++]=Pr,Ei[Mi++]=Lr,Ei[Mi++]=eo,eo=t;var i=Pr;t=Lr;var r=32-Wi(i)-1;i&=~(1<<r),n+=1;var s=32-Wi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Pr=1<<32-Wi(e)+r|n<<r|i,Lr=s+t}else Pr=1<<s|n<<r|i,Lr=t}function Xp(t){t.return!==null&&(zs(t,1),x_(t,1,0))}function qp(t){for(;t===Mu;)Mu=zo[--Bo],zo[Bo]=null,wu=zo[--Bo],zo[Bo]=null;for(;t===eo;)eo=Ei[--Mi],Ei[Mi]=null,Lr=Ei[--Mi],Ei[Mi]=null,Pr=Ei[--Mi],Ei[Mi]=null}var fi=null,ui=null,Kt=!1,Vi=null;function S_(t,e){var n=Ti(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Bg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fi=t,ui=fs(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fi=t,ui=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=eo!==null?{id:Pr,overflow:Lr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ti(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,fi=t,ui=null,!0):!1;default:return!1}}function $h(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xh(t){if(Kt){var e=ui;if(e){var n=e;if(!Bg(t,e)){if($h(t))throw Error(xe(418));e=fs(n.nextSibling);var i=fi;e&&Bg(t,e)?S_(i,n):(t.flags=t.flags&-4097|2,Kt=!1,fi=t)}}else{if($h(t))throw Error(xe(418));t.flags=t.flags&-4097|2,Kt=!1,fi=t}}}function Hg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fi=t}function dc(t){if(t!==fi)return!1;if(!Kt)return Hg(t),Kt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vh(t.type,t.memoizedProps)),e&&(e=ui)){if($h(t))throw E_(),Error(xe(418));for(;e;)S_(t,e),e=fs(e.nextSibling)}if(Hg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(xe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ui=fs(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ui=null}}else ui=fi?fs(t.stateNode.nextSibling):null;return!0}function E_(){for(var t=ui;t;)t=fs(t.nextSibling)}function ia(){ui=fi=null,Kt=!1}function Yp(t){Vi===null?Vi=[t]:Vi.push(t)}var mM=zr.ReactCurrentBatchConfig;function Oa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(xe(309));var i=n.stateNode}if(!i)throw Error(xe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(xe(284));if(!n._owner)throw Error(xe(290,t))}return t}function hc(t,e){throw t=Object.prototype.toString.call(e),Error(xe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vg(t){var e=t._init;return e(t._payload)}function M_(t){function e(g,w){if(t){var M=g.deletions;M===null?(g.deletions=[w],g.flags|=16):M.push(w)}}function n(g,w){if(!t)return null;for(;w!==null;)e(g,w),w=w.sibling;return null}function i(g,w){for(g=new Map;w!==null;)w.key!==null?g.set(w.key,w):g.set(w.index,w),w=w.sibling;return g}function r(g,w){return g=ms(g,w),g.index=0,g.sibling=null,g}function s(g,w,M){return g.index=M,t?(M=g.alternate,M!==null?(M=M.index,M<w?(g.flags|=2,w):M):(g.flags|=2,w)):(g.flags|=1048576,w)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,w,M,R){return w===null||w.tag!==6?(w=Rd(M,g.mode,R),w.return=g,w):(w=r(w,M),w.return=g,w)}function c(g,w,M,R){var U=M.type;return U===No?h(g,w,M.props.children,R,M.key):w!==null&&(w.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===es&&Vg(U)===w.type)?(R=r(w,M.props),R.ref=Oa(g,w,M),R.return=g,R):(R=ou(M.type,M.key,M.props,null,g.mode,R),R.ref=Oa(g,w,M),R.return=g,R)}function f(g,w,M,R){return w===null||w.tag!==4||w.stateNode.containerInfo!==M.containerInfo||w.stateNode.implementation!==M.implementation?(w=Pd(M,g.mode,R),w.return=g,w):(w=r(w,M.children||[]),w.return=g,w)}function h(g,w,M,R,U){return w===null||w.tag!==7?(w=Qs(M,g.mode,R,U),w.return=g,w):(w=r(w,M),w.return=g,w)}function p(g,w,M){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Rd(""+w,g.mode,M),w.return=g,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case nc:return M=ou(w.type,w.key,w.props,null,g.mode,M),M.ref=Oa(g,null,w),M.return=g,M;case Do:return w=Pd(w,g.mode,M),w.return=g,w;case es:var R=w._init;return p(g,R(w._payload),M)}if(qa(w)||La(w))return w=Qs(w,g.mode,M,null),w.return=g,w;hc(g,w)}return null}function m(g,w,M,R){var U=w!==null?w.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return U!==null?null:a(g,w,""+M,R);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case nc:return M.key===U?c(g,w,M,R):null;case Do:return M.key===U?f(g,w,M,R):null;case es:return U=M._init,m(g,w,U(M._payload),R)}if(qa(M)||La(M))return U!==null?null:h(g,w,M,R,null);hc(g,M)}return null}function _(g,w,M,R,U){if(typeof R=="string"&&R!==""||typeof R=="number")return g=g.get(M)||null,a(w,g,""+R,U);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case nc:return g=g.get(R.key===null?M:R.key)||null,c(w,g,R,U);case Do:return g=g.get(R.key===null?M:R.key)||null,f(w,g,R,U);case es:var N=R._init;return _(g,w,M,N(R._payload),U)}if(qa(R)||La(R))return g=g.get(M)||null,h(w,g,R,U,null);hc(w,R)}return null}function E(g,w,M,R){for(var U=null,N=null,d=w,V=w=0,L=null;d!==null&&V<M.length;V++){d.index>V?(L=d,d=null):L=d.sibling;var A=m(g,d,M[V],R);if(A===null){d===null&&(d=L);break}t&&d&&A.alternate===null&&e(g,d),w=s(A,w,V),N===null?U=A:N.sibling=A,N=A,d=L}if(V===M.length)return n(g,d),Kt&&zs(g,V),U;if(d===null){for(;V<M.length;V++)d=p(g,M[V],R),d!==null&&(w=s(d,w,V),N===null?U=d:N.sibling=d,N=d);return Kt&&zs(g,V),U}for(d=i(g,d);V<M.length;V++)L=_(d,g,V,M[V],R),L!==null&&(t&&L.alternate!==null&&d.delete(L.key===null?V:L.key),w=s(L,w,V),N===null?U=L:N.sibling=L,N=L);return t&&d.forEach(function(X){return e(g,X)}),Kt&&zs(g,V),U}function S(g,w,M,R){var U=La(M);if(typeof U!="function")throw Error(xe(150));if(M=U.call(M),M==null)throw Error(xe(151));for(var N=U=null,d=w,V=w=0,L=null,A=M.next();d!==null&&!A.done;V++,A=M.next()){d.index>V?(L=d,d=null):L=d.sibling;var X=m(g,d,A.value,R);if(X===null){d===null&&(d=L);break}t&&d&&X.alternate===null&&e(g,d),w=s(X,w,V),N===null?U=X:N.sibling=X,N=X,d=L}if(A.done)return n(g,d),Kt&&zs(g,V),U;if(d===null){for(;!A.done;V++,A=M.next())A=p(g,A.value,R),A!==null&&(w=s(A,w,V),N===null?U=A:N.sibling=A,N=A);return Kt&&zs(g,V),U}for(d=i(g,d);!A.done;V++,A=M.next())A=_(d,g,V,A.value,R),A!==null&&(t&&A.alternate!==null&&d.delete(A.key===null?V:A.key),w=s(A,w,V),N===null?U=A:N.sibling=A,N=A);return t&&d.forEach(function(ce){return e(g,ce)}),Kt&&zs(g,V),U}function x(g,w,M,R){if(typeof M=="object"&&M!==null&&M.type===No&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case nc:e:{for(var U=M.key,N=w;N!==null;){if(N.key===U){if(U=M.type,U===No){if(N.tag===7){n(g,N.sibling),w=r(N,M.props.children),w.return=g,g=w;break e}}else if(N.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===es&&Vg(U)===N.type){n(g,N.sibling),w=r(N,M.props),w.ref=Oa(g,N,M),w.return=g,g=w;break e}n(g,N);break}else e(g,N);N=N.sibling}M.type===No?(w=Qs(M.props.children,g.mode,R,M.key),w.return=g,g=w):(R=ou(M.type,M.key,M.props,null,g.mode,R),R.ref=Oa(g,w,M),R.return=g,g=R)}return o(g);case Do:e:{for(N=M.key;w!==null;){if(w.key===N)if(w.tag===4&&w.stateNode.containerInfo===M.containerInfo&&w.stateNode.implementation===M.implementation){n(g,w.sibling),w=r(w,M.children||[]),w.return=g,g=w;break e}else{n(g,w);break}else e(g,w);w=w.sibling}w=Pd(M,g.mode,R),w.return=g,g=w}return o(g);case es:return N=M._init,x(g,w,N(M._payload),R)}if(qa(M))return E(g,w,M,R);if(La(M))return S(g,w,M,R);hc(g,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,w!==null&&w.tag===6?(n(g,w.sibling),w=r(w,M),w.return=g,g=w):(n(g,w),w=Rd(M,g.mode,R),w.return=g,g=w),o(g)):n(g,w)}return x}var ra=M_(!0),w_=M_(!1),Tu=ws(null),bu=null,Ho=null,Kp=null;function Qp(){Kp=Ho=bu=null}function Zp(t){var e=Tu.current;qt(Tu),t._currentValue=e}function qh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Yo(t,e){bu=t,Kp=Ho=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jn=!0),t.firstContext=null)}function Ri(t){var e=t._currentValue;if(Kp!==t)if(t={context:t,memoizedValue:e,next:null},Ho===null){if(bu===null)throw Error(xe(308));Ho=t,bu.dependencies={lanes:0,firstContext:t}}else Ho=Ho.next=t;return e}var $s=null;function Jp(t){$s===null?$s=[t]:$s.push(t)}function T_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Jp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Or(t,i)}function Or(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ts=!1;function em(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function b_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ds(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,bt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Or(t,n)}return r=i.interleaved,r===null?(e.next=e,Jp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Or(t,n)}function eu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zp(t,n)}}function Gg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Cu(t,e,n,i){var r=t.updateQueue;ts=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var c=a,f=c.next;c.next=null,o===null?s=f:o.next=f,o=c;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=f:a.next=f,h.lastBaseUpdate=c))}if(s!==null){var p=r.baseState;o=0,h=f=c=null,a=s;do{var m=a.lane,_=a.eventTime;if((i&m)===m){h!==null&&(h=h.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=t,S=a;switch(m=e,_=n,S.tag){case 1:if(E=S.payload,typeof E=="function"){p=E.call(_,p,m);break e}p=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=S.payload,m=typeof E=="function"?E.call(_,p,m):E,m==null)break e;p=rn({},p,m);break e;case 2:ts=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=r.effects,m===null?r.effects=[a]:m.push(a))}else _={eventTime:_,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(f=h=_,c=p):h=h.next=_,o|=m;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;m=a,a=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);if(h===null&&(c=p),r.baseState=c,r.firstBaseUpdate=f,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);no|=o,t.lanes=o,t.memoizedState=p}}function Wg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(xe(191,r));r.call(i)}}}var Il={},hr=ws(Il),_l=ws(Il),xl=ws(Il);function Xs(t){if(t===Il)throw Error(xe(174));return t}function tm(t,e){switch(jt(xl,e),jt(_l,t),jt(hr,Il),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ah(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ah(e,t)}qt(hr),jt(hr,e)}function sa(){qt(hr),qt(_l),qt(xl)}function C_(t){Xs(xl.current);var e=Xs(hr.current),n=Ah(e,t.type);e!==n&&(jt(_l,t),jt(hr,n))}function nm(t){_l.current===t&&(qt(hr),qt(_l))}var tn=ws(0);function Au(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Md=[];function im(){for(var t=0;t<Md.length;t++)Md[t]._workInProgressVersionPrimary=null;Md.length=0}var tu=zr.ReactCurrentDispatcher,wd=zr.ReactCurrentBatchConfig,to=0,nn=null,gn=null,wn=null,Ru=!1,rl=!1,Sl=0,gM=0;function kn(){throw Error(xe(321))}function rm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$i(t[n],e[n]))return!1;return!0}function sm(t,e,n,i,r,s){if(to=s,nn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tu.current=t===null||t.memoizedState===null?xM:SM,t=n(i,r),rl){s=0;do{if(rl=!1,Sl=0,25<=s)throw Error(xe(301));s+=1,wn=gn=null,e.updateQueue=null,tu.current=EM,t=n(i,r)}while(rl)}if(tu.current=Pu,e=gn!==null&&gn.next!==null,to=0,wn=gn=nn=null,Ru=!1,e)throw Error(xe(300));return t}function om(){var t=Sl!==0;return Sl=0,t}function nr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?nn.memoizedState=wn=t:wn=wn.next=t,wn}function Pi(){if(gn===null){var t=nn.alternate;t=t!==null?t.memoizedState:null}else t=gn.next;var e=wn===null?nn.memoizedState:wn.next;if(e!==null)wn=e,gn=t;else{if(t===null)throw Error(xe(310));gn=t,t={memoizedState:gn.memoizedState,baseState:gn.baseState,baseQueue:gn.baseQueue,queue:gn.queue,next:null},wn===null?nn.memoizedState=wn=t:wn=wn.next=t}return wn}function El(t,e){return typeof e=="function"?e(t):e}function Td(t){var e=Pi(),n=e.queue;if(n===null)throw Error(xe(311));n.lastRenderedReducer=t;var i=gn,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,c=null,f=s;do{var h=f.lane;if((to&h)===h)c!==null&&(c=c.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),i=f.hasEagerState?f.eagerState:t(i,f.action);else{var p={lane:h,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};c===null?(a=c=p,o=i):c=c.next=p,nn.lanes|=h,no|=h}f=f.next}while(f!==null&&f!==s);c===null?o=i:c.next=a,$i(i,e.memoizedState)||(Jn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,nn.lanes|=s,no|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bd(t){var e=Pi(),n=e.queue;if(n===null)throw Error(xe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);$i(s,e.memoizedState)||(Jn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function A_(){}function R_(t,e){var n=nn,i=Pi(),r=e(),s=!$i(i.memoizedState,r);if(s&&(i.memoizedState=r,Jn=!0),i=i.queue,am(D_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||wn!==null&&wn.memoizedState.tag&1){if(n.flags|=2048,Ml(9,L_.bind(null,n,i,r,e),void 0,null),Tn===null)throw Error(xe(349));to&30||P_(n,e,r)}return r}function P_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=nn.updateQueue,e===null?(e={lastEffect:null,stores:null},nn.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function L_(t,e,n,i){e.value=n,e.getSnapshot=i,N_(e)&&I_(t)}function D_(t,e,n){return n(function(){N_(e)&&I_(t)})}function N_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$i(t,n)}catch{return!0}}function I_(t){var e=Or(t,1);e!==null&&ji(e,t,1,-1)}function jg(t){var e=nr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:El,lastRenderedState:t},e.queue=t,t=t.dispatch=_M.bind(null,nn,t),[e.memoizedState,t]}function Ml(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=nn.updateQueue,e===null?(e={lastEffect:null,stores:null},nn.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function k_(){return Pi().memoizedState}function nu(t,e,n,i){var r=nr();nn.flags|=t,r.memoizedState=Ml(1|e,n,void 0,i===void 0?null:i)}function Qu(t,e,n,i){var r=Pi();i=i===void 0?null:i;var s=void 0;if(gn!==null){var o=gn.memoizedState;if(s=o.destroy,i!==null&&rm(i,o.deps)){r.memoizedState=Ml(e,n,s,i);return}}nn.flags|=t,r.memoizedState=Ml(1|e,n,s,i)}function $g(t,e){return nu(8390656,8,t,e)}function am(t,e){return Qu(2048,8,t,e)}function O_(t,e){return Qu(4,2,t,e)}function U_(t,e){return Qu(4,4,t,e)}function F_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function z_(t,e,n){return n=n!=null?n.concat([t]):null,Qu(4,4,F_.bind(null,e,t),n)}function lm(){}function B_(t,e){var n=Pi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&rm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function H_(t,e){var n=Pi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&rm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function V_(t,e,n){return to&21?($i(n,e)||(n=Xy(),nn.lanes|=n,no|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jn=!0),t.memoizedState=n)}function vM(t,e){var n=Ut;Ut=n!==0&&4>n?n:4,t(!0);var i=wd.transition;wd.transition={};try{t(!1),e()}finally{Ut=n,wd.transition=i}}function G_(){return Pi().memoizedState}function yM(t,e,n){var i=ps(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},W_(t))j_(e,n);else if(n=T_(t,e,n,i),n!==null){var r=$n();ji(n,t,i,r),$_(n,e,i)}}function _M(t,e,n){var i=ps(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(W_(t))j_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,$i(a,o)){var c=e.interleaved;c===null?(r.next=r,Jp(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=T_(t,e,r,i),n!==null&&(r=$n(),ji(n,t,i,r),$_(n,e,i))}}function W_(t){var e=t.alternate;return t===nn||e!==null&&e===nn}function j_(t,e){rl=Ru=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zp(t,n)}}var Pu={readContext:Ri,useCallback:kn,useContext:kn,useEffect:kn,useImperativeHandle:kn,useInsertionEffect:kn,useLayoutEffect:kn,useMemo:kn,useReducer:kn,useRef:kn,useState:kn,useDebugValue:kn,useDeferredValue:kn,useTransition:kn,useMutableSource:kn,useSyncExternalStore:kn,useId:kn,unstable_isNewReconciler:!1},xM={readContext:Ri,useCallback:function(t,e){return nr().memoizedState=[t,e===void 0?null:e],t},useContext:Ri,useEffect:$g,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nu(4194308,4,F_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nu(4194308,4,t,e)},useInsertionEffect:function(t,e){return nu(4,2,t,e)},useMemo:function(t,e){var n=nr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=nr();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=yM.bind(null,nn,t),[i.memoizedState,t]},useRef:function(t){var e=nr();return t={current:t},e.memoizedState=t},useState:jg,useDebugValue:lm,useDeferredValue:function(t){return nr().memoizedState=t},useTransition:function(){var t=jg(!1),e=t[0];return t=vM.bind(null,t[1]),nr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=nn,r=nr();if(Kt){if(n===void 0)throw Error(xe(407));n=n()}else{if(n=e(),Tn===null)throw Error(xe(349));to&30||P_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,$g(D_.bind(null,i,s,t),[t]),i.flags|=2048,Ml(9,L_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=nr(),e=Tn.identifierPrefix;if(Kt){var n=Lr,i=Pr;n=(i&~(1<<32-Wi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Sl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},SM={readContext:Ri,useCallback:B_,useContext:Ri,useEffect:am,useImperativeHandle:z_,useInsertionEffect:O_,useLayoutEffect:U_,useMemo:H_,useReducer:Td,useRef:k_,useState:function(){return Td(El)},useDebugValue:lm,useDeferredValue:function(t){var e=Pi();return V_(e,gn.memoizedState,t)},useTransition:function(){var t=Td(El)[0],e=Pi().memoizedState;return[t,e]},useMutableSource:A_,useSyncExternalStore:R_,useId:G_,unstable_isNewReconciler:!1},EM={readContext:Ri,useCallback:B_,useContext:Ri,useEffect:am,useImperativeHandle:z_,useInsertionEffect:O_,useLayoutEffect:U_,useMemo:H_,useReducer:bd,useRef:k_,useState:function(){return bd(El)},useDebugValue:lm,useDeferredValue:function(t){var e=Pi();return gn===null?e.memoizedState=t:V_(e,gn.memoizedState,t)},useTransition:function(){var t=bd(El)[0],e=Pi().memoizedState;return[t,e]},useMutableSource:A_,useSyncExternalStore:R_,useId:G_,unstable_isNewReconciler:!1};function Bi(t,e){if(t&&t.defaultProps){e=rn({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:rn({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zu={isMounted:function(t){return(t=t._reactInternals)?oo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=$n(),r=ps(t),s=Nr(i,r);s.payload=e,n!=null&&(s.callback=n),e=ds(t,s,r),e!==null&&(ji(e,t,r,i),eu(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=$n(),r=ps(t),s=Nr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ds(t,s,r),e!==null&&(ji(e,t,r,i),eu(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$n(),i=ps(t),r=Nr(n,i);r.tag=2,e!=null&&(r.callback=e),e=ds(t,r,i),e!==null&&(ji(e,t,i,n),eu(e,t,i))}};function Xg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ml(n,i)||!ml(r,s):!0}function X_(t,e,n){var i=!1,r=_s,s=e.contextType;return typeof s=="object"&&s!==null?s=Ri(s):(r=ti(e)?Js:Hn.current,i=e.contextTypes,s=(i=i!=null)?na(t,r):_s),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function qg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Zu.enqueueReplaceState(e,e.state,null)}function Kh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},em(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ri(s):(s=ti(e)?Js:Hn.current,r.context=na(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Zu.enqueueReplaceState(r,r.state,null),Cu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function oa(t,e){try{var n="",i=e;do n+=K1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Cd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var MM=typeof WeakMap=="function"?WeakMap:Map;function q_(t,e,n){n=Nr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Du||(Du=!0,ap=i),Qh(t,e)},n}function Y_(t,e,n){n=Nr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Qh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qh(t,e),typeof i!="function"&&(hs===null?hs=new Set([this]):hs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Yg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new MM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=UM.bind(null,t,e,n),e.then(t,t))}function Kg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Qg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nr(-1,1),e.tag=2,ds(n,e,1))),n.lanes|=1),t)}var wM=zr.ReactCurrentOwner,Jn=!1;function jn(t,e,n,i){e.child=t===null?w_(e,null,n,i):ra(e,t.child,n,i)}function Zg(t,e,n,i,r){n=n.render;var s=e.ref;return Yo(e,r),i=sm(t,e,n,i,s,r),n=om(),t!==null&&!Jn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ur(t,e,r)):(Kt&&n&&Xp(e),e.flags|=1,jn(t,e,i,r),e.child)}function Jg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!gm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,K_(t,e,s,i,r)):(t=ou(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ml,n(o,i)&&t.ref===e.ref)return Ur(t,e,r)}return e.flags|=1,t=ms(s,i),t.ref=e.ref,t.return=e,e.child=t}function K_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ml(s,i)&&t.ref===e.ref)if(Jn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jn=!0);else return e.lanes=t.lanes,Ur(t,e,r)}return Zh(t,e,n,i,r)}function Q_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},jt(Go,ci),ci|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,jt(Go,ci),ci|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,jt(Go,ci),ci|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,jt(Go,ci),ci|=i;return jn(t,e,r,n),e.child}function Z_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zh(t,e,n,i,r){var s=ti(n)?Js:Hn.current;return s=na(e,s),Yo(e,r),n=sm(t,e,n,i,s,r),i=om(),t!==null&&!Jn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ur(t,e,r)):(Kt&&i&&Xp(e),e.flags|=1,jn(t,e,n,r),e.child)}function ev(t,e,n,i,r){if(ti(n)){var s=!0;Eu(e)}else s=!1;if(Yo(e,r),e.stateNode===null)iu(t,e),X_(e,n,i),Kh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var c=o.context,f=n.contextType;typeof f=="object"&&f!==null?f=Ri(f):(f=ti(n)?Js:Hn.current,f=na(e,f));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||c!==f)&&qg(e,o,i,f),ts=!1;var m=e.memoizedState;o.state=m,Cu(e,i,o,r),c=e.memoizedState,a!==i||m!==c||ei.current||ts?(typeof h=="function"&&(Yh(e,n,h,i),c=e.memoizedState),(a=ts||Xg(e,n,a,i,m,c,f))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),o.props=i,o.state=c,o.context=f,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,b_(t,e),a=e.memoizedProps,f=e.type===e.elementType?a:Bi(e.type,a),o.props=f,p=e.pendingProps,m=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ri(c):(c=ti(n)?Js:Hn.current,c=na(e,c));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==c)&&qg(e,o,i,c),ts=!1,m=e.memoizedState,o.state=m,Cu(e,i,o,r);var E=e.memoizedState;a!==p||m!==E||ei.current||ts?(typeof _=="function"&&(Yh(e,n,_,i),E=e.memoizedState),(f=ts||Xg(e,n,f,i,m,E,c)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,E,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,E,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=E),o.props=i,o.state=E,o.context=c,i=f):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),i=!1)}return Jh(t,e,n,i,s,r)}function Jh(t,e,n,i,r,s){Z_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&zg(e,n,!1),Ur(t,e,s);i=e.stateNode,wM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ra(e,t.child,null,s),e.child=ra(e,null,a,s)):jn(t,e,a,s),e.memoizedState=i.state,r&&zg(e,n,!0),e.child}function J_(t){var e=t.stateNode;e.pendingContext?Fg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fg(t,e.context,!1),tm(t,e.containerInfo)}function tv(t,e,n,i,r){return ia(),Yp(r),e.flags|=256,jn(t,e,n,i),e.child}var ep={dehydrated:null,treeContext:null,retryLane:0};function tp(t){return{baseLanes:t,cachePool:null,transitions:null}}function ex(t,e,n){var i=e.pendingProps,r=tn.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),jt(tn,r&1),t===null)return Xh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=tf(o,i,0,null),t=Qs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=tp(n),e.memoizedState=ep,t):cm(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return TM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var c={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=ms(r,c),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ms(a,s):(s=Qs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?tp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ep,i}return s=t.child,t=s.sibling,i=ms(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function cm(t,e){return e=tf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pc(t,e,n,i){return i!==null&&Yp(i),ra(e,t.child,null,n),t=cm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function TM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Cd(Error(xe(422))),pc(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=tf({mode:"visible",children:i.children},r,0,null),s=Qs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ra(e,t.child,null,o),e.child.memoizedState=tp(o),e.memoizedState=ep,s);if(!(e.mode&1))return pc(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(xe(419)),i=Cd(s,i,void 0),pc(t,e,o,i)}if(a=(o&t.childLanes)!==0,Jn||a){if(i=Tn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Or(t,r),ji(i,t,r,-1))}return mm(),i=Cd(Error(xe(421))),pc(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=FM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,ui=fs(r.nextSibling),fi=e,Kt=!0,Vi=null,t!==null&&(Ei[Mi++]=Pr,Ei[Mi++]=Lr,Ei[Mi++]=eo,Pr=t.id,Lr=t.overflow,eo=e),e=cm(e,i.children),e.flags|=4096,e)}function nv(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),qh(t.return,e,n)}function Ad(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function tx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(jn(t,e,i.children,n),i=tn.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&nv(t,n,e);else if(t.tag===19)nv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(jt(tn,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Au(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ad(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Au(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ad(e,!0,n,null,s);break;case"together":Ad(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function iu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ur(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),no|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(xe(153));if(e.child!==null){for(t=e.child,n=ms(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ms(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bM(t,e,n){switch(e.tag){case 3:J_(e),ia();break;case 5:C_(e);break;case 1:ti(e.type)&&Eu(e);break;case 4:tm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;jt(Tu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(jt(tn,tn.current&1),e.flags|=128,null):n&e.child.childLanes?ex(t,e,n):(jt(tn,tn.current&1),t=Ur(t,e,n),t!==null?t.sibling:null);jt(tn,tn.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return tx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),jt(tn,tn.current),i)break;return null;case 22:case 23:return e.lanes=0,Q_(t,e,n)}return Ur(t,e,n)}var nx,np,ix,rx;nx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};np=function(){};ix=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Xs(hr.current);var s=null;switch(n){case"input":r=wh(t,r),i=wh(t,i),s=[];break;case"select":r=rn({},r,{value:void 0}),i=rn({},i,{value:void 0}),s=[];break;case"textarea":r=Ch(t,r),i=Ch(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=xu)}Rh(n,i);var o;n=null;for(f in r)if(!i.hasOwnProperty(f)&&r.hasOwnProperty(f)&&r[f]!=null)if(f==="style"){var a=r[f];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(ll.hasOwnProperty(f)?s||(s=[]):(s=s||[]).push(f,null));for(f in i){var c=i[f];if(a=r!=null?r[f]:void 0,i.hasOwnProperty(f)&&c!==a&&(c!=null||a!=null))if(f==="style")if(a){for(o in a)!a.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&a[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(f,n)),n=c;else f==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(s=s||[]).push(f,c)):f==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(f,""+c):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(ll.hasOwnProperty(f)?(c!=null&&f==="onScroll"&&$t("scroll",t),s||a===c||(s=[])):(s=s||[]).push(f,c))}n&&(s=s||[]).push("style",n);var f=s;(e.updateQueue=f)&&(e.flags|=4)}};rx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ua(t,e){if(!Kt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function On(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function CM(t,e,n){var i=e.pendingProps;switch(qp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return On(e),null;case 1:return ti(e.type)&&Su(),On(e),null;case 3:return i=e.stateNode,sa(),qt(ei),qt(Hn),im(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(dc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vi!==null&&(up(Vi),Vi=null))),np(t,e),On(e),null;case 5:nm(e);var r=Xs(xl.current);if(n=e.type,t!==null&&e.stateNode!=null)ix(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(xe(166));return On(e),null}if(t=Xs(hr.current),dc(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[lr]=e,i[yl]=s,t=(e.mode&1)!==0,n){case"dialog":$t("cancel",i),$t("close",i);break;case"iframe":case"object":case"embed":$t("load",i);break;case"video":case"audio":for(r=0;r<Ka.length;r++)$t(Ka[r],i);break;case"source":$t("error",i);break;case"img":case"image":case"link":$t("error",i),$t("load",i);break;case"details":$t("toggle",i);break;case"input":fg(i,s),$t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},$t("invalid",i);break;case"textarea":hg(i,s),$t("invalid",i)}Rh(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&fc(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&fc(i.textContent,a,t),r=["children",""+a]):ll.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&$t("scroll",i)}switch(n){case"input":ic(i),dg(i,s,!0);break;case"textarea":ic(i),pg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=xu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Dy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[lr]=e,t[yl]=i,nx(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ph(n,i),n){case"dialog":$t("cancel",t),$t("close",t),r=i;break;case"iframe":case"object":case"embed":$t("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ka.length;r++)$t(Ka[r],t);r=i;break;case"source":$t("error",t),r=i;break;case"img":case"image":case"link":$t("error",t),$t("load",t),r=i;break;case"details":$t("toggle",t),r=i;break;case"input":fg(t,i),r=wh(t,i),$t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=rn({},i,{value:void 0}),$t("invalid",t);break;case"textarea":hg(t,i),r=Ch(t,i),$t("invalid",t);break;default:r=i}Rh(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="style"?ky(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Ny(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&cl(t,c):typeof c=="number"&&cl(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ll.hasOwnProperty(s)?c!=null&&s==="onScroll"&&$t("scroll",t):c!=null&&Np(t,s,c,o))}switch(n){case"input":ic(t),dg(t,i,!1);break;case"textarea":ic(t),pg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ys(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?jo(t,!!i.multiple,s,!1):i.defaultValue!=null&&jo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=xu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return On(e),null;case 6:if(t&&e.stateNode!=null)rx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(xe(166));if(n=Xs(xl.current),Xs(hr.current),dc(e)){if(i=e.stateNode,n=e.memoizedProps,i[lr]=e,(s=i.nodeValue!==n)&&(t=fi,t!==null))switch(t.tag){case 3:fc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fc(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[lr]=e,e.stateNode=i}return On(e),null;case 13:if(qt(tn),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Kt&&ui!==null&&e.mode&1&&!(e.flags&128))E_(),ia(),e.flags|=98560,s=!1;else if(s=dc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(xe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(xe(317));s[lr]=e}else ia(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;On(e),s=!1}else Vi!==null&&(up(Vi),Vi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||tn.current&1?vn===0&&(vn=3):mm())),e.updateQueue!==null&&(e.flags|=4),On(e),null);case 4:return sa(),np(t,e),t===null&&gl(e.stateNode.containerInfo),On(e),null;case 10:return Zp(e.type._context),On(e),null;case 17:return ti(e.type)&&Su(),On(e),null;case 19:if(qt(tn),s=e.memoizedState,s===null)return On(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ua(s,!1);else{if(vn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Au(t),o!==null){for(e.flags|=128,Ua(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return jt(tn,tn.current&1|2),e.child}t=t.sibling}s.tail!==null&&cn()>aa&&(e.flags|=128,i=!0,Ua(s,!1),e.lanes=4194304)}else{if(!i)if(t=Au(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ua(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Kt)return On(e),null}else 2*cn()-s.renderingStartTime>aa&&n!==1073741824&&(e.flags|=128,i=!0,Ua(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=cn(),e.sibling=null,n=tn.current,jt(tn,i?n&1|2:n&1),e):(On(e),null);case 22:case 23:return pm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ci&1073741824&&(On(e),e.subtreeFlags&6&&(e.flags|=8192)):On(e),null;case 24:return null;case 25:return null}throw Error(xe(156,e.tag))}function AM(t,e){switch(qp(e),e.tag){case 1:return ti(e.type)&&Su(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return sa(),qt(ei),qt(Hn),im(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return nm(e),null;case 13:if(qt(tn),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(xe(340));ia()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return qt(tn),null;case 4:return sa(),null;case 10:return Zp(e.type._context),null;case 22:case 23:return pm(),null;case 24:return null;default:return null}}var mc=!1,Bn=!1,RM=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function Vo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){an(t,e,i)}else n.current=null}function ip(t,e,n){try{n()}catch(i){an(t,e,i)}}var iv=!1;function PM(t,e){if(Bh=vu,t=c_(),$p(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,c=-1,f=0,h=0,p=t,m=null;t:for(;;){for(var _;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||i!==0&&p.nodeType!==3||(c=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(_=p.firstChild)!==null;)m=p,p=_;for(;;){if(p===t)break t;if(m===n&&++f===r&&(a=o),m===s&&++h===i&&(c=o),(_=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=_}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hh={focusedElem:t,selectionRange:n},vu=!1,Fe=e;Fe!==null;)if(e=Fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Fe=t;else for(;Fe!==null;){e=Fe;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var S=E.memoizedProps,x=E.memoizedState,g=e.stateNode,w=g.getSnapshotBeforeUpdate(e.elementType===e.type?S:Bi(e.type,S),x);g.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(xe(163))}}catch(R){an(e,e.return,R)}if(t=e.sibling,t!==null){t.return=e.return,Fe=t;break}Fe=e.return}return E=iv,iv=!1,E}function sl(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ip(e,n,s)}r=r.next}while(r!==i)}}function Ju(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function rp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function sx(t){var e=t.alternate;e!==null&&(t.alternate=null,sx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[lr],delete e[yl],delete e[Wh],delete e[dM],delete e[hM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ox(t){return t.tag===5||t.tag===3||t.tag===4}function rv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ox(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xu));else if(i!==4&&(t=t.child,t!==null))for(sp(t,e,n),t=t.sibling;t!==null;)sp(t,e,n),t=t.sibling}function op(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(op(t,e,n),t=t.sibling;t!==null;)op(t,e,n),t=t.sibling}var An=null,Hi=!1;function jr(t,e,n){for(n=n.child;n!==null;)ax(t,e,n),n=n.sibling}function ax(t,e,n){if(dr&&typeof dr.onCommitFiberUnmount=="function")try{dr.onCommitFiberUnmount(ju,n)}catch{}switch(n.tag){case 5:Bn||Vo(n,e);case 6:var i=An,r=Hi;An=null,jr(t,e,n),An=i,Hi=r,An!==null&&(Hi?(t=An,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):An.removeChild(n.stateNode));break;case 18:An!==null&&(Hi?(t=An,n=n.stateNode,t.nodeType===8?Sd(t.parentNode,n):t.nodeType===1&&Sd(t,n),hl(t)):Sd(An,n.stateNode));break;case 4:i=An,r=Hi,An=n.stateNode.containerInfo,Hi=!0,jr(t,e,n),An=i,Hi=r;break;case 0:case 11:case 14:case 15:if(!Bn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ip(n,e,o),r=r.next}while(r!==i)}jr(t,e,n);break;case 1:if(!Bn&&(Vo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){an(n,e,a)}jr(t,e,n);break;case 21:jr(t,e,n);break;case 22:n.mode&1?(Bn=(i=Bn)||n.memoizedState!==null,jr(t,e,n),Bn=i):jr(t,e,n);break;default:jr(t,e,n)}}function sv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new RM),e.forEach(function(i){var r=zM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ki(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:An=a.stateNode,Hi=!1;break e;case 3:An=a.stateNode.containerInfo,Hi=!0;break e;case 4:An=a.stateNode.containerInfo,Hi=!0;break e}a=a.return}if(An===null)throw Error(xe(160));ax(s,o,r),An=null,Hi=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(f){an(r,e,f)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)lx(e,t),e=e.sibling}function lx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ki(e,t),er(t),i&4){try{sl(3,t,t.return),Ju(3,t)}catch(S){an(t,t.return,S)}try{sl(5,t,t.return)}catch(S){an(t,t.return,S)}}break;case 1:ki(e,t),er(t),i&512&&n!==null&&Vo(n,n.return);break;case 5:if(ki(e,t),er(t),i&512&&n!==null&&Vo(n,n.return),t.flags&32){var r=t.stateNode;try{cl(r,"")}catch(S){an(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Py(r,s),Ph(a,o);var f=Ph(a,s);for(o=0;o<c.length;o+=2){var h=c[o],p=c[o+1];h==="style"?ky(r,p):h==="dangerouslySetInnerHTML"?Ny(r,p):h==="children"?cl(r,p):Np(r,h,p,f)}switch(a){case"input":Th(r,s);break;case"textarea":Ly(r,s);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?jo(r,!!s.multiple,_,!1):m!==!!s.multiple&&(s.defaultValue!=null?jo(r,!!s.multiple,s.defaultValue,!0):jo(r,!!s.multiple,s.multiple?[]:"",!1))}r[yl]=s}catch(S){an(t,t.return,S)}}break;case 6:if(ki(e,t),er(t),i&4){if(t.stateNode===null)throw Error(xe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){an(t,t.return,S)}}break;case 3:if(ki(e,t),er(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{hl(e.containerInfo)}catch(S){an(t,t.return,S)}break;case 4:ki(e,t),er(t);break;case 13:ki(e,t),er(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(dm=cn())),i&4&&sv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Bn=(f=Bn)||h,ki(e,t),Bn=f):ki(e,t),er(t),i&8192){if(f=t.memoizedState!==null,(t.stateNode.isHidden=f)&&!h&&t.mode&1)for(Fe=t,h=t.child;h!==null;){for(p=Fe=h;Fe!==null;){switch(m=Fe,_=m.child,m.tag){case 0:case 11:case 14:case 15:sl(4,m,m.return);break;case 1:Vo(m,m.return);var E=m.stateNode;if(typeof E.componentWillUnmount=="function"){i=m,n=m.return;try{e=i,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(S){an(i,n,S)}}break;case 5:Vo(m,m.return);break;case 22:if(m.memoizedState!==null){av(p);continue}}_!==null?(_.return=m,Fe=_):av(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,f?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Iy("display",o))}catch(S){an(t,t.return,S)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=f?"":p.memoizedProps}catch(S){an(t,t.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ki(e,t),er(t),i&4&&sv(t);break;case 21:break;default:ki(e,t),er(t)}}function er(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ox(n)){var i=n;break e}n=n.return}throw Error(xe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(cl(r,""),i.flags&=-33);var s=rv(t);op(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=rv(t);sp(t,a,o);break;default:throw Error(xe(161))}}catch(c){an(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function LM(t,e,n){Fe=t,cx(t)}function cx(t,e,n){for(var i=(t.mode&1)!==0;Fe!==null;){var r=Fe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||mc;if(!o){var a=r.alternate,c=a!==null&&a.memoizedState!==null||Bn;a=mc;var f=Bn;if(mc=o,(Bn=c)&&!f)for(Fe=r;Fe!==null;)o=Fe,c=o.child,o.tag===22&&o.memoizedState!==null?lv(r):c!==null?(c.return=o,Fe=c):lv(r);for(;s!==null;)Fe=s,cx(s),s=s.sibling;Fe=r,mc=a,Bn=f}ov(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Fe=s):ov(t)}}function ov(t){for(;Fe!==null;){var e=Fe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bn||Ju(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Bi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Wg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Wg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var f=e.alternate;if(f!==null){var h=f.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&hl(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(xe(163))}Bn||e.flags&512&&rp(e)}catch(m){an(e,e.return,m)}}if(e===t){Fe=null;break}if(n=e.sibling,n!==null){n.return=e.return,Fe=n;break}Fe=e.return}}function av(t){for(;Fe!==null;){var e=Fe;if(e===t){Fe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Fe=n;break}Fe=e.return}}function lv(t){for(;Fe!==null;){var e=Fe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ju(4,e)}catch(c){an(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){an(e,r,c)}}var s=e.return;try{rp(e)}catch(c){an(e,s,c)}break;case 5:var o=e.return;try{rp(e)}catch(c){an(e,o,c)}}}catch(c){an(e,e.return,c)}if(e===t){Fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Fe=a;break}Fe=e.return}}var DM=Math.ceil,Lu=zr.ReactCurrentDispatcher,um=zr.ReactCurrentOwner,Ci=zr.ReactCurrentBatchConfig,bt=0,Tn=null,hn=null,Ln=0,ci=0,Go=ws(0),vn=0,wl=null,no=0,ef=0,fm=0,ol=null,Qn=null,dm=0,aa=1/0,Cr=null,Du=!1,ap=null,hs=null,gc=!1,os=null,Nu=0,al=0,lp=null,ru=-1,su=0;function $n(){return bt&6?cn():ru!==-1?ru:ru=cn()}function ps(t){return t.mode&1?bt&2&&Ln!==0?Ln&-Ln:mM.transition!==null?(su===0&&(su=Xy()),su):(t=Ut,t!==0||(t=window.event,t=t===void 0?16:e_(t.type)),t):1}function ji(t,e,n,i){if(50<al)throw al=0,lp=null,Error(xe(185));Ll(t,n,i),(!(bt&2)||t!==Tn)&&(t===Tn&&(!(bt&2)&&(ef|=n),vn===4&&is(t,Ln)),ni(t,i),n===1&&bt===0&&!(e.mode&1)&&(aa=cn()+500,Ku&&Ts()))}function ni(t,e){var n=t.callbackNode;mE(t,e);var i=gu(t,t===Tn?Ln:0);if(i===0)n!==null&&vg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&vg(n),e===1)t.tag===0?pM(cv.bind(null,t)):__(cv.bind(null,t)),uM(function(){!(bt&6)&&Ts()}),n=null;else{switch(qy(i)){case 1:n=Fp;break;case 4:n=jy;break;case 16:n=mu;break;case 536870912:n=$y;break;default:n=mu}n=vx(n,ux.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ux(t,e){if(ru=-1,su=0,bt&6)throw Error(xe(327));var n=t.callbackNode;if(Ko()&&t.callbackNode!==n)return null;var i=gu(t,t===Tn?Ln:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Iu(t,i);else{e=i;var r=bt;bt|=2;var s=dx();(Tn!==t||Ln!==e)&&(Cr=null,aa=cn()+500,Ks(t,e));do try{kM();break}catch(a){fx(t,a)}while(!0);Qp(),Lu.current=s,bt=r,hn!==null?e=0:(Tn=null,Ln=0,e=vn)}if(e!==0){if(e===2&&(r=kh(t),r!==0&&(i=r,e=cp(t,r))),e===1)throw n=wl,Ks(t,0),is(t,i),ni(t,cn()),n;if(e===6)is(t,i);else{if(r=t.current.alternate,!(i&30)&&!NM(r)&&(e=Iu(t,i),e===2&&(s=kh(t),s!==0&&(i=s,e=cp(t,s))),e===1))throw n=wl,Ks(t,0),is(t,i),ni(t,cn()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(xe(345));case 2:Bs(t,Qn,Cr);break;case 3:if(is(t,i),(i&130023424)===i&&(e=dm+500-cn(),10<e)){if(gu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){$n(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Gh(Bs.bind(null,t,Qn,Cr),e);break}Bs(t,Qn,Cr);break;case 4:if(is(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Wi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=cn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*DM(i/1960))-i,10<i){t.timeoutHandle=Gh(Bs.bind(null,t,Qn,Cr),i);break}Bs(t,Qn,Cr);break;case 5:Bs(t,Qn,Cr);break;default:throw Error(xe(329))}}}return ni(t,cn()),t.callbackNode===n?ux.bind(null,t):null}function cp(t,e){var n=ol;return t.current.memoizedState.isDehydrated&&(Ks(t,e).flags|=256),t=Iu(t,e),t!==2&&(e=Qn,Qn=n,e!==null&&up(e)),t}function up(t){Qn===null?Qn=t:Qn.push.apply(Qn,t)}function NM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!$i(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function is(t,e){for(e&=~fm,e&=~ef,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wi(e),i=1<<n;t[n]=-1,e&=~i}}function cv(t){if(bt&6)throw Error(xe(327));Ko();var e=gu(t,0);if(!(e&1))return ni(t,cn()),null;var n=Iu(t,e);if(t.tag!==0&&n===2){var i=kh(t);i!==0&&(e=i,n=cp(t,i))}if(n===1)throw n=wl,Ks(t,0),is(t,e),ni(t,cn()),n;if(n===6)throw Error(xe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Bs(t,Qn,Cr),ni(t,cn()),null}function hm(t,e){var n=bt;bt|=1;try{return t(e)}finally{bt=n,bt===0&&(aa=cn()+500,Ku&&Ts())}}function io(t){os!==null&&os.tag===0&&!(bt&6)&&Ko();var e=bt;bt|=1;var n=Ci.transition,i=Ut;try{if(Ci.transition=null,Ut=1,t)return t()}finally{Ut=i,Ci.transition=n,bt=e,!(bt&6)&&Ts()}}function pm(){ci=Go.current,qt(Go)}function Ks(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cM(n)),hn!==null)for(n=hn.return;n!==null;){var i=n;switch(qp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Su();break;case 3:sa(),qt(ei),qt(Hn),im();break;case 5:nm(i);break;case 4:sa();break;case 13:qt(tn);break;case 19:qt(tn);break;case 10:Zp(i.type._context);break;case 22:case 23:pm()}n=n.return}if(Tn=t,hn=t=ms(t.current,null),Ln=ci=e,vn=0,wl=null,fm=ef=no=0,Qn=ol=null,$s!==null){for(e=0;e<$s.length;e++)if(n=$s[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}$s=null}return t}function fx(t,e){do{var n=hn;try{if(Qp(),tu.current=Pu,Ru){for(var i=nn.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ru=!1}if(to=0,wn=gn=nn=null,rl=!1,Sl=0,um.current=null,n===null||n.return===null){vn=1,wl=e,hn=null;break}e:{var s=t,o=n.return,a=n,c=e;if(e=Ln,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var f=c,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=Kg(o);if(_!==null){_.flags&=-257,Qg(_,o,a,s,e),_.mode&1&&Yg(s,f,e),e=_,c=f;var E=e.updateQueue;if(E===null){var S=new Set;S.add(c),e.updateQueue=S}else E.add(c);break e}else{if(!(e&1)){Yg(s,f,e),mm();break e}c=Error(xe(426))}}else if(Kt&&a.mode&1){var x=Kg(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Qg(x,o,a,s,e),Yp(oa(c,a));break e}}s=c=oa(c,a),vn!==4&&(vn=2),ol===null?ol=[s]:ol.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=q_(s,c,e);Gg(s,g);break e;case 1:a=c;var w=s.type,M=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(hs===null||!hs.has(M)))){s.flags|=65536,e&=-e,s.lanes|=e;var R=Y_(s,a,e);Gg(s,R);break e}}s=s.return}while(s!==null)}px(n)}catch(U){e=U,hn===n&&n!==null&&(hn=n=n.return);continue}break}while(!0)}function dx(){var t=Lu.current;return Lu.current=Pu,t===null?Pu:t}function mm(){(vn===0||vn===3||vn===2)&&(vn=4),Tn===null||!(no&268435455)&&!(ef&268435455)||is(Tn,Ln)}function Iu(t,e){var n=bt;bt|=2;var i=dx();(Tn!==t||Ln!==e)&&(Cr=null,Ks(t,e));do try{IM();break}catch(r){fx(t,r)}while(!0);if(Qp(),bt=n,Lu.current=i,hn!==null)throw Error(xe(261));return Tn=null,Ln=0,vn}function IM(){for(;hn!==null;)hx(hn)}function kM(){for(;hn!==null&&!oE();)hx(hn)}function hx(t){var e=gx(t.alternate,t,ci);t.memoizedProps=t.pendingProps,e===null?px(t):hn=e,um.current=null}function px(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=AM(n,e),n!==null){n.flags&=32767,hn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{vn=6,hn=null;return}}else if(n=CM(n,e,ci),n!==null){hn=n;return}if(e=e.sibling,e!==null){hn=e;return}hn=e=t}while(e!==null);vn===0&&(vn=5)}function Bs(t,e,n){var i=Ut,r=Ci.transition;try{Ci.transition=null,Ut=1,OM(t,e,n,i)}finally{Ci.transition=r,Ut=i}return null}function OM(t,e,n,i){do Ko();while(os!==null);if(bt&6)throw Error(xe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(xe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(gE(t,s),t===Tn&&(hn=Tn=null,Ln=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gc||(gc=!0,vx(mu,function(){return Ko(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ci.transition,Ci.transition=null;var o=Ut;Ut=1;var a=bt;bt|=4,um.current=null,PM(t,n),lx(n,t),nM(Hh),vu=!!Bh,Hh=Bh=null,t.current=n,LM(n),aE(),bt=a,Ut=o,Ci.transition=s}else t.current=n;if(gc&&(gc=!1,os=t,Nu=r),s=t.pendingLanes,s===0&&(hs=null),uE(n.stateNode),ni(t,cn()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Du)throw Du=!1,t=ap,ap=null,t;return Nu&1&&t.tag!==0&&Ko(),s=t.pendingLanes,s&1?t===lp?al++:(al=0,lp=t):al=0,Ts(),null}function Ko(){if(os!==null){var t=qy(Nu),e=Ci.transition,n=Ut;try{if(Ci.transition=null,Ut=16>t?16:t,os===null)var i=!1;else{if(t=os,os=null,Nu=0,bt&6)throw Error(xe(331));var r=bt;for(bt|=4,Fe=t.current;Fe!==null;){var s=Fe,o=s.child;if(Fe.flags&16){var a=s.deletions;if(a!==null){for(var c=0;c<a.length;c++){var f=a[c];for(Fe=f;Fe!==null;){var h=Fe;switch(h.tag){case 0:case 11:case 15:sl(8,h,s)}var p=h.child;if(p!==null)p.return=h,Fe=p;else for(;Fe!==null;){h=Fe;var m=h.sibling,_=h.return;if(sx(h),h===f){Fe=null;break}if(m!==null){m.return=_,Fe=m;break}Fe=_}}}var E=s.alternate;if(E!==null){var S=E.child;if(S!==null){E.child=null;do{var x=S.sibling;S.sibling=null,S=x}while(S!==null)}}Fe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Fe=o;else e:for(;Fe!==null;){if(s=Fe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:sl(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,Fe=g;break e}Fe=s.return}}var w=t.current;for(Fe=w;Fe!==null;){o=Fe;var M=o.child;if(o.subtreeFlags&2064&&M!==null)M.return=o,Fe=M;else e:for(o=w;Fe!==null;){if(a=Fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ju(9,a)}}catch(U){an(a,a.return,U)}if(a===o){Fe=null;break e}var R=a.sibling;if(R!==null){R.return=a.return,Fe=R;break e}Fe=a.return}}if(bt=r,Ts(),dr&&typeof dr.onPostCommitFiberRoot=="function")try{dr.onPostCommitFiberRoot(ju,t)}catch{}i=!0}return i}finally{Ut=n,Ci.transition=e}}return!1}function uv(t,e,n){e=oa(n,e),e=q_(t,e,1),t=ds(t,e,1),e=$n(),t!==null&&(Ll(t,1,e),ni(t,e))}function an(t,e,n){if(t.tag===3)uv(t,t,n);else for(;e!==null;){if(e.tag===3){uv(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(hs===null||!hs.has(i))){t=oa(n,t),t=Y_(e,t,1),e=ds(e,t,1),t=$n(),e!==null&&(Ll(e,1,t),ni(e,t));break}}e=e.return}}function UM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=$n(),t.pingedLanes|=t.suspendedLanes&n,Tn===t&&(Ln&n)===n&&(vn===4||vn===3&&(Ln&130023424)===Ln&&500>cn()-dm?Ks(t,0):fm|=n),ni(t,e)}function mx(t,e){e===0&&(t.mode&1?(e=oc,oc<<=1,!(oc&130023424)&&(oc=4194304)):e=1);var n=$n();t=Or(t,e),t!==null&&(Ll(t,e,n),ni(t,n))}function FM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),mx(t,n)}function zM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(xe(314))}i!==null&&i.delete(e),mx(t,n)}var gx;gx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ei.current)Jn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jn=!1,bM(t,e,n);Jn=!!(t.flags&131072)}else Jn=!1,Kt&&e.flags&1048576&&x_(e,wu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;iu(t,e),t=e.pendingProps;var r=na(e,Hn.current);Yo(e,n),r=sm(null,e,i,t,r,n);var s=om();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ti(i)?(s=!0,Eu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,em(e),r.updater=Zu,e.stateNode=r,r._reactInternals=e,Kh(e,i,t,n),e=Jh(null,e,i,!0,s,n)):(e.tag=0,Kt&&s&&Xp(e),jn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(iu(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=HM(i),t=Bi(i,t),r){case 0:e=Zh(null,e,i,t,n);break e;case 1:e=ev(null,e,i,t,n);break e;case 11:e=Zg(null,e,i,t,n);break e;case 14:e=Jg(null,e,i,Bi(i.type,t),n);break e}throw Error(xe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bi(i,r),Zh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bi(i,r),ev(t,e,i,r,n);case 3:e:{if(J_(e),t===null)throw Error(xe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,b_(t,e),Cu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=oa(Error(xe(423)),e),e=tv(t,e,i,n,r);break e}else if(i!==r){r=oa(Error(xe(424)),e),e=tv(t,e,i,n,r);break e}else for(ui=fs(e.stateNode.containerInfo.firstChild),fi=e,Kt=!0,Vi=null,n=w_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ia(),i===r){e=Ur(t,e,n);break e}jn(t,e,i,n)}e=e.child}return e;case 5:return C_(e),t===null&&Xh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Vh(i,r)?o=null:s!==null&&Vh(i,s)&&(e.flags|=32),Z_(t,e),jn(t,e,o,n),e.child;case 6:return t===null&&Xh(e),null;case 13:return ex(t,e,n);case 4:return tm(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ra(e,null,i,n):jn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bi(i,r),Zg(t,e,i,r,n);case 7:return jn(t,e,e.pendingProps,n),e.child;case 8:return jn(t,e,e.pendingProps.children,n),e.child;case 12:return jn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,jt(Tu,i._currentValue),i._currentValue=o,s!==null)if($i(s.value,o)){if(s.children===r.children&&!ei.current){e=Ur(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var c=a.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=Nr(-1,n&-n),c.tag=2;var f=s.updateQueue;if(f!==null){f=f.shared;var h=f.pending;h===null?c.next=c:(c.next=h.next,h.next=c),f.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),qh(s.return,n,e),a.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(xe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),qh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}jn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Yo(e,n),r=Ri(r),i=i(r),e.flags|=1,jn(t,e,i,n),e.child;case 14:return i=e.type,r=Bi(i,e.pendingProps),r=Bi(i.type,r),Jg(t,e,i,r,n);case 15:return K_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bi(i,r),iu(t,e),e.tag=1,ti(i)?(t=!0,Eu(e)):t=!1,Yo(e,n),X_(e,i,r),Kh(e,i,r,n),Jh(null,e,i,!0,t,n);case 19:return tx(t,e,n);case 22:return Q_(t,e,n)}throw Error(xe(156,e.tag))};function vx(t,e){return Wy(t,e)}function BM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ti(t,e,n,i){return new BM(t,e,n,i)}function gm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HM(t){if(typeof t=="function")return gm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===kp)return 11;if(t===Op)return 14}return 2}function ms(t,e){var n=t.alternate;return n===null?(n=Ti(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ou(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")gm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case No:return Qs(n.children,r,s,e);case Ip:o=8,r|=8;break;case xh:return t=Ti(12,n,e,r|2),t.elementType=xh,t.lanes=s,t;case Sh:return t=Ti(13,n,e,r),t.elementType=Sh,t.lanes=s,t;case Eh:return t=Ti(19,n,e,r),t.elementType=Eh,t.lanes=s,t;case Cy:return tf(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ty:o=10;break e;case by:o=9;break e;case kp:o=11;break e;case Op:o=14;break e;case es:o=16,i=null;break e}throw Error(xe(130,t==null?t:typeof t,""))}return e=Ti(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Qs(t,e,n,i){return t=Ti(7,t,i,e),t.lanes=n,t}function tf(t,e,n,i){return t=Ti(22,t,i,e),t.elementType=Cy,t.lanes=n,t.stateNode={isHidden:!1},t}function Rd(t,e,n){return t=Ti(6,t,null,e),t.lanes=n,t}function Pd(t,e,n){return e=Ti(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function VM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ud(0),this.expirationTimes=ud(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ud(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function vm(t,e,n,i,r,s,o,a,c){return t=new VM(t,e,n,a,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ti(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},em(s),t}function GM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Do,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function yx(t){if(!t)return _s;t=t._reactInternals;e:{if(oo(t)!==t||t.tag!==1)throw Error(xe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ti(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(xe(171))}if(t.tag===1){var n=t.type;if(ti(n))return y_(t,n,e)}return e}function _x(t,e,n,i,r,s,o,a,c){return t=vm(n,i,!0,t,r,s,o,a,c),t.context=yx(null),n=t.current,i=$n(),r=ps(n),s=Nr(i,r),s.callback=e??null,ds(n,s,r),t.current.lanes=r,Ll(t,r,i),ni(t,i),t}function nf(t,e,n,i){var r=e.current,s=$n(),o=ps(r);return n=yx(n),e.context===null?e.context=n:e.pendingContext=n,e=Nr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ds(r,e,o),t!==null&&(ji(t,r,o,s),eu(t,r,o)),o}function ku(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ym(t,e){fv(t,e),(t=t.alternate)&&fv(t,e)}function WM(){return null}var xx=typeof reportError=="function"?reportError:function(t){console.error(t)};function _m(t){this._internalRoot=t}rf.prototype.render=_m.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(xe(409));nf(t,e,null,null)};rf.prototype.unmount=_m.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;io(function(){nf(null,t,null,null)}),e[kr]=null}};function rf(t){this._internalRoot=t}rf.prototype.unstable_scheduleHydration=function(t){if(t){var e=Qy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ns.length&&e!==0&&e<ns[n].priority;n++);ns.splice(n,0,t),n===0&&Jy(t)}};function xm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dv(){}function jM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var f=ku(o);s.call(f)}}var o=_x(e,i,t,0,null,!1,!1,"",dv);return t._reactRootContainer=o,t[kr]=o.current,gl(t.nodeType===8?t.parentNode:t),io(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var f=ku(c);a.call(f)}}var c=vm(t,0,!1,null,null,!1,!1,"",dv);return t._reactRootContainer=c,t[kr]=c.current,gl(t.nodeType===8?t.parentNode:t),io(function(){nf(e,c,n,i)}),c}function of(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var c=ku(o);a.call(c)}}nf(e,o,t,r)}else o=jM(n,e,t,r,i);return ku(o)}Yy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ya(e.pendingLanes);n!==0&&(zp(e,n|1),ni(e,cn()),!(bt&6)&&(aa=cn()+500,Ts()))}break;case 13:io(function(){var i=Or(t,1);if(i!==null){var r=$n();ji(i,t,1,r)}}),ym(t,1)}};Bp=function(t){if(t.tag===13){var e=Or(t,134217728);if(e!==null){var n=$n();ji(e,t,134217728,n)}ym(t,134217728)}};Ky=function(t){if(t.tag===13){var e=ps(t),n=Or(t,e);if(n!==null){var i=$n();ji(n,t,e,i)}ym(t,e)}};Qy=function(){return Ut};Zy=function(t,e){var n=Ut;try{return Ut=t,e()}finally{Ut=n}};Dh=function(t,e,n){switch(e){case"input":if(Th(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Yu(i);if(!r)throw Error(xe(90));Ry(i),Th(i,r)}}}break;case"textarea":Ly(t,n);break;case"select":e=n.value,e!=null&&jo(t,!!n.multiple,e,!1)}};Fy=hm;zy=io;var $M={usingClientEntryPoint:!1,Events:[Nl,Uo,Yu,Oy,Uy,hm]},Fa={findFiberByHostInstance:js,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},XM={bundleType:Fa.bundleType,version:Fa.version,rendererPackageName:Fa.rendererPackageName,rendererConfig:Fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vy(t),t===null?null:t.stateNode},findFiberByHostInstance:Fa.findFiberByHostInstance||WM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{ju=vc.inject(XM),dr=vc}catch{}}mi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$M;mi.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xm(e))throw Error(xe(200));return GM(t,e,null,n)};mi.createRoot=function(t,e){if(!xm(t))throw Error(xe(299));var n=!1,i="",r=xx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=vm(t,1,!1,null,null,n,!1,i,r),t[kr]=e.current,gl(t.nodeType===8?t.parentNode:t),new _m(e)};mi.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(xe(188)):(t=Object.keys(t).join(","),Error(xe(268,t)));return t=Vy(e),t=t===null?null:t.stateNode,t};mi.flushSync=function(t){return io(t)};mi.hydrate=function(t,e,n){if(!sf(e))throw Error(xe(200));return of(null,t,e,!0,n)};mi.hydrateRoot=function(t,e,n){if(!xm(t))throw Error(xe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=xx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=_x(e,null,t,1,n??null,r,!1,s,o),t[kr]=e.current,gl(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new rf(e)};mi.render=function(t,e,n){if(!sf(e))throw Error(xe(200));return of(null,t,e,!1,n)};mi.unmountComponentAtNode=function(t){if(!sf(t))throw Error(xe(40));return t._reactRootContainer?(io(function(){of(null,null,t,!1,function(){t._reactRootContainer=null,t[kr]=null})}),!0):!1};mi.unstable_batchedUpdates=hm;mi.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!sf(n))throw Error(xe(200));if(t==null||t._reactInternals===void 0)throw Error(xe(38));return of(t,e,n,!1,i)};mi.version="18.3.1-next-f1338f8080-20240426";function Sx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sx)}catch(t){console.error(t)}}Sx(),Sy.exports=mi;var Ex=Sy.exports,hv=Ex;yh.createRoot=hv.createRoot,yh.hydrateRoot=hv.hydrateRoot;var Mx={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */(function(t){(function(e,n){t.exports=e.document?n(e,!0):function(i){if(!i.document)throw new Error("jQuery requires a window with a document");return n(i)}})(typeof window<"u"?window:$a,function(e,n){var i=[],r=Object.getPrototypeOf,s=i.slice,o=i.flat?function(l){return i.flat.call(l)}:function(l){return i.concat.apply([],l)},a=i.push,c=i.indexOf,f={},h=f.toString,p=f.hasOwnProperty,m=p.toString,_=m.call(Object),E={},S=function(u){return typeof u=="function"&&typeof u.nodeType!="number"&&typeof u.item!="function"},x=function(u){return u!=null&&u===u.window},g=e.document,w={type:!0,src:!0,nonce:!0,noModule:!0};function M(l,u,v){v=v||g;var y,T,b=v.createElement("script");if(b.text=l,u)for(y in w)T=u[y]||u.getAttribute&&u.getAttribute(y),T&&b.setAttribute(y,T);v.head.appendChild(b).parentNode.removeChild(b)}function R(l){return l==null?l+"":typeof l=="object"||typeof l=="function"?f[h.call(l)]||"object":typeof l}var U="3.7.1",N=/HTML$/i,d=function(l,u){return new d.fn.init(l,u)};d.fn=d.prototype={jquery:U,constructor:d,length:0,toArray:function(){return s.call(this)},get:function(l){return l==null?s.call(this):l<0?this[l+this.length]:this[l]},pushStack:function(l){var u=d.merge(this.constructor(),l);return u.prevObject=this,u},each:function(l){return d.each(this,l)},map:function(l){return this.pushStack(d.map(this,function(u,v){return l.call(u,v,u)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(d.grep(this,function(l,u){return(u+1)%2}))},odd:function(){return this.pushStack(d.grep(this,function(l,u){return u%2}))},eq:function(l){var u=this.length,v=+l+(l<0?u:0);return this.pushStack(v>=0&&v<u?[this[v]]:[])},end:function(){return this.prevObject||this.constructor()},push:a,sort:i.sort,splice:i.splice},d.extend=d.fn.extend=function(){var l,u,v,y,T,b,C=arguments[0]||{},F=1,k=arguments.length,G=!1;for(typeof C=="boolean"&&(G=C,C=arguments[F]||{},F++),typeof C!="object"&&!S(C)&&(C={}),F===k&&(C=this,F--);F<k;F++)if((l=arguments[F])!=null)for(u in l)y=l[u],!(u==="__proto__"||C===y)&&(G&&y&&(d.isPlainObject(y)||(T=Array.isArray(y)))?(v=C[u],T&&!Array.isArray(v)?b=[]:!T&&!d.isPlainObject(v)?b={}:b=v,T=!1,C[u]=d.extend(G,b,y)):y!==void 0&&(C[u]=y));return C},d.extend({expando:"jQuery"+(U+Math.random()).replace(/\D/g,""),isReady:!0,error:function(l){throw new Error(l)},noop:function(){},isPlainObject:function(l){var u,v;return!l||h.call(l)!=="[object Object]"?!1:(u=r(l),u?(v=p.call(u,"constructor")&&u.constructor,typeof v=="function"&&m.call(v)===_):!0)},isEmptyObject:function(l){var u;for(u in l)return!1;return!0},globalEval:function(l,u,v){M(l,{nonce:u&&u.nonce},v)},each:function(l,u){var v,y=0;if(V(l))for(v=l.length;y<v&&u.call(l[y],y,l[y])!==!1;y++);else for(y in l)if(u.call(l[y],y,l[y])===!1)break;return l},text:function(l){var u,v="",y=0,T=l.nodeType;if(!T)for(;u=l[y++];)v+=d.text(u);return T===1||T===11?l.textContent:T===9?l.documentElement.textContent:T===3||T===4?l.nodeValue:v},makeArray:function(l,u){var v=u||[];return l!=null&&(V(Object(l))?d.merge(v,typeof l=="string"?[l]:l):a.call(v,l)),v},inArray:function(l,u,v){return u==null?-1:c.call(u,l,v)},isXMLDoc:function(l){var u=l&&l.namespaceURI,v=l&&(l.ownerDocument||l).documentElement;return!N.test(u||v&&v.nodeName||"HTML")},merge:function(l,u){for(var v=+u.length,y=0,T=l.length;y<v;y++)l[T++]=u[y];return l.length=T,l},grep:function(l,u,v){for(var y,T=[],b=0,C=l.length,F=!v;b<C;b++)y=!u(l[b],b),y!==F&&T.push(l[b]);return T},map:function(l,u,v){var y,T,b=0,C=[];if(V(l))for(y=l.length;b<y;b++)T=u(l[b],b,v),T!=null&&C.push(T);else for(b in l)T=u(l[b],b,v),T!=null&&C.push(T);return o(C)},guid:1,support:E}),typeof Symbol=="function"&&(d.fn[Symbol.iterator]=i[Symbol.iterator]),d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(l,u){f["[object "+u+"]"]=u.toLowerCase()});function V(l){var u=!!l&&"length"in l&&l.length,v=R(l);return S(l)||x(l)?!1:v==="array"||u===0||typeof u=="number"&&u>0&&u-1 in l}function L(l,u){return l.nodeName&&l.nodeName.toLowerCase()===u.toLowerCase()}var A=i.pop,X=i.sort,ce=i.splice,z="[\\x20\\t\\r\\n\\f]",ue=new RegExp("^"+z+"+|((?:^|[^\\\\])(?:\\\\.)*)"+z+"+$","g");d.contains=function(l,u){var v=u&&u.parentNode;return l===v||!!(v&&v.nodeType===1&&(l.contains?l.contains(v):l.compareDocumentPosition&&l.compareDocumentPosition(v)&16))};var he=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function Se(l,u){return u?l==="\0"?"�":l.slice(0,-1)+"\\"+l.charCodeAt(l.length-1).toString(16)+" ":"\\"+l}d.escapeSelector=function(l){return(l+"").replace(he,Se)};var ve=g,H=a;(function(){var l,u,v,y,T,b=H,C,F,k,G,ne,le=d.expando,Y=0,_e=0,Ze=Ql(),Et=Ql(),at=Ql(),Cn=Ql(),mn=function(I,B){return I===B&&(T=!0),0},Yi="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Ki="(?:\\\\[\\da-fA-F]{1,6}"+z+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",yt="\\["+z+"*("+Ki+")(?:"+z+"*([*^$|!~]?=)"+z+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Ki+"))|)"+z+"*\\]",Ps=":("+Ki+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+yt+")*)|.*)\\)|)",Tt=new RegExp(z+"+","g"),sn=new RegExp("^"+z+"*,"+z+"*"),Aa=new RegExp("^"+z+"*([>+~]|"+z+")"+z+"*"),Zf=new RegExp(z+"|>"),Qi=new RegExp(Ps),Ra=new RegExp("^"+Ki+"$"),Zi={ID:new RegExp("^#("+Ki+")"),CLASS:new RegExp("^\\.("+Ki+")"),TAG:new RegExp("^("+Ki+"|[*])"),ATTR:new RegExp("^"+yt),PSEUDO:new RegExp("^"+Ps),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+z+"*(even|odd|(([+-]|)(\\d*)n|)"+z+"*(?:([+-]|)"+z+"*(\\d+)|))"+z+"*\\)|)","i"),bool:new RegExp("^(?:"+Yi+")$","i"),needsContext:new RegExp("^"+z+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+z+"*((?:-\\d)?\\d*)"+z+"*\\)|)(?=[^-]|$)","i")},Vr=/^(?:input|select|textarea|button)$/i,Gr=/^h\d$/i,_i=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Jf=/[+~]/,_r=new RegExp("\\\\[\\da-fA-F]{1,6}"+z+"?|\\\\([^\\r\\n\\f])","g"),xr=function(I,B){var q="0x"+I.slice(1)-65536;return B||(q<0?String.fromCharCode(q+65536):String.fromCharCode(q>>10|55296,q&1023|56320))},m1=function(){Wr()},g1=Jl(function(I){return I.disabled===!0&&L(I,"fieldset")},{dir:"parentNode",next:"legend"});function v1(){try{return C.activeElement}catch{}}try{b.apply(i=s.call(ve.childNodes),ve.childNodes),i[ve.childNodes.length].nodeType}catch{b={apply:function(B,q){H.apply(B,s.call(q))},call:function(B){H.apply(B,s.call(arguments,1))}}}function kt(I,B,q,J){var ae,Te,ke,Be,Oe,ht,Ke,Je=B&&B.ownerDocument,pt=B?B.nodeType:9;if(q=q||[],typeof I!="string"||!I||pt!==1&&pt!==9&&pt!==11)return q;if(!J&&(Wr(B),B=B||C,k)){if(pt!==11&&(Oe=_i.exec(I)))if(ae=Oe[1]){if(pt===9)if(ke=B.getElementById(ae)){if(ke.id===ae)return b.call(q,ke),q}else return q;else if(Je&&(ke=Je.getElementById(ae))&&kt.contains(B,ke)&&ke.id===ae)return b.call(q,ke),q}else{if(Oe[2])return b.apply(q,B.getElementsByTagName(I)),q;if((ae=Oe[3])&&B.getElementsByClassName)return b.apply(q,B.getElementsByClassName(ae)),q}if(!Cn[I+" "]&&(!G||!G.test(I))){if(Ke=I,Je=B,pt===1&&(Zf.test(I)||Aa.test(I))){for(Je=Jf.test(I)&&ed(B.parentNode)||B,(Je!=B||!E.scope)&&((Be=B.getAttribute("id"))?Be=d.escapeSelector(Be):B.setAttribute("id",Be=le)),ht=Pa(I),Te=ht.length;Te--;)ht[Te]=(Be?"#"+Be:":scope")+" "+Zl(ht[Te]);Ke=ht.join(",")}try{return b.apply(q,Je.querySelectorAll(Ke)),q}catch{Cn(I,!0)}finally{Be===le&&B.removeAttribute("id")}}}return ig(I.replace(ue,"$1"),B,q,J)}function Ql(){var I=[];function B(q,J){return I.push(q+" ")>u.cacheLength&&delete B[I.shift()],B[q+" "]=J}return B}function Ii(I){return I[le]=!0,I}function fo(I){var B=C.createElement("fieldset");try{return!!I(B)}catch{return!1}finally{B.parentNode&&B.parentNode.removeChild(B),B=null}}function y1(I){return function(B){return L(B,"input")&&B.type===I}}function _1(I){return function(B){return(L(B,"input")||L(B,"button"))&&B.type===I}}function tg(I){return function(B){return"form"in B?B.parentNode&&B.disabled===!1?"label"in B?"label"in B.parentNode?B.parentNode.disabled===I:B.disabled===I:B.isDisabled===I||B.isDisabled!==!I&&g1(B)===I:B.disabled===I:"label"in B?B.disabled===I:!1}}function Ls(I){return Ii(function(B){return B=+B,Ii(function(q,J){for(var ae,Te=I([],q.length,B),ke=Te.length;ke--;)q[ae=Te[ke]]&&(q[ae]=!(J[ae]=q[ae]))})})}function ed(I){return I&&typeof I.getElementsByTagName<"u"&&I}function Wr(I){var B,q=I?I.ownerDocument||I:ve;return q==C||q.nodeType!==9||!q.documentElement||(C=q,F=C.documentElement,k=!d.isXMLDoc(C),ne=F.matches||F.webkitMatchesSelector||F.msMatchesSelector,F.msMatchesSelector&&ve!=C&&(B=C.defaultView)&&B.top!==B&&B.addEventListener("unload",m1),E.getById=fo(function(J){return F.appendChild(J).id=d.expando,!C.getElementsByName||!C.getElementsByName(d.expando).length}),E.disconnectedMatch=fo(function(J){return ne.call(J,"*")}),E.scope=fo(function(){return C.querySelectorAll(":scope")}),E.cssHas=fo(function(){try{return C.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),E.getById?(u.filter.ID=function(J){var ae=J.replace(_r,xr);return function(Te){return Te.getAttribute("id")===ae}},u.find.ID=function(J,ae){if(typeof ae.getElementById<"u"&&k){var Te=ae.getElementById(J);return Te?[Te]:[]}}):(u.filter.ID=function(J){var ae=J.replace(_r,xr);return function(Te){var ke=typeof Te.getAttributeNode<"u"&&Te.getAttributeNode("id");return ke&&ke.value===ae}},u.find.ID=function(J,ae){if(typeof ae.getElementById<"u"&&k){var Te,ke,Be,Oe=ae.getElementById(J);if(Oe){if(Te=Oe.getAttributeNode("id"),Te&&Te.value===J)return[Oe];for(Be=ae.getElementsByName(J),ke=0;Oe=Be[ke++];)if(Te=Oe.getAttributeNode("id"),Te&&Te.value===J)return[Oe]}return[]}}),u.find.TAG=function(J,ae){return typeof ae.getElementsByTagName<"u"?ae.getElementsByTagName(J):ae.querySelectorAll(J)},u.find.CLASS=function(J,ae){if(typeof ae.getElementsByClassName<"u"&&k)return ae.getElementsByClassName(J)},G=[],fo(function(J){var ae;F.appendChild(J).innerHTML="<a id='"+le+"' href='' disabled='disabled'></a><select id='"+le+"-\r\\' disabled='disabled'><option selected=''></option></select>",J.querySelectorAll("[selected]").length||G.push("\\["+z+"*(?:value|"+Yi+")"),J.querySelectorAll("[id~="+le+"-]").length||G.push("~="),J.querySelectorAll("a#"+le+"+*").length||G.push(".#.+[+~]"),J.querySelectorAll(":checked").length||G.push(":checked"),ae=C.createElement("input"),ae.setAttribute("type","hidden"),J.appendChild(ae).setAttribute("name","D"),F.appendChild(J).disabled=!0,J.querySelectorAll(":disabled").length!==2&&G.push(":enabled",":disabled"),ae=C.createElement("input"),ae.setAttribute("name",""),J.appendChild(ae),J.querySelectorAll("[name='']").length||G.push("\\["+z+"*name"+z+"*="+z+`*(?:''|"")`)}),E.cssHas||G.push(":has"),G=G.length&&new RegExp(G.join("|")),mn=function(J,ae){if(J===ae)return T=!0,0;var Te=!J.compareDocumentPosition-!ae.compareDocumentPosition;return Te||(Te=(J.ownerDocument||J)==(ae.ownerDocument||ae)?J.compareDocumentPosition(ae):1,Te&1||!E.sortDetached&&ae.compareDocumentPosition(J)===Te?J===C||J.ownerDocument==ve&&kt.contains(ve,J)?-1:ae===C||ae.ownerDocument==ve&&kt.contains(ve,ae)?1:y?c.call(y,J)-c.call(y,ae):0:Te&4?-1:1)}),C}kt.matches=function(I,B){return kt(I,null,null,B)},kt.matchesSelector=function(I,B){if(Wr(I),k&&!Cn[B+" "]&&(!G||!G.test(B)))try{var q=ne.call(I,B);if(q||E.disconnectedMatch||I.document&&I.document.nodeType!==11)return q}catch{Cn(B,!0)}return kt(B,C,null,[I]).length>0},kt.contains=function(I,B){return(I.ownerDocument||I)!=C&&Wr(I),d.contains(I,B)},kt.attr=function(I,B){(I.ownerDocument||I)!=C&&Wr(I);var q=u.attrHandle[B.toLowerCase()],J=q&&p.call(u.attrHandle,B.toLowerCase())?q(I,B,!k):void 0;return J!==void 0?J:I.getAttribute(B)},kt.error=function(I){throw new Error("Syntax error, unrecognized expression: "+I)},d.uniqueSort=function(I){var B,q=[],J=0,ae=0;if(T=!E.sortStable,y=!E.sortStable&&s.call(I,0),X.call(I,mn),T){for(;B=I[ae++];)B===I[ae]&&(J=q.push(ae));for(;J--;)ce.call(I,q[J],1)}return y=null,I},d.fn.uniqueSort=function(){return this.pushStack(d.uniqueSort(s.apply(this)))},u=d.expr={cacheLength:50,createPseudo:Ii,match:Zi,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(I){return I[1]=I[1].replace(_r,xr),I[3]=(I[3]||I[4]||I[5]||"").replace(_r,xr),I[2]==="~="&&(I[3]=" "+I[3]+" "),I.slice(0,4)},CHILD:function(I){return I[1]=I[1].toLowerCase(),I[1].slice(0,3)==="nth"?(I[3]||kt.error(I[0]),I[4]=+(I[4]?I[5]+(I[6]||1):2*(I[3]==="even"||I[3]==="odd")),I[5]=+(I[7]+I[8]||I[3]==="odd")):I[3]&&kt.error(I[0]),I},PSEUDO:function(I){var B,q=!I[6]&&I[2];return Zi.CHILD.test(I[0])?null:(I[3]?I[2]=I[4]||I[5]||"":q&&Qi.test(q)&&(B=Pa(q,!0))&&(B=q.indexOf(")",q.length-B)-q.length)&&(I[0]=I[0].slice(0,B),I[2]=q.slice(0,B)),I.slice(0,3))}},filter:{TAG:function(I){var B=I.replace(_r,xr).toLowerCase();return I==="*"?function(){return!0}:function(q){return L(q,B)}},CLASS:function(I){var B=Ze[I+" "];return B||(B=new RegExp("(^|"+z+")"+I+"("+z+"|$)"))&&Ze(I,function(q){return B.test(typeof q.className=="string"&&q.className||typeof q.getAttribute<"u"&&q.getAttribute("class")||"")})},ATTR:function(I,B,q){return function(J){var ae=kt.attr(J,I);return ae==null?B==="!=":B?(ae+="",B==="="?ae===q:B==="!="?ae!==q:B==="^="?q&&ae.indexOf(q)===0:B==="*="?q&&ae.indexOf(q)>-1:B==="$="?q&&ae.slice(-q.length)===q:B==="~="?(" "+ae.replace(Tt," ")+" ").indexOf(q)>-1:B==="|="?ae===q||ae.slice(0,q.length+1)===q+"-":!1):!0}},CHILD:function(I,B,q,J,ae){var Te=I.slice(0,3)!=="nth",ke=I.slice(-4)!=="last",Be=B==="of-type";return J===1&&ae===0?function(Oe){return!!Oe.parentNode}:function(Oe,ht,Ke){var Je,pt,$e,Wt,Yn,In=Te!==ke?"nextSibling":"previousSibling",xi=Oe.parentNode,Ji=Be&&Oe.nodeName.toLowerCase(),ho=!Ke&&!Be,Gn=!1;if(xi){if(Te){for(;In;){for($e=Oe;$e=$e[In];)if(Be?L($e,Ji):$e.nodeType===1)return!1;Yn=In=I==="only"&&!Yn&&"nextSibling"}return!0}if(Yn=[ke?xi.firstChild:xi.lastChild],ke&&ho){for(pt=xi[le]||(xi[le]={}),Je=pt[I]||[],Wt=Je[0]===Y&&Je[1],Gn=Wt&&Je[2],$e=Wt&&xi.childNodes[Wt];$e=++Wt&&$e&&$e[In]||(Gn=Wt=0)||Yn.pop();)if($e.nodeType===1&&++Gn&&$e===Oe){pt[I]=[Y,Wt,Gn];break}}else if(ho&&(pt=Oe[le]||(Oe[le]={}),Je=pt[I]||[],Wt=Je[0]===Y&&Je[1],Gn=Wt),Gn===!1)for(;($e=++Wt&&$e&&$e[In]||(Gn=Wt=0)||Yn.pop())&&!((Be?L($e,Ji):$e.nodeType===1)&&++Gn&&(ho&&(pt=$e[le]||($e[le]={}),pt[I]=[Y,Gn]),$e===Oe)););return Gn-=ae,Gn===J||Gn%J===0&&Gn/J>=0}}},PSEUDO:function(I,B){var q,J=u.pseudos[I]||u.setFilters[I.toLowerCase()]||kt.error("unsupported pseudo: "+I);return J[le]?J(B):J.length>1?(q=[I,I,"",B],u.setFilters.hasOwnProperty(I.toLowerCase())?Ii(function(ae,Te){for(var ke,Be=J(ae,B),Oe=Be.length;Oe--;)ke=c.call(ae,Be[Oe]),ae[ke]=!(Te[ke]=Be[Oe])}):function(ae){return J(ae,0,q)}):J}},pseudos:{not:Ii(function(I){var B=[],q=[],J=rd(I.replace(ue,"$1"));return J[le]?Ii(function(ae,Te,ke,Be){for(var Oe,ht=J(ae,null,Be,[]),Ke=ae.length;Ke--;)(Oe=ht[Ke])&&(ae[Ke]=!(Te[Ke]=Oe))}):function(ae,Te,ke){return B[0]=ae,J(B,null,ke,q),B[0]=null,!q.pop()}}),has:Ii(function(I){return function(B){return kt(I,B).length>0}}),contains:Ii(function(I){return I=I.replace(_r,xr),function(B){return(B.textContent||d.text(B)).indexOf(I)>-1}}),lang:Ii(function(I){return Ra.test(I||"")||kt.error("unsupported lang: "+I),I=I.replace(_r,xr).toLowerCase(),function(B){var q;do if(q=k?B.lang:B.getAttribute("xml:lang")||B.getAttribute("lang"))return q=q.toLowerCase(),q===I||q.indexOf(I+"-")===0;while((B=B.parentNode)&&B.nodeType===1);return!1}}),target:function(I){var B=e.location&&e.location.hash;return B&&B.slice(1)===I.id},root:function(I){return I===F},focus:function(I){return I===v1()&&C.hasFocus()&&!!(I.type||I.href||~I.tabIndex)},enabled:tg(!1),disabled:tg(!0),checked:function(I){return L(I,"input")&&!!I.checked||L(I,"option")&&!!I.selected},selected:function(I){return I.parentNode&&I.parentNode.selectedIndex,I.selected===!0},empty:function(I){for(I=I.firstChild;I;I=I.nextSibling)if(I.nodeType<6)return!1;return!0},parent:function(I){return!u.pseudos.empty(I)},header:function(I){return Gr.test(I.nodeName)},input:function(I){return Vr.test(I.nodeName)},button:function(I){return L(I,"input")&&I.type==="button"||L(I,"button")},text:function(I){var B;return L(I,"input")&&I.type==="text"&&((B=I.getAttribute("type"))==null||B.toLowerCase()==="text")},first:Ls(function(){return[0]}),last:Ls(function(I,B){return[B-1]}),eq:Ls(function(I,B,q){return[q<0?q+B:q]}),even:Ls(function(I,B){for(var q=0;q<B;q+=2)I.push(q);return I}),odd:Ls(function(I,B){for(var q=1;q<B;q+=2)I.push(q);return I}),lt:Ls(function(I,B,q){var J;for(q<0?J=q+B:q>B?J=B:J=q;--J>=0;)I.push(J);return I}),gt:Ls(function(I,B,q){for(var J=q<0?q+B:q;++J<B;)I.push(J);return I})}},u.pseudos.nth=u.pseudos.eq;for(l in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})u.pseudos[l]=y1(l);for(l in{submit:!0,reset:!0})u.pseudos[l]=_1(l);function ng(){}ng.prototype=u.filters=u.pseudos,u.setFilters=new ng;function Pa(I,B){var q,J,ae,Te,ke,Be,Oe,ht=Et[I+" "];if(ht)return B?0:ht.slice(0);for(ke=I,Be=[],Oe=u.preFilter;ke;){(!q||(J=sn.exec(ke)))&&(J&&(ke=ke.slice(J[0].length)||ke),Be.push(ae=[])),q=!1,(J=Aa.exec(ke))&&(q=J.shift(),ae.push({value:q,type:J[0].replace(ue," ")}),ke=ke.slice(q.length));for(Te in u.filter)(J=Zi[Te].exec(ke))&&(!Oe[Te]||(J=Oe[Te](J)))&&(q=J.shift(),ae.push({value:q,type:Te,matches:J}),ke=ke.slice(q.length));if(!q)break}return B?ke.length:ke?kt.error(I):Et(I,Be).slice(0)}function Zl(I){for(var B=0,q=I.length,J="";B<q;B++)J+=I[B].value;return J}function Jl(I,B,q){var J=B.dir,ae=B.next,Te=ae||J,ke=q&&Te==="parentNode",Be=_e++;return B.first?function(Oe,ht,Ke){for(;Oe=Oe[J];)if(Oe.nodeType===1||ke)return I(Oe,ht,Ke);return!1}:function(Oe,ht,Ke){var Je,pt,$e=[Y,Be];if(Ke){for(;Oe=Oe[J];)if((Oe.nodeType===1||ke)&&I(Oe,ht,Ke))return!0}else for(;Oe=Oe[J];)if(Oe.nodeType===1||ke)if(pt=Oe[le]||(Oe[le]={}),ae&&L(Oe,ae))Oe=Oe[J]||Oe;else{if((Je=pt[Te])&&Je[0]===Y&&Je[1]===Be)return $e[2]=Je[2];if(pt[Te]=$e,$e[2]=I(Oe,ht,Ke))return!0}return!1}}function td(I){return I.length>1?function(B,q,J){for(var ae=I.length;ae--;)if(!I[ae](B,q,J))return!1;return!0}:I[0]}function x1(I,B,q){for(var J=0,ae=B.length;J<ae;J++)kt(I,B[J],q);return q}function ec(I,B,q,J,ae){for(var Te,ke=[],Be=0,Oe=I.length,ht=B!=null;Be<Oe;Be++)(Te=I[Be])&&(!q||q(Te,J,ae))&&(ke.push(Te),ht&&B.push(Be));return ke}function nd(I,B,q,J,ae,Te){return J&&!J[le]&&(J=nd(J)),ae&&!ae[le]&&(ae=nd(ae,Te)),Ii(function(ke,Be,Oe,ht){var Ke,Je,pt,$e,Wt=[],Yn=[],In=Be.length,xi=ke||x1(B||"*",Oe.nodeType?[Oe]:Oe,[]),Ji=I&&(ke||!B)?ec(xi,Wt,I,Oe,ht):xi;if(q?($e=ae||(ke?I:In||J)?[]:Be,q(Ji,$e,Oe,ht)):$e=Ji,J)for(Ke=ec($e,Yn),J(Ke,[],Oe,ht),Je=Ke.length;Je--;)(pt=Ke[Je])&&($e[Yn[Je]]=!(Ji[Yn[Je]]=pt));if(ke){if(ae||I){if(ae){for(Ke=[],Je=$e.length;Je--;)(pt=$e[Je])&&Ke.push(Ji[Je]=pt);ae(null,$e=[],Ke,ht)}for(Je=$e.length;Je--;)(pt=$e[Je])&&(Ke=ae?c.call(ke,pt):Wt[Je])>-1&&(ke[Ke]=!(Be[Ke]=pt))}}else $e=ec($e===Be?$e.splice(In,$e.length):$e),ae?ae(null,Be,$e,ht):b.apply(Be,$e)})}function id(I){for(var B,q,J,ae=I.length,Te=u.relative[I[0].type],ke=Te||u.relative[" "],Be=Te?1:0,Oe=Jl(function(Je){return Je===B},ke,!0),ht=Jl(function(Je){return c.call(B,Je)>-1},ke,!0),Ke=[function(Je,pt,$e){var Wt=!Te&&($e||pt!=v)||((B=pt).nodeType?Oe(Je,pt,$e):ht(Je,pt,$e));return B=null,Wt}];Be<ae;Be++)if(q=u.relative[I[Be].type])Ke=[Jl(td(Ke),q)];else{if(q=u.filter[I[Be].type].apply(null,I[Be].matches),q[le]){for(J=++Be;J<ae&&!u.relative[I[J].type];J++);return nd(Be>1&&td(Ke),Be>1&&Zl(I.slice(0,Be-1).concat({value:I[Be-2].type===" "?"*":""})).replace(ue,"$1"),q,Be<J&&id(I.slice(Be,J)),J<ae&&id(I=I.slice(J)),J<ae&&Zl(I))}Ke.push(q)}return td(Ke)}function S1(I,B){var q=B.length>0,J=I.length>0,ae=function(Te,ke,Be,Oe,ht){var Ke,Je,pt,$e=0,Wt="0",Yn=Te&&[],In=[],xi=v,Ji=Te||J&&u.find.TAG("*",ht),ho=Y+=xi==null?1:Math.random()||.1,Gn=Ji.length;for(ht&&(v=ke==C||ke||ht);Wt!==Gn&&(Ke=Ji[Wt])!=null;Wt++){if(J&&Ke){for(Je=0,!ke&&Ke.ownerDocument!=C&&(Wr(Ke),Be=!k);pt=I[Je++];)if(pt(Ke,ke||C,Be)){b.call(Oe,Ke);break}ht&&(Y=ho)}q&&((Ke=!pt&&Ke)&&$e--,Te&&Yn.push(Ke))}if($e+=Wt,q&&Wt!==$e){for(Je=0;pt=B[Je++];)pt(Yn,In,ke,Be);if(Te){if($e>0)for(;Wt--;)Yn[Wt]||In[Wt]||(In[Wt]=A.call(Oe));In=ec(In)}b.apply(Oe,In),ht&&!Te&&In.length>0&&$e+B.length>1&&d.uniqueSort(Oe)}return ht&&(Y=ho,v=xi),Yn};return q?Ii(ae):ae}function rd(I,B){var q,J=[],ae=[],Te=at[I+" "];if(!Te){for(B||(B=Pa(I)),q=B.length;q--;)Te=id(B[q]),Te[le]?J.push(Te):ae.push(Te);Te=at(I,S1(ae,J)),Te.selector=I}return Te}function ig(I,B,q,J){var ae,Te,ke,Be,Oe,ht=typeof I=="function"&&I,Ke=!J&&Pa(I=ht.selector||I);if(q=q||[],Ke.length===1){if(Te=Ke[0]=Ke[0].slice(0),Te.length>2&&(ke=Te[0]).type==="ID"&&B.nodeType===9&&k&&u.relative[Te[1].type]){if(B=(u.find.ID(ke.matches[0].replace(_r,xr),B)||[])[0],B)ht&&(B=B.parentNode);else return q;I=I.slice(Te.shift().value.length)}for(ae=Zi.needsContext.test(I)?0:Te.length;ae--&&(ke=Te[ae],!u.relative[Be=ke.type]);)if((Oe=u.find[Be])&&(J=Oe(ke.matches[0].replace(_r,xr),Jf.test(Te[0].type)&&ed(B.parentNode)||B))){if(Te.splice(ae,1),I=J.length&&Zl(Te),!I)return b.apply(q,J),q;break}}return(ht||rd(I,Ke))(J,B,!k,q,!B||Jf.test(I)&&ed(B.parentNode)||B),q}E.sortStable=le.split("").sort(mn).join("")===le,Wr(),E.sortDetached=fo(function(I){return I.compareDocumentPosition(C.createElement("fieldset"))&1}),d.find=kt,d.expr[":"]=d.expr.pseudos,d.unique=d.uniqueSort,kt.compile=rd,kt.select=ig,kt.setDocument=Wr,kt.tokenize=Pa,kt.escape=d.escapeSelector,kt.getText=d.text,kt.isXML=d.isXMLDoc,kt.selectors=d.expr,kt.support=d.support,kt.uniqueSort=d.uniqueSort})();var re=function(l,u,v){for(var y=[],T=v!==void 0;(l=l[u])&&l.nodeType!==9;)if(l.nodeType===1){if(T&&d(l).is(v))break;y.push(l)}return y},oe=function(l,u){for(var v=[];l;l=l.nextSibling)l.nodeType===1&&l!==u&&v.push(l);return v},Ae=d.expr.match.needsContext,Ve=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function _t(l,u,v){return S(u)?d.grep(l,function(y,T){return!!u.call(y,T,y)!==v}):u.nodeType?d.grep(l,function(y){return y===u!==v}):typeof u!="string"?d.grep(l,function(y){return c.call(u,y)>-1!==v}):d.filter(u,l,v)}d.filter=function(l,u,v){var y=u[0];return v&&(l=":not("+l+")"),u.length===1&&y.nodeType===1?d.find.matchesSelector(y,l)?[y]:[]:d.find.matches(l,d.grep(u,function(T){return T.nodeType===1}))},d.fn.extend({find:function(l){var u,v,y=this.length,T=this;if(typeof l!="string")return this.pushStack(d(l).filter(function(){for(u=0;u<y;u++)if(d.contains(T[u],this))return!0}));for(v=this.pushStack([]),u=0;u<y;u++)d.find(l,T[u],v);return y>1?d.uniqueSort(v):v},filter:function(l){return this.pushStack(_t(this,l||[],!1))},not:function(l){return this.pushStack(_t(this,l||[],!0))},is:function(l){return!!_t(this,typeof l=="string"&&Ae.test(l)?d(l):l||[],!1).length}});var se,Ee=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Ue=d.fn.init=function(l,u,v){var y,T;if(!l)return this;if(v=v||se,typeof l=="string")if(l[0]==="<"&&l[l.length-1]===">"&&l.length>=3?y=[null,l,null]:y=Ee.exec(l),y&&(y[1]||!u))if(y[1]){if(u=u instanceof d?u[0]:u,d.merge(this,d.parseHTML(y[1],u&&u.nodeType?u.ownerDocument||u:g,!0)),Ve.test(y[1])&&d.isPlainObject(u))for(y in u)S(this[y])?this[y](u[y]):this.attr(y,u[y]);return this}else return T=g.getElementById(y[2]),T&&(this[0]=T,this.length=1),this;else return!u||u.jquery?(u||v).find(l):this.constructor(u).find(l);else{if(l.nodeType)return this[0]=l,this.length=1,this;if(S(l))return v.ready!==void 0?v.ready(l):l(d)}return d.makeArray(l,this)};Ue.prototype=d.fn,se=d(g);var be=/^(?:parents|prev(?:Until|All))/,dt={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({has:function(l){var u=d(l,this),v=u.length;return this.filter(function(){for(var y=0;y<v;y++)if(d.contains(this,u[y]))return!0})},closest:function(l,u){var v,y=0,T=this.length,b=[],C=typeof l!="string"&&d(l);if(!Ae.test(l)){for(;y<T;y++)for(v=this[y];v&&v!==u;v=v.parentNode)if(v.nodeType<11&&(C?C.index(v)>-1:v.nodeType===1&&d.find.matchesSelector(v,l))){b.push(v);break}}return this.pushStack(b.length>1?d.uniqueSort(b):b)},index:function(l){return l?typeof l=="string"?c.call(d(l),this[0]):c.call(this,l.jquery?l[0]:l):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(l,u){return this.pushStack(d.uniqueSort(d.merge(this.get(),d(l,u))))},addBack:function(l){return this.add(l==null?this.prevObject:this.prevObject.filter(l))}});function ft(l,u){for(;(l=l[u])&&l.nodeType!==1;);return l}d.each({parent:function(l){var u=l.parentNode;return u&&u.nodeType!==11?u:null},parents:function(l){return re(l,"parentNode")},parentsUntil:function(l,u,v){return re(l,"parentNode",v)},next:function(l){return ft(l,"nextSibling")},prev:function(l){return ft(l,"previousSibling")},nextAll:function(l){return re(l,"nextSibling")},prevAll:function(l){return re(l,"previousSibling")},nextUntil:function(l,u,v){return re(l,"nextSibling",v)},prevUntil:function(l,u,v){return re(l,"previousSibling",v)},siblings:function(l){return oe((l.parentNode||{}).firstChild,l)},children:function(l){return oe(l.firstChild)},contents:function(l){return l.contentDocument!=null&&r(l.contentDocument)?l.contentDocument:(L(l,"template")&&(l=l.content||l),d.merge([],l.childNodes))}},function(l,u){d.fn[l]=function(v,y){var T=d.map(this,u,v);return l.slice(-5)!=="Until"&&(y=v),y&&typeof y=="string"&&(T=d.filter(y,T)),this.length>1&&(dt[l]||d.uniqueSort(T),be.test(l)&&T.reverse()),this.pushStack(T)}});var $=/[^\x20\t\r\n\f]+/g;function Vt(l){var u={};return d.each(l.match($)||[],function(v,y){u[y]=!0}),u}d.Callbacks=function(l){l=typeof l=="string"?Vt(l):d.extend({},l);var u,v,y,T,b=[],C=[],F=-1,k=function(){for(T=T||l.once,y=u=!0;C.length;F=-1)for(v=C.shift();++F<b.length;)b[F].apply(v[0],v[1])===!1&&l.stopOnFalse&&(F=b.length,v=!1);l.memory||(v=!1),u=!1,T&&(v?b=[]:b="")},G={add:function(){return b&&(v&&!u&&(F=b.length-1,C.push(v)),function ne(le){d.each(le,function(Y,_e){S(_e)?(!l.unique||!G.has(_e))&&b.push(_e):_e&&_e.length&&R(_e)!=="string"&&ne(_e)})}(arguments),v&&!u&&k()),this},remove:function(){return d.each(arguments,function(ne,le){for(var Y;(Y=d.inArray(le,b,Y))>-1;)b.splice(Y,1),Y<=F&&F--}),this},has:function(ne){return ne?d.inArray(ne,b)>-1:b.length>0},empty:function(){return b&&(b=[]),this},disable:function(){return T=C=[],b=v="",this},disabled:function(){return!b},lock:function(){return T=C=[],!v&&!u&&(b=v=""),this},locked:function(){return!!T},fireWith:function(ne,le){return T||(le=le||[],le=[ne,le.slice?le.slice():le],C.push(le),u||k()),this},fire:function(){return G.fireWith(this,arguments),this},fired:function(){return!!y}};return G};function Ge(l){return l}function Rt(l){throw l}function qe(l,u,v,y){var T;try{l&&S(T=l.promise)?T.call(l).done(u).fail(v):l&&S(T=l.then)?T.call(l,u,v):u.apply(void 0,[l].slice(y))}catch(b){v.apply(void 0,[b])}}d.extend({Deferred:function(l){var u=[["notify","progress",d.Callbacks("memory"),d.Callbacks("memory"),2],["resolve","done",d.Callbacks("once memory"),d.Callbacks("once memory"),0,"resolved"],["reject","fail",d.Callbacks("once memory"),d.Callbacks("once memory"),1,"rejected"]],v="pending",y={state:function(){return v},always:function(){return T.done(arguments).fail(arguments),this},catch:function(b){return y.then(null,b)},pipe:function(){var b=arguments;return d.Deferred(function(C){d.each(u,function(F,k){var G=S(b[k[4]])&&b[k[4]];T[k[1]](function(){var ne=G&&G.apply(this,arguments);ne&&S(ne.promise)?ne.promise().progress(C.notify).done(C.resolve).fail(C.reject):C[k[0]+"With"](this,G?[ne]:arguments)})}),b=null}).promise()},then:function(b,C,F){var k=0;function G(ne,le,Y,_e){return function(){var Ze=this,Et=arguments,at=function(){var mn,Yi;if(!(ne<k)){if(mn=Y.apply(Ze,Et),mn===le.promise())throw new TypeError("Thenable self-resolution");Yi=mn&&(typeof mn=="object"||typeof mn=="function")&&mn.then,S(Yi)?_e?Yi.call(mn,G(k,le,Ge,_e),G(k,le,Rt,_e)):(k++,Yi.call(mn,G(k,le,Ge,_e),G(k,le,Rt,_e),G(k,le,Ge,le.notifyWith))):(Y!==Ge&&(Ze=void 0,Et=[mn]),(_e||le.resolveWith)(Ze,Et))}},Cn=_e?at:function(){try{at()}catch(mn){d.Deferred.exceptionHook&&d.Deferred.exceptionHook(mn,Cn.error),ne+1>=k&&(Y!==Rt&&(Ze=void 0,Et=[mn]),le.rejectWith(Ze,Et))}};ne?Cn():(d.Deferred.getErrorHook?Cn.error=d.Deferred.getErrorHook():d.Deferred.getStackHook&&(Cn.error=d.Deferred.getStackHook()),e.setTimeout(Cn))}}return d.Deferred(function(ne){u[0][3].add(G(0,ne,S(F)?F:Ge,ne.notifyWith)),u[1][3].add(G(0,ne,S(b)?b:Ge)),u[2][3].add(G(0,ne,S(C)?C:Rt))}).promise()},promise:function(b){return b!=null?d.extend(b,y):y}},T={};return d.each(u,function(b,C){var F=C[2],k=C[5];y[C[1]]=F.add,k&&F.add(function(){v=k},u[3-b][2].disable,u[3-b][3].disable,u[0][2].lock,u[0][3].lock),F.add(C[3].fire),T[C[0]]=function(){return T[C[0]+"With"](this===T?void 0:this,arguments),this},T[C[0]+"With"]=F.fireWith}),y.promise(T),l&&l.call(T,T),T},when:function(l){var u=arguments.length,v=u,y=Array(v),T=s.call(arguments),b=d.Deferred(),C=function(F){return function(k){y[F]=this,T[F]=arguments.length>1?s.call(arguments):k,--u||b.resolveWith(y,T)}};if(u<=1&&(qe(l,b.done(C(v)).resolve,b.reject,!u),b.state()==="pending"||S(T[v]&&T[v].then)))return b.then();for(;v--;)qe(T[v],C(v),b.reject);return b.promise()}});var gt=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;d.Deferred.exceptionHook=function(l,u){e.console&&e.console.warn&&l&&gt.test(l.name)&&e.console.warn("jQuery.Deferred exception: "+l.message,l.stack,u)},d.readyException=function(l){e.setTimeout(function(){throw l})};var it=d.Deferred();d.fn.ready=function(l){return it.then(l).catch(function(u){d.readyException(u)}),this},d.extend({isReady:!1,readyWait:1,ready:function(l){(l===!0?--d.readyWait:d.isReady)||(d.isReady=!0,!(l!==!0&&--d.readyWait>0)&&it.resolveWith(g,[d]))}}),d.ready.then=it.then;function ut(){g.removeEventListener("DOMContentLoaded",ut),e.removeEventListener("load",ut),d.ready()}g.readyState==="complete"||g.readyState!=="loading"&&!g.documentElement.doScroll?e.setTimeout(d.ready):(g.addEventListener("DOMContentLoaded",ut),e.addEventListener("load",ut));var Ct=function(l,u,v,y,T,b,C){var F=0,k=l.length,G=v==null;if(R(v)==="object"){T=!0;for(F in v)Ct(l,u,F,v[F],!0,b,C)}else if(y!==void 0&&(T=!0,S(y)||(C=!0),G&&(C?(u.call(l,y),u=null):(G=u,u=function(ne,le,Y){return G.call(d(ne),Y)})),u))for(;F<k;F++)u(l[F],v,C?y:y.call(l[F],F,u(l[F],v)));return T?l:G?u.call(l):k?u(l[0],v):b},O=/^-ms-/,P=/-([a-z])/g;function ie(l,u){return u.toUpperCase()}function fe(l){return l.replace(O,"ms-").replace(P,ie)}var ge=function(l){return l.nodeType===1||l.nodeType===9||!+l.nodeType};function ye(){this.expando=d.expando+ye.uid++}ye.uid=1,ye.prototype={cache:function(l){var u=l[this.expando];return u||(u={},ge(l)&&(l.nodeType?l[this.expando]=u:Object.defineProperty(l,this.expando,{value:u,configurable:!0}))),u},set:function(l,u,v){var y,T=this.cache(l);if(typeof u=="string")T[fe(u)]=v;else for(y in u)T[fe(y)]=u[y];return T},get:function(l,u){return u===void 0?this.cache(l):l[this.expando]&&l[this.expando][fe(u)]},access:function(l,u,v){return u===void 0||u&&typeof u=="string"&&v===void 0?this.get(l,u):(this.set(l,u,v),v!==void 0?v:u)},remove:function(l,u){var v,y=l[this.expando];if(y!==void 0){if(u!==void 0)for(Array.isArray(u)?u=u.map(fe):(u=fe(u),u=u in y?[u]:u.match($)||[]),v=u.length;v--;)delete y[u[v]];(u===void 0||d.isEmptyObject(y))&&(l.nodeType?l[this.expando]=void 0:delete l[this.expando])}},hasData:function(l){var u=l[this.expando];return u!==void 0&&!d.isEmptyObject(u)}};var pe=new ye,we=new ye,De=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,st=/[A-Z]/g;function Ce(l){return l==="true"?!0:l==="false"?!1:l==="null"?null:l===+l+""?+l:De.test(l)?JSON.parse(l):l}function We(l,u,v){var y;if(v===void 0&&l.nodeType===1)if(y="data-"+u.replace(st,"-$&").toLowerCase(),v=l.getAttribute(y),typeof v=="string"){try{v=Ce(v)}catch{}we.set(l,u,v)}else v=void 0;return v}d.extend({hasData:function(l){return we.hasData(l)||pe.hasData(l)},data:function(l,u,v){return we.access(l,u,v)},removeData:function(l,u){we.remove(l,u)},_data:function(l,u,v){return pe.access(l,u,v)},_removeData:function(l,u){pe.remove(l,u)}}),d.fn.extend({data:function(l,u){var v,y,T,b=this[0],C=b&&b.attributes;if(l===void 0){if(this.length&&(T=we.get(b),b.nodeType===1&&!pe.get(b,"hasDataAttrs"))){for(v=C.length;v--;)C[v]&&(y=C[v].name,y.indexOf("data-")===0&&(y=fe(y.slice(5)),We(b,y,T[y])));pe.set(b,"hasDataAttrs",!0)}return T}return typeof l=="object"?this.each(function(){we.set(this,l)}):Ct(this,function(F){var k;if(b&&F===void 0)return k=we.get(b,l),k!==void 0||(k=We(b,l),k!==void 0)?k:void 0;this.each(function(){we.set(this,l,F)})},null,u,arguments.length>1,null,!0)},removeData:function(l){return this.each(function(){we.remove(this,l)})}}),d.extend({queue:function(l,u,v){var y;if(l)return u=(u||"fx")+"queue",y=pe.get(l,u),v&&(!y||Array.isArray(v)?y=pe.access(l,u,d.makeArray(v)):y.push(v)),y||[]},dequeue:function(l,u){u=u||"fx";var v=d.queue(l,u),y=v.length,T=v.shift(),b=d._queueHooks(l,u),C=function(){d.dequeue(l,u)};T==="inprogress"&&(T=v.shift(),y--),T&&(u==="fx"&&v.unshift("inprogress"),delete b.stop,T.call(l,C,b)),!y&&b&&b.empty.fire()},_queueHooks:function(l,u){var v=u+"queueHooks";return pe.get(l,v)||pe.access(l,v,{empty:d.Callbacks("once memory").add(function(){pe.remove(l,[u+"queue",v])})})}}),d.fn.extend({queue:function(l,u){var v=2;return typeof l!="string"&&(u=l,l="fx",v--),arguments.length<v?d.queue(this[0],l):u===void 0?this:this.each(function(){var y=d.queue(this,l,u);d._queueHooks(this,l),l==="fx"&&y[0]!=="inprogress"&&d.dequeue(this,l)})},dequeue:function(l){return this.each(function(){d.dequeue(this,l)})},clearQueue:function(l){return this.queue(l||"fx",[])},promise:function(l,u){var v,y=1,T=d.Deferred(),b=this,C=this.length,F=function(){--y||T.resolveWith(b,[b])};for(typeof l!="string"&&(u=l,l=void 0),l=l||"fx";C--;)v=pe.get(b[C],l+"queueHooks"),v&&v.empty&&(y++,v.empty.add(F));return F(),T.promise(u)}});var vt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,je=new RegExp("^(?:([+-])=|)("+vt+")([a-z%]*)$","i"),Ne=["Top","Right","Bottom","Left"],Qe=g.documentElement,rt=function(l){return d.contains(l.ownerDocument,l)},Qt={composed:!0};Qe.getRootNode&&(rt=function(l){return d.contains(l.ownerDocument,l)||l.getRootNode(Qt)===l.ownerDocument});var et=function(l,u){return l=u||l,l.style.display==="none"||l.style.display===""&&rt(l)&&d.css(l,"display")==="none"};function W(l,u,v,y){var T,b,C=20,F=y?function(){return y.cur()}:function(){return d.css(l,u,"")},k=F(),G=v&&v[3]||(d.cssNumber[u]?"":"px"),ne=l.nodeType&&(d.cssNumber[u]||G!=="px"&&+k)&&je.exec(d.css(l,u));if(ne&&ne[3]!==G){for(k=k/2,G=G||ne[3],ne=+k||1;C--;)d.style(l,u,ne+G),(1-b)*(1-(b=F()/k||.5))<=0&&(C=0),ne=ne/b;ne=ne*2,d.style(l,u,ne+G),v=v||[]}return v&&(ne=+ne||+k||0,T=v[1]?ne+(v[1]+1)*v[2]:+v[2],y&&(y.unit=G,y.start=ne,y.end=T)),T}var me={};function de(l){var u,v=l.ownerDocument,y=l.nodeName,T=me[y];return T||(u=v.body.appendChild(v.createElement(y)),T=d.css(u,"display"),u.parentNode.removeChild(u),T==="none"&&(T="block"),me[y]=T,T)}function Re(l,u){for(var v,y,T=[],b=0,C=l.length;b<C;b++)y=l[b],y.style&&(v=y.style.display,u?(v==="none"&&(T[b]=pe.get(y,"display")||null,T[b]||(y.style.display="")),y.style.display===""&&et(y)&&(T[b]=de(y))):v!=="none"&&(T[b]="none",pe.set(y,"display",v)));for(b=0;b<C;b++)T[b]!=null&&(l[b].style.display=T[b]);return l}d.fn.extend({show:function(){return Re(this,!0)},hide:function(){return Re(this)},toggle:function(l){return typeof l=="boolean"?l?this.show():this.hide():this.each(function(){et(this)?d(this).show():d(this).hide()})}});var Ie=/^(?:checkbox|radio)$/i,xt=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Bt=/^$|^module$|\/(?:java|ecma)script/i;(function(){var l=g.createDocumentFragment(),u=l.appendChild(g.createElement("div")),v=g.createElement("input");v.setAttribute("type","radio"),v.setAttribute("checked","checked"),v.setAttribute("name","t"),u.appendChild(v),E.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,u.innerHTML="<textarea>x</textarea>",E.noCloneChecked=!!u.cloneNode(!0).lastChild.defaultValue,u.innerHTML="<option></option>",E.option=!!u.lastChild})();var St={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};St.tbody=St.tfoot=St.colgroup=St.caption=St.thead,St.th=St.td,E.option||(St.optgroup=St.option=[1,"<select multiple='multiple'>","</select>"]);function Pt(l,u){var v;return typeof l.getElementsByTagName<"u"?v=l.getElementsByTagName(u||"*"):typeof l.querySelectorAll<"u"?v=l.querySelectorAll(u||"*"):v=[],u===void 0||u&&L(l,u)?d.merge([l],v):v}function wt(l,u){for(var v=0,y=l.length;v<y;v++)pe.set(l[v],"globalEval",!u||pe.get(u[v],"globalEval"))}var yi=/<|&#?\w+;/;function Sn(l,u,v,y,T){for(var b,C,F,k,G,ne,le=u.createDocumentFragment(),Y=[],_e=0,Ze=l.length;_e<Ze;_e++)if(b=l[_e],b||b===0)if(R(b)==="object")d.merge(Y,b.nodeType?[b]:b);else if(!yi.test(b))Y.push(u.createTextNode(b));else{for(C=C||le.appendChild(u.createElement("div")),F=(xt.exec(b)||["",""])[1].toLowerCase(),k=St[F]||St._default,C.innerHTML=k[1]+d.htmlPrefilter(b)+k[2],ne=k[0];ne--;)C=C.lastChild;d.merge(Y,C.childNodes),C=le.firstChild,C.textContent=""}for(le.textContent="",_e=0;b=Y[_e++];){if(y&&d.inArray(b,y)>-1){T&&T.push(b);continue}if(G=rt(b),C=Pt(le.appendChild(b),"script"),G&&wt(C),v)for(ne=0;b=C[ne++];)Bt.test(b.type||"")&&v.push(b)}return le}var Sa=/^([^.]*)(?:\.(.+)|)/;function vr(){return!0}function yr(){return!1}function Br(l,u,v,y,T,b){var C,F;if(typeof u=="object"){typeof v!="string"&&(y=y||v,v=void 0);for(F in u)Br(l,F,v,y,u[F],b);return l}if(y==null&&T==null?(T=v,y=v=void 0):T==null&&(typeof v=="string"?(T=y,y=void 0):(T=y,y=v,v=void 0)),T===!1)T=yr;else if(!T)return l;return b===1&&(C=T,T=function(k){return d().off(k),C.apply(this,arguments)},T.guid=C.guid||(C.guid=d.guid++)),l.each(function(){d.event.add(this,u,T,y,v)})}d.event={global:{},add:function(l,u,v,y,T){var b,C,F,k,G,ne,le,Y,_e,Ze,Et,at=pe.get(l);if(ge(l))for(v.handler&&(b=v,v=b.handler,T=b.selector),T&&d.find.matchesSelector(Qe,T),v.guid||(v.guid=d.guid++),(k=at.events)||(k=at.events=Object.create(null)),(C=at.handle)||(C=at.handle=function(Cn){return typeof d<"u"&&d.event.triggered!==Cn.type?d.event.dispatch.apply(l,arguments):void 0}),u=(u||"").match($)||[""],G=u.length;G--;)F=Sa.exec(u[G])||[],_e=Et=F[1],Ze=(F[2]||"").split(".").sort(),_e&&(le=d.event.special[_e]||{},_e=(T?le.delegateType:le.bindType)||_e,le=d.event.special[_e]||{},ne=d.extend({type:_e,origType:Et,data:y,handler:v,guid:v.guid,selector:T,needsContext:T&&d.expr.match.needsContext.test(T),namespace:Ze.join(".")},b),(Y=k[_e])||(Y=k[_e]=[],Y.delegateCount=0,(!le.setup||le.setup.call(l,y,Ze,C)===!1)&&l.addEventListener&&l.addEventListener(_e,C)),le.add&&(le.add.call(l,ne),ne.handler.guid||(ne.handler.guid=v.guid)),T?Y.splice(Y.delegateCount++,0,ne):Y.push(ne),d.event.global[_e]=!0)},remove:function(l,u,v,y,T){var b,C,F,k,G,ne,le,Y,_e,Ze,Et,at=pe.hasData(l)&&pe.get(l);if(!(!at||!(k=at.events))){for(u=(u||"").match($)||[""],G=u.length;G--;){if(F=Sa.exec(u[G])||[],_e=Et=F[1],Ze=(F[2]||"").split(".").sort(),!_e){for(_e in k)d.event.remove(l,_e+u[G],v,y,!0);continue}for(le=d.event.special[_e]||{},_e=(y?le.delegateType:le.bindType)||_e,Y=k[_e]||[],F=F[2]&&new RegExp("(^|\\.)"+Ze.join("\\.(?:.*\\.|)")+"(\\.|$)"),C=b=Y.length;b--;)ne=Y[b],(T||Et===ne.origType)&&(!v||v.guid===ne.guid)&&(!F||F.test(ne.namespace))&&(!y||y===ne.selector||y==="**"&&ne.selector)&&(Y.splice(b,1),ne.selector&&Y.delegateCount--,le.remove&&le.remove.call(l,ne));C&&!Y.length&&((!le.teardown||le.teardown.call(l,Ze,at.handle)===!1)&&d.removeEvent(l,_e,at.handle),delete k[_e])}d.isEmptyObject(k)&&pe.remove(l,"handle events")}},dispatch:function(l){var u,v,y,T,b,C,F=new Array(arguments.length),k=d.event.fix(l),G=(pe.get(this,"events")||Object.create(null))[k.type]||[],ne=d.event.special[k.type]||{};for(F[0]=k,u=1;u<arguments.length;u++)F[u]=arguments[u];if(k.delegateTarget=this,!(ne.preDispatch&&ne.preDispatch.call(this,k)===!1)){for(C=d.event.handlers.call(this,k,G),u=0;(T=C[u++])&&!k.isPropagationStopped();)for(k.currentTarget=T.elem,v=0;(b=T.handlers[v++])&&!k.isImmediatePropagationStopped();)(!k.rnamespace||b.namespace===!1||k.rnamespace.test(b.namespace))&&(k.handleObj=b,k.data=b.data,y=((d.event.special[b.origType]||{}).handle||b.handler).apply(T.elem,F),y!==void 0&&(k.result=y)===!1&&(k.preventDefault(),k.stopPropagation()));return ne.postDispatch&&ne.postDispatch.call(this,k),k.result}},handlers:function(l,u){var v,y,T,b,C,F=[],k=u.delegateCount,G=l.target;if(k&&G.nodeType&&!(l.type==="click"&&l.button>=1)){for(;G!==this;G=G.parentNode||this)if(G.nodeType===1&&!(l.type==="click"&&G.disabled===!0)){for(b=[],C={},v=0;v<k;v++)y=u[v],T=y.selector+" ",C[T]===void 0&&(C[T]=y.needsContext?d(T,this).index(G)>-1:d.find(T,this,null,[G]).length),C[T]&&b.push(y);b.length&&F.push({elem:G,handlers:b})}}return G=this,k<u.length&&F.push({elem:G,handlers:u.slice(k)}),F},addProp:function(l,u){Object.defineProperty(d.Event.prototype,l,{enumerable:!0,configurable:!0,get:S(u)?function(){if(this.originalEvent)return u(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[l]},set:function(v){Object.defineProperty(this,l,{enumerable:!0,configurable:!0,writable:!0,value:v})}})},fix:function(l){return l[d.expando]?l:new d.Event(l)},special:{load:{noBubble:!0},click:{setup:function(l){var u=this||l;return Ie.test(u.type)&&u.click&&L(u,"input")&&Cs(u,"click",!0),!1},trigger:function(l){var u=this||l;return Ie.test(u.type)&&u.click&&L(u,"input")&&Cs(u,"click"),!0},_default:function(l){var u=l.target;return Ie.test(u.type)&&u.click&&L(u,"input")&&pe.get(u,"click")||L(u,"a")}},beforeunload:{postDispatch:function(l){l.result!==void 0&&l.originalEvent&&(l.originalEvent.returnValue=l.result)}}}};function Cs(l,u,v){if(!v){pe.get(l,u)===void 0&&d.event.add(l,u,vr);return}pe.set(l,u,!1),d.event.add(l,u,{namespace:!1,handler:function(y){var T,b=pe.get(this,u);if(y.isTrigger&1&&this[u]){if(b)(d.event.special[u]||{}).delegateType&&y.stopPropagation();else if(b=s.call(arguments),pe.set(this,u,b),this[u](),T=pe.get(this,u),pe.set(this,u,!1),b!==T)return y.stopImmediatePropagation(),y.preventDefault(),T}else b&&(pe.set(this,u,d.event.trigger(b[0],b.slice(1),this)),y.stopPropagation(),y.isImmediatePropagationStopped=vr)}})}d.removeEvent=function(l,u,v){l.removeEventListener&&l.removeEventListener(u,v)},d.Event=function(l,u){if(!(this instanceof d.Event))return new d.Event(l,u);l&&l.type?(this.originalEvent=l,this.type=l.type,this.isDefaultPrevented=l.defaultPrevented||l.defaultPrevented===void 0&&l.returnValue===!1?vr:yr,this.target=l.target&&l.target.nodeType===3?l.target.parentNode:l.target,this.currentTarget=l.currentTarget,this.relatedTarget=l.relatedTarget):this.type=l,u&&d.extend(this,u),this.timeStamp=l&&l.timeStamp||Date.now(),this[d.expando]=!0},d.Event.prototype={constructor:d.Event,isDefaultPrevented:yr,isPropagationStopped:yr,isImmediatePropagationStopped:yr,isSimulated:!1,preventDefault:function(){var l=this.originalEvent;this.isDefaultPrevented=vr,l&&!this.isSimulated&&l.preventDefault()},stopPropagation:function(){var l=this.originalEvent;this.isPropagationStopped=vr,l&&!this.isSimulated&&l.stopPropagation()},stopImmediatePropagation:function(){var l=this.originalEvent;this.isImmediatePropagationStopped=vr,l&&!this.isSimulated&&l.stopImmediatePropagation(),this.stopPropagation()}},d.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},d.event.addProp),d.each({focus:"focusin",blur:"focusout"},function(l,u){function v(y){if(g.documentMode){var T=pe.get(this,"handle"),b=d.event.fix(y);b.type=y.type==="focusin"?"focus":"blur",b.isSimulated=!0,T(y),b.target===b.currentTarget&&T(b)}else d.event.simulate(u,y.target,d.event.fix(y))}d.event.special[l]={setup:function(){var y;if(Cs(this,l,!0),g.documentMode)y=pe.get(this,u),y||this.addEventListener(u,v),pe.set(this,u,(y||0)+1);else return!1},trigger:function(){return Cs(this,l),!0},teardown:function(){var y;if(g.documentMode)y=pe.get(this,u)-1,y?pe.set(this,u,y):(this.removeEventListener(u,v),pe.remove(this,u));else return!1},_default:function(y){return pe.get(y.target,l)},delegateType:u},d.event.special[u]={setup:function(){var y=this.ownerDocument||this.document||this,T=g.documentMode?this:y,b=pe.get(T,u);b||(g.documentMode?this.addEventListener(u,v):y.addEventListener(l,v,!0)),pe.set(T,u,(b||0)+1)},teardown:function(){var y=this.ownerDocument||this.document||this,T=g.documentMode?this:y,b=pe.get(T,u)-1;b?pe.set(T,u,b):(g.documentMode?this.removeEventListener(u,v):y.removeEventListener(l,v,!0),pe.remove(T,u))}}}),d.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(l,u){d.event.special[l]={delegateType:u,bindType:u,handle:function(v){var y,T=this,b=v.relatedTarget,C=v.handleObj;return(!b||b!==T&&!d.contains(T,b))&&(v.type=C.origType,y=C.handler.apply(this,arguments),v.type=u),y}}}),d.fn.extend({on:function(l,u,v,y){return Br(this,l,u,v,y)},one:function(l,u,v,y){return Br(this,l,u,v,y,1)},off:function(l,u,v){var y,T;if(l&&l.preventDefault&&l.handleObj)return y=l.handleObj,d(l.delegateTarget).off(y.namespace?y.origType+"."+y.namespace:y.origType,y.selector,y.handler),this;if(typeof l=="object"){for(T in l)this.off(T,u,l[T]);return this}return(u===!1||typeof u=="function")&&(v=u,u=void 0),v===!1&&(v=yr),this.each(function(){d.event.remove(this,l,v,u)})}});var lo=/<script|<style|<link/i,ql=/checked\s*(?:[^=]|=\s*.checked.)/i,Yl=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Kl(l,u){return L(l,"table")&&L(u.nodeType!==11?u:u.firstChild,"tr")&&d(l).children("tbody")[0]||l}function Gf(l){return l.type=(l.getAttribute("type")!==null)+"/"+l.type,l}function Wf(l){return(l.type||"").slice(0,5)==="true/"?l.type=l.type.slice(5):l.removeAttribute("type"),l}function D(l,u){var v,y,T,b,C,F,k;if(u.nodeType===1){if(pe.hasData(l)&&(b=pe.get(l),k=b.events,k)){pe.remove(u,"handle events");for(T in k)for(v=0,y=k[T].length;v<y;v++)d.event.add(u,T,k[T][v])}we.hasData(l)&&(C=we.access(l),F=d.extend({},C),we.set(u,F))}}function j(l,u){var v=u.nodeName.toLowerCase();v==="input"&&Ie.test(l.type)?u.checked=l.checked:(v==="input"||v==="textarea")&&(u.defaultValue=l.defaultValue)}function Z(l,u,v,y){u=o(u);var T,b,C,F,k,G,ne=0,le=l.length,Y=le-1,_e=u[0],Ze=S(_e);if(Ze||le>1&&typeof _e=="string"&&!E.checkClone&&ql.test(_e))return l.each(function(Et){var at=l.eq(Et);Ze&&(u[0]=_e.call(this,Et,at.html())),Z(at,u,v,y)});if(le&&(T=Sn(u,l[0].ownerDocument,!1,l,y),b=T.firstChild,T.childNodes.length===1&&(T=b),b||y)){for(C=d.map(Pt(T,"script"),Gf),F=C.length;ne<le;ne++)k=T,ne!==Y&&(k=d.clone(k,!0,!0),F&&d.merge(C,Pt(k,"script"))),v.call(l[ne],k,ne);if(F)for(G=C[C.length-1].ownerDocument,d.map(C,Wf),ne=0;ne<F;ne++)k=C[ne],Bt.test(k.type||"")&&!pe.access(k,"globalEval")&&d.contains(G,k)&&(k.src&&(k.type||"").toLowerCase()!=="module"?d._evalUrl&&!k.noModule&&d._evalUrl(k.src,{nonce:k.nonce||k.getAttribute("nonce")},G):M(k.textContent.replace(Yl,""),k,G))}return l}function Q(l,u,v){for(var y,T=u?d.filter(u,l):l,b=0;(y=T[b])!=null;b++)!v&&y.nodeType===1&&d.cleanData(Pt(y)),y.parentNode&&(v&&rt(y)&&wt(Pt(y,"script")),y.parentNode.removeChild(y));return l}d.extend({htmlPrefilter:function(l){return l},clone:function(l,u,v){var y,T,b,C,F=l.cloneNode(!0),k=rt(l);if(!E.noCloneChecked&&(l.nodeType===1||l.nodeType===11)&&!d.isXMLDoc(l))for(C=Pt(F),b=Pt(l),y=0,T=b.length;y<T;y++)j(b[y],C[y]);if(u)if(v)for(b=b||Pt(l),C=C||Pt(F),y=0,T=b.length;y<T;y++)D(b[y],C[y]);else D(l,F);return C=Pt(F,"script"),C.length>0&&wt(C,!k&&Pt(l,"script")),F},cleanData:function(l){for(var u,v,y,T=d.event.special,b=0;(v=l[b])!==void 0;b++)if(ge(v)){if(u=v[pe.expando]){if(u.events)for(y in u.events)T[y]?d.event.remove(v,y):d.removeEvent(v,y,u.handle);v[pe.expando]=void 0}v[we.expando]&&(v[we.expando]=void 0)}}}),d.fn.extend({detach:function(l){return Q(this,l,!0)},remove:function(l){return Q(this,l)},text:function(l){return Ct(this,function(u){return u===void 0?d.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=u)})},null,l,arguments.length)},append:function(){return Z(this,arguments,function(l){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=Kl(this,l);u.appendChild(l)}})},prepend:function(){return Z(this,arguments,function(l){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=Kl(this,l);u.insertBefore(l,u.firstChild)}})},before:function(){return Z(this,arguments,function(l){this.parentNode&&this.parentNode.insertBefore(l,this)})},after:function(){return Z(this,arguments,function(l){this.parentNode&&this.parentNode.insertBefore(l,this.nextSibling)})},empty:function(){for(var l,u=0;(l=this[u])!=null;u++)l.nodeType===1&&(d.cleanData(Pt(l,!1)),l.textContent="");return this},clone:function(l,u){return l=l??!1,u=u??l,this.map(function(){return d.clone(this,l,u)})},html:function(l){return Ct(this,function(u){var v=this[0]||{},y=0,T=this.length;if(u===void 0&&v.nodeType===1)return v.innerHTML;if(typeof u=="string"&&!lo.test(u)&&!St[(xt.exec(u)||["",""])[1].toLowerCase()]){u=d.htmlPrefilter(u);try{for(;y<T;y++)v=this[y]||{},v.nodeType===1&&(d.cleanData(Pt(v,!1)),v.innerHTML=u);v=0}catch{}}v&&this.empty().append(u)},null,l,arguments.length)},replaceWith:function(){var l=[];return Z(this,arguments,function(u){var v=this.parentNode;d.inArray(this,l)<0&&(d.cleanData(Pt(this)),v&&v.replaceChild(u,this))},l)}}),d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(l,u){d.fn[l]=function(v){for(var y,T=[],b=d(v),C=b.length-1,F=0;F<=C;F++)y=F===C?this:this.clone(!0),d(b[F])[u](y),a.apply(T,y.get());return this.pushStack(T)}});var K=new RegExp("^("+vt+")(?!px)[a-z%]+$","i"),Pe=/^--/,ze=function(l){var u=l.ownerDocument.defaultView;return(!u||!u.opener)&&(u=e),u.getComputedStyle(l)},He=function(l,u,v){var y,T,b={};for(T in u)b[T]=l.style[T],l.style[T]=u[T];y=v.call(l);for(T in u)l.style[T]=b[T];return y},Xe=new RegExp(Ne.join("|"),"i");(function(){function l(){if(G){k.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",G.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Qe.appendChild(k).appendChild(G);var ne=e.getComputedStyle(G);v=ne.top!=="1%",F=u(ne.marginLeft)===12,G.style.right="60%",b=u(ne.right)===36,y=u(ne.width)===36,G.style.position="absolute",T=u(G.offsetWidth/3)===12,Qe.removeChild(k),G=null}}function u(ne){return Math.round(parseFloat(ne))}var v,y,T,b,C,F,k=g.createElement("div"),G=g.createElement("div");G.style&&(G.style.backgroundClip="content-box",G.cloneNode(!0).style.backgroundClip="",E.clearCloneStyle=G.style.backgroundClip==="content-box",d.extend(E,{boxSizingReliable:function(){return l(),y},pixelBoxStyles:function(){return l(),b},pixelPosition:function(){return l(),v},reliableMarginLeft:function(){return l(),F},scrollboxSize:function(){return l(),T},reliableTrDimensions:function(){var ne,le,Y,_e;return C==null&&(ne=g.createElement("table"),le=g.createElement("tr"),Y=g.createElement("div"),ne.style.cssText="position:absolute;left:-11111px;border-collapse:separate",le.style.cssText="box-sizing:content-box;border:1px solid",le.style.height="1px",Y.style.height="9px",Y.style.display="block",Qe.appendChild(ne).appendChild(le).appendChild(Y),_e=e.getComputedStyle(le),C=parseInt(_e.height,10)+parseInt(_e.borderTopWidth,10)+parseInt(_e.borderBottomWidth,10)===le.offsetHeight,Qe.removeChild(ne)),C}}))})();function Ye(l,u,v){var y,T,b,C,F=Pe.test(u),k=l.style;return v=v||ze(l),v&&(C=v.getPropertyValue(u)||v[u],F&&C&&(C=C.replace(ue,"$1")||void 0),C===""&&!rt(l)&&(C=d.style(l,u)),!E.pixelBoxStyles()&&K.test(C)&&Xe.test(u)&&(y=k.width,T=k.minWidth,b=k.maxWidth,k.minWidth=k.maxWidth=k.width=C,C=v.width,k.width=y,k.minWidth=T,k.maxWidth=b)),C!==void 0?C+"":C}function nt(l,u){return{get:function(){if(l()){delete this.get;return}return(this.get=u).apply(this,arguments)}}}var ot=["Webkit","Moz","ms"],Zt=g.createElement("div").style,pn={};function Vn(l){for(var u=l[0].toUpperCase()+l.slice(1),v=ot.length;v--;)if(l=ot[v]+u,l in Zt)return l}function oi(l){var u=d.cssProps[l]||pn[l];return u||(l in Zt?l:pn[l]=Vn(l)||l)}var At=/^(none|table(?!-c[ea]).+)/,tt={position:"absolute",visibility:"hidden",display:"block"},Hr={letterSpacing:"0",fontWeight:"400"};function Gt(l,u,v){var y=je.exec(u);return y?Math.max(0,y[2]-(v||0))+(y[3]||"px"):u}function Di(l,u,v,y,T,b){var C=u==="width"?1:0,F=0,k=0,G=0;if(v===(y?"border":"content"))return 0;for(;C<4;C+=2)v==="margin"&&(G+=d.css(l,v+Ne[C],!0,T)),y?(v==="content"&&(k-=d.css(l,"padding"+Ne[C],!0,T)),v!=="margin"&&(k-=d.css(l,"border"+Ne[C]+"Width",!0,T))):(k+=d.css(l,"padding"+Ne[C],!0,T),v!=="padding"?k+=d.css(l,"border"+Ne[C]+"Width",!0,T):F+=d.css(l,"border"+Ne[C]+"Width",!0,T));return!y&&b>=0&&(k+=Math.max(0,Math.ceil(l["offset"+u[0].toUpperCase()+u.slice(1)]-b-k-F-.5))||0),k+G}function Ea(l,u,v){var y=ze(l),T=!E.boxSizingReliable()||v,b=T&&d.css(l,"boxSizing",!1,y)==="border-box",C=b,F=Ye(l,u,y),k="offset"+u[0].toUpperCase()+u.slice(1);if(K.test(F)){if(!v)return F;F="auto"}return(!E.boxSizingReliable()&&b||!E.reliableTrDimensions()&&L(l,"tr")||F==="auto"||!parseFloat(F)&&d.css(l,"display",!1,y)==="inline")&&l.getClientRects().length&&(b=d.css(l,"boxSizing",!1,y)==="border-box",C=k in l,C&&(F=l[k])),F=parseFloat(F)||0,F+Di(l,u,v||(b?"border":"content"),C,y,F)+"px"}d.extend({cssHooks:{opacity:{get:function(l,u){if(u){var v=Ye(l,"opacity");return v===""?"1":v}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(l,u,v,y){if(!(!l||l.nodeType===3||l.nodeType===8||!l.style)){var T,b,C,F=fe(u),k=Pe.test(u),G=l.style;if(k||(u=oi(F)),C=d.cssHooks[u]||d.cssHooks[F],v!==void 0){if(b=typeof v,b==="string"&&(T=je.exec(v))&&T[1]&&(v=W(l,u,T),b="number"),v==null||v!==v)return;b==="number"&&!k&&(v+=T&&T[3]||(d.cssNumber[F]?"":"px")),!E.clearCloneStyle&&v===""&&u.indexOf("background")===0&&(G[u]="inherit"),(!C||!("set"in C)||(v=C.set(l,v,y))!==void 0)&&(k?G.setProperty(u,v):G[u]=v)}else return C&&"get"in C&&(T=C.get(l,!1,y))!==void 0?T:G[u]}},css:function(l,u,v,y){var T,b,C,F=fe(u),k=Pe.test(u);return k||(u=oi(F)),C=d.cssHooks[u]||d.cssHooks[F],C&&"get"in C&&(T=C.get(l,!0,v)),T===void 0&&(T=Ye(l,u,y)),T==="normal"&&u in Hr&&(T=Hr[u]),v===""||v?(b=parseFloat(T),v===!0||isFinite(b)?b||0:T):T}}),d.each(["height","width"],function(l,u){d.cssHooks[u]={get:function(v,y,T){if(y)return At.test(d.css(v,"display"))&&(!v.getClientRects().length||!v.getBoundingClientRect().width)?He(v,tt,function(){return Ea(v,u,T)}):Ea(v,u,T)},set:function(v,y,T){var b,C=ze(v),F=!E.scrollboxSize()&&C.position==="absolute",k=F||T,G=k&&d.css(v,"boxSizing",!1,C)==="border-box",ne=T?Di(v,u,T,G,C):0;return G&&F&&(ne-=Math.ceil(v["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(C[u])-Di(v,u,"border",!1,C)-.5)),ne&&(b=je.exec(y))&&(b[3]||"px")!=="px"&&(v.style[u]=y,y=d.css(v,u)),Gt(v,y,ne)}}}),d.cssHooks.marginLeft=nt(E.reliableMarginLeft,function(l,u){if(u)return(parseFloat(Ye(l,"marginLeft"))||l.getBoundingClientRect().left-He(l,{marginLeft:0},function(){return l.getBoundingClientRect().left}))+"px"}),d.each({margin:"",padding:"",border:"Width"},function(l,u){d.cssHooks[l+u]={expand:function(v){for(var y=0,T={},b=typeof v=="string"?v.split(" "):[v];y<4;y++)T[l+Ne[y]+u]=b[y]||b[y-2]||b[0];return T}},l!=="margin"&&(d.cssHooks[l+u].set=Gt)}),d.fn.extend({css:function(l,u){return Ct(this,function(v,y,T){var b,C,F={},k=0;if(Array.isArray(y)){for(b=ze(v),C=y.length;k<C;k++)F[y[k]]=d.css(v,y[k],!1,b);return F}return T!==void 0?d.style(v,y,T):d.css(v,y)},l,u,arguments.length>1)}});function un(l,u,v,y,T){return new un.prototype.init(l,u,v,y,T)}d.Tween=un,un.prototype={constructor:un,init:function(l,u,v,y,T,b){this.elem=l,this.prop=v,this.easing=T||d.easing._default,this.options=u,this.start=this.now=this.cur(),this.end=y,this.unit=b||(d.cssNumber[v]?"":"px")},cur:function(){var l=un.propHooks[this.prop];return l&&l.get?l.get(this):un.propHooks._default.get(this)},run:function(l){var u,v=un.propHooks[this.prop];return this.options.duration?this.pos=u=d.easing[this.easing](l,this.options.duration*l,0,1,this.options.duration):this.pos=u=l,this.now=(this.end-this.start)*u+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),v&&v.set?v.set(this):un.propHooks._default.set(this),this}},un.prototype.init.prototype=un.prototype,un.propHooks={_default:{get:function(l){var u;return l.elem.nodeType!==1||l.elem[l.prop]!=null&&l.elem.style[l.prop]==null?l.elem[l.prop]:(u=d.css(l.elem,l.prop,""),!u||u==="auto"?0:u)},set:function(l){d.fx.step[l.prop]?d.fx.step[l.prop](l):l.elem.nodeType===1&&(d.cssHooks[l.prop]||l.elem.style[oi(l.prop)]!=null)?d.style(l.elem,l.prop,l.now+l.unit):l.elem[l.prop]=l.now}}},un.propHooks.scrollTop=un.propHooks.scrollLeft={set:function(l){l.elem.nodeType&&l.elem.parentNode&&(l.elem[l.prop]=l.now)}},d.easing={linear:function(l){return l},swing:function(l){return .5-Math.cos(l*Math.PI)/2},_default:"swing"},d.fx=un.prototype.init,d.fx.step={};var Xi,ln,qi=/^(?:toggle|show|hide)$/,Ma=/queueHooks$/;function Nn(){ln&&(g.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Nn):e.setTimeout(Nn,d.fx.interval),d.fx.tick())}function co(){return e.setTimeout(function(){Xi=void 0}),Xi=Date.now()}function uo(l,u){var v,y=0,T={height:l};for(u=u?1:0;y<4;y+=2-u)v=Ne[y],T["margin"+v]=T["padding"+v]=l;return u&&(T.opacity=T.width=l),T}function wa(l,u,v){for(var y,T=(Ni.tweeners[u]||[]).concat(Ni.tweeners["*"]),b=0,C=T.length;b<C;b++)if(y=T[b].call(v,u,l))return y}function qS(l,u,v){var y,T,b,C,F,k,G,ne,le="width"in u||"height"in u,Y=this,_e={},Ze=l.style,Et=l.nodeType&&et(l),at=pe.get(l,"fxshow");v.queue||(C=d._queueHooks(l,"fx"),C.unqueued==null&&(C.unqueued=0,F=C.empty.fire,C.empty.fire=function(){C.unqueued||F()}),C.unqueued++,Y.always(function(){Y.always(function(){C.unqueued--,d.queue(l,"fx").length||C.empty.fire()})}));for(y in u)if(T=u[y],qi.test(T)){if(delete u[y],b=b||T==="toggle",T===(Et?"hide":"show"))if(T==="show"&&at&&at[y]!==void 0)Et=!0;else continue;_e[y]=at&&at[y]||d.style(l,y)}if(k=!d.isEmptyObject(u),!(!k&&d.isEmptyObject(_e))){le&&l.nodeType===1&&(v.overflow=[Ze.overflow,Ze.overflowX,Ze.overflowY],G=at&&at.display,G==null&&(G=pe.get(l,"display")),ne=d.css(l,"display"),ne==="none"&&(G?ne=G:(Re([l],!0),G=l.style.display||G,ne=d.css(l,"display"),Re([l]))),(ne==="inline"||ne==="inline-block"&&G!=null)&&d.css(l,"float")==="none"&&(k||(Y.done(function(){Ze.display=G}),G==null&&(ne=Ze.display,G=ne==="none"?"":ne)),Ze.display="inline-block")),v.overflow&&(Ze.overflow="hidden",Y.always(function(){Ze.overflow=v.overflow[0],Ze.overflowX=v.overflow[1],Ze.overflowY=v.overflow[2]})),k=!1;for(y in _e)k||(at?"hidden"in at&&(Et=at.hidden):at=pe.access(l,"fxshow",{display:G}),b&&(at.hidden=!Et),Et&&Re([l],!0),Y.done(function(){Et||Re([l]),pe.remove(l,"fxshow");for(y in _e)d.style(l,y,_e[y])})),k=wa(Et?at[y]:0,y,Y),y in at||(at[y]=k.start,Et&&(k.end=k.start,k.start=0))}}function YS(l,u){var v,y,T,b,C;for(v in l)if(y=fe(v),T=u[y],b=l[v],Array.isArray(b)&&(T=b[1],b=l[v]=b[0]),v!==y&&(l[y]=b,delete l[v]),C=d.cssHooks[y],C&&"expand"in C){b=C.expand(b),delete l[y];for(v in b)v in l||(l[v]=b[v],u[v]=T)}else u[y]=T}function Ni(l,u,v){var y,T,b=0,C=Ni.prefilters.length,F=d.Deferred().always(function(){delete k.elem}),k=function(){if(T)return!1;for(var le=Xi||co(),Y=Math.max(0,G.startTime+G.duration-le),_e=Y/G.duration||0,Ze=1-_e,Et=0,at=G.tweens.length;Et<at;Et++)G.tweens[Et].run(Ze);return F.notifyWith(l,[G,Ze,Y]),Ze<1&&at?Y:(at||F.notifyWith(l,[G,1,0]),F.resolveWith(l,[G]),!1)},G=F.promise({elem:l,props:d.extend({},u),opts:d.extend(!0,{specialEasing:{},easing:d.easing._default},v),originalProperties:u,originalOptions:v,startTime:Xi||co(),duration:v.duration,tweens:[],createTween:function(le,Y){var _e=d.Tween(l,G.opts,le,Y,G.opts.specialEasing[le]||G.opts.easing);return G.tweens.push(_e),_e},stop:function(le){var Y=0,_e=le?G.tweens.length:0;if(T)return this;for(T=!0;Y<_e;Y++)G.tweens[Y].run(1);return le?(F.notifyWith(l,[G,1,0]),F.resolveWith(l,[G,le])):F.rejectWith(l,[G,le]),this}}),ne=G.props;for(YS(ne,G.opts.specialEasing);b<C;b++)if(y=Ni.prefilters[b].call(G,l,ne,G.opts),y)return S(y.stop)&&(d._queueHooks(G.elem,G.opts.queue).stop=y.stop.bind(y)),y;return d.map(ne,wa,G),S(G.opts.start)&&G.opts.start.call(l,G),G.progress(G.opts.progress).done(G.opts.done,G.opts.complete).fail(G.opts.fail).always(G.opts.always),d.fx.timer(d.extend(k,{elem:l,anim:G,queue:G.opts.queue})),G}d.Animation=d.extend(Ni,{tweeners:{"*":[function(l,u){var v=this.createTween(l,u);return W(v.elem,l,je.exec(u),v),v}]},tweener:function(l,u){S(l)?(u=l,l=["*"]):l=l.match($);for(var v,y=0,T=l.length;y<T;y++)v=l[y],Ni.tweeners[v]=Ni.tweeners[v]||[],Ni.tweeners[v].unshift(u)},prefilters:[qS],prefilter:function(l,u){u?Ni.prefilters.unshift(l):Ni.prefilters.push(l)}}),d.speed=function(l,u,v){var y=l&&typeof l=="object"?d.extend({},l):{complete:v||!v&&u||S(l)&&l,duration:l,easing:v&&u||u&&!S(u)&&u};return d.fx.off?y.duration=0:typeof y.duration!="number"&&(y.duration in d.fx.speeds?y.duration=d.fx.speeds[y.duration]:y.duration=d.fx.speeds._default),(y.queue==null||y.queue===!0)&&(y.queue="fx"),y.old=y.complete,y.complete=function(){S(y.old)&&y.old.call(this),y.queue&&d.dequeue(this,y.queue)},y},d.fn.extend({fadeTo:function(l,u,v,y){return this.filter(et).css("opacity",0).show().end().animate({opacity:u},l,v,y)},animate:function(l,u,v,y){var T=d.isEmptyObject(l),b=d.speed(u,v,y),C=function(){var F=Ni(this,d.extend({},l),b);(T||pe.get(this,"finish"))&&F.stop(!0)};return C.finish=C,T||b.queue===!1?this.each(C):this.queue(b.queue,C)},stop:function(l,u,v){var y=function(T){var b=T.stop;delete T.stop,b(v)};return typeof l!="string"&&(v=u,u=l,l=void 0),u&&this.queue(l||"fx",[]),this.each(function(){var T=!0,b=l!=null&&l+"queueHooks",C=d.timers,F=pe.get(this);if(b)F[b]&&F[b].stop&&y(F[b]);else for(b in F)F[b]&&F[b].stop&&Ma.test(b)&&y(F[b]);for(b=C.length;b--;)C[b].elem===this&&(l==null||C[b].queue===l)&&(C[b].anim.stop(v),T=!1,C.splice(b,1));(T||!v)&&d.dequeue(this,l)})},finish:function(l){return l!==!1&&(l=l||"fx"),this.each(function(){var u,v=pe.get(this),y=v[l+"queue"],T=v[l+"queueHooks"],b=d.timers,C=y?y.length:0;for(v.finish=!0,d.queue(this,l,[]),T&&T.stop&&T.stop.call(this,!0),u=b.length;u--;)b[u].elem===this&&b[u].queue===l&&(b[u].anim.stop(!0),b.splice(u,1));for(u=0;u<C;u++)y[u]&&y[u].finish&&y[u].finish.call(this);delete v.finish})}}),d.each(["toggle","show","hide"],function(l,u){var v=d.fn[u];d.fn[u]=function(y,T,b){return y==null||typeof y=="boolean"?v.apply(this,arguments):this.animate(uo(u,!0),y,T,b)}}),d.each({slideDown:uo("show"),slideUp:uo("hide"),slideToggle:uo("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(l,u){d.fn[l]=function(v,y,T){return this.animate(u,v,y,T)}}),d.timers=[],d.fx.tick=function(){var l,u=0,v=d.timers;for(Xi=Date.now();u<v.length;u++)l=v[u],!l()&&v[u]===l&&v.splice(u--,1);v.length||d.fx.stop(),Xi=void 0},d.fx.timer=function(l){d.timers.push(l),d.fx.start()},d.fx.interval=13,d.fx.start=function(){ln||(ln=!0,Nn())},d.fx.stop=function(){ln=null},d.fx.speeds={slow:600,fast:200,_default:400},d.fn.delay=function(l,u){return l=d.fx&&d.fx.speeds[l]||l,u=u||"fx",this.queue(u,function(v,y){var T=e.setTimeout(v,l);y.stop=function(){e.clearTimeout(T)}})},function(){var l=g.createElement("input"),u=g.createElement("select"),v=u.appendChild(g.createElement("option"));l.type="checkbox",E.checkOn=l.value!=="",E.optSelected=v.selected,l=g.createElement("input"),l.value="t",l.type="radio",E.radioValue=l.value==="t"}();var jm,Ta=d.expr.attrHandle;d.fn.extend({attr:function(l,u){return Ct(this,d.attr,l,u,arguments.length>1)},removeAttr:function(l){return this.each(function(){d.removeAttr(this,l)})}}),d.extend({attr:function(l,u,v){var y,T,b=l.nodeType;if(!(b===3||b===8||b===2)){if(typeof l.getAttribute>"u")return d.prop(l,u,v);if((b!==1||!d.isXMLDoc(l))&&(T=d.attrHooks[u.toLowerCase()]||(d.expr.match.bool.test(u)?jm:void 0)),v!==void 0){if(v===null){d.removeAttr(l,u);return}return T&&"set"in T&&(y=T.set(l,v,u))!==void 0?y:(l.setAttribute(u,v+""),v)}return T&&"get"in T&&(y=T.get(l,u))!==null?y:(y=d.find.attr(l,u),y??void 0)}},attrHooks:{type:{set:function(l,u){if(!E.radioValue&&u==="radio"&&L(l,"input")){var v=l.value;return l.setAttribute("type",u),v&&(l.value=v),u}}}},removeAttr:function(l,u){var v,y=0,T=u&&u.match($);if(T&&l.nodeType===1)for(;v=T[y++];)l.removeAttribute(v)}}),jm={set:function(l,u,v){return u===!1?d.removeAttr(l,v):l.setAttribute(v,v),v}},d.each(d.expr.match.bool.source.match(/\w+/g),function(l,u){var v=Ta[u]||d.find.attr;Ta[u]=function(y,T,b){var C,F,k=T.toLowerCase();return b||(F=Ta[k],Ta[k]=C,C=v(y,T,b)!=null?k:null,Ta[k]=F),C}});var KS=/^(?:input|select|textarea|button)$/i,QS=/^(?:a|area)$/i;d.fn.extend({prop:function(l,u){return Ct(this,d.prop,l,u,arguments.length>1)},removeProp:function(l){return this.each(function(){delete this[d.propFix[l]||l]})}}),d.extend({prop:function(l,u,v){var y,T,b=l.nodeType;if(!(b===3||b===8||b===2))return(b!==1||!d.isXMLDoc(l))&&(u=d.propFix[u]||u,T=d.propHooks[u]),v!==void 0?T&&"set"in T&&(y=T.set(l,v,u))!==void 0?y:l[u]=v:T&&"get"in T&&(y=T.get(l,u))!==null?y:l[u]},propHooks:{tabIndex:{get:function(l){var u=d.find.attr(l,"tabindex");return u?parseInt(u,10):KS.test(l.nodeName)||QS.test(l.nodeName)&&l.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),E.optSelected||(d.propHooks.selected={get:function(l){var u=l.parentNode;return u&&u.parentNode&&u.parentNode.selectedIndex,null},set:function(l){var u=l.parentNode;u&&(u.selectedIndex,u.parentNode&&u.parentNode.selectedIndex)}}),d.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){d.propFix[this.toLowerCase()]=this});function As(l){var u=l.match($)||[];return u.join(" ")}function Rs(l){return l.getAttribute&&l.getAttribute("class")||""}function jf(l){return Array.isArray(l)?l:typeof l=="string"?l.match($)||[]:[]}d.fn.extend({addClass:function(l){var u,v,y,T,b,C;return S(l)?this.each(function(F){d(this).addClass(l.call(this,F,Rs(this)))}):(u=jf(l),u.length?this.each(function(){if(y=Rs(this),v=this.nodeType===1&&" "+As(y)+" ",v){for(b=0;b<u.length;b++)T=u[b],v.indexOf(" "+T+" ")<0&&(v+=T+" ");C=As(v),y!==C&&this.setAttribute("class",C)}}):this)},removeClass:function(l){var u,v,y,T,b,C;return S(l)?this.each(function(F){d(this).removeClass(l.call(this,F,Rs(this)))}):arguments.length?(u=jf(l),u.length?this.each(function(){if(y=Rs(this),v=this.nodeType===1&&" "+As(y)+" ",v){for(b=0;b<u.length;b++)for(T=u[b];v.indexOf(" "+T+" ")>-1;)v=v.replace(" "+T+" "," ");C=As(v),y!==C&&this.setAttribute("class",C)}}):this):this.attr("class","")},toggleClass:function(l,u){var v,y,T,b,C=typeof l,F=C==="string"||Array.isArray(l);return S(l)?this.each(function(k){d(this).toggleClass(l.call(this,k,Rs(this),u),u)}):typeof u=="boolean"&&F?u?this.addClass(l):this.removeClass(l):(v=jf(l),this.each(function(){if(F)for(b=d(this),T=0;T<v.length;T++)y=v[T],b.hasClass(y)?b.removeClass(y):b.addClass(y);else(l===void 0||C==="boolean")&&(y=Rs(this),y&&pe.set(this,"__className__",y),this.setAttribute&&this.setAttribute("class",y||l===!1?"":pe.get(this,"__className__")||""))}))},hasClass:function(l){var u,v,y=0;for(u=" "+l+" ";v=this[y++];)if(v.nodeType===1&&(" "+As(Rs(v))+" ").indexOf(u)>-1)return!0;return!1}});var ZS=/\r/g;d.fn.extend({val:function(l){var u,v,y,T=this[0];return arguments.length?(y=S(l),this.each(function(b){var C;this.nodeType===1&&(y?C=l.call(this,b,d(this).val()):C=l,C==null?C="":typeof C=="number"?C+="":Array.isArray(C)&&(C=d.map(C,function(F){return F==null?"":F+""})),u=d.valHooks[this.type]||d.valHooks[this.nodeName.toLowerCase()],(!u||!("set"in u)||u.set(this,C,"value")===void 0)&&(this.value=C))})):T?(u=d.valHooks[T.type]||d.valHooks[T.nodeName.toLowerCase()],u&&"get"in u&&(v=u.get(T,"value"))!==void 0?v:(v=T.value,typeof v=="string"?v.replace(ZS,""):v??"")):void 0}}),d.extend({valHooks:{option:{get:function(l){var u=d.find.attr(l,"value");return u??As(d.text(l))}},select:{get:function(l){var u,v,y,T=l.options,b=l.selectedIndex,C=l.type==="select-one",F=C?null:[],k=C?b+1:T.length;for(b<0?y=k:y=C?b:0;y<k;y++)if(v=T[y],(v.selected||y===b)&&!v.disabled&&(!v.parentNode.disabled||!L(v.parentNode,"optgroup"))){if(u=d(v).val(),C)return u;F.push(u)}return F},set:function(l,u){for(var v,y,T=l.options,b=d.makeArray(u),C=T.length;C--;)y=T[C],(y.selected=d.inArray(d.valHooks.option.get(y),b)>-1)&&(v=!0);return v||(l.selectedIndex=-1),b}}}}),d.each(["radio","checkbox"],function(){d.valHooks[this]={set:function(l,u){if(Array.isArray(u))return l.checked=d.inArray(d(l).val(),u)>-1}},E.checkOn||(d.valHooks[this].get=function(l){return l.getAttribute("value")===null?"on":l.value})});var ba=e.location,$m={guid:Date.now()},$f=/\?/;d.parseXML=function(l){var u,v;if(!l||typeof l!="string")return null;try{u=new e.DOMParser().parseFromString(l,"text/xml")}catch{}return v=u&&u.getElementsByTagName("parsererror")[0],(!u||v)&&d.error("Invalid XML: "+(v?d.map(v.childNodes,function(y){return y.textContent}).join(`
`):l)),u};var Xm=/^(?:focusinfocus|focusoutblur)$/,qm=function(l){l.stopPropagation()};d.extend(d.event,{trigger:function(l,u,v,y){var T,b,C,F,k,G,ne,le,Y=[v||g],_e=p.call(l,"type")?l.type:l,Ze=p.call(l,"namespace")?l.namespace.split("."):[];if(b=le=C=v=v||g,!(v.nodeType===3||v.nodeType===8)&&!Xm.test(_e+d.event.triggered)&&(_e.indexOf(".")>-1&&(Ze=_e.split("."),_e=Ze.shift(),Ze.sort()),k=_e.indexOf(":")<0&&"on"+_e,l=l[d.expando]?l:new d.Event(_e,typeof l=="object"&&l),l.isTrigger=y?2:3,l.namespace=Ze.join("."),l.rnamespace=l.namespace?new RegExp("(^|\\.)"+Ze.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,l.result=void 0,l.target||(l.target=v),u=u==null?[l]:d.makeArray(u,[l]),ne=d.event.special[_e]||{},!(!y&&ne.trigger&&ne.trigger.apply(v,u)===!1))){if(!y&&!ne.noBubble&&!x(v)){for(F=ne.delegateType||_e,Xm.test(F+_e)||(b=b.parentNode);b;b=b.parentNode)Y.push(b),C=b;C===(v.ownerDocument||g)&&Y.push(C.defaultView||C.parentWindow||e)}for(T=0;(b=Y[T++])&&!l.isPropagationStopped();)le=b,l.type=T>1?F:ne.bindType||_e,G=(pe.get(b,"events")||Object.create(null))[l.type]&&pe.get(b,"handle"),G&&G.apply(b,u),G=k&&b[k],G&&G.apply&&ge(b)&&(l.result=G.apply(b,u),l.result===!1&&l.preventDefault());return l.type=_e,!y&&!l.isDefaultPrevented()&&(!ne._default||ne._default.apply(Y.pop(),u)===!1)&&ge(v)&&k&&S(v[_e])&&!x(v)&&(C=v[k],C&&(v[k]=null),d.event.triggered=_e,l.isPropagationStopped()&&le.addEventListener(_e,qm),v[_e](),l.isPropagationStopped()&&le.removeEventListener(_e,qm),d.event.triggered=void 0,C&&(v[k]=C)),l.result}},simulate:function(l,u,v){var y=d.extend(new d.Event,v,{type:l,isSimulated:!0});d.event.trigger(y,null,u)}}),d.fn.extend({trigger:function(l,u){return this.each(function(){d.event.trigger(l,u,this)})},triggerHandler:function(l,u){var v=this[0];if(v)return d.event.trigger(l,u,v,!0)}});var JS=/\[\]$/,Ym=/\r?\n/g,e1=/^(?:submit|button|image|reset|file)$/i,t1=/^(?:input|select|textarea|keygen)/i;function Xf(l,u,v,y){var T;if(Array.isArray(u))d.each(u,function(b,C){v||JS.test(l)?y(l,C):Xf(l+"["+(typeof C=="object"&&C!=null?b:"")+"]",C,v,y)});else if(!v&&R(u)==="object")for(T in u)Xf(l+"["+T+"]",u[T],v,y);else y(l,u)}d.param=function(l,u){var v,y=[],T=function(b,C){var F=S(C)?C():C;y[y.length]=encodeURIComponent(b)+"="+encodeURIComponent(F??"")};if(l==null)return"";if(Array.isArray(l)||l.jquery&&!d.isPlainObject(l))d.each(l,function(){T(this.name,this.value)});else for(v in l)Xf(v,l[v],u,T);return y.join("&")},d.fn.extend({serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var l=d.prop(this,"elements");return l?d.makeArray(l):this}).filter(function(){var l=this.type;return this.name&&!d(this).is(":disabled")&&t1.test(this.nodeName)&&!e1.test(l)&&(this.checked||!Ie.test(l))}).map(function(l,u){var v=d(this).val();return v==null?null:Array.isArray(v)?d.map(v,function(y){return{name:u.name,value:y.replace(Ym,`\r
`)}}):{name:u.name,value:v.replace(Ym,`\r
`)}}).get()}});var n1=/%20/g,i1=/#.*$/,r1=/([?&])_=[^&]*/,s1=/^(.*?):[ \t]*([^\r\n]*)$/mg,o1=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,a1=/^(?:GET|HEAD)$/,l1=/^\/\//,Km={},qf={},Qm="*/".concat("*"),Yf=g.createElement("a");Yf.href=ba.href;function Zm(l){return function(u,v){typeof u!="string"&&(v=u,u="*");var y,T=0,b=u.toLowerCase().match($)||[];if(S(v))for(;y=b[T++];)y[0]==="+"?(y=y.slice(1)||"*",(l[y]=l[y]||[]).unshift(v)):(l[y]=l[y]||[]).push(v)}}function Jm(l,u,v,y){var T={},b=l===qf;function C(F){var k;return T[F]=!0,d.each(l[F]||[],function(G,ne){var le=ne(u,v,y);if(typeof le=="string"&&!b&&!T[le])return u.dataTypes.unshift(le),C(le),!1;if(b)return!(k=le)}),k}return C(u.dataTypes[0])||!T["*"]&&C("*")}function Kf(l,u){var v,y,T=d.ajaxSettings.flatOptions||{};for(v in u)u[v]!==void 0&&((T[v]?l:y||(y={}))[v]=u[v]);return y&&d.extend(!0,l,y),l}function c1(l,u,v){for(var y,T,b,C,F=l.contents,k=l.dataTypes;k[0]==="*";)k.shift(),y===void 0&&(y=l.mimeType||u.getResponseHeader("Content-Type"));if(y){for(T in F)if(F[T]&&F[T].test(y)){k.unshift(T);break}}if(k[0]in v)b=k[0];else{for(T in v){if(!k[0]||l.converters[T+" "+k[0]]){b=T;break}C||(C=T)}b=b||C}if(b)return b!==k[0]&&k.unshift(b),v[b]}function u1(l,u,v,y){var T,b,C,F,k,G={},ne=l.dataTypes.slice();if(ne[1])for(C in l.converters)G[C.toLowerCase()]=l.converters[C];for(b=ne.shift();b;)if(l.responseFields[b]&&(v[l.responseFields[b]]=u),!k&&y&&l.dataFilter&&(u=l.dataFilter(u,l.dataType)),k=b,b=ne.shift(),b){if(b==="*")b=k;else if(k!=="*"&&k!==b){if(C=G[k+" "+b]||G["* "+b],!C){for(T in G)if(F=T.split(" "),F[1]===b&&(C=G[k+" "+F[0]]||G["* "+F[0]],C)){C===!0?C=G[T]:G[T]!==!0&&(b=F[0],ne.unshift(F[1]));break}}if(C!==!0)if(C&&l.throws)u=C(u);else try{u=C(u)}catch(le){return{state:"parsererror",error:C?le:"No conversion from "+k+" to "+b}}}}return{state:"success",data:u}}d.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ba.href,type:"GET",isLocal:o1.test(ba.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qm,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":d.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(l,u){return u?Kf(Kf(l,d.ajaxSettings),u):Kf(d.ajaxSettings,l)},ajaxPrefilter:Zm(Km),ajaxTransport:Zm(qf),ajax:function(l,u){typeof l=="object"&&(u=l,l=void 0),u=u||{};var v,y,T,b,C,F,k,G,ne,le,Y=d.ajaxSetup({},u),_e=Y.context||Y,Ze=Y.context&&(_e.nodeType||_e.jquery)?d(_e):d.event,Et=d.Deferred(),at=d.Callbacks("once memory"),Cn=Y.statusCode||{},mn={},Yi={},Ki="canceled",yt={readyState:0,getResponseHeader:function(Tt){var sn;if(k){if(!b)for(b={};sn=s1.exec(T);)b[sn[1].toLowerCase()+" "]=(b[sn[1].toLowerCase()+" "]||[]).concat(sn[2]);sn=b[Tt.toLowerCase()+" "]}return sn==null?null:sn.join(", ")},getAllResponseHeaders:function(){return k?T:null},setRequestHeader:function(Tt,sn){return k==null&&(Tt=Yi[Tt.toLowerCase()]=Yi[Tt.toLowerCase()]||Tt,mn[Tt]=sn),this},overrideMimeType:function(Tt){return k==null&&(Y.mimeType=Tt),this},statusCode:function(Tt){var sn;if(Tt)if(k)yt.always(Tt[yt.status]);else for(sn in Tt)Cn[sn]=[Cn[sn],Tt[sn]];return this},abort:function(Tt){var sn=Tt||Ki;return v&&v.abort(sn),Ps(0,sn),this}};if(Et.promise(yt),Y.url=((l||Y.url||ba.href)+"").replace(l1,ba.protocol+"//"),Y.type=u.method||u.type||Y.method||Y.type,Y.dataTypes=(Y.dataType||"*").toLowerCase().match($)||[""],Y.crossDomain==null){F=g.createElement("a");try{F.href=Y.url,F.href=F.href,Y.crossDomain=Yf.protocol+"//"+Yf.host!=F.protocol+"//"+F.host}catch{Y.crossDomain=!0}}if(Y.data&&Y.processData&&typeof Y.data!="string"&&(Y.data=d.param(Y.data,Y.traditional)),Jm(Km,Y,u,yt),k)return yt;G=d.event&&Y.global,G&&d.active++===0&&d.event.trigger("ajaxStart"),Y.type=Y.type.toUpperCase(),Y.hasContent=!a1.test(Y.type),y=Y.url.replace(i1,""),Y.hasContent?Y.data&&Y.processData&&(Y.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(Y.data=Y.data.replace(n1,"+")):(le=Y.url.slice(y.length),Y.data&&(Y.processData||typeof Y.data=="string")&&(y+=($f.test(y)?"&":"?")+Y.data,delete Y.data),Y.cache===!1&&(y=y.replace(r1,"$1"),le=($f.test(y)?"&":"?")+"_="+$m.guid+++le),Y.url=y+le),Y.ifModified&&(d.lastModified[y]&&yt.setRequestHeader("If-Modified-Since",d.lastModified[y]),d.etag[y]&&yt.setRequestHeader("If-None-Match",d.etag[y])),(Y.data&&Y.hasContent&&Y.contentType!==!1||u.contentType)&&yt.setRequestHeader("Content-Type",Y.contentType),yt.setRequestHeader("Accept",Y.dataTypes[0]&&Y.accepts[Y.dataTypes[0]]?Y.accepts[Y.dataTypes[0]]+(Y.dataTypes[0]!=="*"?", "+Qm+"; q=0.01":""):Y.accepts["*"]);for(ne in Y.headers)yt.setRequestHeader(ne,Y.headers[ne]);if(Y.beforeSend&&(Y.beforeSend.call(_e,yt,Y)===!1||k))return yt.abort();if(Ki="abort",at.add(Y.complete),yt.done(Y.success),yt.fail(Y.error),v=Jm(qf,Y,u,yt),!v)Ps(-1,"No Transport");else{if(yt.readyState=1,G&&Ze.trigger("ajaxSend",[yt,Y]),k)return yt;Y.async&&Y.timeout>0&&(C=e.setTimeout(function(){yt.abort("timeout")},Y.timeout));try{k=!1,v.send(mn,Ps)}catch(Tt){if(k)throw Tt;Ps(-1,Tt)}}function Ps(Tt,sn,Aa,Zf){var Qi,Ra,Zi,Vr,Gr,_i=sn;k||(k=!0,C&&e.clearTimeout(C),v=void 0,T=Zf||"",yt.readyState=Tt>0?4:0,Qi=Tt>=200&&Tt<300||Tt===304,Aa&&(Vr=c1(Y,yt,Aa)),!Qi&&d.inArray("script",Y.dataTypes)>-1&&d.inArray("json",Y.dataTypes)<0&&(Y.converters["text script"]=function(){}),Vr=u1(Y,Vr,yt,Qi),Qi?(Y.ifModified&&(Gr=yt.getResponseHeader("Last-Modified"),Gr&&(d.lastModified[y]=Gr),Gr=yt.getResponseHeader("etag"),Gr&&(d.etag[y]=Gr)),Tt===204||Y.type==="HEAD"?_i="nocontent":Tt===304?_i="notmodified":(_i=Vr.state,Ra=Vr.data,Zi=Vr.error,Qi=!Zi)):(Zi=_i,(Tt||!_i)&&(_i="error",Tt<0&&(Tt=0))),yt.status=Tt,yt.statusText=(sn||_i)+"",Qi?Et.resolveWith(_e,[Ra,_i,yt]):Et.rejectWith(_e,[yt,_i,Zi]),yt.statusCode(Cn),Cn=void 0,G&&Ze.trigger(Qi?"ajaxSuccess":"ajaxError",[yt,Y,Qi?Ra:Zi]),at.fireWith(_e,[yt,_i]),G&&(Ze.trigger("ajaxComplete",[yt,Y]),--d.active||d.event.trigger("ajaxStop")))}return yt},getJSON:function(l,u,v){return d.get(l,u,v,"json")},getScript:function(l,u){return d.get(l,void 0,u,"script")}}),d.each(["get","post"],function(l,u){d[u]=function(v,y,T,b){return S(y)&&(b=b||T,T=y,y=void 0),d.ajax(d.extend({url:v,type:u,dataType:b,data:y,success:T},d.isPlainObject(v)&&v))}}),d.ajaxPrefilter(function(l){var u;for(u in l.headers)u.toLowerCase()==="content-type"&&(l.contentType=l.headers[u]||"")}),d._evalUrl=function(l,u,v){return d.ajax({url:l,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(y){d.globalEval(y,u,v)}})},d.fn.extend({wrapAll:function(l){var u;return this[0]&&(S(l)&&(l=l.call(this[0])),u=d(l,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&u.insertBefore(this[0]),u.map(function(){for(var v=this;v.firstElementChild;)v=v.firstElementChild;return v}).append(this)),this},wrapInner:function(l){return S(l)?this.each(function(u){d(this).wrapInner(l.call(this,u))}):this.each(function(){var u=d(this),v=u.contents();v.length?v.wrapAll(l):u.append(l)})},wrap:function(l){var u=S(l);return this.each(function(v){d(this).wrapAll(u?l.call(this,v):l)})},unwrap:function(l){return this.parent(l).not("body").each(function(){d(this).replaceWith(this.childNodes)}),this}}),d.expr.pseudos.hidden=function(l){return!d.expr.pseudos.visible(l)},d.expr.pseudos.visible=function(l){return!!(l.offsetWidth||l.offsetHeight||l.getClientRects().length)},d.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var f1={0:200,1223:204},Ca=d.ajaxSettings.xhr();E.cors=!!Ca&&"withCredentials"in Ca,E.ajax=Ca=!!Ca,d.ajaxTransport(function(l){var u,v;if(E.cors||Ca&&!l.crossDomain)return{send:function(y,T){var b,C=l.xhr();if(C.open(l.type,l.url,l.async,l.username,l.password),l.xhrFields)for(b in l.xhrFields)C[b]=l.xhrFields[b];l.mimeType&&C.overrideMimeType&&C.overrideMimeType(l.mimeType),!l.crossDomain&&!y["X-Requested-With"]&&(y["X-Requested-With"]="XMLHttpRequest");for(b in y)C.setRequestHeader(b,y[b]);u=function(F){return function(){u&&(u=v=C.onload=C.onerror=C.onabort=C.ontimeout=C.onreadystatechange=null,F==="abort"?C.abort():F==="error"?typeof C.status!="number"?T(0,"error"):T(C.status,C.statusText):T(f1[C.status]||C.status,C.statusText,(C.responseType||"text")!=="text"||typeof C.responseText!="string"?{binary:C.response}:{text:C.responseText},C.getAllResponseHeaders()))}},C.onload=u(),v=C.onerror=C.ontimeout=u("error"),C.onabort!==void 0?C.onabort=v:C.onreadystatechange=function(){C.readyState===4&&e.setTimeout(function(){u&&v()})},u=u("abort");try{C.send(l.hasContent&&l.data||null)}catch(F){if(u)throw F}},abort:function(){u&&u()}}}),d.ajaxPrefilter(function(l){l.crossDomain&&(l.contents.script=!1)}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(l){return d.globalEval(l),l}}}),d.ajaxPrefilter("script",function(l){l.cache===void 0&&(l.cache=!1),l.crossDomain&&(l.type="GET")}),d.ajaxTransport("script",function(l){if(l.crossDomain||l.scriptAttrs){var u,v;return{send:function(y,T){u=d("<script>").attr(l.scriptAttrs||{}).prop({charset:l.scriptCharset,src:l.url}).on("load error",v=function(b){u.remove(),v=null,b&&T(b.type==="error"?404:200,b.type)}),g.head.appendChild(u[0])},abort:function(){v&&v()}}}});var eg=[],Qf=/(=)\?(?=&|$)|\?\?/;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var l=eg.pop()||d.expando+"_"+$m.guid++;return this[l]=!0,l}}),d.ajaxPrefilter("json jsonp",function(l,u,v){var y,T,b,C=l.jsonp!==!1&&(Qf.test(l.url)?"url":typeof l.data=="string"&&(l.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Qf.test(l.data)&&"data");if(C||l.dataTypes[0]==="jsonp")return y=l.jsonpCallback=S(l.jsonpCallback)?l.jsonpCallback():l.jsonpCallback,C?l[C]=l[C].replace(Qf,"$1"+y):l.jsonp!==!1&&(l.url+=($f.test(l.url)?"&":"?")+l.jsonp+"="+y),l.converters["script json"]=function(){return b||d.error(y+" was not called"),b[0]},l.dataTypes[0]="json",T=e[y],e[y]=function(){b=arguments},v.always(function(){T===void 0?d(e).removeProp(y):e[y]=T,l[y]&&(l.jsonpCallback=u.jsonpCallback,eg.push(y)),b&&S(T)&&T(b[0]),b=T=void 0}),"script"}),E.createHTMLDocument=function(){var l=g.implementation.createHTMLDocument("").body;return l.innerHTML="<form></form><form></form>",l.childNodes.length===2}(),d.parseHTML=function(l,u,v){if(typeof l!="string")return[];typeof u=="boolean"&&(v=u,u=!1);var y,T,b;return u||(E.createHTMLDocument?(u=g.implementation.createHTMLDocument(""),y=u.createElement("base"),y.href=g.location.href,u.head.appendChild(y)):u=g),T=Ve.exec(l),b=!v&&[],T?[u.createElement(T[1])]:(T=Sn([l],u,b),b&&b.length&&d(b).remove(),d.merge([],T.childNodes))},d.fn.load=function(l,u,v){var y,T,b,C=this,F=l.indexOf(" ");return F>-1&&(y=As(l.slice(F)),l=l.slice(0,F)),S(u)?(v=u,u=void 0):u&&typeof u=="object"&&(T="POST"),C.length>0&&d.ajax({url:l,type:T||"GET",dataType:"html",data:u}).done(function(k){b=arguments,C.html(y?d("<div>").append(d.parseHTML(k)).find(y):k)}).always(v&&function(k,G){C.each(function(){v.apply(this,b||[k.responseText,G,k])})}),this},d.expr.pseudos.animated=function(l){return d.grep(d.timers,function(u){return l===u.elem}).length},d.offset={setOffset:function(l,u,v){var y,T,b,C,F,k,G,ne=d.css(l,"position"),le=d(l),Y={};ne==="static"&&(l.style.position="relative"),F=le.offset(),b=d.css(l,"top"),k=d.css(l,"left"),G=(ne==="absolute"||ne==="fixed")&&(b+k).indexOf("auto")>-1,G?(y=le.position(),C=y.top,T=y.left):(C=parseFloat(b)||0,T=parseFloat(k)||0),S(u)&&(u=u.call(l,v,d.extend({},F))),u.top!=null&&(Y.top=u.top-F.top+C),u.left!=null&&(Y.left=u.left-F.left+T),"using"in u?u.using.call(l,Y):le.css(Y)}},d.fn.extend({offset:function(l){if(arguments.length)return l===void 0?this:this.each(function(T){d.offset.setOffset(this,l,T)});var u,v,y=this[0];if(y)return y.getClientRects().length?(u=y.getBoundingClientRect(),v=y.ownerDocument.defaultView,{top:u.top+v.pageYOffset,left:u.left+v.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var l,u,v,y=this[0],T={top:0,left:0};if(d.css(y,"position")==="fixed")u=y.getBoundingClientRect();else{for(u=this.offset(),v=y.ownerDocument,l=y.offsetParent||v.documentElement;l&&(l===v.body||l===v.documentElement)&&d.css(l,"position")==="static";)l=l.parentNode;l&&l!==y&&l.nodeType===1&&(T=d(l).offset(),T.top+=d.css(l,"borderTopWidth",!0),T.left+=d.css(l,"borderLeftWidth",!0))}return{top:u.top-T.top-d.css(y,"marginTop",!0),left:u.left-T.left-d.css(y,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var l=this.offsetParent;l&&d.css(l,"position")==="static";)l=l.offsetParent;return l||Qe})}}),d.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(l,u){var v=u==="pageYOffset";d.fn[l]=function(y){return Ct(this,function(T,b,C){var F;if(x(T)?F=T:T.nodeType===9&&(F=T.defaultView),C===void 0)return F?F[u]:T[b];F?F.scrollTo(v?F.pageXOffset:C,v?C:F.pageYOffset):T[b]=C},l,y,arguments.length)}}),d.each(["top","left"],function(l,u){d.cssHooks[u]=nt(E.pixelPosition,function(v,y){if(y)return y=Ye(v,u),K.test(y)?d(v).position()[u]+"px":y})}),d.each({Height:"height",Width:"width"},function(l,u){d.each({padding:"inner"+l,content:u,"":"outer"+l},function(v,y){d.fn[y]=function(T,b){var C=arguments.length&&(v||typeof T!="boolean"),F=v||(T===!0||b===!0?"margin":"border");return Ct(this,function(k,G,ne){var le;return x(k)?y.indexOf("outer")===0?k["inner"+l]:k.document.documentElement["client"+l]:k.nodeType===9?(le=k.documentElement,Math.max(k.body["scroll"+l],le["scroll"+l],k.body["offset"+l],le["offset"+l],le["client"+l])):ne===void 0?d.css(k,G,F):d.style(k,G,ne,F)},u,C?T:void 0,C)}})}),d.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(l,u){d.fn[u]=function(v){return this.on(u,v)}}),d.fn.extend({bind:function(l,u,v){return this.on(l,null,u,v)},unbind:function(l,u){return this.off(l,null,u)},delegate:function(l,u,v,y){return this.on(u,l,v,y)},undelegate:function(l,u,v){return arguments.length===1?this.off(l,"**"):this.off(u,l||"**",v)},hover:function(l,u){return this.on("mouseenter",l).on("mouseleave",u||l)}}),d.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(l,u){d.fn[u]=function(v,y){return arguments.length>0?this.on(u,null,v,y):this.trigger(u)}});var d1=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;d.proxy=function(l,u){var v,y,T;if(typeof u=="string"&&(v=l[u],u=l,l=v),!!S(l))return y=s.call(arguments,2),T=function(){return l.apply(u||this,y.concat(s.call(arguments)))},T.guid=l.guid=l.guid||d.guid++,T},d.holdReady=function(l){l?d.readyWait++:d.ready(!0)},d.isArray=Array.isArray,d.parseJSON=JSON.parse,d.nodeName=L,d.isFunction=S,d.isWindow=x,d.camelCase=fe,d.type=R,d.now=Date.now,d.isNumeric=function(l){var u=d.type(l);return(u==="number"||u==="string")&&!isNaN(l-parseFloat(l))},d.trim=function(l){return l==null?"":(l+"").replace(d1,"$1")};var h1=e.jQuery,p1=e.$;return d.noConflict=function(l){return e.$===d&&(e.$=p1),l&&e.jQuery===d&&(e.jQuery=h1),d},typeof n>"u"&&(e.jQuery=e.$=d),d})})(Mx);var wx=Mx.exports;const Nt=cy(wx);Nt(document).on("contextmenu",function(t){t.preventDefault()});const qM=()=>ee.jsx("div",{className:"load-container",children:ee.jsxs("div",{className:"hexagon",children:[ee.jsxs("div",{className:"hexagon__group",children:[ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"})]}),ee.jsxs("div",{className:"hexagon__group",children:[ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"})]}),ee.jsxs("div",{className:"hexagon__group",children:[ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"})]}),ee.jsxs("div",{className:"hexagon__group",children:[ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"})]}),ee.jsxs("div",{className:"hexagon__group",children:[ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"})]}),ee.jsxs("div",{className:"hexagon__group",children:[ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"}),ee.jsx("div",{className:"hexagon__sector"})]})]})}),YM=()=>{const t=Nt(".nav a").position(),e=Nt(".nav a").parent("li").width();Nt(".nav .slide1").css({left:t.left,width:e});const n=new IntersectionObserver(i=>{i.forEach(r=>{if(r.isIntersecting&&window.innerWidth>800){const s=r.target.classList[0],o=Nt(`#${s.charAt(0)}`).position(),a=Nt(`#${s.charAt(0)}`).parent().width();Nt(".nav .slide1").css({opacity:1,left:o.left,width:a})}})},{threshold:.5});["home","abt","exp","pro","con"].forEach(i=>n.observe(document.querySelector(`.${i}-container`))),Nt(".nav a").on("click",function(){const i=Nt(this).position(),r=Nt(this).parent().width();Nt(".nav .slide1").css({opacity:1,left:+i.left,width:r}),n.disconnect(),setTimeout(()=>{["home","abt","exp","pro","con"].forEach(s=>n.observe(document.querySelector(`.${s}-container`)))},400)}),Nt(".nav a").on("mouseover",function(){const i=Nt(this).position(),r=Nt(this).parent().width();Nt(".nav .slide2").css({opacity:1,left:+i.left,width:r})}),Nt(".nav a").on("mouseout",function(){Nt(".nav .slide2").css({opacity:0})})},KM=()=>{let t;Nt(document).on("click","#nav-icon",function(){Nt(this).toggleClass("open"),t=!t,t?(Nt(".nav").css({display:"block",paddingTop:"15px"}),Nt("#nav-icon").css({paddingBottom:"20px"}),Nt(".nav li").css({display:"block",textAlign:"center"})):(Nt(".nav").css({padding:"15px 30px"}),Nt("#nav-icon").css({paddingBottom:"0"}),Nt(".nav li").css({display:"none"}))})},za=()=>{Nt("#nav-icon").trigger("click")};var on={},Sm={},kl={},Ol={},Tx="Expected a function",pv=NaN,QM="[object Symbol]",ZM=/^\s+|\s+$/g,JM=/^[-+]0x[0-9a-f]+$/i,ew=/^0b[01]+$/i,tw=/^0o[0-7]+$/i,nw=parseInt,iw=typeof $a=="object"&&$a&&$a.Object===Object&&$a,rw=typeof self=="object"&&self&&self.Object===Object&&self,sw=iw||rw||Function("return this")(),ow=Object.prototype,aw=ow.toString,lw=Math.max,cw=Math.min,Ld=function(){return sw.Date.now()};function uw(t,e,n){var i,r,s,o,a,c,f=0,h=!1,p=!1,m=!0;if(typeof t!="function")throw new TypeError(Tx);e=mv(e)||0,Ou(n)&&(h=!!n.leading,p="maxWait"in n,s=p?lw(mv(n.maxWait)||0,e):s,m="trailing"in n?!!n.trailing:m);function _(N){var d=i,V=r;return i=r=void 0,f=N,o=t.apply(V,d),o}function E(N){return f=N,a=setTimeout(g,e),h?_(N):o}function S(N){var d=N-c,V=N-f,L=e-d;return p?cw(L,s-V):L}function x(N){var d=N-c,V=N-f;return c===void 0||d>=e||d<0||p&&V>=s}function g(){var N=Ld();if(x(N))return w(N);a=setTimeout(g,S(N))}function w(N){return a=void 0,m&&i?_(N):(i=r=void 0,o)}function M(){a!==void 0&&clearTimeout(a),f=0,i=c=r=a=void 0}function R(){return a===void 0?o:w(Ld())}function U(){var N=Ld(),d=x(N);if(i=arguments,r=this,c=N,d){if(a===void 0)return E(c);if(p)return a=setTimeout(g,e),_(c)}return a===void 0&&(a=setTimeout(g,e)),o}return U.cancel=M,U.flush=R,U}function fw(t,e,n){var i=!0,r=!0;if(typeof t!="function")throw new TypeError(Tx);return Ou(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),uw(t,e,{leading:i,maxWait:e,trailing:r})}function Ou(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function dw(t){return!!t&&typeof t=="object"}function hw(t){return typeof t=="symbol"||dw(t)&&aw.call(t)==QM}function mv(t){if(typeof t=="number")return t;if(hw(t))return pv;if(Ou(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Ou(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(ZM,"");var n=ew.test(t);return n||tw.test(t)?nw(t.slice(2),n?2:8):JM.test(t)?pv:+t}var pw=fw,Ul={};Object.defineProperty(Ul,"__esModule",{value:!0});Ul.addPassiveEventListener=function(e,n,i){var r=i.name;r||(r=n,console.warn("Listener must be a named function.")),au.has(n)||au.set(n,new Set);var s=au.get(n);if(!s.has(r)){var o=function(){var a=!1;try{var c=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,c)}catch{}return a}();e.addEventListener(n,i,o?{passive:!0}:!1),s.add(r)}};Ul.removePassiveEventListener=function(e,n,i){e.removeEventListener(n,i),au.get(n).delete(i.name||n)};var au=new Map;Object.defineProperty(Ol,"__esModule",{value:!0});var mw=pw,gw=yw(mw),vw=Ul;function yw(t){return t&&t.__esModule?t:{default:t}}var _w=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,gw.default)(e,n)},Jt={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,n){if(e){var i=_w(function(r){Jt.scrollHandler(e)},n);Jt.scrollSpyContainers.push(e),(0,vw.addPassiveEventListener)(e,"scroll",i)}},isMounted:function(e){return Jt.scrollSpyContainers.indexOf(e)!==-1},currentPositionX:function(e){if(e===document){var n=window.pageYOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft}else return e.scrollLeft},currentPositionY:function(e){if(e===document){var n=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop}else return e.scrollTop},scrollHandler:function(e){var n=Jt.scrollSpyContainers[Jt.scrollSpyContainers.indexOf(e)].spyCallbacks||[];n.forEach(function(i){return i(Jt.currentPositionX(e),Jt.currentPositionY(e))})},addStateHandler:function(e){Jt.spySetState.push(e)},addSpyHandler:function(e,n){var i=Jt.scrollSpyContainers[Jt.scrollSpyContainers.indexOf(n)];i.spyCallbacks||(i.spyCallbacks=[]),i.spyCallbacks.push(e),e(Jt.currentPositionX(n),Jt.currentPositionY(n))},updateStates:function(){Jt.spySetState.forEach(function(e){return e()})},unmount:function(e,n){Jt.scrollSpyContainers.forEach(function(i){return i.spyCallbacks&&i.spyCallbacks.length&&i.spyCallbacks.indexOf(n)>-1&&i.spyCallbacks.splice(i.spyCallbacks.indexOf(n),1)}),Jt.spySetState&&Jt.spySetState.length&&Jt.spySetState.indexOf(e)>-1&&Jt.spySetState.splice(Jt.spySetState.indexOf(e),1),document.removeEventListener("scroll",Jt.scrollHandler)},update:function(){return Jt.scrollSpyContainers.forEach(function(e){return Jt.scrollHandler(e)})}};Ol.default=Jt;var ga={},Fl={};Object.defineProperty(Fl,"__esModule",{value:!0});var xw=function(e,n){var i=e.indexOf("#")===0?e.substring(1):e,r=i?"#"+i:"",s=window&&window.location,o=r?s.pathname+s.search+r:s.pathname+s.search;n?history.pushState(history.state,"",o):history.replaceState(history.state,"",o)},Sw=function(){return window.location.hash.replace(/^#/,"")},Ew=function(e){return function(n){return e.contains?e!=n&&e.contains(n):!!(e.compareDocumentPosition(n)&16)}},Mw=function(e){return getComputedStyle(e).position!=="static"},Dd=function(e,n){for(var i=e.offsetTop,r=e.offsetParent;r&&!n(r);)i+=r.offsetTop,r=r.offsetParent;return{offsetTop:i,offsetParent:r}},ww=function(e,n,i){if(i)return e===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(e).position!=="static"?n.offsetLeft:n.offsetLeft-e.offsetLeft;if(e===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(Mw(e)){if(n.offsetParent!==e){var r=function(h){return h===e||h===document},s=Dd(n,r),o=s.offsetTop,a=s.offsetParent;if(a!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return o}return n.offsetTop}if(n.offsetParent===e.offsetParent)return n.offsetTop-e.offsetTop;var c=function(h){return h===document};return Dd(n,c).offsetTop-Dd(e,c).offsetTop};Fl.default={updateHash:xw,getHash:Sw,filterElementInContainer:Ew,scrollOffset:ww};var af={},Em={};Object.defineProperty(Em,"__esModule",{value:!0});Em.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}};var Mm={};Object.defineProperty(Mm,"__esModule",{value:!0});var Tw=Ul,bw=["mousedown","mousewheel","touchmove","keydown"];Mm.default={subscribe:function(e){return typeof document<"u"&&bw.forEach(function(n){return(0,Tw.addPassiveEventListener)(document,n,e)})}};var zl={};Object.defineProperty(zl,"__esModule",{value:!0});var fp={registered:{},scrollEvent:{register:function(e,n){fp.registered[e]=n},remove:function(e){fp.registered[e]=null}}};zl.default=fp;Object.defineProperty(af,"__esModule",{value:!0});var Cw=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Aw=Fl;lf(Aw);var Rw=Em,gv=lf(Rw),Pw=Mm,Lw=lf(Pw),Dw=zl,rr=lf(Dw);function lf(t){return t&&t.__esModule?t:{default:t}}var bx=function(e){return gv.default[e.smooth]||gv.default.defaultEasing},Nw=function(e){return typeof e=="function"?e:function(){return e}},Iw=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},dp=function(){return Iw()||function(t,e,n){window.setTimeout(t,n||1e3/60,new Date().getTime())}}(),Cx=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},Ax=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var i=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return i?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft},Rx=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var i=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return i?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop},kw=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var i=document.body,r=document.documentElement;return Math.max(i.scrollWidth,i.offsetWidth,r.clientWidth,r.scrollWidth,r.offsetWidth)},Ow=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var i=document.body,r=document.documentElement;return Math.max(i.scrollHeight,i.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight)},Uw=function t(e,n,i){var r=n.data;if(!n.ignoreCancelEvents&&r.cancel){rr.default.registered.end&&rr.default.registered.end(r.to,r.target,r.currentPositionY);return}if(r.delta=Math.round(r.targetPosition-r.startPosition),r.start===null&&(r.start=i),r.progress=i-r.start,r.percent=r.progress>=r.duration?1:e(r.progress/r.duration),r.currentPosition=r.startPosition+Math.ceil(r.delta*r.percent),r.containerElement&&r.containerElement!==document&&r.containerElement!==document.body?n.horizontal?r.containerElement.scrollLeft=r.currentPosition:r.containerElement.scrollTop=r.currentPosition:n.horizontal?window.scrollTo(r.currentPosition,0):window.scrollTo(0,r.currentPosition),r.percent<1){var s=t.bind(null,e,n);dp.call(window,s);return}rr.default.registered.end&&rr.default.registered.end(r.to,r.target,r.currentPosition)},wm=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},Bl=function(e,n,i,r){n.data=n.data||Cx(),window.clearTimeout(n.data.delayTimeout);var s=function(){n.data.cancel=!0};if(Lw.default.subscribe(s),wm(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?Ax(n):Rx(n),n.data.targetPosition=n.absolute?e:e+n.data.startPosition,n.data.startPosition===n.data.targetPosition){rr.default.registered.end&&rr.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=Nw(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=i,n.data.target=r;var o=bx(n),a=Uw.bind(null,o,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){rr.default.registered.begin&&rr.default.registered.begin(n.data.to,n.data.target),dp.call(window,a)},n.delay);return}rr.default.registered.begin&&rr.default.registered.begin(n.data.to,n.data.target),dp.call(window,a)},cf=function(e){return e=Cw({},e),e.data=e.data||Cx(),e.absolute=!0,e},Fw=function(e){Bl(0,cf(e))},zw=function(e,n){Bl(e,cf(n))},Bw=function(e){e=cf(e),wm(e),Bl(e.horizontal?kw(e):Ow(e),e)},Hw=function(e,n){n=cf(n),wm(n);var i=n.horizontal?Ax(n):Rx(n);Bl(e+i,n)};af.default={animateTopScroll:Bl,getAnimationType:bx,scrollToTop:Fw,scrollToBottom:Bw,scrollTo:zw,scrollMore:Hw};Object.defineProperty(ga,"__esModule",{value:!0});var Vw=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Gw=Fl,Ww=Tm(Gw),jw=af,$w=Tm(jw),Xw=zl,yc=Tm(Xw);function Tm(t){return t&&t.__esModule?t:{default:t}}var _c={},vv=void 0;ga.default={unmount:function(){_c={}},register:function(e,n){_c[e]=n},unregister:function(e){delete _c[e]},get:function(e){return _c[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return vv=e},getActiveLink:function(){return vv},scrollTo:function(e,n){var i=this.get(e);if(!i){console.warn("target Element not found");return}n=Vw({},n,{absolute:!1});var r=n.containerId,s=n.container,o=void 0;r?o=document.getElementById(r):s&&s.nodeType?o=s:o=document,n.absolute=!0;var a=n.horizontal,c=Ww.default.scrollOffset(o,i,a)+(n.offset||0);if(!n.smooth){yc.default.registered.begin&&yc.default.registered.begin(e,i),o===document?n.horizontal?window.scrollTo(c,0):window.scrollTo(0,c):o.scrollTop=c,yc.default.registered.end&&yc.default.registered.end(e,i);return}$w.default.animateTopScroll(c,n,e,i)}};var Px={exports:{}},qw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Yw=qw,Kw=Yw;function Lx(){}function Dx(){}Dx.resetWarningCache=Lx;var Qw=function(){function t(i,r,s,o,a,c){if(c!==Kw){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Dx,resetWarningCache:Lx};return n.PropTypes=n,n};Px.exports=Qw();var uf=Px.exports,ff={};Object.defineProperty(ff,"__esModule",{value:!0});var Zw=Fl,Nd=Jw(Zw);function Jw(t){return t&&t.__esModule?t:{default:t}}var eT={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,n){this.containers[e]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,n=this.getHash();n?window.setTimeout(function(){e.scrollTo(n,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,n){var i=this.scroller,r=i.get(e);if(r&&(n||e!==i.getActiveLink())){var s=this.containers[e]||document;i.scrollTo(e,{container:s})}},getHash:function(){return Nd.default.getHash()},changeHash:function(e,n){this.isInitialized()&&Nd.default.getHash()!==e&&Nd.default.updateHash(e,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};ff.default=eT;Object.defineProperty(kl,"__esModule",{value:!0});var xc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},tT=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),nT=Mt,yv=Hl(nT),iT=Ol,Sc=Hl(iT),rT=ga,sT=Hl(rT),oT=uf,Yt=Hl(oT),aT=ff,$r=Hl(aT);function Hl(t){return t&&t.__esModule?t:{default:t}}function lT(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function cT(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function uT(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var _v={to:Yt.default.string.isRequired,containerId:Yt.default.string,container:Yt.default.object,activeClass:Yt.default.string,activeStyle:Yt.default.object,spy:Yt.default.bool,horizontal:Yt.default.bool,smooth:Yt.default.oneOfType([Yt.default.bool,Yt.default.string]),offset:Yt.default.number,delay:Yt.default.number,isDynamic:Yt.default.bool,onClick:Yt.default.func,duration:Yt.default.oneOfType([Yt.default.number,Yt.default.func]),absolute:Yt.default.bool,onSetActive:Yt.default.func,onSetInactive:Yt.default.func,ignoreCancelEvents:Yt.default.bool,hashSpy:Yt.default.bool,saveHashHistory:Yt.default.bool,spyThrottle:Yt.default.number};kl.default=function(t,e){var n=e||sT.default,i=function(s){uT(o,s);function o(a){lT(this,o);var c=cT(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,a));return r.call(c),c.state={active:!1},c}return tT(o,[{key:"getScrollSpyContainer",value:function(){var c=this.props.containerId,f=this.props.container;return c&&!f?document.getElementById(c):f&&f.nodeType?f:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var c=this.getScrollSpyContainer();Sc.default.isMounted(c)||Sc.default.mount(c,this.props.spyThrottle),this.props.hashSpy&&($r.default.isMounted()||$r.default.mount(n),$r.default.mapContainer(this.props.to,c)),Sc.default.addSpyHandler(this.spyHandler,c),this.setState({container:c})}}},{key:"componentWillUnmount",value:function(){Sc.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var c="";this.state&&this.state.active?c=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():c=this.props.className;var f={};this.state&&this.state.active?f=xc({},this.props.style,this.props.activeStyle):f=xc({},this.props.style);var h=xc({},this.props);for(var p in _v)h.hasOwnProperty(p)&&delete h[p];return h.className=c,h.style=f,h.onClick=this.handleClick,yv.default.createElement(t,h)}}]),o}(yv.default.PureComponent),r=function(){var o=this;this.scrollTo=function(a,c){n.scrollTo(a,xc({},o.state,c))},this.handleClick=function(a){o.props.onClick&&o.props.onClick(a),a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),o.scrollTo(o.props.to,o.props)},this.spyHandler=function(a,c){var f=o.getScrollSpyContainer();if(!($r.default.isMounted()&&!$r.default.isInitialized())){var h=o.props.horizontal,p=o.props.to,m=null,_=void 0,E=void 0;if(h){var S=0,x=0,g=0;if(f.getBoundingClientRect){var w=f.getBoundingClientRect();g=w.left}if(!m||o.props.isDynamic){if(m=n.get(p),!m)return;var M=m.getBoundingClientRect();S=M.left-g+a,x=S+M.width}var R=a-o.props.offset;_=R>=Math.floor(S)&&R<Math.floor(x),E=R<Math.floor(S)||R>=Math.floor(x)}else{var U=0,N=0,d=0;if(f.getBoundingClientRect){var V=f.getBoundingClientRect();d=V.top}if(!m||o.props.isDynamic){if(m=n.get(p),!m)return;var L=m.getBoundingClientRect();U=L.top-d+c,N=U+L.height}var A=c-o.props.offset;_=A>=Math.floor(U)&&A<Math.floor(N),E=A<Math.floor(U)||A>=Math.floor(N)}var X=n.getActiveLink();if(E){if(p===X&&n.setActiveLink(void 0),o.props.hashSpy&&$r.default.getHash()===p){var ce=o.props.saveHashHistory,z=ce===void 0?!1:ce;$r.default.changeHash("",z)}o.props.spy&&o.state.active&&(o.setState({active:!1}),o.props.onSetInactive&&o.props.onSetInactive(p,m))}if(_&&(X!==p||o.state.active===!1)){n.setActiveLink(p);var ue=o.props.saveHashHistory,he=ue===void 0?!1:ue;o.props.hashSpy&&$r.default.changeHash(p,he),o.props.spy&&(o.setState({active:!0}),o.props.onSetActive&&o.props.onSetActive(p,m))}}}};return i.propTypes=_v,i.defaultProps={offset:0},i};Object.defineProperty(Sm,"__esModule",{value:!0});var fT=Mt,xv=Nx(fT),dT=kl,hT=Nx(dT);function Nx(t){return t&&t.__esModule?t:{default:t}}function pT(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Sv(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function mT(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var gT=function(t){mT(e,t);function e(){var n,i,r,s;pT(this,e);for(var o=arguments.length,a=Array(o),c=0;c<o;c++)a[c]=arguments[c];return s=(i=(r=Sv(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(a))),r),r.render=function(){return xv.default.createElement("a",r.props,r.props.children)},i),Sv(r,s)}return e}(xv.default.Component);Sm.default=(0,hT.default)(gT);var bm={};Object.defineProperty(bm,"__esModule",{value:!0});var vT=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),yT=Mt,Ev=Ix(yT),_T=kl,xT=Ix(_T);function Ix(t){return t&&t.__esModule?t:{default:t}}function ST(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ET(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function MT(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var wT=function(t){MT(e,t);function e(){return ST(this,e),ET(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return vT(e,[{key:"render",value:function(){return Ev.default.createElement("button",this.props,this.props.children)}}]),e}(Ev.default.Component);bm.default=(0,xT.default)(wT);var Cm={},df={};Object.defineProperty(df,"__esModule",{value:!0});var TT=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},bT=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),CT=Mt,Mv=hf(CT),AT=Ex;hf(AT);var RT=ga,wv=hf(RT),PT=uf,Tv=hf(PT);function hf(t){return t&&t.__esModule?t:{default:t}}function LT(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function DT(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function NT(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}df.default=function(t){var e=function(n){NT(i,n);function i(r){LT(this,i);var s=DT(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return s.childBindings={domNode:null},s}return bT(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(s){this.props.name!==s.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;wv.default.unregister(this.props.name)}},{key:"registerElems",value:function(s){wv.default.register(s,this.childBindings.domNode)}},{key:"render",value:function(){return Mv.default.createElement(t,TT({},this.props,{parentBindings:this.childBindings}))}}]),i}(Mv.default.Component);return e.propTypes={name:Tv.default.string,id:Tv.default.string},e};Object.defineProperty(Cm,"__esModule",{value:!0});var bv=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},IT=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),kT=Mt,Cv=Am(kT),OT=df,UT=Am(OT),FT=uf,Av=Am(FT);function Am(t){return t&&t.__esModule?t:{default:t}}function zT(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function BT(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function HT(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var kx=function(t){HT(e,t);function e(){return zT(this,e),BT(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return IT(e,[{key:"render",value:function(){var i=this,r=bv({},this.props);return delete r.name,r.parentBindings&&delete r.parentBindings,Cv.default.createElement("div",bv({},r,{ref:function(o){i.props.parentBindings.domNode=o}}),this.props.children)}}]),e}(Cv.default.Component);kx.propTypes={name:Av.default.string,id:Av.default.string};Cm.default=(0,UT.default)(kx);var Id=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Rv=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function Pv(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Lv(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Dv(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Ec=Mt,Ds=Ol,kd=ga,en=uf,Xr=ff,Nv={to:en.string.isRequired,containerId:en.string,container:en.object,activeClass:en.string,spy:en.bool,smooth:en.oneOfType([en.bool,en.string]),offset:en.number,delay:en.number,isDynamic:en.bool,onClick:en.func,duration:en.oneOfType([en.number,en.func]),absolute:en.bool,onSetActive:en.func,onSetInactive:en.func,ignoreCancelEvents:en.bool,hashSpy:en.bool,spyThrottle:en.number},VT={Scroll:function(e,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var i=n||kd,r=function(o){Dv(a,o);function a(c){Pv(this,a);var f=Lv(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,c));return s.call(f),f.state={active:!1},f}return Rv(a,[{key:"getScrollSpyContainer",value:function(){var f=this.props.containerId,h=this.props.container;return f?document.getElementById(f):h&&h.nodeType?h:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var f=this.getScrollSpyContainer();Ds.isMounted(f)||Ds.mount(f,this.props.spyThrottle),this.props.hashSpy&&(Xr.isMounted()||Xr.mount(i),Xr.mapContainer(this.props.to,f)),this.props.spy&&Ds.addStateHandler(this.stateHandler),Ds.addSpyHandler(this.spyHandler,f),this.setState({container:f})}}},{key:"componentWillUnmount",value:function(){Ds.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var f="";this.state&&this.state.active?f=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():f=this.props.className;var h=Id({},this.props);for(var p in Nv)h.hasOwnProperty(p)&&delete h[p];return h.className=f,h.onClick=this.handleClick,Ec.createElement(e,h)}}]),a}(Ec.Component),s=function(){var a=this;this.scrollTo=function(c,f){i.scrollTo(c,Id({},a.state,f))},this.handleClick=function(c){a.props.onClick&&a.props.onClick(c),c.stopPropagation&&c.stopPropagation(),c.preventDefault&&c.preventDefault(),a.scrollTo(a.props.to,a.props)},this.stateHandler=function(){i.getActiveLink()!==a.props.to&&(a.state!==null&&a.state.active&&a.props.onSetInactive&&a.props.onSetInactive(),a.setState({active:!1}))},this.spyHandler=function(c){var f=a.getScrollSpyContainer();if(!(Xr.isMounted()&&!Xr.isInitialized())){var h=a.props.to,p=null,m=0,_=0,E=0;if(f.getBoundingClientRect){var S=f.getBoundingClientRect();E=S.top}if(!p||a.props.isDynamic){if(p=i.get(h),!p)return;var x=p.getBoundingClientRect();m=x.top-E+c,_=m+x.height}var g=c-a.props.offset,w=g>=Math.floor(m)&&g<Math.floor(_),M=g<Math.floor(m)||g>=Math.floor(_),R=i.getActiveLink();if(M)return h===R&&i.setActiveLink(void 0),a.props.hashSpy&&Xr.getHash()===h&&Xr.changeHash(),a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive()),Ds.updateStates();if(w&&R!==h)return i.setActiveLink(h),a.props.hashSpy&&Xr.changeHash(h),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(h)),Ds.updateStates()}}};return r.propTypes=Nv,r.defaultProps={offset:0},r},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(i){Dv(r,i);function r(s){Pv(this,r);var o=Lv(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,s));return o.childBindings={domNode:null},o}return Rv(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;kd.unregister(this.props.name)}},{key:"registerElems",value:function(o){kd.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return Ec.createElement(e,Id({},this.props,{parentBindings:this.childBindings}))}}]),r}(Ec.Component);return n.propTypes={name:en.string,id:en.string},n}},GT=VT;Object.defineProperty(on,"__esModule",{value:!0});on.Helpers=on.ScrollElement=on.ScrollLink=on.animateScroll=on.scrollSpy=on.Events=on.scroller=on.Element=on.Button=zi=on.Link=void 0;var WT=Sm,Ox=gr(WT),jT=bm,Ux=gr(jT),$T=Cm,Fx=gr($T),XT=ga,zx=gr(XT),qT=zl,Bx=gr(qT),YT=Ol,Hx=gr(YT),KT=af,Vx=gr(KT),QT=kl,Gx=gr(QT),ZT=df,Wx=gr(ZT),JT=GT,jx=gr(JT);function gr(t){return t&&t.__esModule?t:{default:t}}var zi=on.Link=Ox.default;on.Button=Ux.default;on.Element=Fx.default;on.scroller=zx.default;on.Events=Bx.default;on.scrollSpy=Hx.default;on.animateScroll=Vx.default;on.ScrollLink=Gx.default;on.ScrollElement=Wx.default;on.Helpers=jx.default;on.default={Link:Ox.default,Button:Ux.default,Element:Fx.default,scroller:zx.default,Events:Bx.default,scrollSpy:Hx.default,animateScroll:Vx.default,ScrollLink:Gx.default,ScrollElement:Wx.default,Helpers:jx.default};const eb=()=>{const[t,e]=Ai.useState();return Ai.useEffect(()=>{const n=()=>e(window.innerWidth<=800);n(),window.addEventListener("resize",n),YM(),KM()},[]),ee.jsxs("nav",{className:"nav-container",children:[!t&&ee.jsxs("ul",{className:"nav",children:[ee.jsx("li",{children:ee.jsx(zi,{id:"h",to:"home-container",smooth:!0,duration:500,offset:-53.5,children:"Home"})}),ee.jsx("li",{children:ee.jsx(zi,{id:"a",to:"abt-container",smooth:!0,duration:500,offset:-53.5,children:"About"})}),ee.jsx("li",{children:ee.jsx(zi,{id:"e",to:"exp-container",smooth:!0,duration:500,offset:-53.5,children:"Experiences"})}),ee.jsx("li",{children:ee.jsx(zi,{id:"p",to:"pro-container",smooth:!0,duration:500,offset:-53.5,children:"Projects"})}),ee.jsx("li",{children:ee.jsx(zi,{id:"c",to:"con-container",smooth:!0,duration:500,children:"Contact"})}),ee.jsx("li",{className:"slide1"}),ee.jsx("li",{className:"slide2"})]}),t&&ee.jsxs("ul",{className:"nav",children:[ee.jsxs("div",{id:"nav-icon",children:[ee.jsx("span",{}),ee.jsx("span",{}),ee.jsx("span",{}),ee.jsx("span",{}),ee.jsx("span",{}),ee.jsx("span",{})]}),ee.jsx("li",{children:ee.jsx(zi,{onClick:za,to:"home-container",smooth:!0,duration:500,offset:-53.5,children:"Home"})}),ee.jsx("li",{children:ee.jsx(zi,{onClick:za,to:"abt-container",smooth:!0,duration:500,offset:-53.5,children:"About"})}),ee.jsx("li",{children:ee.jsx(zi,{onClick:za,to:"exp-container",smooth:!0,duration:500,offset:-53.5,children:"Experiences"})}),ee.jsx("li",{children:ee.jsx(zi,{onClick:za,to:"pro-container",smooth:!0,duration:500,offset:-53.5,children:"Projects"})}),ee.jsx("li",{children:ee.jsx(zi,{onClick:za,to:"con-container",smooth:!0,duration:500,offset:-53.5,children:"Contact"})})]})]})};function hp(){return hp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},hp.apply(this,arguments)}var tb={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},nb=new(function(){function t(){}var e=t.prototype;return e.load=function(n,i,r){if(n.el=typeof r=="string"?document.querySelector(r):r,n.options=hp({},tb,i),n.isInput=n.el.tagName.toLowerCase()==="input",n.attr=n.options.attr,n.bindInputFocusEvents=n.options.bindInputFocusEvents,n.showCursor=!n.isInput&&n.options.showCursor,n.cursorChar=n.options.cursorChar,n.cursorBlinking=!0,n.elContent=n.attr?n.el.getAttribute(n.attr):n.el.textContent,n.contentType=n.options.contentType,n.typeSpeed=n.options.typeSpeed,n.startDelay=n.options.startDelay,n.backSpeed=n.options.backSpeed,n.smartBackspace=n.options.smartBackspace,n.backDelay=n.options.backDelay,n.fadeOut=n.options.fadeOut,n.fadeOutClass=n.options.fadeOutClass,n.fadeOutDelay=n.options.fadeOutDelay,n.isPaused=!1,n.strings=n.options.strings.map(function(f){return f.trim()}),n.stringsElement=typeof n.options.stringsElement=="string"?document.querySelector(n.options.stringsElement):n.options.stringsElement,n.stringsElement){n.strings=[],n.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var s=Array.prototype.slice.apply(n.stringsElement.children),o=s.length;if(o)for(var a=0;a<o;a+=1)n.strings.push(s[a].innerHTML.trim())}for(var c in n.strPos=0,n.currentElContent=this.getCurrentElContent(n),n.currentElContent&&n.currentElContent.length>0&&(n.strPos=n.currentElContent.length-1,n.strings.unshift(n.currentElContent)),n.sequence=[],n.strings)n.sequence[c]=c;n.arrayPos=0,n.stopNum=0,n.loop=n.options.loop,n.loopCount=n.options.loopCount,n.curLoop=0,n.shuffle=n.options.shuffle,n.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},n.typingComplete=!1,n.autoInsertCss=n.options.autoInsertCss,n.autoInsertCss&&(this.appendCursorAnimationCss(n),this.appendFadeOutAnimationCss(n))},e.getCurrentElContent=function(n){return n.attr?n.el.getAttribute(n.attr):n.isInput?n.el.value:n.contentType==="html"?n.el.innerHTML:n.el.textContent},e.appendCursorAnimationCss=function(n){var i="data-typed-js-cursor-css";if(n.showCursor&&!document.querySelector("["+i+"]")){var r=document.createElement("style");r.setAttribute(i,"true"),r.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(r)}},e.appendFadeOutAnimationCss=function(n){var i="data-typed-fadeout-js-css";if(n.fadeOut&&!document.querySelector("["+i+"]")){var r=document.createElement("style");r.setAttribute(i,"true"),r.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(r)}},t}()),Iv=new(function(){function t(){}var e=t.prototype;return e.typeHtmlChars=function(n,i,r){if(r.contentType!=="html")return i;var s=n.substring(i).charAt(0);if(s==="<"||s==="&"){var o;for(o=s==="<"?">":";";n.substring(i+1).charAt(0)!==o&&!(1+ ++i>n.length););i++}return i},e.backSpaceHtmlChars=function(n,i,r){if(r.contentType!=="html")return i;var s=n.substring(i).charAt(0);if(s===">"||s===";"){var o;for(o=s===">"?"<":"&";n.substring(i-1).charAt(0)!==o&&!(--i<0););i--}return i},t}()),Mc=function(){function t(n,i){nb.load(this,i,n),this.begin()}var e=t.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(n){n===void 0&&(n=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,n&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var n=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){n.strPos===0?n.typewrite(n.strings[n.sequence[n.arrayPos]],n.strPos):n.backspace(n.strings[n.sequence[n.arrayPos]],n.strPos)},this.startDelay)},e.typewrite=function(n,i){var r=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var s=this.humanizer(this.typeSpeed),o=1;this.pause.status!==!0?this.timeout=setTimeout(function(){i=Iv.typeHtmlChars(n,i,r);var a=0,c=n.substring(i);if(c.charAt(0)==="^"&&/^\^\d+/.test(c)){var f=1;f+=(c=/\d+/.exec(c)[0]).length,a=parseInt(c),r.temporaryPause=!0,r.options.onTypingPaused(r.arrayPos,r),n=n.substring(0,i)+n.substring(i+f),r.toggleBlinking(!0)}if(c.charAt(0)==="`"){for(;n.substring(i+o).charAt(0)!=="`"&&(o++,!(i+o>n.length)););var h=n.substring(0,i),p=n.substring(h.length+1,i+o),m=n.substring(i+o+1);n=h+p+m,o--}r.timeout=setTimeout(function(){r.toggleBlinking(!1),i>=n.length?r.doneTyping(n,i):r.keepTyping(n,i,o),r.temporaryPause&&(r.temporaryPause=!1,r.options.onTypingResumed(r.arrayPos,r))},a)},s):this.setPauseStatus(n,i,!0)},e.keepTyping=function(n,i,r){i===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var s=n.substring(0,i+=r);this.replaceText(s),this.typewrite(n,i)},e.doneTyping=function(n,i){var r=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){r.backspace(n,i)},this.backDelay))},e.backspace=function(n,i){var r=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var s=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){i=Iv.backSpaceHtmlChars(n,i,r);var o=n.substring(0,i);if(r.replaceText(o),r.smartBackspace){var a=r.strings[r.arrayPos+1];r.stopNum=a&&o===a.substring(0,i)?i:0}i>r.stopNum?(i--,r.backspace(n,i)):i<=r.stopNum&&(r.arrayPos++,r.arrayPos===r.strings.length?(r.arrayPos=0,r.options.onLastStringBackspaced(),r.shuffleStringsIfNeeded(),r.begin()):r.typewrite(r.strings[r.sequence[r.arrayPos]],i))},s)}else this.setPauseStatus(n,i,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(n,i,r){this.pause.typewrite=r,this.pause.curString=n,this.pause.curStrPos=i},e.toggleBlinking=function(n){this.cursor&&(this.pause.status||this.cursorBlinking!==n&&(this.cursorBlinking=n,n?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(n){return Math.round(Math.random()*n/2)+n},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var n=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){n.arrayPos++,n.replaceText(""),n.strings.length>n.arrayPos?n.typewrite(n.strings[n.sequence[n.arrayPos]],0):(n.typewrite(n.strings[0],0),n.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(n){this.attr?this.el.setAttribute(this.attr,n):this.isInput?this.el.value=n:this.contentType==="html"?this.el.innerHTML=n:this.el.textContent=n},e.bindFocusEvents=function(){var n=this;this.isInput&&(this.el.addEventListener("focus",function(i){n.stop()}),this.el.addEventListener("blur",function(i){n.el.value&&n.el.value.length!==0||n.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},t}();const ib=()=>{new Mc("#name",{strings:["Hi! I'm Vire.","¡Hola! Soy Vire.","Salut! Je suis Vire.","Olá! Eu sou Vire.","Привет! Я Вире.","Γειά σας! Είμαι Βιρέ.","嗨！ 我是 Vire。","やあ！ 俺は Vire だ。","안녕! 나 Vire 야."],typeSpeed:25,backSpeed:25,backDelay:3e3,cursorChar:"▌",autoInsertCss:!1,loop:!0}),setTimeout(()=>{new Mc("#introA",{strings:["Passionate about "],typeSpeed:25,cursorChar:"▏",autoInsertCss:!1,onComplete:t=>{t.destroy()},onDestroy:()=>{const t=document.querySelector("#introA");t.textContent="Passionate about ",new Mc("#introB",{strings:["Hardware Engineering.","Backend Software Engineering.","Data Encryption.","Data Hashing."],typeSpeed:25,backSpeed:25,smartBackspace:!0,backDelay:2e3,cursorChar:"▏",autoInsertCss:!1,loop:!0})}})},1500),setTimeout(()=>{new Mc("#desc",{strings:["A man with a sharp focus, unwavering commitment, sheer willpower, embodying honesty, and possessing excellent self-discipline."],typeSpeed:10,cursorChar:"▓",autoInsertCss:!1,onComplete:t=>{setTimeout(()=>{t.destroy()},5e3)},onDestroy:()=>{const t=document.querySelector("#desc");t.textContent="A man with a sharp focus, unwavering commitment, sheer willpower, embodying honesty, and possessing excellent self-discipline."}})},4500)};var rb=Object.defineProperty,sb=(t,e,n)=>e in t?rb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,wc=(t,e,n)=>(sb(t,typeof e!="symbol"?e+"":e,n),n),pp=new Map,Tc=new WeakMap,kv=0,ob=void 0;function ab(t){return t?(Tc.has(t)||(kv+=1,Tc.set(t,kv.toString())),Tc.get(t)):"0"}function lb(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?ab(t.root):t[e]}`).toString()}function cb(t){const e=lb(t);let n=pp.get(e);if(!n){const i=new Map;let r;const s=new IntersectionObserver(o=>{o.forEach(a=>{var c;const f=a.isIntersecting&&r.some(h=>a.intersectionRatio>=h);t.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=f),(c=i.get(a.target))==null||c.forEach(h=>{h(f,a)})})},t);r=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:s,elements:i},pp.set(e,n)}return n}function $x(t,e,n={},i=ob){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const c=t.getBoundingClientRect();return e(i,{isIntersecting:i,target:t,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:c,intersectionRect:c,rootBounds:c}),()=>{}}const{id:r,observer:s,elements:o}=cb(n),a=o.get(t)||[];return o.has(t)||o.set(t,a),a.push(e),s.observe(t),function(){a.splice(a.indexOf(e),1),a.length===0&&(o.delete(t),s.unobserve(t)),o.size===0&&(s.disconnect(),pp.delete(r))}}function ub(t){return typeof t.children!="function"}var Ov=class extends Mt.Component{constructor(t){super(t),wc(this,"node",null),wc(this,"_unobserveCb",null),wc(this,"handleNode",e=>{this.node&&(this.unobserve(),!e&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),wc(this,"handleChange",(e,n)=>{e&&this.props.triggerOnce&&this.unobserve(),ub(this.props)||this.setState({inView:e,entry:n}),this.props.onChange&&this.props.onChange(e,n)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:e,rootMargin:n,trackVisibility:i,delay:r,fallbackInView:s}=this.props;this._unobserveCb=$x(this.node,this.handleChange,{threshold:t,root:e,rootMargin:n,trackVisibility:i,delay:r},s)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:_,entry:E}=this.state;return t({inView:_,entry:E,ref:this.handleNode})}const{as:e,triggerOnce:n,threshold:i,root:r,rootMargin:s,onChange:o,skip:a,trackVisibility:c,delay:f,initialInView:h,fallbackInView:p,...m}=this.props;return Mt.createElement(e||"div",{ref:this.handleNode,...m},t)}};function Vl({threshold:t,delay:e,trackVisibility:n,rootMargin:i,root:r,triggerOnce:s,skip:o,initialInView:a,fallbackInView:c,onChange:f}={}){var h;const[p,m]=Mt.useState(null),_=Mt.useRef(),[E,S]=Mt.useState({inView:!!a,entry:void 0});_.current=f,Mt.useEffect(()=>{if(o||!p)return;let M;return M=$x(p,(R,U)=>{S({inView:R,entry:U}),_.current&&_.current(R,U),U.isIntersecting&&s&&M&&(M(),M=void 0)},{root:r,rootMargin:i,threshold:t,trackVisibility:n,delay:e},c),()=>{M&&M()}},[Array.isArray(t)?t.toString():t,p,r,i,s,o,n,c,e]);const x=(h=E.entry)==null?void 0:h.target,g=Mt.useRef();!p&&x&&!s&&!o&&g.current!==x&&(g.current=x,S({inView:!!a,entry:void 0}));const w=[m,E.inView,E.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}const fb=()=>{const[t,e]=Vl({triggerOnce:!0,threshold:.1});return Ai.useEffect(()=>{e&&ib()},[e]),ee.jsxs("div",{className:"home-container",ref:t,children:[ee.jsx("div",{className:"home",children:ee.jsxs("div",{className:"content",children:[ee.jsx("h1",{children:ee.jsx("span",{id:"name"})}),ee.jsxs("h2",{children:[ee.jsx("span",{id:"introA"}),ee.jsx("span",{id:"introB"})]}),ee.jsx("p",{children:ee.jsx("span",{id:"desc"})}),ee.jsxs("ul",{children:[ee.jsx("li",{children:ee.jsx("a",{href:"https://linkedin.com/in/virezee",target:"_blank",rel:"noopener noreferrer nofollow",children:ee.jsx("img",{className:"l",src:"images/linkedin.svg",alt:"LinkedIn"})})}),ee.jsx("li",{children:ee.jsx("a",{href:"https://github.com/VireZee",target:"_blank",rel:"noopener noreferrer nofollow",children:ee.jsx("img",{className:"g",src:"images/github.svg",alt:"GitHub"})})})]})]})}),ee.jsx("div",{className:"home-img"})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rm="164",db=0,Uv=1,hb=2,Xx=1,pb=2,br=3,xs=0,ii=1,Rr=2,gs=0,Qo=1,Fv=2,zv=3,Bv=4,mb=5,Gs=100,gb=101,vb=102,yb=103,_b=104,xb=200,Sb=201,Eb=202,Mb=203,mp=204,gp=205,wb=206,Tb=207,bb=208,Cb=209,Ab=210,Rb=211,Pb=212,Lb=213,Db=214,Nb=0,Ib=1,kb=2,Uu=3,Ob=4,Ub=5,Fb=6,zb=7,qx=0,Bb=1,Hb=2,vs=0,Vb=1,Gb=2,Wb=3,jb=4,$b=5,Xb=6,qb=7,Yx=300,la=301,ca=302,vp=303,yp=304,pf=306,_p=1e3,qs=1001,xp=1002,bi=1003,Yb=1004,bc=1005,Gi=1006,Od=1007,Ys=1008,Ss=1009,Kb=1010,Qb=1011,Kx=1012,Qx=1013,ua=1014,as=1015,mf=1016,Zx=1017,Jx=1018,Gl=1020,Zb=35902,Jb=1021,eC=1022,ur=1023,tC=1024,nC=1025,Zo=1026,Tl=1027,iC=1028,eS=1029,rC=1030,tS=1031,nS=1033,Ud=33776,Fd=33777,zd=33778,Bd=33779,Hv=35840,Vv=35841,Gv=35842,Wv=35843,jv=36196,$v=37492,Xv=37496,qv=37808,Yv=37809,Kv=37810,Qv=37811,Zv=37812,Jv=37813,e0=37814,t0=37815,n0=37816,i0=37817,r0=37818,s0=37819,o0=37820,a0=37821,Hd=36492,l0=36494,c0=36495,sC=36283,u0=36284,f0=36285,d0=36286,oC=3200,aC=3201,lC=0,cC=1,rs="",ir="srgb",bs="srgb-linear",Pm="display-p3",gf="display-p3-linear",Fu="linear",Xt="srgb",zu="rec709",Bu="p3",mo=7680,h0=519,uC=512,fC=513,dC=514,iS=515,hC=516,pC=517,mC=518,gC=519,p0=35044,m0="300 es",Dr=2e3,Hu=2001;class va{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vd=Math.PI/180,Sp=180/Math.PI;function Wl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Un[t&255]+Un[t>>8&255]+Un[t>>16&255]+Un[t>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[n&63|128]+Un[n>>8&255]+"-"+Un[n>>16&255]+Un[n>>24&255]+Un[i&255]+Un[i>>8&255]+Un[i>>16&255]+Un[i>>24&255]).toLowerCase()}function Zn(t,e,n){return Math.max(e,Math.min(n,t))}function vC(t,e){return(t%e+e)%e}function Gd(t,e,n){return(1-n)*t+n*e}function Ba(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Kn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class It{constructor(e=0,n=0){It.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,n,i,r,s,o,a,c,f){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,c,f)}set(e,n,i,r,s,o,a,c,f){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],c=i[6],f=i[1],h=i[4],p=i[7],m=i[2],_=i[5],E=i[8],S=r[0],x=r[3],g=r[6],w=r[1],M=r[4],R=r[7],U=r[2],N=r[5],d=r[8];return s[0]=o*S+a*w+c*U,s[3]=o*x+a*M+c*N,s[6]=o*g+a*R+c*d,s[1]=f*S+h*w+p*U,s[4]=f*x+h*M+p*N,s[7]=f*g+h*R+p*d,s[2]=m*S+_*w+E*U,s[5]=m*x+_*M+E*N,s[8]=m*g+_*R+E*d,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],f=e[7],h=e[8];return n*o*h-n*a*f-i*s*h+i*a*c+r*s*f-r*o*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],f=e[7],h=e[8],p=h*o-a*f,m=a*c-h*s,_=f*s-o*c,E=n*p+i*m+r*_;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/E;return e[0]=p*S,e[1]=(r*f-h*i)*S,e[2]=(a*i-r*o)*S,e[3]=m*S,e[4]=(h*n-r*c)*S,e[5]=(r*s-a*n)*S,e[6]=_*S,e[7]=(i*c-f*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const c=Math.cos(s),f=Math.sin(s);return this.set(i*c,i*f,-i*(c*o+f*a)+o+e,-r*f,r*c,-r*(-f*o+c*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Wd.makeScale(e,n)),this}rotate(e){return this.premultiply(Wd.makeRotation(-e)),this}translate(e,n){return this.premultiply(Wd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wd=new ct;function rS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Vu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function yC(){const t=Vu("canvas");return t.style.display="block",t}const g0={};function _C(t){t in g0||(g0[t]=!0,console.warn(t))}const v0=new ct().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),y0=new ct().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cc={[bs]:{transfer:Fu,primaries:zu,toReference:t=>t,fromReference:t=>t},[ir]:{transfer:Xt,primaries:zu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[gf]:{transfer:Fu,primaries:Bu,toReference:t=>t.applyMatrix3(y0),fromReference:t=>t.applyMatrix3(v0)},[Pm]:{transfer:Xt,primaries:Bu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(y0),fromReference:t=>t.applyMatrix3(v0).convertLinearToSRGB()}},xC=new Set([bs,gf]),Ht={enabled:!0,_workingColorSpace:bs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!xC.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Cc[e].toReference,r=Cc[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Cc[t].primaries},getTransfer:function(t){return t===rs?Fu:Cc[t].transfer}};function Jo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function jd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let go;class SC{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{go===void 0&&(go=Vu("canvas")),go.width=e.width,go.height=e.height;const i=go.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=go}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Vu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Jo(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Jo(n[i]/255)*255):n[i]=Jo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let EC=0;class sS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:EC++}),this.uuid=Wl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($d(r[o].image)):s.push($d(r[o]))}else s=$d(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function $d(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?SC.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let MC=0;class ri extends va{constructor(e=ri.DEFAULT_IMAGE,n=ri.DEFAULT_MAPPING,i=qs,r=qs,s=Gi,o=Ys,a=ur,c=Ss,f=ri.DEFAULT_ANISOTROPY,h=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MC++}),this.uuid=Wl(),this.name="",this.source=new sS(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=f,this.format=a,this.internalFormat=null,this.type=c,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _p:e.x=e.x-Math.floor(e.x);break;case qs:e.x=e.x<0?0:1;break;case xp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _p:e.y=e.y-Math.floor(e.y);break;case qs:e.y=e.y<0?0:1;break;case xp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=Yx;ri.DEFAULT_ANISOTROPY=1;class Pn{constructor(e=0,n=0,i=0,r=1){Pn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,f=c[0],h=c[4],p=c[8],m=c[1],_=c[5],E=c[9],S=c[2],x=c[6],g=c[10];if(Math.abs(h-m)<.01&&Math.abs(p-S)<.01&&Math.abs(E-x)<.01){if(Math.abs(h+m)<.1&&Math.abs(p+S)<.1&&Math.abs(E+x)<.1&&Math.abs(f+_+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(f+1)/2,R=(_+1)/2,U=(g+1)/2,N=(h+m)/4,d=(p+S)/4,V=(E+x)/4;return M>R&&M>U?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=N/i,s=d/i):R>U?R<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(R),i=N/r,s=V/r):U<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),i=d/s,r=V/s),this.set(i,r,s,n),this}let w=Math.sqrt((x-E)*(x-E)+(p-S)*(p-S)+(m-h)*(m-h));return Math.abs(w)<.001&&(w=1),this.x=(x-E)/w,this.y=(p-S)/w,this.z=(m-h)/w,this.w=Math.acos((f+_+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wC extends va{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Pn(0,0,e,n),this.scissorTest=!1,this.viewport=new Pn(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ri(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new sS(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ro extends wC{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class oS extends ri{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bi,this.minFilter=bi,this.wrapR=qs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class TC extends ri{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bi,this.minFilter=bi,this.wrapR=qs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let c=i[r+0],f=i[r+1],h=i[r+2],p=i[r+3];const m=s[o+0],_=s[o+1],E=s[o+2],S=s[o+3];if(a===0){e[n+0]=c,e[n+1]=f,e[n+2]=h,e[n+3]=p;return}if(a===1){e[n+0]=m,e[n+1]=_,e[n+2]=E,e[n+3]=S;return}if(p!==S||c!==m||f!==_||h!==E){let x=1-a;const g=c*m+f*_+h*E+p*S,w=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){const U=Math.sqrt(M),N=Math.atan2(U,g*w);x=Math.sin(x*N)/U,a=Math.sin(a*N)/U}const R=a*w;if(c=c*x+m*R,f=f*x+_*R,h=h*x+E*R,p=p*x+S*R,x===1-a){const U=1/Math.sqrt(c*c+f*f+h*h+p*p);c*=U,f*=U,h*=U,p*=U}}e[n]=c,e[n+1]=f,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],c=i[r+1],f=i[r+2],h=i[r+3],p=s[o],m=s[o+1],_=s[o+2],E=s[o+3];return e[n]=a*E+h*p+c*_-f*m,e[n+1]=c*E+h*m+f*p-a*_,e[n+2]=f*E+h*_+a*m-c*p,e[n+3]=h*E-a*p-c*m-f*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,f=a(i/2),h=a(r/2),p=a(s/2),m=c(i/2),_=c(r/2),E=c(s/2);switch(o){case"XYZ":this._x=m*h*p+f*_*E,this._y=f*_*p-m*h*E,this._z=f*h*E+m*_*p,this._w=f*h*p-m*_*E;break;case"YXZ":this._x=m*h*p+f*_*E,this._y=f*_*p-m*h*E,this._z=f*h*E-m*_*p,this._w=f*h*p+m*_*E;break;case"ZXY":this._x=m*h*p-f*_*E,this._y=f*_*p+m*h*E,this._z=f*h*E+m*_*p,this._w=f*h*p-m*_*E;break;case"ZYX":this._x=m*h*p-f*_*E,this._y=f*_*p+m*h*E,this._z=f*h*E-m*_*p,this._w=f*h*p+m*_*E;break;case"YZX":this._x=m*h*p+f*_*E,this._y=f*_*p+m*h*E,this._z=f*h*E-m*_*p,this._w=f*h*p-m*_*E;break;case"XZY":this._x=m*h*p-f*_*E,this._y=f*_*p-m*h*E,this._z=f*h*E+m*_*p,this._w=f*h*p+m*_*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],c=n[9],f=n[2],h=n[6],p=n[10],m=i+a+p;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(h-c)*_,this._y=(s-f)*_,this._z=(o-r)*_}else if(i>a&&i>p){const _=2*Math.sqrt(1+i-a-p);this._w=(h-c)/_,this._x=.25*_,this._y=(r+o)/_,this._z=(s+f)/_}else if(a>p){const _=2*Math.sqrt(1+a-i-p);this._w=(s-f)/_,this._x=(r+o)/_,this._y=.25*_,this._z=(c+h)/_}else{const _=2*Math.sqrt(1+p-i-a);this._w=(o-r)/_,this._x=(s+f)/_,this._y=(c+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,c=n._y,f=n._z,h=n._w;return this._x=i*h+o*a+r*f-s*c,this._y=r*h+o*c+s*a-i*f,this._z=s*h+o*f+i*c-r*a,this._w=o*h-i*a-r*c-s*f,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const _=1-n;return this._w=_*o+n*this._w,this._x=_*i+n*this._x,this._y=_*r+n*this._y,this._z=_*s+n*this._z,this.normalize(),this}const f=Math.sqrt(c),h=Math.atan2(f,a),p=Math.sin((1-n)*h)/f,m=Math.sin(n*h)/f;return this._w=o*p+this._w*m,this._x=i*p+this._x*m,this._y=r*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,n=0,i=0){te.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(_0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(_0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,f=2*(o*r-a*i),h=2*(a*n-s*r),p=2*(s*i-o*n);return this.x=n+c*f+o*p-a*h,this.y=i+c*h+a*f-s*p,this.z=r+c*p+s*h-o*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,c=n.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xd.copy(this).projectOnVector(e),this.sub(Xd)}reflect(e){return this.sub(Xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xd=new te,_0=new jl;class $l{constructor(e=new te(1/0,1/0,1/0),n=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Oi):Oi.fromBufferAttribute(s,o),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ac.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ac.copy(i.boundingBox)),Ac.applyMatrix4(e.matrixWorld),this.union(Ac)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ha),Rc.subVectors(this.max,Ha),vo.subVectors(e.a,Ha),yo.subVectors(e.b,Ha),_o.subVectors(e.c,Ha),qr.subVectors(yo,vo),Yr.subVectors(_o,yo),Ns.subVectors(vo,_o);let n=[0,-qr.z,qr.y,0,-Yr.z,Yr.y,0,-Ns.z,Ns.y,qr.z,0,-qr.x,Yr.z,0,-Yr.x,Ns.z,0,-Ns.x,-qr.y,qr.x,0,-Yr.y,Yr.x,0,-Ns.y,Ns.x,0];return!qd(n,vo,yo,_o,Rc)||(n=[1,0,0,0,1,0,0,0,1],!qd(n,vo,yo,_o,Rc))?!1:(Pc.crossVectors(qr,Yr),n=[Pc.x,Pc.y,Pc.z],qd(n,vo,yo,_o,Rc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Sr=[new te,new te,new te,new te,new te,new te,new te,new te],Oi=new te,Ac=new $l,vo=new te,yo=new te,_o=new te,qr=new te,Yr=new te,Ns=new te,Ha=new te,Rc=new te,Pc=new te,Is=new te;function qd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Is.fromArray(t,s);const a=r.x*Math.abs(Is.x)+r.y*Math.abs(Is.y)+r.z*Math.abs(Is.z),c=e.dot(Is),f=n.dot(Is),h=i.dot(Is);if(Math.max(-Math.max(c,f,h),Math.min(c,f,h))>a)return!1}return!0}const bC=new $l,Va=new te,Yd=new te;class Lm{constructor(e=new te,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):bC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Va.subVectors(e,this.center);const n=Va.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Va,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Va.copy(e.center).add(Yd)),this.expandByPoint(Va.copy(e.center).sub(Yd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Er=new te,Kd=new te,Lc=new te,Kr=new te,Qd=new te,Dc=new te,Zd=new te;class CC{constructor(e=new te,n=new te(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Er)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Er.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Er.copy(this.origin).addScaledVector(this.direction,n),Er.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Kd.copy(e).add(n).multiplyScalar(.5),Lc.copy(n).sub(e).normalize(),Kr.copy(this.origin).sub(Kd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Lc),a=Kr.dot(this.direction),c=-Kr.dot(Lc),f=Kr.lengthSq(),h=Math.abs(1-o*o);let p,m,_,E;if(h>0)if(p=o*c-a,m=o*a-c,E=s*h,p>=0)if(m>=-E)if(m<=E){const S=1/h;p*=S,m*=S,_=p*(p+o*m+2*a)+m*(o*p+m+2*c)+f}else m=s,p=Math.max(0,-(o*m+a)),_=-p*p+m*(m+2*c)+f;else m=-s,p=Math.max(0,-(o*m+a)),_=-p*p+m*(m+2*c)+f;else m<=-E?(p=Math.max(0,-(-o*s+a)),m=p>0?-s:Math.min(Math.max(-s,-c),s),_=-p*p+m*(m+2*c)+f):m<=E?(p=0,m=Math.min(Math.max(-s,-c),s),_=m*(m+2*c)+f):(p=Math.max(0,-(o*s+a)),m=p>0?s:Math.min(Math.max(-s,-c),s),_=-p*p+m*(m+2*c)+f);else m=o>0?-s:s,p=Math.max(0,-(o*m+a)),_=-p*p+m*(m+2*c)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Kd).addScaledVector(Lc,m),_}intersectSphere(e,n){Er.subVectors(e.center,this.origin);const i=Er.dot(this.direction),r=Er.dot(Er)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,c;const f=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,m=this.origin;return f>=0?(i=(e.min.x-m.x)*f,r=(e.max.x-m.x)*f):(i=(e.max.x-m.x)*f,r=(e.min.x-m.x)*f),h>=0?(s=(e.min.y-m.y)*h,o=(e.max.y-m.y)*h):(s=(e.max.y-m.y)*h,o=(e.min.y-m.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-m.z)*p,c=(e.max.z-m.z)*p):(a=(e.max.z-m.z)*p,c=(e.min.z-m.z)*p),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Er)!==null}intersectTriangle(e,n,i,r,s){Qd.subVectors(n,e),Dc.subVectors(i,e),Zd.crossVectors(Qd,Dc);let o=this.direction.dot(Zd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kr.subVectors(this.origin,e);const c=a*this.direction.dot(Dc.crossVectors(Kr,Dc));if(c<0)return null;const f=a*this.direction.dot(Qd.cross(Kr));if(f<0||c+f>o)return null;const h=-a*Kr.dot(Zd);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yn{constructor(e,n,i,r,s,o,a,c,f,h,p,m,_,E,S,x){yn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,c,f,h,p,m,_,E,S,x)}set(e,n,i,r,s,o,a,c,f,h,p,m,_,E,S,x){const g=this.elements;return g[0]=e,g[4]=n,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=f,g[6]=h,g[10]=p,g[14]=m,g[3]=_,g[7]=E,g[11]=S,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yn().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/xo.setFromMatrixColumn(e,0).length(),s=1/xo.setFromMatrixColumn(e,1).length(),o=1/xo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),f=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=o*h,_=o*p,E=a*h,S=a*p;n[0]=c*h,n[4]=-c*p,n[8]=f,n[1]=_+E*f,n[5]=m-S*f,n[9]=-a*c,n[2]=S-m*f,n[6]=E+_*f,n[10]=o*c}else if(e.order==="YXZ"){const m=c*h,_=c*p,E=f*h,S=f*p;n[0]=m+S*a,n[4]=E*a-_,n[8]=o*f,n[1]=o*p,n[5]=o*h,n[9]=-a,n[2]=_*a-E,n[6]=S+m*a,n[10]=o*c}else if(e.order==="ZXY"){const m=c*h,_=c*p,E=f*h,S=f*p;n[0]=m-S*a,n[4]=-o*p,n[8]=E+_*a,n[1]=_+E*a,n[5]=o*h,n[9]=S-m*a,n[2]=-o*f,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){const m=o*h,_=o*p,E=a*h,S=a*p;n[0]=c*h,n[4]=E*f-_,n[8]=m*f+S,n[1]=c*p,n[5]=S*f+m,n[9]=_*f-E,n[2]=-f,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){const m=o*c,_=o*f,E=a*c,S=a*f;n[0]=c*h,n[4]=S-m*p,n[8]=E*p+_,n[1]=p,n[5]=o*h,n[9]=-a*h,n[2]=-f*h,n[6]=_*p+E,n[10]=m-S*p}else if(e.order==="XZY"){const m=o*c,_=o*f,E=a*c,S=a*f;n[0]=c*h,n[4]=-p,n[8]=f*h,n[1]=m*p+S,n[5]=o*h,n[9]=_*p-E,n[2]=E*p-_,n[6]=a*h,n[10]=S*p+m}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(AC,e,RC)}lookAt(e,n,i){const r=this.elements;return ai.subVectors(e,n),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Qr.crossVectors(i,ai),Qr.lengthSq()===0&&(Math.abs(i.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Qr.crossVectors(i,ai)),Qr.normalize(),Nc.crossVectors(ai,Qr),r[0]=Qr.x,r[4]=Nc.x,r[8]=ai.x,r[1]=Qr.y,r[5]=Nc.y,r[9]=ai.y,r[2]=Qr.z,r[6]=Nc.z,r[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],c=i[8],f=i[12],h=i[1],p=i[5],m=i[9],_=i[13],E=i[2],S=i[6],x=i[10],g=i[14],w=i[3],M=i[7],R=i[11],U=i[15],N=r[0],d=r[4],V=r[8],L=r[12],A=r[1],X=r[5],ce=r[9],z=r[13],ue=r[2],he=r[6],Se=r[10],ve=r[14],H=r[3],re=r[7],oe=r[11],Ae=r[15];return s[0]=o*N+a*A+c*ue+f*H,s[4]=o*d+a*X+c*he+f*re,s[8]=o*V+a*ce+c*Se+f*oe,s[12]=o*L+a*z+c*ve+f*Ae,s[1]=h*N+p*A+m*ue+_*H,s[5]=h*d+p*X+m*he+_*re,s[9]=h*V+p*ce+m*Se+_*oe,s[13]=h*L+p*z+m*ve+_*Ae,s[2]=E*N+S*A+x*ue+g*H,s[6]=E*d+S*X+x*he+g*re,s[10]=E*V+S*ce+x*Se+g*oe,s[14]=E*L+S*z+x*ve+g*Ae,s[3]=w*N+M*A+R*ue+U*H,s[7]=w*d+M*X+R*he+U*re,s[11]=w*V+M*ce+R*Se+U*oe,s[15]=w*L+M*z+R*ve+U*Ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],f=e[13],h=e[2],p=e[6],m=e[10],_=e[14],E=e[3],S=e[7],x=e[11],g=e[15];return E*(+s*c*p-r*f*p-s*a*m+i*f*m+r*a*_-i*c*_)+S*(+n*c*_-n*f*m+s*o*m-r*o*_+r*f*h-s*c*h)+x*(+n*f*p-n*a*_-s*o*p+i*o*_+s*a*h-i*f*h)+g*(-r*a*h-n*c*p+n*a*m+r*o*p-i*o*m+i*c*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],f=e[7],h=e[8],p=e[9],m=e[10],_=e[11],E=e[12],S=e[13],x=e[14],g=e[15],w=p*x*f-S*m*f+S*c*_-a*x*_-p*c*g+a*m*g,M=E*m*f-h*x*f-E*c*_+o*x*_+h*c*g-o*m*g,R=h*S*f-E*p*f+E*a*_-o*S*_-h*a*g+o*p*g,U=E*p*c-h*S*c-E*a*m+o*S*m+h*a*x-o*p*x,N=n*w+i*M+r*R+s*U;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const d=1/N;return e[0]=w*d,e[1]=(S*m*s-p*x*s-S*r*_+i*x*_+p*r*g-i*m*g)*d,e[2]=(a*x*s-S*c*s+S*r*f-i*x*f-a*r*g+i*c*g)*d,e[3]=(p*c*s-a*m*s-p*r*f+i*m*f+a*r*_-i*c*_)*d,e[4]=M*d,e[5]=(h*x*s-E*m*s+E*r*_-n*x*_-h*r*g+n*m*g)*d,e[6]=(E*c*s-o*x*s-E*r*f+n*x*f+o*r*g-n*c*g)*d,e[7]=(o*m*s-h*c*s+h*r*f-n*m*f-o*r*_+n*c*_)*d,e[8]=R*d,e[9]=(E*p*s-h*S*s-E*i*_+n*S*_+h*i*g-n*p*g)*d,e[10]=(o*S*s-E*a*s+E*i*f-n*S*f-o*i*g+n*a*g)*d,e[11]=(h*a*s-o*p*s-h*i*f+n*p*f+o*i*_-n*a*_)*d,e[12]=U*d,e[13]=(h*S*r-E*p*r+E*i*m-n*S*m-h*i*x+n*p*x)*d,e[14]=(E*a*r-o*S*r-E*i*c+n*S*c+o*i*x-n*a*x)*d,e[15]=(o*p*r-h*a*r+h*i*c-n*p*c-o*i*m+n*a*m)*d,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,c=e.z,f=s*o,h=s*a;return this.set(f*o+i,f*a-r*c,f*c+r*a,0,f*a+r*c,h*a+i,h*c-r*o,0,f*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,c=n._w,f=s+s,h=o+o,p=a+a,m=s*f,_=s*h,E=s*p,S=o*h,x=o*p,g=a*p,w=c*f,M=c*h,R=c*p,U=i.x,N=i.y,d=i.z;return r[0]=(1-(S+g))*U,r[1]=(_+R)*U,r[2]=(E-M)*U,r[3]=0,r[4]=(_-R)*N,r[5]=(1-(m+g))*N,r[6]=(x+w)*N,r[7]=0,r[8]=(E+M)*d,r[9]=(x-w)*d,r[10]=(1-(m+S))*d,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=xo.set(r[0],r[1],r[2]).length();const o=xo.set(r[4],r[5],r[6]).length(),a=xo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ui.copy(this);const f=1/s,h=1/o,p=1/a;return Ui.elements[0]*=f,Ui.elements[1]*=f,Ui.elements[2]*=f,Ui.elements[4]*=h,Ui.elements[5]*=h,Ui.elements[6]*=h,Ui.elements[8]*=p,Ui.elements[9]*=p,Ui.elements[10]*=p,n.setFromRotationMatrix(Ui),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Dr){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),p=(n+e)/(n-e),m=(i+r)/(i-r);let _,E;if(a===Dr)_=-(o+s)/(o-s),E=-2*o*s/(o-s);else if(a===Hu)_=-o/(o-s),E=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Dr){const c=this.elements,f=1/(n-e),h=1/(i-r),p=1/(o-s),m=(n+e)*f,_=(i+r)*h;let E,S;if(a===Dr)E=(o+s)*p,S=-2*p;else if(a===Hu)E=s*p,S=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*f,c[4]=0,c[8]=0,c[12]=-m,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-_,c[2]=0,c[6]=0,c[10]=S,c[14]=-E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const xo=new te,Ui=new yn,AC=new te(0,0,0),RC=new te(1,1,1),Qr=new te,Nc=new te,ai=new te,x0=new yn,S0=new jl;class Fr{constructor(e=0,n=0,i=0,r=Fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],f=r[5],h=r[9],p=r[2],m=r[6],_=r[10];switch(n){case"XYZ":this._y=Math.asin(Zn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Zn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(c,f)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,_),this._z=Math.atan2(-o,f)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Zn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,f));break;case"YZX":this._z=Math.asin(Zn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,f),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-Zn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return x0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(x0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return S0.setFromEuler(this),this.setFromQuaternion(S0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fr.DEFAULT_ORDER="XYZ";class aS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PC=0;const E0=new te,So=new jl,Mr=new yn,Ic=new te,Ga=new te,LC=new te,DC=new jl,M0=new te(1,0,0),w0=new te(0,1,0),T0=new te(0,0,1),b0={type:"added"},NC={type:"removed"},Eo={type:"childadded",child:null},Jd={type:"childremoved",child:null};class di extends va{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PC++}),this.uuid=Wl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=di.DEFAULT_UP.clone();const e=new te,n=new Fr,i=new jl,r=new te(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yn},normalMatrix:{value:new ct}}),this.matrix=new yn,this.matrixWorld=new yn,this.matrixAutoUpdate=di.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new aS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return So.setFromAxisAngle(e,n),this.quaternion.multiply(So),this}rotateOnWorldAxis(e,n){return So.setFromAxisAngle(e,n),this.quaternion.premultiply(So),this}rotateX(e){return this.rotateOnAxis(M0,e)}rotateY(e){return this.rotateOnAxis(w0,e)}rotateZ(e){return this.rotateOnAxis(T0,e)}translateOnAxis(e,n){return E0.copy(e).applyQuaternion(this.quaternion),this.position.add(E0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(M0,e)}translateY(e){return this.translateOnAxis(w0,e)}translateZ(e){return this.translateOnAxis(T0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ic.copy(e):Ic.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mr.lookAt(Ga,Ic,this.up):Mr.lookAt(Ic,Ga,this.up),this.quaternion.setFromRotationMatrix(Mr),r&&(Mr.extractRotation(r.matrixWorld),So.setFromRotationMatrix(Mr),this.quaternion.premultiply(So.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(b0),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(NC),Jd.child=e,this.dispatchEvent(Jd),Jd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(b0),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,LC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,DC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let f=0,h=c.length;f<h;f++){const p=c[f];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,f=this.material.length;c<f;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(n){const a=o(e.geometries),c=o(e.materials),f=o(e.textures),h=o(e.images),p=o(e.shapes),m=o(e.skeletons),_=o(e.animations),E=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),f.length>0&&(i.textures=f),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),m.length>0&&(i.skeletons=m),_.length>0&&(i.animations=_),E.length>0&&(i.nodes=E)}return i.object=r,i;function o(a){const c=[];for(const f in a){const h=a[f];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}di.DEFAULT_UP=new te(0,1,0);di.DEFAULT_MATRIX_AUTO_UPDATE=!0;di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fi=new te,wr=new te,eh=new te,Tr=new te,Mo=new te,wo=new te,C0=new te,th=new te,nh=new te,ih=new te;class cr{constructor(e=new te,n=new te,i=new te){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Fi.subVectors(e,n),r.cross(Fi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Fi.subVectors(r,n),wr.subVectors(i,n),eh.subVectors(e,n);const o=Fi.dot(Fi),a=Fi.dot(wr),c=Fi.dot(eh),f=wr.dot(wr),h=wr.dot(eh),p=o*f-a*a;if(p===0)return s.set(0,0,0),null;const m=1/p,_=(f*c-a*h)*m,E=(o*h-a*c)*m;return s.set(1-_-E,E,_)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Tr)===null?!1:Tr.x>=0&&Tr.y>=0&&Tr.x+Tr.y<=1}static getInterpolation(e,n,i,r,s,o,a,c){return this.getBarycoord(e,n,i,r,Tr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Tr.x),c.addScaledVector(o,Tr.y),c.addScaledVector(a,Tr.z),c)}static isFrontFacing(e,n,i,r){return Fi.subVectors(i,n),wr.subVectors(e,n),Fi.cross(wr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),wr.subVectors(this.a,this.b),Fi.cross(wr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return cr.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return cr.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return cr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Mo.subVectors(r,i),wo.subVectors(s,i),th.subVectors(e,i);const c=Mo.dot(th),f=wo.dot(th);if(c<=0&&f<=0)return n.copy(i);nh.subVectors(e,r);const h=Mo.dot(nh),p=wo.dot(nh);if(h>=0&&p<=h)return n.copy(r);const m=c*p-h*f;if(m<=0&&c>=0&&h<=0)return o=c/(c-h),n.copy(i).addScaledVector(Mo,o);ih.subVectors(e,s);const _=Mo.dot(ih),E=wo.dot(ih);if(E>=0&&_<=E)return n.copy(s);const S=_*f-c*E;if(S<=0&&f>=0&&E<=0)return a=f/(f-E),n.copy(i).addScaledVector(wo,a);const x=h*E-_*p;if(x<=0&&p-h>=0&&_-E>=0)return C0.subVectors(s,r),a=(p-h)/(p-h+(_-E)),n.copy(r).addScaledVector(C0,a);const g=1/(x+S+m);return o=S*g,a=m*g,n.copy(i).addScaledVector(Mo,o).addScaledVector(wo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zr={h:0,s:0,l:0},kc={h:0,s:0,l:0};function rh(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ot{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ir){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ht.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ht.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ht.workingColorSpace){if(e=vC(e,1),n=Zn(n,0,1),i=Zn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=rh(o,s,e+1/3),this.g=rh(o,s,e),this.b=rh(o,s,e-1/3)}return Ht.toWorkingColorSpace(this,r),this}setStyle(e,n=ir){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ir){const i=lS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jo(e.r),this.g=Jo(e.g),this.b=Jo(e.b),this}copyLinearToSRGB(e){return this.r=jd(e.r),this.g=jd(e.g),this.b=jd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ir){return Ht.fromWorkingColorSpace(Fn.copy(this),e),Math.round(Zn(Fn.r*255,0,255))*65536+Math.round(Zn(Fn.g*255,0,255))*256+Math.round(Zn(Fn.b*255,0,255))}getHexString(e=ir){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ht.workingColorSpace){Ht.fromWorkingColorSpace(Fn.copy(this),n);const i=Fn.r,r=Fn.g,s=Fn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,f;const h=(a+o)/2;if(a===o)c=0,f=0;else{const p=o-a;switch(f=h<=.5?p/(o+a):p/(2-o-a),o){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=f,e.l=h,e}getRGB(e,n=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(Fn.copy(this),n),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=ir){Ht.fromWorkingColorSpace(Fn.copy(this),e);const n=Fn.r,i=Fn.g,r=Fn.b;return e!==ir?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Zr),this.setHSL(Zr.h+e,Zr.s+n,Zr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Zr),e.getHSL(kc);const i=Gd(Zr.h,kc.h,n),r=Gd(Zr.s,kc.s,n),s=Gd(Zr.l,kc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Ot;Ot.NAMES=lS;let IC=0;class vf extends va{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IC++}),this.uuid=Wl(),this.name="",this.type="Material",this.blending=Qo,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mp,this.blendDst=gp,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Uu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mo,this.stencilZFail=mo,this.stencilZPass=mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qo&&(i.blending=this.blending),this.side!==xs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mp&&(i.blendSrc=this.blendSrc),this.blendDst!==gp&&(i.blendDst=this.blendDst),this.blendEquation!==Gs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Uu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==h0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==mo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==mo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dm extends vf{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.combine=qx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new te,Oc=new It;class pr{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=p0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=as,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return _C("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Oc.fromBufferAttribute(this,n),Oc.applyMatrix3(e),this.setXY(n,Oc.x,Oc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix3(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix4(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)fn.fromBufferAttribute(this,n),fn.applyNormalMatrix(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)fn.fromBufferAttribute(this,n),fn.transformDirection(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ba(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ba(n,this.array)),n}setX(e,n){return this.normalized&&(n=Kn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ba(n,this.array)),n}setY(e,n){return this.normalized&&(n=Kn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ba(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Kn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ba(n,this.array)),n}setW(e,n){return this.normalized&&(n=Kn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Kn(n,this.array),i=Kn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Kn(n,this.array),i=Kn(i,this.array),r=Kn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Kn(n,this.array),i=Kn(i,this.array),r=Kn(r,this.array),s=Kn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==p0&&(e.usage=this.usage),e}}class cS extends pr{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class uS extends pr{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Zs extends pr{constructor(e,n,i){super(new Float32Array(e),n,i)}}let kC=0;const Si=new yn,sh=new di,To=new te,li=new $l,Wa=new $l,En=new te;class ao extends va{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kC++}),this.uuid=Wl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rS(e)?uS:cS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ct().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,n,i){return Si.makeTranslation(e,n,i),this.applyMatrix4(Si),this}scale(e,n,i){return Si.makeScale(e,n,i),this.applyMatrix4(Si),this}lookAt(e){return sh.lookAt(e),sh.updateMatrix(),this.applyMatrix4(sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(To).negate(),this.translate(To.x,To.y,To.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Zs(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $l);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];li.setFromBufferAttribute(s),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const i=this.boundingSphere.center;if(li.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Wa.setFromBufferAttribute(a),this.morphTargetsRelative?(En.addVectors(li.min,Wa.min),li.expandByPoint(En),En.addVectors(li.max,Wa.max),li.expandByPoint(En)):(li.expandByPoint(Wa.min),li.expandByPoint(Wa.max))}li.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)En.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(En));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],c=this.morphTargetsRelative;for(let f=0,h=a.count;f<h;f++)En.fromBufferAttribute(a,f),c&&(To.fromBufferAttribute(e,f),En.add(To)),r=Math.max(r,i.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let V=0;V<i.count;V++)a[V]=new te,c[V]=new te;const f=new te,h=new te,p=new te,m=new It,_=new It,E=new It,S=new te,x=new te;function g(V,L,A){f.fromBufferAttribute(i,V),h.fromBufferAttribute(i,L),p.fromBufferAttribute(i,A),m.fromBufferAttribute(s,V),_.fromBufferAttribute(s,L),E.fromBufferAttribute(s,A),h.sub(f),p.sub(f),_.sub(m),E.sub(m);const X=1/(_.x*E.y-E.x*_.y);isFinite(X)&&(S.copy(h).multiplyScalar(E.y).addScaledVector(p,-_.y).multiplyScalar(X),x.copy(p).multiplyScalar(_.x).addScaledVector(h,-E.x).multiplyScalar(X),a[V].add(S),a[L].add(S),a[A].add(S),c[V].add(x),c[L].add(x),c[A].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let V=0,L=w.length;V<L;++V){const A=w[V],X=A.start,ce=A.count;for(let z=X,ue=X+ce;z<ue;z+=3)g(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const M=new te,R=new te,U=new te,N=new te;function d(V){U.fromBufferAttribute(r,V),N.copy(U);const L=a[V];M.copy(L),M.sub(U.multiplyScalar(U.dot(L))).normalize(),R.crossVectors(N,L);const X=R.dot(c[V])<0?-1:1;o.setXYZW(V,M.x,M.y,M.z,X)}for(let V=0,L=w.length;V<L;++V){const A=w[V],X=A.start,ce=A.count;for(let z=X,ue=X+ce;z<ue;z+=3)d(e.getX(z+0)),d(e.getX(z+1)),d(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pr(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let m=0,_=i.count;m<_;m++)i.setXYZ(m,0,0,0);const r=new te,s=new te,o=new te,a=new te,c=new te,f=new te,h=new te,p=new te;if(e)for(let m=0,_=e.count;m<_;m+=3){const E=e.getX(m+0),S=e.getX(m+1),x=e.getX(m+2);r.fromBufferAttribute(n,E),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,x),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),a.fromBufferAttribute(i,E),c.fromBufferAttribute(i,S),f.fromBufferAttribute(i,x),a.add(h),c.add(h),f.add(h),i.setXYZ(E,a.x,a.y,a.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(x,f.x,f.y,f.z)}else for(let m=0,_=n.count;m<_;m+=3)r.fromBufferAttribute(n,m+0),s.fromBufferAttribute(n,m+1),o.fromBufferAttribute(n,m+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),i.setXYZ(m+0,h.x,h.y,h.z),i.setXYZ(m+1,h.x,h.y,h.z),i.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)En.fromBufferAttribute(e,n),En.normalize(),e.setXYZ(n,En.x,En.y,En.z)}toNonIndexed(){function e(a,c){const f=a.array,h=a.itemSize,p=a.normalized,m=new f.constructor(c.length*h);let _=0,E=0;for(let S=0,x=c.length;S<x;S++){a.isInterleavedBufferAttribute?_=c[S]*a.data.stride+a.offset:_=c[S]*h;for(let g=0;g<h;g++)m[E++]=f[_++]}return new pr(m,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ao,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],f=e(c,i);n.setAttribute(a,f)}const s=this.morphAttributes;for(const a in s){const c=[],f=s[a];for(let h=0,p=f.length;h<p;h++){const m=f[h],_=e(m,i);c.push(_)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const f=o[a];n.addGroup(f.start,f.count,f.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const f in c)c[f]!==void 0&&(e[f]=c[f]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const f=i[c];e.data.attributes[c]=f.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const f=this.morphAttributes[c],h=[];for(let p=0,m=f.length;p<m;p++){const _=f[p];h.push(_.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const f in r){const h=r[f];this.setAttribute(f,h.clone(n))}const s=e.morphAttributes;for(const f in s){const h=[],p=s[f];for(let m=0,_=p.length;m<_;m++)h.push(p[m].clone(n));this.morphAttributes[f]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let f=0,h=o.length;f<h;f++){const p=o[f];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const A0=new yn,ks=new CC,Uc=new Lm,R0=new te,bo=new te,Co=new te,Ao=new te,oh=new te,Fc=new te,zc=new It,Bc=new It,Hc=new It,P0=new te,L0=new te,D0=new te,Vc=new te,Gc=new te;class fr extends di{constructor(e=new ao,n=new Dm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Fc.set(0,0,0);for(let c=0,f=s.length;c<f;c++){const h=a[c],p=s[c];h!==0&&(oh.fromBufferAttribute(p,e),o?Fc.addScaledVector(oh,h):Fc.addScaledVector(oh.sub(n),h))}n.add(Fc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Uc.copy(i.boundingSphere),Uc.applyMatrix4(s),ks.copy(e.ray).recast(e.near),!(Uc.containsPoint(ks.origin)===!1&&(ks.intersectSphere(Uc,R0)===null||ks.origin.distanceToSquared(R0)>(e.far-e.near)**2))&&(A0.copy(s).invert(),ks.copy(e.ray).applyMatrix4(A0),!(i.boundingBox!==null&&ks.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ks)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,f=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,m=s.groups,_=s.drawRange;if(a!==null)if(Array.isArray(o))for(let E=0,S=m.length;E<S;E++){const x=m[E],g=o[x.materialIndex],w=Math.max(x.start,_.start),M=Math.min(a.count,Math.min(x.start+x.count,_.start+_.count));for(let R=w,U=M;R<U;R+=3){const N=a.getX(R),d=a.getX(R+1),V=a.getX(R+2);r=Wc(this,g,e,i,f,h,p,N,d,V),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const E=Math.max(0,_.start),S=Math.min(a.count,_.start+_.count);for(let x=E,g=S;x<g;x+=3){const w=a.getX(x),M=a.getX(x+1),R=a.getX(x+2);r=Wc(this,o,e,i,f,h,p,w,M,R),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let E=0,S=m.length;E<S;E++){const x=m[E],g=o[x.materialIndex],w=Math.max(x.start,_.start),M=Math.min(c.count,Math.min(x.start+x.count,_.start+_.count));for(let R=w,U=M;R<U;R+=3){const N=R,d=R+1,V=R+2;r=Wc(this,g,e,i,f,h,p,N,d,V),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const E=Math.max(0,_.start),S=Math.min(c.count,_.start+_.count);for(let x=E,g=S;x<g;x+=3){const w=x,M=x+1,R=x+2;r=Wc(this,o,e,i,f,h,p,w,M,R),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function OC(t,e,n,i,r,s,o,a){let c;if(e.side===ii?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===xs,a),c===null)return null;Gc.copy(a),Gc.applyMatrix4(t.matrixWorld);const f=n.ray.origin.distanceTo(Gc);return f<n.near||f>n.far?null:{distance:f,point:Gc.clone(),object:t}}function Wc(t,e,n,i,r,s,o,a,c,f){t.getVertexPosition(a,bo),t.getVertexPosition(c,Co),t.getVertexPosition(f,Ao);const h=OC(t,e,n,i,bo,Co,Ao,Vc);if(h){r&&(zc.fromBufferAttribute(r,a),Bc.fromBufferAttribute(r,c),Hc.fromBufferAttribute(r,f),h.uv=cr.getInterpolation(Vc,bo,Co,Ao,zc,Bc,Hc,new It)),s&&(zc.fromBufferAttribute(s,a),Bc.fromBufferAttribute(s,c),Hc.fromBufferAttribute(s,f),h.uv1=cr.getInterpolation(Vc,bo,Co,Ao,zc,Bc,Hc,new It)),o&&(P0.fromBufferAttribute(o,a),L0.fromBufferAttribute(o,c),D0.fromBufferAttribute(o,f),h.normal=cr.getInterpolation(Vc,bo,Co,Ao,P0,L0,D0,new te),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:c,c:f,normal:new te,materialIndex:0};cr.getNormal(bo,Co,Ao,p.normal),h.face=p}return h}class ya extends ao{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],f=[],h=[],p=[];let m=0,_=0;E("z","y","x",-1,-1,i,n,e,o,s,0),E("z","y","x",1,-1,i,n,-e,o,s,1),E("x","z","y",1,1,e,i,n,r,o,2),E("x","z","y",1,-1,e,i,-n,r,o,3),E("x","y","z",1,-1,e,n,i,r,s,4),E("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Zs(f,3)),this.setAttribute("normal",new Zs(h,3)),this.setAttribute("uv",new Zs(p,2));function E(S,x,g,w,M,R,U,N,d,V,L){const A=R/d,X=U/V,ce=R/2,z=U/2,ue=N/2,he=d+1,Se=V+1;let ve=0,H=0;const re=new te;for(let oe=0;oe<Se;oe++){const Ae=oe*X-z;for(let Ve=0;Ve<he;Ve++){const _t=Ve*A-ce;re[S]=_t*w,re[x]=Ae*M,re[g]=ue,f.push(re.x,re.y,re.z),re[S]=0,re[x]=0,re[g]=N>0?1:-1,h.push(re.x,re.y,re.z),p.push(Ve/d),p.push(1-oe/V),ve+=1}}for(let oe=0;oe<V;oe++)for(let Ae=0;Ae<d;Ae++){const Ve=m+Ae+he*oe,_t=m+Ae+he*(oe+1),se=m+(Ae+1)+he*(oe+1),Ee=m+(Ae+1)+he*oe;c.push(Ve,_t,Ee),c.push(_t,se,Ee),H+=6}a.addGroup(_,H,L),_+=H,m+=ve}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Wn(t){const e={};for(let n=0;n<t.length;n++){const i=fa(t[n]);for(const r in i)e[r]=i[r]}return e}function UC(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function fS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ht.workingColorSpace}const FC={clone:fa,merge:Wn};var zC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Es extends vf{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zC,this.fragmentShader=BC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fa(e.uniforms),this.uniformsGroups=UC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class dS extends di{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yn,this.projectionMatrix=new yn,this.projectionMatrixInverse=new yn,this.coordinateSystem=Dr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jr=new te,N0=new It,I0=new It;class wi extends dS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Sp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sp*2*Math.atan(Math.tan(Vd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z),Jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z)}getViewSize(e,n){return this.getViewBounds(e,N0,I0),n.subVectors(I0,N0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Vd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,f=o.fullHeight;s+=o.offsetX*r/c,n-=o.offsetY*i/f,r*=o.width/c,i*=o.height/f}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ro=-90,Po=1;class HC extends di{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wi(Ro,Po,e,n);r.layers=this.layers,this.add(r);const s=new wi(Ro,Po,e,n);s.layers=this.layers,this.add(s);const o=new wi(Ro,Po,e,n);o.layers=this.layers,this.add(o);const a=new wi(Ro,Po,e,n);a.layers=this.layers,this.add(a);const c=new wi(Ro,Po,e,n);c.layers=this.layers,this.add(c);const f=new wi(Ro,Po,e,n);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,c]=n;for(const f of n)this.remove(f);if(e===Dr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Hu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of n)this.add(f),f.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,f,h]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,f),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(p,m,_),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class hS extends ri{constructor(e,n,i,r,s,o,a,c,f,h){e=e!==void 0?e:[],n=n!==void 0?n:la,super(e,n,i,r,s,o,a,c,f,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class VC extends ro{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new hS(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Gi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ya(5,5,5),s=new Es({name:"CubemapFromEquirect",uniforms:fa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ii,blending:gs});s.uniforms.tEquirect.value=n;const o=new fr(r,s),a=n.minFilter;return n.minFilter===Ys&&(n.minFilter=Gi),new HC(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ah=new te,GC=new te,WC=new ct;class Hs{constructor(e=new te(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ah.subVectors(i,n).cross(GC.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ah),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||WC.getNormalMatrix(e),r=this.coplanarPoint(ah).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Os=new Lm,jc=new te;class pS{constructor(e=new Hs,n=new Hs,i=new Hs,r=new Hs,s=new Hs,o=new Hs){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Dr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],f=r[4],h=r[5],p=r[6],m=r[7],_=r[8],E=r[9],S=r[10],x=r[11],g=r[12],w=r[13],M=r[14],R=r[15];if(i[0].setComponents(c-s,m-f,x-_,R-g).normalize(),i[1].setComponents(c+s,m+f,x+_,R+g).normalize(),i[2].setComponents(c+o,m+h,x+E,R+w).normalize(),i[3].setComponents(c-o,m-h,x-E,R-w).normalize(),i[4].setComponents(c-a,m-p,x-S,R-M).normalize(),n===Dr)i[5].setComponents(c+a,m+p,x+S,R+M).normalize();else if(n===Hu)i[5].setComponents(a,p,S,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(e){return Os.center.set(0,0,0),Os.radius=.7071067811865476,Os.applyMatrix4(e.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(jc.x=r.normal.x>0?e.max.x:e.min.x,jc.y=r.normal.y>0?e.max.y:e.min.y,jc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(jc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mS(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function jC(t){const e=new WeakMap;function n(a,c){const f=a.array,h=a.usage,p=f.byteLength,m=t.createBuffer();t.bindBuffer(c,m),t.bufferData(c,f,h),a.onUploadCallback();let _;if(f instanceof Float32Array)_=t.FLOAT;else if(f instanceof Uint16Array)a.isFloat16BufferAttribute?_=t.HALF_FLOAT:_=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=t.SHORT;else if(f instanceof Uint32Array)_=t.UNSIGNED_INT;else if(f instanceof Int32Array)_=t.INT;else if(f instanceof Int8Array)_=t.BYTE;else if(f instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,c,f){const h=c.array,p=c._updateRange,m=c.updateRanges;if(t.bindBuffer(f,a),p.count===-1&&m.length===0&&t.bufferSubData(f,0,h),m.length!==0){for(let _=0,E=m.length;_<E;_++){const S=m[_];t.bufferSubData(f,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}p.count!==-1&&(t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count),p.count=-1),c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(t.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const f=e.get(a);if(f===void 0)e.set(a,n(a,c));else if(f.version<a.version){if(f.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,a,c),f.version=a.version}}return{get:r,remove:s,update:o}}class yf extends ao{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),c=Math.floor(r),f=a+1,h=c+1,p=e/a,m=n/c,_=[],E=[],S=[],x=[];for(let g=0;g<h;g++){const w=g*m-o;for(let M=0;M<f;M++){const R=M*p-s;E.push(R,-w,0),S.push(0,0,1),x.push(M/a),x.push(1-g/c)}}for(let g=0;g<c;g++)for(let w=0;w<a;w++){const M=w+f*g,R=w+f*(g+1),U=w+1+f*(g+1),N=w+1+f*g;_.push(M,R,N),_.push(R,U,N)}this.setIndex(_),this.setAttribute("position",new Zs(E,3)),this.setAttribute("normal",new Zs(S,3)),this.setAttribute("uv",new Zs(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yf(e.width,e.height,e.widthSegments,e.heightSegments)}}var $C=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XC=`#ifdef USE_ALPHAHASH
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
#endif`,qC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZC=`#ifdef USE_AOMAP
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
#endif`,JC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eA=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,tA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,nA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sA=`#ifdef USE_IRIDESCENCE
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
#endif`,oA=`#ifdef USE_BUMPMAP
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
#endif`,aA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mA=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,gA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vA=`vec3 transformedNormal = objectNormal;
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
#endif`,yA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_A=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,EA="gl_FragColor = linearToOutputTexel( gl_FragColor );",MA=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,wA=`#ifdef USE_ENVMAP
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
#endif`,TA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bA=`#ifdef USE_ENVMAP
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
#endif`,CA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AA=`#ifdef USE_ENVMAP
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
#endif`,RA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NA=`#ifdef USE_GRADIENTMAP
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
}`,IA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,UA=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,FA=`#ifdef USE_ENVMAP
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
#endif`,zA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GA=`PhysicalMaterial material;
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
#endif`,WA=`struct PhysicalMaterial {
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
}`,jA=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,$A=`#if defined( RE_IndirectDiffuse )
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
#endif`,XA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tR=`#if defined( USE_POINTS_UV )
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
#endif`,nR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sR=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,aR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,lR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,cR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pR=`#ifdef USE_NORMALMAP
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
#endif`,mR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_R=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,SR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ER=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return shadow;
	}
#endif`,AR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,PR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,LR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DR=`#ifdef USE_SKINNING
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
#endif`,NR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IR=`#ifdef USE_SKINNING
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
#endif`,kR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FR=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zR=`#ifdef USE_TRANSMISSION
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
#endif`,BR=`#ifdef USE_TRANSMISSION
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
#endif`,HR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$R=`uniform sampler2D t2D;
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
}`,XR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,YR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QR=`#include <common>
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
}`,ZR=`#if DEPTH_PACKING == 3200
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
	#endif
}`,JR=`#define DISTANCE
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
}`,eP=`#define DISTANCE
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
}`,tP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iP=`uniform float scale;
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
}`,rP=`uniform vec3 diffuse;
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
}`,sP=`#include <common>
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
}`,oP=`uniform vec3 diffuse;
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
}`,aP=`#define LAMBERT
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
}`,lP=`#define LAMBERT
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
}`,cP=`#define MATCAP
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
}`,uP=`#define MATCAP
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
}`,fP=`#define NORMAL
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
}`,dP=`#define NORMAL
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
}`,hP=`#define PHONG
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
}`,pP=`#define PHONG
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
}`,mP=`#define STANDARD
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
}`,gP=`#define STANDARD
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
}`,vP=`#define TOON
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
}`,yP=`#define TOON
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
}`,_P=`uniform float size;
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
}`,xP=`uniform vec3 diffuse;
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
}`,SP=`#include <common>
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
}`,EP=`uniform vec3 color;
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
}`,MP=`uniform float rotation;
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
}`,wP=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:$C,alphahash_pars_fragment:XC,alphamap_fragment:qC,alphamap_pars_fragment:YC,alphatest_fragment:KC,alphatest_pars_fragment:QC,aomap_fragment:ZC,aomap_pars_fragment:JC,batching_pars_vertex:eA,batching_vertex:tA,begin_vertex:nA,beginnormal_vertex:iA,bsdfs:rA,iridescence_fragment:sA,bumpmap_pars_fragment:oA,clipping_planes_fragment:aA,clipping_planes_pars_fragment:lA,clipping_planes_pars_vertex:cA,clipping_planes_vertex:uA,color_fragment:fA,color_pars_fragment:dA,color_pars_vertex:hA,color_vertex:pA,common:mA,cube_uv_reflection_fragment:gA,defaultnormal_vertex:vA,displacementmap_pars_vertex:yA,displacementmap_vertex:_A,emissivemap_fragment:xA,emissivemap_pars_fragment:SA,colorspace_fragment:EA,colorspace_pars_fragment:MA,envmap_fragment:wA,envmap_common_pars_fragment:TA,envmap_pars_fragment:bA,envmap_pars_vertex:CA,envmap_physical_pars_fragment:FA,envmap_vertex:AA,fog_vertex:RA,fog_pars_vertex:PA,fog_fragment:LA,fog_pars_fragment:DA,gradientmap_pars_fragment:NA,lightmap_pars_fragment:IA,lights_lambert_fragment:kA,lights_lambert_pars_fragment:OA,lights_pars_begin:UA,lights_toon_fragment:zA,lights_toon_pars_fragment:BA,lights_phong_fragment:HA,lights_phong_pars_fragment:VA,lights_physical_fragment:GA,lights_physical_pars_fragment:WA,lights_fragment_begin:jA,lights_fragment_maps:$A,lights_fragment_end:XA,logdepthbuf_fragment:qA,logdepthbuf_pars_fragment:YA,logdepthbuf_pars_vertex:KA,logdepthbuf_vertex:QA,map_fragment:ZA,map_pars_fragment:JA,map_particle_fragment:eR,map_particle_pars_fragment:tR,metalnessmap_fragment:nR,metalnessmap_pars_fragment:iR,morphinstance_vertex:rR,morphcolor_vertex:sR,morphnormal_vertex:oR,morphtarget_pars_vertex:aR,morphtarget_vertex:lR,normal_fragment_begin:cR,normal_fragment_maps:uR,normal_pars_fragment:fR,normal_pars_vertex:dR,normal_vertex:hR,normalmap_pars_fragment:pR,clearcoat_normal_fragment_begin:mR,clearcoat_normal_fragment_maps:gR,clearcoat_pars_fragment:vR,iridescence_pars_fragment:yR,opaque_fragment:_R,packing:xR,premultiplied_alpha_fragment:SR,project_vertex:ER,dithering_fragment:MR,dithering_pars_fragment:wR,roughnessmap_fragment:TR,roughnessmap_pars_fragment:bR,shadowmap_pars_fragment:CR,shadowmap_pars_vertex:AR,shadowmap_vertex:RR,shadowmask_pars_fragment:PR,skinbase_vertex:LR,skinning_pars_vertex:DR,skinning_vertex:NR,skinnormal_vertex:IR,specularmap_fragment:kR,specularmap_pars_fragment:OR,tonemapping_fragment:UR,tonemapping_pars_fragment:FR,transmission_fragment:zR,transmission_pars_fragment:BR,uv_pars_fragment:HR,uv_pars_vertex:VR,uv_vertex:GR,worldpos_vertex:WR,background_vert:jR,background_frag:$R,backgroundCube_vert:XR,backgroundCube_frag:qR,cube_vert:YR,cube_frag:KR,depth_vert:QR,depth_frag:ZR,distanceRGBA_vert:JR,distanceRGBA_frag:eP,equirect_vert:tP,equirect_frag:nP,linedashed_vert:iP,linedashed_frag:rP,meshbasic_vert:sP,meshbasic_frag:oP,meshlambert_vert:aP,meshlambert_frag:lP,meshmatcap_vert:cP,meshmatcap_frag:uP,meshnormal_vert:fP,meshnormal_frag:dP,meshphong_vert:hP,meshphong_frag:pP,meshphysical_vert:mP,meshphysical_frag:gP,meshtoon_vert:vP,meshtoon_frag:yP,points_vert:_P,points_frag:xP,shadow_vert:SP,shadow_frag:EP,sprite_vert:MP,sprite_frag:wP},Le={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},sr={basic:{uniforms:Wn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Wn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ot(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Wn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Wn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Wn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ot(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Wn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Wn([Le.points,Le.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Wn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Wn([Le.common,Le.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Wn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Wn([Le.sprite,Le.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Wn([Le.common,Le.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Wn([Le.lights,Le.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};sr.physical={uniforms:Wn([sr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const $c={r:0,b:0,g:0},Us=new Fr,TP=new yn;function bP(t,e,n,i,r,s,o){const a=new Ot(0);let c=s===!0?0:1,f,h,p=null,m=0,_=null;function E(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?n:e).get(M)),M}function S(w){let M=!1;const R=E(w);R===null?g(a,c):R&&R.isColor&&(g(R,1),M=!0);const U=t.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||M)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function x(w,M){const R=E(M);R&&(R.isCubeTexture||R.mapping===pf)?(h===void 0&&(h=new fr(new ya(1,1,1),new Es({name:"BackgroundCubeMaterial",uniforms:fa(sr.backgroundCube.uniforms),vertexShader:sr.backgroundCube.vertexShader,fragmentShader:sr.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,N,d){this.matrixWorld.copyPosition(d.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Us.copy(M.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(TP.makeRotationFromEuler(Us)),h.material.toneMapped=Ht.getTransfer(R.colorSpace)!==Xt,(p!==R||m!==R.version||_!==t.toneMapping)&&(h.material.needsUpdate=!0,p=R,m=R.version,_=t.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(f===void 0&&(f=new fr(new yf(2,2),new Es({name:"BackgroundMaterial",uniforms:fa(sr.background.uniforms),vertexShader:sr.background.vertexShader,fragmentShader:sr.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=R,f.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,f.material.toneMapped=Ht.getTransfer(R.colorSpace)!==Xt,R.matrixAutoUpdate===!0&&R.updateMatrix(),f.material.uniforms.uvTransform.value.copy(R.matrix),(p!==R||m!==R.version||_!==t.toneMapping)&&(f.material.needsUpdate=!0,p=R,m=R.version,_=t.toneMapping),f.layers.enableAll(),w.unshift(f,f.geometry,f.material,0,0,null))}function g(w,M){w.getRGB($c,fS(t)),i.buffers.color.setClear($c.r,$c.g,$c.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),c=M,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,g(a,c)},render:S,addToRenderList:x}}function CP(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=m(null);let s=r,o=!1;function a(A,X,ce,z,ue){let he=!1;const Se=p(z,ce,X);s!==Se&&(s=Se,f(s.object)),he=_(A,z,ce,ue),he&&E(A,z,ce,ue),ue!==null&&e.update(ue,t.ELEMENT_ARRAY_BUFFER),(he||o)&&(o=!1,R(A,X,ce,z),ue!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function c(){return t.createVertexArray()}function f(A){return t.bindVertexArray(A)}function h(A){return t.deleteVertexArray(A)}function p(A,X,ce){const z=ce.wireframe===!0;let ue=i[A.id];ue===void 0&&(ue={},i[A.id]=ue);let he=ue[X.id];he===void 0&&(he={},ue[X.id]=he);let Se=he[z];return Se===void 0&&(Se=m(c()),he[z]=Se),Se}function m(A){const X=[],ce=[],z=[];for(let ue=0;ue<n;ue++)X[ue]=0,ce[ue]=0,z[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:ce,attributeDivisors:z,object:A,attributes:{},index:null}}function _(A,X,ce,z){const ue=s.attributes,he=X.attributes;let Se=0;const ve=ce.getAttributes();for(const H in ve)if(ve[H].location>=0){const oe=ue[H];let Ae=he[H];if(Ae===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(Ae=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(Ae=A.instanceColor)),oe===void 0||oe.attribute!==Ae||Ae&&oe.data!==Ae.data)return!0;Se++}return s.attributesNum!==Se||s.index!==z}function E(A,X,ce,z){const ue={},he=X.attributes;let Se=0;const ve=ce.getAttributes();for(const H in ve)if(ve[H].location>=0){let oe=he[H];oe===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(oe=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(oe=A.instanceColor));const Ae={};Ae.attribute=oe,oe&&oe.data&&(Ae.data=oe.data),ue[H]=Ae,Se++}s.attributes=ue,s.attributesNum=Se,s.index=z}function S(){const A=s.newAttributes;for(let X=0,ce=A.length;X<ce;X++)A[X]=0}function x(A){g(A,0)}function g(A,X){const ce=s.newAttributes,z=s.enabledAttributes,ue=s.attributeDivisors;ce[A]=1,z[A]===0&&(t.enableVertexAttribArray(A),z[A]=1),ue[A]!==X&&(t.vertexAttribDivisor(A,X),ue[A]=X)}function w(){const A=s.newAttributes,X=s.enabledAttributes;for(let ce=0,z=X.length;ce<z;ce++)X[ce]!==A[ce]&&(t.disableVertexAttribArray(ce),X[ce]=0)}function M(A,X,ce,z,ue,he,Se){Se===!0?t.vertexAttribIPointer(A,X,ce,ue,he):t.vertexAttribPointer(A,X,ce,z,ue,he)}function R(A,X,ce,z){S();const ue=z.attributes,he=ce.getAttributes(),Se=X.defaultAttributeValues;for(const ve in he){const H=he[ve];if(H.location>=0){let re=ue[ve];if(re===void 0&&(ve==="instanceMatrix"&&A.instanceMatrix&&(re=A.instanceMatrix),ve==="instanceColor"&&A.instanceColor&&(re=A.instanceColor)),re!==void 0){const oe=re.normalized,Ae=re.itemSize,Ve=e.get(re);if(Ve===void 0)continue;const _t=Ve.buffer,se=Ve.type,Ee=Ve.bytesPerElement,Ue=se===t.INT||se===t.UNSIGNED_INT||re.gpuType===Qx;if(re.isInterleavedBufferAttribute){const be=re.data,dt=be.stride,ft=re.offset;if(be.isInstancedInterleavedBuffer){for(let $=0;$<H.locationSize;$++)g(H.location+$,be.meshPerAttribute);A.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let $=0;$<H.locationSize;$++)x(H.location+$);t.bindBuffer(t.ARRAY_BUFFER,_t);for(let $=0;$<H.locationSize;$++)M(H.location+$,Ae/H.locationSize,se,oe,dt*Ee,(ft+Ae/H.locationSize*$)*Ee,Ue)}else{if(re.isInstancedBufferAttribute){for(let be=0;be<H.locationSize;be++)g(H.location+be,re.meshPerAttribute);A.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let be=0;be<H.locationSize;be++)x(H.location+be);t.bindBuffer(t.ARRAY_BUFFER,_t);for(let be=0;be<H.locationSize;be++)M(H.location+be,Ae/H.locationSize,se,oe,Ae*Ee,Ae/H.locationSize*be*Ee,Ue)}}else if(Se!==void 0){const oe=Se[ve];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(H.location,oe);break;case 3:t.vertexAttrib3fv(H.location,oe);break;case 4:t.vertexAttrib4fv(H.location,oe);break;default:t.vertexAttrib1fv(H.location,oe)}}}}w()}function U(){V();for(const A in i){const X=i[A];for(const ce in X){const z=X[ce];for(const ue in z)h(z[ue].object),delete z[ue];delete X[ce]}delete i[A]}}function N(A){if(i[A.id]===void 0)return;const X=i[A.id];for(const ce in X){const z=X[ce];for(const ue in z)h(z[ue].object),delete z[ue];delete X[ce]}delete i[A.id]}function d(A){for(const X in i){const ce=i[X];if(ce[A.id]===void 0)continue;const z=ce[A.id];for(const ue in z)h(z[ue].object),delete z[ue];delete ce[A.id]}}function V(){L(),o=!0,s!==r&&(s=r,f(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:V,resetDefaultState:L,dispose:U,releaseStatesOfGeometry:N,releaseStatesOfProgram:d,initAttributes:S,enableAttribute:x,disableUnusedAttributes:w}}function AP(t,e,n){let i;function r(f){i=f}function s(f,h){t.drawArrays(i,f,h),n.update(h,i,1)}function o(f,h,p){p!==0&&(t.drawArraysInstanced(i,f,h,p),n.update(h,i,p))}function a(f,h,p){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<p;_++)this.render(f[_],h[_]);else{m.multiDrawArraysWEBGL(i,f,0,h,0,p);let _=0;for(let E=0;E<p;E++)_+=h[E];n.update(_,i,1)}}function c(f,h,p,m){if(p===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let E=0;E<f.length;E++)o(f[E],h[E],m[E]);else{_.multiDrawArraysInstancedWEBGL(i,f,0,h,0,m,0,p);let E=0;for(let S=0;S<p;S++)E+=h[S];for(let S=0;S<m.length;S++)n.update(E,i,m[S])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function RP(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(N){return!(N!==ur&&i.convert(N)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){const d=N===mf&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Ss&&i.convert(N)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==as&&!d)}function c(N){if(N==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=n.precision!==void 0?n.precision:"highp";const h=c(f);h!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",h,"instead."),f=h);const p=n.logarithmicDepthBuffer===!0,m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),S=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),w=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,U=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:f,logarithmicDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:E,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:g,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:R,maxSamples:U}}function PP(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Hs,a=new ct,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const _=p.length!==0||m||i!==0||r;return r=m,i=p.length,_},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){n=h(p,m,0)},this.setState=function(p,m,_){const E=p.clippingPlanes,S=p.clipIntersection,x=p.clipShadows,g=t.get(p);if(!r||E===null||E.length===0||s&&!x)s?h(null):f();else{const w=s?0:i,M=w*4;let R=g.clippingState||null;c.value=R,R=h(E,m,M,_);for(let U=0;U!==M;++U)R[U]=n[U];g.clippingState=R,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=w}};function f(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,m,_,E){const S=p!==null?p.length:0;let x=null;if(S!==0){if(x=c.value,E!==!0||x===null){const g=_+S*4,w=m.matrixWorldInverse;a.getNormalMatrix(w),(x===null||x.length<g)&&(x=new Float32Array(g));for(let M=0,R=_;M!==S;++M,R+=4)o.copy(p[M]).applyMatrix4(w,a),o.normal.toArray(x,R),x[R+3]=o.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,x}}function LP(t){let e=new WeakMap;function n(o,a){return a===vp?o.mapping=la:a===yp&&(o.mapping=ca),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===vp||a===yp)if(e.has(o)){const c=e.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const f=new VC(c.height);return f.fromEquirectangularTexture(t,o),e.set(o,f),o.addEventListener("dispose",r),n(f.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class DP extends dS{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,o=s+f*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Wo=4,k0=[.125,.215,.35,.446,.526,.582],Ws=20,lh=new DP,O0=new Ot;let ch=null,uh=0,fh=0,dh=!1;const Vs=(1+Math.sqrt(5))/2,Lo=1/Vs,U0=[new te(-Vs,Lo,0),new te(Vs,Lo,0),new te(-Lo,0,Vs),new te(Lo,0,Vs),new te(0,Vs,-Lo),new te(0,Vs,Lo),new te(-1,1,-1),new te(1,1,-1),new te(-1,1,1),new te(1,1,1)];class F0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ch=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=H0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=B0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ch,uh,fh),this._renderer.xr.enabled=dh,e.scissorTest=!1,Xc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===la||e.mapping===ca?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ch=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Gi,minFilter:Gi,generateMipmaps:!1,type:mf,format:ur,colorSpace:bs,depthBuffer:!1},r=z0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=z0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NP(s)),this._blurMaterial=IP(s,e,n)}return r}_compileMaterial(e){const n=new fr(this._lodPlanes[0],e);this._renderer.compile(n,lh)}_sceneToCubeUV(e,n,i,r){const a=new wi(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,m=h.toneMapping;h.getClearColor(O0),h.toneMapping=vs,h.autoClear=!1;const _=new Dm({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1}),E=new fr(new ya,_);let S=!1;const x=e.background;x?x.isColor&&(_.color.copy(x),e.background=null,S=!0):(_.color.copy(O0),S=!0);for(let g=0;g<6;g++){const w=g%3;w===0?(a.up.set(0,c[g],0),a.lookAt(f[g],0,0)):w===1?(a.up.set(0,0,c[g]),a.lookAt(0,f[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,f[g]));const M=this._cubeSize;Xc(r,w*M,g>2?M:0,M,M),h.setRenderTarget(r),S&&h.render(E,a),h.render(e,a)}E.geometry.dispose(),E.material.dispose(),h.toneMapping=m,h.autoClear=p,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===la||e.mapping===ca;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=H0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=B0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new fr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Xc(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,lh)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=U0[(r-s-1)%U0.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const c=this._renderer,f=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new fr(this._lodPlanes[r],f),m=f.uniforms,_=this._sizeLods[i]-1,E=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Ws-1),S=s/E,x=isFinite(s)?1+Math.floor(h*S):Ws;x>Ws&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ws}`);const g=[];let w=0;for(let d=0;d<Ws;++d){const V=d/S,L=Math.exp(-V*V/2);g.push(L),d===0?w+=L:d<x&&(w+=2*L)}for(let d=0;d<g.length;d++)g[d]=g[d]/w;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=g,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:M}=this;m.dTheta.value=E,m.mipInt.value=M-i;const R=this._sizeLods[r],U=3*R*(r>M-Wo?r-M+Wo:0),N=4*(this._cubeSize-R);Xc(n,U,N,3*R,2*R),c.setRenderTarget(n),c.render(p,lh)}}function NP(t){const e=[],n=[],i=[];let r=t;const s=t-Wo+1+k0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let c=1/a;o>t-Wo?c=k0[o-t+Wo-1]:o===0&&(c=0),i.push(c);const f=1/(a-2),h=-f,p=1+f,m=[h,h,p,h,p,p,h,h,p,p,h,p],_=6,E=6,S=3,x=2,g=1,w=new Float32Array(S*E*_),M=new Float32Array(x*E*_),R=new Float32Array(g*E*_);for(let N=0;N<_;N++){const d=N%3*2/3-1,V=N>2?0:-1,L=[d,V,0,d+2/3,V,0,d+2/3,V+1,0,d,V,0,d+2/3,V+1,0,d,V+1,0];w.set(L,S*E*N),M.set(m,x*E*N);const A=[N,N,N,N,N,N];R.set(A,g*E*N)}const U=new ao;U.setAttribute("position",new pr(w,S)),U.setAttribute("uv",new pr(M,x)),U.setAttribute("faceIndex",new pr(R,g)),e.push(U),r>Wo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function z0(t,e,n){const i=new ro(t,e,n);return i.texture.mapping=pf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function IP(t,e,n){const i=new Float32Array(Ws),r=new te(0,1,0);return new Es({name:"SphericalGaussianBlur",defines:{n:Ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Nm(),fragmentShader:`

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
		`,blending:gs,depthTest:!1,depthWrite:!1})}function B0(){return new Es({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nm(),fragmentShader:`

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
		`,blending:gs,depthTest:!1,depthWrite:!1})}function H0(){return new Es({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function Nm(){return`

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
	`}function kP(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const c=a.mapping,f=c===vp||c===yp,h=c===la||c===ca;if(f||h){let p=e.get(a);const m=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return n===null&&(n=new F0(t)),p=f?n.fromEquirectangular(a,p):n.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{const _=a.image;return f&&_&&_.height>0||h&&_&&r(_)?(n===null&&(n=new F0(t)),p=f?n.fromEquirectangular(a):n.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let c=0;const f=6;for(let h=0;h<f;h++)a[h]!==void 0&&c++;return c===f}function s(a){const c=a.target;c.removeEventListener("dispose",s);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function OP(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function UP(t,e,n,i){const r={},s=new WeakMap;function o(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const E in m.attributes)e.remove(m.attributes[E]);for(const E in m.morphAttributes){const S=m.morphAttributes[E];for(let x=0,g=S.length;x<g;x++)e.remove(S[x])}m.removeEventListener("dispose",o),delete r[m.id];const _=s.get(m);_&&(e.remove(_),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,n.memory.geometries--}function a(p,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,n.memory.geometries++),m}function c(p){const m=p.attributes;for(const E in m)e.update(m[E],t.ARRAY_BUFFER);const _=p.morphAttributes;for(const E in _){const S=_[E];for(let x=0,g=S.length;x<g;x++)e.update(S[x],t.ARRAY_BUFFER)}}function f(p){const m=[],_=p.index,E=p.attributes.position;let S=0;if(_!==null){const w=_.array;S=_.version;for(let M=0,R=w.length;M<R;M+=3){const U=w[M+0],N=w[M+1],d=w[M+2];m.push(U,N,N,d,d,U)}}else if(E!==void 0){const w=E.array;S=E.version;for(let M=0,R=w.length/3-1;M<R;M+=3){const U=M+0,N=M+1,d=M+2;m.push(U,N,N,d,d,U)}}else return;const x=new(rS(m)?uS:cS)(m,1);x.version=S;const g=s.get(p);g&&e.remove(g),s.set(p,x)}function h(p){const m=s.get(p);if(m){const _=p.index;_!==null&&m.version<_.version&&f(p)}else f(p);return s.get(p)}return{get:a,update:c,getWireframeAttribute:h}}function FP(t,e,n){let i;function r(m){i=m}let s,o;function a(m){s=m.type,o=m.bytesPerElement}function c(m,_){t.drawElements(i,_,s,m*o),n.update(_,i,1)}function f(m,_,E){E!==0&&(t.drawElementsInstanced(i,_,s,m*o,E),n.update(_,i,E))}function h(m,_,E){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<E;x++)this.render(m[x]/o,_[x]);else{S.multiDrawElementsWEBGL(i,_,0,s,m,0,E);let x=0;for(let g=0;g<E;g++)x+=_[g];n.update(x,i,1)}}function p(m,_,E,S){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<m.length;g++)f(m[g]/o,_[g],S[g]);else{x.multiDrawElementsInstancedWEBGL(i,_,0,s,m,0,S,0,E);let g=0;for(let w=0;w<E;w++)g+=_[w];for(let w=0;w<S.length;w++)n.update(g,i,S[w])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function zP(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function BP(t,e,n){const i=new WeakMap,r=new Pn;function s(o,a,c){const f=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0;let m=i.get(a);if(m===void 0||m.count!==p){let A=function(){V.dispose(),i.delete(a),a.removeEventListener("dispose",A)};var _=A;m!==void 0&&m.texture.dispose();const E=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let R=0;E===!0&&(R=1),S===!0&&(R=2),x===!0&&(R=3);let U=a.attributes.position.count*R,N=1;U>e.maxTextureSize&&(N=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const d=new Float32Array(U*N*4*p),V=new oS(d,U,N,p);V.type=as,V.needsUpdate=!0;const L=R*4;for(let X=0;X<p;X++){const ce=g[X],z=w[X],ue=M[X],he=U*N*4*X;for(let Se=0;Se<ce.count;Se++){const ve=Se*L;E===!0&&(r.fromBufferAttribute(ce,Se),d[he+ve+0]=r.x,d[he+ve+1]=r.y,d[he+ve+2]=r.z,d[he+ve+3]=0),S===!0&&(r.fromBufferAttribute(z,Se),d[he+ve+4]=r.x,d[he+ve+5]=r.y,d[he+ve+6]=r.z,d[he+ve+7]=0),x===!0&&(r.fromBufferAttribute(ue,Se),d[he+ve+8]=r.x,d[he+ve+9]=r.y,d[he+ve+10]=r.z,d[he+ve+11]=ue.itemSize===4?r.w:1)}}m={count:p,texture:V,size:new It(U,N)},i.set(a,m),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let E=0;for(let x=0;x<f.length;x++)E+=f[x];const S=a.morphTargetsRelative?1:1-E;c.getUniforms().setValue(t,"morphTargetBaseInfluence",S),c.getUniforms().setValue(t,"morphTargetInfluences",f)}c.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}return{update:s}}function HP(t,e,n,i){let r=new WeakMap;function s(c){const f=i.render.frame,h=c.geometry,p=e.get(c,h);if(r.get(p)!==f&&(e.update(p),r.set(p,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==f&&(m.update(),r.set(m,f))}return p}function o(){r=new WeakMap}function a(c){const f=c.target;f.removeEventListener("dispose",a),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:s,dispose:o}}class gS extends ri{constructor(e,n,i,r,s,o,a,c,f,h){if(h=h!==void 0?h:Zo,h!==Zo&&h!==Tl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Zo&&(i=ua),i===void 0&&h===Tl&&(i=Gl),super(null,r,s,o,a,c,h,i,f),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:bi,this.minFilter=c!==void 0?c:bi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const vS=new ri,yS=new gS(1,1);yS.compareFunction=iS;const _S=new oS,xS=new TC,SS=new hS,V0=[],G0=[],W0=new Float32Array(16),j0=new Float32Array(9),$0=new Float32Array(4);function _a(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=V0[r];if(s===void 0&&(s=new Float32Array(r),V0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function _n(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function xn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function _f(t,e){let n=G0[e];n===void 0&&(n=new Int32Array(e),G0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function VP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function GP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;t.uniform2fv(this.addr,e),xn(n,e)}}function WP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(_n(n,e))return;t.uniform3fv(this.addr,e),xn(n,e)}}function jP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;t.uniform4fv(this.addr,e),xn(n,e)}}function $P(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_n(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),xn(n,e)}else{if(_n(n,i))return;$0.set(i),t.uniformMatrix2fv(this.addr,!1,$0),xn(n,i)}}function XP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_n(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),xn(n,e)}else{if(_n(n,i))return;j0.set(i),t.uniformMatrix3fv(this.addr,!1,j0),xn(n,i)}}function qP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_n(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),xn(n,e)}else{if(_n(n,i))return;W0.set(i),t.uniformMatrix4fv(this.addr,!1,W0),xn(n,i)}}function YP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function KP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;t.uniform2iv(this.addr,e),xn(n,e)}}function QP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;t.uniform3iv(this.addr,e),xn(n,e)}}function ZP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;t.uniform4iv(this.addr,e),xn(n,e)}}function JP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function e2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;t.uniform2uiv(this.addr,e),xn(n,e)}}function t2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;t.uniform3uiv(this.addr,e),xn(n,e)}}function n2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;t.uniform4uiv(this.addr,e),xn(n,e)}}function i2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?yS:vS;n.setTexture2D(e||s,r)}function r2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||xS,r)}function s2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||SS,r)}function o2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||_S,r)}function a2(t){switch(t){case 5126:return VP;case 35664:return GP;case 35665:return WP;case 35666:return jP;case 35674:return $P;case 35675:return XP;case 35676:return qP;case 5124:case 35670:return YP;case 35667:case 35671:return KP;case 35668:case 35672:return QP;case 35669:case 35673:return ZP;case 5125:return JP;case 36294:return e2;case 36295:return t2;case 36296:return n2;case 35678:case 36198:case 36298:case 36306:case 35682:return i2;case 35679:case 36299:case 36307:return r2;case 35680:case 36300:case 36308:case 36293:return s2;case 36289:case 36303:case 36311:case 36292:return o2}}function l2(t,e){t.uniform1fv(this.addr,e)}function c2(t,e){const n=_a(e,this.size,2);t.uniform2fv(this.addr,n)}function u2(t,e){const n=_a(e,this.size,3);t.uniform3fv(this.addr,n)}function f2(t,e){const n=_a(e,this.size,4);t.uniform4fv(this.addr,n)}function d2(t,e){const n=_a(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function h2(t,e){const n=_a(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function p2(t,e){const n=_a(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function m2(t,e){t.uniform1iv(this.addr,e)}function g2(t,e){t.uniform2iv(this.addr,e)}function v2(t,e){t.uniform3iv(this.addr,e)}function y2(t,e){t.uniform4iv(this.addr,e)}function _2(t,e){t.uniform1uiv(this.addr,e)}function x2(t,e){t.uniform2uiv(this.addr,e)}function S2(t,e){t.uniform3uiv(this.addr,e)}function E2(t,e){t.uniform4uiv(this.addr,e)}function M2(t,e,n){const i=this.cache,r=e.length,s=_f(n,r);_n(i,s)||(t.uniform1iv(this.addr,s),xn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||vS,s[o])}function w2(t,e,n){const i=this.cache,r=e.length,s=_f(n,r);_n(i,s)||(t.uniform1iv(this.addr,s),xn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||xS,s[o])}function T2(t,e,n){const i=this.cache,r=e.length,s=_f(n,r);_n(i,s)||(t.uniform1iv(this.addr,s),xn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||SS,s[o])}function b2(t,e,n){const i=this.cache,r=e.length,s=_f(n,r);_n(i,s)||(t.uniform1iv(this.addr,s),xn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||_S,s[o])}function C2(t){switch(t){case 5126:return l2;case 35664:return c2;case 35665:return u2;case 35666:return f2;case 35674:return d2;case 35675:return h2;case 35676:return p2;case 5124:case 35670:return m2;case 35667:case 35671:return g2;case 35668:case 35672:return v2;case 35669:case 35673:return y2;case 5125:return _2;case 36294:return x2;case 36295:return S2;case 36296:return E2;case 35678:case 36198:case 36298:case 36306:case 35682:return M2;case 35679:case 36299:case 36307:return w2;case 35680:case 36300:case 36308:case 36293:return T2;case 36289:case 36303:case 36311:case 36292:return b2}}class A2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=a2(n.type)}}class R2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=C2(n.type)}}class P2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const hh=/(\w+)(\])?(\[|\.)?/g;function X0(t,e){t.seq.push(e),t.map[e.id]=e}function L2(t,e,n){const i=t.name,r=i.length;for(hh.lastIndex=0;;){const s=hh.exec(i),o=hh.lastIndex;let a=s[1];const c=s[2]==="]",f=s[3];if(c&&(a=a|0),f===void 0||f==="["&&o+2===r){X0(n,f===void 0?new A2(a,t,e):new R2(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new P2(a),X0(n,p)),n=p}}}class lu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);L2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function q0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const D2=37297;let N2=0;function I2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function k2(t){const e=Ht.getPrimaries(Ht.workingColorSpace),n=Ht.getPrimaries(t);let i;switch(e===n?i="":e===Bu&&n===zu?i="LinearDisplayP3ToLinearSRGB":e===zu&&n===Bu&&(i="LinearSRGBToLinearDisplayP3"),t){case bs:case gf:return[i,"LinearTransferOETF"];case ir:case Pm:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Y0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+I2(t.getShaderSource(e),o)}else return r}function O2(t,e){const n=k2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function U2(t,e){let n;switch(e){case Vb:n="Linear";break;case Gb:n="Reinhard";break;case Wb:n="OptimizedCineon";break;case jb:n="ACESFilmic";break;case Xb:n="AgX";break;case qb:n="Neutral";break;case $b:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function F2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qa).join(`
`)}function z2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function B2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Qa(t){return t!==""}function K0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Q0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const H2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ep(t){return t.replace(H2,G2)}const V2=new Map;function G2(t,e){let n=lt[e];if(n===void 0){const i=V2.get(e);if(i!==void 0)n=lt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ep(n)}const W2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Z0(t){return t.replace(W2,j2)}function j2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function J0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function $2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Xx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===pb?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===br&&(e="SHADOWMAP_TYPE_VSM"),e}function X2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case la:case ca:e="ENVMAP_TYPE_CUBE";break;case pf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ca:e="ENVMAP_MODE_REFRACTION";break}return e}function Y2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case qx:e="ENVMAP_BLENDING_MULTIPLY";break;case Bb:e="ENVMAP_BLENDING_MIX";break;case Hb:e="ENVMAP_BLENDING_ADD";break}return e}function K2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Q2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=$2(n),f=X2(n),h=q2(n),p=Y2(n),m=K2(n),_=F2(n),E=z2(s),S=r.createProgram();let x,g,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Qa).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Qa).join(`
`),g.length>0&&(g+=`
`)):(x=[J0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qa).join(`
`),g=[J0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vs?"#define TONE_MAPPING":"",n.toneMapping!==vs?lt.tonemapping_pars_fragment:"",n.toneMapping!==vs?U2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,O2("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Qa).join(`
`)),o=Ep(o),o=K0(o,n),o=Q0(o,n),a=Ep(a),a=K0(a,n),a=Q0(a,n),o=Z0(o),a=Z0(a),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,x=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",n.glslVersion===m0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===m0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=w+x+o,R=w+g+a,U=q0(r,r.VERTEX_SHADER,M),N=q0(r,r.FRAGMENT_SHADER,R);r.attachShader(S,U),r.attachShader(S,N),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function d(X){if(t.debug.checkShaderErrors){const ce=r.getProgramInfoLog(S).trim(),z=r.getShaderInfoLog(U).trim(),ue=r.getShaderInfoLog(N).trim();let he=!0,Se=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(he=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,U,N);else{const ve=Y0(r,U,"vertex"),H=Y0(r,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+ce+`
`+ve+`
`+H)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(z===""||ue==="")&&(Se=!1);Se&&(X.diagnostics={runnable:he,programLog:ce,vertexShader:{log:z,prefix:x},fragmentShader:{log:ue,prefix:g}})}r.deleteShader(U),r.deleteShader(N),V=new lu(r,S),L=B2(r,S)}let V;this.getUniforms=function(){return V===void 0&&d(this),V};let L;this.getAttributes=function(){return L===void 0&&d(this),L};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(S,D2)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=N2++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=U,this.fragmentShader=N,this}let Z2=0;class J2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new e3(e),n.set(e,i)),i}}class e3{constructor(e){this.id=Z2++,this.code=e,this.usedTimes=0}}function t3(t,e,n,i,r,s,o){const a=new aS,c=new J2,f=new Set,h=[],p=r.logarithmicDepthBuffer,m=r.vertexTextures;let _=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(L){return f.add(L),L===0?"uv":`uv${L}`}function x(L,A,X,ce,z){const ue=ce.fog,he=z.geometry,Se=L.isMeshStandardMaterial?ce.environment:null,ve=(L.isMeshStandardMaterial?n:e).get(L.envMap||Se),H=ve&&ve.mapping===pf?ve.image.height:null,re=E[L.type];L.precision!==null&&(_=r.getMaxPrecision(L.precision),_!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",_,"instead."));const oe=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Ae=oe!==void 0?oe.length:0;let Ve=0;he.morphAttributes.position!==void 0&&(Ve=1),he.morphAttributes.normal!==void 0&&(Ve=2),he.morphAttributes.color!==void 0&&(Ve=3);let _t,se,Ee,Ue;if(re){const wt=sr[re];_t=wt.vertexShader,se=wt.fragmentShader}else _t=L.vertexShader,se=L.fragmentShader,c.update(L),Ee=c.getVertexShaderID(L),Ue=c.getFragmentShaderID(L);const be=t.getRenderTarget(),dt=z.isInstancedMesh===!0,ft=z.isBatchedMesh===!0,$=!!L.map,Vt=!!L.matcap,Ge=!!ve,Rt=!!L.aoMap,qe=!!L.lightMap,gt=!!L.bumpMap,it=!!L.normalMap,ut=!!L.displacementMap,Ct=!!L.emissiveMap,O=!!L.metalnessMap,P=!!L.roughnessMap,ie=L.anisotropy>0,fe=L.clearcoat>0,ge=L.dispersion>0,ye=L.iridescence>0,pe=L.sheen>0,we=L.transmission>0,De=ie&&!!L.anisotropyMap,st=fe&&!!L.clearcoatMap,Ce=fe&&!!L.clearcoatNormalMap,We=fe&&!!L.clearcoatRoughnessMap,vt=ye&&!!L.iridescenceMap,je=ye&&!!L.iridescenceThicknessMap,Ne=pe&&!!L.sheenColorMap,Qe=pe&&!!L.sheenRoughnessMap,rt=!!L.specularMap,Qt=!!L.specularColorMap,et=!!L.specularIntensityMap,W=we&&!!L.transmissionMap,me=we&&!!L.thicknessMap,de=!!L.gradientMap,Re=!!L.alphaMap,Ie=L.alphaTest>0,xt=!!L.alphaHash,Bt=!!L.extensions;let St=vs;L.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(St=t.toneMapping);const Pt={shaderID:re,shaderType:L.type,shaderName:L.name,vertexShader:_t,fragmentShader:se,defines:L.defines,customVertexShaderID:Ee,customFragmentShaderID:Ue,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:_,batching:ft,instancing:dt,instancingColor:dt&&z.instanceColor!==null,instancingMorph:dt&&z.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:be===null?t.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:bs,alphaToCoverage:!!L.alphaToCoverage,map:$,matcap:Vt,envMap:Ge,envMapMode:Ge&&ve.mapping,envMapCubeUVHeight:H,aoMap:Rt,lightMap:qe,bumpMap:gt,normalMap:it,displacementMap:m&&ut,emissiveMap:Ct,normalMapObjectSpace:it&&L.normalMapType===cC,normalMapTangentSpace:it&&L.normalMapType===lC,metalnessMap:O,roughnessMap:P,anisotropy:ie,anisotropyMap:De,clearcoat:fe,clearcoatMap:st,clearcoatNormalMap:Ce,clearcoatRoughnessMap:We,dispersion:ge,iridescence:ye,iridescenceMap:vt,iridescenceThicknessMap:je,sheen:pe,sheenColorMap:Ne,sheenRoughnessMap:Qe,specularMap:rt,specularColorMap:Qt,specularIntensityMap:et,transmission:we,transmissionMap:W,thicknessMap:me,gradientMap:de,opaque:L.transparent===!1&&L.blending===Qo&&L.alphaToCoverage===!1,alphaMap:Re,alphaTest:Ie,alphaHash:xt,combine:L.combine,mapUv:$&&S(L.map.channel),aoMapUv:Rt&&S(L.aoMap.channel),lightMapUv:qe&&S(L.lightMap.channel),bumpMapUv:gt&&S(L.bumpMap.channel),normalMapUv:it&&S(L.normalMap.channel),displacementMapUv:ut&&S(L.displacementMap.channel),emissiveMapUv:Ct&&S(L.emissiveMap.channel),metalnessMapUv:O&&S(L.metalnessMap.channel),roughnessMapUv:P&&S(L.roughnessMap.channel),anisotropyMapUv:De&&S(L.anisotropyMap.channel),clearcoatMapUv:st&&S(L.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&S(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&S(L.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&S(L.iridescenceMap.channel),iridescenceThicknessMapUv:je&&S(L.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&S(L.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&S(L.sheenRoughnessMap.channel),specularMapUv:rt&&S(L.specularMap.channel),specularColorMapUv:Qt&&S(L.specularColorMap.channel),specularIntensityMapUv:et&&S(L.specularIntensityMap.channel),transmissionMapUv:W&&S(L.transmissionMap.channel),thicknessMapUv:me&&S(L.thicknessMap.channel),alphaMapUv:Re&&S(L.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(it||ie),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!he.attributes.uv&&($||Re),fog:!!ue,useFog:L.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:z.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Ve,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:L.dithering,shadowMapEnabled:t.shadowMap.enabled&&X.length>0,shadowMapType:t.shadowMap.type,toneMapping:St,useLegacyLights:t._useLegacyLights,decodeVideoTexture:$&&L.map.isVideoTexture===!0&&Ht.getTransfer(L.map.colorSpace)===Xt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Rr,flipSided:L.side===ii,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:Bt&&L.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Bt&&L.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Pt.vertexUv1s=f.has(1),Pt.vertexUv2s=f.has(2),Pt.vertexUv3s=f.has(3),f.clear(),Pt}function g(L){const A=[];if(L.shaderID?A.push(L.shaderID):(A.push(L.customVertexShaderID),A.push(L.customFragmentShaderID)),L.defines!==void 0)for(const X in L.defines)A.push(X),A.push(L.defines[X]);return L.isRawShaderMaterial===!1&&(w(A,L),M(A,L),A.push(t.outputColorSpace)),A.push(L.customProgramCacheKey),A.join()}function w(L,A){L.push(A.precision),L.push(A.outputColorSpace),L.push(A.envMapMode),L.push(A.envMapCubeUVHeight),L.push(A.mapUv),L.push(A.alphaMapUv),L.push(A.lightMapUv),L.push(A.aoMapUv),L.push(A.bumpMapUv),L.push(A.normalMapUv),L.push(A.displacementMapUv),L.push(A.emissiveMapUv),L.push(A.metalnessMapUv),L.push(A.roughnessMapUv),L.push(A.anisotropyMapUv),L.push(A.clearcoatMapUv),L.push(A.clearcoatNormalMapUv),L.push(A.clearcoatRoughnessMapUv),L.push(A.iridescenceMapUv),L.push(A.iridescenceThicknessMapUv),L.push(A.sheenColorMapUv),L.push(A.sheenRoughnessMapUv),L.push(A.specularMapUv),L.push(A.specularColorMapUv),L.push(A.specularIntensityMapUv),L.push(A.transmissionMapUv),L.push(A.thicknessMapUv),L.push(A.combine),L.push(A.fogExp2),L.push(A.sizeAttenuation),L.push(A.morphTargetsCount),L.push(A.morphAttributeCount),L.push(A.numDirLights),L.push(A.numPointLights),L.push(A.numSpotLights),L.push(A.numSpotLightMaps),L.push(A.numHemiLights),L.push(A.numRectAreaLights),L.push(A.numDirLightShadows),L.push(A.numPointLightShadows),L.push(A.numSpotLightShadows),L.push(A.numSpotLightShadowsWithMaps),L.push(A.numLightProbes),L.push(A.shadowMapType),L.push(A.toneMapping),L.push(A.numClippingPlanes),L.push(A.numClipIntersection),L.push(A.depthPacking)}function M(L,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),L.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.alphaToCoverage&&a.enable(20),L.push(a.mask)}function R(L){const A=E[L.type];let X;if(A){const ce=sr[A];X=FC.clone(ce.uniforms)}else X=L.uniforms;return X}function U(L,A){let X;for(let ce=0,z=h.length;ce<z;ce++){const ue=h[ce];if(ue.cacheKey===A){X=ue,++X.usedTimes;break}}return X===void 0&&(X=new Q2(t,A,L,s),h.push(X)),X}function N(L){if(--L.usedTimes===0){const A=h.indexOf(L);h[A]=h[h.length-1],h.pop(),L.destroy()}}function d(L){c.remove(L)}function V(){c.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:R,acquireProgram:U,releaseProgram:N,releaseShaderCache:d,programs:h,dispose:V}}function n3(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function i3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ey(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ty(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(p,m,_,E,S,x){let g=t[e];return g===void 0?(g={id:p.id,object:p,geometry:m,material:_,groupOrder:E,renderOrder:p.renderOrder,z:S,group:x},t[e]=g):(g.id=p.id,g.object=p,g.geometry=m,g.material=_,g.groupOrder=E,g.renderOrder=p.renderOrder,g.z=S,g.group=x),e++,g}function a(p,m,_,E,S,x){const g=o(p,m,_,E,S,x);_.transmission>0?i.push(g):_.transparent===!0?r.push(g):n.push(g)}function c(p,m,_,E,S,x){const g=o(p,m,_,E,S,x);_.transmission>0?i.unshift(g):_.transparent===!0?r.unshift(g):n.unshift(g)}function f(p,m){n.length>1&&n.sort(p||i3),i.length>1&&i.sort(m||ey),r.length>1&&r.sort(m||ey)}function h(){for(let p=e,m=t.length;p<m;p++){const _=t[p];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:h,sort:f}}function r3(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new ty,t.set(i,[o])):r>=s.length?(o=new ty,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function s3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new te,color:new Ot};break;case"SpotLight":n={position:new te,direction:new te,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new te,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new te,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":n={color:new Ot,position:new te,halfWidth:new te,halfHeight:new te};break}return t[e.id]=n,n}}}function o3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let a3=0;function l3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function c3(t){const e=new s3,n=o3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new te);const r=new te,s=new yn,o=new yn;function a(f,h){let p=0,m=0,_=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let E=0,S=0,x=0,g=0,w=0,M=0,R=0,U=0,N=0,d=0,V=0;f.sort(l3);const L=h===!0?Math.PI:1;for(let X=0,ce=f.length;X<ce;X++){const z=f[X],ue=z.color,he=z.intensity,Se=z.distance,ve=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)p+=ue.r*he*L,m+=ue.g*he*L,_+=ue.b*he*L;else if(z.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(z.sh.coefficients[H],he);V++}else if(z.isDirectionalLight){const H=e.get(z);if(H.color.copy(z.color).multiplyScalar(z.intensity*L),z.castShadow){const re=z.shadow,oe=n.get(z);oe.shadowBias=re.bias,oe.shadowNormalBias=re.normalBias,oe.shadowRadius=re.radius,oe.shadowMapSize=re.mapSize,i.directionalShadow[E]=oe,i.directionalShadowMap[E]=ve,i.directionalShadowMatrix[E]=z.shadow.matrix,M++}i.directional[E]=H,E++}else if(z.isSpotLight){const H=e.get(z);H.position.setFromMatrixPosition(z.matrixWorld),H.color.copy(ue).multiplyScalar(he*L),H.distance=Se,H.coneCos=Math.cos(z.angle),H.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),H.decay=z.decay,i.spot[x]=H;const re=z.shadow;if(z.map&&(i.spotLightMap[N]=z.map,N++,re.updateMatrices(z),z.castShadow&&d++),i.spotLightMatrix[x]=re.matrix,z.castShadow){const oe=n.get(z);oe.shadowBias=re.bias,oe.shadowNormalBias=re.normalBias,oe.shadowRadius=re.radius,oe.shadowMapSize=re.mapSize,i.spotShadow[x]=oe,i.spotShadowMap[x]=ve,U++}x++}else if(z.isRectAreaLight){const H=e.get(z);H.color.copy(ue).multiplyScalar(he),H.halfWidth.set(z.width*.5,0,0),H.halfHeight.set(0,z.height*.5,0),i.rectArea[g]=H,g++}else if(z.isPointLight){const H=e.get(z);if(H.color.copy(z.color).multiplyScalar(z.intensity*L),H.distance=z.distance,H.decay=z.decay,z.castShadow){const re=z.shadow,oe=n.get(z);oe.shadowBias=re.bias,oe.shadowNormalBias=re.normalBias,oe.shadowRadius=re.radius,oe.shadowMapSize=re.mapSize,oe.shadowCameraNear=re.camera.near,oe.shadowCameraFar=re.camera.far,i.pointShadow[S]=oe,i.pointShadowMap[S]=ve,i.pointShadowMatrix[S]=z.shadow.matrix,R++}i.point[S]=H,S++}else if(z.isHemisphereLight){const H=e.get(z);H.skyColor.copy(z.color).multiplyScalar(he*L),H.groundColor.copy(z.groundColor).multiplyScalar(he*L),i.hemi[w]=H,w++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Le.LTC_FLOAT_1,i.rectAreaLTC2=Le.LTC_FLOAT_2):(i.rectAreaLTC1=Le.LTC_HALF_1,i.rectAreaLTC2=Le.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=m,i.ambient[2]=_;const A=i.hash;(A.directionalLength!==E||A.pointLength!==S||A.spotLength!==x||A.rectAreaLength!==g||A.hemiLength!==w||A.numDirectionalShadows!==M||A.numPointShadows!==R||A.numSpotShadows!==U||A.numSpotMaps!==N||A.numLightProbes!==V)&&(i.directional.length=E,i.spot.length=x,i.rectArea.length=g,i.point.length=S,i.hemi.length=w,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=U,i.spotShadowMap.length=U,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=U+N-d,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=d,i.numLightProbes=V,A.directionalLength=E,A.pointLength=S,A.spotLength=x,A.rectAreaLength=g,A.hemiLength=w,A.numDirectionalShadows=M,A.numPointShadows=R,A.numSpotShadows=U,A.numSpotMaps=N,A.numLightProbes=V,i.version=a3++)}function c(f,h){let p=0,m=0,_=0,E=0,S=0;const x=h.matrixWorldInverse;for(let g=0,w=f.length;g<w;g++){const M=f[g];if(M.isDirectionalLight){const R=i.directional[p];R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(x),p++}else if(M.isSpotLight){const R=i.spot[_];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(x),R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(x),_++}else if(M.isRectAreaLight){const R=i.rectArea[E];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(x),o.identity(),s.copy(M.matrixWorld),s.premultiply(x),o.extractRotation(s),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),E++}else if(M.isPointLight){const R=i.point[m];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(x),m++}else if(M.isHemisphereLight){const R=i.hemi[S];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(x),S++}}}return{setup:a,setupView:c,state:i}}function ny(t){const e=new c3(t),n=[],i=[];function r(h){f.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function a(h){e.setup(n,h)}function c(h){e.setupView(n,h)}const f={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function u3(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ny(t),e.set(r,[a])):s>=o.length?(a=new ny(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class f3 extends vf{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class d3 extends vf{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const h3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p3=`uniform sampler2D shadow_pass;
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
}`;function m3(t,e,n){let i=new pS;const r=new It,s=new It,o=new Pn,a=new f3({depthPacking:aC}),c=new d3,f={},h=n.maxTextureSize,p={[xs]:ii,[ii]:xs,[Rr]:Rr},m=new Es({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:h3,fragmentShader:p3}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const E=new ao;E.setAttribute("position",new pr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new fr(E,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xx;let g=this.type;this.render=function(N,d,V){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||N.length===0)return;const L=t.getRenderTarget(),A=t.getActiveCubeFace(),X=t.getActiveMipmapLevel(),ce=t.state;ce.setBlending(gs),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const z=g!==br&&this.type===br,ue=g===br&&this.type!==br;for(let he=0,Se=N.length;he<Se;he++){const ve=N[he],H=ve.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ve,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const re=H.getFrameExtents();if(r.multiply(re),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/re.x),r.x=s.x*re.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/re.y),r.y=s.y*re.y,H.mapSize.y=s.y)),H.map===null||z===!0||ue===!0){const Ae=this.type!==br?{minFilter:bi,magFilter:bi}:{};H.map!==null&&H.map.dispose(),H.map=new ro(r.x,r.y,Ae),H.map.texture.name=ve.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();const oe=H.getViewportCount();for(let Ae=0;Ae<oe;Ae++){const Ve=H.getViewport(Ae);o.set(s.x*Ve.x,s.y*Ve.y,s.x*Ve.z,s.y*Ve.w),ce.viewport(o),H.updateMatrices(ve,Ae),i=H.getFrustum(),R(d,V,H.camera,ve,this.type)}H.isPointLightShadow!==!0&&this.type===br&&w(H,V),H.needsUpdate=!1}g=this.type,x.needsUpdate=!1,t.setRenderTarget(L,A,X)};function w(N,d){const V=e.update(S);m.defines.VSM_SAMPLES!==N.blurSamples&&(m.defines.VSM_SAMPLES=N.blurSamples,_.defines.VSM_SAMPLES=N.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ro(r.x,r.y)),m.uniforms.shadow_pass.value=N.map.texture,m.uniforms.resolution.value=N.mapSize,m.uniforms.radius.value=N.radius,t.setRenderTarget(N.mapPass),t.clear(),t.renderBufferDirect(d,null,V,m,S,null),_.uniforms.shadow_pass.value=N.mapPass.texture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,t.setRenderTarget(N.map),t.clear(),t.renderBufferDirect(d,null,V,_,S,null)}function M(N,d,V,L){let A=null;const X=V.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(X!==void 0)A=X;else if(A=V.isPointLight===!0?c:a,t.localClippingEnabled&&d.clipShadows===!0&&Array.isArray(d.clippingPlanes)&&d.clippingPlanes.length!==0||d.displacementMap&&d.displacementScale!==0||d.alphaMap&&d.alphaTest>0||d.map&&d.alphaTest>0){const ce=A.uuid,z=d.uuid;let ue=f[ce];ue===void 0&&(ue={},f[ce]=ue);let he=ue[z];he===void 0&&(he=A.clone(),ue[z]=he,d.addEventListener("dispose",U)),A=he}if(A.visible=d.visible,A.wireframe=d.wireframe,L===br?A.side=d.shadowSide!==null?d.shadowSide:d.side:A.side=d.shadowSide!==null?d.shadowSide:p[d.side],A.alphaMap=d.alphaMap,A.alphaTest=d.alphaTest,A.map=d.map,A.clipShadows=d.clipShadows,A.clippingPlanes=d.clippingPlanes,A.clipIntersection=d.clipIntersection,A.displacementMap=d.displacementMap,A.displacementScale=d.displacementScale,A.displacementBias=d.displacementBias,A.wireframeLinewidth=d.wireframeLinewidth,A.linewidth=d.linewidth,V.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ce=t.properties.get(A);ce.light=V}return A}function R(N,d,V,L,A){if(N.visible===!1)return;if(N.layers.test(d.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&A===br)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,N.matrixWorld);const z=e.update(N),ue=N.material;if(Array.isArray(ue)){const he=z.groups;for(let Se=0,ve=he.length;Se<ve;Se++){const H=he[Se],re=ue[H.materialIndex];if(re&&re.visible){const oe=M(N,re,L,A);N.onBeforeShadow(t,N,d,V,z,oe,H),t.renderBufferDirect(V,null,z,oe,N,H),N.onAfterShadow(t,N,d,V,z,oe,H)}}}else if(ue.visible){const he=M(N,ue,L,A);N.onBeforeShadow(t,N,d,V,z,he,null),t.renderBufferDirect(V,null,z,he,N,null),N.onAfterShadow(t,N,d,V,z,he,null)}}const ce=N.children;for(let z=0,ue=ce.length;z<ue;z++)R(ce[z],d,V,L,A)}function U(N){N.target.removeEventListener("dispose",U);for(const V in f){const L=f[V],A=N.target.uuid;A in L&&(L[A].dispose(),delete L[A])}}}function g3(t){function e(){let W=!1;const me=new Pn;let de=null;const Re=new Pn(0,0,0,0);return{setMask:function(Ie){de!==Ie&&!W&&(t.colorMask(Ie,Ie,Ie,Ie),de=Ie)},setLocked:function(Ie){W=Ie},setClear:function(Ie,xt,Bt,St,Pt){Pt===!0&&(Ie*=St,xt*=St,Bt*=St),me.set(Ie,xt,Bt,St),Re.equals(me)===!1&&(t.clearColor(Ie,xt,Bt,St),Re.copy(me))},reset:function(){W=!1,de=null,Re.set(-1,0,0,0)}}}function n(){let W=!1,me=null,de=null,Re=null;return{setTest:function(Ie){Ie?Ue(t.DEPTH_TEST):be(t.DEPTH_TEST)},setMask:function(Ie){me!==Ie&&!W&&(t.depthMask(Ie),me=Ie)},setFunc:function(Ie){if(de!==Ie){switch(Ie){case Nb:t.depthFunc(t.NEVER);break;case Ib:t.depthFunc(t.ALWAYS);break;case kb:t.depthFunc(t.LESS);break;case Uu:t.depthFunc(t.LEQUAL);break;case Ob:t.depthFunc(t.EQUAL);break;case Ub:t.depthFunc(t.GEQUAL);break;case Fb:t.depthFunc(t.GREATER);break;case zb:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=Ie}},setLocked:function(Ie){W=Ie},setClear:function(Ie){Re!==Ie&&(t.clearDepth(Ie),Re=Ie)},reset:function(){W=!1,me=null,de=null,Re=null}}}function i(){let W=!1,me=null,de=null,Re=null,Ie=null,xt=null,Bt=null,St=null,Pt=null;return{setTest:function(wt){W||(wt?Ue(t.STENCIL_TEST):be(t.STENCIL_TEST))},setMask:function(wt){me!==wt&&!W&&(t.stencilMask(wt),me=wt)},setFunc:function(wt,yi,Sn){(de!==wt||Re!==yi||Ie!==Sn)&&(t.stencilFunc(wt,yi,Sn),de=wt,Re=yi,Ie=Sn)},setOp:function(wt,yi,Sn){(xt!==wt||Bt!==yi||St!==Sn)&&(t.stencilOp(wt,yi,Sn),xt=wt,Bt=yi,St=Sn)},setLocked:function(wt){W=wt},setClear:function(wt){Pt!==wt&&(t.clearStencil(wt),Pt=wt)},reset:function(){W=!1,me=null,de=null,Re=null,Ie=null,xt=null,Bt=null,St=null,Pt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,c=new WeakMap;let f={},h={},p=new WeakMap,m=[],_=null,E=!1,S=null,x=null,g=null,w=null,M=null,R=null,U=null,N=new Ot(0,0,0),d=0,V=!1,L=null,A=null,X=null,ce=null,z=null;const ue=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let he=!1,Se=0;const ve=t.getParameter(t.VERSION);ve.indexOf("WebGL")!==-1?(Se=parseFloat(/^WebGL (\d)/.exec(ve)[1]),he=Se>=1):ve.indexOf("OpenGL ES")!==-1&&(Se=parseFloat(/^OpenGL ES (\d)/.exec(ve)[1]),he=Se>=2);let H=null,re={};const oe=t.getParameter(t.SCISSOR_BOX),Ae=t.getParameter(t.VIEWPORT),Ve=new Pn().fromArray(oe),_t=new Pn().fromArray(Ae);function se(W,me,de,Re){const Ie=new Uint8Array(4),xt=t.createTexture();t.bindTexture(W,xt),t.texParameteri(W,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(W,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Bt=0;Bt<de;Bt++)W===t.TEXTURE_3D||W===t.TEXTURE_2D_ARRAY?t.texImage3D(me,0,t.RGBA,1,1,Re,0,t.RGBA,t.UNSIGNED_BYTE,Ie):t.texImage2D(me+Bt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ie);return xt}const Ee={};Ee[t.TEXTURE_2D]=se(t.TEXTURE_2D,t.TEXTURE_2D,1),Ee[t.TEXTURE_CUBE_MAP]=se(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[t.TEXTURE_2D_ARRAY]=se(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ee[t.TEXTURE_3D]=se(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Ue(t.DEPTH_TEST),s.setFunc(Uu),gt(!1),it(Uv),Ue(t.CULL_FACE),Rt(gs);function Ue(W){f[W]!==!0&&(t.enable(W),f[W]=!0)}function be(W){f[W]!==!1&&(t.disable(W),f[W]=!1)}function dt(W,me){return h[W]!==me?(t.bindFramebuffer(W,me),h[W]=me,W===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=me),W===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=me),!0):!1}function ft(W,me){let de=m,Re=!1;if(W){de=p.get(me),de===void 0&&(de=[],p.set(me,de));const Ie=W.textures;if(de.length!==Ie.length||de[0]!==t.COLOR_ATTACHMENT0){for(let xt=0,Bt=Ie.length;xt<Bt;xt++)de[xt]=t.COLOR_ATTACHMENT0+xt;de.length=Ie.length,Re=!0}}else de[0]!==t.BACK&&(de[0]=t.BACK,Re=!0);Re&&t.drawBuffers(de)}function $(W){return _!==W?(t.useProgram(W),_=W,!0):!1}const Vt={[Gs]:t.FUNC_ADD,[gb]:t.FUNC_SUBTRACT,[vb]:t.FUNC_REVERSE_SUBTRACT};Vt[yb]=t.MIN,Vt[_b]=t.MAX;const Ge={[xb]:t.ZERO,[Sb]:t.ONE,[Eb]:t.SRC_COLOR,[mp]:t.SRC_ALPHA,[Ab]:t.SRC_ALPHA_SATURATE,[bb]:t.DST_COLOR,[wb]:t.DST_ALPHA,[Mb]:t.ONE_MINUS_SRC_COLOR,[gp]:t.ONE_MINUS_SRC_ALPHA,[Cb]:t.ONE_MINUS_DST_COLOR,[Tb]:t.ONE_MINUS_DST_ALPHA,[Rb]:t.CONSTANT_COLOR,[Pb]:t.ONE_MINUS_CONSTANT_COLOR,[Lb]:t.CONSTANT_ALPHA,[Db]:t.ONE_MINUS_CONSTANT_ALPHA};function Rt(W,me,de,Re,Ie,xt,Bt,St,Pt,wt){if(W===gs){E===!0&&(be(t.BLEND),E=!1);return}if(E===!1&&(Ue(t.BLEND),E=!0),W!==mb){if(W!==S||wt!==V){if((x!==Gs||M!==Gs)&&(t.blendEquation(t.FUNC_ADD),x=Gs,M=Gs),wt)switch(W){case Qo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Fv:t.blendFunc(t.ONE,t.ONE);break;case zv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Qo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Fv:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case zv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}g=null,w=null,R=null,U=null,N.set(0,0,0),d=0,S=W,V=wt}return}Ie=Ie||me,xt=xt||de,Bt=Bt||Re,(me!==x||Ie!==M)&&(t.blendEquationSeparate(Vt[me],Vt[Ie]),x=me,M=Ie),(de!==g||Re!==w||xt!==R||Bt!==U)&&(t.blendFuncSeparate(Ge[de],Ge[Re],Ge[xt],Ge[Bt]),g=de,w=Re,R=xt,U=Bt),(St.equals(N)===!1||Pt!==d)&&(t.blendColor(St.r,St.g,St.b,Pt),N.copy(St),d=Pt),S=W,V=!1}function qe(W,me){W.side===Rr?be(t.CULL_FACE):Ue(t.CULL_FACE);let de=W.side===ii;me&&(de=!de),gt(de),W.blending===Qo&&W.transparent===!1?Rt(gs):Rt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),s.setFunc(W.depthFunc),s.setTest(W.depthTest),s.setMask(W.depthWrite),r.setMask(W.colorWrite);const Re=W.stencilWrite;o.setTest(Re),Re&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ct(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Ue(t.SAMPLE_ALPHA_TO_COVERAGE):be(t.SAMPLE_ALPHA_TO_COVERAGE)}function gt(W){L!==W&&(W?t.frontFace(t.CW):t.frontFace(t.CCW),L=W)}function it(W){W!==db?(Ue(t.CULL_FACE),W!==A&&(W===Uv?t.cullFace(t.BACK):W===hb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):be(t.CULL_FACE),A=W}function ut(W){W!==X&&(he&&t.lineWidth(W),X=W)}function Ct(W,me,de){W?(Ue(t.POLYGON_OFFSET_FILL),(ce!==me||z!==de)&&(t.polygonOffset(me,de),ce=me,z=de)):be(t.POLYGON_OFFSET_FILL)}function O(W){W?Ue(t.SCISSOR_TEST):be(t.SCISSOR_TEST)}function P(W){W===void 0&&(W=t.TEXTURE0+ue-1),H!==W&&(t.activeTexture(W),H=W)}function ie(W,me,de){de===void 0&&(H===null?de=t.TEXTURE0+ue-1:de=H);let Re=re[de];Re===void 0&&(Re={type:void 0,texture:void 0},re[de]=Re),(Re.type!==W||Re.texture!==me)&&(H!==de&&(t.activeTexture(de),H=de),t.bindTexture(W,me||Ee[W]),Re.type=W,Re.texture=me)}function fe(){const W=re[H];W!==void 0&&W.type!==void 0&&(t.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ge(){try{t.compressedTexImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ye(){try{t.compressedTexImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pe(){try{t.texSubImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function we(){try{t.texSubImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function De(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function st(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{t.texStorage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function We(){try{t.texStorage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function vt(){try{t.texImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function je(){try{t.texImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ne(W){Ve.equals(W)===!1&&(t.scissor(W.x,W.y,W.z,W.w),Ve.copy(W))}function Qe(W){_t.equals(W)===!1&&(t.viewport(W.x,W.y,W.z,W.w),_t.copy(W))}function rt(W,me){let de=c.get(me);de===void 0&&(de=new WeakMap,c.set(me,de));let Re=de.get(W);Re===void 0&&(Re=t.getUniformBlockIndex(me,W.name),de.set(W,Re))}function Qt(W,me){const Re=c.get(me).get(W);a.get(me)!==Re&&(t.uniformBlockBinding(me,Re,W.__bindingPointIndex),a.set(me,Re))}function et(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},H=null,re={},h={},p=new WeakMap,m=[],_=null,E=!1,S=null,x=null,g=null,w=null,M=null,R=null,U=null,N=new Ot(0,0,0),d=0,V=!1,L=null,A=null,X=null,ce=null,z=null,Ve.set(0,0,t.canvas.width,t.canvas.height),_t.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Ue,disable:be,bindFramebuffer:dt,drawBuffers:ft,useProgram:$,setBlending:Rt,setMaterial:qe,setFlipSided:gt,setCullFace:it,setLineWidth:ut,setPolygonOffset:Ct,setScissorTest:O,activeTexture:P,bindTexture:ie,unbindTexture:fe,compressedTexImage2D:ge,compressedTexImage3D:ye,texImage2D:vt,texImage3D:je,updateUBOMapping:rt,uniformBlockBinding:Qt,texStorage2D:Ce,texStorage3D:We,texSubImage2D:pe,texSubImage3D:we,compressedTexSubImage2D:De,compressedTexSubImage3D:st,scissor:Ne,viewport:Qe,reset:et}}function v3(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new It,h=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,P){return _?new OffscreenCanvas(O,P):Vu("canvas")}function S(O,P,ie){let fe=1;const ge=Ct(O);if((ge.width>ie||ge.height>ie)&&(fe=ie/Math.max(ge.width,ge.height)),fe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ye=Math.floor(fe*ge.width),pe=Math.floor(fe*ge.height);p===void 0&&(p=E(ye,pe));const we=P?E(ye,pe):p;return we.width=ye,we.height=pe,we.getContext("2d").drawImage(O,0,0,ye,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ye+"x"+pe+")."),we}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),O;return O}function x(O){return O.generateMipmaps&&O.minFilter!==bi&&O.minFilter!==Gi}function g(O){t.generateMipmap(O)}function w(O,P,ie,fe,ge=!1){if(O!==null){if(t[O]!==void 0)return t[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ye=P;if(P===t.RED&&(ie===t.FLOAT&&(ye=t.R32F),ie===t.HALF_FLOAT&&(ye=t.R16F),ie===t.UNSIGNED_BYTE&&(ye=t.R8)),P===t.RED_INTEGER&&(ie===t.UNSIGNED_BYTE&&(ye=t.R8UI),ie===t.UNSIGNED_SHORT&&(ye=t.R16UI),ie===t.UNSIGNED_INT&&(ye=t.R32UI),ie===t.BYTE&&(ye=t.R8I),ie===t.SHORT&&(ye=t.R16I),ie===t.INT&&(ye=t.R32I)),P===t.RG&&(ie===t.FLOAT&&(ye=t.RG32F),ie===t.HALF_FLOAT&&(ye=t.RG16F),ie===t.UNSIGNED_BYTE&&(ye=t.RG8)),P===t.RG_INTEGER&&(ie===t.UNSIGNED_BYTE&&(ye=t.RG8UI),ie===t.UNSIGNED_SHORT&&(ye=t.RG16UI),ie===t.UNSIGNED_INT&&(ye=t.RG32UI),ie===t.BYTE&&(ye=t.RG8I),ie===t.SHORT&&(ye=t.RG16I),ie===t.INT&&(ye=t.RG32I)),P===t.RGB&&ie===t.UNSIGNED_INT_5_9_9_9_REV&&(ye=t.RGB9_E5),P===t.RGBA){const pe=ge?Fu:Ht.getTransfer(fe);ie===t.FLOAT&&(ye=t.RGBA32F),ie===t.HALF_FLOAT&&(ye=t.RGBA16F),ie===t.UNSIGNED_BYTE&&(ye=pe===Xt?t.SRGB8_ALPHA8:t.RGBA8),ie===t.UNSIGNED_SHORT_4_4_4_4&&(ye=t.RGBA4),ie===t.UNSIGNED_SHORT_5_5_5_1&&(ye=t.RGB5_A1)}return(ye===t.R16F||ye===t.R32F||ye===t.RG16F||ye===t.RG32F||ye===t.RGBA16F||ye===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function M(O,P){return x(O)===!0||O.isFramebufferTexture&&O.minFilter!==bi&&O.minFilter!==Gi?Math.log2(Math.max(P.width,P.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?P.mipmaps.length:1}function R(O){const P=O.target;P.removeEventListener("dispose",R),N(P),P.isVideoTexture&&h.delete(P)}function U(O){const P=O.target;P.removeEventListener("dispose",U),V(P)}function N(O){const P=i.get(O);if(P.__webglInit===void 0)return;const ie=O.source,fe=m.get(ie);if(fe){const ge=fe[P.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&d(O),Object.keys(fe).length===0&&m.delete(ie)}i.remove(O)}function d(O){const P=i.get(O);t.deleteTexture(P.__webglTexture);const ie=O.source,fe=m.get(ie);delete fe[P.__cacheKey],o.memory.textures--}function V(O){const P=i.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(P.__webglFramebuffer[fe]))for(let ge=0;ge<P.__webglFramebuffer[fe].length;ge++)t.deleteFramebuffer(P.__webglFramebuffer[fe][ge]);else t.deleteFramebuffer(P.__webglFramebuffer[fe]);P.__webglDepthbuffer&&t.deleteRenderbuffer(P.__webglDepthbuffer[fe])}else{if(Array.isArray(P.__webglFramebuffer))for(let fe=0;fe<P.__webglFramebuffer.length;fe++)t.deleteFramebuffer(P.__webglFramebuffer[fe]);else t.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&t.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&t.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let fe=0;fe<P.__webglColorRenderbuffer.length;fe++)P.__webglColorRenderbuffer[fe]&&t.deleteRenderbuffer(P.__webglColorRenderbuffer[fe]);P.__webglDepthRenderbuffer&&t.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const ie=O.textures;for(let fe=0,ge=ie.length;fe<ge;fe++){const ye=i.get(ie[fe]);ye.__webglTexture&&(t.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(ie[fe])}i.remove(O)}let L=0;function A(){L=0}function X(){const O=L;return O>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),L+=1,O}function ce(O){const P=[];return P.push(O.wrapS),P.push(O.wrapT),P.push(O.wrapR||0),P.push(O.magFilter),P.push(O.minFilter),P.push(O.anisotropy),P.push(O.internalFormat),P.push(O.format),P.push(O.type),P.push(O.generateMipmaps),P.push(O.premultiplyAlpha),P.push(O.flipY),P.push(O.unpackAlignment),P.push(O.colorSpace),P.join()}function z(O,P){const ie=i.get(O);if(O.isVideoTexture&&it(O),O.isRenderTargetTexture===!1&&O.version>0&&ie.__version!==O.version){const fe=O.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(ie,O,P);return}}n.bindTexture(t.TEXTURE_2D,ie.__webglTexture,t.TEXTURE0+P)}function ue(O,P){const ie=i.get(O);if(O.version>0&&ie.__version!==O.version){Ve(ie,O,P);return}n.bindTexture(t.TEXTURE_2D_ARRAY,ie.__webglTexture,t.TEXTURE0+P)}function he(O,P){const ie=i.get(O);if(O.version>0&&ie.__version!==O.version){Ve(ie,O,P);return}n.bindTexture(t.TEXTURE_3D,ie.__webglTexture,t.TEXTURE0+P)}function Se(O,P){const ie=i.get(O);if(O.version>0&&ie.__version!==O.version){_t(ie,O,P);return}n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture,t.TEXTURE0+P)}const ve={[_p]:t.REPEAT,[qs]:t.CLAMP_TO_EDGE,[xp]:t.MIRRORED_REPEAT},H={[bi]:t.NEAREST,[Yb]:t.NEAREST_MIPMAP_NEAREST,[bc]:t.NEAREST_MIPMAP_LINEAR,[Gi]:t.LINEAR,[Od]:t.LINEAR_MIPMAP_NEAREST,[Ys]:t.LINEAR_MIPMAP_LINEAR},re={[uC]:t.NEVER,[gC]:t.ALWAYS,[fC]:t.LESS,[iS]:t.LEQUAL,[dC]:t.EQUAL,[mC]:t.GEQUAL,[hC]:t.GREATER,[pC]:t.NOTEQUAL};function oe(O,P){if(P.type===as&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===Gi||P.magFilter===Od||P.magFilter===bc||P.magFilter===Ys||P.minFilter===Gi||P.minFilter===Od||P.minFilter===bc||P.minFilter===Ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(O,t.TEXTURE_WRAP_S,ve[P.wrapS]),t.texParameteri(O,t.TEXTURE_WRAP_T,ve[P.wrapT]),(O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY)&&t.texParameteri(O,t.TEXTURE_WRAP_R,ve[P.wrapR]),t.texParameteri(O,t.TEXTURE_MAG_FILTER,H[P.magFilter]),t.texParameteri(O,t.TEXTURE_MIN_FILTER,H[P.minFilter]),P.compareFunction&&(t.texParameteri(O,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(O,t.TEXTURE_COMPARE_FUNC,re[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===bi||P.minFilter!==bc&&P.minFilter!==Ys||P.type===as&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||i.get(P).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");t.texParameterf(O,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),i.get(P).__currentAnisotropy=P.anisotropy}}}function Ae(O,P){let ie=!1;O.__webglInit===void 0&&(O.__webglInit=!0,P.addEventListener("dispose",R));const fe=P.source;let ge=m.get(fe);ge===void 0&&(ge={},m.set(fe,ge));const ye=ce(P);if(ye!==O.__cacheKey){ge[ye]===void 0&&(ge[ye]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,ie=!0),ge[ye].usedTimes++;const pe=ge[O.__cacheKey];pe!==void 0&&(ge[O.__cacheKey].usedTimes--,pe.usedTimes===0&&d(P)),O.__cacheKey=ye,O.__webglTexture=ge[ye].texture}return ie}function Ve(O,P,ie){let fe=t.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(fe=t.TEXTURE_2D_ARRAY),P.isData3DTexture&&(fe=t.TEXTURE_3D);const ge=Ae(O,P),ye=P.source;n.bindTexture(fe,O.__webglTexture,t.TEXTURE0+ie);const pe=i.get(ye);if(ye.version!==pe.__version||ge===!0){n.activeTexture(t.TEXTURE0+ie);const we=Ht.getPrimaries(Ht.workingColorSpace),De=P.colorSpace===rs?null:Ht.getPrimaries(P.colorSpace),st=P.colorSpace===rs||we===De?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,P.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,P.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let Ce=S(P.image,!1,r.maxTextureSize);Ce=ut(P,Ce);const We=s.convert(P.format,P.colorSpace),vt=s.convert(P.type);let je=w(P.internalFormat,We,vt,P.colorSpace,P.isVideoTexture);oe(fe,P);let Ne;const Qe=P.mipmaps,rt=P.isVideoTexture!==!0,Qt=pe.__version===void 0||ge===!0,et=ye.dataReady,W=M(P,Ce);if(P.isDepthTexture)je=t.DEPTH_COMPONENT16,P.type===as?je=t.DEPTH_COMPONENT32F:P.type===ua?je=t.DEPTH_COMPONENT24:P.type===Gl&&(je=t.DEPTH24_STENCIL8),Qt&&(rt?n.texStorage2D(t.TEXTURE_2D,1,je,Ce.width,Ce.height):n.texImage2D(t.TEXTURE_2D,0,je,Ce.width,Ce.height,0,We,vt,null));else if(P.isDataTexture)if(Qe.length>0){rt&&Qt&&n.texStorage2D(t.TEXTURE_2D,W,je,Qe[0].width,Qe[0].height);for(let me=0,de=Qe.length;me<de;me++)Ne=Qe[me],rt?et&&n.texSubImage2D(t.TEXTURE_2D,me,0,0,Ne.width,Ne.height,We,vt,Ne.data):n.texImage2D(t.TEXTURE_2D,me,je,Ne.width,Ne.height,0,We,vt,Ne.data);P.generateMipmaps=!1}else rt?(Qt&&n.texStorage2D(t.TEXTURE_2D,W,je,Ce.width,Ce.height),et&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ce.width,Ce.height,We,vt,Ce.data)):n.texImage2D(t.TEXTURE_2D,0,je,Ce.width,Ce.height,0,We,vt,Ce.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){rt&&Qt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,W,je,Qe[0].width,Qe[0].height,Ce.depth);for(let me=0,de=Qe.length;me<de;me++)Ne=Qe[me],P.format!==ur?We!==null?rt?et&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,me,0,0,0,Ne.width,Ne.height,Ce.depth,We,Ne.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,me,je,Ne.width,Ne.height,Ce.depth,0,Ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?et&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,me,0,0,0,Ne.width,Ne.height,Ce.depth,We,vt,Ne.data):n.texImage3D(t.TEXTURE_2D_ARRAY,me,je,Ne.width,Ne.height,Ce.depth,0,We,vt,Ne.data)}else{rt&&Qt&&n.texStorage2D(t.TEXTURE_2D,W,je,Qe[0].width,Qe[0].height);for(let me=0,de=Qe.length;me<de;me++)Ne=Qe[me],P.format!==ur?We!==null?rt?et&&n.compressedTexSubImage2D(t.TEXTURE_2D,me,0,0,Ne.width,Ne.height,We,Ne.data):n.compressedTexImage2D(t.TEXTURE_2D,me,je,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?et&&n.texSubImage2D(t.TEXTURE_2D,me,0,0,Ne.width,Ne.height,We,vt,Ne.data):n.texImage2D(t.TEXTURE_2D,me,je,Ne.width,Ne.height,0,We,vt,Ne.data)}else if(P.isDataArrayTexture)rt?(Qt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,W,je,Ce.width,Ce.height,Ce.depth),et&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Ce.width,Ce.height,Ce.depth,We,vt,Ce.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,je,Ce.width,Ce.height,Ce.depth,0,We,vt,Ce.data);else if(P.isData3DTexture)rt?(Qt&&n.texStorage3D(t.TEXTURE_3D,W,je,Ce.width,Ce.height,Ce.depth),et&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Ce.width,Ce.height,Ce.depth,We,vt,Ce.data)):n.texImage3D(t.TEXTURE_3D,0,je,Ce.width,Ce.height,Ce.depth,0,We,vt,Ce.data);else if(P.isFramebufferTexture){if(Qt)if(rt)n.texStorage2D(t.TEXTURE_2D,W,je,Ce.width,Ce.height);else{let me=Ce.width,de=Ce.height;for(let Re=0;Re<W;Re++)n.texImage2D(t.TEXTURE_2D,Re,je,me,de,0,We,vt,null),me>>=1,de>>=1}}else if(Qe.length>0){if(rt&&Qt){const me=Ct(Qe[0]);n.texStorage2D(t.TEXTURE_2D,W,je,me.width,me.height)}for(let me=0,de=Qe.length;me<de;me++)Ne=Qe[me],rt?et&&n.texSubImage2D(t.TEXTURE_2D,me,0,0,We,vt,Ne):n.texImage2D(t.TEXTURE_2D,me,je,We,vt,Ne);P.generateMipmaps=!1}else if(rt){if(Qt){const me=Ct(Ce);n.texStorage2D(t.TEXTURE_2D,W,je,me.width,me.height)}et&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,We,vt,Ce)}else n.texImage2D(t.TEXTURE_2D,0,je,We,vt,Ce);x(P)&&g(fe),pe.__version=ye.version,P.onUpdate&&P.onUpdate(P)}O.__version=P.version}function _t(O,P,ie){if(P.image.length!==6)return;const fe=Ae(O,P),ge=P.source;n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+ie);const ye=i.get(ge);if(ge.version!==ye.__version||fe===!0){n.activeTexture(t.TEXTURE0+ie);const pe=Ht.getPrimaries(Ht.workingColorSpace),we=P.colorSpace===rs?null:Ht.getPrimaries(P.colorSpace),De=P.colorSpace===rs||pe===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,P.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,P.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const st=P.isCompressedTexture||P.image[0].isCompressedTexture,Ce=P.image[0]&&P.image[0].isDataTexture,We=[];for(let de=0;de<6;de++)!st&&!Ce?We[de]=S(P.image[de],!0,r.maxCubemapSize):We[de]=Ce?P.image[de].image:P.image[de],We[de]=ut(P,We[de]);const vt=We[0],je=s.convert(P.format,P.colorSpace),Ne=s.convert(P.type),Qe=w(P.internalFormat,je,Ne,P.colorSpace),rt=P.isVideoTexture!==!0,Qt=ye.__version===void 0||fe===!0,et=ge.dataReady;let W=M(P,vt);oe(t.TEXTURE_CUBE_MAP,P);let me;if(st){rt&&Qt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,W,Qe,vt.width,vt.height);for(let de=0;de<6;de++){me=We[de].mipmaps;for(let Re=0;Re<me.length;Re++){const Ie=me[Re];P.format!==ur?je!==null?rt?et&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Re,0,0,Ie.width,Ie.height,je,Ie.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Re,Qe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?et&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Re,0,0,Ie.width,Ie.height,je,Ne,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Re,Qe,Ie.width,Ie.height,0,je,Ne,Ie.data)}}}else{if(me=P.mipmaps,rt&&Qt){me.length>0&&W++;const de=Ct(We[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,W,Qe,de.width,de.height)}for(let de=0;de<6;de++)if(Ce){rt?et&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,We[de].width,We[de].height,je,Ne,We[de].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Qe,We[de].width,We[de].height,0,je,Ne,We[de].data);for(let Re=0;Re<me.length;Re++){const xt=me[Re].image[de].image;rt?et&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Re+1,0,0,xt.width,xt.height,je,Ne,xt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Re+1,Qe,xt.width,xt.height,0,je,Ne,xt.data)}}else{rt?et&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,je,Ne,We[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Qe,je,Ne,We[de]);for(let Re=0;Re<me.length;Re++){const Ie=me[Re];rt?et&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Re+1,0,0,je,Ne,Ie.image[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Re+1,Qe,je,Ne,Ie.image[de])}}}x(P)&&g(t.TEXTURE_CUBE_MAP),ye.__version=ge.version,P.onUpdate&&P.onUpdate(P)}O.__version=P.version}function se(O,P,ie,fe,ge,ye){const pe=s.convert(ie.format,ie.colorSpace),we=s.convert(ie.type),De=w(ie.internalFormat,pe,we,ie.colorSpace);if(!i.get(P).__hasExternalTextures){const Ce=Math.max(1,P.width>>ye),We=Math.max(1,P.height>>ye);ge===t.TEXTURE_3D||ge===t.TEXTURE_2D_ARRAY?n.texImage3D(ge,ye,De,Ce,We,P.depth,0,pe,we,null):n.texImage2D(ge,ye,De,Ce,We,0,pe,we,null)}n.bindFramebuffer(t.FRAMEBUFFER,O),gt(P)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,ge,i.get(ie).__webglTexture,0,qe(P)):(ge===t.TEXTURE_2D||ge>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,fe,ge,i.get(ie).__webglTexture,ye),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ee(O,P,ie){if(t.bindRenderbuffer(t.RENDERBUFFER,O),P.depthBuffer&&!P.stencilBuffer){let fe=t.DEPTH_COMPONENT24;if(ie||gt(P)){const ge=P.depthTexture;ge&&ge.isDepthTexture&&(ge.type===as?fe=t.DEPTH_COMPONENT32F:ge.type===ua&&(fe=t.DEPTH_COMPONENT24));const ye=qe(P);gt(P)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ye,fe,P.width,P.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,fe,P.width,P.height)}else t.renderbufferStorage(t.RENDERBUFFER,fe,P.width,P.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,O)}else if(P.depthBuffer&&P.stencilBuffer){const fe=qe(P);ie&&gt(P)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,t.DEPTH24_STENCIL8,P.width,P.height):gt(P)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,t.DEPTH24_STENCIL8,P.width,P.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,O)}else{const fe=P.textures;for(let ge=0;ge<fe.length;ge++){const ye=fe[ge],pe=s.convert(ye.format,ye.colorSpace),we=s.convert(ye.type),De=w(ye.internalFormat,pe,we,ye.colorSpace),st=qe(P);ie&&gt(P)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,st,De,P.width,P.height):gt(P)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,st,De,P.width,P.height):t.renderbufferStorage(t.RENDERBUFFER,De,P.width,P.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ue(O,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,O),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),z(P.depthTexture,0);const fe=i.get(P.depthTexture).__webglTexture,ge=qe(P);if(P.depthTexture.format===Zo)gt(P)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,fe,0,ge):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,fe,0);else if(P.depthTexture.format===Tl)gt(P)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,fe,0,ge):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function be(O){const P=i.get(O),ie=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!P.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");Ue(P.__webglFramebuffer,O)}else if(ie){P.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)n.bindFramebuffer(t.FRAMEBUFFER,P.__webglFramebuffer[fe]),P.__webglDepthbuffer[fe]=t.createRenderbuffer(),Ee(P.__webglDepthbuffer[fe],O,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=t.createRenderbuffer(),Ee(P.__webglDepthbuffer,O,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function dt(O,P,ie){const fe=i.get(O);P!==void 0&&se(fe.__webglFramebuffer,O,O.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),ie!==void 0&&be(O)}function ft(O){const P=O.texture,ie=i.get(O),fe=i.get(P);O.addEventListener("dispose",U);const ge=O.textures,ye=O.isWebGLCubeRenderTarget===!0,pe=ge.length>1;if(pe||(fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture()),fe.__version=P.version,o.memory.textures++),ye){ie.__webglFramebuffer=[];for(let we=0;we<6;we++)if(P.mipmaps&&P.mipmaps.length>0){ie.__webglFramebuffer[we]=[];for(let De=0;De<P.mipmaps.length;De++)ie.__webglFramebuffer[we][De]=t.createFramebuffer()}else ie.__webglFramebuffer[we]=t.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){ie.__webglFramebuffer=[];for(let we=0;we<P.mipmaps.length;we++)ie.__webglFramebuffer[we]=t.createFramebuffer()}else ie.__webglFramebuffer=t.createFramebuffer();if(pe)for(let we=0,De=ge.length;we<De;we++){const st=i.get(ge[we]);st.__webglTexture===void 0&&(st.__webglTexture=t.createTexture(),o.memory.textures++)}if(O.samples>0&&gt(O)===!1){ie.__webglMultisampledFramebuffer=t.createFramebuffer(),ie.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let we=0;we<ge.length;we++){const De=ge[we];ie.__webglColorRenderbuffer[we]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,ie.__webglColorRenderbuffer[we]);const st=s.convert(De.format,De.colorSpace),Ce=s.convert(De.type),We=w(De.internalFormat,st,Ce,De.colorSpace,O.isXRRenderTarget===!0),vt=qe(O);t.renderbufferStorageMultisample(t.RENDERBUFFER,vt,We,O.width,O.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,ie.__webglColorRenderbuffer[we])}t.bindRenderbuffer(t.RENDERBUFFER,null),O.depthBuffer&&(ie.__webglDepthRenderbuffer=t.createRenderbuffer(),Ee(ie.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ye){n.bindTexture(t.TEXTURE_CUBE_MAP,fe.__webglTexture),oe(t.TEXTURE_CUBE_MAP,P);for(let we=0;we<6;we++)if(P.mipmaps&&P.mipmaps.length>0)for(let De=0;De<P.mipmaps.length;De++)se(ie.__webglFramebuffer[we][De],O,P,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+we,De);else se(ie.__webglFramebuffer[we],O,P,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);x(P)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(pe){for(let we=0,De=ge.length;we<De;we++){const st=ge[we],Ce=i.get(st);n.bindTexture(t.TEXTURE_2D,Ce.__webglTexture),oe(t.TEXTURE_2D,st),se(ie.__webglFramebuffer,O,st,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,0),x(st)&&g(t.TEXTURE_2D)}n.unbindTexture()}else{let we=t.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(we=O.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(we,fe.__webglTexture),oe(we,P),P.mipmaps&&P.mipmaps.length>0)for(let De=0;De<P.mipmaps.length;De++)se(ie.__webglFramebuffer[De],O,P,t.COLOR_ATTACHMENT0,we,De);else se(ie.__webglFramebuffer,O,P,t.COLOR_ATTACHMENT0,we,0);x(P)&&g(we),n.unbindTexture()}O.depthBuffer&&be(O)}function $(O){const P=O.textures;for(let ie=0,fe=P.length;ie<fe;ie++){const ge=P[ie];if(x(ge)){const ye=O.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,pe=i.get(ge).__webglTexture;n.bindTexture(ye,pe),g(ye),n.unbindTexture()}}}const Vt=[],Ge=[];function Rt(O){if(O.samples>0){if(gt(O)===!1){const P=O.textures,ie=O.width,fe=O.height;let ge=t.COLOR_BUFFER_BIT;const ye=O.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(O),we=P.length>1;if(we)for(let De=0;De<P.length;De++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let De=0;De<P.length;De++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ge|=t.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ge|=t.STENCIL_BUFFER_BIT)),we){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[De]);const st=i.get(P[De]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,st,0)}t.blitFramebuffer(0,0,ie,fe,0,0,ie,fe,ge,t.NEAREST),c===!0&&(Vt.length=0,Ge.length=0,Vt.push(t.COLOR_ATTACHMENT0+De),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Vt.push(ye),Ge.push(ye),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ge)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Vt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),we)for(let De=0;De<P.length;De++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,pe.__webglColorRenderbuffer[De]);const st=i.get(P[De]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,st,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&c){const P=O.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[P])}}}function qe(O){return Math.min(r.maxSamples,O.samples)}function gt(O){const P=i.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function it(O){const P=o.render.frame;h.get(O)!==P&&(h.set(O,P),O.update())}function ut(O,P){const ie=O.colorSpace,fe=O.format,ge=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ie!==bs&&ie!==rs&&(Ht.getTransfer(ie)===Xt?(fe!==ur||ge!==Ss)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),P}function Ct(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(f.width=O.naturalWidth||O.width,f.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(f.width=O.displayWidth,f.height=O.displayHeight):(f.width=O.width,f.height=O.height),f}this.allocateTextureUnit=X,this.resetTextureUnits=A,this.setTexture2D=z,this.setTexture2DArray=ue,this.setTexture3D=he,this.setTextureCube=Se,this.rebindTextures=dt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=se,this.useMultisampledRTT=gt}function y3(t,e){function n(i,r=rs){let s;const o=Ht.getTransfer(r);if(i===Ss)return t.UNSIGNED_BYTE;if(i===Zx)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Jx)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Zb)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Kb)return t.BYTE;if(i===Qb)return t.SHORT;if(i===Kx)return t.UNSIGNED_SHORT;if(i===Qx)return t.INT;if(i===ua)return t.UNSIGNED_INT;if(i===as)return t.FLOAT;if(i===mf)return t.HALF_FLOAT;if(i===Jb)return t.ALPHA;if(i===eC)return t.RGB;if(i===ur)return t.RGBA;if(i===tC)return t.LUMINANCE;if(i===nC)return t.LUMINANCE_ALPHA;if(i===Zo)return t.DEPTH_COMPONENT;if(i===Tl)return t.DEPTH_STENCIL;if(i===iC)return t.RED;if(i===eS)return t.RED_INTEGER;if(i===rC)return t.RG;if(i===tS)return t.RG_INTEGER;if(i===nS)return t.RGBA_INTEGER;if(i===Ud||i===Fd||i===zd||i===Bd)if(o===Xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ud)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fd)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zd)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bd)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ud)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fd)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zd)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bd)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hv||i===Vv||i===Gv||i===Wv)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Hv)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vv)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gv)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wv)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jv||i===$v||i===Xv)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===jv||i===$v)return o===Xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Xv)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qv||i===Yv||i===Kv||i===Qv||i===Zv||i===Jv||i===e0||i===t0||i===n0||i===i0||i===r0||i===s0||i===o0||i===a0)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qv)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yv)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kv)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qv)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zv)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jv)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===e0)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===t0)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===n0)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===i0)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===r0)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===s0)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===o0)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===a0)return o===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hd||i===l0||i===c0)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Hd)return o===Xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===l0)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===c0)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sC||i===u0||i===f0||i===d0)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Hd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===u0)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===f0)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===d0)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gl?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class _3 extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Za extends di{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x3={type:"move"};class ph{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Za,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Za,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Za,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,f=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(f&&e.hand){o=!0;for(const S of e.hand.values()){const x=n.getJointPose(S,i),g=this._getHandJoint(f,S);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const h=f.joints["index-finger-tip"],p=f.joints["thumb-tip"],m=h.position.distanceTo(p.position),_=.02,E=.005;f.inputState.pinching&&m>_+E?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&m<=_-E&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(x3)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),f!==null&&(f.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Za;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const S3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E3=`
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

}`;class M3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new ri,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Es({vertexShader:S3,fragmentShader:E3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new fr(new yf(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class w3 extends va{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,f=null,h=null,p=null,m=null,_=null,E=null;const S=new M3,x=n.getContextAttributes();let g=null,w=null;const M=[],R=[],U=new It;let N=null;const d=new wi;d.layers.enable(1),d.viewport=new Pn;const V=new wi;V.layers.enable(2),V.viewport=new Pn;const L=[d,V],A=new _3;A.layers.enable(1),A.layers.enable(2);let X=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let Ee=M[se];return Ee===void 0&&(Ee=new ph,M[se]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function(se){let Ee=M[se];return Ee===void 0&&(Ee=new ph,M[se]=Ee),Ee.getGripSpace()},this.getHand=function(se){let Ee=M[se];return Ee===void 0&&(Ee=new ph,M[se]=Ee),Ee.getHandSpace()};function z(se){const Ee=R.indexOf(se.inputSource);if(Ee===-1)return;const Ue=M[Ee];Ue!==void 0&&(Ue.update(se.inputSource,se.frame,f||o),Ue.dispatchEvent({type:se.type,data:se.inputSource}))}function ue(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",ue),r.removeEventListener("inputsourceschange",he);for(let se=0;se<M.length;se++){const Ee=R[se];Ee!==null&&(R[se]=null,M[se].disconnect(Ee))}X=null,ce=null,S.reset(),e.setRenderTarget(g),_=null,m=null,p=null,r=null,w=null,_t.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||o},this.setReferenceSpace=function(se){f=se},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return p},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",ue),r.addEventListener("inputsourceschange",he),x.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(U),r.renderState.layers===void 0){const Ee={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,n,Ee),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),w=new ro(_.framebufferWidth,_.framebufferHeight,{format:ur,type:Ss,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Ee=null,Ue=null,be=null;x.depth&&(be=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ee=x.stencil?Tl:Zo,Ue=x.stencil?Gl:ua);const dt={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:s};p=new XRWebGLBinding(r,n),m=p.createProjectionLayer(dt),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),w=new ro(m.textureWidth,m.textureHeight,{format:ur,type:Ss,depthTexture:new gS(m.textureWidth,m.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),f=null,o=await r.requestReferenceSpace(a),_t.setContext(r),_t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function he(se){for(let Ee=0;Ee<se.removed.length;Ee++){const Ue=se.removed[Ee],be=R.indexOf(Ue);be>=0&&(R[be]=null,M[be].disconnect(Ue))}for(let Ee=0;Ee<se.added.length;Ee++){const Ue=se.added[Ee];let be=R.indexOf(Ue);if(be===-1){for(let ft=0;ft<M.length;ft++)if(ft>=R.length){R.push(Ue),be=ft;break}else if(R[ft]===null){R[ft]=Ue,be=ft;break}if(be===-1)break}const dt=M[be];dt&&dt.connect(Ue)}}const Se=new te,ve=new te;function H(se,Ee,Ue){Se.setFromMatrixPosition(Ee.matrixWorld),ve.setFromMatrixPosition(Ue.matrixWorld);const be=Se.distanceTo(ve),dt=Ee.projectionMatrix.elements,ft=Ue.projectionMatrix.elements,$=dt[14]/(dt[10]-1),Vt=dt[14]/(dt[10]+1),Ge=(dt[9]+1)/dt[5],Rt=(dt[9]-1)/dt[5],qe=(dt[8]-1)/dt[0],gt=(ft[8]+1)/ft[0],it=$*qe,ut=$*gt,Ct=be/(-qe+gt),O=Ct*-qe;Ee.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(O),se.translateZ(Ct),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert();const P=$+Ct,ie=Vt+Ct,fe=it-O,ge=ut+(be-O),ye=Ge*Vt/ie*P,pe=Rt*Vt/ie*P;se.projectionMatrix.makePerspective(fe,ge,ye,pe,P,ie),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}function re(se,Ee){Ee===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(Ee.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;S.texture!==null&&(se.near=S.depthNear,se.far=S.depthFar),A.near=V.near=d.near=se.near,A.far=V.far=d.far=se.far,(X!==A.near||ce!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),X=A.near,ce=A.far,d.near=X,d.far=ce,V.near=X,V.far=ce,d.updateProjectionMatrix(),V.updateProjectionMatrix(),se.updateProjectionMatrix());const Ee=se.parent,Ue=A.cameras;re(A,Ee);for(let be=0;be<Ue.length;be++)re(Ue[be],Ee);Ue.length===2?H(A,d,V):A.projectionMatrix.copy(d.projectionMatrix),oe(se,A,Ee)};function oe(se,Ee,Ue){Ue===null?se.matrix.copy(Ee.matrixWorld):(se.matrix.copy(Ue.matrixWorld),se.matrix.invert(),se.matrix.multiply(Ee.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(Ee.projectionMatrix),se.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Sp*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(m===null&&_===null))return c},this.setFoveation=function(se){c=se,m!==null&&(m.fixedFoveation=se),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=se)},this.hasDepthSensing=function(){return S.texture!==null};let Ae=null;function Ve(se,Ee){if(h=Ee.getViewerPose(f||o),E=Ee,h!==null){const Ue=h.views;_!==null&&(e.setRenderTargetFramebuffer(w,_.framebuffer),e.setRenderTarget(w));let be=!1;Ue.length!==A.cameras.length&&(A.cameras.length=0,be=!0);for(let ft=0;ft<Ue.length;ft++){const $=Ue[ft];let Vt=null;if(_!==null)Vt=_.getViewport($);else{const Rt=p.getViewSubImage(m,$);Vt=Rt.viewport,ft===0&&(e.setRenderTargetTextures(w,Rt.colorTexture,m.ignoreDepthValues?void 0:Rt.depthStencilTexture),e.setRenderTarget(w))}let Ge=L[ft];Ge===void 0&&(Ge=new wi,Ge.layers.enable(ft),Ge.viewport=new Pn,L[ft]=Ge),Ge.matrix.fromArray($.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray($.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),ft===0&&(A.matrix.copy(Ge.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),be===!0&&A.cameras.push(Ge)}const dt=r.enabledFeatures;if(dt&&dt.includes("depth-sensing")){const ft=p.getDepthInformation(Ue[0]);ft&&ft.isValid&&ft.texture&&S.init(e,ft,r.renderState)}}for(let Ue=0;Ue<M.length;Ue++){const be=R[Ue],dt=M[Ue];be!==null&&dt!==void 0&&dt.update(be,Ee,f||o)}S.render(e,A),Ae&&Ae(se,Ee),Ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Ee}),E=null}const _t=new mS;_t.setAnimationLoop(Ve),this.setAnimationLoop=function(se){Ae=se},this.dispose=function(){}}}const Fs=new Fr,T3=new yn;function b3(t,e){function n(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function i(x,g){g.color.getRGB(x.fogColor.value,fS(t)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function r(x,g,w,M,R){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(x,g):g.isMeshToonMaterial?(s(x,g),p(x,g)):g.isMeshPhongMaterial?(s(x,g),h(x,g)):g.isMeshStandardMaterial?(s(x,g),m(x,g),g.isMeshPhysicalMaterial&&_(x,g,R)):g.isMeshMatcapMaterial?(s(x,g),E(x,g)):g.isMeshDepthMaterial?s(x,g):g.isMeshDistanceMaterial?(s(x,g),S(x,g)):g.isMeshNormalMaterial?s(x,g):g.isLineBasicMaterial?(o(x,g),g.isLineDashedMaterial&&a(x,g)):g.isPointsMaterial?c(x,g,w,M):g.isSpriteMaterial?f(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,n(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,n(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,n(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===ii&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,n(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===ii&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,n(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,n(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const w=e.get(g),M=w.envMap,R=w.envMapRotation;if(M&&(x.envMap.value=M,Fs.copy(R),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),x.envMapRotation.value.setFromMatrix4(T3.makeRotationFromEuler(Fs)),x.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap){x.lightMap.value=g.lightMap;const U=t._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=g.lightMapIntensity*U,n(g.lightMap,x.lightMapTransform)}g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,x.aoMapTransform))}function o(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,n(g.map,x.mapTransform))}function a(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function c(x,g,w,M){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*w,x.scale.value=M*.5,g.map&&(x.map.value=g.map,n(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,n(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function f(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,n(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,n(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function h(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function p(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function m(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function _(x,g,w){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ii&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=w.texture,x.transmissionSamplerSize.value.set(w.width,w.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,g){g.matcap&&(x.matcap.value=g.matcap)}function S(x,g){const w=e.get(g).light;x.referencePosition.value.setFromMatrixPosition(w.matrixWorld),x.nearDistance.value=w.shadow.camera.near,x.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function C3(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,M){const R=M.program;i.uniformBlockBinding(w,R)}function f(w,M){let R=r[w.id];R===void 0&&(E(w),R=h(w),r[w.id]=R,w.addEventListener("dispose",x));const U=M.program;i.updateUBOMapping(w,U);const N=e.render.frame;s[w.id]!==N&&(m(w),s[w.id]=N)}function h(w){const M=p();w.__bindingPointIndex=M;const R=t.createBuffer(),U=w.__size,N=w.usage;return t.bindBuffer(t.UNIFORM_BUFFER,R),t.bufferData(t.UNIFORM_BUFFER,U,N),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,R),R}function p(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(w){const M=r[w.id],R=w.uniforms,U=w.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let N=0,d=R.length;N<d;N++){const V=Array.isArray(R[N])?R[N]:[R[N]];for(let L=0,A=V.length;L<A;L++){const X=V[L];if(_(X,N,L,U)===!0){const ce=X.__offset,z=Array.isArray(X.value)?X.value:[X.value];let ue=0;for(let he=0;he<z.length;he++){const Se=z[he],ve=S(Se);typeof Se=="number"||typeof Se=="boolean"?(X.__data[0]=Se,t.bufferSubData(t.UNIFORM_BUFFER,ce+ue,X.__data)):Se.isMatrix3?(X.__data[0]=Se.elements[0],X.__data[1]=Se.elements[1],X.__data[2]=Se.elements[2],X.__data[3]=0,X.__data[4]=Se.elements[3],X.__data[5]=Se.elements[4],X.__data[6]=Se.elements[5],X.__data[7]=0,X.__data[8]=Se.elements[6],X.__data[9]=Se.elements[7],X.__data[10]=Se.elements[8],X.__data[11]=0):(Se.toArray(X.__data,ue),ue+=ve.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,ce,X.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function _(w,M,R,U){const N=w.value,d=M+"_"+R;if(U[d]===void 0)return typeof N=="number"||typeof N=="boolean"?U[d]=N:U[d]=N.clone(),!0;{const V=U[d];if(typeof N=="number"||typeof N=="boolean"){if(V!==N)return U[d]=N,!0}else if(V.equals(N)===!1)return V.copy(N),!0}return!1}function E(w){const M=w.uniforms;let R=0;const U=16;for(let d=0,V=M.length;d<V;d++){const L=Array.isArray(M[d])?M[d]:[M[d]];for(let A=0,X=L.length;A<X;A++){const ce=L[A],z=Array.isArray(ce.value)?ce.value:[ce.value];for(let ue=0,he=z.length;ue<he;ue++){const Se=z[ue],ve=S(Se),H=R%U;H!==0&&U-H<ve.boundary&&(R+=U-H),ce.__data=new Float32Array(ve.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=R,R+=ve.storage}}}const N=R%U;return N>0&&(R+=U-N),w.__size=R,w.__cache={},this}function S(w){const M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function x(w){const M=w.target;M.removeEventListener("dispose",x);const R=o.indexOf(M.__bindingPointIndex);o.splice(R,1),t.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function g(){for(const w in r)t.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:f,dispose:g}}class A3{constructor(e={}){const{canvas:n=yC(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:f=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const _=new Uint32Array(4),E=new Int32Array(4);let S=null,x=null;const g=[],w=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ir,this._useLegacyLights=!1,this.toneMapping=vs,this.toneMappingExposure=1;const M=this;let R=!1,U=0,N=0,d=null,V=-1,L=null;const A=new Pn,X=new Pn;let ce=null;const z=new Ot(0);let ue=0,he=n.width,Se=n.height,ve=1,H=null,re=null;const oe=new Pn(0,0,he,Se),Ae=new Pn(0,0,he,Se);let Ve=!1;const _t=new pS;let se=!1,Ee=!1;const Ue=new yn,be=new te,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ft(){return d===null?ve:1}let $=i;function Vt(D,j){return n.getContext(D,j)}try{const D={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:f,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Rm}`),n.addEventListener("webglcontextlost",W,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",de,!1),$===null){const j="webgl2";if($=Vt(j,D),$===null)throw Vt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Ge,Rt,qe,gt,it,ut,Ct,O,P,ie,fe,ge,ye,pe,we,De,st,Ce,We,vt,je,Ne,Qe,rt;function Qt(){Ge=new OP($),Ge.init(),Ne=new y3($,Ge),Rt=new RP($,Ge,e,Ne),qe=new g3($),gt=new zP($),it=new n3,ut=new v3($,Ge,qe,it,Rt,Ne,gt),Ct=new LP(M),O=new kP(M),P=new jC($),Qe=new CP($,P),ie=new UP($,P,gt,Qe),fe=new HP($,ie,P,gt),We=new BP($,Rt,ut),De=new PP(it),ge=new t3(M,Ct,O,Ge,Rt,Qe,De),ye=new b3(M,it),pe=new r3,we=new u3(Ge),Ce=new bP(M,Ct,O,qe,fe,m,c),st=new m3(M,fe,Rt),rt=new C3($,gt,Rt,qe),vt=new AP($,Ge,gt),je=new FP($,Ge,gt),gt.programs=ge.programs,M.capabilities=Rt,M.extensions=Ge,M.properties=it,M.renderLists=pe,M.shadowMap=st,M.state=qe,M.info=gt}Qt();const et=new w3(M,$);this.xr=et,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const D=Ge.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Ge.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(D){D!==void 0&&(ve=D,this.setSize(he,Se,!1))},this.getSize=function(D){return D.set(he,Se)},this.setSize=function(D,j,Z=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}he=D,Se=j,n.width=Math.floor(D*ve),n.height=Math.floor(j*ve),Z===!0&&(n.style.width=D+"px",n.style.height=j+"px"),this.setViewport(0,0,D,j)},this.getDrawingBufferSize=function(D){return D.set(he*ve,Se*ve).floor()},this.setDrawingBufferSize=function(D,j,Z){he=D,Se=j,ve=Z,n.width=Math.floor(D*Z),n.height=Math.floor(j*Z),this.setViewport(0,0,D,j)},this.getCurrentViewport=function(D){return D.copy(A)},this.getViewport=function(D){return D.copy(oe)},this.setViewport=function(D,j,Z,Q){D.isVector4?oe.set(D.x,D.y,D.z,D.w):oe.set(D,j,Z,Q),qe.viewport(A.copy(oe).multiplyScalar(ve).round())},this.getScissor=function(D){return D.copy(Ae)},this.setScissor=function(D,j,Z,Q){D.isVector4?Ae.set(D.x,D.y,D.z,D.w):Ae.set(D,j,Z,Q),qe.scissor(X.copy(Ae).multiplyScalar(ve).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(D){qe.setScissorTest(Ve=D)},this.setOpaqueSort=function(D){H=D},this.setTransparentSort=function(D){re=D},this.getClearColor=function(D){return D.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(D=!0,j=!0,Z=!0){let Q=0;if(D){let K=!1;if(d!==null){const Pe=d.texture.format;K=Pe===nS||Pe===tS||Pe===eS}if(K){const Pe=d.texture.type,ze=Pe===Ss||Pe===ua||Pe===Kx||Pe===Gl||Pe===Zx||Pe===Jx,He=Ce.getClearColor(),Xe=Ce.getClearAlpha(),Ye=He.r,nt=He.g,ot=He.b;ze?(_[0]=Ye,_[1]=nt,_[2]=ot,_[3]=Xe,$.clearBufferuiv($.COLOR,0,_)):(E[0]=Ye,E[1]=nt,E[2]=ot,E[3]=Xe,$.clearBufferiv($.COLOR,0,E))}else Q|=$.COLOR_BUFFER_BIT}j&&(Q|=$.DEPTH_BUFFER_BIT),Z&&(Q|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",W,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",de,!1),pe.dispose(),we.dispose(),it.dispose(),Ct.dispose(),O.dispose(),fe.dispose(),Qe.dispose(),rt.dispose(),ge.dispose(),et.dispose(),et.removeEventListener("sessionstart",wt),et.removeEventListener("sessionend",yi),Sn.stop()};function W(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const D=gt.autoReset,j=st.enabled,Z=st.autoUpdate,Q=st.needsUpdate,K=st.type;Qt(),gt.autoReset=D,st.enabled=j,st.autoUpdate=Z,st.needsUpdate=Q,st.type=K}function de(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Re(D){const j=D.target;j.removeEventListener("dispose",Re),Ie(j)}function Ie(D){xt(D),it.remove(D)}function xt(D){const j=it.get(D).programs;j!==void 0&&(j.forEach(function(Z){ge.releaseProgram(Z)}),D.isShaderMaterial&&ge.releaseShaderCache(D))}this.renderBufferDirect=function(D,j,Z,Q,K,Pe){j===null&&(j=dt);const ze=K.isMesh&&K.matrixWorld.determinant()<0,He=Kl(D,j,Z,Q,K);qe.setMaterial(Q,ze);let Xe=Z.index,Ye=1;if(Q.wireframe===!0){if(Xe=ie.getWireframeAttribute(Z),Xe===void 0)return;Ye=2}const nt=Z.drawRange,ot=Z.attributes.position;let Zt=nt.start*Ye,pn=(nt.start+nt.count)*Ye;Pe!==null&&(Zt=Math.max(Zt,Pe.start*Ye),pn=Math.min(pn,(Pe.start+Pe.count)*Ye)),Xe!==null?(Zt=Math.max(Zt,0),pn=Math.min(pn,Xe.count)):ot!=null&&(Zt=Math.max(Zt,0),pn=Math.min(pn,ot.count));const Vn=pn-Zt;if(Vn<0||Vn===1/0)return;Qe.setup(K,Q,He,Z,Xe);let oi,At=vt;if(Xe!==null&&(oi=P.get(Xe),At=je,At.setIndex(oi)),K.isMesh)Q.wireframe===!0?(qe.setLineWidth(Q.wireframeLinewidth*ft()),At.setMode($.LINES)):At.setMode($.TRIANGLES);else if(K.isLine){let tt=Q.linewidth;tt===void 0&&(tt=1),qe.setLineWidth(tt*ft()),K.isLineSegments?At.setMode($.LINES):K.isLineLoop?At.setMode($.LINE_LOOP):At.setMode($.LINE_STRIP)}else K.isPoints?At.setMode($.POINTS):K.isSprite&&At.setMode($.TRIANGLES);if(K.isBatchedMesh)K._multiDrawInstances!==null?At.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances):At.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)At.renderInstances(Zt,Vn,K.count);else if(Z.isInstancedBufferGeometry){const tt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Hr=Math.min(Z.instanceCount,tt);At.renderInstances(Zt,Vn,Hr)}else At.render(Zt,Vn)};function Bt(D,j,Z){D.transparent===!0&&D.side===Rr&&D.forceSinglePass===!1?(D.side=ii,D.needsUpdate=!0,lo(D,j,Z),D.side=xs,D.needsUpdate=!0,lo(D,j,Z),D.side=Rr):lo(D,j,Z)}this.compile=function(D,j,Z=null){Z===null&&(Z=D),x=we.get(Z),x.init(j),w.push(x),Z.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),D!==Z&&D.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),x.setupLights(M._useLegacyLights);const Q=new Set;return D.traverse(function(K){const Pe=K.material;if(Pe)if(Array.isArray(Pe))for(let ze=0;ze<Pe.length;ze++){const He=Pe[ze];Bt(He,Z,K),Q.add(He)}else Bt(Pe,Z,K),Q.add(Pe)}),w.pop(),x=null,Q},this.compileAsync=function(D,j,Z=null){const Q=this.compile(D,j,Z);return new Promise(K=>{function Pe(){if(Q.forEach(function(ze){it.get(ze).currentProgram.isReady()&&Q.delete(ze)}),Q.size===0){K(D);return}setTimeout(Pe,10)}Ge.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let St=null;function Pt(D){St&&St(D)}function wt(){Sn.stop()}function yi(){Sn.start()}const Sn=new mS;Sn.setAnimationLoop(Pt),typeof self<"u"&&Sn.setContext(self),this.setAnimationLoop=function(D){St=D,et.setAnimationLoop(D),D===null?Sn.stop():Sn.start()},et.addEventListener("sessionstart",wt),et.addEventListener("sessionend",yi),this.render=function(D,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(j),j=et.getCamera()),D.isScene===!0&&D.onBeforeRender(M,D,j,d),x=we.get(D,w.length),x.init(j),w.push(x),Ue.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),_t.setFromProjectionMatrix(Ue),Ee=this.localClippingEnabled,se=De.init(this.clippingPlanes,Ee),S=pe.get(D,g.length),S.init(),g.push(S),Sa(D,j,0,M.sortObjects),S.finish(),M.sortObjects===!0&&S.sort(H,re);const Z=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1;Z&&Ce.addToRenderList(S,D),this.info.render.frame++,se===!0&&De.beginShadows();const Q=x.state.shadowsArray;st.render(Q,D,j),se===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=S.opaque,Pe=S.transmissive;if(x.setupLights(M._useLegacyLights),j.isArrayCamera){const ze=j.cameras;if(Pe.length>0)for(let He=0,Xe=ze.length;He<Xe;He++){const Ye=ze[He];yr(K,Pe,D,Ye)}Z&&Ce.render(D);for(let He=0,Xe=ze.length;He<Xe;He++){const Ye=ze[He];vr(S,D,Ye,Ye.viewport)}}else Pe.length>0&&yr(K,Pe,D,j),Z&&Ce.render(D),vr(S,D,j);d!==null&&(ut.updateMultisampleRenderTarget(d),ut.updateRenderTargetMipmap(d)),D.isScene===!0&&D.onAfterRender(M,D,j),Qe.resetDefaultState(),V=-1,L=null,w.pop(),w.length>0?(x=w[w.length-1],se===!0&&De.setGlobalState(M.clippingPlanes,x.state.camera)):x=null,g.pop(),g.length>0?S=g[g.length-1]:S=null};function Sa(D,j,Z,Q){if(D.visible===!1)return;if(D.layers.test(j.layers)){if(D.isGroup)Z=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(j);else if(D.isLight)x.pushLight(D),D.castShadow&&x.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||_t.intersectsSprite(D)){Q&&be.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ue);const ze=fe.update(D),He=D.material;He.visible&&S.push(D,ze,He,Z,be.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||_t.intersectsObject(D))){const ze=fe.update(D),He=D.material;if(Q&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),be.copy(D.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),be.copy(ze.boundingSphere.center)),be.applyMatrix4(D.matrixWorld).applyMatrix4(Ue)),Array.isArray(He)){const Xe=ze.groups;for(let Ye=0,nt=Xe.length;Ye<nt;Ye++){const ot=Xe[Ye],Zt=He[ot.materialIndex];Zt&&Zt.visible&&S.push(D,ze,Zt,Z,be.z,ot)}}else He.visible&&S.push(D,ze,He,Z,be.z,null)}}const Pe=D.children;for(let ze=0,He=Pe.length;ze<He;ze++)Sa(Pe[ze],j,Z,Q)}function vr(D,j,Z,Q){const K=D.opaque,Pe=D.transmissive,ze=D.transparent;x.setupLightsView(Z),se===!0&&De.setGlobalState(M.clippingPlanes,Z),Q&&qe.viewport(A.copy(Q)),K.length>0&&Br(K,j,Z),Pe.length>0&&Br(Pe,j,Z),ze.length>0&&Br(ze,j,Z),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function yr(D,j,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[Q.id]===void 0&&(x.state.transmissionRenderTarget[Q.id]=new ro(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?mf:Ss,minFilter:Ys,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const Pe=x.state.transmissionRenderTarget[Q.id],ze=Q.viewport||A;Pe.setSize(ze.z,ze.w);const He=M.getRenderTarget();M.setRenderTarget(Pe),M.getClearColor(z),ue=M.getClearAlpha(),ue<1&&M.setClearColor(16777215,.5),M.clear();const Xe=M.toneMapping;M.toneMapping=vs;const Ye=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),x.setupLightsView(Q),se===!0&&De.setGlobalState(M.clippingPlanes,Q),Br(D,Z,Q),ut.updateMultisampleRenderTarget(Pe),ut.updateRenderTargetMipmap(Pe),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let ot=0,Zt=j.length;ot<Zt;ot++){const pn=j[ot],Vn=pn.object,oi=pn.geometry,At=pn.material,tt=pn.group;if(At.side===Rr&&Vn.layers.test(Q.layers)){const Hr=At.side;At.side=ii,At.needsUpdate=!0,Cs(Vn,Z,Q,oi,At,tt),At.side=Hr,At.needsUpdate=!0,nt=!0}}nt===!0&&(ut.updateMultisampleRenderTarget(Pe),ut.updateRenderTargetMipmap(Pe))}M.setRenderTarget(He),M.setClearColor(z,ue),Ye!==void 0&&(Q.viewport=Ye),M.toneMapping=Xe}function Br(D,j,Z){const Q=j.isScene===!0?j.overrideMaterial:null;for(let K=0,Pe=D.length;K<Pe;K++){const ze=D[K],He=ze.object,Xe=ze.geometry,Ye=Q===null?ze.material:Q,nt=ze.group;He.layers.test(Z.layers)&&Cs(He,j,Z,Xe,Ye,nt)}}function Cs(D,j,Z,Q,K,Pe){D.onBeforeRender(M,j,Z,Q,K,Pe),D.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),K.onBeforeRender(M,j,Z,Q,D,Pe),K.transparent===!0&&K.side===Rr&&K.forceSinglePass===!1?(K.side=ii,K.needsUpdate=!0,M.renderBufferDirect(Z,j,Q,K,D,Pe),K.side=xs,K.needsUpdate=!0,M.renderBufferDirect(Z,j,Q,K,D,Pe),K.side=Rr):M.renderBufferDirect(Z,j,Q,K,D,Pe),D.onAfterRender(M,j,Z,Q,K,Pe)}function lo(D,j,Z){j.isScene!==!0&&(j=dt);const Q=it.get(D),K=x.state.lights,Pe=x.state.shadowsArray,ze=K.state.version,He=ge.getParameters(D,K.state,Pe,j,Z),Xe=ge.getProgramCacheKey(He);let Ye=Q.programs;Q.environment=D.isMeshStandardMaterial?j.environment:null,Q.fog=j.fog,Q.envMap=(D.isMeshStandardMaterial?O:Ct).get(D.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&D.envMap===null?j.environmentRotation:D.envMapRotation,Ye===void 0&&(D.addEventListener("dispose",Re),Ye=new Map,Q.programs=Ye);let nt=Ye.get(Xe);if(nt!==void 0){if(Q.currentProgram===nt&&Q.lightsStateVersion===ze)return Yl(D,He),nt}else He.uniforms=ge.getUniforms(D),D.onBuild(Z,He,M),D.onBeforeCompile(He,M),nt=ge.acquireProgram(He,Xe),Ye.set(Xe,nt),Q.uniforms=He.uniforms;const ot=Q.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(ot.clippingPlanes=De.uniform),Yl(D,He),Q.needsLights=Wf(D),Q.lightsStateVersion=ze,Q.needsLights&&(ot.ambientLightColor.value=K.state.ambient,ot.lightProbe.value=K.state.probe,ot.directionalLights.value=K.state.directional,ot.directionalLightShadows.value=K.state.directionalShadow,ot.spotLights.value=K.state.spot,ot.spotLightShadows.value=K.state.spotShadow,ot.rectAreaLights.value=K.state.rectArea,ot.ltc_1.value=K.state.rectAreaLTC1,ot.ltc_2.value=K.state.rectAreaLTC2,ot.pointLights.value=K.state.point,ot.pointLightShadows.value=K.state.pointShadow,ot.hemisphereLights.value=K.state.hemi,ot.directionalShadowMap.value=K.state.directionalShadowMap,ot.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ot.spotShadowMap.value=K.state.spotShadowMap,ot.spotLightMatrix.value=K.state.spotLightMatrix,ot.spotLightMap.value=K.state.spotLightMap,ot.pointShadowMap.value=K.state.pointShadowMap,ot.pointShadowMatrix.value=K.state.pointShadowMatrix),Q.currentProgram=nt,Q.uniformsList=null,nt}function ql(D){if(D.uniformsList===null){const j=D.currentProgram.getUniforms();D.uniformsList=lu.seqWithValue(j.seq,D.uniforms)}return D.uniformsList}function Yl(D,j){const Z=it.get(D);Z.outputColorSpace=j.outputColorSpace,Z.batching=j.batching,Z.instancing=j.instancing,Z.instancingColor=j.instancingColor,Z.instancingMorph=j.instancingMorph,Z.skinning=j.skinning,Z.morphTargets=j.morphTargets,Z.morphNormals=j.morphNormals,Z.morphColors=j.morphColors,Z.morphTargetsCount=j.morphTargetsCount,Z.numClippingPlanes=j.numClippingPlanes,Z.numIntersection=j.numClipIntersection,Z.vertexAlphas=j.vertexAlphas,Z.vertexTangents=j.vertexTangents,Z.toneMapping=j.toneMapping}function Kl(D,j,Z,Q,K){j.isScene!==!0&&(j=dt),ut.resetTextureUnits();const Pe=j.fog,ze=Q.isMeshStandardMaterial?j.environment:null,He=d===null?M.outputColorSpace:d.isXRRenderTarget===!0?d.texture.colorSpace:bs,Xe=(Q.isMeshStandardMaterial?O:Ct).get(Q.envMap||ze),Ye=Q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,nt=!!Z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ot=!!Z.morphAttributes.position,Zt=!!Z.morphAttributes.normal,pn=!!Z.morphAttributes.color;let Vn=vs;Q.toneMapped&&(d===null||d.isXRRenderTarget===!0)&&(Vn=M.toneMapping);const oi=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,At=oi!==void 0?oi.length:0,tt=it.get(Q),Hr=x.state.lights;if(se===!0&&(Ee===!0||D!==L)){const Nn=D===L&&Q.id===V;De.setState(Q,D,Nn)}let Gt=!1;Q.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Hr.state.version||tt.outputColorSpace!==He||K.isBatchedMesh&&tt.batching===!1||!K.isBatchedMesh&&tt.batching===!0||K.isInstancedMesh&&tt.instancing===!1||!K.isInstancedMesh&&tt.instancing===!0||K.isSkinnedMesh&&tt.skinning===!1||!K.isSkinnedMesh&&tt.skinning===!0||K.isInstancedMesh&&tt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&tt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&tt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&tt.instancingMorph===!1&&K.morphTexture!==null||tt.envMap!==Xe||Q.fog===!0&&tt.fog!==Pe||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==De.numPlanes||tt.numIntersection!==De.numIntersection)||tt.vertexAlphas!==Ye||tt.vertexTangents!==nt||tt.morphTargets!==ot||tt.morphNormals!==Zt||tt.morphColors!==pn||tt.toneMapping!==Vn||tt.morphTargetsCount!==At)&&(Gt=!0):(Gt=!0,tt.__version=Q.version);let Di=tt.currentProgram;Gt===!0&&(Di=lo(Q,j,K));let Ea=!1,un=!1,Xi=!1;const ln=Di.getUniforms(),qi=tt.uniforms;if(qe.useProgram(Di.program)&&(Ea=!0,un=!0,Xi=!0),Q.id!==V&&(V=Q.id,un=!0),Ea||L!==D){ln.setValue($,"projectionMatrix",D.projectionMatrix),ln.setValue($,"viewMatrix",D.matrixWorldInverse);const Nn=ln.map.cameraPosition;Nn!==void 0&&Nn.setValue($,be.setFromMatrixPosition(D.matrixWorld)),Rt.logarithmicDepthBuffer&&ln.setValue($,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&ln.setValue($,"isOrthographic",D.isOrthographicCamera===!0),L!==D&&(L=D,un=!0,Xi=!0)}if(K.isSkinnedMesh){ln.setOptional($,K,"bindMatrix"),ln.setOptional($,K,"bindMatrixInverse");const Nn=K.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),ln.setValue($,"boneTexture",Nn.boneTexture,ut))}K.isBatchedMesh&&(ln.setOptional($,K,"batchingTexture"),ln.setValue($,"batchingTexture",K._matricesTexture,ut));const Ma=Z.morphAttributes;if((Ma.position!==void 0||Ma.normal!==void 0||Ma.color!==void 0)&&We.update(K,Z,Di),(un||tt.receiveShadow!==K.receiveShadow)&&(tt.receiveShadow=K.receiveShadow,ln.setValue($,"receiveShadow",K.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(qi.envMap.value=Xe,qi.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&j.environment!==null&&(qi.envMapIntensity.value=j.environmentIntensity),un&&(ln.setValue($,"toneMappingExposure",M.toneMappingExposure),tt.needsLights&&Gf(qi,Xi),Pe&&Q.fog===!0&&ye.refreshFogUniforms(qi,Pe),ye.refreshMaterialUniforms(qi,Q,ve,Se,x.state.transmissionRenderTarget[D.id]),lu.upload($,ql(tt),qi,ut)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(lu.upload($,ql(tt),qi,ut),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&ln.setValue($,"center",K.center),ln.setValue($,"modelViewMatrix",K.modelViewMatrix),ln.setValue($,"normalMatrix",K.normalMatrix),ln.setValue($,"modelMatrix",K.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Nn=Q.uniformsGroups;for(let co=0,uo=Nn.length;co<uo;co++){const wa=Nn[co];rt.update(wa,Di),rt.bind(wa,Di)}}return Di}function Gf(D,j){D.ambientLightColor.needsUpdate=j,D.lightProbe.needsUpdate=j,D.directionalLights.needsUpdate=j,D.directionalLightShadows.needsUpdate=j,D.pointLights.needsUpdate=j,D.pointLightShadows.needsUpdate=j,D.spotLights.needsUpdate=j,D.spotLightShadows.needsUpdate=j,D.rectAreaLights.needsUpdate=j,D.hemisphereLights.needsUpdate=j}function Wf(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return d},this.setRenderTargetTextures=function(D,j,Z){it.get(D.texture).__webglTexture=j,it.get(D.depthTexture).__webglTexture=Z;const Q=it.get(D);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=Z===void 0,Q.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,j){const Z=it.get(D);Z.__webglFramebuffer=j,Z.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(D,j=0,Z=0){d=D,U=j,N=Z;let Q=!0,K=null,Pe=!1,ze=!1;if(D){const Xe=it.get(D);Xe.__useDefaultFramebuffer!==void 0?(qe.bindFramebuffer($.FRAMEBUFFER,null),Q=!1):Xe.__webglFramebuffer===void 0?ut.setupRenderTarget(D):Xe.__hasExternalTextures&&ut.rebindTextures(D,it.get(D.texture).__webglTexture,it.get(D.depthTexture).__webglTexture);const Ye=D.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(ze=!0);const nt=it.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(nt[j])?K=nt[j][Z]:K=nt[j],Pe=!0):D.samples>0&&ut.useMultisampledRTT(D)===!1?K=it.get(D).__webglMultisampledFramebuffer:Array.isArray(nt)?K=nt[Z]:K=nt,A.copy(D.viewport),X.copy(D.scissor),ce=D.scissorTest}else A.copy(oe).multiplyScalar(ve).floor(),X.copy(Ae).multiplyScalar(ve).floor(),ce=Ve;if(qe.bindFramebuffer($.FRAMEBUFFER,K)&&Q&&qe.drawBuffers(D,K),qe.viewport(A),qe.scissor(X),qe.setScissorTest(ce),Pe){const Xe=it.get(D.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+j,Xe.__webglTexture,Z)}else if(ze){const Xe=it.get(D.texture),Ye=j||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,Xe.__webglTexture,Z||0,Ye)}V=-1},this.readRenderTargetPixels=function(D,j,Z,Q,K,Pe,ze){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=it.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ze!==void 0&&(He=He[ze]),He){qe.bindFramebuffer($.FRAMEBUFFER,He);try{const Xe=D.texture,Ye=Xe.format,nt=Xe.type;if(!Rt.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=D.width-Q&&Z>=0&&Z<=D.height-K&&$.readPixels(j,Z,Q,K,Ne.convert(Ye),Ne.convert(nt),Pe)}finally{const Xe=d!==null?it.get(d).__webglFramebuffer:null;qe.bindFramebuffer($.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(D,j,Z=0){const Q=Math.pow(2,-Z),K=Math.floor(j.image.width*Q),Pe=Math.floor(j.image.height*Q);ut.setTexture2D(j,0),$.copyTexSubImage2D($.TEXTURE_2D,Z,0,0,D.x,D.y,K,Pe),qe.unbindTexture()},this.copyTextureToTexture=function(D,j,Z,Q=0){const K=j.image.width,Pe=j.image.height,ze=Ne.convert(Z.format),He=Ne.convert(Z.type);ut.setTexture2D(Z,0),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,Z.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,Z.unpackAlignment),j.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Q,D.x,D.y,K,Pe,ze,He,j.image.data):j.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Q,D.x,D.y,j.mipmaps[0].width,j.mipmaps[0].height,ze,j.mipmaps[0].data):$.texSubImage2D($.TEXTURE_2D,Q,D.x,D.y,ze,He,j.image),Q===0&&Z.generateMipmaps&&$.generateMipmap($.TEXTURE_2D),qe.unbindTexture()},this.copyTextureToTexture3D=function(D,j,Z,Q,K=0){const Pe=D.max.x-D.min.x,ze=D.max.y-D.min.y,He=D.max.z-D.min.z,Xe=Ne.convert(Q.format),Ye=Ne.convert(Q.type);let nt;if(Q.isData3DTexture)ut.setTexture3D(Q,0),nt=$.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)ut.setTexture2DArray(Q,0),nt=$.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,Q.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,Q.unpackAlignment);const ot=$.getParameter($.UNPACK_ROW_LENGTH),Zt=$.getParameter($.UNPACK_IMAGE_HEIGHT),pn=$.getParameter($.UNPACK_SKIP_PIXELS),Vn=$.getParameter($.UNPACK_SKIP_ROWS),oi=$.getParameter($.UNPACK_SKIP_IMAGES),At=Z.isCompressedTexture?Z.mipmaps[K]:Z.image;$.pixelStorei($.UNPACK_ROW_LENGTH,At.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,At.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,D.min.x),$.pixelStorei($.UNPACK_SKIP_ROWS,D.min.y),$.pixelStorei($.UNPACK_SKIP_IMAGES,D.min.z),Z.isDataTexture||Z.isData3DTexture?$.texSubImage3D(nt,K,j.x,j.y,j.z,Pe,ze,He,Xe,Ye,At.data):Q.isCompressedArrayTexture?$.compressedTexSubImage3D(nt,K,j.x,j.y,j.z,Pe,ze,He,Xe,At.data):$.texSubImage3D(nt,K,j.x,j.y,j.z,Pe,ze,He,Xe,Ye,At),$.pixelStorei($.UNPACK_ROW_LENGTH,ot),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Zt),$.pixelStorei($.UNPACK_SKIP_PIXELS,pn),$.pixelStorei($.UNPACK_SKIP_ROWS,Vn),$.pixelStorei($.UNPACK_SKIP_IMAGES,oi),K===0&&Q.generateMipmaps&&$.generateMipmap(nt),qe.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?ut.setTextureCube(D,0):D.isData3DTexture?ut.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?ut.setTexture2DArray(D,0):ut.setTexture2D(D,0),qe.unbindTexture()},this.resetState=function(){U=0,N=0,d=null,qe.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Pm?"display-p3":"srgb",n.unpackColorSpace=Ht.workingColorSpace===gf?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class R3 extends di{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fr,this.environmentIntensity=1,this.environmentRotation=new Fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rm);const P3=t=>{const e=new wi(90,t.clientWidth/t.clientHeight,1,11e3);e.position.z=500;const n=new R3,i=new ya(100,100,100),r=new Za;for(let m=0;m<100;m++){let _=function(){const x=new Ot(Math.random(),Math.random(),Math.random());return new Dm({color:x})};const E=[_(),_(),_(),_(),_(),_()],S=new fr(i,E);S.position.x=Math.random()*2e3-1e3,S.position.y=Math.random()*2e3-1e3,S.position.z=Math.random()*2e3-1e3,S.rotation.x=Math.random()*2*Math.PI,S.rotation.y=Math.random()*2*Math.PI,S.matrixAutoUpdate=!1,S.updateMatrix(),r.add(S)}n.add(r);const s=new A3({canvas:t});s.setClearColor(0,0),s.setSize(t.clientWidth,t.clientHeight),document.addEventListener("mousemove",f,!1),window.addEventListener("resize",c,!1);let o=0,a=0;function c(){e.aspect=t.clientWidth/t.clientHeight,e.updateProjectionMatrix(),s.setSize(t.clientWidth,t.clientHeight)}function f(m){const _=t.clientWidth/2,E=t.clientHeight/2;o=(m.clientX-_)*10,a=(m.clientY-E)*10}function h(){requestAnimationFrame(h),p()}function p(){const m=Date.now()*.001,_=Math.sin(m*.7)*.5,E=Math.sin(m*.3)*.5,S=Math.sin(m*.2)*.5;e.position.x+=(o-e.position.x)*.05,e.position.y+=(-a-e.position.y)*.05,e.lookAt(n.position),r.rotation.x=_,r.rotation.y=E,r.rotation.z=S,s.render(n,e)}return h(),{onWindowResize:c,animate:h}};(function(t){function e(f){return/In/.test(f)||t.inArray(f,t.fn.textillate.defaults.inEffects)>=0}function n(f){return/Out/.test(f)||t.inArray(f,t.fn.textillate.defaults.outEffects)>=0}function i(f){return f!=="true"&&f!=="false"?f:f==="true"}function r(f){var h=f.attributes||[],p={};return h.length&&t.each(h,function(m,_){var E=_.nodeName.replace(/delayscale/,"delayScale");/^data-in-*/.test(E)?(p.in=p.in||{},p.in[E.replace(/data-in-/,"")]=i(_.nodeValue)):/^data-out-*/.test(E)?(p.out=p.out||{},p.out[E.replace(/data-out-/,"")]=i(_.nodeValue)):/^data-*/.test(E)&&(p[E.replace(/data-/,"")]=i(_.nodeValue))}),p}function s(f){for(var h,p,m=f.length;m;h=parseInt(Math.random()*m),p=f[--m],f[m]=f[h],f[h]=p);return f}function o(f,h,p){f.addClass("animated "+h).css("visibility","visible").show(),f.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){f.removeClass("animated "+h),p&&p()})}function a(f,h,p){var m=f.length;if(!m){p&&p();return}h.shuffle&&(f=s(f)),h.reverse&&(f=f.toArray().reverse()),t.each(f,function(_,E){var S=t(E);function x(){e(h.effect)?S.css("visibility","visible"):n(h.effect)&&S.css("visibility","hidden"),m-=1,!m&&p&&p()}var g=h.sync?h.delay:h.delay*_*h.delayScale;S.text()?setTimeout(function(){o(S,h.effect,x)},g):x()})}var c=function(f,h){var p=this,m=t(f);p.init=function(){p.$texts=m.find(h.selector),p.$texts.length||(p.$texts=t('<ul class="texts"><li>'+m.html()+"</li></ul>"),m.html(p.$texts)),p.$texts.hide(),p.$current=t("<span>").html(p.$texts.find(":first-child").html()).prependTo(m),e(h.in.effect)?p.$current.css("visibility","hidden"):n(h.out.effect)&&p.$current.css("visibility","visible"),p.setOptions(h),p.timeoutRun=null,setTimeout(function(){p.options.autoStart&&p.start()},p.options.initialDelay)},p.setOptions=function(_){p.options=_},p.triggerEvent=function(_){var E=t.Event(_+".tlt");return m.trigger(E,p),E},p.in=function(_,E){_=_||0;var S=p.$texts.find(":nth-child("+((_||0)+1)+")"),x=t.extend(!0,{},p.options,S.length?r(S[0]):{}),g;S.addClass("current"),p.triggerEvent("inAnimationBegin"),m.attr("data-active",S.data("id")),p.$current.html(S.html()).lettering("words"),p.options.type=="char"&&p.$current.find('[class^="word"]').css({display:"inline-block","-webkit-transform":"translate3d(0,0,0)","-moz-transform":"translate3d(0,0,0)","-o-transform":"translate3d(0,0,0)",transform:"translate3d(0,0,0)"}).each(function(){t(this).lettering()}),g=p.$current.find('[class^="'+p.options.type+'"]').css("display","inline-block"),e(x.in.effect)?g.css("visibility","hidden"):n(x.in.effect)&&g.css("visibility","visible"),p.currentIndex=_,a(g,x.in,function(){p.triggerEvent("inAnimationEnd"),x.in.callback&&x.in.callback(),E&&E(p)})},p.out=function(_){var E=p.$texts.find(":nth-child("+((p.currentIndex||0)+1)+")"),S=p.$current.find('[class^="'+p.options.type+'"]'),x=t.extend(!0,{},p.options,E.length?r(E[0]):{});p.triggerEvent("outAnimationBegin"),a(S,x.out,function(){E.removeClass("current"),p.triggerEvent("outAnimationEnd"),m.removeAttr("data-active"),x.out.callback&&x.out.callback(),_&&_(p)})},p.start=function(_){setTimeout(function(){p.triggerEvent("start"),function E(S){p.in(S,function(){var x=p.$texts.children().length;S+=1,!p.options.loop&&S>=x?(p.options.callback&&p.options.callback(),p.triggerEvent("end")):(S=S%x,p.timeoutRun=setTimeout(function(){p.out(function(){E(S)})},p.options.minDisplayTime))})}(_||0)},p.options.initialDelay)},p.stop=function(){p.timeoutRun&&(clearInterval(p.timeoutRun),p.timeoutRun=null)},p.init()};t.fn.textillate=function(f,h){return this.each(function(){var p=t(this),m=p.data("textillate"),_=t.extend(!0,{},t.fn.textillate.defaults,r(this),typeof f=="object"&&f);m?typeof f=="string"?m[f].apply(m,[].concat(h)):m.setOptions.call(m,_):p.data("textillate",m=new c(this,_))})},t.fn.textillate.defaults={selector:".texts",loop:!1,minDisplayTime:2e3,initialDelay:0,in:{effect:"fadeInLeftBig",delayScale:1.5,delay:50,sync:!1,reverse:!1,shuffle:!1,callback:function(){}},out:{effect:"hinge",delayScale:1.5,delay:50,sync:!1,reverse:!1,shuffle:!1,callback:function(){}},autoStart:!0,inEffects:[],outEffects:["hinge"],callback:function(){},type:"char"}})(Nt);/*!
* Lettering.JS 0.7.0
*
* Copyright 2010, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Thanks to Paul Irish - http://paulirish.com - for the feedback.
*
* Date: Mon Sep 20 17:14:00 2010 -0600
*/(function(t){function e(i,r,s,o){var a=i.text(),c=a.split(r),f="";c.length&&(t(c).each(function(h,p){f+='<span class="'+s+(h+1)+'" aria-hidden="true">'+p+"</span>"+o}),i.attr("aria-label",a).empty().append(f))}var n={init:function(){return this.each(function(){e(t(this),"","char","")})},words:function(){return this.each(function(){e(t(this)," ","word"," ")})},lines:function(){return this.each(function(){var i="eefec303079ad17405c889e092e105b0";e(t(this).children("br").replaceWith(i).end(),i,"line","")})}};t.fn.lettering=function(i){return i&&n[i]?n[i].apply(this,[].slice.call(arguments,1)):i==="letters"||!i?n.init.apply(this,[].slice.call(arguments,0)):(t.error("Method "+i+" does not exist on jQuery.lettering"),this)}})(Nt);const L3=()=>{Nt("#about").textillate({in:{effect:"animate__animated animate__flash",delay:7,shuffle:!0}})},D3=()=>{const t=Ai.useRef(null),[e,n]=Vl({triggerOnce:!0,threshold:.1});return Ai.useEffect(()=>{if(n){const i=document.querySelector(".three");i.style.animationPlayState="running";const r=t.current,s=P3(r),o=()=>{r.style.width="100%",r.style.height="100%",s.onWindowResize()};o(),window.addEventListener("resize",o),L3()}},[n]),ee.jsxs("div",{className:"abt-container",ref:e,children:[ee.jsx("div",{className:"three",children:ee.jsx("canvas",{ref:t})}),ee.jsx("h1",{id:"about",children:"This website has been developed using the ReactJS framework and incorporates a range of supplementary technologies including a CSS preprocessor (SCSS) as well as several libraries such as Animate.css, jQuery, Lettering.js, Normalize.css, Particle.js, React Awesome Reveal, React Intersection Observer, React Scroll, Slick Carousel, Textillate.js, Three.js, and Typed.js."})]})},N3=[{id:"0",company:"Samsung Galaxy Firmware Reparation and Customization",date:"Aug 2020 - Jul 2022",role:"Freelance Technician",desc:"Repaired Samsung Galaxy Firmwares, whether old devices or new devices. Provided  Android Rooting, PDA/AP/CP flashing, and custom CSC (Consumer Software Customization/Country Specific Code)."},{id:"1",company:"PT Solusi Tiga Selaras",role:"Full Stack Laravel Developer",date:"Aug 2022 - Dec 2022",desc:"Designed and developed Solutif.co.id, Periksalab.id, and Partner.periksalab.id as part of the Account Squad. Additionally, I designed and managed database structures for these projects. But unfortunately, Periksalab and Partner Periksalab projects have been terminated."},{id:"2",company:"PT Sinar Indah Perkasa",role:"Staff Data Analyst for Vehicle Registration Certificates, Vehicle Periodical Inspections, Truck Unit Workshop, and Spare Parts",date:"Sept 2023 - Jan 2024",desc:"Developed an automated system using Visual Basic for Applications (VBA) within Microsoft Excel and Google Apps Script within Google Sheets. Additionally, I assisted the workshop administrator in creating the daily repair reports and supported the workshop supervisor in managing spare parts."},{id:"3",company:"PT Building Material Construction (BRICON)",role:"Odoo Developer",date:"Mar 2024 - Present",desc:"Designed, developed, and customized Human Resource Department modules using Odoo ERP."}];function I3(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function k3(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var O3=function(){function t(n){var i=this;this._insertTag=function(r){var s;i.tags.length===0?i.insertionPoint?s=i.insertionPoint.nextSibling:i.prepend?s=i.container.firstChild:s=i.before:s=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(r,s),i.tags.push(r)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(k3(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var s=I3(r);try{s.insertRule(i,s.cssRules.length)}catch{}}else r.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},t}(),zn="-ms-",Gu="-moz-",Lt="-webkit-",ES="comm",Im="rule",km="decl",U3="@import",MS="@keyframes",F3="@layer",z3=Math.abs,xf=String.fromCharCode,B3=Object.assign;function H3(t,e){return Rn(t,0)^45?(((e<<2^Rn(t,0))<<2^Rn(t,1))<<2^Rn(t,2))<<2^Rn(t,3):0}function wS(t){return t.trim()}function V3(t,e){return(t=e.exec(t))?t[0]:t}function Dt(t,e,n){return t.replace(e,n)}function Mp(t,e){return t.indexOf(e)}function Rn(t,e){return t.charCodeAt(e)|0}function bl(t,e,n){return t.slice(e,n)}function or(t){return t.length}function Om(t){return t.length}function qc(t,e){return e.push(t),t}function G3(t,e){return t.map(e).join("")}var Sf=1,da=1,TS=0,si=0,dn=0,xa="";function Ef(t,e,n,i,r,s,o){return{value:t,root:e,parent:n,type:i,props:r,children:s,line:Sf,column:da,length:o,return:""}}function ja(t,e){return B3(Ef("",null,null,"",null,null,0),t,{length:-t.length},e)}function W3(){return dn}function j3(){return dn=si>0?Rn(xa,--si):0,da--,dn===10&&(da=1,Sf--),dn}function hi(){return dn=si<TS?Rn(xa,si++):0,da++,dn===10&&(da=1,Sf++),dn}function mr(){return Rn(xa,si)}function cu(){return si}function Xl(t,e){return bl(xa,t,e)}function Cl(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bS(t){return Sf=da=1,TS=or(xa=t),si=0,[]}function CS(t){return xa="",t}function uu(t){return wS(Xl(si-1,wp(t===91?t+2:t===40?t+1:t)))}function $3(t){for(;(dn=mr())&&dn<33;)hi();return Cl(t)>2||Cl(dn)>3?"":" "}function X3(t,e){for(;--e&&hi()&&!(dn<48||dn>102||dn>57&&dn<65||dn>70&&dn<97););return Xl(t,cu()+(e<6&&mr()==32&&hi()==32))}function wp(t){for(;hi();)switch(dn){case t:return si;case 34:case 39:t!==34&&t!==39&&wp(dn);break;case 40:t===41&&wp(t);break;case 92:hi();break}return si}function q3(t,e){for(;hi()&&t+dn!==57;)if(t+dn===84&&mr()===47)break;return"/*"+Xl(e,si-1)+"*"+xf(t===47?t:hi())}function Y3(t){for(;!Cl(mr());)hi();return Xl(t,si)}function K3(t){return CS(fu("",null,null,null,[""],t=bS(t),0,[0],t))}function fu(t,e,n,i,r,s,o,a,c){for(var f=0,h=0,p=o,m=0,_=0,E=0,S=1,x=1,g=1,w=0,M="",R=r,U=s,N=i,d=M;x;)switch(E=w,w=hi()){case 40:if(E!=108&&Rn(d,p-1)==58){Mp(d+=Dt(uu(w),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:d+=uu(w);break;case 9:case 10:case 13:case 32:d+=$3(E);break;case 92:d+=X3(cu()-1,7);continue;case 47:switch(mr()){case 42:case 47:qc(Q3(q3(hi(),cu()),e,n),c);break;default:d+="/"}break;case 123*S:a[f++]=or(d)*g;case 125*S:case 59:case 0:switch(w){case 0:case 125:x=0;case 59+h:g==-1&&(d=Dt(d,/\f/g,"")),_>0&&or(d)-p&&qc(_>32?ry(d+";",i,n,p-1):ry(Dt(d," ","")+";",i,n,p-2),c);break;case 59:d+=";";default:if(qc(N=iy(d,e,n,f,h,r,a,M,R=[],U=[],p),s),w===123)if(h===0)fu(d,e,N,N,R,s,p,a,U);else switch(m===99&&Rn(d,3)===110?100:m){case 100:case 108:case 109:case 115:fu(t,N,N,i&&qc(iy(t,N,N,0,0,r,a,M,r,R=[],p),U),r,U,p,a,i?R:U);break;default:fu(d,N,N,N,[""],U,0,a,U)}}f=h=_=0,S=g=1,M=d="",p=o;break;case 58:p=1+or(d),_=E;default:if(S<1){if(w==123)--S;else if(w==125&&S++==0&&j3()==125)continue}switch(d+=xf(w),w*S){case 38:g=h>0?1:(d+="\f",-1);break;case 44:a[f++]=(or(d)-1)*g,g=1;break;case 64:mr()===45&&(d+=uu(hi())),m=mr(),h=p=or(M=d+=Y3(cu())),w++;break;case 45:E===45&&or(d)==2&&(S=0)}}return s}function iy(t,e,n,i,r,s,o,a,c,f,h){for(var p=r-1,m=r===0?s:[""],_=Om(m),E=0,S=0,x=0;E<i;++E)for(var g=0,w=bl(t,p+1,p=z3(S=o[E])),M=t;g<_;++g)(M=wS(S>0?m[g]+" "+w:Dt(w,/&\f/g,m[g])))&&(c[x++]=M);return Ef(t,e,n,r===0?Im:a,c,f,h)}function Q3(t,e,n){return Ef(t,e,n,ES,xf(W3()),bl(t,2,-2),0)}function ry(t,e,n,i){return Ef(t,e,n,km,bl(t,0,i),bl(t,i+1,-1),i)}function ea(t,e){for(var n="",i=Om(t),r=0;r<i;r++)n+=e(t[r],r,t,e)||"";return n}function Z3(t,e,n,i){switch(t.type){case F3:if(t.children.length)break;case U3:case km:return t.return=t.return||t.value;case ES:return"";case MS:return t.return=t.value+"{"+ea(t.children,i)+"}";case Im:t.value=t.props.join(",")}return or(n=ea(t.children,i))?t.return=t.value+"{"+n+"}":""}function J3(t){var e=Om(t);return function(n,i,r,s){for(var o="",a=0;a<e;a++)o+=t[a](n,i,r,s)||"";return o}}function eL(t){return function(e){e.root||(e=e.return)&&t(e)}}function tL(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var nL=function(e,n,i){for(var r=0,s=0;r=s,s=mr(),r===38&&s===12&&(n[i]=1),!Cl(s);)hi();return Xl(e,si)},iL=function(e,n){var i=-1,r=44;do switch(Cl(r)){case 0:r===38&&mr()===12&&(n[i]=1),e[i]+=nL(si-1,n,i);break;case 2:e[i]+=uu(r);break;case 4:if(r===44){e[++i]=mr()===58?"&\f":"",n[i]=e[i].length;break}default:e[i]+=xf(r)}while(r=hi());return e},rL=function(e,n){return CS(iL(bS(e),n))},sy=new WeakMap,sL=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,i=e.parent,r=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!sy.get(i))&&!r){sy.set(e,!0);for(var s=[],o=rL(n,s),a=i.props,c=0,f=0;c<o.length;c++)for(var h=0;h<a.length;h++,f++)e.props[f]=s[c]?o[c].replace(/&\f/g,a[h]):a[h]+" "+o[c]}}},oL=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function AS(t,e){switch(H3(t,e)){case 5103:return Lt+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Lt+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Lt+t+Gu+t+zn+t+t;case 6828:case 4268:return Lt+t+zn+t+t;case 6165:return Lt+t+zn+"flex-"+t+t;case 5187:return Lt+t+Dt(t,/(\w+).+(:[^]+)/,Lt+"box-$1$2"+zn+"flex-$1$2")+t;case 5443:return Lt+t+zn+"flex-item-"+Dt(t,/flex-|-self/,"")+t;case 4675:return Lt+t+zn+"flex-line-pack"+Dt(t,/align-content|flex-|-self/,"")+t;case 5548:return Lt+t+zn+Dt(t,"shrink","negative")+t;case 5292:return Lt+t+zn+Dt(t,"basis","preferred-size")+t;case 6060:return Lt+"box-"+Dt(t,"-grow","")+Lt+t+zn+Dt(t,"grow","positive")+t;case 4554:return Lt+Dt(t,/([^-])(transform)/g,"$1"+Lt+"$2")+t;case 6187:return Dt(Dt(Dt(t,/(zoom-|grab)/,Lt+"$1"),/(image-set)/,Lt+"$1"),t,"")+t;case 5495:case 3959:return Dt(t,/(image-set\([^]*)/,Lt+"$1$`$1");case 4968:return Dt(Dt(t,/(.+:)(flex-)?(.*)/,Lt+"box-pack:$3"+zn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Lt+t+t;case 4095:case 3583:case 4068:case 2532:return Dt(t,/(.+)-inline(.+)/,Lt+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(or(t)-1-e>6)switch(Rn(t,e+1)){case 109:if(Rn(t,e+4)!==45)break;case 102:return Dt(t,/(.+:)(.+)-([^]+)/,"$1"+Lt+"$2-$3$1"+Gu+(Rn(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Mp(t,"stretch")?AS(Dt(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Rn(t,e+1)!==115)break;case 6444:switch(Rn(t,or(t)-3-(~Mp(t,"!important")&&10))){case 107:return Dt(t,":",":"+Lt)+t;case 101:return Dt(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Lt+(Rn(t,14)===45?"inline-":"")+"box$3$1"+Lt+"$2$3$1"+zn+"$2box$3")+t}break;case 5936:switch(Rn(t,e+11)){case 114:return Lt+t+zn+Dt(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Lt+t+zn+Dt(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Lt+t+zn+Dt(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return Lt+t+zn+t+t}return t}var aL=function(e,n,i,r){if(e.length>-1&&!e.return)switch(e.type){case km:e.return=AS(e.value,e.length);break;case MS:return ea([ja(e,{value:Dt(e.value,"@","@"+Lt)})],r);case Im:if(e.length)return G3(e.props,function(s){switch(V3(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ea([ja(e,{props:[Dt(s,/:(read-\w+)/,":"+Gu+"$1")]})],r);case"::placeholder":return ea([ja(e,{props:[Dt(s,/:(plac\w+)/,":"+Lt+"input-$1")]}),ja(e,{props:[Dt(s,/:(plac\w+)/,":"+Gu+"$1")]}),ja(e,{props:[Dt(s,/:(plac\w+)/,zn+"input-$1")]})],r)}return""})}},lL=[aL],cL=function(e){var n=e.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(S){var x=S.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(S),S.setAttribute("data-s",""))})}var r=e.stylisPlugins||lL,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(S){for(var x=S.getAttribute("data-emotion").split(" "),g=1;g<x.length;g++)s[x[g]]=!0;a.push(S)});var c,f=[sL,oL];{var h,p=[Z3,eL(function(S){h.insert(S)})],m=J3(f.concat(r,p)),_=function(x){return ea(K3(x),m)};c=function(x,g,w,M){h=w,_(x?x+"{"+g.styles+"}":g.styles),M&&(E.inserted[g.name]=!0)}}var E={key:n,sheet:new O3({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:c};return E.sheet.hydrate(a),E},RS={exports:{}},Ft={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bn=typeof Symbol=="function"&&Symbol.for,Um=bn?Symbol.for("react.element"):60103,Fm=bn?Symbol.for("react.portal"):60106,Mf=bn?Symbol.for("react.fragment"):60107,wf=bn?Symbol.for("react.strict_mode"):60108,Tf=bn?Symbol.for("react.profiler"):60114,bf=bn?Symbol.for("react.provider"):60109,Cf=bn?Symbol.for("react.context"):60110,zm=bn?Symbol.for("react.async_mode"):60111,Af=bn?Symbol.for("react.concurrent_mode"):60111,Rf=bn?Symbol.for("react.forward_ref"):60112,Pf=bn?Symbol.for("react.suspense"):60113,uL=bn?Symbol.for("react.suspense_list"):60120,Lf=bn?Symbol.for("react.memo"):60115,Df=bn?Symbol.for("react.lazy"):60116,fL=bn?Symbol.for("react.block"):60121,dL=bn?Symbol.for("react.fundamental"):60117,hL=bn?Symbol.for("react.responder"):60118,pL=bn?Symbol.for("react.scope"):60119;function vi(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Um:switch(t=t.type,t){case zm:case Af:case Mf:case Tf:case wf:case Pf:return t;default:switch(t=t&&t.$$typeof,t){case Cf:case Rf:case Df:case Lf:case bf:return t;default:return e}}case Fm:return e}}}function PS(t){return vi(t)===Af}Ft.AsyncMode=zm;Ft.ConcurrentMode=Af;Ft.ContextConsumer=Cf;Ft.ContextProvider=bf;Ft.Element=Um;Ft.ForwardRef=Rf;Ft.Fragment=Mf;Ft.Lazy=Df;Ft.Memo=Lf;Ft.Portal=Fm;Ft.Profiler=Tf;Ft.StrictMode=wf;Ft.Suspense=Pf;Ft.isAsyncMode=function(t){return PS(t)||vi(t)===zm};Ft.isConcurrentMode=PS;Ft.isContextConsumer=function(t){return vi(t)===Cf};Ft.isContextProvider=function(t){return vi(t)===bf};Ft.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Um};Ft.isForwardRef=function(t){return vi(t)===Rf};Ft.isFragment=function(t){return vi(t)===Mf};Ft.isLazy=function(t){return vi(t)===Df};Ft.isMemo=function(t){return vi(t)===Lf};Ft.isPortal=function(t){return vi(t)===Fm};Ft.isProfiler=function(t){return vi(t)===Tf};Ft.isStrictMode=function(t){return vi(t)===wf};Ft.isSuspense=function(t){return vi(t)===Pf};Ft.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Mf||t===Af||t===Tf||t===wf||t===Pf||t===uL||typeof t=="object"&&t!==null&&(t.$$typeof===Df||t.$$typeof===Lf||t.$$typeof===bf||t.$$typeof===Cf||t.$$typeof===Rf||t.$$typeof===dL||t.$$typeof===hL||t.$$typeof===pL||t.$$typeof===fL)};Ft.typeOf=vi;RS.exports=Ft;var mL=RS.exports,LS=mL,gL={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vL={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},DS={};DS[LS.ForwardRef]=gL;DS[LS.Memo]=vL;var yL=!0;function NS(t,e,n){var i="";return n.split(" ").forEach(function(r){t[r]!==void 0?e.push(t[r]+";"):i+=r+" "}),i}var Bm=function(e,n,i){var r=e.key+"-"+n.name;(i===!1||yL===!1)&&e.registered[r]===void 0&&(e.registered[r]=n.styles)},IS=function(e,n,i){Bm(e,n,i);var r=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+r:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function _L(t){for(var e=0,n,i=0,r=t.length;r>=4;++i,r-=4)n=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(r){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var xL={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},SL=/[A-Z]|^ms/g,EL=/_EMO_([^_]+?)_([^]*?)_EMO_/g,kS=function(e){return e.charCodeAt(1)===45},oy=function(e){return e!=null&&typeof e!="boolean"},mh=tL(function(t){return kS(t)?t:t.replace(SL,"-$&").toLowerCase()}),ay=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(EL,function(i,r,s){return ar={name:r,styles:s,next:ar},r})}return xL[e]!==1&&!kS(e)&&typeof n=="number"&&n!==0?n+"px":n};function Al(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return ar={name:n.name,styles:n.styles,next:ar},n.name;if(n.styles!==void 0){var i=n.next;if(i!==void 0)for(;i!==void 0;)ar={name:i.name,styles:i.styles,next:ar},i=i.next;var r=n.styles+";";return r}return ML(t,e,n)}case"function":{if(t!==void 0){var s=ar,o=n(t);return ar=s,Al(t,e,o)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function ML(t,e,n){var i="";if(Array.isArray(n))for(var r=0;r<n.length;r++)i+=Al(t,e,n[r])+";";else for(var s in n){var o=n[s];if(typeof o!="object")e!=null&&e[o]!==void 0?i+=s+"{"+e[o]+"}":oy(o)&&(i+=mh(s)+":"+ay(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var a=0;a<o.length;a++)oy(o[a])&&(i+=mh(s)+":"+ay(s,o[a])+";");else{var c=Al(t,e,o);switch(s){case"animation":case"animationName":{i+=mh(s)+":"+c+";";break}default:i+=s+"{"+c+"}"}}}return i}var ly=/label:\s*([^\s;\n{]+)\s*(;|$)/g,ar,Hm=function(e,n,i){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,s="";ar=void 0;var o=e[0];o==null||o.raw===void 0?(r=!1,s+=Al(i,n,o)):s+=o[0];for(var a=1;a<e.length;a++)s+=Al(i,n,e[a]),r&&(s+=o[a]);ly.lastIndex=0;for(var c="",f;(f=ly.exec(s))!==null;)c+="-"+f[1];var h=_L(s)+c;return{name:h,styles:s,next:ar}},wL=function(e){return e()},TL=ag.useInsertionEffect?ag.useInsertionEffect:!1,OS=TL||wL,Vm={}.hasOwnProperty,US=Mt.createContext(typeof HTMLElement<"u"?cL({key:"css"}):null);US.Provider;var FS=function(e){return Mt.forwardRef(function(n,i){var r=Mt.useContext(US);return e(n,r,i)})},zS=Mt.createContext({}),Tp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",bL=function(e,n){var i={};for(var r in n)Vm.call(n,r)&&(i[r]=n[r]);return i[Tp]=e,i},CL=function(e){var n=e.cache,i=e.serialized,r=e.isStringTag;return Bm(n,i,r),OS(function(){return IS(n,i,r)}),null},AL=FS(function(t,e,n){var i=t.css;typeof i=="string"&&e.registered[i]!==void 0&&(i=e.registered[i]);var r=t[Tp],s=[i],o="";typeof t.className=="string"?o=NS(e.registered,s,t.className):t.className!=null&&(o=t.className+" ");var a=Hm(s,void 0,Mt.useContext(zS));o+=e.key+"-"+a.name;var c={};for(var f in t)Vm.call(t,f)&&f!=="css"&&f!==Tp&&(c[f]=t[f]);return c.ref=n,c.className=o,Mt.createElement(Mt.Fragment,null,Mt.createElement(CL,{cache:e,serialized:a,isStringTag:typeof r=="string"}),Mt.createElement(r,c))}),RL=AL,PL=ee.Fragment;function Mn(t,e,n){return Vm.call(e,"css")?ee.jsx(RL,bL(t,e),n):ee.jsx(t,e,n)}function BS(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Hm(e)}var Me=function(){var e=BS.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},LL=function t(e){for(var n=e.length,i=0,r="";i<n;i++){var s=e[i];if(s!=null){var o=void 0;switch(typeof s){case"boolean":break;case"object":{if(Array.isArray(s))o=t(s);else{o="";for(var a in s)s[a]&&a&&(o&&(o+=" "),o+=a)}break}default:o=s}o&&(r&&(r+=" "),r+=o)}}return r};function DL(t,e,n){var i=[],r=NS(t,i,n);return i.length<2?n:r+e(i)}var NL=function(e){var n=e.cache,i=e.serializedArr;return OS(function(){for(var r=0;r<i.length;r++)IS(n,i[r],!1)}),null},gh=FS(function(t,e){var n=!1,i=[],r=function(){for(var f=arguments.length,h=new Array(f),p=0;p<f;p++)h[p]=arguments[p];var m=Hm(h,e.registered);return i.push(m),Bm(e,m,!1),e.key+"-"+m.name},s=function(){for(var f=arguments.length,h=new Array(f),p=0;p<f;p++)h[p]=arguments[p];return DL(e.registered,r,LL(h))},o={css:r,cx:s,theme:Mt.useContext(zS)},a=t.children(o);return n=!0,Mt.createElement(Mt.Fragment,null,Mt.createElement(NL,{cache:e,serializedArr:i}),a)}),HS={exports:{}},zt={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm=Symbol.for("react.element"),Wm=Symbol.for("react.portal"),Nf=Symbol.for("react.fragment"),If=Symbol.for("react.strict_mode"),kf=Symbol.for("react.profiler"),Of=Symbol.for("react.provider"),Uf=Symbol.for("react.context"),IL=Symbol.for("react.server_context"),Ff=Symbol.for("react.forward_ref"),zf=Symbol.for("react.suspense"),Bf=Symbol.for("react.suspense_list"),Hf=Symbol.for("react.memo"),Vf=Symbol.for("react.lazy"),kL=Symbol.for("react.offscreen"),VS;VS=Symbol.for("react.module.reference");function Li(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Gm:switch(t=t.type,t){case Nf:case kf:case If:case zf:case Bf:return t;default:switch(t=t&&t.$$typeof,t){case IL:case Uf:case Ff:case Vf:case Hf:case Of:return t;default:return e}}case Wm:return e}}}zt.ContextConsumer=Uf;zt.ContextProvider=Of;zt.Element=Gm;zt.ForwardRef=Ff;zt.Fragment=Nf;zt.Lazy=Vf;zt.Memo=Hf;zt.Portal=Wm;zt.Profiler=kf;zt.StrictMode=If;zt.Suspense=zf;zt.SuspenseList=Bf;zt.isAsyncMode=function(){return!1};zt.isConcurrentMode=function(){return!1};zt.isContextConsumer=function(t){return Li(t)===Uf};zt.isContextProvider=function(t){return Li(t)===Of};zt.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Gm};zt.isForwardRef=function(t){return Li(t)===Ff};zt.isFragment=function(t){return Li(t)===Nf};zt.isLazy=function(t){return Li(t)===Vf};zt.isMemo=function(t){return Li(t)===Hf};zt.isPortal=function(t){return Li(t)===Wm};zt.isProfiler=function(t){return Li(t)===kf};zt.isStrictMode=function(t){return Li(t)===If};zt.isSuspense=function(t){return Li(t)===zf};zt.isSuspenseList=function(t){return Li(t)===Bf};zt.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Nf||t===kf||t===If||t===zf||t===Bf||t===kL||typeof t=="object"&&t!==null&&(t.$$typeof===Vf||t.$$typeof===Hf||t.$$typeof===Of||t.$$typeof===Uf||t.$$typeof===Ff||t.$$typeof===VS||t.getModuleId!==void 0)};zt.typeOf=Li;HS.exports=zt;var OL=HS.exports;Me`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;Me`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;Me`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;Me`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;Me`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;Me`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;Me`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;Me`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;Me`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;Me`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;Me`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;Me`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;Me`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Me`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;Me`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Me`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Me`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Me`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;const GS=Me`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Me`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Me`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Me`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Me`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Me`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Me`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Me`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function UL({duration:t=1e3,delay:e=0,timingFunction:n="ease",keyframes:i=GS,iterationCount:r=1}){return BS`
    animation-duration: ${t}ms;
    animation-timing-function: ${n};
    animation-delay: ${e}ms;
    animation-name: ${i};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${r};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function FL(t){return t==null}function zL(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function WS(t,e){return n=>n?t():e()}function Rl(t){return WS(t,()=>null)}function bp(t){return Rl(()=>({opacity:0}))(t)}const jS=t=>{const{cascade:e=!1,damping:n=.5,delay:i=0,duration:r=1e3,fraction:s=0,keyframes:o=GS,triggerOnce:a=!1,className:c,style:f,childClassName:h,childStyle:p,children:m,onVisibilityChange:_}=t,E=Mt.useMemo(()=>UL({keyframes:o,duration:r}),[r,o]);return FL(m)?null:zL(m)?Mn(HL,{...t,animationStyles:E,children:String(m)}):OL.isFragment(m)?Mn($S,{...t,animationStyles:E}):Mn(PL,{children:Mt.Children.map(m,(S,x)=>{if(!Mt.isValidElement(S))return null;const g=i+(e?x*r*n:0);switch(S.type){case"ol":case"ul":return Mn(gh,{children:({cx:w})=>Mn(S.type,{...S.props,className:w(c,S.props.className),style:Object.assign({},f,S.props.style),children:Mn(jS,{...t,children:S.props.children})})});case"li":return Mn(Ov,{threshold:s,triggerOnce:a,onChange:_,children:({inView:w,ref:M})=>Mn(gh,{children:({cx:R})=>Mn(S.type,{...S.props,ref:M,className:R(h,S.props.className),css:Rl(()=>E)(w),style:Object.assign({},p,S.props.style,bp(!w),{animationDelay:g+"ms"})})})});default:return Mn(Ov,{threshold:s,triggerOnce:a,onChange:_,children:({inView:w,ref:M})=>Mn("div",{ref:M,className:c,css:Rl(()=>E)(w),style:Object.assign({},f,bp(!w),{animationDelay:g+"ms"}),children:Mn(gh,{children:({cx:R})=>Mn(S.type,{...S.props,className:R(h,S.props.className),style:Object.assign({},p,S.props.style)})})})})}})})},BL={display:"inline-block",whiteSpace:"pre"},HL=t=>{const{animationStyles:e,cascade:n=!1,damping:i=.5,delay:r=0,duration:s=1e3,fraction:o=0,triggerOnce:a=!1,className:c,style:f,children:h,onVisibilityChange:p}=t,{ref:m,inView:_}=Vl({triggerOnce:a,threshold:o,onChange:p});return WS(()=>Mn("div",{ref:m,className:c,style:Object.assign({},f,BL),children:h.split("").map((E,S)=>Mn("span",{css:Rl(()=>e)(_),style:{animationDelay:r+S*s*i+"ms"},children:E},S))}),()=>Mn($S,{...t,children:h}))(n)},$S=t=>{const{animationStyles:e,fraction:n=0,triggerOnce:i=!1,className:r,style:s,children:o,onVisibilityChange:a}=t,{ref:c,inView:f}=Vl({triggerOnce:i,threshold:n,onChange:a});return Mn("div",{ref:c,className:r,css:Rl(()=>e)(f),style:Object.assign({},s,bp(!f)),children:o})};Me`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;Me`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Me`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Me`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Me`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Me`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;Me`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;Me`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;Me`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;Me`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;Me`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;Me`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`;Me`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`;Me`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;Me`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`;Me`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`;Me`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`;Me`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`;Me`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`;Me`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`;Me`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`;Me`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`;Me`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;Me`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;Me`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;Me`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;Me`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;Me`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;Me`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;Me`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;Me`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Me`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;Me`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;Me`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;Me`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;Me`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;Me`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;Me`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;Me`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;Me`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;Me`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;Me`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;Me`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Me`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Me`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Me`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Me`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;Me`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;Me`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;Me`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;const VL=Me`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,GL=Me`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,WL=Me`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,jL=Me`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,$L=Me`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,XL=Me`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,qL=Me`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,YL=Me`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,KL=Me`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,QL=Me`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function ZL(t,e){switch(e){case"down":return t?qL:GL;case"left":return t?YL:WL;case"right":return t?KL:jL;case"up":return t?QL:$L;default:return t?XL:VL}}const JL=t=>{const{direction:e,reverse:n=!1,...i}=t,r=Mt.useMemo(()=>ZL(n,e),[e,n]);return Mn(jS,{keyframes:r,...i})},eD=()=>{const[t,e]=Ai.useState("100vh");return Ai.useEffect(()=>{const n=()=>{window.innerWidth<=1e3||window.innerHeight<=900?e(`${document.querySelector(".experiences").clientHeight+250}px`):e("100vh")};n(),window.addEventListener("resize",n)},[]),ee.jsxs("div",{className:"exp-container",style:{height:t},children:[ee.jsx("h1",{children:"Experiences"}),ee.jsx("div",{className:"experiences",children:ee.jsx(JL,{direction:"down",triggerOnce:!0,cascade:!0,children:N3.map(n=>ee.jsx("li",{children:ee.jsxs("div",{className:"panel",children:[ee.jsxs("div",{className:"heading",children:[ee.jsx("h2",{children:n.company}),ee.jsx("p",{children:n.date})]}),ee.jsx("h4",{children:n.role}),ee.jsx("p",{children:n.desc})]})},n.id))})})]})},tD=[{id:"0",img:"yt.png",title:"YouTube Auto-updated Title",desc:"A YouTube video title that updates automatically each time the viewer count increases.",link:"https://youtu.be/g0DKKC1sXFM"},{id:"1",img:"medium.png",title:"Regression Analysis for Predicting Red Wine Quality using Python Programming Language",desc:"A Regression Analysis for predicting Red Wine Quality.",link:"https://medium.com/@virezee/regression-analysis-for-predicting-red-wine-quality-using-python-programming-language-26d1616955ed"},{id:"2",img:"snake.png",title:"3D Snake Game",desc:"The Xtended version of 2D Snake.",link:"https://github.com/VireZee/3D-Snake"},{id:"3",img:"solutif.png",title:"Full Stack Laravel Intership Project at Solutif (MSIB -MBKM)",desc:"Designed and developed Solutif.co.id, Periksalab.id, and Partner.periksalab.id.",link:"https://www.solutif.co.id"},{id:"4",img:"mhysth.png",title:"After Effects Project",desc:"Customized and designed After Effects template.",link:"https://youtu.be/vBxeeqHYdo8"},{id:"5",img:"aleph.png",title:"After Effects Project",desc:"Customized and designed After Effects template.",link:"https://youtu.be/1zcYf1uDra4"}];var nD={exports:{}};(function(t,e){(function(n){t.exports=n(wx)})(function(n){var i=window.Slick||{};i=function(){var r=0;function s(o,a){var c=this,f;c.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:n(o),appendDots:n(o),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(h,p){return n('<button type="button" />').text(p+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},c.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},n.extend(c,c.initials),c.activeBreakpoint=null,c.animType=null,c.animProp=null,c.breakpoints=[],c.breakpointSettings=[],c.cssTransitions=!1,c.focussed=!1,c.interrupted=!1,c.hidden="hidden",c.paused=!0,c.positionProp=null,c.respondTo=null,c.rowCount=1,c.shouldClick=!0,c.$slider=n(o),c.$slidesCache=null,c.transformType=null,c.transitionType=null,c.visibilityChange="visibilitychange",c.windowWidth=0,c.windowTimer=null,f=n(o).data("slick")||{},c.options=n.extend({},c.defaults,a,f),c.currentSlide=c.options.initialSlide,c.originalSettings=c.options,typeof document.mozHidden<"u"?(c.hidden="mozHidden",c.visibilityChange="mozvisibilitychange"):typeof document.webkitHidden<"u"&&(c.hidden="webkitHidden",c.visibilityChange="webkitvisibilitychange"),c.autoPlay=n.proxy(c.autoPlay,c),c.autoPlayClear=n.proxy(c.autoPlayClear,c),c.autoPlayIterator=n.proxy(c.autoPlayIterator,c),c.changeSlide=n.proxy(c.changeSlide,c),c.clickHandler=n.proxy(c.clickHandler,c),c.selectHandler=n.proxy(c.selectHandler,c),c.setPosition=n.proxy(c.setPosition,c),c.swipeHandler=n.proxy(c.swipeHandler,c),c.dragHandler=n.proxy(c.dragHandler,c),c.keyHandler=n.proxy(c.keyHandler,c),c.instanceUid=r++,c.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,c.registerBreakpoints(),c.init(!0)}return s}(),i.prototype.activateADA=function(){var r=this;r.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},i.prototype.addSlide=i.prototype.slickAdd=function(r,s,o){var a=this;if(typeof s=="boolean")o=s,s=null;else if(s<0||s>=a.slideCount)return!1;a.unload(),typeof s=="number"?s===0&&a.$slides.length===0?n(r).appendTo(a.$slideTrack):o?n(r).insertBefore(a.$slides.eq(s)):n(r).insertAfter(a.$slides.eq(s)):o===!0?n(r).prependTo(a.$slideTrack):n(r).appendTo(a.$slideTrack),a.$slides=a.$slideTrack.children(this.options.slide),a.$slideTrack.children(this.options.slide).detach(),a.$slideTrack.append(a.$slides),a.$slides.each(function(c,f){n(f).attr("data-slick-index",c)}),a.$slidesCache=a.$slides,a.reinit()},i.prototype.animateHeight=function(){var r=this;if(r.options.slidesToShow===1&&r.options.adaptiveHeight===!0&&r.options.vertical===!1){var s=r.$slides.eq(r.currentSlide).outerHeight(!0);r.$list.animate({height:s},r.options.speed)}},i.prototype.animateSlide=function(r,s){var o={},a=this;a.animateHeight(),a.options.rtl===!0&&a.options.vertical===!1&&(r=-r),a.transformsEnabled===!1?a.options.vertical===!1?a.$slideTrack.animate({left:r},a.options.speed,a.options.easing,s):a.$slideTrack.animate({top:r},a.options.speed,a.options.easing,s):a.cssTransitions===!1?(a.options.rtl===!0&&(a.currentLeft=-a.currentLeft),n({animStart:a.currentLeft}).animate({animStart:r},{duration:a.options.speed,easing:a.options.easing,step:function(c){c=Math.ceil(c),a.options.vertical===!1?(o[a.animType]="translate("+c+"px, 0px)",a.$slideTrack.css(o)):(o[a.animType]="translate(0px,"+c+"px)",a.$slideTrack.css(o))},complete:function(){s&&s.call()}})):(a.applyTransition(),r=Math.ceil(r),a.options.vertical===!1?o[a.animType]="translate3d("+r+"px, 0px, 0px)":o[a.animType]="translate3d(0px,"+r+"px, 0px)",a.$slideTrack.css(o),s&&setTimeout(function(){a.disableTransition(),s.call()},a.options.speed))},i.prototype.getNavTarget=function(){var r=this,s=r.options.asNavFor;return s&&s!==null&&(s=n(s).not(r.$slider)),s},i.prototype.asNavFor=function(r){var s=this,o=s.getNavTarget();o!==null&&typeof o=="object"&&o.each(function(){var a=n(this).slick("getSlick");a.unslicked||a.slideHandler(r,!0)})},i.prototype.applyTransition=function(r){var s=this,o={};s.options.fade===!1?o[s.transitionType]=s.transformType+" "+s.options.speed+"ms "+s.options.cssEase:o[s.transitionType]="opacity "+s.options.speed+"ms "+s.options.cssEase,s.options.fade===!1?s.$slideTrack.css(o):s.$slides.eq(r).css(o)},i.prototype.autoPlay=function(){var r=this;r.autoPlayClear(),r.slideCount>r.options.slidesToShow&&(r.autoPlayTimer=setInterval(r.autoPlayIterator,r.options.autoplaySpeed))},i.prototype.autoPlayClear=function(){var r=this;r.autoPlayTimer&&clearInterval(r.autoPlayTimer)},i.prototype.autoPlayIterator=function(){var r=this,s=r.currentSlide+r.options.slidesToScroll;!r.paused&&!r.interrupted&&!r.focussed&&(r.options.infinite===!1&&(r.direction===1&&r.currentSlide+1===r.slideCount-1?r.direction=0:r.direction===0&&(s=r.currentSlide-r.options.slidesToScroll,r.currentSlide-1===0&&(r.direction=1))),r.slideHandler(s))},i.prototype.buildArrows=function(){var r=this;r.options.arrows===!0&&(r.$prevArrow=n(r.options.prevArrow).addClass("slick-arrow"),r.$nextArrow=n(r.options.nextArrow).addClass("slick-arrow"),r.slideCount>r.options.slidesToShow?(r.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),r.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),r.htmlExpr.test(r.options.prevArrow)&&r.$prevArrow.prependTo(r.options.appendArrows),r.htmlExpr.test(r.options.nextArrow)&&r.$nextArrow.appendTo(r.options.appendArrows),r.options.infinite!==!0&&r.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):r.$prevArrow.add(r.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},i.prototype.buildDots=function(){var r=this,s,o;if(r.options.dots===!0&&r.slideCount>r.options.slidesToShow){for(r.$slider.addClass("slick-dotted"),o=n("<ul />").addClass(r.options.dotsClass),s=0;s<=r.getDotCount();s+=1)o.append(n("<li />").append(r.options.customPaging.call(this,r,s)));r.$dots=o.appendTo(r.options.appendDots),r.$dots.find("li").first().addClass("slick-active")}},i.prototype.buildOut=function(){var r=this;r.$slides=r.$slider.children(r.options.slide+":not(.slick-cloned)").addClass("slick-slide"),r.slideCount=r.$slides.length,r.$slides.each(function(s,o){n(o).attr("data-slick-index",s).data("originalStyling",n(o).attr("style")||"")}),r.$slider.addClass("slick-slider"),r.$slideTrack=r.slideCount===0?n('<div class="slick-track"/>').appendTo(r.$slider):r.$slides.wrapAll('<div class="slick-track"/>').parent(),r.$list=r.$slideTrack.wrap('<div class="slick-list"/>').parent(),r.$slideTrack.css("opacity",0),(r.options.centerMode===!0||r.options.swipeToSlide===!0)&&(r.options.slidesToScroll=1),n("img[data-lazy]",r.$slider).not("[src]").addClass("slick-loading"),r.setupInfinite(),r.buildArrows(),r.buildDots(),r.updateDots(),r.setSlideClasses(typeof r.currentSlide=="number"?r.currentSlide:0),r.options.draggable===!0&&r.$list.addClass("draggable")},i.prototype.buildRows=function(){var r=this,s,o,a,c,f,h,p;if(c=document.createDocumentFragment(),h=r.$slider.children(),r.options.rows>0){for(p=r.options.slidesPerRow*r.options.rows,f=Math.ceil(h.length/p),s=0;s<f;s++){var m=document.createElement("div");for(o=0;o<r.options.rows;o++){var _=document.createElement("div");for(a=0;a<r.options.slidesPerRow;a++){var E=s*p+(o*r.options.slidesPerRow+a);h.get(E)&&_.appendChild(h.get(E))}m.appendChild(_)}c.appendChild(m)}r.$slider.empty().append(c),r.$slider.children().children().children().css({width:100/r.options.slidesPerRow+"%",display:"inline-block"})}},i.prototype.checkResponsive=function(r,s){var o=this,a,c,f,h=!1,p=o.$slider.width(),m=window.innerWidth||n(window).width();if(o.respondTo==="window"?f=m:o.respondTo==="slider"?f=p:o.respondTo==="min"&&(f=Math.min(m,p)),o.options.responsive&&o.options.responsive.length&&o.options.responsive!==null){c=null;for(a in o.breakpoints)o.breakpoints.hasOwnProperty(a)&&(o.originalSettings.mobileFirst===!1?f<o.breakpoints[a]&&(c=o.breakpoints[a]):f>o.breakpoints[a]&&(c=o.breakpoints[a]));c!==null?o.activeBreakpoint!==null?(c!==o.activeBreakpoint||s)&&(o.activeBreakpoint=c,o.breakpointSettings[c]==="unslick"?o.unslick(c):(o.options=n.extend({},o.originalSettings,o.breakpointSettings[c]),r===!0&&(o.currentSlide=o.options.initialSlide),o.refresh(r)),h=c):(o.activeBreakpoint=c,o.breakpointSettings[c]==="unslick"?o.unslick(c):(o.options=n.extend({},o.originalSettings,o.breakpointSettings[c]),r===!0&&(o.currentSlide=o.options.initialSlide),o.refresh(r)),h=c):o.activeBreakpoint!==null&&(o.activeBreakpoint=null,o.options=o.originalSettings,r===!0&&(o.currentSlide=o.options.initialSlide),o.refresh(r),h=c),!r&&h!==!1&&o.$slider.trigger("breakpoint",[o,h])}},i.prototype.changeSlide=function(r,s){var o=this,a=n(r.currentTarget),c,f,h;switch(a.is("a")&&r.preventDefault(),a.is("li")||(a=a.closest("li")),h=o.slideCount%o.options.slidesToScroll!==0,c=h?0:(o.slideCount-o.currentSlide)%o.options.slidesToScroll,r.data.message){case"previous":f=c===0?o.options.slidesToScroll:o.options.slidesToShow-c,o.slideCount>o.options.slidesToShow&&o.slideHandler(o.currentSlide-f,!1,s);break;case"next":f=c===0?o.options.slidesToScroll:c,o.slideCount>o.options.slidesToShow&&o.slideHandler(o.currentSlide+f,!1,s);break;case"index":var p=r.data.index===0?0:r.data.index||a.index()*o.options.slidesToScroll;o.slideHandler(o.checkNavigable(p),!1,s),a.children().trigger("focus");break;default:return}},i.prototype.checkNavigable=function(r){var s=this,o,a;if(o=s.getNavigableIndexes(),a=0,r>o[o.length-1])r=o[o.length-1];else for(var c in o){if(r<o[c]){r=a;break}a=o[c]}return r},i.prototype.cleanUpEvents=function(){var r=this;r.options.dots&&r.$dots!==null&&(n("li",r.$dots).off("click.slick",r.changeSlide).off("mouseenter.slick",n.proxy(r.interrupt,r,!0)).off("mouseleave.slick",n.proxy(r.interrupt,r,!1)),r.options.accessibility===!0&&r.$dots.off("keydown.slick",r.keyHandler)),r.$slider.off("focus.slick blur.slick"),r.options.arrows===!0&&r.slideCount>r.options.slidesToShow&&(r.$prevArrow&&r.$prevArrow.off("click.slick",r.changeSlide),r.$nextArrow&&r.$nextArrow.off("click.slick",r.changeSlide),r.options.accessibility===!0&&(r.$prevArrow&&r.$prevArrow.off("keydown.slick",r.keyHandler),r.$nextArrow&&r.$nextArrow.off("keydown.slick",r.keyHandler))),r.$list.off("touchstart.slick mousedown.slick",r.swipeHandler),r.$list.off("touchmove.slick mousemove.slick",r.swipeHandler),r.$list.off("touchend.slick mouseup.slick",r.swipeHandler),r.$list.off("touchcancel.slick mouseleave.slick",r.swipeHandler),r.$list.off("click.slick",r.clickHandler),n(document).off(r.visibilityChange,r.visibility),r.cleanUpSlideEvents(),r.options.accessibility===!0&&r.$list.off("keydown.slick",r.keyHandler),r.options.focusOnSelect===!0&&n(r.$slideTrack).children().off("click.slick",r.selectHandler),n(window).off("orientationchange.slick.slick-"+r.instanceUid,r.orientationChange),n(window).off("resize.slick.slick-"+r.instanceUid,r.resize),n("[draggable!=true]",r.$slideTrack).off("dragstart",r.preventDefault),n(window).off("load.slick.slick-"+r.instanceUid,r.setPosition)},i.prototype.cleanUpSlideEvents=function(){var r=this;r.$list.off("mouseenter.slick",n.proxy(r.interrupt,r,!0)),r.$list.off("mouseleave.slick",n.proxy(r.interrupt,r,!1))},i.prototype.cleanUpRows=function(){var r=this,s;r.options.rows>0&&(s=r.$slides.children().children(),s.removeAttr("style"),r.$slider.empty().append(s))},i.prototype.clickHandler=function(r){var s=this;s.shouldClick===!1&&(r.stopImmediatePropagation(),r.stopPropagation(),r.preventDefault())},i.prototype.destroy=function(r){var s=this;s.autoPlayClear(),s.touchObject={},s.cleanUpEvents(),n(".slick-cloned",s.$slider).detach(),s.$dots&&s.$dots.remove(),s.$prevArrow&&s.$prevArrow.length&&(s.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),s.htmlExpr.test(s.options.prevArrow)&&s.$prevArrow.remove()),s.$nextArrow&&s.$nextArrow.length&&(s.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),s.htmlExpr.test(s.options.nextArrow)&&s.$nextArrow.remove()),s.$slides&&(s.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){n(this).attr("style",n(this).data("originalStyling"))}),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.detach(),s.$list.detach(),s.$slider.append(s.$slides)),s.cleanUpRows(),s.$slider.removeClass("slick-slider"),s.$slider.removeClass("slick-initialized"),s.$slider.removeClass("slick-dotted"),s.unslicked=!0,r||s.$slider.trigger("destroy",[s])},i.prototype.disableTransition=function(r){var s=this,o={};o[s.transitionType]="",s.options.fade===!1?s.$slideTrack.css(o):s.$slides.eq(r).css(o)},i.prototype.fadeSlide=function(r,s){var o=this;o.cssTransitions===!1?(o.$slides.eq(r).css({zIndex:o.options.zIndex}),o.$slides.eq(r).animate({opacity:1},o.options.speed,o.options.easing,s)):(o.applyTransition(r),o.$slides.eq(r).css({opacity:1,zIndex:o.options.zIndex}),s&&setTimeout(function(){o.disableTransition(r),s.call()},o.options.speed))},i.prototype.fadeSlideOut=function(r){var s=this;s.cssTransitions===!1?s.$slides.eq(r).animate({opacity:0,zIndex:s.options.zIndex-2},s.options.speed,s.options.easing):(s.applyTransition(r),s.$slides.eq(r).css({opacity:0,zIndex:s.options.zIndex-2}))},i.prototype.filterSlides=i.prototype.slickFilter=function(r){var s=this;r!==null&&(s.$slidesCache=s.$slides,s.unload(),s.$slideTrack.children(this.options.slide).detach(),s.$slidesCache.filter(r).appendTo(s.$slideTrack),s.reinit())},i.prototype.focusHandler=function(){var r=this;r.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(s){s.stopImmediatePropagation();var o=n(this);setTimeout(function(){r.options.pauseOnFocus&&(r.focussed=o.is(":focus"),r.autoPlay())},0)})},i.prototype.getCurrent=i.prototype.slickCurrentSlide=function(){var r=this;return r.currentSlide},i.prototype.getDotCount=function(){var r=this,s=0,o=0,a=0;if(r.options.infinite===!0)if(r.slideCount<=r.options.slidesToShow)++a;else for(;s<r.slideCount;)++a,s=o+r.options.slidesToScroll,o+=r.options.slidesToScroll<=r.options.slidesToShow?r.options.slidesToScroll:r.options.slidesToShow;else if(r.options.centerMode===!0)a=r.slideCount;else if(!r.options.asNavFor)a=1+Math.ceil((r.slideCount-r.options.slidesToShow)/r.options.slidesToScroll);else for(;s<r.slideCount;)++a,s=o+r.options.slidesToScroll,o+=r.options.slidesToScroll<=r.options.slidesToShow?r.options.slidesToScroll:r.options.slidesToShow;return a-1},i.prototype.getLeft=function(r){var s=this,o,a,c=0,f,h;return s.slideOffset=0,a=s.$slides.first().outerHeight(!0),s.options.infinite===!0?(s.slideCount>s.options.slidesToShow&&(s.slideOffset=s.slideWidth*s.options.slidesToShow*-1,h=-1,s.options.vertical===!0&&s.options.centerMode===!0&&(s.options.slidesToShow===2?h=-1.5:s.options.slidesToShow===1&&(h=-2)),c=a*s.options.slidesToShow*h),s.slideCount%s.options.slidesToScroll!==0&&r+s.options.slidesToScroll>s.slideCount&&s.slideCount>s.options.slidesToShow&&(r>s.slideCount?(s.slideOffset=(s.options.slidesToShow-(r-s.slideCount))*s.slideWidth*-1,c=(s.options.slidesToShow-(r-s.slideCount))*a*-1):(s.slideOffset=s.slideCount%s.options.slidesToScroll*s.slideWidth*-1,c=s.slideCount%s.options.slidesToScroll*a*-1))):r+s.options.slidesToShow>s.slideCount&&(s.slideOffset=(r+s.options.slidesToShow-s.slideCount)*s.slideWidth,c=(r+s.options.slidesToShow-s.slideCount)*a),s.slideCount<=s.options.slidesToShow&&(s.slideOffset=0,c=0),s.options.centerMode===!0&&s.slideCount<=s.options.slidesToShow?s.slideOffset=s.slideWidth*Math.floor(s.options.slidesToShow)/2-s.slideWidth*s.slideCount/2:s.options.centerMode===!0&&s.options.infinite===!0?s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)-s.slideWidth:s.options.centerMode===!0&&(s.slideOffset=0,s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)),s.options.vertical===!1?o=r*s.slideWidth*-1+s.slideOffset:o=r*a*-1+c,s.options.variableWidth===!0&&(s.slideCount<=s.options.slidesToShow||s.options.infinite===!1?f=s.$slideTrack.children(".slick-slide").eq(r):f=s.$slideTrack.children(".slick-slide").eq(r+s.options.slidesToShow),s.options.rtl===!0?f[0]?o=(s.$slideTrack.width()-f[0].offsetLeft-f.width())*-1:o=0:o=f[0]?f[0].offsetLeft*-1:0,s.options.centerMode===!0&&(s.slideCount<=s.options.slidesToShow||s.options.infinite===!1?f=s.$slideTrack.children(".slick-slide").eq(r):f=s.$slideTrack.children(".slick-slide").eq(r+s.options.slidesToShow+1),s.options.rtl===!0?f[0]?o=(s.$slideTrack.width()-f[0].offsetLeft-f.width())*-1:o=0:o=f[0]?f[0].offsetLeft*-1:0,o+=(s.$list.width()-f.outerWidth())/2)),o},i.prototype.getOption=i.prototype.slickGetOption=function(r){var s=this;return s.options[r]},i.prototype.getNavigableIndexes=function(){var r=this,s=0,o=0,a=[],c;for(r.options.infinite===!1?c=r.slideCount:(s=r.options.slidesToScroll*-1,o=r.options.slidesToScroll*-1,c=r.slideCount*2);s<c;)a.push(s),s=o+r.options.slidesToScroll,o+=r.options.slidesToScroll<=r.options.slidesToShow?r.options.slidesToScroll:r.options.slidesToShow;return a},i.prototype.getSlick=function(){return this},i.prototype.getSlideCount=function(){var r=this,s,o,a;return a=r.options.centerMode===!0?r.slideWidth*Math.floor(r.options.slidesToShow/2):0,r.options.swipeToSlide===!0?(r.$slideTrack.find(".slick-slide").each(function(c,f){if(f.offsetLeft-a+n(f).outerWidth()/2>r.swipeLeft*-1)return o=f,!1}),s=Math.abs(n(o).attr("data-slick-index")-r.currentSlide)||1,s):r.options.slidesToScroll},i.prototype.goTo=i.prototype.slickGoTo=function(r,s){var o=this;o.changeSlide({data:{message:"index",index:parseInt(r)}},s)},i.prototype.init=function(r){var s=this;n(s.$slider).hasClass("slick-initialized")||(n(s.$slider).addClass("slick-initialized"),s.buildRows(),s.buildOut(),s.setProps(),s.startLoad(),s.loadSlider(),s.initializeEvents(),s.updateArrows(),s.updateDots(),s.checkResponsive(!0),s.focusHandler()),r&&s.$slider.trigger("init",[s]),s.options.accessibility===!0&&s.initADA(),s.options.autoplay&&(s.paused=!1,s.autoPlay())},i.prototype.initADA=function(){var r=this,s=Math.ceil(r.slideCount/r.options.slidesToShow),o=r.getNavigableIndexes().filter(function(f){return f>=0&&f<r.slideCount});r.$slides.add(r.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),r.$dots!==null&&(r.$slides.not(r.$slideTrack.find(".slick-cloned")).each(function(f){var h=o.indexOf(f);if(n(this).attr({role:"tabpanel",id:"slick-slide"+r.instanceUid+f,tabindex:-1}),h!==-1){var p="slick-slide-control"+r.instanceUid+h;n("#"+p).length&&n(this).attr({"aria-describedby":p})}}),r.$dots.attr("role","tablist").find("li").each(function(f){var h=o[f];n(this).attr({role:"presentation"}),n(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+r.instanceUid+f,"aria-controls":"slick-slide"+r.instanceUid+h,"aria-label":f+1+" of "+s,"aria-selected":null,tabindex:"-1"})}).eq(r.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var a=r.currentSlide,c=a+r.options.slidesToShow;a<c;a++)r.options.focusOnChange?r.$slides.eq(a).attr({tabindex:"0"}):r.$slides.eq(a).removeAttr("tabindex");r.activateADA()},i.prototype.initArrowEvents=function(){var r=this;r.options.arrows===!0&&r.slideCount>r.options.slidesToShow&&(r.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},r.changeSlide),r.$nextArrow.off("click.slick").on("click.slick",{message:"next"},r.changeSlide),r.options.accessibility===!0&&(r.$prevArrow.on("keydown.slick",r.keyHandler),r.$nextArrow.on("keydown.slick",r.keyHandler)))},i.prototype.initDotEvents=function(){var r=this;r.options.dots===!0&&r.slideCount>r.options.slidesToShow&&(n("li",r.$dots).on("click.slick",{message:"index"},r.changeSlide),r.options.accessibility===!0&&r.$dots.on("keydown.slick",r.keyHandler)),r.options.dots===!0&&r.options.pauseOnDotsHover===!0&&r.slideCount>r.options.slidesToShow&&n("li",r.$dots).on("mouseenter.slick",n.proxy(r.interrupt,r,!0)).on("mouseleave.slick",n.proxy(r.interrupt,r,!1))},i.prototype.initSlideEvents=function(){var r=this;r.options.pauseOnHover&&(r.$list.on("mouseenter.slick",n.proxy(r.interrupt,r,!0)),r.$list.on("mouseleave.slick",n.proxy(r.interrupt,r,!1)))},i.prototype.initializeEvents=function(){var r=this;r.initArrowEvents(),r.initDotEvents(),r.initSlideEvents(),r.$list.on("touchstart.slick mousedown.slick",{action:"start"},r.swipeHandler),r.$list.on("touchmove.slick mousemove.slick",{action:"move"},r.swipeHandler),r.$list.on("touchend.slick mouseup.slick",{action:"end"},r.swipeHandler),r.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},r.swipeHandler),r.$list.on("click.slick",r.clickHandler),n(document).on(r.visibilityChange,n.proxy(r.visibility,r)),r.options.accessibility===!0&&r.$list.on("keydown.slick",r.keyHandler),r.options.focusOnSelect===!0&&n(r.$slideTrack).children().on("click.slick",r.selectHandler),n(window).on("orientationchange.slick.slick-"+r.instanceUid,n.proxy(r.orientationChange,r)),n(window).on("resize.slick.slick-"+r.instanceUid,n.proxy(r.resize,r)),n("[draggable!=true]",r.$slideTrack).on("dragstart",r.preventDefault),n(window).on("load.slick.slick-"+r.instanceUid,r.setPosition),n(r.setPosition)},i.prototype.initUI=function(){var r=this;r.options.arrows===!0&&r.slideCount>r.options.slidesToShow&&(r.$prevArrow.show(),r.$nextArrow.show()),r.options.dots===!0&&r.slideCount>r.options.slidesToShow&&r.$dots.show()},i.prototype.keyHandler=function(r){var s=this;r.target.tagName.match("TEXTAREA|INPUT|SELECT")||(r.keyCode===37&&s.options.accessibility===!0?s.changeSlide({data:{message:s.options.rtl===!0?"next":"previous"}}):r.keyCode===39&&s.options.accessibility===!0&&s.changeSlide({data:{message:s.options.rtl===!0?"previous":"next"}}))},i.prototype.lazyLoad=function(){var r=this,s,o,a,c;function f(E){n("img[data-lazy]",E).each(function(){var S=n(this),x=n(this).attr("data-lazy"),g=n(this).attr("data-srcset"),w=n(this).attr("data-sizes")||r.$slider.attr("data-sizes"),M=document.createElement("img");M.onload=function(){S.animate({opacity:0},100,function(){g&&(S.attr("srcset",g),w&&S.attr("sizes",w)),S.attr("src",x).animate({opacity:1},200,function(){S.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),r.$slider.trigger("lazyLoaded",[r,S,x])})},M.onerror=function(){S.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,S,x])},M.src=x})}if(r.options.centerMode===!0?r.options.infinite===!0?(a=r.currentSlide+(r.options.slidesToShow/2+1),c=a+r.options.slidesToShow+2):(a=Math.max(0,r.currentSlide-(r.options.slidesToShow/2+1)),c=2+(r.options.slidesToShow/2+1)+r.currentSlide):(a=r.options.infinite?r.options.slidesToShow+r.currentSlide:r.currentSlide,c=Math.ceil(a+r.options.slidesToShow),r.options.fade===!0&&(a>0&&a--,c<=r.slideCount&&c++)),s=r.$slider.find(".slick-slide").slice(a,c),r.options.lazyLoad==="anticipated")for(var h=a-1,p=c,m=r.$slider.find(".slick-slide"),_=0;_<r.options.slidesToScroll;_++)h<0&&(h=r.slideCount-1),s=s.add(m.eq(h)),s=s.add(m.eq(p)),h--,p++;f(s),r.slideCount<=r.options.slidesToShow?(o=r.$slider.find(".slick-slide"),f(o)):r.currentSlide>=r.slideCount-r.options.slidesToShow?(o=r.$slider.find(".slick-cloned").slice(0,r.options.slidesToShow),f(o)):r.currentSlide===0&&(o=r.$slider.find(".slick-cloned").slice(r.options.slidesToShow*-1),f(o))},i.prototype.loadSlider=function(){var r=this;r.setPosition(),r.$slideTrack.css({opacity:1}),r.$slider.removeClass("slick-loading"),r.initUI(),r.options.lazyLoad==="progressive"&&r.progressiveLazyLoad()},i.prototype.next=i.prototype.slickNext=function(){var r=this;r.changeSlide({data:{message:"next"}})},i.prototype.orientationChange=function(){var r=this;r.checkResponsive(),r.setPosition()},i.prototype.pause=i.prototype.slickPause=function(){var r=this;r.autoPlayClear(),r.paused=!0},i.prototype.play=i.prototype.slickPlay=function(){var r=this;r.autoPlay(),r.options.autoplay=!0,r.paused=!1,r.focussed=!1,r.interrupted=!1},i.prototype.postSlide=function(r){var s=this;if(!s.unslicked&&(s.$slider.trigger("afterChange",[s,r]),s.animating=!1,s.slideCount>s.options.slidesToShow&&s.setPosition(),s.swipeLeft=null,s.options.autoplay&&s.autoPlay(),s.options.accessibility===!0&&(s.initADA(),s.options.focusOnChange))){var o=n(s.$slides.get(s.currentSlide));o.attr("tabindex",0).focus()}},i.prototype.prev=i.prototype.slickPrev=function(){var r=this;r.changeSlide({data:{message:"previous"}})},i.prototype.preventDefault=function(r){r.preventDefault()},i.prototype.progressiveLazyLoad=function(r){r=r||1;var s=this,o=n("img[data-lazy]",s.$slider),a,c,f,h,p;o.length?(a=o.first(),c=a.attr("data-lazy"),f=a.attr("data-srcset"),h=a.attr("data-sizes")||s.$slider.attr("data-sizes"),p=document.createElement("img"),p.onload=function(){f&&(a.attr("srcset",f),h&&a.attr("sizes",h)),a.attr("src",c).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),s.options.adaptiveHeight===!0&&s.setPosition(),s.$slider.trigger("lazyLoaded",[s,a,c]),s.progressiveLazyLoad()},p.onerror=function(){r<3?setTimeout(function(){s.progressiveLazyLoad(r+1)},500):(a.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),s.$slider.trigger("lazyLoadError",[s,a,c]),s.progressiveLazyLoad())},p.src=c):s.$slider.trigger("allImagesLoaded",[s])},i.prototype.refresh=function(r){var s=this,o,a;a=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>a&&(s.currentSlide=a),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),o=s.currentSlide,s.destroy(!0),n.extend(s,s.initials,{currentSlide:o}),s.init(),r||s.changeSlide({data:{message:"index",index:o}},!1)},i.prototype.registerBreakpoints=function(){var r=this,s,o,a,c=r.options.responsive||null;if(n.type(c)==="array"&&c.length){r.respondTo=r.options.respondTo||"window";for(s in c)if(a=r.breakpoints.length-1,c.hasOwnProperty(s)){for(o=c[s].breakpoint;a>=0;)r.breakpoints[a]&&r.breakpoints[a]===o&&r.breakpoints.splice(a,1),a--;r.breakpoints.push(o),r.breakpointSettings[o]=c[s].settings}r.breakpoints.sort(function(f,h){return r.options.mobileFirst?f-h:h-f})}},i.prototype.reinit=function(){var r=this;r.$slides=r.$slideTrack.children(r.options.slide).addClass("slick-slide"),r.slideCount=r.$slides.length,r.currentSlide>=r.slideCount&&r.currentSlide!==0&&(r.currentSlide=r.currentSlide-r.options.slidesToScroll),r.slideCount<=r.options.slidesToShow&&(r.currentSlide=0),r.registerBreakpoints(),r.setProps(),r.setupInfinite(),r.buildArrows(),r.updateArrows(),r.initArrowEvents(),r.buildDots(),r.updateDots(),r.initDotEvents(),r.cleanUpSlideEvents(),r.initSlideEvents(),r.checkResponsive(!1,!0),r.options.focusOnSelect===!0&&n(r.$slideTrack).children().on("click.slick",r.selectHandler),r.setSlideClasses(typeof r.currentSlide=="number"?r.currentSlide:0),r.setPosition(),r.focusHandler(),r.paused=!r.options.autoplay,r.autoPlay(),r.$slider.trigger("reInit",[r])},i.prototype.resize=function(){var r=this;n(window).width()!==r.windowWidth&&(clearTimeout(r.windowDelay),r.windowDelay=window.setTimeout(function(){r.windowWidth=n(window).width(),r.checkResponsive(),r.unslicked||r.setPosition()},50))},i.prototype.removeSlide=i.prototype.slickRemove=function(r,s,o){var a=this;if(typeof r=="boolean"?(s=r,r=s===!0?0:a.slideCount-1):r=s===!0?--r:r,a.slideCount<1||r<0||r>a.slideCount-1)return!1;a.unload(),o===!0?a.$slideTrack.children().remove():a.$slideTrack.children(this.options.slide).eq(r).remove(),a.$slides=a.$slideTrack.children(this.options.slide),a.$slideTrack.children(this.options.slide).detach(),a.$slideTrack.append(a.$slides),a.$slidesCache=a.$slides,a.reinit()},i.prototype.setCSS=function(r){var s=this,o={},a,c;s.options.rtl===!0&&(r=-r),a=s.positionProp=="left"?Math.ceil(r)+"px":"0px",c=s.positionProp=="top"?Math.ceil(r)+"px":"0px",o[s.positionProp]=r,s.transformsEnabled===!1?s.$slideTrack.css(o):(o={},s.cssTransitions===!1?(o[s.animType]="translate("+a+", "+c+")",s.$slideTrack.css(o)):(o[s.animType]="translate3d("+a+", "+c+", 0px)",s.$slideTrack.css(o)))},i.prototype.setDimensions=function(){var r=this;r.options.vertical===!1?r.options.centerMode===!0&&r.$list.css({padding:"0px "+r.options.centerPadding}):(r.$list.height(r.$slides.first().outerHeight(!0)*r.options.slidesToShow),r.options.centerMode===!0&&r.$list.css({padding:r.options.centerPadding+" 0px"})),r.listWidth=r.$list.width(),r.listHeight=r.$list.height(),r.options.vertical===!1&&r.options.variableWidth===!1?(r.slideWidth=Math.ceil(r.listWidth/r.options.slidesToShow),r.$slideTrack.width(Math.ceil(r.slideWidth*r.$slideTrack.children(".slick-slide").length))):r.options.variableWidth===!0?r.$slideTrack.width(5e3*r.slideCount):(r.slideWidth=Math.ceil(r.listWidth),r.$slideTrack.height(Math.ceil(r.$slides.first().outerHeight(!0)*r.$slideTrack.children(".slick-slide").length)));var s=r.$slides.first().outerWidth(!0)-r.$slides.first().width();r.options.variableWidth===!1&&r.$slideTrack.children(".slick-slide").width(r.slideWidth-s)},i.prototype.setFade=function(){var r=this,s;r.$slides.each(function(o,a){s=r.slideWidth*o*-1,r.options.rtl===!0?n(a).css({position:"relative",right:s,top:0,zIndex:r.options.zIndex-2,opacity:0}):n(a).css({position:"relative",left:s,top:0,zIndex:r.options.zIndex-2,opacity:0})}),r.$slides.eq(r.currentSlide).css({zIndex:r.options.zIndex-1,opacity:1})},i.prototype.setHeight=function(){var r=this;if(r.options.slidesToShow===1&&r.options.adaptiveHeight===!0&&r.options.vertical===!1){var s=r.$slides.eq(r.currentSlide).outerHeight(!0);r.$list.css("height",s)}},i.prototype.setOption=i.prototype.slickSetOption=function(){var r=this,s,o,a,c,f=!1,h;if(n.type(arguments[0])==="object"?(a=arguments[0],f=arguments[1],h="multiple"):n.type(arguments[0])==="string"&&(a=arguments[0],c=arguments[1],f=arguments[2],arguments[0]==="responsive"&&n.type(arguments[1])==="array"?h="responsive":typeof arguments[1]<"u"&&(h="single")),h==="single")r.options[a]=c;else if(h==="multiple")n.each(a,function(p,m){r.options[p]=m});else if(h==="responsive")for(o in c)if(n.type(r.options.responsive)!=="array")r.options.responsive=[c[o]];else{for(s=r.options.responsive.length-1;s>=0;)r.options.responsive[s].breakpoint===c[o].breakpoint&&r.options.responsive.splice(s,1),s--;r.options.responsive.push(c[o])}f&&(r.unload(),r.reinit())},i.prototype.setPosition=function(){var r=this;r.setDimensions(),r.setHeight(),r.options.fade===!1?r.setCSS(r.getLeft(r.currentSlide)):r.setFade(),r.$slider.trigger("setPosition",[r])},i.prototype.setProps=function(){var r=this,s=document.body.style;r.positionProp=r.options.vertical===!0?"top":"left",r.positionProp==="top"?r.$slider.addClass("slick-vertical"):r.$slider.removeClass("slick-vertical"),(s.WebkitTransition!==void 0||s.MozTransition!==void 0||s.msTransition!==void 0)&&r.options.useCSS===!0&&(r.cssTransitions=!0),r.options.fade&&(typeof r.options.zIndex=="number"?r.options.zIndex<3&&(r.options.zIndex=3):r.options.zIndex=r.defaults.zIndex),s.OTransform!==void 0&&(r.animType="OTransform",r.transformType="-o-transform",r.transitionType="OTransition",s.perspectiveProperty===void 0&&s.webkitPerspective===void 0&&(r.animType=!1)),s.MozTransform!==void 0&&(r.animType="MozTransform",r.transformType="-moz-transform",r.transitionType="MozTransition",s.perspectiveProperty===void 0&&s.MozPerspective===void 0&&(r.animType=!1)),s.webkitTransform!==void 0&&(r.animType="webkitTransform",r.transformType="-webkit-transform",r.transitionType="webkitTransition",s.perspectiveProperty===void 0&&s.webkitPerspective===void 0&&(r.animType=!1)),s.msTransform!==void 0&&(r.animType="msTransform",r.transformType="-ms-transform",r.transitionType="msTransition",s.msTransform===void 0&&(r.animType=!1)),s.transform!==void 0&&r.animType!==!1&&(r.animType="transform",r.transformType="transform",r.transitionType="transition"),r.transformsEnabled=r.options.useTransform&&r.animType!==null&&r.animType!==!1},i.prototype.setSlideClasses=function(r){var s=this,o,a,c,f;if(a=s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),s.$slides.eq(r).addClass("slick-current"),s.options.centerMode===!0){var h=s.options.slidesToShow%2===0?1:0;o=Math.floor(s.options.slidesToShow/2),s.options.infinite===!0&&(r>=o&&r<=s.slideCount-1-o?s.$slides.slice(r-o+h,r+o+1).addClass("slick-active").attr("aria-hidden","false"):(c=s.options.slidesToShow+r,a.slice(c-o+1+h,c+o+2).addClass("slick-active").attr("aria-hidden","false")),r===0?a.eq(a.length-1-s.options.slidesToShow).addClass("slick-center"):r===s.slideCount-1&&a.eq(s.options.slidesToShow).addClass("slick-center")),s.$slides.eq(r).addClass("slick-center")}else r>=0&&r<=s.slideCount-s.options.slidesToShow?s.$slides.slice(r,r+s.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):a.length<=s.options.slidesToShow?a.addClass("slick-active").attr("aria-hidden","false"):(f=s.slideCount%s.options.slidesToShow,c=s.options.infinite===!0?s.options.slidesToShow+r:r,s.options.slidesToShow==s.options.slidesToScroll&&s.slideCount-r<s.options.slidesToShow?a.slice(c-(s.options.slidesToShow-f),c+f).addClass("slick-active").attr("aria-hidden","false"):a.slice(c,c+s.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));(s.options.lazyLoad==="ondemand"||s.options.lazyLoad==="anticipated")&&s.lazyLoad()},i.prototype.setupInfinite=function(){var r=this,s,o,a;if(r.options.fade===!0&&(r.options.centerMode=!1),r.options.infinite===!0&&r.options.fade===!1&&(o=null,r.slideCount>r.options.slidesToShow)){for(r.options.centerMode===!0?a=r.options.slidesToShow+1:a=r.options.slidesToShow,s=r.slideCount;s>r.slideCount-a;s-=1)o=s-1,n(r.$slides[o]).clone(!0).attr("id","").attr("data-slick-index",o-r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");for(s=0;s<a+r.slideCount;s+=1)o=s,n(r.$slides[o]).clone(!0).attr("id","").attr("data-slick-index",o+r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");r.$slideTrack.find(".slick-cloned").find("[id]").each(function(){n(this).attr("id","")})}},i.prototype.interrupt=function(r){var s=this;r||s.autoPlay(),s.interrupted=r},i.prototype.selectHandler=function(r){var s=this,o=n(r.target).is(".slick-slide")?n(r.target):n(r.target).parents(".slick-slide"),a=parseInt(o.attr("data-slick-index"));if(a||(a=0),s.slideCount<=s.options.slidesToShow){s.slideHandler(a,!1,!0);return}s.slideHandler(a)},i.prototype.slideHandler=function(r,s,o){var a,c,f,h,p=null,m=this,_;if(s=s||!1,!(m.animating===!0&&m.options.waitForAnimate===!0)&&!(m.options.fade===!0&&m.currentSlide===r)){if(s===!1&&m.asNavFor(r),a=r,p=m.getLeft(a),h=m.getLeft(m.currentSlide),m.currentLeft=m.swipeLeft===null?h:m.swipeLeft,m.options.infinite===!1&&m.options.centerMode===!1&&(r<0||r>m.getDotCount()*m.options.slidesToScroll)){m.options.fade===!1&&(a=m.currentSlide,o!==!0&&m.slideCount>m.options.slidesToShow?m.animateSlide(h,function(){m.postSlide(a)}):m.postSlide(a));return}else if(m.options.infinite===!1&&m.options.centerMode===!0&&(r<0||r>m.slideCount-m.options.slidesToScroll)){m.options.fade===!1&&(a=m.currentSlide,o!==!0&&m.slideCount>m.options.slidesToShow?m.animateSlide(h,function(){m.postSlide(a)}):m.postSlide(a));return}if(m.options.autoplay&&clearInterval(m.autoPlayTimer),a<0?m.slideCount%m.options.slidesToScroll!==0?c=m.slideCount-m.slideCount%m.options.slidesToScroll:c=m.slideCount+a:a>=m.slideCount?m.slideCount%m.options.slidesToScroll!==0?c=0:c=a-m.slideCount:c=a,m.animating=!0,m.$slider.trigger("beforeChange",[m,m.currentSlide,c]),f=m.currentSlide,m.currentSlide=c,m.setSlideClasses(m.currentSlide),m.options.asNavFor&&(_=m.getNavTarget(),_=_.slick("getSlick"),_.slideCount<=_.options.slidesToShow&&_.setSlideClasses(m.currentSlide)),m.updateDots(),m.updateArrows(),m.options.fade===!0){o!==!0?(m.fadeSlideOut(f),m.fadeSlide(c,function(){m.postSlide(c)})):m.postSlide(c),m.animateHeight();return}o!==!0&&m.slideCount>m.options.slidesToShow?m.animateSlide(p,function(){m.postSlide(c)}):m.postSlide(c)}},i.prototype.startLoad=function(){var r=this;r.options.arrows===!0&&r.slideCount>r.options.slidesToShow&&(r.$prevArrow.hide(),r.$nextArrow.hide()),r.options.dots===!0&&r.slideCount>r.options.slidesToShow&&r.$dots.hide(),r.$slider.addClass("slick-loading")},i.prototype.swipeDirection=function(){var r,s,o,a,c=this;return r=c.touchObject.startX-c.touchObject.curX,s=c.touchObject.startY-c.touchObject.curY,o=Math.atan2(s,r),a=Math.round(o*180/Math.PI),a<0&&(a=360-Math.abs(a)),a<=45&&a>=0||a<=360&&a>=315?c.options.rtl===!1?"left":"right":a>=135&&a<=225?c.options.rtl===!1?"right":"left":c.options.verticalSwiping===!0?a>=35&&a<=135?"down":"up":"vertical"},i.prototype.swipeEnd=function(r){var s=this,o,a;if(s.dragging=!1,s.swiping=!1,s.scrolling)return s.scrolling=!1,!1;if(s.interrupted=!1,s.shouldClick=!(s.touchObject.swipeLength>10),s.touchObject.curX===void 0)return!1;if(s.touchObject.edgeHit===!0&&s.$slider.trigger("edge",[s,s.swipeDirection()]),s.touchObject.swipeLength>=s.touchObject.minSwipe){switch(a=s.swipeDirection(),a){case"left":case"down":o=s.options.swipeToSlide?s.checkNavigable(s.currentSlide+s.getSlideCount()):s.currentSlide+s.getSlideCount(),s.currentDirection=0;break;case"right":case"up":o=s.options.swipeToSlide?s.checkNavigable(s.currentSlide-s.getSlideCount()):s.currentSlide-s.getSlideCount(),s.currentDirection=1;break}a!="vertical"&&(s.slideHandler(o),s.touchObject={},s.$slider.trigger("swipe",[s,a]))}else s.touchObject.startX!==s.touchObject.curX&&(s.slideHandler(s.currentSlide),s.touchObject={})},i.prototype.swipeHandler=function(r){var s=this;if(!(s.options.swipe===!1||"ontouchend"in document&&s.options.swipe===!1)&&!(s.options.draggable===!1&&r.type.indexOf("mouse")!==-1))switch(s.touchObject.fingerCount=r.originalEvent&&r.originalEvent.touches!==void 0?r.originalEvent.touches.length:1,s.touchObject.minSwipe=s.listWidth/s.options.touchThreshold,s.options.verticalSwiping===!0&&(s.touchObject.minSwipe=s.listHeight/s.options.touchThreshold),r.data.action){case"start":s.swipeStart(r);break;case"move":s.swipeMove(r);break;case"end":s.swipeEnd(r);break}},i.prototype.swipeMove=function(r){var s=this,o,a,c,f,h,p;if(h=r.originalEvent!==void 0?r.originalEvent.touches:null,!s.dragging||s.scrolling||h&&h.length!==1)return!1;if(o=s.getLeft(s.currentSlide),s.touchObject.curX=h!==void 0?h[0].pageX:r.clientX,s.touchObject.curY=h!==void 0?h[0].pageY:r.clientY,s.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(s.touchObject.curX-s.touchObject.startX,2))),p=Math.round(Math.sqrt(Math.pow(s.touchObject.curY-s.touchObject.startY,2))),!s.options.verticalSwiping&&!s.swiping&&p>4)return s.scrolling=!0,!1;if(s.options.verticalSwiping===!0&&(s.touchObject.swipeLength=p),a=s.swipeDirection(),r.originalEvent!==void 0&&s.touchObject.swipeLength>4&&(s.swiping=!0,r.preventDefault()),f=(s.options.rtl===!1?1:-1)*(s.touchObject.curX>s.touchObject.startX?1:-1),s.options.verticalSwiping===!0&&(f=s.touchObject.curY>s.touchObject.startY?1:-1),c=s.touchObject.swipeLength,s.touchObject.edgeHit=!1,s.options.infinite===!1&&(s.currentSlide===0&&a==="right"||s.currentSlide>=s.getDotCount()&&a==="left")&&(c=s.touchObject.swipeLength*s.options.edgeFriction,s.touchObject.edgeHit=!0),s.options.vertical===!1?s.swipeLeft=o+c*f:s.swipeLeft=o+c*(s.$list.height()/s.listWidth)*f,s.options.verticalSwiping===!0&&(s.swipeLeft=o+c*f),s.options.fade===!0||s.options.touchMove===!1)return!1;if(s.animating===!0)return s.swipeLeft=null,!1;s.setCSS(s.swipeLeft)},i.prototype.swipeStart=function(r){var s=this,o;if(s.interrupted=!0,s.touchObject.fingerCount!==1||s.slideCount<=s.options.slidesToShow)return s.touchObject={},!1;r.originalEvent!==void 0&&r.originalEvent.touches!==void 0&&(o=r.originalEvent.touches[0]),s.touchObject.startX=s.touchObject.curX=o!==void 0?o.pageX:r.clientX,s.touchObject.startY=s.touchObject.curY=o!==void 0?o.pageY:r.clientY,s.dragging=!0},i.prototype.unfilterSlides=i.prototype.slickUnfilter=function(){var r=this;r.$slidesCache!==null&&(r.unload(),r.$slideTrack.children(this.options.slide).detach(),r.$slidesCache.appendTo(r.$slideTrack),r.reinit())},i.prototype.unload=function(){var r=this;n(".slick-cloned",r.$slider).remove(),r.$dots&&r.$dots.remove(),r.$prevArrow&&r.htmlExpr.test(r.options.prevArrow)&&r.$prevArrow.remove(),r.$nextArrow&&r.htmlExpr.test(r.options.nextArrow)&&r.$nextArrow.remove(),r.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},i.prototype.unslick=function(r){var s=this;s.$slider.trigger("unslick",[s,r]),s.destroy()},i.prototype.updateArrows=function(){var r=this;Math.floor(r.options.slidesToShow/2),r.options.arrows===!0&&r.slideCount>r.options.slidesToShow&&!r.options.infinite&&(r.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),r.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),r.currentSlide===0?(r.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),r.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):(r.currentSlide>=r.slideCount-r.options.slidesToShow&&r.options.centerMode===!1||r.currentSlide>=r.slideCount-1&&r.options.centerMode===!0)&&(r.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),r.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},i.prototype.updateDots=function(){var r=this;r.$dots!==null&&(r.$dots.find("li").removeClass("slick-active").end(),r.$dots.find("li").eq(Math.floor(r.currentSlide/r.options.slidesToScroll)).addClass("slick-active"))},i.prototype.visibility=function(){var r=this;r.options.autoplay&&(document[r.hidden]?r.interrupted=!0:r.interrupted=!1)},n.fn.slick=function(){var r=this,s=arguments[0],o=Array.prototype.slice.call(arguments,1),a=r.length,c,f;for(c=0;c<a;c++)if(typeof s=="object"||typeof s>"u"?r[c].slick=new i(r[c],s):f=r[c].slick[s].apply(r[c].slick,o),typeof f<"u")return f;return r}})})(nD);const iD=()=>{Nt("#projects").slick({infinite:!0,speed:500,autoplay:!0,autoplaySpeed:1500,fade:!0,cssEase:"linear"})},rD=()=>{const[t,e]=Ai.useState("100vh"),n=i=>window.open(i,"_blank","noopener noreferrer");return Ai.useEffect(()=>{const i=()=>e(`${document.getElementById("projects").clientHeight+250}px`);window.addEventListener("resize",i),iD()},[]),ee.jsxs("div",{className:"pro-container",style:{height:t},children:[ee.jsx("h1",{children:"Projects"}),ee.jsx("div",{id:"projects",children:tD.map(i=>ee.jsxs("li",{onClick:()=>n(i.link),children:[ee.jsx("img",{src:`images/${i.img}`,alt:i.title}),ee.jsxs("div",{className:"text",children:[ee.jsx("h2",{children:i.title}),ee.jsx("p",{children:i.desc})]})]},i.id))})]})};var XS=function(t,e){var n=document.querySelector("#"+t+" > .particles-js-canvas-el");this.pJS={canvas:{el:n,w:n.offsetWidth,h:n.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var i=this.pJS;e&&Object.deepExtend(i,e),i.tmp.obj={size_value:i.particles.size.value,size_anim_speed:i.particles.size.anim.speed,move_speed:i.particles.move.speed,line_linked_distance:i.particles.line_linked.distance,line_linked_width:i.particles.line_linked.width,mode_grab_distance:i.interactivity.modes.grab.distance,mode_bubble_distance:i.interactivity.modes.bubble.distance,mode_bubble_size:i.interactivity.modes.bubble.size,mode_repulse_distance:i.interactivity.modes.repulse.distance},i.fn.retinaInit=function(){i.retina_detect&&window.devicePixelRatio>1?(i.canvas.pxratio=window.devicePixelRatio,i.tmp.retina=!0):(i.canvas.pxratio=1,i.tmp.retina=!1),i.canvas.w=i.canvas.el.offsetWidth*i.canvas.pxratio,i.canvas.h=i.canvas.el.offsetHeight*i.canvas.pxratio,i.particles.size.value=i.tmp.obj.size_value*i.canvas.pxratio,i.particles.size.anim.speed=i.tmp.obj.size_anim_speed*i.canvas.pxratio,i.particles.move.speed=i.tmp.obj.move_speed*i.canvas.pxratio,i.particles.line_linked.distance=i.tmp.obj.line_linked_distance*i.canvas.pxratio,i.interactivity.modes.grab.distance=i.tmp.obj.mode_grab_distance*i.canvas.pxratio,i.interactivity.modes.bubble.distance=i.tmp.obj.mode_bubble_distance*i.canvas.pxratio,i.particles.line_linked.width=i.tmp.obj.line_linked_width*i.canvas.pxratio,i.interactivity.modes.bubble.size=i.tmp.obj.mode_bubble_size*i.canvas.pxratio,i.interactivity.modes.repulse.distance=i.tmp.obj.mode_repulse_distance*i.canvas.pxratio},i.fn.canvasInit=function(){i.canvas.ctx=i.canvas.el.getContext("2d")},i.fn.canvasSize=function(){i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i&&i.interactivity.events.resize&&window.addEventListener("resize",function(){i.canvas.w=i.canvas.el.offsetWidth,i.canvas.h=i.canvas.el.offsetHeight,i.tmp.retina&&(i.canvas.w*=i.canvas.pxratio,i.canvas.h*=i.canvas.pxratio),i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i.particles.move.enable||(i.fn.particlesEmpty(),i.fn.particlesCreate(),i.fn.particlesDraw(),i.fn.vendors.densityAutoParticles()),i.fn.vendors.densityAutoParticles()})},i.fn.canvasPaint=function(){i.canvas.ctx.fillRect(0,0,i.canvas.w,i.canvas.h)},i.fn.canvasClear=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h)},i.fn.particle=function(r,s,o){if(this.radius=(i.particles.size.random?Math.random():1)*i.particles.size.value,i.particles.size.anim.enable&&(this.size_status=!1,this.vs=i.particles.size.anim.speed/100,i.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=o?o.x:Math.random()*i.canvas.w,this.y=o?o.y:Math.random()*i.canvas.h,this.x>i.canvas.w-this.radius*2?this.x=this.x-this.radius:this.x<this.radius*2&&(this.x=this.x+this.radius),this.y>i.canvas.h-this.radius*2?this.y=this.y-this.radius:this.y<this.radius*2&&(this.y=this.y+this.radius),i.particles.move.bounce&&i.fn.vendors.checkOverlap(this,o),this.color={},typeof r.value=="object")if(r.value instanceof Array){var a=r.value[Math.floor(Math.random()*i.particles.color.value.length)];this.color.rgb=vh(a)}else r.value.r!=null&&r.value.g!=null&&r.value.b!=null&&(this.color.rgb={r:r.value.r,g:r.value.g,b:r.value.b}),r.value.h!=null&&r.value.s!=null&&r.value.l!=null&&(this.color.hsl={h:r.value.h,s:r.value.s,l:r.value.l});else r.value=="random"?this.color.rgb={r:Math.floor(Math.random()*256)+0,g:Math.floor(Math.random()*256)+0,b:Math.floor(Math.random()*256)+0}:typeof r.value=="string"&&(this.color=r,this.color.rgb=vh(this.color.value));this.opacity=(i.particles.opacity.random?Math.random():1)*i.particles.opacity.value,i.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=i.particles.opacity.anim.speed/100,i.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var c={};switch(i.particles.move.direction){case"top":c={x:0,y:-1};break;case"top-right":c={x:.5,y:-.5};break;case"right":c={x:1,y:-0};break;case"bottom-right":c={x:.5,y:.5};break;case"bottom":c={x:0,y:1};break;case"bottom-left":c={x:-.5,y:1};break;case"left":c={x:-1,y:0};break;case"top-left":c={x:-.5,y:-.5};break;default:c={x:0,y:0};break}i.particles.move.straight?(this.vx=c.x,this.vy=c.y,i.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=c.x+Math.random()-.5,this.vy=c.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var f=i.particles.shape.type;if(typeof f=="object"){if(f instanceof Array){var h=f[Math.floor(Math.random()*f.length)];this.shape=h}}else this.shape=f;if(this.shape=="image"){var p=i.particles.shape;this.img={src:p.image.src,ratio:p.image.width/p.image.height},this.img.ratio||(this.img.ratio=1),i.tmp.img_type=="svg"&&i.tmp.source_svg!=null&&(i.fn.vendors.createSvgImg(this),i.tmp.pushing&&(this.img.loaded=!1))}},i.fn.particle.prototype.draw=function(){var r=this;if(r.radius_bubble!=null)var s=r.radius_bubble;else var s=r.radius;if(r.opacity_bubble!=null)var o=r.opacity_bubble;else var o=r.opacity;if(r.color.rgb)var a="rgba("+r.color.rgb.r+","+r.color.rgb.g+","+r.color.rgb.b+","+o+")";else var a="hsla("+r.color.hsl.h+","+r.color.hsl.s+"%,"+r.color.hsl.l+"%,"+o+")";switch(i.canvas.ctx.fillStyle=a,i.canvas.ctx.beginPath(),r.shape){case"circle":i.canvas.ctx.arc(r.x,r.y,s,0,Math.PI*2,!1);break;case"edge":i.canvas.ctx.rect(r.x-s,r.y-s,s*2,s*2);break;case"triangle":i.fn.vendors.drawShape(i.canvas.ctx,r.x-s,r.y+s/1.66,s*2,3,2);break;case"polygon":i.fn.vendors.drawShape(i.canvas.ctx,r.x-s/(i.particles.shape.polygon.nb_sides/3.5),r.y-s/(2.66/3.5),s*2.66/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,1);break;case"star":i.fn.vendors.drawShape(i.canvas.ctx,r.x-s*2/(i.particles.shape.polygon.nb_sides/4),r.y-s/(2*2.66/3.5),s*2*2.66/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,2);break;case"image":let h=function(){i.canvas.ctx.drawImage(c,r.x-s,r.y-s,s*2,s*2/r.img.ratio)};var f=h;if(i.tmp.img_type=="svg")var c=r.img.obj;else var c=i.tmp.img_obj;c&&h();break}i.canvas.ctx.closePath(),i.particles.shape.stroke.width>0&&(i.canvas.ctx.strokeStyle=i.particles.shape.stroke.color,i.canvas.ctx.lineWidth=i.particles.shape.stroke.width,i.canvas.ctx.stroke()),i.canvas.ctx.fill()},i.fn.particlesCreate=function(){for(var r=0;r<i.particles.number.value;r++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value))},i.fn.particlesUpdate=function(){for(var r=0;r<i.particles.array.length;r++){var s=i.particles.array[r];if(i.particles.move.enable){var o=i.particles.move.speed/2;s.x+=s.vx*o,s.y+=s.vy*o}if(i.particles.opacity.anim.enable&&(s.opacity_status==!0?(s.opacity>=i.particles.opacity.value&&(s.opacity_status=!1),s.opacity+=s.vo):(s.opacity<=i.particles.opacity.anim.opacity_min&&(s.opacity_status=!0),s.opacity-=s.vo),s.opacity<0&&(s.opacity=0)),i.particles.size.anim.enable&&(s.size_status==!0?(s.radius>=i.particles.size.value&&(s.size_status=!1),s.radius+=s.vs):(s.radius<=i.particles.size.anim.size_min&&(s.size_status=!0),s.radius-=s.vs),s.radius<0&&(s.radius=0)),i.particles.move.out_mode=="bounce")var a={x_left:s.radius,x_right:i.canvas.w,y_top:s.radius,y_bottom:i.canvas.h};else var a={x_left:-s.radius,x_right:i.canvas.w+s.radius,y_top:-s.radius,y_bottom:i.canvas.h+s.radius};switch(s.x-s.radius>i.canvas.w?(s.x=a.x_left,s.y=Math.random()*i.canvas.h):s.x+s.radius<0&&(s.x=a.x_right,s.y=Math.random()*i.canvas.h),s.y-s.radius>i.canvas.h?(s.y=a.y_top,s.x=Math.random()*i.canvas.w):s.y+s.radius<0&&(s.y=a.y_bottom,s.x=Math.random()*i.canvas.w),i.particles.move.out_mode){case"bounce":(s.x+s.radius>i.canvas.w||s.x-s.radius<0)&&(s.vx=-s.vx),(s.y+s.radius>i.canvas.h||s.y-s.radius<0)&&(s.vy=-s.vy);break}if(tr("grab",i.interactivity.events.onhover.mode)&&i.fn.modes.grabParticle(s),(tr("bubble",i.interactivity.events.onhover.mode)||tr("bubble",i.interactivity.events.onclick.mode))&&i.fn.modes.bubbleParticle(s),(tr("repulse",i.interactivity.events.onhover.mode)||tr("repulse",i.interactivity.events.onclick.mode))&&i.fn.modes.repulseParticle(s),i.particles.line_linked.enable||i.particles.move.attract.enable)for(var c=r+1;c<i.particles.array.length;c++){var f=i.particles.array[c];i.particles.line_linked.enable&&i.fn.interact.linkParticles(s,f),i.particles.move.attract.enable&&i.fn.interact.attractParticles(s,f),i.particles.move.bounce&&i.fn.interact.bounceParticles(s,f)}}},i.fn.particlesDraw=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h),i.fn.particlesUpdate();for(var r=0;r<i.particles.array.length;r++){var s=i.particles.array[r];s.draw()}},i.fn.particlesEmpty=function(){i.particles.array=[]},i.fn.particlesRefresh=function(){cancelRequestAnimFrame(i.fn.checkAnimFrame),cancelRequestAnimFrame(i.fn.drawAnimFrame),i.tmp.source_svg=void 0,i.tmp.img_obj=void 0,i.tmp.count_svg=0,i.fn.particlesEmpty(),i.fn.canvasClear(),i.fn.vendors.start()},i.fn.interact.linkParticles=function(r,s){var o=r.x-s.x,a=r.y-s.y,c=Math.sqrt(o*o+a*a);if(c<=i.particles.line_linked.distance){var f=i.particles.line_linked.opacity-c/(1/i.particles.line_linked.opacity)/i.particles.line_linked.distance;if(f>0){var h=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+h.r+","+h.g+","+h.b+","+f+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(r.x,r.y),i.canvas.ctx.lineTo(s.x,s.y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}},i.fn.interact.attractParticles=function(r,s){var o=r.x-s.x,a=r.y-s.y,c=Math.sqrt(o*o+a*a);if(c<=i.particles.line_linked.distance){var f=o/(i.particles.move.attract.rotateX*1e3),h=a/(i.particles.move.attract.rotateY*1e3);r.vx-=f,r.vy-=h,s.vx+=f,s.vy+=h}},i.fn.interact.bounceParticles=function(r,s){var o=r.x-s.x,a=r.y-s.y,c=Math.sqrt(o*o+a*a),f=r.radius+s.radius;c<=f&&(r.vx=-r.vx,r.vy=-r.vy,s.vx=-s.vx,s.vy=-s.vy)},i.fn.modes.pushParticles=function(r,s){i.tmp.pushing=!0;for(var o=0;o<r;o++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value,{x:s?s.pos_x:Math.random()*i.canvas.w,y:s?s.pos_y:Math.random()*i.canvas.h})),o==r-1&&(i.particles.move.enable||i.fn.particlesDraw(),i.tmp.pushing=!1)},i.fn.modes.removeParticles=function(r){i.particles.array.splice(0,r),i.particles.move.enable||i.fn.particlesDraw()},i.fn.modes.bubbleParticle=function(r){if(i.interactivity.events.onhover.enable&&tr("bubble",i.interactivity.events.onhover.mode)){let S=function(){r.opacity_bubble=r.opacity,r.radius_bubble=r.radius};var _=S,s=r.x-i.interactivity.mouse.pos_x,o=r.y-i.interactivity.mouse.pos_y,a=Math.sqrt(s*s+o*o),c=1-a/i.interactivity.modes.bubble.distance;if(a<=i.interactivity.modes.bubble.distance){if(c>=0&&i.interactivity.status=="mousemove"){if(i.interactivity.modes.bubble.size!=i.particles.size.value)if(i.interactivity.modes.bubble.size>i.particles.size.value){var f=r.radius+i.interactivity.modes.bubble.size*c;f>=0&&(r.radius_bubble=f)}else{var h=r.radius-i.interactivity.modes.bubble.size,f=r.radius-h*c;f>0?r.radius_bubble=f:r.radius_bubble=0}if(i.interactivity.modes.bubble.opacity!=i.particles.opacity.value)if(i.interactivity.modes.bubble.opacity>i.particles.opacity.value){var p=i.interactivity.modes.bubble.opacity*c;p>r.opacity&&p<=i.interactivity.modes.bubble.opacity&&(r.opacity_bubble=p)}else{var p=r.opacity-(i.particles.opacity.value-i.interactivity.modes.bubble.opacity)*c;p<r.opacity&&p>=i.interactivity.modes.bubble.opacity&&(r.opacity_bubble=p)}}}else S();i.interactivity.status=="mouseleave"&&S()}else if(i.interactivity.events.onclick.enable&&tr("bubble",i.interactivity.events.onclick.mode)){let S=function(x,g,w,M,R){if(x!=g)if(i.tmp.bubble_duration_end){if(w!=null){var d=M-m*(M-x)/i.interactivity.modes.bubble.duration,V=x-d;N=x+V,R=="size"&&(r.radius_bubble=N),R=="opacity"&&(r.opacity_bubble=N)}}else if(a<=i.interactivity.modes.bubble.distance){if(w!=null)var U=w;else var U=M;if(U!=x){var N=M-m*(M-x)/i.interactivity.modes.bubble.duration;R=="size"&&(r.radius_bubble=N),R=="opacity"&&(r.opacity_bubble=N)}}else R=="size"&&(r.radius_bubble=void 0),R=="opacity"&&(r.opacity_bubble=void 0)};var E=S;if(i.tmp.bubble_clicking){var s=r.x-i.interactivity.mouse.click_pos_x,o=r.y-i.interactivity.mouse.click_pos_y,a=Math.sqrt(s*s+o*o),m=(new Date().getTime()-i.interactivity.mouse.click_time)/1e3;m>i.interactivity.modes.bubble.duration&&(i.tmp.bubble_duration_end=!0),m>i.interactivity.modes.bubble.duration*2&&(i.tmp.bubble_clicking=!1,i.tmp.bubble_duration_end=!1)}i.tmp.bubble_clicking&&(S(i.interactivity.modes.bubble.size,i.particles.size.value,r.radius_bubble,r.radius,"size"),S(i.interactivity.modes.bubble.opacity,i.particles.opacity.value,r.opacity_bubble,r.opacity,"opacity"))}},i.fn.modes.repulseParticle=function(r){if(i.interactivity.events.onhover.enable&&tr("repulse",i.interactivity.events.onhover.mode)&&i.interactivity.status=="mousemove"){var s=r.x-i.interactivity.mouse.pos_x,o=r.y-i.interactivity.mouse.pos_y,a=Math.sqrt(s*s+o*o),c={x:s/a,y:o/a},f=i.interactivity.modes.repulse.distance,h=100,p=sD(1/f*(-1*Math.pow(a/f,2)+1)*f*h,0,50),m={x:r.x+c.x*p,y:r.y+c.y*p};i.particles.move.out_mode=="bounce"?(m.x-r.radius>0&&m.x+r.radius<i.canvas.w&&(r.x=m.x),m.y-r.radius>0&&m.y+r.radius<i.canvas.h&&(r.y=m.y)):(r.x=m.x,r.y=m.y)}else if(i.interactivity.events.onclick.enable&&tr("repulse",i.interactivity.events.onclick.mode))if(i.tmp.repulse_finish||(i.tmp.repulse_count++,i.tmp.repulse_count==i.particles.array.length&&(i.tmp.repulse_finish=!0)),i.tmp.repulse_clicking){let M=function(){var R=Math.atan2(E,_);if(r.vx=x*Math.cos(R),r.vy=x*Math.sin(R),i.particles.move.out_mode=="bounce"){var U={x:r.x+r.vx,y:r.y+r.vy};(U.x+r.radius>i.canvas.w||U.x-r.radius<0)&&(r.vx=-r.vx),(U.y+r.radius>i.canvas.h||U.y-r.radius<0)&&(r.vy=-r.vy)}};var g=M,f=Math.pow(i.interactivity.modes.repulse.distance/6,3),_=i.interactivity.mouse.click_pos_x-r.x,E=i.interactivity.mouse.click_pos_y-r.y,S=_*_+E*E,x=-f/S*1;S<=f&&M()}else i.tmp.repulse_clicking==!1&&(r.vx=r.vx_i,r.vy=r.vy_i)},i.fn.modes.grabParticle=function(r){if(i.interactivity.events.onhover.enable&&i.interactivity.status=="mousemove"){var s=r.x-i.interactivity.mouse.pos_x,o=r.y-i.interactivity.mouse.pos_y,a=Math.sqrt(s*s+o*o);if(a<=i.interactivity.modes.grab.distance){var c=i.interactivity.modes.grab.line_linked.opacity-a/(1/i.interactivity.modes.grab.line_linked.opacity)/i.interactivity.modes.grab.distance;if(c>0){var f=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+f.r+","+f.g+","+f.b+","+c+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(r.x,r.y),i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x,i.interactivity.mouse.pos_y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}}},i.fn.vendors.eventsListeners=function(){i.interactivity.detect_on=="window"?i.interactivity.el=window:i.interactivity.el=i.canvas.el,(i.interactivity.events.onhover.enable||i.interactivity.events.onclick.enable)&&(i.interactivity.el.addEventListener("mousemove",function(r){if(i.interactivity.el==window)var s=r.clientX,o=r.clientY;else var s=r.offsetX||r.clientX,o=r.offsetY||r.clientY;i.interactivity.mouse.pos_x=s,i.interactivity.mouse.pos_y=o,i.tmp.retina&&(i.interactivity.mouse.pos_x*=i.canvas.pxratio,i.interactivity.mouse.pos_y*=i.canvas.pxratio),i.interactivity.status="mousemove"}),i.interactivity.el.addEventListener("mouseleave",function(r){i.interactivity.mouse.pos_x=null,i.interactivity.mouse.pos_y=null,i.interactivity.status="mouseleave"})),i.interactivity.events.onclick.enable&&i.interactivity.el.addEventListener("click",function(){if(i.interactivity.mouse.click_pos_x=i.interactivity.mouse.pos_x,i.interactivity.mouse.click_pos_y=i.interactivity.mouse.pos_y,i.interactivity.mouse.click_time=new Date().getTime(),i.interactivity.events.onclick.enable)switch(i.interactivity.events.onclick.mode){case"push":i.particles.move.enable||i.interactivity.modes.push.particles_nb==1?i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb,i.interactivity.mouse):i.interactivity.modes.push.particles_nb>1&&i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);break;case"remove":i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);break;case"bubble":i.tmp.bubble_clicking=!0;break;case"repulse":i.tmp.repulse_clicking=!0,i.tmp.repulse_count=0,i.tmp.repulse_finish=!1,setTimeout(function(){i.tmp.repulse_clicking=!1},i.interactivity.modes.repulse.duration*1e3);break}})},i.fn.vendors.densityAutoParticles=function(){if(i.particles.number.density.enable){var r=i.canvas.el.width*i.canvas.el.height/1e3;i.tmp.retina&&(r=r/(i.canvas.pxratio*2));var s=r*i.particles.number.value/i.particles.number.density.value_area,o=i.particles.array.length-s;o<0?i.fn.modes.pushParticles(Math.abs(o)):i.fn.modes.removeParticles(o)}},i.fn.vendors.checkOverlap=function(r,s){for(var o=0;o<i.particles.array.length;o++){var a=i.particles.array[o],c=r.x-a.x,f=r.y-a.y,h=Math.sqrt(c*c+f*f);h<=r.radius+a.radius&&(r.x=s?s.x:Math.random()*i.canvas.w,r.y=s?s.y:Math.random()*i.canvas.h,i.fn.vendors.checkOverlap(r))}},i.fn.vendors.createSvgImg=function(r){var s=i.tmp.source_svg,o=/#([0-9A-F]{3,6})/gi,a=s.replace(o,function(m,_,E,S){if(r.color.rgb)var x="rgba("+r.color.rgb.r+","+r.color.rgb.g+","+r.color.rgb.b+","+r.opacity+")";else var x="hsla("+r.color.hsl.h+","+r.color.hsl.s+"%,"+r.color.hsl.l+"%,"+r.opacity+")";return x}),c=new Blob([a],{type:"image/svg+xml;charset=utf-8"}),f=window.URL||window.webkitURL||window,h=f.createObjectURL(c),p=new Image;p.addEventListener("load",function(){r.img.obj=p,r.img.loaded=!0,f.revokeObjectURL(h),i.tmp.count_svg++}),p.src=h},i.fn.vendors.destroypJS=function(){cancelAnimationFrame(i.fn.drawAnimFrame),n.remove(),pJSDom=null},i.fn.vendors.drawShape=function(r,s,o,a,c,f){var h=c*f,p=c/f,m=180*(p-2)/p,_=Math.PI-Math.PI*m/180;r.save(),r.beginPath(),r.translate(s,o),r.moveTo(0,0);for(var E=0;E<h;E++)r.lineTo(a,0),r.translate(a,0),r.rotate(_);r.fill(),r.restore()},i.fn.vendors.exportImg=function(){window.open(i.canvas.el.toDataURL("image/png"),"_blank")},i.fn.vendors.loadImg=function(r){if(i.tmp.img_error=void 0,i.particles.shape.image.src!="")if(r=="svg"){var s=new XMLHttpRequest;s.open("GET",i.particles.shape.image.src),s.onreadystatechange=function(a){s.readyState==4&&(s.status==200?(i.tmp.source_svg=a.currentTarget.response,i.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),i.tmp.img_error=!0))},s.send()}else{var o=new Image;o.addEventListener("load",function(){i.tmp.img_obj=o,i.fn.vendors.checkBeforeDraw()}),o.src=i.particles.shape.image.src}else console.log("Error pJS - No image.src"),i.tmp.img_error=!0},i.fn.vendors.draw=function(){i.particles.shape.type=="image"?i.tmp.img_type=="svg"?i.tmp.count_svg>=i.particles.number.value?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):i.tmp.img_obj!=null?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame))},i.fn.vendors.checkBeforeDraw=function(){i.particles.shape.type=="image"?i.tmp.img_type=="svg"&&i.tmp.source_svg==null?i.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(i.tmp.checkAnimFrame),i.tmp.img_error||(i.fn.vendors.init(),i.fn.vendors.draw())):(i.fn.vendors.init(),i.fn.vendors.draw())},i.fn.vendors.init=function(){i.fn.retinaInit(),i.fn.canvasInit(),i.fn.canvasSize(),i.fn.canvasPaint(),i.fn.particlesCreate(),i.fn.vendors.densityAutoParticles(),i.particles.line_linked.color_rgb_line=vh(i.particles.line_linked.color)},i.fn.vendors.start=function(){tr("image",i.particles.shape.type)?(i.tmp.img_type=i.particles.shape.image.src.substr(i.particles.shape.image.src.length-3),i.fn.vendors.loadImg(i.tmp.img_type)):i.fn.vendors.checkBeforeDraw()},i.fn.vendors.eventsListeners(),i.fn.vendors.start()};Object.deepExtend=function(t,e){for(var n in e)e[n]&&e[n].constructor&&e[n].constructor===Object?(t[n]=t[n]||{},arguments.callee(t[n],e[n])):t[n]=e[n];return t};window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();window.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}();function vh(t){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t=t.replace(e,function(i,r,s,o){return r+r+s+s+o+o});var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null}function sD(t,e,n){return Math.min(Math.max(t,e),n)}function tr(t,e){return e.indexOf(t)>-1}window.pJSDom=[];window.particlesJS=function(t,e){typeof t!="string"&&(e=t,t="particles-js"),t||(t="particles-js");var n=document.getElementById(t),i="particles-js-canvas-el",r=n.getElementsByClassName(i);if(r.length)for(;r.length>0;)n.removeChild(r[0]);var s=document.createElement("canvas");s.className=i,s.style.width="100%",s.style.height="100%";var o=document.getElementById(t).appendChild(s);o!=null&&pJSDom.push(new XS(t,e))};window.particlesJS.load=function(t,e,n){var i=new XMLHttpRequest;i.open("GET",e),i.onreadystatechange=function(r){if(i.readyState==4)if(i.status==200){var s=JSON.parse(r.currentTarget.response);window.particlesJS(t,s),n&&n()}else console.log("Error pJS - XMLHttpRequest status: "+i.status),console.log("Error pJS - File config not found")},i.send()};window.pJS=XS;const oD=()=>{const[t,e]=Vl({triggerOnce:!0,threshold:.5});return Ai.useEffect(()=>{},[e]),ee.jsxs("div",{className:"con-container",ref:t,children:[ee.jsx("div",{id:"particles-js"}),ee.jsxs("div",{className:"contact",children:[ee.jsx("h1",{children:"Get in Touch"}),ee.jsx("p",{children:"Feel free to contact me for any inquiries or collaboration opportunities. Just click on the button below, leave a message, and I'll try my best to respond back to you!"}),ee.jsx("button",{children:ee.jsx("span",{children:ee.jsx("a",{href:"mailto:viermarzo@gmail.com",children:"Hello"})})})]})]})},aD=()=>{const t=document.querySelector(".load-container"),e=document.querySelector("header"),n=document.querySelector("main");t.parentNode.removeChild(e),t.parentNode.removeChild(n),setTimeout(()=>{t.style.opacity="0",t.parentNode.appendChild(e),t.parentNode.appendChild(n),t.addEventListener("transitionend",()=>{t.parentNode.removeChild(t)})},3e3)},lD=()=>(Ai.useEffect(()=>aD(),[]),ee.jsxs(ee.Fragment,{children:[ee.jsx(qM,{}),ee.jsx("header",{children:ee.jsx(eb,{})}),ee.jsxs("main",{children:[ee.jsx(fb,{}),ee.jsx(D3,{}),ee.jsx(eD,{}),ee.jsx(rD,{}),ee.jsx(oD,{})]})]}));yh.createRoot(document.getElementById("root")).render(ee.jsx(lD,{}));
