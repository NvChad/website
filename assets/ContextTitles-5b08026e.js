import{$ as f,q as _,v as $,w as p,c as x,e as D,g as H,i as L,b as N,u as R,A as T,d as I,f as q,r as B,t as K}from"./entry-client-99d97252.js";const O=Symbol("store-raw"),a=Symbol("store-node"),d=Symbol("store-has"),m=Symbol("store-self");function S(e){let n=e[f];if(!n&&(Object.defineProperty(e,f,{value:n=new Proxy(e,v)}),!Array.isArray(e))){const t=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let r=0,l=t.length;r<l;r++){const i=t[r];o[i].get&&Object.defineProperty(e,i,{enumerable:o[i].enumerable,get:o[i].get.bind(n)})}}return n}function h(e){let n;return e!=null&&typeof e=="object"&&(e[f]||!(n=Object.getPrototypeOf(e))||n===Object.prototype||Array.isArray(e))}function g(e,n=new Set){let t,o,r,l;if(t=e!=null&&e[O])return t;if(!h(e)||n.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):n.add(e);for(let i=0,c=e.length;i<c;i++)r=e[i],(o=g(r,n))!==r&&(e[i]=o)}else{Object.isFrozen(e)?e=Object.assign({},e):n.add(e);const i=Object.keys(e),c=Object.getOwnPropertyDescriptors(e);for(let s=0,w=i.length;s<w;s++)l=i[s],!c[l].get&&(r=e[l],(o=g(r,n))!==r&&(e[l]=o))}return e}function y(e,n){let t=e[n];return t||Object.defineProperty(e,n,{value:t=Object.create(null)}),t}function b(e,n,t){if(e[n])return e[n];const[o,r]=x(t,{equals:!1,internal:!0});return o.$=r,e[n]=o}function V(e,n){const t=Reflect.getOwnPropertyDescriptor(e,n);return!t||t.get||!t.configurable||n===f||n===a||(delete t.value,delete t.writable,t.get=()=>e[f][n]),t}function E(e){$()&&b(y(e,a),m)()}function W(e){return E(e),Reflect.ownKeys(e)}const v={get(e,n,t){if(n===O)return e;if(n===f)return t;if(n===_)return E(e),t;const o=y(e,a),r=o[n];let l=r?r():e[n];if(n===a||n===d||n==="__proto__")return l;if(!r){const i=Object.getOwnPropertyDescriptor(e,n);$()&&(typeof l!="function"||e.hasOwnProperty(n))&&!(i&&i.get)&&(l=b(o,n,l)())}return h(l)?S(l):l},has(e,n){return n===O||n===f||n===_||n===a||n===d||n==="__proto__"?!0:($()&&b(y(e,d),n)(),n in e)},set(){return!0},deleteProperty(){return!0},ownKeys:W,getOwnPropertyDescriptor:V};function A(e,n,t,o=!1){if(!o&&e[n]===t)return;const r=e[n],l=e.length;t===void 0?(delete e[n],e[d]&&e[d][n]&&r!==void 0&&e[d][n].$()):(e[n]=t,e[d]&&e[d][n]&&r===void 0&&e[d][n].$());let i=y(e,a),c;if((c=b(i,n,r))&&c.$(()=>t),Array.isArray(e)&&e.length!==l){for(let s=e.length;s<l;s++)(c=i[s])&&c.$();(c=b(i,"length",l))&&c.$(e.length)}(c=i[m])&&c.$()}function P(e,n){const t=Object.keys(n);for(let o=0;o<t.length;o+=1){const r=t[o];A(e,r,n[r])}}function F(e,n){if(typeof n=="function"&&(n=n(e)),n=g(n),Array.isArray(n)){if(e===n)return;let t=0,o=n.length;for(;t<o;t++){const r=n[t];e[t]!==r&&A(e,t,r)}A(e,"length",o)}else P(e,n)}function u(e,n,t=[]){let o,r=e;if(n.length>1){o=n.shift();const i=typeof o,c=Array.isArray(e);if(Array.isArray(o)){for(let s=0;s<o.length;s++)u(e,[o[s]].concat(n),t);return}else if(c&&i==="function"){for(let s=0;s<e.length;s++)o(e[s],s)&&u(e,[s].concat(n),t);return}else if(c&&i==="object"){const{from:s=0,to:w=e.length-1,by:j=1}=o;for(let k=s;k<=w;k+=j)u(e,[k].concat(n),t);return}else if(n.length>1){u(e[o],n,[o].concat(t));return}r=e[o],t=[o].concat(t)}let l=n[0];typeof l=="function"&&(l=l(r,t),l===r)||o===void 0&&l==null||(l=g(l),o===void 0||h(r)&&h(l)&&!Array.isArray(l)?P(r,l):A(e,o,l))}function z(...[e,n]){const t=g(e||{}),o=Array.isArray(t),r=S(t);function l(...i){p(()=>{o&&i.length===1?F(t,i[0]):u(t,i)})}return[r,l]}function X(e){const n=e.getBoundingClientRect();return!!(n.top>=0&&n.left>=0&&n.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&n.right<=(window.innerWidth||document.documentElement.clientWidth))}const[Y,C]=x(""),[G,J]=z([]),Z=e=>{let t=document.getElementById(e)?.querySelectorAll("h2,h3");for(let o=0;o<t.length;o++)if(X(t[o])){C(t[o].innerText);break}},ee=()=>{const n=document.getElementById("DocContent")?.querySelectorAll("h2, h3"),t=[];n?.forEach(o=>{o.id=o.innerText.replaceAll(/[ .&]/g,"_").toLowerCase(),t.push([o.localName.toLowerCase(),o.innerText])}),J(t)},ne=()=>{const e=location.hash;if(e[0]==="#"){const n=e.substring(1);document.getElementById(n).scrollIntoView()}},M=K('<div h-fit mt-6 xl="sticky top-30"><button class="rounded-lg text-lg bg-blue-1 dark:bg-dark-3 mb-3 w-full" m="t-[-2rem]" xl="rounded-none pb-2 border-l-solid mb-0 pt-0 bg-transparent dark:bg-transparent">Page Contents<div class="i-mdi-chevron-down-circle text-2xl xl:hidden text-slate-7 dark:bg-blue-3"></div></button><div text="slate-5" mb-5>');function Q(e){let n=`rounded-r-lg py-2  px-5 text-darkgrey xl:border-solid border-0 border-l-2 border-slate-2 dark:border-dark-3 ${Y()==e[1]?"!border-blue-5 bg-slate-2 xl:bg-sky-1 !text-blue-7 font-medium dark:bg-dark-3 dark:!text-blue-3 dark:border-blue-4":""}`;return e[0]=="h3"?`pl-10 ${n}`:`${n}`}function te(){const[e,n]=x(!1);return(()=>{const t=H(M),o=t.firstChild,r=o.nextSibling;return o.$$click=()=>n(!e()),L(r,()=>G.map(l=>N(T,{get href(){return`${R().pathname}#${l[1].replaceAll(/[ .&]/g,"_").toLowerCase()}`},get class(){return Q(l)},onclick:()=>C(l[1]),get children(){return l[1]}}))),I(()=>q(r,`grid xl:grid py-3 xl:py-0 bg-slate-1 dark:bg-dark-3 xl:bg-transparent xl:dark-bg-transparent ${e()?"":"hidden"}`)),B(),t})()}D(["click"]);export{te as C,ee as a,ne as b,G as c,Z as g};