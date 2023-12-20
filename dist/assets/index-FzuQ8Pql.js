(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Al(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Se={},Lr=[],Gt=()=>{},s_=()=>!1,Jo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),El=t=>t.startsWith("onUpdate:"),Be=Object.assign,vl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},i_=Object.prototype.hasOwnProperty,ce=(t,e)=>i_.call(t,e),Q=Array.isArray,Ur=t=>gi(t)==="[object Map]",Yo=t=>gi(t)==="[object Set]",sh=t=>gi(t)==="[object Date]",Z=t=>typeof t=="function",Ne=t=>typeof t=="string",jn=t=>typeof t=="symbol",Ie=t=>t!==null&&typeof t=="object",bf=t=>(Ie(t)||Z(t))&&Z(t.then)&&Z(t.catch),kf=Object.prototype.toString,gi=t=>kf.call(t),o_=t=>gi(t).slice(8,-1),Df=t=>gi(t)==="[object Object]",Il=t=>Ne(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ro=Al(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},a_=/-(\w)/g,$t=Xo(t=>t.replace(a_,(e,n)=>n?n.toUpperCase():"")),c_=/\B([A-Z])/g,os=Xo(t=>t.replace(c_,"-$1").toLowerCase()),Zo=Xo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ka=Xo(t=>t?`on${Zo(t)}`:""),mr=(t,e)=>!Object.is(t,e),so=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},_o=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ao=t=>{const e=parseFloat(t);return isNaN(e)?t:e},l_=t=>{const e=Ne(t)?Number(t):NaN;return isNaN(e)?t:e};let ih;const Ic=()=>ih||(ih=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $o(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ne(r)?f_(r):$o(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ne(t)||Ie(t))return t}const u_=/;(?![^(]*\))/g,h_=/:([^]+)/,d_=/\/\*[^]*?\*\//g;function f_(t){const e={};return t.replace(d_,"").split(u_).forEach(n=>{if(n){const r=n.split(h_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Tl(t){let e="";if(Ne(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const r=Tl(t[n]);r&&(e+=r+" ")}else if(Ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const p_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",g_=Al(p_);function Nf(t){return!!t||t===""}function m_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ea(t[r],e[r]);return n}function ea(t,e){if(t===e)return!0;let n=sh(t),r=sh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=jn(t),r=jn(e),n||r)return t===e;if(n=Q(t),r=Q(e),n||r)return n&&r?m_(t,e):!1;if(n=Ie(t),r=Ie(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!ea(t[o],e[o]))return!1}}return String(t)===String(e)}function y_(t,e){return t.findIndex(n=>ea(n,e))}const As=t=>Ne(t)?t:t==null?"":Q(t)||Ie(t)&&(t.toString===kf||!Z(t.toString))?JSON.stringify(t,Vf,2):String(t),Vf=(t,e)=>e&&e.__v_isRef?Vf(t,e.value):Ur(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Wa(r,i)+" =>"]=s,n),{})}:Yo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Wa(n))}:jn(e)?Wa(e):Ie(e)&&!Q(e)&&!Df(e)?String(e):e,Wa=(t,e="")=>{var n;return jn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Ct;class Of{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}}on(){Ct=this}off(){Ct=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function __(t){return new Of(t)}function A_(t,e=Ct){e&&e.active&&e.effects.push(t)}function E_(){return Ct}const wl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Mf=t=>(t.w&qn)>0,xf=t=>(t.n&qn)>0,v_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=qn},I_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Mf(s)&&!xf(s)?s.delete(t):e[n++]=s,s.w&=~qn,s.n&=~qn}e.length=n}},Tc=new WeakMap;let Rs=0,qn=1;const wc=30;let bt;const dr=Symbol(""),Rc=Symbol("");class Rl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,A_(this,r)}run(){if(!this.active)return this.fn();let e=bt,n=Mn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=bt,bt=this,Mn=!0,qn=1<<++Rs,Rs<=wc?v_(this):oh(this),this.fn()}finally{Rs<=wc&&I_(this),qn=1<<--Rs,bt=this.parent,Mn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){bt===this?this.deferStop=!0:this.active&&(oh(this),this.onStop&&this.onStop(),this.active=!1)}}function oh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Mn=!0;const Lf=[];function as(){Lf.push(Mn),Mn=!1}function cs(){const t=Lf.pop();Mn=t===void 0?!0:t}function ut(t,e,n){if(Mn&&bt){let r=Tc.get(t);r||Tc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=wl()),Uf(s)}}function Uf(t,e){let n=!1;Rs<=wc?xf(t)||(t.n|=qn,n=!Mf(t)):n=!t.has(bt),n&&(t.add(bt),bt.deps.push(t))}function hn(t,e,n,r,s,i){const o=Tc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Q(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!jn(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Q(t)?Il(n)&&a.push(o.get("length")):(a.push(o.get(dr)),Ur(t)&&a.push(o.get(Rc)));break;case"delete":Q(t)||(a.push(o.get(dr)),Ur(t)&&a.push(o.get(Rc)));break;case"set":Ur(t)&&a.push(o.get(dr));break}if(a.length===1)a[0]&&Sc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Sc(wl(c))}}function Sc(t,e){const n=Q(t)?t:[...t];for(const r of n)r.computed&&ah(r);for(const r of n)r.computed||ah(r)}function ah(t,e){(t!==bt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const T_=Al("__proto__,__v_isRef,__isVue"),Bf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jn)),ch=w_();function w_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ue(this);for(let i=0,o=this.length;i<o;i++)ut(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ue)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){as();const r=ue(this)[e].apply(this,n);return cs(),r}}),t}function R_(t){const e=ue(this);return ut(e,"has",t),e.hasOwnProperty(t)}class Ff{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?U_:Qf:i?Hf:qf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=Q(e);if(!s){if(o&&ce(ch,n))return Reflect.get(ch,n,r);if(n==="hasOwnProperty")return R_}const a=Reflect.get(e,n,r);return(jn(n)?Bf.has(n):T_(n))||(s||ut(e,"get",n),i)?a:ht(a)?o&&Il(n)?a:a.value:Ie(a)?s?Wf(a):na(a):a}}class jf extends Ff{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._shallow){const c=zr(i);if(!Eo(r)&&!zr(r)&&(i=ue(i),r=ue(r)),!Q(e)&&ht(i)&&!ht(r))return c?!1:(i.value=r,!0)}const o=Q(e)&&Il(n)?Number(n)<e.length:ce(e,n),a=Reflect.set(e,n,r,s);return e===ue(s)&&(o?mr(r,i)&&hn(e,"set",n,r):hn(e,"add",n,r)),a}deleteProperty(e,n){const r=ce(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&hn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!jn(n)||!Bf.has(n))&&ut(e,"has",n),r}ownKeys(e){return ut(e,"iterate",Q(e)?"length":dr),Reflect.ownKeys(e)}}class S_ extends Ff{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const C_=new jf,P_=new S_,b_=new jf(!0),Sl=t=>t,ta=t=>Reflect.getPrototypeOf(t);function Bi(t,e,n=!1,r=!1){t=t.__v_raw;const s=ue(t),i=ue(e);n||(mr(e,i)&&ut(s,"get",e),ut(s,"get",i));const{has:o}=ta(s),a=r?Sl:n?kl:Qs;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Fi(t,e=!1){const n=this.__v_raw,r=ue(n),s=ue(t);return e||(mr(t,s)&&ut(r,"has",t),ut(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ji(t,e=!1){return t=t.__v_raw,!e&&ut(ue(t),"iterate",dr),Reflect.get(t,"size",t)}function lh(t){t=ue(t);const e=ue(this);return ta(e).has.call(e,t)||(e.add(t),hn(e,"add",t,t)),this}function uh(t,e){e=ue(e);const n=ue(this),{has:r,get:s}=ta(n);let i=r.call(n,t);i||(t=ue(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?mr(e,o)&&hn(n,"set",t,e):hn(n,"add",t,e),this}function hh(t){const e=ue(this),{has:n,get:r}=ta(e);let s=n.call(e,t);s||(t=ue(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&hn(e,"delete",t,void 0),i}function dh(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&hn(t,"clear",void 0,void 0),n}function qi(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ue(o),c=e?Sl:t?kl:Qs;return!t&&ut(a,"iterate",dr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Hi(t,e,n){return function(...r){const s=this.__v_raw,i=ue(s),o=Ur(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Sl:e?kl:Qs;return!e&&ut(i,"iterate",c?Rc:dr),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function In(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function k_(){const t={get(i){return Bi(this,i)},get size(){return ji(this)},has:Fi,add:lh,set:uh,delete:hh,clear:dh,forEach:qi(!1,!1)},e={get(i){return Bi(this,i,!1,!0)},get size(){return ji(this)},has:Fi,add:lh,set:uh,delete:hh,clear:dh,forEach:qi(!1,!0)},n={get(i){return Bi(this,i,!0)},get size(){return ji(this,!0)},has(i){return Fi.call(this,i,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:qi(!0,!1)},r={get(i){return Bi(this,i,!0,!0)},get size(){return ji(this,!0)},has(i){return Fi.call(this,i,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:qi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Hi(i,!1,!1),n[i]=Hi(i,!0,!1),e[i]=Hi(i,!1,!0),r[i]=Hi(i,!0,!0)}),[t,n,e,r]}const[D_,N_,V_,O_]=k_();function Cl(t,e){const n=e?t?O_:V_:t?N_:D_;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ce(n,s)&&s in r?n:r,s,i)}const M_={get:Cl(!1,!1)},x_={get:Cl(!1,!0)},L_={get:Cl(!0,!1)},qf=new WeakMap,Hf=new WeakMap,Qf=new WeakMap,U_=new WeakMap;function B_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function F_(t){return t.__v_skip||!Object.isExtensible(t)?0:B_(o_(t))}function na(t){return zr(t)?t:Pl(t,!1,C_,M_,qf)}function Kf(t){return Pl(t,!1,b_,x_,Hf)}function Wf(t){return Pl(t,!0,P_,L_,Qf)}function Pl(t,e,n,r,s){if(!Ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=F_(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Br(t){return zr(t)?Br(t.__v_raw):!!(t&&t.__v_isReactive)}function zr(t){return!!(t&&t.__v_isReadonly)}function Eo(t){return!!(t&&t.__v_isShallow)}function zf(t){return Br(t)||zr(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function bl(t){return _o(t,"__v_skip",!0),t}const Qs=t=>Ie(t)?na(t):t,kl=t=>Ie(t)?Wf(t):t;function Gf(t){Mn&&bt&&(t=ue(t),Uf(t.dep||(t.dep=wl())))}function Jf(t,e){t=ue(t);const n=t.dep;n&&Sc(n)}function ht(t){return!!(t&&t.__v_isRef===!0)}function en(t){return Yf(t,!1)}function j_(t){return Yf(t,!0)}function Yf(t,e){return ht(t)?t:new q_(t,e)}class q_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:Qs(e)}get value(){return Gf(this),this._value}set value(e){const n=this.__v_isShallow||Eo(e)||zr(e);e=n?e:ue(e),mr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Qs(e),Jf(this))}}function Qe(t){return ht(t)?t.value:t}const H_={get:(t,e,n)=>Qe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ht(s)&&!ht(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Xf(t){return Br(t)?t:new Proxy(t,H_)}class Q_{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Rl(e,()=>{this._dirty||(this._dirty=!0,Jf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ue(this);return Gf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function K_(t,e,n=!1){let r,s;const i=Z(t);return i?(r=t,s=Gt):(r=t.get,s=t.set),new Q_(r,s,i||!s,n)}function xn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ra(i,e,n)}return s}function wt(t,e,n,r){if(Z(t)){const i=xn(t,e,n,r);return i&&bf(i)&&i.catch(o=>{ra(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(wt(t[i],e,n,r));return s}function ra(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){xn(c,null,10,[t,o,a]);return}}W_(t,n,s,r)}function W_(t,e,n,r=!0){console.error(t)}let Ks=!1,Cc=!1;const et=[];let Qt=0;const Fr=[];let an=null,rr=0;const Zf=Promise.resolve();let Dl=null;function $f(t){const e=Dl||Zf;return t?e.then(this?t.bind(this):t):e}function z_(t){let e=Qt+1,n=et.length;for(;e<n;){const r=e+n>>>1,s=et[r],i=Ws(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Nl(t){(!et.length||!et.includes(t,Ks&&t.allowRecurse?Qt+1:Qt))&&(t.id==null?et.push(t):et.splice(z_(t.id),0,t),ep())}function ep(){!Ks&&!Cc&&(Cc=!0,Dl=Zf.then(np))}function G_(t){const e=et.indexOf(t);e>Qt&&et.splice(e,1)}function J_(t){Q(t)?Fr.push(...t):(!an||!an.includes(t,t.allowRecurse?rr+1:rr))&&Fr.push(t),ep()}function fh(t,e,n=Ks?Qt+1:0){for(;n<et.length;n++){const r=et[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;et.splice(n,1),n--,r()}}}function tp(t){if(Fr.length){const e=[...new Set(Fr)];if(Fr.length=0,an){an.push(...e);return}for(an=e,an.sort((n,r)=>Ws(n)-Ws(r)),rr=0;rr<an.length;rr++)an[rr]();an=null,rr=0}}const Ws=t=>t.id==null?1/0:t.id,Y_=(t,e)=>{const n=Ws(t)-Ws(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function np(t){Cc=!1,Ks=!0,et.sort(Y_);try{for(Qt=0;Qt<et.length;Qt++){const e=et[Qt];e&&e.active!==!1&&xn(e,null,14)}}finally{Qt=0,et.length=0,tp(),Ks=!1,Dl=null,(et.length||Fr.length)&&np()}}function X_(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Se;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Se;d&&(s=n.map(g=>Ne(g)?g.trim():g)),h&&(s=n.map(Ao))}let a,c=r[a=Ka(e)]||r[a=Ka($t(e))];!c&&i&&(c=r[a=Ka(os(e))]),c&&wt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,wt(l,t,6,s)}}function rp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Z(t)){const c=l=>{const u=rp(l,e,!0);u&&(a=!0,Be(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ie(t)&&r.set(t,null),null):(Q(i)?i.forEach(c=>o[c]=null):Be(o,i),Ie(t)&&r.set(t,o),o)}function sa(t,e){return!t||!Jo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,os(e))||ce(t,e))}let _t=null,ia=null;function vo(t){const e=_t;return _t=t,ia=t&&t.type.__scopeId||null,e}function mi(t){ia=t}function yi(){ia=null}function gt(t,e=_t,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Rh(-1);const i=vo(e);let o;try{o=t(...s)}finally{vo(i),r._d&&Rh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function za(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:A,inheritAttrs:E}=t;let I,P;const b=vo(t);try{if(n.shapeFlag&4){const V=s||r,te=V;I=Ht(u.call(te,V,h,i,g,d,A)),P=c}else{const V=e;I=Ht(V.length>1?V(i,{attrs:c,slots:a,emit:l}):V(i,null)),P=e.props?c:Z_(c)}}catch(V){Ms.length=0,ra(V,t,1),I=ve(Ot)}let B=I;if(P&&E!==!1){const V=Object.keys(P),{shapeFlag:te}=B;V.length&&te&7&&(o&&V.some(El)&&(P=$_(P,o)),B=Hn(B,P))}return n.dirs&&(B=Hn(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),I=B,vo(b),I}const Z_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Jo(n))&&((e||(e={}))[n]=t[n]);return e},$_=(t,e)=>{const n={};for(const r in t)(!El(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function eA(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ph(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!sa(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ph(r,o,l):!0:!!o;return!1}function ph(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!sa(n,i))return!0}return!1}function tA({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const sp="components",ip=Symbol.for("v-ndc");function nA(t){return Ne(t)?rA(sp,t,!1)||t:t||ip}function rA(t,e,n=!0,r=!1){const s=_t||je;if(s){const i=s.type;if(t===sp){const a=JA(i,!1);if(a&&(a===e||a===$t(e)||a===Zo($t(e))))return i}const o=gh(s[t]||i[t],e)||gh(s.appContext[t],e);return!o&&r?i:o}}function gh(t,e){return t&&(t[e]||t[$t(e)]||t[Zo($t(e))])}const sA=t=>t.__isSuspense;function iA(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):J_(t)}const Qi={};function io(t,e,n){return op(t,e,n)}function op(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Se){var a;const c=E_()===((a=je)==null?void 0:a.scope)?je:null;let l,u=!1,h=!1;if(ht(t)?(l=()=>t.value,u=Eo(t)):Br(t)?(l=()=>t,r=!0):Q(t)?(h=!0,u=t.some(V=>Br(V)||Eo(V)),l=()=>t.map(V=>{if(ht(V))return V.value;if(Br(V))return ar(V);if(Z(V))return xn(V,c,2)})):Z(t)?e?l=()=>xn(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),wt(t,c,3,[g])}:l=Gt,e&&r){const V=l;l=()=>ar(V())}let d,g=V=>{d=b.onStop=()=>{xn(V,c,4),d=b.onStop=void 0}},A;if(Gs)if(g=Gt,e?n&&wt(e,c,3,[l(),h?[]:void 0,g]):l(),s==="sync"){const V=ZA();A=V.__watcherHandles||(V.__watcherHandles=[])}else return Gt;let E=h?new Array(t.length).fill(Qi):Qi;const I=()=>{if(b.active)if(e){const V=b.run();(r||u||(h?V.some((te,le)=>mr(te,E[le])):mr(V,E)))&&(d&&d(),wt(e,c,3,[V,E===Qi?void 0:h&&E[0]===Qi?[]:E,g]),E=V)}else b.run()};I.allowRecurse=!!e;let P;s==="sync"?P=I:s==="post"?P=()=>lt(I,c&&c.suspense):(I.pre=!0,c&&(I.id=c.uid),P=()=>Nl(I));const b=new Rl(l,P);e?n?I():E=b.run():s==="post"?lt(b.run.bind(b),c&&c.suspense):b.run();const B=()=>{b.stop(),c&&c.scope&&vl(c.scope.effects,b)};return A&&A.push(B),B}function oA(t,e,n){const r=this.proxy,s=Ne(t)?t.includes(".")?ap(r,t):()=>r[t]:t.bind(r,r);let i;Z(e)?i=e:(i=e.handler,n=e);const o=je;Gr(this);const a=op(s,i.bind(r),n);return o?Gr(o):fr(),a}function ap(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ar(t,e){if(!Ie(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ht(t))ar(t.value,e);else if(Q(t))for(let n=0;n<t.length;n++)ar(t[n],e);else if(Yo(t)||Ur(t))t.forEach(n=>{ar(n,e)});else if(Df(t))for(const n in t)ar(t[n],e);return t}function Ki(t,e){const n=_t;if(n===null)return t;const r=ua(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Se]=e[i];o&&(Z(o)&&(o={mounted:o,updated:o}),o.deep&&ar(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Zn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(as(),wt(c,n,8,[t.el,a,t,e]),cs())}}const Cn=Symbol("_leaveCb"),Wi=Symbol("_enterCb");function aA(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fp(()=>{t.isMounted=!0}),pp(()=>{t.isUnmounting=!0}),t}const vt=[Function,Array],cp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:vt,onEnter:vt,onAfterEnter:vt,onEnterCancelled:vt,onBeforeLeave:vt,onLeave:vt,onAfterLeave:vt,onLeaveCancelled:vt,onBeforeAppear:vt,onAppear:vt,onAfterAppear:vt,onAppearCancelled:vt},cA={name:"BaseTransition",props:cp,setup(t,{slots:e}){const n=QA(),r=aA();let s;return()=>{const i=e.default&&up(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const E of i)if(E.type!==Ot){o=E;break}}const a=ue(t),{mode:c}=a;if(r.isLeaving)return Ga(o);const l=mh(o);if(!l)return Ga(o);const u=Pc(l,a,r,n);bc(l,u);const h=n.subTree,d=h&&mh(h);let g=!1;const{getTransitionKey:A}=l.type;if(A){const E=A();s===void 0?s=E:E!==s&&(s=E,g=!0)}if(d&&d.type!==Ot&&(!sr(l,d)||g)){const E=Pc(d,a,r,n);if(bc(d,E),c==="out-in")return r.isLeaving=!0,E.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Ga(o);c==="in-out"&&l.type!==Ot&&(E.delayLeave=(I,P,b)=>{const B=lp(r,d);B[String(d.key)]=d,I[Cn]=()=>{P(),I[Cn]=void 0,delete u.delayedLeave},u.delayedLeave=b})}return o}}},lA=cA;function lp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Pc(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:A,onBeforeAppear:E,onAppear:I,onAfterAppear:P,onAppearCancelled:b}=e,B=String(t.key),V=lp(n,t),te=(J,he)=>{J&&wt(J,r,9,he)},le=(J,he)=>{const ae=he[1];te(J,he),Q(J)?J.every(xe=>xe.length<=1)&&ae():J.length<=1&&ae()},Re={mode:i,persisted:o,beforeEnter(J){let he=a;if(!n.isMounted)if(s)he=E||a;else return;J[Cn]&&J[Cn](!0);const ae=V[B];ae&&sr(t,ae)&&ae.el[Cn]&&ae.el[Cn](),te(he,[J])},enter(J){let he=c,ae=l,xe=u;if(!n.isMounted)if(s)he=I||c,ae=P||l,xe=b||u;else return;let U=!1;const ge=J[Wi]=it=>{U||(U=!0,it?te(xe,[J]):te(ae,[J]),Re.delayedLeave&&Re.delayedLeave(),J[Wi]=void 0)};he?le(he,[J,ge]):ge()},leave(J,he){const ae=String(t.key);if(J[Wi]&&J[Wi](!0),n.isUnmounting)return he();te(h,[J]);let xe=!1;const U=J[Cn]=ge=>{xe||(xe=!0,he(),ge?te(A,[J]):te(g,[J]),J[Cn]=void 0,V[ae]===t&&delete V[ae])};V[ae]=t,d?le(d,[J,U]):U()},clone(J){return Pc(J,e,n,r)}};return Re}function Ga(t){if(oa(t))return t=Hn(t),t.children=null,t}function mh(t){return oa(t)?t.children?t.children[0]:void 0:t}function bc(t,e){t.shapeFlag&6&&t.component?bc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function up(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===yt?(o.patchFlag&128&&s++,r=r.concat(up(o.children,e,a))):(e||o.type!==Ot)&&r.push(a!=null?Hn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function hp(t,e){return Z(t)?Be({name:t.name},e,{setup:t}):t}const oo=t=>!!t.type.__asyncLoader,oa=t=>t.type.__isKeepAlive;function uA(t,e){dp(t,"a",e)}function hA(t,e){dp(t,"da",e)}function dp(t,e,n=je){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(aa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)oa(s.parent.vnode)&&dA(r,e,n,s),s=s.parent}}function dA(t,e,n,r){const s=aa(e,t,r,!0);gp(()=>{vl(r[e],s)},n)}function aa(t,e,n=je,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;as(),Gr(n);const a=wt(e,n,t,o);return fr(),cs(),a});return r?s.unshift(i):s.push(i),i}}const _n=t=>(e,n=je)=>(!Gs||t==="sp")&&aa(t,(...r)=>e(...r),n),Vl=_n("bm"),fp=_n("m"),fA=_n("bu"),pA=_n("u"),pp=_n("bum"),gp=_n("um"),gA=_n("sp"),mA=_n("rtg"),yA=_n("rtc");function _A(t,e=je){aa("ec",t,e)}function kc(t,e,n,r){let s;const i=n&&n[r];if(Q(t)||Ne(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ie(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Dc=t=>t?Sp(t)?ua(t)||t.proxy:Dc(t.parent):null,Os=Be(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Dc(t.parent),$root:t=>Dc(t.root),$emit:t=>t.emit,$options:t=>Ol(t),$forceUpdate:t=>t.f||(t.f=()=>Nl(t.update)),$nextTick:t=>t.n||(t.n=$f.bind(t.proxy)),$watch:t=>oA.bind(t)}),Ja=(t,e)=>t!==Se&&!t.__isScriptSetup&&ce(t,e),AA={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ja(r,e))return o[e]=1,r[e];if(s!==Se&&ce(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ce(l,e))return o[e]=3,i[e];if(n!==Se&&ce(n,e))return o[e]=4,n[e];Nc&&(o[e]=0)}}const u=Os[e];let h,d;if(u)return e==="$attrs"&&ut(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Se&&ce(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ce(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ja(s,e)?(s[e]=n,!0):r!==Se&&ce(r,e)?(r[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Se&&ce(t,o)||Ja(e,o)||(a=i[0])&&ce(a,o)||ce(r,o)||ce(Os,o)||ce(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function yh(t){return Q(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Nc=!0;function EA(t){const e=Ol(t),n=t.proxy,r=t.ctx;Nc=!1,e.beforeCreate&&_h(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:A,activated:E,deactivated:I,beforeDestroy:P,beforeUnmount:b,destroyed:B,unmounted:V,render:te,renderTracked:le,renderTriggered:Re,errorCaptured:J,serverPrefetch:he,expose:ae,inheritAttrs:xe,components:U,directives:ge,filters:it}=e;if(l&&vA(l,r,null),o)for(const Ee in o){const fe=o[Ee];Z(fe)&&(r[Ee]=fe.bind(n))}if(s){const Ee=s.call(n,n);Ie(Ee)&&(t.data=na(Ee))}if(Nc=!0,i)for(const Ee in i){const fe=i[Ee],sn=Z(fe)?fe.bind(n,n):Z(fe.get)?fe.get.bind(n,n):Gt,vn=!Z(fe)&&Z(fe.set)?fe.set.bind(n):Gt,Ut=kt({get:sn,set:vn});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>Ut.value,set:ct=>Ut.value=ct})}if(a)for(const Ee in a)mp(a[Ee],r,n,Ee);if(c){const Ee=Z(c)?c.call(n):c;Reflect.ownKeys(Ee).forEach(fe=>{ao(fe,Ee[fe])})}u&&_h(u,t,"c");function De(Ee,fe){Q(fe)?fe.forEach(sn=>Ee(sn.bind(n))):fe&&Ee(fe.bind(n))}if(De(Vl,h),De(fp,d),De(fA,g),De(pA,A),De(uA,E),De(hA,I),De(_A,J),De(yA,le),De(mA,Re),De(pp,b),De(gp,V),De(gA,he),Q(ae))if(ae.length){const Ee=t.exposed||(t.exposed={});ae.forEach(fe=>{Object.defineProperty(Ee,fe,{get:()=>n[fe],set:sn=>n[fe]=sn})})}else t.exposed||(t.exposed={});te&&t.render===Gt&&(t.render=te),xe!=null&&(t.inheritAttrs=xe),U&&(t.components=U),ge&&(t.directives=ge)}function vA(t,e,n=Gt){Q(t)&&(t=Vc(t));for(const r in t){const s=t[r];let i;Ie(s)?"default"in s?i=Vt(s.from||r,s.default,!0):i=Vt(s.from||r):i=Vt(s),ht(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function _h(t,e,n){wt(Q(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function mp(t,e,n,r){const s=r.includes(".")?ap(n,r):()=>n[r];if(Ne(t)){const i=e[t];Z(i)&&io(s,i)}else if(Z(t))io(s,t.bind(n));else if(Ie(t))if(Q(t))t.forEach(i=>mp(i,e,n,r));else{const i=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(i)&&io(s,i,t)}}function Ol(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Io(c,l,o,!0)),Io(c,e,o)),Ie(e)&&i.set(e,c),c}function Io(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Io(t,i,n,!0),s&&s.forEach(o=>Io(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=IA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const IA={data:Ah,props:Eh,emits:Eh,methods:Ss,computed:Ss,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:Ss,directives:Ss,watch:wA,provide:Ah,inject:TA};function Ah(t,e){return e?t?function(){return Be(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function TA(t,e){return Ss(Vc(t),Vc(e))}function Vc(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ot(t,e){return t?[...new Set([].concat(t,e))]:e}function Ss(t,e){return t?Be(Object.create(null),t,e):e}function Eh(t,e){return t?Q(t)&&Q(e)?[...new Set([...t,...e])]:Be(Object.create(null),yh(t),yh(e??{})):e}function wA(t,e){if(!t)return e;if(!e)return t;const n=Be(Object.create(null),t);for(const r in e)n[r]=ot(t[r],e[r]);return n}function yp(){return{app:null,config:{isNativeTag:s_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let RA=0;function SA(t,e){return function(r,s=null){Z(r)||(r=Be({},r)),s!=null&&!Ie(s)&&(s=null);const i=yp(),o=new WeakSet;let a=!1;const c=i.app={_uid:RA++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:$A,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Z(l.install)?(o.add(l),l.install(c,...u)):Z(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=ve(r,s);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,ua(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){To=c;try{return l()}finally{To=null}}};return c}}let To=null;function ao(t,e){if(je){let n=je.provides;const r=je.parent&&je.parent.provides;r===n&&(n=je.provides=Object.create(r)),n[t]=e}}function Vt(t,e,n=!1){const r=je||_t;if(r||To){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:To._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Z(e)?e.call(r&&r.proxy):e}}function CA(t,e,n,r=!1){const s={},i={};_o(i,la,1),t.propsDefaults=Object.create(null),_p(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Kf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function PA(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ue(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(sa(t.emitsOptions,d))continue;const g=e[d];if(c)if(ce(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const A=$t(d);s[A]=Oc(c,a,A,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{_p(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ce(e,h)&&((u=os(h))===h||!ce(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Oc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ce(e,h))&&(delete i[h],l=!0)}l&&hn(t,"set","$attrs")}function _p(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ro(c))continue;const l=e[c];let u;s&&ce(s,u=$t(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:sa(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=ue(n),l=a||Se;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Oc(s,c,h,l[h],t,!ce(l,h))}}return o}function Oc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Z(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Gr(s),r=l[n]=c.call(null,e),fr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===os(n))&&(r=!0))}return r}function Ap(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!Z(t)){const u=h=>{c=!0;const[d,g]=Ap(h,e,!0);Be(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ie(t)&&r.set(t,Lr),Lr;if(Q(i))for(let u=0;u<i.length;u++){const h=$t(i[u]);vh(h)&&(o[h]=Se)}else if(i)for(const u in i){const h=$t(u);if(vh(h)){const d=i[u],g=o[h]=Q(d)||Z(d)?{type:d}:Be({},d);if(g){const A=wh(Boolean,g.type),E=wh(String,g.type);g[0]=A>-1,g[1]=E<0||A<E,(A>-1||ce(g,"default"))&&a.push(h)}}}const l=[o,a];return Ie(t)&&r.set(t,l),l}function vh(t){return t[0]!=="$"}function Ih(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Th(t,e){return Ih(t)===Ih(e)}function wh(t,e){return Q(e)?e.findIndex(n=>Th(n,t)):Z(e)&&Th(e,t)?0:-1}const Ep=t=>t[0]==="_"||t==="$stable",Ml=t=>Q(t)?t.map(Ht):[Ht(t)],bA=(t,e,n)=>{if(e._n)return e;const r=gt((...s)=>Ml(e(...s)),n);return r._c=!1,r},vp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ep(s))continue;const i=t[s];if(Z(i))e[s]=bA(s,i,r);else if(i!=null){const o=Ml(i);e[s]=()=>o}}},Ip=(t,e)=>{const n=Ml(e);t.slots.default=()=>n},kA=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),_o(e,"_",n)):vp(e,t.slots={})}else t.slots={},e&&Ip(t,e);_o(t.slots,la,1)},DA=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Se;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Be(s,e),!n&&a===1&&delete s._):(i=!e.$stable,vp(e,s)),o=e}else e&&(Ip(t,e),o={default:1});if(i)for(const a in s)!Ep(a)&&o[a]==null&&delete s[a]};function Mc(t,e,n,r,s=!1){if(Q(t)){t.forEach((d,g)=>Mc(d,e&&(Q(e)?e[g]:e),n,r,s));return}if(oo(r)&&!s)return;const i=r.shapeFlag&4?ua(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Se?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ne(l)?(u[l]=null,ce(h,l)&&(h[l]=null)):ht(l)&&(l.value=null)),Z(c))xn(c,a,12,[o,u]);else{const d=Ne(c),g=ht(c);if(d||g){const A=()=>{if(t.f){const E=d?ce(h,c)?h[c]:u[c]:c.value;s?Q(E)&&vl(E,i):Q(E)?E.includes(i)||E.push(i):d?(u[c]=[i],ce(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ce(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(A.id=-1,lt(A,n)):A()}}}const lt=iA;function NA(t){return VA(t)}function VA(t,e){const n=Ic();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=Gt,insertStaticContent:A}=t,E=(f,p,m,y=null,v=null,w=null,O=!1,C=null,k=!!p.dynamicChildren)=>{if(f===p)return;f&&!sr(f,p)&&(y=_(f),ct(f,v,w,!0),f=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:S,ref:q,shapeFlag:L}=p;switch(S){case ca:I(f,p,m,y);break;case Ot:P(f,p,m,y);break;case Ya:f==null&&b(p,m,y,O);break;case yt:U(f,p,m,y,v,w,O,C,k);break;default:L&1?te(f,p,m,y,v,w,O,C,k):L&6?ge(f,p,m,y,v,w,O,C,k):(L&64||L&128)&&S.process(f,p,m,y,v,w,O,C,k,D)}q!=null&&v&&Mc(q,f&&f.ref,w,p||f,!p)},I=(f,p,m,y)=>{if(f==null)r(p.el=a(p.children),m,y);else{const v=p.el=f.el;p.children!==f.children&&l(v,p.children)}},P=(f,p,m,y)=>{f==null?r(p.el=c(p.children||""),m,y):p.el=f.el},b=(f,p,m,y)=>{[f.el,f.anchor]=A(f.children,p,m,y,f.el,f.anchor)},B=({el:f,anchor:p},m,y)=>{let v;for(;f&&f!==p;)v=d(f),r(f,m,y),f=v;r(p,m,y)},V=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),s(f),f=m;s(p)},te=(f,p,m,y,v,w,O,C,k)=>{O=O||p.type==="svg",f==null?le(p,m,y,v,w,O,C,k):he(f,p,v,w,O,C,k)},le=(f,p,m,y,v,w,O,C)=>{let k,S;const{type:q,props:L,shapeFlag:H,transition:X,dirs:ne}=f;if(k=f.el=o(f.type,w,L&&L.is,L),H&8?u(k,f.children):H&16&&J(f.children,k,null,y,v,w&&q!=="foreignObject",O,C),ne&&Zn(f,null,y,"created"),Re(k,f,f.scopeId,O,y),L){for(const _e in L)_e!=="value"&&!ro(_e)&&i(k,_e,null,L[_e],w,f.children,y,v,Ye);"value"in L&&i(k,"value",null,L.value),(S=L.onVnodeBeforeMount)&&Ft(S,y,f)}ne&&Zn(f,null,y,"beforeMount");const Te=OA(v,X);Te&&X.beforeEnter(k),r(k,p,m),((S=L&&L.onVnodeMounted)||Te||ne)&&lt(()=>{S&&Ft(S,y,f),Te&&X.enter(k),ne&&Zn(f,null,y,"mounted")},v)},Re=(f,p,m,y,v)=>{if(m&&g(f,m),y)for(let w=0;w<y.length;w++)g(f,y[w]);if(v){let w=v.subTree;if(p===w){const O=v.vnode;Re(f,O,O.scopeId,O.slotScopeIds,v.parent)}}},J=(f,p,m,y,v,w,O,C,k=0)=>{for(let S=k;S<f.length;S++){const q=f[S]=C?Pn(f[S]):Ht(f[S]);E(null,q,p,m,y,v,w,O,C)}},he=(f,p,m,y,v,w,O)=>{const C=p.el=f.el;let{patchFlag:k,dynamicChildren:S,dirs:q}=p;k|=f.patchFlag&16;const L=f.props||Se,H=p.props||Se;let X;m&&$n(m,!1),(X=H.onVnodeBeforeUpdate)&&Ft(X,m,p,f),q&&Zn(p,f,m,"beforeUpdate"),m&&$n(m,!0);const ne=v&&p.type!=="foreignObject";if(S?ae(f.dynamicChildren,S,C,m,y,ne,w):O||fe(f,p,C,null,m,y,ne,w,!1),k>0){if(k&16)xe(C,p,L,H,m,y,v);else if(k&2&&L.class!==H.class&&i(C,"class",null,H.class,v),k&4&&i(C,"style",L.style,H.style,v),k&8){const Te=p.dynamicProps;for(let _e=0;_e<Te.length;_e++){const Ve=Te[_e],St=L[Ve],br=H[Ve];(br!==St||Ve==="value")&&i(C,Ve,St,br,v,f.children,m,y,Ye)}}k&1&&f.children!==p.children&&u(C,p.children)}else!O&&S==null&&xe(C,p,L,H,m,y,v);((X=H.onVnodeUpdated)||q)&&lt(()=>{X&&Ft(X,m,p,f),q&&Zn(p,f,m,"updated")},y)},ae=(f,p,m,y,v,w,O)=>{for(let C=0;C<p.length;C++){const k=f[C],S=p[C],q=k.el&&(k.type===yt||!sr(k,S)||k.shapeFlag&70)?h(k.el):m;E(k,S,q,null,y,v,w,O,!0)}},xe=(f,p,m,y,v,w,O)=>{if(m!==y){if(m!==Se)for(const C in m)!ro(C)&&!(C in y)&&i(f,C,m[C],null,O,p.children,v,w,Ye);for(const C in y){if(ro(C))continue;const k=y[C],S=m[C];k!==S&&C!=="value"&&i(f,C,S,k,O,p.children,v,w,Ye)}"value"in y&&i(f,"value",m.value,y.value)}},U=(f,p,m,y,v,w,O,C,k)=>{const S=p.el=f?f.el:a(""),q=p.anchor=f?f.anchor:a("");let{patchFlag:L,dynamicChildren:H,slotScopeIds:X}=p;X&&(C=C?C.concat(X):X),f==null?(r(S,m,y),r(q,m,y),J(p.children,m,q,v,w,O,C,k)):L>0&&L&64&&H&&f.dynamicChildren?(ae(f.dynamicChildren,H,m,v,w,O,C),(p.key!=null||v&&p===v.subTree)&&Tp(f,p,!0)):fe(f,p,m,q,v,w,O,C,k)},ge=(f,p,m,y,v,w,O,C,k)=>{p.slotScopeIds=C,f==null?p.shapeFlag&512?v.ctx.activate(p,m,y,O,k):it(p,m,y,v,w,O,k):rn(f,p,k)},it=(f,p,m,y,v,w,O)=>{const C=f.component=HA(f,y,v);if(oa(f)&&(C.ctx.renderer=D),KA(C),C.asyncDep){if(v&&v.registerDep(C,De),!f.el){const k=C.subTree=ve(Ot);P(null,k,p,m)}return}De(C,f,p,m,v,w,O)},rn=(f,p,m)=>{const y=p.component=f.component;if(eA(f,p,m))if(y.asyncDep&&!y.asyncResolved){Ee(y,p,m);return}else y.next=p,G_(y.update),y.update();else p.el=f.el,y.vnode=p},De=(f,p,m,y,v,w,O)=>{const C=()=>{if(f.isMounted){let{next:q,bu:L,u:H,parent:X,vnode:ne}=f,Te=q,_e;$n(f,!1),q?(q.el=ne.el,Ee(f,q,O)):q=ne,L&&so(L),(_e=q.props&&q.props.onVnodeBeforeUpdate)&&Ft(_e,X,q,ne),$n(f,!0);const Ve=za(f),St=f.subTree;f.subTree=Ve,E(St,Ve,h(St.el),_(St),f,v,w),q.el=Ve.el,Te===null&&tA(f,Ve.el),H&&lt(H,v),(_e=q.props&&q.props.onVnodeUpdated)&&lt(()=>Ft(_e,X,q,ne),v)}else{let q;const{el:L,props:H}=p,{bm:X,m:ne,parent:Te}=f,_e=oo(p);if($n(f,!1),X&&so(X),!_e&&(q=H&&H.onVnodeBeforeMount)&&Ft(q,Te,p),$n(f,!0),L&&pe){const Ve=()=>{f.subTree=za(f),pe(L,f.subTree,f,v,null)};_e?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Ve()):Ve()}else{const Ve=f.subTree=za(f);E(null,Ve,m,y,f,v,w),p.el=Ve.el}if(ne&&lt(ne,v),!_e&&(q=H&&H.onVnodeMounted)){const Ve=p;lt(()=>Ft(q,Te,Ve),v)}(p.shapeFlag&256||Te&&oo(Te.vnode)&&Te.vnode.shapeFlag&256)&&f.a&&lt(f.a,v),f.isMounted=!0,p=m=y=null}},k=f.effect=new Rl(C,()=>Nl(S),f.scope),S=f.update=()=>k.run();S.id=f.uid,$n(f,!0),S()},Ee=(f,p,m)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,PA(f,p.props,y,m),DA(f,p.children,m),as(),fh(f),cs()},fe=(f,p,m,y,v,w,O,C,k=!1)=>{const S=f&&f.children,q=f?f.shapeFlag:0,L=p.children,{patchFlag:H,shapeFlag:X}=p;if(H>0){if(H&128){vn(S,L,m,y,v,w,O,C,k);return}else if(H&256){sn(S,L,m,y,v,w,O,C,k);return}}X&8?(q&16&&Ye(S,v,w),L!==S&&u(m,L)):q&16?X&16?vn(S,L,m,y,v,w,O,C,k):Ye(S,v,w,!0):(q&8&&u(m,""),X&16&&J(L,m,y,v,w,O,C,k))},sn=(f,p,m,y,v,w,O,C,k)=>{f=f||Lr,p=p||Lr;const S=f.length,q=p.length,L=Math.min(S,q);let H;for(H=0;H<L;H++){const X=p[H]=k?Pn(p[H]):Ht(p[H]);E(f[H],X,m,null,v,w,O,C,k)}S>q?Ye(f,v,w,!0,!1,L):J(p,m,y,v,w,O,C,k,L)},vn=(f,p,m,y,v,w,O,C,k)=>{let S=0;const q=p.length;let L=f.length-1,H=q-1;for(;S<=L&&S<=H;){const X=f[S],ne=p[S]=k?Pn(p[S]):Ht(p[S]);if(sr(X,ne))E(X,ne,m,null,v,w,O,C,k);else break;S++}for(;S<=L&&S<=H;){const X=f[L],ne=p[H]=k?Pn(p[H]):Ht(p[H]);if(sr(X,ne))E(X,ne,m,null,v,w,O,C,k);else break;L--,H--}if(S>L){if(S<=H){const X=H+1,ne=X<q?p[X].el:y;for(;S<=H;)E(null,p[S]=k?Pn(p[S]):Ht(p[S]),m,ne,v,w,O,C,k),S++}}else if(S>H)for(;S<=L;)ct(f[S],v,w,!0),S++;else{const X=S,ne=S,Te=new Map;for(S=ne;S<=H;S++){const ft=p[S]=k?Pn(p[S]):Ht(p[S]);ft.key!=null&&Te.set(ft.key,S)}let _e,Ve=0;const St=H-ne+1;let br=!1,th=0;const _s=new Array(St);for(S=0;S<St;S++)_s[S]=0;for(S=X;S<=L;S++){const ft=f[S];if(Ve>=St){ct(ft,v,w,!0);continue}let Bt;if(ft.key!=null)Bt=Te.get(ft.key);else for(_e=ne;_e<=H;_e++)if(_s[_e-ne]===0&&sr(ft,p[_e])){Bt=_e;break}Bt===void 0?ct(ft,v,w,!0):(_s[Bt-ne]=S+1,Bt>=th?th=Bt:br=!0,E(ft,p[Bt],m,null,v,w,O,C,k),Ve++)}const nh=br?MA(_s):Lr;for(_e=nh.length-1,S=St-1;S>=0;S--){const ft=ne+S,Bt=p[ft],rh=ft+1<q?p[ft+1].el:y;_s[S]===0?E(null,Bt,m,rh,v,w,O,C,k):br&&(_e<0||S!==nh[_e]?Ut(Bt,m,rh,2):_e--)}}},Ut=(f,p,m,y,v=null)=>{const{el:w,type:O,transition:C,children:k,shapeFlag:S}=f;if(S&6){Ut(f.component.subTree,p,m,y);return}if(S&128){f.suspense.move(p,m,y);return}if(S&64){O.move(f,p,m,D);return}if(O===yt){r(w,p,m);for(let L=0;L<k.length;L++)Ut(k[L],p,m,y);r(f.anchor,p,m);return}if(O===Ya){B(f,p,m);return}if(y!==2&&S&1&&C)if(y===0)C.beforeEnter(w),r(w,p,m),lt(()=>C.enter(w),v);else{const{leave:L,delayLeave:H,afterLeave:X}=C,ne=()=>r(w,p,m),Te=()=>{L(w,()=>{ne(),X&&X()})};H?H(w,ne,Te):Te()}else r(w,p,m)},ct=(f,p,m,y=!1,v=!1)=>{const{type:w,props:O,ref:C,children:k,dynamicChildren:S,shapeFlag:q,patchFlag:L,dirs:H}=f;if(C!=null&&Mc(C,null,m,f,!0),q&256){p.ctx.deactivate(f);return}const X=q&1&&H,ne=!oo(f);let Te;if(ne&&(Te=O&&O.onVnodeBeforeUnmount)&&Ft(Te,p,f),q&6)Ui(f.component,m,y);else{if(q&128){f.suspense.unmount(m,y);return}X&&Zn(f,null,p,"beforeUnmount"),q&64?f.type.remove(f,p,m,v,D,y):S&&(w!==yt||L>0&&L&64)?Ye(S,p,m,!1,!0):(w===yt&&L&384||!v&&q&16)&&Ye(k,p,m),y&&Cr(f)}(ne&&(Te=O&&O.onVnodeUnmounted)||X)&&lt(()=>{Te&&Ft(Te,p,f),X&&Zn(f,null,p,"unmounted")},m)},Cr=f=>{const{type:p,el:m,anchor:y,transition:v}=f;if(p===yt){Pr(m,y);return}if(p===Ya){V(f);return}const w=()=>{s(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:O,delayLeave:C}=v,k=()=>O(m,w);C?C(f.el,w,k):k()}else w()},Pr=(f,p)=>{let m;for(;f!==p;)m=d(f),s(f),f=m;s(p)},Ui=(f,p,m)=>{const{bum:y,scope:v,update:w,subTree:O,um:C}=f;y&&so(y),v.stop(),w&&(w.active=!1,ct(O,f,p,m)),C&&lt(C,p),lt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ye=(f,p,m,y=!1,v=!1,w=0)=>{for(let O=w;O<f.length;O++)ct(f[O],p,m,y,v)},_=f=>f.shapeFlag&6?_(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),M=(f,p,m)=>{f==null?p._vnode&&ct(p._vnode,null,null,!0):E(p._vnode||null,f,p,null,null,null,m),fh(),tp(),p._vnode=f},D={p:E,um:ct,m:Ut,r:Cr,mt:it,mc:J,pc:fe,pbc:ae,n:_,o:t};let F,pe;return e&&([F,pe]=e(D)),{render:M,hydrate:F,createApp:SA(M,F)}}function $n({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function OA(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Tp(t,e,n=!1){const r=t.children,s=e.children;if(Q(r)&&Q(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Pn(s[i]),a.el=o.el),n||Tp(o,a)),a.type===ca&&(a.el=o.el)}}function MA(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const xA=t=>t.__isTeleport,yt=Symbol.for("v-fgt"),ca=Symbol.for("v-txt"),Ot=Symbol.for("v-cmt"),Ya=Symbol.for("v-stc"),Ms=[];let Dt=null;function ee(t=!1){Ms.push(Dt=t?null:[])}function LA(){Ms.pop(),Dt=Ms[Ms.length-1]||null}let zs=1;function Rh(t){zs+=t}function wp(t){return t.dynamicChildren=zs>0?Dt||Lr:null,LA(),zs>0&&Dt&&Dt.push(t),t}function Ae(t,e,n,r,s,i){return wp(oe(t,e,n,r,s,i,!0))}function qt(t,e,n,r,s){return wp(ve(t,e,n,r,s,!0))}function xc(t){return t?t.__v_isVNode===!0:!1}function sr(t,e){return t.type===e.type&&t.key===e.key}const la="__vInternal",Rp=({key:t})=>t??null,co=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ne(t)||ht(t)||Z(t)?{i:_t,r:t,k:e,f:!!n}:t:null);function oe(t,e=null,n=null,r=0,s=null,i=t===yt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Rp(e),ref:e&&co(e),scopeId:ia,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_t};return a?(xl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ne(n)?8:16),zs>0&&!o&&Dt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Dt.push(c),c}const ve=UA;function UA(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ip)&&(t=Ot),xc(t)){const a=Hn(t,e,!0);return n&&xl(a,n),zs>0&&!i&&Dt&&(a.shapeFlag&6?Dt[Dt.indexOf(t)]=a:Dt.push(a)),a.patchFlag|=-2,a}if(YA(t)&&(t=t.__vccOpts),e){e=BA(e);let{class:a,style:c}=e;a&&!Ne(a)&&(e.class=Tl(a)),Ie(c)&&(zf(c)&&!Q(c)&&(c=Be({},c)),e.style=$o(c))}const o=Ne(t)?1:sA(t)?128:xA(t)?64:Ie(t)?4:Z(t)?2:0;return oe(t,e,n,r,s,o,i,!0)}function BA(t){return t?zf(t)||la in t?Be({},t):t:null}function Hn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?FA(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Rp(a),ref:e&&e.ref?n&&s?Q(s)?s.concat(co(e)):[s,co(e)]:co(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==yt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Hn(t.ssContent),ssFallback:t.ssFallback&&Hn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function mt(t=" ",e=0){return ve(ca,null,t,e)}function jt(t="",e=!1){return e?(ee(),qt(Ot,null,t)):ve(Ot,null,t)}function Ht(t){return t==null||typeof t=="boolean"?ve(Ot):Q(t)?ve(yt,null,t.slice()):typeof t=="object"?Pn(t):ve(ca,null,String(t))}function Pn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Hn(t)}function xl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),xl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(la in e)?e._ctx=_t:s===3&&_t&&(_t.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:_t},n=32):(e=String(e),r&64?(n=16,e=[mt(e)]):n=8);t.children=e,t.shapeFlag|=n}function FA(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Tl([e.class,r.class]));else if(s==="style")e.style=$o([e.style,r.style]);else if(Jo(s)){const i=e[s],o=r[s];o&&i!==o&&!(Q(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ft(t,e,n,r=null){wt(t,e,7,[n,r])}const jA=yp();let qA=0;function HA(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||jA,i={uid:qA++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Of(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ap(r,s),emitsOptions:rp(r,s),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:r.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=X_.bind(null,i),t.ce&&t.ce(i),i}let je=null;const QA=()=>je||_t;let Ll,kr,Sh="__VUE_INSTANCE_SETTERS__";(kr=Ic()[Sh])||(kr=Ic()[Sh]=[]),kr.push(t=>je=t),Ll=t=>{kr.length>1?kr.forEach(e=>e(t)):kr[0](t)};const Gr=t=>{Ll(t),t.scope.on()},fr=()=>{je&&je.scope.off(),Ll(null)};function Sp(t){return t.vnode.shapeFlag&4}let Gs=!1;function KA(t,e=!1){Gs=e;const{props:n,children:r}=t.vnode,s=Sp(t);CA(t,n,s,e),kA(t,r);const i=s?WA(t,e):void 0;return Gs=!1,i}function WA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=bl(new Proxy(t.ctx,AA));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?GA(t):null;Gr(t),as();const i=xn(r,t,0,[t.props,s]);if(cs(),fr(),bf(i)){if(i.then(fr,fr),e)return i.then(o=>{Ch(t,o,e)}).catch(o=>{ra(o,t,0)});t.asyncDep=i}else Ch(t,i,e)}else Cp(t,e)}function Ch(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ie(e)&&(t.setupState=Xf(e)),Cp(t,n)}let Ph;function Cp(t,e,n){const r=t.type;if(!t.render){if(!e&&Ph&&!r.render){const s=r.template||Ol(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Be(Be({isCustomElement:i,delimiters:a},o),c);r.render=Ph(s,l)}}t.render=r.render||Gt}{Gr(t),as();try{EA(t)}finally{cs(),fr()}}}function zA(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ut(t,"get","$attrs"),e[n]}}))}function GA(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return zA(t)},slots:t.slots,emit:t.emit,expose:e}}function ua(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Xf(bl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Os)return Os[n](t)},has(e,n){return n in e||n in Os}}))}function JA(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function YA(t){return Z(t)&&"__vccOpts"in t}const kt=(t,e)=>K_(t,e,Gs);function Ul(t,e,n){const r=arguments.length;return r===2?Ie(e)&&!Q(e)?xc(e)?ve(t,null,[e]):ve(t,e):ve(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&xc(n)&&(n=[n]),ve(t,e,n))}const XA=Symbol.for("v-scx"),ZA=()=>Vt(XA),$A="3.3.12",eE="http://www.w3.org/2000/svg",ir=typeof document<"u"?document:null,bh=ir&&ir.createElement("template"),tE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?ir.createElementNS(eE,t):ir.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ir.createTextNode(t),createComment:t=>ir.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ir.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{bh.innerHTML=r?`<svg>${t}</svg>`:t;const a=bh.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Tn="transition",Es="animation",Js=Symbol("_vtc"),Bl=(t,{slots:e})=>Ul(lA,nE(t),e);Bl.displayName="Transition";const Pp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Bl.props=Be({},cp,Pp);const er=(t,e=[])=>{Q(t)?t.forEach(n=>n(...e)):t&&t(...e)},kh=t=>t?Q(t)?t.some(e=>e.length>1):t.length>1:!1;function nE(t){const e={};for(const U in t)U in Pp||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,A=rE(s),E=A&&A[0],I=A&&A[1],{onBeforeEnter:P,onEnter:b,onEnterCancelled:B,onLeave:V,onLeaveCancelled:te,onBeforeAppear:le=P,onAppear:Re=b,onAppearCancelled:J=B}=e,he=(U,ge,it)=>{tr(U,ge?u:a),tr(U,ge?l:o),it&&it()},ae=(U,ge)=>{U._isLeaving=!1,tr(U,h),tr(U,g),tr(U,d),ge&&ge()},xe=U=>(ge,it)=>{const rn=U?Re:b,De=()=>he(ge,U,it);er(rn,[ge,De]),Dh(()=>{tr(ge,U?c:i),wn(ge,U?u:a),kh(rn)||Nh(ge,r,E,De)})};return Be(e,{onBeforeEnter(U){er(P,[U]),wn(U,i),wn(U,o)},onBeforeAppear(U){er(le,[U]),wn(U,c),wn(U,l)},onEnter:xe(!1),onAppear:xe(!0),onLeave(U,ge){U._isLeaving=!0;const it=()=>ae(U,ge);wn(U,h),oE(),wn(U,d),Dh(()=>{U._isLeaving&&(tr(U,h),wn(U,g),kh(V)||Nh(U,r,I,it))}),er(V,[U,it])},onEnterCancelled(U){he(U,!1),er(B,[U])},onAppearCancelled(U){he(U,!0),er(J,[U])},onLeaveCancelled(U){ae(U),er(te,[U])}})}function rE(t){if(t==null)return null;if(Ie(t))return[Xa(t.enter),Xa(t.leave)];{const e=Xa(t);return[e,e]}}function Xa(t){return l_(t)}function wn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Js]||(t[Js]=new Set)).add(e)}function tr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Js];n&&(n.delete(e),n.size||(t[Js]=void 0))}function Dh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let sE=0;function Nh(t,e,n,r){const s=t._endId=++sE,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=iE(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,d),i()},d=g=>{g.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,d)}function iE(t,e){const n=window.getComputedStyle(t),r=A=>(n[A]||"").split(", "),s=r(`${Tn}Delay`),i=r(`${Tn}Duration`),o=Vh(s,i),a=r(`${Es}Delay`),c=r(`${Es}Duration`),l=Vh(a,c);let u=null,h=0,d=0;e===Tn?o>0&&(u=Tn,h=o,d=i.length):e===Es?l>0&&(u=Es,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?Tn:Es:null,d=u?u===Tn?i.length:c.length:0);const g=u===Tn&&/\b(transform|all)(,|$)/.test(r(`${Tn}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:g}}function Vh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Oh(n)+Oh(t[r])))}function Oh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function oE(){return document.body.offsetHeight}function aE(t,e,n){const r=t[Js];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const cE=Symbol("_vod"),lE=Symbol("");function uE(t,e,n){const r=t.style,s=Ne(n);if(n&&!s){if(e&&!Ne(e))for(const i in e)n[i]==null&&Lc(r,i,"");for(const i in n)Lc(r,i,n[i])}else{const i=r.display;if(s){if(e!==n){const o=r[lE];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");cE in t&&(r.display=i)}}const Mh=/\s*!important$/;function Lc(t,e,n){if(Q(n))n.forEach(r=>Lc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=hE(t,e);Mh.test(n)?t.setProperty(os(r),n.replace(Mh,""),"important"):t[r]=n}}const xh=["Webkit","Moz","ms"],Za={};function hE(t,e){const n=Za[e];if(n)return n;let r=$t(e);if(r!=="filter"&&r in t)return Za[e]=r;r=Zo(r);for(let s=0;s<xh.length;s++){const i=xh[s]+r;if(i in t)return Za[e]=i}return e}const Lh="http://www.w3.org/1999/xlink";function dE(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Lh,e.slice(6,e.length)):t.setAttributeNS(Lh,e,n);else{const i=g_(e);n==null||i&&!Nf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function fE(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Nf(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function or(t,e,n,r){t.addEventListener(e,n,r)}function pE(t,e,n,r){t.removeEventListener(e,n,r)}const Uh=Symbol("_vei");function gE(t,e,n,r,s=null){const i=t[Uh]||(t[Uh]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=mE(e);if(r){const l=i[e]=AE(r,s);or(t,a,l,c)}else o&&(pE(t,a,o,c),i[e]=void 0)}}const Bh=/(?:Once|Passive|Capture)$/;function mE(t){let e;if(Bh.test(t)){e={};let r;for(;r=t.match(Bh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):os(t.slice(2)),e]}let $a=0;const yE=Promise.resolve(),_E=()=>$a||(yE.then(()=>$a=0),$a=Date.now());function AE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;wt(EE(r,n.value),e,5,[r])};return n.value=t,n.attached=_E(),n}function EE(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Fh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,vE=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?aE(t,r,s):e==="style"?uE(t,n,r):Jo(e)?El(e)||gE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):IE(t,e,r,s))?fE(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),dE(t,e,r,s))};function IE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Fh(e)&&Z(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Fh(e)&&Ne(n)?!1:e in t}const wo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Q(e)?n=>so(e,n):e};function TE(t){t.target.composing=!0}function jh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const jr=Symbol("_assign"),zi={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[jr]=wo(s);const i=r||s.props&&s.props.type==="number";or(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ao(a)),t[jr](a)}),n&&or(t,"change",()=>{t.value=t.value.trim()}),e||(or(t,"compositionstart",TE),or(t,"compositionend",jh),or(t,"change",jh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[jr]=wo(i),t.composing)return;const o=s||t.type==="number"?Ao(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},Ub={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Yo(e);or(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ao(Ro(o)):Ro(o));t[jr](t.multiple?s?new Set(i):i:i[0])}),t[jr]=wo(r)},mounted(t,{value:e}){qh(t,e)},beforeUpdate(t,e,n){t[jr]=wo(n)},updated(t,{value:e}){qh(t,e)}};function qh(t,e){const n=t.multiple;if(!(n&&!Q(e)&&!Yo(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Ro(i);if(n)Q(e)?i.selected=y_(e,o)>-1:i.selected=e.has(o);else if(ea(Ro(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ro(t){return"_value"in t?t._value:t.value}const wE=Be({patchProp:vE},tE);let Hh;function RE(){return Hh||(Hh=NA(wE))}const SE=(...t)=>{const e=RE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=CE(r);if(!s)return;const i=e._component;!Z(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function CE(t){return Ne(t)?document.querySelector(t):t}var PE=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const bE=Symbol();var Qh;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Qh||(Qh={}));function kE(){const t=__(!0),e=t.run(()=>en({}));let n=[],r=[];const s=bl({install(i){s._a=i,i.provide(bE,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!PE?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Nr=typeof window<"u";function DE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const me=Object.assign;function ec(t,e){const n={};for(const r in e){const s=e[r];n[r]=xt(s)?s.map(t):t(s)}return n}const xs=()=>{},xt=Array.isArray,NE=/\/$/,VE=t=>t.replace(NE,"");function tc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=LE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function OE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Kh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ME(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Jr(e.matched[r],n.matched[s])&&bp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Jr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function bp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!xE(t[n],e[n]))return!1;return!0}function xE(t,e){return xt(t)?Wh(t,e):xt(e)?Wh(e,t):t===e}function Wh(t,e){return xt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function LE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Ys;(function(t){t.pop="pop",t.push="push"})(Ys||(Ys={}));var Ls;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ls||(Ls={}));function UE(t){if(!t)if(Nr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),VE(t)}const BE=/^[^#]+#/;function FE(t,e){return t.replace(BE,"#")+e}function jE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ha=()=>({left:window.pageXOffset,top:window.pageYOffset});function qE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=jE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function zh(t,e){return(history.state?history.state.position-e:-1)+t}const Uc=new Map;function HE(t,e){Uc.set(t,e)}function QE(t){const e=Uc.get(t);return Uc.delete(t),e}let KE=()=>location.protocol+"//"+location.host;function kp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Kh(c,"")}return Kh(n,t)+r+s}function WE(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const g=kp(t,location),A=n.value,E=e.value;let I=0;if(d){if(n.value=g,e.value=d,o&&o===A){o=null;return}I=E?d.position-E.position:0}else r(g);s.forEach(P=>{P(n.value,A,{delta:I,type:Ys.pop,direction:I?I>0?Ls.forward:Ls.back:Ls.unknown})})};function c(){o=n.value}function l(d){s.push(d);const g=()=>{const A=s.indexOf(d);A>-1&&s.splice(A,1)};return i.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(me({},d.state,{scroll:ha()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Gh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ha():null}}function zE(t){const{history:e,location:n}=window,r={value:kp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:KE()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=me({},e.state,Gh(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=me({},s.value,e.state,{forward:c,scroll:ha()});i(u.current,u,!0);const h=me({},Gh(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function GE(t){t=UE(t);const e=zE(t),n=WE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=me({location:"",base:t,go:r,createHref:FE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function JE(t){return typeof t=="string"||t&&typeof t=="object"}function Dp(t){return typeof t=="string"||typeof t=="symbol"}const Rn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Np=Symbol("");var Jh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Jh||(Jh={}));function Yr(t,e){return me(new Error,{type:t,[Np]:!0},e)}function on(t,e){return t instanceof Error&&Np in t&&(e==null||!!(t.type&e))}const Yh="[^/]+?",YE={sensitive:!1,strict:!1,start:!0,end:!0},XE=/[.+*?^${}()[\]/\\]/g;function ZE(t,e){const n=me({},YE,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(XE,"\\$&"),g+=40;else if(d.type===1){const{value:A,repeatable:E,optional:I,regexp:P}=d;i.push({name:A,repeatable:E,optional:I});const b=P||Yh;if(b!==Yh){g+=10;try{new RegExp(`(${b})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${A}" (${b}): `+V.message)}}let B=E?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(B=I&&l.length<2?`(?:/${B})`:"/"+B),I&&(B+="?"),s+=B,g+=20,I&&(g+=-8),E&&(g+=-20),b===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",A=i[d-1];h[A.name]=g&&A.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:A,repeatable:E,optional:I}=g,P=A in l?l[A]:"";if(xt(P)&&!E)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const b=xt(P)?P.join("/"):P;if(!b)if(I)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${A}"`);u+=b}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function $E(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ev(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=$E(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Xh(r))return 1;if(Xh(s))return-1}return s.length-r.length}function Xh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tv={type:0,value:""},nv=/[a-zA-Z0-9_]/;function rv(t){if(!t)return[[]];if(t==="/")return[[tv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:nv.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function sv(t,e,n){const r=ZE(rv(t.path),n),s=me(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function iv(t,e){const n=[],r=new Map;e=ed({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const g=!d,A=ov(u);A.aliasOf=d&&d.record;const E=ed(e,u),I=[A];if("alias"in u){const B=typeof u.alias=="string"?[u.alias]:u.alias;for(const V of B)I.push(me({},A,{components:d?d.record.components:A.components,path:V,aliasOf:d?d.record:A}))}let P,b;for(const B of I){const{path:V}=B;if(h&&V[0]!=="/"){const te=h.record.path,le=te[te.length-1]==="/"?"":"/";B.path=h.record.path+(V&&le+V)}if(P=sv(B,h,E),d?d.alias.push(P):(b=b||P,b!==P&&b.alias.push(P),g&&u.name&&!$h(P)&&o(u.name)),A.children){const te=A.children;for(let le=0;le<te.length;le++)i(te[le],P,d&&d.children[le])}d=d||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&c(P)}return b?()=>{o(b)}:xs}function o(u){if(Dp(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&ev(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Vp(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!$h(u)&&r.set(u.record.name,u)}function l(u,h){let d,g={},A,E;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Yr(1,{location:u});E=d.record.name,g=me(Zh(h.params,d.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&Zh(u.params,d.keys.map(b=>b.name))),A=d.stringify(g)}else if("path"in u)A=u.path,d=n.find(b=>b.re.test(A)),d&&(g=d.parse(A),E=d.record.name);else{if(d=h.name?r.get(h.name):n.find(b=>b.re.test(h.path)),!d)throw Yr(1,{location:u,currentLocation:h});E=d.record.name,g=me({},h.params,u.params),A=d.stringify(g)}const I=[];let P=d;for(;P;)I.unshift(P.record),P=P.parent;return{name:E,path:A,params:g,matched:I,meta:cv(I)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Zh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ov(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:av(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function av(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function $h(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function cv(t){return t.reduce((e,n)=>me(e,n.meta),{})}function ed(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Vp(t,e){return e.children.some(n=>n===t||Vp(t,n))}const Op=/#/g,lv=/&/g,uv=/\//g,hv=/=/g,dv=/\?/g,Mp=/\+/g,fv=/%5B/g,pv=/%5D/g,xp=/%5E/g,gv=/%60/g,Lp=/%7B/g,mv=/%7C/g,Up=/%7D/g,yv=/%20/g;function Fl(t){return encodeURI(""+t).replace(mv,"|").replace(fv,"[").replace(pv,"]")}function _v(t){return Fl(t).replace(Lp,"{").replace(Up,"}").replace(xp,"^")}function Bc(t){return Fl(t).replace(Mp,"%2B").replace(yv,"+").replace(Op,"%23").replace(lv,"%26").replace(gv,"`").replace(Lp,"{").replace(Up,"}").replace(xp,"^")}function Av(t){return Bc(t).replace(hv,"%3D")}function Ev(t){return Fl(t).replace(Op,"%23").replace(dv,"%3F")}function vv(t){return t==null?"":Ev(t).replace(uv,"%2F")}function So(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Iv(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Mp," "),o=i.indexOf("="),a=So(o<0?i:i.slice(0,o)),c=o<0?null:So(i.slice(o+1));if(a in e){let l=e[a];xt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function td(t){let e="";for(let n in t){const r=t[n];if(n=Av(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(xt(r)?r.map(i=>i&&Bc(i)):[r&&Bc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Tv(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=xt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const wv=Symbol(""),nd=Symbol(""),da=Symbol(""),jl=Symbol(""),Fc=Symbol("");function vs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function bn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Yr(4,{from:n,to:e})):h instanceof Error?a(h):JE(h)?a(Yr(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function nc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Rv(a)){const l=(a.__vccOpts||a)[e];l&&s.push(bn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=DE(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&bn(d,n,r,i,o)()}))}}return s}function Rv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function rd(t){const e=Vt(da),n=Vt(jl),r=kt(()=>e.resolve(Qe(t.to))),s=kt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Jr.bind(null,u));if(d>-1)return d;const g=sd(c[l-2]);return l>1&&sd(u)===g&&h[h.length-1].path!==g?h.findIndex(Jr.bind(null,c[l-2])):d}),i=kt(()=>s.value>-1&&Pv(n.params,r.value.params)),o=kt(()=>s.value>-1&&s.value===n.matched.length-1&&bp(n.params,r.value.params));function a(c={}){return Cv(c)?e[Qe(t.replace)?"replace":"push"](Qe(t.to)).catch(xs):Promise.resolve()}return{route:r,href:kt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Sv=hp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:rd,setup(t,{slots:e}){const n=na(rd(t)),{options:r}=Vt(da),s=kt(()=>({[id(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[id(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ul("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Pt=Sv;function Cv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Pv(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!xt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function sd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const id=(t,e,n)=>t??e??n,bv=hp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Vt(Fc),s=kt(()=>t.route||r.value),i=Vt(nd,0),o=kt(()=>{let l=Qe(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=kt(()=>s.value.matched[o.value]);ao(nd,kt(()=>o.value+1)),ao(wv,a),ao(Fc,s);const c=en();return io(()=>[c.value,a.value,t.name],([l,u,h],[d,g,A])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Jr(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return od(n.default,{Component:d,route:l});const g=h.props[u],A=g?g===!0?l.params:typeof g=="function"?g(l):g:null,I=Ul(d,me({},A,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return od(n.default,{Component:I,route:l})||I}}});function od(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Bp=bv;function kv(t){const e=iv(t.routes,t),n=t.parseQuery||Iv,r=t.stringifyQuery||td,s=t.history,i=vs(),o=vs(),a=vs(),c=j_(Rn);let l=Rn;Nr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ec.bind(null,_=>""+_),h=ec.bind(null,vv),d=ec.bind(null,So);function g(_,M){let D,F;return Dp(_)?(D=e.getRecordMatcher(_),F=M):F=_,e.addRoute(F,D)}function A(_){const M=e.getRecordMatcher(_);M&&e.removeRoute(M)}function E(){return e.getRoutes().map(_=>_.record)}function I(_){return!!e.getRecordMatcher(_)}function P(_,M){if(M=me({},M||c.value),typeof _=="string"){const m=tc(n,_,M.path),y=e.resolve({path:m.path},M),v=s.createHref(m.fullPath);return me(m,y,{params:d(y.params),hash:So(m.hash),redirectedFrom:void 0,href:v})}let D;if("path"in _)D=me({},_,{path:tc(n,_.path,M.path).path});else{const m=me({},_.params);for(const y in m)m[y]==null&&delete m[y];D=me({},_,{params:h(m)}),M.params=h(M.params)}const F=e.resolve(D,M),pe=_.hash||"";F.params=u(d(F.params));const f=OE(r,me({},_,{hash:_v(pe),path:F.path})),p=s.createHref(f);return me({fullPath:f,hash:pe,query:r===td?Tv(_.query):_.query||{}},F,{redirectedFrom:void 0,href:p})}function b(_){return typeof _=="string"?tc(n,_,c.value.path):me({},_)}function B(_,M){if(l!==_)return Yr(8,{from:M,to:_})}function V(_){return Re(_)}function te(_){return V(me(b(_),{replace:!0}))}function le(_){const M=_.matched[_.matched.length-1];if(M&&M.redirect){const{redirect:D}=M;let F=typeof D=="function"?D(_):D;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=b(F):{path:F},F.params={}),me({query:_.query,hash:_.hash,params:"path"in F?{}:_.params},F)}}function Re(_,M){const D=l=P(_),F=c.value,pe=_.state,f=_.force,p=_.replace===!0,m=le(D);if(m)return Re(me(b(m),{state:typeof m=="object"?me({},pe,m.state):pe,force:f,replace:p}),M||D);const y=D;y.redirectedFrom=M;let v;return!f&&ME(r,F,D)&&(v=Yr(16,{to:y,from:F}),Ut(F,F,!0,!1)),(v?Promise.resolve(v):ae(y,F)).catch(w=>on(w)?on(w,2)?w:vn(w):fe(w,y,F)).then(w=>{if(w){if(on(w,2))return Re(me({replace:p},b(w.to),{state:typeof w.to=="object"?me({},pe,w.to.state):pe,force:f}),M||y)}else w=U(y,F,!0,p,pe);return xe(y,F,w),w})}function J(_,M){const D=B(_,M);return D?Promise.reject(D):Promise.resolve()}function he(_){const M=Pr.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(_):_()}function ae(_,M){let D;const[F,pe,f]=Dv(_,M);D=nc(F.reverse(),"beforeRouteLeave",_,M);for(const m of F)m.leaveGuards.forEach(y=>{D.push(bn(y,_,M))});const p=J.bind(null,_,M);return D.push(p),Ye(D).then(()=>{D=[];for(const m of i.list())D.push(bn(m,_,M));return D.push(p),Ye(D)}).then(()=>{D=nc(pe,"beforeRouteUpdate",_,M);for(const m of pe)m.updateGuards.forEach(y=>{D.push(bn(y,_,M))});return D.push(p),Ye(D)}).then(()=>{D=[];for(const m of f)if(m.beforeEnter)if(xt(m.beforeEnter))for(const y of m.beforeEnter)D.push(bn(y,_,M));else D.push(bn(m.beforeEnter,_,M));return D.push(p),Ye(D)}).then(()=>(_.matched.forEach(m=>m.enterCallbacks={}),D=nc(f,"beforeRouteEnter",_,M),D.push(p),Ye(D))).then(()=>{D=[];for(const m of o.list())D.push(bn(m,_,M));return D.push(p),Ye(D)}).catch(m=>on(m,8)?m:Promise.reject(m))}function xe(_,M,D){a.list().forEach(F=>he(()=>F(_,M,D)))}function U(_,M,D,F,pe){const f=B(_,M);if(f)return f;const p=M===Rn,m=Nr?history.state:{};D&&(F||p?s.replace(_.fullPath,me({scroll:p&&m&&m.scroll},pe)):s.push(_.fullPath,pe)),c.value=_,Ut(_,M,D,p),vn()}let ge;function it(){ge||(ge=s.listen((_,M,D)=>{if(!Ui.listening)return;const F=P(_),pe=le(F);if(pe){Re(me(pe,{replace:!0}),F).catch(xs);return}l=F;const f=c.value;Nr&&HE(zh(f.fullPath,D.delta),ha()),ae(F,f).catch(p=>on(p,12)?p:on(p,2)?(Re(p.to,F).then(m=>{on(m,20)&&!D.delta&&D.type===Ys.pop&&s.go(-1,!1)}).catch(xs),Promise.reject()):(D.delta&&s.go(-D.delta,!1),fe(p,F,f))).then(p=>{p=p||U(F,f,!1),p&&(D.delta&&!on(p,8)?s.go(-D.delta,!1):D.type===Ys.pop&&on(p,20)&&s.go(-1,!1)),xe(F,f,p)}).catch(xs)}))}let rn=vs(),De=vs(),Ee;function fe(_,M,D){vn(_);const F=De.list();return F.length?F.forEach(pe=>pe(_,M,D)):console.error(_),Promise.reject(_)}function sn(){return Ee&&c.value!==Rn?Promise.resolve():new Promise((_,M)=>{rn.add([_,M])})}function vn(_){return Ee||(Ee=!_,it(),rn.list().forEach(([M,D])=>_?D(_):M()),rn.reset()),_}function Ut(_,M,D,F){const{scrollBehavior:pe}=t;if(!Nr||!pe)return Promise.resolve();const f=!D&&QE(zh(_.fullPath,0))||(F||!D)&&history.state&&history.state.scroll||null;return $f().then(()=>pe(_,M,f)).then(p=>p&&qE(p)).catch(p=>fe(p,_,M))}const ct=_=>s.go(_);let Cr;const Pr=new Set,Ui={currentRoute:c,listening:!0,addRoute:g,removeRoute:A,hasRoute:I,getRoutes:E,resolve:P,options:t,push:V,replace:te,go:ct,back:()=>ct(-1),forward:()=>ct(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:De.add,isReady:sn,install(_){const M=this;_.component("RouterLink",Pt),_.component("RouterView",Bp),_.config.globalProperties.$router=M,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Qe(c)}),Nr&&!Cr&&c.value===Rn&&(Cr=!0,V(s.location).catch(pe=>{}));const D={};for(const pe in Rn)Object.defineProperty(D,pe,{get:()=>c.value[pe],enumerable:!0});_.provide(da,M),_.provide(jl,Kf(D)),_.provide(Fc,c);const F=_.unmount;Pr.add(_),_.unmount=function(){Pr.delete(_),Pr.size<1&&(l=Rn,ge&&ge(),ge=null,c.value=Rn,Cr=!1,Ee=!1),F()}}};function Ye(_){return _.reduce((M,D)=>M.then(()=>he(D)),Promise.resolve())}return Ui}function Dv(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Jr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Jr(l,c))||s.push(c))}return[n,r,s]}function Bb(){return Vt(da)}function Fb(){return Vt(jl)}var ad={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Nv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},jp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),r.push(n[u],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Nv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new Vv;const d=i<<2|a>>4;if(r.push(d),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const A=l<<6&192|h;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Vv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ov=function(t){const e=Fp(t);return jp.encodeByteArray(e,!0)},Co=function(t){return Ov(t).replace(/\./g,"")},qp=function(t){try{return jp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=()=>Mv().__FIREBASE_DEFAULTS__,Lv=()=>{if(typeof process>"u"||typeof ad>"u")return;const t=ad.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Uv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qp(t[1]);return e&&JSON.parse(e)},ql=()=>{try{return xv()||Lv()||Uv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hp=t=>{var e,n;return(n=(e=ql())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Bv=t=>{const e=Hp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Qp=()=>{var t;return(t=ql())===null||t===void 0?void 0:t.config},Kp=t=>{var e;return(e=ql())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Co(JSON.stringify(n)),Co(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function Hv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Qv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Kv(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Wv(){try{return typeof indexedDB=="object"}catch{return!1}}function zv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv="FirebaseError";class An extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Gv,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_i.prototype.create)}}class _i{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Jv(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new An(s,a,r)}}function Jv(t,e){return t.replace(Yv,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Yv=/\{\$([^}]+)}/g;function Xv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Po(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(cd(i)&&cd(o)){if(!Po(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function cd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Cs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ps(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Zv(t,e){const n=new $v(t,e);return n.subscribe.bind(n)}class $v{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=rc),s.error===void 0&&(s.error=rc),s.complete===void 0&&(s.complete=rc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function rc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t){return t&&t._delegate?t._delegate:t}class yr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Fv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rI(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nI(t){return t===nr?void 0:t}function rI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const iI={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},oI=se.INFO,aI={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},cI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=aI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hl{constructor(e){this.name=e,this._logLevel=oI,this._logHandler=cI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const lI=(t,e)=>e.some(n=>t instanceof n);let ld,ud;function uI(){return ld||(ld=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hI(){return ud||(ud=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wp=new WeakMap,jc=new WeakMap,zp=new WeakMap,sc=new WeakMap,Ql=new WeakMap;function dI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ln(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wp.set(n,t)}).catch(()=>{}),Ql.set(e,t),e}function fI(t){if(jc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});jc.set(t,e)}let qc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ln(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pI(t){qc=t(qc)}function gI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ic(this),e,...n);return zp.set(r,e.sort?e.sort():[e]),Ln(r)}:hI().includes(t)?function(...e){return t.apply(ic(this),e),Ln(Wp.get(this))}:function(...e){return Ln(t.apply(ic(this),e))}}function mI(t){return typeof t=="function"?gI(t):(t instanceof IDBTransaction&&fI(t),lI(t,uI())?new Proxy(t,qc):t)}function Ln(t){if(t instanceof IDBRequest)return dI(t);if(sc.has(t))return sc.get(t);const e=mI(t);return e!==t&&(sc.set(t,e),Ql.set(e,t)),e}const ic=t=>Ql.get(t);function yI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Ln(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ln(o.result),c.oldVersion,c.newVersion,Ln(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const _I=["get","getKey","getAll","getAllKeys","count"],AI=["put","add","delete","clear"],oc=new Map;function hd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(oc.get(e))return oc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=AI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||_I.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return oc.set(e,i),i}pI(t=>({...t,get:(e,n,r)=>hd(e,n)||t.get(e,n,r),has:(e,n)=>!!hd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hc="@firebase/app",dd="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new Hl("@firebase/app"),II="@firebase/app-compat",TI="@firebase/analytics-compat",wI="@firebase/analytics",RI="@firebase/app-check-compat",SI="@firebase/app-check",CI="@firebase/auth",PI="@firebase/auth-compat",bI="@firebase/database",kI="@firebase/database-compat",DI="@firebase/functions",NI="@firebase/functions-compat",VI="@firebase/installations",OI="@firebase/installations-compat",MI="@firebase/messaging",xI="@firebase/messaging-compat",LI="@firebase/performance",UI="@firebase/performance-compat",BI="@firebase/remote-config",FI="@firebase/remote-config-compat",jI="@firebase/storage",qI="@firebase/storage-compat",HI="@firebase/firestore",QI="@firebase/firestore-compat",KI="firebase",WI="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc="[DEFAULT]",zI={[Hc]:"fire-core",[II]:"fire-core-compat",[wI]:"fire-analytics",[TI]:"fire-analytics-compat",[SI]:"fire-app-check",[RI]:"fire-app-check-compat",[CI]:"fire-auth",[PI]:"fire-auth-compat",[bI]:"fire-rtdb",[kI]:"fire-rtdb-compat",[DI]:"fire-fn",[NI]:"fire-fn-compat",[VI]:"fire-iid",[OI]:"fire-iid-compat",[MI]:"fire-fcm",[xI]:"fire-fcm-compat",[LI]:"fire-perf",[UI]:"fire-perf-compat",[BI]:"fire-rc",[FI]:"fire-rc-compat",[jI]:"fire-gcs",[qI]:"fire-gcs-compat",[HI]:"fire-fst",[QI]:"fire-fst-compat","fire-js":"fire-js",[KI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=new Map,Kc=new Map;function GI(t,e){try{t.container.addComponent(e)}catch(n){_r.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xr(t){const e=t.name;if(Kc.has(e))return _r.debug(`There were multiple attempts to register component ${e}.`),!1;Kc.set(e,t);for(const n of bo.values())GI(n,t);return!0}function Kl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Un=new _i("app","Firebase",JI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=WI;function Gp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Un.create("bad-app-name",{appName:String(s)});if(n||(n=Qp()),!n)throw Un.create("no-options");const i=bo.get(s);if(i){if(Po(n,i.options)&&Po(r,i.config))return i;throw Un.create("duplicate-app",{appName:s})}const o=new sI(s);for(const c of Kc.values())o.addComponent(c);const a=new YI(n,r,o);return bo.set(s,a),a}function Jp(t=Qc){const e=bo.get(t);if(!e&&t===Qc&&Qp())return Gp();if(!e)throw Un.create("no-app",{appName:t});return e}function Bn(t,e,n){var r;let s=(r=zI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_r.warn(a.join(" "));return}Xr(new yr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI="firebase-heartbeat-database",ZI=1,Xs="firebase-heartbeat-store";let ac=null;function Yp(){return ac||(ac=yI(XI,ZI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xs)}}}).catch(t=>{throw Un.create("idb-open",{originalErrorMessage:t.message})})),ac}async function $I(t){try{return await(await Yp()).transaction(Xs).objectStore(Xs).get(Xp(t))}catch(e){if(e instanceof An)_r.warn(e.message);else{const n=Un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_r.warn(n.message)}}}async function fd(t,e){try{const r=(await Yp()).transaction(Xs,"readwrite");await r.objectStore(Xs).put(e,Xp(t)),await r.done}catch(n){if(n instanceof An)_r.warn(n.message);else{const r=Un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_r.warn(r.message)}}}function Xp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT=1024,tT=30*24*60*60*1e3;class nT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=pd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=tT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=pd(),{heartbeatsToSend:r,unsentEntries:s}=rT(this._heartbeatsCache.heartbeats),i=Co(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function pd(){return new Date().toISOString().substring(0,10)}function rT(t,e=eT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),gd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),gd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wv()?zv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $I(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function gd(t){return Co(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(t){Xr(new yr("platform-logger",e=>new EI(e),"PRIVATE")),Xr(new yr("heartbeat",e=>new nT(e),"PRIVATE")),Bn(Hc,dd,t),Bn(Hc,dd,"esm2017"),Bn("fire-js","")}iT("");var oT="firebase",aT="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bn(oT,aT,"app");function Wl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Zp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cT=Zp,$p=new _i("auth","Firebase",Zp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=new Hl("@firebase/auth");function lT(t,...e){ko.logLevel<=se.WARN&&ko.warn(`Auth (${ls}): ${t}`,...e)}function lo(t,...e){ko.logLevel<=se.ERROR&&ko.error(`Auth (${ls}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t,...e){throw zl(t,...e)}function Jt(t,...e){return zl(t,...e)}function eg(t,e,n){const r=Object.assign(Object.assign({},cT()),{[e]:n});return new _i("auth","Firebase",r).create(e,{appName:t.name})}function uT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Rt(t,"argument-error"),eg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $p.create(t,...e)}function W(t,e,...n){if(!t)throw zl(e,...n)}function cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw lo(e),new Error(e)}function fn(t,e){t||cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function hT(){return md()==="http:"||md()==="https:"}function md(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hT()||Hv()||"connection"in navigator)?navigator.onLine:!0}function fT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n){this.shortDelay=e,this.longDelay=n,fn(n>e,"Short delay should be less than long delay!"),this.isMobile=qv()||Qv()}get(){return dT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(t,e){fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=new Ei(3e4,6e4);function zn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gn(t,e,n,r,s={}){return ng(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ai(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),tg.fetch()(rg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function ng(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},pT),e);try{const s=new yT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Gi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Gi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Gi(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw eg(t,u,l);Rt(t,u)}}catch(s){if(s instanceof An)throw s;Rt(t,"network-request-failed",{message:String(s)})}}async function vi(t,e,n,r,s={}){const i=await Gn(t,e,n,r,s);return"mfaPendingCredential"in i&&Rt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function rg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Gl(t.config,s):`${t.config.apiScheme}://${s}`}function mT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jt(this.auth,"network-request-failed")),gT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Jt(t,e,r);return s.customData._tokenResponse=n,s}function yd(t){return t!==void 0&&t.enterprise!==void 0}class _T{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return mT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function AT(t,e){return Gn(t,"GET","/v2/recaptchaConfig",zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ET(t,e){return Gn(t,"POST","/v1/accounts:delete",e)}async function vT(t,e){return Gn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function IT(t,e=!1){const n=dt(t),r=await n.getIdToken(e),s=Jl(r);W(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Us(cc(s.auth_time)),issuedAtTime:Us(cc(s.iat)),expirationTime:Us(cc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function cc(t){return Number(t)*1e3}function Jl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return lo("JWT malformed, contained fewer than 3 sections"),null;try{const s=qp(n);return s?JSON.parse(s):(lo("Failed to decode base64 JWT payload"),null)}catch(s){return lo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function TT(t){const e=Jl(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof An&&wT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function wT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Us(this.lastLoginAt),this.creationTime=Us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Zs(t,vT(n,{idToken:r}));W(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?PT(i.providerUserInfo):[],a=CT(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new sg(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function ST(t){const e=dt(t);await Do(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function CT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function PT(t){return t.map(e=>{var{providerId:n}=e,r=Wl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bT(t,e){const n=await ng(t,{},async()=>{const r=Ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=rg(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",tg.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kT(t,e){return Gn(t,"POST","/v2/accounts:revokeToken",zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):TT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await bT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new $s;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $s,this.toJSON())}_performRefresh(){return cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Wl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new RT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new sg(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Zs(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return IT(this,e)}reload(){return ST(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Do(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Zs(this,ET(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:B,emailVerified:V,isAnonymous:te,providerData:le,stsTokenManager:Re}=n;W(B&&Re,e,"internal-error");const J=$s.fromJSON(this.name,Re);W(typeof B=="string",e,"internal-error"),Sn(h,e.name),Sn(d,e.name),W(typeof V=="boolean",e,"internal-error"),W(typeof te=="boolean",e,"internal-error"),Sn(g,e.name),Sn(A,e.name),Sn(E,e.name),Sn(I,e.name),Sn(P,e.name),Sn(b,e.name);const he=new pr({uid:B,auth:e,email:d,emailVerified:V,displayName:h,isAnonymous:te,photoURL:A,phoneNumber:g,tenantId:E,stsTokenManager:J,createdAt:P,lastLoginAt:b});return le&&Array.isArray(le)&&(he.providerData=le.map(ae=>Object.assign({},ae))),I&&(he._redirectEventId=I),he}static async _fromIdTokenResponse(e,n,r=!1){const s=new $s;s.updateFromServerResponse(n);const i=new pr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Do(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d=new Map;function ln(t){fn(t instanceof Function,"Expected a class definition");let e=_d.get(t);return e?(fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_d.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ig.type="NONE";const Ad=ig;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(t,e,n){return`firebase:${t}:${e}:${n}`}class qr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=uo(this.userKey,s.apiKey,i),this.fullPersistenceKey=uo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qr(ln(Ad),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ln(Ad);const o=uo(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=pr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new qr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new qr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(og(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ug(e))return"Blackberry";if(hg(e))return"Webos";if(Yl(e))return"Safari";if((e.includes("chrome/")||ag(e))&&!e.includes("edge/"))return"Chrome";if(lg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function og(t=rt()){return/firefox\//i.test(t)}function Yl(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ag(t=rt()){return/crios\//i.test(t)}function cg(t=rt()){return/iemobile/i.test(t)}function lg(t=rt()){return/android/i.test(t)}function ug(t=rt()){return/blackberry/i.test(t)}function hg(t=rt()){return/webos/i.test(t)}function fa(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function DT(t=rt()){var e;return fa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NT(){return Kv()&&document.documentMode===10}function dg(t=rt()){return fa(t)||lg(t)||hg(t)||ug(t)||/windows phone/i.test(t)||cg(t)}function VT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t,e=[]){let n;switch(t){case"Browser":n=Ed(rt());break;case"Worker":n=`${Ed(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ls}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MT(t,e={}){return Gn(t,"GET","/v2/passwordPolicy",zn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=6;class LT{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:xT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vd(this),this.idTokenSubscription=new vd(this),this.beforeStateQueue=new OT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$p,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ln(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await qr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Do(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?dt(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MT(this),n=new LT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _i("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await kT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ln(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await qr.create(this,[ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&lT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Jn(t){return dt(t)}class vd{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zv(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function pg(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Jt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",BT().appendChild(r)})}function FT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const jT="https://www.google.com/recaptcha/enterprise.js?render=",qT="recaptcha-enterprise",HT="NO_RECAPTCHA";class QT{constructor(e){this.type=qT,this.auth=Jn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{AT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new _T(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;yd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(HT)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&yd(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}pg(jT+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Id(t,e,n,r=!1){const s=new QT(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function zc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Id(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Id(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(t,e){const n=Kl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Po(i,e??{}))return s;Rt(s,"already-initialized")}return n.initialize({options:e})}function WT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zT(t,e,n){const r=Jn(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=gg(e),{host:o,port:a}=GT(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||JT()}function gg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function GT(t){const e=gg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Td(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Td(o)}}}function Td(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function JT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return cn("not implemented")}_getIdTokenResponse(e){return cn("not implemented")}_linkToIdToken(e,n){return cn("not implemented")}_getReauthenticationResolver(e){return cn("not implemented")}}async function YT(t,e){return Gn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XT(t,e){return vi(t,"POST","/v1/accounts:signInWithPassword",zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZT(t,e){return vi(t,"POST","/v1/accounts:signInWithEmailLink",zn(t,e))}async function $T(t,e){return vi(t,"POST","/v1/accounts:signInWithEmailLink",zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Xl{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ei(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ei(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zc(e,n,"signInWithPassword",XT);case"emailLink":return ZT(e,{email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zc(e,r,"signUpPassword",YT);case"emailLink":return $T(e,{idToken:n,email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(t,e){return vi(t,"POST","/v1/accounts:signInWithIdp",zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="http://localhost";class Ar extends Xl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Wl(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ar(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hr(e,n)}buildRequest(){const e={requestUri:ew,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ai(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nw(t){const e=Cs(Ps(t)).link,n=e?Cs(Ps(e)).deep_link_id:null,r=Cs(Ps(t)).deep_link_id;return(r?Cs(Ps(r)).link:null)||r||n||e||t}class Zl{constructor(e){var n,r,s,i,o,a;const c=Cs(Ps(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=tw((s=c.mode)!==null&&s!==void 0?s:null);W(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=nw(e);try{return new Zl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this.providerId=us.PROVIDER_ID}static credential(e,n){return ei._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Zl.parseLink(n);return W(r,"argument-error"),ei._fromEmailAndCode(e,r.code,r.tenantId)}}us.PROVIDER_ID="password";us.EMAIL_PASSWORD_SIGN_IN_METHOD="password";us.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends $l{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Ii{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Ii{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ar._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.GOOGLE_SIGN_IN_METHOD="google.com";Dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Ii{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com";Nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Ii{constructor(){super("twitter.com")}static credential(e,n){return Ar._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.TWITTER_SIGN_IN_METHOD="twitter.com";Vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rw(t,e){return vi(t,"POST","/v1/accounts:signUp",zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await pr._fromIdTokenResponse(e,r,s),o=wd(r);return new Er({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=wd(r);return new Er({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function wd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No extends An{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,No.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new No(e,n,r,s)}}function mg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?No._fromErrorAndOperation(t,i,e,r):i})}async function sw(t,e,n=!1){const r=await Zs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Er._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iw(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Zs(t,mg(r,s,e,t),n);W(i.idToken,r,"internal-error");const o=Jl(i.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),Er._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Rt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yg(t,e,n=!1){const r="signIn",s=await mg(t,r,e),i=await Er._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function ow(t,e){return yg(Jn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _g(t){const e=Jn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jb(t,e,n){const r=Jn(t),o=await zc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rw).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&_g(t),c}),a=await Er._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function qb(t,e,n){return ow(dt(t),us.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_g(t),r})}function aw(t,e,n,r){return dt(t).onIdTokenChanged(e,n,r)}function cw(t,e,n){return dt(t).beforeAuthStateChanged(e,n)}function Ag(t,e,n,r){return dt(t).onAuthStateChanged(e,n,r)}function lw(t){return dt(t).signOut()}const Vo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vo,"1"),this.storage.removeItem(Vo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(){const t=rt();return Yl(t)||fa(t)}const hw=1e3,dw=10;class vg extends Eg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=uw()&&VT(),this.fallbackToPolling=dg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);NT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,dw):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},hw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vg.type="LOCAL";const fw=vg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig extends Eg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ig.type="SESSION";const Tg=Ig;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new pa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await pw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=eu("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return window}function mw(t){Yt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(){return typeof Yt().WorkerGlobalScope<"u"&&typeof Yt().importScripts=="function"}async function yw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _w(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Aw(){return wg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg="firebaseLocalStorageDb",Ew=1,Oo="firebaseLocalStorage",Sg="fbase_key";class Ti{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ga(t,e){return t.transaction([Oo],e?"readwrite":"readonly").objectStore(Oo)}function vw(){const t=indexedDB.deleteDatabase(Rg);return new Ti(t).toPromise()}function Gc(){const t=indexedDB.open(Rg,Ew);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Oo,{keyPath:Sg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Oo)?e(r):(r.close(),await vw(),e(await Gc()))})})}async function Rd(t,e,n){const r=ga(t,!0).put({[Sg]:e,value:n});return new Ti(r).toPromise()}async function Iw(t,e){const n=ga(t,!1).get(e),r=await new Ti(n).toPromise();return r===void 0?null:r.value}function Sd(t,e){const n=ga(t,!0).delete(e);return new Ti(n).toPromise()}const Tw=800,ww=3;class Cg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ww)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pa._getInstance(Aw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yw(),!this.activeServiceWorker)return;this.sender=new gw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_w()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gc();return await Rd(e,Vo,"1"),await Sd(e,Vo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Iw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ga(s,!1).getAll();return new Ti(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Tw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cg.type="LOCAL";const Rw=Cg;new Ei(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(t,e){return e?ln(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu extends Xl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Sw(t){return yg(t.auth,new tu(t),t.bypassAuthState)}function Cw(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),iw(n,new tu(t),t.bypassAuthState)}async function Pw(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),sw(n,new tu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sw;case"linkViaPopup":case"linkViaRedirect":return Pw;case"reauthViaPopup":case"reauthViaRedirect":return Cw;default:Rt(this.auth,"internal-error")}}resolve(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=new Ei(2e3,1e4);async function Hb(t,e,n){const r=Jn(t);uT(t,e,$l);const s=Pg(r,n);return new cr(r,"signInViaPopup",e,s).executeNotNull()}class cr extends bg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,cr.currentPopupAction&&cr.currentPopupAction.cancel(),cr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){fn(this.filter.length===1,"Popup operations only handle one event");const e=eu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bw.get())};e()}}cr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw="pendingRedirect",ho=new Map;class Dw extends bg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ho.get(this.auth._key());if(!e){try{const r=await Nw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ho.set(this.auth._key(),e)}return this.bypassAuthState||ho.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Nw(t,e){const n=Mw(e),r=Ow(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Vw(t,e){ho.set(t._key(),e)}function Ow(t){return ln(t._redirectPersistence)}function Mw(t){return uo(kw,t.config.apiKey,t.name)}async function xw(t,e,n=!1){const r=Jn(t),s=Pg(r,e),o=await new Dw(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=10*60*1e3;class Uw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Lw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cd(e))}saveEventToCache(e){this.cachedEventUids.add(Cd(e)),this.lastProcessedEventTime=Date.now()}}function Cd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Bw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fw(t,e={}){return Gn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qw=/^https?/;async function Hw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Fw(t);for(const n of e)try{if(Qw(n))return}catch{}Rt(t,"unauthorized-domain")}function Qw(t){const e=Wc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qw.test(n))return!1;if(jw.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=new Ei(3e4,6e4);function Pd(){const t=Yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ww(t){return new Promise((e,n)=>{var r,s,i;function o(){Pd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pd(),n(Jt(t,"network-request-failed"))},timeout:Kw.get()})}if(!((s=(r=Yt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Yt().gapi)===null||i===void 0)&&i.load)o();else{const a=FT("iframefcb");return Yt()[a]=()=>{gapi.load?o():n(Jt(t,"network-request-failed"))},pg(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw fo=null,e})}let fo=null;function zw(t){return fo=fo||Ww(t),fo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=new Ei(5e3,15e3),Jw="__/auth/iframe",Yw="emulator/auth/iframe",Xw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $w(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gl(e,Yw):`https://${t.config.authDomain}/${Jw}`,r={apiKey:e.apiKey,appName:t.name,v:ls},s=Zw.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ai(r).slice(1)}`}async function e0(t){const e=await zw(t),n=Yt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:$w(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Jt(t,"network-request-failed"),a=Yt().setTimeout(()=>{i(o)},Gw.get());function c(){Yt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},n0=500,r0=600,s0="_blank",i0="http://localhost";class bd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function o0(t,e,n,r=n0,s=r0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},t0),{width:r.toString(),height:s.toString(),top:i,left:o}),l=rt().toLowerCase();n&&(a=ag(l)?s0:n),og(l)&&(e=e||i0,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,A])=>`${d}${g}=${A},`,"");if(DT(l)&&a!=="_self")return a0(e||"",a),new bd(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new bd(h)}function a0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0="__/auth/handler",l0="emulator/auth/handler",u0=encodeURIComponent("fac");async function kd(t,e,n,r,s,i){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ls,eventId:s};if(e instanceof $l){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Xv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Ii){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${u0}=${encodeURIComponent(c)}`:"";return`${h0(t)}?${Ai(a).slice(1)}${l}`}function h0({config:t}){return t.emulator?Gl(t,l0):`https://${t.authDomain}/${c0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="webStorageSupport";class d0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tg,this._completeRedirectFn=xw,this._overrideRedirectResult=Vw}async _openPopup(e,n,r,s){var i;fn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await kd(e,n,r,Wc(),s);return o0(e,o,eu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await kd(e,n,r,Wc(),s);return mw(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(fn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await e0(e),r=new Uw(e);return n.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(lc,{type:lc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[lc];o!==void 0&&n(!!o),Rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Hw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dg()||Yl()||fa()}}const f0=d0;var Dd="@firebase/auth",Nd="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function m0(t){Xr(new yr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fg(t)},l=new UT(r,s,i,c);return WT(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xr(new yr("auth-internal",e=>{const n=Jn(e.getProvider("auth").getImmediate());return(r=>new p0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn(Dd,Nd,g0(t)),Bn(Dd,Nd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=5*60,_0=Kp("authIdTokenMaxAge")||y0;let Vd=null;const A0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_0)return;const s=n==null?void 0:n.token;Vd!==s&&(Vd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function E0(t=Jp()){const e=Kl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=KT(t,{popupRedirectResolver:f0,persistence:[Rw,fw,Tg]}),r=Kp("authTokenSyncURL");if(r){const i=A0(r);cw(n,i,()=>i(n.currentUser)),aw(n,o=>i(o))}const s=Hp("auth");return s&&zT(n,`http://${s}`),n}m0("Browser");var v0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,nu=nu||{},G=v0||self;function ma(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function wi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function I0(t){return Object.prototype.hasOwnProperty.call(t,uc)&&t[uc]||(t[uc]=++T0)}var uc="closure_uid_"+(1e9*Math.random()>>>0),T0=0;function w0(t,e,n){return t.call.apply(t.bind,arguments)}function R0(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function tt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?tt=w0:tt=R0,tt.apply(null,arguments)}function Ji(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function He(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Yn(){this.s=this.s,this.o=this.o}var S0=0;Yn.prototype.s=!1;Yn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),S0!=0)&&I0(this)};Yn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Dg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ru(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Od(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ma(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function nt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}nt.prototype.h=function(){this.defaultPrevented=!0};var C0=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};G.addEventListener("test",n,e),G.removeEventListener("test",n,e)}catch{}return t}();function ti(t){return/^[\s\xa0]*$/.test(t)}function ya(){var t=G.navigator;return t&&(t=t.userAgent)?t:""}function Kt(t){return ya().indexOf(t)!=-1}function su(t){return su[" "](t),t}su[" "]=function(){};function P0(t,e){var n=ER;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var b0=Kt("Opera"),Zr=Kt("Trident")||Kt("MSIE"),Ng=Kt("Edge"),Jc=Ng||Zr,Vg=Kt("Gecko")&&!(ya().toLowerCase().indexOf("webkit")!=-1&&!Kt("Edge"))&&!(Kt("Trident")||Kt("MSIE"))&&!Kt("Edge"),k0=ya().toLowerCase().indexOf("webkit")!=-1&&!Kt("Edge");function Og(){var t=G.document;return t?t.documentMode:void 0}var Yc;e:{var hc="",dc=function(){var t=ya();if(Vg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ng)return/Edge\/([\d\.]+)/.exec(t);if(Zr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(k0)return/WebKit\/(\S+)/.exec(t);if(b0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(dc&&(hc=dc?dc[1]:""),Zr){var fc=Og();if(fc!=null&&fc>parseFloat(hc)){Yc=String(fc);break e}}Yc=hc}var Xc;if(G.document&&Zr){var Md=Og();Xc=Md||parseInt(Yc,10)||void 0}else Xc=void 0;var D0=Xc;function ni(t,e){if(nt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Vg){e:{try{su(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:N0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ni.$.h.call(this)}}He(ni,nt);var N0={2:"touch",3:"pen",4:"mouse"};ni.prototype.h=function(){ni.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ri="closure_listenable_"+(1e6*Math.random()|0),V0=0;function O0(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++V0,this.fa=this.ia=!1}function _a(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function iu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function M0(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Mg(t){const e={};for(const n in t)e[n]=t[n];return e}const xd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<xd.length;i++)n=xd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Aa(t){this.src=t,this.g={},this.h=0}Aa.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=$c(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new O0(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Zc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Dg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(_a(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function $c(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var ou="closure_lm_"+(1e6*Math.random()|0),pc={};function Lg(t,e,n,r,s){if(r&&r.once)return Bg(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Lg(t,e[i],n,r,s);return null}return n=lu(n),t&&t[Ri]?t.O(e,n,wi(r)?!!r.capture:!!r,s):Ug(t,e,n,!1,r,s)}function Ug(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=wi(s)?!!s.capture:!!s,a=cu(t);if(a||(t[ou]=a=new Aa(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=x0(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)C0||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(jg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function x0(){function t(n){return e.call(t.src,t.listener,n)}const e=L0;return t}function Bg(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Bg(t,e[i],n,r,s);return null}return n=lu(n),t&&t[Ri]?t.P(e,n,wi(r)?!!r.capture:!!r,s):Ug(t,e,n,!0,r,s)}function Fg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Fg(t,e[i],n,r,s);else r=wi(r)?!!r.capture:!!r,n=lu(n),t&&t[Ri]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=$c(i,n,r,s),-1<n&&(_a(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=cu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=$c(e,n,r,s)),(n=-1<t?e[t]:null)&&au(n))}function au(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ri])Zc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(jg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=cu(e))?(Zc(n,t),n.h==0&&(n.src=null,e[ou]=null)):_a(t)}}}function jg(t){return t in pc?pc[t]:pc[t]="on"+t}function L0(t,e){if(t.fa)t=!0;else{e=new ni(e,this);var n=t.listener,r=t.la||t.src;t.ia&&au(t),t=n.call(r,e)}return t}function cu(t){return t=t[ou],t instanceof Aa?t:null}var gc="__closure_events_fn_"+(1e9*Math.random()>>>0);function lu(t){return typeof t=="function"?t:(t[gc]||(t[gc]=function(e){return t.handleEvent(e)}),t[gc])}function qe(){Yn.call(this),this.i=new Aa(this),this.S=this,this.J=null}He(qe,Yn);qe.prototype[Ri]=!0;qe.prototype.removeEventListener=function(t,e,n,r){Fg(this,t,e,n,r)};function Ge(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new nt(e,t);else if(e instanceof nt)e.target=e.target||t;else{var s=e;e=new nt(r,t),xg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Yi(o,r,!0,e)&&s}if(o=e.g=t,s=Yi(o,r,!0,e)&&s,s=Yi(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Yi(o,r,!1,e)&&s}qe.prototype.N=function(){if(qe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)_a(n[r]);delete t.g[e],t.h--}}this.J=null};qe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};qe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Yi(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Zc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var uu=G.JSON.stringify;class U0{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function B0(){var t=hu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class F0{constructor(){this.h=this.g=null}add(e,n){const r=qg.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var qg=new U0(()=>new j0,t=>t.reset());class j0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function q0(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function H0(t){G.setTimeout(()=>{throw t},0)}let ri,si=!1,hu=new F0,Hg=()=>{const t=G.Promise.resolve(void 0);ri=()=>{t.then(Q0)}};var Q0=()=>{for(var t;t=B0();){try{t.h.call(t.g)}catch(n){H0(n)}var e=qg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}si=!1};function Ea(t,e){qe.call(this),this.h=t||1,this.g=e||G,this.j=tt(this.qb,this),this.l=Date.now()}He(Ea,qe);N=Ea.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ge(this,"tick"),this.ga&&(du(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function du(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){Ea.$.N.call(this),du(this),delete this.g};function fu(t,e,n){if(typeof t=="function")n&&(t=tt(t,n));else if(t&&typeof t.handleEvent=="function")t=tt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function Qg(t){t.g=fu(()=>{t.g=null,t.i&&(t.i=!1,Qg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class K0 extends Yn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Qg(this)}N(){super.N(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ii(t){Yn.call(this),this.h=t,this.g={}}He(ii,Yn);var Ld=[];function Kg(t,e,n,r){Array.isArray(n)||(n&&(Ld[0]=n.toString()),n=Ld);for(var s=0;s<n.length;s++){var i=Lg(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Wg(t){iu(t.g,function(e,n){this.g.hasOwnProperty(n)&&au(e)},t),t.g={}}ii.prototype.N=function(){ii.$.N.call(this),Wg(this)};ii.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function va(){this.g=!0}va.prototype.Ea=function(){this.g=!1};function W0(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function z0(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function xr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+J0(t,n)+(r?" "+r:"")})}function G0(t,e){t.info(function(){return"TIMEOUT: "+e})}va.prototype.info=function(){};function J0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return uu(n)}catch{return e}}var wr={},Ud=null;function Ia(){return Ud=Ud||new qe}wr.Ta="serverreachability";function zg(t){nt.call(this,wr.Ta,t)}He(zg,nt);function oi(t){const e=Ia();Ge(e,new zg(e))}wr.STAT_EVENT="statevent";function Gg(t,e){nt.call(this,wr.STAT_EVENT,t),this.stat=e}He(Gg,nt);function at(t){const e=Ia();Ge(e,new Gg(e,t))}wr.Ua="timingevent";function Jg(t,e){nt.call(this,wr.Ua,t),this.size=e}He(Jg,nt);function Si(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var Ta={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Yg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function pu(){}pu.prototype.h=null;function Bd(t){return t.h||(t.h=t.i())}function Xg(){}var Ci={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function gu(){nt.call(this,"d")}He(gu,nt);function mu(){nt.call(this,"c")}He(mu,nt);var el;function wa(){}He(wa,pu);wa.prototype.g=function(){return new XMLHttpRequest};wa.prototype.i=function(){return{}};el=new wa;function Pi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ii(this),this.P=Y0,t=Jc?125:void 0,this.V=new Ea(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Zg}function Zg(){this.i=null,this.g="",this.h=!1}var Y0=45e3,$g={},tl={};N=Pi.prototype;N.setTimeout=function(t){this.P=t};function nl(t,e,n){t.L=1,t.A=Sa(pn(e)),t.u=n,t.S=!0,em(t,null)}function em(t,e){t.G=Date.now(),bi(t),t.B=pn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),cm(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Zg,t.g=bm(t.l,n?e:null,!t.u),0<t.O&&(t.M=new K0(tt(t.Pa,t,t.g),t.O)),Kg(t.U,t.g,"readystatechange",t.nb),e=t.I?Mg(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),oi(),W0(t.j,t.v,t.B,t.m,t.W,t.u)}N.nb=function(t){t=t.target;const e=this.M;e&&Wt(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const u=Wt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Jc||this.g&&(this.h.h||this.g.ja()||Hd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?oi(3):oi(2)),Ra(this);var n=this.g.da();this.ca=n;t:if(tm(this)){var r=Hd(this.g);t="";var s=r.length,i=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){lr(this),Bs(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,z0(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ti(a)){var l=a;break t}}l=null}if(n=l)xr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rl(this,n);else{this.i=!1,this.s=3,at(12),lr(this),Bs(this);break e}}this.S?(nm(this,u,o),Jc&&this.i&&u==3&&(Kg(this.U,this.V,"tick",this.mb),this.V.start())):(xr(this.j,this.m,o,null),rl(this,o)),u==4&&lr(this),this.i&&!this.J&&(u==4?Rm(this.l,this):(this.i=!1,bi(this)))}else yR(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),lr(this),Bs(this)}}}catch{}finally{}};function tm(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function nm(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=X0(t,n),s==tl){e==4&&(t.s=4,at(14),r=!1),xr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==$g){t.s=4,at(15),xr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else xr(t.j,t.m,s,null),rl(t,s);tm(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,at(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Iu(e),e.M=!0,at(11))):(xr(t.j,t.m,n,"[Invalid Chunked Response]"),lr(t),Bs(t))}N.mb=function(){if(this.g){var t=Wt(this.g),e=this.g.ja();this.o<e.length&&(Ra(this),nm(this,t,e),this.i&&t!=4&&bi(this))}};function X0(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?tl:(n=Number(e.substring(n,r)),isNaN(n)?$g:(r+=1,r+n>e.length?tl:(e=e.slice(r,r+n),t.o=r+n,e)))}N.cancel=function(){this.J=!0,lr(this)};function bi(t){t.Y=Date.now()+t.P,rm(t,t.P)}function rm(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Si(tt(t.lb,t),e)}function Ra(t){t.C&&(G.clearTimeout(t.C),t.C=null)}N.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(G0(this.j,this.B),this.L!=2&&(oi(),at(17)),lr(this),this.s=2,Bs(this)):rm(this,this.Y-t)};function Bs(t){t.l.H==0||t.J||Rm(t.l,t)}function lr(t){Ra(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,du(t.V),Wg(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function rl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||sl(n.i,t))){if(!t.K&&sl(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Lo(n),ka(n);else break e;vu(n),at(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Si(tt(n.ib,n),6e3));if(1>=hm(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ur(n,11)}else if((t.K||n.g==t)&&Lo(n),!ti(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const A=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(A){var i=r.i;i.g||A.indexOf("spdy")==-1&&A.indexOf("quic")==-1&&A.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(yu(i,i.h),i.h=null))}if(r.F){const E=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.Da=E,Ce(r.I,r.F,E))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Pm(r,r.J?r.pa:null,r.Y),o.K){dm(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(Ra(a),bi(a)),r.g=o}else Tm(r);0<n.j.length&&Da(n)}else l[0]!="stop"&&l[0]!="close"||ur(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ur(n,7):Eu(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}oi(4)}catch{}}function Z0(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ma(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function $0(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ma(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function sm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ma(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=$0(t),r=Z0(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var im=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function gr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof gr){this.h=t.h,Mo(this,t.j),this.s=t.s,this.g=t.g,xo(this,t.m),this.l=t.l;var e=t.i,n=new ai;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Fd(this,n),this.o=t.o}else t&&(e=String(t).match(im))?(this.h=!1,Mo(this,e[1]||"",!0),this.s=bs(e[2]||""),this.g=bs(e[3]||"",!0),xo(this,e[4]),this.l=bs(e[5]||"",!0),Fd(this,e[6]||"",!0),this.o=bs(e[7]||"")):(this.h=!1,this.i=new ai(null,this.h))}gr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ks(e,jd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ks(e,jd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ks(n,n.charAt(0)=="/"?rR:nR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ks(n,iR)),t.join("")};function pn(t){return new gr(t)}function Mo(t,e,n){t.j=n?bs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function xo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Fd(t,e,n){e instanceof ai?(t.i=e,oR(t.i,t.h)):(n||(e=ks(e,sR)),t.i=new ai(e,t.h))}function Ce(t,e,n){t.i.set(e,n)}function Sa(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function bs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ks(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,tR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function tR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var jd=/[#\/\?@]/g,nR=/[#\?:]/g,rR=/[#\?]/g,sR=/[#\?@]/g,iR=/#/g;function ai(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Xn(t){t.g||(t.g=new Map,t.h=0,t.i&&eR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=ai.prototype;N.add=function(t,e){Xn(this),this.i=null,t=hs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function om(t,e){Xn(t),e=hs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function am(t,e){return Xn(t),e=hs(t,e),t.g.has(e)}N.forEach=function(t,e){Xn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};N.ta=function(){Xn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};N.Z=function(t){Xn(this);let e=[];if(typeof t=="string")am(this,t)&&(e=e.concat(this.g.get(hs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return Xn(this),this.i=null,t=hs(this,t),am(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function cm(t,e,n){om(t,e),0<n.length&&(t.i=null,t.g.set(hs(t,e),ru(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function hs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function oR(t,e){e&&!t.j&&(Xn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(om(this,r),cm(this,s,n))},t)),t.j=e}var aR=class{constructor(t,e){this.g=t,this.map=e}};function lm(t){this.l=t||cR,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ka&&G.g.Ka()&&G.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cR=10;function um(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function hm(t){return t.h?1:t.g?t.g.size:0}function sl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function yu(t,e){t.g?t.g.add(e):t.h=e}function dm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}lm.prototype.cancel=function(){if(this.i=fm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function fm(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return ru(t.i)}var lR=class{stringify(t){return G.JSON.stringify(t,void 0)}parse(t){return G.JSON.parse(t,void 0)}};function uR(){this.g=new lR}function hR(t,e,n){const r=n||"";try{sm(t,function(s,i){let o=s;wi(s)&&(o=uu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function dR(t,e){const n=new va;if(G.Image){const r=new Image;r.onload=Ji(Xi,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ji(Xi,n,r,"TestLoadImage: error",!1,e),r.onabort=Ji(Xi,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ji(Xi,n,r,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Xi(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ca(t){this.l=t.ec||null,this.j=t.ob||!1}He(Ca,pu);Ca.prototype.g=function(){return new Pa(this.l,this.j)};Ca.prototype.i=function(t){return function(){return t}}({});function Pa(t,e){qe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=_u,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}He(Pa,qe);var _u=0;N=Pa.prototype;N.open=function(t,e){if(this.readyState!=_u)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ci(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||G).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ki(this)),this.readyState=_u};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ci(this)),this.g&&(this.readyState=3,ci(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;pm(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function pm(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ki(this):ci(this),this.readyState==3&&pm(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,ki(this))};N.Ya=function(t){this.g&&(this.response=t,ki(this))};N.ka=function(){this.g&&ki(this)};function ki(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ci(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ci(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Pa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var fR=G.JSON.parse;function ke(t){qe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=gm,this.L=this.M=!1}He(ke,qe);var gm="",pR=/^https?$/i,gR=["POST","PUT"];N=ke.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():el.g(),this.C=this.u?Bd(this.u):Bd(el),this.g.onreadystatechange=tt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){qd(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=G.FormData&&t instanceof G.FormData,!(0<=Dg(gR,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{_m(this),0<this.B&&((this.L=mR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=tt(this.ua,this)):this.A=fu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){qd(this,i)}};function mR(t){return Zr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof nu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ge(this,"timeout"),this.abort(8))};function qd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,mm(t),ba(t)}function mm(t){t.F||(t.F=!0,Ge(t,"complete"),Ge(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ge(this,"complete"),Ge(this,"abort"),ba(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ba(this,!0)),ke.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?ym(this):this.kb())};N.kb=function(){ym(this)};function ym(t){if(t.h&&typeof nu<"u"&&(!t.C[1]||Wt(t)!=4||t.da()!=2)){if(t.v&&Wt(t)==4)fu(t.La,0,t);else if(Ge(t,"readystatechange"),Wt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(im)[1]||null;!s&&G.self&&G.self.location&&(s=G.self.location.protocol.slice(0,-1)),r=!pR.test(s?s.toLowerCase():"")}n=r}if(n)Ge(t,"complete"),Ge(t,"success");else{t.m=6;try{var i=2<Wt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",mm(t)}}finally{ba(t)}}}}function ba(t,e){if(t.g){_m(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ge(t,"ready");try{n.onreadystatechange=r}catch{}}}function _m(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}N.isActive=function(){return!!this.g};function Wt(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),fR(e)}};function Hd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case gm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function yR(t){const e={};t=(t.g&&2<=Wt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ti(t[r]))continue;var n=q0(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}M0(e,function(r){return r.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Am(t){let e="";return iu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Au(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Am(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ce(t,e,n))}function Is(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Em(t){this.Ga=0,this.j=[],this.l=new va,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Is("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Is("baseRetryDelayMs",5e3,t),this.hb=Is("retryDelaySeedMs",1e4,t),this.eb=Is("forwardChannelMaxRetries",2,t),this.xa=Is("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new lm(t&&t.concurrentRequestLimit),this.Ja=new uR,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=Em.prototype;N.ra=8;N.H=1;function Eu(t){if(vm(t),t.H==3){var e=t.W++,n=pn(t.I);if(Ce(n,"SID",t.K),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),Di(t,n),e=new Pi(t,t.l,e),e.L=2,e.A=Sa(pn(n)),n=!1,G.navigator&&G.navigator.sendBeacon)try{n=G.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&G.Image&&(new Image().src=e.A,n=!0),n||(e.g=bm(e.l,null),e.g.ha(e.A)),e.G=Date.now(),bi(e)}Cm(t)}function ka(t){t.g&&(Iu(t),t.g.cancel(),t.g=null)}function vm(t){ka(t),t.u&&(G.clearTimeout(t.u),t.u=null),Lo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function Da(t){if(!um(t.i)&&!t.m){t.m=!0;var e=t.Na;ri||Hg(),si||(ri(),si=!0),hu.add(e,t),t.C=0}}function _R(t,e){return hm(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Si(tt(t.Na,t,e),Sm(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Pi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Mg(i),xg(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Im(this,s,e),n=pn(this.I),Ce(n,"RID",t),Ce(n,"CVER",22),this.F&&Ce(n,"X-HTTP-Session-Id",this.F),Di(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Am(i)))+"&"+e:this.o&&Au(n,this.o,i)),yu(this.i,s),this.bb&&Ce(n,"TYPE","init"),this.P?(Ce(n,"$req",e),Ce(n,"SID","null"),s.aa=!0,nl(s,n,null)):nl(s,n,e),this.H=2}}else this.H==3&&(t?Qd(this,t):this.j.length==0||um(this.i)||Qd(this))};function Qd(t,e){var n;e?n=e.m:n=t.W++;const r=pn(t.I);Ce(r,"SID",t.K),Ce(r,"RID",n),Ce(r,"AID",t.V),Di(t,r),t.o&&t.s&&Au(r,t.o,t.s),n=new Pi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Im(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),yu(t.i,n),nl(n,r,e)}function Di(t,e){t.na&&iu(t.na,function(n,r){Ce(e,r,n)}),t.h&&sm({},function(n,r){Ce(e,r,n)})}function Im(t,e,n){n=Math.min(t.j.length,n);var r=t.h?tt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{hR(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Tm(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ri||Hg(),si||(ri(),si=!0),hu.add(e,t),t.A=0}}function vu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Si(tt(t.Ma,t),Sm(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,wm(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Si(tt(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,at(10),ka(this),wm(this))};function Iu(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function wm(t){t.g=new Pi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=pn(t.wa);Ce(e,"RID","rpc"),Ce(e,"SID",t.K),Ce(e,"AID",t.V),Ce(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ce(e,"TO",t.qa),Ce(e,"TYPE","xmlhttp"),Di(t,e),t.o&&t.s&&Au(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Sa(pn(e)),n.u=null,n.S=!0,em(n,t)}N.ib=function(){this.v!=null&&(this.v=null,ka(this),vu(this),at(19))};function Lo(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function Rm(t,e){var n=null;if(t.g==e){Lo(t),Iu(t),t.g=null;var r=2}else if(sl(t.i,e))n=e.F,dm(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=Ia(),Ge(r,new Jg(r,n)),Da(t)}else Tm(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&_R(t,e)||r==2&&vu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:ur(t,5);break;case 4:ur(t,10);break;case 3:ur(t,6);break;default:ur(t,2)}}}function Sm(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ur(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=tt(t.pb,t);n||(n=new gr("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||Mo(n,"https"),Sa(n)),dR(n.toString(),r)}else at(2);t.H=0,t.h&&t.h.za(e),Cm(t),vm(t)}N.pb=function(t){t?(this.l.info("Successfully pinged google.com"),at(2)):(this.l.info("Failed to ping google.com"),at(1))};function Cm(t){if(t.H=0,t.ma=[],t.h){const e=fm(t.i);(e.length!=0||t.j.length!=0)&&(Od(t.ma,e),Od(t.ma,t.j),t.i.i.length=0,ru(t.j),t.j.length=0),t.h.ya()}}function Pm(t,e,n){var r=n instanceof gr?pn(n):new gr(n);if(r.g!="")e&&(r.g=e+"."+r.g),xo(r,r.m);else{var s=G.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new gr(null);r&&Mo(i,r),e&&(i.g=e),s&&xo(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Ce(r,n,e),Ce(r,"VER",t.ra),Di(t,r),r}function bm(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new ke(new Ca({ob:n})):new ke(t.va),e.Oa(t.J),e}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function km(){}N=km.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function Uo(){if(Zr&&!(10<=Number(D0)))throw Error("Environmental error: no available transport.")}Uo.prototype.g=function(t,e){return new Et(t,e)};function Et(t,e){qe.call(this),this.g=new Em(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ti(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ti(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ds(this)}He(Et,qe);Et.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;at(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Pm(t,null,t.Y),Da(t)};Et.prototype.close=function(){Eu(this.g)};Et.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=uu(t),t=n);e.j.push(new aR(e.fb++,t)),e.H==3&&Da(e)};Et.prototype.N=function(){this.g.h=null,delete this.j,Eu(this.g),delete this.g,Et.$.N.call(this)};function Dm(t){gu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}He(Dm,gu);function Nm(){mu.call(this),this.status=1}He(Nm,mu);function ds(t){this.g=t}He(ds,km);ds.prototype.Ba=function(){Ge(this.g,"a")};ds.prototype.Aa=function(t){Ge(this.g,new Dm(t))};ds.prototype.za=function(t){Ge(this.g,new Nm)};ds.prototype.ya=function(){Ge(this.g,"b")};function AR(){this.blockSize=-1}function Lt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}He(Lt,AR);Lt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function mc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Lt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)mc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){mc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){mc(this,r),s=0;break}}this.h=s,this.i+=e};Lt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ye(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var ER={};function Tu(t){return-128<=t&&128>t?P0(t,function(e){return new ye([e|0],0>e?-1:0)}):new ye([t|0],0>t?-1:0)}function zt(t){if(isNaN(t)||!isFinite(t))return Qr;if(0>t)return We(zt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=il;return new ye(e,0)}function Vm(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return We(Vm(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=zt(Math.pow(e,8)),r=Qr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=zt(Math.pow(e,i)),r=r.R(i).add(zt(o))):(r=r.R(n),r=r.add(zt(o)))}return r}var il=4294967296,Qr=Tu(0),ol=Tu(1),Kd=Tu(16777216);N=ye.prototype;N.ea=function(){if(It(this))return-We(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:il+r)*e,e*=il}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(un(this))return"0";if(It(this))return"-"+We(this).toString(t);for(var e=zt(Math.pow(t,6)),n=this,r="";;){var s=Fo(n,e).g;n=Bo(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,un(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function un(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function It(t){return t.h==-1}N.X=function(t){return t=Bo(this,t),It(t)?-1:un(t)?0:1};function We(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ye(n,~t.h).add(ol)}N.abs=function(){return It(this)?We(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ye(n,n[n.length-1]&-2147483648?-1:0)};function Bo(t,e){return t.add(We(e))}N.R=function(t){if(un(this)||un(t))return Qr;if(It(this))return It(t)?We(this).R(We(t)):We(We(this).R(t));if(It(t))return We(this.R(We(t)));if(0>this.X(Kd)&&0>t.X(Kd))return zt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,Zi(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Zi(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Zi(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Zi(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ye(n,0)};function Zi(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ts(t,e){this.g=t,this.h=e}function Fo(t,e){if(un(e))throw Error("division by zero");if(un(t))return new Ts(Qr,Qr);if(It(t))return e=Fo(We(t),e),new Ts(We(e.g),We(e.h));if(It(e))return e=Fo(t,We(e)),new Ts(We(e.g),e.h);if(30<t.g.length){if(It(t)||It(e))throw Error("slowDivide_ only works with positive integers.");for(var n=ol,r=e;0>=r.X(t);)n=Wd(n),r=Wd(r);var s=Dr(n,1),i=Dr(r,1);for(r=Dr(r,2),n=Dr(n,2);!un(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Dr(r,1),n=Dr(n,1)}return e=Bo(t,s.R(e)),new Ts(s,e)}for(s=Qr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=zt(n),o=i.R(e);It(o)||0<o.X(t);)n-=r,i=zt(n),o=i.R(e);un(i)&&(i=ol),s=s.add(i),t=Bo(t,o)}return new Ts(s,t)}N.gb=function(t){return Fo(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ye(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ye(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ye(n,this.h^t.h)};function Wd(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ye(n,t.h)}function Dr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ye(s,t.h)}Uo.prototype.createWebChannel=Uo.prototype.g;Et.prototype.send=Et.prototype.u;Et.prototype.open=Et.prototype.m;Et.prototype.close=Et.prototype.close;Ta.NO_ERROR=0;Ta.TIMEOUT=8;Ta.HTTP_ERROR=6;Yg.COMPLETE="complete";Xg.EventType=Ci;Ci.OPEN="a";Ci.CLOSE="b";Ci.ERROR="c";Ci.MESSAGE="d";qe.prototype.listen=qe.prototype.O;ke.prototype.listenOnce=ke.prototype.P;ke.prototype.getLastError=ke.prototype.Sa;ke.prototype.getLastErrorCode=ke.prototype.Ia;ke.prototype.getStatus=ke.prototype.da;ke.prototype.getResponseJson=ke.prototype.Wa;ke.prototype.getResponseText=ke.prototype.ja;ke.prototype.send=ke.prototype.ha;ke.prototype.setWithCredentials=ke.prototype.Oa;Lt.prototype.digest=Lt.prototype.l;Lt.prototype.reset=Lt.prototype.reset;Lt.prototype.update=Lt.prototype.j;ye.prototype.add=ye.prototype.add;ye.prototype.multiply=ye.prototype.R;ye.prototype.modulo=ye.prototype.gb;ye.prototype.compare=ye.prototype.X;ye.prototype.toNumber=ye.prototype.ea;ye.prototype.toString=ye.prototype.toString;ye.prototype.getBits=ye.prototype.D;ye.fromNumber=zt;ye.fromString=Vm;var vR=function(){return new Uo},IR=function(){return Ia()},yc=Ta,TR=Yg,wR=wr,zd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},$i=Xg,RR=ke,SR=Lt,Kr=ye;const Gd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new Hl("@firebase/firestore");function ws(){return vr.logLevel}function x(t,...e){if(vr.logLevel<=se.DEBUG){const n=e.map(wu);vr.debug(`Firestore (${fs}): ${t}`,...n)}}function gn(t,...e){if(vr.logLevel<=se.ERROR){const n=e.map(wu);vr.error(`Firestore (${fs}): ${t}`,...n)}}function $r(t,...e){if(vr.logLevel<=se.WARN){const n=e.map(wu);vr.warn(`Firestore (${fs}): ${t}`,...n)}}function wu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t="Unexpected state"){const e=`FIRESTORE (${fs}) INTERNAL ASSERTION FAILED: `+t;throw gn(e),new Error(e)}function we(t,e){t||z()}function $(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends An{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class CR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class PR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bR{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new dn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new dn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string"),new Om(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new Ze(e)}}class kR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class DR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new kR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class NR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class VR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string"),this.R=n.token,new NR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=OR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function es(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ue(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Ue(0,0))}static max(){return new Y(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n,r){n===void 0?n=0:n>e.length&&z(),r===void 0?r=e.length-n:r>e.length-n&&z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return li.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof li?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Pe extends li{construct(e,n,r){return new Pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const MR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends li{construct(e,n,r){return new ze(e,n,r)}static isValidIdentifier(e){return MR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new j(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new j(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Pe.fromString(e))}static fromName(e){return new K(Pe.fromString(e).popFirst(5))}static empty(){return new K(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Pe(e.slice()))}}function xR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(r===1e9?new Ue(n+1,0):new Ue(n,r));return new Qn(s,K.empty(),e)}function LR(t){return new Qn(t.readTime,t.key,-1)}class Qn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Qn(Y.min(),K.empty(),-1)}static max(){return new Qn(Y.max(),K.empty(),-1)}}function UR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class FR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==BR)throw t;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(s=>s?R.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new R((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new R((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Vi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Ru._e=-1;function Na(t){return t==null}function jo(t){return t===0&&1/t==-1/0}function jR(t){return typeof t=="number"&&Number.isInteger(t)&&!jo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ps(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eo(this.root,e,this.comparator,!1)}getReverseIterator(){return new eo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eo(this.root,e,this.comparator,!0)}}class eo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ke.RED,this.left=s??Ke.EMPTY,this.right=i??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ke(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ke.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ke(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yd(this.data.getIterator())}getIteratorFrom(e){return new Yd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class Yd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new Je(ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return es(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Lm("Invalid base64 string: "+i):i}}(e);return new st(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const qR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kn(t){if(we(!!t),typeof t=="string"){let e=0;const n=qR.exec(t);if(we(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ir(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Cu(t){const e=t.mapValue.fields.__previous_value__;return Su(e)?Cu(e):e}function ui(t){const e=Kn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class hi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new hi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof hi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Tr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Su(t)?4:QR(t)?9007199254740991:10:z()}function tn(t,e){if(t===e)return!0;const n=Tr(t);if(n!==Tr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ui(t).isEqual(ui(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Kn(s.timestampValue),a=Kn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ir(s.bytesValue).isEqual(Ir(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Me(s.geoPointValue.latitude)===Me(i.geoPointValue.latitude)&&Me(s.geoPointValue.longitude)===Me(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Me(s.integerValue)===Me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Me(s.doubleValue),a=Me(i.doubleValue);return o===a?jo(o)===jo(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return es(t.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Jd(o)!==Jd(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!tn(o[c],a[c])))return!1;return!0}(t,e);default:return z()}}function di(t,e){return(t.values||[]).find(n=>tn(n,e))!==void 0}function ts(t,e){if(t===e)return 0;const n=Tr(t),r=Tr(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Me(i.integerValue||i.doubleValue),c=Me(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Xd(t.timestampValue,e.timestampValue);case 4:return Xd(ui(t),ui(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Ir(i),c=Ir(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=de(a[l],c[l]);if(u!==0)return u}return de(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=de(Me(i.latitude),Me(o.latitude));return a!==0?a:de(Me(i.longitude),Me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=ts(a[l],c[l]);if(u)return u}return de(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===to.mapValue&&o===to.mapValue)return 0;if(i===to.mapValue)return 1;if(o===to.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=de(c[h],u[h]);if(d!==0)return d;const g=ts(a[c[h]],l[u[h]]);if(g!==0)return g}return de(c.length,u.length)}(t.mapValue,e.mapValue);default:throw z()}}function Xd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=Kn(t),r=Kn(e),s=de(n.seconds,r.seconds);return s!==0?s:de(n.nanos,r.nanos)}function ns(t){return al(t)}function al(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Kn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ir(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=al(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${al(n.fields[o])}`;return s+"}"}(t.mapValue):z()}function cl(t){return!!t&&"integerValue"in t}function Pu(t){return!!t&&"arrayValue"in t}function Zd(t){return!!t&&"nullValue"in t}function $d(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function po(t){return!!t&&"mapValue"in t}function Fs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ps(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Fs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function QR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!po(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fs(n)}setAll(e){let n=ze.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Fs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());po(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];po(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ps(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Tt(Fs(this.value))}}function Um(t){const e=[];return ps(t.fields,(n,r)=>{const s=new ze([n]);if(po(r)){const i=Um(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Nt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new $e(e,0,Y.min(),Y.min(),Y.min(),Tt.empty(),0)}static newFoundDocument(e,n,r,s){return new $e(e,1,n,Y.min(),r,s,0)}static newNoDocument(e,n){return new $e(e,2,n,Y.min(),Y.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new $e(e,3,n,Y.min(),Y.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n){this.position=e,this.inclusive=n}}function ef(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=ts(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function tf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n="asc"){this.field=e,this.dir=n}}function KR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{}class Le extends Bm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new zR(e,n,r):n==="array-contains"?new YR(e,r):n==="in"?new XR(e,r):n==="not-in"?new ZR(e,r):n==="array-contains-any"?new $R(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new GR(e,r):new JR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ts(n,this.value)):n!==null&&Tr(this.value)===Tr(n)&&this.matchesComparison(ts(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nn extends Bm{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new nn(e,n)}matches(e){return Fm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Fm(t){return t.op==="and"}function jm(t){return WR(t)&&Fm(t)}function WR(t){for(const e of t.filters)if(e instanceof nn)return!1;return!0}function ll(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+ns(t.value);if(jm(t))return t.filters.map(e=>ll(e)).join(",");{const e=t.filters.map(n=>ll(n)).join(",");return`${t.op}(${e})`}}function qm(t,e){return t instanceof Le?function(r,s){return s instanceof Le&&r.op===s.op&&r.field.isEqual(s.field)&&tn(r.value,s.value)}(t,e):t instanceof nn?function(r,s){return s instanceof nn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&qm(o,s.filters[a]),!0):!1}(t,e):void z()}function Hm(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${ns(n.value)}`}(t):t instanceof nn?function(n){return n.op.toString()+" {"+n.getFilters().map(Hm).join(" ,")+"}"}(t):"Filter"}class zR extends Le{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class GR extends Le{constructor(e,n){super(e,"in",n),this.keys=Qm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class JR extends Le{constructor(e,n){super(e,"not-in",n),this.keys=Qm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Qm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class YR extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Pu(n)&&di(n.arrayValue,this.value)}}class XR extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&di(this.value.arrayValue,n)}}class ZR extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!di(this.value.arrayValue,n)}}class $R extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Pu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>di(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function nf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new eS(t,e,n,r,s,i,o)}function bu(t){const e=$(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ll(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Na(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ns(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ns(r)).join(",")),e.ce=n}return e.ce}function ku(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!KR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!qm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!tf(t.startAt,e.startAt)&&tf(t.endAt,e.endAt)}function ul(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function tS(t,e,n,r,s,i,o,a){return new Va(t,e,n,r,s,i,o,a)}function Du(t){return new Va(t)}function rf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function nS(t){return t.collectionGroup!==null}function js(t){const e=$(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Je(ze.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new Ho(i,r))}),n.has(ze.keyField().canonicalString())||e.le.push(new Ho(ze.keyField(),r))}return e.le}function Xt(t){const e=$(t);return e.he||(e.he=rS(e,js(t))),e.he}function rS(t,e){if(t.limitType==="F")return nf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ho(s.field,i)});const n=t.endAt?new qo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new qo(t.startAt.position,t.startAt.inclusive):null;return nf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function hl(t,e,n){return new Va(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Oa(t,e){return ku(Xt(t),Xt(e))&&t.limitType===e.limitType}function Km(t){return`${bu(Xt(t))}|lt:${t.limitType}`}function Vr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Hm(s)).join(", ")}]`),Na(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ns(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ns(s)).join(",")),`Target(${r})`}(Xt(t))}; limitType=${t.limitType})`}function Ma(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of js(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=ef(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,js(r),s)||r.endAt&&!function(o,a,c){const l=ef(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,js(r),s))}(t,e)}function sS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Wm(t){return(e,n)=>{let r=!1;for(const s of js(t)){const i=iS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function iS(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?ts(c,l):z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ps(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return xm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS=new be(K.comparator);function mn(){return oS}const zm=new be(K.comparator);function Ds(...t){let e=zm;for(const n of t)e=e.insert(n.key,n);return e}function Gm(t){let e=zm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function hr(){return qs()}function Jm(){return qs()}function qs(){return new gs(t=>t.toString(),(t,e)=>t.isEqual(e))}const aS=new be(K.comparator),cS=new Je(K.comparator);function re(...t){let e=cS;for(const n of t)e=e.add(n);return e}const lS=new Je(de);function uS(){return lS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jo(e)?"-0":e}}function Xm(t){return{integerValue:""+t}}function hS(t,e){return jR(e)?Xm(e):Ym(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(){this._=void 0}}function dS(t,e,n){return t instanceof Qo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Su(i)&&(i=Cu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof fi?$m(t,e):t instanceof pi?ey(t,e):function(s,i){const o=Zm(s,i),a=sf(o)+sf(s.Ie);return cl(o)&&cl(s.Ie)?Xm(a):Ym(s.serializer,a)}(t,e)}function fS(t,e,n){return t instanceof fi?$m(t,e):t instanceof pi?ey(t,e):n}function Zm(t,e){return t instanceof Ko?function(r){return cl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Qo extends xa{}class fi extends xa{constructor(e){super(),this.elements=e}}function $m(t,e){const n=ty(e);for(const r of t.elements)n.some(s=>tn(s,r))||n.push(r);return{arrayValue:{values:n}}}class pi extends xa{constructor(e){super(),this.elements=e}}function ey(t,e){let n=ty(e);for(const r of t.elements)n=n.filter(s=>!tn(s,r));return{arrayValue:{values:n}}}class Ko extends xa{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function sf(t){return Me(t.integerValue||t.doubleValue)}function ty(t){return Pu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function pS(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof fi&&s instanceof fi||r instanceof pi&&s instanceof pi?es(r.elements,s.elements,tn):r instanceof Ko&&s instanceof Ko?tn(r.Ie,s.Ie):r instanceof Qo&&s instanceof Qo}(t.transform,e.transform)}class gS{constructor(e,n){this.version=e,this.transformResults=n}}class Mt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Mt}static exists(e){return new Mt(void 0,e)}static updateTime(e){return new Mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function go(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class La{}function ny(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Nu(t.key,Mt.none()):new Oi(t.key,t.data,Mt.none());{const n=t.data,r=Tt.empty();let s=new Je(ze.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Rr(t.key,r,new Nt(s.toArray()),Mt.none())}}function mS(t,e,n){t instanceof Oi?function(s,i,o){const a=s.value.clone(),c=af(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Rr?function(s,i,o){if(!go(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=af(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(ry(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Hs(t,e,n,r){return t instanceof Oi?function(i,o,a,c){if(!go(i.precondition,o))return a;const l=i.value.clone(),u=cf(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Rr?function(i,o,a,c){if(!go(i.precondition,o))return a;const l=cf(i.fieldTransforms,c,o),u=o.data;return u.setAll(ry(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return go(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function yS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Zm(r.transform,s||null);i!=null&&(n===null&&(n=Tt.empty()),n.set(r.field,i))}return n||null}function of(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&es(r,s,(i,o)=>pS(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oi extends La{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Rr extends La{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ry(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function af(t,e,n){const r=new Map;we(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,fS(o,a,n[s]))}return r}function cf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,dS(i,o,e))}return r}class Nu extends La{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _S extends La{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&mS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Hs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Hs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Jm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=ny(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&es(this.mutations,e.mutations,(n,r)=>of(n,r))&&es(this.baseMutations,e.baseMutations,(n,r)=>of(n,r))}}class Vu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){we(e.mutations.length===r.length);let s=function(){return aS}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Vu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,ie;function IS(t){switch(t){default:return z();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function sy(t){if(t===void 0)return gn("GRPC error has no .code"),T.UNKNOWN;switch(t){case Oe.OK:return T.OK;case Oe.CANCELLED:return T.CANCELLED;case Oe.UNKNOWN:return T.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return T.INTERNAL;case Oe.UNAVAILABLE:return T.UNAVAILABLE;case Oe.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Oe.NOT_FOUND:return T.NOT_FOUND;case Oe.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Oe.ABORTED:return T.ABORTED;case Oe.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Oe.DATA_LOSS:return T.DATA_LOSS;default:return z()}}(ie=Oe||(Oe={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=new Kr([4294967295,4294967295],0);function lf(t){const e=TS().encode(t),n=new SR;return n.update(e),new Uint8Array(n.digest())}function uf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Kr([n,r],0),new Kr([s,i],0)]}class Ou{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ns(`Invalid padding: ${n}`);if(r<0)throw new Ns(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ns(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ns(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Kr.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(Kr.fromNumber(r)));return s.compare(wS)===1&&(s=new Kr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=lf(e),[r,s]=uf(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ou(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=lf(e),[r,s]=uf(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ns extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Mi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ua(Y.min(),s,new be(de),mn(),re())}}class Mi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Mi(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class iy{constructor(e,n){this.targetId=e,this.fe=n}}class oy{constructor(e,n,r=st.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class hf{constructor(){this.ge=0,this.pe=ff(),this.ye=st.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=re(),n=re(),r=re();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:z()}}),new Mi(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=ff()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,we(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class RS{constructor(e){this.Le=e,this.ke=new Map,this.qe=mn(),this.Qe=df(),this.Ke=new be(de)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(ul(i))if(r===0){const o=new K(i.path);this.We(n,o,$e.newNoDocument(o,Y.min()))}else we(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Ir(r).toUint8Array()}catch(c){if(c instanceof Lm)return $r("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Ou(o,s,i)}catch(c){return $r(c instanceof Ns?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&ul(a.target)){const c=new K(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,$e.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=re();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new Ua(e,n,this.Ke,this.qe,r);return this.qe=mn(),this.Qe=df(),this.Ke=new be(de),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new hf,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Je(de),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||x("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new hf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function df(){return new be(K.comparator)}function ff(){return new be(K.comparator)}const SS={asc:"ASCENDING",desc:"DESCENDING"},CS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},PS={and:"AND",or:"OR"};class bS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function dl(t,e){return t.useProto3Json||Na(e)?e:{value:e}}function Wo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ay(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function kS(t,e){return Wo(t,e.toTimestamp())}function Zt(t){return we(!!t),Y.fromTimestamp(function(n){const r=Kn(n);return new Ue(r.seconds,r.nanos)}(t))}function Mu(t,e){return function(r){return new Pe(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function cy(t){const e=Pe.fromString(t);return we(dy(e)),e}function fl(t,e){return Mu(t.databaseId,e.path)}function _c(t,e){const n=cy(e);if(n.get(1)!==t.databaseId.projectId)throw new j(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(ly(n))}function pl(t,e){return Mu(t.databaseId,e)}function DS(t){const e=cy(t);return e.length===4?Pe.emptyPath():ly(e)}function gl(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ly(t){return we(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function pf(t,e,n){return{name:fl(t,e),fields:n.value.mapValue.fields}}function NS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(we(u===void 0||typeof u=="string"),st.fromBase64String(u||"")):(we(u===void 0||u instanceof Uint8Array),st.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?T.UNKNOWN:sy(l.code);return new j(u,l.message||"")}(o);n=new oy(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=_c(t,r.document.name),i=Zt(r.document.updateTime),o=r.document.createTime?Zt(r.document.createTime):Y.min(),a=new Tt({mapValue:{fields:r.document.fields}}),c=$e.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new mo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=_c(t,r.document),i=r.readTime?Zt(r.readTime):Y.min(),o=$e.newNoDocument(s,i),a=r.removedTargetIds||[];n=new mo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=_c(t,r.document),i=r.removedTargetIds||[];n=new mo([],i,s,null)}else{if(!("filter"in e))return z();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new vS(s,i),a=r.targetId;n=new iy(a,o)}}return n}function VS(t,e){let n;if(e instanceof Oi)n={update:pf(t,e.key,e.value)};else if(e instanceof Nu)n={delete:fl(t,e.key)};else if(e instanceof Rr)n={update:pf(t,e.key,e.data),updateMask:qS(e.fieldMask)};else{if(!(e instanceof _S))return z();n={verify:fl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Qo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof fi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof pi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ko)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:kS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z()}(t,e.precondition)),n}function OS(t,e){return t&&t.length>0?(we(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Zt(s.updateTime):Zt(i);return o.isEqual(Y.min())&&(o=Zt(i)),new gS(o,s.transformResults||[])}(n,e))):[]}function MS(t,e){return{documents:[pl(t,e.path)]}}function xS(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=pl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=pl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return hy(nn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Or(h.field),direction:BS(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=dl(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function LS(t){let e=DS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){we(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=uy(h);return d instanceof nn&&jm(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(A){return new Ho(Mr(A.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Na(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,g=h.values||[];return new qo(g,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,g=h.values||[];return new qo(g,d)}(n.endAt)),tS(e,s,o,i,a,"F",c,l)}function US(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function uy(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Mr(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Mr(n.unaryFilter.field);return Le.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Mr(n.unaryFilter.field);return Le.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Mr(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(t):t.fieldFilter!==void 0?function(n){return Le.create(Mr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return nn.create(n.compositeFilter.filters.map(r=>uy(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z()}}(n.compositeFilter.op))}(t):z()}function BS(t){return SS[t]}function FS(t){return CS[t]}function jS(t){return PS[t]}function Or(t){return{fieldPath:t.canonicalString()}}function Mr(t){return ze.fromServerFormat(t.fieldPath)}function hy(t){return t instanceof Le?function(n){if(n.op==="=="){if($d(n.value))return{unaryFilter:{field:Or(n.field),op:"IS_NAN"}};if(Zd(n.value))return{unaryFilter:{field:Or(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($d(n.value))return{unaryFilter:{field:Or(n.field),op:"IS_NOT_NAN"}};if(Zd(n.value))return{unaryFilter:{field:Or(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Or(n.field),op:FS(n.op),value:n.value}}}(t):t instanceof nn?function(n){const r=n.getFilters().map(s=>hy(s));return r.length===1?r[0]:{compositeFilter:{op:jS(n.op),filters:r}}}(t):z()}function qS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function dy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,n,r,s,i=Y.min(),o=Y.min(),a=st.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new On(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e){this.ut=e}}function QS(t){const e=LS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?hl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(){this.on=new WS}addToCollectionParentIndex(e,n){return this.on.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(Qn.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(Qn.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class WS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Je(Pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Je(Pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new rs(0)}static Nn(){return new rs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(){this.changes=new gs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,$e.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Hs(r.mutation,s,Nt.empty(),Ue.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const s=hr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ds();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=hr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=mn();const o=qs(),a=function(){return qs()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Rr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Hs(u.mutation,l,u.mutation.getFieldMask(),Ue.now())):o.set(l.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new GS(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=qs();let s=new be((o,a)=>o-a),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Nt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||re()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Jm();u.forEach(d=>{if(!i.has(d)){const g=ny(n.get(d),r.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):nS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):R.resolve(hr());let a=-1,c=i;return o.next(l=>R.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?R.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,re())).next(u=>({batchId:a,changes:Gm(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let s=Ds();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ds();return this.indexManager.getCollectionParents(e,i).next(a=>R.forEach(a,c=>{const l=function(h,d){return new Va(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,$e.newInvalidDocument(u)))});let a=Ds();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&Hs(u.mutation,l,Nt.empty(),Ue.now()),Ma(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return R.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Zt(s.createTime)}}(n)),R.resolve()}getNamedQuery(e,n){return R.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:QS(s.bundledQuery),readTime:Zt(s.readTime)}}(n)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(){this.overlays=new be(K.comparator),this.lr=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=hr();return R.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const s=hr(),i=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return R.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new be((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=hr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=hr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return R.resolve(a)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ES(n,r));let i=this.lr.get(n);i===void 0&&(i=re(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(){this.hr=new Je(Fe.Pr),this.Ir=new Je(Fe.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Fe(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new K(new Pe([])),r=new Fe(n,e),s=new Fe(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new K(new Pe([])),r=new Fe(n,e),s=new Fe(n,e+1);let i=re();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Fe(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return K.comparator(e.key,n.key)||de(e.gr,n.gr)}static Tr(e,n){return de(e.gr,n.gr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Je(Fe.Pr)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new AS(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new Fe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),s=new Fe(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(de);return n.forEach(s=>{const i=new Fe(s,0),o=new Fe(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),R.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new Fe(new K(i),0);let a=new Je(de);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.gr)),!0)},o),R.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){we(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return R.forEach(n.mutations,s=>{const i=new Fe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Fe(n,0),s=this.yr.firstAfterOrEqual(r);return R.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e){this.Cr=e,this.docs=function(){return new be(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():$e.newInvalidDocument(n))}getEntries(e,n){let r=mn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():$e.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=mn();const o=n.path,a=new K(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||UR(LR(u),r)<=0||(s.has(u.key)||Ma(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,n,r,s){z()}vr(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new eC(this)}getSize(e){return R.resolve(this.size)}}class eC extends zS{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e){this.persistence=e,this.Fr=new gs(n=>bu(n),ku),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Mr=0,this.Or=new xu,this.targetCount=0,this.Nr=rs.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),R.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new rs(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.kn(n),R.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),R.waitFor(i).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Ru(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new tC(this),this.indexManager=new KS,this.remoteDocumentCache=function(s){return new $S(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new HS(n),this.Kr=new YS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new XS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new ZS(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){x("MemoryPersistence","Starting transaction:",e);const s=new rC(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return R.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class rC extends FR{constructor(e){super(),this.currentSequenceNumber=e}}class Lu{constructor(e){this.persistence=e,this.Gr=new xu,this.zr=null}static jr(e){return new Lu(e)}get Hr(){if(this.zr)return this.zr;throw z()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),R.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Hr,r=>{const s=K.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,Y.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return R.or([()=>R.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=re(),s=re();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Uu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new sC;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(ws()<=se.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",Vr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),R.resolve()):(ws()<=se.DEBUG&&x("QueryEngine","Query:",Vr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(ws()<=se.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",Vr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xt(n))):R.resolve())}zi(e,n){if(rf(n))return R.resolve(null);let r=Xt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=hl(n,null,"F"),r=Xt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=re(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,hl(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,r,s){return rf(n)||s.isEqual(Y.min())?R.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?R.resolve(null):(ws()<=se.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Vr(n)),this.Xi(e,o,n,xR(s,-1)).next(a=>a))})}Yi(e,n){let r=new Je(Wm(e));return n.forEach((s,i)=>{Ma(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return ws()<=se.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Vr(n)),this.Gi.getDocumentsMatchingQuery(e,n,Qn.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new be(de),this.ns=new gs(i=>bu(i),ku),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JS(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function aC(t,e,n,r){return new oC(t,e,n,r)}async function fy(t,e){const n=$(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=re();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function cC(t,e){const n=$(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let g=R.resolve();return d.forEach(A=>{g=g.next(()=>u.getEntry(c,A)).next(E=>{const I=l.docVersions.get(A);we(I!==null),E.version.compareTo(I)<0&&(h.applyToRemoteDocument(E,l),E.isValidDocument()&&(E.setReadTime(l.commitVersion),u.addEntry(E)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=re();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function py(t){const e=$(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function lC(t,e){const n=$(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(st.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(h,g),function(E,I,P){return E.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(d,g,u)&&a.push(n.qr.updateTargetData(i,g))});let c=mn(),l=re();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(uC(i,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!r.isEqual(Y.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return R.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ts=s,i))}function uC(t,e,n){let r=re(),s=re();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=mn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(Y.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):x("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:s}})}function hC(t,e){const n=$(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function dC(t,e){const n=$(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,R.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new On(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function ml(t,e,n){const r=$(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Vi(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function gf(t,e,n){const r=$(t);let s=Y.min(),i=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=$(c),d=h.ns.get(u);return d!==void 0?R.resolve(h.ts.get(d)):h.qr.getTargetData(l,u)}(r,o,Xt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:Y.min(),n?i:re())).next(a=>(fC(r,sS(e),a),{documents:a,ls:i})))}function fC(t,e,n){let r=t.rs.get(e)||Y.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class mf{constructor(){this.activeTargetIds=uS()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pC{constructor(){this.eo=new mf,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new mf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no=null;function Ac(){return no===null?no=function(){return 268435456+Math.round(2147483648*Math.random())}():no++,"0x"+no.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="WebChannelConnection";class _C extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=Ac(),c=this.So(n,r);x("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,i,o),this.Do(n,c,l,s).then(u=>(x("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw $r("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=mC[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,s){const i=Ac();return new Promise((o,a)=>{const c=new RR;c.setWithCredentials(!0),c.listenOnce(TR.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case yc.NO_ERROR:const u=c.getResponseJson();x(Xe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case yc.TIMEOUT:x(Xe,`RPC '${e}' ${i} timed out`),a(new j(T.DEADLINE_EXCEEDED,"Request time out"));break;case yc.HTTP_ERROR:const h=c.getStatus();if(x(Xe,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const A=function(I){const P=I.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(P)>=0?P:T.UNKNOWN}(g.status);a(new j(A,g.message))}else a(new j(T.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new j(T.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{x(Xe,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);x(Xe,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}vo(e,n,r){const s=Ac(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vR(),a=IR(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.bo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");x(Xe,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,g=!1;const A=new yC({co:I=>{g?x(Xe,`Not sending because RPC '${e}' stream ${s} is closed:`,I):(d||(x(Xe,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),x(Xe,`RPC '${e}' stream ${s} sending:`,I),h.send(I))},lo:()=>h.close()}),E=(I,P,b)=>{I.listen(P,B=>{try{b(B)}catch(V){setTimeout(()=>{throw V},0)}})};return E(h,$i.EventType.OPEN,()=>{g||x(Xe,`RPC '${e}' stream ${s} transport opened.`)}),E(h,$i.EventType.CLOSE,()=>{g||(g=!0,x(Xe,`RPC '${e}' stream ${s} transport closed`),A.Ro())}),E(h,$i.EventType.ERROR,I=>{g||(g=!0,$r(Xe,`RPC '${e}' stream ${s} transport errored:`,I),A.Ro(new j(T.UNAVAILABLE,"The operation could not be completed")))}),E(h,$i.EventType.MESSAGE,I=>{var P;if(!g){const b=I.data[0];we(!!b);const B=b,V=B.error||((P=B[0])===null||P===void 0?void 0:P.error);if(V){x(Xe,`RPC '${e}' stream ${s} received error:`,V);const te=V.status;let le=function(he){const ae=Oe[he];if(ae!==void 0)return sy(ae)}(te),Re=V.message;le===void 0&&(le=T.INTERNAL,Re="Unknown error status: "+te+" with message "+V.message),g=!0,A.Ro(new j(le,Re)),h.close()}else x(Xe,`RPC '${e}' stream ${s} received:`,b),A.Vo(b)}}),E(a,wR.STAT_EVENT,I=>{I.stat===zd.PROXY?x(Xe,`RPC '${e}' stream ${s} detected buffering proxy`):I.stat===zd.NOPROXY&&x(Xe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.Ao()},0),A}}function Ec(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(t){return new bS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,n,r,s,i,o,a,c){this.si=e,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new gy(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(gn(n.toString()),gn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{e(()=>{const s=new j(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AC extends my{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=NS(this.serializer,e),r=function(i){if(!("targetChange"in i))return Y.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?Zt(o.readTime):Y.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=gl(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=ul(c)?{documents:MS(i,c)}:{query:xS(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ay(i,o.resumeToken);const l=dl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(Y.min())>0){a.readTime=Wo(i,o.snapshotVersion.toTimestamp());const l=dl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=US(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=gl(this.serializer),n.removeTarget=e,this.e_(n)}}class EC extends my{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(we(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=OS(e.writeResults,e.commitTime),r=Zt(e.commitTime);return this.listener.I_(r,n)}return we(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=gl(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>VS(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new j(T.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(T.UNKNOWN,s.toString())})}Co(e,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(T.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class IC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(gn(n),this.f_=!1):x("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Sr(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=$(c);l.C_.add(4),await xi(l),l.M_.set("Unknown"),l.C_.delete(4),await Fa(l)}(this))})}),this.M_=new IC(r,s)}}async function Fa(t){if(Sr(t))for(const e of t.v_)await e(!0)}async function xi(t){for(const e of t.v_)await e(!1)}function yy(t,e){const n=$(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),ju(n)?Fu(n):ms(n).Ho()&&Bu(n,e))}function _y(t,e){const n=$(t),r=ms(n);n.D_.delete(e),r.Ho()&&Ay(n,e),n.D_.size===0&&(r.Ho()?r.Zo():Sr(n)&&n.M_.set("Unknown"))}function Bu(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ms(t).u_(e)}function Ay(t,e){t.x_.Oe(e),ms(t).c_(e)}function Fu(t){t.x_=new RS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ms(t).start(),t.M_.g_()}function ju(t){return Sr(t)&&!ms(t).jo()&&t.D_.size>0}function Sr(t){return $(t).C_.size===0}function Ey(t){t.x_=void 0}async function wC(t){t.D_.forEach((e,n)=>{Bu(t,e)})}async function RC(t,e){Ey(t),ju(t)?(t.M_.w_(e),Fu(t)):t.M_.set("Unknown")}async function SC(t,e,n){if(t.M_.set("Online"),e instanceof oy&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(t,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await zo(t,r)}else if(e instanceof mo?t.x_.$e(e):e instanceof iy?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(Y.min()))try{const r=await py(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.D_.get(l);u&&i.D_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.D_.get(c);if(!u)return;i.D_.set(c,u.withResumeToken(st.EMPTY_BYTE_STRING,u.snapshotVersion)),Ay(i,c);const h=new On(u.target,c,l,u.sequenceNumber);Bu(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await zo(t,r)}}async function zo(t,e,n){if(!Vi(e))throw e;t.C_.add(1),await xi(t),t.M_.set("Offline"),n||(n=()=>py(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Fa(t)})}function vy(t,e){return e().catch(n=>zo(t,n,e))}async function ja(t){const e=$(t),n=Wn(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;CC(e);)try{const s=await hC(e.localStore,r);if(s===null){e.b_.length===0&&n.Zo();break}r=s.batchId,PC(e,s)}catch(s){await zo(e,s)}Iy(e)&&Ty(e)}function CC(t){return Sr(t)&&t.b_.length<10}function PC(t,e){t.b_.push(e);const n=Wn(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function Iy(t){return Sr(t)&&!Wn(t).jo()&&t.b_.length>0}function Ty(t){Wn(t).start()}async function bC(t){Wn(t).E_()}async function kC(t){const e=Wn(t);for(const n of t.b_)e.P_(n.mutations)}async function DC(t,e,n){const r=t.b_.shift(),s=Vu.from(r,e,n);await vy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ja(t)}async function NC(t,e){e&&Wn(t).h_&&await async function(r,s){if(function(o){return IS(o)&&o!==T.ABORTED}(s.code)){const i=r.b_.shift();Wn(r).Yo(),await vy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ja(r)}}(t,e),Iy(t)&&Ty(t)}async function _f(t,e){const n=$(t);n.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=Sr(n);n.C_.add(3),await xi(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Fa(n)}async function VC(t,e){const n=$(t);e?(n.C_.delete(2),await Fa(n)):e||(n.C_.add(2),await xi(n),n.M_.set("Unknown"))}function ms(t){return t.O_||(t.O_=function(n,r,s){const i=$(n);return i.A_(),new AC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:wC.bind(null,t),Io:RC.bind(null,t),a_:SC.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),ju(t)?Fu(t):t.M_.set("Unknown")):(await t.O_.stop(),Ey(t))})),t.O_}function Wn(t){return t.N_||(t.N_=function(n,r,s){const i=$(n);return i.A_(),new EC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:bC.bind(null,t),Io:NC.bind(null,t),T_:kC.bind(null,t),I_:DC.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await ja(t)):(await t.N_.stop(),t.b_.length>0&&(x("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new qu(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hu(t,e){if(gn("AsyncQueue",`${e}: ${t}`),Vi(t))return new j(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Ds(),this.sortedSet=new be(this.comparator)}static emptySet(e){return new Wr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Wr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Wr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(){this.B_=new be(K.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):z():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ss{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ss(e,n,Wr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Oa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(){this.k_=void 0,this.listeners=[]}}class MC{constructor(){this.queries=new gs(e=>Km(e),Oa),this.onlineState="Unknown",this.q_=new Set}}async function wy(t,e){const n=$(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new OC),s)try{i.k_=await n.onListen(r)}catch(o){const a=Hu(o,`Initialization of query '${Vr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&Qu(n)}async function Ry(t,e){const n=$(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function xC(t,e){const n=$(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&Qu(n)}function LC(t,e,n){const r=$(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Qu(t){t.q_.forEach(e=>{e.next()})}class Sy{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ss(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e){this.key=e}}class Py{constructor(e){this.key=e}}class UC{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=re(),this.mutatedKeys=re(),this._a=Wm(e),this.aa=new Wr(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new Af,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),g=Ma(this.query,h)?h:null,A=!!d&&this.mutatedKeys.has(d.key),E=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let I=!1;d&&g?d.data.isEqual(g.data)?A!==E&&(r.track({type:3,doc:g}),I=!0):this.ha(d,g)||(r.track({type:2,doc:g}),I=!0,(c&&this._a(g,c)>0||l&&this._a(g,l)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),I=!0):d&&!g&&(r.track({type:1,doc:d}),I=!0,(c||l)&&(a=!0)),I&&(g?(o=o.add(g),i=E?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(g,A){const E=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return E(g)-E(A)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(r),s=s!=null&&s;const a=n&&!s?this.Ia():[],c=this.oa.size===0&&this.current&&!s?1:0,l=c!==this.sa;return this.sa=c,o.length!==0||l?{snapshot:new ss(this.query,e.aa,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Af,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=re(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new Py(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new Cy(r))}),n}da(e){this.ia=e.ls,this.oa=re();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return ss.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class BC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class FC{constructor(e){this.key=e,this.Ra=!1}}class jC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new gs(a=>Km(a),Oa),this.fa=new Map,this.ga=new Set,this.pa=new be(K.comparator),this.ya=new Map,this.wa=new xu,this.Sa={},this.ba=new Map,this.Da=rs.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function qC(t,e){const n=ZC(t);let r,s;const i=n.ma.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await dC(n.localStore,Xt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await HC(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&yy(n.remoteStore,o)}return s}async function HC(t,e,n,r,s){t.va=(h,d,g)=>async function(E,I,P,b){let B=I.view.ca(P);B.Zi&&(B=await gf(E.localStore,I.query,!1).then(({documents:Re})=>I.view.ca(Re,B)));const V=b&&b.targetChanges.get(I.targetId),te=b&&b.targetMismatches.get(I.targetId)!=null,le=I.view.applyChanges(B,E.isPrimaryClient,V,te);return vf(E,I.targetId,le.Ta),le.snapshot}(t,h,d,g);const i=await gf(t.localStore,e,!0),o=new UC(e,i.ls),a=o.ca(i.documents),c=Mi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);vf(t,n,l.Ta);const u=new BC(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),l.snapshot}async function QC(t,e){const n=$(t),r=n.ma.get(e),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!Oa(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ml(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),_y(n.remoteStore,r.targetId),yl(n,r.targetId)}).catch(Ni)):(yl(n,r.targetId),await ml(n.localStore,r.targetId,!0))}async function KC(t,e,n){const r=$C(t);try{const s=await function(o,a){const c=$(o),l=Ue.now(),u=a.reduce((g,A)=>g.add(A.key),re());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let A=mn(),E=re();return c.ss.getEntries(g,u).next(I=>{A=I,A.forEach((P,b)=>{b.isValidDocument()||(E=E.add(P))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,A)).next(I=>{h=I;const P=[];for(const b of a){const B=yS(b,h.get(b.key).overlayedDocument);B!=null&&P.push(new Rr(b.key,B,Um(B.value.mapValue),Mt.exists(!0)))}return c.mutationQueue.addMutationBatch(g,l,P,a)}).next(I=>{d=I;const P=I.applyToLocalDocumentSet(h,E);return c.documentOverlayCache.saveOverlays(g,I.batchId,P)})}).then(()=>({batchId:d.batchId,changes:Gm(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Sa[o.currentUser.toKey()];l||(l=new be(de)),l=l.insert(a,c),o.Sa[o.currentUser.toKey()]=l}(r,s.batchId,n),await Li(r,s.changes),await ja(r.remoteStore)}catch(s){const i=Hu(s,"Failed to persist write");n.reject(i)}}async function by(t,e){const n=$(t);try{const r=await lC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(we(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?we(o.Ra):s.removedDocuments.size>0&&(we(o.Ra),o.Ra=!1))}),await Li(n,r,e)}catch(r){await Ni(r)}}function Ef(t,e,n){const r=$(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=$(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(l=!0)}),l&&Qu(c)}(r.eventManager,e),s.length&&r.Va.a_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function WC(t,e,n){const r=$(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ya.get(e),i=s&&s.key;if(i){let o=new be(K.comparator);o=o.insert(i,$e.newNoDocument(i,Y.min()));const a=re().add(i),c=new Ua(Y.min(),new Map,new be(de),o,a);await by(r,c),r.pa=r.pa.remove(i),r.ya.delete(e),Ku(r)}else await ml(r.localStore,e,!1).then(()=>yl(r,e,n)).catch(Ni)}async function zC(t,e){const n=$(t),r=e.batch.batchId;try{const s=await cC(n.localStore,e);Dy(n,r,null),ky(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Li(n,s)}catch(s){await Ni(s)}}async function GC(t,e,n){const r=$(t);try{const s=await function(o,a){const c=$(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(we(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);Dy(r,e,n),ky(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Li(r,s)}catch(s){await Ni(s)}}function ky(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function Dy(t,e,n){const r=$(t);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Sa[r.currentUser.toKey()]=s}}function yl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||Ny(t,r)})}function Ny(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(_y(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Ku(t))}function vf(t,e,n){for(const r of n)r instanceof Cy?(t.wa.addReference(r.key,e),JC(t,r)):r instanceof Py?(x("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||Ny(t,r.key)):z()}function JC(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(x("SyncEngine","New document in limbo: "+n),t.ga.add(r),Ku(t))}function Ku(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new K(Pe.fromString(e)),r=t.Da.next();t.ya.set(r,new FC(n)),t.pa=t.pa.insert(n,r),yy(t.remoteStore,new On(Xt(Du(n.path)),r,"TargetPurposeLimboResolution",Ru._e))}}async function Li(t,e,n){const r=$(t),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,c)=>{o.push(r.va(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Uu.Qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Va.a_(s),await async function(c,l){const u=$(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>R.forEach(l,d=>R.forEach(d.ki,g=>u.persistence.referenceDelegate.addReference(h,d.targetId,g)).next(()=>R.forEach(d.qi,g=>u.persistence.referenceDelegate.removeReference(h,d.targetId,g)))))}catch(h){if(!Vi(h))throw h;x("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const g=u.ts.get(d),A=g.snapshotVersion,E=g.withLastLimboFreeSnapshotVersion(A);u.ts=u.ts.insert(d,E)}}}(r.localStore,i))}async function YC(t,e){const n=$(t);if(!n.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await fy(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(c=>{c.reject(new j(T.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Li(n,r._s)}}function XC(t,e){const n=$(t),r=n.ya.get(e);if(r&&r.Ra)return re().add(r.key);{let s=re();const i=n.fa.get(e);if(!i)return s;for(const o of i){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function ZC(t){const e=$(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=by.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WC.bind(null,e),e.Va.a_=xC.bind(null,e.eventManager),e.Va.Fa=LC.bind(null,e.eventManager),e}function $C(t){const e=$(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=GC.bind(null,e),e}class If{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ba(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return aC(this.persistence,new iC,e.initialUser,this.serializer)}createPersistence(e){return new nC(Lu.jr,this.serializer)}createSharedClientState(e){return new pC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class eP{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ef(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=YC.bind(null,this.syncEngine),await VC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new MC}()}createDatastore(e){const n=Ba(e.databaseInfo.databaseId),r=function(i){return new _C(i)}(e.databaseInfo);return function(i,o,a,c){return new vC(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new TC(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Ef(this.syncEngine,n,0),function(){return yf.D()?new yf:new gC}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new jC(s,i,o,a,c,l);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=$(n);x("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await xi(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):gn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ze.UNAUTHENTICATED,this.clientId=Mm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{x("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(x("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Hu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vc(t,e){t.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await fy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Tf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rP(t);x("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>_f(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>_f(e.remoteStore,i)),t._onlineComponents=e}function nP(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function rP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await vc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!nP(n))throw n;$r("Error using user provided cache. Falling back to memory cache: "+n),await vc(t,new If)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await vc(t,new If);return t._offlineComponents}async function Oy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await Tf(t,t._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await Tf(t,new eP))),t._onlineComponents}function sP(t){return Oy(t).then(e=>e.syncEngine)}async function My(t){const e=await Oy(t),n=e.eventManager;return n.onListen=qC.bind(null,e.syncEngine),n.onUnlisten=QC.bind(null,e.syncEngine),n}function iP(t,e,n={}){const r=new dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new Vy({next:d=>{o.enqueueAndForget(()=>Ry(i,h));const g=d.docs.has(a);!g&&d.fromCache?l.reject(new j(T.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&d.fromCache&&c&&c.source==="server"?l.reject(new j(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new Sy(Du(a.path),u,{includeMetadataChanges:!0,J_:!0});return wy(i,h)}(await My(t),t.asyncQueue,e,n,r)),r.promise}function oP(t,e,n={}){const r=new dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new Vy({next:d=>{o.enqueueAndForget(()=>Ry(i,h)),d.fromCache&&c.source==="server"?l.reject(new j(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new Sy(a,u,{includeMetadataChanges:!0,J_:!0});return wy(i,h)}(await My(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(t,e,n){if(!n)throw new j(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function aP(t,e,n,r){if(e===!0&&r===!0)throw new j(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Rf(t){if(!K.isDocumentKey(t))throw new j(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Sf(t){if(K.isDocumentKey(t))throw new j(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Wu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function yn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wu(t);throw new j(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new j(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new j(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new j(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new CR;switch(r.type){case"firstParty":return new DR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=wf.get(n);r&&(x("ComponentProvider","Removing Datastore"),wf.delete(n),r.terminate())}(this),Promise.resolve()}}function cP(t,e,n,r={}){var s;const i=(t=yn(t,qa))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&$r("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Ze.MOCK_USER;else{a=jv(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new j(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ze(l)}t._authCredentials=new PR(new Om(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ha(this.firestore,e,this._query)}}class At{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}}class Fn extends Ha{constructor(e,n,r){super(e,n,Du(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new K(e))}withConverter(e){return new Fn(this.firestore,e,this._path)}}function zb(t,e,...n){if(t=dt(t),Ly("collection","path",e),t instanceof qa){const r=Pe.fromString(e,...n);return Sf(r),new Fn(t,null,r)}{if(!(t instanceof At||t instanceof Fn))throw new j(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return Sf(r),new Fn(t.firestore,null,r)}}function zu(t,e,...n){if(t=dt(t),arguments.length===1&&(e=Mm.newId()),Ly("doc","path",e),t instanceof qa){const r=Pe.fromString(e,...n);return Rf(r),new At(t,null,new K(r))}{if(!(t instanceof At||t instanceof Fn))throw new j(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return Rf(r),new At(t.firestore,t instanceof Fn?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new gy(this,"async_queue_retry"),this.iu=()=>{const n=Ec();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Ec();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Ec();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new dn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Vi(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw gn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=qu.createAndSchedule(this,e,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&z()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class ys extends qa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new lP}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Uy(this),this._firestoreClient.terminate()}}function uP(t,e){const n=typeof t=="object"?t:Jp(),r=typeof t=="string"?t:e||"(default)",s=Kl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Bv("firestore");i&&cP(s,...i)}return s}function Gu(t){return t._firestoreClient||Uy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Uy(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new HR(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,xy(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new tP(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this._byteString=e}static fromBase64String(e){try{return new is(st.fromBase64String(e))}catch(n){throw new j(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new is(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP=/^__.*__$/;class dP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oi(e,this.data,n,this.fieldTransforms)}}function Fy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class Xu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Xu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Au(e),s}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Go(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(Fy(this.Iu)&&hP.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class fP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ba(e)}pu(e,n,r,s=!1){return new Xu({Iu:e,methodName:n,gu:r,path:ze.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jy(t){const e=t._freezeSettings(),n=Ba(t._databaseId);return new fP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function qy(t,e,n,r,s,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,s);Wy("Data must be an object, but it was:",o,r);const a=Qy(r,o);let c,l;if(i.merge)c=new Nt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=pP(e,h,n);if(!o.contains(d))throw new j(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);mP(u,d)||u.push(d)}c=new Nt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new dP(new Tt(a),c,l)}function Hy(t,e){if(Ky(t=dt(t)))return Wy("Unsupported field value:",e,t),Qy(t,e);if(t instanceof By)return function(r,s){if(!Fy(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Hy(a,s.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=dt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return hS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ue.fromDate(r);return{timestampValue:Wo(s.serializer,i)}}if(r instanceof Ue){const i=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wo(s.serializer,i)}}if(r instanceof Yu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof is)return{bytesValue:ay(s.serializer,r._byteString)};if(r instanceof At){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Mu(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${Wu(r)}`)}(t,e)}function Qy(t,e){const n={};return xm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ps(t,(r,s)=>{const i=Hy(s,e.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Ky(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof Yu||t instanceof is||t instanceof At||t instanceof By)}function Wy(t,e,n){if(!Ky(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Wu(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function pP(t,e,n){if((e=dt(e))instanceof Ju)return e._internalPath;if(typeof e=="string")return zy(t,e);throw Go("Field path arguments must be of type string or ",t,!1,void 0,n)}const gP=new RegExp("[~\\*/\\[\\]]");function zy(t,e,n){if(e.search(gP)>=0)throw Go(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ju(...e.split("."))._internalPath}catch{throw Go(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Go(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new j(T.INVALID_ARGUMENT,a+t+c)}function mP(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yP extends Gy{data(){return super.data()}}function Jy(t,e){return typeof e=="string"?zy(t,e):e instanceof Ju?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new j(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class AP{convertValue(e,n="none"){switch(Tr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ps(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Yu(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Cu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ui(e));default:return null}}convertTimestamp(e){const n=Kn(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Pe.fromString(e);we(dy(r));const s=new hi(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||gn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xy extends Gy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Jy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class yo extends Xy{data(e={}){return super.data(e)}}class EP{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Vs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new yo(this._firestore,this._userDataWriter,r.key,r,new Vs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new yo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Vs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new yo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Vs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:vP(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function vP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(t){t=yn(t,At);const e=yn(t.firestore,ys);return iP(Gu(e),t._key).then(n=>IP(e,t,n))}class $y extends AP{constructor(e){super(),this.firestore=e}convertBytes(e){return new is(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,n)}}function Gb(t){t=yn(t,Ha);const e=yn(t.firestore,ys),n=Gu(e),r=new $y(e);return _P(t._query),oP(n,t._query).then(s=>new EP(e,r,t,s))}function Jb(t,e,n){t=yn(t,At);const r=yn(t.firestore,ys),s=Yy(t.converter,e,n);return Zu(r,[qy(jy(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Mt.none())])}function Yb(t){return Zu(yn(t.firestore,ys),[new Nu(t._key,Mt.none())])}function Xb(t,e){const n=yn(t.firestore,ys),r=zu(t),s=Yy(t.converter,e);return Zu(n,[qy(jy(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Mt.exists(!1))]).then(()=>r)}function Zu(t,e){return function(r,s){const i=new dn;return r.asyncQueue.enqueueAndForget(async()=>KC(await sP(r),s,i)),i.promise}(Gu(t),e)}function IP(t,e,n){const r=n.docs.get(e._key),s=new $y(t);return new Xy(t,s,e._key,r,new Vs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){fs=s})(ls),Xr(new yr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new ys(new bR(r.getProvider("auth-internal")),new VR(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new j(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hi(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Bn(Gd,"4.4.0",e),Bn(Gd,"4.4.0","esm2017")})();const TP={apiKey:"AIzaSyDwXO2Z7izFXljl4PUlYpi4yuEsUzqP78E",authDomain:"fliplearn-10385.firebaseapp.com",projectId:"fliplearn-10385",storageBucket:"fliplearn-10385.appspot.com",messagingSenderId:"915669668360",appId:"1:915669668360:web:b2723c76e1c21d1e7d37bd"},e_=Gp(TP),_l=E0(e_),t_=uP(e_),wP="modulepreload",RP=function(t){return"/"+t},Pf={},pt=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");s=Promise.all(n.map(o=>{if(o=RP(o),o in Pf)return;Pf[o]=!0;const a=o.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let h=i.length-1;h>=0;h--){const d=i[h];if(d.href===o&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":wP,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((h,d)=>{u.addEventListener("load",h),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},En=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},SP={class:"card"},CP={class:"wrapper"},PP=["src"],bP={key:0,class:"quiz"},kP={key:1},DP={key:2,class:"options-container"},NP=["onUpdate:modelValue"],VP={key:3,class:"options-container"},OP=["onClick"],MP={key:1,class:"content"},xP={key:1},LP={class:"description-wrapper"},UP={key:1,class:"description"},BP={__name:"FlashCard",props:["card","showQuiz","editMode"],emits:["selectOption"],setup(t,{emit:e}){const n=e,r=s=>{n("selectOption",s)};return(s,i)=>(ee(),Ae("div",SP,[oe("div",CP,[oe("img",{src:t.card.image,alt:""},null,8,PP),t.showQuiz?(ee(),Ae("div",bP,[t.editMode?Ki((ee(),Ae("input",{key:0,type:"text","onUpdate:modelValue":i[0]||(i[0]=o=>t.card.question=o)},null,512)),[[zi,t.card.question]]):(ee(),Ae("h6",kP,As(t.card.question),1)),t.editMode?(ee(),Ae("div",DP,[(ee(!0),Ae(yt,null,kc(t.card.answers,o=>Ki((ee(),Ae("input",{key:o.id,"onUpdate:modelValue":a=>o.text=a,class:"option"},null,8,NP)),[[zi,o.text]])),128))])):(ee(),Ae("div",VP,[(ee(!0),Ae(yt,null,kc(t.card.answers,o=>(ee(),Ae("div",{key:o.id,class:"option",onClick:a=>r(o.isCorrect)},As(o.text),9,OP))),128))]))])):(ee(),Ae("div",MP,[t.editMode?Ki((ee(),Ae("input",{key:0,type:"text","onUpdate:modelValue":i[1]||(i[1]=o=>t.card.title=o)},null,512)),[[zi,t.card.title]]):(ee(),Ae("h3",xP,As(t.card.title),1)),oe("div",LP,[t.editMode?Ki((ee(),Ae("textarea",{key:0,type:"text","onUpdate:modelValue":i[2]||(i[2]=o=>t.card.description=o),class:"description-edit",rows:"4",cols:"50"},As(t.card.description),513)),[[zi,t.card.description]]):(ee(),Ae("p",UP,As(t.card.description),1))])]))])]))}},$u=En(BP,[["__scopeId","data-v-a0629ee0"]]),FP={},jP=t=>(mi("data-v-885e2563"),t=t(),yi(),t),qP={class:"container"},HP=jP(()=>oe("h1",null,[mt(" We aim to leverage your learning "),oe("br"),mt(" experience to the best it can be ")],-1)),QP={class:"buttons"};function KP(t,e){return ee(),Ae("div",qP,[oe("div",null,[HP,oe("div",QP,[oe("button",{onClick:e[0]||(e[0]=n=>t.$router.push("about"))},"Learn More"),oe("button",{onClick:e[1]||(e[1]=n=>t.$router.push("register"))},"Join Us")])])])}const WP=En(FP,[["render",KP],["__scopeId","data-v-885e2563"]]),zP="9",GP="Amanita Muscaria",JP="Also commonly known as fly agaric is a type of poisonous fungi characterized by its vivid red color and white spots",YP="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRUYGBgYGBgSGBgYGBgYGBgYGBgZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QGhISHjQjISE0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NTo2NDQ1MTE0NDE0NDQ0PzU0NDQ0NTU0NDE0NDYxNP/AABEIALcBEwMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAADBAECBQAG/8QANxAAAgIBAwIFAgQGAQMFAAAAAQIAEQMEEiExQQUTIlFhMnEUgZGxBiNCUqHRYsHw8RU0cnOS/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAKREAAgIBAwIFBAMAAAAAAAAAAAECESEDEjEEQRMUMlFhcYGhsSKRwf/aAAwDAQACEQMRAD8AnGssyTsMKROBnPYllSIajHNl0iWfHBMLMPJji7pNTNjirpNExgMQjSLAqkaxCEmAVccq+OMosIcUjcISTFChIyuOW8qS5DFdkgiHZJUiNALtFchjjiKZFmkQFzzCoklMcOiymwOxY4cJLYkjS45nKQhXy5UpHikC6SVIBF0iziP5ViWQTSMhoqgjunMUSMYjKkx2amExm4hieMK855CDCcQJTfKs8lAUyyiNA5ssCuTmbxjgpGmhhYimWFOX5gxh90iKeb8zogGcJjKxLE8ZV42jIs8WyrGS8XymKgM/OIm4jucxJzGiitQ2OBuMaTCzsEQWT9h+pPSJpsKGsUdxpGPDfBHYlXYIwcJt4NmrJu6qa40OPGdu0sUJBLA0bHFKpN17j5jjoSl8GsNCc3SRiqksMJNmjQ6muB956Bw1ghQGAtAqL1o0eSLF+5g8+VyxLB/SSrYyMaDI1VyVNlb55MvyzXLN10U26swW0x49J56cHn7e8VzYGVthVg17dpUgk8GgD16jp7z0+PIrqGUijYAViSpUlWW+oIIIlNTwpL6jIgrah9DEE/2krYPJ5JleXpXZa6B1dnnsngmpsDyXs9BX7+35zPyaDIAWONwFJVjtNAjqCZ67+Sqbs2VfUADkyAgvXQH/AJECNHKqof5gRQtqSu9D+RIHN95fgr3HLoWu/wCDwCJZoRhMJB5BHweJ7NeUukbggMuJV4b2APBr5mYPDUva+Y7zwm8jn2s9T7SJabSwZy6OcY7uTJxJGQk1R4Og66jGTXFbiCfa6iZxkcEUROacZR5RyThKPKoWKQLrHGWLZJCIEswiLiP5jE8k0ixgRCqYG5dGlsY0jwyZIqhli8lqwHDmgMuoij5IBnjjEEgz5pVMkWYyFeaoZpDJKNmi65JV2ktBYfzp0T3zoqEb2Iw4aJ76kfiJbQqHDkkO9xHz4RMkmgo7MImMbOwVFLMTQAFk/YRoDcwW6sgXRPX4E39Li0+AK43M1GsgQkg//Wx4BF81xVmVGNm2loy1HSQl/D3gyOXbUplCqQAFFWQfUD3+OJoah9PpcoRMD7MnLWoyldotQAeR669ve+J2p/iDEOS72D6FJba3b0qOLvnniu/aKZPEGC3je2LUrsQ9EFL5bt61F/TzXxK3RisHqaXRxirfPybefUAruYsLFHy1AcA+w9/k/rKafYi8MxXkkuS7e5JFmz8AzzY8Sylqy5g4G4KgCgLbHcTsuyTck+IjrZHND8hfbnp+8T6hXfsd8IJR9vg3w42sQ+TaxJBZgGHuAoJ2mq4NH3EHk1vlIPQ+ToAAwLe5st1479vYzATVAMSnVj1FgGgDd8H9f8w34lwLCO9CmDo5HH/IUT1HIPaT4/sFRUaf4wa2jdE3bFCbmLlS25uT1J94PL4uxby1TIp4HmKwA+SOel8UV/3MtsubgMW2g2qncFB5XcAw3LyPp4u773Atq3unewCAAVRaUd74LcC+STz16mTLVkkH8HSf7PR+ca672A3G+bqrLAD/ADUGviJIH9LH+nGvmDk/Sobt8/v0nmn1bUP5rAdSi5lRW4A59fBIFWV+9yTrOtNjAG4iswBogBRupen/AMRfPSNazpA5Qdpm/m8QyDIu/JswgMu2nFkk/UqqfVf9XH08xh9RiYAna4/p3KxDfH02v3NTzHnUP/cKSwbd/PUGxwpb1EP3PPxR5Nd+NctfmWy+oPuRrC/SqoljdxwCa45MfjPuRFwV0+f2epbxBV4GAu31GnCow6UD1Dc9CCOOvPErkV1BZGs9E3KNrGuGq7H2P6zzq6nUMp3E1Y6pubdR5BQbgtAdQRRq/SIB/FHoLlZqAI2uFCqCppV9PI6WWbvwOLJLUXclw05Knn7nq82gQr6WVHsjY2RCKHWmHP6gTC1KEEg/+fkfEDptZj4pCQoKkbxtVQSCFdUO5SaIJrpyObDT6pHX1pkDKo53KQaHQE9vjqJMoqXpweZ1HRqKco/0ZmUxN2hcrxdzISPNKmSDIEkCWNF1M5pKiX2wHQAiDYQ7iDYQQ6APKGEaCaWmI7dJLyplDAC2+dB7p0KA0zqYB9REV1Mq+eQ5WBrYsojAyiecGqIl8XiEHYZPV6DWJjJyMLKghQF3Hce9X94tq/4qJPCMev1bFBJ4tgE57d+oEzdNqwe8ZZlPUAxbnwbaeu4KkAf+JHu1xYl9qV7Hfj1deBzA6j+IMzkm0BJLEjGhayKJ3MCRxL5cSewir41HaUomvmZPuyT41n/vHWz6EFn5pfgSp8Z1FUMrAAUNvpoE3Q21XNGWGBfacNKsewPGb7sXfxLOeubIfu7n9zFnYnqbmkNGvvLfgl94bReJ8mKSZInEcy6iItEAn3kgn3MY02MFqPtHE0q+0dkynteTMs+87cfebuPSp7RlNKn9slsz8ZHmlJh8WqdfpZh9iR+09MmnT+0Qi4EH9AiteweYPOJ4hm7O/wD+m/3H9Frc1/Qp5BNrtuvcrXM1Cijoo/QQbtGq7FeZl2B5Xs3VXzXtAsZZzBx7TmolYRYMQiw2jSCrLESqmWJiKoG4gGh3aLuYACaDaEaDIlIkrUgiEVJbZCxC22dGfKkw3BZ5o6qXXPcRMshqU4oujURLkZMYEDj1NS76kGZ5sjJVc+3vGU8QmZle5CIZe1FUjYOquTvimHGZcvUQqNPFzCulRHS5RHy4MN1BZUSS04mByvQMq7LWTIIl0E5V5hgkybOqKC6X6vyjyRBODcbVo1wc+ss2NI0KrxVXlleJoxHVeEXJFEaEUxqIUHZ4BmkkyjS1EdEEypljKtLodErL3BXLbomiqChpJaCBnM0loDnaBYzmaCZ4qEXLStwRecjQoQwghhAI0MDIZJO2RL3Ok2B4h+JAeaDoDFsmKbqVlWDDQbmXAklYykCDxrA8F+GuHxaaopUDo0cDcSmdL5kYUjISxMrozujNRipjmDVSuTDFuhlYYcm1ie5TVLwItpss03w2q/a/1iVmkORHBg5PxJOOaGYhASVJvioFQD3F0CRfS4NHSngWVJZTDptPG4X94DNQthZAIvaCxF8dBz7RxROpHchjTYXdtqAngkmuAAL5PQQCa8IRvwOUYEqWtC3yp6Ec9RfaLF9Qw83a6J6aIRlx1drfY9upPWa2ifBmVjqsr7/pQg0qCwegU335569OAZWOFydOj0aS3SVr4DPnZEx6hFL4ypxuGKJuftYokDg9hdQxzlTjxvlTIpUs7YkVnU8jbuY0R09QF+k8dyn4bgxIVbMjOtXtUkeo11og1V9DfSN5QhDnGhTEQocEb+L4LXZF/wBoPY/YCb5Z2eWgntr71g0M+hLDcyeQgumdXIauxIBG74/LmZ+pwhCAGDcAmrFHng334v7ERnSsocJiztkQ0is24IrMSAp27j1XijzY4HadTqce8IMbM4YIwLh0c1RGMKu83wevB7cS9yo5dTo0/Tz/AIZpMGxl8nU8EUSKPUUeh+YBjKR5zTTpk3JDQdyQY6EFBlWaV3SGMloCHMA5hHMC8VCK7pZDAkwiGFDG0MOsVR4xjaQ4ioLOkbpEz2k0eSVzLq1xw6XjiUwJTdJphj5Ox+HMwupXJois9P4c4K7Tww/Q/nI1/h7sLAH6yqL24PNIQJxygSNXpnQ+pSPnt+sUY3IccmbHF1AjWLMKmIwhsGUiJwE4mvmbiZ2ZoYOZDJcSVAsFNMeR956d9elciyB2HHwJ55MYmhiI4EG64KU9pTV+IM6bKIYk2w9r6AQC6VuLXjgfM318JUQuTBQmyg+5upHmc2lZSNoJvihZP6CNto8qKGQurFGbJtP0J0G5j0J5468cTRwADIp9jf8AgxfOiZHytkz7EQ7/AC1+tyEHqFih0HvftE4pPBtpy/lnhC7p/Lx3nLllUeWAQqKPoG4H1EWBRA5urq42NWm8OcONaABx7nCMeeetrfHAPVfmA07tpnD6bKmUlNxZE3FAdocMCCV54v2PzUY/9f1ByfiGXc2040oMUtup9QIYkBrA6/lUng9KMnWFap96GsniKMS/lrjVto2rufZQAZkG5bPHQkiXz/h2yoq5j5fO93VEZeLI3qGB6cXYuhxcSxajMXfL5Kbj1wnGOVcFbTERZUbRyBwSPmhbWzMg8tcKuQN9OEYt6t3N7jXRVHPYQbbNFKmknSS97GdRmQOuJdSz4C3PpAVULjkiz6uLPYek/AJi1qYlfydWoJvGf5bgugIKshIJBPq79qJ5EzG8LzeYMQQl2sr2VlDbd6saG2+L/aLHRZS+wY3L2V2hSSSAWIFcHgE8dpFv2G9rVX9fk2NT4hp2Ix4sZtSR55d7yjk26MAA3PJoE1F3ET8F8PfKxdQ2zHtfI6gMUQ3Z2bgX4VuBzxNPLiqqIYEbgQQePmiabjkdjNoNtZPI6yEYztd+fqKyQZYpO2zQ5CAZBl1WQ8lgCaDYSxMhhEABxOBlnEgCUgLBodHi5XiEWJgMbp0Hc6KhDmqCVwo/KZuRR0Au+sjV6mBw55z2+SM8l1yPj6G1PYz0Hh3iAZLJqut9phWG9J4v8v8AM5sBUEXx7TZySVm0ZYyb2dw6EpyDYFj2+DPO6vTof6djf4jWm1Oxa72a+Ivqs5b6obrKe1oQOIS2PTCH0mBTdmODEij6jMZSpnPJ08CJwUIMmpqIEI4B+xMzNUQG4EFKxJ2V3y+PObH3EEguFROR9xKGe/df2iepHEeeJ6rpOts1iY7D1RLWaTFtZ8jorBiyDq7+kcFSKK2BX5+8a1LbTftF8yDKAe62V7i/t78CJRuJrFtO0X8Q1yKmRk12/KD5ZVMQxLkRiA/0gBr5Ngn6fkEGw6nI4xt+Nw4BkzHKuO1/kEBgj31UGqrj6r5szCfHk7oDzuop7/l2g82ImyyrdVe2jz3+/A5/3M7RotWsG1g16tldc+uyKiDamTGG3ZLdns7L4BZj9yPuFceoTcPMyPnwY2yIiB9uQLtVVcLztUALXNWgFdjm+YaA4Cg7goHF0RdH7/4lhkf+7tXFjj24/L/EVopatGomvwhnbJgz50dAunOR/UoFkWUo/X/aRxY7mG03iWnrGj5tSylC2RUZiwygIE2BqUhVHAPYAHoAcnHjfqDVkG9o5NVfHxGU0Lnjf9iOPm+P+kW5EvVvuaGDUY8+3fibHqEAJdF2K9N/UigBfSjLdnl+BQjpSU0Gj2L7k9T+cZKVLTMNSTbFmSDKRllgysTZnYICVdLEMVkMOJNjESkvt4hKnVHYMVdZCLDOsEBHYrJcSB0ksZKCQ5E2W2zoahOhuCzD1DcyMLcyMglUkCHwN3eF3GKI8KuSS7FkIg5vr+0jIm6z7dIXGb7SQh6QUqKjJozEDAge5h8ljrC5cNG6gckHkmSySmST6WNEdYFYwtVDgOB1NgWioiroLsDvBmExtyI4r3CNHtN0W1HSGVuILOeJ1NmsTG1K9ea4MTRqj+ualY/EwvOJMW7ajXdSNJdVZK+0BqU3AxRFNkxvw0Fno9KMxcnKSRzt3IzvJPtCLhmy+lEF5M0cKNVISRL9J7RjGdpAgn4c/wDfaS+QTKqbEsZN3TZe0b8kmZPheb3noUzLUuLsq1IzsuGoqzRnW6odBM1mPWJmckGLxbI84vAZWgsiiiyPDBogH9pfeZdFNB3aCZ5QgwbSGyaC7oRDF1hlmbZLDXOlLkxWKzHcwYkM8pumiQ0MB4RDFVeMYzBodGhgaNhhEMUZuQ4lbSNRkuJ5GhcxizNEoiaJQQhIqC3TmbiU0S0TujGmqxfuImsYxNJYj1WLMJL5ARMfBqOIVtR6ZqplKRXXn0N9pj4sVm+w5JmsjAim6dDA6lPSVQUDDcWpCiZQw/OhNHwrAoe7s7T9u0yQu2aPhWW8l/8AE8fpIj60/kzl6rNbOkScRzO8Sdp1Ski0zO1zAEjvxEEfmM69vX+X+4thHM5ZcsbHcDkTQTUOwqKYTt5ofFy+ncg3clELkIw55JMv+I4roILUOT8QaqZSdFJ0yGNmDYwxSVKSlItNCx+0IsuVnER7gbOZ4IyxWcEkNkNkpCrIVYSQ2ZsrOnXOiEeeZpS5LStToRogitGcRiiw6NGUjRR5ds0QXJOZ4qKDvkg90AXnBoUSw++Rug5dRJZLLLGEWCRYwkhkhUEJulVM6KhUEDSjZDz8yCZFxAC2WYzp3CtfTioBjBPkjTYzTfVRZs8QbLJR5e5jSL6vkg/lOwpJHMNjSJll1EJjWWRIRVkNksqVklYQLOKxCQs0rUOySNsqxpgNs4rD7ZRhCwsFU4CXqdUVksgCWnTpIFZ0idADzxEkCdOnQUiyrLATp0CiQJJkzowKEThOnRAwqiEUSJ0TJYZYZDOnSWIMJxM6dEIqWgy06dEAN2gXMmdKQ0CJl0M6dGyhnHG8c6dJYxjHCidOksllwJVjOnSWIGZBkzohFSYNjOnSgKyQJ06AHESJ06ICs6dOgM//2Q==",XP="What is the name of this mushroom ?",ZP=[{id:1,label:"A",text:"Rhizopus Rhino",isCorrect:!1},{id:2,label:"B",text:"Muimena Polifera",isCorrect:!1},{id:3,label:"C",text:"Amanita Muscaria",isCorrect:!0},{id:4,label:"D",text:"Shiitake",isCorrect:!1}],n_={id:zP,title:GP,description:JP,image:YP,question:XP,answers:ZP},$P=t=>(mi("data-v-3022319f"),t=t(),yi(),t),eb={class:"container"},tb={class:"card-container"},nb=$P(()=>oe("div",{class:"text-container"},[oe("h1",null,"Customize card to fit your learning needs")],-1)),rb={__name:"Section2",setup(t){const e=en(n_);return(n,r)=>(ee(),Ae("div",eb,[oe("div",tb,[ve($u,{style:{"box-shadow":"-15px 15px #D9D9D9"},card:e.value,showQuiz:!1},null,8,["card"])]),nb]))}},sb=En(rb,[["__scopeId","data-v-3022319f"]]),ib=[{id:1,title:"Lion",description:"Living in the grasslands, scrub, and open woodlands of sub-Saharan Africa, the lion is the second largest cat in the world.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlq0jJVVKsmdQsT40R8EgwQWzcyz8t4wM7Zg&usqp=CAU",question:"Where do lion live?",answers:[{id:1,label:"A",text:"Artic",isCorrect:!1},{id:2,label:"B",text:"Grasslands",isCorrect:!0},{id:3,label:"C",text:"Bog",isCorrect:!1},{id:4,label:"D",text:"Swamp",isCorrect:!1}]},{id:2,title:"Monkey",description:"There are currently 264 known monkey species.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpPNbBfpdaYJzQvSi9oNlMn5YDloR6lr10g&usqp=CAU",question:"How many known monkey species are there?",answers:[{id:1,label:"A",text:"50",isCorrect:!1},{id:2,label:"B",text:"100",isCorrect:!1},{id:3,label:"C",text:"200",isCorrect:!1},{id:4,label:"D",text:"264",isCorrect:!0}]},{id:3,title:"Owl",description:"There are around 200 different owl species.Owls are active at night (nocturnal).Most owls hunt insects, small mammals and other birds.",image:"data:image/jpeg;base64,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",question:"When are owls active?",answers:[{id:1,label:"A",text:"Day",isCorrect:!1},{id:2,label:"B",text:"Night",isCorrect:!0},{id:3,label:"C",text:"Dawn",isCorrect:!1},{id:4,label:"D",text:"Dusk",isCorrect:!1}]},{id:4,title:"Peacock",description:"Peacocks are large, colorful pheasants known for their iridescent tails. Their tail spans more than 60 percent of the bird’s total body length",image:"data:image/jpeg;base64,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",question:"What are peacocks known for?",answers:[{id:1,label:"A",text:"Long legs",isCorrect:!1},{id:2,label:"B",text:"Iridescent tails",isCorrect:!0},{id:3,label:"C",text:"Large wings",isCorrect:!1},{id:4,label:"D",text:"Colorful beaks",isCorrect:!1}]},{id:5,title:"Pigeon",description:"Most of our domesticated pigeons have a common ancestor, the Rock Dove pigeon.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjgRdDXIYOVvqvyndGghnQ0Gfr5g8goT12mg&usqp=CAU",question:"What is the common ancestor of pigeons?",answers:[{id:1,label:"A",text:"Eagle",isCorrect:!1},{id:2,label:"B",text:"Hawk",isCorrect:!1},{id:3,label:"C",text:"Rock Dove pigeon",isCorrect:!0},{id:4,label:"D",text:"Crow",isCorrect:!1}]},{id:6,title:"Spider",description:"Spiders are arachnids, not insects. Spiders have 8 legs while insects have 6.",image:"data:image/jpeg;base64,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",question:"How many legs do spiders have?",answers:[{id:1,label:"A",text:"6",isCorrect:!1},{id:2,label:"B",text:"8",isCorrect:!0},{id:3,label:"C",text:"10",isCorrect:!1},{id:4,label:"D",text:"12",isCorrect:!1}]},{id:7,title:"Tortoise",description:"A tortoise's shell is made up of 60 different bones all connected to each other The top of a tortoise's shell is called a “carapace” The underside of the shell is called a “plastron”.",image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFRUYGBgYGBwYGRgYGBgZGBgYGBgaGRgZGhgcIS4lHB4rIRoYJjgmKy8xNTU1HiQ7Qjs0Py40NTEBDAwMEA8QHxISHzQsJCw0NDQ0NDY0NDQ0NDQ2NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAJ8BPgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAQMEBQYAB//EADoQAAIBAwMCBAQFAgUEAwEAAAECEQADIQQSMQVBBiJRYRNxgZEyQqGxwVLRFGJy4fAHgpLxFiOiFf/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACcRAAICAgMAAgEEAwEAAAAAAAABAhEDIRIxQQQiYRNRkaFxgbEj/9oADAMBAAIRAxEAPwCv3V26m5rprns80dmumm5rposQU0hahmkmiwC3V26hrqLGLNdNJS0xBBqWaChmnQx2aUGmt1KGpUARNJNDurgaloaHKUUE1wNQykOiumh3V00i0Og0U00GogakpBNQiiY02TQMeQ0U00GpQ1XRDY4TTTtRTTbilQjlNEDQAV00qY7odBoWoC9D8Sjix80OA06DTAel3VSQmx+aEmg3V26hoLAY0qmkMVxNKgsIGjD+9Mk0BNHEOQzuoppIrttWYizXTXRXUwOJrqQ0s0rA6a6aQmkmmgoKaWam2dFb+GXe+EAjARnOeJAFVwfcWVAHDHahyHBJwcGBPoa3hik/DRY2OKCTA59O/wBq64qqYd1X7yPmIrRNZfQWd7w1x/KrmP8A68ccQTzWYt3fiPtDM7k/hVdzEn5VtH49270bKEUtq2Wun6Q1xN9pg4H9Ibkds1S/4tN22cgxBBBkc1renbtMrJcvhS2dgKkzHOMA+1Uty3ZDyEdjJ3Esok8+Ur+00o/Htv8AbwcoQrSork1CnE/xTwNOuHdgF06XEgwVDhgBzuYNM+5qXbs6YwC7I3EMxx7TxWWSHF0C+NyVplfupZqy1XTUTJfBEg7lx9O9V7WGAkQy+qkH7jkVzuPpEsMo9oQNRA00GopqaM7HA1FupmaHdSofIfL0m+m5rlppA5DoajBpkUYNWkQ2GWoS9dSRSoXIXdSBqQiup0Fi0gFEtdToViEUimjNAVoY0wwaQmgmimkKxKSaKkoCzqWKSjqgsaropaWkIGKQiipYpANGuomoI7UqGgW4J7DJo9OhKNcI8oO1F/Ncc8KPb1NOavplz4q2F5YKWicFsgGrvrWzTfDS2oNxUgNyEnJYD+qumEeNJbb/AKO3FgpcpDI6PaslL+vfzuu5dNaLKFHYNBwKYu9ecqUtIllC2+VHnxgS30z9pzVXednP5mJkknJ2qJJJP/BUzQ6AvEghTk+yjH3J/n0rtcYxVt2wVydI1vX7L6nToLcMCVJO4+bHO1fU+tVun0Z0qMqR8dhkhY2g/lWtr0XS7bSSIVV7iMekdv8An0outdXAY7EDNhVJE57Afv8AevPi5y+vlnclFXrox6+D9Rc3XAuzMuHYqWIyGUjIPvU3TdAvNCO6sYksAcjMTiA3Hsaquq9d1LsUF1jnYAp2qzTk45AqMl5wQFuPtAjDtLtyWOfl9x8q9GMci9RwzcW+jTPoGSy3wXLuWh9hXcGB4OZH1/msleRW7cHzbvxbuDJERntFavwZrFR3Q7ZMFSQcwPNnuffvmqfq3R2OpfahG5yQVJKwc98fSoUuM2pfyVxbSou9Z00XNEsAGEEEiCGQSckyDgj1rH6IEcEssxhXwf8AK7EGa1Oh0Qtor72PKsJlVnHmT8PoeKH/ABhR9rW0cLJKnjbtkbV4BgyYBJEVGOMWnxV7HNyT+2ihgjuGHrwyn0YA5+dFNSHs6XUOIVdM4kBk/AZkzj19as9D4XeCbd1XnkSIP0gwfeufNwXemS8DntMo5rgaf6npjZcIwInuf5phRWEo0ck4uDphilFcBSkVBFiUQNCK6ixjooopsGnBTJEIoacoDVDQooGNcxoZpNgPLSNSI1KxosQNEKCa4GgYa1xFKKU0IQ3RTSGh3RTsZ0UsV0100gFpa6kmhCG3NDYuQwbkKwIjknmKk2dE907VGPzHsBRaDSqboQHcAdxPz/2rqxwjGDnLw6cOJykjZ6NAEbUlRu24ntiqPQJvZ7zROY3mPnk+n8VZ+JdYEsKix5sx7CI/XFYu5eYjaWMBZAGJP5f71HxcUslyPQy5FCJrLnUdOrtbtwWChS4Vdkficz34B9wDVl4c0XxTLKAJBgjtGFI7wv6k1l/DfR3vSwwvBY5EAAkAd/yD/ura2OpW9NFtfMQfMxM945GT9fat86SqKMsLdNlv17Ui3aIBExxIGPl3+lebXnZ5Kc5RDxmPO/0GB7mtB4x1jOiumQ0CMHLYB+QyfpWLTrJQ7VEq0Ip/MFmSw/1HzH5rU48cpXKPhbmoxp+lYEIkkEMTsXnA4Yj+/vVza2MiAAAIu0DuxOSxPv8AtRdQ16XUtpaUmJ3Dbnf3+dTuk9BuMQzjYvYE5j5V1SnUbejngk5C9G0ZDhlGZ+1XXVLboBA55+f9v71baWxatAztweTA9hj70l/qVtgQCD7CvNlJylZ2Wo9LRhuqXSoIBPmG1oP6z61R6VmEd3QeU93RfMV9iv4h7SOAK1Wu6crksuAeR2+//OKotd0e8g3rJE4IBn1BjnH7V2fHnFaOfMnLYxdss4Z8SCGJwCA5wx9icGP5FT/D14s/lcqyHzLkH79xk/8AIqsS+V83Yjbt7MhkOhI9DET6r6CtJ06wiWdxMMdx3kEEgfhBHaBH379q+Uo8b9JwSknXhadWs29Qm0sN4Ej1+U1kHsFOeJiewPofeoVjr/mksJ94B+kGf0q1bVm4huKFbEOCDGPVcGa41jcNPp/0zXJGGWOmNKtEVobGoR/whlPdW5HoeZg+9PEVEoOLpnlzi4umR2FBNOXKZrFiDBpxTTSmiBoQDwNC5od1CxqrEcTSUhpJqWygwaKabBpZosAq6KQGlmmmIJaKabBohTECxoTTjLTRpMY7FdXE0SLNUIULR2rUyx/Cok/wKMLFdqbhCIq8M5JPrtGB96uEXKSivTbDBSlb6Wzr2sZQtq1guYYjkzyo/apF+3/hVChgLrgM5keVeyiu6EEV31NwwlpSRPG6P1PH1iszr+pNfd7mSzGQD2Ewo+gFdeSPJ/px6XZ3Y5V9n/o1HW0d7Fu4T+GA/wAm4M/6ttUioXYKuWdtq+knyj9SK3em04u6EQAFa1JkEAELjJySDxHeKzvhDQBn+O5hEPqAS2wsSJ9MH7VXx5qGJ34RmuUjW3NZY02mTTLdVXKQSVB2kmWJDCAZ9fQVmNTdsqp/+x2ZgPMixgf6RnvVT1HxEt649w3GBbCy6YUYA49BwKpb/WrZwXc/95H6LFb48Ua5SeyXka1FHrehs2ruiMFzutshZwQVkFWIJH4jxXkqP53Zvybh7b+DHsM/SK1ngvrNp7LoS0o5KA3HjzZyJzmaqR074upSxxvfe5zhGI/cSPrWeOSjKS8WwnckmaTw10f4dkXnBDMCZ52IRJHzjE+hNQNf15mckFlXsIPA74qy8adUa2i6ZAkwC5DnbtGAAApgkjIrFpdf1/8A0T+6CphilkTlL0tZIw0jQv1JWXLEn2DGP7VATVEOGQMc5nyg/X/ar/w8i37JDBN4JUndkYkQI96x/UHVLjoXJZWIgQTg+g/tUY8MeTi10aTzaVHovTNKlxPiFgV9B2Pof96p+oeIPgOF1FshBlQO6kmGg8g4xyf0OT6f1LUW23WpQYJNzAaP8hlj9APpW66Rc0uvV2uMfjoDEwNkiN9s5n0nkUPAoO3tf8Mv1OS12Jpuh2NWHuW7yJc5CjYxGMF05WSfY49qpus9RUI9u5aC3CrKrLuCOQSN4IyZgcg+lZ1LbWdTLu6pacbrlsjew9EHvxHfNb3qXwbyD4qQmwbVGGCfln3MD6enBU2oVe0EE5XWmeaLaiTCCO5Z4/aKl9I1XwySQCn5wGMAHAZVbOPal1PSnVzt/AZYQoEDJCkgc4p+30i84/AWkgQwkyTwJnNavLCSBYppjmo062rm5F3qw3TvVQQeREjjkc8VKVwwkfuJ+tWd3/p+ERPi6na5IY21Tfzyi+YEme5MdophfDLl12K6WtwBcqhOR2CYzgf9wrGUseVVF7RlPC2tldcppq0//wAdcBj8C4yh4DFwrFOxNoCZx2P2qK/QS7sluVKjcyvykmEUkTk+vFcrxyfRk8EkUIoqma3pd2yxV1ggbokHynho5iokVlJOPZlKLT2dXUqilIpAAaGjIpAtJgcKWuIpVWlQCCiihNcKpAOAUYSmwtO2qtEnfDofh1IpNtOhDKpTyLFcwxQo1PopdnXngE+1Sb+kcaawBlnaABzLyRiqjq2oACoQTvIXBjbnn5V6HZ/w6/DKE3DYBby5AKoVgniciK0j9al+Tswx+r/JjfGlt0RNLaCjYQXAuIjsAMGCZgtuP0FZX/D6kydn1d0Aj5kiah9Q1lx7z3r/AJXdi3mG8CTgSv8ASAAPlRt1F2AUZERCoe/eWNehjSS29g22eweFdPfvaFUYKihCsg7i0SMQYA95qqvXLGl6dZW6VV75ZpLQQrfikHB8u0fWpngnxQLlpNMBDhGndGADzAMZkVJ8T+C72pKEa34aohUALzJBJP2FcsZcZ01q72aNXG0zzptPoBBGzmCVYTEHEKO9c76ZB5LZ+a2mP6xVfr7CpcKHVF1VyhdERWaJEK4nbMHn+auPDvSNHqLu26HC7Z3NcaWPAg7o9e1d7yxSbpGPF/uzS/8ATvqdk3LgZIbauwsh7TMA/StJZ6LbfUtddNylCh/KFM7lMd8T9xiqXT+H9Bpm+JYNxzwdr3CAJz61W9V8QIH+BpndixVXKF8F2ChdpJlhIn6V58sjyZHx69N4xUY7M91pLFy/ccbyN5VSDd/Cp2rx7AVXnR2f6X/8rv8ALVvbPgLpxwV1UgZksB9wv81kvFPSdLYcJp7DvAJcu8wcbQAx9K68fyMbfGKMpRl2yf4QS18YpDgMs8vBII/zehNd4y2WLwFpQA6zCAnzA5JjHccms70u6Ld1HGn2lSCc9u4kHvXo3X73xtOyINqsgYBBPuJaAqmpnPhNOuwjHkjzm0l686oqQXwC7BVz6gZI+p+VX2o8PNYUPauPeugEOVVlRB+YKw7fvH0qhVArCVYHJlmnMY7wa2fhnq+9GRhuZBuVfykkwxIH4jMc+tPLJ1yXXoRirpmSR8+dgTyCqkBW9d/rzmBVp03qMbUuGVBw3ef8/Y9s071jSLvLAgBslFGAf4qPY6W7wqLungdxP7VDlDJGno0UZR2jdaDRqwBGRyTz9ZorOtt2g+qcgohKWU7u07CwH+rAPzrE+JeprobKaa05OpYhndXMWxMwPnwB8z85F6+f8PpXK70S3b3r/myZPqCSc15maNNJPTOhStWzQ3rmoZFutDO7sRsYu0RJVUABCYVCQQecnFM6zrGptPvceb+lRtVQ7IiyvYDbHrnmpPT/ABVbPnZNoAGFifv6VC6t1M31UoGJAKEYEqxGN3Yg5muyEoxSVJIzkm9lJqf+ori5DMSAYPmyDuYHjjj7EUaddYOtxD6cRkMVDBoGQZrP9S8Kl33LljBIV7akk99jsufdSR8qcPTRYSGkuoHkLBik587IYB9AD6Vs6atGS06PQ+qdWYoyubDgruG47XQMQBG3Bx8sCsm6DcwHZiPp2/SDVToNYwMHB7NBJEcjJxVtpQCCR3Y1y5kqM89OIgWuK09tpQlc9HIMbaIW6eCUaLQohZHa1SolSCtA3FVxCxprYpCBS5rlWikIRFp1RFIq0RppALFCWoWegmgCQRNNP5c+lOq1DcTcpHqDR2VHsz/U9UGCzOW3BhAKoBEdyDJj6Ve2tT8HQBVdle+QpIEbFI5aGBOB+sCqTrehKojdioH1DSf1NSvEXxRbtIskAbQPQ7Rx884PrXS5xaivLPSjBrS/YneG9XtZmIQ7RALHERMjcOT8uIrOf40l2f4wJdixQpGC0nv6Y4FPeG7shxhZEiRMRjE/L9KquqW3RzvMgHacRhpBMdpB7Vsp1kd/gjjcdF54W1S29QxcWohgN4LE5B+0Tjitd1rxKi2nK2rUhDDIzL2OYABFYnoNveScFlMGQJDDAI9iKseraRihEd+RXLmb/UNIRTijLWdbP4fIzZkSTuB4z7RHtWl8O9SNp2Ia825fxNABE8D2+lZDWWCj7QsYBHPI9613QNNvRWE+b9COf1mts0m4a6ZMYpSaZedS8U7LRK71MQvnOW/08R9K89s9TuFt247iWJIMHfMhvYyQa03XullgszAkff8A9Csq2j2OU+o+n+1R8ZJWh5VpM9N0/iJti7ETgGSTJMd/X61juuawteZnRMkeVQATAEdvetB4c0Re0uMAQfmMVI6r4eJEhcmAoAlp+QrKH/nN1/gtJSWzLaDUpbYOQXH4tkk/efQ1rtNqbl60h3lVghVHYSTH0BArM3fDt8OB8N5JAjae/rj2raeGOiXLNtvjwm1pIYjAIBrozP6KT7M4qpNIyWv6eS7EAyBPPOc/Kk6Yt1XVkUluNoEzPIiMzWw13WNBbO5jvIPmjCx3z3+dZfqP/UNVOzQ6dbbHHxCJf6d596WP5C48asqePpnoDNpEsfHvEIPzhiQwccqy/wBU9vlWP1Him7eDHQ20tKDHxWABgzwMAcHn04rL6fQXL7b9S1y+S27YrQu44878DECFz71pL7WUsnZacOPLCZtiMmT3z+1c7W7NY7Rgtd03UC6zXJdi0s4JcEn1bit70rUAWhbcSCiKR3/FULVOHI3almDJjbgB+Qvyqi6X1NlCy0kE+b6yP5rPJuhVXR6JrOmJZTeo3K8QTtBXHBPH96or3VnErsGRPkYHA7n0PH2pm31i845ZliCGkgjuDPaq7VXVQypDZnaYLKfTPIqU77C6VIc1wusd72mIPEoSR9TxUULd2EJbKiZyADwff5U7a8SFcZj3kf8A5p7/APvK2Ikn0Hf5Ct45ElRm02VqOd6gqQVifeOwHc1ptOmxAPTn5kyf3qH0TSvfvB4PlB2qFJYn8xAxwPerNym7arE/6l2t/wCMnHvWU5N9HPnjJrrQANHS7KbdopLo5UEXokeoZejR6akKSJZakAplWp0PVKSZIJSuUUReh3UgQcULLS7qVaoYxtpQtPMKCKkQ0HqRpdsjeYUnJ9BQPY2oGPf/AN00aiNouOnZqOu9AS9aUo42qJBWIYgcCKZ6z0Q/ByJYEQB3MQBVLolBDbiYiYkxPypgeM9VYcJKXEjau8eZfTzDJ+tOpUt+np48vLdETw30ZzdPkYLDchuNxAyeeeasvFPh4sCEBbcuBHEHGe9OL471MyLVvClY8xEYx+gqHpvHeoubj8NEIlcA49eZrfLKXJSomE0rQ74I8N3i5+IhQFAfMIkqBgD5EGtP1DoLOCioZJESMfOYivLur+LbjtBuOSh8oWQJ4I+WSKl6bqtxln4jqT2LEfrUZJNvk0OOvTSa7wNcd5NxVCmQN0jPfmrPpHTdNpy9s313KZG/uD3x7yPpWFv666YJuj/zkx8qq16hNwHJiQWgkR7n503OTjVaCvtdnq2sTTOAHvptBnyZJ9sjFVN/S9PDywLehAz371lV1iMpIDNC7jCkCPmcVWafqbXmKp5AM5gn0EAVMXJK0N09WeiaHxPp7SuiWBsDSsNtgNkAgD50zc8dOhlERZxPJ+5rJaTSMp2uTsueQsTDAnKsBGCGjn3qoXT6hGdXYeQkGQCTHce1DjKW7EpRTo13Uf8AqBqBMk+ggCs8PEN66WLlhuYDzE4HvVVrbzIAxyTxjBIp/puhe+ygo+zl2UfpJ7mmoNqmNOK2hrV6G/dvMnIU88LHII9THatB0/oCWYd2Qk42s+c/5VyBWu6J08XiyeVBbWSz/hAAjgHLcd6q9T1TT6a8d53hVOwFQBuOCxAGfaa0TitBF2rYlyXufDtMhULLsFMKo/KoPf3NRNf1y4UbTKqBEU8YJA7e5qv13UnVWe0Au/sREyfSmvD+mZ01GpumDsKgngCM4qVHlWhSzKKb/wBFLf1Cta3AbSXgKDAAC8/OomiSTAq/6d0pVsfEcb1kk4yoGJ/SaNekKtwFMgrOO0+tKT8G3qyvVCpIcGIztYyvvHemihVswy9iO49atzZC3PMJHvkfT0o9R0e2wZrRI2wWWSR5syJOPlUKn0K6VsqdNetuduzPqXcce01qulIiAKqoPXOSfcsM9sEx8qwt3Tnedp4P+1Weh1ro0GTtK7iDuGecHuTGKpa2itM1epnLgTjGxwAAeAckQO8niKkXuuq9sWntqjpBVyQIA9HB4ifLUS51ZlTyHzwAyMkqqN3MfXI5qzbXaa3pl32S4ddm5VBJJHbccZ71Tjf2C9UwkZSPK6uMeZWkcTk9qZurioOmACgbCrRO8OIcFlBUrGSJJ+9WDpP9qylpaOHLGpOiKiTS7INOEQpjkx9M1N1GlJCt6j+azjFsyZXsaXdTptASPST9qbFNRoTBJoPiZpwjmmTEe8zPscEftVCHg9OB6Z2GKLYYntStphQe+hL0JFMOCM9pj60cmJIsr+fL2QxPuBEVHuAjgY9ae01zczK3IjJ5Ykdx6+9cwJ3bj8h+5qn1ZVFl0/SbbLO34nkKPYZJH7Vg+sCXLAkwYj09q3b9SIshY8wQLJ4XH71nVs72LbBkgPjJ/pb59j6475pKR2KcYwpCaHTlxMd4pzUaBLYJbAI/59auOn6fZuE8mpN2zMMBlTI9j2NaynyVI4+f2MBrOhWntm7bkFGhlPDA9weZpNMQViI9pn9623VdMlu2VUDzxIERIxgVQabpwLemf+Gl2qZvHLorL3Sd4EDJPPoJ5qemhAtkIJKznuYNXDabapK5gQPf3pjQWGDQe5AM/em5WqBZDN6G+Yug/hVDjsORFV2gYB/Iu3ccxmtrc6Ui4/KzSw9faomg6azb7jp5nuwuMJbSSQPSSQPvSTVMay9kXr9t1s2yoI84cn6QP1ipniXSMbwZB+OyjmP6mBH8CrbWoHZUI8oTPzJiu6mJcFRkKFHc+VY/vVRkkjGM3Sv8matdMtuFRpKowZ2HdjyoPZe33rTae4iJ5UAUCFWOw5Mj9qZ09sKsAAA5Ye5Bpp7J2if+AVPLRccvYz1C462GNtiDJJ98SJrPWtC7MGc7i8GY7DtWmsE7yCJRuR29P2NHd06pCgYBxNQpPT/klZpJUUWqsbnVYhVyfftV2bW6ythFySGb0hc5+sUdnp29x/Tg/anrj7XfbiRFaNtE89r8FR1WwxtbUb8R2s3rjMe1QOiWWBeTOYHy7VfWbMjb6DH3z+9Cml2tH1pNqi/1W00ZvW32Fx44RQT7ljAFW2isAWpbBfsPcfwKm6boquzk8Hbu9wuaTVWAXAGAowP0pOl0OWRtJEKz0m0rCEkkiDJnjIn6VR9Q6e6XTdtp5AxYxGAOQR39Z+dbTTJtDOZLBSFHuRzVOUDKUYna2CRzBEGKI9hHLJMhW9U6uzlA6sAZmIIxA9uK0DOLmjaUBJY9+JHIPqKzvStOVZrbSQj7VJ7qRKk/TH0rT6NZUqYieO1appaNHkaKay7hAH7Znufn71b9K0t68AQFXmXc7E8uC0nn6U8yJaKlUDk/mcbgD/lXjtyZppdQ7kvcyB+Ef39e3sKzajZEp92Sblm0kecuRyFXyyfdsn6U/cugqo+f0k1XC5uMEe5qSjQQSODNFaMGxooGb8USYO4EfQHimnt8jiDx3pzUhj5QcsCX9AGztnsYx9TTWkuGWVuzQsdhHr3FQu6Aau2jjIzgCaaZIA+ealvbInylm/FjkAftUdyAkgyTtn0EnK5HNTJ0McLdv+SeKkas+VQBxzQWG2De20gflMgyI4PrMCKJBuLEGc59VxMEDjEVSViIrsBzzUdnj5H/AHqZcUEyFwDDH2700LQfHpmpbCiZpLALFmOSZj15p7WMF8xHcADtHc0jGDNHdIYVXhSI9sbgO3f+1OoQOPv60gWKAVmBItvBmpQfvUQUTPirjolxI2pMnNDZSaRxmnNPzSvYN0h/ZiK5ECmnnbtTRNMSbAurNSjqfJtP9PPc+596jUBNOht+DlpcD1mlvaeYM8GkstiKNmxQnQrGRgmgvpIpxWonNIS0xiyhXJpLx3GadIxQRQN0Oaa5tpGtTk02Gg0/vqr0Kgbdvze3Fdes53USNT94+SKSBEX/ABUCBUJFO750YXNP20qfTRdETUIZEEgLmf2oFtzz3qw+HNAlqnsCJc0qySfbjvtkj965ZqYVj70O2TVJiY5fYHaPQD75mmrwkewH805FMGk7G2P6NBzUoiATioiNFP21nmrT0ZNEa4CeB7/70ejtqpyMnNS3A4FRWMGaj0uJ2uYrwMk8+0ERFR9LpiRJPGeP2qWSGo2YKsRzRSb2EiLeUGJ/CuAO5PJYn50zoLZ3tAwWz8o4mpbWd2SaWwdpgcULsENXrESNxVfX/NE/xUe0/lAmIAGJgkTk+9TtZYLRHrPNSen9JJHA49qmUeRTs//Z",question:"What is the top of a tortoise's shell called?",answers:[{id:1,label:"A",text:"Plastron",isCorrect:!1},{id:2,label:"B",text:"Carapace",isCorrect:!0},{id:3,label:"C",text:"Scute",isCorrect:!1},{id:4,label:"D",text:"Shelltop",isCorrect:!1}]},{id:8,title:"Zebra",description:"Zebra are part of the equidae family along with horse and donkeys.Every zebra has a unique pattern of black and white stripes.",image:"data:image/jpeg;base64,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",question:"What family are zebras part of?",answers:[{id:1,label:"A",text:"Felidae",isCorrect:!1},{id:2,label:"B",text:"Canidae",isCorrect:!1},{id:3,label:"C",text:"Equidae",isCorrect:!0},{id:4,label:"D",text:"Bovidae",isCorrect:!1}]}],ob=t=>(mi("data-v-ea59f953"),t=t(),yi(),t),ab={class:"container"},cb=ob(()=>oe("div",{class:"text-container"},[oe("h1",null,"Share your personalized deck with students")],-1)),lb={class:"card-container"},ub={__name:"Section3",setup(t){en(!1);const e=en(ib);return(n,r)=>(ee(),Ae("div",ab,[cb,oe("div",lb,[(ee(!0),Ae(yt,null,kc(e.value.slice(0,5),(s,i)=>(ee(),Ae("div",{key:s.id},[ve($u,{showQuiz:!1,card:s,style:$o({position:"relative",float:"right",top:i*-407+"px",left:(i%2===0?-1:1)*i*25+(i===0?-10:0)+"px","z-index":5-i,"box-shadow":"0px 7px 6px #D9D9D9",overflow:"hidden"})},null,8,["card","style"])]))),128))])]))}},hb=En(ub,[["__scopeId","data-v-ea59f953"]]),db=t=>(mi("data-v-c5c63e66"),t=t(),yi(),t),fb={class:"container"},pb={class:"card-container"},gb=db(()=>oe("div",{class:"text-container"},[oe("h1",null,"Add a quiz to test your student’s understanding")],-1)),mb={__name:"Section4",setup(t){const e=en(n_);return(n,r)=>(ee(),Ae("div",fb,[oe("div",pb,[ve($u,{style:{"box-shadow":"-15px 15px #D9D9D9"},card:e.value,showQuiz:!0},null,8,["card"])]),gb]))}},yb=En(mb,[["__scopeId","data-v-c5c63e66"]]),_b={},Qa=t=>(mi("data-v-fa9dfd7f"),t=t(),yi(),t),Ab={class:"container"},Eb={class:"signup-card"},vb=Qa(()=>oe("h1",null,"Customize your own flashcard now",-1)),Ib=Qa(()=>oe("h4",null,"Get teacher account",-1)),Tb={class:"signup-card"},wb=Qa(()=>oe("h1",null,"Experience learning with us",-1)),Rb=Qa(()=>oe("h4",null,"Get student account",-1));function Sb(t,e){return ee(),Ae("div",Ab,[oe("div",Eb,[vb,oe("div",null,[Ib,oe("button",{onClick:e[0]||(e[0]=n=>t.$router.push("register"))},"SignUp")])]),oe("div",Tb,[wb,oe("div",null,[Rb,oe("button",{onClick:e[1]||(e[1]=n=>t.$router.push("register"))},"SignUp")])])])}const Cb=En(_b,[["render",Sb],["__scopeId","data-v-fa9dfd7f"]]),Pb={__name:"HomeView",setup(t){const e=en(!1),n=en("");return Vl(()=>{Ag(_l,async r=>{if(r){e.value=!0;const s=zu(t_,"users",r.uid),i=await Zy(s);i.exists()&&(n.value=i.data().role)}else e.value=!1,n.value=""})}),(r,s)=>(ee(),Ae("main",null,[ve(WP),ve(sb),ve(hb),ve(yb),e.value?jt("",!0):(ee(),qt(Cb,{key:0}))]))}},r_=kv({history:GE("/"),routes:[{path:"/",name:"home",component:Pb},{path:"/about",name:"about",component:()=>pt(()=>import("./AboutView-RSABFvEk.js"),__vite__mapDeps([0,1]))},{path:"/login",name:"login",component:()=>pt(()=>import("./LoginView-wT_bGkp9.js"),__vite__mapDeps([2,3,4,5]))},{path:"/register",name:"register",component:()=>pt(()=>import("./RegisterView-Ngm90rai.js"),__vite__mapDeps([6,3,4,7]))},{path:"/decks",name:"decks",component:()=>pt(()=>import("./DecksView-PhfEy7_x.js"),__vite__mapDeps([8,9,10]))},{path:"/create-deck",name:"create-deck",component:()=>pt(()=>import("./CreateDeckView-N0yJGndY.js"),__vite__mapDeps([11,12,13]))},{path:"/edit-deck",name:"edit-deck",component:()=>pt(()=>import("./EditDeckView-bxN9BWF2.js"),__vite__mapDeps([14,12,15]))},{path:"/add-flashcard",name:"add-flashcard",component:()=>pt(()=>import("./AddFlashCardView-N_03eist.js"),__vite__mapDeps([16,9,17]))},{path:"/search",name:"search",component:()=>pt(()=>import("./SearchView-w9ViUL0V.js"),__vite__mapDeps([18,12,9,19]))},{path:"/teachers",name:"teachers",component:()=>pt(()=>import("./TeachersView-cZRY2TL-.js"),__vite__mapDeps([20,12,21]))},{path:"/teacher-profile",name:"teacher-profile",component:()=>pt(()=>import("./TeacherProfileView-7OM0mr8B.js"),__vite__mapDeps([22,23,24]))},{path:"/study",name:"study",component:()=>pt(()=>import("./StudyView-2_soqjpE.js"),__vite__mapDeps([25,26]))},{path:"/quiz/",name:"quiz",component:()=>pt(()=>import("./QuizView-SBom4e4p.js"),__vite__mapDeps([27,28]))},{path:"/profile",name:"profile",component:()=>pt(()=>import("./ProfileView-mRQs4Q5A.js"),__vite__mapDeps([23,24]))}],scrollBehavior(){return new Promise(t=>{t({left:0,top:0})})}}),bb={class:"navbar"},kb={__name:"NavBar",setup(t){const e=en(!1),n=en("");Vl(()=>{Ag(_l,async s=>{if(s){e.value=!0;const i=zu(t_,"users",s.uid),o=await Zy(i);o.exists()&&(n.value=o.data().role)}else e.value=!1,n.value=""})});const r=()=>{lw(_l).then(()=>{r_.push("/")})};return(s,i)=>(ee(),Ae("div",bb,[oe("div",null,[oe("div",null,[ve(Qe(Pt),{style:{"text-decoration":"none"},class:"logo",to:"/"},{default:gt(()=>[mt("FlipLearn")]),_:1})]),oe("div",null,[e.value?(ee(),qt(Qe(Pt),{key:0,style:{"text-decoration":"none","font-weight":"600"},"active-class":"active",to:"/decks"},{default:gt(()=>[mt("Decks")]),_:1})):jt("",!0),n.value==="teacher"?(ee(),qt(Qe(Pt),{key:1,style:{"text-decoration":"none","font-weight":"600"},"active-class":"active",to:"/create-deck"},{default:gt(()=>[mt("Create Deck")]),_:1})):jt("",!0),n.value==="teacher"?(ee(),qt(Qe(Pt),{key:2,style:{"text-decoration":"none","font-weight":"600"},"active-class":"active",to:"/add-flashcard"},{default:gt(()=>[mt("Add Flashcard")]),_:1})):jt("",!0),n.value==="student"?(ee(),qt(Qe(Pt),{key:3,style:{"text-decoration":"none","font-weight":"600"},"active-class":"active",to:"/search"},{default:gt(()=>[mt("Search")]),_:1})):jt("",!0),n.value==="student"?(ee(),qt(Qe(Pt),{key:4,style:{"text-decoration":"none","font-weight":"600"},"active-class":"active",to:"/teachers"},{default:gt(()=>[mt("Teachers")]),_:1})):jt("",!0),ve(Qe(Pt),{style:{"text-decoration":"none","font-weight":"600"},"active-class":"active",to:"/about"},{default:gt(()=>[mt("About")]),_:1})])]),oe("div",null,[e.value?jt("",!0):(ee(),qt(Qe(Pt),{key:0,style:{"text-decoration":"none","font-weight":"600"},"active-class":"active",to:"/register"},{default:gt(()=>[mt("Register")]),_:1})),e.value?jt("",!0):(ee(),qt(Qe(Pt),{key:1,style:{"text-decoration":"none","font-weight":"600"},"active-class":"active",to:"/login"},{default:gt(()=>[mt("Login")]),_:1})),e.value?(ee(),Ae("i",{key:2,onClick:i[0]||(i[0]=o=>s.$router.push("profile")),class:"fa-regular fa-user fa-xl"})):jt("",!0),e.value?(ee(),Ae("button",{key:3,onClick:r},"Sign out")):jt("",!0)])]))}},Db=En(kb,[["__scopeId","data-v-555686ec"]]),Nb={__name:"Footer",setup(t){return(e,n)=>(ee(),Ae("div",null,[ve(Qe(Pt),{style:{"text-decoration":"none",color:"black","font-weight":"600"},to:"/"},{default:gt(()=>[mt("Fliplearn")]),_:1})]))}},Vb=En(Nb,[["__scopeId","data-v-766bc55c"]]),Ob={class:"container"},Mb={__name:"App",setup(t){return(e,n)=>(ee(),Ae("div",Ob,[ve(Db),ve(Qe(Bp),null,{default:gt(({Component:r})=>[ve(Bl,{name:"route",mode:"out-in"},{default:gt(()=>[(ee(),qt(nA(r)))]),_:2},1024)]),_:1}),ve(Vb)]))}},xb=En(Mb,[["__scopeId","data-v-54499d73"]]),Lb=kE(),eh=SE(xb);eh.use(r_);eh.use(Lb);eh.mount("#app");export{Hb as A,Ub as B,jb as C,Jb as D,Bb as E,$u as F,Dn as G,Vl as H,Ag as I,Gb as J,zb as K,Yb as L,Tl as M,Xb as N,kt as O,Fb as P,qt as Q,Pt as R,En as _,yi as a,oe as b,Ae as c,ve as d,fp as e,ib as f,yt as g,kc as h,mt as i,jt as j,gt as k,_l as l,n_ as m,$o as n,ee as o,mi as p,zu as q,en as r,qb as s,As as t,Qe as u,zi as v,Ki as w,t_ as x,Zy as y,r_ as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AboutView-RSABFvEk.js","assets/AboutView-2rSZQFHL.css","assets/LoginView-wT_bGkp9.js","assets/Showcase-eXJs5Ki5.js","assets/Showcase-BqxK9_qE.css","assets/LoginView-OZOsvIWX.css","assets/RegisterView-Ngm90rai.js","assets/RegisterView-l3OBNm1e.css","assets/DecksView-PhfEy7_x.js","assets/dummyDecks-z8ibd4Ki.js","assets/DecksView-uLeCmUO8.css","assets/CreateDeckView-N0yJGndY.js","assets/dummyTags-k3jjDhlf.js","assets/CreateDeckView-zxSsC5tz.css","assets/EditDeckView-bxN9BWF2.js","assets/EditDeckView-dKKAiQVN.css","assets/AddFlashCardView-N_03eist.js","assets/AddFlashCardView-c7ez9G4q.css","assets/SearchView-w9ViUL0V.js","assets/SearchView-lnXCn9gw.css","assets/TeachersView-cZRY2TL-.js","assets/TeachersView-iq6MmP20.css","assets/TeacherProfileView-7OM0mr8B.js","assets/ProfileView-mRQs4Q5A.js","assets/ProfileView-90nzqcIt.css","assets/StudyView-2_soqjpE.js","assets/StudyView-jXti9wFR.css","assets/QuizView-SBom4e4p.js","assets/QuizView-2KD6pIYx.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}