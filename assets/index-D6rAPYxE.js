function M1(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Xa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function f_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var d_={exports:{}},$u={},h_={exports:{}},yt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pl=Symbol.for("react.element"),w1=Symbol.for("react.portal"),T1=Symbol.for("react.fragment"),b1=Symbol.for("react.strict_mode"),C1=Symbol.for("react.profiler"),A1=Symbol.for("react.provider"),R1=Symbol.for("react.context"),P1=Symbol.for("react.forward_ref"),L1=Symbol.for("react.suspense"),D1=Symbol.for("react.memo"),N1=Symbol.for("react.lazy"),og=Symbol.iterator;function I1(t){return t===null||typeof t!="object"?null:(t=og&&t[og]||t["@@iterator"],typeof t=="function"?t:null)}var p_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m_=Object.assign,g_={};function va(t,e,n){this.props=t,this.context=e,this.refs=g_,this.updater=n||p_}va.prototype.isReactComponent={};va.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};va.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function v_(){}v_.prototype=va.prototype;function Rp(t,e,n){this.props=t,this.context=e,this.refs=g_,this.updater=n||p_}var Pp=Rp.prototype=new v_;Pp.constructor=Rp;m_(Pp,va.prototype);Pp.isPureReactComponent=!0;var ag=Array.isArray,__=Object.prototype.hasOwnProperty,Lp={current:null},y_={key:!0,ref:!0,__self:!0,__source:!0};function x_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)__.call(e,i)&&!y_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var c=Array(a),f=0;f<a;f++)c[f]=arguments[f+2];r.children=c}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Pl,type:t,key:s,ref:o,props:r,_owner:Lp.current}}function k1(t,e){return{$$typeof:Pl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Pl}function U1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lg=/\/+/g;function ad(t,e){return typeof t=="object"&&t!==null&&t.key!=null?U1(""+t.key):e.toString(36)}function Kc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Pl:case w1:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+ad(o,0):i,ag(r)?(n="",t!=null&&(n=t.replace(lg,"$&/")+"/"),Kc(r,e,n,"",function(f){return f})):r!=null&&(Dp(r)&&(r=k1(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(lg,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ag(t))for(var a=0;a<t.length;a++){s=t[a];var c=i+ad(s,a);o+=Kc(s,e,n,c,r)}else if(c=I1(t),typeof c=="function")for(t=c.call(t),a=0;!(s=t.next()).done;)s=s.value,c=i+ad(s,a++),o+=Kc(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function nc(t,e,n){if(t==null)return t;var i=[],r=0;return Kc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function O1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qn={current:null},Qc={transition:null},F1={ReactCurrentDispatcher:qn,ReactCurrentBatchConfig:Qc,ReactCurrentOwner:Lp};function S_(){throw Error("act(...) is not supported in production builds of React.")}yt.Children={map:nc,forEach:function(t,e,n){nc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return nc(t,function(){e++}),e},toArray:function(t){return nc(t,function(e){return e})||[]},only:function(t){if(!Dp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};yt.Component=va;yt.Fragment=T1;yt.Profiler=C1;yt.PureComponent=Rp;yt.StrictMode=b1;yt.Suspense=L1;yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F1;yt.act=S_;yt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=m_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Lp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)__.call(e,c)&&!y_.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){a=Array(c);for(var f=0;f<c;f++)a[f]=arguments[f+2];i.children=a}return{$$typeof:Pl,type:t.type,key:r,ref:s,props:i,_owner:o}};yt.createContext=function(t){return t={$$typeof:R1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:A1,_context:t},t.Consumer=t};yt.createElement=x_;yt.createFactory=function(t){var e=x_.bind(null,t);return e.type=t,e};yt.createRef=function(){return{current:null}};yt.forwardRef=function(t){return{$$typeof:P1,render:t}};yt.isValidElement=Dp;yt.lazy=function(t){return{$$typeof:N1,_payload:{_status:-1,_result:t},_init:O1}};yt.memo=function(t,e){return{$$typeof:D1,type:t,compare:e===void 0?null:e}};yt.startTransition=function(t){var e=Qc.transition;Qc.transition={};try{t()}finally{Qc.transition=e}};yt.unstable_act=S_;yt.useCallback=function(t,e){return qn.current.useCallback(t,e)};yt.useContext=function(t){return qn.current.useContext(t)};yt.useDebugValue=function(){};yt.useDeferredValue=function(t){return qn.current.useDeferredValue(t)};yt.useEffect=function(t,e){return qn.current.useEffect(t,e)};yt.useId=function(){return qn.current.useId()};yt.useImperativeHandle=function(t,e,n){return qn.current.useImperativeHandle(t,e,n)};yt.useInsertionEffect=function(t,e){return qn.current.useInsertionEffect(t,e)};yt.useLayoutEffect=function(t,e){return qn.current.useLayoutEffect(t,e)};yt.useMemo=function(t,e){return qn.current.useMemo(t,e)};yt.useReducer=function(t,e,n){return qn.current.useReducer(t,e,n)};yt.useRef=function(t){return qn.current.useRef(t)};yt.useState=function(t){return qn.current.useState(t)};yt.useSyncExternalStore=function(t,e,n){return qn.current.useSyncExternalStore(t,e,n)};yt.useTransition=function(){return qn.current.useTransition()};yt.version="18.3.1";h_.exports=yt;var Tt=h_.exports;const Li=f_(Tt),cg=M1({__proto__:null,default:Li},[Tt]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z1=Tt,B1=Symbol.for("react.element"),H1=Symbol.for("react.fragment"),V1=Object.prototype.hasOwnProperty,G1=z1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W1={key:!0,ref:!0,__self:!0,__source:!0};function E_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)V1.call(e,i)&&!W1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:B1,type:t,key:s,ref:o,props:r,_owner:G1.current}}$u.Fragment=H1;$u.jsx=E_;$u.jsxs=E_;d_.exports=$u;var ne=d_.exports,xh={},M_={exports:{}},vi={},w_={exports:{}},T_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,de){var ve=W.length;W.push(de);e:for(;0<ve;){var Ce=ve-1>>>1,We=W[Ce];if(0<r(We,de))W[Ce]=de,W[ve]=We,ve=Ce;else break e}}function n(W){return W.length===0?null:W[0]}function i(W){if(W.length===0)return null;var de=W[0],ve=W.pop();if(ve!==de){W[0]=ve;e:for(var Ce=0,We=W.length,mt=We>>>1;Ce<mt;){var se=2*(Ce+1)-1,Se=W[se],Ne=se+1,Ae=W[Ne];if(0>r(Se,ve))Ne<We&&0>r(Ae,Se)?(W[Ce]=Ae,W[Ne]=ve,Ce=Ne):(W[Ce]=Se,W[se]=ve,Ce=se);else if(Ne<We&&0>r(Ae,ve))W[Ce]=Ae,W[Ne]=ve,Ce=Ne;else break e}}return de}function r(W,de){var ve=W.sortIndex-de.sortIndex;return ve!==0?ve:W.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var c=[],f=[],h=1,p=null,m=3,y=!1,E=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(W){for(var de=n(f);de!==null;){if(de.callback===null)i(f);else if(de.startTime<=W)i(f),de.sortIndex=de.expirationTime,e(c,de);else break;de=n(f)}}function A(W){if(S=!1,w(W),!E)if(n(c)!==null)E=!0,ue(O);else{var de=n(f);de!==null&&pe(A,de.startTime-W)}}function O(W,de){E=!1,S&&(S=!1,g(z),z=-1),y=!0;var ve=m;try{for(w(de),p=n(c);p!==null&&(!(p.expirationTime>de)||W&&!H());){var Ce=p.callback;if(typeof Ce=="function"){p.callback=null,m=p.priorityLevel;var We=Ce(p.expirationTime<=de);de=t.unstable_now(),typeof We=="function"?p.callback=We:p===n(c)&&i(c),w(de)}else i(c);p=n(c)}if(p!==null)var mt=!0;else{var se=n(f);se!==null&&pe(A,se.startTime-de),mt=!1}return mt}finally{p=null,m=ve,y=!1}}var N=!1,d=null,z=-1,D=5,R=-1;function H(){return!(t.unstable_now()-R<D)}function oe(){if(d!==null){var W=t.unstable_now();R=W;var de=!0;try{de=d(!0,W)}finally{de?q():(N=!1,d=null)}}else N=!1}var q;if(typeof M=="function")q=function(){M(oe)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,me=fe.port2;fe.port1.onmessage=oe,q=function(){me.postMessage(null)}}else q=function(){x(oe,0)};function ue(W){d=W,N||(N=!0,q())}function pe(W,de){z=x(function(){W(t.unstable_now())},de)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){E||y||(E=!0,ue(O))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(W){switch(m){case 1:case 2:case 3:var de=3;break;default:de=m}var ve=m;m=de;try{return W()}finally{m=ve}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,de){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ve=m;m=W;try{return de()}finally{m=ve}},t.unstable_scheduleCallback=function(W,de,ve){var Ce=t.unstable_now();switch(typeof ve=="object"&&ve!==null?(ve=ve.delay,ve=typeof ve=="number"&&0<ve?Ce+ve:Ce):ve=Ce,W){case 1:var We=-1;break;case 2:We=250;break;case 5:We=1073741823;break;case 4:We=1e4;break;default:We=5e3}return We=ve+We,W={id:h++,callback:de,priorityLevel:W,startTime:ve,expirationTime:We,sortIndex:-1},ve>Ce?(W.sortIndex=ve,e(f,W),n(c)===null&&W===n(f)&&(S?(g(z),z=-1):S=!0,pe(A,ve-Ce))):(W.sortIndex=We,e(c,W),E||y||(E=!0,ue(O))),W},t.unstable_shouldYield=H,t.unstable_wrapCallback=function(W){var de=m;return function(){var ve=m;m=de;try{return W.apply(this,arguments)}finally{m=ve}}}})(T_);w_.exports=T_;var j1=w_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $1=Tt,gi=j1;function xe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b_=new Set,cl={};function lo(t,e){ia(t,e),ia(t+"Capture",e)}function ia(t,e){for(cl[t]=e,t=0;t<e.length;t++)b_.add(e[t])}var Or=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sh=Object.prototype.hasOwnProperty,X1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ug={},fg={};function q1(t){return Sh.call(fg,t)?!0:Sh.call(ug,t)?!1:X1.test(t)?fg[t]=!0:(ug[t]=!0,!1)}function Y1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function K1(t,e,n,i){if(e===null||typeof e>"u"||Y1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Nn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Nn[t]=new Yn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Nn[e]=new Yn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Nn[t]=new Yn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Nn[t]=new Yn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Nn[t]=new Yn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Nn[t]=new Yn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Nn[t]=new Yn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Nn[t]=new Yn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Nn[t]=new Yn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Np=/[\-:]([a-z])/g;function Ip(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Np,Ip);Nn[e]=new Yn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Np,Ip);Nn[e]=new Yn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Np,Ip);Nn[e]=new Yn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Nn[t]=new Yn(t,1,!1,t.toLowerCase(),null,!1,!1)});Nn.xlinkHref=new Yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Nn[t]=new Yn(t,1,!1,t.toLowerCase(),null,!0,!0)});function kp(t,e,n,i){var r=Nn.hasOwnProperty(e)?Nn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(K1(e,n,r,i)&&(n=null),i||r===null?q1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Vr=$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ic=Symbol.for("react.element"),Io=Symbol.for("react.portal"),ko=Symbol.for("react.fragment"),Up=Symbol.for("react.strict_mode"),Eh=Symbol.for("react.profiler"),C_=Symbol.for("react.provider"),A_=Symbol.for("react.context"),Op=Symbol.for("react.forward_ref"),Mh=Symbol.for("react.suspense"),wh=Symbol.for("react.suspense_list"),Fp=Symbol.for("react.memo"),is=Symbol.for("react.lazy"),R_=Symbol.for("react.offscreen"),dg=Symbol.iterator;function Da(t){return t===null||typeof t!="object"?null:(t=dg&&t[dg]||t["@@iterator"],typeof t=="function"?t:null)}var sn=Object.assign,ld;function qa(t){if(ld===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ld=e&&e[1]||""}return`
`+ld+t}var cd=!1;function ud(t,e){if(!t||cd)return"";cd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(f){var i=f}Reflect.construct(t,[],e)}else{try{e.call()}catch(f){i=f}t.call(e.prototype)}else{try{throw Error()}catch(f){i=f}t()}}catch(f){if(f&&i&&typeof f.stack=="string"){for(var r=f.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var c=`
`+r[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=a);break}}}finally{cd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qa(t):""}function Q1(t){switch(t.tag){case 5:return qa(t.type);case 16:return qa("Lazy");case 13:return qa("Suspense");case 19:return qa("SuspenseList");case 0:case 2:case 15:return t=ud(t.type,!1),t;case 11:return t=ud(t.type.render,!1),t;case 1:return t=ud(t.type,!0),t;default:return""}}function Th(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ko:return"Fragment";case Io:return"Portal";case Eh:return"Profiler";case Up:return"StrictMode";case Mh:return"Suspense";case wh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case A_:return(t.displayName||"Context")+".Consumer";case C_:return(t._context.displayName||"Context")+".Provider";case Op:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fp:return e=t.displayName||null,e!==null?e:Th(t.type)||"Memo";case is:e=t._payload,t=t._init;try{return Th(t(e))}catch{}}return null}function Z1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Th(e);case 8:return e===Up?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ss(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function P_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function J1(t){var e=P_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function rc(t){t._valueTracker||(t._valueTracker=J1(t))}function L_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=P_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function hu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bh(t,e){var n=e.checked;return sn({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ss(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function D_(t,e){e=e.checked,e!=null&&kp(t,"checked",e,!1)}function Ch(t,e){D_(t,e);var n=Ss(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ah(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ah(t,e.type,Ss(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ah(t,e,n){(e!=="number"||hu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ya=Array.isArray;function Xo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ss(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Rh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(xe(91));return sn({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(xe(92));if(Ya(n)){if(1<n.length)throw Error(xe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ss(n)}}function N_(t,e){var n=Ss(e.value),i=Ss(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function gg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function I_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ph(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?I_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var sc,k_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(sc=sc||document.createElement("div"),sc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=sc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ul(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var el={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eE=["Webkit","ms","Moz","O"];Object.keys(el).forEach(function(t){eE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),el[e]=el[t]})});function U_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||el.hasOwnProperty(t)&&el[t]?(""+e).trim():e+"px"}function O_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=U_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var tE=sn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lh(t,e){if(e){if(tE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(xe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(xe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(xe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(xe(62))}}function Dh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nh=null;function zp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ih=null,qo=null,Yo=null;function vg(t){if(t=Nl(t)){if(typeof Ih!="function")throw Error(xe(280));var e=t.stateNode;e&&(e=Qu(e),Ih(t.stateNode,t.type,e))}}function F_(t){qo?Yo?Yo.push(t):Yo=[t]:qo=t}function z_(){if(qo){var t=qo,e=Yo;if(Yo=qo=null,vg(t),e)for(t=0;t<e.length;t++)vg(e[t])}}function B_(t,e){return t(e)}function H_(){}var fd=!1;function V_(t,e,n){if(fd)return t(e,n);fd=!0;try{return B_(t,e,n)}finally{fd=!1,(qo!==null||Yo!==null)&&(H_(),z_())}}function fl(t,e){var n=t.stateNode;if(n===null)return null;var i=Qu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(xe(231,e,typeof n));return n}var kh=!1;if(Or)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){kh=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{kh=!1}function nE(t,e,n,i,r,s,o,a,c){var f=Array.prototype.slice.call(arguments,3);try{e.apply(n,f)}catch(h){this.onError(h)}}var tl=!1,pu=null,mu=!1,Uh=null,iE={onError:function(t){tl=!0,pu=t}};function rE(t,e,n,i,r,s,o,a,c){tl=!1,pu=null,nE.apply(iE,arguments)}function sE(t,e,n,i,r,s,o,a,c){if(rE.apply(this,arguments),tl){if(tl){var f=pu;tl=!1,pu=null}else throw Error(xe(198));mu||(mu=!0,Uh=f)}}function co(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function G_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _g(t){if(co(t)!==t)throw Error(xe(188))}function oE(t){var e=t.alternate;if(!e){if(e=co(t),e===null)throw Error(xe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return _g(r),t;if(s===i)return _g(r),e;s=s.sibling}throw Error(xe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(xe(189))}}if(n.alternate!==i)throw Error(xe(190))}if(n.tag!==3)throw Error(xe(188));return n.stateNode.current===n?t:e}function W_(t){return t=oE(t),t!==null?j_(t):null}function j_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=j_(t);if(e!==null)return e;t=t.sibling}return null}var $_=gi.unstable_scheduleCallback,yg=gi.unstable_cancelCallback,aE=gi.unstable_shouldYield,lE=gi.unstable_requestPaint,un=gi.unstable_now,cE=gi.unstable_getCurrentPriorityLevel,Bp=gi.unstable_ImmediatePriority,X_=gi.unstable_UserBlockingPriority,gu=gi.unstable_NormalPriority,uE=gi.unstable_LowPriority,q_=gi.unstable_IdlePriority,Xu=null,mr=null;function fE(t){if(mr&&typeof mr.onCommitFiberRoot=="function")try{mr.onCommitFiberRoot(Xu,t,void 0,(t.current.flags&128)===128)}catch{}}var $i=Math.clz32?Math.clz32:pE,dE=Math.log,hE=Math.LN2;function pE(t){return t>>>=0,t===0?32:31-(dE(t)/hE|0)|0}var oc=64,ac=4194304;function Ka(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ka(a):(s&=o,s!==0&&(i=Ka(s)))}else o=n&~r,o!==0?i=Ka(o):s!==0&&(i=Ka(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-$i(e),r=1<<n,i|=t[n],e&=~r;return i}function mE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$i(s),a=1<<o,c=r[o];c===-1?(!(a&n)||a&i)&&(r[o]=mE(a,e)):c<=e&&(t.expiredLanes|=a),s&=~a}}function Oh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Y_(){var t=oc;return oc<<=1,!(oc&4194240)&&(oc=64),t}function dd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ll(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$i(e),t[e]=n}function vE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-$i(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Hp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-$i(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Bt=0;function K_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Q_,Vp,Z_,J_,ey,Fh=!1,lc=[],fs=null,ds=null,hs=null,dl=new Map,hl=new Map,ss=[],_E="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xg(t,e){switch(t){case"focusin":case"focusout":fs=null;break;case"dragenter":case"dragleave":ds=null;break;case"mouseover":case"mouseout":hs=null;break;case"pointerover":case"pointerout":dl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":hl.delete(e.pointerId)}}function Ia(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Nl(e),e!==null&&Vp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function yE(t,e,n,i,r){switch(e){case"focusin":return fs=Ia(fs,t,e,n,i,r),!0;case"dragenter":return ds=Ia(ds,t,e,n,i,r),!0;case"mouseover":return hs=Ia(hs,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return dl.set(s,Ia(dl.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,hl.set(s,Ia(hl.get(s)||null,t,e,n,i,r)),!0}return!1}function ty(t){var e=qs(t.target);if(e!==null){var n=co(e);if(n!==null){if(e=n.tag,e===13){if(e=G_(n),e!==null){t.blockedOn=e,ey(t.priority,function(){Z_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Nh=i,n.target.dispatchEvent(i),Nh=null}else return e=Nl(n),e!==null&&Vp(e),t.blockedOn=n,!1;e.shift()}return!0}function Sg(t,e,n){Zc(t)&&n.delete(e)}function xE(){Fh=!1,fs!==null&&Zc(fs)&&(fs=null),ds!==null&&Zc(ds)&&(ds=null),hs!==null&&Zc(hs)&&(hs=null),dl.forEach(Sg),hl.forEach(Sg)}function ka(t,e){t.blockedOn===e&&(t.blockedOn=null,Fh||(Fh=!0,gi.unstable_scheduleCallback(gi.unstable_NormalPriority,xE)))}function pl(t){function e(r){return ka(r,t)}if(0<lc.length){ka(lc[0],t);for(var n=1;n<lc.length;n++){var i=lc[n];i.blockedOn===t&&(i.blockedOn=null)}}for(fs!==null&&ka(fs,t),ds!==null&&ka(ds,t),hs!==null&&ka(hs,t),dl.forEach(e),hl.forEach(e),n=0;n<ss.length;n++)i=ss[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ss.length&&(n=ss[0],n.blockedOn===null);)ty(n),n.blockedOn===null&&ss.shift()}var Ko=Vr.ReactCurrentBatchConfig,_u=!0;function SE(t,e,n,i){var r=Bt,s=Ko.transition;Ko.transition=null;try{Bt=1,Gp(t,e,n,i)}finally{Bt=r,Ko.transition=s}}function EE(t,e,n,i){var r=Bt,s=Ko.transition;Ko.transition=null;try{Bt=4,Gp(t,e,n,i)}finally{Bt=r,Ko.transition=s}}function Gp(t,e,n,i){if(_u){var r=zh(t,e,n,i);if(r===null)Ed(t,e,i,yu,n),xg(t,i);else if(yE(r,t,e,n,i))i.stopPropagation();else if(xg(t,i),e&4&&-1<_E.indexOf(t)){for(;r!==null;){var s=Nl(r);if(s!==null&&Q_(s),s=zh(t,e,n,i),s===null&&Ed(t,e,i,yu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ed(t,e,i,null,n)}}var yu=null;function zh(t,e,n,i){if(yu=null,t=zp(i),t=qs(t),t!==null)if(e=co(t),e===null)t=null;else if(n=e.tag,n===13){if(t=G_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yu=t,null}function ny(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cE()){case Bp:return 1;case X_:return 4;case gu:case uE:return 16;case q_:return 536870912;default:return 16}default:return 16}}var ls=null,Wp=null,Jc=null;function iy(){if(Jc)return Jc;var t,e=Wp,n=e.length,i,r="value"in ls?ls.value:ls.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Jc=r.slice(t,1<i?1-i:void 0)}function eu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function cc(){return!0}function Eg(){return!1}function _i(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?cc:Eg,this.isPropagationStopped=Eg,this}return sn(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cc)},persist:function(){},isPersistent:cc}),e}var _a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jp=_i(_a),Dl=sn({},_a,{view:0,detail:0}),ME=_i(Dl),hd,pd,Ua,qu=sn({},Dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$p,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ua&&(Ua&&t.type==="mousemove"?(hd=t.screenX-Ua.screenX,pd=t.screenY-Ua.screenY):pd=hd=0,Ua=t),hd)},movementY:function(t){return"movementY"in t?t.movementY:pd}}),Mg=_i(qu),wE=sn({},qu,{dataTransfer:0}),TE=_i(wE),bE=sn({},Dl,{relatedTarget:0}),md=_i(bE),CE=sn({},_a,{animationName:0,elapsedTime:0,pseudoElement:0}),AE=_i(CE),RE=sn({},_a,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),PE=_i(RE),LE=sn({},_a,{data:0}),wg=_i(LE),DE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},IE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=IE[t])?!!e[t]:!1}function $p(){return kE}var UE=sn({},Dl,{key:function(t){if(t.key){var e=DE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=eu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?NE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$p,charCode:function(t){return t.type==="keypress"?eu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?eu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OE=_i(UE),FE=sn({},qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tg=_i(FE),zE=sn({},Dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$p}),BE=_i(zE),HE=sn({},_a,{propertyName:0,elapsedTime:0,pseudoElement:0}),VE=_i(HE),GE=sn({},qu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),WE=_i(GE),jE=[9,13,27,32],Xp=Or&&"CompositionEvent"in window,nl=null;Or&&"documentMode"in document&&(nl=document.documentMode);var $E=Or&&"TextEvent"in window&&!nl,ry=Or&&(!Xp||nl&&8<nl&&11>=nl),bg=" ",Cg=!1;function sy(t,e){switch(t){case"keyup":return jE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Uo=!1;function XE(t,e){switch(t){case"compositionend":return oy(e);case"keypress":return e.which!==32?null:(Cg=!0,bg);case"textInput":return t=e.data,t===bg&&Cg?null:t;default:return null}}function qE(t,e){if(Uo)return t==="compositionend"||!Xp&&sy(t,e)?(t=iy(),Jc=Wp=ls=null,Uo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ry&&e.locale!=="ko"?null:e.data;default:return null}}var YE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ag(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!YE[t.type]:e==="textarea"}function ay(t,e,n,i){F_(i),e=xu(e,"onChange"),0<e.length&&(n=new jp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var il=null,ml=null;function KE(t){_y(t,0)}function Yu(t){var e=zo(t);if(L_(e))return t}function QE(t,e){if(t==="change")return e}var ly=!1;if(Or){var gd;if(Or){var vd="oninput"in document;if(!vd){var Rg=document.createElement("div");Rg.setAttribute("oninput","return;"),vd=typeof Rg.oninput=="function"}gd=vd}else gd=!1;ly=gd&&(!document.documentMode||9<document.documentMode)}function Pg(){il&&(il.detachEvent("onpropertychange",cy),ml=il=null)}function cy(t){if(t.propertyName==="value"&&Yu(ml)){var e=[];ay(e,ml,t,zp(t)),V_(KE,e)}}function ZE(t,e,n){t==="focusin"?(Pg(),il=e,ml=n,il.attachEvent("onpropertychange",cy)):t==="focusout"&&Pg()}function JE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yu(ml)}function eM(t,e){if(t==="click")return Yu(e)}function tM(t,e){if(t==="input"||t==="change")return Yu(e)}function nM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qi=typeof Object.is=="function"?Object.is:nM;function gl(t,e){if(qi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Sh.call(e,r)||!qi(t[r],e[r]))return!1}return!0}function Lg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dg(t,e){var n=Lg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lg(n)}}function uy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?uy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fy(){for(var t=window,e=hu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hu(t.document)}return e}function qp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function iM(t){var e=fy(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&uy(n.ownerDocument.documentElement,n)){if(i!==null&&qp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Dg(n,s);var o=Dg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rM=Or&&"documentMode"in document&&11>=document.documentMode,Oo=null,Bh=null,rl=null,Hh=!1;function Ng(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hh||Oo==null||Oo!==hu(i)||(i=Oo,"selectionStart"in i&&qp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),rl&&gl(rl,i)||(rl=i,i=xu(Bh,"onSelect"),0<i.length&&(e=new jp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Oo)))}function uc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fo={animationend:uc("Animation","AnimationEnd"),animationiteration:uc("Animation","AnimationIteration"),animationstart:uc("Animation","AnimationStart"),transitionend:uc("Transition","TransitionEnd")},_d={},dy={};Or&&(dy=document.createElement("div").style,"AnimationEvent"in window||(delete Fo.animationend.animation,delete Fo.animationiteration.animation,delete Fo.animationstart.animation),"TransitionEvent"in window||delete Fo.transitionend.transition);function Ku(t){if(_d[t])return _d[t];if(!Fo[t])return t;var e=Fo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dy)return _d[t]=e[n];return t}var hy=Ku("animationend"),py=Ku("animationiteration"),my=Ku("animationstart"),gy=Ku("transitionend"),vy=new Map,Ig="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bs(t,e){vy.set(t,e),lo(e,[t])}for(var yd=0;yd<Ig.length;yd++){var xd=Ig[yd],sM=xd.toLowerCase(),oM=xd[0].toUpperCase()+xd.slice(1);bs(sM,"on"+oM)}bs(hy,"onAnimationEnd");bs(py,"onAnimationIteration");bs(my,"onAnimationStart");bs("dblclick","onDoubleClick");bs("focusin","onFocus");bs("focusout","onBlur");bs(gy,"onTransitionEnd");ia("onMouseEnter",["mouseout","mouseover"]);ia("onMouseLeave",["mouseout","mouseover"]);ia("onPointerEnter",["pointerout","pointerover"]);ia("onPointerLeave",["pointerout","pointerover"]);lo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));lo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));lo("onBeforeInput",["compositionend","keypress","textInput","paste"]);lo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));lo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));lo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qa));function kg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,sE(i,e,void 0,t),t.currentTarget=null}function _y(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],c=a.instance,f=a.currentTarget;if(a=a.listener,c!==s&&r.isPropagationStopped())break e;kg(r,a,f),s=c}else for(o=0;o<i.length;o++){if(a=i[o],c=a.instance,f=a.currentTarget,a=a.listener,c!==s&&r.isPropagationStopped())break e;kg(r,a,f),s=c}}}if(mu)throw t=Uh,mu=!1,Uh=null,t}function qt(t,e){var n=e[$h];n===void 0&&(n=e[$h]=new Set);var i=t+"__bubble";n.has(i)||(yy(e,t,2,!1),n.add(i))}function Sd(t,e,n){var i=0;e&&(i|=4),yy(n,t,i,e)}var fc="_reactListening"+Math.random().toString(36).slice(2);function vl(t){if(!t[fc]){t[fc]=!0,b_.forEach(function(n){n!=="selectionchange"&&(aM.has(n)||Sd(n,!1,t),Sd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fc]||(e[fc]=!0,Sd("selectionchange",!1,e))}}function yy(t,e,n,i){switch(ny(e)){case 1:var r=SE;break;case 4:r=EE;break;default:r=Gp}n=r.bind(null,e,n,t),r=void 0,!kh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ed(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;o=o.return}for(;a!==null;){if(o=qs(a),o===null)return;if(c=o.tag,c===5||c===6){i=s=o;continue e}a=a.parentNode}}i=i.return}V_(function(){var f=s,h=zp(n),p=[];e:{var m=vy.get(t);if(m!==void 0){var y=jp,E=t;switch(t){case"keypress":if(eu(n)===0)break e;case"keydown":case"keyup":y=OE;break;case"focusin":E="focus",y=md;break;case"focusout":E="blur",y=md;break;case"beforeblur":case"afterblur":y=md;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Mg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=TE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=BE;break;case hy:case py:case my:y=AE;break;case gy:y=VE;break;case"scroll":y=ME;break;case"wheel":y=WE;break;case"copy":case"cut":case"paste":y=PE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Tg}var S=(e&4)!==0,x=!S&&t==="scroll",g=S?m!==null?m+"Capture":null:m;S=[];for(var M=f,w;M!==null;){w=M;var A=w.stateNode;if(w.tag===5&&A!==null&&(w=A,g!==null&&(A=fl(M,g),A!=null&&S.push(_l(M,A,w)))),x)break;M=M.return}0<S.length&&(m=new y(m,E,null,n,h),p.push({event:m,listeners:S}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",m&&n!==Nh&&(E=n.relatedTarget||n.fromElement)&&(qs(E)||E[Fr]))break e;if((y||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,y?(E=n.relatedTarget||n.toElement,y=f,E=E?qs(E):null,E!==null&&(x=co(E),E!==x||E.tag!==5&&E.tag!==6)&&(E=null)):(y=null,E=f),y!==E)){if(S=Mg,A="onMouseLeave",g="onMouseEnter",M="mouse",(t==="pointerout"||t==="pointerover")&&(S=Tg,A="onPointerLeave",g="onPointerEnter",M="pointer"),x=y==null?m:zo(y),w=E==null?m:zo(E),m=new S(A,M+"leave",y,n,h),m.target=x,m.relatedTarget=w,A=null,qs(h)===f&&(S=new S(g,M+"enter",E,n,h),S.target=w,S.relatedTarget=x,A=S),x=A,y&&E)t:{for(S=y,g=E,M=0,w=S;w;w=go(w))M++;for(w=0,A=g;A;A=go(A))w++;for(;0<M-w;)S=go(S),M--;for(;0<w-M;)g=go(g),w--;for(;M--;){if(S===g||g!==null&&S===g.alternate)break t;S=go(S),g=go(g)}S=null}else S=null;y!==null&&Ug(p,m,y,S,!1),E!==null&&x!==null&&Ug(p,x,E,S,!0)}}e:{if(m=f?zo(f):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var O=QE;else if(Ag(m))if(ly)O=tM;else{O=JE;var N=ZE}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(O=eM);if(O&&(O=O(t,f))){ay(p,O,n,h);break e}N&&N(t,m,f),t==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&Ah(m,"number",m.value)}switch(N=f?zo(f):window,t){case"focusin":(Ag(N)||N.contentEditable==="true")&&(Oo=N,Bh=f,rl=null);break;case"focusout":rl=Bh=Oo=null;break;case"mousedown":Hh=!0;break;case"contextmenu":case"mouseup":case"dragend":Hh=!1,Ng(p,n,h);break;case"selectionchange":if(rM)break;case"keydown":case"keyup":Ng(p,n,h)}var d;if(Xp)e:{switch(t){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Uo?sy(t,n)&&(z="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(ry&&n.locale!=="ko"&&(Uo||z!=="onCompositionStart"?z==="onCompositionEnd"&&Uo&&(d=iy()):(ls=h,Wp="value"in ls?ls.value:ls.textContent,Uo=!0)),N=xu(f,z),0<N.length&&(z=new wg(z,t,null,n,h),p.push({event:z,listeners:N}),d?z.data=d:(d=oy(n),d!==null&&(z.data=d)))),(d=$E?XE(t,n):qE(t,n))&&(f=xu(f,"onBeforeInput"),0<f.length&&(h=new wg("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:f}),h.data=d))}_y(p,e)})}function _l(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=fl(t,n),s!=null&&i.unshift(_l(t,s,r)),s=fl(t,e),s!=null&&i.push(_l(t,s,r))),t=t.return}return i}function go(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ug(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,c=a.alternate,f=a.stateNode;if(c!==null&&c===i)break;a.tag===5&&f!==null&&(a=f,r?(c=fl(n,s),c!=null&&o.unshift(_l(n,c,a))):r||(c=fl(n,s),c!=null&&o.push(_l(n,c,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lM=/\r\n?/g,cM=/\u0000|\uFFFD/g;function Og(t){return(typeof t=="string"?t:""+t).replace(lM,`
`).replace(cM,"")}function dc(t,e,n){if(e=Og(e),Og(t)!==e&&n)throw Error(xe(425))}function Su(){}var Vh=null,Gh=null;function Wh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jh=typeof setTimeout=="function"?setTimeout:void 0,uM=typeof clearTimeout=="function"?clearTimeout:void 0,Fg=typeof Promise=="function"?Promise:void 0,fM=typeof queueMicrotask=="function"?queueMicrotask:typeof Fg<"u"?function(t){return Fg.resolve(null).then(t).catch(dM)}:jh;function dM(t){setTimeout(function(){throw t})}function Md(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),pl(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);pl(e)}function ps(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function zg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ya=Math.random().toString(36).slice(2),fr="__reactFiber$"+ya,yl="__reactProps$"+ya,Fr="__reactContainer$"+ya,$h="__reactEvents$"+ya,hM="__reactListeners$"+ya,pM="__reactHandles$"+ya;function qs(t){var e=t[fr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Fr]||n[fr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=zg(t);t!==null;){if(n=t[fr])return n;t=zg(t)}return e}t=n,n=t.parentNode}return null}function Nl(t){return t=t[fr]||t[Fr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(xe(33))}function Qu(t){return t[yl]||null}var Xh=[],Bo=-1;function Cs(t){return{current:t}}function Kt(t){0>Bo||(t.current=Xh[Bo],Xh[Bo]=null,Bo--)}function Xt(t,e){Bo++,Xh[Bo]=t.current,t.current=e}var Es={},Hn=Cs(Es),ni=Cs(!1),no=Es;function ra(t,e){var n=t.type.contextTypes;if(!n)return Es;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function ii(t){return t=t.childContextTypes,t!=null}function Eu(){Kt(ni),Kt(Hn)}function Bg(t,e,n){if(Hn.current!==Es)throw Error(xe(168));Xt(Hn,e),Xt(ni,n)}function xy(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(xe(108,Z1(t)||"Unknown",r));return sn({},n,i)}function Mu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Es,no=Hn.current,Xt(Hn,t),Xt(ni,ni.current),!0}function Hg(t,e,n){var i=t.stateNode;if(!i)throw Error(xe(169));n?(t=xy(t,e,no),i.__reactInternalMemoizedMergedChildContext=t,Kt(ni),Kt(Hn),Xt(Hn,t)):Kt(ni),Xt(ni,n)}var Lr=null,Zu=!1,wd=!1;function Sy(t){Lr===null?Lr=[t]:Lr.push(t)}function mM(t){Zu=!0,Sy(t)}function As(){if(!wd&&Lr!==null){wd=!0;var t=0,e=Bt;try{var n=Lr;for(Bt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Lr=null,Zu=!1}catch(r){throw Lr!==null&&(Lr=Lr.slice(t+1)),$_(Bp,As),r}finally{Bt=e,wd=!1}}return null}var Ho=[],Vo=0,wu=null,Tu=0,Ti=[],bi=0,io=null,Nr=1,Ir="";function Vs(t,e){Ho[Vo++]=Tu,Ho[Vo++]=wu,wu=t,Tu=e}function Ey(t,e,n){Ti[bi++]=Nr,Ti[bi++]=Ir,Ti[bi++]=io,io=t;var i=Nr;t=Ir;var r=32-$i(i)-1;i&=~(1<<r),n+=1;var s=32-$i(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Nr=1<<32-$i(e)+r|n<<r|i,Ir=s+t}else Nr=1<<s|n<<r|i,Ir=t}function Yp(t){t.return!==null&&(Vs(t,1),Ey(t,1,0))}function Kp(t){for(;t===wu;)wu=Ho[--Vo],Ho[Vo]=null,Tu=Ho[--Vo],Ho[Vo]=null;for(;t===io;)io=Ti[--bi],Ti[bi]=null,Ir=Ti[--bi],Ti[bi]=null,Nr=Ti[--bi],Ti[bi]=null}var hi=null,di=null,Jt=!1,Wi=null;function My(t,e){var n=Ai(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hi=t,di=ps(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hi=t,di=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=io!==null?{id:Nr,overflow:Ir}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ai(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hi=t,di=null,!0):!1;default:return!1}}function qh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yh(t){if(Jt){var e=di;if(e){var n=e;if(!Vg(t,e)){if(qh(t))throw Error(xe(418));e=ps(n.nextSibling);var i=hi;e&&Vg(t,e)?My(i,n):(t.flags=t.flags&-4097|2,Jt=!1,hi=t)}}else{if(qh(t))throw Error(xe(418));t.flags=t.flags&-4097|2,Jt=!1,hi=t}}}function Gg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hi=t}function hc(t){if(t!==hi)return!1;if(!Jt)return Gg(t),Jt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wh(t.type,t.memoizedProps)),e&&(e=di)){if(qh(t))throw wy(),Error(xe(418));for(;e;)My(t,e),e=ps(e.nextSibling)}if(Gg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(xe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){di=ps(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}di=null}}else di=hi?ps(t.stateNode.nextSibling):null;return!0}function wy(){for(var t=di;t;)t=ps(t.nextSibling)}function sa(){di=hi=null,Jt=!1}function Qp(t){Wi===null?Wi=[t]:Wi.push(t)}var gM=Vr.ReactCurrentBatchConfig;function Oa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(xe(309));var i=n.stateNode}if(!i)throw Error(xe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(xe(284));if(!n._owner)throw Error(xe(290,t))}return t}function pc(t,e){throw t=Object.prototype.toString.call(e),Error(xe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wg(t){var e=t._init;return e(t._payload)}function Ty(t){function e(g,M){if(t){var w=g.deletions;w===null?(g.deletions=[M],g.flags|=16):w.push(M)}}function n(g,M){if(!t)return null;for(;M!==null;)e(g,M),M=M.sibling;return null}function i(g,M){for(g=new Map;M!==null;)M.key!==null?g.set(M.key,M):g.set(M.index,M),M=M.sibling;return g}function r(g,M){return g=_s(g,M),g.index=0,g.sibling=null,g}function s(g,M,w){return g.index=w,t?(w=g.alternate,w!==null?(w=w.index,w<M?(g.flags|=2,M):w):(g.flags|=2,M)):(g.flags|=1048576,M)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,M,w,A){return M===null||M.tag!==6?(M=Ld(w,g.mode,A),M.return=g,M):(M=r(M,w),M.return=g,M)}function c(g,M,w,A){var O=w.type;return O===ko?h(g,M,w.props.children,A,w.key):M!==null&&(M.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===is&&Wg(O)===M.type)?(A=r(M,w.props),A.ref=Oa(g,M,w),A.return=g,A):(A=au(w.type,w.key,w.props,null,g.mode,A),A.ref=Oa(g,M,w),A.return=g,A)}function f(g,M,w,A){return M===null||M.tag!==4||M.stateNode.containerInfo!==w.containerInfo||M.stateNode.implementation!==w.implementation?(M=Dd(w,g.mode,A),M.return=g,M):(M=r(M,w.children||[]),M.return=g,M)}function h(g,M,w,A,O){return M===null||M.tag!==7?(M=eo(w,g.mode,A,O),M.return=g,M):(M=r(M,w),M.return=g,M)}function p(g,M,w){if(typeof M=="string"&&M!==""||typeof M=="number")return M=Ld(""+M,g.mode,w),M.return=g,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ic:return w=au(M.type,M.key,M.props,null,g.mode,w),w.ref=Oa(g,null,M),w.return=g,w;case Io:return M=Dd(M,g.mode,w),M.return=g,M;case is:var A=M._init;return p(g,A(M._payload),w)}if(Ya(M)||Da(M))return M=eo(M,g.mode,w,null),M.return=g,M;pc(g,M)}return null}function m(g,M,w,A){var O=M!==null?M.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return O!==null?null:a(g,M,""+w,A);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ic:return w.key===O?c(g,M,w,A):null;case Io:return w.key===O?f(g,M,w,A):null;case is:return O=w._init,m(g,M,O(w._payload),A)}if(Ya(w)||Da(w))return O!==null?null:h(g,M,w,A,null);pc(g,w)}return null}function y(g,M,w,A,O){if(typeof A=="string"&&A!==""||typeof A=="number")return g=g.get(w)||null,a(M,g,""+A,O);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ic:return g=g.get(A.key===null?w:A.key)||null,c(M,g,A,O);case Io:return g=g.get(A.key===null?w:A.key)||null,f(M,g,A,O);case is:var N=A._init;return y(g,M,w,N(A._payload),O)}if(Ya(A)||Da(A))return g=g.get(w)||null,h(M,g,A,O,null);pc(M,A)}return null}function E(g,M,w,A){for(var O=null,N=null,d=M,z=M=0,D=null;d!==null&&z<w.length;z++){d.index>z?(D=d,d=null):D=d.sibling;var R=m(g,d,w[z],A);if(R===null){d===null&&(d=D);break}t&&d&&R.alternate===null&&e(g,d),M=s(R,M,z),N===null?O=R:N.sibling=R,N=R,d=D}if(z===w.length)return n(g,d),Jt&&Vs(g,z),O;if(d===null){for(;z<w.length;z++)d=p(g,w[z],A),d!==null&&(M=s(d,M,z),N===null?O=d:N.sibling=d,N=d);return Jt&&Vs(g,z),O}for(d=i(g,d);z<w.length;z++)D=y(d,g,z,w[z],A),D!==null&&(t&&D.alternate!==null&&d.delete(D.key===null?z:D.key),M=s(D,M,z),N===null?O=D:N.sibling=D,N=D);return t&&d.forEach(function(H){return e(g,H)}),Jt&&Vs(g,z),O}function S(g,M,w,A){var O=Da(w);if(typeof O!="function")throw Error(xe(150));if(w=O.call(w),w==null)throw Error(xe(151));for(var N=O=null,d=M,z=M=0,D=null,R=w.next();d!==null&&!R.done;z++,R=w.next()){d.index>z?(D=d,d=null):D=d.sibling;var H=m(g,d,R.value,A);if(H===null){d===null&&(d=D);break}t&&d&&H.alternate===null&&e(g,d),M=s(H,M,z),N===null?O=H:N.sibling=H,N=H,d=D}if(R.done)return n(g,d),Jt&&Vs(g,z),O;if(d===null){for(;!R.done;z++,R=w.next())R=p(g,R.value,A),R!==null&&(M=s(R,M,z),N===null?O=R:N.sibling=R,N=R);return Jt&&Vs(g,z),O}for(d=i(g,d);!R.done;z++,R=w.next())R=y(d,g,z,R.value,A),R!==null&&(t&&R.alternate!==null&&d.delete(R.key===null?z:R.key),M=s(R,M,z),N===null?O=R:N.sibling=R,N=R);return t&&d.forEach(function(oe){return e(g,oe)}),Jt&&Vs(g,z),O}function x(g,M,w,A){if(typeof w=="object"&&w!==null&&w.type===ko&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case ic:e:{for(var O=w.key,N=M;N!==null;){if(N.key===O){if(O=w.type,O===ko){if(N.tag===7){n(g,N.sibling),M=r(N,w.props.children),M.return=g,g=M;break e}}else if(N.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===is&&Wg(O)===N.type){n(g,N.sibling),M=r(N,w.props),M.ref=Oa(g,N,w),M.return=g,g=M;break e}n(g,N);break}else e(g,N);N=N.sibling}w.type===ko?(M=eo(w.props.children,g.mode,A,w.key),M.return=g,g=M):(A=au(w.type,w.key,w.props,null,g.mode,A),A.ref=Oa(g,M,w),A.return=g,g=A)}return o(g);case Io:e:{for(N=w.key;M!==null;){if(M.key===N)if(M.tag===4&&M.stateNode.containerInfo===w.containerInfo&&M.stateNode.implementation===w.implementation){n(g,M.sibling),M=r(M,w.children||[]),M.return=g,g=M;break e}else{n(g,M);break}else e(g,M);M=M.sibling}M=Dd(w,g.mode,A),M.return=g,g=M}return o(g);case is:return N=w._init,x(g,M,N(w._payload),A)}if(Ya(w))return E(g,M,w,A);if(Da(w))return S(g,M,w,A);pc(g,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,M!==null&&M.tag===6?(n(g,M.sibling),M=r(M,w),M.return=g,g=M):(n(g,M),M=Ld(w,g.mode,A),M.return=g,g=M),o(g)):n(g,M)}return x}var oa=Ty(!0),by=Ty(!1),bu=Cs(null),Cu=null,Go=null,Zp=null;function Jp(){Zp=Go=Cu=null}function em(t){var e=bu.current;Kt(bu),t._currentValue=e}function Kh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Qo(t,e){Cu=t,Zp=Go=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ti=!0),t.firstContext=null)}function Di(t){var e=t._currentValue;if(Zp!==t)if(t={context:t,memoizedValue:e,next:null},Go===null){if(Cu===null)throw Error(xe(308));Go=t,Cu.dependencies={lanes:0,firstContext:t}}else Go=Go.next=t;return e}var Ys=null;function tm(t){Ys===null?Ys=[t]:Ys.push(t)}function Cy(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,tm(e)):(n.next=r.next,r.next=n),e.interleaved=n,zr(t,i)}function zr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var rs=!1;function nm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ay(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ur(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ms(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,zr(t,n)}return r=i.interleaved,r===null?(e.next=e,tm(i)):(e.next=r.next,r.next=e),i.interleaved=e,zr(t,n)}function tu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hp(t,n)}}function jg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Au(t,e,n,i){var r=t.updateQueue;rs=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var c=a,f=c.next;c.next=null,o===null?s=f:o.next=f,o=c;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=f:a.next=f,h.lastBaseUpdate=c))}if(s!==null){var p=r.baseState;o=0,h=f=c=null,a=s;do{var m=a.lane,y=a.eventTime;if((i&m)===m){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=t,S=a;switch(m=e,y=n,S.tag){case 1:if(E=S.payload,typeof E=="function"){p=E.call(y,p,m);break e}p=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=S.payload,m=typeof E=="function"?E.call(y,p,m):E,m==null)break e;p=sn({},p,m);break e;case 2:rs=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=r.effects,m===null?r.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(f=h=y,c=p):h=h.next=y,o|=m;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;m=a,a=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);if(h===null&&(c=p),r.baseState=c,r.firstBaseUpdate=f,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);so|=o,t.lanes=o,t.memoizedState=p}}function $g(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(xe(191,r));r.call(i)}}}var Il={},gr=Cs(Il),xl=Cs(Il),Sl=Cs(Il);function Ks(t){if(t===Il)throw Error(xe(174));return t}function im(t,e){switch(Xt(Sl,e),Xt(xl,t),Xt(gr,Il),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ph(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ph(e,t)}Kt(gr),Xt(gr,e)}function aa(){Kt(gr),Kt(xl),Kt(Sl)}function Ry(t){Ks(Sl.current);var e=Ks(gr.current),n=Ph(e,t.type);e!==n&&(Xt(xl,t),Xt(gr,n))}function rm(t){xl.current===t&&(Kt(gr),Kt(xl))}var nn=Cs(0);function Ru(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Td=[];function sm(){for(var t=0;t<Td.length;t++)Td[t]._workInProgressVersionPrimary=null;Td.length=0}var nu=Vr.ReactCurrentDispatcher,bd=Vr.ReactCurrentBatchConfig,ro=0,rn=null,vn=null,Tn=null,Pu=!1,sl=!1,El=0,vM=0;function kn(){throw Error(xe(321))}function om(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qi(t[n],e[n]))return!1;return!0}function am(t,e,n,i,r,s){if(ro=s,rn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nu.current=t===null||t.memoizedState===null?SM:EM,t=n(i,r),sl){s=0;do{if(sl=!1,El=0,25<=s)throw Error(xe(301));s+=1,Tn=vn=null,e.updateQueue=null,nu.current=MM,t=n(i,r)}while(sl)}if(nu.current=Lu,e=vn!==null&&vn.next!==null,ro=0,Tn=vn=rn=null,Pu=!1,e)throw Error(xe(300));return t}function lm(){var t=El!==0;return El=0,t}function sr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?rn.memoizedState=Tn=t:Tn=Tn.next=t,Tn}function Ni(){if(vn===null){var t=rn.alternate;t=t!==null?t.memoizedState:null}else t=vn.next;var e=Tn===null?rn.memoizedState:Tn.next;if(e!==null)Tn=e,vn=t;else{if(t===null)throw Error(xe(310));vn=t,t={memoizedState:vn.memoizedState,baseState:vn.baseState,baseQueue:vn.baseQueue,queue:vn.queue,next:null},Tn===null?rn.memoizedState=Tn=t:Tn=Tn.next=t}return Tn}function Ml(t,e){return typeof e=="function"?e(t):e}function Cd(t){var e=Ni(),n=e.queue;if(n===null)throw Error(xe(311));n.lastRenderedReducer=t;var i=vn,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,c=null,f=s;do{var h=f.lane;if((ro&h)===h)c!==null&&(c=c.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),i=f.hasEagerState?f.eagerState:t(i,f.action);else{var p={lane:h,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};c===null?(a=c=p,o=i):c=c.next=p,rn.lanes|=h,so|=h}f=f.next}while(f!==null&&f!==s);c===null?o=i:c.next=a,qi(i,e.memoizedState)||(ti=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,rn.lanes|=s,so|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ad(t){var e=Ni(),n=e.queue;if(n===null)throw Error(xe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);qi(s,e.memoizedState)||(ti=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Py(){}function Ly(t,e){var n=rn,i=Ni(),r=e(),s=!qi(i.memoizedState,r);if(s&&(i.memoizedState=r,ti=!0),i=i.queue,cm(Iy.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Tn!==null&&Tn.memoizedState.tag&1){if(n.flags|=2048,wl(9,Ny.bind(null,n,i,r,e),void 0,null),bn===null)throw Error(xe(349));ro&30||Dy(n,e,r)}return r}function Dy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=rn.updateQueue,e===null?(e={lastEffect:null,stores:null},rn.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ny(t,e,n,i){e.value=n,e.getSnapshot=i,ky(e)&&Uy(t)}function Iy(t,e,n){return n(function(){ky(e)&&Uy(t)})}function ky(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qi(t,n)}catch{return!0}}function Uy(t){var e=zr(t,1);e!==null&&Xi(e,t,1,-1)}function Xg(t){var e=sr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ml,lastRenderedState:t},e.queue=t,t=t.dispatch=xM.bind(null,rn,t),[e.memoizedState,t]}function wl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=rn.updateQueue,e===null?(e={lastEffect:null,stores:null},rn.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Oy(){return Ni().memoizedState}function iu(t,e,n,i){var r=sr();rn.flags|=t,r.memoizedState=wl(1|e,n,void 0,i===void 0?null:i)}function Ju(t,e,n,i){var r=Ni();i=i===void 0?null:i;var s=void 0;if(vn!==null){var o=vn.memoizedState;if(s=o.destroy,i!==null&&om(i,o.deps)){r.memoizedState=wl(e,n,s,i);return}}rn.flags|=t,r.memoizedState=wl(1|e,n,s,i)}function qg(t,e){return iu(8390656,8,t,e)}function cm(t,e){return Ju(2048,8,t,e)}function Fy(t,e){return Ju(4,2,t,e)}function zy(t,e){return Ju(4,4,t,e)}function By(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Hy(t,e,n){return n=n!=null?n.concat([t]):null,Ju(4,4,By.bind(null,e,t),n)}function um(){}function Vy(t,e){var n=Ni();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&om(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Gy(t,e){var n=Ni();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&om(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Wy(t,e,n){return ro&21?(qi(n,e)||(n=Y_(),rn.lanes|=n,so|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ti=!0),t.memoizedState=n)}function _M(t,e){var n=Bt;Bt=n!==0&&4>n?n:4,t(!0);var i=bd.transition;bd.transition={};try{t(!1),e()}finally{Bt=n,bd.transition=i}}function jy(){return Ni().memoizedState}function yM(t,e,n){var i=vs(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},$y(t))Xy(e,n);else if(n=Cy(t,e,n,i),n!==null){var r=Xn();Xi(n,t,i,r),qy(n,e,i)}}function xM(t,e,n){var i=vs(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if($y(t))Xy(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,qi(a,o)){var c=e.interleaved;c===null?(r.next=r,tm(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=Cy(t,e,r,i),n!==null&&(r=Xn(),Xi(n,t,i,r),qy(n,e,i))}}function $y(t){var e=t.alternate;return t===rn||e!==null&&e===rn}function Xy(t,e){sl=Pu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function qy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hp(t,n)}}var Lu={readContext:Di,useCallback:kn,useContext:kn,useEffect:kn,useImperativeHandle:kn,useInsertionEffect:kn,useLayoutEffect:kn,useMemo:kn,useReducer:kn,useRef:kn,useState:kn,useDebugValue:kn,useDeferredValue:kn,useTransition:kn,useMutableSource:kn,useSyncExternalStore:kn,useId:kn,unstable_isNewReconciler:!1},SM={readContext:Di,useCallback:function(t,e){return sr().memoizedState=[t,e===void 0?null:e],t},useContext:Di,useEffect:qg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,iu(4194308,4,By.bind(null,e,t),n)},useLayoutEffect:function(t,e){return iu(4194308,4,t,e)},useInsertionEffect:function(t,e){return iu(4,2,t,e)},useMemo:function(t,e){var n=sr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=sr();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=yM.bind(null,rn,t),[i.memoizedState,t]},useRef:function(t){var e=sr();return t={current:t},e.memoizedState=t},useState:Xg,useDebugValue:um,useDeferredValue:function(t){return sr().memoizedState=t},useTransition:function(){var t=Xg(!1),e=t[0];return t=_M.bind(null,t[1]),sr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=rn,r=sr();if(Jt){if(n===void 0)throw Error(xe(407));n=n()}else{if(n=e(),bn===null)throw Error(xe(349));ro&30||Dy(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,qg(Iy.bind(null,i,s,t),[t]),i.flags|=2048,wl(9,Ny.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=sr(),e=bn.identifierPrefix;if(Jt){var n=Ir,i=Nr;n=(i&~(1<<32-$i(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=El++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=vM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},EM={readContext:Di,useCallback:Vy,useContext:Di,useEffect:cm,useImperativeHandle:Hy,useInsertionEffect:Fy,useLayoutEffect:zy,useMemo:Gy,useReducer:Cd,useRef:Oy,useState:function(){return Cd(Ml)},useDebugValue:um,useDeferredValue:function(t){var e=Ni();return Wy(e,vn.memoizedState,t)},useTransition:function(){var t=Cd(Ml)[0],e=Ni().memoizedState;return[t,e]},useMutableSource:Py,useSyncExternalStore:Ly,useId:jy,unstable_isNewReconciler:!1},MM={readContext:Di,useCallback:Vy,useContext:Di,useEffect:cm,useImperativeHandle:Hy,useInsertionEffect:Fy,useLayoutEffect:zy,useMemo:Gy,useReducer:Ad,useRef:Oy,useState:function(){return Ad(Ml)},useDebugValue:um,useDeferredValue:function(t){var e=Ni();return vn===null?e.memoizedState=t:Wy(e,vn.memoizedState,t)},useTransition:function(){var t=Ad(Ml)[0],e=Ni().memoizedState;return[t,e]},useMutableSource:Py,useSyncExternalStore:Ly,useId:jy,unstable_isNewReconciler:!1};function Vi(t,e){if(t&&t.defaultProps){e=sn({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Qh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:sn({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ef={isMounted:function(t){return(t=t._reactInternals)?co(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xn(),r=vs(t),s=Ur(i,r);s.payload=e,n!=null&&(s.callback=n),e=ms(t,s,r),e!==null&&(Xi(e,t,r,i),tu(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xn(),r=vs(t),s=Ur(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ms(t,s,r),e!==null&&(Xi(e,t,r,i),tu(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xn(),i=vs(t),r=Ur(n,i);r.tag=2,e!=null&&(r.callback=e),e=ms(t,r,i),e!==null&&(Xi(e,t,i,n),tu(e,t,i))}};function Yg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!gl(n,i)||!gl(r,s):!0}function Yy(t,e,n){var i=!1,r=Es,s=e.contextType;return typeof s=="object"&&s!==null?s=Di(s):(r=ii(e)?no:Hn.current,i=e.contextTypes,s=(i=i!=null)?ra(t,r):Es),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ef,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Kg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ef.enqueueReplaceState(e,e.state,null)}function Zh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},nm(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Di(s):(s=ii(e)?no:Hn.current,r.context=ra(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ef.enqueueReplaceState(r,r.state,null),Au(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function la(t,e){try{var n="",i=e;do n+=Q1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Rd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Jh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wM=typeof WeakMap=="function"?WeakMap:Map;function Ky(t,e,n){n=Ur(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Nu||(Nu=!0,cp=i),Jh(t,e)},n}function Qy(t,e,n){n=Ur(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Jh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Jh(t,e),typeof i!="function"&&(gs===null?gs=new Set([this]):gs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Qg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new wM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=FM.bind(null,t,e,n),e.then(t,t))}function Zg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ur(-1,1),e.tag=2,ms(n,e,1))),n.lanes|=1),t)}var TM=Vr.ReactCurrentOwner,ti=!1;function $n(t,e,n,i){e.child=t===null?by(e,null,n,i):oa(e,t.child,n,i)}function ev(t,e,n,i,r){n=n.render;var s=e.ref;return Qo(e,r),i=am(t,e,n,i,s,r),n=lm(),t!==null&&!ti?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Br(t,e,r)):(Jt&&n&&Yp(e),e.flags|=1,$n(t,e,i,r),e.child)}function tv(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!_m(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Zy(t,e,s,i,r)):(t=au(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:gl,n(o,i)&&t.ref===e.ref)return Br(t,e,r)}return e.flags|=1,t=_s(s,i),t.ref=e.ref,t.return=e,e.child=t}function Zy(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(gl(s,i)&&t.ref===e.ref)if(ti=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ti=!0);else return e.lanes=t.lanes,Br(t,e,r)}return ep(t,e,n,i,r)}function Jy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(jo,fi),fi|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Xt(jo,fi),fi|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Xt(jo,fi),fi|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Xt(jo,fi),fi|=i;return $n(t,e,r,n),e.child}function ex(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ep(t,e,n,i,r){var s=ii(n)?no:Hn.current;return s=ra(e,s),Qo(e,r),n=am(t,e,n,i,s,r),i=lm(),t!==null&&!ti?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Br(t,e,r)):(Jt&&i&&Yp(e),e.flags|=1,$n(t,e,n,r),e.child)}function nv(t,e,n,i,r){if(ii(n)){var s=!0;Mu(e)}else s=!1;if(Qo(e,r),e.stateNode===null)ru(t,e),Yy(e,n,i),Zh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var c=o.context,f=n.contextType;typeof f=="object"&&f!==null?f=Di(f):(f=ii(n)?no:Hn.current,f=ra(e,f));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||c!==f)&&Kg(e,o,i,f),rs=!1;var m=e.memoizedState;o.state=m,Au(e,i,o,r),c=e.memoizedState,a!==i||m!==c||ni.current||rs?(typeof h=="function"&&(Qh(e,n,h,i),c=e.memoizedState),(a=rs||Yg(e,n,a,i,m,c,f))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),o.props=i,o.state=c,o.context=f,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ay(t,e),a=e.memoizedProps,f=e.type===e.elementType?a:Vi(e.type,a),o.props=f,p=e.pendingProps,m=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Di(c):(c=ii(n)?no:Hn.current,c=ra(e,c));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==c)&&Kg(e,o,i,c),rs=!1,m=e.memoizedState,o.state=m,Au(e,i,o,r);var E=e.memoizedState;a!==p||m!==E||ni.current||rs?(typeof y=="function"&&(Qh(e,n,y,i),E=e.memoizedState),(f=rs||Yg(e,n,f,i,m,E,c)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,E,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,E,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=E),o.props=i,o.state=E,o.context=c,i=f):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),i=!1)}return tp(t,e,n,i,s,r)}function tp(t,e,n,i,r,s){ex(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Hg(e,n,!1),Br(t,e,s);i=e.stateNode,TM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=oa(e,t.child,null,s),e.child=oa(e,null,a,s)):$n(t,e,a,s),e.memoizedState=i.state,r&&Hg(e,n,!0),e.child}function tx(t){var e=t.stateNode;e.pendingContext?Bg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Bg(t,e.context,!1),im(t,e.containerInfo)}function iv(t,e,n,i,r){return sa(),Qp(r),e.flags|=256,$n(t,e,n,i),e.child}var np={dehydrated:null,treeContext:null,retryLane:0};function ip(t){return{baseLanes:t,cachePool:null,transitions:null}}function nx(t,e,n){var i=e.pendingProps,r=nn.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Xt(nn,r&1),t===null)return Yh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=rf(o,i,0,null),t=eo(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ip(n),e.memoizedState=np,t):fm(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return bM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var c={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=_s(r,c),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=_s(a,s):(s=eo(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?ip(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=np,i}return s=t.child,t=s.sibling,i=_s(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function fm(t,e){return e=rf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function mc(t,e,n,i){return i!==null&&Qp(i),oa(e,t.child,null,n),t=fm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Rd(Error(xe(422))),mc(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=rf({mode:"visible",children:i.children},r,0,null),s=eo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&oa(e,t.child,null,o),e.child.memoizedState=ip(o),e.memoizedState=np,s);if(!(e.mode&1))return mc(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(xe(419)),i=Rd(s,i,void 0),mc(t,e,o,i)}if(a=(o&t.childLanes)!==0,ti||a){if(i=bn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,zr(t,r),Xi(i,t,r,-1))}return vm(),i=Rd(Error(xe(421))),mc(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=zM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,di=ps(r.nextSibling),hi=e,Jt=!0,Wi=null,t!==null&&(Ti[bi++]=Nr,Ti[bi++]=Ir,Ti[bi++]=io,Nr=t.id,Ir=t.overflow,io=e),e=fm(e,i.children),e.flags|=4096,e)}function rv(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Kh(t.return,e,n)}function Pd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function ix(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($n(t,e,i.children,n),i=nn.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rv(t,n,e);else if(t.tag===19)rv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Xt(nn,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ru(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Pd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ru(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Pd(e,!0,n,null,s);break;case"together":Pd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ru(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Br(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),so|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(xe(153));if(e.child!==null){for(t=e.child,n=_s(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_s(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function CM(t,e,n){switch(e.tag){case 3:tx(e),sa();break;case 5:Ry(e);break;case 1:ii(e.type)&&Mu(e);break;case 4:im(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Xt(bu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Xt(nn,nn.current&1),e.flags|=128,null):n&e.child.childLanes?nx(t,e,n):(Xt(nn,nn.current&1),t=Br(t,e,n),t!==null?t.sibling:null);Xt(nn,nn.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ix(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Xt(nn,nn.current),i)break;return null;case 22:case 23:return e.lanes=0,Jy(t,e,n)}return Br(t,e,n)}var rx,rp,sx,ox;rx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rp=function(){};sx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ks(gr.current);var s=null;switch(n){case"input":r=bh(t,r),i=bh(t,i),s=[];break;case"select":r=sn({},r,{value:void 0}),i=sn({},i,{value:void 0}),s=[];break;case"textarea":r=Rh(t,r),i=Rh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Su)}Lh(n,i);var o;n=null;for(f in r)if(!i.hasOwnProperty(f)&&r.hasOwnProperty(f)&&r[f]!=null)if(f==="style"){var a=r[f];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(cl.hasOwnProperty(f)?s||(s=[]):(s=s||[]).push(f,null));for(f in i){var c=i[f];if(a=r!=null?r[f]:void 0,i.hasOwnProperty(f)&&c!==a&&(c!=null||a!=null))if(f==="style")if(a){for(o in a)!a.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&a[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(f,n)),n=c;else f==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(s=s||[]).push(f,c)):f==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(f,""+c):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(cl.hasOwnProperty(f)?(c!=null&&f==="onScroll"&&qt("scroll",t),s||a===c||(s=[])):(s=s||[]).push(f,c))}n&&(s=s||[]).push("style",n);var f=s;(e.updateQueue=f)&&(e.flags|=4)}};ox=function(t,e,n,i){n!==i&&(e.flags|=4)};function Fa(t,e){if(!Jt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Un(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function AM(t,e,n){var i=e.pendingProps;switch(Kp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Un(e),null;case 1:return ii(e.type)&&Eu(),Un(e),null;case 3:return i=e.stateNode,aa(),Kt(ni),Kt(Hn),sm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(hc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wi!==null&&(dp(Wi),Wi=null))),rp(t,e),Un(e),null;case 5:rm(e);var r=Ks(Sl.current);if(n=e.type,t!==null&&e.stateNode!=null)sx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(xe(166));return Un(e),null}if(t=Ks(gr.current),hc(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[fr]=e,i[yl]=s,t=(e.mode&1)!==0,n){case"dialog":qt("cancel",i),qt("close",i);break;case"iframe":case"object":case"embed":qt("load",i);break;case"video":case"audio":for(r=0;r<Qa.length;r++)qt(Qa[r],i);break;case"source":qt("error",i);break;case"img":case"image":case"link":qt("error",i),qt("load",i);break;case"details":qt("toggle",i);break;case"input":hg(i,s),qt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},qt("invalid",i);break;case"textarea":mg(i,s),qt("invalid",i)}Lh(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&dc(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&dc(i.textContent,a,t),r=["children",""+a]):cl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&qt("scroll",i)}switch(n){case"input":rc(i),pg(i,s,!0);break;case"textarea":rc(i),gg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Su)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=I_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[fr]=e,t[yl]=i,rx(t,e,!1,!1),e.stateNode=t;e:{switch(o=Dh(n,i),n){case"dialog":qt("cancel",t),qt("close",t),r=i;break;case"iframe":case"object":case"embed":qt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Qa.length;r++)qt(Qa[r],t);r=i;break;case"source":qt("error",t),r=i;break;case"img":case"image":case"link":qt("error",t),qt("load",t),r=i;break;case"details":qt("toggle",t),r=i;break;case"input":hg(t,i),r=bh(t,i),qt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=sn({},i,{value:void 0}),qt("invalid",t);break;case"textarea":mg(t,i),r=Rh(t,i),qt("invalid",t);break;default:r=i}Lh(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="style"?O_(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&k_(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ul(t,c):typeof c=="number"&&ul(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(cl.hasOwnProperty(s)?c!=null&&s==="onScroll"&&qt("scroll",t):c!=null&&kp(t,s,c,o))}switch(n){case"input":rc(t),pg(t,i,!1);break;case"textarea":rc(t),gg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ss(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Xo(t,!!i.multiple,s,!1):i.defaultValue!=null&&Xo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Su)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Un(e),null;case 6:if(t&&e.stateNode!=null)ox(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(xe(166));if(n=Ks(Sl.current),Ks(gr.current),hc(e)){if(i=e.stateNode,n=e.memoizedProps,i[fr]=e,(s=i.nodeValue!==n)&&(t=hi,t!==null))switch(t.tag){case 3:dc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&dc(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[fr]=e,e.stateNode=i}return Un(e),null;case 13:if(Kt(nn),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Jt&&di!==null&&e.mode&1&&!(e.flags&128))wy(),sa(),e.flags|=98560,s=!1;else if(s=hc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(xe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(xe(317));s[fr]=e}else sa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Un(e),s=!1}else Wi!==null&&(dp(Wi),Wi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||nn.current&1?_n===0&&(_n=3):vm())),e.updateQueue!==null&&(e.flags|=4),Un(e),null);case 4:return aa(),rp(t,e),t===null&&vl(e.stateNode.containerInfo),Un(e),null;case 10:return em(e.type._context),Un(e),null;case 17:return ii(e.type)&&Eu(),Un(e),null;case 19:if(Kt(nn),s=e.memoizedState,s===null)return Un(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Fa(s,!1);else{if(_n!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ru(t),o!==null){for(e.flags|=128,Fa(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Xt(nn,nn.current&1|2),e.child}t=t.sibling}s.tail!==null&&un()>ca&&(e.flags|=128,i=!0,Fa(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ru(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Fa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Jt)return Un(e),null}else 2*un()-s.renderingStartTime>ca&&n!==1073741824&&(e.flags|=128,i=!0,Fa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=un(),e.sibling=null,n=nn.current,Xt(nn,i?n&1|2:n&1),e):(Un(e),null);case 22:case 23:return gm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?fi&1073741824&&(Un(e),e.subtreeFlags&6&&(e.flags|=8192)):Un(e),null;case 24:return null;case 25:return null}throw Error(xe(156,e.tag))}function RM(t,e){switch(Kp(e),e.tag){case 1:return ii(e.type)&&Eu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return aa(),Kt(ni),Kt(Hn),sm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rm(e),null;case 13:if(Kt(nn),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(xe(340));sa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Kt(nn),null;case 4:return aa(),null;case 10:return em(e.type._context),null;case 22:case 23:return gm(),null;case 24:return null;default:return null}}var gc=!1,Bn=!1,PM=typeof WeakSet=="function"?WeakSet:Set,ze=null;function Wo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){cn(t,e,i)}else n.current=null}function sp(t,e,n){try{n()}catch(i){cn(t,e,i)}}var sv=!1;function LM(t,e){if(Vh=_u,t=fy(),qp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,c=-1,f=0,h=0,p=t,m=null;t:for(;;){for(var y;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||i!==0&&p.nodeType!==3||(c=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(y=p.firstChild)!==null;)m=p,p=y;for(;;){if(p===t)break t;if(m===n&&++f===r&&(a=o),m===s&&++h===i&&(c=o),(y=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=y}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gh={focusedElem:t,selectionRange:n},_u=!1,ze=e;ze!==null;)if(e=ze,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ze=t;else for(;ze!==null;){e=ze;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var S=E.memoizedProps,x=E.memoizedState,g=e.stateNode,M=g.getSnapshotBeforeUpdate(e.elementType===e.type?S:Vi(e.type,S),x);g.__reactInternalSnapshotBeforeUpdate=M}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(xe(163))}}catch(A){cn(e,e.return,A)}if(t=e.sibling,t!==null){t.return=e.return,ze=t;break}ze=e.return}return E=sv,sv=!1,E}function ol(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&sp(e,n,s)}r=r.next}while(r!==i)}}function tf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function op(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ax(t){var e=t.alternate;e!==null&&(t.alternate=null,ax(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fr],delete e[yl],delete e[$h],delete e[hM],delete e[pM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function lx(t){return t.tag===5||t.tag===3||t.tag===4}function ov(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ap(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Su));else if(i!==4&&(t=t.child,t!==null))for(ap(t,e,n),t=t.sibling;t!==null;)ap(t,e,n),t=t.sibling}function lp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(lp(t,e,n),t=t.sibling;t!==null;)lp(t,e,n),t=t.sibling}var Rn=null,Gi=!1;function qr(t,e,n){for(n=n.child;n!==null;)cx(t,e,n),n=n.sibling}function cx(t,e,n){if(mr&&typeof mr.onCommitFiberUnmount=="function")try{mr.onCommitFiberUnmount(Xu,n)}catch{}switch(n.tag){case 5:Bn||Wo(n,e);case 6:var i=Rn,r=Gi;Rn=null,qr(t,e,n),Rn=i,Gi=r,Rn!==null&&(Gi?(t=Rn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Rn.removeChild(n.stateNode));break;case 18:Rn!==null&&(Gi?(t=Rn,n=n.stateNode,t.nodeType===8?Md(t.parentNode,n):t.nodeType===1&&Md(t,n),pl(t)):Md(Rn,n.stateNode));break;case 4:i=Rn,r=Gi,Rn=n.stateNode.containerInfo,Gi=!0,qr(t,e,n),Rn=i,Gi=r;break;case 0:case 11:case 14:case 15:if(!Bn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&sp(n,e,o),r=r.next}while(r!==i)}qr(t,e,n);break;case 1:if(!Bn&&(Wo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){cn(n,e,a)}qr(t,e,n);break;case 21:qr(t,e,n);break;case 22:n.mode&1?(Bn=(i=Bn)||n.memoizedState!==null,qr(t,e,n),Bn=i):qr(t,e,n);break;default:qr(t,e,n)}}function av(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new PM),e.forEach(function(i){var r=BM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Oi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Rn=a.stateNode,Gi=!1;break e;case 3:Rn=a.stateNode.containerInfo,Gi=!0;break e;case 4:Rn=a.stateNode.containerInfo,Gi=!0;break e}a=a.return}if(Rn===null)throw Error(xe(160));cx(s,o,r),Rn=null,Gi=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(f){cn(r,e,f)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ux(e,t),e=e.sibling}function ux(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Oi(e,t),ir(t),i&4){try{ol(3,t,t.return),tf(3,t)}catch(S){cn(t,t.return,S)}try{ol(5,t,t.return)}catch(S){cn(t,t.return,S)}}break;case 1:Oi(e,t),ir(t),i&512&&n!==null&&Wo(n,n.return);break;case 5:if(Oi(e,t),ir(t),i&512&&n!==null&&Wo(n,n.return),t.flags&32){var r=t.stateNode;try{ul(r,"")}catch(S){cn(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&D_(r,s),Dh(a,o);var f=Dh(a,s);for(o=0;o<c.length;o+=2){var h=c[o],p=c[o+1];h==="style"?O_(r,p):h==="dangerouslySetInnerHTML"?k_(r,p):h==="children"?ul(r,p):kp(r,h,p,f)}switch(a){case"input":Ch(r,s);break;case"textarea":N_(r,s);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Xo(r,!!s.multiple,y,!1):m!==!!s.multiple&&(s.defaultValue!=null?Xo(r,!!s.multiple,s.defaultValue,!0):Xo(r,!!s.multiple,s.multiple?[]:"",!1))}r[yl]=s}catch(S){cn(t,t.return,S)}}break;case 6:if(Oi(e,t),ir(t),i&4){if(t.stateNode===null)throw Error(xe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){cn(t,t.return,S)}}break;case 3:if(Oi(e,t),ir(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{pl(e.containerInfo)}catch(S){cn(t,t.return,S)}break;case 4:Oi(e,t),ir(t);break;case 13:Oi(e,t),ir(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(pm=un())),i&4&&av(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Bn=(f=Bn)||h,Oi(e,t),Bn=f):Oi(e,t),ir(t),i&8192){if(f=t.memoizedState!==null,(t.stateNode.isHidden=f)&&!h&&t.mode&1)for(ze=t,h=t.child;h!==null;){for(p=ze=h;ze!==null;){switch(m=ze,y=m.child,m.tag){case 0:case 11:case 14:case 15:ol(4,m,m.return);break;case 1:Wo(m,m.return);var E=m.stateNode;if(typeof E.componentWillUnmount=="function"){i=m,n=m.return;try{e=i,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(S){cn(i,n,S)}}break;case 5:Wo(m,m.return);break;case 22:if(m.memoizedState!==null){cv(p);continue}}y!==null?(y.return=m,ze=y):cv(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,f?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=U_("display",o))}catch(S){cn(t,t.return,S)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=f?"":p.memoizedProps}catch(S){cn(t,t.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Oi(e,t),ir(t),i&4&&av(t);break;case 21:break;default:Oi(e,t),ir(t)}}function ir(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(lx(n)){var i=n;break e}n=n.return}throw Error(xe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ul(r,""),i.flags&=-33);var s=ov(t);lp(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=ov(t);ap(t,a,o);break;default:throw Error(xe(161))}}catch(c){cn(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function DM(t,e,n){ze=t,fx(t)}function fx(t,e,n){for(var i=(t.mode&1)!==0;ze!==null;){var r=ze,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||gc;if(!o){var a=r.alternate,c=a!==null&&a.memoizedState!==null||Bn;a=gc;var f=Bn;if(gc=o,(Bn=c)&&!f)for(ze=r;ze!==null;)o=ze,c=o.child,o.tag===22&&o.memoizedState!==null?uv(r):c!==null?(c.return=o,ze=c):uv(r);for(;s!==null;)ze=s,fx(s),s=s.sibling;ze=r,gc=a,Bn=f}lv(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ze=s):lv(t)}}function lv(t){for(;ze!==null;){var e=ze;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bn||tf(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Vi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$g(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$g(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var f=e.alternate;if(f!==null){var h=f.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&pl(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(xe(163))}Bn||e.flags&512&&op(e)}catch(m){cn(e,e.return,m)}}if(e===t){ze=null;break}if(n=e.sibling,n!==null){n.return=e.return,ze=n;break}ze=e.return}}function cv(t){for(;ze!==null;){var e=ze;if(e===t){ze=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ze=n;break}ze=e.return}}function uv(t){for(;ze!==null;){var e=ze;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{tf(4,e)}catch(c){cn(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){cn(e,r,c)}}var s=e.return;try{op(e)}catch(c){cn(e,s,c)}break;case 5:var o=e.return;try{op(e)}catch(c){cn(e,o,c)}}}catch(c){cn(e,e.return,c)}if(e===t){ze=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ze=a;break}ze=e.return}}var NM=Math.ceil,Du=Vr.ReactCurrentDispatcher,dm=Vr.ReactCurrentOwner,Pi=Vr.ReactCurrentBatchConfig,Rt=0,bn=null,pn=null,Dn=0,fi=0,jo=Cs(0),_n=0,Tl=null,so=0,nf=0,hm=0,al=null,Jn=null,pm=0,ca=1/0,Pr=null,Nu=!1,cp=null,gs=null,vc=!1,cs=null,Iu=0,ll=0,up=null,su=-1,ou=0;function Xn(){return Rt&6?un():su!==-1?su:su=un()}function vs(t){return t.mode&1?Rt&2&&Dn!==0?Dn&-Dn:gM.transition!==null?(ou===0&&(ou=Y_()),ou):(t=Bt,t!==0||(t=window.event,t=t===void 0?16:ny(t.type)),t):1}function Xi(t,e,n,i){if(50<ll)throw ll=0,up=null,Error(xe(185));Ll(t,n,i),(!(Rt&2)||t!==bn)&&(t===bn&&(!(Rt&2)&&(nf|=n),_n===4&&os(t,Dn)),ri(t,i),n===1&&Rt===0&&!(e.mode&1)&&(ca=un()+500,Zu&&As()))}function ri(t,e){var n=t.callbackNode;gE(t,e);var i=vu(t,t===bn?Dn:0);if(i===0)n!==null&&yg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&yg(n),e===1)t.tag===0?mM(fv.bind(null,t)):Sy(fv.bind(null,t)),fM(function(){!(Rt&6)&&As()}),n=null;else{switch(K_(i)){case 1:n=Bp;break;case 4:n=X_;break;case 16:n=gu;break;case 536870912:n=q_;break;default:n=gu}n=yx(n,dx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function dx(t,e){if(su=-1,ou=0,Rt&6)throw Error(xe(327));var n=t.callbackNode;if(Zo()&&t.callbackNode!==n)return null;var i=vu(t,t===bn?Dn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ku(t,i);else{e=i;var r=Rt;Rt|=2;var s=px();(bn!==t||Dn!==e)&&(Pr=null,ca=un()+500,Js(t,e));do try{UM();break}catch(a){hx(t,a)}while(!0);Jp(),Du.current=s,Rt=r,pn!==null?e=0:(bn=null,Dn=0,e=_n)}if(e!==0){if(e===2&&(r=Oh(t),r!==0&&(i=r,e=fp(t,r))),e===1)throw n=Tl,Js(t,0),os(t,i),ri(t,un()),n;if(e===6)os(t,i);else{if(r=t.current.alternate,!(i&30)&&!IM(r)&&(e=ku(t,i),e===2&&(s=Oh(t),s!==0&&(i=s,e=fp(t,s))),e===1))throw n=Tl,Js(t,0),os(t,i),ri(t,un()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(xe(345));case 2:Gs(t,Jn,Pr);break;case 3:if(os(t,i),(i&130023424)===i&&(e=pm+500-un(),10<e)){if(vu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=jh(Gs.bind(null,t,Jn,Pr),e);break}Gs(t,Jn,Pr);break;case 4:if(os(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-$i(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=un()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*NM(i/1960))-i,10<i){t.timeoutHandle=jh(Gs.bind(null,t,Jn,Pr),i);break}Gs(t,Jn,Pr);break;case 5:Gs(t,Jn,Pr);break;default:throw Error(xe(329))}}}return ri(t,un()),t.callbackNode===n?dx.bind(null,t):null}function fp(t,e){var n=al;return t.current.memoizedState.isDehydrated&&(Js(t,e).flags|=256),t=ku(t,e),t!==2&&(e=Jn,Jn=n,e!==null&&dp(e)),t}function dp(t){Jn===null?Jn=t:Jn.push.apply(Jn,t)}function IM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!qi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function os(t,e){for(e&=~hm,e&=~nf,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$i(e),i=1<<n;t[n]=-1,e&=~i}}function fv(t){if(Rt&6)throw Error(xe(327));Zo();var e=vu(t,0);if(!(e&1))return ri(t,un()),null;var n=ku(t,e);if(t.tag!==0&&n===2){var i=Oh(t);i!==0&&(e=i,n=fp(t,i))}if(n===1)throw n=Tl,Js(t,0),os(t,e),ri(t,un()),n;if(n===6)throw Error(xe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gs(t,Jn,Pr),ri(t,un()),null}function mm(t,e){var n=Rt;Rt|=1;try{return t(e)}finally{Rt=n,Rt===0&&(ca=un()+500,Zu&&As())}}function oo(t){cs!==null&&cs.tag===0&&!(Rt&6)&&Zo();var e=Rt;Rt|=1;var n=Pi.transition,i=Bt;try{if(Pi.transition=null,Bt=1,t)return t()}finally{Bt=i,Pi.transition=n,Rt=e,!(Rt&6)&&As()}}function gm(){fi=jo.current,Kt(jo)}function Js(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uM(n)),pn!==null)for(n=pn.return;n!==null;){var i=n;switch(Kp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Eu();break;case 3:aa(),Kt(ni),Kt(Hn),sm();break;case 5:rm(i);break;case 4:aa();break;case 13:Kt(nn);break;case 19:Kt(nn);break;case 10:em(i.type._context);break;case 22:case 23:gm()}n=n.return}if(bn=t,pn=t=_s(t.current,null),Dn=fi=e,_n=0,Tl=null,hm=nf=so=0,Jn=al=null,Ys!==null){for(e=0;e<Ys.length;e++)if(n=Ys[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ys=null}return t}function hx(t,e){do{var n=pn;try{if(Jp(),nu.current=Lu,Pu){for(var i=rn.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Pu=!1}if(ro=0,Tn=vn=rn=null,sl=!1,El=0,dm.current=null,n===null||n.return===null){_n=1,Tl=e,pn=null;break}e:{var s=t,o=n.return,a=n,c=e;if(e=Dn,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var f=c,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Zg(o);if(y!==null){y.flags&=-257,Jg(y,o,a,s,e),y.mode&1&&Qg(s,f,e),e=y,c=f;var E=e.updateQueue;if(E===null){var S=new Set;S.add(c),e.updateQueue=S}else E.add(c);break e}else{if(!(e&1)){Qg(s,f,e),vm();break e}c=Error(xe(426))}}else if(Jt&&a.mode&1){var x=Zg(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Jg(x,o,a,s,e),Qp(la(c,a));break e}}s=c=la(c,a),_n!==4&&(_n=2),al===null?al=[s]:al.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=Ky(s,c,e);jg(s,g);break e;case 1:a=c;var M=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof M.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(gs===null||!gs.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var A=Qy(s,a,e);jg(s,A);break e}}s=s.return}while(s!==null)}gx(n)}catch(O){e=O,pn===n&&n!==null&&(pn=n=n.return);continue}break}while(!0)}function px(){var t=Du.current;return Du.current=Lu,t===null?Lu:t}function vm(){(_n===0||_n===3||_n===2)&&(_n=4),bn===null||!(so&268435455)&&!(nf&268435455)||os(bn,Dn)}function ku(t,e){var n=Rt;Rt|=2;var i=px();(bn!==t||Dn!==e)&&(Pr=null,Js(t,e));do try{kM();break}catch(r){hx(t,r)}while(!0);if(Jp(),Rt=n,Du.current=i,pn!==null)throw Error(xe(261));return bn=null,Dn=0,_n}function kM(){for(;pn!==null;)mx(pn)}function UM(){for(;pn!==null&&!aE();)mx(pn)}function mx(t){var e=_x(t.alternate,t,fi);t.memoizedProps=t.pendingProps,e===null?gx(t):pn=e,dm.current=null}function gx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=RM(n,e),n!==null){n.flags&=32767,pn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_n=6,pn=null;return}}else if(n=AM(n,e,fi),n!==null){pn=n;return}if(e=e.sibling,e!==null){pn=e;return}pn=e=t}while(e!==null);_n===0&&(_n=5)}function Gs(t,e,n){var i=Bt,r=Pi.transition;try{Pi.transition=null,Bt=1,OM(t,e,n,i)}finally{Pi.transition=r,Bt=i}return null}function OM(t,e,n,i){do Zo();while(cs!==null);if(Rt&6)throw Error(xe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(xe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(vE(t,s),t===bn&&(pn=bn=null,Dn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vc||(vc=!0,yx(gu,function(){return Zo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pi.transition,Pi.transition=null;var o=Bt;Bt=1;var a=Rt;Rt|=4,dm.current=null,LM(t,n),ux(n,t),iM(Gh),_u=!!Vh,Gh=Vh=null,t.current=n,DM(n),lE(),Rt=a,Bt=o,Pi.transition=s}else t.current=n;if(vc&&(vc=!1,cs=t,Iu=r),s=t.pendingLanes,s===0&&(gs=null),fE(n.stateNode),ri(t,un()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Nu)throw Nu=!1,t=cp,cp=null,t;return Iu&1&&t.tag!==0&&Zo(),s=t.pendingLanes,s&1?t===up?ll++:(ll=0,up=t):ll=0,As(),null}function Zo(){if(cs!==null){var t=K_(Iu),e=Pi.transition,n=Bt;try{if(Pi.transition=null,Bt=16>t?16:t,cs===null)var i=!1;else{if(t=cs,cs=null,Iu=0,Rt&6)throw Error(xe(331));var r=Rt;for(Rt|=4,ze=t.current;ze!==null;){var s=ze,o=s.child;if(ze.flags&16){var a=s.deletions;if(a!==null){for(var c=0;c<a.length;c++){var f=a[c];for(ze=f;ze!==null;){var h=ze;switch(h.tag){case 0:case 11:case 15:ol(8,h,s)}var p=h.child;if(p!==null)p.return=h,ze=p;else for(;ze!==null;){h=ze;var m=h.sibling,y=h.return;if(ax(h),h===f){ze=null;break}if(m!==null){m.return=y,ze=m;break}ze=y}}}var E=s.alternate;if(E!==null){var S=E.child;if(S!==null){E.child=null;do{var x=S.sibling;S.sibling=null,S=x}while(S!==null)}}ze=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ze=o;else e:for(;ze!==null;){if(s=ze,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ol(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,ze=g;break e}ze=s.return}}var M=t.current;for(ze=M;ze!==null;){o=ze;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,ze=w;else e:for(o=M;ze!==null;){if(a=ze,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:tf(9,a)}}catch(O){cn(a,a.return,O)}if(a===o){ze=null;break e}var A=a.sibling;if(A!==null){A.return=a.return,ze=A;break e}ze=a.return}}if(Rt=r,As(),mr&&typeof mr.onPostCommitFiberRoot=="function")try{mr.onPostCommitFiberRoot(Xu,t)}catch{}i=!0}return i}finally{Bt=n,Pi.transition=e}}return!1}function dv(t,e,n){e=la(n,e),e=Ky(t,e,1),t=ms(t,e,1),e=Xn(),t!==null&&(Ll(t,1,e),ri(t,e))}function cn(t,e,n){if(t.tag===3)dv(t,t,n);else for(;e!==null;){if(e.tag===3){dv(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(gs===null||!gs.has(i))){t=la(n,t),t=Qy(e,t,1),e=ms(e,t,1),t=Xn(),e!==null&&(Ll(e,1,t),ri(e,t));break}}e=e.return}}function FM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xn(),t.pingedLanes|=t.suspendedLanes&n,bn===t&&(Dn&n)===n&&(_n===4||_n===3&&(Dn&130023424)===Dn&&500>un()-pm?Js(t,0):hm|=n),ri(t,e)}function vx(t,e){e===0&&(t.mode&1?(e=ac,ac<<=1,!(ac&130023424)&&(ac=4194304)):e=1);var n=Xn();t=zr(t,e),t!==null&&(Ll(t,e,n),ri(t,n))}function zM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),vx(t,n)}function BM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(xe(314))}i!==null&&i.delete(e),vx(t,n)}var _x;_x=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ni.current)ti=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ti=!1,CM(t,e,n);ti=!!(t.flags&131072)}else ti=!1,Jt&&e.flags&1048576&&Ey(e,Tu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ru(t,e),t=e.pendingProps;var r=ra(e,Hn.current);Qo(e,n),r=am(null,e,i,t,r,n);var s=lm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ii(i)?(s=!0,Mu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,nm(e),r.updater=ef,e.stateNode=r,r._reactInternals=e,Zh(e,i,t,n),e=tp(null,e,i,!0,s,n)):(e.tag=0,Jt&&s&&Yp(e),$n(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ru(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=VM(i),t=Vi(i,t),r){case 0:e=ep(null,e,i,t,n);break e;case 1:e=nv(null,e,i,t,n);break e;case 11:e=ev(null,e,i,t,n);break e;case 14:e=tv(null,e,i,Vi(i.type,t),n);break e}throw Error(xe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vi(i,r),ep(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vi(i,r),nv(t,e,i,r,n);case 3:e:{if(tx(e),t===null)throw Error(xe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ay(t,e),Au(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=la(Error(xe(423)),e),e=iv(t,e,i,n,r);break e}else if(i!==r){r=la(Error(xe(424)),e),e=iv(t,e,i,n,r);break e}else for(di=ps(e.stateNode.containerInfo.firstChild),hi=e,Jt=!0,Wi=null,n=by(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sa(),i===r){e=Br(t,e,n);break e}$n(t,e,i,n)}e=e.child}return e;case 5:return Ry(e),t===null&&Yh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Wh(i,r)?o=null:s!==null&&Wh(i,s)&&(e.flags|=32),ex(t,e),$n(t,e,o,n),e.child;case 6:return t===null&&Yh(e),null;case 13:return nx(t,e,n);case 4:return im(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=oa(e,null,i,n):$n(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vi(i,r),ev(t,e,i,r,n);case 7:return $n(t,e,e.pendingProps,n),e.child;case 8:return $n(t,e,e.pendingProps.children,n),e.child;case 12:return $n(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Xt(bu,i._currentValue),i._currentValue=o,s!==null)if(qi(s.value,o)){if(s.children===r.children&&!ni.current){e=Br(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var c=a.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=Ur(-1,n&-n),c.tag=2;var f=s.updateQueue;if(f!==null){f=f.shared;var h=f.pending;h===null?c.next=c:(c.next=h.next,h.next=c),f.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Kh(s.return,n,e),a.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(xe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Kh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$n(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Qo(e,n),r=Di(r),i=i(r),e.flags|=1,$n(t,e,i,n),e.child;case 14:return i=e.type,r=Vi(i,e.pendingProps),r=Vi(i.type,r),tv(t,e,i,r,n);case 15:return Zy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vi(i,r),ru(t,e),e.tag=1,ii(i)?(t=!0,Mu(e)):t=!1,Qo(e,n),Yy(e,i,r),Zh(e,i,r,n),tp(null,e,i,!0,t,n);case 19:return ix(t,e,n);case 22:return Jy(t,e,n)}throw Error(xe(156,e.tag))};function yx(t,e){return $_(t,e)}function HM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ai(t,e,n,i){return new HM(t,e,n,i)}function _m(t){return t=t.prototype,!(!t||!t.isReactComponent)}function VM(t){if(typeof t=="function")return _m(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Op)return 11;if(t===Fp)return 14}return 2}function _s(t,e){var n=t.alternate;return n===null?(n=Ai(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function au(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")_m(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ko:return eo(n.children,r,s,e);case Up:o=8,r|=8;break;case Eh:return t=Ai(12,n,e,r|2),t.elementType=Eh,t.lanes=s,t;case Mh:return t=Ai(13,n,e,r),t.elementType=Mh,t.lanes=s,t;case wh:return t=Ai(19,n,e,r),t.elementType=wh,t.lanes=s,t;case R_:return rf(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C_:o=10;break e;case A_:o=9;break e;case Op:o=11;break e;case Fp:o=14;break e;case is:o=16,i=null;break e}throw Error(xe(130,t==null?t:typeof t,""))}return e=Ai(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function eo(t,e,n,i){return t=Ai(7,t,i,e),t.lanes=n,t}function rf(t,e,n,i){return t=Ai(22,t,i,e),t.elementType=R_,t.lanes=n,t.stateNode={isHidden:!1},t}function Ld(t,e,n){return t=Ai(6,t,null,e),t.lanes=n,t}function Dd(t,e,n){return e=Ai(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function GM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dd(0),this.expirationTimes=dd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ym(t,e,n,i,r,s,o,a,c){return t=new GM(t,e,n,a,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ai(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nm(s),t}function WM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Io,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function xx(t){if(!t)return Es;t=t._reactInternals;e:{if(co(t)!==t||t.tag!==1)throw Error(xe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ii(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(xe(171))}if(t.tag===1){var n=t.type;if(ii(n))return xy(t,n,e)}return e}function Sx(t,e,n,i,r,s,o,a,c){return t=ym(n,i,!0,t,r,s,o,a,c),t.context=xx(null),n=t.current,i=Xn(),r=vs(n),s=Ur(i,r),s.callback=e??null,ms(n,s,r),t.current.lanes=r,Ll(t,r,i),ri(t,i),t}function sf(t,e,n,i){var r=e.current,s=Xn(),o=vs(r);return n=xx(n),e.context===null?e.context=n:e.pendingContext=n,e=Ur(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ms(r,e,o),t!==null&&(Xi(t,r,o,s),tu(t,r,o)),o}function Uu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xm(t,e){hv(t,e),(t=t.alternate)&&hv(t,e)}function jM(){return null}var Ex=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sm(t){this._internalRoot=t}of.prototype.render=Sm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(xe(409));sf(t,e,null,null)};of.prototype.unmount=Sm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;oo(function(){sf(null,t,null,null)}),e[Fr]=null}};function of(t){this._internalRoot=t}of.prototype.unstable_scheduleHydration=function(t){if(t){var e=J_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ss.length&&e!==0&&e<ss[n].priority;n++);ss.splice(n,0,t),n===0&&ty(t)}};function Em(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function af(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pv(){}function $M(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var f=Uu(o);s.call(f)}}var o=Sx(e,i,t,0,null,!1,!1,"",pv);return t._reactRootContainer=o,t[Fr]=o.current,vl(t.nodeType===8?t.parentNode:t),oo(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var f=Uu(c);a.call(f)}}var c=ym(t,0,!1,null,null,!1,!1,"",pv);return t._reactRootContainer=c,t[Fr]=c.current,vl(t.nodeType===8?t.parentNode:t),oo(function(){sf(e,c,n,i)}),c}function lf(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var c=Uu(o);a.call(c)}}sf(e,o,t,r)}else o=$M(n,e,t,r,i);return Uu(o)}Q_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ka(e.pendingLanes);n!==0&&(Hp(e,n|1),ri(e,un()),!(Rt&6)&&(ca=un()+500,As()))}break;case 13:oo(function(){var i=zr(t,1);if(i!==null){var r=Xn();Xi(i,t,1,r)}}),xm(t,1)}};Vp=function(t){if(t.tag===13){var e=zr(t,134217728);if(e!==null){var n=Xn();Xi(e,t,134217728,n)}xm(t,134217728)}};Z_=function(t){if(t.tag===13){var e=vs(t),n=zr(t,e);if(n!==null){var i=Xn();Xi(n,t,e,i)}xm(t,e)}};J_=function(){return Bt};ey=function(t,e){var n=Bt;try{return Bt=t,e()}finally{Bt=n}};Ih=function(t,e,n){switch(e){case"input":if(Ch(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Qu(i);if(!r)throw Error(xe(90));L_(i),Ch(i,r)}}}break;case"textarea":N_(t,n);break;case"select":e=n.value,e!=null&&Xo(t,!!n.multiple,e,!1)}};B_=mm;H_=oo;var XM={usingClientEntryPoint:!1,Events:[Nl,zo,Qu,F_,z_,mm]},za={findFiberByHostInstance:qs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qM={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=W_(t),t===null?null:t.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||jM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _c=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_c.isDisabled&&_c.supportsFiber)try{Xu=_c.inject(qM),mr=_c}catch{}}vi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XM;vi.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Em(e))throw Error(xe(200));return WM(t,e,null,n)};vi.createRoot=function(t,e){if(!Em(t))throw Error(xe(299));var n=!1,i="",r=Ex;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ym(t,1,!1,null,null,n,!1,i,r),t[Fr]=e.current,vl(t.nodeType===8?t.parentNode:t),new Sm(e)};vi.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(xe(188)):(t=Object.keys(t).join(","),Error(xe(268,t)));return t=W_(e),t=t===null?null:t.stateNode,t};vi.flushSync=function(t){return oo(t)};vi.hydrate=function(t,e,n){if(!af(e))throw Error(xe(200));return lf(null,t,e,!0,n)};vi.hydrateRoot=function(t,e,n){if(!Em(t))throw Error(xe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Ex;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Sx(e,null,t,1,n??null,r,!1,s,o),t[Fr]=e.current,vl(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new of(e)};vi.render=function(t,e,n){if(!af(e))throw Error(xe(200));return lf(null,t,e,!1,n)};vi.unmountComponentAtNode=function(t){if(!af(t))throw Error(xe(40));return t._reactRootContainer?(oo(function(){lf(null,null,t,!1,function(){t._reactRootContainer=null,t[Fr]=null})}),!0):!1};vi.unstable_batchedUpdates=mm;vi.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!af(n))throw Error(xe(200));if(t==null||t._reactInternals===void 0)throw Error(xe(38));return lf(t,e,n,!1,i)};vi.version="18.3.1-next-f1338f8080-20240426";function Mx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mx)}catch(t){console.error(t)}}Mx(),M_.exports=vi;var wx=M_.exports,mv=wx;xh.createRoot=mv.createRoot,xh.hydrateRoot=mv.hydrateRoot;var Tx={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */(function(t){(function(e,n){t.exports=e.document?n(e,!0):function(i){if(!i.document)throw new Error("jQuery requires a window with a document");return n(i)}})(typeof window<"u"?window:Xa,function(e,n){var i=[],r=Object.getPrototypeOf,s=i.slice,o=i.flat?function(l){return i.flat.call(l)}:function(l){return i.concat.apply([],l)},a=i.push,c=i.indexOf,f={},h=f.toString,p=f.hasOwnProperty,m=p.toString,y=m.call(Object),E={},S=function(u){return typeof u=="function"&&typeof u.nodeType!="number"&&typeof u.item!="function"},x=function(u){return u!=null&&u===u.window},g=e.document,M={type:!0,src:!0,nonce:!0,noModule:!0};function w(l,u,v){v=v||g;var _,T,b=v.createElement("script");if(b.text=l,u)for(_ in M)T=u[_]||u.getAttribute&&u.getAttribute(_),T&&b.setAttribute(_,T);v.head.appendChild(b).parentNode.removeChild(b)}function A(l){return l==null?l+"":typeof l=="object"||typeof l=="function"?f[h.call(l)]||"object":typeof l}var O="3.7.1",N=/HTML$/i,d=function(l,u){return new d.fn.init(l,u)};d.fn=d.prototype={jquery:O,constructor:d,length:0,toArray:function(){return s.call(this)},get:function(l){return l==null?s.call(this):l<0?this[l+this.length]:this[l]},pushStack:function(l){var u=d.merge(this.constructor(),l);return u.prevObject=this,u},each:function(l){return d.each(this,l)},map:function(l){return this.pushStack(d.map(this,function(u,v){return l.call(u,v,u)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(d.grep(this,function(l,u){return(u+1)%2}))},odd:function(){return this.pushStack(d.grep(this,function(l,u){return u%2}))},eq:function(l){var u=this.length,v=+l+(l<0?u:0);return this.pushStack(v>=0&&v<u?[this[v]]:[])},end:function(){return this.prevObject||this.constructor()},push:a,sort:i.sort,splice:i.splice},d.extend=d.fn.extend=function(){var l,u,v,_,T,b,C=arguments[0]||{},F=1,k=arguments.length,j=!1;for(typeof C=="boolean"&&(j=C,C=arguments[F]||{},F++),typeof C!="object"&&!S(C)&&(C={}),F===k&&(C=this,F--);F<k;F++)if((l=arguments[F])!=null)for(u in l)_=l[u],!(u==="__proto__"||C===_)&&(j&&_&&(d.isPlainObject(_)||(T=Array.isArray(_)))?(v=C[u],T&&!Array.isArray(v)?b=[]:!T&&!d.isPlainObject(v)?b={}:b=v,T=!1,C[u]=d.extend(j,b,_)):_!==void 0&&(C[u]=_));return C},d.extend({expando:"jQuery"+(O+Math.random()).replace(/\D/g,""),isReady:!0,error:function(l){throw new Error(l)},noop:function(){},isPlainObject:function(l){var u,v;return!l||h.call(l)!=="[object Object]"?!1:(u=r(l),u?(v=p.call(u,"constructor")&&u.constructor,typeof v=="function"&&m.call(v)===y):!0)},isEmptyObject:function(l){var u;for(u in l)return!1;return!0},globalEval:function(l,u,v){w(l,{nonce:u&&u.nonce},v)},each:function(l,u){var v,_=0;if(z(l))for(v=l.length;_<v&&u.call(l[_],_,l[_])!==!1;_++);else for(_ in l)if(u.call(l[_],_,l[_])===!1)break;return l},text:function(l){var u,v="",_=0,T=l.nodeType;if(!T)for(;u=l[_++];)v+=d.text(u);return T===1||T===11?l.textContent:T===9?l.documentElement.textContent:T===3||T===4?l.nodeValue:v},makeArray:function(l,u){var v=u||[];return l!=null&&(z(Object(l))?d.merge(v,typeof l=="string"?[l]:l):a.call(v,l)),v},inArray:function(l,u,v){return u==null?-1:c.call(u,l,v)},isXMLDoc:function(l){var u=l&&l.namespaceURI,v=l&&(l.ownerDocument||l).documentElement;return!N.test(u||v&&v.nodeName||"HTML")},merge:function(l,u){for(var v=+u.length,_=0,T=l.length;_<v;_++)l[T++]=u[_];return l.length=T,l},grep:function(l,u,v){for(var _,T=[],b=0,C=l.length,F=!v;b<C;b++)_=!u(l[b],b),_!==F&&T.push(l[b]);return T},map:function(l,u,v){var _,T,b=0,C=[];if(z(l))for(_=l.length;b<_;b++)T=u(l[b],b,v),T!=null&&C.push(T);else for(b in l)T=u(l[b],b,v),T!=null&&C.push(T);return o(C)},guid:1,support:E}),typeof Symbol=="function"&&(d.fn[Symbol.iterator]=i[Symbol.iterator]),d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(l,u){f["[object "+u+"]"]=u.toLowerCase()});function z(l){var u=!!l&&"length"in l&&l.length,v=A(l);return S(l)||x(l)?!1:v==="array"||u===0||typeof u=="number"&&u>0&&u-1 in l}function D(l,u){return l.nodeName&&l.nodeName.toLowerCase()===u.toLowerCase()}var R=i.pop,H=i.sort,oe=i.splice,q="[\\x20\\t\\r\\n\\f]",fe=new RegExp("^"+q+"+|((?:^|[^\\\\])(?:\\\\.)*)"+q+"+$","g");d.contains=function(l,u){var v=u&&u.parentNode;return l===v||!!(v&&v.nodeType===1&&(l.contains?l.contains(v):l.compareDocumentPosition&&l.compareDocumentPosition(v)&16))};var me=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function ue(l,u){return u?l==="\0"?"�":l.slice(0,-1)+"\\"+l.charCodeAt(l.length-1).toString(16)+" ":"\\"+l}d.escapeSelector=function(l){return(l+"").replace(me,ue)};var pe=g,W=a;(function(){var l,u,v,_,T,b=W,C,F,k,j,re,le=d.expando,K=0,ye=0,nt=Zl(),wt=Zl(),ft=Zl(),An=Zl(),gn=function(I,B){return I===B&&(T=!0),0},Zi="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Ji="(?:\\\\[\\da-fA-F]{1,6}"+q+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",St="\\["+q+"*("+Ji+")(?:"+q+"*([*^$|!~]?=)"+q+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Ji+"))|)"+q+"*\\]",Ns=":("+Ji+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+St+")*)|.*)\\)|)",At=new RegExp(q+"+","g"),an=new RegExp("^"+q+"*,"+q+"*"),Ra=new RegExp("^"+q+"*([>+~]|"+q+")"+q+"*"),ed=new RegExp(q+"|>"),er=new RegExp(Ns),Pa=new RegExp("^"+Ji+"$"),tr={ID:new RegExp("^#("+Ji+")"),CLASS:new RegExp("^\\.("+Ji+")"),TAG:new RegExp("^("+Ji+"|[*])"),ATTR:new RegExp("^"+St),PSEUDO:new RegExp("^"+Ns),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+q+"*(even|odd|(([+-]|)(\\d*)n|)"+q+"*(?:([+-]|)"+q+"*(\\d+)|))"+q+"*\\)|)","i"),bool:new RegExp("^(?:"+Zi+")$","i"),needsContext:new RegExp("^"+q+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+q+"*((?:-\\d)?\\d*)"+q+"*\\)|)(?=[^-]|$)","i")},jr=/^(?:input|select|textarea|button)$/i,$r=/^h\d$/i,Ei=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,td=/[+~]/,Er=new RegExp("\\\\[\\da-fA-F]{1,6}"+q+"?|\\\\([^\\r\\n\\f])","g"),Mr=function(I,B){var Y="0x"+I.slice(1)-65536;return B||(Y<0?String.fromCharCode(Y+65536):String.fromCharCode(Y>>10|55296,Y&1023|56320))},g1=function(){Xr()},v1=ec(function(I){return I.disabled===!0&&D(I,"fieldset")},{dir:"parentNode",next:"legend"});function _1(){try{return C.activeElement}catch{}}try{b.apply(i=s.call(pe.childNodes),pe.childNodes),i[pe.childNodes.length].nodeType}catch{b={apply:function(B,Y){W.apply(B,s.call(Y))},call:function(B){W.apply(B,s.call(arguments,1))}}}function Ot(I,B,Y,te){var ae,be,Ue,Ve,Oe,vt,et,it=B&&B.ownerDocument,_t=B?B.nodeType:9;if(Y=Y||[],typeof I!="string"||!I||_t!==1&&_t!==9&&_t!==11)return Y;if(!te&&(Xr(B),B=B||C,k)){if(_t!==11&&(Oe=Ei.exec(I)))if(ae=Oe[1]){if(_t===9)if(Ue=B.getElementById(ae)){if(Ue.id===ae)return b.call(Y,Ue),Y}else return Y;else if(it&&(Ue=it.getElementById(ae))&&Ot.contains(B,Ue)&&Ue.id===ae)return b.call(Y,Ue),Y}else{if(Oe[2])return b.apply(Y,B.getElementsByTagName(I)),Y;if((ae=Oe[3])&&B.getElementsByClassName)return b.apply(Y,B.getElementsByClassName(ae)),Y}if(!An[I+" "]&&(!j||!j.test(I))){if(et=I,it=B,_t===1&&(ed.test(I)||Ra.test(I))){for(it=td.test(I)&&nd(B.parentNode)||B,(it!=B||!E.scope)&&((Ve=B.getAttribute("id"))?Ve=d.escapeSelector(Ve):B.setAttribute("id",Ve=le)),vt=La(I),be=vt.length;be--;)vt[be]=(Ve?"#"+Ve:":scope")+" "+Jl(vt[be]);et=vt.join(",")}try{return b.apply(Y,it.querySelectorAll(et)),Y}catch{An(I,!0)}finally{Ve===le&&B.removeAttribute("id")}}}return sg(I.replace(fe,"$1"),B,Y,te)}function Zl(){var I=[];function B(Y,te){return I.push(Y+" ")>u.cacheLength&&delete B[I.shift()],B[Y+" "]=te}return B}function Ui(I){return I[le]=!0,I}function po(I){var B=C.createElement("fieldset");try{return!!I(B)}catch{return!1}finally{B.parentNode&&B.parentNode.removeChild(B),B=null}}function y1(I){return function(B){return D(B,"input")&&B.type===I}}function x1(I){return function(B){return(D(B,"input")||D(B,"button"))&&B.type===I}}function ig(I){return function(B){return"form"in B?B.parentNode&&B.disabled===!1?"label"in B?"label"in B.parentNode?B.parentNode.disabled===I:B.disabled===I:B.isDisabled===I||B.isDisabled!==!I&&v1(B)===I:B.disabled===I:"label"in B?B.disabled===I:!1}}function Is(I){return Ui(function(B){return B=+B,Ui(function(Y,te){for(var ae,be=I([],Y.length,B),Ue=be.length;Ue--;)Y[ae=be[Ue]]&&(Y[ae]=!(te[ae]=Y[ae]))})})}function nd(I){return I&&typeof I.getElementsByTagName<"u"&&I}function Xr(I){var B,Y=I?I.ownerDocument||I:pe;return Y==C||Y.nodeType!==9||!Y.documentElement||(C=Y,F=C.documentElement,k=!d.isXMLDoc(C),re=F.matches||F.webkitMatchesSelector||F.msMatchesSelector,F.msMatchesSelector&&pe!=C&&(B=C.defaultView)&&B.top!==B&&B.addEventListener("unload",g1),E.getById=po(function(te){return F.appendChild(te).id=d.expando,!C.getElementsByName||!C.getElementsByName(d.expando).length}),E.disconnectedMatch=po(function(te){return re.call(te,"*")}),E.scope=po(function(){return C.querySelectorAll(":scope")}),E.cssHas=po(function(){try{return C.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),E.getById?(u.filter.ID=function(te){var ae=te.replace(Er,Mr);return function(be){return be.getAttribute("id")===ae}},u.find.ID=function(te,ae){if(typeof ae.getElementById<"u"&&k){var be=ae.getElementById(te);return be?[be]:[]}}):(u.filter.ID=function(te){var ae=te.replace(Er,Mr);return function(be){var Ue=typeof be.getAttributeNode<"u"&&be.getAttributeNode("id");return Ue&&Ue.value===ae}},u.find.ID=function(te,ae){if(typeof ae.getElementById<"u"&&k){var be,Ue,Ve,Oe=ae.getElementById(te);if(Oe){if(be=Oe.getAttributeNode("id"),be&&be.value===te)return[Oe];for(Ve=ae.getElementsByName(te),Ue=0;Oe=Ve[Ue++];)if(be=Oe.getAttributeNode("id"),be&&be.value===te)return[Oe]}return[]}}),u.find.TAG=function(te,ae){return typeof ae.getElementsByTagName<"u"?ae.getElementsByTagName(te):ae.querySelectorAll(te)},u.find.CLASS=function(te,ae){if(typeof ae.getElementsByClassName<"u"&&k)return ae.getElementsByClassName(te)},j=[],po(function(te){var ae;F.appendChild(te).innerHTML="<a id='"+le+"' href='' disabled='disabled'></a><select id='"+le+"-\r\\' disabled='disabled'><option selected=''></option></select>",te.querySelectorAll("[selected]").length||j.push("\\["+q+"*(?:value|"+Zi+")"),te.querySelectorAll("[id~="+le+"-]").length||j.push("~="),te.querySelectorAll("a#"+le+"+*").length||j.push(".#.+[+~]"),te.querySelectorAll(":checked").length||j.push(":checked"),ae=C.createElement("input"),ae.setAttribute("type","hidden"),te.appendChild(ae).setAttribute("name","D"),F.appendChild(te).disabled=!0,te.querySelectorAll(":disabled").length!==2&&j.push(":enabled",":disabled"),ae=C.createElement("input"),ae.setAttribute("name",""),te.appendChild(ae),te.querySelectorAll("[name='']").length||j.push("\\["+q+"*name"+q+"*="+q+`*(?:''|"")`)}),E.cssHas||j.push(":has"),j=j.length&&new RegExp(j.join("|")),gn=function(te,ae){if(te===ae)return T=!0,0;var be=!te.compareDocumentPosition-!ae.compareDocumentPosition;return be||(be=(te.ownerDocument||te)==(ae.ownerDocument||ae)?te.compareDocumentPosition(ae):1,be&1||!E.sortDetached&&ae.compareDocumentPosition(te)===be?te===C||te.ownerDocument==pe&&Ot.contains(pe,te)?-1:ae===C||ae.ownerDocument==pe&&Ot.contains(pe,ae)?1:_?c.call(_,te)-c.call(_,ae):0:be&4?-1:1)}),C}Ot.matches=function(I,B){return Ot(I,null,null,B)},Ot.matchesSelector=function(I,B){if(Xr(I),k&&!An[B+" "]&&(!j||!j.test(B)))try{var Y=re.call(I,B);if(Y||E.disconnectedMatch||I.document&&I.document.nodeType!==11)return Y}catch{An(B,!0)}return Ot(B,C,null,[I]).length>0},Ot.contains=function(I,B){return(I.ownerDocument||I)!=C&&Xr(I),d.contains(I,B)},Ot.attr=function(I,B){(I.ownerDocument||I)!=C&&Xr(I);var Y=u.attrHandle[B.toLowerCase()],te=Y&&p.call(u.attrHandle,B.toLowerCase())?Y(I,B,!k):void 0;return te!==void 0?te:I.getAttribute(B)},Ot.error=function(I){throw new Error("Syntax error, unrecognized expression: "+I)},d.uniqueSort=function(I){var B,Y=[],te=0,ae=0;if(T=!E.sortStable,_=!E.sortStable&&s.call(I,0),H.call(I,gn),T){for(;B=I[ae++];)B===I[ae]&&(te=Y.push(ae));for(;te--;)oe.call(I,Y[te],1)}return _=null,I},d.fn.uniqueSort=function(){return this.pushStack(d.uniqueSort(s.apply(this)))},u=d.expr={cacheLength:50,createPseudo:Ui,match:tr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(I){return I[1]=I[1].replace(Er,Mr),I[3]=(I[3]||I[4]||I[5]||"").replace(Er,Mr),I[2]==="~="&&(I[3]=" "+I[3]+" "),I.slice(0,4)},CHILD:function(I){return I[1]=I[1].toLowerCase(),I[1].slice(0,3)==="nth"?(I[3]||Ot.error(I[0]),I[4]=+(I[4]?I[5]+(I[6]||1):2*(I[3]==="even"||I[3]==="odd")),I[5]=+(I[7]+I[8]||I[3]==="odd")):I[3]&&Ot.error(I[0]),I},PSEUDO:function(I){var B,Y=!I[6]&&I[2];return tr.CHILD.test(I[0])?null:(I[3]?I[2]=I[4]||I[5]||"":Y&&er.test(Y)&&(B=La(Y,!0))&&(B=Y.indexOf(")",Y.length-B)-Y.length)&&(I[0]=I[0].slice(0,B),I[2]=Y.slice(0,B)),I.slice(0,3))}},filter:{TAG:function(I){var B=I.replace(Er,Mr).toLowerCase();return I==="*"?function(){return!0}:function(Y){return D(Y,B)}},CLASS:function(I){var B=nt[I+" "];return B||(B=new RegExp("(^|"+q+")"+I+"("+q+"|$)"))&&nt(I,function(Y){return B.test(typeof Y.className=="string"&&Y.className||typeof Y.getAttribute<"u"&&Y.getAttribute("class")||"")})},ATTR:function(I,B,Y){return function(te){var ae=Ot.attr(te,I);return ae==null?B==="!=":B?(ae+="",B==="="?ae===Y:B==="!="?ae!==Y:B==="^="?Y&&ae.indexOf(Y)===0:B==="*="?Y&&ae.indexOf(Y)>-1:B==="$="?Y&&ae.slice(-Y.length)===Y:B==="~="?(" "+ae.replace(At," ")+" ").indexOf(Y)>-1:B==="|="?ae===Y||ae.slice(0,Y.length+1)===Y+"-":!1):!0}},CHILD:function(I,B,Y,te,ae){var be=I.slice(0,3)!=="nth",Ue=I.slice(-4)!=="last",Ve=B==="of-type";return te===1&&ae===0?function(Oe){return!!Oe.parentNode}:function(Oe,vt,et){var it,_t,qe,$t,Qn,In=be!==Ue?"nextSibling":"previousSibling",Mi=Oe.parentNode,nr=Ve&&Oe.nodeName.toLowerCase(),mo=!et&&!Ve,Wn=!1;if(Mi){if(be){for(;In;){for(qe=Oe;qe=qe[In];)if(Ve?D(qe,nr):qe.nodeType===1)return!1;Qn=In=I==="only"&&!Qn&&"nextSibling"}return!0}if(Qn=[Ue?Mi.firstChild:Mi.lastChild],Ue&&mo){for(_t=Mi[le]||(Mi[le]={}),it=_t[I]||[],$t=it[0]===K&&it[1],Wn=$t&&it[2],qe=$t&&Mi.childNodes[$t];qe=++$t&&qe&&qe[In]||(Wn=$t=0)||Qn.pop();)if(qe.nodeType===1&&++Wn&&qe===Oe){_t[I]=[K,$t,Wn];break}}else if(mo&&(_t=Oe[le]||(Oe[le]={}),it=_t[I]||[],$t=it[0]===K&&it[1],Wn=$t),Wn===!1)for(;(qe=++$t&&qe&&qe[In]||(Wn=$t=0)||Qn.pop())&&!((Ve?D(qe,nr):qe.nodeType===1)&&++Wn&&(mo&&(_t=qe[le]||(qe[le]={}),_t[I]=[K,Wn]),qe===Oe)););return Wn-=ae,Wn===te||Wn%te===0&&Wn/te>=0}}},PSEUDO:function(I,B){var Y,te=u.pseudos[I]||u.setFilters[I.toLowerCase()]||Ot.error("unsupported pseudo: "+I);return te[le]?te(B):te.length>1?(Y=[I,I,"",B],u.setFilters.hasOwnProperty(I.toLowerCase())?Ui(function(ae,be){for(var Ue,Ve=te(ae,B),Oe=Ve.length;Oe--;)Ue=c.call(ae,Ve[Oe]),ae[Ue]=!(be[Ue]=Ve[Oe])}):function(ae){return te(ae,0,Y)}):te}},pseudos:{not:Ui(function(I){var B=[],Y=[],te=od(I.replace(fe,"$1"));return te[le]?Ui(function(ae,be,Ue,Ve){for(var Oe,vt=te(ae,null,Ve,[]),et=ae.length;et--;)(Oe=vt[et])&&(ae[et]=!(be[et]=Oe))}):function(ae,be,Ue){return B[0]=ae,te(B,null,Ue,Y),B[0]=null,!Y.pop()}}),has:Ui(function(I){return function(B){return Ot(I,B).length>0}}),contains:Ui(function(I){return I=I.replace(Er,Mr),function(B){return(B.textContent||d.text(B)).indexOf(I)>-1}}),lang:Ui(function(I){return Pa.test(I||"")||Ot.error("unsupported lang: "+I),I=I.replace(Er,Mr).toLowerCase(),function(B){var Y;do if(Y=k?B.lang:B.getAttribute("xml:lang")||B.getAttribute("lang"))return Y=Y.toLowerCase(),Y===I||Y.indexOf(I+"-")===0;while((B=B.parentNode)&&B.nodeType===1);return!1}}),target:function(I){var B=e.location&&e.location.hash;return B&&B.slice(1)===I.id},root:function(I){return I===F},focus:function(I){return I===_1()&&C.hasFocus()&&!!(I.type||I.href||~I.tabIndex)},enabled:ig(!1),disabled:ig(!0),checked:function(I){return D(I,"input")&&!!I.checked||D(I,"option")&&!!I.selected},selected:function(I){return I.parentNode&&I.parentNode.selectedIndex,I.selected===!0},empty:function(I){for(I=I.firstChild;I;I=I.nextSibling)if(I.nodeType<6)return!1;return!0},parent:function(I){return!u.pseudos.empty(I)},header:function(I){return $r.test(I.nodeName)},input:function(I){return jr.test(I.nodeName)},button:function(I){return D(I,"input")&&I.type==="button"||D(I,"button")},text:function(I){var B;return D(I,"input")&&I.type==="text"&&((B=I.getAttribute("type"))==null||B.toLowerCase()==="text")},first:Is(function(){return[0]}),last:Is(function(I,B){return[B-1]}),eq:Is(function(I,B,Y){return[Y<0?Y+B:Y]}),even:Is(function(I,B){for(var Y=0;Y<B;Y+=2)I.push(Y);return I}),odd:Is(function(I,B){for(var Y=1;Y<B;Y+=2)I.push(Y);return I}),lt:Is(function(I,B,Y){var te;for(Y<0?te=Y+B:Y>B?te=B:te=Y;--te>=0;)I.push(te);return I}),gt:Is(function(I,B,Y){for(var te=Y<0?Y+B:Y;++te<B;)I.push(te);return I})}},u.pseudos.nth=u.pseudos.eq;for(l in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})u.pseudos[l]=y1(l);for(l in{submit:!0,reset:!0})u.pseudos[l]=x1(l);function rg(){}rg.prototype=u.filters=u.pseudos,u.setFilters=new rg;function La(I,B){var Y,te,ae,be,Ue,Ve,Oe,vt=wt[I+" "];if(vt)return B?0:vt.slice(0);for(Ue=I,Ve=[],Oe=u.preFilter;Ue;){(!Y||(te=an.exec(Ue)))&&(te&&(Ue=Ue.slice(te[0].length)||Ue),Ve.push(ae=[])),Y=!1,(te=Ra.exec(Ue))&&(Y=te.shift(),ae.push({value:Y,type:te[0].replace(fe," ")}),Ue=Ue.slice(Y.length));for(be in u.filter)(te=tr[be].exec(Ue))&&(!Oe[be]||(te=Oe[be](te)))&&(Y=te.shift(),ae.push({value:Y,type:be,matches:te}),Ue=Ue.slice(Y.length));if(!Y)break}return B?Ue.length:Ue?Ot.error(I):wt(I,Ve).slice(0)}function Jl(I){for(var B=0,Y=I.length,te="";B<Y;B++)te+=I[B].value;return te}function ec(I,B,Y){var te=B.dir,ae=B.next,be=ae||te,Ue=Y&&be==="parentNode",Ve=ye++;return B.first?function(Oe,vt,et){for(;Oe=Oe[te];)if(Oe.nodeType===1||Ue)return I(Oe,vt,et);return!1}:function(Oe,vt,et){var it,_t,qe=[K,Ve];if(et){for(;Oe=Oe[te];)if((Oe.nodeType===1||Ue)&&I(Oe,vt,et))return!0}else for(;Oe=Oe[te];)if(Oe.nodeType===1||Ue)if(_t=Oe[le]||(Oe[le]={}),ae&&D(Oe,ae))Oe=Oe[te]||Oe;else{if((it=_t[be])&&it[0]===K&&it[1]===Ve)return qe[2]=it[2];if(_t[be]=qe,qe[2]=I(Oe,vt,et))return!0}return!1}}function id(I){return I.length>1?function(B,Y,te){for(var ae=I.length;ae--;)if(!I[ae](B,Y,te))return!1;return!0}:I[0]}function S1(I,B,Y){for(var te=0,ae=B.length;te<ae;te++)Ot(I,B[te],Y);return Y}function tc(I,B,Y,te,ae){for(var be,Ue=[],Ve=0,Oe=I.length,vt=B!=null;Ve<Oe;Ve++)(be=I[Ve])&&(!Y||Y(be,te,ae))&&(Ue.push(be),vt&&B.push(Ve));return Ue}function rd(I,B,Y,te,ae,be){return te&&!te[le]&&(te=rd(te)),ae&&!ae[le]&&(ae=rd(ae,be)),Ui(function(Ue,Ve,Oe,vt){var et,it,_t,qe,$t=[],Qn=[],In=Ve.length,Mi=Ue||S1(B||"*",Oe.nodeType?[Oe]:Oe,[]),nr=I&&(Ue||!B)?tc(Mi,$t,I,Oe,vt):Mi;if(Y?(qe=ae||(Ue?I:In||te)?[]:Ve,Y(nr,qe,Oe,vt)):qe=nr,te)for(et=tc(qe,Qn),te(et,[],Oe,vt),it=et.length;it--;)(_t=et[it])&&(qe[Qn[it]]=!(nr[Qn[it]]=_t));if(Ue){if(ae||I){if(ae){for(et=[],it=qe.length;it--;)(_t=qe[it])&&et.push(nr[it]=_t);ae(null,qe=[],et,vt)}for(it=qe.length;it--;)(_t=qe[it])&&(et=ae?c.call(Ue,_t):$t[it])>-1&&(Ue[et]=!(Ve[et]=_t))}}else qe=tc(qe===Ve?qe.splice(In,qe.length):qe),ae?ae(null,Ve,qe,vt):b.apply(Ve,qe)})}function sd(I){for(var B,Y,te,ae=I.length,be=u.relative[I[0].type],Ue=be||u.relative[" "],Ve=be?1:0,Oe=ec(function(it){return it===B},Ue,!0),vt=ec(function(it){return c.call(B,it)>-1},Ue,!0),et=[function(it,_t,qe){var $t=!be&&(qe||_t!=v)||((B=_t).nodeType?Oe(it,_t,qe):vt(it,_t,qe));return B=null,$t}];Ve<ae;Ve++)if(Y=u.relative[I[Ve].type])et=[ec(id(et),Y)];else{if(Y=u.filter[I[Ve].type].apply(null,I[Ve].matches),Y[le]){for(te=++Ve;te<ae&&!u.relative[I[te].type];te++);return rd(Ve>1&&id(et),Ve>1&&Jl(I.slice(0,Ve-1).concat({value:I[Ve-2].type===" "?"*":""})).replace(fe,"$1"),Y,Ve<te&&sd(I.slice(Ve,te)),te<ae&&sd(I=I.slice(te)),te<ae&&Jl(I))}et.push(Y)}return id(et)}function E1(I,B){var Y=B.length>0,te=I.length>0,ae=function(be,Ue,Ve,Oe,vt){var et,it,_t,qe=0,$t="0",Qn=be&&[],In=[],Mi=v,nr=be||te&&u.find.TAG("*",vt),mo=K+=Mi==null?1:Math.random()||.1,Wn=nr.length;for(vt&&(v=Ue==C||Ue||vt);$t!==Wn&&(et=nr[$t])!=null;$t++){if(te&&et){for(it=0,!Ue&&et.ownerDocument!=C&&(Xr(et),Ve=!k);_t=I[it++];)if(_t(et,Ue||C,Ve)){b.call(Oe,et);break}vt&&(K=mo)}Y&&((et=!_t&&et)&&qe--,be&&Qn.push(et))}if(qe+=$t,Y&&$t!==qe){for(it=0;_t=B[it++];)_t(Qn,In,Ue,Ve);if(be){if(qe>0)for(;$t--;)Qn[$t]||In[$t]||(In[$t]=R.call(Oe));In=tc(In)}b.apply(Oe,In),vt&&!be&&In.length>0&&qe+B.length>1&&d.uniqueSort(Oe)}return vt&&(K=mo,v=Mi),Qn};return Y?Ui(ae):ae}function od(I,B){var Y,te=[],ae=[],be=ft[I+" "];if(!be){for(B||(B=La(I)),Y=B.length;Y--;)be=sd(B[Y]),be[le]?te.push(be):ae.push(be);be=ft(I,E1(ae,te)),be.selector=I}return be}function sg(I,B,Y,te){var ae,be,Ue,Ve,Oe,vt=typeof I=="function"&&I,et=!te&&La(I=vt.selector||I);if(Y=Y||[],et.length===1){if(be=et[0]=et[0].slice(0),be.length>2&&(Ue=be[0]).type==="ID"&&B.nodeType===9&&k&&u.relative[be[1].type]){if(B=(u.find.ID(Ue.matches[0].replace(Er,Mr),B)||[])[0],B)vt&&(B=B.parentNode);else return Y;I=I.slice(be.shift().value.length)}for(ae=tr.needsContext.test(I)?0:be.length;ae--&&(Ue=be[ae],!u.relative[Ve=Ue.type]);)if((Oe=u.find[Ve])&&(te=Oe(Ue.matches[0].replace(Er,Mr),td.test(be[0].type)&&nd(B.parentNode)||B))){if(be.splice(ae,1),I=te.length&&Jl(be),!I)return b.apply(Y,te),Y;break}}return(vt||od(I,et))(te,B,!k,Y,!B||td.test(I)&&nd(B.parentNode)||B),Y}E.sortStable=le.split("").sort(gn).join("")===le,Xr(),E.sortDetached=po(function(I){return I.compareDocumentPosition(C.createElement("fieldset"))&1}),d.find=Ot,d.expr[":"]=d.expr.pseudos,d.unique=d.uniqueSort,Ot.compile=od,Ot.select=sg,Ot.setDocument=Xr,Ot.tokenize=La,Ot.escape=d.escapeSelector,Ot.getText=d.text,Ot.isXML=d.isXMLDoc,Ot.selectors=d.expr,Ot.support=d.support,Ot.uniqueSort=d.uniqueSort})();var de=function(l,u,v){for(var _=[],T=v!==void 0;(l=l[u])&&l.nodeType!==9;)if(l.nodeType===1){if(T&&d(l).is(v))break;_.push(l)}return _},ve=function(l,u){for(var v=[];l;l=l.nextSibling)l.nodeType===1&&l!==u&&v.push(l);return v},Ce=d.expr.match.needsContext,We=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function mt(l,u,v){return S(u)?d.grep(l,function(_,T){return!!u.call(_,T,_)!==v}):u.nodeType?d.grep(l,function(_){return _===u!==v}):typeof u!="string"?d.grep(l,function(_){return c.call(u,_)>-1!==v}):d.filter(u,l,v)}d.filter=function(l,u,v){var _=u[0];return v&&(l=":not("+l+")"),u.length===1&&_.nodeType===1?d.find.matchesSelector(_,l)?[_]:[]:d.find.matches(l,d.grep(u,function(T){return T.nodeType===1}))},d.fn.extend({find:function(l){var u,v,_=this.length,T=this;if(typeof l!="string")return this.pushStack(d(l).filter(function(){for(u=0;u<_;u++)if(d.contains(T[u],this))return!0}));for(v=this.pushStack([]),u=0;u<_;u++)d.find(l,T[u],v);return _>1?d.uniqueSort(v):v},filter:function(l){return this.pushStack(mt(this,l||[],!1))},not:function(l){return this.pushStack(mt(this,l||[],!0))},is:function(l){return!!mt(this,typeof l=="string"&&Ce.test(l)?d(l):l||[],!1).length}});var se,Se=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Ne=d.fn.init=function(l,u,v){var _,T;if(!l)return this;if(v=v||se,typeof l=="string")if(l[0]==="<"&&l[l.length-1]===">"&&l.length>=3?_=[null,l,null]:_=Se.exec(l),_&&(_[1]||!u))if(_[1]){if(u=u instanceof d?u[0]:u,d.merge(this,d.parseHTML(_[1],u&&u.nodeType?u.ownerDocument||u:g,!0)),We.test(_[1])&&d.isPlainObject(u))for(_ in u)S(this[_])?this[_](u[_]):this.attr(_,u[_]);return this}else return T=g.getElementById(_[2]),T&&(this[0]=T,this.length=1),this;else return!u||u.jquery?(u||v).find(l):this.constructor(u).find(l);else{if(l.nodeType)return this[0]=l,this.length=1,this;if(S(l))return v.ready!==void 0?v.ready(l):l(d)}return d.makeArray(l,this)};Ne.prototype=d.fn,se=d(g);var Ae=/^(?:parents|prev(?:Until|All))/,pt={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({has:function(l){var u=d(l,this),v=u.length;return this.filter(function(){for(var _=0;_<v;_++)if(d.contains(this,u[_]))return!0})},closest:function(l,u){var v,_=0,T=this.length,b=[],C=typeof l!="string"&&d(l);if(!Ce.test(l)){for(;_<T;_++)for(v=this[_];v&&v!==u;v=v.parentNode)if(v.nodeType<11&&(C?C.index(v)>-1:v.nodeType===1&&d.find.matchesSelector(v,l))){b.push(v);break}}return this.pushStack(b.length>1?d.uniqueSort(b):b)},index:function(l){return l?typeof l=="string"?c.call(d(l),this[0]):c.call(this,l.jquery?l[0]:l):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(l,u){return this.pushStack(d.uniqueSort(d.merge(this.get(),d(l,u))))},addBack:function(l){return this.add(l==null?this.prevObject:this.prevObject.filter(l))}});function st(l,u){for(;(l=l[u])&&l.nodeType!==1;);return l}d.each({parent:function(l){var u=l.parentNode;return u&&u.nodeType!==11?u:null},parents:function(l){return de(l,"parentNode")},parentsUntil:function(l,u,v){return de(l,"parentNode",v)},next:function(l){return st(l,"nextSibling")},prev:function(l){return st(l,"previousSibling")},nextAll:function(l){return de(l,"nextSibling")},prevAll:function(l){return de(l,"previousSibling")},nextUntil:function(l,u,v){return de(l,"nextSibling",v)},prevUntil:function(l,u,v){return de(l,"previousSibling",v)},siblings:function(l){return ve((l.parentNode||{}).firstChild,l)},children:function(l){return ve(l.firstChild)},contents:function(l){return l.contentDocument!=null&&r(l.contentDocument)?l.contentDocument:(D(l,"template")&&(l=l.content||l),d.merge([],l.childNodes))}},function(l,u){d.fn[l]=function(v,_){var T=d.map(this,u,v);return l.slice(-5)!=="Until"&&(_=v),_&&typeof _=="string"&&(T=d.filter(_,T)),this.length>1&&(pt[l]||d.uniqueSort(T),Ae.test(l)&&T.reverse()),this.pushStack(T)}});var rt=/[^\x20\t\r\n\f]+/g;function G(l){var u={};return d.each(l.match(rt)||[],function(v,_){u[_]=!0}),u}d.Callbacks=function(l){l=typeof l=="string"?G(l):d.extend({},l);var u,v,_,T,b=[],C=[],F=-1,k=function(){for(T=T||l.once,_=u=!0;C.length;F=-1)for(v=C.shift();++F<b.length;)b[F].apply(v[0],v[1])===!1&&l.stopOnFalse&&(F=b.length,v=!1);l.memory||(v=!1),u=!1,T&&(v?b=[]:b="")},j={add:function(){return b&&(v&&!u&&(F=b.length-1,C.push(v)),function re(le){d.each(le,function(K,ye){S(ye)?(!l.unique||!j.has(ye))&&b.push(ye):ye&&ye.length&&A(ye)!=="string"&&re(ye)})}(arguments),v&&!u&&k()),this},remove:function(){return d.each(arguments,function(re,le){for(var K;(K=d.inArray(le,b,K))>-1;)b.splice(K,1),K<=F&&F--}),this},has:function(re){return re?d.inArray(re,b)>-1:b.length>0},empty:function(){return b&&(b=[]),this},disable:function(){return T=C=[],b=v="",this},disabled:function(){return!b},lock:function(){return T=C=[],!v&&!u&&(b=v=""),this},locked:function(){return!!T},fireWith:function(re,le){return T||(le=le||[],le=[re,le.slice?le.slice():le],C.push(le),u||k()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!_}};return j};function lt(l){return l}function ut(l){throw l}function Gt(l,u,v,_){var T;try{l&&S(T=l.promise)?T.call(l).done(u).fail(v):l&&S(T=l.then)?T.call(l,u,v):u.apply(void 0,[l].slice(_))}catch(b){v.apply(void 0,[b])}}d.extend({Deferred:function(l){var u=[["notify","progress",d.Callbacks("memory"),d.Callbacks("memory"),2],["resolve","done",d.Callbacks("once memory"),d.Callbacks("once memory"),0,"resolved"],["reject","fail",d.Callbacks("once memory"),d.Callbacks("once memory"),1,"rejected"]],v="pending",_={state:function(){return v},always:function(){return T.done(arguments).fail(arguments),this},catch:function(b){return _.then(null,b)},pipe:function(){var b=arguments;return d.Deferred(function(C){d.each(u,function(F,k){var j=S(b[k[4]])&&b[k[4]];T[k[1]](function(){var re=j&&j.apply(this,arguments);re&&S(re.promise)?re.promise().progress(C.notify).done(C.resolve).fail(C.reject):C[k[0]+"With"](this,j?[re]:arguments)})}),b=null}).promise()},then:function(b,C,F){var k=0;function j(re,le,K,ye){return function(){var nt=this,wt=arguments,ft=function(){var gn,Zi;if(!(re<k)){if(gn=K.apply(nt,wt),gn===le.promise())throw new TypeError("Thenable self-resolution");Zi=gn&&(typeof gn=="object"||typeof gn=="function")&&gn.then,S(Zi)?ye?Zi.call(gn,j(k,le,lt,ye),j(k,le,ut,ye)):(k++,Zi.call(gn,j(k,le,lt,ye),j(k,le,ut,ye),j(k,le,lt,le.notifyWith))):(K!==lt&&(nt=void 0,wt=[gn]),(ye||le.resolveWith)(nt,wt))}},An=ye?ft:function(){try{ft()}catch(gn){d.Deferred.exceptionHook&&d.Deferred.exceptionHook(gn,An.error),re+1>=k&&(K!==ut&&(nt=void 0,wt=[gn]),le.rejectWith(nt,wt))}};re?An():(d.Deferred.getErrorHook?An.error=d.Deferred.getErrorHook():d.Deferred.getStackHook&&(An.error=d.Deferred.getStackHook()),e.setTimeout(An))}}return d.Deferred(function(re){u[0][3].add(j(0,re,S(F)?F:lt,re.notifyWith)),u[1][3].add(j(0,re,S(b)?b:lt)),u[2][3].add(j(0,re,S(C)?C:ut))}).promise()},promise:function(b){return b!=null?d.extend(b,_):_}},T={};return d.each(u,function(b,C){var F=C[2],k=C[5];_[C[1]]=F.add,k&&F.add(function(){v=k},u[3-b][2].disable,u[3-b][3].disable,u[0][2].lock,u[0][3].lock),F.add(C[3].fire),T[C[0]]=function(){return T[C[0]+"With"](this===T?void 0:this,arguments),this},T[C[0]+"With"]=F.fireWith}),_.promise(T),l&&l.call(T,T),T},when:function(l){var u=arguments.length,v=u,_=Array(v),T=s.call(arguments),b=d.Deferred(),C=function(F){return function(k){_[F]=this,T[F]=arguments.length>1?s.call(arguments):k,--u||b.resolveWith(_,T)}};if(u<=1&&(Gt(l,b.done(C(v)).resolve,b.reject,!u),b.state()==="pending"||S(T[v]&&T[v].then)))return b.then();for(;v--;)Gt(T[v],C(v),b.reject);return b.promise()}});var Ye=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;d.Deferred.exceptionHook=function(l,u){e.console&&e.console.warn&&l&&Ye.test(l.name)&&e.console.warn("jQuery.Deferred exception: "+l.message,l.stack,u)},d.readyException=function(l){e.setTimeout(function(){throw l})};var xt=d.Deferred();d.fn.ready=function(l){return xt.then(l).catch(function(u){d.readyException(u)}),this},d.extend({isReady:!1,readyWait:1,ready:function(l){(l===!0?--d.readyWait:d.isReady)||(d.isReady=!0,!(l!==!0&&--d.readyWait>0)&&xt.resolveWith(g,[d]))}}),d.ready.then=xt.then;function ot(){g.removeEventListener("DOMContentLoaded",ot),e.removeEventListener("load",ot),d.ready()}g.readyState==="complete"||g.readyState!=="loading"&&!g.documentElement.doScroll?e.setTimeout(d.ready):(g.addEventListener("DOMContentLoaded",ot),e.addEventListener("load",ot));var Ke=function(l,u,v,_,T,b,C){var F=0,k=l.length,j=v==null;if(A(v)==="object"){T=!0;for(F in v)Ke(l,u,F,v[F],!0,b,C)}else if(_!==void 0&&(T=!0,S(_)||(C=!0),j&&(C?(u.call(l,_),u=null):(j=u,u=function(re,le,K){return j.call(d(re),K)})),u))for(;F<k;F++)u(l[F],v,C?_:_.call(l[F],F,u(l[F],v)));return T?l:j?u.call(l):k?u(l[0],v):b},on=/^-ms-/,U=/-([a-z])/g;function P(l,u){return u.toUpperCase()}function J(l){return l.replace(on,"ms-").replace(U,P)}var ge=function(l){return l.nodeType===1||l.nodeType===9||!+l.nodeType};function _e(){this.expando=d.expando+_e.uid++}_e.uid=1,_e.prototype={cache:function(l){var u=l[this.expando];return u||(u={},ge(l)&&(l.nodeType?l[this.expando]=u:Object.defineProperty(l,this.expando,{value:u,configurable:!0}))),u},set:function(l,u,v){var _,T=this.cache(l);if(typeof u=="string")T[J(u)]=v;else for(_ in u)T[J(_)]=u[_];return T},get:function(l,u){return u===void 0?this.cache(l):l[this.expando]&&l[this.expando][J(u)]},access:function(l,u,v){return u===void 0||u&&typeof u=="string"&&v===void 0?this.get(l,u):(this.set(l,u,v),v!==void 0?v:u)},remove:function(l,u){var v,_=l[this.expando];if(_!==void 0){if(u!==void 0)for(Array.isArray(u)?u=u.map(J):(u=J(u),u=u in _?[u]:u.match(rt)||[]),v=u.length;v--;)delete _[u[v]];(u===void 0||d.isEmptyObject(_))&&(l.nodeType?l[this.expando]=void 0:delete l[this.expando])}},hasData:function(l){var u=l[this.expando];return u!==void 0&&!d.isEmptyObject(u)}};var Q=new _e,Fe=new _e,Le=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,De=/[A-Z]/g;function ct(l){return l==="true"?!0:l==="false"?!1:l==="null"?null:l===+l+""?+l:Le.test(l)?JSON.parse(l):l}function we(l,u,v){var _;if(v===void 0&&l.nodeType===1)if(_="data-"+u.replace(De,"-$&").toLowerCase(),v=l.getAttribute(_),typeof v=="string"){try{v=ct(v)}catch{}Fe.set(l,u,v)}else v=void 0;return v}d.extend({hasData:function(l){return Fe.hasData(l)||Q.hasData(l)},data:function(l,u,v){return Fe.access(l,u,v)},removeData:function(l,u){Fe.remove(l,u)},_data:function(l,u,v){return Q.access(l,u,v)},_removeData:function(l,u){Q.remove(l,u)}}),d.fn.extend({data:function(l,u){var v,_,T,b=this[0],C=b&&b.attributes;if(l===void 0){if(this.length&&(T=Fe.get(b),b.nodeType===1&&!Q.get(b,"hasDataAttrs"))){for(v=C.length;v--;)C[v]&&(_=C[v].name,_.indexOf("data-")===0&&(_=J(_.slice(5)),we(b,_,T[_])));Q.set(b,"hasDataAttrs",!0)}return T}return typeof l=="object"?this.each(function(){Fe.set(this,l)}):Ke(this,function(F){var k;if(b&&F===void 0)return k=Fe.get(b,l),k!==void 0||(k=we(b,l),k!==void 0)?k:void 0;this.each(function(){Fe.set(this,l,F)})},null,u,arguments.length>1,null,!0)},removeData:function(l){return this.each(function(){Fe.remove(this,l)})}}),d.extend({queue:function(l,u,v){var _;if(l)return u=(u||"fx")+"queue",_=Q.get(l,u),v&&(!_||Array.isArray(v)?_=Q.access(l,u,d.makeArray(v)):_.push(v)),_||[]},dequeue:function(l,u){u=u||"fx";var v=d.queue(l,u),_=v.length,T=v.shift(),b=d._queueHooks(l,u),C=function(){d.dequeue(l,u)};T==="inprogress"&&(T=v.shift(),_--),T&&(u==="fx"&&v.unshift("inprogress"),delete b.stop,T.call(l,C,b)),!_&&b&&b.empty.fire()},_queueHooks:function(l,u){var v=u+"queueHooks";return Q.get(l,v)||Q.access(l,v,{empty:d.Callbacks("once memory").add(function(){Q.remove(l,[u+"queue",v])})})}}),d.fn.extend({queue:function(l,u){var v=2;return typeof l!="string"&&(u=l,l="fx",v--),arguments.length<v?d.queue(this[0],l):u===void 0?this:this.each(function(){var _=d.queue(this,l,u);d._queueHooks(this,l),l==="fx"&&_[0]!=="inprogress"&&d.dequeue(this,l)})},dequeue:function(l){return this.each(function(){d.dequeue(this,l)})},clearQueue:function(l){return this.queue(l||"fx",[])},promise:function(l,u){var v,_=1,T=d.Deferred(),b=this,C=this.length,F=function(){--_||T.resolveWith(b,[b])};for(typeof l!="string"&&(u=l,l=void 0),l=l||"fx";C--;)v=Q.get(b[C],l+"queueHooks"),v&&v.empty&&(_++,v.empty.add(F));return F(),T.promise(u)}});var Ge=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,at=new RegExp("^(?:([+-])=|)("+Ge+")([a-z%]*)$","i"),$e=["Top","Right","Bottom","Left"],Re=g.documentElement,tt=function(l){return d.contains(l.ownerDocument,l)},gt={composed:!0};Re.getRootNode&&(tt=function(l){return d.contains(l.ownerDocument,l)||l.getRootNode(gt)===l.ownerDocument});var Wt=function(l,u){return l=u||l,l.style.display==="none"||l.style.display===""&&tt(l)&&d.css(l,"display")==="none"};function V(l,u,v,_){var T,b,C=20,F=_?function(){return _.cur()}:function(){return d.css(l,u,"")},k=F(),j=v&&v[3]||(d.cssNumber[u]?"":"px"),re=l.nodeType&&(d.cssNumber[u]||j!=="px"&&+k)&&at.exec(d.css(l,u));if(re&&re[3]!==j){for(k=k/2,j=j||re[3],re=+k||1;C--;)d.style(l,u,re+j),(1-b)*(1-(b=F()/k||.5))<=0&&(C=0),re=re/b;re=re*2,d.style(l,u,re+j),v=v||[]}return v&&(re=+re||+k||0,T=v[1]?re+(v[1]+1)*v[2]:+v[2],_&&(_.unit=j,_.start=re,_.end=T)),T}var Ie={};function ce(l){var u,v=l.ownerDocument,_=l.nodeName,T=Ie[_];return T||(u=v.body.appendChild(v.createElement(_)),T=d.css(u,"display"),u.parentNode.removeChild(u),T==="none"&&(T="block"),Ie[_]=T,T)}function he(l,u){for(var v,_,T=[],b=0,C=l.length;b<C;b++)_=l[b],_.style&&(v=_.style.display,u?(v==="none"&&(T[b]=Q.get(_,"display")||null,T[b]||(_.style.display="")),_.style.display===""&&Wt(_)&&(T[b]=ce(_))):v!=="none"&&(T[b]="none",Q.set(_,"display",v)));for(b=0;b<C;b++)T[b]!=null&&(l[b].style.display=T[b]);return l}d.fn.extend({show:function(){return he(this,!0)},hide:function(){return he(this)},toggle:function(l){return typeof l=="boolean"?l?this.show():this.hide():this.each(function(){Wt(this)?d(this).show():d(this).hide()})}});var Ee=/^(?:checkbox|radio)$/i,Je=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Et=/^$|^module$|\/(?:java|ecma)script/i;(function(){var l=g.createDocumentFragment(),u=l.appendChild(g.createElement("div")),v=g.createElement("input");v.setAttribute("type","radio"),v.setAttribute("checked","checked"),v.setAttribute("name","t"),u.appendChild(v),E.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,u.innerHTML="<textarea>x</textarea>",E.noCloneChecked=!!u.cloneNode(!0).lastChild.defaultValue,u.innerHTML="<option></option>",E.option=!!u.lastChild})();var Mt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Mt.tbody=Mt.tfoot=Mt.colgroup=Mt.caption=Mt.thead,Mt.th=Mt.td,E.option||(Mt.optgroup=Mt.option=[1,"<select multiple='multiple'>","</select>"]);function bt(l,u){var v;return typeof l.getElementsByTagName<"u"?v=l.getElementsByTagName(u||"*"):typeof l.querySelectorAll<"u"?v=l.querySelectorAll(u||"*"):v=[],u===void 0||u&&D(l,u)?d.merge([l],v):v}function Pt(l,u){for(var v=0,_=l.length;v<_;v++)Q.set(l[v],"globalEval",!u||Q.get(u[v],"globalEval"))}var xi=/<|&#?\w+;/;function li(l,u,v,_,T){for(var b,C,F,k,j,re,le=u.createDocumentFragment(),K=[],ye=0,nt=l.length;ye<nt;ye++)if(b=l[ye],b||b===0)if(A(b)==="object")d.merge(K,b.nodeType?[b]:b);else if(!xi.test(b))K.push(u.createTextNode(b));else{for(C=C||le.appendChild(u.createElement("div")),F=(Je.exec(b)||["",""])[1].toLowerCase(),k=Mt[F]||Mt._default,C.innerHTML=k[1]+d.htmlPrefilter(b)+k[2],re=k[0];re--;)C=C.lastChild;d.merge(K,C.childNodes),C=le.firstChild,C.textContent=""}for(le.textContent="",ye=0;b=K[ye++];){if(_&&d.inArray(b,_)>-1){T&&T.push(b);continue}if(j=tt(b),C=bt(le.appendChild(b),"script"),j&&Pt(C),v)for(re=0;b=C[re++];)Et.test(b.type||"")&&v.push(b)}return le}var Yi=/^([^.]*)(?:\.(.+)|)/;function Ki(){return!0}function xr(){return!1}function fo(l,u,v,_,T,b){var C,F;if(typeof u=="object"){typeof v!="string"&&(_=_||v,v=void 0);for(F in u)fo(l,F,v,_,u[F],b);return l}if(_==null&&T==null?(T=v,_=v=void 0):T==null&&(typeof v=="string"?(T=_,_=void 0):(T=_,_=v,v=void 0)),T===!1)T=xr;else if(!T)return l;return b===1&&(C=T,T=function(k){return d().off(k),C.apply(this,arguments)},T.guid=C.guid||(C.guid=d.guid++)),l.each(function(){d.event.add(this,u,T,_,v)})}d.event={global:{},add:function(l,u,v,_,T){var b,C,F,k,j,re,le,K,ye,nt,wt,ft=Q.get(l);if(ge(l))for(v.handler&&(b=v,v=b.handler,T=b.selector),T&&d.find.matchesSelector(Re,T),v.guid||(v.guid=d.guid++),(k=ft.events)||(k=ft.events=Object.create(null)),(C=ft.handle)||(C=ft.handle=function(An){return typeof d<"u"&&d.event.triggered!==An.type?d.event.dispatch.apply(l,arguments):void 0}),u=(u||"").match(rt)||[""],j=u.length;j--;)F=Yi.exec(u[j])||[],ye=wt=F[1],nt=(F[2]||"").split(".").sort(),ye&&(le=d.event.special[ye]||{},ye=(T?le.delegateType:le.bindType)||ye,le=d.event.special[ye]||{},re=d.extend({type:ye,origType:wt,data:_,handler:v,guid:v.guid,selector:T,needsContext:T&&d.expr.match.needsContext.test(T),namespace:nt.join(".")},b),(K=k[ye])||(K=k[ye]=[],K.delegateCount=0,(!le.setup||le.setup.call(l,_,nt,C)===!1)&&l.addEventListener&&l.addEventListener(ye,C)),le.add&&(le.add.call(l,re),re.handler.guid||(re.handler.guid=v.guid)),T?K.splice(K.delegateCount++,0,re):K.push(re),d.event.global[ye]=!0)},remove:function(l,u,v,_,T){var b,C,F,k,j,re,le,K,ye,nt,wt,ft=Q.hasData(l)&&Q.get(l);if(!(!ft||!(k=ft.events))){for(u=(u||"").match(rt)||[""],j=u.length;j--;){if(F=Yi.exec(u[j])||[],ye=wt=F[1],nt=(F[2]||"").split(".").sort(),!ye){for(ye in k)d.event.remove(l,ye+u[j],v,_,!0);continue}for(le=d.event.special[ye]||{},ye=(_?le.delegateType:le.bindType)||ye,K=k[ye]||[],F=F[2]&&new RegExp("(^|\\.)"+nt.join("\\.(?:.*\\.|)")+"(\\.|$)"),C=b=K.length;b--;)re=K[b],(T||wt===re.origType)&&(!v||v.guid===re.guid)&&(!F||F.test(re.namespace))&&(!_||_===re.selector||_==="**"&&re.selector)&&(K.splice(b,1),re.selector&&K.delegateCount--,le.remove&&le.remove.call(l,re));C&&!K.length&&((!le.teardown||le.teardown.call(l,nt,ft.handle)===!1)&&d.removeEvent(l,ye,ft.handle),delete k[ye])}d.isEmptyObject(k)&&Q.remove(l,"handle events")}},dispatch:function(l){var u,v,_,T,b,C,F=new Array(arguments.length),k=d.event.fix(l),j=(Q.get(this,"events")||Object.create(null))[k.type]||[],re=d.event.special[k.type]||{};for(F[0]=k,u=1;u<arguments.length;u++)F[u]=arguments[u];if(k.delegateTarget=this,!(re.preDispatch&&re.preDispatch.call(this,k)===!1)){for(C=d.event.handlers.call(this,k,j),u=0;(T=C[u++])&&!k.isPropagationStopped();)for(k.currentTarget=T.elem,v=0;(b=T.handlers[v++])&&!k.isImmediatePropagationStopped();)(!k.rnamespace||b.namespace===!1||k.rnamespace.test(b.namespace))&&(k.handleObj=b,k.data=b.data,_=((d.event.special[b.origType]||{}).handle||b.handler).apply(T.elem,F),_!==void 0&&(k.result=_)===!1&&(k.preventDefault(),k.stopPropagation()));return re.postDispatch&&re.postDispatch.call(this,k),k.result}},handlers:function(l,u){var v,_,T,b,C,F=[],k=u.delegateCount,j=l.target;if(k&&j.nodeType&&!(l.type==="click"&&l.button>=1)){for(;j!==this;j=j.parentNode||this)if(j.nodeType===1&&!(l.type==="click"&&j.disabled===!0)){for(b=[],C={},v=0;v<k;v++)_=u[v],T=_.selector+" ",C[T]===void 0&&(C[T]=_.needsContext?d(T,this).index(j)>-1:d.find(T,this,null,[j]).length),C[T]&&b.push(_);b.length&&F.push({elem:j,handlers:b})}}return j=this,k<u.length&&F.push({elem:j,handlers:u.slice(k)}),F},addProp:function(l,u){Object.defineProperty(d.Event.prototype,l,{enumerable:!0,configurable:!0,get:S(u)?function(){if(this.originalEvent)return u(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[l]},set:function(v){Object.defineProperty(this,l,{enumerable:!0,configurable:!0,writable:!0,value:v})}})},fix:function(l){return l[d.expando]?l:new d.Event(l)},special:{load:{noBubble:!0},click:{setup:function(l){var u=this||l;return Ee.test(u.type)&&u.click&&D(u,"input")&&Sr(u,"click",!0),!1},trigger:function(l){var u=this||l;return Ee.test(u.type)&&u.click&&D(u,"input")&&Sr(u,"click"),!0},_default:function(l){var u=l.target;return Ee.test(u.type)&&u.click&&D(u,"input")&&Q.get(u,"click")||D(u,"a")}},beforeunload:{postDispatch:function(l){l.result!==void 0&&l.originalEvent&&(l.originalEvent.returnValue=l.result)}}}};function Sr(l,u,v){if(!v){Q.get(l,u)===void 0&&d.event.add(l,u,Ki);return}Q.set(l,u,!1),d.event.add(l,u,{namespace:!1,handler:function(_){var T,b=Q.get(this,u);if(_.isTrigger&1&&this[u]){if(b)(d.event.special[u]||{}).delegateType&&_.stopPropagation();else if(b=s.call(arguments),Q.set(this,u,b),this[u](),T=Q.get(this,u),Q.set(this,u,!1),b!==T)return _.stopImmediatePropagation(),_.preventDefault(),T}else b&&(Q.set(this,u,d.event.trigger(b[0],b.slice(1),this)),_.stopPropagation(),_.isImmediatePropagationStopped=Ki)}})}d.removeEvent=function(l,u,v){l.removeEventListener&&l.removeEventListener(u,v)},d.Event=function(l,u){if(!(this instanceof d.Event))return new d.Event(l,u);l&&l.type?(this.originalEvent=l,this.type=l.type,this.isDefaultPrevented=l.defaultPrevented||l.defaultPrevented===void 0&&l.returnValue===!1?Ki:xr,this.target=l.target&&l.target.nodeType===3?l.target.parentNode:l.target,this.currentTarget=l.currentTarget,this.relatedTarget=l.relatedTarget):this.type=l,u&&d.extend(this,u),this.timeStamp=l&&l.timeStamp||Date.now(),this[d.expando]=!0},d.Event.prototype={constructor:d.Event,isDefaultPrevented:xr,isPropagationStopped:xr,isImmediatePropagationStopped:xr,isSimulated:!1,preventDefault:function(){var l=this.originalEvent;this.isDefaultPrevented=Ki,l&&!this.isSimulated&&l.preventDefault()},stopPropagation:function(){var l=this.originalEvent;this.isPropagationStopped=Ki,l&&!this.isSimulated&&l.stopPropagation()},stopImmediatePropagation:function(){var l=this.originalEvent;this.isImmediatePropagationStopped=Ki,l&&!this.isSimulated&&l.stopImmediatePropagation(),this.stopPropagation()}},d.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},d.event.addProp),d.each({focus:"focusin",blur:"focusout"},function(l,u){function v(_){if(g.documentMode){var T=Q.get(this,"handle"),b=d.event.fix(_);b.type=_.type==="focusin"?"focus":"blur",b.isSimulated=!0,T(_),b.target===b.currentTarget&&T(b)}else d.event.simulate(u,_.target,d.event.fix(_))}d.event.special[l]={setup:function(){var _;if(Sr(this,l,!0),g.documentMode)_=Q.get(this,u),_||this.addEventListener(u,v),Q.set(this,u,(_||0)+1);else return!1},trigger:function(){return Sr(this,l),!0},teardown:function(){var _;if(g.documentMode)_=Q.get(this,u)-1,_?Q.set(this,u,_):(this.removeEventListener(u,v),Q.remove(this,u));else return!1},_default:function(_){return Q.get(_.target,l)},delegateType:u},d.event.special[u]={setup:function(){var _=this.ownerDocument||this.document||this,T=g.documentMode?this:_,b=Q.get(T,u);b||(g.documentMode?this.addEventListener(u,v):_.addEventListener(l,v,!0)),Q.set(T,u,(b||0)+1)},teardown:function(){var _=this.ownerDocument||this.document||this,T=g.documentMode?this:_,b=Q.get(T,u)-1;b?Q.set(T,u,b):(g.documentMode?this.removeEventListener(u,v):_.removeEventListener(l,v,!0),Q.remove(T,u))}}}),d.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(l,u){d.event.special[l]={delegateType:u,bindType:u,handle:function(v){var _,T=this,b=v.relatedTarget,C=v.handleObj;return(!b||b!==T&&!d.contains(T,b))&&(v.type=C.origType,_=C.handler.apply(this,arguments),v.type=u),_}}}),d.fn.extend({on:function(l,u,v,_){return fo(this,l,u,v,_)},one:function(l,u,v,_){return fo(this,l,u,v,_,1)},off:function(l,u,v){var _,T;if(l&&l.preventDefault&&l.handleObj)return _=l.handleObj,d(l.delegateTarget).off(_.namespace?_.origType+"."+_.namespace:_.origType,_.selector,_.handler),this;if(typeof l=="object"){for(T in l)this.off(T,u,l[T]);return this}return(u===!1||typeof u=="function")&&(v=u,u=void 0),v===!1&&(v=xr),this.each(function(){d.event.remove(this,l,v,u)})}});var Xl=/<script|<style|<link/i,ho=/checked\s*(?:[^=]|=\s*.checked.)/i,ql=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Ta(l,u){return D(l,"table")&&D(u.nodeType!==11?u:u.firstChild,"tr")&&d(l).children("tbody")[0]||l}function jf(l){return l.type=(l.getAttribute("type")!==null)+"/"+l.type,l}function $f(l){return(l.type||"").slice(0,5)==="true/"?l.type=l.type.slice(5):l.removeAttribute("type"),l}function Yl(l,u){var v,_,T,b,C,F,k;if(u.nodeType===1){if(Q.hasData(l)&&(b=Q.get(l),k=b.events,k)){Q.remove(u,"handle events");for(T in k)for(v=0,_=k[T].length;v<_;v++)d.event.add(u,T,k[T][v])}Fe.hasData(l)&&(C=Fe.access(l),F=d.extend({},C),Fe.set(u,F))}}function L(l,u){var v=u.nodeName.toLowerCase();v==="input"&&Ee.test(l.type)?u.checked=l.checked:(v==="input"||v==="textarea")&&(u.defaultValue=l.defaultValue)}function $(l,u,v,_){u=o(u);var T,b,C,F,k,j,re=0,le=l.length,K=le-1,ye=u[0],nt=S(ye);if(nt||le>1&&typeof ye=="string"&&!E.checkClone&&ho.test(ye))return l.each(function(wt){var ft=l.eq(wt);nt&&(u[0]=ye.call(this,wt,ft.html())),$(ft,u,v,_)});if(le&&(T=li(u,l[0].ownerDocument,!1,l,_),b=T.firstChild,T.childNodes.length===1&&(T=b),b||_)){for(C=d.map(bt(T,"script"),jf),F=C.length;re<le;re++)k=T,re!==K&&(k=d.clone(k,!0,!0),F&&d.merge(C,bt(k,"script"))),v.call(l[re],k,re);if(F)for(j=C[C.length-1].ownerDocument,d.map(C,$f),re=0;re<F;re++)k=C[re],Et.test(k.type||"")&&!Q.access(k,"globalEval")&&d.contains(j,k)&&(k.src&&(k.type||"").toLowerCase()!=="module"?d._evalUrl&&!k.noModule&&d._evalUrl(k.src,{nonce:k.nonce||k.getAttribute("nonce")},j):w(k.textContent.replace(ql,""),k,j))}return l}function Z(l,u,v){for(var _,T=u?d.filter(u,l):l,b=0;(_=T[b])!=null;b++)!v&&_.nodeType===1&&d.cleanData(bt(_)),_.parentNode&&(v&&tt(_)&&Pt(bt(_,"script")),_.parentNode.removeChild(_));return l}d.extend({htmlPrefilter:function(l){return l},clone:function(l,u,v){var _,T,b,C,F=l.cloneNode(!0),k=tt(l);if(!E.noCloneChecked&&(l.nodeType===1||l.nodeType===11)&&!d.isXMLDoc(l))for(C=bt(F),b=bt(l),_=0,T=b.length;_<T;_++)L(b[_],C[_]);if(u)if(v)for(b=b||bt(l),C=C||bt(F),_=0,T=b.length;_<T;_++)Yl(b[_],C[_]);else Yl(l,F);return C=bt(F,"script"),C.length>0&&Pt(C,!k&&bt(l,"script")),F},cleanData:function(l){for(var u,v,_,T=d.event.special,b=0;(v=l[b])!==void 0;b++)if(ge(v)){if(u=v[Q.expando]){if(u.events)for(_ in u.events)T[_]?d.event.remove(v,_):d.removeEvent(v,_,u.handle);v[Q.expando]=void 0}v[Fe.expando]&&(v[Fe.expando]=void 0)}}}),d.fn.extend({detach:function(l){return Z(this,l,!0)},remove:function(l){return Z(this,l)},text:function(l){return Ke(this,function(u){return u===void 0?d.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=u)})},null,l,arguments.length)},append:function(){return $(this,arguments,function(l){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=Ta(this,l);u.appendChild(l)}})},prepend:function(){return $(this,arguments,function(l){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=Ta(this,l);u.insertBefore(l,u.firstChild)}})},before:function(){return $(this,arguments,function(l){this.parentNode&&this.parentNode.insertBefore(l,this)})},after:function(){return $(this,arguments,function(l){this.parentNode&&this.parentNode.insertBefore(l,this.nextSibling)})},empty:function(){for(var l,u=0;(l=this[u])!=null;u++)l.nodeType===1&&(d.cleanData(bt(l,!1)),l.textContent="");return this},clone:function(l,u){return l=l??!1,u=u??l,this.map(function(){return d.clone(this,l,u)})},html:function(l){return Ke(this,function(u){var v=this[0]||{},_=0,T=this.length;if(u===void 0&&v.nodeType===1)return v.innerHTML;if(typeof u=="string"&&!Xl.test(u)&&!Mt[(Je.exec(u)||["",""])[1].toLowerCase()]){u=d.htmlPrefilter(u);try{for(;_<T;_++)v=this[_]||{},v.nodeType===1&&(d.cleanData(bt(v,!1)),v.innerHTML=u);v=0}catch{}}v&&this.empty().append(u)},null,l,arguments.length)},replaceWith:function(){var l=[];return $(this,arguments,function(u){var v=this.parentNode;d.inArray(this,l)<0&&(d.cleanData(bt(this)),v&&v.replaceChild(u,this))},l)}}),d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(l,u){d.fn[l]=function(v){for(var _,T=[],b=d(v),C=b.length-1,F=0;F<=C;F++)_=F===C?this:this.clone(!0),d(b[F])[u](_),a.apply(T,_.get());return this.pushStack(T)}});var ee=new RegExp("^("+Ge+")(?!px)[a-z%]+$","i"),X=/^--/,Me=function(l){var u=l.ownerDocument.defaultView;return(!u||!u.opener)&&(u=e),u.getComputedStyle(l)},ke=function(l,u,v){var _,T,b={};for(T in u)b[T]=l.style[T],l.style[T]=u[T];_=v.call(l);for(T in u)l.style[T]=b[T];return _},Be=new RegExp($e.join("|"),"i");(function(){function l(){if(j){k.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",j.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Re.appendChild(k).appendChild(j);var re=e.getComputedStyle(j);v=re.top!=="1%",F=u(re.marginLeft)===12,j.style.right="60%",b=u(re.right)===36,_=u(re.width)===36,j.style.position="absolute",T=u(j.offsetWidth/3)===12,Re.removeChild(k),j=null}}function u(re){return Math.round(parseFloat(re))}var v,_,T,b,C,F,k=g.createElement("div"),j=g.createElement("div");j.style&&(j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",E.clearCloneStyle=j.style.backgroundClip==="content-box",d.extend(E,{boxSizingReliable:function(){return l(),_},pixelBoxStyles:function(){return l(),b},pixelPosition:function(){return l(),v},reliableMarginLeft:function(){return l(),F},scrollboxSize:function(){return l(),T},reliableTrDimensions:function(){var re,le,K,ye;return C==null&&(re=g.createElement("table"),le=g.createElement("tr"),K=g.createElement("div"),re.style.cssText="position:absolute;left:-11111px;border-collapse:separate",le.style.cssText="box-sizing:content-box;border:1px solid",le.style.height="1px",K.style.height="9px",K.style.display="block",Re.appendChild(re).appendChild(le).appendChild(K),ye=e.getComputedStyle(le),C=parseInt(ye.height,10)+parseInt(ye.borderTopWidth,10)+parseInt(ye.borderBottomWidth,10)===le.offsetHeight,Re.removeChild(re)),C}}))})();function He(l,u,v){var _,T,b,C,F=X.test(u),k=l.style;return v=v||Me(l),v&&(C=v.getPropertyValue(u)||v[u],F&&C&&(C=C.replace(fe,"$1")||void 0),C===""&&!tt(l)&&(C=d.style(l,u)),!E.pixelBoxStyles()&&ee.test(C)&&Be.test(u)&&(_=k.width,T=k.minWidth,b=k.maxWidth,k.minWidth=k.maxWidth=k.width=C,C=v.width,k.width=_,k.minWidth=T,k.maxWidth=b)),C!==void 0?C+"":C}function Qe(l,u){return{get:function(){if(l()){delete this.get;return}return(this.get=u).apply(this,arguments)}}}var Ze=["Webkit","Moz","ms"],Xe=g.createElement("div").style,Ct={};function Qt(l){for(var u=l[0].toUpperCase()+l.slice(1),v=Ze.length;v--;)if(l=Ze[v]+u,l in Xe)return l}function jt(l){var u=d.cssProps[l]||Ct[l];return u||(l in Xe?l:Ct[l]=Qt(l)||l)}var Vn=/^(none|table(?!-c[ea]).+)/,Dt={position:"absolute",visibility:"hidden",display:"block"},je={letterSpacing:"0",fontWeight:"400"};function En(l,u,v){var _=at.exec(u);return _?Math.max(0,_[2]-(v||0))+(_[3]||"px"):u}function Lt(l,u,v,_,T,b){var C=u==="width"?1:0,F=0,k=0,j=0;if(v===(_?"border":"content"))return 0;for(;C<4;C+=2)v==="margin"&&(j+=d.css(l,v+$e[C],!0,T)),_?(v==="content"&&(k-=d.css(l,"padding"+$e[C],!0,T)),v!=="margin"&&(k-=d.css(l,"border"+$e[C]+"Width",!0,T))):(k+=d.css(l,"padding"+$e[C],!0,T),v!=="padding"?k+=d.css(l,"border"+$e[C]+"Width",!0,T):F+=d.css(l,"border"+$e[C]+"Width",!0,T));return!_&&b>=0&&(k+=Math.max(0,Math.ceil(l["offset"+u[0].toUpperCase()+u.slice(1)]-b-k-F-.5))||0),k+j}function Si(l,u,v){var _=Me(l),T=!E.boxSizingReliable()||v,b=T&&d.css(l,"boxSizing",!1,_)==="border-box",C=b,F=He(l,u,_),k="offset"+u[0].toUpperCase()+u.slice(1);if(ee.test(F)){if(!v)return F;F="auto"}return(!E.boxSizingReliable()&&b||!E.reliableTrDimensions()&&D(l,"tr")||F==="auto"||!parseFloat(F)&&d.css(l,"display",!1,_)==="inline")&&l.getClientRects().length&&(b=d.css(l,"boxSizing",!1,_)==="border-box",C=k in l,C&&(F=l[k])),F=parseFloat(F)||0,F+Lt(l,u,v||(b?"border":"content"),C,_,F)+"px"}d.extend({cssHooks:{opacity:{get:function(l,u){if(u){var v=He(l,"opacity");return v===""?"1":v}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(l,u,v,_){if(!(!l||l.nodeType===3||l.nodeType===8||!l.style)){var T,b,C,F=J(u),k=X.test(u),j=l.style;if(k||(u=jt(F)),C=d.cssHooks[u]||d.cssHooks[F],v!==void 0){if(b=typeof v,b==="string"&&(T=at.exec(v))&&T[1]&&(v=V(l,u,T),b="number"),v==null||v!==v)return;b==="number"&&!k&&(v+=T&&T[3]||(d.cssNumber[F]?"":"px")),!E.clearCloneStyle&&v===""&&u.indexOf("background")===0&&(j[u]="inherit"),(!C||!("set"in C)||(v=C.set(l,v,_))!==void 0)&&(k?j.setProperty(u,v):j[u]=v)}else return C&&"get"in C&&(T=C.get(l,!1,_))!==void 0?T:j[u]}},css:function(l,u,v,_){var T,b,C,F=J(u),k=X.test(u);return k||(u=jt(F)),C=d.cssHooks[u]||d.cssHooks[F],C&&"get"in C&&(T=C.get(l,!0,v)),T===void 0&&(T=He(l,u,_)),T==="normal"&&u in je&&(T=je[u]),v===""||v?(b=parseFloat(T),v===!0||isFinite(b)?b||0:T):T}}),d.each(["height","width"],function(l,u){d.cssHooks[u]={get:function(v,_,T){if(_)return Vn.test(d.css(v,"display"))&&(!v.getClientRects().length||!v.getBoundingClientRect().width)?ke(v,Dt,function(){return Si(v,u,T)}):Si(v,u,T)},set:function(v,_,T){var b,C=Me(v),F=!E.scrollboxSize()&&C.position==="absolute",k=F||T,j=k&&d.css(v,"boxSizing",!1,C)==="border-box",re=T?Lt(v,u,T,j,C):0;return j&&F&&(re-=Math.ceil(v["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(C[u])-Lt(v,u,"border",!1,C)-.5)),re&&(b=at.exec(_))&&(b[3]||"px")!=="px"&&(v.style[u]=_,_=d.css(v,u)),En(v,_,re)}}}),d.cssHooks.marginLeft=Qe(E.reliableMarginLeft,function(l,u){if(u)return(parseFloat(He(l,"marginLeft"))||l.getBoundingClientRect().left-ke(l,{marginLeft:0},function(){return l.getBoundingClientRect().left}))+"px"}),d.each({margin:"",padding:"",border:"Width"},function(l,u){d.cssHooks[l+u]={expand:function(v){for(var _=0,T={},b=typeof v=="string"?v.split(" "):[v];_<4;_++)T[l+$e[_]+u]=b[_]||b[_-2]||b[0];return T}},l!=="margin"&&(d.cssHooks[l+u].set=En)}),d.fn.extend({css:function(l,u){return Ke(this,function(v,_,T){var b,C,F={},k=0;if(Array.isArray(_)){for(b=Me(v),C=_.length;k<C;k++)F[_[k]]=d.css(v,_[k],!1,b);return F}return T!==void 0?d.style(v,_,T):d.css(v,_)},l,u,arguments.length>1)}});function mn(l,u,v,_,T){return new mn.prototype.init(l,u,v,_,T)}d.Tween=mn,mn.prototype={constructor:mn,init:function(l,u,v,_,T,b){this.elem=l,this.prop=v,this.easing=T||d.easing._default,this.options=u,this.start=this.now=this.cur(),this.end=_,this.unit=b||(d.cssNumber[v]?"":"px")},cur:function(){var l=mn.propHooks[this.prop];return l&&l.get?l.get(this):mn.propHooks._default.get(this)},run:function(l){var u,v=mn.propHooks[this.prop];return this.options.duration?this.pos=u=d.easing[this.easing](l,this.options.duration*l,0,1,this.options.duration):this.pos=u=l,this.now=(this.end-this.start)*u+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),v&&v.set?v.set(this):mn.propHooks._default.set(this),this}},mn.prototype.init.prototype=mn.prototype,mn.propHooks={_default:{get:function(l){var u;return l.elem.nodeType!==1||l.elem[l.prop]!=null&&l.elem.style[l.prop]==null?l.elem[l.prop]:(u=d.css(l.elem,l.prop,""),!u||u==="auto"?0:u)},set:function(l){d.fx.step[l.prop]?d.fx.step[l.prop](l):l.elem.nodeType===1&&(d.cssHooks[l.prop]||l.elem.style[jt(l.prop)]!=null)?d.style(l.elem,l.prop,l.now+l.unit):l.elem[l.prop]=l.now}}},mn.propHooks.scrollTop=mn.propHooks.scrollLeft={set:function(l){l.elem.nodeType&&l.elem.parentNode&&(l.elem[l.prop]=l.now)}},d.easing={linear:function(l){return l},swing:function(l){return .5-Math.cos(l*Math.PI)/2},_default:"swing"},d.fx=mn.prototype.init,d.fx.step={};var Kn,Gr,fn=/^(?:toggle|show|hide)$/,Qi=/queueHooks$/;function Ps(){Gr&&(g.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Ps):e.setTimeout(Ps,d.fx.interval),d.fx.tick())}function Gn(){return e.setTimeout(function(){Kn=void 0}),Kn=Date.now()}function Wr(l,u){var v,_=0,T={height:l};for(u=u?1:0;_<4;_+=2-u)v=$e[_],T["margin"+v]=T["padding"+v]=l;return u&&(T.opacity=T.width=l),T}function Kl(l,u,v){for(var _,T=(ki.tweeners[u]||[]).concat(ki.tweeners["*"]),b=0,C=T.length;b<C;b++)if(_=T[b].call(v,u,l))return _}function Ql(l,u,v){var _,T,b,C,F,k,j,re,le="width"in u||"height"in u,K=this,ye={},nt=l.style,wt=l.nodeType&&Wt(l),ft=Q.get(l,"fxshow");v.queue||(C=d._queueHooks(l,"fx"),C.unqueued==null&&(C.unqueued=0,F=C.empty.fire,C.empty.fire=function(){C.unqueued||F()}),C.unqueued++,K.always(function(){K.always(function(){C.unqueued--,d.queue(l,"fx").length||C.empty.fire()})}));for(_ in u)if(T=u[_],fn.test(T)){if(delete u[_],b=b||T==="toggle",T===(wt?"hide":"show"))if(T==="show"&&ft&&ft[_]!==void 0)wt=!0;else continue;ye[_]=ft&&ft[_]||d.style(l,_)}if(k=!d.isEmptyObject(u),!(!k&&d.isEmptyObject(ye))){le&&l.nodeType===1&&(v.overflow=[nt.overflow,nt.overflowX,nt.overflowY],j=ft&&ft.display,j==null&&(j=Q.get(l,"display")),re=d.css(l,"display"),re==="none"&&(j?re=j:(he([l],!0),j=l.style.display||j,re=d.css(l,"display"),he([l]))),(re==="inline"||re==="inline-block"&&j!=null)&&d.css(l,"float")==="none"&&(k||(K.done(function(){nt.display=j}),j==null&&(re=nt.display,j=re==="none"?"":re)),nt.display="inline-block")),v.overflow&&(nt.overflow="hidden",K.always(function(){nt.overflow=v.overflow[0],nt.overflowX=v.overflow[1],nt.overflowY=v.overflow[2]})),k=!1;for(_ in ye)k||(ft?"hidden"in ft&&(wt=ft.hidden):ft=Q.access(l,"fxshow",{display:j}),b&&(ft.hidden=!wt),wt&&he([l],!0),K.done(function(){wt||he([l]),Q.remove(l,"fxshow");for(_ in ye)d.style(l,_,ye[_])})),k=Kl(wt?ft[_]:0,_,K),_ in ft||(ft[_]=k.start,wt&&(k.end=k.start,k.start=0))}}function KS(l,u){var v,_,T,b,C;for(v in l)if(_=J(v),T=u[_],b=l[v],Array.isArray(b)&&(T=b[1],b=l[v]=b[0]),v!==_&&(l[_]=b,delete l[v]),C=d.cssHooks[_],C&&"expand"in C){b=C.expand(b),delete l[_];for(v in b)v in l||(l[v]=b[v],u[v]=T)}else u[_]=T}function ki(l,u,v){var _,T,b=0,C=ki.prefilters.length,F=d.Deferred().always(function(){delete k.elem}),k=function(){if(T)return!1;for(var le=Kn||Gn(),K=Math.max(0,j.startTime+j.duration-le),ye=K/j.duration||0,nt=1-ye,wt=0,ft=j.tweens.length;wt<ft;wt++)j.tweens[wt].run(nt);return F.notifyWith(l,[j,nt,K]),nt<1&&ft?K:(ft||F.notifyWith(l,[j,1,0]),F.resolveWith(l,[j]),!1)},j=F.promise({elem:l,props:d.extend({},u),opts:d.extend(!0,{specialEasing:{},easing:d.easing._default},v),originalProperties:u,originalOptions:v,startTime:Kn||Gn(),duration:v.duration,tweens:[],createTween:function(le,K){var ye=d.Tween(l,j.opts,le,K,j.opts.specialEasing[le]||j.opts.easing);return j.tweens.push(ye),ye},stop:function(le){var K=0,ye=le?j.tweens.length:0;if(T)return this;for(T=!0;K<ye;K++)j.tweens[K].run(1);return le?(F.notifyWith(l,[j,1,0]),F.resolveWith(l,[j,le])):F.rejectWith(l,[j,le]),this}}),re=j.props;for(KS(re,j.opts.specialEasing);b<C;b++)if(_=ki.prefilters[b].call(j,l,re,j.opts),_)return S(_.stop)&&(d._queueHooks(j.elem,j.opts.queue).stop=_.stop.bind(_)),_;return d.map(re,Kl,j),S(j.opts.start)&&j.opts.start.call(l,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),d.fx.timer(d.extend(k,{elem:l,anim:j,queue:j.opts.queue})),j}d.Animation=d.extend(ki,{tweeners:{"*":[function(l,u){var v=this.createTween(l,u);return V(v.elem,l,at.exec(u),v),v}]},tweener:function(l,u){S(l)?(u=l,l=["*"]):l=l.match(rt);for(var v,_=0,T=l.length;_<T;_++)v=l[_],ki.tweeners[v]=ki.tweeners[v]||[],ki.tweeners[v].unshift(u)},prefilters:[Ql],prefilter:function(l,u){u?ki.prefilters.unshift(l):ki.prefilters.push(l)}}),d.speed=function(l,u,v){var _=l&&typeof l=="object"?d.extend({},l):{complete:v||!v&&u||S(l)&&l,duration:l,easing:v&&u||u&&!S(u)&&u};return d.fx.off?_.duration=0:typeof _.duration!="number"&&(_.duration in d.fx.speeds?_.duration=d.fx.speeds[_.duration]:_.duration=d.fx.speeds._default),(_.queue==null||_.queue===!0)&&(_.queue="fx"),_.old=_.complete,_.complete=function(){S(_.old)&&_.old.call(this),_.queue&&d.dequeue(this,_.queue)},_},d.fn.extend({fadeTo:function(l,u,v,_){return this.filter(Wt).css("opacity",0).show().end().animate({opacity:u},l,v,_)},animate:function(l,u,v,_){var T=d.isEmptyObject(l),b=d.speed(u,v,_),C=function(){var F=ki(this,d.extend({},l),b);(T||Q.get(this,"finish"))&&F.stop(!0)};return C.finish=C,T||b.queue===!1?this.each(C):this.queue(b.queue,C)},stop:function(l,u,v){var _=function(T){var b=T.stop;delete T.stop,b(v)};return typeof l!="string"&&(v=u,u=l,l=void 0),u&&this.queue(l||"fx",[]),this.each(function(){var T=!0,b=l!=null&&l+"queueHooks",C=d.timers,F=Q.get(this);if(b)F[b]&&F[b].stop&&_(F[b]);else for(b in F)F[b]&&F[b].stop&&Qi.test(b)&&_(F[b]);for(b=C.length;b--;)C[b].elem===this&&(l==null||C[b].queue===l)&&(C[b].anim.stop(v),T=!1,C.splice(b,1));(T||!v)&&d.dequeue(this,l)})},finish:function(l){return l!==!1&&(l=l||"fx"),this.each(function(){var u,v=Q.get(this),_=v[l+"queue"],T=v[l+"queueHooks"],b=d.timers,C=_?_.length:0;for(v.finish=!0,d.queue(this,l,[]),T&&T.stop&&T.stop.call(this,!0),u=b.length;u--;)b[u].elem===this&&b[u].queue===l&&(b[u].anim.stop(!0),b.splice(u,1));for(u=0;u<C;u++)_[u]&&_[u].finish&&_[u].finish.call(this);delete v.finish})}}),d.each(["toggle","show","hide"],function(l,u){var v=d.fn[u];d.fn[u]=function(_,T,b){return _==null||typeof _=="boolean"?v.apply(this,arguments):this.animate(Wr(u,!0),_,T,b)}}),d.each({slideDown:Wr("show"),slideUp:Wr("hide"),slideToggle:Wr("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(l,u){d.fn[l]=function(v,_,T){return this.animate(u,v,_,T)}}),d.timers=[],d.fx.tick=function(){var l,u=0,v=d.timers;for(Kn=Date.now();u<v.length;u++)l=v[u],!l()&&v[u]===l&&v.splice(u--,1);v.length||d.fx.stop(),Kn=void 0},d.fx.timer=function(l){d.timers.push(l),d.fx.start()},d.fx.interval=13,d.fx.start=function(){Gr||(Gr=!0,Ps())},d.fx.stop=function(){Gr=null},d.fx.speeds={slow:600,fast:200,_default:400},d.fn.delay=function(l,u){return l=d.fx&&d.fx.speeds[l]||l,u=u||"fx",this.queue(u,function(v,_){var T=e.setTimeout(v,l);_.stop=function(){e.clearTimeout(T)}})},function(){var l=g.createElement("input"),u=g.createElement("select"),v=u.appendChild(g.createElement("option"));l.type="checkbox",E.checkOn=l.value!=="",E.optSelected=v.selected,l=g.createElement("input"),l.value="t",l.type="radio",E.radioValue=l.value==="t"}();var Xm,ba=d.expr.attrHandle;d.fn.extend({attr:function(l,u){return Ke(this,d.attr,l,u,arguments.length>1)},removeAttr:function(l){return this.each(function(){d.removeAttr(this,l)})}}),d.extend({attr:function(l,u,v){var _,T,b=l.nodeType;if(!(b===3||b===8||b===2)){if(typeof l.getAttribute>"u")return d.prop(l,u,v);if((b!==1||!d.isXMLDoc(l))&&(T=d.attrHooks[u.toLowerCase()]||(d.expr.match.bool.test(u)?Xm:void 0)),v!==void 0){if(v===null){d.removeAttr(l,u);return}return T&&"set"in T&&(_=T.set(l,v,u))!==void 0?_:(l.setAttribute(u,v+""),v)}return T&&"get"in T&&(_=T.get(l,u))!==null?_:(_=d.find.attr(l,u),_??void 0)}},attrHooks:{type:{set:function(l,u){if(!E.radioValue&&u==="radio"&&D(l,"input")){var v=l.value;return l.setAttribute("type",u),v&&(l.value=v),u}}}},removeAttr:function(l,u){var v,_=0,T=u&&u.match(rt);if(T&&l.nodeType===1)for(;v=T[_++];)l.removeAttribute(v)}}),Xm={set:function(l,u,v){return u===!1?d.removeAttr(l,v):l.setAttribute(v,v),v}},d.each(d.expr.match.bool.source.match(/\w+/g),function(l,u){var v=ba[u]||d.find.attr;ba[u]=function(_,T,b){var C,F,k=T.toLowerCase();return b||(F=ba[k],ba[k]=C,C=v(_,T,b)!=null?k:null,ba[k]=F),C}});var QS=/^(?:input|select|textarea|button)$/i,ZS=/^(?:a|area)$/i;d.fn.extend({prop:function(l,u){return Ke(this,d.prop,l,u,arguments.length>1)},removeProp:function(l){return this.each(function(){delete this[d.propFix[l]||l]})}}),d.extend({prop:function(l,u,v){var _,T,b=l.nodeType;if(!(b===3||b===8||b===2))return(b!==1||!d.isXMLDoc(l))&&(u=d.propFix[u]||u,T=d.propHooks[u]),v!==void 0?T&&"set"in T&&(_=T.set(l,v,u))!==void 0?_:l[u]=v:T&&"get"in T&&(_=T.get(l,u))!==null?_:l[u]},propHooks:{tabIndex:{get:function(l){var u=d.find.attr(l,"tabindex");return u?parseInt(u,10):QS.test(l.nodeName)||ZS.test(l.nodeName)&&l.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),E.optSelected||(d.propHooks.selected={get:function(l){var u=l.parentNode;return u&&u.parentNode&&u.parentNode.selectedIndex,null},set:function(l){var u=l.parentNode;u&&(u.selectedIndex,u.parentNode&&u.parentNode.selectedIndex)}}),d.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){d.propFix[this.toLowerCase()]=this});function Ls(l){var u=l.match(rt)||[];return u.join(" ")}function Ds(l){return l.getAttribute&&l.getAttribute("class")||""}function Xf(l){return Array.isArray(l)?l:typeof l=="string"?l.match(rt)||[]:[]}d.fn.extend({addClass:function(l){var u,v,_,T,b,C;return S(l)?this.each(function(F){d(this).addClass(l.call(this,F,Ds(this)))}):(u=Xf(l),u.length?this.each(function(){if(_=Ds(this),v=this.nodeType===1&&" "+Ls(_)+" ",v){for(b=0;b<u.length;b++)T=u[b],v.indexOf(" "+T+" ")<0&&(v+=T+" ");C=Ls(v),_!==C&&this.setAttribute("class",C)}}):this)},removeClass:function(l){var u,v,_,T,b,C;return S(l)?this.each(function(F){d(this).removeClass(l.call(this,F,Ds(this)))}):arguments.length?(u=Xf(l),u.length?this.each(function(){if(_=Ds(this),v=this.nodeType===1&&" "+Ls(_)+" ",v){for(b=0;b<u.length;b++)for(T=u[b];v.indexOf(" "+T+" ")>-1;)v=v.replace(" "+T+" "," ");C=Ls(v),_!==C&&this.setAttribute("class",C)}}):this):this.attr("class","")},toggleClass:function(l,u){var v,_,T,b,C=typeof l,F=C==="string"||Array.isArray(l);return S(l)?this.each(function(k){d(this).toggleClass(l.call(this,k,Ds(this),u),u)}):typeof u=="boolean"&&F?u?this.addClass(l):this.removeClass(l):(v=Xf(l),this.each(function(){if(F)for(b=d(this),T=0;T<v.length;T++)_=v[T],b.hasClass(_)?b.removeClass(_):b.addClass(_);else(l===void 0||C==="boolean")&&(_=Ds(this),_&&Q.set(this,"__className__",_),this.setAttribute&&this.setAttribute("class",_||l===!1?"":Q.get(this,"__className__")||""))}))},hasClass:function(l){var u,v,_=0;for(u=" "+l+" ";v=this[_++];)if(v.nodeType===1&&(" "+Ls(Ds(v))+" ").indexOf(u)>-1)return!0;return!1}});var JS=/\r/g;d.fn.extend({val:function(l){var u,v,_,T=this[0];return arguments.length?(_=S(l),this.each(function(b){var C;this.nodeType===1&&(_?C=l.call(this,b,d(this).val()):C=l,C==null?C="":typeof C=="number"?C+="":Array.isArray(C)&&(C=d.map(C,function(F){return F==null?"":F+""})),u=d.valHooks[this.type]||d.valHooks[this.nodeName.toLowerCase()],(!u||!("set"in u)||u.set(this,C,"value")===void 0)&&(this.value=C))})):T?(u=d.valHooks[T.type]||d.valHooks[T.nodeName.toLowerCase()],u&&"get"in u&&(v=u.get(T,"value"))!==void 0?v:(v=T.value,typeof v=="string"?v.replace(JS,""):v??"")):void 0}}),d.extend({valHooks:{option:{get:function(l){var u=d.find.attr(l,"value");return u??Ls(d.text(l))}},select:{get:function(l){var u,v,_,T=l.options,b=l.selectedIndex,C=l.type==="select-one",F=C?null:[],k=C?b+1:T.length;for(b<0?_=k:_=C?b:0;_<k;_++)if(v=T[_],(v.selected||_===b)&&!v.disabled&&(!v.parentNode.disabled||!D(v.parentNode,"optgroup"))){if(u=d(v).val(),C)return u;F.push(u)}return F},set:function(l,u){for(var v,_,T=l.options,b=d.makeArray(u),C=T.length;C--;)_=T[C],(_.selected=d.inArray(d.valHooks.option.get(_),b)>-1)&&(v=!0);return v||(l.selectedIndex=-1),b}}}}),d.each(["radio","checkbox"],function(){d.valHooks[this]={set:function(l,u){if(Array.isArray(u))return l.checked=d.inArray(d(l).val(),u)>-1}},E.checkOn||(d.valHooks[this].get=function(l){return l.getAttribute("value")===null?"on":l.value})});var Ca=e.location,qm={guid:Date.now()},qf=/\?/;d.parseXML=function(l){var u,v;if(!l||typeof l!="string")return null;try{u=new e.DOMParser().parseFromString(l,"text/xml")}catch{}return v=u&&u.getElementsByTagName("parsererror")[0],(!u||v)&&d.error("Invalid XML: "+(v?d.map(v.childNodes,function(_){return _.textContent}).join(`
`):l)),u};var Ym=/^(?:focusinfocus|focusoutblur)$/,Km=function(l){l.stopPropagation()};d.extend(d.event,{trigger:function(l,u,v,_){var T,b,C,F,k,j,re,le,K=[v||g],ye=p.call(l,"type")?l.type:l,nt=p.call(l,"namespace")?l.namespace.split("."):[];if(b=le=C=v=v||g,!(v.nodeType===3||v.nodeType===8)&&!Ym.test(ye+d.event.triggered)&&(ye.indexOf(".")>-1&&(nt=ye.split("."),ye=nt.shift(),nt.sort()),k=ye.indexOf(":")<0&&"on"+ye,l=l[d.expando]?l:new d.Event(ye,typeof l=="object"&&l),l.isTrigger=_?2:3,l.namespace=nt.join("."),l.rnamespace=l.namespace?new RegExp("(^|\\.)"+nt.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,l.result=void 0,l.target||(l.target=v),u=u==null?[l]:d.makeArray(u,[l]),re=d.event.special[ye]||{},!(!_&&re.trigger&&re.trigger.apply(v,u)===!1))){if(!_&&!re.noBubble&&!x(v)){for(F=re.delegateType||ye,Ym.test(F+ye)||(b=b.parentNode);b;b=b.parentNode)K.push(b),C=b;C===(v.ownerDocument||g)&&K.push(C.defaultView||C.parentWindow||e)}for(T=0;(b=K[T++])&&!l.isPropagationStopped();)le=b,l.type=T>1?F:re.bindType||ye,j=(Q.get(b,"events")||Object.create(null))[l.type]&&Q.get(b,"handle"),j&&j.apply(b,u),j=k&&b[k],j&&j.apply&&ge(b)&&(l.result=j.apply(b,u),l.result===!1&&l.preventDefault());return l.type=ye,!_&&!l.isDefaultPrevented()&&(!re._default||re._default.apply(K.pop(),u)===!1)&&ge(v)&&k&&S(v[ye])&&!x(v)&&(C=v[k],C&&(v[k]=null),d.event.triggered=ye,l.isPropagationStopped()&&le.addEventListener(ye,Km),v[ye](),l.isPropagationStopped()&&le.removeEventListener(ye,Km),d.event.triggered=void 0,C&&(v[k]=C)),l.result}},simulate:function(l,u,v){var _=d.extend(new d.Event,v,{type:l,isSimulated:!0});d.event.trigger(_,null,u)}}),d.fn.extend({trigger:function(l,u){return this.each(function(){d.event.trigger(l,u,this)})},triggerHandler:function(l,u){var v=this[0];if(v)return d.event.trigger(l,u,v,!0)}});var e1=/\[\]$/,Qm=/\r?\n/g,t1=/^(?:submit|button|image|reset|file)$/i,n1=/^(?:input|select|textarea|keygen)/i;function Yf(l,u,v,_){var T;if(Array.isArray(u))d.each(u,function(b,C){v||e1.test(l)?_(l,C):Yf(l+"["+(typeof C=="object"&&C!=null?b:"")+"]",C,v,_)});else if(!v&&A(u)==="object")for(T in u)Yf(l+"["+T+"]",u[T],v,_);else _(l,u)}d.param=function(l,u){var v,_=[],T=function(b,C){var F=S(C)?C():C;_[_.length]=encodeURIComponent(b)+"="+encodeURIComponent(F??"")};if(l==null)return"";if(Array.isArray(l)||l.jquery&&!d.isPlainObject(l))d.each(l,function(){T(this.name,this.value)});else for(v in l)Yf(v,l[v],u,T);return _.join("&")},d.fn.extend({serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var l=d.prop(this,"elements");return l?d.makeArray(l):this}).filter(function(){var l=this.type;return this.name&&!d(this).is(":disabled")&&n1.test(this.nodeName)&&!t1.test(l)&&(this.checked||!Ee.test(l))}).map(function(l,u){var v=d(this).val();return v==null?null:Array.isArray(v)?d.map(v,function(_){return{name:u.name,value:_.replace(Qm,`\r
`)}}):{name:u.name,value:v.replace(Qm,`\r
`)}}).get()}});var i1=/%20/g,r1=/#.*$/,s1=/([?&])_=[^&]*/,o1=/^(.*?):[ \t]*([^\r\n]*)$/mg,a1=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,l1=/^(?:GET|HEAD)$/,c1=/^\/\//,Zm={},Kf={},Jm="*/".concat("*"),Qf=g.createElement("a");Qf.href=Ca.href;function eg(l){return function(u,v){typeof u!="string"&&(v=u,u="*");var _,T=0,b=u.toLowerCase().match(rt)||[];if(S(v))for(;_=b[T++];)_[0]==="+"?(_=_.slice(1)||"*",(l[_]=l[_]||[]).unshift(v)):(l[_]=l[_]||[]).push(v)}}function tg(l,u,v,_){var T={},b=l===Kf;function C(F){var k;return T[F]=!0,d.each(l[F]||[],function(j,re){var le=re(u,v,_);if(typeof le=="string"&&!b&&!T[le])return u.dataTypes.unshift(le),C(le),!1;if(b)return!(k=le)}),k}return C(u.dataTypes[0])||!T["*"]&&C("*")}function Zf(l,u){var v,_,T=d.ajaxSettings.flatOptions||{};for(v in u)u[v]!==void 0&&((T[v]?l:_||(_={}))[v]=u[v]);return _&&d.extend(!0,l,_),l}function u1(l,u,v){for(var _,T,b,C,F=l.contents,k=l.dataTypes;k[0]==="*";)k.shift(),_===void 0&&(_=l.mimeType||u.getResponseHeader("Content-Type"));if(_){for(T in F)if(F[T]&&F[T].test(_)){k.unshift(T);break}}if(k[0]in v)b=k[0];else{for(T in v){if(!k[0]||l.converters[T+" "+k[0]]){b=T;break}C||(C=T)}b=b||C}if(b)return b!==k[0]&&k.unshift(b),v[b]}function f1(l,u,v,_){var T,b,C,F,k,j={},re=l.dataTypes.slice();if(re[1])for(C in l.converters)j[C.toLowerCase()]=l.converters[C];for(b=re.shift();b;)if(l.responseFields[b]&&(v[l.responseFields[b]]=u),!k&&_&&l.dataFilter&&(u=l.dataFilter(u,l.dataType)),k=b,b=re.shift(),b){if(b==="*")b=k;else if(k!=="*"&&k!==b){if(C=j[k+" "+b]||j["* "+b],!C){for(T in j)if(F=T.split(" "),F[1]===b&&(C=j[k+" "+F[0]]||j["* "+F[0]],C)){C===!0?C=j[T]:j[T]!==!0&&(b=F[0],re.unshift(F[1]));break}}if(C!==!0)if(C&&l.throws)u=C(u);else try{u=C(u)}catch(le){return{state:"parsererror",error:C?le:"No conversion from "+k+" to "+b}}}}return{state:"success",data:u}}d.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ca.href,type:"GET",isLocal:a1.test(Ca.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jm,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":d.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(l,u){return u?Zf(Zf(l,d.ajaxSettings),u):Zf(d.ajaxSettings,l)},ajaxPrefilter:eg(Zm),ajaxTransport:eg(Kf),ajax:function(l,u){typeof l=="object"&&(u=l,l=void 0),u=u||{};var v,_,T,b,C,F,k,j,re,le,K=d.ajaxSetup({},u),ye=K.context||K,nt=K.context&&(ye.nodeType||ye.jquery)?d(ye):d.event,wt=d.Deferred(),ft=d.Callbacks("once memory"),An=K.statusCode||{},gn={},Zi={},Ji="canceled",St={readyState:0,getResponseHeader:function(At){var an;if(k){if(!b)for(b={};an=o1.exec(T);)b[an[1].toLowerCase()+" "]=(b[an[1].toLowerCase()+" "]||[]).concat(an[2]);an=b[At.toLowerCase()+" "]}return an==null?null:an.join(", ")},getAllResponseHeaders:function(){return k?T:null},setRequestHeader:function(At,an){return k==null&&(At=Zi[At.toLowerCase()]=Zi[At.toLowerCase()]||At,gn[At]=an),this},overrideMimeType:function(At){return k==null&&(K.mimeType=At),this},statusCode:function(At){var an;if(At)if(k)St.always(At[St.status]);else for(an in At)An[an]=[An[an],At[an]];return this},abort:function(At){var an=At||Ji;return v&&v.abort(an),Ns(0,an),this}};if(wt.promise(St),K.url=((l||K.url||Ca.href)+"").replace(c1,Ca.protocol+"//"),K.type=u.method||u.type||K.method||K.type,K.dataTypes=(K.dataType||"*").toLowerCase().match(rt)||[""],K.crossDomain==null){F=g.createElement("a");try{F.href=K.url,F.href=F.href,K.crossDomain=Qf.protocol+"//"+Qf.host!=F.protocol+"//"+F.host}catch{K.crossDomain=!0}}if(K.data&&K.processData&&typeof K.data!="string"&&(K.data=d.param(K.data,K.traditional)),tg(Zm,K,u,St),k)return St;j=d.event&&K.global,j&&d.active++===0&&d.event.trigger("ajaxStart"),K.type=K.type.toUpperCase(),K.hasContent=!l1.test(K.type),_=K.url.replace(r1,""),K.hasContent?K.data&&K.processData&&(K.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(K.data=K.data.replace(i1,"+")):(le=K.url.slice(_.length),K.data&&(K.processData||typeof K.data=="string")&&(_+=(qf.test(_)?"&":"?")+K.data,delete K.data),K.cache===!1&&(_=_.replace(s1,"$1"),le=(qf.test(_)?"&":"?")+"_="+qm.guid+++le),K.url=_+le),K.ifModified&&(d.lastModified[_]&&St.setRequestHeader("If-Modified-Since",d.lastModified[_]),d.etag[_]&&St.setRequestHeader("If-None-Match",d.etag[_])),(K.data&&K.hasContent&&K.contentType!==!1||u.contentType)&&St.setRequestHeader("Content-Type",K.contentType),St.setRequestHeader("Accept",K.dataTypes[0]&&K.accepts[K.dataTypes[0]]?K.accepts[K.dataTypes[0]]+(K.dataTypes[0]!=="*"?", "+Jm+"; q=0.01":""):K.accepts["*"]);for(re in K.headers)St.setRequestHeader(re,K.headers[re]);if(K.beforeSend&&(K.beforeSend.call(ye,St,K)===!1||k))return St.abort();if(Ji="abort",ft.add(K.complete),St.done(K.success),St.fail(K.error),v=tg(Kf,K,u,St),!v)Ns(-1,"No Transport");else{if(St.readyState=1,j&&nt.trigger("ajaxSend",[St,K]),k)return St;K.async&&K.timeout>0&&(C=e.setTimeout(function(){St.abort("timeout")},K.timeout));try{k=!1,v.send(gn,Ns)}catch(At){if(k)throw At;Ns(-1,At)}}function Ns(At,an,Ra,ed){var er,Pa,tr,jr,$r,Ei=an;k||(k=!0,C&&e.clearTimeout(C),v=void 0,T=ed||"",St.readyState=At>0?4:0,er=At>=200&&At<300||At===304,Ra&&(jr=u1(K,St,Ra)),!er&&d.inArray("script",K.dataTypes)>-1&&d.inArray("json",K.dataTypes)<0&&(K.converters["text script"]=function(){}),jr=f1(K,jr,St,er),er?(K.ifModified&&($r=St.getResponseHeader("Last-Modified"),$r&&(d.lastModified[_]=$r),$r=St.getResponseHeader("etag"),$r&&(d.etag[_]=$r)),At===204||K.type==="HEAD"?Ei="nocontent":At===304?Ei="notmodified":(Ei=jr.state,Pa=jr.data,tr=jr.error,er=!tr)):(tr=Ei,(At||!Ei)&&(Ei="error",At<0&&(At=0))),St.status=At,St.statusText=(an||Ei)+"",er?wt.resolveWith(ye,[Pa,Ei,St]):wt.rejectWith(ye,[St,Ei,tr]),St.statusCode(An),An=void 0,j&&nt.trigger(er?"ajaxSuccess":"ajaxError",[St,K,er?Pa:tr]),ft.fireWith(ye,[St,Ei]),j&&(nt.trigger("ajaxComplete",[St,K]),--d.active||d.event.trigger("ajaxStop")))}return St},getJSON:function(l,u,v){return d.get(l,u,v,"json")},getScript:function(l,u){return d.get(l,void 0,u,"script")}}),d.each(["get","post"],function(l,u){d[u]=function(v,_,T,b){return S(_)&&(b=b||T,T=_,_=void 0),d.ajax(d.extend({url:v,type:u,dataType:b,data:_,success:T},d.isPlainObject(v)&&v))}}),d.ajaxPrefilter(function(l){var u;for(u in l.headers)u.toLowerCase()==="content-type"&&(l.contentType=l.headers[u]||"")}),d._evalUrl=function(l,u,v){return d.ajax({url:l,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(_){d.globalEval(_,u,v)}})},d.fn.extend({wrapAll:function(l){var u;return this[0]&&(S(l)&&(l=l.call(this[0])),u=d(l,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&u.insertBefore(this[0]),u.map(function(){for(var v=this;v.firstElementChild;)v=v.firstElementChild;return v}).append(this)),this},wrapInner:function(l){return S(l)?this.each(function(u){d(this).wrapInner(l.call(this,u))}):this.each(function(){var u=d(this),v=u.contents();v.length?v.wrapAll(l):u.append(l)})},wrap:function(l){var u=S(l);return this.each(function(v){d(this).wrapAll(u?l.call(this,v):l)})},unwrap:function(l){return this.parent(l).not("body").each(function(){d(this).replaceWith(this.childNodes)}),this}}),d.expr.pseudos.hidden=function(l){return!d.expr.pseudos.visible(l)},d.expr.pseudos.visible=function(l){return!!(l.offsetWidth||l.offsetHeight||l.getClientRects().length)},d.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var d1={0:200,1223:204},Aa=d.ajaxSettings.xhr();E.cors=!!Aa&&"withCredentials"in Aa,E.ajax=Aa=!!Aa,d.ajaxTransport(function(l){var u,v;if(E.cors||Aa&&!l.crossDomain)return{send:function(_,T){var b,C=l.xhr();if(C.open(l.type,l.url,l.async,l.username,l.password),l.xhrFields)for(b in l.xhrFields)C[b]=l.xhrFields[b];l.mimeType&&C.overrideMimeType&&C.overrideMimeType(l.mimeType),!l.crossDomain&&!_["X-Requested-With"]&&(_["X-Requested-With"]="XMLHttpRequest");for(b in _)C.setRequestHeader(b,_[b]);u=function(F){return function(){u&&(u=v=C.onload=C.onerror=C.onabort=C.ontimeout=C.onreadystatechange=null,F==="abort"?C.abort():F==="error"?typeof C.status!="number"?T(0,"error"):T(C.status,C.statusText):T(d1[C.status]||C.status,C.statusText,(C.responseType||"text")!=="text"||typeof C.responseText!="string"?{binary:C.response}:{text:C.responseText},C.getAllResponseHeaders()))}},C.onload=u(),v=C.onerror=C.ontimeout=u("error"),C.onabort!==void 0?C.onabort=v:C.onreadystatechange=function(){C.readyState===4&&e.setTimeout(function(){u&&v()})},u=u("abort");try{C.send(l.hasContent&&l.data||null)}catch(F){if(u)throw F}},abort:function(){u&&u()}}}),d.ajaxPrefilter(function(l){l.crossDomain&&(l.contents.script=!1)}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(l){return d.globalEval(l),l}}}),d.ajaxPrefilter("script",function(l){l.cache===void 0&&(l.cache=!1),l.crossDomain&&(l.type="GET")}),d.ajaxTransport("script",function(l){if(l.crossDomain||l.scriptAttrs){var u,v;return{send:function(_,T){u=d("<script>").attr(l.scriptAttrs||{}).prop({charset:l.scriptCharset,src:l.url}).on("load error",v=function(b){u.remove(),v=null,b&&T(b.type==="error"?404:200,b.type)}),g.head.appendChild(u[0])},abort:function(){v&&v()}}}});var ng=[],Jf=/(=)\?(?=&|$)|\?\?/;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var l=ng.pop()||d.expando+"_"+qm.guid++;return this[l]=!0,l}}),d.ajaxPrefilter("json jsonp",function(l,u,v){var _,T,b,C=l.jsonp!==!1&&(Jf.test(l.url)?"url":typeof l.data=="string"&&(l.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Jf.test(l.data)&&"data");if(C||l.dataTypes[0]==="jsonp")return _=l.jsonpCallback=S(l.jsonpCallback)?l.jsonpCallback():l.jsonpCallback,C?l[C]=l[C].replace(Jf,"$1"+_):l.jsonp!==!1&&(l.url+=(qf.test(l.url)?"&":"?")+l.jsonp+"="+_),l.converters["script json"]=function(){return b||d.error(_+" was not called"),b[0]},l.dataTypes[0]="json",T=e[_],e[_]=function(){b=arguments},v.always(function(){T===void 0?d(e).removeProp(_):e[_]=T,l[_]&&(l.jsonpCallback=u.jsonpCallback,ng.push(_)),b&&S(T)&&T(b[0]),b=T=void 0}),"script"}),E.createHTMLDocument=function(){var l=g.implementation.createHTMLDocument("").body;return l.innerHTML="<form></form><form></form>",l.childNodes.length===2}(),d.parseHTML=function(l,u,v){if(typeof l!="string")return[];typeof u=="boolean"&&(v=u,u=!1);var _,T,b;return u||(E.createHTMLDocument?(u=g.implementation.createHTMLDocument(""),_=u.createElement("base"),_.href=g.location.href,u.head.appendChild(_)):u=g),T=We.exec(l),b=!v&&[],T?[u.createElement(T[1])]:(T=li([l],u,b),b&&b.length&&d(b).remove(),d.merge([],T.childNodes))},d.fn.load=function(l,u,v){var _,T,b,C=this,F=l.indexOf(" ");return F>-1&&(_=Ls(l.slice(F)),l=l.slice(0,F)),S(u)?(v=u,u=void 0):u&&typeof u=="object"&&(T="POST"),C.length>0&&d.ajax({url:l,type:T||"GET",dataType:"html",data:u}).done(function(k){b=arguments,C.html(_?d("<div>").append(d.parseHTML(k)).find(_):k)}).always(v&&function(k,j){C.each(function(){v.apply(this,b||[k.responseText,j,k])})}),this},d.expr.pseudos.animated=function(l){return d.grep(d.timers,function(u){return l===u.elem}).length},d.offset={setOffset:function(l,u,v){var _,T,b,C,F,k,j,re=d.css(l,"position"),le=d(l),K={};re==="static"&&(l.style.position="relative"),F=le.offset(),b=d.css(l,"top"),k=d.css(l,"left"),j=(re==="absolute"||re==="fixed")&&(b+k).indexOf("auto")>-1,j?(_=le.position(),C=_.top,T=_.left):(C=parseFloat(b)||0,T=parseFloat(k)||0),S(u)&&(u=u.call(l,v,d.extend({},F))),u.top!=null&&(K.top=u.top-F.top+C),u.left!=null&&(K.left=u.left-F.left+T),"using"in u?u.using.call(l,K):le.css(K)}},d.fn.extend({offset:function(l){if(arguments.length)return l===void 0?this:this.each(function(T){d.offset.setOffset(this,l,T)});var u,v,_=this[0];if(_)return _.getClientRects().length?(u=_.getBoundingClientRect(),v=_.ownerDocument.defaultView,{top:u.top+v.pageYOffset,left:u.left+v.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var l,u,v,_=this[0],T={top:0,left:0};if(d.css(_,"position")==="fixed")u=_.getBoundingClientRect();else{for(u=this.offset(),v=_.ownerDocument,l=_.offsetParent||v.documentElement;l&&(l===v.body||l===v.documentElement)&&d.css(l,"position")==="static";)l=l.parentNode;l&&l!==_&&l.nodeType===1&&(T=d(l).offset(),T.top+=d.css(l,"borderTopWidth",!0),T.left+=d.css(l,"borderLeftWidth",!0))}return{top:u.top-T.top-d.css(_,"marginTop",!0),left:u.left-T.left-d.css(_,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var l=this.offsetParent;l&&d.css(l,"position")==="static";)l=l.offsetParent;return l||Re})}}),d.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(l,u){var v=u==="pageYOffset";d.fn[l]=function(_){return Ke(this,function(T,b,C){var F;if(x(T)?F=T:T.nodeType===9&&(F=T.defaultView),C===void 0)return F?F[u]:T[b];F?F.scrollTo(v?F.pageXOffset:C,v?C:F.pageYOffset):T[b]=C},l,_,arguments.length)}}),d.each(["top","left"],function(l,u){d.cssHooks[u]=Qe(E.pixelPosition,function(v,_){if(_)return _=He(v,u),ee.test(_)?d(v).position()[u]+"px":_})}),d.each({Height:"height",Width:"width"},function(l,u){d.each({padding:"inner"+l,content:u,"":"outer"+l},function(v,_){d.fn[_]=function(T,b){var C=arguments.length&&(v||typeof T!="boolean"),F=v||(T===!0||b===!0?"margin":"border");return Ke(this,function(k,j,re){var le;return x(k)?_.indexOf("outer")===0?k["inner"+l]:k.document.documentElement["client"+l]:k.nodeType===9?(le=k.documentElement,Math.max(k.body["scroll"+l],le["scroll"+l],k.body["offset"+l],le["offset"+l],le["client"+l])):re===void 0?d.css(k,j,F):d.style(k,j,re,F)},u,C?T:void 0,C)}})}),d.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(l,u){d.fn[u]=function(v){return this.on(u,v)}}),d.fn.extend({bind:function(l,u,v){return this.on(l,null,u,v)},unbind:function(l,u){return this.off(l,null,u)},delegate:function(l,u,v,_){return this.on(u,l,v,_)},undelegate:function(l,u,v){return arguments.length===1?this.off(l,"**"):this.off(u,l||"**",v)},hover:function(l,u){return this.on("mouseenter",l).on("mouseleave",u||l)}}),d.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(l,u){d.fn[u]=function(v,_){return arguments.length>0?this.on(u,null,v,_):this.trigger(u)}});var h1=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;d.proxy=function(l,u){var v,_,T;if(typeof u=="string"&&(v=l[u],u=l,l=v),!!S(l))return _=s.call(arguments,2),T=function(){return l.apply(u||this,_.concat(s.call(arguments)))},T.guid=l.guid=l.guid||d.guid++,T},d.holdReady=function(l){l?d.readyWait++:d.ready(!0)},d.isArray=Array.isArray,d.parseJSON=JSON.parse,d.nodeName=D,d.isFunction=S,d.isWindow=x,d.camelCase=J,d.type=A,d.now=Date.now,d.isNumeric=function(l){var u=d.type(l);return(u==="number"||u==="string")&&!isNaN(l-parseFloat(l))},d.trim=function(l){return l==null?"":(l+"").replace(h1,"$1")};var p1=e.jQuery,m1=e.$;return d.noConflict=function(l){return e.$===d&&(e.$=m1),l&&e.jQuery===d&&(e.jQuery=p1),d},typeof n>"u"&&(e.jQuery=e.$=d),d})})(Tx);var bx=Tx.exports;const kt=f_(bx);kt(document).on("contextmenu",function(t){t.preventDefault()});const YM=()=>ne.jsx("div",{className:"load-container",children:ne.jsxs("div",{className:"hexagon",children:[ne.jsxs("div",{className:"hexagon__group",children:[ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"})]}),ne.jsxs("div",{className:"hexagon__group",children:[ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"})]}),ne.jsxs("div",{className:"hexagon__group",children:[ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"})]}),ne.jsxs("div",{className:"hexagon__group",children:[ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"})]}),ne.jsxs("div",{className:"hexagon__group",children:[ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"})]}),ne.jsxs("div",{className:"hexagon__group",children:[ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"}),ne.jsx("div",{className:"hexagon__sector"})]})]})}),KM=()=>{const t=kt(".nav a").position(),e=kt(".nav a").parent("li").width();kt(".nav .slide1").css({left:t.left,width:e});const n=new IntersectionObserver(i=>{i.forEach(r=>{if(r.isIntersecting&&window.innerWidth>800){const s=r.target.classList[0],o=kt(`#${s.charAt(0)}`).position(),a=kt(`#${s.charAt(0)}`).parent().width();kt(".nav .slide1").css({opacity:1,left:o.left,width:a})}})},{threshold:.5});["home","abt","exp","pro","con"].forEach(i=>n.observe(document.querySelector(`.${i}-container`))),kt(".nav a").on("click",function(){const i=kt(this).position(),r=kt(this).parent().width();kt(".nav .slide1").css({opacity:1,left:+i.left,width:r}),n.disconnect(),setTimeout(()=>{["home","abt","exp","pro","con"].forEach(s=>n.observe(document.querySelector(`.${s}-container`)))},400)}),kt(".nav a").on("mouseover",function(){const i=kt(this).position(),r=kt(this).parent().width();kt(".nav .slide2").css({opacity:1,left:+i.left,width:r})}),kt(".nav a").on("mouseout",function(){kt(".nav .slide2").css({opacity:0})})},QM=()=>{let t;kt(document).on("click","#nav-icon",function(){kt(this).toggleClass("open"),t=!t,t?(kt(".nav").css({display:"block",paddingTop:"15px"}),kt("#nav-icon").css({paddingBottom:"20px"}),kt(".nav li").css({display:"block",textAlign:"center"})):(kt(".nav").css({padding:"15px 30px"}),kt("#nav-icon").css({paddingBottom:"0"}),kt(".nav li").css({display:"none"}))})},Ba=()=>{kt("#nav-icon").trigger("click")};var ln={},Mm={},kl={},Ul={},Cx="Expected a function",gv=NaN,ZM="[object Symbol]",JM=/^\s+|\s+$/g,ew=/^[-+]0x[0-9a-f]+$/i,tw=/^0b[01]+$/i,nw=/^0o[0-7]+$/i,iw=parseInt,rw=typeof Xa=="object"&&Xa&&Xa.Object===Object&&Xa,sw=typeof self=="object"&&self&&self.Object===Object&&self,ow=rw||sw||Function("return this")(),aw=Object.prototype,lw=aw.toString,cw=Math.max,uw=Math.min,Nd=function(){return ow.Date.now()};function fw(t,e,n){var i,r,s,o,a,c,f=0,h=!1,p=!1,m=!0;if(typeof t!="function")throw new TypeError(Cx);e=vv(e)||0,Ou(n)&&(h=!!n.leading,p="maxWait"in n,s=p?cw(vv(n.maxWait)||0,e):s,m="trailing"in n?!!n.trailing:m);function y(N){var d=i,z=r;return i=r=void 0,f=N,o=t.apply(z,d),o}function E(N){return f=N,a=setTimeout(g,e),h?y(N):o}function S(N){var d=N-c,z=N-f,D=e-d;return p?uw(D,s-z):D}function x(N){var d=N-c,z=N-f;return c===void 0||d>=e||d<0||p&&z>=s}function g(){var N=Nd();if(x(N))return M(N);a=setTimeout(g,S(N))}function M(N){return a=void 0,m&&i?y(N):(i=r=void 0,o)}function w(){a!==void 0&&clearTimeout(a),f=0,i=c=r=a=void 0}function A(){return a===void 0?o:M(Nd())}function O(){var N=Nd(),d=x(N);if(i=arguments,r=this,c=N,d){if(a===void 0)return E(c);if(p)return a=setTimeout(g,e),y(c)}return a===void 0&&(a=setTimeout(g,e)),o}return O.cancel=w,O.flush=A,O}function dw(t,e,n){var i=!0,r=!0;if(typeof t!="function")throw new TypeError(Cx);return Ou(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),fw(t,e,{leading:i,maxWait:e,trailing:r})}function Ou(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function hw(t){return!!t&&typeof t=="object"}function pw(t){return typeof t=="symbol"||hw(t)&&lw.call(t)==ZM}function vv(t){if(typeof t=="number")return t;if(pw(t))return gv;if(Ou(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Ou(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(JM,"");var n=tw.test(t);return n||nw.test(t)?iw(t.slice(2),n?2:8):ew.test(t)?gv:+t}var mw=dw,Ol={};Object.defineProperty(Ol,"__esModule",{value:!0});Ol.addPassiveEventListener=function(e,n,i){var r=i.name;r||(r=n,console.warn("Listener must be a named function.")),lu.has(n)||lu.set(n,new Set);var s=lu.get(n);if(!s.has(r)){var o=function(){var a=!1;try{var c=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,c)}catch{}return a}();e.addEventListener(n,i,o?{passive:!0}:!1),s.add(r)}};Ol.removePassiveEventListener=function(e,n,i){e.removeEventListener(n,i),lu.get(n).delete(i.name||n)};var lu=new Map;Object.defineProperty(Ul,"__esModule",{value:!0});var gw=mw,vw=yw(gw),_w=Ol;function yw(t){return t&&t.__esModule?t:{default:t}}var xw=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,vw.default)(e,n)},en={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,n){if(e){var i=xw(function(r){en.scrollHandler(e)},n);en.scrollSpyContainers.push(e),(0,_w.addPassiveEventListener)(e,"scroll",i)}},isMounted:function(e){return en.scrollSpyContainers.indexOf(e)!==-1},currentPositionX:function(e){if(e===document){var n=window.pageYOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft}else return e.scrollLeft},currentPositionY:function(e){if(e===document){var n=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop}else return e.scrollTop},scrollHandler:function(e){var n=en.scrollSpyContainers[en.scrollSpyContainers.indexOf(e)].spyCallbacks||[];n.forEach(function(i){return i(en.currentPositionX(e),en.currentPositionY(e))})},addStateHandler:function(e){en.spySetState.push(e)},addSpyHandler:function(e,n){var i=en.scrollSpyContainers[en.scrollSpyContainers.indexOf(n)];i.spyCallbacks||(i.spyCallbacks=[]),i.spyCallbacks.push(e),e(en.currentPositionX(n),en.currentPositionY(n))},updateStates:function(){en.spySetState.forEach(function(e){return e()})},unmount:function(e,n){en.scrollSpyContainers.forEach(function(i){return i.spyCallbacks&&i.spyCallbacks.length&&i.spyCallbacks.indexOf(n)>-1&&i.spyCallbacks.splice(i.spyCallbacks.indexOf(n),1)}),en.spySetState&&en.spySetState.length&&en.spySetState.indexOf(e)>-1&&en.spySetState.splice(en.spySetState.indexOf(e),1),document.removeEventListener("scroll",en.scrollHandler)},update:function(){return en.scrollSpyContainers.forEach(function(e){return en.scrollHandler(e)})}};Ul.default=en;var xa={},Fl={};Object.defineProperty(Fl,"__esModule",{value:!0});var Sw=function(e,n){var i=e.indexOf("#")===0?e.substring(1):e,r=i?"#"+i:"",s=window&&window.location,o=r?s.pathname+s.search+r:s.pathname+s.search;n?history.pushState(history.state,"",o):history.replaceState(history.state,"",o)},Ew=function(){return window.location.hash.replace(/^#/,"")},Mw=function(e){return function(n){return e.contains?e!=n&&e.contains(n):!!(e.compareDocumentPosition(n)&16)}},ww=function(e){return getComputedStyle(e).position!=="static"},Id=function(e,n){for(var i=e.offsetTop,r=e.offsetParent;r&&!n(r);)i+=r.offsetTop,r=r.offsetParent;return{offsetTop:i,offsetParent:r}},Tw=function(e,n,i){if(i)return e===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(e).position!=="static"?n.offsetLeft:n.offsetLeft-e.offsetLeft;if(e===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(ww(e)){if(n.offsetParent!==e){var r=function(h){return h===e||h===document},s=Id(n,r),o=s.offsetTop,a=s.offsetParent;if(a!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return o}return n.offsetTop}if(n.offsetParent===e.offsetParent)return n.offsetTop-e.offsetTop;var c=function(h){return h===document};return Id(n,c).offsetTop-Id(e,c).offsetTop};Fl.default={updateHash:Sw,getHash:Ew,filterElementInContainer:Mw,scrollOffset:Tw};var cf={},wm={};Object.defineProperty(wm,"__esModule",{value:!0});wm.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}};var Tm={};Object.defineProperty(Tm,"__esModule",{value:!0});var bw=Ol,Cw=["mousedown","mousewheel","touchmove","keydown"];Tm.default={subscribe:function(e){return typeof document<"u"&&Cw.forEach(function(n){return(0,bw.addPassiveEventListener)(document,n,e)})}};var zl={};Object.defineProperty(zl,"__esModule",{value:!0});var hp={registered:{},scrollEvent:{register:function(e,n){hp.registered[e]=n},remove:function(e){hp.registered[e]=null}}};zl.default=hp;Object.defineProperty(cf,"__esModule",{value:!0});var Aw=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Rw=Fl;uf(Rw);var Pw=wm,_v=uf(Pw),Lw=Tm,Dw=uf(Lw),Nw=zl,ar=uf(Nw);function uf(t){return t&&t.__esModule?t:{default:t}}var Ax=function(e){return _v.default[e.smooth]||_v.default.defaultEasing},Iw=function(e){return typeof e=="function"?e:function(){return e}},kw=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},pp=function(){return kw()||function(t,e,n){window.setTimeout(t,n||1e3/60,new Date().getTime())}}(),Rx=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},Px=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var i=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return i?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft},Lx=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var i=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return i?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop},Uw=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var i=document.body,r=document.documentElement;return Math.max(i.scrollWidth,i.offsetWidth,r.clientWidth,r.scrollWidth,r.offsetWidth)},Ow=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var i=document.body,r=document.documentElement;return Math.max(i.scrollHeight,i.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight)},Fw=function t(e,n,i){var r=n.data;if(!n.ignoreCancelEvents&&r.cancel){ar.default.registered.end&&ar.default.registered.end(r.to,r.target,r.currentPositionY);return}if(r.delta=Math.round(r.targetPosition-r.startPosition),r.start===null&&(r.start=i),r.progress=i-r.start,r.percent=r.progress>=r.duration?1:e(r.progress/r.duration),r.currentPosition=r.startPosition+Math.ceil(r.delta*r.percent),r.containerElement&&r.containerElement!==document&&r.containerElement!==document.body?n.horizontal?r.containerElement.scrollLeft=r.currentPosition:r.containerElement.scrollTop=r.currentPosition:n.horizontal?window.scrollTo(r.currentPosition,0):window.scrollTo(0,r.currentPosition),r.percent<1){var s=t.bind(null,e,n);pp.call(window,s);return}ar.default.registered.end&&ar.default.registered.end(r.to,r.target,r.currentPosition)},bm=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},Bl=function(e,n,i,r){n.data=n.data||Rx(),window.clearTimeout(n.data.delayTimeout);var s=function(){n.data.cancel=!0};if(Dw.default.subscribe(s),bm(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?Px(n):Lx(n),n.data.targetPosition=n.absolute?e:e+n.data.startPosition,n.data.startPosition===n.data.targetPosition){ar.default.registered.end&&ar.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=Iw(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=i,n.data.target=r;var o=Ax(n),a=Fw.bind(null,o,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){ar.default.registered.begin&&ar.default.registered.begin(n.data.to,n.data.target),pp.call(window,a)},n.delay);return}ar.default.registered.begin&&ar.default.registered.begin(n.data.to,n.data.target),pp.call(window,a)},ff=function(e){return e=Aw({},e),e.data=e.data||Rx(),e.absolute=!0,e},zw=function(e){Bl(0,ff(e))},Bw=function(e,n){Bl(e,ff(n))},Hw=function(e){e=ff(e),bm(e),Bl(e.horizontal?Uw(e):Ow(e),e)},Vw=function(e,n){n=ff(n),bm(n);var i=n.horizontal?Px(n):Lx(n);Bl(e+i,n)};cf.default={animateTopScroll:Bl,getAnimationType:Ax,scrollToTop:zw,scrollToBottom:Hw,scrollTo:Bw,scrollMore:Vw};Object.defineProperty(xa,"__esModule",{value:!0});var Gw=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ww=Fl,jw=Cm(Ww),$w=cf,Xw=Cm($w),qw=zl,yc=Cm(qw);function Cm(t){return t&&t.__esModule?t:{default:t}}var xc={},yv=void 0;xa.default={unmount:function(){xc={}},register:function(e,n){xc[e]=n},unregister:function(e){delete xc[e]},get:function(e){return xc[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return yv=e},getActiveLink:function(){return yv},scrollTo:function(e,n){var i=this.get(e);if(!i){console.warn("target Element not found");return}n=Gw({},n,{absolute:!1});var r=n.containerId,s=n.container,o=void 0;r?o=document.getElementById(r):s&&s.nodeType?o=s:o=document,n.absolute=!0;var a=n.horizontal,c=jw.default.scrollOffset(o,i,a)+(n.offset||0);if(!n.smooth){yc.default.registered.begin&&yc.default.registered.begin(e,i),o===document?n.horizontal?window.scrollTo(c,0):window.scrollTo(0,c):o.scrollTop=c,yc.default.registered.end&&yc.default.registered.end(e,i);return}Xw.default.animateTopScroll(c,n,e,i)}};var Dx={exports:{}},Yw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Kw=Yw,Qw=Kw;function Nx(){}function Ix(){}Ix.resetWarningCache=Nx;var Zw=function(){function t(i,r,s,o,a,c){if(c!==Qw){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Ix,resetWarningCache:Nx};return n.PropTypes=n,n};Dx.exports=Zw();var df=Dx.exports,hf={};Object.defineProperty(hf,"__esModule",{value:!0});var Jw=Fl,kd=eT(Jw);function eT(t){return t&&t.__esModule?t:{default:t}}var tT={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,n){this.containers[e]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,n=this.getHash();n?window.setTimeout(function(){e.scrollTo(n,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,n){var i=this.scroller,r=i.get(e);if(r&&(n||e!==i.getActiveLink())){var s=this.containers[e]||document;i.scrollTo(e,{container:s})}},getHash:function(){return kd.default.getHash()},changeHash:function(e,n){this.isInitialized()&&kd.default.getHash()!==e&&kd.default.updateHash(e,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};hf.default=tT;Object.defineProperty(kl,"__esModule",{value:!0});var Sc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},nT=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),iT=Tt,xv=Hl(iT),rT=Ul,Ec=Hl(rT),sT=xa,oT=Hl(sT),aT=df,Zt=Hl(aT),lT=hf,Yr=Hl(lT);function Hl(t){return t&&t.__esModule?t:{default:t}}function cT(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function uT(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function fT(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Sv={to:Zt.default.string.isRequired,containerId:Zt.default.string,container:Zt.default.object,activeClass:Zt.default.string,activeStyle:Zt.default.object,spy:Zt.default.bool,horizontal:Zt.default.bool,smooth:Zt.default.oneOfType([Zt.default.bool,Zt.default.string]),offset:Zt.default.number,delay:Zt.default.number,isDynamic:Zt.default.bool,onClick:Zt.default.func,duration:Zt.default.oneOfType([Zt.default.number,Zt.default.func]),absolute:Zt.default.bool,onSetActive:Zt.default.func,onSetInactive:Zt.default.func,ignoreCancelEvents:Zt.default.bool,hashSpy:Zt.default.bool,saveHashHistory:Zt.default.bool,spyThrottle:Zt.default.number};kl.default=function(t,e){var n=e||oT.default,i=function(s){fT(o,s);function o(a){cT(this,o);var c=uT(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,a));return r.call(c),c.state={active:!1},c}return nT(o,[{key:"getScrollSpyContainer",value:function(){var c=this.props.containerId,f=this.props.container;return c&&!f?document.getElementById(c):f&&f.nodeType?f:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var c=this.getScrollSpyContainer();Ec.default.isMounted(c)||Ec.default.mount(c,this.props.spyThrottle),this.props.hashSpy&&(Yr.default.isMounted()||Yr.default.mount(n),Yr.default.mapContainer(this.props.to,c)),Ec.default.addSpyHandler(this.spyHandler,c),this.setState({container:c})}}},{key:"componentWillUnmount",value:function(){Ec.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var c="";this.state&&this.state.active?c=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():c=this.props.className;var f={};this.state&&this.state.active?f=Sc({},this.props.style,this.props.activeStyle):f=Sc({},this.props.style);var h=Sc({},this.props);for(var p in Sv)h.hasOwnProperty(p)&&delete h[p];return h.className=c,h.style=f,h.onClick=this.handleClick,xv.default.createElement(t,h)}}]),o}(xv.default.PureComponent),r=function(){var o=this;this.scrollTo=function(a,c){n.scrollTo(a,Sc({},o.state,c))},this.handleClick=function(a){o.props.onClick&&o.props.onClick(a),a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),o.scrollTo(o.props.to,o.props)},this.spyHandler=function(a,c){var f=o.getScrollSpyContainer();if(!(Yr.default.isMounted()&&!Yr.default.isInitialized())){var h=o.props.horizontal,p=o.props.to,m=null,y=void 0,E=void 0;if(h){var S=0,x=0,g=0;if(f.getBoundingClientRect){var M=f.getBoundingClientRect();g=M.left}if(!m||o.props.isDynamic){if(m=n.get(p),!m)return;var w=m.getBoundingClientRect();S=w.left-g+a,x=S+w.width}var A=a-o.props.offset;y=A>=Math.floor(S)&&A<Math.floor(x),E=A<Math.floor(S)||A>=Math.floor(x)}else{var O=0,N=0,d=0;if(f.getBoundingClientRect){var z=f.getBoundingClientRect();d=z.top}if(!m||o.props.isDynamic){if(m=n.get(p),!m)return;var D=m.getBoundingClientRect();O=D.top-d+c,N=O+D.height}var R=c-o.props.offset;y=R>=Math.floor(O)&&R<Math.floor(N),E=R<Math.floor(O)||R>=Math.floor(N)}var H=n.getActiveLink();if(E){if(p===H&&n.setActiveLink(void 0),o.props.hashSpy&&Yr.default.getHash()===p){var oe=o.props.saveHashHistory,q=oe===void 0?!1:oe;Yr.default.changeHash("",q)}o.props.spy&&o.state.active&&(o.setState({active:!1}),o.props.onSetInactive&&o.props.onSetInactive(p,m))}if(y&&(H!==p||o.state.active===!1)){n.setActiveLink(p);var fe=o.props.saveHashHistory,me=fe===void 0?!1:fe;o.props.hashSpy&&Yr.default.changeHash(p,me),o.props.spy&&(o.setState({active:!0}),o.props.onSetActive&&o.props.onSetActive(p,m))}}}};return i.propTypes=Sv,i.defaultProps={offset:0},i};Object.defineProperty(Mm,"__esModule",{value:!0});var dT=Tt,Ev=kx(dT),hT=kl,pT=kx(hT);function kx(t){return t&&t.__esModule?t:{default:t}}function mT(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Mv(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function gT(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var vT=function(t){gT(e,t);function e(){var n,i,r,s;mT(this,e);for(var o=arguments.length,a=Array(o),c=0;c<o;c++)a[c]=arguments[c];return s=(i=(r=Mv(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(a))),r),r.render=function(){return Ev.default.createElement("a",r.props,r.props.children)},i),Mv(r,s)}return e}(Ev.default.Component);Mm.default=(0,pT.default)(vT);var Am={};Object.defineProperty(Am,"__esModule",{value:!0});var _T=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),yT=Tt,wv=Ux(yT),xT=kl,ST=Ux(xT);function Ux(t){return t&&t.__esModule?t:{default:t}}function ET(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function MT(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function wT(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var TT=function(t){wT(e,t);function e(){return ET(this,e),MT(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return _T(e,[{key:"render",value:function(){return wv.default.createElement("button",this.props,this.props.children)}}]),e}(wv.default.Component);Am.default=(0,ST.default)(TT);var Rm={},pf={};Object.defineProperty(pf,"__esModule",{value:!0});var bT=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},CT=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),AT=Tt,Tv=mf(AT),RT=wx;mf(RT);var PT=xa,bv=mf(PT),LT=df,Cv=mf(LT);function mf(t){return t&&t.__esModule?t:{default:t}}function DT(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function NT(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function IT(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}pf.default=function(t){var e=function(n){IT(i,n);function i(r){DT(this,i);var s=NT(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return s.childBindings={domNode:null},s}return CT(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(s){this.props.name!==s.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;bv.default.unregister(this.props.name)}},{key:"registerElems",value:function(s){bv.default.register(s,this.childBindings.domNode)}},{key:"render",value:function(){return Tv.default.createElement(t,bT({},this.props,{parentBindings:this.childBindings}))}}]),i}(Tv.default.Component);return e.propTypes={name:Cv.default.string,id:Cv.default.string},e};Object.defineProperty(Rm,"__esModule",{value:!0});var Av=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},kT=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),UT=Tt,Rv=Pm(UT),OT=pf,FT=Pm(OT),zT=df,Pv=Pm(zT);function Pm(t){return t&&t.__esModule?t:{default:t}}function BT(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function HT(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function VT(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Ox=function(t){VT(e,t);function e(){return BT(this,e),HT(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return kT(e,[{key:"render",value:function(){var i=this,r=Av({},this.props);return delete r.name,r.parentBindings&&delete r.parentBindings,Rv.default.createElement("div",Av({},r,{ref:function(o){i.props.parentBindings.domNode=o}}),this.props.children)}}]),e}(Rv.default.Component);Ox.propTypes={name:Pv.default.string,id:Pv.default.string};Rm.default=(0,FT.default)(Ox);var Ud=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Lv=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function Dv(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Nv(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Iv(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Mc=Tt,ks=Ul,Od=xa,tn=df,Kr=hf,kv={to:tn.string.isRequired,containerId:tn.string,container:tn.object,activeClass:tn.string,spy:tn.bool,smooth:tn.oneOfType([tn.bool,tn.string]),offset:tn.number,delay:tn.number,isDynamic:tn.bool,onClick:tn.func,duration:tn.oneOfType([tn.number,tn.func]),absolute:tn.bool,onSetActive:tn.func,onSetInactive:tn.func,ignoreCancelEvents:tn.bool,hashSpy:tn.bool,spyThrottle:tn.number},GT={Scroll:function(e,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var i=n||Od,r=function(o){Iv(a,o);function a(c){Dv(this,a);var f=Nv(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,c));return s.call(f),f.state={active:!1},f}return Lv(a,[{key:"getScrollSpyContainer",value:function(){var f=this.props.containerId,h=this.props.container;return f?document.getElementById(f):h&&h.nodeType?h:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var f=this.getScrollSpyContainer();ks.isMounted(f)||ks.mount(f,this.props.spyThrottle),this.props.hashSpy&&(Kr.isMounted()||Kr.mount(i),Kr.mapContainer(this.props.to,f)),this.props.spy&&ks.addStateHandler(this.stateHandler),ks.addSpyHandler(this.spyHandler,f),this.setState({container:f})}}},{key:"componentWillUnmount",value:function(){ks.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var f="";this.state&&this.state.active?f=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():f=this.props.className;var h=Ud({},this.props);for(var p in kv)h.hasOwnProperty(p)&&delete h[p];return h.className=f,h.onClick=this.handleClick,Mc.createElement(e,h)}}]),a}(Mc.Component),s=function(){var a=this;this.scrollTo=function(c,f){i.scrollTo(c,Ud({},a.state,f))},this.handleClick=function(c){a.props.onClick&&a.props.onClick(c),c.stopPropagation&&c.stopPropagation(),c.preventDefault&&c.preventDefault(),a.scrollTo(a.props.to,a.props)},this.stateHandler=function(){i.getActiveLink()!==a.props.to&&(a.state!==null&&a.state.active&&a.props.onSetInactive&&a.props.onSetInactive(),a.setState({active:!1}))},this.spyHandler=function(c){var f=a.getScrollSpyContainer();if(!(Kr.isMounted()&&!Kr.isInitialized())){var h=a.props.to,p=null,m=0,y=0,E=0;if(f.getBoundingClientRect){var S=f.getBoundingClientRect();E=S.top}if(!p||a.props.isDynamic){if(p=i.get(h),!p)return;var x=p.getBoundingClientRect();m=x.top-E+c,y=m+x.height}var g=c-a.props.offset,M=g>=Math.floor(m)&&g<Math.floor(y),w=g<Math.floor(m)||g>=Math.floor(y),A=i.getActiveLink();if(w)return h===A&&i.setActiveLink(void 0),a.props.hashSpy&&Kr.getHash()===h&&Kr.changeHash(),a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive()),ks.updateStates();if(M&&A!==h)return i.setActiveLink(h),a.props.hashSpy&&Kr.changeHash(h),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(h)),ks.updateStates()}}};return r.propTypes=kv,r.defaultProps={offset:0},r},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(i){Iv(r,i);function r(s){Dv(this,r);var o=Nv(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,s));return o.childBindings={domNode:null},o}return Lv(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Od.unregister(this.props.name)}},{key:"registerElems",value:function(o){Od.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return Mc.createElement(e,Ud({},this.props,{parentBindings:this.childBindings}))}}]),r}(Mc.Component);return n.propTypes={name:tn.string,id:tn.string},n}},WT=GT;Object.defineProperty(ln,"__esModule",{value:!0});ln.Helpers=ln.ScrollElement=ln.ScrollLink=ln.animateScroll=ln.scrollSpy=ln.Events=ln.scroller=ln.Element=ln.Button=Hi=ln.Link=void 0;var jT=Mm,Fx=yr(jT),$T=Am,zx=yr($T),XT=Rm,Bx=yr(XT),qT=xa,Hx=yr(qT),YT=zl,Vx=yr(YT),KT=Ul,Gx=yr(KT),QT=cf,Wx=yr(QT),ZT=kl,jx=yr(ZT),JT=pf,$x=yr(JT),eb=WT,Xx=yr(eb);function yr(t){return t&&t.__esModule?t:{default:t}}var Hi=ln.Link=Fx.default;ln.Button=zx.default;ln.Element=Bx.default;ln.scroller=Hx.default;ln.Events=Vx.default;ln.scrollSpy=Gx.default;ln.animateScroll=Wx.default;ln.ScrollLink=jx.default;ln.ScrollElement=$x.default;ln.Helpers=Xx.default;ln.default={Link:Fx.default,Button:zx.default,Element:Bx.default,scroller:Hx.default,Events:Vx.default,scrollSpy:Gx.default,animateScroll:Wx.default,ScrollLink:jx.default,ScrollElement:$x.default,Helpers:Xx.default};const tb=()=>{const[t,e]=Li.useState();return Li.useEffect(()=>{const n=()=>e(window.innerWidth<=800);n(),window.addEventListener("resize",n),KM(),QM()},[]),ne.jsxs("nav",{className:"nav-container",children:[!t&&ne.jsxs("ul",{className:"nav",children:[ne.jsx("li",{children:ne.jsx(Hi,{id:"h",to:"home-container",smooth:!0,duration:500,offset:-53.5,children:"Home"})}),ne.jsx("li",{children:ne.jsx(Hi,{id:"a",to:"abt-container",smooth:!0,duration:500,offset:-53.5,children:"About"})}),ne.jsx("li",{children:ne.jsx(Hi,{id:"e",to:"exp-container",smooth:!0,duration:500,offset:-53.5,children:"Experiences"})}),ne.jsx("li",{children:ne.jsx(Hi,{id:"p",to:"pro-container",smooth:!0,duration:500,offset:-53.5,children:"Projects"})}),ne.jsx("li",{children:ne.jsx(Hi,{id:"c",to:"con-container",smooth:!0,duration:500,children:"Contact"})}),ne.jsx("li",{className:"slide1"}),ne.jsx("li",{className:"slide2"})]}),t&&ne.jsxs("ul",{className:"nav",children:[ne.jsxs("div",{id:"nav-icon",children:[ne.jsx("span",{}),ne.jsx("span",{}),ne.jsx("span",{}),ne.jsx("span",{}),ne.jsx("span",{}),ne.jsx("span",{})]}),ne.jsx("li",{children:ne.jsx(Hi,{onClick:Ba,to:"home-container",smooth:!0,duration:500,offset:-53.5,children:"Home"})}),ne.jsx("li",{children:ne.jsx(Hi,{onClick:Ba,to:"abt-container",smooth:!0,duration:500,offset:-53.5,children:"About"})}),ne.jsx("li",{children:ne.jsx(Hi,{onClick:Ba,to:"exp-container",smooth:!0,duration:500,offset:-53.5,children:"Experiences"})}),ne.jsx("li",{children:ne.jsx(Hi,{onClick:Ba,to:"pro-container",smooth:!0,duration:500,offset:-53.5,children:"Projects"})}),ne.jsx("li",{children:ne.jsx(Hi,{onClick:Ba,to:"con-container",smooth:!0,duration:500,offset:-53.5,children:"Contact"})})]})]})};function mp(){return mp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},mp.apply(this,arguments)}var nb={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},ib=new(function(){function t(){}var e=t.prototype;return e.load=function(n,i,r){if(n.el=typeof r=="string"?document.querySelector(r):r,n.options=mp({},nb,i),n.isInput=n.el.tagName.toLowerCase()==="input",n.attr=n.options.attr,n.bindInputFocusEvents=n.options.bindInputFocusEvents,n.showCursor=!n.isInput&&n.options.showCursor,n.cursorChar=n.options.cursorChar,n.cursorBlinking=!0,n.elContent=n.attr?n.el.getAttribute(n.attr):n.el.textContent,n.contentType=n.options.contentType,n.typeSpeed=n.options.typeSpeed,n.startDelay=n.options.startDelay,n.backSpeed=n.options.backSpeed,n.smartBackspace=n.options.smartBackspace,n.backDelay=n.options.backDelay,n.fadeOut=n.options.fadeOut,n.fadeOutClass=n.options.fadeOutClass,n.fadeOutDelay=n.options.fadeOutDelay,n.isPaused=!1,n.strings=n.options.strings.map(function(f){return f.trim()}),n.stringsElement=typeof n.options.stringsElement=="string"?document.querySelector(n.options.stringsElement):n.options.stringsElement,n.stringsElement){n.strings=[],n.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var s=Array.prototype.slice.apply(n.stringsElement.children),o=s.length;if(o)for(var a=0;a<o;a+=1)n.strings.push(s[a].innerHTML.trim())}for(var c in n.strPos=0,n.currentElContent=this.getCurrentElContent(n),n.currentElContent&&n.currentElContent.length>0&&(n.strPos=n.currentElContent.length-1,n.strings.unshift(n.currentElContent)),n.sequence=[],n.strings)n.sequence[c]=c;n.arrayPos=0,n.stopNum=0,n.loop=n.options.loop,n.loopCount=n.options.loopCount,n.curLoop=0,n.shuffle=n.options.shuffle,n.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},n.typingComplete=!1,n.autoInsertCss=n.options.autoInsertCss,n.autoInsertCss&&(this.appendCursorAnimationCss(n),this.appendFadeOutAnimationCss(n))},e.getCurrentElContent=function(n){return n.attr?n.el.getAttribute(n.attr):n.isInput?n.el.value:n.contentType==="html"?n.el.innerHTML:n.el.textContent},e.appendCursorAnimationCss=function(n){var i="data-typed-js-cursor-css";if(n.showCursor&&!document.querySelector("["+i+"]")){var r=document.createElement("style");r.setAttribute(i,"true"),r.innerHTML=`
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
      `,document.body.appendChild(r)}},t}()),Uv=new(function(){function t(){}var e=t.prototype;return e.typeHtmlChars=function(n,i,r){if(r.contentType!=="html")return i;var s=n.substring(i).charAt(0);if(s==="<"||s==="&"){var o;for(o=s==="<"?">":";";n.substring(i+1).charAt(0)!==o&&!(1+ ++i>n.length););i++}return i},e.backSpaceHtmlChars=function(n,i,r){if(r.contentType!=="html")return i;var s=n.substring(i).charAt(0);if(s===">"||s===";"){var o;for(o=s===">"?"<":"&";n.substring(i-1).charAt(0)!==o&&!(--i<0););i--}return i},t}()),wc=function(){function t(n,i){ib.load(this,i,n),this.begin()}var e=t.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(n){n===void 0&&(n=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,n&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var n=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){n.strPos===0?n.typewrite(n.strings[n.sequence[n.arrayPos]],n.strPos):n.backspace(n.strings[n.sequence[n.arrayPos]],n.strPos)},this.startDelay)},e.typewrite=function(n,i){var r=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var s=this.humanizer(this.typeSpeed),o=1;this.pause.status!==!0?this.timeout=setTimeout(function(){i=Uv.typeHtmlChars(n,i,r);var a=0,c=n.substring(i);if(c.charAt(0)==="^"&&/^\^\d+/.test(c)){var f=1;f+=(c=/\d+/.exec(c)[0]).length,a=parseInt(c),r.temporaryPause=!0,r.options.onTypingPaused(r.arrayPos,r),n=n.substring(0,i)+n.substring(i+f),r.toggleBlinking(!0)}if(c.charAt(0)==="`"){for(;n.substring(i+o).charAt(0)!=="`"&&(o++,!(i+o>n.length)););var h=n.substring(0,i),p=n.substring(h.length+1,i+o),m=n.substring(i+o+1);n=h+p+m,o--}r.timeout=setTimeout(function(){r.toggleBlinking(!1),i>=n.length?r.doneTyping(n,i):r.keepTyping(n,i,o),r.temporaryPause&&(r.temporaryPause=!1,r.options.onTypingResumed(r.arrayPos,r))},a)},s):this.setPauseStatus(n,i,!0)},e.keepTyping=function(n,i,r){i===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var s=n.substring(0,i+=r);this.replaceText(s),this.typewrite(n,i)},e.doneTyping=function(n,i){var r=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){r.backspace(n,i)},this.backDelay))},e.backspace=function(n,i){var r=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var s=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){i=Uv.backSpaceHtmlChars(n,i,r);var o=n.substring(0,i);if(r.replaceText(o),r.smartBackspace){var a=r.strings[r.arrayPos+1];r.stopNum=a&&o===a.substring(0,i)?i:0}i>r.stopNum?(i--,r.backspace(n,i)):i<=r.stopNum&&(r.arrayPos++,r.arrayPos===r.strings.length?(r.arrayPos=0,r.options.onLastStringBackspaced(),r.shuffleStringsIfNeeded(),r.begin()):r.typewrite(r.strings[r.sequence[r.arrayPos]],i))},s)}else this.setPauseStatus(n,i,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(n,i,r){this.pause.typewrite=r,this.pause.curString=n,this.pause.curStrPos=i},e.toggleBlinking=function(n){this.cursor&&(this.pause.status||this.cursorBlinking!==n&&(this.cursorBlinking=n,n?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(n){return Math.round(Math.random()*n/2)+n},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var n=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){n.arrayPos++,n.replaceText(""),n.strings.length>n.arrayPos?n.typewrite(n.strings[n.sequence[n.arrayPos]],0):(n.typewrite(n.strings[0],0),n.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(n){this.attr?this.el.setAttribute(this.attr,n):this.isInput?this.el.value=n:this.contentType==="html"?this.el.innerHTML=n:this.el.textContent=n},e.bindFocusEvents=function(){var n=this;this.isInput&&(this.el.addEventListener("focus",function(i){n.stop()}),this.el.addEventListener("blur",function(i){n.el.value&&n.el.value.length!==0||n.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},t}();const rb=()=>{new wc("#name",{strings:["Hi! I'm Vire.","¡Hola! Soy Vire.","Salut! Je suis Vire.","Olá! Eu sou Vire.","Привет! Я Вире.","Γειά σας! Είμαι Βιρέ.","嗨！ 我是 Vire。","やあ！ 俺は Vire だ。","안녕! 나 Vire 야."],typeSpeed:25,backSpeed:25,backDelay:3e3,cursorChar:"▌",autoInsertCss:!1,loop:!0}),setTimeout(()=>{new wc("#introA",{strings:["Passionate about "],typeSpeed:25,cursorChar:"▏",autoInsertCss:!1,onComplete:t=>{t.destroy()},onDestroy:()=>{const t=document.querySelector("#introA");t.textContent="Passionate about ",new wc("#introB",{strings:["Hardware Engineering.","Backend Software Engineering.","Data Encryption.","Data Hashing."],typeSpeed:25,backSpeed:25,smartBackspace:!0,backDelay:2e3,cursorChar:"▏",autoInsertCss:!1,loop:!0})}})},1500),setTimeout(()=>{new wc("#desc",{strings:["A man with a sharp focus, unwavering commitment, sheer willpower, embodying honesty, and possessing excellent self-discipline."],typeSpeed:10,cursorChar:"▓",autoInsertCss:!1,onComplete:t=>{setTimeout(()=>{t.destroy()},5e3)},onDestroy:()=>{const t=document.querySelector("#desc");t.textContent="A man with a sharp focus, unwavering commitment, sheer willpower, embodying honesty, and possessing excellent self-discipline."}})},4500)};var sb=Object.defineProperty,ob=(t,e,n)=>e in t?sb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Tc=(t,e,n)=>(ob(t,typeof e!="symbol"?e+"":e,n),n),gp=new Map,bc=new WeakMap,Ov=0,ab=void 0;function lb(t){return t?(bc.has(t)||(Ov+=1,bc.set(t,Ov.toString())),bc.get(t)):"0"}function cb(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?lb(t.root):t[e]}`).toString()}function ub(t){const e=cb(t);let n=gp.get(e);if(!n){const i=new Map;let r;const s=new IntersectionObserver(o=>{o.forEach(a=>{var c;const f=a.isIntersecting&&r.some(h=>a.intersectionRatio>=h);t.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=f),(c=i.get(a.target))==null||c.forEach(h=>{h(f,a)})})},t);r=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:s,elements:i},gp.set(e,n)}return n}function qx(t,e,n={},i=ab){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const c=t.getBoundingClientRect();return e(i,{isIntersecting:i,target:t,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:c,intersectionRect:c,rootBounds:c}),()=>{}}const{id:r,observer:s,elements:o}=ub(n),a=o.get(t)||[];return o.has(t)||o.set(t,a),a.push(e),s.observe(t),function(){a.splice(a.indexOf(e),1),a.length===0&&(o.delete(t),s.unobserve(t)),o.size===0&&(s.disconnect(),gp.delete(r))}}function fb(t){return typeof t.children!="function"}var Fv=class extends Tt.Component{constructor(t){super(t),Tc(this,"node",null),Tc(this,"_unobserveCb",null),Tc(this,"handleNode",e=>{this.node&&(this.unobserve(),!e&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),Tc(this,"handleChange",(e,n)=>{e&&this.props.triggerOnce&&this.unobserve(),fb(this.props)||this.setState({inView:e,entry:n}),this.props.onChange&&this.props.onChange(e,n)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:e,rootMargin:n,trackVisibility:i,delay:r,fallbackInView:s}=this.props;this._unobserveCb=qx(this.node,this.handleChange,{threshold:t,root:e,rootMargin:n,trackVisibility:i,delay:r},s)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:y,entry:E}=this.state;return t({inView:y,entry:E,ref:this.handleNode})}const{as:e,triggerOnce:n,threshold:i,root:r,rootMargin:s,onChange:o,skip:a,trackVisibility:c,delay:f,initialInView:h,fallbackInView:p,...m}=this.props;return Tt.createElement(e||"div",{ref:this.handleNode,...m},t)}};function Vl({threshold:t,delay:e,trackVisibility:n,rootMargin:i,root:r,triggerOnce:s,skip:o,initialInView:a,fallbackInView:c,onChange:f}={}){var h;const[p,m]=Tt.useState(null),y=Tt.useRef(),[E,S]=Tt.useState({inView:!!a,entry:void 0});y.current=f,Tt.useEffect(()=>{if(o||!p)return;let w;return w=qx(p,(A,O)=>{S({inView:A,entry:O}),y.current&&y.current(A,O),O.isIntersecting&&s&&w&&(w(),w=void 0)},{root:r,rootMargin:i,threshold:t,trackVisibility:n,delay:e},c),()=>{w&&w()}},[Array.isArray(t)?t.toString():t,p,r,i,s,o,n,c,e]);const x=(h=E.entry)==null?void 0:h.target,g=Tt.useRef();!p&&x&&!s&&!o&&g.current!==x&&(g.current=x,S({inView:!!a,entry:void 0}));const M=[m,E.inView,E.entry];return M.ref=M[0],M.inView=M[1],M.entry=M[2],M}const db=()=>{const[t,e]=Vl({triggerOnce:!0,threshold:.1});return Li.useEffect(()=>{e&&rb()},[e]),ne.jsxs("div",{className:"home-container",ref:t,children:[ne.jsx("div",{className:"home",children:ne.jsxs("div",{className:"content",children:[ne.jsx("h1",{children:ne.jsx("span",{id:"name"})}),ne.jsxs("h2",{children:[ne.jsx("span",{id:"introA"}),ne.jsx("span",{id:"introB"})]}),ne.jsx("p",{children:ne.jsx("span",{id:"desc"})}),ne.jsxs("ul",{children:[ne.jsx("li",{children:ne.jsx("a",{href:"https://linkedin.com/in/virezee",target:"_blank",rel:"noopener noreferrer nofollow",children:ne.jsx("img",{className:"l",src:"images/linkedin.svg",alt:"LinkedIn"})})}),ne.jsx("li",{children:ne.jsx("a",{href:"https://github.com/VireZee",target:"_blank",rel:"noopener noreferrer nofollow",children:ne.jsx("img",{className:"g",src:"images/github.svg",alt:"GitHub"})})})]})]})}),ne.jsx("div",{className:"home-img"})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lm="165",hb=0,zv=1,pb=2,Yx=1,mb=2,Rr=3,Ms=0,si=1,Dr=2,ys=0,Jo=1,Bv=2,Hv=3,Vv=4,gb=5,$s=100,vb=101,_b=102,yb=103,xb=104,Sb=200,Eb=201,Mb=202,wb=203,vp=204,_p=205,Tb=206,bb=207,Cb=208,Ab=209,Rb=210,Pb=211,Lb=212,Db=213,Nb=214,Ib=0,kb=1,Ub=2,Fu=3,Ob=4,Fb=5,zb=6,Bb=7,Kx=0,Hb=1,Vb=2,xs=0,Gb=1,Wb=2,jb=3,$b=4,Xb=5,qb=6,Yb=7,Qx=300,ua=301,fa=302,yp=303,xp=304,gf=306,Sp=1e3,Qs=1001,Ep=1002,Ri=1003,Kb=1004,Cc=1005,ji=1006,Fd=1007,Zs=1008,ws=1009,Qb=1010,Zb=1011,zu=1012,Zx=1013,da=1014,us=1015,vf=1016,Jx=1017,eS=1018,ha=1020,Jb=35902,eC=1021,tC=1022,hr=1023,nC=1024,iC=1025,ea=1026,pa=1027,rC=1028,tS=1029,sC=1030,nS=1031,iS=1033,zd=33776,Bd=33777,Hd=33778,Vd=33779,Gv=35840,Wv=35841,jv=35842,$v=35843,Xv=36196,qv=37492,Yv=37496,Kv=37808,Qv=37809,Zv=37810,Jv=37811,e0=37812,t0=37813,n0=37814,i0=37815,r0=37816,s0=37817,o0=37818,a0=37819,l0=37820,c0=37821,Gd=36492,u0=36494,f0=36495,oC=36283,d0=36284,h0=36285,p0=36286,aC=3200,lC=3201,cC=0,uC=1,as="",or="srgb",Rs="srgb-linear",Dm="display-p3",_f="display-p3-linear",Bu="linear",Yt="srgb",Hu="rec709",Vu="p3",vo=7680,m0=519,fC=512,dC=513,hC=514,rS=515,pC=516,mC=517,gC=518,vC=519,g0=35044,v0="300 es",kr=2e3,Gu=2001;class Sa{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wd=Math.PI/180,Mp=180/Math.PI;function Gl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(On[t&255]+On[t>>8&255]+On[t>>16&255]+On[t>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[n&63|128]+On[n>>8&255]+"-"+On[n>>16&255]+On[n>>24&255]+On[i&255]+On[i>>8&255]+On[i>>16&255]+On[i>>24&255]).toLowerCase()}function ei(t,e,n){return Math.max(e,Math.min(n,t))}function _C(t,e){return(t%e+e)%e}function jd(t,e,n){return(1-n)*t+n*e}function Ha(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ut{constructor(e=0,n=0){Ut.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ei(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,n,i,r,s,o,a,c,f){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,c,f)}set(e,n,i,r,s,o,a,c,f){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],c=i[6],f=i[1],h=i[4],p=i[7],m=i[2],y=i[5],E=i[8],S=r[0],x=r[3],g=r[6],M=r[1],w=r[4],A=r[7],O=r[2],N=r[5],d=r[8];return s[0]=o*S+a*M+c*O,s[3]=o*x+a*w+c*N,s[6]=o*g+a*A+c*d,s[1]=f*S+h*M+p*O,s[4]=f*x+h*w+p*N,s[7]=f*g+h*A+p*d,s[2]=m*S+y*M+E*O,s[5]=m*x+y*w+E*N,s[8]=m*g+y*A+E*d,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],f=e[7],h=e[8];return n*o*h-n*a*f-i*s*h+i*a*c+r*s*f-r*o*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],f=e[7],h=e[8],p=h*o-a*f,m=a*c-h*s,y=f*s-o*c,E=n*p+i*m+r*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/E;return e[0]=p*S,e[1]=(r*f-h*i)*S,e[2]=(a*i-r*o)*S,e[3]=m*S,e[4]=(h*n-r*c)*S,e[5]=(r*s-a*n)*S,e[6]=y*S,e[7]=(i*c-f*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const c=Math.cos(s),f=Math.sin(s);return this.set(i*c,i*f,-i*(c*o+f*a)+o+e,-r*f,r*c,-r*(-f*o+c*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply($d.makeScale(e,n)),this}rotate(e){return this.premultiply($d.makeRotation(-e)),this}translate(e,n){return this.premultiply($d.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $d=new ht;function sS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Wu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function yC(){const t=Wu("canvas");return t.style.display="block",t}const _0={};function oS(t){t in _0||(_0[t]=!0,console.warn(t))}function xC(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const y0=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),x0=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ac={[Rs]:{transfer:Bu,primaries:Hu,toReference:t=>t,fromReference:t=>t},[or]:{transfer:Yt,primaries:Hu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[_f]:{transfer:Bu,primaries:Vu,toReference:t=>t.applyMatrix3(x0),fromReference:t=>t.applyMatrix3(y0)},[Dm]:{transfer:Yt,primaries:Vu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(x0),fromReference:t=>t.applyMatrix3(y0).convertLinearToSRGB()}},SC=new Set([Rs,_f]),Ft={enabled:!0,_workingColorSpace:Rs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!SC.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ac[e].toReference,r=Ac[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ac[t].primaries},getTransfer:function(t){return t===as?Bu:Ac[t].transfer}};function ta(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Xd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let _o;class EC{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_o===void 0&&(_o=Wu("canvas")),_o.width=e.width,_o.height=e.height;const i=_o.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=_o}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Wu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ta(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ta(n[i]/255)*255):n[i]=ta(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let MC=0;class aS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MC++}),this.uuid=Gl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(qd(r[o].image)):s.push(qd(r[o]))}else s=qd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function qd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?EC.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wC=0;class oi extends Sa{constructor(e=oi.DEFAULT_IMAGE,n=oi.DEFAULT_MAPPING,i=Qs,r=Qs,s=ji,o=Zs,a=hr,c=ws,f=oi.DEFAULT_ANISOTROPY,h=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wC++}),this.uuid=Gl(),this.name="",this.source=new aS(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=f,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sp:e.x=e.x-Math.floor(e.x);break;case Qs:e.x=e.x<0?0:1;break;case Ep:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sp:e.y=e.y-Math.floor(e.y);break;case Qs:e.y=e.y<0?0:1;break;case Ep:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}oi.DEFAULT_IMAGE=null;oi.DEFAULT_MAPPING=Qx;oi.DEFAULT_ANISOTROPY=1;class Ln{constructor(e=0,n=0,i=0,r=1){Ln.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,f=c[0],h=c[4],p=c[8],m=c[1],y=c[5],E=c[9],S=c[2],x=c[6],g=c[10];if(Math.abs(h-m)<.01&&Math.abs(p-S)<.01&&Math.abs(E-x)<.01){if(Math.abs(h+m)<.1&&Math.abs(p+S)<.1&&Math.abs(E+x)<.1&&Math.abs(f+y+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(f+1)/2,A=(y+1)/2,O=(g+1)/2,N=(h+m)/4,d=(p+S)/4,z=(E+x)/4;return w>A&&w>O?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=N/i,s=d/i):A>O?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=N/r,s=z/r):O<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),i=d/s,r=z/s),this.set(i,r,s,n),this}let M=Math.sqrt((x-E)*(x-E)+(p-S)*(p-S)+(m-h)*(m-h));return Math.abs(M)<.001&&(M=1),this.x=(x-E)/M,this.y=(p-S)/M,this.z=(m-h)/M,this.w=Math.acos((f+y+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TC extends Sa{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ln(0,0,e,n),this.scissorTest=!1,this.viewport=new Ln(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ji,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new oi(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new aS(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ao extends TC{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class lS extends oi{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=Qs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bC extends oi{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=Qs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let c=i[r+0],f=i[r+1],h=i[r+2],p=i[r+3];const m=s[o+0],y=s[o+1],E=s[o+2],S=s[o+3];if(a===0){e[n+0]=c,e[n+1]=f,e[n+2]=h,e[n+3]=p;return}if(a===1){e[n+0]=m,e[n+1]=y,e[n+2]=E,e[n+3]=S;return}if(p!==S||c!==m||f!==y||h!==E){let x=1-a;const g=c*m+f*y+h*E+p*S,M=g>=0?1:-1,w=1-g*g;if(w>Number.EPSILON){const O=Math.sqrt(w),N=Math.atan2(O,g*M);x=Math.sin(x*N)/O,a=Math.sin(a*N)/O}const A=a*M;if(c=c*x+m*A,f=f*x+y*A,h=h*x+E*A,p=p*x+S*A,x===1-a){const O=1/Math.sqrt(c*c+f*f+h*h+p*p);c*=O,f*=O,h*=O,p*=O}}e[n]=c,e[n+1]=f,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],c=i[r+1],f=i[r+2],h=i[r+3],p=s[o],m=s[o+1],y=s[o+2],E=s[o+3];return e[n]=a*E+h*p+c*y-f*m,e[n+1]=c*E+h*m+f*p-a*y,e[n+2]=f*E+h*y+a*m-c*p,e[n+3]=h*E-a*p-c*m-f*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,f=a(i/2),h=a(r/2),p=a(s/2),m=c(i/2),y=c(r/2),E=c(s/2);switch(o){case"XYZ":this._x=m*h*p+f*y*E,this._y=f*y*p-m*h*E,this._z=f*h*E+m*y*p,this._w=f*h*p-m*y*E;break;case"YXZ":this._x=m*h*p+f*y*E,this._y=f*y*p-m*h*E,this._z=f*h*E-m*y*p,this._w=f*h*p+m*y*E;break;case"ZXY":this._x=m*h*p-f*y*E,this._y=f*y*p+m*h*E,this._z=f*h*E+m*y*p,this._w=f*h*p-m*y*E;break;case"ZYX":this._x=m*h*p-f*y*E,this._y=f*y*p+m*h*E,this._z=f*h*E-m*y*p,this._w=f*h*p+m*y*E;break;case"YZX":this._x=m*h*p+f*y*E,this._y=f*y*p+m*h*E,this._z=f*h*E-m*y*p,this._w=f*h*p-m*y*E;break;case"XZY":this._x=m*h*p-f*y*E,this._y=f*y*p-m*h*E,this._z=f*h*E+m*y*p,this._w=f*h*p+m*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],c=n[9],f=n[2],h=n[6],p=n[10],m=i+a+p;if(m>0){const y=.5/Math.sqrt(m+1);this._w=.25/y,this._x=(h-c)*y,this._y=(s-f)*y,this._z=(o-r)*y}else if(i>a&&i>p){const y=2*Math.sqrt(1+i-a-p);this._w=(h-c)/y,this._x=.25*y,this._y=(r+o)/y,this._z=(s+f)/y}else if(a>p){const y=2*Math.sqrt(1+a-i-p);this._w=(s-f)/y,this._x=(r+o)/y,this._y=.25*y,this._z=(c+h)/y}else{const y=2*Math.sqrt(1+p-i-a);this._w=(o-r)/y,this._x=(s+f)/y,this._y=(c+h)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ei(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,c=n._y,f=n._z,h=n._w;return this._x=i*h+o*a+r*f-s*c,this._y=r*h+o*c+s*a-i*f,this._z=s*h+o*f+i*c-r*a,this._w=o*h-i*a-r*c-s*f,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const y=1-n;return this._w=y*o+n*this._w,this._x=y*i+n*this._x,this._y=y*r+n*this._y,this._z=y*s+n*this._z,this.normalize(),this}const f=Math.sqrt(c),h=Math.atan2(f,a),p=Math.sin((1-n)*h)/f,m=Math.sin(n*h)/f;return this._w=o*p+this._w*m,this._x=i*p+this._x*m,this._y=r*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,n=0,i=0){ie.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(S0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(S0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,f=2*(o*r-a*i),h=2*(a*n-s*r),p=2*(s*i-o*n);return this.x=n+c*f+o*p-a*h,this.y=i+c*h+a*f-s*p,this.z=r+c*p+s*h-o*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,c=n.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yd.copy(this).projectOnVector(e),this.sub(Yd)}reflect(e){return this.sub(Yd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ei(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yd=new ie,S0=new Wl;class jl{constructor(e=new ie(1/0,1/0,1/0),n=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fi):Fi.fromBufferAttribute(s,o),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rc.copy(i.boundingBox)),Rc.applyMatrix4(e.matrixWorld),this.union(Rc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Va),Pc.subVectors(this.max,Va),yo.subVectors(e.a,Va),xo.subVectors(e.b,Va),So.subVectors(e.c,Va),Qr.subVectors(xo,yo),Zr.subVectors(So,xo),Us.subVectors(yo,So);let n=[0,-Qr.z,Qr.y,0,-Zr.z,Zr.y,0,-Us.z,Us.y,Qr.z,0,-Qr.x,Zr.z,0,-Zr.x,Us.z,0,-Us.x,-Qr.y,Qr.x,0,-Zr.y,Zr.x,0,-Us.y,Us.x,0];return!Kd(n,yo,xo,So,Pc)||(n=[1,0,0,0,1,0,0,0,1],!Kd(n,yo,xo,So,Pc))?!1:(Lc.crossVectors(Qr,Zr),n=[Lc.x,Lc.y,Lc.z],Kd(n,yo,xo,So,Pc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wr=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Fi=new ie,Rc=new jl,yo=new ie,xo=new ie,So=new ie,Qr=new ie,Zr=new ie,Us=new ie,Va=new ie,Pc=new ie,Lc=new ie,Os=new ie;function Kd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Os.fromArray(t,s);const a=r.x*Math.abs(Os.x)+r.y*Math.abs(Os.y)+r.z*Math.abs(Os.z),c=e.dot(Os),f=n.dot(Os),h=i.dot(Os);if(Math.max(-Math.max(c,f,h),Math.min(c,f,h))>a)return!1}return!0}const CC=new jl,Ga=new ie,Qd=new ie;class Nm{constructor(e=new ie,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):CC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ga.subVectors(e,this.center);const n=Ga.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ga,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ga.copy(e.center).add(Qd)),this.expandByPoint(Ga.copy(e.center).sub(Qd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tr=new ie,Zd=new ie,Dc=new ie,Jr=new ie,Jd=new ie,Nc=new ie,eh=new ie;class AC{constructor(e=new ie,n=new ie(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Tr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Tr.copy(this.origin).addScaledVector(this.direction,n),Tr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Zd.copy(e).add(n).multiplyScalar(.5),Dc.copy(n).sub(e).normalize(),Jr.copy(this.origin).sub(Zd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Dc),a=Jr.dot(this.direction),c=-Jr.dot(Dc),f=Jr.lengthSq(),h=Math.abs(1-o*o);let p,m,y,E;if(h>0)if(p=o*c-a,m=o*a-c,E=s*h,p>=0)if(m>=-E)if(m<=E){const S=1/h;p*=S,m*=S,y=p*(p+o*m+2*a)+m*(o*p+m+2*c)+f}else m=s,p=Math.max(0,-(o*m+a)),y=-p*p+m*(m+2*c)+f;else m=-s,p=Math.max(0,-(o*m+a)),y=-p*p+m*(m+2*c)+f;else m<=-E?(p=Math.max(0,-(-o*s+a)),m=p>0?-s:Math.min(Math.max(-s,-c),s),y=-p*p+m*(m+2*c)+f):m<=E?(p=0,m=Math.min(Math.max(-s,-c),s),y=m*(m+2*c)+f):(p=Math.max(0,-(o*s+a)),m=p>0?s:Math.min(Math.max(-s,-c),s),y=-p*p+m*(m+2*c)+f);else m=o>0?-s:s,p=Math.max(0,-(o*m+a)),y=-p*p+m*(m+2*c)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Zd).addScaledVector(Dc,m),y}intersectSphere(e,n){Tr.subVectors(e.center,this.origin);const i=Tr.dot(this.direction),r=Tr.dot(Tr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,c;const f=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,m=this.origin;return f>=0?(i=(e.min.x-m.x)*f,r=(e.max.x-m.x)*f):(i=(e.max.x-m.x)*f,r=(e.min.x-m.x)*f),h>=0?(s=(e.min.y-m.y)*h,o=(e.max.y-m.y)*h):(s=(e.max.y-m.y)*h,o=(e.min.y-m.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-m.z)*p,c=(e.max.z-m.z)*p):(a=(e.max.z-m.z)*p,c=(e.min.z-m.z)*p),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Tr)!==null}intersectTriangle(e,n,i,r,s){Jd.subVectors(n,e),Nc.subVectors(i,e),eh.crossVectors(Jd,Nc);let o=this.direction.dot(eh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Jr.subVectors(this.origin,e);const c=a*this.direction.dot(Nc.crossVectors(Jr,Nc));if(c<0)return null;const f=a*this.direction.dot(Jd.cross(Jr));if(f<0||c+f>o)return null;const h=-a*Jr.dot(eh);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yn{constructor(e,n,i,r,s,o,a,c,f,h,p,m,y,E,S,x){yn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,c,f,h,p,m,y,E,S,x)}set(e,n,i,r,s,o,a,c,f,h,p,m,y,E,S,x){const g=this.elements;return g[0]=e,g[4]=n,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=f,g[6]=h,g[10]=p,g[14]=m,g[3]=y,g[7]=E,g[11]=S,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yn().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Eo.setFromMatrixColumn(e,0).length(),s=1/Eo.setFromMatrixColumn(e,1).length(),o=1/Eo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),f=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=o*h,y=o*p,E=a*h,S=a*p;n[0]=c*h,n[4]=-c*p,n[8]=f,n[1]=y+E*f,n[5]=m-S*f,n[9]=-a*c,n[2]=S-m*f,n[6]=E+y*f,n[10]=o*c}else if(e.order==="YXZ"){const m=c*h,y=c*p,E=f*h,S=f*p;n[0]=m+S*a,n[4]=E*a-y,n[8]=o*f,n[1]=o*p,n[5]=o*h,n[9]=-a,n[2]=y*a-E,n[6]=S+m*a,n[10]=o*c}else if(e.order==="ZXY"){const m=c*h,y=c*p,E=f*h,S=f*p;n[0]=m-S*a,n[4]=-o*p,n[8]=E+y*a,n[1]=y+E*a,n[5]=o*h,n[9]=S-m*a,n[2]=-o*f,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){const m=o*h,y=o*p,E=a*h,S=a*p;n[0]=c*h,n[4]=E*f-y,n[8]=m*f+S,n[1]=c*p,n[5]=S*f+m,n[9]=y*f-E,n[2]=-f,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){const m=o*c,y=o*f,E=a*c,S=a*f;n[0]=c*h,n[4]=S-m*p,n[8]=E*p+y,n[1]=p,n[5]=o*h,n[9]=-a*h,n[2]=-f*h,n[6]=y*p+E,n[10]=m-S*p}else if(e.order==="XZY"){const m=o*c,y=o*f,E=a*c,S=a*f;n[0]=c*h,n[4]=-p,n[8]=f*h,n[1]=m*p+S,n[5]=o*h,n[9]=y*p-E,n[2]=E*p-y,n[6]=a*h,n[10]=S*p+m}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RC,e,PC)}lookAt(e,n,i){const r=this.elements;return ci.subVectors(e,n),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),es.crossVectors(i,ci),es.lengthSq()===0&&(Math.abs(i.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),es.crossVectors(i,ci)),es.normalize(),Ic.crossVectors(ci,es),r[0]=es.x,r[4]=Ic.x,r[8]=ci.x,r[1]=es.y,r[5]=Ic.y,r[9]=ci.y,r[2]=es.z,r[6]=Ic.z,r[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],c=i[8],f=i[12],h=i[1],p=i[5],m=i[9],y=i[13],E=i[2],S=i[6],x=i[10],g=i[14],M=i[3],w=i[7],A=i[11],O=i[15],N=r[0],d=r[4],z=r[8],D=r[12],R=r[1],H=r[5],oe=r[9],q=r[13],fe=r[2],me=r[6],ue=r[10],pe=r[14],W=r[3],de=r[7],ve=r[11],Ce=r[15];return s[0]=o*N+a*R+c*fe+f*W,s[4]=o*d+a*H+c*me+f*de,s[8]=o*z+a*oe+c*ue+f*ve,s[12]=o*D+a*q+c*pe+f*Ce,s[1]=h*N+p*R+m*fe+y*W,s[5]=h*d+p*H+m*me+y*de,s[9]=h*z+p*oe+m*ue+y*ve,s[13]=h*D+p*q+m*pe+y*Ce,s[2]=E*N+S*R+x*fe+g*W,s[6]=E*d+S*H+x*me+g*de,s[10]=E*z+S*oe+x*ue+g*ve,s[14]=E*D+S*q+x*pe+g*Ce,s[3]=M*N+w*R+A*fe+O*W,s[7]=M*d+w*H+A*me+O*de,s[11]=M*z+w*oe+A*ue+O*ve,s[15]=M*D+w*q+A*pe+O*Ce,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],f=e[13],h=e[2],p=e[6],m=e[10],y=e[14],E=e[3],S=e[7],x=e[11],g=e[15];return E*(+s*c*p-r*f*p-s*a*m+i*f*m+r*a*y-i*c*y)+S*(+n*c*y-n*f*m+s*o*m-r*o*y+r*f*h-s*c*h)+x*(+n*f*p-n*a*y-s*o*p+i*o*y+s*a*h-i*f*h)+g*(-r*a*h-n*c*p+n*a*m+r*o*p-i*o*m+i*c*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],f=e[7],h=e[8],p=e[9],m=e[10],y=e[11],E=e[12],S=e[13],x=e[14],g=e[15],M=p*x*f-S*m*f+S*c*y-a*x*y-p*c*g+a*m*g,w=E*m*f-h*x*f-E*c*y+o*x*y+h*c*g-o*m*g,A=h*S*f-E*p*f+E*a*y-o*S*y-h*a*g+o*p*g,O=E*p*c-h*S*c-E*a*m+o*S*m+h*a*x-o*p*x,N=n*M+i*w+r*A+s*O;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const d=1/N;return e[0]=M*d,e[1]=(S*m*s-p*x*s-S*r*y+i*x*y+p*r*g-i*m*g)*d,e[2]=(a*x*s-S*c*s+S*r*f-i*x*f-a*r*g+i*c*g)*d,e[3]=(p*c*s-a*m*s-p*r*f+i*m*f+a*r*y-i*c*y)*d,e[4]=w*d,e[5]=(h*x*s-E*m*s+E*r*y-n*x*y-h*r*g+n*m*g)*d,e[6]=(E*c*s-o*x*s-E*r*f+n*x*f+o*r*g-n*c*g)*d,e[7]=(o*m*s-h*c*s+h*r*f-n*m*f-o*r*y+n*c*y)*d,e[8]=A*d,e[9]=(E*p*s-h*S*s-E*i*y+n*S*y+h*i*g-n*p*g)*d,e[10]=(o*S*s-E*a*s+E*i*f-n*S*f-o*i*g+n*a*g)*d,e[11]=(h*a*s-o*p*s-h*i*f+n*p*f+o*i*y-n*a*y)*d,e[12]=O*d,e[13]=(h*S*r-E*p*r+E*i*m-n*S*m-h*i*x+n*p*x)*d,e[14]=(E*a*r-o*S*r-E*i*c+n*S*c+o*i*x-n*a*x)*d,e[15]=(o*p*r-h*a*r+h*i*c-n*p*c-o*i*m+n*a*m)*d,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,c=e.z,f=s*o,h=s*a;return this.set(f*o+i,f*a-r*c,f*c+r*a,0,f*a+r*c,h*a+i,h*c-r*o,0,f*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,c=n._w,f=s+s,h=o+o,p=a+a,m=s*f,y=s*h,E=s*p,S=o*h,x=o*p,g=a*p,M=c*f,w=c*h,A=c*p,O=i.x,N=i.y,d=i.z;return r[0]=(1-(S+g))*O,r[1]=(y+A)*O,r[2]=(E-w)*O,r[3]=0,r[4]=(y-A)*N,r[5]=(1-(m+g))*N,r[6]=(x+M)*N,r[7]=0,r[8]=(E+w)*d,r[9]=(x-M)*d,r[10]=(1-(m+S))*d,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Eo.set(r[0],r[1],r[2]).length();const o=Eo.set(r[4],r[5],r[6]).length(),a=Eo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zi.copy(this);const f=1/s,h=1/o,p=1/a;return zi.elements[0]*=f,zi.elements[1]*=f,zi.elements[2]*=f,zi.elements[4]*=h,zi.elements[5]*=h,zi.elements[6]*=h,zi.elements[8]*=p,zi.elements[9]*=p,zi.elements[10]*=p,n.setFromRotationMatrix(zi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=kr){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),p=(n+e)/(n-e),m=(i+r)/(i-r);let y,E;if(a===kr)y=-(o+s)/(o-s),E=-2*o*s/(o-s);else if(a===Gu)y=-o/(o-s),E=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=kr){const c=this.elements,f=1/(n-e),h=1/(i-r),p=1/(o-s),m=(n+e)*f,y=(i+r)*h;let E,S;if(a===kr)E=(o+s)*p,S=-2*p;else if(a===Gu)E=s*p,S=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*f,c[4]=0,c[8]=0,c[12]=-m,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-y,c[2]=0,c[6]=0,c[10]=S,c[14]=-E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Eo=new ie,zi=new yn,RC=new ie(0,0,0),PC=new ie(1,1,1),es=new ie,Ic=new ie,ci=new ie,E0=new yn,M0=new Wl;class Hr{constructor(e=0,n=0,i=0,r=Hr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],f=r[5],h=r[9],p=r[2],m=r[6],y=r[10];switch(n){case"XYZ":this._y=Math.asin(ei(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,y),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-ei(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,y),this._z=Math.atan2(c,f)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(ei(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,y),this._z=Math.atan2(-o,f)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ei(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,f));break;case"YZX":this._z=Math.asin(ei(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,f),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,y));break;case"XZY":this._z=Math.asin(-ei(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return E0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(E0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return M0.setFromEuler(this),this.setFromQuaternion(M0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hr.DEFAULT_ORDER="XYZ";class cS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let LC=0;const w0=new ie,Mo=new Wl,br=new yn,kc=new ie,Wa=new ie,DC=new ie,NC=new Wl,T0=new ie(1,0,0),b0=new ie(0,1,0),C0=new ie(0,0,1),A0={type:"added"},IC={type:"removed"},wo={type:"childadded",child:null},th={type:"childremoved",child:null};class pi extends Sa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LC++}),this.uuid=Gl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pi.DEFAULT_UP.clone();const e=new ie,n=new Hr,i=new Wl,r=new ie(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yn},normalMatrix:{value:new ht}}),this.matrix=new yn,this.matrixWorld=new yn,this.matrixAutoUpdate=pi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Mo.setFromAxisAngle(e,n),this.quaternion.multiply(Mo),this}rotateOnWorldAxis(e,n){return Mo.setFromAxisAngle(e,n),this.quaternion.premultiply(Mo),this}rotateX(e){return this.rotateOnAxis(T0,e)}rotateY(e){return this.rotateOnAxis(b0,e)}rotateZ(e){return this.rotateOnAxis(C0,e)}translateOnAxis(e,n){return w0.copy(e).applyQuaternion(this.quaternion),this.position.add(w0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(T0,e)}translateY(e){return this.translateOnAxis(b0,e)}translateZ(e){return this.translateOnAxis(C0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(br.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?kc.copy(e):kc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?br.lookAt(Wa,kc,this.up):br.lookAt(kc,Wa,this.up),this.quaternion.setFromRotationMatrix(br),r&&(br.extractRotation(r.matrixWorld),Mo.setFromRotationMatrix(br),this.quaternion.premultiply(Mo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(A0),wo.child=e,this.dispatchEvent(wo),wo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(IC),th.child=e,this.dispatchEvent(th),th.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),br.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),br.multiply(e.parent.matrixWorld)),e.applyMatrix4(br),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(A0),wo.child=e,this.dispatchEvent(wo),wo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,e,DC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,NC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let f=0,h=c.length;f<h;f++){const p=c[f];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,f=this.material.length;c<f;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(n){const a=o(e.geometries),c=o(e.materials),f=o(e.textures),h=o(e.images),p=o(e.shapes),m=o(e.skeletons),y=o(e.animations),E=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),f.length>0&&(i.textures=f),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),m.length>0&&(i.skeletons=m),y.length>0&&(i.animations=y),E.length>0&&(i.nodes=E)}return i.object=r,i;function o(a){const c=[];for(const f in a){const h=a[f];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}pi.DEFAULT_UP=new ie(0,1,0);pi.DEFAULT_MATRIX_AUTO_UPDATE=!0;pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bi=new ie,Cr=new ie,nh=new ie,Ar=new ie,To=new ie,bo=new ie,R0=new ie,ih=new ie,rh=new ie,sh=new ie;class dr{constructor(e=new ie,n=new ie,i=new ie){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bi.subVectors(e,n),r.cross(Bi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Bi.subVectors(r,n),Cr.subVectors(i,n),nh.subVectors(e,n);const o=Bi.dot(Bi),a=Bi.dot(Cr),c=Bi.dot(nh),f=Cr.dot(Cr),h=Cr.dot(nh),p=o*f-a*a;if(p===0)return s.set(0,0,0),null;const m=1/p,y=(f*c-a*h)*m,E=(o*h-a*c)*m;return s.set(1-y-E,E,y)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ar)===null?!1:Ar.x>=0&&Ar.y>=0&&Ar.x+Ar.y<=1}static getInterpolation(e,n,i,r,s,o,a,c){return this.getBarycoord(e,n,i,r,Ar)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ar.x),c.addScaledVector(o,Ar.y),c.addScaledVector(a,Ar.z),c)}static isFrontFacing(e,n,i,r){return Bi.subVectors(i,n),Cr.subVectors(e,n),Bi.cross(Cr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),Cr.subVectors(this.a,this.b),Bi.cross(Cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return dr.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return dr.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return dr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;To.subVectors(r,i),bo.subVectors(s,i),ih.subVectors(e,i);const c=To.dot(ih),f=bo.dot(ih);if(c<=0&&f<=0)return n.copy(i);rh.subVectors(e,r);const h=To.dot(rh),p=bo.dot(rh);if(h>=0&&p<=h)return n.copy(r);const m=c*p-h*f;if(m<=0&&c>=0&&h<=0)return o=c/(c-h),n.copy(i).addScaledVector(To,o);sh.subVectors(e,s);const y=To.dot(sh),E=bo.dot(sh);if(E>=0&&y<=E)return n.copy(s);const S=y*f-c*E;if(S<=0&&f>=0&&E<=0)return a=f/(f-E),n.copy(i).addScaledVector(bo,a);const x=h*E-y*p;if(x<=0&&p-h>=0&&y-E>=0)return R0.subVectors(s,r),a=(p-h)/(p-h+(y-E)),n.copy(r).addScaledVector(R0,a);const g=1/(x+S+m);return o=S*g,a=m*g,n.copy(i).addScaledVector(To,o).addScaledVector(bo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const uS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},Uc={h:0,s:0,l:0};function oh(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class zt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=or){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ft.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ft.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ft.workingColorSpace){if(e=_C(e,1),n=ei(n,0,1),i=ei(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=oh(o,s,e+1/3),this.g=oh(o,s,e),this.b=oh(o,s,e-1/3)}return Ft.toWorkingColorSpace(this,r),this}setStyle(e,n=or){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=or){const i=uS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}copyLinearToSRGB(e){return this.r=Xd(e.r),this.g=Xd(e.g),this.b=Xd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=or){return Ft.fromWorkingColorSpace(Fn.copy(this),e),Math.round(ei(Fn.r*255,0,255))*65536+Math.round(ei(Fn.g*255,0,255))*256+Math.round(ei(Fn.b*255,0,255))}getHexString(e=or){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ft.workingColorSpace){Ft.fromWorkingColorSpace(Fn.copy(this),n);const i=Fn.r,r=Fn.g,s=Fn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,f;const h=(a+o)/2;if(a===o)c=0,f=0;else{const p=o-a;switch(f=h<=.5?p/(o+a):p/(2-o-a),o){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=f,e.l=h,e}getRGB(e,n=Ft.workingColorSpace){return Ft.fromWorkingColorSpace(Fn.copy(this),n),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=or){Ft.fromWorkingColorSpace(Fn.copy(this),e);const n=Fn.r,i=Fn.g,r=Fn.b;return e!==or?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+n,ts.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ts),e.getHSL(Uc);const i=jd(ts.h,Uc.h,n),r=jd(ts.s,Uc.s,n),s=jd(ts.l,Uc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new zt;zt.NAMES=uS;let kC=0;class yf extends Sa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kC++}),this.uuid=Gl(),this.name="",this.type="Material",this.blending=Jo,this.side=Ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vp,this.blendDst=_p,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Fu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=m0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Jo&&(i.blending=this.blending),this.side!==Ms&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vp&&(i.blendSrc=this.blendSrc),this.blendDst!==_p&&(i.blendDst=this.blendDst),this.blendEquation!==$s&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==m0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Im extends yf{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hr,this.combine=Kx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new ie,Oc=new Ut;class vr{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=g0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=us,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return oS("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Oc.fromBufferAttribute(this,n),Oc.applyMatrix3(e),this.setXY(n,Oc.x,Oc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix3(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix4(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)dn.fromBufferAttribute(this,n),dn.applyNormalMatrix(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)dn.fromBufferAttribute(this,n),dn.transformDirection(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ha(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ha(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ha(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ha(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ha(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Zn(n,this.array),i=Zn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Zn(n,this.array),i=Zn(i,this.array),r=Zn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Zn(n,this.array),i=Zn(i,this.array),r=Zn(r,this.array),s=Zn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==g0&&(e.usage=this.usage),e}}class fS extends vr{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class dS extends vr{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class to extends vr{constructor(e,n,i){super(new Float32Array(e),n,i)}}let UC=0;const wi=new yn,ah=new pi,Co=new ie,ui=new jl,ja=new jl,Mn=new ie;class uo extends Sa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UC++}),this.uuid=Gl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sS(e)?dS:fS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ht().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,n,i){return wi.makeTranslation(e,n,i),this.applyMatrix4(wi),this}scale(e,n,i){return wi.makeScale(e,n,i),this.applyMatrix4(wi),this}lookAt(e){return ah.lookAt(e),ah.updateMatrix(),this.applyMatrix4(ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Co).negate(),this.translate(Co.x,Co.y,Co.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new to(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ui.setFromBufferAttribute(s),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const i=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ja.setFromBufferAttribute(a),this.morphTargetsRelative?(Mn.addVectors(ui.min,ja.min),ui.expandByPoint(Mn),Mn.addVectors(ui.max,ja.max),ui.expandByPoint(Mn)):(ui.expandByPoint(ja.min),ui.expandByPoint(ja.max))}ui.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Mn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Mn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],c=this.morphTargetsRelative;for(let f=0,h=a.count;f<h;f++)Mn.fromBufferAttribute(a,f),c&&(Co.fromBufferAttribute(e,f),Mn.add(Co)),r=Math.max(r,i.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let z=0;z<i.count;z++)a[z]=new ie,c[z]=new ie;const f=new ie,h=new ie,p=new ie,m=new Ut,y=new Ut,E=new Ut,S=new ie,x=new ie;function g(z,D,R){f.fromBufferAttribute(i,z),h.fromBufferAttribute(i,D),p.fromBufferAttribute(i,R),m.fromBufferAttribute(s,z),y.fromBufferAttribute(s,D),E.fromBufferAttribute(s,R),h.sub(f),p.sub(f),y.sub(m),E.sub(m);const H=1/(y.x*E.y-E.x*y.y);isFinite(H)&&(S.copy(h).multiplyScalar(E.y).addScaledVector(p,-y.y).multiplyScalar(H),x.copy(p).multiplyScalar(y.x).addScaledVector(h,-E.x).multiplyScalar(H),a[z].add(S),a[D].add(S),a[R].add(S),c[z].add(x),c[D].add(x),c[R].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let z=0,D=M.length;z<D;++z){const R=M[z],H=R.start,oe=R.count;for(let q=H,fe=H+oe;q<fe;q+=3)g(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const w=new ie,A=new ie,O=new ie,N=new ie;function d(z){O.fromBufferAttribute(r,z),N.copy(O);const D=a[z];w.copy(D),w.sub(O.multiplyScalar(O.dot(D))).normalize(),A.crossVectors(N,D);const H=A.dot(c[z])<0?-1:1;o.setXYZW(z,w.x,w.y,w.z,H)}for(let z=0,D=M.length;z<D;++z){const R=M[z],H=R.start,oe=R.count;for(let q=H,fe=H+oe;q<fe;q+=3)d(e.getX(q+0)),d(e.getX(q+1)),d(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vr(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let m=0,y=i.count;m<y;m++)i.setXYZ(m,0,0,0);const r=new ie,s=new ie,o=new ie,a=new ie,c=new ie,f=new ie,h=new ie,p=new ie;if(e)for(let m=0,y=e.count;m<y;m+=3){const E=e.getX(m+0),S=e.getX(m+1),x=e.getX(m+2);r.fromBufferAttribute(n,E),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,x),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),a.fromBufferAttribute(i,E),c.fromBufferAttribute(i,S),f.fromBufferAttribute(i,x),a.add(h),c.add(h),f.add(h),i.setXYZ(E,a.x,a.y,a.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(x,f.x,f.y,f.z)}else for(let m=0,y=n.count;m<y;m+=3)r.fromBufferAttribute(n,m+0),s.fromBufferAttribute(n,m+1),o.fromBufferAttribute(n,m+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),i.setXYZ(m+0,h.x,h.y,h.z),i.setXYZ(m+1,h.x,h.y,h.z),i.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Mn.fromBufferAttribute(e,n),Mn.normalize(),e.setXYZ(n,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(a,c){const f=a.array,h=a.itemSize,p=a.normalized,m=new f.constructor(c.length*h);let y=0,E=0;for(let S=0,x=c.length;S<x;S++){a.isInterleavedBufferAttribute?y=c[S]*a.data.stride+a.offset:y=c[S]*h;for(let g=0;g<h;g++)m[E++]=f[y++]}return new vr(m,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new uo,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],f=e(c,i);n.setAttribute(a,f)}const s=this.morphAttributes;for(const a in s){const c=[],f=s[a];for(let h=0,p=f.length;h<p;h++){const m=f[h],y=e(m,i);c.push(y)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const f=o[a];n.addGroup(f.start,f.count,f.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const f in c)c[f]!==void 0&&(e[f]=c[f]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const f=i[c];e.data.attributes[c]=f.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const f=this.morphAttributes[c],h=[];for(let p=0,m=f.length;p<m;p++){const y=f[p];h.push(y.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const f in r){const h=r[f];this.setAttribute(f,h.clone(n))}const s=e.morphAttributes;for(const f in s){const h=[],p=s[f];for(let m=0,y=p.length;m<y;m++)h.push(p[m].clone(n));this.morphAttributes[f]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let f=0,h=o.length;f<h;f++){const p=o[f];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const P0=new yn,Fs=new AC,Fc=new Nm,L0=new ie,Ao=new ie,Ro=new ie,Po=new ie,lh=new ie,zc=new ie,Bc=new Ut,Hc=new Ut,Vc=new Ut,D0=new ie,N0=new ie,I0=new ie,Gc=new ie,Wc=new ie;class pr extends pi{constructor(e=new uo,n=new Im){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){zc.set(0,0,0);for(let c=0,f=s.length;c<f;c++){const h=a[c],p=s[c];h!==0&&(lh.fromBufferAttribute(p,e),o?zc.addScaledVector(lh,h):zc.addScaledVector(lh.sub(n),h))}n.add(zc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fc.copy(i.boundingSphere),Fc.applyMatrix4(s),Fs.copy(e.ray).recast(e.near),!(Fc.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(Fc,L0)===null||Fs.origin.distanceToSquared(L0)>(e.far-e.near)**2))&&(P0.copy(s).invert(),Fs.copy(e.ray).applyMatrix4(P0),!(i.boundingBox!==null&&Fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Fs)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,f=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,m=s.groups,y=s.drawRange;if(a!==null)if(Array.isArray(o))for(let E=0,S=m.length;E<S;E++){const x=m[E],g=o[x.materialIndex],M=Math.max(x.start,y.start),w=Math.min(a.count,Math.min(x.start+x.count,y.start+y.count));for(let A=M,O=w;A<O;A+=3){const N=a.getX(A),d=a.getX(A+1),z=a.getX(A+2);r=jc(this,g,e,i,f,h,p,N,d,z),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const E=Math.max(0,y.start),S=Math.min(a.count,y.start+y.count);for(let x=E,g=S;x<g;x+=3){const M=a.getX(x),w=a.getX(x+1),A=a.getX(x+2);r=jc(this,o,e,i,f,h,p,M,w,A),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let E=0,S=m.length;E<S;E++){const x=m[E],g=o[x.materialIndex],M=Math.max(x.start,y.start),w=Math.min(c.count,Math.min(x.start+x.count,y.start+y.count));for(let A=M,O=w;A<O;A+=3){const N=A,d=A+1,z=A+2;r=jc(this,g,e,i,f,h,p,N,d,z),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const E=Math.max(0,y.start),S=Math.min(c.count,y.start+y.count);for(let x=E,g=S;x<g;x+=3){const M=x,w=x+1,A=x+2;r=jc(this,o,e,i,f,h,p,M,w,A),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function OC(t,e,n,i,r,s,o,a){let c;if(e.side===si?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Ms,a),c===null)return null;Wc.copy(a),Wc.applyMatrix4(t.matrixWorld);const f=n.ray.origin.distanceTo(Wc);return f<n.near||f>n.far?null:{distance:f,point:Wc.clone(),object:t}}function jc(t,e,n,i,r,s,o,a,c,f){t.getVertexPosition(a,Ao),t.getVertexPosition(c,Ro),t.getVertexPosition(f,Po);const h=OC(t,e,n,i,Ao,Ro,Po,Gc);if(h){r&&(Bc.fromBufferAttribute(r,a),Hc.fromBufferAttribute(r,c),Vc.fromBufferAttribute(r,f),h.uv=dr.getInterpolation(Gc,Ao,Ro,Po,Bc,Hc,Vc,new Ut)),s&&(Bc.fromBufferAttribute(s,a),Hc.fromBufferAttribute(s,c),Vc.fromBufferAttribute(s,f),h.uv1=dr.getInterpolation(Gc,Ao,Ro,Po,Bc,Hc,Vc,new Ut)),o&&(D0.fromBufferAttribute(o,a),N0.fromBufferAttribute(o,c),I0.fromBufferAttribute(o,f),h.normal=dr.getInterpolation(Gc,Ao,Ro,Po,D0,N0,I0,new ie),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:c,c:f,normal:new ie,materialIndex:0};dr.getNormal(Ao,Ro,Po,p.normal),h.face=p}return h}class Ea extends uo{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],f=[],h=[],p=[];let m=0,y=0;E("z","y","x",-1,-1,i,n,e,o,s,0),E("z","y","x",1,-1,i,n,-e,o,s,1),E("x","z","y",1,1,e,i,n,r,o,2),E("x","z","y",1,-1,e,i,-n,r,o,3),E("x","y","z",1,-1,e,n,i,r,s,4),E("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new to(f,3)),this.setAttribute("normal",new to(h,3)),this.setAttribute("uv",new to(p,2));function E(S,x,g,M,w,A,O,N,d,z,D){const R=A/d,H=O/z,oe=A/2,q=O/2,fe=N/2,me=d+1,ue=z+1;let pe=0,W=0;const de=new ie;for(let ve=0;ve<ue;ve++){const Ce=ve*H-q;for(let We=0;We<me;We++){const mt=We*R-oe;de[S]=mt*M,de[x]=Ce*w,de[g]=fe,f.push(de.x,de.y,de.z),de[S]=0,de[x]=0,de[g]=N>0?1:-1,h.push(de.x,de.y,de.z),p.push(We/d),p.push(1-ve/z),pe+=1}}for(let ve=0;ve<z;ve++)for(let Ce=0;Ce<d;Ce++){const We=m+Ce+me*ve,mt=m+Ce+me*(ve+1),se=m+(Ce+1)+me*(ve+1),Se=m+(Ce+1)+me*ve;c.push(We,mt,Se),c.push(mt,se,Se),W+=6}a.addGroup(y,W,D),y+=W,m+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ea(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ma(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function jn(t){const e={};for(let n=0;n<t.length;n++){const i=ma(t[n]);for(const r in i)e[r]=i[r]}return e}function FC(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function hS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ft.workingColorSpace}const zC={clone:ma,merge:jn};var BC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ts extends yf{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BC,this.fragmentShader=HC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ma(e.uniforms),this.uniformsGroups=FC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class pS extends pi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yn,this.projectionMatrix=new yn,this.projectionMatrixInverse=new yn,this.coordinateSystem=kr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new ie,k0=new Ut,U0=new Ut;class Ci extends pS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Mp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mp*2*Math.atan(Math.tan(Wd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,n){return this.getViewBounds(e,k0,U0),n.subVectors(U0,k0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Wd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,f=o.fullHeight;s+=o.offsetX*r/c,n-=o.offsetY*i/f,r*=o.width/c,i*=o.height/f}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Lo=-90,Do=1;class VC extends pi{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ci(Lo,Do,e,n);r.layers=this.layers,this.add(r);const s=new Ci(Lo,Do,e,n);s.layers=this.layers,this.add(s);const o=new Ci(Lo,Do,e,n);o.layers=this.layers,this.add(o);const a=new Ci(Lo,Do,e,n);a.layers=this.layers,this.add(a);const c=new Ci(Lo,Do,e,n);c.layers=this.layers,this.add(c);const f=new Ci(Lo,Do,e,n);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,c]=n;for(const f of n)this.remove(f);if(e===kr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Gu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of n)this.add(f),f.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,f,h]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,f),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(p,m,y),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class mS extends oi{constructor(e,n,i,r,s,o,a,c,f,h){e=e!==void 0?e:[],n=n!==void 0?n:ua,super(e,n,i,r,s,o,a,c,f,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class GC extends ao{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new mS(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ji}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ea(5,5,5),s=new Ts({name:"CubemapFromEquirect",uniforms:ma(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:si,blending:ys});s.uniforms.tEquirect.value=n;const o=new pr(r,s),a=n.minFilter;return n.minFilter===Zs&&(n.minFilter=ji),new VC(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ch=new ie,WC=new ie,jC=new ht;class Ws{constructor(e=new ie(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ch.subVectors(i,n).cross(WC.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ch),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||jC.getNormalMatrix(e),r=this.coplanarPoint(ch).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zs=new Nm,$c=new ie;class gS{constructor(e=new Ws,n=new Ws,i=new Ws,r=new Ws,s=new Ws,o=new Ws){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=kr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],f=r[4],h=r[5],p=r[6],m=r[7],y=r[8],E=r[9],S=r[10],x=r[11],g=r[12],M=r[13],w=r[14],A=r[15];if(i[0].setComponents(c-s,m-f,x-y,A-g).normalize(),i[1].setComponents(c+s,m+f,x+y,A+g).normalize(),i[2].setComponents(c+o,m+h,x+E,A+M).normalize(),i[3].setComponents(c-o,m-h,x-E,A-M).normalize(),i[4].setComponents(c-a,m-p,x-S,A-w).normalize(),n===kr)i[5].setComponents(c+a,m+p,x+S,A+w).normalize();else if(n===Gu)i[5].setComponents(a,p,S,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){return zs.center.set(0,0,0),zs.radius=.7071067811865476,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if($c.x=r.normal.x>0?e.max.x:e.min.x,$c.y=r.normal.y>0?e.max.y:e.min.y,$c.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($c)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vS(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function $C(t){const e=new WeakMap;function n(a,c){const f=a.array,h=a.usage,p=f.byteLength,m=t.createBuffer();t.bindBuffer(c,m),t.bufferData(c,f,h),a.onUploadCallback();let y;if(f instanceof Float32Array)y=t.FLOAT;else if(f instanceof Uint16Array)a.isFloat16BufferAttribute?y=t.HALF_FLOAT:y=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=t.SHORT;else if(f instanceof Uint32Array)y=t.UNSIGNED_INT;else if(f instanceof Int32Array)y=t.INT;else if(f instanceof Int8Array)y=t.BYTE;else if(f instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,c,f){const h=c.array,p=c._updateRange,m=c.updateRanges;if(t.bindBuffer(f,a),p.count===-1&&m.length===0&&t.bufferSubData(f,0,h),m.length!==0){for(let y=0,E=m.length;y<E;y++){const S=m[y];t.bufferSubData(f,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}p.count!==-1&&(t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count),p.count=-1),c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(t.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const f=e.get(a);if(f===void 0)e.set(a,n(a,c));else if(f.version<a.version){if(f.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,a,c),f.version=a.version}}return{get:r,remove:s,update:o}}class xf extends uo{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),c=Math.floor(r),f=a+1,h=c+1,p=e/a,m=n/c,y=[],E=[],S=[],x=[];for(let g=0;g<h;g++){const M=g*m-o;for(let w=0;w<f;w++){const A=w*p-s;E.push(A,-M,0),S.push(0,0,1),x.push(w/a),x.push(1-g/c)}}for(let g=0;g<c;g++)for(let M=0;M<a;M++){const w=M+f*g,A=M+f*(g+1),O=M+1+f*(g+1),N=M+1+f*g;y.push(w,A,N),y.push(A,O,N)}this.setIndex(y),this.setAttribute("position",new to(E,3)),this.setAttribute("normal",new to(S,3)),this.setAttribute("uv",new to(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xf(e.width,e.height,e.widthSegments,e.heightSegments)}}var XC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qC=`#ifdef USE_ALPHAHASH
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
#endif`,YC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JC=`#ifdef USE_AOMAP
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
#endif`,eA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tA=`#ifdef USE_BATCHING
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
#endif`,nA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,iA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oA=`#ifdef USE_IRIDESCENCE
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
#endif`,aA=`#ifdef USE_BUMPMAP
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
#endif`,lA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mA=`#if defined( USE_COLOR_ALPHA )
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
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,gA=`#define PI 3.141592653589793
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
} // validated`,vA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_A=`vec3 transformedNormal = objectNormal;
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
#endif`,xA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MA="gl_FragColor = linearToOutputTexel( gl_FragColor );",wA=`
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
}`,TA=`#ifdef USE_ENVMAP
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
#endif`,bA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,CA=`#ifdef USE_ENVMAP
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
#endif`,AA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RA=`#ifdef USE_ENVMAP
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
#endif`,PA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IA=`#ifdef USE_GRADIENTMAP
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
}`,kA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UA=`LambertMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FA=`uniform bool receiveShadow;
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
#endif`,zA=`#ifdef USE_ENVMAP
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
#endif`,BA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WA=`PhysicalMaterial material;
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
#endif`,jA=`struct PhysicalMaterial {
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
}`,$A=`
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
#endif`,XA=`#if defined( RE_IndirectDiffuse )
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
#endif`,qA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nR=`#if defined( USE_POINTS_UV )
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
#endif`,iR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lR=`#ifdef USE_MORPHTARGETS
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
#endif`,cR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mR=`#ifdef USE_NORMALMAP
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
#endif`,gR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_R=`#ifdef USE_CLEARCOATMAP
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
#endif`,xR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ER=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,LR=`float getShadowMask() {
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
}`,DR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NR=`#ifdef USE_SKINNING
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
#endif`,IR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kR=`#ifdef USE_SKINNING
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
#endif`,UR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,BR=`#ifdef USE_TRANSMISSION
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
#endif`,HR=`#ifdef USE_TRANSMISSION
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
#endif`,VR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $R=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XR=`uniform sampler2D t2D;
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
}`,qR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,KR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZR=`#include <common>
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
}`,JR=`#if DEPTH_PACKING == 3200
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
}`,eP=`#define DISTANCE
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
}`,tP=`#define DISTANCE
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
}`,nP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rP=`uniform float scale;
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
}`,sP=`uniform vec3 diffuse;
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
}`,oP=`#include <common>
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
}`,aP=`uniform vec3 diffuse;
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
}`,lP=`#define LAMBERT
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
}`,cP=`#define LAMBERT
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
}`,uP=`#define MATCAP
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
}`,fP=`#define MATCAP
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
}`,dP=`#define NORMAL
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
}`,hP=`#define NORMAL
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
}`,pP=`#define PHONG
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
}`,mP=`#define PHONG
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
}`,gP=`#define STANDARD
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
}`,vP=`#define STANDARD
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
}`,_P=`#define TOON
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
}`,xP=`uniform float size;
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
}`,SP=`uniform vec3 diffuse;
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
}`,EP=`#include <common>
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
}`,MP=`uniform vec3 color;
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
}`,wP=`uniform float rotation;
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
}`,TP=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:XC,alphahash_pars_fragment:qC,alphamap_fragment:YC,alphamap_pars_fragment:KC,alphatest_fragment:QC,alphatest_pars_fragment:ZC,aomap_fragment:JC,aomap_pars_fragment:eA,batching_pars_vertex:tA,batching_vertex:nA,begin_vertex:iA,beginnormal_vertex:rA,bsdfs:sA,iridescence_fragment:oA,bumpmap_pars_fragment:aA,clipping_planes_fragment:lA,clipping_planes_pars_fragment:cA,clipping_planes_pars_vertex:uA,clipping_planes_vertex:fA,color_fragment:dA,color_pars_fragment:hA,color_pars_vertex:pA,color_vertex:mA,common:gA,cube_uv_reflection_fragment:vA,defaultnormal_vertex:_A,displacementmap_pars_vertex:yA,displacementmap_vertex:xA,emissivemap_fragment:SA,emissivemap_pars_fragment:EA,colorspace_fragment:MA,colorspace_pars_fragment:wA,envmap_fragment:TA,envmap_common_pars_fragment:bA,envmap_pars_fragment:CA,envmap_pars_vertex:AA,envmap_physical_pars_fragment:zA,envmap_vertex:RA,fog_vertex:PA,fog_pars_vertex:LA,fog_fragment:DA,fog_pars_fragment:NA,gradientmap_pars_fragment:IA,lightmap_pars_fragment:kA,lights_lambert_fragment:UA,lights_lambert_pars_fragment:OA,lights_pars_begin:FA,lights_toon_fragment:BA,lights_toon_pars_fragment:HA,lights_phong_fragment:VA,lights_phong_pars_fragment:GA,lights_physical_fragment:WA,lights_physical_pars_fragment:jA,lights_fragment_begin:$A,lights_fragment_maps:XA,lights_fragment_end:qA,logdepthbuf_fragment:YA,logdepthbuf_pars_fragment:KA,logdepthbuf_pars_vertex:QA,logdepthbuf_vertex:ZA,map_fragment:JA,map_pars_fragment:eR,map_particle_fragment:tR,map_particle_pars_fragment:nR,metalnessmap_fragment:iR,metalnessmap_pars_fragment:rR,morphinstance_vertex:sR,morphcolor_vertex:oR,morphnormal_vertex:aR,morphtarget_pars_vertex:lR,morphtarget_vertex:cR,normal_fragment_begin:uR,normal_fragment_maps:fR,normal_pars_fragment:dR,normal_pars_vertex:hR,normal_vertex:pR,normalmap_pars_fragment:mR,clearcoat_normal_fragment_begin:gR,clearcoat_normal_fragment_maps:vR,clearcoat_pars_fragment:_R,iridescence_pars_fragment:yR,opaque_fragment:xR,packing:SR,premultiplied_alpha_fragment:ER,project_vertex:MR,dithering_fragment:wR,dithering_pars_fragment:TR,roughnessmap_fragment:bR,roughnessmap_pars_fragment:CR,shadowmap_pars_fragment:AR,shadowmap_pars_vertex:RR,shadowmap_vertex:PR,shadowmask_pars_fragment:LR,skinbase_vertex:DR,skinning_pars_vertex:NR,skinning_vertex:IR,skinnormal_vertex:kR,specularmap_fragment:UR,specularmap_pars_fragment:OR,tonemapping_fragment:FR,tonemapping_pars_fragment:zR,transmission_fragment:BR,transmission_pars_fragment:HR,uv_pars_fragment:VR,uv_pars_vertex:GR,uv_vertex:WR,worldpos_vertex:jR,background_vert:$R,background_frag:XR,backgroundCube_vert:qR,backgroundCube_frag:YR,cube_vert:KR,cube_frag:QR,depth_vert:ZR,depth_frag:JR,distanceRGBA_vert:eP,distanceRGBA_frag:tP,equirect_vert:nP,equirect_frag:iP,linedashed_vert:rP,linedashed_frag:sP,meshbasic_vert:oP,meshbasic_frag:aP,meshlambert_vert:lP,meshlambert_frag:cP,meshmatcap_vert:uP,meshmatcap_frag:fP,meshnormal_vert:dP,meshnormal_frag:hP,meshphong_vert:pP,meshphong_frag:mP,meshphysical_vert:gP,meshphysical_frag:vP,meshtoon_vert:_P,meshtoon_frag:yP,points_vert:xP,points_frag:SP,shadow_vert:EP,shadow_frag:MP,sprite_vert:wP,sprite_frag:TP},Pe={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},lr={basic:{uniforms:jn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:jn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new zt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:jn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:jn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:jn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new zt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:jn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:jn([Pe.points,Pe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:jn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:jn([Pe.common,Pe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:jn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:jn([Pe.sprite,Pe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:jn([Pe.common,Pe.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:jn([Pe.lights,Pe.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};lr.physical={uniforms:jn([lr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Xc={r:0,b:0,g:0},Bs=new Hr,bP=new yn;function CP(t,e,n,i,r,s,o){const a=new zt(0);let c=s===!0?0:1,f,h,p=null,m=0,y=null;function E(M){let w=M.isScene===!0?M.background:null;return w&&w.isTexture&&(w=(M.backgroundBlurriness>0?n:e).get(w)),w}function S(M){let w=!1;const A=E(M);A===null?g(a,c):A&&A.isColor&&(g(A,1),w=!0);const O=t.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(M,w){const A=E(w);A&&(A.isCubeTexture||A.mapping===gf)?(h===void 0&&(h=new pr(new Ea(1,1,1),new Ts({name:"BackgroundCubeMaterial",uniforms:ma(lr.backgroundCube.uniforms),vertexShader:lr.backgroundCube.vertexShader,fragmentShader:lr.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,N,d){this.matrixWorld.copyPosition(d.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Bs.copy(w.backgroundRotation),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bP.makeRotationFromEuler(Bs)),h.material.toneMapped=Ft.getTransfer(A.colorSpace)!==Yt,(p!==A||m!==A.version||y!==t.toneMapping)&&(h.material.needsUpdate=!0,p=A,m=A.version,y=t.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(f===void 0&&(f=new pr(new xf(2,2),new Ts({name:"BackgroundMaterial",uniforms:ma(lr.background.uniforms),vertexShader:lr.background.vertexShader,fragmentShader:lr.background.fragmentShader,side:Ms,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=A,f.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,f.material.toneMapped=Ft.getTransfer(A.colorSpace)!==Yt,A.matrixAutoUpdate===!0&&A.updateMatrix(),f.material.uniforms.uvTransform.value.copy(A.matrix),(p!==A||m!==A.version||y!==t.toneMapping)&&(f.material.needsUpdate=!0,p=A,m=A.version,y=t.toneMapping),f.layers.enableAll(),M.unshift(f,f.geometry,f.material,0,0,null))}function g(M,w){M.getRGB(Xc,hS(t)),i.buffers.color.setClear(Xc.r,Xc.g,Xc.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),c=w,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,g(a,c)},render:S,addToRenderList:x}}function AP(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=m(null);let s=r,o=!1;function a(R,H,oe,q,fe){let me=!1;const ue=p(q,oe,H);s!==ue&&(s=ue,f(s.object)),me=y(R,q,oe,fe),me&&E(R,q,oe,fe),fe!==null&&e.update(fe,t.ELEMENT_ARRAY_BUFFER),(me||o)&&(o=!1,A(R,H,oe,q),fe!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function c(){return t.createVertexArray()}function f(R){return t.bindVertexArray(R)}function h(R){return t.deleteVertexArray(R)}function p(R,H,oe){const q=oe.wireframe===!0;let fe=i[R.id];fe===void 0&&(fe={},i[R.id]=fe);let me=fe[H.id];me===void 0&&(me={},fe[H.id]=me);let ue=me[q];return ue===void 0&&(ue=m(c()),me[q]=ue),ue}function m(R){const H=[],oe=[],q=[];for(let fe=0;fe<n;fe++)H[fe]=0,oe[fe]=0,q[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:oe,attributeDivisors:q,object:R,attributes:{},index:null}}function y(R,H,oe,q){const fe=s.attributes,me=H.attributes;let ue=0;const pe=oe.getAttributes();for(const W in pe)if(pe[W].location>=0){const ve=fe[W];let Ce=me[W];if(Ce===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(Ce=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(Ce=R.instanceColor)),ve===void 0||ve.attribute!==Ce||Ce&&ve.data!==Ce.data)return!0;ue++}return s.attributesNum!==ue||s.index!==q}function E(R,H,oe,q){const fe={},me=H.attributes;let ue=0;const pe=oe.getAttributes();for(const W in pe)if(pe[W].location>=0){let ve=me[W];ve===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(ve=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(ve=R.instanceColor));const Ce={};Ce.attribute=ve,ve&&ve.data&&(Ce.data=ve.data),fe[W]=Ce,ue++}s.attributes=fe,s.attributesNum=ue,s.index=q}function S(){const R=s.newAttributes;for(let H=0,oe=R.length;H<oe;H++)R[H]=0}function x(R){g(R,0)}function g(R,H){const oe=s.newAttributes,q=s.enabledAttributes,fe=s.attributeDivisors;oe[R]=1,q[R]===0&&(t.enableVertexAttribArray(R),q[R]=1),fe[R]!==H&&(t.vertexAttribDivisor(R,H),fe[R]=H)}function M(){const R=s.newAttributes,H=s.enabledAttributes;for(let oe=0,q=H.length;oe<q;oe++)H[oe]!==R[oe]&&(t.disableVertexAttribArray(oe),H[oe]=0)}function w(R,H,oe,q,fe,me,ue){ue===!0?t.vertexAttribIPointer(R,H,oe,fe,me):t.vertexAttribPointer(R,H,oe,q,fe,me)}function A(R,H,oe,q){S();const fe=q.attributes,me=oe.getAttributes(),ue=H.defaultAttributeValues;for(const pe in me){const W=me[pe];if(W.location>=0){let de=fe[pe];if(de===void 0&&(pe==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),pe==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),de!==void 0){const ve=de.normalized,Ce=de.itemSize,We=e.get(de);if(We===void 0)continue;const mt=We.buffer,se=We.type,Se=We.bytesPerElement,Ne=se===t.INT||se===t.UNSIGNED_INT||de.gpuType===Zx;if(de.isInterleavedBufferAttribute){const Ae=de.data,pt=Ae.stride,st=de.offset;if(Ae.isInstancedInterleavedBuffer){for(let rt=0;rt<W.locationSize;rt++)g(W.location+rt,Ae.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let rt=0;rt<W.locationSize;rt++)x(W.location+rt);t.bindBuffer(t.ARRAY_BUFFER,mt);for(let rt=0;rt<W.locationSize;rt++)w(W.location+rt,Ce/W.locationSize,se,ve,pt*Se,(st+Ce/W.locationSize*rt)*Se,Ne)}else{if(de.isInstancedBufferAttribute){for(let Ae=0;Ae<W.locationSize;Ae++)g(W.location+Ae,de.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ae=0;Ae<W.locationSize;Ae++)x(W.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,mt);for(let Ae=0;Ae<W.locationSize;Ae++)w(W.location+Ae,Ce/W.locationSize,se,ve,Ce*Se,Ce/W.locationSize*Ae*Se,Ne)}}else if(ue!==void 0){const ve=ue[pe];if(ve!==void 0)switch(ve.length){case 2:t.vertexAttrib2fv(W.location,ve);break;case 3:t.vertexAttrib3fv(W.location,ve);break;case 4:t.vertexAttrib4fv(W.location,ve);break;default:t.vertexAttrib1fv(W.location,ve)}}}}M()}function O(){z();for(const R in i){const H=i[R];for(const oe in H){const q=H[oe];for(const fe in q)h(q[fe].object),delete q[fe];delete H[oe]}delete i[R]}}function N(R){if(i[R.id]===void 0)return;const H=i[R.id];for(const oe in H){const q=H[oe];for(const fe in q)h(q[fe].object),delete q[fe];delete H[oe]}delete i[R.id]}function d(R){for(const H in i){const oe=i[H];if(oe[R.id]===void 0)continue;const q=oe[R.id];for(const fe in q)h(q[fe].object),delete q[fe];delete oe[R.id]}}function z(){D(),o=!0,s!==r&&(s=r,f(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:z,resetDefaultState:D,dispose:O,releaseStatesOfGeometry:N,releaseStatesOfProgram:d,initAttributes:S,enableAttribute:x,disableUnusedAttributes:M}}function RP(t,e,n){let i;function r(f){i=f}function s(f,h){t.drawArrays(i,f,h),n.update(h,i,1)}function o(f,h,p){p!==0&&(t.drawArraysInstanced(i,f,h,p),n.update(h,i,p))}function a(f,h,p){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<p;y++)this.render(f[y],h[y]);else{m.multiDrawArraysWEBGL(i,f,0,h,0,p);let y=0;for(let E=0;E<p;E++)y+=h[E];n.update(y,i,1)}}function c(f,h,p,m){if(p===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<f.length;E++)o(f[E],h[E],m[E]);else{y.multiDrawArraysInstancedWEBGL(i,f,0,h,0,m,0,p);let E=0;for(let S=0;S<p;S++)E+=h[S];for(let S=0;S<m.length;S++)n.update(E,i,m[S])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function PP(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(N){return!(N!==hr&&i.convert(N)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){const d=N===vf&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==ws&&i.convert(N)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==us&&!d)}function c(N){if(N==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=n.precision!==void 0?n.precision:"highp";const h=c(f);h!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",h,"instead."),f=h);const p=n.logarithmicDepthBuffer===!0,m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),S=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),w=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=y>0,O=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:f,logarithmicDepthBuffer:p,maxTextures:m,maxVertexTextures:y,maxTextureSize:E,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:g,maxVaryings:M,maxFragmentUniforms:w,vertexTextures:A,maxSamples:O}}function LP(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ws,a=new ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const y=p.length!==0||m||i!==0||r;return r=m,i=p.length,y},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){n=h(p,m,0)},this.setState=function(p,m,y){const E=p.clippingPlanes,S=p.clipIntersection,x=p.clipShadows,g=t.get(p);if(!r||E===null||E.length===0||s&&!x)s?h(null):f();else{const M=s?0:i,w=M*4;let A=g.clippingState||null;c.value=A,A=h(E,m,w,y);for(let O=0;O!==w;++O)A[O]=n[O];g.clippingState=A,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function f(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,m,y,E){const S=p!==null?p.length:0;let x=null;if(S!==0){if(x=c.value,E!==!0||x===null){const g=y+S*4,M=m.matrixWorldInverse;a.getNormalMatrix(M),(x===null||x.length<g)&&(x=new Float32Array(g));for(let w=0,A=y;w!==S;++w,A+=4)o.copy(p[w]).applyMatrix4(M,a),o.normal.toArray(x,A),x[A+3]=o.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,x}}function DP(t){let e=new WeakMap;function n(o,a){return a===yp?o.mapping=ua:a===xp&&(o.mapping=fa),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===yp||a===xp)if(e.has(o)){const c=e.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const f=new GC(c.height);return f.fromEquirectangularTexture(t,o),e.set(o,f),o.addEventListener("dispose",r),n(f.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class NP extends pS{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,o=s+f*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const $o=4,O0=[.125,.215,.35,.446,.526,.582],Xs=20,uh=new NP,F0=new zt;let fh=null,dh=0,hh=0,ph=!1;const js=(1+Math.sqrt(5))/2,No=1/js,z0=[new ie(-js,No,0),new ie(js,No,0),new ie(-No,0,js),new ie(No,0,js),new ie(0,js,-No),new ie(0,js,No),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)];class B0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){fh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=G0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=V0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fh,dh,hh),this._renderer.xr.enabled=ph,e.scissorTest=!1,qc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ua||e.mapping===fa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ji,minFilter:ji,generateMipmaps:!1,type:vf,format:hr,colorSpace:Rs,depthBuffer:!1},r=H0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=H0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IP(s)),this._blurMaterial=kP(s,e,n)}return r}_compileMaterial(e){const n=new pr(this._lodPlanes[0],e);this._renderer.compile(n,uh)}_sceneToCubeUV(e,n,i,r){const a=new Ci(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,m=h.toneMapping;h.getClearColor(F0),h.toneMapping=xs,h.autoClear=!1;const y=new Im({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1}),E=new pr(new Ea,y);let S=!1;const x=e.background;x?x.isColor&&(y.color.copy(x),e.background=null,S=!0):(y.color.copy(F0),S=!0);for(let g=0;g<6;g++){const M=g%3;M===0?(a.up.set(0,c[g],0),a.lookAt(f[g],0,0)):M===1?(a.up.set(0,0,c[g]),a.lookAt(0,f[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,f[g]));const w=this._cubeSize;qc(r,M*w,g>2?w:0,w,w),h.setRenderTarget(r),S&&h.render(E,a),h.render(e,a)}E.geometry.dispose(),E.material.dispose(),h.toneMapping=m,h.autoClear=p,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ua||e.mapping===fa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=G0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=V0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new pr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;qc(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,uh)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=z0[(r-s-1)%z0.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const c=this._renderer,f=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new pr(this._lodPlanes[r],f),m=f.uniforms,y=this._sizeLods[i]-1,E=isFinite(s)?Math.PI/(2*y):2*Math.PI/(2*Xs-1),S=s/E,x=isFinite(s)?1+Math.floor(h*S):Xs;x>Xs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Xs}`);const g=[];let M=0;for(let d=0;d<Xs;++d){const z=d/S,D=Math.exp(-z*z/2);g.push(D),d===0?M+=D:d<x&&(M+=2*D)}for(let d=0;d<g.length;d++)g[d]=g[d]/M;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=g,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:w}=this;m.dTheta.value=E,m.mipInt.value=w-i;const A=this._sizeLods[r],O=3*A*(r>w-$o?r-w+$o:0),N=4*(this._cubeSize-A);qc(n,O,N,3*A,2*A),c.setRenderTarget(n),c.render(p,uh)}}function IP(t){const e=[],n=[],i=[];let r=t;const s=t-$o+1+O0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let c=1/a;o>t-$o?c=O0[o-t+$o-1]:o===0&&(c=0),i.push(c);const f=1/(a-2),h=-f,p=1+f,m=[h,h,p,h,p,p,h,h,p,p,h,p],y=6,E=6,S=3,x=2,g=1,M=new Float32Array(S*E*y),w=new Float32Array(x*E*y),A=new Float32Array(g*E*y);for(let N=0;N<y;N++){const d=N%3*2/3-1,z=N>2?0:-1,D=[d,z,0,d+2/3,z,0,d+2/3,z+1,0,d,z,0,d+2/3,z+1,0,d,z+1,0];M.set(D,S*E*N),w.set(m,x*E*N);const R=[N,N,N,N,N,N];A.set(R,g*E*N)}const O=new uo;O.setAttribute("position",new vr(M,S)),O.setAttribute("uv",new vr(w,x)),O.setAttribute("faceIndex",new vr(A,g)),e.push(O),r>$o&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function H0(t,e,n){const i=new ao(t,e,n);return i.texture.mapping=gf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function kP(t,e,n){const i=new Float32Array(Xs),r=new ie(0,1,0);return new Ts({name:"SphericalGaussianBlur",defines:{n:Xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:km(),fragmentShader:`

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
		`,blending:ys,depthTest:!1,depthWrite:!1})}function V0(){return new Ts({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:km(),fragmentShader:`

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
		`,blending:ys,depthTest:!1,depthWrite:!1})}function G0(){return new Ts({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:km(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ys,depthTest:!1,depthWrite:!1})}function km(){return`

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
	`}function UP(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const c=a.mapping,f=c===yp||c===xp,h=c===ua||c===fa;if(f||h){let p=e.get(a);const m=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return n===null&&(n=new B0(t)),p=f?n.fromEquirectangular(a,p):n.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{const y=a.image;return f&&y&&y.height>0||h&&y&&r(y)?(n===null&&(n=new B0(t)),p=f?n.fromEquirectangular(a):n.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let c=0;const f=6;for(let h=0;h<f;h++)a[h]!==void 0&&c++;return c===f}function s(a){const c=a.target;c.removeEventListener("dispose",s);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function OP(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&oS("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function FP(t,e,n,i){const r={},s=new WeakMap;function o(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const E in m.attributes)e.remove(m.attributes[E]);for(const E in m.morphAttributes){const S=m.morphAttributes[E];for(let x=0,g=S.length;x<g;x++)e.remove(S[x])}m.removeEventListener("dispose",o),delete r[m.id];const y=s.get(m);y&&(e.remove(y),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,n.memory.geometries--}function a(p,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,n.memory.geometries++),m}function c(p){const m=p.attributes;for(const E in m)e.update(m[E],t.ARRAY_BUFFER);const y=p.morphAttributes;for(const E in y){const S=y[E];for(let x=0,g=S.length;x<g;x++)e.update(S[x],t.ARRAY_BUFFER)}}function f(p){const m=[],y=p.index,E=p.attributes.position;let S=0;if(y!==null){const M=y.array;S=y.version;for(let w=0,A=M.length;w<A;w+=3){const O=M[w+0],N=M[w+1],d=M[w+2];m.push(O,N,N,d,d,O)}}else if(E!==void 0){const M=E.array;S=E.version;for(let w=0,A=M.length/3-1;w<A;w+=3){const O=w+0,N=w+1,d=w+2;m.push(O,N,N,d,d,O)}}else return;const x=new(sS(m)?dS:fS)(m,1);x.version=S;const g=s.get(p);g&&e.remove(g),s.set(p,x)}function h(p){const m=s.get(p);if(m){const y=p.index;y!==null&&m.version<y.version&&f(p)}else f(p);return s.get(p)}return{get:a,update:c,getWireframeAttribute:h}}function zP(t,e,n){let i;function r(m){i=m}let s,o;function a(m){s=m.type,o=m.bytesPerElement}function c(m,y){t.drawElements(i,y,s,m*o),n.update(y,i,1)}function f(m,y,E){E!==0&&(t.drawElementsInstanced(i,y,s,m*o,E),n.update(y,i,E))}function h(m,y,E){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<E;x++)this.render(m[x]/o,y[x]);else{S.multiDrawElementsWEBGL(i,y,0,s,m,0,E);let x=0;for(let g=0;g<E;g++)x+=y[g];n.update(x,i,1)}}function p(m,y,E,S){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<m.length;g++)f(m[g]/o,y[g],S[g]);else{x.multiDrawElementsInstancedWEBGL(i,y,0,s,m,0,S,0,E);let g=0;for(let M=0;M<E;M++)g+=y[M];for(let M=0;M<S.length;M++)n.update(g,i,S[M])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function BP(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function HP(t,e,n){const i=new WeakMap,r=new Ln;function s(o,a,c){const f=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0;let m=i.get(a);if(m===void 0||m.count!==p){let R=function(){z.dispose(),i.delete(a),a.removeEventListener("dispose",R)};var y=R;m!==void 0&&m.texture.dispose();const E=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let A=0;E===!0&&(A=1),S===!0&&(A=2),x===!0&&(A=3);let O=a.attributes.position.count*A,N=1;O>e.maxTextureSize&&(N=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const d=new Float32Array(O*N*4*p),z=new lS(d,O,N,p);z.type=us,z.needsUpdate=!0;const D=A*4;for(let H=0;H<p;H++){const oe=g[H],q=M[H],fe=w[H],me=O*N*4*H;for(let ue=0;ue<oe.count;ue++){const pe=ue*D;E===!0&&(r.fromBufferAttribute(oe,ue),d[me+pe+0]=r.x,d[me+pe+1]=r.y,d[me+pe+2]=r.z,d[me+pe+3]=0),S===!0&&(r.fromBufferAttribute(q,ue),d[me+pe+4]=r.x,d[me+pe+5]=r.y,d[me+pe+6]=r.z,d[me+pe+7]=0),x===!0&&(r.fromBufferAttribute(fe,ue),d[me+pe+8]=r.x,d[me+pe+9]=r.y,d[me+pe+10]=r.z,d[me+pe+11]=fe.itemSize===4?r.w:1)}}m={count:p,texture:z,size:new Ut(O,N)},i.set(a,m),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let E=0;for(let x=0;x<f.length;x++)E+=f[x];const S=a.morphTargetsRelative?1:1-E;c.getUniforms().setValue(t,"morphTargetBaseInfluence",S),c.getUniforms().setValue(t,"morphTargetInfluences",f)}c.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}return{update:s}}function VP(t,e,n,i){let r=new WeakMap;function s(c){const f=i.render.frame,h=c.geometry,p=e.get(c,h);if(r.get(p)!==f&&(e.update(p),r.set(p,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==f&&(m.update(),r.set(m,f))}return p}function o(){r=new WeakMap}function a(c){const f=c.target;f.removeEventListener("dispose",a),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:s,dispose:o}}class _S extends oi{constructor(e,n,i,r,s,o,a,c,f,h=ea){if(h!==ea&&h!==pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ea&&(i=da),i===void 0&&h===pa&&(i=ha),super(null,r,s,o,a,c,h,i,f),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Ri,this.minFilter=c!==void 0?c:Ri,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const yS=new oi,xS=new _S(1,1);xS.compareFunction=rS;const SS=new lS,ES=new bC,MS=new mS,W0=[],j0=[],$0=new Float32Array(16),X0=new Float32Array(9),q0=new Float32Array(4);function Ma(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=W0[r];if(s===void 0&&(s=new Float32Array(r),W0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function xn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Sn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Sf(t,e){let n=j0[e];n===void 0&&(n=new Int32Array(e),j0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function GP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function WP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xn(n,e))return;t.uniform2fv(this.addr,e),Sn(n,e)}}function jP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(xn(n,e))return;t.uniform3fv(this.addr,e),Sn(n,e)}}function $P(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xn(n,e))return;t.uniform4fv(this.addr,e),Sn(n,e)}}function XP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(xn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Sn(n,e)}else{if(xn(n,i))return;q0.set(i),t.uniformMatrix2fv(this.addr,!1,q0),Sn(n,i)}}function qP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(xn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Sn(n,e)}else{if(xn(n,i))return;X0.set(i),t.uniformMatrix3fv(this.addr,!1,X0),Sn(n,i)}}function YP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(xn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Sn(n,e)}else{if(xn(n,i))return;$0.set(i),t.uniformMatrix4fv(this.addr,!1,$0),Sn(n,i)}}function KP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function QP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xn(n,e))return;t.uniform2iv(this.addr,e),Sn(n,e)}}function ZP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xn(n,e))return;t.uniform3iv(this.addr,e),Sn(n,e)}}function JP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xn(n,e))return;t.uniform4iv(this.addr,e),Sn(n,e)}}function e2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function t2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xn(n,e))return;t.uniform2uiv(this.addr,e),Sn(n,e)}}function n2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xn(n,e))return;t.uniform3uiv(this.addr,e),Sn(n,e)}}function i2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xn(n,e))return;t.uniform4uiv(this.addr,e),Sn(n,e)}}function r2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?xS:yS;n.setTexture2D(e||s,r)}function s2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||ES,r)}function o2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||MS,r)}function a2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||SS,r)}function l2(t){switch(t){case 5126:return GP;case 35664:return WP;case 35665:return jP;case 35666:return $P;case 35674:return XP;case 35675:return qP;case 35676:return YP;case 5124:case 35670:return KP;case 35667:case 35671:return QP;case 35668:case 35672:return ZP;case 35669:case 35673:return JP;case 5125:return e2;case 36294:return t2;case 36295:return n2;case 36296:return i2;case 35678:case 36198:case 36298:case 36306:case 35682:return r2;case 35679:case 36299:case 36307:return s2;case 35680:case 36300:case 36308:case 36293:return o2;case 36289:case 36303:case 36311:case 36292:return a2}}function c2(t,e){t.uniform1fv(this.addr,e)}function u2(t,e){const n=Ma(e,this.size,2);t.uniform2fv(this.addr,n)}function f2(t,e){const n=Ma(e,this.size,3);t.uniform3fv(this.addr,n)}function d2(t,e){const n=Ma(e,this.size,4);t.uniform4fv(this.addr,n)}function h2(t,e){const n=Ma(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function p2(t,e){const n=Ma(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function m2(t,e){const n=Ma(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function g2(t,e){t.uniform1iv(this.addr,e)}function v2(t,e){t.uniform2iv(this.addr,e)}function _2(t,e){t.uniform3iv(this.addr,e)}function y2(t,e){t.uniform4iv(this.addr,e)}function x2(t,e){t.uniform1uiv(this.addr,e)}function S2(t,e){t.uniform2uiv(this.addr,e)}function E2(t,e){t.uniform3uiv(this.addr,e)}function M2(t,e){t.uniform4uiv(this.addr,e)}function w2(t,e,n){const i=this.cache,r=e.length,s=Sf(n,r);xn(i,s)||(t.uniform1iv(this.addr,s),Sn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||yS,s[o])}function T2(t,e,n){const i=this.cache,r=e.length,s=Sf(n,r);xn(i,s)||(t.uniform1iv(this.addr,s),Sn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||ES,s[o])}function b2(t,e,n){const i=this.cache,r=e.length,s=Sf(n,r);xn(i,s)||(t.uniform1iv(this.addr,s),Sn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||MS,s[o])}function C2(t,e,n){const i=this.cache,r=e.length,s=Sf(n,r);xn(i,s)||(t.uniform1iv(this.addr,s),Sn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||SS,s[o])}function A2(t){switch(t){case 5126:return c2;case 35664:return u2;case 35665:return f2;case 35666:return d2;case 35674:return h2;case 35675:return p2;case 35676:return m2;case 5124:case 35670:return g2;case 35667:case 35671:return v2;case 35668:case 35672:return _2;case 35669:case 35673:return y2;case 5125:return x2;case 36294:return S2;case 36295:return E2;case 36296:return M2;case 35678:case 36198:case 36298:case 36306:case 35682:return w2;case 35679:case 36299:case 36307:return T2;case 35680:case 36300:case 36308:case 36293:return b2;case 36289:case 36303:case 36311:case 36292:return C2}}class R2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=l2(n.type)}}class P2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=A2(n.type)}}class L2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const mh=/(\w+)(\])?(\[|\.)?/g;function Y0(t,e){t.seq.push(e),t.map[e.id]=e}function D2(t,e,n){const i=t.name,r=i.length;for(mh.lastIndex=0;;){const s=mh.exec(i),o=mh.lastIndex;let a=s[1];const c=s[2]==="]",f=s[3];if(c&&(a=a|0),f===void 0||f==="["&&o+2===r){Y0(n,f===void 0?new R2(a,t,e):new P2(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new L2(a),Y0(n,p)),n=p}}}class cu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);D2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function K0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const N2=37297;let I2=0;function k2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function U2(t){const e=Ft.getPrimaries(Ft.workingColorSpace),n=Ft.getPrimaries(t);let i;switch(e===n?i="":e===Vu&&n===Hu?i="LinearDisplayP3ToLinearSRGB":e===Hu&&n===Vu&&(i="LinearSRGBToLinearDisplayP3"),t){case Rs:case _f:return[i,"LinearTransferOETF"];case or:case Dm:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Q0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+k2(t.getShaderSource(e),o)}else return r}function O2(t,e){const n=U2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function F2(t,e){let n;switch(e){case Gb:n="Linear";break;case Wb:n="Reinhard";break;case jb:n="OptimizedCineon";break;case $b:n="ACESFilmic";break;case qb:n="AgX";break;case Yb:n="Neutral";break;case Xb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function z2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Za).join(`
`)}function B2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function H2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Za(t){return t!==""}function Z0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function J0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const V2=/^[ \t]*#include +<([\w\d./]+)>/gm;function wp(t){return t.replace(V2,W2)}const G2=new Map;function W2(t,e){let n=dt[e];if(n===void 0){const i=G2.get(e);if(i!==void 0)n=dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wp(n)}const j2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function e_(t){return t.replace(j2,$2)}function $2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function t_(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function X2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Yx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===mb?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Rr&&(e="SHADOWMAP_TYPE_VSM"),e}function q2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ua:case fa:e="ENVMAP_TYPE_CUBE";break;case gf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Y2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case fa:e="ENVMAP_MODE_REFRACTION";break}return e}function K2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Kx:e="ENVMAP_BLENDING_MULTIPLY";break;case Hb:e="ENVMAP_BLENDING_MIX";break;case Vb:e="ENVMAP_BLENDING_ADD";break}return e}function Q2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Z2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=X2(n),f=q2(n),h=Y2(n),p=K2(n),m=Q2(n),y=z2(n),E=B2(s),S=r.createProgram();let x,g,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Za).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Za).join(`
`),g.length>0&&(g+=`
`)):(x=[t_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Za).join(`
`),g=[t_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xs?"#define TONE_MAPPING":"",n.toneMapping!==xs?dt.tonemapping_pars_fragment:"",n.toneMapping!==xs?F2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,O2("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Za).join(`
`)),o=wp(o),o=Z0(o,n),o=J0(o,n),a=wp(a),a=Z0(a,n),a=J0(a,n),o=e_(o),a=e_(a),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",n.glslVersion===v0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===v0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const w=M+x+o,A=M+g+a,O=K0(r,r.VERTEX_SHADER,w),N=K0(r,r.FRAGMENT_SHADER,A);r.attachShader(S,O),r.attachShader(S,N),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function d(H){if(t.debug.checkShaderErrors){const oe=r.getProgramInfoLog(S).trim(),q=r.getShaderInfoLog(O).trim(),fe=r.getShaderInfoLog(N).trim();let me=!0,ue=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(me=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,O,N);else{const pe=Q0(r,O,"vertex"),W=Q0(r,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+oe+`
`+pe+`
`+W)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(q===""||fe==="")&&(ue=!1);ue&&(H.diagnostics={runnable:me,programLog:oe,vertexShader:{log:q,prefix:x},fragmentShader:{log:fe,prefix:g}})}r.deleteShader(O),r.deleteShader(N),z=new cu(r,S),D=H2(r,S)}let z;this.getUniforms=function(){return z===void 0&&d(this),z};let D;this.getAttributes=function(){return D===void 0&&d(this),D};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(S,N2)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=I2++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=O,this.fragmentShader=N,this}let J2=0;class e3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new t3(e),n.set(e,i)),i}}class t3{constructor(e){this.id=J2++,this.code=e,this.usedTimes=0}}function n3(t,e,n,i,r,s,o){const a=new cS,c=new e3,f=new Set,h=[],p=r.logarithmicDepthBuffer,m=r.vertexTextures;let y=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(D){return f.add(D),D===0?"uv":`uv${D}`}function x(D,R,H,oe,q){const fe=oe.fog,me=q.geometry,ue=D.isMeshStandardMaterial?oe.environment:null,pe=(D.isMeshStandardMaterial?n:e).get(D.envMap||ue),W=pe&&pe.mapping===gf?pe.image.height:null,de=E[D.type];D.precision!==null&&(y=r.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const ve=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,Ce=ve!==void 0?ve.length:0;let We=0;me.morphAttributes.position!==void 0&&(We=1),me.morphAttributes.normal!==void 0&&(We=2),me.morphAttributes.color!==void 0&&(We=3);let mt,se,Se,Ne;if(de){const Pt=lr[de];mt=Pt.vertexShader,se=Pt.fragmentShader}else mt=D.vertexShader,se=D.fragmentShader,c.update(D),Se=c.getVertexShaderID(D),Ne=c.getFragmentShaderID(D);const Ae=t.getRenderTarget(),pt=q.isInstancedMesh===!0,st=q.isBatchedMesh===!0,rt=!!D.map,G=!!D.matcap,lt=!!pe,ut=!!D.aoMap,Gt=!!D.lightMap,Ye=!!D.bumpMap,xt=!!D.normalMap,ot=!!D.displacementMap,Ke=!!D.emissiveMap,on=!!D.metalnessMap,U=!!D.roughnessMap,P=D.anisotropy>0,J=D.clearcoat>0,ge=D.dispersion>0,_e=D.iridescence>0,Q=D.sheen>0,Fe=D.transmission>0,Le=P&&!!D.anisotropyMap,De=J&&!!D.clearcoatMap,ct=J&&!!D.clearcoatNormalMap,we=J&&!!D.clearcoatRoughnessMap,Ge=_e&&!!D.iridescenceMap,at=_e&&!!D.iridescenceThicknessMap,$e=Q&&!!D.sheenColorMap,Re=Q&&!!D.sheenRoughnessMap,tt=!!D.specularMap,gt=!!D.specularColorMap,Wt=!!D.specularIntensityMap,V=Fe&&!!D.transmissionMap,Ie=Fe&&!!D.thicknessMap,ce=!!D.gradientMap,he=!!D.alphaMap,Ee=D.alphaTest>0,Je=!!D.alphaHash,Et=!!D.extensions;let Mt=xs;D.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(Mt=t.toneMapping);const bt={shaderID:de,shaderType:D.type,shaderName:D.name,vertexShader:mt,fragmentShader:se,defines:D.defines,customVertexShaderID:Se,customFragmentShaderID:Ne,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:st,batchingColor:st&&q._colorsTexture!==null,instancing:pt,instancingColor:pt&&q.instanceColor!==null,instancingMorph:pt&&q.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ae===null?t.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Rs,alphaToCoverage:!!D.alphaToCoverage,map:rt,matcap:G,envMap:lt,envMapMode:lt&&pe.mapping,envMapCubeUVHeight:W,aoMap:ut,lightMap:Gt,bumpMap:Ye,normalMap:xt,displacementMap:m&&ot,emissiveMap:Ke,normalMapObjectSpace:xt&&D.normalMapType===uC,normalMapTangentSpace:xt&&D.normalMapType===cC,metalnessMap:on,roughnessMap:U,anisotropy:P,anisotropyMap:Le,clearcoat:J,clearcoatMap:De,clearcoatNormalMap:ct,clearcoatRoughnessMap:we,dispersion:ge,iridescence:_e,iridescenceMap:Ge,iridescenceThicknessMap:at,sheen:Q,sheenColorMap:$e,sheenRoughnessMap:Re,specularMap:tt,specularColorMap:gt,specularIntensityMap:Wt,transmission:Fe,transmissionMap:V,thicknessMap:Ie,gradientMap:ce,opaque:D.transparent===!1&&D.blending===Jo&&D.alphaToCoverage===!1,alphaMap:he,alphaTest:Ee,alphaHash:Je,combine:D.combine,mapUv:rt&&S(D.map.channel),aoMapUv:ut&&S(D.aoMap.channel),lightMapUv:Gt&&S(D.lightMap.channel),bumpMapUv:Ye&&S(D.bumpMap.channel),normalMapUv:xt&&S(D.normalMap.channel),displacementMapUv:ot&&S(D.displacementMap.channel),emissiveMapUv:Ke&&S(D.emissiveMap.channel),metalnessMapUv:on&&S(D.metalnessMap.channel),roughnessMapUv:U&&S(D.roughnessMap.channel),anisotropyMapUv:Le&&S(D.anisotropyMap.channel),clearcoatMapUv:De&&S(D.clearcoatMap.channel),clearcoatNormalMapUv:ct&&S(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&S(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&S(D.iridescenceMap.channel),iridescenceThicknessMapUv:at&&S(D.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&S(D.sheenColorMap.channel),sheenRoughnessMapUv:Re&&S(D.sheenRoughnessMap.channel),specularMapUv:tt&&S(D.specularMap.channel),specularColorMapUv:gt&&S(D.specularColorMap.channel),specularIntensityMapUv:Wt&&S(D.specularIntensityMap.channel),transmissionMapUv:V&&S(D.transmissionMap.channel),thicknessMapUv:Ie&&S(D.thicknessMap.channel),alphaMapUv:he&&S(D.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(xt||P),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!me.attributes.uv&&(rt||he),fog:!!fe,useFog:D.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:q.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:We,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:D.dithering,shadowMapEnabled:t.shadowMap.enabled&&H.length>0,shadowMapType:t.shadowMap.type,toneMapping:Mt,decodeVideoTexture:rt&&D.map.isVideoTexture===!0&&Ft.getTransfer(D.map.colorSpace)===Yt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Dr,flipSided:D.side===si,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Et&&D.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Et&&D.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return bt.vertexUv1s=f.has(1),bt.vertexUv2s=f.has(2),bt.vertexUv3s=f.has(3),f.clear(),bt}function g(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const H in D.defines)R.push(H),R.push(D.defines[H]);return D.isRawShaderMaterial===!1&&(M(R,D),w(R,D),R.push(t.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function M(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function w(D,R){a.disableAll(),R.supportsVertexTextures&&a.enable(0),R.instancing&&a.enable(1),R.instancingColor&&a.enable(2),R.instancingMorph&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),R.dispersion&&a.enable(20),R.batchingColor&&a.enable(21),D.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.doubleSided&&a.enable(10),R.flipSided&&a.enable(11),R.useDepthPacking&&a.enable(12),R.dithering&&a.enable(13),R.transmission&&a.enable(14),R.sheen&&a.enable(15),R.opaque&&a.enable(16),R.pointsUvs&&a.enable(17),R.decodeVideoTexture&&a.enable(18),R.alphaToCoverage&&a.enable(19),D.push(a.mask)}function A(D){const R=E[D.type];let H;if(R){const oe=lr[R];H=zC.clone(oe.uniforms)}else H=D.uniforms;return H}function O(D,R){let H;for(let oe=0,q=h.length;oe<q;oe++){const fe=h[oe];if(fe.cacheKey===R){H=fe,++H.usedTimes;break}}return H===void 0&&(H=new Z2(t,R,D,s),h.push(H)),H}function N(D){if(--D.usedTimes===0){const R=h.indexOf(D);h[R]=h[h.length-1],h.pop(),D.destroy()}}function d(D){c.remove(D)}function z(){c.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:A,acquireProgram:O,releaseProgram:N,releaseShaderCache:d,programs:h,dispose:z}}function i3(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function r3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function n_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function i_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(p,m,y,E,S,x){let g=t[e];return g===void 0?(g={id:p.id,object:p,geometry:m,material:y,groupOrder:E,renderOrder:p.renderOrder,z:S,group:x},t[e]=g):(g.id=p.id,g.object=p,g.geometry=m,g.material=y,g.groupOrder=E,g.renderOrder=p.renderOrder,g.z=S,g.group=x),e++,g}function a(p,m,y,E,S,x){const g=o(p,m,y,E,S,x);y.transmission>0?i.push(g):y.transparent===!0?r.push(g):n.push(g)}function c(p,m,y,E,S,x){const g=o(p,m,y,E,S,x);y.transmission>0?i.unshift(g):y.transparent===!0?r.unshift(g):n.unshift(g)}function f(p,m){n.length>1&&n.sort(p||r3),i.length>1&&i.sort(m||n_),r.length>1&&r.sort(m||n_)}function h(){for(let p=e,m=t.length;p<m;p++){const y=t[p];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:h,sort:f}}function s3(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new i_,t.set(i,[o])):r>=s.length?(o=new i_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function o3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ie,color:new zt};break;case"SpotLight":n={position:new ie,direction:new ie,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ie,color:new zt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ie,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":n={color:new zt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return t[e.id]=n,n}}}function a3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let l3=0;function c3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function u3(t){const e=new o3,n=a3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new ie);const r=new ie,s=new yn,o=new yn;function a(f){let h=0,p=0,m=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let y=0,E=0,S=0,x=0,g=0,M=0,w=0,A=0,O=0,N=0,d=0;f.sort(c3);for(let D=0,R=f.length;D<R;D++){const H=f[D],oe=H.color,q=H.intensity,fe=H.distance,me=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)h+=oe.r*q,p+=oe.g*q,m+=oe.b*q;else if(H.isLightProbe){for(let ue=0;ue<9;ue++)i.probe[ue].addScaledVector(H.sh.coefficients[ue],q);d++}else if(H.isDirectionalLight){const ue=e.get(H);if(ue.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const pe=H.shadow,W=n.get(H);W.shadowBias=pe.bias,W.shadowNormalBias=pe.normalBias,W.shadowRadius=pe.radius,W.shadowMapSize=pe.mapSize,i.directionalShadow[y]=W,i.directionalShadowMap[y]=me,i.directionalShadowMatrix[y]=H.shadow.matrix,M++}i.directional[y]=ue,y++}else if(H.isSpotLight){const ue=e.get(H);ue.position.setFromMatrixPosition(H.matrixWorld),ue.color.copy(oe).multiplyScalar(q),ue.distance=fe,ue.coneCos=Math.cos(H.angle),ue.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ue.decay=H.decay,i.spot[S]=ue;const pe=H.shadow;if(H.map&&(i.spotLightMap[O]=H.map,O++,pe.updateMatrices(H),H.castShadow&&N++),i.spotLightMatrix[S]=pe.matrix,H.castShadow){const W=n.get(H);W.shadowBias=pe.bias,W.shadowNormalBias=pe.normalBias,W.shadowRadius=pe.radius,W.shadowMapSize=pe.mapSize,i.spotShadow[S]=W,i.spotShadowMap[S]=me,A++}S++}else if(H.isRectAreaLight){const ue=e.get(H);ue.color.copy(oe).multiplyScalar(q),ue.halfWidth.set(H.width*.5,0,0),ue.halfHeight.set(0,H.height*.5,0),i.rectArea[x]=ue,x++}else if(H.isPointLight){const ue=e.get(H);if(ue.color.copy(H.color).multiplyScalar(H.intensity),ue.distance=H.distance,ue.decay=H.decay,H.castShadow){const pe=H.shadow,W=n.get(H);W.shadowBias=pe.bias,W.shadowNormalBias=pe.normalBias,W.shadowRadius=pe.radius,W.shadowMapSize=pe.mapSize,W.shadowCameraNear=pe.camera.near,W.shadowCameraFar=pe.camera.far,i.pointShadow[E]=W,i.pointShadowMap[E]=me,i.pointShadowMatrix[E]=H.shadow.matrix,w++}i.point[E]=ue,E++}else if(H.isHemisphereLight){const ue=e.get(H);ue.skyColor.copy(H.color).multiplyScalar(q),ue.groundColor.copy(H.groundColor).multiplyScalar(q),i.hemi[g]=ue,g++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=m;const z=i.hash;(z.directionalLength!==y||z.pointLength!==E||z.spotLength!==S||z.rectAreaLength!==x||z.hemiLength!==g||z.numDirectionalShadows!==M||z.numPointShadows!==w||z.numSpotShadows!==A||z.numSpotMaps!==O||z.numLightProbes!==d)&&(i.directional.length=y,i.spot.length=S,i.rectArea.length=x,i.point.length=E,i.hemi.length=g,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=A+O-N,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=d,z.directionalLength=y,z.pointLength=E,z.spotLength=S,z.rectAreaLength=x,z.hemiLength=g,z.numDirectionalShadows=M,z.numPointShadows=w,z.numSpotShadows=A,z.numSpotMaps=O,z.numLightProbes=d,i.version=l3++)}function c(f,h){let p=0,m=0,y=0,E=0,S=0;const x=h.matrixWorldInverse;for(let g=0,M=f.length;g<M;g++){const w=f[g];if(w.isDirectionalLight){const A=i.directional[p];A.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(x),p++}else if(w.isSpotLight){const A=i.spot[y];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(x),y++}else if(w.isRectAreaLight){const A=i.rectArea[E];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(x),o.identity(),s.copy(w.matrixWorld),s.premultiply(x),o.extractRotation(s),A.halfWidth.set(w.width*.5,0,0),A.halfHeight.set(0,w.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),E++}else if(w.isPointLight){const A=i.point[m];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(x),m++}else if(w.isHemisphereLight){const A=i.hemi[S];A.direction.setFromMatrixPosition(w.matrixWorld),A.direction.transformDirection(x),S++}}}return{setup:a,setupView:c,state:i}}function r_(t){const e=new u3(t),n=[],i=[];function r(h){f.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function a(){e.setup(n)}function c(h){e.setupView(n,h)}const f={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function f3(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new r_(t),e.set(r,[a])):s>=o.length?(a=new r_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class d3 extends yf{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class h3 extends yf{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const p3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m3=`uniform sampler2D shadow_pass;
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
}`;function g3(t,e,n){let i=new gS;const r=new Ut,s=new Ut,o=new Ln,a=new d3({depthPacking:lC}),c=new h3,f={},h=n.maxTextureSize,p={[Ms]:si,[si]:Ms,[Dr]:Dr},m=new Ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:p3,fragmentShader:m3}),y=m.clone();y.defines.HORIZONTAL_PASS=1;const E=new uo;E.setAttribute("position",new vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new pr(E,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yx;let g=this.type;this.render=function(N,d,z){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||N.length===0)return;const D=t.getRenderTarget(),R=t.getActiveCubeFace(),H=t.getActiveMipmapLevel(),oe=t.state;oe.setBlending(ys),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const q=g!==Rr&&this.type===Rr,fe=g===Rr&&this.type!==Rr;for(let me=0,ue=N.length;me<ue;me++){const pe=N[me],W=pe.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const de=W.getFrameExtents();if(r.multiply(de),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/de.x),r.x=s.x*de.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/de.y),r.y=s.y*de.y,W.mapSize.y=s.y)),W.map===null||q===!0||fe===!0){const Ce=this.type!==Rr?{minFilter:Ri,magFilter:Ri}:{};W.map!==null&&W.map.dispose(),W.map=new ao(r.x,r.y,Ce),W.map.texture.name=pe.name+".shadowMap",W.camera.updateProjectionMatrix()}t.setRenderTarget(W.map),t.clear();const ve=W.getViewportCount();for(let Ce=0;Ce<ve;Ce++){const We=W.getViewport(Ce);o.set(s.x*We.x,s.y*We.y,s.x*We.z,s.y*We.w),oe.viewport(o),W.updateMatrices(pe,Ce),i=W.getFrustum(),A(d,z,W.camera,pe,this.type)}W.isPointLightShadow!==!0&&this.type===Rr&&M(W,z),W.needsUpdate=!1}g=this.type,x.needsUpdate=!1,t.setRenderTarget(D,R,H)};function M(N,d){const z=e.update(S);m.defines.VSM_SAMPLES!==N.blurSamples&&(m.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ao(r.x,r.y)),m.uniforms.shadow_pass.value=N.map.texture,m.uniforms.resolution.value=N.mapSize,m.uniforms.radius.value=N.radius,t.setRenderTarget(N.mapPass),t.clear(),t.renderBufferDirect(d,null,z,m,S,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,t.setRenderTarget(N.map),t.clear(),t.renderBufferDirect(d,null,z,y,S,null)}function w(N,d,z,D){let R=null;const H=z.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)R=H;else if(R=z.isPointLight===!0?c:a,t.localClippingEnabled&&d.clipShadows===!0&&Array.isArray(d.clippingPlanes)&&d.clippingPlanes.length!==0||d.displacementMap&&d.displacementScale!==0||d.alphaMap&&d.alphaTest>0||d.map&&d.alphaTest>0){const oe=R.uuid,q=d.uuid;let fe=f[oe];fe===void 0&&(fe={},f[oe]=fe);let me=fe[q];me===void 0&&(me=R.clone(),fe[q]=me,d.addEventListener("dispose",O)),R=me}if(R.visible=d.visible,R.wireframe=d.wireframe,D===Rr?R.side=d.shadowSide!==null?d.shadowSide:d.side:R.side=d.shadowSide!==null?d.shadowSide:p[d.side],R.alphaMap=d.alphaMap,R.alphaTest=d.alphaTest,R.map=d.map,R.clipShadows=d.clipShadows,R.clippingPlanes=d.clippingPlanes,R.clipIntersection=d.clipIntersection,R.displacementMap=d.displacementMap,R.displacementScale=d.displacementScale,R.displacementBias=d.displacementBias,R.wireframeLinewidth=d.wireframeLinewidth,R.linewidth=d.linewidth,z.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const oe=t.properties.get(R);oe.light=z}return R}function A(N,d,z,D,R){if(N.visible===!1)return;if(N.layers.test(d.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===Rr)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,N.matrixWorld);const q=e.update(N),fe=N.material;if(Array.isArray(fe)){const me=q.groups;for(let ue=0,pe=me.length;ue<pe;ue++){const W=me[ue],de=fe[W.materialIndex];if(de&&de.visible){const ve=w(N,de,D,R);N.onBeforeShadow(t,N,d,z,q,ve,W),t.renderBufferDirect(z,null,q,ve,N,W),N.onAfterShadow(t,N,d,z,q,ve,W)}}}else if(fe.visible){const me=w(N,fe,D,R);N.onBeforeShadow(t,N,d,z,q,me,null),t.renderBufferDirect(z,null,q,me,N,null),N.onAfterShadow(t,N,d,z,q,me,null)}}const oe=N.children;for(let q=0,fe=oe.length;q<fe;q++)A(oe[q],d,z,D,R)}function O(N){N.target.removeEventListener("dispose",O);for(const z in f){const D=f[z],R=N.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}function v3(t){function e(){let V=!1;const Ie=new Ln;let ce=null;const he=new Ln(0,0,0,0);return{setMask:function(Ee){ce!==Ee&&!V&&(t.colorMask(Ee,Ee,Ee,Ee),ce=Ee)},setLocked:function(Ee){V=Ee},setClear:function(Ee,Je,Et,Mt,bt){bt===!0&&(Ee*=Mt,Je*=Mt,Et*=Mt),Ie.set(Ee,Je,Et,Mt),he.equals(Ie)===!1&&(t.clearColor(Ee,Je,Et,Mt),he.copy(Ie))},reset:function(){V=!1,ce=null,he.set(-1,0,0,0)}}}function n(){let V=!1,Ie=null,ce=null,he=null;return{setTest:function(Ee){Ee?Ne(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(Ee){Ie!==Ee&&!V&&(t.depthMask(Ee),Ie=Ee)},setFunc:function(Ee){if(ce!==Ee){switch(Ee){case Ib:t.depthFunc(t.NEVER);break;case kb:t.depthFunc(t.ALWAYS);break;case Ub:t.depthFunc(t.LESS);break;case Fu:t.depthFunc(t.LEQUAL);break;case Ob:t.depthFunc(t.EQUAL);break;case Fb:t.depthFunc(t.GEQUAL);break;case zb:t.depthFunc(t.GREATER);break;case Bb:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ce=Ee}},setLocked:function(Ee){V=Ee},setClear:function(Ee){he!==Ee&&(t.clearDepth(Ee),he=Ee)},reset:function(){V=!1,Ie=null,ce=null,he=null}}}function i(){let V=!1,Ie=null,ce=null,he=null,Ee=null,Je=null,Et=null,Mt=null,bt=null;return{setTest:function(Pt){V||(Pt?Ne(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(Pt){Ie!==Pt&&!V&&(t.stencilMask(Pt),Ie=Pt)},setFunc:function(Pt,xi,li){(ce!==Pt||he!==xi||Ee!==li)&&(t.stencilFunc(Pt,xi,li),ce=Pt,he=xi,Ee=li)},setOp:function(Pt,xi,li){(Je!==Pt||Et!==xi||Mt!==li)&&(t.stencilOp(Pt,xi,li),Je=Pt,Et=xi,Mt=li)},setLocked:function(Pt){V=Pt},setClear:function(Pt){bt!==Pt&&(t.clearStencil(Pt),bt=Pt)},reset:function(){V=!1,Ie=null,ce=null,he=null,Ee=null,Je=null,Et=null,Mt=null,bt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,c=new WeakMap;let f={},h={},p=new WeakMap,m=[],y=null,E=!1,S=null,x=null,g=null,M=null,w=null,A=null,O=null,N=new zt(0,0,0),d=0,z=!1,D=null,R=null,H=null,oe=null,q=null;const fe=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let me=!1,ue=0;const pe=t.getParameter(t.VERSION);pe.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(pe)[1]),me=ue>=1):pe.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),me=ue>=2);let W=null,de={};const ve=t.getParameter(t.SCISSOR_BOX),Ce=t.getParameter(t.VIEWPORT),We=new Ln().fromArray(ve),mt=new Ln().fromArray(Ce);function se(V,Ie,ce,he){const Ee=new Uint8Array(4),Je=t.createTexture();t.bindTexture(V,Je),t.texParameteri(V,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(V,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Et=0;Et<ce;Et++)V===t.TEXTURE_3D||V===t.TEXTURE_2D_ARRAY?t.texImage3D(Ie,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,Ee):t.texImage2D(Ie+Et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ee);return Je}const Se={};Se[t.TEXTURE_2D]=se(t.TEXTURE_2D,t.TEXTURE_2D,1),Se[t.TEXTURE_CUBE_MAP]=se(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[t.TEXTURE_2D_ARRAY]=se(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Se[t.TEXTURE_3D]=se(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Ne(t.DEPTH_TEST),s.setFunc(Fu),Ye(!1),xt(zv),Ne(t.CULL_FACE),ut(ys);function Ne(V){f[V]!==!0&&(t.enable(V),f[V]=!0)}function Ae(V){f[V]!==!1&&(t.disable(V),f[V]=!1)}function pt(V,Ie){return h[V]!==Ie?(t.bindFramebuffer(V,Ie),h[V]=Ie,V===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=Ie),V===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=Ie),!0):!1}function st(V,Ie){let ce=m,he=!1;if(V){ce=p.get(Ie),ce===void 0&&(ce=[],p.set(Ie,ce));const Ee=V.textures;if(ce.length!==Ee.length||ce[0]!==t.COLOR_ATTACHMENT0){for(let Je=0,Et=Ee.length;Je<Et;Je++)ce[Je]=t.COLOR_ATTACHMENT0+Je;ce.length=Ee.length,he=!0}}else ce[0]!==t.BACK&&(ce[0]=t.BACK,he=!0);he&&t.drawBuffers(ce)}function rt(V){return y!==V?(t.useProgram(V),y=V,!0):!1}const G={[$s]:t.FUNC_ADD,[vb]:t.FUNC_SUBTRACT,[_b]:t.FUNC_REVERSE_SUBTRACT};G[yb]=t.MIN,G[xb]=t.MAX;const lt={[Sb]:t.ZERO,[Eb]:t.ONE,[Mb]:t.SRC_COLOR,[vp]:t.SRC_ALPHA,[Rb]:t.SRC_ALPHA_SATURATE,[Cb]:t.DST_COLOR,[Tb]:t.DST_ALPHA,[wb]:t.ONE_MINUS_SRC_COLOR,[_p]:t.ONE_MINUS_SRC_ALPHA,[Ab]:t.ONE_MINUS_DST_COLOR,[bb]:t.ONE_MINUS_DST_ALPHA,[Pb]:t.CONSTANT_COLOR,[Lb]:t.ONE_MINUS_CONSTANT_COLOR,[Db]:t.CONSTANT_ALPHA,[Nb]:t.ONE_MINUS_CONSTANT_ALPHA};function ut(V,Ie,ce,he,Ee,Je,Et,Mt,bt,Pt){if(V===ys){E===!0&&(Ae(t.BLEND),E=!1);return}if(E===!1&&(Ne(t.BLEND),E=!0),V!==gb){if(V!==S||Pt!==z){if((x!==$s||w!==$s)&&(t.blendEquation(t.FUNC_ADD),x=$s,w=$s),Pt)switch(V){case Jo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bv:t.blendFunc(t.ONE,t.ONE);break;case Hv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Jo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bv:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Hv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}g=null,M=null,A=null,O=null,N.set(0,0,0),d=0,S=V,z=Pt}return}Ee=Ee||Ie,Je=Je||ce,Et=Et||he,(Ie!==x||Ee!==w)&&(t.blendEquationSeparate(G[Ie],G[Ee]),x=Ie,w=Ee),(ce!==g||he!==M||Je!==A||Et!==O)&&(t.blendFuncSeparate(lt[ce],lt[he],lt[Je],lt[Et]),g=ce,M=he,A=Je,O=Et),(Mt.equals(N)===!1||bt!==d)&&(t.blendColor(Mt.r,Mt.g,Mt.b,bt),N.copy(Mt),d=bt),S=V,z=!1}function Gt(V,Ie){V.side===Dr?Ae(t.CULL_FACE):Ne(t.CULL_FACE);let ce=V.side===si;Ie&&(ce=!ce),Ye(ce),V.blending===Jo&&V.transparent===!1?ut(ys):ut(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),s.setFunc(V.depthFunc),s.setTest(V.depthTest),s.setMask(V.depthWrite),r.setMask(V.colorWrite);const he=V.stencilWrite;o.setTest(he),he&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ke(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Ne(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(V){D!==V&&(V?t.frontFace(t.CW):t.frontFace(t.CCW),D=V)}function xt(V){V!==hb?(Ne(t.CULL_FACE),V!==R&&(V===zv?t.cullFace(t.BACK):V===pb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),R=V}function ot(V){V!==H&&(me&&t.lineWidth(V),H=V)}function Ke(V,Ie,ce){V?(Ne(t.POLYGON_OFFSET_FILL),(oe!==Ie||q!==ce)&&(t.polygonOffset(Ie,ce),oe=Ie,q=ce)):Ae(t.POLYGON_OFFSET_FILL)}function on(V){V?Ne(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function U(V){V===void 0&&(V=t.TEXTURE0+fe-1),W!==V&&(t.activeTexture(V),W=V)}function P(V,Ie,ce){ce===void 0&&(W===null?ce=t.TEXTURE0+fe-1:ce=W);let he=de[ce];he===void 0&&(he={type:void 0,texture:void 0},de[ce]=he),(he.type!==V||he.texture!==Ie)&&(W!==ce&&(t.activeTexture(ce),W=ce),t.bindTexture(V,Ie||Se[V]),he.type=V,he.texture=Ie)}function J(){const V=de[W];V!==void 0&&V.type!==void 0&&(t.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ge(){try{t.compressedTexImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{t.compressedTexImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{t.texSubImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ct(){try{t.texStorage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{t.texStorage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ge(){try{t.texImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function at(){try{t.texImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $e(V){We.equals(V)===!1&&(t.scissor(V.x,V.y,V.z,V.w),We.copy(V))}function Re(V){mt.equals(V)===!1&&(t.viewport(V.x,V.y,V.z,V.w),mt.copy(V))}function tt(V,Ie){let ce=c.get(Ie);ce===void 0&&(ce=new WeakMap,c.set(Ie,ce));let he=ce.get(V);he===void 0&&(he=t.getUniformBlockIndex(Ie,V.name),ce.set(V,he))}function gt(V,Ie){const he=c.get(Ie).get(V);a.get(Ie)!==he&&(t.uniformBlockBinding(Ie,he,V.__bindingPointIndex),a.set(Ie,he))}function Wt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},W=null,de={},h={},p=new WeakMap,m=[],y=null,E=!1,S=null,x=null,g=null,M=null,w=null,A=null,O=null,N=new zt(0,0,0),d=0,z=!1,D=null,R=null,H=null,oe=null,q=null,We.set(0,0,t.canvas.width,t.canvas.height),mt.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Ne,disable:Ae,bindFramebuffer:pt,drawBuffers:st,useProgram:rt,setBlending:ut,setMaterial:Gt,setFlipSided:Ye,setCullFace:xt,setLineWidth:ot,setPolygonOffset:Ke,setScissorTest:on,activeTexture:U,bindTexture:P,unbindTexture:J,compressedTexImage2D:ge,compressedTexImage3D:_e,texImage2D:Ge,texImage3D:at,updateUBOMapping:tt,uniformBlockBinding:gt,texStorage2D:ct,texStorage3D:we,texSubImage2D:Q,texSubImage3D:Fe,compressedTexSubImage2D:Le,compressedTexSubImage3D:De,scissor:$e,viewport:Re,reset:Wt}}function _3(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Ut,h=new WeakMap;let p;const m=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,P){return y?new OffscreenCanvas(U,P):Wu("canvas")}function S(U,P,J){let ge=1;const _e=on(U);if((_e.width>J||_e.height>J)&&(ge=J/Math.max(_e.width,_e.height)),ge<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Q=Math.floor(ge*_e.width),Fe=Math.floor(ge*_e.height);p===void 0&&(p=E(Q,Fe));const Le=P?E(Q,Fe):p;return Le.width=Q,Le.height=Fe,Le.getContext("2d").drawImage(U,0,0,Q,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+Q+"x"+Fe+")."),Le}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),U;return U}function x(U){return U.generateMipmaps&&U.minFilter!==Ri&&U.minFilter!==ji}function g(U){t.generateMipmap(U)}function M(U,P,J,ge,_e=!1){if(U!==null){if(t[U]!==void 0)return t[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Q=P;if(P===t.RED&&(J===t.FLOAT&&(Q=t.R32F),J===t.HALF_FLOAT&&(Q=t.R16F),J===t.UNSIGNED_BYTE&&(Q=t.R8)),P===t.RED_INTEGER&&(J===t.UNSIGNED_BYTE&&(Q=t.R8UI),J===t.UNSIGNED_SHORT&&(Q=t.R16UI),J===t.UNSIGNED_INT&&(Q=t.R32UI),J===t.BYTE&&(Q=t.R8I),J===t.SHORT&&(Q=t.R16I),J===t.INT&&(Q=t.R32I)),P===t.RG&&(J===t.FLOAT&&(Q=t.RG32F),J===t.HALF_FLOAT&&(Q=t.RG16F),J===t.UNSIGNED_BYTE&&(Q=t.RG8)),P===t.RG_INTEGER&&(J===t.UNSIGNED_BYTE&&(Q=t.RG8UI),J===t.UNSIGNED_SHORT&&(Q=t.RG16UI),J===t.UNSIGNED_INT&&(Q=t.RG32UI),J===t.BYTE&&(Q=t.RG8I),J===t.SHORT&&(Q=t.RG16I),J===t.INT&&(Q=t.RG32I)),P===t.RGB&&J===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),P===t.RGBA){const Fe=_e?Bu:Ft.getTransfer(ge);J===t.FLOAT&&(Q=t.RGBA32F),J===t.HALF_FLOAT&&(Q=t.RGBA16F),J===t.UNSIGNED_BYTE&&(Q=Fe===Yt?t.SRGB8_ALPHA8:t.RGBA8),J===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),J===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function w(U,P){let J;return U?P===null||P===da||P===ha?J=t.DEPTH24_STENCIL8:P===us?J=t.DEPTH32F_STENCIL8:P===zu&&(J=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===da||P===ha?J=t.DEPTH_COMPONENT24:P===us?J=t.DEPTH_COMPONENT32F:P===zu&&(J=t.DEPTH_COMPONENT16),J}function A(U,P){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ri&&U.minFilter!==ji?Math.log2(Math.max(P.width,P.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?P.mipmaps.length:1}function O(U){const P=U.target;P.removeEventListener("dispose",O),d(P),P.isVideoTexture&&h.delete(P)}function N(U){const P=U.target;P.removeEventListener("dispose",N),D(P)}function d(U){const P=i.get(U);if(P.__webglInit===void 0)return;const J=U.source,ge=m.get(J);if(ge){const _e=ge[P.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&z(U),Object.keys(ge).length===0&&m.delete(J)}i.remove(U)}function z(U){const P=i.get(U);t.deleteTexture(P.__webglTexture);const J=U.source,ge=m.get(J);delete ge[P.__cacheKey],o.memory.textures--}function D(U){const P=i.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(P.__webglFramebuffer[ge]))for(let _e=0;_e<P.__webglFramebuffer[ge].length;_e++)t.deleteFramebuffer(P.__webglFramebuffer[ge][_e]);else t.deleteFramebuffer(P.__webglFramebuffer[ge]);P.__webglDepthbuffer&&t.deleteRenderbuffer(P.__webglDepthbuffer[ge])}else{if(Array.isArray(P.__webglFramebuffer))for(let ge=0;ge<P.__webglFramebuffer.length;ge++)t.deleteFramebuffer(P.__webglFramebuffer[ge]);else t.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&t.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&t.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let ge=0;ge<P.__webglColorRenderbuffer.length;ge++)P.__webglColorRenderbuffer[ge]&&t.deleteRenderbuffer(P.__webglColorRenderbuffer[ge]);P.__webglDepthRenderbuffer&&t.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const J=U.textures;for(let ge=0,_e=J.length;ge<_e;ge++){const Q=i.get(J[ge]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(J[ge])}i.remove(U)}let R=0;function H(){R=0}function oe(){const U=R;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),R+=1,U}function q(U){const P=[];return P.push(U.wrapS),P.push(U.wrapT),P.push(U.wrapR||0),P.push(U.magFilter),P.push(U.minFilter),P.push(U.anisotropy),P.push(U.internalFormat),P.push(U.format),P.push(U.type),P.push(U.generateMipmaps),P.push(U.premultiplyAlpha),P.push(U.flipY),P.push(U.unpackAlignment),P.push(U.colorSpace),P.join()}function fe(U,P){const J=i.get(U);if(U.isVideoTexture&&ot(U),U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){const ge=U.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(J,U,P);return}}n.bindTexture(t.TEXTURE_2D,J.__webglTexture,t.TEXTURE0+P)}function me(U,P){const J=i.get(U);if(U.version>0&&J.__version!==U.version){mt(J,U,P);return}n.bindTexture(t.TEXTURE_2D_ARRAY,J.__webglTexture,t.TEXTURE0+P)}function ue(U,P){const J=i.get(U);if(U.version>0&&J.__version!==U.version){mt(J,U,P);return}n.bindTexture(t.TEXTURE_3D,J.__webglTexture,t.TEXTURE0+P)}function pe(U,P){const J=i.get(U);if(U.version>0&&J.__version!==U.version){se(J,U,P);return}n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture,t.TEXTURE0+P)}const W={[Sp]:t.REPEAT,[Qs]:t.CLAMP_TO_EDGE,[Ep]:t.MIRRORED_REPEAT},de={[Ri]:t.NEAREST,[Kb]:t.NEAREST_MIPMAP_NEAREST,[Cc]:t.NEAREST_MIPMAP_LINEAR,[ji]:t.LINEAR,[Fd]:t.LINEAR_MIPMAP_NEAREST,[Zs]:t.LINEAR_MIPMAP_LINEAR},ve={[fC]:t.NEVER,[vC]:t.ALWAYS,[dC]:t.LESS,[rS]:t.LEQUAL,[hC]:t.EQUAL,[gC]:t.GEQUAL,[pC]:t.GREATER,[mC]:t.NOTEQUAL};function Ce(U,P){if(P.type===us&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===ji||P.magFilter===Fd||P.magFilter===Cc||P.magFilter===Zs||P.minFilter===ji||P.minFilter===Fd||P.minFilter===Cc||P.minFilter===Zs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(U,t.TEXTURE_WRAP_S,W[P.wrapS]),t.texParameteri(U,t.TEXTURE_WRAP_T,W[P.wrapT]),(U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY)&&t.texParameteri(U,t.TEXTURE_WRAP_R,W[P.wrapR]),t.texParameteri(U,t.TEXTURE_MAG_FILTER,de[P.magFilter]),t.texParameteri(U,t.TEXTURE_MIN_FILTER,de[P.minFilter]),P.compareFunction&&(t.texParameteri(U,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(U,t.TEXTURE_COMPARE_FUNC,ve[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===Ri||P.minFilter!==Cc&&P.minFilter!==Zs||P.type===us&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||i.get(P).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");t.texParameterf(U,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),i.get(P).__currentAnisotropy=P.anisotropy}}}function We(U,P){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,P.addEventListener("dispose",O));const ge=P.source;let _e=m.get(ge);_e===void 0&&(_e={},m.set(ge,_e));const Q=q(P);if(Q!==U.__cacheKey){_e[Q]===void 0&&(_e[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,J=!0),_e[Q].usedTimes++;const Fe=_e[U.__cacheKey];Fe!==void 0&&(_e[U.__cacheKey].usedTimes--,Fe.usedTimes===0&&z(P)),U.__cacheKey=Q,U.__webglTexture=_e[Q].texture}return J}function mt(U,P,J){let ge=t.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(ge=t.TEXTURE_2D_ARRAY),P.isData3DTexture&&(ge=t.TEXTURE_3D);const _e=We(U,P),Q=P.source;n.bindTexture(ge,U.__webglTexture,t.TEXTURE0+J);const Fe=i.get(Q);if(Q.version!==Fe.__version||_e===!0){n.activeTexture(t.TEXTURE0+J);const Le=Ft.getPrimaries(Ft.workingColorSpace),De=P.colorSpace===as?null:Ft.getPrimaries(P.colorSpace),ct=P.colorSpace===as||Le===De?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,P.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,P.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let we=S(P.image,!1,r.maxTextureSize);we=Ke(P,we);const Ge=s.convert(P.format,P.colorSpace),at=s.convert(P.type);let $e=M(P.internalFormat,Ge,at,P.colorSpace,P.isVideoTexture);Ce(ge,P);let Re;const tt=P.mipmaps,gt=P.isVideoTexture!==!0,Wt=Fe.__version===void 0||_e===!0,V=Q.dataReady,Ie=A(P,we);if(P.isDepthTexture)$e=w(P.format===pa,P.type),Wt&&(gt?n.texStorage2D(t.TEXTURE_2D,1,$e,we.width,we.height):n.texImage2D(t.TEXTURE_2D,0,$e,we.width,we.height,0,Ge,at,null));else if(P.isDataTexture)if(tt.length>0){gt&&Wt&&n.texStorage2D(t.TEXTURE_2D,Ie,$e,tt[0].width,tt[0].height);for(let ce=0,he=tt.length;ce<he;ce++)Re=tt[ce],gt?V&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,Re.width,Re.height,Ge,at,Re.data):n.texImage2D(t.TEXTURE_2D,ce,$e,Re.width,Re.height,0,Ge,at,Re.data);P.generateMipmaps=!1}else gt?(Wt&&n.texStorage2D(t.TEXTURE_2D,Ie,$e,we.width,we.height),V&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,we.width,we.height,Ge,at,we.data)):n.texImage2D(t.TEXTURE_2D,0,$e,we.width,we.height,0,Ge,at,we.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){gt&&Wt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ie,$e,tt[0].width,tt[0].height,we.depth);for(let ce=0,he=tt.length;ce<he;ce++)if(Re=tt[ce],P.format!==hr)if(Ge!==null)if(gt){if(V)if(P.layerUpdates.size>0){for(const Ee of P.layerUpdates){const Je=Re.width*Re.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,Ee,Re.width,Re.height,1,Ge,Re.data.slice(Je*Ee,Je*(Ee+1)),0,0)}P.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,Re.width,Re.height,we.depth,Ge,Re.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ce,$e,Re.width,Re.height,we.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else gt?V&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,Re.width,Re.height,we.depth,Ge,at,Re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ce,$e,Re.width,Re.height,we.depth,0,Ge,at,Re.data)}else{gt&&Wt&&n.texStorage2D(t.TEXTURE_2D,Ie,$e,tt[0].width,tt[0].height);for(let ce=0,he=tt.length;ce<he;ce++)Re=tt[ce],P.format!==hr?Ge!==null?gt?V&&n.compressedTexSubImage2D(t.TEXTURE_2D,ce,0,0,Re.width,Re.height,Ge,Re.data):n.compressedTexImage2D(t.TEXTURE_2D,ce,$e,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?V&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,Re.width,Re.height,Ge,at,Re.data):n.texImage2D(t.TEXTURE_2D,ce,$e,Re.width,Re.height,0,Ge,at,Re.data)}else if(P.isDataArrayTexture)if(gt){if(Wt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ie,$e,we.width,we.height,we.depth),V)if(P.layerUpdates.size>0){let ce;switch(at){case t.UNSIGNED_BYTE:switch(Ge){case t.ALPHA:ce=1;break;case t.LUMINANCE:ce=1;break;case t.LUMINANCE_ALPHA:ce=2;break;case t.RGB:ce=3;break;case t.RGBA:ce=4;break;default:throw new Error(`Unknown texel size for format ${Ge}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:ce=1;break;default:throw new Error(`Unknown texel size for type ${at}.`)}const he=we.width*we.height*ce;for(const Ee of P.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Ee,we.width,we.height,1,Ge,at,we.data.slice(he*Ee,he*(Ee+1)));P.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Ge,at,we.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,$e,we.width,we.height,we.depth,0,Ge,at,we.data);else if(P.isData3DTexture)gt?(Wt&&n.texStorage3D(t.TEXTURE_3D,Ie,$e,we.width,we.height,we.depth),V&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Ge,at,we.data)):n.texImage3D(t.TEXTURE_3D,0,$e,we.width,we.height,we.depth,0,Ge,at,we.data);else if(P.isFramebufferTexture){if(Wt)if(gt)n.texStorage2D(t.TEXTURE_2D,Ie,$e,we.width,we.height);else{let ce=we.width,he=we.height;for(let Ee=0;Ee<Ie;Ee++)n.texImage2D(t.TEXTURE_2D,Ee,$e,ce,he,0,Ge,at,null),ce>>=1,he>>=1}}else if(tt.length>0){if(gt&&Wt){const ce=on(tt[0]);n.texStorage2D(t.TEXTURE_2D,Ie,$e,ce.width,ce.height)}for(let ce=0,he=tt.length;ce<he;ce++)Re=tt[ce],gt?V&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,Ge,at,Re):n.texImage2D(t.TEXTURE_2D,ce,$e,Ge,at,Re);P.generateMipmaps=!1}else if(gt){if(Wt){const ce=on(we);n.texStorage2D(t.TEXTURE_2D,Ie,$e,ce.width,ce.height)}V&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ge,at,we)}else n.texImage2D(t.TEXTURE_2D,0,$e,Ge,at,we);x(P)&&g(ge),Fe.__version=Q.version,P.onUpdate&&P.onUpdate(P)}U.__version=P.version}function se(U,P,J){if(P.image.length!==6)return;const ge=We(U,P),_e=P.source;n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+J);const Q=i.get(_e);if(_e.version!==Q.__version||ge===!0){n.activeTexture(t.TEXTURE0+J);const Fe=Ft.getPrimaries(Ft.workingColorSpace),Le=P.colorSpace===as?null:Ft.getPrimaries(P.colorSpace),De=P.colorSpace===as||Fe===Le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,P.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,P.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const ct=P.isCompressedTexture||P.image[0].isCompressedTexture,we=P.image[0]&&P.image[0].isDataTexture,Ge=[];for(let he=0;he<6;he++)!ct&&!we?Ge[he]=S(P.image[he],!0,r.maxCubemapSize):Ge[he]=we?P.image[he].image:P.image[he],Ge[he]=Ke(P,Ge[he]);const at=Ge[0],$e=s.convert(P.format,P.colorSpace),Re=s.convert(P.type),tt=M(P.internalFormat,$e,Re,P.colorSpace),gt=P.isVideoTexture!==!0,Wt=Q.__version===void 0||ge===!0,V=_e.dataReady;let Ie=A(P,at);Ce(t.TEXTURE_CUBE_MAP,P);let ce;if(ct){gt&&Wt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,tt,at.width,at.height);for(let he=0;he<6;he++){ce=Ge[he].mipmaps;for(let Ee=0;Ee<ce.length;Ee++){const Je=ce[Ee];P.format!==hr?$e!==null?gt?V&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee,0,0,Je.width,Je.height,$e,Je.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee,tt,Je.width,Je.height,0,Je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):gt?V&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee,0,0,Je.width,Je.height,$e,Re,Je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee,tt,Je.width,Je.height,0,$e,Re,Je.data)}}}else{if(ce=P.mipmaps,gt&&Wt){ce.length>0&&Ie++;const he=on(Ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,tt,he.width,he.height)}for(let he=0;he<6;he++)if(we){gt?V&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ge[he].width,Ge[he].height,$e,Re,Ge[he].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,tt,Ge[he].width,Ge[he].height,0,$e,Re,Ge[he].data);for(let Ee=0;Ee<ce.length;Ee++){const Et=ce[Ee].image[he].image;gt?V&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee+1,0,0,Et.width,Et.height,$e,Re,Et.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee+1,tt,Et.width,Et.height,0,$e,Re,Et.data)}}else{gt?V&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,$e,Re,Ge[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,tt,$e,Re,Ge[he]);for(let Ee=0;Ee<ce.length;Ee++){const Je=ce[Ee];gt?V&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee+1,0,0,$e,Re,Je.image[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee+1,tt,$e,Re,Je.image[he])}}}x(P)&&g(t.TEXTURE_CUBE_MAP),Q.__version=_e.version,P.onUpdate&&P.onUpdate(P)}U.__version=P.version}function Se(U,P,J,ge,_e,Q){const Fe=s.convert(J.format,J.colorSpace),Le=s.convert(J.type),De=M(J.internalFormat,Fe,Le,J.colorSpace);if(!i.get(P).__hasExternalTextures){const we=Math.max(1,P.width>>Q),Ge=Math.max(1,P.height>>Q);_e===t.TEXTURE_3D||_e===t.TEXTURE_2D_ARRAY?n.texImage3D(_e,Q,De,we,Ge,P.depth,0,Fe,Le,null):n.texImage2D(_e,Q,De,we,Ge,0,Fe,Le,null)}n.bindFramebuffer(t.FRAMEBUFFER,U),xt(P)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ge,_e,i.get(J).__webglTexture,0,Ye(P)):(_e===t.TEXTURE_2D||_e>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ge,_e,i.get(J).__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(U,P,J){if(t.bindRenderbuffer(t.RENDERBUFFER,U),P.depthBuffer){const ge=P.depthTexture,_e=ge&&ge.isDepthTexture?ge.type:null,Q=w(P.stencilBuffer,_e),Fe=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Le=Ye(P);xt(P)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Le,Q,P.width,P.height):J?t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,Q,P.width,P.height):t.renderbufferStorage(t.RENDERBUFFER,Q,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Fe,t.RENDERBUFFER,U)}else{const ge=P.textures;for(let _e=0;_e<ge.length;_e++){const Q=ge[_e],Fe=s.convert(Q.format,Q.colorSpace),Le=s.convert(Q.type),De=M(Q.internalFormat,Fe,Le,Q.colorSpace),ct=Ye(P);J&&xt(P)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ct,De,P.width,P.height):xt(P)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ct,De,P.width,P.height):t.renderbufferStorage(t.RENDERBUFFER,De,P.width,P.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ae(U,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,U),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),fe(P.depthTexture,0);const ge=i.get(P.depthTexture).__webglTexture,_e=Ye(P);if(P.depthTexture.format===ea)xt(P)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ge,0,_e):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ge,0);else if(P.depthTexture.format===pa)xt(P)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ge,0,_e):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function pt(U){const P=i.get(U),J=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!P.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Ae(P.__webglFramebuffer,U)}else if(J){P.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)n.bindFramebuffer(t.FRAMEBUFFER,P.__webglFramebuffer[ge]),P.__webglDepthbuffer[ge]=t.createRenderbuffer(),Ne(P.__webglDepthbuffer[ge],U,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=t.createRenderbuffer(),Ne(P.__webglDepthbuffer,U,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function st(U,P,J){const ge=i.get(U);P!==void 0&&Se(ge.__webglFramebuffer,U,U.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),J!==void 0&&pt(U)}function rt(U){const P=U.texture,J=i.get(U),ge=i.get(P);U.addEventListener("dispose",N);const _e=U.textures,Q=U.isWebGLCubeRenderTarget===!0,Fe=_e.length>1;if(Fe||(ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture()),ge.__version=P.version,o.memory.textures++),Q){J.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(P.mipmaps&&P.mipmaps.length>0){J.__webglFramebuffer[Le]=[];for(let De=0;De<P.mipmaps.length;De++)J.__webglFramebuffer[Le][De]=t.createFramebuffer()}else J.__webglFramebuffer[Le]=t.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){J.__webglFramebuffer=[];for(let Le=0;Le<P.mipmaps.length;Le++)J.__webglFramebuffer[Le]=t.createFramebuffer()}else J.__webglFramebuffer=t.createFramebuffer();if(Fe)for(let Le=0,De=_e.length;Le<De;Le++){const ct=i.get(_e[Le]);ct.__webglTexture===void 0&&(ct.__webglTexture=t.createTexture(),o.memory.textures++)}if(U.samples>0&&xt(U)===!1){J.__webglMultisampledFramebuffer=t.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Le=0;Le<_e.length;Le++){const De=_e[Le];J.__webglColorRenderbuffer[Le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,J.__webglColorRenderbuffer[Le]);const ct=s.convert(De.format,De.colorSpace),we=s.convert(De.type),Ge=M(De.internalFormat,ct,we,De.colorSpace,U.isXRRenderTarget===!0),at=Ye(U);t.renderbufferStorageMultisample(t.RENDERBUFFER,at,Ge,U.width,U.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,J.__webglColorRenderbuffer[Le])}t.bindRenderbuffer(t.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=t.createRenderbuffer(),Ne(J.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,ge.__webglTexture),Ce(t.TEXTURE_CUBE_MAP,P);for(let Le=0;Le<6;Le++)if(P.mipmaps&&P.mipmaps.length>0)for(let De=0;De<P.mipmaps.length;De++)Se(J.__webglFramebuffer[Le][De],U,P,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Le,De);else Se(J.__webglFramebuffer[Le],U,P,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);x(P)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Fe){for(let Le=0,De=_e.length;Le<De;Le++){const ct=_e[Le],we=i.get(ct);n.bindTexture(t.TEXTURE_2D,we.__webglTexture),Ce(t.TEXTURE_2D,ct),Se(J.__webglFramebuffer,U,ct,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,0),x(ct)&&g(t.TEXTURE_2D)}n.unbindTexture()}else{let Le=t.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Le=U.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Le,ge.__webglTexture),Ce(Le,P),P.mipmaps&&P.mipmaps.length>0)for(let De=0;De<P.mipmaps.length;De++)Se(J.__webglFramebuffer[De],U,P,t.COLOR_ATTACHMENT0,Le,De);else Se(J.__webglFramebuffer,U,P,t.COLOR_ATTACHMENT0,Le,0);x(P)&&g(Le),n.unbindTexture()}U.depthBuffer&&pt(U)}function G(U){const P=U.textures;for(let J=0,ge=P.length;J<ge;J++){const _e=P[J];if(x(_e)){const Q=U.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Fe=i.get(_e).__webglTexture;n.bindTexture(Q,Fe),g(Q),n.unbindTexture()}}}const lt=[],ut=[];function Gt(U){if(U.samples>0){if(xt(U)===!1){const P=U.textures,J=U.width,ge=U.height;let _e=t.COLOR_BUFFER_BIT;const Q=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Fe=i.get(U),Le=P.length>1;if(Le)for(let De=0;De<P.length;De++)n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let De=0;De<P.length;De++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(_e|=t.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(_e|=t.STENCIL_BUFFER_BIT)),Le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Fe.__webglColorRenderbuffer[De]);const ct=i.get(P[De]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ct,0)}t.blitFramebuffer(0,0,J,ge,0,0,J,ge,_e,t.NEAREST),c===!0&&(lt.length=0,ut.length=0,lt.push(t.COLOR_ATTACHMENT0+De),U.depthBuffer&&U.resolveDepthBuffer===!1&&(lt.push(Q),ut.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ut)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,lt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Le)for(let De=0;De<P.length;De++){n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,Fe.__webglColorRenderbuffer[De]);const ct=i.get(P[De]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,ct,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&c){const P=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[P])}}}function Ye(U){return Math.min(r.maxSamples,U.samples)}function xt(U){const P=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function ot(U){const P=o.render.frame;h.get(U)!==P&&(h.set(U,P),U.update())}function Ke(U,P){const J=U.colorSpace,ge=U.format,_e=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||J!==Rs&&J!==as&&(Ft.getTransfer(J)===Yt?(ge!==hr||_e!==ws)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),P}function on(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(f.width=U.naturalWidth||U.width,f.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(f.width=U.displayWidth,f.height=U.displayHeight):(f.width=U.width,f.height=U.height),f}this.allocateTextureUnit=oe,this.resetTextureUnits=H,this.setTexture2D=fe,this.setTexture2DArray=me,this.setTexture3D=ue,this.setTextureCube=pe,this.rebindTextures=st,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=xt}function y3(t,e){function n(i,r=as){let s;const o=Ft.getTransfer(r);if(i===ws)return t.UNSIGNED_BYTE;if(i===Jx)return t.UNSIGNED_SHORT_4_4_4_4;if(i===eS)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Jb)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Qb)return t.BYTE;if(i===Zb)return t.SHORT;if(i===zu)return t.UNSIGNED_SHORT;if(i===Zx)return t.INT;if(i===da)return t.UNSIGNED_INT;if(i===us)return t.FLOAT;if(i===vf)return t.HALF_FLOAT;if(i===eC)return t.ALPHA;if(i===tC)return t.RGB;if(i===hr)return t.RGBA;if(i===nC)return t.LUMINANCE;if(i===iC)return t.LUMINANCE_ALPHA;if(i===ea)return t.DEPTH_COMPONENT;if(i===pa)return t.DEPTH_STENCIL;if(i===rC)return t.RED;if(i===tS)return t.RED_INTEGER;if(i===sC)return t.RG;if(i===nS)return t.RG_INTEGER;if(i===iS)return t.RGBA_INTEGER;if(i===zd||i===Bd||i===Hd||i===Vd)if(o===Yt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===zd)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bd)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hd)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vd)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===zd)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bd)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hd)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vd)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gv||i===Wv||i===jv||i===$v)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Gv)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wv)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jv)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$v)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xv||i===qv||i===Yv)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Xv||i===qv)return o===Yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Yv)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Kv||i===Qv||i===Zv||i===Jv||i===e0||i===t0||i===n0||i===i0||i===r0||i===s0||i===o0||i===a0||i===l0||i===c0)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Kv)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qv)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zv)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jv)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===e0)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===t0)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===n0)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===i0)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===r0)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===s0)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===o0)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===a0)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===l0)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===c0)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gd||i===u0||i===f0)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Gd)return o===Yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===u0)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===f0)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===oC||i===d0||i===h0||i===p0)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Gd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===d0)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===h0)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===p0)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ha?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class x3 extends Ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ja extends pi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S3={type:"move"};class gh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ja,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ja,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ja,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,f=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(f&&e.hand){o=!0;for(const S of e.hand.values()){const x=n.getJointPose(S,i),g=this._getHandJoint(f,S);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const h=f.joints["index-finger-tip"],p=f.joints["thumb-tip"],m=h.position.distanceTo(p.position),y=.02,E=.005;f.inputState.pinching&&m>y+E?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&m<=y-E&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(S3)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),f!==null&&(f.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ja;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const E3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M3=`
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

}`;class w3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new oi,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ts({vertexShader:E3,fragmentShader:M3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pr(new xf(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class T3 extends Sa{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,f=null,h=null,p=null,m=null,y=null,E=null;const S=new w3,x=n.getContextAttributes();let g=null,M=null;const w=[],A=[],O=new Ut;let N=null;const d=new Ci;d.layers.enable(1),d.viewport=new Ln;const z=new Ci;z.layers.enable(2),z.viewport=new Ln;const D=[d,z],R=new x3;R.layers.enable(1),R.layers.enable(2);let H=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let Se=w[se];return Se===void 0&&(Se=new gh,w[se]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(se){let Se=w[se];return Se===void 0&&(Se=new gh,w[se]=Se),Se.getGripSpace()},this.getHand=function(se){let Se=w[se];return Se===void 0&&(Se=new gh,w[se]=Se),Se.getHandSpace()};function q(se){const Se=A.indexOf(se.inputSource);if(Se===-1)return;const Ne=w[Se];Ne!==void 0&&(Ne.update(se.inputSource,se.frame,f||o),Ne.dispatchEvent({type:se.type,data:se.inputSource}))}function fe(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",fe),r.removeEventListener("inputsourceschange",me);for(let se=0;se<w.length;se++){const Se=A[se];Se!==null&&(A[se]=null,w[se].disconnect(Se))}H=null,oe=null,S.reset(),e.setRenderTarget(g),y=null,m=null,p=null,r=null,M=null,mt.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||o},this.setReferenceSpace=function(se){f=se},this.getBaseLayer=function(){return m!==null?m:y},this.getBinding=function(){return p},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",fe),r.addEventListener("inputsourceschange",me),x.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(O),r.renderState.layers===void 0){const Se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};y=new XRWebGLLayer(r,n,Se),r.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),M=new ao(y.framebufferWidth,y.framebufferHeight,{format:hr,type:ws,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Se=null,Ne=null,Ae=null;x.depth&&(Ae=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=x.stencil?pa:ea,Ne=x.stencil?ha:da);const pt={colorFormat:n.RGBA8,depthFormat:Ae,scaleFactor:s};p=new XRWebGLBinding(r,n),m=p.createProjectionLayer(pt),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),M=new ao(m.textureWidth,m.textureHeight,{format:hr,type:ws,depthTexture:new _S(m.textureWidth,m.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),f=null,o=await r.requestReferenceSpace(a),mt.setContext(r),mt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function me(se){for(let Se=0;Se<se.removed.length;Se++){const Ne=se.removed[Se],Ae=A.indexOf(Ne);Ae>=0&&(A[Ae]=null,w[Ae].disconnect(Ne))}for(let Se=0;Se<se.added.length;Se++){const Ne=se.added[Se];let Ae=A.indexOf(Ne);if(Ae===-1){for(let st=0;st<w.length;st++)if(st>=A.length){A.push(Ne),Ae=st;break}else if(A[st]===null){A[st]=Ne,Ae=st;break}if(Ae===-1)break}const pt=w[Ae];pt&&pt.connect(Ne)}}const ue=new ie,pe=new ie;function W(se,Se,Ne){ue.setFromMatrixPosition(Se.matrixWorld),pe.setFromMatrixPosition(Ne.matrixWorld);const Ae=ue.distanceTo(pe),pt=Se.projectionMatrix.elements,st=Ne.projectionMatrix.elements,rt=pt[14]/(pt[10]-1),G=pt[14]/(pt[10]+1),lt=(pt[9]+1)/pt[5],ut=(pt[9]-1)/pt[5],Gt=(pt[8]-1)/pt[0],Ye=(st[8]+1)/st[0],xt=rt*Gt,ot=rt*Ye,Ke=Ae/(-Gt+Ye),on=Ke*-Gt;Se.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(on),se.translateZ(Ke),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert();const U=rt+Ke,P=G+Ke,J=xt-on,ge=ot+(Ae-on),_e=lt*G/P*U,Q=ut*G/P*U;se.projectionMatrix.makePerspective(J,ge,_e,Q,U,P),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}function de(se,Se){Se===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(Se.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;S.texture!==null&&(se.near=S.depthNear,se.far=S.depthFar),R.near=z.near=d.near=se.near,R.far=z.far=d.far=se.far,(H!==R.near||oe!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,oe=R.far,d.near=H,d.far=oe,z.near=H,z.far=oe,d.updateProjectionMatrix(),z.updateProjectionMatrix(),se.updateProjectionMatrix());const Se=se.parent,Ne=R.cameras;de(R,Se);for(let Ae=0;Ae<Ne.length;Ae++)de(Ne[Ae],Se);Ne.length===2?W(R,d,z):R.projectionMatrix.copy(d.projectionMatrix),ve(se,R,Se)};function ve(se,Se,Ne){Ne===null?se.matrix.copy(Se.matrixWorld):(se.matrix.copy(Ne.matrixWorld),se.matrix.invert(),se.matrix.multiply(Se.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(Se.projectionMatrix),se.projectionMatrixInverse.copy(Se.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Mp*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(m===null&&y===null))return c},this.setFoveation=function(se){c=se,m!==null&&(m.fixedFoveation=se),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=se)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(R)};let Ce=null;function We(se,Se){if(h=Se.getViewerPose(f||o),E=Se,h!==null){const Ne=h.views;y!==null&&(e.setRenderTargetFramebuffer(M,y.framebuffer),e.setRenderTarget(M));let Ae=!1;Ne.length!==R.cameras.length&&(R.cameras.length=0,Ae=!0);for(let st=0;st<Ne.length;st++){const rt=Ne[st];let G=null;if(y!==null)G=y.getViewport(rt);else{const ut=p.getViewSubImage(m,rt);G=ut.viewport,st===0&&(e.setRenderTargetTextures(M,ut.colorTexture,m.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(M))}let lt=D[st];lt===void 0&&(lt=new Ci,lt.layers.enable(st),lt.viewport=new Ln,D[st]=lt),lt.matrix.fromArray(rt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(rt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(G.x,G.y,G.width,G.height),st===0&&(R.matrix.copy(lt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Ae===!0&&R.cameras.push(lt)}const pt=r.enabledFeatures;if(pt&&pt.includes("depth-sensing")){const st=p.getDepthInformation(Ne[0]);st&&st.isValid&&st.texture&&S.init(e,st,r.renderState)}}for(let Ne=0;Ne<w.length;Ne++){const Ae=A[Ne],pt=w[Ne];Ae!==null&&pt!==void 0&&pt.update(Ae,Se,f||o)}Ce&&Ce(se,Se),Se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Se}),E=null}const mt=new vS;mt.setAnimationLoop(We),this.setAnimationLoop=function(se){Ce=se},this.dispose=function(){}}}const Hs=new Hr,b3=new yn;function C3(t,e){function n(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function i(x,g){g.color.getRGB(x.fogColor.value,hS(t)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function r(x,g,M,w,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(x,g):g.isMeshToonMaterial?(s(x,g),p(x,g)):g.isMeshPhongMaterial?(s(x,g),h(x,g)):g.isMeshStandardMaterial?(s(x,g),m(x,g),g.isMeshPhysicalMaterial&&y(x,g,A)):g.isMeshMatcapMaterial?(s(x,g),E(x,g)):g.isMeshDepthMaterial?s(x,g):g.isMeshDistanceMaterial?(s(x,g),S(x,g)):g.isMeshNormalMaterial?s(x,g):g.isLineBasicMaterial?(o(x,g),g.isLineDashedMaterial&&a(x,g)):g.isPointsMaterial?c(x,g,M,w):g.isSpriteMaterial?f(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,n(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,n(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,n(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===si&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,n(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===si&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,n(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,n(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const M=e.get(g),w=M.envMap,A=M.envMapRotation;w&&(x.envMap.value=w,Hs.copy(A),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),x.envMapRotation.value.setFromMatrix4(b3.makeRotationFromEuler(Hs)),x.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,x.aoMapTransform))}function o(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,n(g.map,x.mapTransform))}function a(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function c(x,g,M,w){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*M,x.scale.value=w*.5,g.map&&(x.map.value=g.map,n(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,n(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function f(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,n(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,n(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function h(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function p(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function m(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function y(x,g,M){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===si&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=M.texture,x.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,g){g.matcap&&(x.matcap.value=g.matcap)}function S(x,g){const M=e.get(g).light;x.referencePosition.value.setFromMatrixPosition(M.matrixWorld),x.nearDistance.value=M.shadow.camera.near,x.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function A3(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,w){const A=w.program;i.uniformBlockBinding(M,A)}function f(M,w){let A=r[M.id];A===void 0&&(E(M),A=h(M),r[M.id]=A,M.addEventListener("dispose",x));const O=w.program;i.updateUBOMapping(M,O);const N=e.render.frame;s[M.id]!==N&&(m(M),s[M.id]=N)}function h(M){const w=p();M.__bindingPointIndex=w;const A=t.createBuffer(),O=M.__size,N=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,O,N),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,w,A),A}function p(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(M){const w=r[M.id],A=M.uniforms,O=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let N=0,d=A.length;N<d;N++){const z=Array.isArray(A[N])?A[N]:[A[N]];for(let D=0,R=z.length;D<R;D++){const H=z[D];if(y(H,N,D,O)===!0){const oe=H.__offset,q=Array.isArray(H.value)?H.value:[H.value];let fe=0;for(let me=0;me<q.length;me++){const ue=q[me],pe=S(ue);typeof ue=="number"||typeof ue=="boolean"?(H.__data[0]=ue,t.bufferSubData(t.UNIFORM_BUFFER,oe+fe,H.__data)):ue.isMatrix3?(H.__data[0]=ue.elements[0],H.__data[1]=ue.elements[1],H.__data[2]=ue.elements[2],H.__data[3]=0,H.__data[4]=ue.elements[3],H.__data[5]=ue.elements[4],H.__data[6]=ue.elements[5],H.__data[7]=0,H.__data[8]=ue.elements[6],H.__data[9]=ue.elements[7],H.__data[10]=ue.elements[8],H.__data[11]=0):(ue.toArray(H.__data,fe),fe+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,oe,H.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function y(M,w,A,O){const N=M.value,d=w+"_"+A;if(O[d]===void 0)return typeof N=="number"||typeof N=="boolean"?O[d]=N:O[d]=N.clone(),!0;{const z=O[d];if(typeof N=="number"||typeof N=="boolean"){if(z!==N)return O[d]=N,!0}else if(z.equals(N)===!1)return z.copy(N),!0}return!1}function E(M){const w=M.uniforms;let A=0;const O=16;for(let d=0,z=w.length;d<z;d++){const D=Array.isArray(w[d])?w[d]:[w[d]];for(let R=0,H=D.length;R<H;R++){const oe=D[R],q=Array.isArray(oe.value)?oe.value:[oe.value];for(let fe=0,me=q.length;fe<me;fe++){const ue=q[fe],pe=S(ue),W=A%O;W!==0&&O-W<pe.boundary&&(A+=O-W),oe.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=A,A+=pe.storage}}}const N=A%O;return N>0&&(A+=O-N),M.__size=A,M.__cache={},this}function S(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),w}function x(M){const w=M.target;w.removeEventListener("dispose",x);const A=o.indexOf(w.__bindingPointIndex);o.splice(A,1),t.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function g(){for(const M in r)t.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:c,update:f,dispose:g}}class R3{constructor(e={}){const{canvas:n=yC(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:f=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const y=new Uint32Array(4),E=new Int32Array(4);let S=null,x=null;const g=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=or,this.toneMapping=xs,this.toneMappingExposure=1;const w=this;let A=!1,O=0,N=0,d=null,z=-1,D=null;const R=new Ln,H=new Ln;let oe=null;const q=new zt(0);let fe=0,me=n.width,ue=n.height,pe=1,W=null,de=null;const ve=new Ln(0,0,me,ue),Ce=new Ln(0,0,me,ue);let We=!1;const mt=new gS;let se=!1,Se=!1;const Ne=new yn,Ae=new ie,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function rt(){return d===null?pe:1}let G=i;function lt(L,$){return n.getContext(L,$)}try{const L={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:f,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Lm}`),n.addEventListener("webglcontextlost",Ie,!1),n.addEventListener("webglcontextrestored",ce,!1),n.addEventListener("webglcontextcreationerror",he,!1),G===null){const $="webgl2";if(G=lt($,L),G===null)throw lt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ut,Gt,Ye,xt,ot,Ke,on,U,P,J,ge,_e,Q,Fe,Le,De,ct,we,Ge,at,$e,Re,tt,gt;function Wt(){ut=new OP(G),ut.init(),Re=new y3(G,ut),Gt=new PP(G,ut,e,Re),Ye=new v3(G),xt=new BP(G),ot=new i3,Ke=new _3(G,ut,Ye,ot,Gt,Re,xt),on=new DP(w),U=new UP(w),P=new $C(G),tt=new AP(G,P),J=new FP(G,P,xt,tt),ge=new VP(G,J,P,xt),Ge=new HP(G,Gt,Ke),De=new LP(ot),_e=new n3(w,on,U,ut,Gt,tt,De),Q=new C3(w,ot),Fe=new s3,Le=new f3(ut),we=new CP(w,on,U,Ye,ge,m,c),ct=new g3(w,ge,Gt),gt=new A3(G,xt,Gt,Ye),at=new RP(G,ut,xt),$e=new zP(G,ut,xt),xt.programs=_e.programs,w.capabilities=Gt,w.extensions=ut,w.properties=ot,w.renderLists=Fe,w.shadowMap=ct,w.state=Ye,w.info=xt}Wt();const V=new T3(w,G);this.xr=V,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const L=ut.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ut.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(L){L!==void 0&&(pe=L,this.setSize(me,ue,!1))},this.getSize=function(L){return L.set(me,ue)},this.setSize=function(L,$,Z=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}me=L,ue=$,n.width=Math.floor(L*pe),n.height=Math.floor($*pe),Z===!0&&(n.style.width=L+"px",n.style.height=$+"px"),this.setViewport(0,0,L,$)},this.getDrawingBufferSize=function(L){return L.set(me*pe,ue*pe).floor()},this.setDrawingBufferSize=function(L,$,Z){me=L,ue=$,pe=Z,n.width=Math.floor(L*Z),n.height=Math.floor($*Z),this.setViewport(0,0,L,$)},this.getCurrentViewport=function(L){return L.copy(R)},this.getViewport=function(L){return L.copy(ve)},this.setViewport=function(L,$,Z,ee){L.isVector4?ve.set(L.x,L.y,L.z,L.w):ve.set(L,$,Z,ee),Ye.viewport(R.copy(ve).multiplyScalar(pe).round())},this.getScissor=function(L){return L.copy(Ce)},this.setScissor=function(L,$,Z,ee){L.isVector4?Ce.set(L.x,L.y,L.z,L.w):Ce.set(L,$,Z,ee),Ye.scissor(H.copy(Ce).multiplyScalar(pe).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(L){Ye.setScissorTest(We=L)},this.setOpaqueSort=function(L){W=L},this.setTransparentSort=function(L){de=L},this.getClearColor=function(L){return L.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(L=!0,$=!0,Z=!0){let ee=0;if(L){let X=!1;if(d!==null){const Me=d.texture.format;X=Me===iS||Me===nS||Me===tS}if(X){const Me=d.texture.type,ke=Me===ws||Me===da||Me===zu||Me===ha||Me===Jx||Me===eS,Be=we.getClearColor(),He=we.getClearAlpha(),Qe=Be.r,Ze=Be.g,Xe=Be.b;ke?(y[0]=Qe,y[1]=Ze,y[2]=Xe,y[3]=He,G.clearBufferuiv(G.COLOR,0,y)):(E[0]=Qe,E[1]=Ze,E[2]=Xe,E[3]=He,G.clearBufferiv(G.COLOR,0,E))}else ee|=G.COLOR_BUFFER_BIT}$&&(ee|=G.DEPTH_BUFFER_BIT),Z&&(ee|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ie,!1),n.removeEventListener("webglcontextrestored",ce,!1),n.removeEventListener("webglcontextcreationerror",he,!1),Fe.dispose(),Le.dispose(),ot.dispose(),on.dispose(),U.dispose(),ge.dispose(),tt.dispose(),gt.dispose(),_e.dispose(),V.dispose(),V.removeEventListener("sessionstart",xi),V.removeEventListener("sessionend",li),Yi.stop()};function Ie(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const L=xt.autoReset,$=ct.enabled,Z=ct.autoUpdate,ee=ct.needsUpdate,X=ct.type;Wt(),xt.autoReset=L,ct.enabled=$,ct.autoUpdate=Z,ct.needsUpdate=ee,ct.type=X}function he(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ee(L){const $=L.target;$.removeEventListener("dispose",Ee),Je($)}function Je(L){Et(L),ot.remove(L)}function Et(L){const $=ot.get(L).programs;$!==void 0&&($.forEach(function(Z){_e.releaseProgram(Z)}),L.isShaderMaterial&&_e.releaseShaderCache(L))}this.renderBufferDirect=function(L,$,Z,ee,X,Me){$===null&&($=pt);const ke=X.isMesh&&X.matrixWorld.determinant()<0,Be=jf(L,$,Z,ee,X);Ye.setMaterial(ee,ke);let He=Z.index,Qe=1;if(ee.wireframe===!0){if(He=J.getWireframeAttribute(Z),He===void 0)return;Qe=2}const Ze=Z.drawRange,Xe=Z.attributes.position;let Ct=Ze.start*Qe,Qt=(Ze.start+Ze.count)*Qe;Me!==null&&(Ct=Math.max(Ct,Me.start*Qe),Qt=Math.min(Qt,(Me.start+Me.count)*Qe)),He!==null?(Ct=Math.max(Ct,0),Qt=Math.min(Qt,He.count)):Xe!=null&&(Ct=Math.max(Ct,0),Qt=Math.min(Qt,Xe.count));const jt=Qt-Ct;if(jt<0||jt===1/0)return;tt.setup(X,ee,Be,Z,He);let Vn,Dt=at;if(He!==null&&(Vn=P.get(He),Dt=$e,Dt.setIndex(Vn)),X.isMesh)ee.wireframe===!0?(Ye.setLineWidth(ee.wireframeLinewidth*rt()),Dt.setMode(G.LINES)):Dt.setMode(G.TRIANGLES);else if(X.isLine){let je=ee.linewidth;je===void 0&&(je=1),Ye.setLineWidth(je*rt()),X.isLineSegments?Dt.setMode(G.LINES):X.isLineLoop?Dt.setMode(G.LINE_LOOP):Dt.setMode(G.LINE_STRIP)}else X.isPoints?Dt.setMode(G.POINTS):X.isSprite&&Dt.setMode(G.TRIANGLES);if(X.isBatchedMesh)X._multiDrawInstances!==null?Dt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances):Dt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)Dt.renderInstances(Ct,jt,X.count);else if(Z.isInstancedBufferGeometry){const je=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,En=Math.min(Z.instanceCount,je);Dt.renderInstances(Ct,jt,En)}else Dt.render(Ct,jt)};function Mt(L,$,Z){L.transparent===!0&&L.side===Dr&&L.forceSinglePass===!1?(L.side=si,L.needsUpdate=!0,ho(L,$,Z),L.side=Ms,L.needsUpdate=!0,ho(L,$,Z),L.side=Dr):ho(L,$,Z)}this.compile=function(L,$,Z=null){Z===null&&(Z=L),x=Le.get(Z),x.init($),M.push(x),Z.traverseVisible(function(X){X.isLight&&X.layers.test($.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),L!==Z&&L.traverseVisible(function(X){X.isLight&&X.layers.test($.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),x.setupLights();const ee=new Set;return L.traverse(function(X){const Me=X.material;if(Me)if(Array.isArray(Me))for(let ke=0;ke<Me.length;ke++){const Be=Me[ke];Mt(Be,Z,X),ee.add(Be)}else Mt(Me,Z,X),ee.add(Me)}),M.pop(),x=null,ee},this.compileAsync=function(L,$,Z=null){const ee=this.compile(L,$,Z);return new Promise(X=>{function Me(){if(ee.forEach(function(ke){ot.get(ke).currentProgram.isReady()&&ee.delete(ke)}),ee.size===0){X(L);return}setTimeout(Me,10)}ut.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let bt=null;function Pt(L){bt&&bt(L)}function xi(){Yi.stop()}function li(){Yi.start()}const Yi=new vS;Yi.setAnimationLoop(Pt),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(L){bt=L,V.setAnimationLoop(L),L===null?Yi.stop():Yi.start()},V.addEventListener("sessionstart",xi),V.addEventListener("sessionend",li),this.render=function(L,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera($),$=V.getCamera()),L.isScene===!0&&L.onBeforeRender(w,L,$,d),x=Le.get(L,M.length),x.init($),M.push(x),Ne.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),mt.setFromProjectionMatrix(Ne),Se=this.localClippingEnabled,se=De.init(this.clippingPlanes,Se),S=Fe.get(L,g.length),S.init(),g.push(S),V.enabled===!0&&V.isPresenting===!0){const Me=w.xr.getDepthSensingMesh();Me!==null&&Ki(Me,$,-1/0,w.sortObjects)}Ki(L,$,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(W,de),st=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,st&&we.addToRenderList(S,L),this.info.render.frame++,se===!0&&De.beginShadows();const Z=x.state.shadowsArray;ct.render(Z,L,$),se===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=S.opaque,X=S.transmissive;if(x.setupLights(),$.isArrayCamera){const Me=$.cameras;if(X.length>0)for(let ke=0,Be=Me.length;ke<Be;ke++){const He=Me[ke];fo(ee,X,L,He)}st&&we.render(L);for(let ke=0,Be=Me.length;ke<Be;ke++){const He=Me[ke];xr(S,L,He,He.viewport)}}else X.length>0&&fo(ee,X,L,$),st&&we.render(L),xr(S,L,$);d!==null&&(Ke.updateMultisampleRenderTarget(d),Ke.updateRenderTargetMipmap(d)),L.isScene===!0&&L.onAfterRender(w,L,$),tt.resetDefaultState(),z=-1,D=null,M.pop(),M.length>0?(x=M[M.length-1],se===!0&&De.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,g.pop(),g.length>0?S=g[g.length-1]:S=null};function Ki(L,$,Z,ee){if(L.visible===!1)return;if(L.layers.test($.layers)){if(L.isGroup)Z=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update($);else if(L.isLight)x.pushLight(L),L.castShadow&&x.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||mt.intersectsSprite(L)){ee&&Ae.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ne);const ke=ge.update(L),Be=L.material;Be.visible&&S.push(L,ke,Be,Z,Ae.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||mt.intersectsObject(L))){const ke=ge.update(L),Be=L.material;if(ee&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ae.copy(L.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),Ae.copy(ke.boundingSphere.center)),Ae.applyMatrix4(L.matrixWorld).applyMatrix4(Ne)),Array.isArray(Be)){const He=ke.groups;for(let Qe=0,Ze=He.length;Qe<Ze;Qe++){const Xe=He[Qe],Ct=Be[Xe.materialIndex];Ct&&Ct.visible&&S.push(L,ke,Ct,Z,Ae.z,Xe)}}else Be.visible&&S.push(L,ke,Be,Z,Ae.z,null)}}const Me=L.children;for(let ke=0,Be=Me.length;ke<Be;ke++)Ki(Me[ke],$,Z,ee)}function xr(L,$,Z,ee){const X=L.opaque,Me=L.transmissive,ke=L.transparent;x.setupLightsView(Z),se===!0&&De.setGlobalState(w.clippingPlanes,Z),ee&&Ye.viewport(R.copy(ee)),X.length>0&&Sr(X,$,Z),Me.length>0&&Sr(Me,$,Z),ke.length>0&&Sr(ke,$,Z),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function fo(L,$,Z,ee){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ee.id]===void 0&&(x.state.transmissionRenderTarget[ee.id]=new ao(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?vf:ws,minFilter:Zs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ft.workingColorSpace}));const Me=x.state.transmissionRenderTarget[ee.id],ke=ee.viewport||R;Me.setSize(ke.z,ke.w);const Be=w.getRenderTarget();w.setRenderTarget(Me),w.getClearColor(q),fe=w.getClearAlpha(),fe<1&&w.setClearColor(16777215,.5),st?we.render(Z):w.clear();const He=w.toneMapping;w.toneMapping=xs;const Qe=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),x.setupLightsView(ee),se===!0&&De.setGlobalState(w.clippingPlanes,ee),Sr(L,Z,ee),Ke.updateMultisampleRenderTarget(Me),Ke.updateRenderTargetMipmap(Me),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Xe=0,Ct=$.length;Xe<Ct;Xe++){const Qt=$[Xe],jt=Qt.object,Vn=Qt.geometry,Dt=Qt.material,je=Qt.group;if(Dt.side===Dr&&jt.layers.test(ee.layers)){const En=Dt.side;Dt.side=si,Dt.needsUpdate=!0,Xl(jt,Z,ee,Vn,Dt,je),Dt.side=En,Dt.needsUpdate=!0,Ze=!0}}Ze===!0&&(Ke.updateMultisampleRenderTarget(Me),Ke.updateRenderTargetMipmap(Me))}w.setRenderTarget(Be),w.setClearColor(q,fe),Qe!==void 0&&(ee.viewport=Qe),w.toneMapping=He}function Sr(L,$,Z){const ee=$.isScene===!0?$.overrideMaterial:null;for(let X=0,Me=L.length;X<Me;X++){const ke=L[X],Be=ke.object,He=ke.geometry,Qe=ee===null?ke.material:ee,Ze=ke.group;Be.layers.test(Z.layers)&&Xl(Be,$,Z,He,Qe,Ze)}}function Xl(L,$,Z,ee,X,Me){L.onBeforeRender(w,$,Z,ee,X,Me),L.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),X.onBeforeRender(w,$,Z,ee,L,Me),X.transparent===!0&&X.side===Dr&&X.forceSinglePass===!1?(X.side=si,X.needsUpdate=!0,w.renderBufferDirect(Z,$,ee,X,L,Me),X.side=Ms,X.needsUpdate=!0,w.renderBufferDirect(Z,$,ee,X,L,Me),X.side=Dr):w.renderBufferDirect(Z,$,ee,X,L,Me),L.onAfterRender(w,$,Z,ee,X,Me)}function ho(L,$,Z){$.isScene!==!0&&($=pt);const ee=ot.get(L),X=x.state.lights,Me=x.state.shadowsArray,ke=X.state.version,Be=_e.getParameters(L,X.state,Me,$,Z),He=_e.getProgramCacheKey(Be);let Qe=ee.programs;ee.environment=L.isMeshStandardMaterial?$.environment:null,ee.fog=$.fog,ee.envMap=(L.isMeshStandardMaterial?U:on).get(L.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&L.envMap===null?$.environmentRotation:L.envMapRotation,Qe===void 0&&(L.addEventListener("dispose",Ee),Qe=new Map,ee.programs=Qe);let Ze=Qe.get(He);if(Ze!==void 0){if(ee.currentProgram===Ze&&ee.lightsStateVersion===ke)return Ta(L,Be),Ze}else Be.uniforms=_e.getUniforms(L),L.onBuild(Z,Be,w),L.onBeforeCompile(Be,w),Ze=_e.acquireProgram(Be,He),Qe.set(He,Ze),ee.uniforms=Be.uniforms;const Xe=ee.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Xe.clippingPlanes=De.uniform),Ta(L,Be),ee.needsLights=Yl(L),ee.lightsStateVersion=ke,ee.needsLights&&(Xe.ambientLightColor.value=X.state.ambient,Xe.lightProbe.value=X.state.probe,Xe.directionalLights.value=X.state.directional,Xe.directionalLightShadows.value=X.state.directionalShadow,Xe.spotLights.value=X.state.spot,Xe.spotLightShadows.value=X.state.spotShadow,Xe.rectAreaLights.value=X.state.rectArea,Xe.ltc_1.value=X.state.rectAreaLTC1,Xe.ltc_2.value=X.state.rectAreaLTC2,Xe.pointLights.value=X.state.point,Xe.pointLightShadows.value=X.state.pointShadow,Xe.hemisphereLights.value=X.state.hemi,Xe.directionalShadowMap.value=X.state.directionalShadowMap,Xe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Xe.spotShadowMap.value=X.state.spotShadowMap,Xe.spotLightMatrix.value=X.state.spotLightMatrix,Xe.spotLightMap.value=X.state.spotLightMap,Xe.pointShadowMap.value=X.state.pointShadowMap,Xe.pointShadowMatrix.value=X.state.pointShadowMatrix),ee.currentProgram=Ze,ee.uniformsList=null,Ze}function ql(L){if(L.uniformsList===null){const $=L.currentProgram.getUniforms();L.uniformsList=cu.seqWithValue($.seq,L.uniforms)}return L.uniformsList}function Ta(L,$){const Z=ot.get(L);Z.outputColorSpace=$.outputColorSpace,Z.batching=$.batching,Z.batchingColor=$.batchingColor,Z.instancing=$.instancing,Z.instancingColor=$.instancingColor,Z.instancingMorph=$.instancingMorph,Z.skinning=$.skinning,Z.morphTargets=$.morphTargets,Z.morphNormals=$.morphNormals,Z.morphColors=$.morphColors,Z.morphTargetsCount=$.morphTargetsCount,Z.numClippingPlanes=$.numClippingPlanes,Z.numIntersection=$.numClipIntersection,Z.vertexAlphas=$.vertexAlphas,Z.vertexTangents=$.vertexTangents,Z.toneMapping=$.toneMapping}function jf(L,$,Z,ee,X){$.isScene!==!0&&($=pt),Ke.resetTextureUnits();const Me=$.fog,ke=ee.isMeshStandardMaterial?$.environment:null,Be=d===null?w.outputColorSpace:d.isXRRenderTarget===!0?d.texture.colorSpace:Rs,He=(ee.isMeshStandardMaterial?U:on).get(ee.envMap||ke),Qe=ee.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ze=!!Z.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Xe=!!Z.morphAttributes.position,Ct=!!Z.morphAttributes.normal,Qt=!!Z.morphAttributes.color;let jt=xs;ee.toneMapped&&(d===null||d.isXRRenderTarget===!0)&&(jt=w.toneMapping);const Vn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Dt=Vn!==void 0?Vn.length:0,je=ot.get(ee),En=x.state.lights;if(se===!0&&(Se===!0||L!==D)){const Gn=L===D&&ee.id===z;De.setState(ee,L,Gn)}let Lt=!1;ee.version===je.__version?(je.needsLights&&je.lightsStateVersion!==En.state.version||je.outputColorSpace!==Be||X.isBatchedMesh&&je.batching===!1||!X.isBatchedMesh&&je.batching===!0||X.isBatchedMesh&&je.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&je.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&je.instancing===!1||!X.isInstancedMesh&&je.instancing===!0||X.isSkinnedMesh&&je.skinning===!1||!X.isSkinnedMesh&&je.skinning===!0||X.isInstancedMesh&&je.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&je.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&je.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&je.instancingMorph===!1&&X.morphTexture!==null||je.envMap!==He||ee.fog===!0&&je.fog!==Me||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==De.numPlanes||je.numIntersection!==De.numIntersection)||je.vertexAlphas!==Qe||je.vertexTangents!==Ze||je.morphTargets!==Xe||je.morphNormals!==Ct||je.morphColors!==Qt||je.toneMapping!==jt||je.morphTargetsCount!==Dt)&&(Lt=!0):(Lt=!0,je.__version=ee.version);let Si=je.currentProgram;Lt===!0&&(Si=ho(ee,$,X));let mn=!1,Kn=!1,Gr=!1;const fn=Si.getUniforms(),Qi=je.uniforms;if(Ye.useProgram(Si.program)&&(mn=!0,Kn=!0,Gr=!0),ee.id!==z&&(z=ee.id,Kn=!0),mn||D!==L){fn.setValue(G,"projectionMatrix",L.projectionMatrix),fn.setValue(G,"viewMatrix",L.matrixWorldInverse);const Gn=fn.map.cameraPosition;Gn!==void 0&&Gn.setValue(G,Ae.setFromMatrixPosition(L.matrixWorld)),Gt.logarithmicDepthBuffer&&fn.setValue(G,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&fn.setValue(G,"isOrthographic",L.isOrthographicCamera===!0),D!==L&&(D=L,Kn=!0,Gr=!0)}if(X.isSkinnedMesh){fn.setOptional(G,X,"bindMatrix"),fn.setOptional(G,X,"bindMatrixInverse");const Gn=X.skeleton;Gn&&(Gn.boneTexture===null&&Gn.computeBoneTexture(),fn.setValue(G,"boneTexture",Gn.boneTexture,Ke))}X.isBatchedMesh&&(fn.setOptional(G,X,"batchingTexture"),fn.setValue(G,"batchingTexture",X._matricesTexture,Ke),fn.setOptional(G,X,"batchingColorTexture"),X._colorsTexture!==null&&fn.setValue(G,"batchingColorTexture",X._colorsTexture,Ke));const Ps=Z.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0)&&Ge.update(X,Z,Si),(Kn||je.receiveShadow!==X.receiveShadow)&&(je.receiveShadow=X.receiveShadow,fn.setValue(G,"receiveShadow",X.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Qi.envMap.value=He,Qi.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&$.environment!==null&&(Qi.envMapIntensity.value=$.environmentIntensity),Kn&&(fn.setValue(G,"toneMappingExposure",w.toneMappingExposure),je.needsLights&&$f(Qi,Gr),Me&&ee.fog===!0&&Q.refreshFogUniforms(Qi,Me),Q.refreshMaterialUniforms(Qi,ee,pe,ue,x.state.transmissionRenderTarget[L.id]),cu.upload(G,ql(je),Qi,Ke)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(cu.upload(G,ql(je),Qi,Ke),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&fn.setValue(G,"center",X.center),fn.setValue(G,"modelViewMatrix",X.modelViewMatrix),fn.setValue(G,"normalMatrix",X.normalMatrix),fn.setValue(G,"modelMatrix",X.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Gn=ee.uniformsGroups;for(let Wr=0,Kl=Gn.length;Wr<Kl;Wr++){const Ql=Gn[Wr];gt.update(Ql,Si),gt.bind(Ql,Si)}}return Si}function $f(L,$){L.ambientLightColor.needsUpdate=$,L.lightProbe.needsUpdate=$,L.directionalLights.needsUpdate=$,L.directionalLightShadows.needsUpdate=$,L.pointLights.needsUpdate=$,L.pointLightShadows.needsUpdate=$,L.spotLights.needsUpdate=$,L.spotLightShadows.needsUpdate=$,L.rectAreaLights.needsUpdate=$,L.hemisphereLights.needsUpdate=$}function Yl(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return d},this.setRenderTargetTextures=function(L,$,Z){ot.get(L.texture).__webglTexture=$,ot.get(L.depthTexture).__webglTexture=Z;const ee=ot.get(L);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=Z===void 0,ee.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,$){const Z=ot.get(L);Z.__webglFramebuffer=$,Z.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(L,$=0,Z=0){d=L,O=$,N=Z;let ee=!0,X=null,Me=!1,ke=!1;if(L){const He=ot.get(L);He.__useDefaultFramebuffer!==void 0?(Ye.bindFramebuffer(G.FRAMEBUFFER,null),ee=!1):He.__webglFramebuffer===void 0?Ke.setupRenderTarget(L):He.__hasExternalTextures&&Ke.rebindTextures(L,ot.get(L.texture).__webglTexture,ot.get(L.depthTexture).__webglTexture);const Qe=L.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(ke=!0);const Ze=ot.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ze[$])?X=Ze[$][Z]:X=Ze[$],Me=!0):L.samples>0&&Ke.useMultisampledRTT(L)===!1?X=ot.get(L).__webglMultisampledFramebuffer:Array.isArray(Ze)?X=Ze[Z]:X=Ze,R.copy(L.viewport),H.copy(L.scissor),oe=L.scissorTest}else R.copy(ve).multiplyScalar(pe).floor(),H.copy(Ce).multiplyScalar(pe).floor(),oe=We;if(Ye.bindFramebuffer(G.FRAMEBUFFER,X)&&ee&&Ye.drawBuffers(L,X),Ye.viewport(R),Ye.scissor(H),Ye.setScissorTest(oe),Me){const He=ot.get(L.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+$,He.__webglTexture,Z)}else if(ke){const He=ot.get(L.texture),Qe=$||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,He.__webglTexture,Z||0,Qe)}z=-1},this.readRenderTargetPixels=function(L,$,Z,ee,X,Me,ke){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=ot.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ke!==void 0&&(Be=Be[ke]),Be){Ye.bindFramebuffer(G.FRAMEBUFFER,Be);try{const He=L.texture,Qe=He.format,Ze=He.type;if(!Gt.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=L.width-ee&&Z>=0&&Z<=L.height-X&&G.readPixels($,Z,ee,X,Re.convert(Qe),Re.convert(Ze),Me)}finally{const He=d!==null?ot.get(d).__webglFramebuffer:null;Ye.bindFramebuffer(G.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(L,$,Z,ee,X,Me,ke){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=ot.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ke!==void 0&&(Be=Be[ke]),Be){Ye.bindFramebuffer(G.FRAMEBUFFER,Be);try{const He=L.texture,Qe=He.format,Ze=He.type;if(!Gt.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=L.width-ee&&Z>=0&&Z<=L.height-X){const Xe=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Xe),G.bufferData(G.PIXEL_PACK_BUFFER,Me.byteLength,G.STREAM_READ),G.readPixels($,Z,ee,X,Re.convert(Qe),Re.convert(Ze),0),G.flush();const Ct=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);await xC(G,Ct,4);try{G.bindBuffer(G.PIXEL_PACK_BUFFER,Xe),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Me)}finally{G.deleteBuffer(Xe),G.deleteSync(Ct)}return Me}}finally{const He=d!==null?ot.get(d).__webglFramebuffer:null;Ye.bindFramebuffer(G.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(L,$=null,Z=0){L.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,L=arguments[1]);const ee=Math.pow(2,-Z),X=Math.floor(L.image.width*ee),Me=Math.floor(L.image.height*ee),ke=$!==null?$.x:0,Be=$!==null?$.y:0;Ke.setTexture2D(L,0),G.copyTexSubImage2D(G.TEXTURE_2D,Z,0,0,ke,Be,X,Me),Ye.unbindTexture()},this.copyTextureToTexture=function(L,$,Z=null,ee=null,X=0){L.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,L=arguments[1],$=arguments[2],X=arguments[3]||0,Z=null);let Me,ke,Be,He,Qe,Ze;Z!==null?(Me=Z.max.x-Z.min.x,ke=Z.max.y-Z.min.y,Be=Z.min.x,He=Z.min.y):(Me=L.image.width,ke=L.image.height,Be=0,He=0),ee!==null?(Qe=ee.x,Ze=ee.y):(Qe=0,Ze=0);const Xe=Re.convert($.format),Ct=Re.convert($.type);Ke.setTexture2D($,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,$.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,$.unpackAlignment);const Qt=G.getParameter(G.UNPACK_ROW_LENGTH),jt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Vn=G.getParameter(G.UNPACK_SKIP_PIXELS),Dt=G.getParameter(G.UNPACK_SKIP_ROWS),je=G.getParameter(G.UNPACK_SKIP_IMAGES),En=L.isCompressedTexture?L.mipmaps[X]:L.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,En.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,En.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Be),G.pixelStorei(G.UNPACK_SKIP_ROWS,He),L.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,X,Qe,Ze,Me,ke,Xe,Ct,En.data):L.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,X,Qe,Ze,En.width,En.height,Xe,En.data):G.texSubImage2D(G.TEXTURE_2D,X,Qe,Ze,Xe,Ct,En),G.pixelStorei(G.UNPACK_ROW_LENGTH,Qt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,jt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Vn),G.pixelStorei(G.UNPACK_SKIP_ROWS,Dt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,je),X===0&&$.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Ye.unbindTexture()},this.copyTextureToTexture3D=function(L,$,Z=null,ee=null,X=0){L.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,ee=arguments[1]||null,L=arguments[2],$=arguments[3],X=arguments[4]||0);let Me,ke,Be,He,Qe,Ze,Xe,Ct,Qt;const jt=L.isCompressedTexture?L.mipmaps[X]:L.image;Z!==null?(Me=Z.max.x-Z.min.x,ke=Z.max.y-Z.min.y,Be=Z.max.z-Z.min.z,He=Z.min.x,Qe=Z.min.y,Ze=Z.min.z):(Me=jt.width,ke=jt.height,Be=jt.depth,He=0,Qe=0,Ze=0),ee!==null?(Xe=ee.x,Ct=ee.y,Qt=ee.z):(Xe=0,Ct=0,Qt=0);const Vn=Re.convert($.format),Dt=Re.convert($.type);let je;if($.isData3DTexture)Ke.setTexture3D($,0),je=G.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)Ke.setTexture2DArray($,0),je=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,$.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,$.unpackAlignment);const En=G.getParameter(G.UNPACK_ROW_LENGTH),Lt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Si=G.getParameter(G.UNPACK_SKIP_PIXELS),mn=G.getParameter(G.UNPACK_SKIP_ROWS),Kn=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,jt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,jt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,He),G.pixelStorei(G.UNPACK_SKIP_ROWS,Qe),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ze),L.isDataTexture||L.isData3DTexture?G.texSubImage3D(je,X,Xe,Ct,Qt,Me,ke,Be,Vn,Dt,jt.data):$.isCompressedArrayTexture?G.compressedTexSubImage3D(je,X,Xe,Ct,Qt,Me,ke,Be,Vn,jt.data):G.texSubImage3D(je,X,Xe,Ct,Qt,Me,ke,Be,Vn,Dt,jt),G.pixelStorei(G.UNPACK_ROW_LENGTH,En),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Lt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Si),G.pixelStorei(G.UNPACK_SKIP_ROWS,mn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Kn),X===0&&$.generateMipmaps&&G.generateMipmap(je),Ye.unbindTexture()},this.initRenderTarget=function(L){ot.get(L).__webglFramebuffer===void 0&&Ke.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?Ke.setTextureCube(L,0):L.isData3DTexture?Ke.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Ke.setTexture2DArray(L,0):Ke.setTexture2D(L,0),Ye.unbindTexture()},this.resetState=function(){O=0,N=0,d=null,Ye.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Dm?"display-p3":"srgb",n.unpackColorSpace=Ft.workingColorSpace===_f?"display-p3":"srgb"}}class P3 extends pi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hr,this.environmentIntensity=1,this.environmentRotation=new Hr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lm);const L3=t=>{const e=new Ci(90,t.clientWidth/t.clientHeight,1,11e3);e.position.z=500;const n=new P3,i=new Ea(100,100,100),r=new Ja;for(let m=0;m<100;m++){let y=function(){const x=new zt(Math.random(),Math.random(),Math.random());return new Im({color:x})};const E=[y(),y(),y(),y(),y(),y()],S=new pr(i,E);S.position.x=Math.random()*2e3-1e3,S.position.y=Math.random()*2e3-1e3,S.position.z=Math.random()*2e3-1e3,S.rotation.x=Math.random()*2*Math.PI,S.rotation.y=Math.random()*2*Math.PI,S.matrixAutoUpdate=!1,S.updateMatrix(),r.add(S)}n.add(r);const s=new R3({canvas:t});s.setClearColor(0,0),s.setSize(t.clientWidth,t.clientHeight),document.addEventListener("mousemove",f,!1),window.addEventListener("resize",c,!1);let o=0,a=0;function c(){e.aspect=t.clientWidth/t.clientHeight,e.updateProjectionMatrix(),s.setSize(t.clientWidth,t.clientHeight)}function f(m){const y=t.clientWidth/2,E=t.clientHeight/2;o=(m.clientX-y)*10,a=(m.clientY-E)*10}function h(){requestAnimationFrame(h),p()}function p(){const m=Date.now()*.001,y=Math.sin(m*.7)*.5,E=Math.sin(m*.3)*.5,S=Math.sin(m*.2)*.5;e.position.x+=(o-e.position.x)*.05,e.position.y+=(-a-e.position.y)*.05,e.lookAt(n.position),r.rotation.x=y,r.rotation.y=E,r.rotation.z=S,s.render(n,e)}return h(),{onWindowResize:c,animate:h}};(function(t){function e(f){return/In/.test(f)||t.inArray(f,t.fn.textillate.defaults.inEffects)>=0}function n(f){return/Out/.test(f)||t.inArray(f,t.fn.textillate.defaults.outEffects)>=0}function i(f){return f!=="true"&&f!=="false"?f:f==="true"}function r(f){var h=f.attributes||[],p={};return h.length&&t.each(h,function(m,y){var E=y.nodeName.replace(/delayscale/,"delayScale");/^data-in-*/.test(E)?(p.in=p.in||{},p.in[E.replace(/data-in-/,"")]=i(y.nodeValue)):/^data-out-*/.test(E)?(p.out=p.out||{},p.out[E.replace(/data-out-/,"")]=i(y.nodeValue)):/^data-*/.test(E)&&(p[E.replace(/data-/,"")]=i(y.nodeValue))}),p}function s(f){for(var h,p,m=f.length;m;h=parseInt(Math.random()*m),p=f[--m],f[m]=f[h],f[h]=p);return f}function o(f,h,p){f.addClass("animated "+h).css("visibility","visible").show(),f.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){f.removeClass("animated "+h),p&&p()})}function a(f,h,p){var m=f.length;if(!m){p&&p();return}h.shuffle&&(f=s(f)),h.reverse&&(f=f.toArray().reverse()),t.each(f,function(y,E){var S=t(E);function x(){e(h.effect)?S.css("visibility","visible"):n(h.effect)&&S.css("visibility","hidden"),m-=1,!m&&p&&p()}var g=h.sync?h.delay:h.delay*y*h.delayScale;S.text()?setTimeout(function(){o(S,h.effect,x)},g):x()})}var c=function(f,h){var p=this,m=t(f);p.init=function(){p.$texts=m.find(h.selector),p.$texts.length||(p.$texts=t('<ul class="texts"><li>'+m.html()+"</li></ul>"),m.html(p.$texts)),p.$texts.hide(),p.$current=t("<span>").html(p.$texts.find(":first-child").html()).prependTo(m),e(h.in.effect)?p.$current.css("visibility","hidden"):n(h.out.effect)&&p.$current.css("visibility","visible"),p.setOptions(h),p.timeoutRun=null,setTimeout(function(){p.options.autoStart&&p.start()},p.options.initialDelay)},p.setOptions=function(y){p.options=y},p.triggerEvent=function(y){var E=t.Event(y+".tlt");return m.trigger(E,p),E},p.in=function(y,E){y=y||0;var S=p.$texts.find(":nth-child("+((y||0)+1)+")"),x=t.extend(!0,{},p.options,S.length?r(S[0]):{}),g;S.addClass("current"),p.triggerEvent("inAnimationBegin"),m.attr("data-active",S.data("id")),p.$current.html(S.html()).lettering("words"),p.options.type=="char"&&p.$current.find('[class^="word"]').css({display:"inline-block","-webkit-transform":"translate3d(0,0,0)","-moz-transform":"translate3d(0,0,0)","-o-transform":"translate3d(0,0,0)",transform:"translate3d(0,0,0)"}).each(function(){t(this).lettering()}),g=p.$current.find('[class^="'+p.options.type+'"]').css("display","inline-block"),e(x.in.effect)?g.css("visibility","hidden"):n(x.in.effect)&&g.css("visibility","visible"),p.currentIndex=y,a(g,x.in,function(){p.triggerEvent("inAnimationEnd"),x.in.callback&&x.in.callback(),E&&E(p)})},p.out=function(y){var E=p.$texts.find(":nth-child("+((p.currentIndex||0)+1)+")"),S=p.$current.find('[class^="'+p.options.type+'"]'),x=t.extend(!0,{},p.options,E.length?r(E[0]):{});p.triggerEvent("outAnimationBegin"),a(S,x.out,function(){E.removeClass("current"),p.triggerEvent("outAnimationEnd"),m.removeAttr("data-active"),x.out.callback&&x.out.callback(),y&&y(p)})},p.start=function(y){setTimeout(function(){p.triggerEvent("start"),function E(S){p.in(S,function(){var x=p.$texts.children().length;S+=1,!p.options.loop&&S>=x?(p.options.callback&&p.options.callback(),p.triggerEvent("end")):(S=S%x,p.timeoutRun=setTimeout(function(){p.out(function(){E(S)})},p.options.minDisplayTime))})}(y||0)},p.options.initialDelay)},p.stop=function(){p.timeoutRun&&(clearInterval(p.timeoutRun),p.timeoutRun=null)},p.init()};t.fn.textillate=function(f,h){return this.each(function(){var p=t(this),m=p.data("textillate"),y=t.extend(!0,{},t.fn.textillate.defaults,r(this),typeof f=="object"&&f);m?typeof f=="string"?m[f].apply(m,[].concat(h)):m.setOptions.call(m,y):p.data("textillate",m=new c(this,y))})},t.fn.textillate.defaults={selector:".texts",loop:!1,minDisplayTime:2e3,initialDelay:0,in:{effect:"fadeInLeftBig",delayScale:1.5,delay:50,sync:!1,reverse:!1,shuffle:!1,callback:function(){}},out:{effect:"hinge",delayScale:1.5,delay:50,sync:!1,reverse:!1,shuffle:!1,callback:function(){}},autoStart:!0,inEffects:[],outEffects:["hinge"],callback:function(){},type:"char"}})(kt);/*!
* Lettering.JS 0.7.0
*
* Copyright 2010, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Thanks to Paul Irish - http://paulirish.com - for the feedback.
*
* Date: Mon Sep 20 17:14:00 2010 -0600
*/(function(t){function e(i,r,s,o){var a=i.text(),c=a.split(r),f="";c.length&&(t(c).each(function(h,p){f+='<span class="'+s+(h+1)+'" aria-hidden="true">'+p+"</span>"+o}),i.attr("aria-label",a).empty().append(f))}var n={init:function(){return this.each(function(){e(t(this),"","char","")})},words:function(){return this.each(function(){e(t(this)," ","word"," ")})},lines:function(){return this.each(function(){var i="eefec303079ad17405c889e092e105b0";e(t(this).children("br").replaceWith(i).end(),i,"line","")})}};t.fn.lettering=function(i){return i&&n[i]?n[i].apply(this,[].slice.call(arguments,1)):i==="letters"||!i?n.init.apply(this,[].slice.call(arguments,0)):(t.error("Method "+i+" does not exist on jQuery.lettering"),this)}})(kt);const D3=()=>{kt("#about").textillate({in:{effect:"animate__animated animate__flash",delay:7,shuffle:!0}})},N3=()=>{const t=Li.useRef(null),[e,n]=Vl({triggerOnce:!0,threshold:.1});return Li.useEffect(()=>{if(n){const i=document.querySelector(".three");i.style.animationPlayState="running";const r=t.current,s=L3(r),o=()=>{r.style.width="100%",r.style.height="100%",s.onWindowResize()};o(),window.addEventListener("resize",o),D3()}},[n]),ne.jsxs("div",{className:"abt-container",ref:e,children:[ne.jsx("div",{className:"three",children:ne.jsx("canvas",{ref:t})}),ne.jsx("h1",{id:"about",children:"This website has been developed using the ReactJS framework and incorporates a range of supplementary technologies including a CSS preprocessor (SCSS) as well as several libraries such as Animate.css, jQuery, Lettering.js, Normalize.css, Particle.js, React Awesome Reveal, React Intersection Observer, React Scroll, Slick Carousel, Textillate.js, Three.js, and Typed.js."})]})},I3=[{id:"0",company:"Samsung Galaxy Firmware Reparation and Customization",date:"Aug 2020 - Jul 2022",role:"Freelance Technician",desc:"Repaired Samsung Galaxy Firmwares, whether old devices or new devices. Provided  Android Rooting, PDA/AP/CP flashing, and custom CSC (Consumer Software Customization/Country Specific Code)."},{id:"1",company:"PT Solusi Tiga Selaras",role:"Full Stack Laravel Developer",date:"Aug 2022 - Dec 2022",desc:"Designed and developed Solutif.co.id, Periksalab.id, and Partner.periksalab.id as part of the Account Squad. Additionally, I designed and managed database structures for these projects. But unfortunately, Periksalab and Partner Periksalab projects have been terminated."},{id:"2",company:"PT Sinar Indah Perkasa",role:"Staff Data Analyst for Vehicle Registration Certificates, Vehicle Periodical Inspections, Truck Unit Workshop, and Spare Parts",date:"Sept 2023 - Jan 2024",desc:"Developed an automated system using Visual Basic for Applications (VBA) within Microsoft Excel and Google Apps Script within Google Sheets. Additionally, I assisted the workshop administrator in creating the daily repair reports and supported the workshop supervisor in managing spare parts."},{id:"3",company:"PT Building Material Construction (BRICON)",role:"Odoo Developer",date:"Mar 2024 - Present",desc:"Designed, developed, and customized Human Resource Department modules using Odoo ERP."}];function k3(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function U3(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var O3=function(){function t(n){var i=this;this._insertTag=function(r){var s;i.tags.length===0?i.insertionPoint?s=i.insertionPoint.nextSibling:i.prepend?s=i.container.firstChild:s=i.before:s=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(r,s),i.tags.push(r)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(U3(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var s=k3(r);try{s.insertRule(i,s.cssRules.length)}catch{}}else r.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},t}(),zn="-ms-",ju="-moz-",Nt="-webkit-",wS="comm",Um="rule",Om="decl",F3="@import",TS="@keyframes",z3="@layer",B3=Math.abs,Ef=String.fromCharCode,H3=Object.assign;function V3(t,e){return Pn(t,0)^45?(((e<<2^Pn(t,0))<<2^Pn(t,1))<<2^Pn(t,2))<<2^Pn(t,3):0}function bS(t){return t.trim()}function G3(t,e){return(t=e.exec(t))?t[0]:t}function It(t,e,n){return t.replace(e,n)}function Tp(t,e){return t.indexOf(e)}function Pn(t,e){return t.charCodeAt(e)|0}function bl(t,e,n){return t.slice(e,n)}function cr(t){return t.length}function Fm(t){return t.length}function Yc(t,e){return e.push(t),t}function W3(t,e){return t.map(e).join("")}var Mf=1,ga=1,CS=0,ai=0,hn=0,wa="";function wf(t,e,n,i,r,s,o){return{value:t,root:e,parent:n,type:i,props:r,children:s,line:Mf,column:ga,length:o,return:""}}function $a(t,e){return H3(wf("",null,null,"",null,null,0),t,{length:-t.length},e)}function j3(){return hn}function $3(){return hn=ai>0?Pn(wa,--ai):0,ga--,hn===10&&(ga=1,Mf--),hn}function mi(){return hn=ai<CS?Pn(wa,ai++):0,ga++,hn===10&&(ga=1,Mf++),hn}function _r(){return Pn(wa,ai)}function uu(){return ai}function $l(t,e){return bl(wa,t,e)}function Cl(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function AS(t){return Mf=ga=1,CS=cr(wa=t),ai=0,[]}function RS(t){return wa="",t}function fu(t){return bS($l(ai-1,bp(t===91?t+2:t===40?t+1:t)))}function X3(t){for(;(hn=_r())&&hn<33;)mi();return Cl(t)>2||Cl(hn)>3?"":" "}function q3(t,e){for(;--e&&mi()&&!(hn<48||hn>102||hn>57&&hn<65||hn>70&&hn<97););return $l(t,uu()+(e<6&&_r()==32&&mi()==32))}function bp(t){for(;mi();)switch(hn){case t:return ai;case 34:case 39:t!==34&&t!==39&&bp(hn);break;case 40:t===41&&bp(t);break;case 92:mi();break}return ai}function Y3(t,e){for(;mi()&&t+hn!==57;)if(t+hn===84&&_r()===47)break;return"/*"+$l(e,ai-1)+"*"+Ef(t===47?t:mi())}function K3(t){for(;!Cl(_r());)mi();return $l(t,ai)}function Q3(t){return RS(du("",null,null,null,[""],t=AS(t),0,[0],t))}function du(t,e,n,i,r,s,o,a,c){for(var f=0,h=0,p=o,m=0,y=0,E=0,S=1,x=1,g=1,M=0,w="",A=r,O=s,N=i,d=w;x;)switch(E=M,M=mi()){case 40:if(E!=108&&Pn(d,p-1)==58){Tp(d+=It(fu(M),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:d+=fu(M);break;case 9:case 10:case 13:case 32:d+=X3(E);break;case 92:d+=q3(uu()-1,7);continue;case 47:switch(_r()){case 42:case 47:Yc(Z3(Y3(mi(),uu()),e,n),c);break;default:d+="/"}break;case 123*S:a[f++]=cr(d)*g;case 125*S:case 59:case 0:switch(M){case 0:case 125:x=0;case 59+h:g==-1&&(d=It(d,/\f/g,"")),y>0&&cr(d)-p&&Yc(y>32?o_(d+";",i,n,p-1):o_(It(d," ","")+";",i,n,p-2),c);break;case 59:d+=";";default:if(Yc(N=s_(d,e,n,f,h,r,a,w,A=[],O=[],p),s),M===123)if(h===0)du(d,e,N,N,A,s,p,a,O);else switch(m===99&&Pn(d,3)===110?100:m){case 100:case 108:case 109:case 115:du(t,N,N,i&&Yc(s_(t,N,N,0,0,r,a,w,r,A=[],p),O),r,O,p,a,i?A:O);break;default:du(d,N,N,N,[""],O,0,a,O)}}f=h=y=0,S=g=1,w=d="",p=o;break;case 58:p=1+cr(d),y=E;default:if(S<1){if(M==123)--S;else if(M==125&&S++==0&&$3()==125)continue}switch(d+=Ef(M),M*S){case 38:g=h>0?1:(d+="\f",-1);break;case 44:a[f++]=(cr(d)-1)*g,g=1;break;case 64:_r()===45&&(d+=fu(mi())),m=_r(),h=p=cr(w=d+=K3(uu())),M++;break;case 45:E===45&&cr(d)==2&&(S=0)}}return s}function s_(t,e,n,i,r,s,o,a,c,f,h){for(var p=r-1,m=r===0?s:[""],y=Fm(m),E=0,S=0,x=0;E<i;++E)for(var g=0,M=bl(t,p+1,p=B3(S=o[E])),w=t;g<y;++g)(w=bS(S>0?m[g]+" "+M:It(M,/&\f/g,m[g])))&&(c[x++]=w);return wf(t,e,n,r===0?Um:a,c,f,h)}function Z3(t,e,n){return wf(t,e,n,wS,Ef(j3()),bl(t,2,-2),0)}function o_(t,e,n,i){return wf(t,e,n,Om,bl(t,0,i),bl(t,i+1,-1),i)}function na(t,e){for(var n="",i=Fm(t),r=0;r<i;r++)n+=e(t[r],r,t,e)||"";return n}function J3(t,e,n,i){switch(t.type){case z3:if(t.children.length)break;case F3:case Om:return t.return=t.return||t.value;case wS:return"";case TS:return t.return=t.value+"{"+na(t.children,i)+"}";case Um:t.value=t.props.join(",")}return cr(n=na(t.children,i))?t.return=t.value+"{"+n+"}":""}function eL(t){var e=Fm(t);return function(n,i,r,s){for(var o="",a=0;a<e;a++)o+=t[a](n,i,r,s)||"";return o}}function tL(t){return function(e){e.root||(e=e.return)&&t(e)}}function nL(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var iL=function(e,n,i){for(var r=0,s=0;r=s,s=_r(),r===38&&s===12&&(n[i]=1),!Cl(s);)mi();return $l(e,ai)},rL=function(e,n){var i=-1,r=44;do switch(Cl(r)){case 0:r===38&&_r()===12&&(n[i]=1),e[i]+=iL(ai-1,n,i);break;case 2:e[i]+=fu(r);break;case 4:if(r===44){e[++i]=_r()===58?"&\f":"",n[i]=e[i].length;break}default:e[i]+=Ef(r)}while(r=mi());return e},sL=function(e,n){return RS(rL(AS(e),n))},a_=new WeakMap,oL=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,i=e.parent,r=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!a_.get(i))&&!r){a_.set(e,!0);for(var s=[],o=sL(n,s),a=i.props,c=0,f=0;c<o.length;c++)for(var h=0;h<a.length;h++,f++)e.props[f]=s[c]?o[c].replace(/&\f/g,a[h]):a[h]+" "+o[c]}}},aL=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function PS(t,e){switch(V3(t,e)){case 5103:return Nt+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Nt+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Nt+t+ju+t+zn+t+t;case 6828:case 4268:return Nt+t+zn+t+t;case 6165:return Nt+t+zn+"flex-"+t+t;case 5187:return Nt+t+It(t,/(\w+).+(:[^]+)/,Nt+"box-$1$2"+zn+"flex-$1$2")+t;case 5443:return Nt+t+zn+"flex-item-"+It(t,/flex-|-self/,"")+t;case 4675:return Nt+t+zn+"flex-line-pack"+It(t,/align-content|flex-|-self/,"")+t;case 5548:return Nt+t+zn+It(t,"shrink","negative")+t;case 5292:return Nt+t+zn+It(t,"basis","preferred-size")+t;case 6060:return Nt+"box-"+It(t,"-grow","")+Nt+t+zn+It(t,"grow","positive")+t;case 4554:return Nt+It(t,/([^-])(transform)/g,"$1"+Nt+"$2")+t;case 6187:return It(It(It(t,/(zoom-|grab)/,Nt+"$1"),/(image-set)/,Nt+"$1"),t,"")+t;case 5495:case 3959:return It(t,/(image-set\([^]*)/,Nt+"$1$`$1");case 4968:return It(It(t,/(.+:)(flex-)?(.*)/,Nt+"box-pack:$3"+zn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Nt+t+t;case 4095:case 3583:case 4068:case 2532:return It(t,/(.+)-inline(.+)/,Nt+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(cr(t)-1-e>6)switch(Pn(t,e+1)){case 109:if(Pn(t,e+4)!==45)break;case 102:return It(t,/(.+:)(.+)-([^]+)/,"$1"+Nt+"$2-$3$1"+ju+(Pn(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Tp(t,"stretch")?PS(It(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Pn(t,e+1)!==115)break;case 6444:switch(Pn(t,cr(t)-3-(~Tp(t,"!important")&&10))){case 107:return It(t,":",":"+Nt)+t;case 101:return It(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Nt+(Pn(t,14)===45?"inline-":"")+"box$3$1"+Nt+"$2$3$1"+zn+"$2box$3")+t}break;case 5936:switch(Pn(t,e+11)){case 114:return Nt+t+zn+It(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Nt+t+zn+It(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Nt+t+zn+It(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return Nt+t+zn+t+t}return t}var lL=function(e,n,i,r){if(e.length>-1&&!e.return)switch(e.type){case Om:e.return=PS(e.value,e.length);break;case TS:return na([$a(e,{value:It(e.value,"@","@"+Nt)})],r);case Um:if(e.length)return W3(e.props,function(s){switch(G3(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return na([$a(e,{props:[It(s,/:(read-\w+)/,":"+ju+"$1")]})],r);case"::placeholder":return na([$a(e,{props:[It(s,/:(plac\w+)/,":"+Nt+"input-$1")]}),$a(e,{props:[It(s,/:(plac\w+)/,":"+ju+"$1")]}),$a(e,{props:[It(s,/:(plac\w+)/,zn+"input-$1")]})],r)}return""})}},cL=[lL],uL=function(e){var n=e.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(S){var x=S.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(S),S.setAttribute("data-s",""))})}var r=e.stylisPlugins||cL,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(S){for(var x=S.getAttribute("data-emotion").split(" "),g=1;g<x.length;g++)s[x[g]]=!0;a.push(S)});var c,f=[oL,aL];{var h,p=[J3,tL(function(S){h.insert(S)})],m=eL(f.concat(r,p)),y=function(x){return na(Q3(x),m)};c=function(x,g,M,w){h=M,y(x?x+"{"+g.styles+"}":g.styles),w&&(E.inserted[g.name]=!0)}}var E={key:n,sheet:new O3({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:c};return E.sheet.hydrate(a),E},LS={exports:{}},Ht={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cn=typeof Symbol=="function"&&Symbol.for,zm=Cn?Symbol.for("react.element"):60103,Bm=Cn?Symbol.for("react.portal"):60106,Tf=Cn?Symbol.for("react.fragment"):60107,bf=Cn?Symbol.for("react.strict_mode"):60108,Cf=Cn?Symbol.for("react.profiler"):60114,Af=Cn?Symbol.for("react.provider"):60109,Rf=Cn?Symbol.for("react.context"):60110,Hm=Cn?Symbol.for("react.async_mode"):60111,Pf=Cn?Symbol.for("react.concurrent_mode"):60111,Lf=Cn?Symbol.for("react.forward_ref"):60112,Df=Cn?Symbol.for("react.suspense"):60113,fL=Cn?Symbol.for("react.suspense_list"):60120,Nf=Cn?Symbol.for("react.memo"):60115,If=Cn?Symbol.for("react.lazy"):60116,dL=Cn?Symbol.for("react.block"):60121,hL=Cn?Symbol.for("react.fundamental"):60117,pL=Cn?Symbol.for("react.responder"):60118,mL=Cn?Symbol.for("react.scope"):60119;function yi(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case zm:switch(t=t.type,t){case Hm:case Pf:case Tf:case Cf:case bf:case Df:return t;default:switch(t=t&&t.$$typeof,t){case Rf:case Lf:case If:case Nf:case Af:return t;default:return e}}case Bm:return e}}}function DS(t){return yi(t)===Pf}Ht.AsyncMode=Hm;Ht.ConcurrentMode=Pf;Ht.ContextConsumer=Rf;Ht.ContextProvider=Af;Ht.Element=zm;Ht.ForwardRef=Lf;Ht.Fragment=Tf;Ht.Lazy=If;Ht.Memo=Nf;Ht.Portal=Bm;Ht.Profiler=Cf;Ht.StrictMode=bf;Ht.Suspense=Df;Ht.isAsyncMode=function(t){return DS(t)||yi(t)===Hm};Ht.isConcurrentMode=DS;Ht.isContextConsumer=function(t){return yi(t)===Rf};Ht.isContextProvider=function(t){return yi(t)===Af};Ht.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===zm};Ht.isForwardRef=function(t){return yi(t)===Lf};Ht.isFragment=function(t){return yi(t)===Tf};Ht.isLazy=function(t){return yi(t)===If};Ht.isMemo=function(t){return yi(t)===Nf};Ht.isPortal=function(t){return yi(t)===Bm};Ht.isProfiler=function(t){return yi(t)===Cf};Ht.isStrictMode=function(t){return yi(t)===bf};Ht.isSuspense=function(t){return yi(t)===Df};Ht.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Tf||t===Pf||t===Cf||t===bf||t===Df||t===fL||typeof t=="object"&&t!==null&&(t.$$typeof===If||t.$$typeof===Nf||t.$$typeof===Af||t.$$typeof===Rf||t.$$typeof===Lf||t.$$typeof===hL||t.$$typeof===pL||t.$$typeof===mL||t.$$typeof===dL)};Ht.typeOf=yi;LS.exports=Ht;var gL=LS.exports,NS=gL,vL={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_L={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},IS={};IS[NS.ForwardRef]=vL;IS[NS.Memo]=_L;var yL=!0;function kS(t,e,n){var i="";return n.split(" ").forEach(function(r){t[r]!==void 0?e.push(t[r]+";"):i+=r+" "}),i}var Vm=function(e,n,i){var r=e.key+"-"+n.name;(i===!1||yL===!1)&&e.registered[r]===void 0&&(e.registered[r]=n.styles)},US=function(e,n,i){Vm(e,n,i);var r=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+r:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function xL(t){for(var e=0,n,i=0,r=t.length;r>=4;++i,r-=4)n=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(r){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var SL={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},EL=/[A-Z]|^ms/g,ML=/_EMO_([^_]+?)_([^]*?)_EMO_/g,OS=function(e){return e.charCodeAt(1)===45},l_=function(e){return e!=null&&typeof e!="boolean"},vh=nL(function(t){return OS(t)?t:t.replace(EL,"-$&").toLowerCase()}),c_=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(ML,function(i,r,s){return ur={name:r,styles:s,next:ur},r})}return SL[e]!==1&&!OS(e)&&typeof n=="number"&&n!==0?n+"px":n};function Al(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return ur={name:n.name,styles:n.styles,next:ur},n.name;if(n.styles!==void 0){var i=n.next;if(i!==void 0)for(;i!==void 0;)ur={name:i.name,styles:i.styles,next:ur},i=i.next;var r=n.styles+";";return r}return wL(t,e,n)}case"function":{if(t!==void 0){var s=ur,o=n(t);return ur=s,Al(t,e,o)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function wL(t,e,n){var i="";if(Array.isArray(n))for(var r=0;r<n.length;r++)i+=Al(t,e,n[r])+";";else for(var s in n){var o=n[s];if(typeof o!="object")e!=null&&e[o]!==void 0?i+=s+"{"+e[o]+"}":l_(o)&&(i+=vh(s)+":"+c_(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var a=0;a<o.length;a++)l_(o[a])&&(i+=vh(s)+":"+c_(s,o[a])+";");else{var c=Al(t,e,o);switch(s){case"animation":case"animationName":{i+=vh(s)+":"+c+";";break}default:i+=s+"{"+c+"}"}}}return i}var u_=/label:\s*([^\s;\n{]+)\s*(;|$)/g,ur,Gm=function(e,n,i){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,s="";ur=void 0;var o=e[0];o==null||o.raw===void 0?(r=!1,s+=Al(i,n,o)):s+=o[0];for(var a=1;a<e.length;a++)s+=Al(i,n,e[a]),r&&(s+=o[a]);u_.lastIndex=0;for(var c="",f;(f=u_.exec(s))!==null;)c+="-"+f[1];var h=xL(s)+c;return{name:h,styles:s,next:ur}},TL=function(e){return e()},bL=cg.useInsertionEffect?cg.useInsertionEffect:!1,FS=bL||TL,Wm={}.hasOwnProperty,zS=Tt.createContext(typeof HTMLElement<"u"?uL({key:"css"}):null);zS.Provider;var BS=function(e){return Tt.forwardRef(function(n,i){var r=Tt.useContext(zS);return e(n,r,i)})},HS=Tt.createContext({}),Cp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",CL=function(e,n){var i={};for(var r in n)Wm.call(n,r)&&(i[r]=n[r]);return i[Cp]=e,i},AL=function(e){var n=e.cache,i=e.serialized,r=e.isStringTag;return Vm(n,i,r),FS(function(){return US(n,i,r)}),null},RL=BS(function(t,e,n){var i=t.css;typeof i=="string"&&e.registered[i]!==void 0&&(i=e.registered[i]);var r=t[Cp],s=[i],o="";typeof t.className=="string"?o=kS(e.registered,s,t.className):t.className!=null&&(o=t.className+" ");var a=Gm(s,void 0,Tt.useContext(HS));o+=e.key+"-"+a.name;var c={};for(var f in t)Wm.call(t,f)&&f!=="css"&&f!==Cp&&(c[f]=t[f]);return c.ref=n,c.className=o,Tt.createElement(Tt.Fragment,null,Tt.createElement(AL,{cache:e,serialized:a,isStringTag:typeof r=="string"}),Tt.createElement(r,c))}),PL=RL,LL=ne.Fragment;function wn(t,e,n){return Wm.call(e,"css")?ne.jsx(PL,CL(t,e),n):ne.jsx(t,e,n)}function VS(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Gm(e)}var Te=function(){var e=VS.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},DL=function t(e){for(var n=e.length,i=0,r="";i<n;i++){var s=e[i];if(s!=null){var o=void 0;switch(typeof s){case"boolean":break;case"object":{if(Array.isArray(s))o=t(s);else{o="";for(var a in s)s[a]&&a&&(o&&(o+=" "),o+=a)}break}default:o=s}o&&(r&&(r+=" "),r+=o)}}return r};function NL(t,e,n){var i=[],r=kS(t,i,n);return i.length<2?n:r+e(i)}var IL=function(e){var n=e.cache,i=e.serializedArr;return FS(function(){for(var r=0;r<i.length;r++)US(n,i[r],!1)}),null},_h=BS(function(t,e){var n=!1,i=[],r=function(){for(var f=arguments.length,h=new Array(f),p=0;p<f;p++)h[p]=arguments[p];var m=Gm(h,e.registered);return i.push(m),Vm(e,m,!1),e.key+"-"+m.name},s=function(){for(var f=arguments.length,h=new Array(f),p=0;p<f;p++)h[p]=arguments[p];return NL(e.registered,r,DL(h))},o={css:r,cx:s,theme:Tt.useContext(HS)},a=t.children(o);return n=!0,Tt.createElement(Tt.Fragment,null,Tt.createElement(IL,{cache:e,serializedArr:i}),a)}),GS={exports:{}},Vt={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm=Symbol.for("react.element"),$m=Symbol.for("react.portal"),kf=Symbol.for("react.fragment"),Uf=Symbol.for("react.strict_mode"),Of=Symbol.for("react.profiler"),Ff=Symbol.for("react.provider"),zf=Symbol.for("react.context"),kL=Symbol.for("react.server_context"),Bf=Symbol.for("react.forward_ref"),Hf=Symbol.for("react.suspense"),Vf=Symbol.for("react.suspense_list"),Gf=Symbol.for("react.memo"),Wf=Symbol.for("react.lazy"),UL=Symbol.for("react.offscreen"),WS;WS=Symbol.for("react.module.reference");function Ii(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case jm:switch(t=t.type,t){case kf:case Of:case Uf:case Hf:case Vf:return t;default:switch(t=t&&t.$$typeof,t){case kL:case zf:case Bf:case Wf:case Gf:case Ff:return t;default:return e}}case $m:return e}}}Vt.ContextConsumer=zf;Vt.ContextProvider=Ff;Vt.Element=jm;Vt.ForwardRef=Bf;Vt.Fragment=kf;Vt.Lazy=Wf;Vt.Memo=Gf;Vt.Portal=$m;Vt.Profiler=Of;Vt.StrictMode=Uf;Vt.Suspense=Hf;Vt.SuspenseList=Vf;Vt.isAsyncMode=function(){return!1};Vt.isConcurrentMode=function(){return!1};Vt.isContextConsumer=function(t){return Ii(t)===zf};Vt.isContextProvider=function(t){return Ii(t)===Ff};Vt.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===jm};Vt.isForwardRef=function(t){return Ii(t)===Bf};Vt.isFragment=function(t){return Ii(t)===kf};Vt.isLazy=function(t){return Ii(t)===Wf};Vt.isMemo=function(t){return Ii(t)===Gf};Vt.isPortal=function(t){return Ii(t)===$m};Vt.isProfiler=function(t){return Ii(t)===Of};Vt.isStrictMode=function(t){return Ii(t)===Uf};Vt.isSuspense=function(t){return Ii(t)===Hf};Vt.isSuspenseList=function(t){return Ii(t)===Vf};Vt.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===kf||t===Of||t===Uf||t===Hf||t===Vf||t===UL||typeof t=="object"&&t!==null&&(t.$$typeof===Wf||t.$$typeof===Gf||t.$$typeof===Ff||t.$$typeof===zf||t.$$typeof===Bf||t.$$typeof===WS||t.getModuleId!==void 0)};Vt.typeOf=Ii;GS.exports=Vt;var OL=GS.exports;Te`
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
`;Te`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;Te`
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
`;Te`
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
`;Te`
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
`;Te`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;Te`
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
`;Te`
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
`;Te`
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
`;Te`
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
`;Te`
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
`;Te`
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
`;Te`
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
`;Te`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;Te`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Te`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Te`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Te`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;const jS=Te`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Te`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Te`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Te`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Te`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Te`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Te`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Te`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function FL({duration:t=1e3,delay:e=0,timingFunction:n="ease",keyframes:i=jS,iterationCount:r=1}){return VS`
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
  `}function zL(t){return t==null}function BL(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function $S(t,e){return n=>n?t():e()}function Rl(t){return $S(t,()=>null)}function Ap(t){return Rl(()=>({opacity:0}))(t)}const XS=t=>{const{cascade:e=!1,damping:n=.5,delay:i=0,duration:r=1e3,fraction:s=0,keyframes:o=jS,triggerOnce:a=!1,className:c,style:f,childClassName:h,childStyle:p,children:m,onVisibilityChange:y}=t,E=Tt.useMemo(()=>FL({keyframes:o,duration:r}),[r,o]);return zL(m)?null:BL(m)?wn(VL,{...t,animationStyles:E,children:String(m)}):OL.isFragment(m)?wn(qS,{...t,animationStyles:E}):wn(LL,{children:Tt.Children.map(m,(S,x)=>{if(!Tt.isValidElement(S))return null;const g=i+(e?x*r*n:0);switch(S.type){case"ol":case"ul":return wn(_h,{children:({cx:M})=>wn(S.type,{...S.props,className:M(c,S.props.className),style:Object.assign({},f,S.props.style),children:wn(XS,{...t,children:S.props.children})})});case"li":return wn(Fv,{threshold:s,triggerOnce:a,onChange:y,children:({inView:M,ref:w})=>wn(_h,{children:({cx:A})=>wn(S.type,{...S.props,ref:w,className:A(h,S.props.className),css:Rl(()=>E)(M),style:Object.assign({},p,S.props.style,Ap(!M),{animationDelay:g+"ms"})})})});default:return wn(Fv,{threshold:s,triggerOnce:a,onChange:y,children:({inView:M,ref:w})=>wn("div",{ref:w,className:c,css:Rl(()=>E)(M),style:Object.assign({},f,Ap(!M),{animationDelay:g+"ms"}),children:wn(_h,{children:({cx:A})=>wn(S.type,{...S.props,className:A(h,S.props.className),style:Object.assign({},p,S.props.style)})})})})}})})},HL={display:"inline-block",whiteSpace:"pre"},VL=t=>{const{animationStyles:e,cascade:n=!1,damping:i=.5,delay:r=0,duration:s=1e3,fraction:o=0,triggerOnce:a=!1,className:c,style:f,children:h,onVisibilityChange:p}=t,{ref:m,inView:y}=Vl({triggerOnce:a,threshold:o,onChange:p});return $S(()=>wn("div",{ref:m,className:c,style:Object.assign({},f,HL),children:h.split("").map((E,S)=>wn("span",{css:Rl(()=>e)(y),style:{animationDelay:r+S*s*i+"ms"},children:E},S))}),()=>wn(qS,{...t,children:h}))(n)},qS=t=>{const{animationStyles:e,fraction:n=0,triggerOnce:i=!1,className:r,style:s,children:o,onVisibilityChange:a}=t,{ref:c,inView:f}=Vl({triggerOnce:i,threshold:n,onChange:a});return wn("div",{ref:c,className:r,css:Rl(()=>e)(f),style:Object.assign({},s,Ap(!f)),children:o})};Te`
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
`;Te`
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
`;Te`
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
`;Te`
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
`;Te`
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
`;Te`
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
`;Te`
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
`;Te`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;Te`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;Te`
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
`;Te`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;Te`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`;Te`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`;Te`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;Te`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`;Te`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`;Te`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`;Te`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`;Te`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`;Te`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`;Te`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`;Te`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`;Te`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;Te`
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
`;Te`
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
`;Te`
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
`;Te`
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
`;Te`
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
`;Te`
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
`;Te`
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
`;Te`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Te`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;Te`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;Te`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;Te`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;Te`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;Te`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;Te`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;Te`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;Te`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;Te`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;Te`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;Te`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Te`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Te`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Te`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Te`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;Te`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;Te`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;Te`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;const GL=Te`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,WL=Te`
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
`,jL=Te`
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
`,$L=Te`
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
`,XL=Te`
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
`,qL=Te`
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
`,YL=Te`
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
`,KL=Te`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,QL=Te`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,ZL=Te`
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
`;function JL(t,e){switch(e){case"down":return t?YL:WL;case"left":return t?KL:jL;case"right":return t?QL:$L;case"up":return t?ZL:XL;default:return t?qL:GL}}const eD=t=>{const{direction:e,reverse:n=!1,...i}=t,r=Tt.useMemo(()=>JL(n,e),[e,n]);return wn(XS,{keyframes:r,...i})},tD=()=>{const[t,e]=Li.useState("100vh");return Li.useEffect(()=>{const n=()=>{window.innerWidth<=1e3||window.innerHeight<=900?e(`${document.querySelector(".experiences").clientHeight+250}px`):e("100vh")};n(),window.addEventListener("resize",n)},[]),ne.jsxs("div",{className:"exp-container",style:{height:t},children:[ne.jsx("h1",{children:"Experiences"}),ne.jsx("div",{className:"experiences",children:ne.jsx(eD,{direction:"down",triggerOnce:!0,cascade:!0,children:I3.map(n=>ne.jsx("li",{children:ne.jsxs("div",{className:"panel",children:[ne.jsxs("div",{className:"heading",children:[ne.jsx("h2",{children:n.company}),ne.jsx("p",{children:n.date})]}),ne.jsx("h4",{children:n.role}),ne.jsx("p",{children:n.desc})]})},n.id))})})]})},nD=[{id:"0",img:"yt.png",title:"YouTube Auto-updated Title",desc:"A YouTube video title that updates automatically each time the viewer count increases.",link:"https://youtu.be/g0DKKC1sXFM"},{id:"1",img:"medium.png",title:"Regression Analysis for Predicting Red Wine Quality using Python Programming Language",desc:"A Regression Analysis for predicting Red Wine Quality.",link:"https://medium.com/@virezee/regression-analysis-for-predicting-red-wine-quality-using-python-programming-language-26d1616955ed"},{id:"2",img:"snake.png",title:"3D Snake Game",desc:"The Xtended version of 2D Snake.",link:"https://github.com/VireZee/3D-Snake"},{id:"3",img:"solutif.png",title:"Full Stack Laravel Intership Project at Solutif (MSIB -MBKM)",desc:"Designed and developed Solutif.co.id, Periksalab.id, and Partner.periksalab.id.",link:"https://www.solutif.co.id"},{id:"4",img:"mhysth.png",title:"After Effects Project",desc:"Customized and designed After Effects template.",link:"https://youtu.be/vBxeeqHYdo8"},{id:"5",img:"aleph.png",title:"After Effects Project",desc:"Customized and designed After Effects template.",link:"https://youtu.be/1zcYf1uDra4"}];var iD={exports:{}};(function(t,e){(function(n){t.exports=n(bx)})(function(n){var i=window.Slick||{};i=function(){var r=0;function s(o,a){var c=this,f;c.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:n(o),appendDots:n(o),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(h,p){return n('<button type="button" />').text(p+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},c.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},n.extend(c,c.initials),c.activeBreakpoint=null,c.animType=null,c.animProp=null,c.breakpoints=[],c.breakpointSettings=[],c.cssTransitions=!1,c.focussed=!1,c.interrupted=!1,c.hidden="hidden",c.paused=!0,c.positionProp=null,c.respondTo=null,c.rowCount=1,c.shouldClick=!0,c.$slider=n(o),c.$slidesCache=null,c.transformType=null,c.transitionType=null,c.visibilityChange="visibilitychange",c.windowWidth=0,c.windowTimer=null,f=n(o).data("slick")||{},c.options=n.extend({},c.defaults,a,f),c.currentSlide=c.options.initialSlide,c.originalSettings=c.options,typeof document.mozHidden<"u"?(c.hidden="mozHidden",c.visibilityChange="mozvisibilitychange"):typeof document.webkitHidden<"u"&&(c.hidden="webkitHidden",c.visibilityChange="webkitvisibilitychange"),c.autoPlay=n.proxy(c.autoPlay,c),c.autoPlayClear=n.proxy(c.autoPlayClear,c),c.autoPlayIterator=n.proxy(c.autoPlayIterator,c),c.changeSlide=n.proxy(c.changeSlide,c),c.clickHandler=n.proxy(c.clickHandler,c),c.selectHandler=n.proxy(c.selectHandler,c),c.setPosition=n.proxy(c.setPosition,c),c.swipeHandler=n.proxy(c.swipeHandler,c),c.dragHandler=n.proxy(c.dragHandler,c),c.keyHandler=n.proxy(c.keyHandler,c),c.instanceUid=r++,c.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,c.registerBreakpoints(),c.init(!0)}return s}(),i.prototype.activateADA=function(){var r=this;r.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},i.prototype.addSlide=i.prototype.slickAdd=function(r,s,o){var a=this;if(typeof s=="boolean")o=s,s=null;else if(s<0||s>=a.slideCount)return!1;a.unload(),typeof s=="number"?s===0&&a.$slides.length===0?n(r).appendTo(a.$slideTrack):o?n(r).insertBefore(a.$slides.eq(s)):n(r).insertAfter(a.$slides.eq(s)):o===!0?n(r).prependTo(a.$slideTrack):n(r).appendTo(a.$slideTrack),a.$slides=a.$slideTrack.children(this.options.slide),a.$slideTrack.children(this.options.slide).detach(),a.$slideTrack.append(a.$slides),a.$slides.each(function(c,f){n(f).attr("data-slick-index",c)}),a.$slidesCache=a.$slides,a.reinit()},i.prototype.animateHeight=function(){var r=this;if(r.options.slidesToShow===1&&r.options.adaptiveHeight===!0&&r.options.vertical===!1){var s=r.$slides.eq(r.currentSlide).outerHeight(!0);r.$list.animate({height:s},r.options.speed)}},i.prototype.animateSlide=function(r,s){var o={},a=this;a.animateHeight(),a.options.rtl===!0&&a.options.vertical===!1&&(r=-r),a.transformsEnabled===!1?a.options.vertical===!1?a.$slideTrack.animate({left:r},a.options.speed,a.options.easing,s):a.$slideTrack.animate({top:r},a.options.speed,a.options.easing,s):a.cssTransitions===!1?(a.options.rtl===!0&&(a.currentLeft=-a.currentLeft),n({animStart:a.currentLeft}).animate({animStart:r},{duration:a.options.speed,easing:a.options.easing,step:function(c){c=Math.ceil(c),a.options.vertical===!1?(o[a.animType]="translate("+c+"px, 0px)",a.$slideTrack.css(o)):(o[a.animType]="translate(0px,"+c+"px)",a.$slideTrack.css(o))},complete:function(){s&&s.call()}})):(a.applyTransition(),r=Math.ceil(r),a.options.vertical===!1?o[a.animType]="translate3d("+r+"px, 0px, 0px)":o[a.animType]="translate3d(0px,"+r+"px, 0px)",a.$slideTrack.css(o),s&&setTimeout(function(){a.disableTransition(),s.call()},a.options.speed))},i.prototype.getNavTarget=function(){var r=this,s=r.options.asNavFor;return s&&s!==null&&(s=n(s).not(r.$slider)),s},i.prototype.asNavFor=function(r){var s=this,o=s.getNavTarget();o!==null&&typeof o=="object"&&o.each(function(){var a=n(this).slick("getSlick");a.unslicked||a.slideHandler(r,!0)})},i.prototype.applyTransition=function(r){var s=this,o={};s.options.fade===!1?o[s.transitionType]=s.transformType+" "+s.options.speed+"ms "+s.options.cssEase:o[s.transitionType]="opacity "+s.options.speed+"ms "+s.options.cssEase,s.options.fade===!1?s.$slideTrack.css(o):s.$slides.eq(r).css(o)},i.prototype.autoPlay=function(){var r=this;r.autoPlayClear(),r.slideCount>r.options.slidesToShow&&(r.autoPlayTimer=setInterval(r.autoPlayIterator,r.options.autoplaySpeed))},i.prototype.autoPlayClear=function(){var r=this;r.autoPlayTimer&&clearInterval(r.autoPlayTimer)},i.prototype.autoPlayIterator=function(){var r=this,s=r.currentSlide+r.options.slidesToScroll;!r.paused&&!r.interrupted&&!r.focussed&&(r.options.infinite===!1&&(r.direction===1&&r.currentSlide+1===r.slideCount-1?r.direction=0:r.direction===0&&(s=r.currentSlide-r.options.slidesToScroll,r.currentSlide-1===0&&(r.direction=1))),r.slideHandler(s))},i.prototype.buildArrows=function(){var r=this;r.options.arrows===!0&&(r.$prevArrow=n(r.options.prevArrow).addClass("slick-arrow"),r.$nextArrow=n(r.options.nextArrow).addClass("slick-arrow"),r.slideCount>r.options.slidesToShow?(r.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),r.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),r.htmlExpr.test(r.options.prevArrow)&&r.$prevArrow.prependTo(r.options.appendArrows),r.htmlExpr.test(r.options.nextArrow)&&r.$nextArrow.appendTo(r.options.appendArrows),r.options.infinite!==!0&&r.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):r.$prevArrow.add(r.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},i.prototype.buildDots=function(){var r=this,s,o;if(r.options.dots===!0&&r.slideCount>r.options.slidesToShow){for(r.$slider.addClass("slick-dotted"),o=n("<ul />").addClass(r.options.dotsClass),s=0;s<=r.getDotCount();s+=1)o.append(n("<li />").append(r.options.customPaging.call(this,r,s)));r.$dots=o.appendTo(r.options.appendDots),r.$dots.find("li").first().addClass("slick-active")}},i.prototype.buildOut=function(){var r=this;r.$slides=r.$slider.children(r.options.slide+":not(.slick-cloned)").addClass("slick-slide"),r.slideCount=r.$slides.length,r.$slides.each(function(s,o){n(o).attr("data-slick-index",s).data("originalStyling",n(o).attr("style")||"")}),r.$slider.addClass("slick-slider"),r.$slideTrack=r.slideCount===0?n('<div class="slick-track"/>').appendTo(r.$slider):r.$slides.wrapAll('<div class="slick-track"/>').parent(),r.$list=r.$slideTrack.wrap('<div class="slick-list"/>').parent(),r.$slideTrack.css("opacity",0),(r.options.centerMode===!0||r.options.swipeToSlide===!0)&&(r.options.slidesToScroll=1),n("img[data-lazy]",r.$slider).not("[src]").addClass("slick-loading"),r.setupInfinite(),r.buildArrows(),r.buildDots(),r.updateDots(),r.setSlideClasses(typeof r.currentSlide=="number"?r.currentSlide:0),r.options.draggable===!0&&r.$list.addClass("draggable")},i.prototype.buildRows=function(){var r=this,s,o,a,c,f,h,p;if(c=document.createDocumentFragment(),h=r.$slider.children(),r.options.rows>0){for(p=r.options.slidesPerRow*r.options.rows,f=Math.ceil(h.length/p),s=0;s<f;s++){var m=document.createElement("div");for(o=0;o<r.options.rows;o++){var y=document.createElement("div");for(a=0;a<r.options.slidesPerRow;a++){var E=s*p+(o*r.options.slidesPerRow+a);h.get(E)&&y.appendChild(h.get(E))}m.appendChild(y)}c.appendChild(m)}r.$slider.empty().append(c),r.$slider.children().children().children().css({width:100/r.options.slidesPerRow+"%",display:"inline-block"})}},i.prototype.checkResponsive=function(r,s){var o=this,a,c,f,h=!1,p=o.$slider.width(),m=window.innerWidth||n(window).width();if(o.respondTo==="window"?f=m:o.respondTo==="slider"?f=p:o.respondTo==="min"&&(f=Math.min(m,p)),o.options.responsive&&o.options.responsive.length&&o.options.responsive!==null){c=null;for(a in o.breakpoints)o.breakpoints.hasOwnProperty(a)&&(o.originalSettings.mobileFirst===!1?f<o.breakpoints[a]&&(c=o.breakpoints[a]):f>o.breakpoints[a]&&(c=o.breakpoints[a]));c!==null?o.activeBreakpoint!==null?(c!==o.activeBreakpoint||s)&&(o.activeBreakpoint=c,o.breakpointSettings[c]==="unslick"?o.unslick(c):(o.options=n.extend({},o.originalSettings,o.breakpointSettings[c]),r===!0&&(o.currentSlide=o.options.initialSlide),o.refresh(r)),h=c):(o.activeBreakpoint=c,o.breakpointSettings[c]==="unslick"?o.unslick(c):(o.options=n.extend({},o.originalSettings,o.breakpointSettings[c]),r===!0&&(o.currentSlide=o.options.initialSlide),o.refresh(r)),h=c):o.activeBreakpoint!==null&&(o.activeBreakpoint=null,o.options=o.originalSettings,r===!0&&(o.currentSlide=o.options.initialSlide),o.refresh(r),h=c),!r&&h!==!1&&o.$slider.trigger("breakpoint",[o,h])}},i.prototype.changeSlide=function(r,s){var o=this,a=n(r.currentTarget),c,f,h;switch(a.is("a")&&r.preventDefault(),a.is("li")||(a=a.closest("li")),h=o.slideCount%o.options.slidesToScroll!==0,c=h?0:(o.slideCount-o.currentSlide)%o.options.slidesToScroll,r.data.message){case"previous":f=c===0?o.options.slidesToScroll:o.options.slidesToShow-c,o.slideCount>o.options.slidesToShow&&o.slideHandler(o.currentSlide-f,!1,s);break;case"next":f=c===0?o.options.slidesToScroll:c,o.slideCount>o.options.slidesToShow&&o.slideHandler(o.currentSlide+f,!1,s);break;case"index":var p=r.data.index===0?0:r.data.index||a.index()*o.options.slidesToScroll;o.slideHandler(o.checkNavigable(p),!1,s),a.children().trigger("focus");break;default:return}},i.prototype.checkNavigable=function(r){var s=this,o,a;if(o=s.getNavigableIndexes(),a=0,r>o[o.length-1])r=o[o.length-1];else for(var c in o){if(r<o[c]){r=a;break}a=o[c]}return r},i.prototype.cleanUpEvents=function(){var r=this;r.options.dots&&r.$dots!==null&&(n("li",r.$dots).off("click.slick",r.changeSlide).off("mouseenter.slick",n.proxy(r.interrupt,r,!0)).off("mouseleave.slick",n.proxy(r.interrupt,r,!1)),r.options.accessibility===!0&&r.$dots.off("keydown.slick",r.keyHandler)),r.$slider.off("focus.slick blur.slick"),r.options.arrows===!0&&r.slideCount>r.options.slidesToShow&&(r.$prevArrow&&r.$prevArrow.off("click.slick",r.changeSlide),r.$nextArrow&&r.$nextArrow.off("click.slick",r.changeSlide),r.options.accessibility===!0&&(r.$prevArrow&&r.$prevArrow.off("keydown.slick",r.keyHandler),r.$nextArrow&&r.$nextArrow.off("keydown.slick",r.keyHandler))),r.$list.off("touchstart.slick mousedown.slick",r.swipeHandler),r.$list.off("touchmove.slick mousemove.slick",r.swipeHandler),r.$list.off("touchend.slick mouseup.slick",r.swipeHandler),r.$list.off("touchcancel.slick mouseleave.slick",r.swipeHandler),r.$list.off("click.slick",r.clickHandler),n(document).off(r.visibilityChange,r.visibility),r.cleanUpSlideEvents(),r.options.accessibility===!0&&r.$list.off("keydown.slick",r.keyHandler),r.options.focusOnSelect===!0&&n(r.$slideTrack).children().off("click.slick",r.selectHandler),n(window).off("orientationchange.slick.slick-"+r.instanceUid,r.orientationChange),n(window).off("resize.slick.slick-"+r.instanceUid,r.resize),n("[draggable!=true]",r.$slideTrack).off("dragstart",r.preventDefault),n(window).off("load.slick.slick-"+r.instanceUid,r.setPosition)},i.prototype.cleanUpSlideEvents=function(){var r=this;r.$list.off("mouseenter.slick",n.proxy(r.interrupt,r,!0)),r.$list.off("mouseleave.slick",n.proxy(r.interrupt,r,!1))},i.prototype.cleanUpRows=function(){var r=this,s;r.options.rows>0&&(s=r.$slides.children().children(),s.removeAttr("style"),r.$slider.empty().append(s))},i.prototype.clickHandler=function(r){var s=this;s.shouldClick===!1&&(r.stopImmediatePropagation(),r.stopPropagation(),r.preventDefault())},i.prototype.destroy=function(r){var s=this;s.autoPlayClear(),s.touchObject={},s.cleanUpEvents(),n(".slick-cloned",s.$slider).detach(),s.$dots&&s.$dots.remove(),s.$prevArrow&&s.$prevArrow.length&&(s.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),s.htmlExpr.test(s.options.prevArrow)&&s.$prevArrow.remove()),s.$nextArrow&&s.$nextArrow.length&&(s.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),s.htmlExpr.test(s.options.nextArrow)&&s.$nextArrow.remove()),s.$slides&&(s.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){n(this).attr("style",n(this).data("originalStyling"))}),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.detach(),s.$list.detach(),s.$slider.append(s.$slides)),s.cleanUpRows(),s.$slider.removeClass("slick-slider"),s.$slider.removeClass("slick-initialized"),s.$slider.removeClass("slick-dotted"),s.unslicked=!0,r||s.$slider.trigger("destroy",[s])},i.prototype.disableTransition=function(r){var s=this,o={};o[s.transitionType]="",s.options.fade===!1?s.$slideTrack.css(o):s.$slides.eq(r).css(o)},i.prototype.fadeSlide=function(r,s){var o=this;o.cssTransitions===!1?(o.$slides.eq(r).css({zIndex:o.options.zIndex}),o.$slides.eq(r).animate({opacity:1},o.options.speed,o.options.easing,s)):(o.applyTransition(r),o.$slides.eq(r).css({opacity:1,zIndex:o.options.zIndex}),s&&setTimeout(function(){o.disableTransition(r),s.call()},o.options.speed))},i.prototype.fadeSlideOut=function(r){var s=this;s.cssTransitions===!1?s.$slides.eq(r).animate({opacity:0,zIndex:s.options.zIndex-2},s.options.speed,s.options.easing):(s.applyTransition(r),s.$slides.eq(r).css({opacity:0,zIndex:s.options.zIndex-2}))},i.prototype.filterSlides=i.prototype.slickFilter=function(r){var s=this;r!==null&&(s.$slidesCache=s.$slides,s.unload(),s.$slideTrack.children(this.options.slide).detach(),s.$slidesCache.filter(r).appendTo(s.$slideTrack),s.reinit())},i.prototype.focusHandler=function(){var r=this;r.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(s){s.stopImmediatePropagation();var o=n(this);setTimeout(function(){r.options.pauseOnFocus&&(r.focussed=o.is(":focus"),r.autoPlay())},0)})},i.prototype.getCurrent=i.prototype.slickCurrentSlide=function(){var r=this;return r.currentSlide},i.prototype.getDotCount=function(){var r=this,s=0,o=0,a=0;if(r.options.infinite===!0)if(r.slideCount<=r.options.slidesToShow)++a;else for(;s<r.slideCount;)++a,s=o+r.options.slidesToScroll,o+=r.options.slidesToScroll<=r.options.slidesToShow?r.options.slidesToScroll:r.options.slidesToShow;else if(r.options.centerMode===!0)a=r.slideCount;else if(!r.options.asNavFor)a=1+Math.ceil((r.slideCount-r.options.slidesToShow)/r.options.slidesToScroll);else for(;s<r.slideCount;)++a,s=o+r.options.slidesToScroll,o+=r.options.slidesToScroll<=r.options.slidesToShow?r.options.slidesToScroll:r.options.slidesToShow;return a-1},i.prototype.getLeft=function(r){var s=this,o,a,c=0,f,h;return s.slideOffset=0,a=s.$slides.first().outerHeight(!0),s.options.infinite===!0?(s.slideCount>s.options.slidesToShow&&(s.slideOffset=s.slideWidth*s.options.slidesToShow*-1,h=-1,s.options.vertical===!0&&s.options.centerMode===!0&&(s.options.slidesToShow===2?h=-1.5:s.options.slidesToShow===1&&(h=-2)),c=a*s.options.slidesToShow*h),s.slideCount%s.options.slidesToScroll!==0&&r+s.options.slidesToScroll>s.slideCount&&s.slideCount>s.options.slidesToShow&&(r>s.slideCount?(s.slideOffset=(s.options.slidesToShow-(r-s.slideCount))*s.slideWidth*-1,c=(s.options.slidesToShow-(r-s.slideCount))*a*-1):(s.slideOffset=s.slideCount%s.options.slidesToScroll*s.slideWidth*-1,c=s.slideCount%s.options.slidesToScroll*a*-1))):r+s.options.slidesToShow>s.slideCount&&(s.slideOffset=(r+s.options.slidesToShow-s.slideCount)*s.slideWidth,c=(r+s.options.slidesToShow-s.slideCount)*a),s.slideCount<=s.options.slidesToShow&&(s.slideOffset=0,c=0),s.options.centerMode===!0&&s.slideCount<=s.options.slidesToShow?s.slideOffset=s.slideWidth*Math.floor(s.options.slidesToShow)/2-s.slideWidth*s.slideCount/2:s.options.centerMode===!0&&s.options.infinite===!0?s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)-s.slideWidth:s.options.centerMode===!0&&(s.slideOffset=0,s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)),s.options.vertical===!1?o=r*s.slideWidth*-1+s.slideOffset:o=r*a*-1+c,s.options.variableWidth===!0&&(s.slideCount<=s.options.slidesToShow||s.options.infinite===!1?f=s.$slideTrack.children(".slick-slide").eq(r):f=s.$slideTrack.children(".slick-slide").eq(r+s.options.slidesToShow),s.options.rtl===!0?f[0]?o=(s.$slideTrack.width()-f[0].offsetLeft-f.width())*-1:o=0:o=f[0]?f[0].offsetLeft*-1:0,s.options.centerMode===!0&&(s.slideCount<=s.options.slidesToShow||s.options.infinite===!1?f=s.$slideTrack.children(".slick-slide").eq(r):f=s.$slideTrack.children(".slick-slide").eq(r+s.options.slidesToShow+1),s.options.rtl===!0?f[0]?o=(s.$slideTrack.width()-f[0].offsetLeft-f.width())*-1:o=0:o=f[0]?f[0].offsetLeft*-1:0,o+=(s.$list.width()-f.outerWidth())/2)),o},i.prototype.getOption=i.prototype.slickGetOption=function(r){var s=this;return s.options[r]},i.prototype.getNavigableIndexes=function(){var r=this,s=0,o=0,a=[],c;for(r.options.infinite===!1?c=r.slideCount:(s=r.options.slidesToScroll*-1,o=r.options.slidesToScroll*-1,c=r.slideCount*2);s<c;)a.push(s),s=o+r.options.slidesToScroll,o+=r.options.slidesToScroll<=r.options.slidesToShow?r.options.slidesToScroll:r.options.slidesToShow;return a},i.prototype.getSlick=function(){return this},i.prototype.getSlideCount=function(){var r=this,s,o,a;return a=r.options.centerMode===!0?r.slideWidth*Math.floor(r.options.slidesToShow/2):0,r.options.swipeToSlide===!0?(r.$slideTrack.find(".slick-slide").each(function(c,f){if(f.offsetLeft-a+n(f).outerWidth()/2>r.swipeLeft*-1)return o=f,!1}),s=Math.abs(n(o).attr("data-slick-index")-r.currentSlide)||1,s):r.options.slidesToScroll},i.prototype.goTo=i.prototype.slickGoTo=function(r,s){var o=this;o.changeSlide({data:{message:"index",index:parseInt(r)}},s)},i.prototype.init=function(r){var s=this;n(s.$slider).hasClass("slick-initialized")||(n(s.$slider).addClass("slick-initialized"),s.buildRows(),s.buildOut(),s.setProps(),s.startLoad(),s.loadSlider(),s.initializeEvents(),s.updateArrows(),s.updateDots(),s.checkResponsive(!0),s.focusHandler()),r&&s.$slider.trigger("init",[s]),s.options.accessibility===!0&&s.initADA(),s.options.autoplay&&(s.paused=!1,s.autoPlay())},i.prototype.initADA=function(){var r=this,s=Math.ceil(r.slideCount/r.options.slidesToShow),o=r.getNavigableIndexes().filter(function(f){return f>=0&&f<r.slideCount});r.$slides.add(r.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),r.$dots!==null&&(r.$slides.not(r.$slideTrack.find(".slick-cloned")).each(function(f){var h=o.indexOf(f);if(n(this).attr({role:"tabpanel",id:"slick-slide"+r.instanceUid+f,tabindex:-1}),h!==-1){var p="slick-slide-control"+r.instanceUid+h;n("#"+p).length&&n(this).attr({"aria-describedby":p})}}),r.$dots.attr("role","tablist").find("li").each(function(f){var h=o[f];n(this).attr({role:"presentation"}),n(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+r.instanceUid+f,"aria-controls":"slick-slide"+r.instanceUid+h,"aria-label":f+1+" of "+s,"aria-selected":null,tabindex:"-1"})}).eq(r.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var a=r.currentSlide,c=a+r.options.slidesToShow;a<c;a++)r.options.focusOnChange?r.$slides.eq(a).attr({tabindex:"0"}):r.$slides.eq(a).removeAttr("tabindex");r.activateADA()},i.prototype.initArrowEvents=function(){var r=this;r.options.arrows===!0&&r.slideCount>r.options.slidesToShow&&(r.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},r.changeSlide),r.$nextArrow.off("click.slick").on("click.slick",{message:"next"},r.changeSlide),r.options.accessibility===!0&&(r.$prevArrow.on("keydown.slick",r.keyHandler),r.$nextArrow.on("keydown.slick",r.keyHandler)))},i.prototype.initDotEvents=function(){var r=this;r.options.dots===!0&&r.slideCount>r.options.slidesToShow&&(n("li",r.$dots).on("click.slick",{message:"index"},r.changeSlide),r.options.accessibility===!0&&r.$dots.on("keydown.slick",r.keyHandler)),r.options.dots===!0&&r.options.pauseOnDotsHover===!0&&r.slideCount>r.options.slidesToShow&&n("li",r.$dots).on("mouseenter.slick",n.proxy(r.interrupt,r,!0)).on("mouseleave.slick",n.proxy(r.interrupt,r,!1))},i.prototype.initSlideEvents=function(){var r=this;r.options.pauseOnHover&&(r.$list.on("mouseenter.slick",n.proxy(r.interrupt,r,!0)),r.$list.on("mouseleave.slick",n.proxy(r.interrupt,r,!1)))},i.prototype.initializeEvents=function(){var r=this;r.initArrowEvents(),r.initDotEvents(),r.initSlideEvents(),r.$list.on("touchstart.slick mousedown.slick",{action:"start"},r.swipeHandler),r.$list.on("touchmove.slick mousemove.slick",{action:"move"},r.swipeHandler),r.$list.on("touchend.slick mouseup.slick",{action:"end"},r.swipeHandler),r.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},r.swipeHandler),r.$list.on("click.slick",r.clickHandler),n(document).on(r.visibilityChange,n.proxy(r.visibility,r)),r.options.accessibility===!0&&r.$list.on("keydown.slick",r.keyHandler),r.options.focusOnSelect===!0&&n(r.$slideTrack).children().on("click.slick",r.selectHandler),n(window).on("orientationchange.slick.slick-"+r.instanceUid,n.proxy(r.orientationChange,r)),n(window).on("resize.slick.slick-"+r.instanceUid,n.proxy(r.resize,r)),n("[draggable!=true]",r.$slideTrack).on("dragstart",r.preventDefault),n(window).on("load.slick.slick-"+r.instanceUid,r.setPosition),n(r.setPosition)},i.prototype.initUI=function(){var r=this;r.options.arrows===!0&&r.slideCount>r.options.slidesToShow&&(r.$prevArrow.show(),r.$nextArrow.show()),r.options.dots===!0&&r.slideCount>r.options.slidesToShow&&r.$dots.show()},i.prototype.keyHandler=function(r){var s=this;r.target.tagName.match("TEXTAREA|INPUT|SELECT")||(r.keyCode===37&&s.options.accessibility===!0?s.changeSlide({data:{message:s.options.rtl===!0?"next":"previous"}}):r.keyCode===39&&s.options.accessibility===!0&&s.changeSlide({data:{message:s.options.rtl===!0?"previous":"next"}}))},i.prototype.lazyLoad=function(){var r=this,s,o,a,c;function f(E){n("img[data-lazy]",E).each(function(){var S=n(this),x=n(this).attr("data-lazy"),g=n(this).attr("data-srcset"),M=n(this).attr("data-sizes")||r.$slider.attr("data-sizes"),w=document.createElement("img");w.onload=function(){S.animate({opacity:0},100,function(){g&&(S.attr("srcset",g),M&&S.attr("sizes",M)),S.attr("src",x).animate({opacity:1},200,function(){S.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),r.$slider.trigger("lazyLoaded",[r,S,x])})},w.onerror=function(){S.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,S,x])},w.src=x})}if(r.options.centerMode===!0?r.options.infinite===!0?(a=r.currentSlide+(r.options.slidesToShow/2+1),c=a+r.options.slidesToShow+2):(a=Math.max(0,r.currentSlide-(r.options.slidesToShow/2+1)),c=2+(r.options.slidesToShow/2+1)+r.currentSlide):(a=r.options.infinite?r.options.slidesToShow+r.currentSlide:r.currentSlide,c=Math.ceil(a+r.options.slidesToShow),r.options.fade===!0&&(a>0&&a--,c<=r.slideCount&&c++)),s=r.$slider.find(".slick-slide").slice(a,c),r.options.lazyLoad==="anticipated")for(var h=a-1,p=c,m=r.$slider.find(".slick-slide"),y=0;y<r.options.slidesToScroll;y++)h<0&&(h=r.slideCount-1),s=s.add(m.eq(h)),s=s.add(m.eq(p)),h--,p++;f(s),r.slideCount<=r.options.slidesToShow?(o=r.$slider.find(".slick-slide"),f(o)):r.currentSlide>=r.slideCount-r.options.slidesToShow?(o=r.$slider.find(".slick-cloned").slice(0,r.options.slidesToShow),f(o)):r.currentSlide===0&&(o=r.$slider.find(".slick-cloned").slice(r.options.slidesToShow*-1),f(o))},i.prototype.loadSlider=function(){var r=this;r.setPosition(),r.$slideTrack.css({opacity:1}),r.$slider.removeClass("slick-loading"),r.initUI(),r.options.lazyLoad==="progressive"&&r.progressiveLazyLoad()},i.prototype.next=i.prototype.slickNext=function(){var r=this;r.changeSlide({data:{message:"next"}})},i.prototype.orientationChange=function(){var r=this;r.checkResponsive(),r.setPosition()},i.prototype.pause=i.prototype.slickPause=function(){var r=this;r.autoPlayClear(),r.paused=!0},i.prototype.play=i.prototype.slickPlay=function(){var r=this;r.autoPlay(),r.options.autoplay=!0,r.paused=!1,r.focussed=!1,r.interrupted=!1},i.prototype.postSlide=function(r){var s=this;if(!s.unslicked&&(s.$slider.trigger("afterChange",[s,r]),s.animating=!1,s.slideCount>s.options.slidesToShow&&s.setPosition(),s.swipeLeft=null,s.options.autoplay&&s.autoPlay(),s.options.accessibility===!0&&(s.initADA(),s.options.focusOnChange))){var o=n(s.$slides.get(s.currentSlide));o.attr("tabindex",0).focus()}},i.prototype.prev=i.prototype.slickPrev=function(){var r=this;r.changeSlide({data:{message:"previous"}})},i.prototype.preventDefault=function(r){r.preventDefault()},i.prototype.progressiveLazyLoad=function(r){r=r||1;var s=this,o=n("img[data-lazy]",s.$slider),a,c,f,h,p;o.length?(a=o.first(),c=a.attr("data-lazy"),f=a.attr("data-srcset"),h=a.attr("data-sizes")||s.$slider.attr("data-sizes"),p=document.createElement("img"),p.onload=function(){f&&(a.attr("srcset",f),h&&a.attr("sizes",h)),a.attr("src",c).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),s.options.adaptiveHeight===!0&&s.setPosition(),s.$slider.trigger("lazyLoaded",[s,a,c]),s.progressiveLazyLoad()},p.onerror=function(){r<3?setTimeout(function(){s.progressiveLazyLoad(r+1)},500):(a.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),s.$slider.trigger("lazyLoadError",[s,a,c]),s.progressiveLazyLoad())},p.src=c):s.$slider.trigger("allImagesLoaded",[s])},i.prototype.refresh=function(r){var s=this,o,a;a=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>a&&(s.currentSlide=a),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),o=s.currentSlide,s.destroy(!0),n.extend(s,s.initials,{currentSlide:o}),s.init(),r||s.changeSlide({data:{message:"index",index:o}},!1)},i.prototype.registerBreakpoints=function(){var r=this,s,o,a,c=r.options.responsive||null;if(n.type(c)==="array"&&c.length){r.respondTo=r.options.respondTo||"window";for(s in c)if(a=r.breakpoints.length-1,c.hasOwnProperty(s)){for(o=c[s].breakpoint;a>=0;)r.breakpoints[a]&&r.breakpoints[a]===o&&r.breakpoints.splice(a,1),a--;r.breakpoints.push(o),r.breakpointSettings[o]=c[s].settings}r.breakpoints.sort(function(f,h){return r.options.mobileFirst?f-h:h-f})}},i.prototype.reinit=function(){var r=this;r.$slides=r.$slideTrack.children(r.options.slide).addClass("slick-slide"),r.slideCount=r.$slides.length,r.currentSlide>=r.slideCount&&r.currentSlide!==0&&(r.currentSlide=r.currentSlide-r.options.slidesToScroll),r.slideCount<=r.options.slidesToShow&&(r.currentSlide=0),r.registerBreakpoints(),r.setProps(),r.setupInfinite(),r.buildArrows(),r.updateArrows(),r.initArrowEvents(),r.buildDots(),r.updateDots(),r.initDotEvents(),r.cleanUpSlideEvents(),r.initSlideEvents(),r.checkResponsive(!1,!0),r.options.focusOnSelect===!0&&n(r.$slideTrack).children().on("click.slick",r.selectHandler),r.setSlideClasses(typeof r.currentSlide=="number"?r.currentSlide:0),r.setPosition(),r.focusHandler(),r.paused=!r.options.autoplay,r.autoPlay(),r.$slider.trigger("reInit",[r])},i.prototype.resize=function(){var r=this;n(window).width()!==r.windowWidth&&(clearTimeout(r.windowDelay),r.windowDelay=window.setTimeout(function(){r.windowWidth=n(window).width(),r.checkResponsive(),r.unslicked||r.setPosition()},50))},i.prototype.removeSlide=i.prototype.slickRemove=function(r,s,o){var a=this;if(typeof r=="boolean"?(s=r,r=s===!0?0:a.slideCount-1):r=s===!0?--r:r,a.slideCount<1||r<0||r>a.slideCount-1)return!1;a.unload(),o===!0?a.$slideTrack.children().remove():a.$slideTrack.children(this.options.slide).eq(r).remove(),a.$slides=a.$slideTrack.children(this.options.slide),a.$slideTrack.children(this.options.slide).detach(),a.$slideTrack.append(a.$slides),a.$slidesCache=a.$slides,a.reinit()},i.prototype.setCSS=function(r){var s=this,o={},a,c;s.options.rtl===!0&&(r=-r),a=s.positionProp=="left"?Math.ceil(r)+"px":"0px",c=s.positionProp=="top"?Math.ceil(r)+"px":"0px",o[s.positionProp]=r,s.transformsEnabled===!1?s.$slideTrack.css(o):(o={},s.cssTransitions===!1?(o[s.animType]="translate("+a+", "+c+")",s.$slideTrack.css(o)):(o[s.animType]="translate3d("+a+", "+c+", 0px)",s.$slideTrack.css(o)))},i.prototype.setDimensions=function(){var r=this;r.options.vertical===!1?r.options.centerMode===!0&&r.$list.css({padding:"0px "+r.options.centerPadding}):(r.$list.height(r.$slides.first().outerHeight(!0)*r.options.slidesToShow),r.options.centerMode===!0&&r.$list.css({padding:r.options.centerPadding+" 0px"})),r.listWidth=r.$list.width(),r.listHeight=r.$list.height(),r.options.vertical===!1&&r.options.variableWidth===!1?(r.slideWidth=Math.ceil(r.listWidth/r.options.slidesToShow),r.$slideTrack.width(Math.ceil(r.slideWidth*r.$slideTrack.children(".slick-slide").length))):r.options.variableWidth===!0?r.$slideTrack.width(5e3*r.slideCount):(r.slideWidth=Math.ceil(r.listWidth),r.$slideTrack.height(Math.ceil(r.$slides.first().outerHeight(!0)*r.$slideTrack.children(".slick-slide").length)));var s=r.$slides.first().outerWidth(!0)-r.$slides.first().width();r.options.variableWidth===!1&&r.$slideTrack.children(".slick-slide").width(r.slideWidth-s)},i.prototype.setFade=function(){var r=this,s;r.$slides.each(function(o,a){s=r.slideWidth*o*-1,r.options.rtl===!0?n(a).css({position:"relative",right:s,top:0,zIndex:r.options.zIndex-2,opacity:0}):n(a).css({position:"relative",left:s,top:0,zIndex:r.options.zIndex-2,opacity:0})}),r.$slides.eq(r.currentSlide).css({zIndex:r.options.zIndex-1,opacity:1})},i.prototype.setHeight=function(){var r=this;if(r.options.slidesToShow===1&&r.options.adaptiveHeight===!0&&r.options.vertical===!1){var s=r.$slides.eq(r.currentSlide).outerHeight(!0);r.$list.css("height",s)}},i.prototype.setOption=i.prototype.slickSetOption=function(){var r=this,s,o,a,c,f=!1,h;if(n.type(arguments[0])==="object"?(a=arguments[0],f=arguments[1],h="multiple"):n.type(arguments[0])==="string"&&(a=arguments[0],c=arguments[1],f=arguments[2],arguments[0]==="responsive"&&n.type(arguments[1])==="array"?h="responsive":typeof arguments[1]<"u"&&(h="single")),h==="single")r.options[a]=c;else if(h==="multiple")n.each(a,function(p,m){r.options[p]=m});else if(h==="responsive")for(o in c)if(n.type(r.options.responsive)!=="array")r.options.responsive=[c[o]];else{for(s=r.options.responsive.length-1;s>=0;)r.options.responsive[s].breakpoint===c[o].breakpoint&&r.options.responsive.splice(s,1),s--;r.options.responsive.push(c[o])}f&&(r.unload(),r.reinit())},i.prototype.setPosition=function(){var r=this;r.setDimensions(),r.setHeight(),r.options.fade===!1?r.setCSS(r.getLeft(r.currentSlide)):r.setFade(),r.$slider.trigger("setPosition",[r])},i.prototype.setProps=function(){var r=this,s=document.body.style;r.positionProp=r.options.vertical===!0?"top":"left",r.positionProp==="top"?r.$slider.addClass("slick-vertical"):r.$slider.removeClass("slick-vertical"),(s.WebkitTransition!==void 0||s.MozTransition!==void 0||s.msTransition!==void 0)&&r.options.useCSS===!0&&(r.cssTransitions=!0),r.options.fade&&(typeof r.options.zIndex=="number"?r.options.zIndex<3&&(r.options.zIndex=3):r.options.zIndex=r.defaults.zIndex),s.OTransform!==void 0&&(r.animType="OTransform",r.transformType="-o-transform",r.transitionType="OTransition",s.perspectiveProperty===void 0&&s.webkitPerspective===void 0&&(r.animType=!1)),s.MozTransform!==void 0&&(r.animType="MozTransform",r.transformType="-moz-transform",r.transitionType="MozTransition",s.perspectiveProperty===void 0&&s.MozPerspective===void 0&&(r.animType=!1)),s.webkitTransform!==void 0&&(r.animType="webkitTransform",r.transformType="-webkit-transform",r.transitionType="webkitTransition",s.perspectiveProperty===void 0&&s.webkitPerspective===void 0&&(r.animType=!1)),s.msTransform!==void 0&&(r.animType="msTransform",r.transformType="-ms-transform",r.transitionType="msTransition",s.msTransform===void 0&&(r.animType=!1)),s.transform!==void 0&&r.animType!==!1&&(r.animType="transform",r.transformType="transform",r.transitionType="transition"),r.transformsEnabled=r.options.useTransform&&r.animType!==null&&r.animType!==!1},i.prototype.setSlideClasses=function(r){var s=this,o,a,c,f;if(a=s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),s.$slides.eq(r).addClass("slick-current"),s.options.centerMode===!0){var h=s.options.slidesToShow%2===0?1:0;o=Math.floor(s.options.slidesToShow/2),s.options.infinite===!0&&(r>=o&&r<=s.slideCount-1-o?s.$slides.slice(r-o+h,r+o+1).addClass("slick-active").attr("aria-hidden","false"):(c=s.options.slidesToShow+r,a.slice(c-o+1+h,c+o+2).addClass("slick-active").attr("aria-hidden","false")),r===0?a.eq(a.length-1-s.options.slidesToShow).addClass("slick-center"):r===s.slideCount-1&&a.eq(s.options.slidesToShow).addClass("slick-center")),s.$slides.eq(r).addClass("slick-center")}else r>=0&&r<=s.slideCount-s.options.slidesToShow?s.$slides.slice(r,r+s.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):a.length<=s.options.slidesToShow?a.addClass("slick-active").attr("aria-hidden","false"):(f=s.slideCount%s.options.slidesToShow,c=s.options.infinite===!0?s.options.slidesToShow+r:r,s.options.slidesToShow==s.options.slidesToScroll&&s.slideCount-r<s.options.slidesToShow?a.slice(c-(s.options.slidesToShow-f),c+f).addClass("slick-active").attr("aria-hidden","false"):a.slice(c,c+s.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));(s.options.lazyLoad==="ondemand"||s.options.lazyLoad==="anticipated")&&s.lazyLoad()},i.prototype.setupInfinite=function(){var r=this,s,o,a;if(r.options.fade===!0&&(r.options.centerMode=!1),r.options.infinite===!0&&r.options.fade===!1&&(o=null,r.slideCount>r.options.slidesToShow)){for(r.options.centerMode===!0?a=r.options.slidesToShow+1:a=r.options.slidesToShow,s=r.slideCount;s>r.slideCount-a;s-=1)o=s-1,n(r.$slides[o]).clone(!0).attr("id","").attr("data-slick-index",o-r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");for(s=0;s<a+r.slideCount;s+=1)o=s,n(r.$slides[o]).clone(!0).attr("id","").attr("data-slick-index",o+r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");r.$slideTrack.find(".slick-cloned").find("[id]").each(function(){n(this).attr("id","")})}},i.prototype.interrupt=function(r){var s=this;r||s.autoPlay(),s.interrupted=r},i.prototype.selectHandler=function(r){var s=this,o=n(r.target).is(".slick-slide")?n(r.target):n(r.target).parents(".slick-slide"),a=parseInt(o.attr("data-slick-index"));if(a||(a=0),s.slideCount<=s.options.slidesToShow){s.slideHandler(a,!1,!0);return}s.slideHandler(a)},i.prototype.slideHandler=function(r,s,o){var a,c,f,h,p=null,m=this,y;if(s=s||!1,!(m.animating===!0&&m.options.waitForAnimate===!0)&&!(m.options.fade===!0&&m.currentSlide===r)){if(s===!1&&m.asNavFor(r),a=r,p=m.getLeft(a),h=m.getLeft(m.currentSlide),m.currentLeft=m.swipeLeft===null?h:m.swipeLeft,m.options.infinite===!1&&m.options.centerMode===!1&&(r<0||r>m.getDotCount()*m.options.slidesToScroll)){m.options.fade===!1&&(a=m.currentSlide,o!==!0&&m.slideCount>m.options.slidesToShow?m.animateSlide(h,function(){m.postSlide(a)}):m.postSlide(a));return}else if(m.options.infinite===!1&&m.options.centerMode===!0&&(r<0||r>m.slideCount-m.options.slidesToScroll)){m.options.fade===!1&&(a=m.currentSlide,o!==!0&&m.slideCount>m.options.slidesToShow?m.animateSlide(h,function(){m.postSlide(a)}):m.postSlide(a));return}if(m.options.autoplay&&clearInterval(m.autoPlayTimer),a<0?m.slideCount%m.options.slidesToScroll!==0?c=m.slideCount-m.slideCount%m.options.slidesToScroll:c=m.slideCount+a:a>=m.slideCount?m.slideCount%m.options.slidesToScroll!==0?c=0:c=a-m.slideCount:c=a,m.animating=!0,m.$slider.trigger("beforeChange",[m,m.currentSlide,c]),f=m.currentSlide,m.currentSlide=c,m.setSlideClasses(m.currentSlide),m.options.asNavFor&&(y=m.getNavTarget(),y=y.slick("getSlick"),y.slideCount<=y.options.slidesToShow&&y.setSlideClasses(m.currentSlide)),m.updateDots(),m.updateArrows(),m.options.fade===!0){o!==!0?(m.fadeSlideOut(f),m.fadeSlide(c,function(){m.postSlide(c)})):m.postSlide(c),m.animateHeight();return}o!==!0&&m.slideCount>m.options.slidesToShow?m.animateSlide(p,function(){m.postSlide(c)}):m.postSlide(c)}},i.prototype.startLoad=function(){var r=this;r.options.arrows===!0&&r.slideCount>r.options.slidesToShow&&(r.$prevArrow.hide(),r.$nextArrow.hide()),r.options.dots===!0&&r.slideCount>r.options.slidesToShow&&r.$dots.hide(),r.$slider.addClass("slick-loading")},i.prototype.swipeDirection=function(){var r,s,o,a,c=this;return r=c.touchObject.startX-c.touchObject.curX,s=c.touchObject.startY-c.touchObject.curY,o=Math.atan2(s,r),a=Math.round(o*180/Math.PI),a<0&&(a=360-Math.abs(a)),a<=45&&a>=0||a<=360&&a>=315?c.options.rtl===!1?"left":"right":a>=135&&a<=225?c.options.rtl===!1?"right":"left":c.options.verticalSwiping===!0?a>=35&&a<=135?"down":"up":"vertical"},i.prototype.swipeEnd=function(r){var s=this,o,a;if(s.dragging=!1,s.swiping=!1,s.scrolling)return s.scrolling=!1,!1;if(s.interrupted=!1,s.shouldClick=!(s.touchObject.swipeLength>10),s.touchObject.curX===void 0)return!1;if(s.touchObject.edgeHit===!0&&s.$slider.trigger("edge",[s,s.swipeDirection()]),s.touchObject.swipeLength>=s.touchObject.minSwipe){switch(a=s.swipeDirection(),a){case"left":case"down":o=s.options.swipeToSlide?s.checkNavigable(s.currentSlide+s.getSlideCount()):s.currentSlide+s.getSlideCount(),s.currentDirection=0;break;case"right":case"up":o=s.options.swipeToSlide?s.checkNavigable(s.currentSlide-s.getSlideCount()):s.currentSlide-s.getSlideCount(),s.currentDirection=1;break}a!="vertical"&&(s.slideHandler(o),s.touchObject={},s.$slider.trigger("swipe",[s,a]))}else s.touchObject.startX!==s.touchObject.curX&&(s.slideHandler(s.currentSlide),s.touchObject={})},i.prototype.swipeHandler=function(r){var s=this;if(!(s.options.swipe===!1||"ontouchend"in document&&s.options.swipe===!1)&&!(s.options.draggable===!1&&r.type.indexOf("mouse")!==-1))switch(s.touchObject.fingerCount=r.originalEvent&&r.originalEvent.touches!==void 0?r.originalEvent.touches.length:1,s.touchObject.minSwipe=s.listWidth/s.options.touchThreshold,s.options.verticalSwiping===!0&&(s.touchObject.minSwipe=s.listHeight/s.options.touchThreshold),r.data.action){case"start":s.swipeStart(r);break;case"move":s.swipeMove(r);break;case"end":s.swipeEnd(r);break}},i.prototype.swipeMove=function(r){var s=this,o,a,c,f,h,p;if(h=r.originalEvent!==void 0?r.originalEvent.touches:null,!s.dragging||s.scrolling||h&&h.length!==1)return!1;if(o=s.getLeft(s.currentSlide),s.touchObject.curX=h!==void 0?h[0].pageX:r.clientX,s.touchObject.curY=h!==void 0?h[0].pageY:r.clientY,s.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(s.touchObject.curX-s.touchObject.startX,2))),p=Math.round(Math.sqrt(Math.pow(s.touchObject.curY-s.touchObject.startY,2))),!s.options.verticalSwiping&&!s.swiping&&p>4)return s.scrolling=!0,!1;if(s.options.verticalSwiping===!0&&(s.touchObject.swipeLength=p),a=s.swipeDirection(),r.originalEvent!==void 0&&s.touchObject.swipeLength>4&&(s.swiping=!0,r.preventDefault()),f=(s.options.rtl===!1?1:-1)*(s.touchObject.curX>s.touchObject.startX?1:-1),s.options.verticalSwiping===!0&&(f=s.touchObject.curY>s.touchObject.startY?1:-1),c=s.touchObject.swipeLength,s.touchObject.edgeHit=!1,s.options.infinite===!1&&(s.currentSlide===0&&a==="right"||s.currentSlide>=s.getDotCount()&&a==="left")&&(c=s.touchObject.swipeLength*s.options.edgeFriction,s.touchObject.edgeHit=!0),s.options.vertical===!1?s.swipeLeft=o+c*f:s.swipeLeft=o+c*(s.$list.height()/s.listWidth)*f,s.options.verticalSwiping===!0&&(s.swipeLeft=o+c*f),s.options.fade===!0||s.options.touchMove===!1)return!1;if(s.animating===!0)return s.swipeLeft=null,!1;s.setCSS(s.swipeLeft)},i.prototype.swipeStart=function(r){var s=this,o;if(s.interrupted=!0,s.touchObject.fingerCount!==1||s.slideCount<=s.options.slidesToShow)return s.touchObject={},!1;r.originalEvent!==void 0&&r.originalEvent.touches!==void 0&&(o=r.originalEvent.touches[0]),s.touchObject.startX=s.touchObject.curX=o!==void 0?o.pageX:r.clientX,s.touchObject.startY=s.touchObject.curY=o!==void 0?o.pageY:r.clientY,s.dragging=!0},i.prototype.unfilterSlides=i.prototype.slickUnfilter=function(){var r=this;r.$slidesCache!==null&&(r.unload(),r.$slideTrack.children(this.options.slide).detach(),r.$slidesCache.appendTo(r.$slideTrack),r.reinit())},i.prototype.unload=function(){var r=this;n(".slick-cloned",r.$slider).remove(),r.$dots&&r.$dots.remove(),r.$prevArrow&&r.htmlExpr.test(r.options.prevArrow)&&r.$prevArrow.remove(),r.$nextArrow&&r.htmlExpr.test(r.options.nextArrow)&&r.$nextArrow.remove(),r.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},i.prototype.unslick=function(r){var s=this;s.$slider.trigger("unslick",[s,r]),s.destroy()},i.prototype.updateArrows=function(){var r=this;Math.floor(r.options.slidesToShow/2),r.options.arrows===!0&&r.slideCount>r.options.slidesToShow&&!r.options.infinite&&(r.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),r.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),r.currentSlide===0?(r.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),r.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):(r.currentSlide>=r.slideCount-r.options.slidesToShow&&r.options.centerMode===!1||r.currentSlide>=r.slideCount-1&&r.options.centerMode===!0)&&(r.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),r.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},i.prototype.updateDots=function(){var r=this;r.$dots!==null&&(r.$dots.find("li").removeClass("slick-active").end(),r.$dots.find("li").eq(Math.floor(r.currentSlide/r.options.slidesToScroll)).addClass("slick-active"))},i.prototype.visibility=function(){var r=this;r.options.autoplay&&(document[r.hidden]?r.interrupted=!0:r.interrupted=!1)},n.fn.slick=function(){var r=this,s=arguments[0],o=Array.prototype.slice.call(arguments,1),a=r.length,c,f;for(c=0;c<a;c++)if(typeof s=="object"||typeof s>"u"?r[c].slick=new i(r[c],s):f=r[c].slick[s].apply(r[c].slick,o),typeof f<"u")return f;return r}})})(iD);const rD=()=>{kt("#projects").slick({infinite:!0,speed:500,autoplay:!0,autoplaySpeed:1500,fade:!0,cssEase:"linear"})},sD=()=>{const[t,e]=Li.useState("100vh"),n=i=>window.open(i,"_blank","noopener noreferrer");return Li.useEffect(()=>{const i=()=>e(`${document.getElementById("projects").clientHeight+250}px`);window.addEventListener("resize",i),rD()},[]),ne.jsxs("div",{className:"pro-container",style:{height:t},children:[ne.jsx("h1",{children:"Projects"}),ne.jsx("div",{id:"projects",children:nD.map(i=>ne.jsxs("li",{onClick:()=>n(i.link),children:[ne.jsx("img",{src:`images/${i.img}`,alt:i.title}),ne.jsxs("div",{className:"text",children:[ne.jsx("h2",{children:i.title}),ne.jsx("p",{children:i.desc})]})]},i.id))})]})};var YS=function(t,e){var n=document.querySelector("#"+t+" > .particles-js-canvas-el");this.pJS={canvas:{el:n,w:n.offsetWidth,h:n.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var i=this.pJS;e&&Object.deepExtend(i,e),i.tmp.obj={size_value:i.particles.size.value,size_anim_speed:i.particles.size.anim.speed,move_speed:i.particles.move.speed,line_linked_distance:i.particles.line_linked.distance,line_linked_width:i.particles.line_linked.width,mode_grab_distance:i.interactivity.modes.grab.distance,mode_bubble_distance:i.interactivity.modes.bubble.distance,mode_bubble_size:i.interactivity.modes.bubble.size,mode_repulse_distance:i.interactivity.modes.repulse.distance},i.fn.retinaInit=function(){i.retina_detect&&window.devicePixelRatio>1?(i.canvas.pxratio=window.devicePixelRatio,i.tmp.retina=!0):(i.canvas.pxratio=1,i.tmp.retina=!1),i.canvas.w=i.canvas.el.offsetWidth*i.canvas.pxratio,i.canvas.h=i.canvas.el.offsetHeight*i.canvas.pxratio,i.particles.size.value=i.tmp.obj.size_value*i.canvas.pxratio,i.particles.size.anim.speed=i.tmp.obj.size_anim_speed*i.canvas.pxratio,i.particles.move.speed=i.tmp.obj.move_speed*i.canvas.pxratio,i.particles.line_linked.distance=i.tmp.obj.line_linked_distance*i.canvas.pxratio,i.interactivity.modes.grab.distance=i.tmp.obj.mode_grab_distance*i.canvas.pxratio,i.interactivity.modes.bubble.distance=i.tmp.obj.mode_bubble_distance*i.canvas.pxratio,i.particles.line_linked.width=i.tmp.obj.line_linked_width*i.canvas.pxratio,i.interactivity.modes.bubble.size=i.tmp.obj.mode_bubble_size*i.canvas.pxratio,i.interactivity.modes.repulse.distance=i.tmp.obj.mode_repulse_distance*i.canvas.pxratio},i.fn.canvasInit=function(){i.canvas.ctx=i.canvas.el.getContext("2d")},i.fn.canvasSize=function(){i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i&&i.interactivity.events.resize&&window.addEventListener("resize",function(){i.canvas.w=i.canvas.el.offsetWidth,i.canvas.h=i.canvas.el.offsetHeight,i.tmp.retina&&(i.canvas.w*=i.canvas.pxratio,i.canvas.h*=i.canvas.pxratio),i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i.particles.move.enable||(i.fn.particlesEmpty(),i.fn.particlesCreate(),i.fn.particlesDraw(),i.fn.vendors.densityAutoParticles()),i.fn.vendors.densityAutoParticles()})},i.fn.canvasPaint=function(){i.canvas.ctx.fillRect(0,0,i.canvas.w,i.canvas.h)},i.fn.canvasClear=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h)},i.fn.particle=function(r,s,o){if(this.radius=(i.particles.size.random?Math.random():1)*i.particles.size.value,i.particles.size.anim.enable&&(this.size_status=!1,this.vs=i.particles.size.anim.speed/100,i.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=o?o.x:Math.random()*i.canvas.w,this.y=o?o.y:Math.random()*i.canvas.h,this.x>i.canvas.w-this.radius*2?this.x=this.x-this.radius:this.x<this.radius*2&&(this.x=this.x+this.radius),this.y>i.canvas.h-this.radius*2?this.y=this.y-this.radius:this.y<this.radius*2&&(this.y=this.y+this.radius),i.particles.move.bounce&&i.fn.vendors.checkOverlap(this,o),this.color={},typeof r.value=="object")if(r.value instanceof Array){var a=r.value[Math.floor(Math.random()*i.particles.color.value.length)];this.color.rgb=yh(a)}else r.value.r!=null&&r.value.g!=null&&r.value.b!=null&&(this.color.rgb={r:r.value.r,g:r.value.g,b:r.value.b}),r.value.h!=null&&r.value.s!=null&&r.value.l!=null&&(this.color.hsl={h:r.value.h,s:r.value.s,l:r.value.l});else r.value=="random"?this.color.rgb={r:Math.floor(Math.random()*256)+0,g:Math.floor(Math.random()*256)+0,b:Math.floor(Math.random()*256)+0}:typeof r.value=="string"&&(this.color=r,this.color.rgb=yh(this.color.value));this.opacity=(i.particles.opacity.random?Math.random():1)*i.particles.opacity.value,i.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=i.particles.opacity.anim.speed/100,i.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var c={};switch(i.particles.move.direction){case"top":c={x:0,y:-1};break;case"top-right":c={x:.5,y:-.5};break;case"right":c={x:1,y:-0};break;case"bottom-right":c={x:.5,y:.5};break;case"bottom":c={x:0,y:1};break;case"bottom-left":c={x:-.5,y:1};break;case"left":c={x:-1,y:0};break;case"top-left":c={x:-.5,y:-.5};break;default:c={x:0,y:0};break}i.particles.move.straight?(this.vx=c.x,this.vy=c.y,i.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=c.x+Math.random()-.5,this.vy=c.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var f=i.particles.shape.type;if(typeof f=="object"){if(f instanceof Array){var h=f[Math.floor(Math.random()*f.length)];this.shape=h}}else this.shape=f;if(this.shape=="image"){var p=i.particles.shape;this.img={src:p.image.src,ratio:p.image.width/p.image.height},this.img.ratio||(this.img.ratio=1),i.tmp.img_type=="svg"&&i.tmp.source_svg!=null&&(i.fn.vendors.createSvgImg(this),i.tmp.pushing&&(this.img.loaded=!1))}},i.fn.particle.prototype.draw=function(){var r=this;if(r.radius_bubble!=null)var s=r.radius_bubble;else var s=r.radius;if(r.opacity_bubble!=null)var o=r.opacity_bubble;else var o=r.opacity;if(r.color.rgb)var a="rgba("+r.color.rgb.r+","+r.color.rgb.g+","+r.color.rgb.b+","+o+")";else var a="hsla("+r.color.hsl.h+","+r.color.hsl.s+"%,"+r.color.hsl.l+"%,"+o+")";switch(i.canvas.ctx.fillStyle=a,i.canvas.ctx.beginPath(),r.shape){case"circle":i.canvas.ctx.arc(r.x,r.y,s,0,Math.PI*2,!1);break;case"edge":i.canvas.ctx.rect(r.x-s,r.y-s,s*2,s*2);break;case"triangle":i.fn.vendors.drawShape(i.canvas.ctx,r.x-s,r.y+s/1.66,s*2,3,2);break;case"polygon":i.fn.vendors.drawShape(i.canvas.ctx,r.x-s/(i.particles.shape.polygon.nb_sides/3.5),r.y-s/(2.66/3.5),s*2.66/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,1);break;case"star":i.fn.vendors.drawShape(i.canvas.ctx,r.x-s*2/(i.particles.shape.polygon.nb_sides/4),r.y-s/(2*2.66/3.5),s*2*2.66/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,2);break;case"image":let h=function(){i.canvas.ctx.drawImage(c,r.x-s,r.y-s,s*2,s*2/r.img.ratio)};var f=h;if(i.tmp.img_type=="svg")var c=r.img.obj;else var c=i.tmp.img_obj;c&&h();break}i.canvas.ctx.closePath(),i.particles.shape.stroke.width>0&&(i.canvas.ctx.strokeStyle=i.particles.shape.stroke.color,i.canvas.ctx.lineWidth=i.particles.shape.stroke.width,i.canvas.ctx.stroke()),i.canvas.ctx.fill()},i.fn.particlesCreate=function(){for(var r=0;r<i.particles.number.value;r++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value))},i.fn.particlesUpdate=function(){for(var r=0;r<i.particles.array.length;r++){var s=i.particles.array[r];if(i.particles.move.enable){var o=i.particles.move.speed/2;s.x+=s.vx*o,s.y+=s.vy*o}if(i.particles.opacity.anim.enable&&(s.opacity_status==!0?(s.opacity>=i.particles.opacity.value&&(s.opacity_status=!1),s.opacity+=s.vo):(s.opacity<=i.particles.opacity.anim.opacity_min&&(s.opacity_status=!0),s.opacity-=s.vo),s.opacity<0&&(s.opacity=0)),i.particles.size.anim.enable&&(s.size_status==!0?(s.radius>=i.particles.size.value&&(s.size_status=!1),s.radius+=s.vs):(s.radius<=i.particles.size.anim.size_min&&(s.size_status=!0),s.radius-=s.vs),s.radius<0&&(s.radius=0)),i.particles.move.out_mode=="bounce")var a={x_left:s.radius,x_right:i.canvas.w,y_top:s.radius,y_bottom:i.canvas.h};else var a={x_left:-s.radius,x_right:i.canvas.w+s.radius,y_top:-s.radius,y_bottom:i.canvas.h+s.radius};switch(s.x-s.radius>i.canvas.w?(s.x=a.x_left,s.y=Math.random()*i.canvas.h):s.x+s.radius<0&&(s.x=a.x_right,s.y=Math.random()*i.canvas.h),s.y-s.radius>i.canvas.h?(s.y=a.y_top,s.x=Math.random()*i.canvas.w):s.y+s.radius<0&&(s.y=a.y_bottom,s.x=Math.random()*i.canvas.w),i.particles.move.out_mode){case"bounce":(s.x+s.radius>i.canvas.w||s.x-s.radius<0)&&(s.vx=-s.vx),(s.y+s.radius>i.canvas.h||s.y-s.radius<0)&&(s.vy=-s.vy);break}if(rr("grab",i.interactivity.events.onhover.mode)&&i.fn.modes.grabParticle(s),(rr("bubble",i.interactivity.events.onhover.mode)||rr("bubble",i.interactivity.events.onclick.mode))&&i.fn.modes.bubbleParticle(s),(rr("repulse",i.interactivity.events.onhover.mode)||rr("repulse",i.interactivity.events.onclick.mode))&&i.fn.modes.repulseParticle(s),i.particles.line_linked.enable||i.particles.move.attract.enable)for(var c=r+1;c<i.particles.array.length;c++){var f=i.particles.array[c];i.particles.line_linked.enable&&i.fn.interact.linkParticles(s,f),i.particles.move.attract.enable&&i.fn.interact.attractParticles(s,f),i.particles.move.bounce&&i.fn.interact.bounceParticles(s,f)}}},i.fn.particlesDraw=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h),i.fn.particlesUpdate();for(var r=0;r<i.particles.array.length;r++){var s=i.particles.array[r];s.draw()}},i.fn.particlesEmpty=function(){i.particles.array=[]},i.fn.particlesRefresh=function(){cancelRequestAnimFrame(i.fn.checkAnimFrame),cancelRequestAnimFrame(i.fn.drawAnimFrame),i.tmp.source_svg=void 0,i.tmp.img_obj=void 0,i.tmp.count_svg=0,i.fn.particlesEmpty(),i.fn.canvasClear(),i.fn.vendors.start()},i.fn.interact.linkParticles=function(r,s){var o=r.x-s.x,a=r.y-s.y,c=Math.sqrt(o*o+a*a);if(c<=i.particles.line_linked.distance){var f=i.particles.line_linked.opacity-c/(1/i.particles.line_linked.opacity)/i.particles.line_linked.distance;if(f>0){var h=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+h.r+","+h.g+","+h.b+","+f+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(r.x,r.y),i.canvas.ctx.lineTo(s.x,s.y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}},i.fn.interact.attractParticles=function(r,s){var o=r.x-s.x,a=r.y-s.y,c=Math.sqrt(o*o+a*a);if(c<=i.particles.line_linked.distance){var f=o/(i.particles.move.attract.rotateX*1e3),h=a/(i.particles.move.attract.rotateY*1e3);r.vx-=f,r.vy-=h,s.vx+=f,s.vy+=h}},i.fn.interact.bounceParticles=function(r,s){var o=r.x-s.x,a=r.y-s.y,c=Math.sqrt(o*o+a*a),f=r.radius+s.radius;c<=f&&(r.vx=-r.vx,r.vy=-r.vy,s.vx=-s.vx,s.vy=-s.vy)},i.fn.modes.pushParticles=function(r,s){i.tmp.pushing=!0;for(var o=0;o<r;o++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value,{x:s?s.pos_x:Math.random()*i.canvas.w,y:s?s.pos_y:Math.random()*i.canvas.h})),o==r-1&&(i.particles.move.enable||i.fn.particlesDraw(),i.tmp.pushing=!1)},i.fn.modes.removeParticles=function(r){i.particles.array.splice(0,r),i.particles.move.enable||i.fn.particlesDraw()},i.fn.modes.bubbleParticle=function(r){if(i.interactivity.events.onhover.enable&&rr("bubble",i.interactivity.events.onhover.mode)){let S=function(){r.opacity_bubble=r.opacity,r.radius_bubble=r.radius};var y=S,s=r.x-i.interactivity.mouse.pos_x,o=r.y-i.interactivity.mouse.pos_y,a=Math.sqrt(s*s+o*o),c=1-a/i.interactivity.modes.bubble.distance;if(a<=i.interactivity.modes.bubble.distance){if(c>=0&&i.interactivity.status=="mousemove"){if(i.interactivity.modes.bubble.size!=i.particles.size.value)if(i.interactivity.modes.bubble.size>i.particles.size.value){var f=r.radius+i.interactivity.modes.bubble.size*c;f>=0&&(r.radius_bubble=f)}else{var h=r.radius-i.interactivity.modes.bubble.size,f=r.radius-h*c;f>0?r.radius_bubble=f:r.radius_bubble=0}if(i.interactivity.modes.bubble.opacity!=i.particles.opacity.value)if(i.interactivity.modes.bubble.opacity>i.particles.opacity.value){var p=i.interactivity.modes.bubble.opacity*c;p>r.opacity&&p<=i.interactivity.modes.bubble.opacity&&(r.opacity_bubble=p)}else{var p=r.opacity-(i.particles.opacity.value-i.interactivity.modes.bubble.opacity)*c;p<r.opacity&&p>=i.interactivity.modes.bubble.opacity&&(r.opacity_bubble=p)}}}else S();i.interactivity.status=="mouseleave"&&S()}else if(i.interactivity.events.onclick.enable&&rr("bubble",i.interactivity.events.onclick.mode)){let S=function(x,g,M,w,A){if(x!=g)if(i.tmp.bubble_duration_end){if(M!=null){var d=w-m*(w-x)/i.interactivity.modes.bubble.duration,z=x-d;N=x+z,A=="size"&&(r.radius_bubble=N),A=="opacity"&&(r.opacity_bubble=N)}}else if(a<=i.interactivity.modes.bubble.distance){if(M!=null)var O=M;else var O=w;if(O!=x){var N=w-m*(w-x)/i.interactivity.modes.bubble.duration;A=="size"&&(r.radius_bubble=N),A=="opacity"&&(r.opacity_bubble=N)}}else A=="size"&&(r.radius_bubble=void 0),A=="opacity"&&(r.opacity_bubble=void 0)};var E=S;if(i.tmp.bubble_clicking){var s=r.x-i.interactivity.mouse.click_pos_x,o=r.y-i.interactivity.mouse.click_pos_y,a=Math.sqrt(s*s+o*o),m=(new Date().getTime()-i.interactivity.mouse.click_time)/1e3;m>i.interactivity.modes.bubble.duration&&(i.tmp.bubble_duration_end=!0),m>i.interactivity.modes.bubble.duration*2&&(i.tmp.bubble_clicking=!1,i.tmp.bubble_duration_end=!1)}i.tmp.bubble_clicking&&(S(i.interactivity.modes.bubble.size,i.particles.size.value,r.radius_bubble,r.radius,"size"),S(i.interactivity.modes.bubble.opacity,i.particles.opacity.value,r.opacity_bubble,r.opacity,"opacity"))}},i.fn.modes.repulseParticle=function(r){if(i.interactivity.events.onhover.enable&&rr("repulse",i.interactivity.events.onhover.mode)&&i.interactivity.status=="mousemove"){var s=r.x-i.interactivity.mouse.pos_x,o=r.y-i.interactivity.mouse.pos_y,a=Math.sqrt(s*s+o*o),c={x:s/a,y:o/a},f=i.interactivity.modes.repulse.distance,h=100,p=oD(1/f*(-1*Math.pow(a/f,2)+1)*f*h,0,50),m={x:r.x+c.x*p,y:r.y+c.y*p};i.particles.move.out_mode=="bounce"?(m.x-r.radius>0&&m.x+r.radius<i.canvas.w&&(r.x=m.x),m.y-r.radius>0&&m.y+r.radius<i.canvas.h&&(r.y=m.y)):(r.x=m.x,r.y=m.y)}else if(i.interactivity.events.onclick.enable&&rr("repulse",i.interactivity.events.onclick.mode))if(i.tmp.repulse_finish||(i.tmp.repulse_count++,i.tmp.repulse_count==i.particles.array.length&&(i.tmp.repulse_finish=!0)),i.tmp.repulse_clicking){let w=function(){var A=Math.atan2(E,y);if(r.vx=x*Math.cos(A),r.vy=x*Math.sin(A),i.particles.move.out_mode=="bounce"){var O={x:r.x+r.vx,y:r.y+r.vy};(O.x+r.radius>i.canvas.w||O.x-r.radius<0)&&(r.vx=-r.vx),(O.y+r.radius>i.canvas.h||O.y-r.radius<0)&&(r.vy=-r.vy)}};var g=w,f=Math.pow(i.interactivity.modes.repulse.distance/6,3),y=i.interactivity.mouse.click_pos_x-r.x,E=i.interactivity.mouse.click_pos_y-r.y,S=y*y+E*E,x=-f/S*1;S<=f&&w()}else i.tmp.repulse_clicking==!1&&(r.vx=r.vx_i,r.vy=r.vy_i)},i.fn.modes.grabParticle=function(r){if(i.interactivity.events.onhover.enable&&i.interactivity.status=="mousemove"){var s=r.x-i.interactivity.mouse.pos_x,o=r.y-i.interactivity.mouse.pos_y,a=Math.sqrt(s*s+o*o);if(a<=i.interactivity.modes.grab.distance){var c=i.interactivity.modes.grab.line_linked.opacity-a/(1/i.interactivity.modes.grab.line_linked.opacity)/i.interactivity.modes.grab.distance;if(c>0){var f=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+f.r+","+f.g+","+f.b+","+c+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(r.x,r.y),i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x,i.interactivity.mouse.pos_y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}}},i.fn.vendors.eventsListeners=function(){i.interactivity.detect_on=="window"?i.interactivity.el=window:i.interactivity.el=i.canvas.el,(i.interactivity.events.onhover.enable||i.interactivity.events.onclick.enable)&&(i.interactivity.el.addEventListener("mousemove",function(r){if(i.interactivity.el==window)var s=r.clientX,o=r.clientY;else var s=r.offsetX||r.clientX,o=r.offsetY||r.clientY;i.interactivity.mouse.pos_x=s,i.interactivity.mouse.pos_y=o,i.tmp.retina&&(i.interactivity.mouse.pos_x*=i.canvas.pxratio,i.interactivity.mouse.pos_y*=i.canvas.pxratio),i.interactivity.status="mousemove"}),i.interactivity.el.addEventListener("mouseleave",function(r){i.interactivity.mouse.pos_x=null,i.interactivity.mouse.pos_y=null,i.interactivity.status="mouseleave"})),i.interactivity.events.onclick.enable&&i.interactivity.el.addEventListener("click",function(){if(i.interactivity.mouse.click_pos_x=i.interactivity.mouse.pos_x,i.interactivity.mouse.click_pos_y=i.interactivity.mouse.pos_y,i.interactivity.mouse.click_time=new Date().getTime(),i.interactivity.events.onclick.enable)switch(i.interactivity.events.onclick.mode){case"push":i.particles.move.enable||i.interactivity.modes.push.particles_nb==1?i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb,i.interactivity.mouse):i.interactivity.modes.push.particles_nb>1&&i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);break;case"remove":i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);break;case"bubble":i.tmp.bubble_clicking=!0;break;case"repulse":i.tmp.repulse_clicking=!0,i.tmp.repulse_count=0,i.tmp.repulse_finish=!1,setTimeout(function(){i.tmp.repulse_clicking=!1},i.interactivity.modes.repulse.duration*1e3);break}})},i.fn.vendors.densityAutoParticles=function(){if(i.particles.number.density.enable){var r=i.canvas.el.width*i.canvas.el.height/1e3;i.tmp.retina&&(r=r/(i.canvas.pxratio*2));var s=r*i.particles.number.value/i.particles.number.density.value_area,o=i.particles.array.length-s;o<0?i.fn.modes.pushParticles(Math.abs(o)):i.fn.modes.removeParticles(o)}},i.fn.vendors.checkOverlap=function(r,s){for(var o=0;o<i.particles.array.length;o++){var a=i.particles.array[o],c=r.x-a.x,f=r.y-a.y,h=Math.sqrt(c*c+f*f);h<=r.radius+a.radius&&(r.x=s?s.x:Math.random()*i.canvas.w,r.y=s?s.y:Math.random()*i.canvas.h,i.fn.vendors.checkOverlap(r))}},i.fn.vendors.createSvgImg=function(r){var s=i.tmp.source_svg,o=/#([0-9A-F]{3,6})/gi,a=s.replace(o,function(m,y,E,S){if(r.color.rgb)var x="rgba("+r.color.rgb.r+","+r.color.rgb.g+","+r.color.rgb.b+","+r.opacity+")";else var x="hsla("+r.color.hsl.h+","+r.color.hsl.s+"%,"+r.color.hsl.l+"%,"+r.opacity+")";return x}),c=new Blob([a],{type:"image/svg+xml;charset=utf-8"}),f=window.URL||window.webkitURL||window,h=f.createObjectURL(c),p=new Image;p.addEventListener("load",function(){r.img.obj=p,r.img.loaded=!0,f.revokeObjectURL(h),i.tmp.count_svg++}),p.src=h},i.fn.vendors.destroypJS=function(){cancelAnimationFrame(i.fn.drawAnimFrame),n.remove(),pJSDom=null},i.fn.vendors.drawShape=function(r,s,o,a,c,f){var h=c*f,p=c/f,m=180*(p-2)/p,y=Math.PI-Math.PI*m/180;r.save(),r.beginPath(),r.translate(s,o),r.moveTo(0,0);for(var E=0;E<h;E++)r.lineTo(a,0),r.translate(a,0),r.rotate(y);r.fill(),r.restore()},i.fn.vendors.exportImg=function(){window.open(i.canvas.el.toDataURL("image/png"),"_blank")},i.fn.vendors.loadImg=function(r){if(i.tmp.img_error=void 0,i.particles.shape.image.src!="")if(r=="svg"){var s=new XMLHttpRequest;s.open("GET",i.particles.shape.image.src),s.onreadystatechange=function(a){s.readyState==4&&(s.status==200?(i.tmp.source_svg=a.currentTarget.response,i.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),i.tmp.img_error=!0))},s.send()}else{var o=new Image;o.addEventListener("load",function(){i.tmp.img_obj=o,i.fn.vendors.checkBeforeDraw()}),o.src=i.particles.shape.image.src}else console.log("Error pJS - No image.src"),i.tmp.img_error=!0},i.fn.vendors.draw=function(){i.particles.shape.type=="image"?i.tmp.img_type=="svg"?i.tmp.count_svg>=i.particles.number.value?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):i.tmp.img_obj!=null?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame))},i.fn.vendors.checkBeforeDraw=function(){i.particles.shape.type=="image"?i.tmp.img_type=="svg"&&i.tmp.source_svg==null?i.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(i.tmp.checkAnimFrame),i.tmp.img_error||(i.fn.vendors.init(),i.fn.vendors.draw())):(i.fn.vendors.init(),i.fn.vendors.draw())},i.fn.vendors.init=function(){i.fn.retinaInit(),i.fn.canvasInit(),i.fn.canvasSize(),i.fn.canvasPaint(),i.fn.particlesCreate(),i.fn.vendors.densityAutoParticles(),i.particles.line_linked.color_rgb_line=yh(i.particles.line_linked.color)},i.fn.vendors.start=function(){rr("image",i.particles.shape.type)?(i.tmp.img_type=i.particles.shape.image.src.substr(i.particles.shape.image.src.length-3),i.fn.vendors.loadImg(i.tmp.img_type)):i.fn.vendors.checkBeforeDraw()},i.fn.vendors.eventsListeners(),i.fn.vendors.start()};Object.deepExtend=function(t,e){for(var n in e)e[n]&&e[n].constructor&&e[n].constructor===Object?(t[n]=t[n]||{},arguments.callee(t[n],e[n])):t[n]=e[n];return t};window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();window.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}();function yh(t){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t=t.replace(e,function(i,r,s,o){return r+r+s+s+o+o});var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null}function oD(t,e,n){return Math.min(Math.max(t,e),n)}function rr(t,e){return e.indexOf(t)>-1}window.pJSDom=[];window.particlesJS=function(t,e){typeof t!="string"&&(e=t,t="particles-js"),t||(t="particles-js");var n=document.getElementById(t),i="particles-js-canvas-el",r=n.getElementsByClassName(i);if(r.length)for(;r.length>0;)n.removeChild(r[0]);var s=document.createElement("canvas");s.className=i,s.style.width="100%",s.style.height="100%";var o=document.getElementById(t).appendChild(s);o!=null&&pJSDom.push(new YS(t,e))};window.particlesJS.load=function(t,e,n){var i=new XMLHttpRequest;i.open("GET",e),i.onreadystatechange=function(r){if(i.readyState==4)if(i.status==200){var s=JSON.parse(r.currentTarget.response);window.particlesJS(t,s),n&&n()}else console.log("Error pJS - XMLHttpRequest status: "+i.status),console.log("Error pJS - File config not found")},i.send()};window.pJS=YS;const aD=()=>{const[t,e]=Vl({triggerOnce:!0,threshold:.5});return Li.useEffect(()=>{},[e]),ne.jsxs("div",{className:"con-container",ref:t,children:[ne.jsx("div",{id:"particles-js"}),ne.jsxs("div",{className:"contact",children:[ne.jsx("h1",{children:"Get in Touch"}),ne.jsx("p",{children:"Feel free to contact me for any inquiries or collaboration opportunities. Just click on the button below, leave a message, and I'll try my best to respond back to you!"}),ne.jsx("button",{children:ne.jsx("span",{children:ne.jsx("a",{href:"mailto:viermarzo@gmail.com",children:"Hello"})})})]})]})},lD=()=>{const t=document.querySelector(".load-container"),e=document.querySelector("header"),n=document.querySelector("main");t.parentNode.removeChild(e),t.parentNode.removeChild(n),setTimeout(()=>{t.style.opacity="0",t.parentNode.appendChild(e),t.parentNode.appendChild(n),t.addEventListener("transitionend",()=>{t.parentNode.removeChild(t)})},3e3)},cD=()=>(Li.useEffect(()=>lD(),[]),ne.jsxs(ne.Fragment,{children:[ne.jsx(YM,{}),ne.jsx("header",{children:ne.jsx(tb,{})}),ne.jsxs("main",{children:[ne.jsx(db,{}),ne.jsx(N3,{}),ne.jsx(tD,{}),ne.jsx(sD,{}),ne.jsx(aD,{})]})]}));xh.createRoot(document.getElementById("root")).render(ne.jsx(cD,{}));
