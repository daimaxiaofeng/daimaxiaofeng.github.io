var s=(v,w,o)=>new Promise((m,f)=>{var y=a=>{try{p(o.next(a))}catch(r){f(r)}},c=a=>{try{p(o.throw(a))}catch(r){f(r)}},p=a=>a.done?m(a.value):Promise.resolve(a.value).then(y,c);p((o=o.apply(v,w)).next())});import{F as x}from"./Form-b7MAD_hE.js";import{u as D}from"./useForm-5gZ2R34O.js";import{u as L}from"./useValidator-O5nNS2ck.js";import{c as T,f as F}from"./index-wdkclFWO.js";import{g as N}from"./index-0Uqhc6og.js";/* empty css               */import{_ as B}from"./AddButtonPermission.vue_vue_type_script_setup_true_lang-yUF5AwWV.js";import{t as E}from"./element-plus-pezXwVo7.js";import{l as M,r as g,J as P,u as b,O as d,V as O,P as S,w as A,m as $,p as j}from"./vue-chunks-Emfp7Yk5.js";const X=M({__name:"Write",props:{currentRow:{type:Object,default:()=>null}},setup(v,{expose:w}){const{t:o}=T(),{required:m}=L(),f=v,y=e=>s(this,null,function*(){var t;const n=yield u();l({permissionList:(t=n==null?void 0:n.permissionList)==null?void 0:t.filter(k=>k.value!==e.value)})}),c=g(!1),p=P([{field:"type",label:"菜单类型",component:"RadioButton",value:0,colProps:{span:24},componentProps:{options:[{label:"目录",value:0},{label:"菜单",value:1}],on:{change:e=>s(this,null,function*(){const n=yield u();e===1?(i([{field:"component",path:"componentProps.disabled",value:!1}]),l({component:b(h)})):(i([{field:"component",path:"componentProps.disabled",value:!0}]),n.parentId===void 0?l({component:"#"}):l({component:"##"}))})}}},{field:"parentId",label:"父级菜单",component:"TreeSelect",componentProps:{nodeKey:"id",props:{label:"title",value:"id",children:"children"},highlightCurrent:!0,expandOnClickNode:!1,checkStrictly:!0,checkOnClickNode:!0,clearable:!0,on:{change:e=>s(this,null,function*(){var t;const n=yield u();e&&n.type===0?l({component:"##"}):!e&&n.type===0?l({component:"#"}):n.type===1&&l({component:(t=b(h))!=null?t:""})})}},optionApi:()=>s(this,null,function*(){return(yield N()).data.list||[]})},{field:"meta.title",label:o("menu.menuName"),component:"Input"},{field:"component",label:"组件",component:"Input",value:"#",componentProps:{disabled:!0,placeholder:"#为顶级目录，##为子目录",on:{change:e=>{h.value=e}}}},{field:"name",label:o("menu.name"),component:"Input"},{field:"meta.icon",label:o("menu.icon"),component:"Input"},{field:"path",label:o("menu.path"),component:"Input"},{field:"meta.activeMenu",label:o("menu.activeMenu"),component:"Input"},{field:"status",label:o("menu.status"),component:"Select",componentProps:{options:[{label:o("userDemo.disable"),value:0},{label:o("userDemo.enable"),value:1}]}},{field:"permissionList",label:o("menu.permission"),component:"CheckboxGroup",colProps:{span:24},formItemProps:{slots:{default:e=>{var n;return d(S,null,[(n=e==null?void 0:e.permissionList)==null?void 0:n.map(t=>d(E,{class:"mr-1",key:t.value,closable:!0,onClose:()=>y(t)},{default:()=>[t.label]})),d(F,{type:"primary",size:"small",onClick:()=>c.value=!0},{default:()=>[O("添加权限")]})])}}}},{field:"meta.hidden",label:o("menu.hidden"),component:"Switch"},{field:"meta.alwaysShow",label:o("menu.alwaysShow"),component:"Switch"},{field:"meta.noCache",label:o("menu.noCache"),component:"Switch"},{field:"meta.breadcrumb",label:o("menu.breadcrumb"),component:"Switch"},{field:"meta.affix",label:o("menu.affix"),component:"Switch"},{field:"meta.noTagsView",label:o("menu.noTagsView"),component:"Switch"},{field:"meta.canTo",label:o("menu.canTo"),component:"Switch"}]),a=P({component:[m()],path:[m()],"meta.title":[m()]}),{formRegister:r,formMethods:C}=D(),{setValues:l,getFormData:u,getElFormExpose:I,setSchema:i}=C,V=()=>s(this,null,function*(){const e=yield I();if(yield e==null?void 0:e.validate().catch(t=>{}))return yield u()}),h=g("");A(()=>f.currentRow,e=>{e&&(h.value=e.type===1?e.component:"",e.parentId===0?i([{field:"component",path:"componentProps.disabled",value:!0}]):i([{field:"component",path:"componentProps.disabled",value:!1}]),e.type===1?i([{field:"component",path:"componentProps.disabled",value:!1}]):i([{field:"component",path:"componentProps.disabled",value:!0}]),l(e))},{deep:!0,immediate:!0}),w({submit:V});const _=e=>s(this,null,function*(){const n=yield u();l({permissionList:[...(n==null?void 0:n.permissionList)||[],e]})});return(e,n)=>($(),j(S,null,[d(b(x),{rules:a,onRegister:b(r),schema:p},null,8,["rules","onRegister","schema"]),d(B,{modelValue:c.value,"onUpdate:modelValue":n[0]||(n[0]=t=>c.value=t),onConfirm:_},null,8,["modelValue"])],64))}});export{X as _};
