var f=(_,p,o)=>new Promise((r,d)=>{var l=t=>{try{s(o.next(t))}catch(m){d(m)}},i=t=>{try{s(o.throw(t))}catch(m){d(m)}},s=t=>t.done?r(t.value):Promise.resolve(t.value).then(l,i);s((o=o.apply(_,p)).next())});import{_ as v}from"./ContentWrap.vue_vue_type_script_setup_true_lang-pq9zo6L8.js";import{c as C}from"./index-wdkclFWO.js";import{_ as b}from"./Table.vue_vue_type_script_lang-94kCpdQh.js";import{g as k}from"./index-vGiMI5MJ.js";/* empty css                *//* empty css                   */import{j as u,y}from"./element-plus-pezXwVo7.js";import{l as T,r as x,m as L,W as B,R as n,u as a,q as e,U as g,V as h,O as c}from"./vue-chunks-Emfp7Yk5.js";/* empty css                *//* empty css                   *//* empty css                    *//* empty css               *//* empty css                      *//* empty css                  *//* empty css                 *//* empty css                        */import"./el-radio-button-aDZuVJdi.js";/* empty css                         *//* empty css                  *//* empty css                */import"./index-wwR1Chfi.js";const D={class:"flex cursor-pointer"},V={class:"pr-16px"},w=["src"],z={class:"mb-12px font-700 font-size-16px"},N={class:"line-clamp-3 font-size-12px"},j={class:"flex justify-center items-center"},E=["onClick"],I=["onClick"],st=T({__name:"CardTable",setup(_){const{t:p}=C(),o=x(!0);let r=x([]);(i=>f(this,null,function*(){const s=yield k(i||{pageIndex:1,pageSize:10}).catch(()=>{}).finally(()=>{o.value=!1});s&&(r.value=s.data.list)}))();const l=i=>{};return(i,s)=>(L(),B(a(v),{title:a(p)("tableDemo.cardTable")},{default:n(()=>[c(a(b),{columns:[],data:a(r),loading:o.value,"custom-content":"","card-wrap-style":{width:"200px",marginBottom:"20px",marginRight:"20px"}},{content:n(t=>[e("div",D,[e("div",V,[e("img",{src:t.logo,class:"w-48px h-48px rounded-[50%]",alt:""},null,8,w)]),e("div",null,[e("div",z,g(t.name),1),e("div",N,g(t.desc),1)])])]),"content-footer":n(t=>[e("div",j,[e("div",{class:"flex-1 text-center",onClick:()=>l(t)},[c(a(u),{underline:!1},{default:n(()=>[h("操作一")]),_:1})],8,E),c(a(y),{direction:"vertical"}),e("div",{class:"flex-1 text-center",onClick:()=>l(t)},[c(a(u),{underline:!1},{default:n(()=>[h("操作二")]),_:1})],8,I)])]),_:1},8,["data","loading"])]),_:1},8,["title"]))}});export{st as default};
