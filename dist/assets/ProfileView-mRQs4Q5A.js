import{_ as w,r as i,o,c as a,b as e,w as _,v as f,t as p,j as r,g as k,h as y,p as C,a as O}from"./index-FzuQ8Pql.js";const h=l=>(C("data-v-ef8330ee"),l=l(),O(),l),T={class:"container"},V={key:0,class:"overlay"},x={class:"overlayBox"},B=h(()=>e("h2",null,"Add Tag",-1)),I={class:"inputWrapper"},$={class:"charCount"},S={class:"profileContainer"},b={class:"imageContainer"},A={class:"boxContainer"},M=h(()=>e("div",{class:"roundedContainer"},[e("i",{class:"fa-regular fa-user fa-10x"})],-1)),U={key:0,class:"fa-solid fa-pen-to-square fa-2x editImage"},q={class:"infoContainer"},D={class:"nameContainer"},N={key:1},P={class:"tagsContainer"},j={__name:"ProfileView",props:["isOwner"],setup(l){const g=l,u=i("Username#3290");i(!1),i("");const c=i(!1),v=i(["12th Grade","Biology"]),d=i(""),m=()=>{v.value.push(d.value),c.value=!1,d.value=""};return console.log(g.isOwner),(n,t)=>(o(),a("div",T,[c.value?(o(),a("div",V,[e("div",x,[B,e("div",I,[_(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=s=>d.value=s),maxlength:"25",placeholder:"Add a new tag"},null,512),[[f,d.value]]),e("div",$,p(d.value.length)+" / 25",1)]),e("button",{onClick:m},"Add")])])):r("",!0),e("div",S,[e("div",b,[e("div",A,[M,n.$props.isOwner?r("",!0):(o(),a("i",U))])]),e("div",q,[e("div",D,[n.$props.isOwner?(o(),a("h1",N,p(u.value),1)):_((o(),a("input",{key:0,"onUpdate:modelValue":t[1]||(t[1]=s=>u.value=s)},null,512)),[[f,u.value]]),n.$props.isOwner?r("",!0):(o(),a("i",{key:2,onClick:t[2]||(t[2]=(...s)=>n.editMode&&n.editMode(...s)),class:"fa-solid fa-pen-to-square fa-2x"}))]),e("div",P,[(o(!0),a(k,null,y(v.value,s=>(o(),a("div",{class:"tag",key:s.id},p(s),1))),128)),n.$props.isOwner?r("",!0):(o(),a("div",{key:0,class:"tag",onClick:t[3]||(t[3]=s=>c.value=!0)},"+"))])])])]))}},F=w(j,[["__scopeId","data-v-ef8330ee"]]);export{F as default};
