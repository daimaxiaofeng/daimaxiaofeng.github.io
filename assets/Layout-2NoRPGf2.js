var It=Object.defineProperty,Vt=Object.defineProperties;var zt=Object.getOwnPropertyDescriptors;var dt=Object.getOwnPropertySymbols;var Ot=Object.prototype.hasOwnProperty,At=Object.prototype.propertyIsEnumerable;var ft=(s,n,t)=>n in s?It(s,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[n]=t,Y=(s,n)=>{for(var t in n||(n={}))Ot.call(n,t)&&ft(s,t,n[t]);if(dt)for(var t of dt(n))At.call(n,t)&&ft(s,t,n[t]);return s},de=(s,n)=>Vt(s,zt(n));var Be=(s,n,t)=>new Promise((o,a)=>{var r=d=>{try{c(t.next(d))}catch(w){a(w)}},i=d=>{try{c(t.throw(d))}catch(w){a(w)}},c=d=>d.done?o(d.value):Promise.resolve(d.value).then(r,i);c((t=t.apply(s,n)).next())});import{a as k,c as oe,I as me,N as ke,O as Q,u as V,d as Le,_ as ne,P as bt,Q as ht,p as Fe,R as Bt}from"./index-wdkclFWO.js";import{ab as jt,ac as Dt,ad as Ft,f as ee,ae as Et,c as Se,af as Nt,I as wt,K as _t,J as xt,ag as Wt,ah as Ht}from"./element-plus-pezXwVo7.js";import{l as R,m as T,W as E,L as M,u as e,r as z,O as l,P as F,e as f,aC as Re,y as Ct,J as qt,b as Ee,w as le,_ as pe,as as ve,ah as te,R as L,U as ge,V as Ie,a7 as Ne,p as N,F as Ut,q as D,X as We,a0 as Jt,n as Kt,aO as Qt,S as Gt,Y as Xt}from"./vue-chunks-Emfp7Yk5.js";/* empty css                   */import{a as Yt,f as Zt,b as ea}from"./tree-sBP3NezW.js";/* empty css                         */import{u as ta}from"./useTagsView-bdSGUkBp.js";import{_ as aa}from"./logo-d-IpLOJD.js";import{_ as la}from"./LocaleDropdown.vue_vue_type_script_setup_true_lang-epB8DDid.js";const oa=R({__name:"Backtop",setup(s){const{getPrefixCls:n,variables:t}=k(),o=n("backtop");return(a,r)=>(T(),E(e(jt),{class:M(`${e(o)}-backtop`),target:`.${e(t).namespace}-layout-content-scrollbar .${e(t).elNamespace}-scrollbar__wrap`},null,8,["class","target"]))}}),na=(s,n)=>(Yt(s,o=>o.path===n)||[]).map(o=>o.path),sa=(s=[],n)=>{const t=z(),o=s.filter(a=>{var i;return((i=a.meta)!=null?i:{}).hidden?!1:(t.value=a,!0)});return o.length===1?{oneShowingChild:!0,onlyOneChild:e(t)}:o.length?{oneShowingChild:!1,onlyOneChild:e(t)}:(t.value=de(Y({},n),{path:"",noShowingChildren:!0}),{oneShowingChild:!0,onlyOneChild:e(t)})},ra=()=>({renderMenuTitle:n=>{const{t}=oe(),{title:o="Please set title",icon:a}=n;return a?l(F,null,[l(me,{icon:n.icon},null),l("span",{class:"v-menu__title"},[t(o)])]):l("span",{class:"v-menu__title"},[t(o)])}}),{renderMenuTitle:pt}=ra(),ca=s=>{const n=(t,o="/")=>t.filter(a=>{var r;return!((r=a.meta)!=null&&r.hidden)}).map(a=>{var w;const r=(w=a.meta)!=null?w:{},{oneShowingChild:i,onlyOneChild:c}=sa(a.children,a),d=ke(a.path)?a.path:Q(o,a.path);if(i&&(!(c!=null&&c.children)||c!=null&&c.noShowingChildren)&&!(r!=null&&r.alwaysShow))return l(Dt,{index:c?Q(d,c.path):d},{default:()=>pt(c?c==null?void 0:c.meta:r)});{const{getPrefixCls:m}=k(),p=m("menu-popper");return l(Ft,{index:d,popperClass:s==="vertical"?`${p}--vertical`:`${p}--horizontal`},{title:()=>pt(r),default:()=>n(a.children,d)})}});return{renderMenuItem:n}};function ia(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!Ct(s)}const{getPrefixCls:ua}=k(),je=ua("menu"),da=R({name:"Menu",props:{menuSelect:{type:Function,default:void 0}},setup(s){const n=V(),t=f(()=>n.getLayout),{push:o,currentRoute:a}=Re(),r=Le(),i=f(()=>["classic","topLeft","cutMenu"].includes(e(t))?"vertical":"horizontal"),c=f(()=>e(t)==="cutMenu"?r.getMenuTabRouters:r.getRouters),d=f(()=>n.getCollapse),w=f(()=>n.getUniqueOpened),m=f(()=>{const{meta:v,path:y}=e(a);return v.activeMenu?v.activeMenu:y}),p=v=>{s.menuSelect&&s.menuSelect(v),ke(v)?window.open(v):o(v)},C=()=>{if(e(t)==="top")return O();{let v;return l(ee,null,ia(v=O())?v:{default:()=>[v]})}},O=()=>l(Et,{defaultActive:e(m),mode:e(i),collapse:e(t)==="top"||e(t)==="cutMenu"?!1:e(d),uniqueOpened:e(t)==="top"?!1:e(w),backgroundColor:"var(--left-menu-bg-color)",textColor:"var(--left-menu-text-color)",activeTextColor:"var(--left-menu-text-active-color)",onSelect:p},{default:()=>{const{renderMenuItem:v}=ca(e(i));return v(e(c))}});return()=>l("div",{id:je,class:[`${je} ${je}__${e(i)}`,"h-[100%] overflow-hidden flex-col bg-[var(--left-menu-bg-color)]",{"w-[var(--left-menu-min-width)]":e(d)&&e(t)!=="cutMenu","w-[var(--left-menu-max-width)]":!e(d)&&e(t)!=="cutMenu"}]},[C()])}}),Pe=ne(da,[["__scopeId","data-v-da9acd3e"]]),Me=qt({}),fa=s=>{var n;for(const t of s){const o=(n=t.meta)!=null?n:{};o!=null&&o.hidden||(Me[t.path]=[])}},yt=(s,n)=>{var o;const t=[];for(const a of s){let r=null;const i=(o=a.meta)!=null?o:{};if(!i.hidden||i.canTo){const c=na(n,a.path),d=ke(a.path)?a.path:c.join("/");r=Se(a),r.path=d,a.children&&r&&(r.children=yt(a.children,n)),r&&t.push(r),c.length&&Reflect.has(Me,c[0])&&Me[c[0]].push(d)}}return t},{getPrefixCls:ha,variables:pa}=k(),De=ha("tab-menu"),va=R({name:"TabMenu",directives:{ClickOutside:Nt},setup(){const{push:s,currentRoute:n}=Re(),{t}=oe(),o=V(),a=f(()=>o.getCollapse),r=f(()=>o.getFixedMenu),i=Le(),c=f(()=>i.getRouters),d=f(()=>e(c).filter(u=>{var g;return!((g=u==null?void 0:u.meta)!=null&&g.hidden)})),w=()=>{o.setCollapse(!e(a))};Ee(()=>{var u;if(e(r)){const g=`/${e(n).path.split("/")[1]}`,W=(u=e(d).find(_=>{var G,A,X;return(((G=_.meta)==null?void 0:G.alwaysShow)||((A=_==null?void 0:_.children)==null?void 0:A.length)&&((X=_==null?void 0:_.children)==null?void 0:X.length)>1)&&_.path===g}))==null?void 0:u.children;C.value=g,W&&i.setMenuTabRouters(Se(W).map(_=>(_.path=Q(e(C),_.path),_)))}}),le(()=>c.value,u=>{fa(u),yt(u,u)},{immediate:!0,deep:!0});const m=z(!0);le(()=>a.value,u=>{u?m.value=!u:setTimeout(()=>{m.value=!u},200)});const p=z(!!e(r)),C=z(""),O=u=>{if(ke(u.path)){window.open(u.path);return}const g=u.children?u.path:u.path.split("/")[0],W=e(C);C.value=u.children?u.path:u.path.split("/")[0],u.children?((g===W||!e(p))&&(p.value=!e(p)),e(p)&&i.setMenuTabRouters(Se(u.children).map(_=>(_.path=Q(e(C),_.path),_)))):(s(u.path),i.setMenuTabRouters([]),p.value=!1)},v=u=>{const{path:g}=e(n);return!!Me[u].includes(g)},y=()=>{e(r)||(p.value=!1)};return()=>pe(l("div",{id:`${pa.namespace}-menu`,class:[De,"relative bg-[var(--left-menu-bg-color)] top-1px layout-border__right",{"w-[var(--tab-menu-max-width)]":!e(a),"w-[var(--tab-menu-min-width)]":e(a)}]},[l(ee,{class:"!h-[calc(100%-var(--tab-menu-collapse-height)-1px)]"},{default:()=>[l("div",null,{default:()=>e(d).map(u=>{var W,_,G,A,X,ae;const g=(W=u.meta)!=null&&W.alwaysShow||(_=u==null?void 0:u.children)!=null&&_.length&&((G=u==null?void 0:u.children)==null?void 0:G.length)>1?u:de(Y({},(u==null?void 0:u.children)&&(u==null?void 0:u.children[0])),{path:Q(u.path,(A=(u==null?void 0:u.children)&&(u==null?void 0:u.children[0]))==null?void 0:A.path)});return l("div",{class:[`${De}__item`,"text-center text-12px relative py-12px cursor-pointer",{"is-active":v(u.path)}],onClick:()=>{O(g)}},[l("div",null,[l(me,{icon:(X=g==null?void 0:g.meta)==null?void 0:X.icon},null)]),e(m)?l("p",{class:"break-words mt-5px px-2px"},[t(((ae=g.meta)==null?void 0:ae.title)||"")]):void 0])})})]}),l("div",{class:[`${De}--collapse`,"text-center h-[var(--tab-menu-collapse-height)] leading-[var(--tab-menu-collapse-height)] cursor-pointer"],onClick:w},[l(me,{icon:e(a)?"ep:d-arrow-right":"ep:d-arrow-left"},null)]),l(Pe,{class:["!absolute top-0 z-1000",{"!left-[var(--tab-menu-min-width)]":e(a),"!left-[var(--tab-menu-max-width)]":!e(a),"!w-[var(--left-menu-max-width)]":e(p)||e(r),"!w-0":!e(p)&&!e(r)}],style:"transition: width var(--transition-time-02), left var(--transition-time-02);"},null)]),[[ve("click-outside"),y]])}}),ma=ne(va,[["__scopeId","data-v-b4613fe3"]]),$t=(s,n="")=>{let t=[];return s.forEach(o=>{var i;const a=(i=o.meta)!=null?i:{},r=Q(n,o.path);if(a!=null&&a.affix&&t.push(de(Y({},o),{path:r,fullPath:r})),o.children){const c=$t(o.children,r);c.length>=1&&(t=[...t,...c])}}),t},vt=R({__name:"ContextMenu",props:{schema:{type:Array,default:()=>[]},trigger:{type:String,default:"contextmenu"},tagItem:{type:Object,default:()=>({})}},emits:["visibleChange"],setup(s,{expose:n,emit:t}){const{getPrefixCls:o}=k(),a=o("context-menu"),{t:r}=oe(),i=t,c=s,d=p=>{p.command&&p.command(p)},w=p=>{i("visibleChange",p,c.tagItem)},m=z();return n({elDropdownMenuRef:m,tagItem:c.tagItem}),(p,C)=>{const O=te("Icon");return T(),E(e(xt),{ref_key:"elDropdownMenuRef",ref:m,class:M(e(a)),trigger:s.trigger,placement:"bottom-start",onCommand:d,onVisibleChange:w,"popper-class":"v-context-menu-popper"},{dropdown:L(()=>[l(e(wt),null,{default:L(()=>[(T(!0),N(F,null,Ne(s.schema,(v,y)=>(T(),E(e(_t),{key:`dropdown${y}`,divided:v.divided,disabled:v.disabled,command:v},{default:L(()=>[l(O,{icon:v.icon},null,8,["icon"]),Ie(" "+ge(e(r)(v.label)),1)]),_:2},1032,["divided","disabled","command"]))),128))]),_:1})]),default:L(()=>[Ut(p.$slots,"default")]),_:3},8,["class","trigger"])}}}),ga=(s,n,t,o)=>(s/=o/2,s<1?t/2*s*s+n:(s--,-t/2*(s*(s-2)-1)+n)),ba=(s,n,t)=>{s[n]=t};function fe({el:s,position:n="scrollLeft",to:t,duration:o=500,callback:a}){const r=z(!1),i=s[n],c=t-i,d=20;let w=0;function m(){if(!e(r))return;w+=d;const O=ga(w,i,c,o);ba(s,n,O),w<o&&e(r)?requestAnimationFrame(m):a&&a()}function p(){r.value=!0,m()}function C(){r.value=!1}return{start:p,stop:C}}const wa=["id"],_a={class:"overflow-hidden flex-1"},xa={class:"flex h-full"},Ca=["onClick"],ya=R({__name:"TagsView",setup(s){const{getPrefixCls:n}=k(),t=n("tags-view"),{t:o}=oe(),{currentRoute:a,push:r}=Re(),{closeAll:i,closeLeft:c,closeRight:d,closeOther:w,closeCurrent:m,refreshPage:p}=ta(),C=Le(),O=f(()=>C.getRouters),v=bt(),y=f(()=>v.getVisitedViews),u=z([]),g=f(()=>v.getSelectedTag),W=v.setSelectedTag,_=V(),G=f(()=>_.getTagsViewIcon),A=f(()=>_.getIsDark),X=()=>{u.value=$t(e(O));for(const b of e(u))b.name&&v.addVisitedView(Se(b))},ae=()=>{const{name:b}=e(a);b&&(W(e(a)),v.addView(e(a)))},ze=b=>{m(b,()=>{Ge(b)&&He()})},He=()=>{const x=v.getVisitedViews.slice(-1)[0];if(x)r(x);else{if(e(a).path===C.getAddRouters[0].path||e(a).path===C.getAddRouters[0].redirect){ae();return}r(C.getAddRouters[0].path)}},qe=()=>{i(()=>{He()})},Ue=()=>{w()},Oe=b=>Be(this,null,function*(){p(b)}),Je=()=>{c()},Ke=()=>{d()},St=()=>Be(this,null,function*(){yield Kt();for(const b of e(y))if(b.fullPath===e(a).path){Mt(b),b.fullPath!==e(a).fullPath&&v.updateVisitedView(e(a));break}}),Qe=ht(),Mt=b=>{var re;const x=(re=e(Ae))==null?void 0:re.wrapRef;let S=null,I=null;const U=e(Qe);if(U.length>0&&(S=U[0],I=U[U.length-1]),(S==null?void 0:S.to).fullPath===b.fullPath){const{start:H}=fe({el:x,position:"scrollLeft",to:0,duration:500});H()}else if((I==null?void 0:I.to).fullPath===b.fullPath){const{start:H}=fe({el:x,position:"scrollLeft",to:x.scrollWidth-x.offsetWidth,duration:500});H()}else{const H=U.findIndex(B=>(B==null?void 0:B.to).fullPath===b.fullPath),ce=document.getElementsByClassName(`${t}__item`),we=ce[H-1],ie=ce[H+1],h=ie.offsetLeft+ie.offsetWidth+4,ue=we.offsetLeft-4;if(h>e(be)+x.offsetWidth){const{start:B}=fe({el:x,position:"scrollLeft",to:h-x.offsetWidth,duration:500});B()}else if(ue<e(be)){const{start:B}=fe({el:x,position:"scrollLeft",to:ue,duration:500});B()}}},Ge=b=>b.path===e(a).path,Xe=ht(),kt=(b,x)=>{if(b)for(const S of e(Xe)){const I=S.elDropdownMenuRef;x.fullPath!==S.tagItem.fullPath&&(I==null||I.handleClose())}},Ae=z(),be=z(0),Lt=({scrollLeft:b})=>{be.value=b},Ye=b=>{var I;const x=(I=e(Ae))==null?void 0:I.wrapRef,{start:S}=fe({el:x,position:"scrollLeft",to:e(be)+b,duration:500});S()};return Ee(()=>{X(),ae()}),le(()=>a.value,()=>{ae(),St()}),(b,x)=>{var U,re,H,ce,we,ie;const S=te("Icon"),I=te("router-link");return T(),N("div",{id:e(t),class:M([e(t),"flex w-full relative bg-[#fff] dark:bg-[var(--el-bg-color)]"])},[D("span",{class:M([`${e(t)}__tool ${e(t)}__tool--first`,"w-[var(--tags-view-height)] h-[var(--tags-view-height)] flex items-center justify-center cursor-pointer"]),onClick:x[0]||(x[0]=h=>Ye(-200))},[l(S,{icon:"ep:d-arrow-left",color:"var(--el-text-color-placeholder)","hover-color":A.value?"#fff":"var(--el-color-black)"},null,8,["hover-color"])],2),D("div",_a,[l(e(ee),{ref_key:"scrollbarRef",ref:Ae,class:"h-full",onScroll:Lt},{default:L(()=>[D("div",xa,[(T(!0),N(F,null,Ne(y.value,h=>{var ue,B,Ze,et,tt,at,lt,ot,nt;return T(),E(e(vt),{ref_for:!0,ref:e(Xe).set,schema:[{icon:"ant-design:sync-outlined",label:e(o)("common.reload"),disabled:((ue=g.value)==null?void 0:ue.fullPath)!==h.fullPath,command:()=>{Oe(h)}},{icon:"ant-design:close-outlined",label:e(o)("common.closeTab"),disabled:!!((B=y.value)!=null&&B.length)&&((Ze=g.value)==null?void 0:Ze.meta.affix),command:()=>{ze(h)}},{divided:!0,icon:"ant-design:vertical-right-outlined",label:e(o)("common.closeTheLeftTab"),disabled:!!((et=y.value)!=null&&et.length)&&(h.fullPath===y.value[0].fullPath||((tt=g.value)==null?void 0:tt.fullPath)!==h.fullPath),command:()=>{Je()}},{icon:"ant-design:vertical-left-outlined",label:e(o)("common.closeTheRightTab"),disabled:!!((at=y.value)!=null&&at.length)&&(h.fullPath===y.value[y.value.length-1].fullPath||((lt=g.value)==null?void 0:lt.fullPath)!==h.fullPath),command:()=>{Ke()}},{divided:!0,icon:"ant-design:tag-outlined",label:e(o)("common.closeOther"),disabled:((ot=g.value)==null?void 0:ot.fullPath)!==h.fullPath,command:()=>{Ue()}},{icon:"ant-design:line-outlined",label:e(o)("common.closeAll"),command:()=>{qe()}}],key:h.fullPath,"tag-item":h,class:M([`${e(t)}__item`,(nt=h==null?void 0:h.meta)!=null&&nt.affix?`${e(t)}__item--affix`:"",{"is-active":Ge(h)}]),onVisibleChange:kt},{default:L(()=>[D("div",null,[l(I,{ref_for:!0,ref:e(Qe).set,to:Y({},h),custom:""},{default:L(({navigate:Rt})=>{var st,rt,ct,it,ut;return[D("div",{onClick:Rt,class:"h-full flex justify-center items-center whitespace-nowrap pl-15px"},[h!=null&&h.matched&&(h!=null&&h.matched[1])&&((rt=(st=h==null?void 0:h.matched[1])==null?void 0:st.meta)!=null&&rt.icon)&&G.value?(T(),E(S,{key:0,icon:(it=(ct=h==null?void 0:h.matched[1])==null?void 0:ct.meta)==null?void 0:it.icon,size:12,class:"mr-5px"},null,8,["icon"])):We("",!0),Ie(" "+ge(e(o)((ut=h==null?void 0:h.meta)==null?void 0:ut.title))+" ",1),l(S,{class:M(`${e(t)}__item--close`),color:"#333",icon:"ant-design:close-outlined",size:12,onClick:Jt(Ya=>ze(h),["prevent","stop"])},null,8,["class","onClick"])],8,Ca)]}),_:2},1032,["to"])])]),_:2},1032,["schema","tag-item","class"])}),128))])]),_:1},512)]),D("span",{class:M([`${e(t)}__tool`,"w-[var(--tags-view-height)] h-[var(--tags-view-height)] flex items-center justify-center cursor-pointer"]),onClick:x[1]||(x[1]=h=>Ye(200))},[l(S,{icon:"ep:d-arrow-right",color:"var(--el-text-color-placeholder)","hover-color":A.value?"#fff":"var(--el-color-black)"},null,8,["hover-color"])],2),D("span",{class:M([`${e(t)}__tool`,"w-[var(--tags-view-height)] h-[var(--tags-view-height)] flex items-center justify-center cursor-pointer"]),onClick:x[2]||(x[2]=h=>Oe(g.value))},[l(S,{icon:"ant-design:reload-outlined",color:"var(--el-text-color-placeholder)","hover-color":A.value?"#fff":"var(--el-color-black)"},null,8,["hover-color"])],2),l(e(vt),{trigger:"click",schema:[{icon:"ant-design:sync-outlined",label:e(o)("common.reload"),command:()=>{Oe(g.value)}},{icon:"ant-design:close-outlined",label:e(o)("common.closeTab"),disabled:!!((U=y.value)!=null&&U.length)&&((re=g.value)==null?void 0:re.meta.affix),command:()=>{ze(g.value)}},{divided:!0,icon:"ant-design:vertical-right-outlined",label:e(o)("common.closeTheLeftTab"),disabled:!!((H=y.value)!=null&&H.length)&&((ce=g.value)==null?void 0:ce.fullPath)===y.value[0].fullPath,command:()=>{Je()}},{icon:"ant-design:vertical-left-outlined",label:e(o)("common.closeTheRightTab"),disabled:!!((we=y.value)!=null&&we.length)&&((ie=g.value)==null?void 0:ie.fullPath)===y.value[y.value.length-1].fullPath,command:()=>{Ke()}},{divided:!0,icon:"ant-design:tag-outlined",label:e(o)("common.closeOther"),command:()=>{Ue()}},{icon:"ant-design:line-outlined",label:e(o)("common.closeAll"),command:()=>{qe()}}]},{default:L(()=>[D("span",{class:M([`${e(t)}__tool`,"w-[var(--tags-view-height)] h-[var(--tags-view-height)] flex items-center justify-center cursor-pointer block"])},[l(S,{icon:"ant-design:setting-outlined",color:"var(--el-text-color-placeholder)","hover-color":A.value?"#fff":"var(--el-color-black)"},null,8,["hover-color"])],2)]),_:1},8,["schema"])],10,wa)}}}),_e=ne(ya,[["__scopeId","data-v-c01b43fc"]]),$a=D("img",{src:aa,class:"w-[calc(var(--logo-height)-10px)] h-[calc(var(--logo-height)-10px)]"},null,-1),xe=R({__name:"Logo",setup(s){const{getPrefixCls:n}=k(),t=n("logo"),o=V(),a=z(!0),r=f(()=>o.getTitle),i=f(()=>o.getLayout),c=f(()=>o.getCollapse);return Ee(()=>{e(c)&&(a.value=!1)}),le(()=>c.value,d=>{if(e(i)==="topLeft"||e(i)==="cutMenu"){a.value=!0;return}a.value=!d}),le(()=>i.value,d=>{d==="top"||d==="cutMenu"?a.value=!0:e(c)?a.value=!1:a.value=!0}),(d,w)=>{const m=te("router-link");return T(),N("div",null,[l(m,{class:M([e(t),i.value!=="classic"?`${e(t)}__Top`:"","flex !h-[var(--logo-height)] items-center cursor-pointer pl-8px relative decoration-none overflow-hidden"]),to:"/"},{default:L(()=>[$a,a.value?(T(),N("div",{key:0,class:M(["ml-10px text-16px font-700",{"text-[var(--logo-title-text-color)]":i.value==="classic","text-[var(--top-header-text-color)]":i.value==="topLeft"||i.value==="top"||i.value==="cutMenu"}])},ge(r.value),3)):We("",!0)]),_:1},8,["class"])])}}}),Ta=R({__name:"Footer",setup(s){const{getPrefixCls:n}=k(),t=n("footer"),o=V(),a=f(()=>o.getTitle);return(r,i)=>(T(),N("div",{class:M([e(t),"text-center text-[var(--el-text-color-placeholder)] bg-[var(--app-content-bg-color)] h-[var(--app-footer-height)] leading-[var(--app-footer-height)] dark:bg-[var(--el-bg-color)]"])}," Copyright ©2021-present "+ge(a.value),3))}}),Ce=R({__name:"AppView",setup(s){const n=V(),t=f(()=>n.getLayout),o=f(()=>n.getFixedHeader),a=f(()=>n.getFooter),r=bt(),i=f(()=>r.getCachedViews),c=f(()=>n.getTagsView);return(d,w)=>{const m=te("router-view");return T(),N(F,null,[D("section",{class:M(["p-[var(--app-content-padding)] w-[calc(100%-var(--app-content-padding)-var(--app-content-padding))] bg-[var(--app-content-bg-color)] dark:bg-[var(--el-bg-color)]",{"!min-h-[calc(100%-var(--app-content-padding)-var(--app-content-padding)-var(--app-footer-height))]":o.value&&(t.value==="classic"||t.value==="topLeft"||t.value==="top")&&a.value||!c.value&&t.value==="top"&&a.value,"!min-h-[calc(100%-var(--app-content-padding)-var(--app-content-padding)-var(--app-footer-height)-var(--tags-view-height))]":c.value&&t.value==="top"&&a.value,"!min-h-[calc(100%-var(--tags-view-height)-var(--app-content-padding)-var(--app-content-padding)-var(--top-tool-height)-var(--app-footer-height))]":!o.value&&t.value==="classic"&&a.value,"!min-h-[calc(100%-var(--tags-view-height)-var(--app-content-padding)-var(--app-content-padding)-var(--app-footer-height))]":!o.value&&t.value==="topLeft"&&a.value,"!min-h-[calc(100%-var(--app-footer-height)-var(--app-content-padding)-var(--app-content-padding))]":o.value&&t.value==="cutMenu"&&a.value,"!min-h-[calc(100%-var(--app-footer-height)-var(--app-content-padding)-var(--app-content-padding)-var(--tags-view-height))]":!o.value&&t.value==="cutMenu"&&a.value}])},[l(m,null,{default:L(({Component:p,route:C})=>[(T(),E(Qt,{include:i.value},[(T(),E(Gt(p),{key:C.fullPath}))],1032,["include"]))]),_:1})],2),a.value?(T(),E(e(Ta),{key:0})):We("",!0)],64)}}}),Pa=R({__name:"Collapse",props:{color:Fe.string.def("")},setup(s){const{getPrefixCls:n}=k(),t=n("collapse"),o=V(),a=f(()=>o.getCollapse),r=()=>{const i=e(a);o.setCollapse(!i)};return(i,c)=>{const d=te("Icon");return T(),N("div",{class:M(e(t)),onClick:r},[l(d,{size:18,icon:a.value?"ant-design:menu-unfold-outlined":"ant-design:menu-fold-outlined",color:s.color,class:"cursor-pointer"},null,8,["icon","color"])],2)}}}),Sa=R({__name:"SizeDropdown",props:{color:Fe.string.def("")},setup(s){const{getPrefixCls:n}=k(),t=n("size-dropdown"),{t:o}=oe(),a=V(),r=f(()=>a.sizeMap),i=c=>{a.setCurrentSize(c)};return(c,d)=>{const w=te("Icon");return T(),E(e(xt),{class:M(e(t)),trigger:"click",onCommand:i},{dropdown:L(()=>[l(e(wt),null,{default:L(()=>[(T(!0),N(F,null,Ne(r.value,m=>(T(),E(e(_t),{key:m,command:m},{default:L(()=>[Ie(ge(e(o)(`size.${m}`)),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:L(()=>[l(w,{size:18,icon:"mdi:format-size",color:s.color,class:"cursor-pointer"},null,8,["color"])]),_:1},8,["class"])}}}),Ma=R({__name:"Screenfull",props:{color:Fe.string.def("")},setup(s){const{getPrefixCls:n}=k(),t=n("screenfull"),{toggle:o,isFullscreen:a}=Bt(),r=()=>{o()};return(i,c)=>(T(),N("div",{class:M(e(t)),onClick:r},[l(e(me),{size:18,icon:e(a)?"zmdi:fullscreen-exit":"zmdi:fullscreen",color:s.color},null,8,["icon","color"])],2))}}),Tt=(s,n="")=>{var o;const t=[];for(const a of s){const r=a==null?void 0:a.meta;if(r.hidden&&!r.canTo)continue;const i=!r.alwaysShow&&((o=a.children)==null?void 0:o.length)===1?de(Y({},a.children[0]),{path:Q(a.path,a.children[0].path)}):Y({},a);i.path=Q(n,i.path),i.children&&(i.children=Tt(i.children,i.path)),i&&t.push(i)}return t};function ka(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!Ct(s)}const{getPrefixCls:La}=k(),Ra=La("breadcrumb"),Ia=V(),Va=f(()=>Ia.getBreadcrumbIcon),za=R({name:"Breadcrumb",setup(){const{currentRoute:s}=Re(),{t:n}=oe(),t=z([]),o=Le(),a=f(()=>{const c=o.getRouters;return Tt(c)}),r=()=>{const c=s.value.matched.slice(-1)[0].path;t.value=Zt(e(a),d=>d.path===c)},i=()=>ea(e(t)).map(d=>{const w=!d.redirect||d.redirect==="noredirect",m=d.meta;return l(Ht,{to:{path:w?"":d.path},key:d.name},{default:()=>{var p,C;return[m!=null&&m.icon&&Va.value?l(F,null,[l(me,{icon:m.icon,class:"mr-[5px]"},null),Ie(" "),n(((p=d==null?void 0:d.meta)==null?void 0:p.title)||"")]):n(((C=d==null?void 0:d.meta)==null?void 0:C.title)||"")]}})});return le(()=>s.value,c=>{c.path.startsWith("/redirect/")||r()},{immediate:!0}),()=>{let c;return l(Wt,{separator:"/",class:`${Ra} flex items-center h-full ml-[10px]`},{default:()=>[l(Xt,{appear:!0,"enter-active-class":"animate__animated animate__fadeInRight"},ka(c=i())?c:{default:()=>[c]})]})}}}),Oa=ne(za,[["__scopeId","data-v-0f3386dd"]]),{getPrefixCls:Aa,variables:Ba}=k(),ja=Aa("tool-header"),se=V(),Da=f(()=>se.getBreadcrumb),Fa=f(()=>se.getHamburger),Ea=f(()=>se.getScreenfull),Na=f(()=>se.getSize),mt=f(()=>se.getLayout),Wa=f(()=>se.getLocale),Ha=R({name:"ToolHeader",setup(){return()=>l("div",{id:`${Ba.namespace}-tool-header`,class:[ja,"h-[var(--top-tool-height)] relative px-[var(--top-tool-p-x)] flex items-center justify-between"]},[mt.value!=="top"?l("div",{class:"h-full flex items-center"},[Fa.value&&mt.value!=="cutMenu"?l(Pa,{class:"custom-hover",color:"var(--top-header-text-color)"},null):void 0,Da.value?l(Oa,{class:"<md:hidden"},null):void 0]):void 0,l("div",{class:"h-full flex items-center"},[Ea.value?l(Ma,{class:"custom-hover",color:"var(--top-header-text-color)"},null):void 0,Na.value?l(Sa,{class:"custom-hover",color:"var(--top-header-text-color)"},null):void 0,Wa.value?l(la,{class:"custom-hover",color:"var(--top-header-text-color)"},null):void 0])])}}),ye=ne(Ha,[["__scopeId","data-v-0324b1cb"]]),{getPrefixCls:qa}=k(),J=qa("layout"),q=V(),$e=f(()=>q.getPageLoading),K=f(()=>q.getTagsView),P=f(()=>q.getCollapse),he=f(()=>q.logo),$=f(()=>q.getFixedHeader),j=f(()=>q.getMobile),Z=f(()=>q.getFixedMenu),Te=()=>({renderClassic:()=>l(F,null,[l("div",{class:["absolute top-0 left-0 h-full layout-border__right",{"!fixed z-3000":j.value}]},[he.value?l(xe,{class:["bg-[var(--left-menu-bg-color)] relative",{"!pl-0":j.value&&P.value,"w-[var(--left-menu-min-width)]":q.getCollapse,"w-[var(--left-menu-max-width)]":!q.getCollapse}],style:"transition: all var(--transition-time-02);"},null):void 0,l(Pe,{class:[{"!h-[calc(100%-var(--logo-height))]":he.value}]},null)]),l("div",{class:[`${J}-content`,"absolute top-0 h-[100%]",{"w-[calc(100%-var(--left-menu-min-width))] left-[var(--left-menu-min-width)]":P.value&&!j.value&&!j.value,"w-[calc(100%-var(--left-menu-max-width))] left-[var(--left-menu-max-width)]":!P.value&&!j.value&&!j.value,"fixed !w-full !left-0":j.value}],style:"transition: all var(--transition-time-02);"},[pe(l(ee,{class:[`${J}-content-scrollbar`,{"!h-[calc(100%-var(--top-tool-height)-var(--tags-view-height))] mt-[calc(var(--top-tool-height)+var(--tags-view-height))]":$.value}]},{default:()=>[l("div",{class:[{"fixed top-0 left-0 z-10":$.value,"w-[calc(100%-var(--left-menu-min-width))] !left-[var(--left-menu-min-width)]":P.value&&$.value&&!j.value,"w-[calc(100%-var(--left-menu-max-width))] !left-[var(--left-menu-max-width)]":!P.value&&$.value&&!j.value,"!w-full !left-0":j.value}],style:"transition: all var(--transition-time-02);"},[l(ye,{class:["bg-[var(--top-header-bg-color)]",{"layout-border__bottom":!K.value}]},null),K.value?l(_e,{class:"layout-border__bottom layout-border__top"},null):void 0]),l(Ce,null,null)]}),[[ve("loading"),$e.value]])])]),renderTopLeft:()=>l(F,null,[l("div",{class:"flex items-center bg-[var(--top-header-bg-color)] relative layout-border__bottom dark:bg-[var(--el-bg-color)]"},[he.value?l(xe,{class:"custom-hover"},null):void 0,l(ye,{class:"flex-1"},null)]),l("div",{class:"absolute top-[var(--logo-height)+1px] left-0 w-full h-[calc(100%-1px-var(--logo-height))] flex"},[l(Pe,{class:"!h-full relative layout-border__right"},null),l("div",{class:[`${J}-content`,"h-[100%]",{"w-[calc(100%-var(--left-menu-min-width))] left-[var(--left-menu-min-width)]":P.value,"w-[calc(100%-var(--left-menu-max-width))] left-[var(--left-menu-max-width)]":!P.value}],style:"transition: all var(--transition-time-02);"},[pe(l(ee,{class:[`${J}-content-scrollbar`,{"!h-[calc(100%-var(--tags-view-height))] mt-[calc(var(--tags-view-height))]":$.value&&K.value}]},{default:()=>[K.value?l(_e,{class:["layout-border__bottom absolute",{"!fixed top-0 left-0 z-10":$.value,"w-[calc(100%-var(--left-menu-min-width))] !left-[var(--left-menu-min-width)] mt-[calc(var(--logo-height)+1px)]":P.value&&$.value,"w-[calc(100%-var(--left-menu-max-width))] !left-[var(--left-menu-max-width)] mt-[calc(var(--logo-height)+1px)]":!P.value&&$.value}],style:"transition: width var(--transition-time-02), left var(--transition-time-02);"},null):void 0,l(Ce,null,null)]}),[[ve("loading"),$e.value]])])])]),renderTop:()=>l(F,null,[l("div",{class:["flex items-center justify-between bg-[var(--top-header-bg-color)] relative",{"layout-border__bottom":!K.value}]},[he.value?l(xe,{class:"custom-hover"},null):void 0,l(Pe,{class:"flex-1 px-10px h-[var(--top-tool-height)]"},null),l(ye,null,null)]),l("div",{class:[`${J}-content`,"w-full",{"h-[calc(100%-var(--top-tool-height))]":!$.value,"h-[calc(100%-var(--tags-view-height)-var(--top-tool-height))]":$.value}]},[pe(l(ee,{class:[`${J}-content-scrollbar`,{"mt-[var(--tags-view-height)] !pb-[calc(var(--tags-view-height)+var(--app-footer-height))]":$.value,"pb-[var(--app-footer-height)]":!$.value}]},{default:()=>[K.value?l(_e,{class:["layout-border__bottom layout-border__top relative",{"!fixed w-full top-[calc(var(--top-tool-height)+1px)] left-0":$.value}],style:"transition: width var(--transition-time-02), left var(--transition-time-02);"},null):void 0,l(Ce,null,null)]}),[[ve("loading"),$e.value]])])]),renderCutMenu:()=>l(F,null,[l("div",{class:"flex items-center bg-[var(--top-header-bg-color)] relative layout-border__bottom"},[he.value?l(xe,{class:"custom-hover !pr-15px"},null):void 0,l(ye,{class:"flex-1"},null)]),l("div",{class:"absolute top-[var(--logo-height)] left-0 w-[calc(100%-2px)] h-[calc(100%-var(--logo-height))] flex"},[l(ma,null,null),l("div",{class:[`${J}-content`,"h-[100%]",{"w-[calc(100%-var(--tab-menu-min-width))] left-[var(--tab-menu-min-width)]":P.value&&!Z.value,"w-[calc(100%-var(--tab-menu-max-width))] left-[var(--tab-menu-max-width)]":!P.value&&!Z.value,"w-[calc(100%-var(--tab-menu-min-width)-var(--left-menu-max-width))] ml-[var(--left-menu-max-width)]":P.value&&Z.value,"w-[calc(100%-var(--tab-menu-max-width)-var(--left-menu-max-width))] ml-[var(--left-menu-max-width)]":!P.value&&Z.value}],style:"transition: all var(--transition-time-02);"},[pe(l(ee,{class:[`${J}-content-scrollbar`,{"!h-[calc(100%-var(--tags-view-height))] mt-[calc(var(--tags-view-height))]":$.value&&K.value}]},{default:()=>[K.value?l(_e,{class:["relative layout-border__bottom layout-border__top",{"!fixed top-0 left-0 z-10":$.value,"w-[calc(100%-var(--tab-menu-min-width))] !left-[var(--tab-menu-min-width)] mt-[var(--logo-height)]":P.value&&$.value,"w-[calc(100%-var(--tab-menu-max-width))] !left-[var(--tab-menu-max-width)] mt-[var(--logo-height)]":!P.value&&$.value,"!fixed top-0 !left-[var(--tab-menu-min-width)+var(--left-menu-max-width)] z-10":$.value&&Z.value,"w-[calc(100%-var(--tab-menu-min-width)-var(--left-menu-max-width))] !left-[var(--tab-menu-min-width)+var(--left-menu-max-width)] mt-[var(--logo-height)]":P.value&&$.value&&Z.value,"w-[calc(100%-var(--tab-menu-max-width)-var(--left-menu-max-width))] !left-[var(--tab-menu-max-width)+var(--left-menu-max-width)] mt-[var(--logo-height)]":!P.value&&$.value&&Z.value}],style:"transition: width var(--transition-time-02), left var(--transition-time-02);"},null):void 0,l(Ce,null,null)]}),[[ve("loading"),$e.value]])])])])}),{getPrefixCls:Ua}=k(),gt=Ua("layout"),Ve=V(),Ja=f(()=>Ve.getMobile),Ka=f(()=>Ve.getCollapse),Pt=f(()=>Ve.getLayout),Qa=()=>{Ve.setCollapse(!0)},Ga=()=>{switch(e(Pt)){case"classic":const{renderClassic:s}=Te();return s();case"topLeft":const{renderTopLeft:n}=Te();return n();case"top":const{renderTop:t}=Te();return t();case"cutMenu":const{renderCutMenu:o}=Te();return o()}},Xa=R({name:"Layout",setup(){return()=>l("section",{class:[gt,`${gt}__${Pt.value}`,"w-[100%] h-[100%] relative"]},[Ja.value&&!Ka.value?l("div",{class:"absolute top-0 left-0 w-full h-full opacity-30 z-99 bg-[var(--el-color-black)]",onClick:Qa},null):void 0,Ga(),l(oa,null,null)])}}),il=ne(Xa,[["__scopeId","data-v-e0817473"]]);export{il as default};
