var o=(r,y,c)=>new Promise((s,i)=>{var f=n=>{try{d(c.next(n))}catch(g){i(g)}},w=n=>{try{d(c.throw(n))}catch(g){i(g)}},d=n=>n.done?s(n.value):Promise.resolve(n.value).then(f,w);d((c=c.apply(r,y)).next())});import{c as b}from"./index-wdkclFWO.js";import{h as T,b as C}from"./element-plus-pezXwVo7.js";import{r as m,w as v,u as a,b as x,n as M}from"./vue-chunks-Emfp7Yk5.js";const{t:p}=b(),B=r=>{const{immediate:y=!0}=r,c=m(!1),s=m(1),i=m(10),f=m(0),w=m([]);v(()=>s.value,()=>{u.getList()}),v(()=>i.value,()=>{a(s)===1||(s.value=1),u.getList()}),x(()=>{y&&u.getList()});const d=m(),n=m(),g=(e,t)=>{d.value=e,n.value=a(t)},h=()=>o(void 0,null,function*(){yield M();const e=a(d);return e||console.error("The table is not registered. Please use the register method to register"),e}),u={getList:()=>o(void 0,null,function*(){c.value=!0;try{const e=yield r==null?void 0:r.fetchDataApi();e&&(w.value=e.list,f.value=e.total||0)}catch(e){}finally{c.value=!1}}),setProps:(...t)=>o(void 0,[...t],function*(e={}){const l=yield h();l==null||l.setProps(e)}),setColumn:e=>o(void 0,null,function*(){const t=yield h();t==null||t.setColumn(e)}),addColumn:(e,t)=>o(void 0,null,function*(){const l=yield h();l==null||l.addColumn(e,t)}),delColumn:e=>o(void 0,null,function*(){const t=yield h();t==null||t.delColumn(e)}),getElTableExpose:()=>o(void 0,null,function*(){return yield h(),a(n)}),refresh:()=>{u.getList()},delList:e=>o(void 0,null,function*(){const{fetchDelApi:t}=r;if(!t){console.warn("fetchDelApi is undefined");return}T.confirm(p("common.delMessage"),p("common.delWarning"),{confirmButtonText:p("common.delOk"),cancelButtonText:p("common.delCancel"),type:"warning"}).then(()=>o(void 0,null,function*(){if(yield t()){C.success(p("common.delSuccess"));const L=a(f)%a(i)===e||a(i)===1?a(s)>1?a(s)-1:a(s):a(s);s.value=L,u.getList()}}))})};return{tableRegister:g,tableMethods:u,tableState:{currentPage:s,pageSize:i,total:f,dataList:w,loading:c}}};export{B as u};
