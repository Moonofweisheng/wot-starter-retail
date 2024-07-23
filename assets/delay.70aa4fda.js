import{q as e,a4 as t,m as a,a8 as l,a9 as o,c as s,r,d as n,C as i,o as u,f as c,g as d,w as v,h as f,n as p,k as m,l as h,P as g,p as w,a as y,s as b,aa as x,i as _,J as k,ab as C,j as $,b as I,D as O,t as F,H as S,I as B,_ as N,N as z,ac as A,ad as T,O as G,x as M,ae as V,a5 as D,A as E,E as H,F as P,af as j,ag as R,ah as U,a6 as L,a1 as W,ai as Z,V as q,W as J}from"./index-1726c296.js";const Y=[Number,String],K=e=>({type:e,required:!0}),Q=()=>({type:Array,default:()=>[]}),X=e=>({type:Boolean,default:e}),ee=e=>({type:Number,default:e}),te=e=>({type:Y,default:e}),ae=e=>({type:String,default:e}),le={customStyle:ae(""),customClass:ae("")},oe=(e,t)=>{const a=e.__vccOpts||e;for(const[l,o]of t)a[l]=o;return a};const se=(e,t)=>{const a=e.indexOf(t);return-1===a?e.findIndex((e=>void 0!==t.key&&null!==t.key&&e.type===t.type&&e.key===t.key)):a};function re(e,t,a){const l=e&&e.subTree&&e.subTree.children?function(e){const t=[],a=e=>{Array.isArray(e)&&e.forEach((e=>{var l,o;(o=e)&&!0===o.__v_isVNode&&(t.push(e),(null==(l=e.component)?void 0:l.subTree)&&(t.push(e.component.subTree),a(e.component.subTree.children)),e.children&&a(e.children))}))};return a(e),t}(e.subTree.children):[];a.sort(((e,t)=>se(l,e.vnode)-se(l,t.vnode)));const o=a.map((e=>e.proxy));t.sort(((e,t)=>o.indexOf(e)-o.indexOf(t)))}function ne(l){const o=e([]),s=e([]),r=a();return{children:o,linkChildren:e=>{t(l,Object.assign({link:e=>{e.proxy&&(s.push(e),o.push(e.proxy),re(r,o,s))},unlink:e=>{const t=s.indexOf(e);o.splice(t,1),s.splice(t,1)},children:o,internalChildren:s},e))}}}function ie(e){const t=l(e,null);if(t){const e=a(),{link:l,unlink:r,internalChildren:n}=t;l(e),o((()=>r(e)));return{parent:t,index:s((()=>n.indexOf(e)))}}return{parent:null,index:r(-1)}}const ue=oe(n({name:"wd-icon",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...le,name:K(String),color:String,size:String,classPrefix:ae("wd-icon")},emits:["click"],setup(e,{emit:t}){const a=e,l=r(!1);i((()=>a.name),(e=>{l.value=e.indexOf("/")>-1}),{deep:!0,immediate:!0});const o=s((()=>{const e=a.classPrefix;return`${e} ${a.customClass} ${l.value?"wd-icon--image":e+"-"+a.name}`})),n=s((()=>{const e={};return a.color&&(e.color=a.color),a.size&&(e["font-size"]=a.size),`${u(e)}; ${a.customStyle}`}));function y(e){t("click",e)}return(e,t)=>{const a=g,s=w;return c(),d(s,{onClick:y,class:p(m(o)),style:h(m(n))},{default:v((()=>[l.value?(c(),d(a,{key:0,class:"wd-icon__image",src:e.name},null,8,["src"])):f("v-if",!0)])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-a87d61a4"]]),ce=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"],de=e=>e.replace(/[+/]/g,(e=>"+"===e?"-":"_")).replace(/=+\$/m,""),ve="function"==typeof btoa?e=>btoa(e):e=>{if(e.charCodeAt(0)>255)throw new RangeError("The string contains invalid characters.");return((e,t=!1)=>{let a="";for(let l=0,o=e.length;l<o;l+=3){const[t,o,s]=[e[l],e[l+1],e[l+2]],r=t<<16|o<<8|s;a+=ce[r>>>18],a+=ce[r>>>12&63],a+=void 0!==o?ce[r>>>6&63]:"=",a+=void 0!==s?ce[63&r]:"="}return t?de(a):a})(Uint8Array.from(e,(e=>e.charCodeAt(0))))};function fe(e,t=!1){const a=ve((e=>unescape(encodeURIComponent(e)))(e));return t?de(a):a}const pe=oe(n({name:"wd-loading",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...le,type:ae("ring"),color:ae("#4D80F0"),size:te("32px")},setup(e){const t=e,a=C.id++,l=C.id++,o=C.id++,n={outline:(e="#4D80F0")=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><defs><linearGradient x1="100%" y1="0%" x2="0%" y2="0%" id="${a}"><stop stop-color="#FFF" offset="0%" stop-opacity="0"/><stop stop-color="#FFF" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M21 1c11.046 0 20 8.954 20 20s-8.954 20-20 20S1 32.046 1 21 9.954 1 21 1zm0 7C13.82 8 8 13.82 8 21s5.82 13 13 13 13-5.82 13-13S28.18 8 21 8z" fill="${e}"/><path d="M4.599 21c0 9.044 7.332 16.376 16.376 16.376 9.045 0 16.376-7.332 16.376-16.376" stroke="url(#${a}) " stroke-width="3.5" stroke-linecap="round"/></g></svg>`,ring:(e="#4D80F0",t="#a6bff7")=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><linearGradient id="${l}" gradientUnits="userSpaceOnUse" x1="50" x2="50" y2="180"><stop offset="0" stop-color="${e}"></stop> <stop offset="1" stop-color="${t}"></stop></linearGradient> <path fill="url(#${l})" d="M20 100c0-44.1 35.9-80 80-80V0C44.8 0 0 44.8 0 100s44.8 100 100 100v-20c-44.1 0-80-35.9-80-80z"></path> <linearGradient id="${o}" gradientUnits="userSpaceOnUse" x1="150" y1="20" x2="150" y2="180"><stop offset="0" stop-color="#fff" stop-opacity="0"></stop> <stop offset="1" stop-color="${t}"></stop></linearGradient> <path fill="url(#${o})" d="M100 0v20c44.1 0 80 35.9 80 80s-35.9 80-80 80v20c55.2 0 100-44.8 100-100S155.2 0 100 0z"></path> <circle cx="100" cy="10" r="10" fill="${e}"></circle></svg>`},f=r(""),g=r(""),$=r("32px");i((()=>t.size),(e=>{$.value=y(e)}),{deep:!0,immediate:!0}),i((()=>t.type),(()=>{F()}),{deep:!0,immediate:!0});const I=s((()=>{const e={width:$.value,height:$.value};return`${u(e)}; ${t.customStyle}`})),O=s((()=>`wd-loading  ${t.customClass}`));function F(){const{type:e,color:a}=t;let l=k(e)?e:"ring";const o=`"data:image/svg+xml;base64,${fe("ring"===l?n[l](a,g.value):n[l](a))}"`;f.value=o}return b((()=>{g.value=x(t.color,"#ffffff",2)[1],F()})),(e,t)=>{const a=w;return c(),d(a,{class:p(m(O)),style:h(m(I))},{default:v((()=>[_(a,{class:"wd-loading__body"},{default:v((()=>[_(a,{class:"wd-loading__svg",style:h(`background-image: url(${f.value});`)},null,8,["style"])])),_:1})])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-ca79b54b"]]),me=n({name:"wd-config-provider",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{theme:ae("light"),themeVars:{type:Object,default:()=>({})}},setup(e){const t=e,a=s((()=>`wot-theme-${t.theme}`)),l=s((()=>o(t.themeVars))),o=e=>{if(!e)return;const t={};return Object.keys(e).forEach((a=>{var l;t[`--wot-${l=a,(l=l.replace(l.charAt(0),l.charAt(0).toLocaleLowerCase())).replace(/([a-z])([A-Z])/g,((e,t,a)=>t+"-"+a.toLowerCase()))}`]=e[a]})),t};return(e,t)=>{const o=w;return c(),d(o,{class:p(m(a)),style:h(m(l))},{default:v((()=>[$(e.$slots,"default")])),_:3},8,["class","style"])}}}),he=Symbol("wd-tabbar"),ge=oe(n({name:"wd-tabbar",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...le,modelValue:te(0),fixed:X(!1),bordered:X(!0),safeAreaInsetBottom:X(!1),shape:ae("default"),activeColor:String,inactiveColor:String,placeholder:X(!1),zIndex:ee(99)},emits:["change","update:modelValue"],setup(e,{emit:t}){const l=e,o=r(""),{proxy:n}=a(),{linkChildren:f}=ne(he);f({props:l,setChange:function(e){let a=e.name;t("update:modelValue",a),t("change",{value:a})}});const g=s((()=>{const e={};return k(l.zIndex)&&(e["z-index"]=l.zIndex),`${u(e)};${l.customStyle}`}));function b(){l.fixed&&l.placeholder&&F(".wd-tabbar",!1,n).then((e=>{o.value=Number(e.height)}))}return i([()=>l.fixed,()=>l.placeholder],(()=>{b()}),{deep:!0,immediate:!1}),I((()=>{l.fixed&&l.placeholder&&O((()=>{b()}))})),(e,t)=>{const a=w;return c(),d(a,{class:p({"wd-tabbar__placeholder":e.fixed&&e.placeholder&&e.safeAreaInsetBottom&&"round"===e.shape}),style:h({height:m(y)(o.value)})},{default:v((()=>[_(a,{class:p(`wd-tabbar wd-tabbar--${e.shape} ${e.customClass} ${e.fixed?"is-fixed":""} ${e.safeAreaInsetBottom?"is-safe":""} ${e.bordered?"is-border":""}`),style:h(m(g))},{default:v((()=>[$(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-7fd3cc54"]]),we=oe(n({name:"wd-badge",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...le,modelValue:{type:[Number,String,null],default:null},showZero:X(!1),bgColor:String,max:Number,isDot:Boolean,hidden:Boolean,type:ae(void 0),top:Number,right:Number},setup(e){const t=e,a=r(null);i([()=>t.modelValue,()=>t.max,()=>t.isDot],(()=>{!function(){if(t.isDot)return;let e=t.modelValue;const l=t.max;e&&l&&"number"==typeof e&&!Number.isNaN(e)&&!Number.isNaN(l)&&(e=l<e?`${l}+`:e);a.value=e}()}),{immediate:!0,deep:!0});const l=s((()=>`background-color: ${t.bgColor};top:${t.top||0}px;right:${t.right||0}px`)),o=s((()=>{let e=!1;return!t.hidden&&(a.value||0===a.value&&t.showZero||t.isDot)&&(e=!0),e}));return(e,t)=>{const s=w;return c(),d(s,{class:p(["wd-badge",e.customClass]),style:h(e.customStyle)},{default:v((()=>[$(e.$slots,"default",{},void 0,!0),m(o)?(c(),d(s,{key:0,class:p(["wd-badge__content","is-fixed",e.type?"wd-badge__content--"+e.type:"",e.isDot?"is-dot":""]),style:h(m(l))},{default:v((()=>[S(B(a.value),1)])),_:1},8,["class","style"])):f("v-if",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-8fa48138"]]),ye=oe(n({name:"wd-tabbar-item",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...le,title:String,name:Y,icon:String,value:{type:[Number,String,null],default:null},isDot:Boolean,max:ee(99),badgeProps:Object},setup(e){const t=e,{parent:a,index:l}=ie(he),o=s((()=>{const e={};return a&&(r.value&&a.props.activeColor&&(e.color=a.props.activeColor),!r.value&&a.props.inactiveColor&&(e.color=a.props.inactiveColor)),`${u(e)}`})),r=s((()=>{const e=k(t.name)?t.name:l.value;return!!a&&a.props.modelValue===e}));function n(){const e=k(t.name)?t.name:l.value;a&&a.setChange({name:e})}return(e,t)=>{const a=ue,l=z,s=w,i=we;return c(),d(s,{class:p(`wd-tabbar-item ${e.customClass}`),style:h(e.customStyle),onClick:n},{default:v((()=>[_(i,N({modelValue:e.value},e.badgeProps,{"is-dot":e.isDot,max:e.max}),{default:v((()=>[_(s,{class:"wd-tabbar-item__body"},{default:v((()=>[$(e.$slots,"icon",{active:m(r)},void 0,!0),!e.$slots.icon&&e.icon?(c(),d(a,{key:0,name:e.icon,size:"20px","custom-style":m(o),"custom-class":m(r)?"is-active":"is-inactive"},null,8,["name","custom-style","custom-class"])):f("v-if",!0),e.title?(c(),d(l,{key:1,style:h(m(o)),class:p("wd-tabbar-item__body-title "+(m(r)?"is-active":"is-inactive"))},{default:v((()=>[S(B(e.title),1)])),_:1},8,["style","class"])):f("v-if",!0)])),_:3})])),_:3},16,["modelValue","is-dot","max"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-e1e90129"]]),be=oe(n({name:"wd-transition",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...le,show:X(!1),duration:{type:[Object,Number,Boolean],default:300},name:ae("fade"),lazyRender:X(!0),enterClass:ae(""),enterActiveClass:ae(""),enterToClass:ae(""),leaveClass:ae(""),leaveActiveClass:ae(""),leaveToClass:ae("")},emits:["click","before-enter","enter","before-leave","leave","after-leave","after-enter"],setup(e,{emit:t}){const a=e,l=e=>e?{enter:`wd-${e}-enter wd-${e}-enter-active`,"enter-to":`wd-${e}-enter-to wd-${e}-enter-active`,leave:`wd-${e}-leave wd-${e}-leave-active`,"leave-to":`wd-${e}-leave-to wd-${e}-leave-active`}:{enter:`${a.enterClass} ${a.enterActiveClass}`,"enter-to":`${a.enterToClass} ${a.enterActiveClass}`,leave:`${a.leaveClass} ${a.leaveActiveClass}`,"leave-to":`${a.leaveToClass} ${a.leaveActiveClass}`},o=r(!1),n=r(!1),u=r(""),g=r(!1),y=r(300),x=r(""),_=r(null),k=r(null),C=r(null),I=s((()=>`-webkit-transition-duration:${y.value}ms;transition-duration:${y.value}ms;${n.value?"":"display: none;"}${a.customStyle}`)),O=s((()=>`wd-transition ${a.customClass}  ${x.value}`));function F(){t("click")}function S(){_.value=new T((async e=>{try{const s=l(a.name),r=G(a.duration)?a.duration.enter:a.duration;u.value="enter",t("before-enter"),k.value=M(),await k.value,t("enter"),x.value=s.enter,y.value=r,k.value=M(),await k.value,o.value=!0,n.value=!0,k.value=M(),await k.value,k.value=null,g.value=!1,x.value=s["enter-to"],e()}catch(s){}}))}function B(){g.value||(g.value=!0,"leave"===u.value?t("after-leave"):"enter"===u.value&&t("after-enter"),!a.show&&n.value&&(n.value=!1))}return b((()=>{a.show&&S()})),i((()=>a.show),(e=>{e?(A(_.value)&&_.value.abort(),A(k.value)&&k.value.abort(),A(C.value)&&C.value.abort(),_.value=null,k.value=null,C.value=null,S()):async function(){if(!_.value)return g.value=!1,B();try{if(await _.value,!n.value)return;const e=l(a.name),o=G(a.duration)?a.duration.leave:a.duration;u.value="leave",t("before-leave"),y.value=o,C.value=M(),await C.value,t("leave"),x.value=e.leave,C.value=M(),await C.value,g.value=!1,x.value=e["leave-to"],C.value=function(e){return new T((t=>{const a=setTimeout((()=>{clearTimeout(a),t()}),e)}))}(y.value),await C.value,C.value=null,B(),_.value=null}catch(e){}}()}),{deep:!0}),(e,t)=>{const a=w;return o.value?(c(),d(a,{key:0,class:p(m(O)),style:h(m(I)),onTransitionend:B,onClick:F},{default:v((()=>[$(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])):f("v-if",!0)}}}),[["__scopeId","data-v-3d3a5304"]]);const xe=oe(n({name:"wd-overlay",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...le,show:X(!1),duration:{type:[Object,Number,Boolean],default:300},lockScroll:X(!0),zIndex:ee(10)},emits:["click"],setup(e,{emit:t}){const a=e;function l(){t("click")}function o(){}return function(e){const t=r(0),a=()=>{0===t.value&&(document.getElementsByTagName("body")[0].style.overflow="hidden"),t.value++},l=()=>{t.value>0&&(t.value--,0===t.value&&(document.getElementsByTagName("body")[0].style.overflow=""))};i(e,(e=>{e?a():l()}))}((()=>a.show&&a.lockScroll)),(e,t)=>{const a=be;return c(),d(a,{show:e.show,name:"fade","custom-class":"wd-overlay",duration:e.duration,"custom-style":`z-index: ${e.zIndex}; ${e.customStyle}`,onClick:l,onTouchmove:t[0]||(t[0]=V((t=>e.lockScroll?o:""),["stop","prevent"]))},{default:v((()=>[$(e.$slots,"default",{},void 0,!0)])),_:3},8,["show","duration","custom-style"])}}}),[["__scopeId","data-v-520a6928"]]),_e="__TOAST_OPTION__",ke={msg:"",duration:2e3,loadingType:"outline",loadingColor:"#4D80F0",iconColor:"#4D80F0",iconSize:42,loadingSize:42,customIcon:!1,position:"middle",show:!1,zIndex:100};function Ce(e=""){let a=null;const l=r(ke);t(e?_e+e:_e,l);const o=e=>t=>s(D(e,"string"==typeof t?{msg:t}:t)),s=e=>{const t=D(ke,"string"==typeof e?{msg:e}:e);l.value=D(t,{show:!0}),a&&clearTimeout(a),l.value.duration&&l.value.duration>0&&(a=setTimeout((()=>{a&&clearTimeout(a),v()}),t.duration))},n=o({iconName:"loading",duration:0,cover:!0}),i=o({iconName:"success",duration:1500}),u=o({iconName:"error"}),c=o({iconName:"warning"}),d=o({iconName:"info"}),v=()=>{l.value={show:!1}};return{show:s,loading:n,success:i,error:u,warning:c,info:d,close:v}}const $e={success:()=>'<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>成功</title><desc>Created with Sketch.</desc><defs><filter x="-63.2%" y="-80.0%" width="226.3%" height="260.0%" filterUnits="objectBoundingBox" id="filter-1"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122733141   0 0 0 0 0.710852582   0 0 0 0 0.514812768  0 0 0 1 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter><rect id="path-2" x="3.4176226" y="5.81442199" width="3" height="8.5" rx="1.5"></rect><linearGradient x1="50%" y1="0.126649064%" x2="50%" y2="100%" id="linearGradient-4"><stop stop-color="#ACFFBD" stop-opacity="0.208123907" offset="0%"></stop><stop stop-color="#10B87C" offset="100%"></stop></linearGradient></defs><g id="规范" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="反馈-轻提示" transform="translate(-388.000000, -538.000000)"><g id="成功" transform="translate(388.000000, 538.000000)"><circle id="Oval" fill="#34D19D" opacity="0.400000006" cx="21" cy="21" r="20"></circle><circle id="Oval" fill="#34D19D" cx="21" cy="21" r="16"></circle><g id="Group-6" filter="url(#filter-1)" transform="translate(11.500000, 14.000000)"><mask id="mask-3" fill="white"><use xlink:href="#path-2"></use></mask><use id="Rectangle-Copy-24" fill="#C4FFEB" transform="translate(4.917623, 10.064422) rotate(-45.000000) translate(-4.917623, -10.064422) " xlink:href="#path-2"></use><rect id="Rectangle" fill="url(#linearGradient-4)" mask="url(#mask-3)" transform="translate(6.215869, 11.372277) rotate(-45.000000) translate(-6.215869, -11.372277) " x="4.71586891" y="9.52269089" width="3" height="3.69917136"></rect><rect id="Rectangle" fill="#FFFFFF" transform="translate(11.636236, 7.232744) scale(1, -1) rotate(-45.000000) translate(-11.636236, -7.232744) " x="10.1362361" y="-1.02185365" width="3" height="16.5091951" rx="1.5"></rect></g></g></g></g></svg>',warning:()=>'<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>警告</title><desc>Created with Sketch.</desc> <defs> <filter x="-240.0%" y="-60.0%" width="580.0%" height="220.0%" filterUnits="objectBoundingBox" id="filter-1"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.824756567   0 0 0 0 0.450356612   0 0 0 0 0.168550194  0 0 0 1 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><g id="规范" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="反馈-轻提示" transform="translate(-580.000000, -538.000000)"> <g id="警告" transform="translate(580.000000, 538.000000)"><circle id="Oval" fill="#F0883A" opacity="0.400000006" cx="21" cy="21" r="20"></circle><circle id="Oval" fill="#F0883A" cx="21" cy="21" r="16"></circle><g id="Group-6" filter="url(#filter-1)" transform="translate(18.500000, 10.800000)"><rect id="Rectangle" fill="#FFFFFF" transform="translate(2.492935, 7.171583) scale(1, -1) rotate(-360.000000) translate(-2.492935, -7.171583) " x="0.992934699" y="0.955464537" width="3" height="12.4322365" rx="1.5"></rect><rect id="Rectangle-Copy-25" fill="#FFDEC5" transform="translate(2.508751, 17.202636) scale(1, -1) rotate(-360.000000) translate(-2.508751, -17.202636) " x="1.00875134" y="15.200563" width="3" height="4.00414639" rx="1.5"></rect></g></g></g></g></svg>',info:()=>'<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>常规</title><desc>Created with Sketch.</desc><defs><filter x="-300.0%" y="-57.1%" width="700.0%" height="214.3%" filterUnits="objectBoundingBox" id="filter-1"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.362700096   0 0 0 0 0.409035039   0 0 0 0 0.520238904  0 0 0 1 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><g id="规范" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="反馈-轻提示" transform="translate(-772.000000, -538.000000)"><g id="常规" transform="translate(772.000000, 538.000000)"><circle id="Oval" fill="#909CB7" opacity="0.4" cx="21" cy="21" r="20"></circle><circle id="Oval" fill="#909CB7" cx="21" cy="21" r="16"></circle><g id="Group-6" filter="url(#filter-1)" transform="translate(18.500000, 9.800000)"><g id="编组-2" transform="translate(2.492935, 10.204709) rotate(-180.000000) translate(-2.492935, -10.204709) translate(0.992935, 0.204709)"><rect id="Rectangle" fill="#FFFFFF" transform="translate(1.500000, 7.000000) scale(1, -1) rotate(-360.000000) translate(-1.500000, -7.000000) " x="0" y="0" width="3" height="14" rx="1.5"></rect><rect id="Rectangle-Copy-25" fill="#EEEEEE" transform="translate(1.500000, 18.000000) scale(1, -1) rotate(-360.000000) translate(-1.500000, -18.000000) " x="0" y="16" width="3" height="4" rx="1.5"></rect></g></g></g></g></g></svg>',error:()=>'<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>toast</title><desc>Created with Sketch.</desc><defs><linearGradient x1="99.6229896%" y1="50.3770104%" x2="0.377010363%" y2="50.3770104%" id="linearGradient-1"><stop stop-color="#FFDFDF" offset="0%"></stop><stop stop-color="#F9BEBE" offset="100%"></stop></linearGradient><linearGradient x1="0.377010363%" y1="50.3770104%" x2="99.6229896%" y2="50.3770104%" id="linearGradient-2"><stop stop-color="#FFDFDF" offset="0%"></stop><stop stop-color="#F9BEBE" offset="100%"></stop></linearGradient></defs><g id="规范" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="反馈-轻提示" transform="translate(-196.000000, -538.000000)"> <g id="toast" transform="translate(196.000000, 538.000000)"><circle id="Oval" fill="#FA4350" opacity="0.400000006" cx="21" cy="21" r="20"></circle><circle id="Oval" fill="#FA4350" opacity="0.900000036" cx="21" cy="21" r="16"></circle><rect id="矩形" fill="#FFDFDF" transform="translate(21.071068, 21.071068) rotate(-225.000000) translate(-21.071068, -21.071068) " x="12.5710678" y="19.5710678" width="17" height="3" rx="1.5"></rect><rect id="矩形" fill="url(#linearGradient-1)" transform="translate(19.303301, 22.838835) rotate(-225.000000) translate(-19.303301, -22.838835) " x="17.3033009" y="21.3388348" width="4" height="3"></rect><rect id="矩形" fill="url(#linearGradient-2)" transform="translate(22.838835, 19.303301) rotate(-225.000000) translate(-22.838835, -19.303301) " x="20.8388348" y="17.8033009" width="4" height="3"></rect><rect id="矩形" fill="#FFFFFF" transform="translate(21.071068, 21.071068) rotate(-315.000000) translate(-21.071068, -21.071068) " x="12.5710678" y="19.5710678" width="17" height="3" rx="1.5"></rect></g></g></g></svg>'},Ie=oe(n({name:"wd-toast",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...le,customIconClass:ae(""),selector:ae("")},setup(e){const t=e,a=r(""),o=r(!1),n=r(""),g=r("middle"),y=r(!1),x=r(100),C=r("outline"),$=r("#4D80F0"),I=r(42),O=r(""),F=r(!1);let N=null,z=null;const A=t.selector?_e+t.selector:_e,T=l(A,r(ke));i((()=>T.value),(e=>{var t;(t=e)&&(y.value=!!k(t.show)&&t.show,y.value&&(a.value=k(t.iconName)?t.iconName:"",o.value=!!k(t.customIcon)&&t.customIcon,n.value=k(t.msg)?t.msg:"",g.value=k(t.position)?t.position:"middle",x.value=k(t.zIndex)?t.zIndex:100,C.value=k(t.loadingType)?t.loadingType:"outline",$.value=k(t.loadingColor)?t.loadingColor:"#4D80F0",I.value=k(t.iconSize)?t.iconSize:42,F.value=!!k(t.cover)&&t.cover,z=E(t.closed)?t.closed:null,N=E(t.opened)?t.opened:null))}),{deep:!0,immediate:!0}),i((()=>a.value),(()=>{R()}),{deep:!0,immediate:!0});const G=s((()=>{const e={"z-index":x.value,position:"fixed",top:"50%",left:0,width:"100%",transform:"translate(0, -50%)","text-align":"center"};return u(e)})),M=s((()=>u({display:"inline-block","margin-right":"16px"}))),V=s((()=>`wd-toast ${t.customClass} wd-toast--${g.value} ${"loading"===a.value&&!n.value||!a.value&&!o.value?"":"wd-toast--with-icon"} ${"loading"!==a.value||n.value?"":"wd-toast--loading"}`));function D(){E(N)&&N()}function j(){E(z)&&z()}function R(){if("success"!==a.value&&"warning"!==a.value&&"info"!==a.value&&"error"!==a.value)return;const e=`"data:image/svg+xml;base64,${fe($e[a.value]())}"`;O.value=e}return b((()=>{R()})),(e,t)=>{const l=xe,s=pe,r=w,i=be;return c(),H(P,null,[F.value?(c(),d(l,{key:0,"z-index":x.value,"lock-scroll":"",show:y.value,"custom-style":"background-color: transparent;pointer-events: auto;"},null,8,["z-index","show"])):f("v-if",!0),_(i,{name:"fade",show:y.value,"custom-style":m(G),onAfterEnter:D,onAfterLeave:j},{default:v((()=>[_(r,{class:p(m(V))},{default:v((()=>[f("iconName优先级更高"),"loading"===a.value?(c(),d(s,{key:0,type:C.value,color:$.value,"custom-class":"wd-toast__icon",customStyle:m(M)},null,8,["type","color","customStyle"])):"success"===a.value||"warning"===a.value||"info"===a.value||"error"===a.value?(c(),d(r,{key:1,class:"wd-toast__iconWrap wd-toast__icon",style:h(`width:${I.value}px; height:${I.value}px`)},{default:v((()=>[_(r,{class:"wd-toast__iconBox"},{default:v((()=>[_(r,{class:"wd-toast__iconSvg",style:h(`background-image: url(${O.value}); width:${I.value}px; height:${I.value}px`)},null,8,["style"])])),_:1})])),_:1},8,["style"])):o.value?(c(),d(r,{key:2,class:"wd-toast__icon custom-icon-class"})):f("v-if",!0),f("文本"),n.value?(c(),d(r,{key:3,class:"wd-toast__msg"},{default:v((()=>[S(B(n.value),1)])),_:1})):f("v-if",!0)])),_:1},8,["class"])])),_:1},8,["show","custom-style"])],64)}}}),[["__scopeId","data-v-6a39f46d"]]),Oe=oe(n({name:"wd-popup",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...le,transition:String,closable:X(!1),position:ae("center"),closeOnClickModal:X(!0),duration:{type:[Number,Boolean],default:300},modal:X(!0),zIndex:ee(10),hideWhenClose:X(!0),modalStyle:ae(""),safeAreaInsetBottom:X(!1),modelValue:X(!1),lazyRender:X(!0),lockScroll:X(!0)},emits:["update:modelValue","before-enter","enter","before-leave","leave","after-leave","after-enter","click-modal","close"],setup(e,{emit:t}){const a=e,l=e=>e?{enter:`wd-${e}-enter wd-${e}-enter-active`,"enter-to":`wd-${e}-enter-to wd-${e}-enter-active`,leave:`wd-${e}-leave wd-${e}-leave-active`,"leave-to":`wd-${e}-leave-to wd-${e}-leave-active`}:{enter:"enter-class enter-active-class","enter-to":"enter-to-class enter-active-class",leave:"leave-class leave-active-class","leave-to":"leave-to-class leave-active-class"},o=r(!1),n=r(!1),u=r(""),g=r(!1),y=r(300),x=r(""),_=r(0),k=r(""),C=s((()=>`z-index: ${a.zIndex}; padding-bottom: ${_.value}px; -webkit-transition-duration: ${y.value}ms; transition-duration: ${y.value}ms; ${n.value||!a.hideWhenClose?"":"display: none;"} ${a.customStyle}`)),I=s((()=>`wd-popup wd-popup--${a.position} ${a.customClass||""} ${x.value||""}`));function O(){const e=l(a.transition||a.position),s="none"===a.transition?0:G(a.duration)?a.duration.enter:a.duration;u.value="enter",t("before-enter"),M((()=>{t("enter"),x.value=e.enter,y.value=s,M((()=>{o.value=!0,n.value=!0,M((()=>{g.value=!1,x.value=e["enter-to"]}))}))}))}function F(){g.value||(g.value=!0,"leave"===u.value?t("after-leave"):"enter"===u.value&&t("after-enter"),!a.modelValue&&n.value&&(n.value=!1))}function S(){const{transition:e,position:t}=a;k.value=e||t}function B(){t("click-modal"),a.closeOnClickModal&&N()}function N(){t("close"),t("update:modelValue",!1)}function z(){}return b((()=>{if(S(),a.safeAreaInsetBottom){const{safeArea:e,screenHeight:t,safeAreaInsets:a}=j();_.value=e&&a?a.bottom:0}a.modelValue&&O()})),i((()=>a.modelValue),(e=>{e?O():function(){if(!n.value)return;const e=l(a.transition||a.position),o="none"===a.transition?0:G(a.duration)?a.duration.leave:a.duration;u.value="leave",t("before-leave"),M((()=>{t("leave"),x.value=e.leave,y.value=o,M((()=>{g.value=!1;const t=setTimeout((()=>{F(),clearTimeout(t)}),y.value);x.value=e["leave-to"]}))}))}()}),{deep:!0,immediate:!0}),i([()=>a.position,()=>a.transition],(()=>{S()}),{deep:!0,immediate:!0}),(e,t)=>{const a=xe,l=ue,s=w;return c(),H(P,null,[e.modal?(c(),d(a,{key:0,show:e.modelValue,"z-index":e.zIndex,"lock-scroll":e.lockScroll,duration:e.duration,"custom-style":e.modalStyle,onClick:B,onTouchmove:z},null,8,["show","z-index","lock-scroll","duration","custom-style"])):f("v-if",!0),!e.lazyRender||o.value?(c(),d(s,{key:1,class:p(m(I)),style:h(m(C)),onTransitionend:F},{default:v((()=>[$(e.$slots,"default",{},void 0,!0),e.closable?(c(),d(l,{key:0,"custom-class":"wd-popup__close",name:"add",onClick:N})):f("v-if",!0)])),_:3},8,["class","style"])):f("v-if",!0)],64)}}}),[["__scopeId","data-v-726e423a"]]),Fe={type:ae("danger"),color:ae(""),zIndex:ee(99),visible:X(!1),message:te(""),selector:ae(""),duration:ee(3e3),position:ae("top"),safeHeight:Number,background:ae("")},Se="__NOTIFY_OPTION__",Be=oe(n({name:"wd-notify",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:Fe,emits:["update:visible","click","closed","opened"],setup(e,{emit:t}){const a=e,o=l((r=a.selector)?`${Se}${r}`:Se,a);var r;const n=s((()=>{const{safeHeight:e,position:t}=o;let a="";switch(t){case"top":a=`top: calc(var(--window-top) + ${y(e||0)})`;break;case"bottom":a="bottom: var(--window-bottom)"}return a})),u=e=>{if(E(o.onClick))return o.onClick(e);t("click",e)},f=()=>{if(E(o.onClosed))return o.onClosed();t("closed")},g=()=>{if(E(o.onOpened))return o.onOpened();t("opened")};return i((()=>o.visible),(e=>t("update:visible",e))),(e,t)=>{const a=w,l=Oe;return c(),d(l,{modelValue:m(o).visible,"onUpdate:modelValue":t[0]||(t[0]=e=>m(o).visible=e),"custom-style":m(n),position:m(o).position,"z-index":m(o).zIndex,duration:250,modal:!1,onLeave:f,onEnter:g},{default:v((()=>[_(a,{class:p(["wd-notify",[`wd-notify--${m(o).type}`]]),style:h({color:m(o).color,background:m(o).background}),onClick:u},{default:v((()=>[$(e.$slots,"default",{},(()=>[S(B(m(o).message),1)]),!0)])),_:3},8,["class","style"])])),_:3},8,["modelValue","custom-style","position","z-index"])}}}),[["__scopeId","data-v-26d945ee"]]),Ne=oe(n({name:"privacy-popup",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{title:{default:"用户隐私保护提示"},desc:{default:"感谢您使用本应用，您使用本应用的服务之前请仔细阅读并同意"},subDesc:{default:"。当您点击同意并开始时用产品服务时，即表示你已理解并同息该条款内容，该条款将对您产生法律约束力。如您拒绝，将无法使用相应服务。"},protocol:{default:"《用户隐私保护指引》"}},emits:["agree","disagree"],setup(e,{emit:t}){const a=r(!1),l=r(new Set),o=e=>{a.value=!0,l.value.add(e)};function s(){a.value=!1,l.value.forEach((e=>{e({event:"agree",buttonId:"agree-btn"})})),l.value.clear(),t("agree")}function n(){a.value=!1,l.value.forEach((e=>{e({event:"disagree"})})),l.value.clear()}function i(){wx.openPrivacyContract({success:e=>{console.log("openPrivacyContract success")},fail:e=>{console.error("openPrivacyContract fail",e)}})}function u(){l.value.clear()}return b((()=>{wx.onNeedPrivacyAuthorization&&wx.onNeedPrivacyAuthorization((e=>{o(e)}))})),(t,l)=>{const o=w,r=z,d=R,p=Oe;return c(),H(P,null,[f(" wd-privacy-popup__header wd-picker__title wd-privacy-popup__container wd-privacy-popup__container-protocol wd-privacy-popup__footer wd-privacy-popup__footer-disagree wd-button is-block is-round is-medium is-plain wd-privacy-popup__footer-agree is-primary "),_(o,null,{default:v((()=>[_(p,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),"close-on-click-modal":!1,"custom-class":"wd-privacy-popup",onClose:u},{default:v((()=>[_(o,{class:"wd-privacy-popup__header"},{default:v((()=>[f("标题"),_(o,{class:"wd-picker__title"},{default:v((()=>[S(B(e.title),1)])),_:1})])),_:1}),_(o,{class:"wd-privacy-popup__container"},{default:v((()=>[_(r,null,{default:v((()=>[S(B(e.desc),1)])),_:1}),_(r,{class:"wd-privacy-popup__container-protocol",onClick:i},{default:v((()=>[S(B(e.protocol),1)])),_:1}),_(r,null,{default:v((()=>[S(B(e.subDesc),1)])),_:1})])),_:1}),_(o,{class:"wd-privacy-popup__footer"},{default:v((()=>[_(d,{class:"wd-privacy-popup__footer-disagree wd-button is-block is-round is-medium is-plain",id:"disagree-btn",onClick:n},{default:v((()=>[S(" 拒绝 ")])),_:1}),_(d,{class:"wd-privacy-popup__footer-agree wd-button is-primary is-block is-round is-medium",id:"agree-btn","open-type":"agreePrivacyAuthorization",onAgreeprivacyauthorization:s},{default:v((()=>[S(" 同意 ")])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})],2112)}}}),[["__scopeId","data-v-aa3d6795"]]),ze={useTabbar:{type:Boolean,default:!1},useNavbar:{type:Boolean,default:!1}},Ae=U("tabbar",{state:()=>({tabbarItems:[{name:"home",value:null,active:!0},{name:"category",value:null,active:!1},{name:"cart",value:null,active:!1},{name:"usercenter",value:null,active:!1}]}),getters:{getTabbarItems:e=>e.tabbarItems,getActive:e=>e.tabbarItems.find((e=>e.active))||e.tabbarItems[0],getTabbarItemValue:e=>t=>{const a=e.tabbarItems.find((e=>e.name===t));return a&&a.value?a.value:null}},actions:{setTabbarItem(e,t){const a=this.tabbarItems.find((t=>t.name===e));a&&(a.value=t)},setTabbarItemActive(e){this.tabbarItems.forEach((t=>{t.name===e?t.active=!0:t.active=!1}))}}}),Te=n({options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},__name:"page-wraper",props:ze,setup(t){const a=L(),l=Ae(),o=e({colorTheme:"#fa4126"});function s({value:e}){l.setTabbarItemActive(e),a.pushTab({name:e})}return W((()=>{Z()})),(e,t)=>{const a=Be,r=Ie,n=q(J("privacy-popup"),Ne),i=ye,u=ge,d=me;return c(),H(P,null,[f(" fixed bordered safeAreaInsetBottom placeholder "),_(d,{themeVars:m(o)},{default:v((()=>[_(a),_(r),f(" <wd-message-box /> "),_(n),$(e.$slots,"default"),_(u,{fixed:"","model-value":m(l).getActive.name,onChange:s,bordered:"",safeAreaInsetBottom:"",placeholder:"",class:"fixed bordered safeAreaInsetBottom placeholder"},{default:v((()=>[_(i,{name:"home",value:m(l).getTabbarItemValue("home"),title:"首页",icon:"home"},null,8,["value"]),_(i,{name:"category",value:m(l).getTabbarItemValue("category"),title:"分类",icon:"app"},null,8,["value"]),_(i,{name:"cart",value:m(l).getTabbarItemValue("cart"),title:"购物车",icon:"cart"},null,8,["value"]),_(i,{name:"usercenter",value:m(l).getTabbarItemValue("usercenter"),title:"个人中心",icon:"user"},null,8,["value"])])),_:1},8,["model-value"])])),_:3},8,["themeVars"])],2112)}}});function Ge(e=200){return new Promise((t=>setTimeout(t,e)))}export{oe as _,ee as a,le as b,ie as c,te as d,X as e,ue as f,pe as g,Ge as h,Ce as i,Te as j,K as k,we as l,ae as m,Y as n,Q as o,ne as u};
