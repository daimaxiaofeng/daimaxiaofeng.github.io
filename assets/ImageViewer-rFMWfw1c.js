var x=Object.defineProperty;var c=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var d=(a,e,t)=>e in a?x(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,u=(a,e)=>{for(var t in e||(e={}))C.call(e,t)&&d(a,t,e[t]);if(c)for(var t of c(e))I.call(e,t)&&d(a,t,e[t]);return a};import{_ as y}from"./ContentWrap.vue_vue_type_script_setup_true_lang-pq9zo6L8.js";import{p as i,B,c as k}from"./index-wdkclFWO.js";/* empty css                        */import{a9 as D}from"./element-plus-pezXwVo7.js";import{l as g,e as v,r as L,m as b,W as w,G as O,u as n,X as z,O as _,ax as M,ah as N,R as h,U as E,V as T}from"./vue-chunks-Emfp7Yk5.js";/* empty css                *//* empty css                   */const $=g({__name:"ImageViewer",props:{urlList:{type:Array,default:()=>[]},zIndex:i.number.def(200),initialIndex:i.number.def(0),infinite:i.bool.def(!0),hideOnClickModal:i.bool.def(!1),teleported:i.bool.def(!1),show:i.bool.def(!1)},setup(a){const e=a,t=v(()=>{const s=u({},e);return delete s.show,s}),r=L(e.show),m=()=>{r.value=!1};return(s,l)=>r.value?(b(),w(n(D),O({key:0},t.value,{onClose:m}),null,16)):z("",!0)}});let f=null;function A(a){if(!B)return;const{urlList:e,initialIndex:t=0,infinite:r=!0,hideOnClickModal:m=!1,teleported:s=!1,zIndex:l=2e3,show:V=!0}=a,o={},p=document.createElement("div");o.urlList=e,o.initialIndex=t,o.infinite=r,o.hideOnClickModal=m,o.teleported=s,o.zIndex=l,o.show=V,document.body.appendChild(p),f=_($,o),M(f,p)}const q=g({__name:"ImageViewer",setup(a){const{t:e}=k(),t=()=>{A({urlList:["https://images6.alphacoders.com/657/thumbbig-657194.webp","https://images3.alphacoders.com/677/thumbbig-677688.webp","https://images4.alphacoders.com/200/thumbbig-200966.webp","https://images5.alphacoders.com/657/thumbbig-657248.webp","https://images3.alphacoders.com/679/thumbbig-679917.webp","https://images3.alphacoders.com/737/thumbbig-73785.webp"]})};return(r,m)=>{const s=N("BaseButton");return b(),w(n(y),{title:n(e)("imageViewerDemo.imageViewer"),message:n(e)("imageViewerDemo.imageViewerDes")},{default:h(()=>[_(s,{type:"primary",onClick:t},{default:h(()=>[T(E(n(e)("imageViewerDemo.open")),1)]),_:1})]),_:1},8,["title","message"])}}});export{q as default};
