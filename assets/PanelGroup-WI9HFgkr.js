var b=(y,d,_)=>new Promise((a,i)=>{var u=c=>{try{n(_.next(c))}catch(r){i(r)}},h=c=>{try{n(_.throw(c))}catch(r){i(r)}},n=c=>c.done?a(c.value):Promise.resolve(c.value).then(u,h);n((_=_.apply(y,d)).next())});import{r as v,c as w,a as $,_ as k}from"./index-wdkclFWO.js";/* empty css               *//* empty css                *//* empty css                         */import{_ as x}from"./CountTo.vue_vue_type_script_setup_true_lang-T1Gbtqko.js";import{A as p,C as m,aa as f,z as j}from"./element-plus-pezXwVo7.js";import{l as C,r as A,J as S,ah as z,m as P,W as I,R as l,u as e,L as o,O as t,q as s,U as g}from"./vue-chunks-Emfp7Yk5.js";const U=()=>v.get({url:"/mock/analysis/total"}),F=()=>v.get({url:"/mock/analysis/userAccessSource"}),H=()=>v.get({url:"/mock/analysis/weeklyUserActivity"}),K=()=>v.get({url:"/mock/analysis/monthlySales"}),E={class:"flex flex-col justify-between"},O={class:"flex flex-col justify-between"},B={class:"flex flex-col justify-between"},G={class:"flex flex-col justify-between"},q=C({__name:"PanelGroup",setup(y){const{t:d}=w(),{getPrefixCls:_}=$(),a=_("panel"),i=A(!0);let u=S({users:0,messages:0,moneys:0,shoppings:0});return b(this,null,function*(){const n=yield U().catch(()=>{}).finally(()=>{i.value=!1});u=Object.assign(u,(n==null?void 0:n.data)||{})}),(n,c)=>{const r=z("Icon");return P(),I(e(j),{gutter:20,justify:"space-between",class:o(e(a))},{default:l(()=>[t(e(p),{xl:6,lg:6,md:12,sm:12,xs:24},{default:l(()=>[t(e(m),{shadow:"hover",class:"mb-20px"},{default:l(()=>[t(e(f),{loading:i.value,animated:"",rows:2},{default:l(()=>[s("div",{class:o(`${e(a)}__item flex justify-between`)},[s("div",null,[s("div",{class:o(`${e(a)}__item--icon ${e(a)}__item--peoples p-16px inline-block rounded-6px`)},[t(r,{icon:"svg-icon:peoples",size:40})],2)]),s("div",E,[s("div",{class:o(`${e(a)}__item--text text-16px text-gray-500 text-right`)},g(e(d)("analysis.newUser")),3),t(e(x),{class:"text-20px font-700 text-right","start-val":0,"end-val":102400,duration:2600})])],2)]),_:1},8,["loading"])]),_:1})]),_:1}),t(e(p),{xl:6,lg:6,md:12,sm:12,xs:24},{default:l(()=>[t(e(m),{shadow:"hover",class:"mb-20px"},{default:l(()=>[t(e(f),{loading:i.value,animated:"",rows:2},{default:l(()=>[s("div",{class:o(`${e(a)}__item flex justify-between`)},[s("div",null,[s("div",{class:o(`${e(a)}__item--icon ${e(a)}__item--message p-16px inline-block rounded-6px`)},[t(r,{icon:"svg-icon:message",size:40})],2)]),s("div",O,[s("div",{class:o(`${e(a)}__item--text text-16px text-gray-500 text-right`)},g(e(d)("analysis.unreadInformation")),3),t(e(x),{class:"text-20px font-700 text-right","start-val":0,"end-val":81212,duration:2600})])],2)]),_:1},8,["loading"])]),_:1})]),_:1}),t(e(p),{xl:6,lg:6,md:12,sm:12,xs:24},{default:l(()=>[t(e(m),{shadow:"hover",class:"mb-20px"},{default:l(()=>[t(e(f),{loading:i.value,animated:"",rows:2},{default:l(()=>[s("div",{class:o(`${e(a)}__item flex justify-between`)},[s("div",null,[s("div",{class:o(`${e(a)}__item--icon ${e(a)}__item--money p-16px inline-block rounded-6px`)},[t(r,{icon:"svg-icon:money",size:40})],2)]),s("div",B,[s("div",{class:o(`${e(a)}__item--text text-16px text-gray-500 text-right`)},g(e(d)("analysis.transactionAmount")),3),t(e(x),{class:"text-20px font-700 text-right","start-val":0,"end-val":9280,duration:2600})])],2)]),_:1},8,["loading"])]),_:1})]),_:1}),t(e(p),{xl:6,lg:6,md:12,sm:12,xs:24},{default:l(()=>[t(e(m),{shadow:"hover",class:"mb-20px"},{default:l(()=>[t(e(f),{loading:i.value,animated:"",rows:2},{default:l(()=>[s("div",{class:o(`${e(a)}__item flex justify-between`)},[s("div",null,[s("div",{class:o(`${e(a)}__item--icon ${e(a)}__item--shopping p-16px inline-block rounded-6px`)},[t(r,{icon:"svg-icon:shopping",size:40})],2)]),s("div",G,[s("div",{class:o(`${e(a)}__item--text text-16px text-gray-500 text-right`)},g(e(d)("analysis.totalShopping")),3),t(e(x),{class:"text-20px font-700 text-right","start-val":0,"end-val":13600,duration:2600})])],2)]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["class"])}}}),D=k(q,[["__scopeId","data-v-843cc555"]]),Q=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"}));export{D as P,H as a,K as b,Q as c,F as g};
