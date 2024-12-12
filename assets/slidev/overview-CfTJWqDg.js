import{_ as Z,a as ee}from"../modules/unplugin-icons-GSbB4Ubw.js";import{d as J,aa as te,ab as le,t as N,ac as ne,E as U,D as oe,a3 as ie,n as Q,B as c,o as i,c as k,i as $,h as K,ad as ae,ae as se,b as _,j as ce,N as re,z,O as ue,K as de,e as s,F as j,af as q,k as M,x as w,g as A,l as H}from"../modules/vue-CtmafLwY.js";import{u as me,a as pe,i as ve,b as I,t as fe,s as he,c as ge,C as X,g as G,p as ke}from"../index-BkLUPw8K.js";import{_ as be,C as xe}from"./NoteDisplay.vue_vue_type_style_index_0_lang-ChDL2i-I.js";import{u as _e,S as ye,_ as we,a as Ce}from"../SlideWrapper-BxWCQFpW.js";import{_ as V}from"./IconButton.vue_vue_type_script_setup_true_lang-CC8GJhFX.js";import"../modules/shiki-D9kyjDky.js";import"./context-CJPMt1NT.js";import"../modules/file-saver-DpJRZIvx.js";const De=["placeholder"],$e=J({__name:"NoteEditable",props:{no:{type:Number,required:!0},class:{default:""},editing:{default:!1},style:{default:()=>({})},placeholder:{default:"No notes for this slide"},clicksContext:{type:Object},highlight:{default:!0},autoHeight:{default:!1}},emits:["update:editing","markerDblclick","markerClick"],setup(C,{emit:O}){const o=C,y=O,r=te(o,"editing",y,{passive:!0}),{info:h,update:D}=_e(le(o,"no")),p=N("");let F;const{ignoreUpdates:b}=ne(p,a=>{if(!r.value)return;const m=o.no;clearTimeout(F),F=setTimeout(()=>{D({note:a},m)},500)});U(()=>{var a;return(a=h.value)==null?void 0:a.note},(a="")=>{r.value||(clearTimeout(F),b(()=>{p.value=a}))},{immediate:!0,flush:"sync"});const d=N(),x=N();oe(()=>{var a;r.value&&((a=d.value)==null||a.focus())}),ie(d,()=>{r.value=!1});function B(){!o.autoHeight||!d.value||!r.value||d.value.scrollHeight>d.value.clientHeight&&(d.value.style.height=`${d.value.scrollHeight}px`)}function W(a){r.value&&a.metaKey&&a.key==="s"&&(a.preventDefault(),D({note:p.value},o.no))}return U([p,r],()=>{Q(()=>{B()})},{flush:"post",immediate:!0}),(a,m)=>{var S;return c(r)?ae((i(),_("textarea",{key:1,ref_key:"inputEl",ref:d,"onUpdate:modelValue":m[2]||(m[2]=g=>p.value=g),class:$(["prose resize-none overflow-auto outline-none bg-transparent block border-primary border-2",o.class]),style:K([{"line-height":"1.75"},[o.style,x.value!=null?{height:`${x.value}px`}:{}]]),placeholder:C.placeholder,onKeydown:[m[3]||(m[3]=ce(g=>r.value=!1,["esc"])),W]},null,46,De)),[[se,p.value]]):(i(),k(be,{key:0,class:$(["border-transparent border-2",[o.class,p.value?"":"opacity-25 italic select-none"]]),style:K(o.style),note:p.value||C.placeholder,"note-html":(S=c(h))==null?void 0:S.noteHTML,"clicks-context":C.clicksContext,"auto-scroll":!C.autoHeight,highlight:o.highlight,onMarkerClick:m[0]||(m[0]=(g,E)=>y("markerClick",g,E)),onMarkerDblclick:m[1]||(m[1]=(g,E)=>y("markerDblclick",g,E))},null,8,["class","style","note","note-html","clicks-context","auto-scroll","highlight"]))}}}),Fe={class:"h-screen w-screen of-hidden flex"},Se={class:"grid grid-rows-[auto_max-content] border-r border-main select-none max-h-full h-full"},Ee={class:"relative"},Me={class:"absolute left-0 top-0 bottom-0 w-200 flex flex-col flex-auto items-end group p2 gap-1 max-h-full of-x-visible of-y-auto",style:{direction:"rtl"}},He=["onClick"],Ne={p2:"",border:"t main"},Be={class:"select-none w-13 text-right my4 flex flex-col gap-1 items-end"},Te={class:"text-3xl op20 mb2"},Ae=["onDblclick"],Ie={class:"py3 mt-0.5 mr--8 ml--4 op0 transition group-hover:op100"},Ve={key:0,class:"select-none absolute bottom-0 right-0 bg-main rounded-tl p2 op35 text-xs"},Ke={class:"absolute top-0 right-0 px3 py1.5 border-b border-l rounded-lb bg-main border-main select-none"},We={class:"text-xs op50"},L=450,Je=J({__name:"overview",setup(C){me({title:`Overview - ${he}`});const{openInEditor:O,slides:o}=pe(),y=re(new Map),r=N([]),h=N(null),D=z(()=>o.value.map(t=>{var e,n;return a(((n=(e=t.meta)==null?void 0:e.slide)==null?void 0:n.note)||"")})),p=z(()=>D.value.reduce((t,e)=>t+e,0)),F=z(()=>o.value.map(t=>B(t)).reduce((t,e)=>t+e,0)),b=ue(),d=new WeakMap;function x(t){return d.has(t)||d.set(t,ge(t,X)),d.get(t)}function B(t){var e,n;return((e=t.meta)==null?void 0:e.clicks)||((n=x(t))==null?void 0:n.total)}function W(t){b.value===t?b.value=void 0:b.value=t}function a(t){const e=/[\w`'\-\u0392-\u03C9\u00C0-\u00FF\u0600-\u06FF\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u3040-\u309F\uAC00-\uD7AF]+/g,n=t.match(e);let v=0;if(!n)return 0;for(let l=0;l<n.length;l++)n[l].charCodeAt(0)>=19968?v+=n[l].length:v+=1;return v}function m(t){const e=t.getBoundingClientRect(),n=20;return e.top>=0-n&&e.left>=0-n&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)+n&&e.right<=(window.innerWidth||document.documentElement.clientWidth)+n}function S(){const t=[];Array.from(y.entries()).forEach(([e,n])=>{m(n)&&t.push(e)}),r.value=t}function g(t){const e=document.createElement("a");e.target="_blank",e.href=ke+t.slice(1),e.click()}function E(t){const e=y.get(t);e&&e.scrollIntoView({behavior:"smooth",block:"start"})}function Y(t,e,n){const v=x(n);v.current===e?v.current=X:v.current=e,t.preventDefault()}return de(()=>{Q(()=>{S()})}),(t,e)=>{const n=Z,v=ee;return i(),_("div",Fe,[s("nav",Se,[s("div",Ee,[s("div",Me,[(i(!0),_(j,null,q(c(o),(l,f)=>{var u,T,R,P;return i(),_("div",{key:l.no,class:"relative",style:{direction:"ltr"}},[s("button",{class:$(["relative transition duration-300 w-8 h-8 rounded hover:bg-active hover:op100",r.value.includes(f)?"op100 text-primary bg-gray:5":"op20"]),onClick:ze=>E(f)},[s("div",null,w(f+1),1)],10,He),(T=(u=l.meta)==null?void 0:u.slide)!=null&&T.title?(i(),_("div",{key:0,class:$(["pointer-events-none select-none absolute left-110% backdrop-blur-8 top-50% translate-y--50% ws-nowrap z-10 px2 shadow-xl rounded border border-main transition duration-400 op0 group-hover:op100",r.value.includes(f)?"text-primary":"text-main important-text-op-50"])},w((P=(R=l.meta)==null?void 0:R.slide)==null?void 0:P.title),3)):A("",!0)])}),128))])]),s("div",Ne,[c(ve)?(i(),k(V,{key:1,title:c(I)?"Dark mode":"Light mode","pointer-events-none":"",op50:""},{default:M(()=>[c(I)?(i(),k(n,{key:0})):(i(),k(v,{key:1}))]),_:1},8,["title"])):(i(),k(V,{key:0,title:c(I)?"Switch to light mode theme":"Switch to dark mode theme",onClick:e[0]||(e[0]=l=>c(fe)())},{default:M(()=>[c(I)?(i(),k(n,{key:0})):(i(),k(v,{key:1}))]),_:1},8,["title"]))])]),s("main",{class:"flex-1 h-full of-auto",style:K(`grid-template-columns: repeat(auto-fit,minmax(${L}px,1fr))`),onScroll:S},[(i(!0),_(j,null,q(c(o),(l,f)=>(i(),_("div",{key:l.no,ref_for:!0,ref:u=>y.set(f,u),class:$(["relative border-t border-main of-hidden flex gap-4 min-h-50 group",f===0?"pt5":""])},[s("div",Be,[s("div",Te,w(f+1),1),H(V,{class:"mr--3 op0 group-hover:op80",title:"Play in new tab",onClick:u=>g(c(G)(l,!1))},{default:M(()=>e[2]||(e[2]=[s("div",{class:"i-carbon:presentation-file"},null,-1)])),_:2},1032,["onClick"]),A("",!0)]),s("div",{class:"flex flex-col gap-2 my5",style:K({width:`${L}px`})},[s("div",{class:"border rounded border-main overflow-hidden bg-main select-none h-max",onDblclick:u=>g(c(G)(l,!1))},[(i(),k(Ce,{key:l.no,width:L,class:"pointer-events-none important:[&_*]:select-none"},{default:M(()=>[H(ye,{"clicks-context":x(l),route:l,"render-context":"overview"},null,8,["clicks-context","route"]),H(we,{page:l.no},null,8,["page"])]),_:2},1024))],40,Ae),B(l)?(i(),k(xe,{key:0,active:b.value===l,"clicks-context":x(l),class:"w-full mt-2",onDblclick:u=>W(l),onClick:u=>b.value=l},null,8,["active","clicks-context","onDblclick","onClick"])):A("",!0)],4),s("div",Ie,[H(V,{title:"Edit Note",class:$(["rounded-full w-9 h-9 text-sm",h.value===l.no?"important:op0":""]),onClick:u=>h.value=l.no},{default:M(()=>e[4]||(e[4]=[s("div",{class:"i-carbon:pen"},null,-1)])),_:2},1032,["class","onClick"])]),H($e,{no:l.no,class:"max-w-250 w-250 text-lg rounded p3","auto-height":!0,highlight:b.value===l,editing:h.value===l.no,"clicks-context":x(l),onDblclick:u=>h.value!==l.no?h.value=l.no:null,"onUpdate:editing":e[1]||(e[1]=u=>h.value=null),onMarkerClick:(u,T)=>Y(u,T,l)},null,8,["no","highlight","editing","clicks-context","onDblclick","onMarkerClick"]),D.value[f]>0?(i(),_("div",Ve,w(D.value[f])+" words ",1)):A("",!0)],2))),128))],36),s("div",Ke,[s("div",We,w(c(o).length)+" slides · "+w(F.value+c(o).length-1)+" clicks · "+w(p.value)+" words ",1)])])}}});export{Je as default};
