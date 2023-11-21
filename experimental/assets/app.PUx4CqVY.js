import{d as g,u as P,C as j,b as B,w as E,l as _,o as l,H as L,n as V,h as b,j as x,c,k as a,t as h,F as p,D as w,e as k,bD as I,bE as M,p as D,m as S,_ as A,r as $,V as N,M as F,a2 as v,a3 as y,s as C,bF as G,bG as q,bH as H,bI as U,bJ as J,bK as z,bL as Q,bM as K,bN as X,bO as W,y as Y,bP as Z,bQ as ee,bR as te,bS as ne}from"./chunks/framework.YmJWI2yl.js";import{V as ae,t as R}from"./chunks/theme.G88RXjJ6.js";const oe=e=>{if(window.dataLayer&&window.gtag)return;const t=document.createElement("script");t.src=`https://www.googletagmanager.com/gtag/js?id=${e}`,t.async=!0,document.head.appendChild(t),window.dataLayer=window.dataLayer||[],window.gtag=function(){dataLayer.push(arguments)},gtag("js",new Date),gtag("config",e)},se=({id:e})=>{e&&typeof window<"u"&&oe(e)},ie=g({__name:"CustomLayout",setup(e){const{Layout:t}=R,{page:n}=P(),o={mainnet:"/",staging:"/staging/",experimental:"/experimental/"};function u(r){return r==="mainnet"?window.location.origin+"/"+n.value.relativePath.replace(".md",".html"):window.location.origin+o[r]+n.value.relativePath.replace(".md",".html")}function s(r){!r||!r.target||!r.target.classList.contains("VPLink")||window.location.reload()}function i(){return[{text:"Mainnet",link:u("mainnet"),target:"_parent",rel:"noreferrer"},{text:"Staging",link:u("staging"),target:"_parent",rel:"noreferrer"},{text:"Experimental",link:u("experimental"),target:"_parent",rel:"noreferrer"}]}return(r,m)=>{const O=j("ClientOnly");return l(),B(_(t),null,{"nav-bar-content-after":E(()=>[L(O,null,{default:E(()=>[L(ae,{class:V({VPNavBarMenuGroup:!1,active:!1}),button:"Version",items:i(),onClick:s},null,8,["items"])]),_:1})]),_:1})}}}),d=e=>(D("data-v-7d6f18a0"),e=e(),S(),e),re=d(()=>a("api-title",null,"Query",-1)),le={class:"api-container"},ce={class:"api-split"},ue=d(()=>a("span",{class:"no-select"},"Endpoint",-1)),pe={id:"api",class:"input-mock"},de=d(()=>a("br",null,null,-1)),_e=d(()=>a("api-title",null,"Parameters",-1)),me={class:"api-container"},fe={class:"api-split"},ge={class:"no-select"},he=["onUpdate:modelValue"],ye=d(()=>a("br",null,null,-1)),ve=d(()=>a("br",null,null,-1)),be=d(()=>a("br",null,null,-1)),we=d(()=>a("api-title",null,"Response",-1)),ke={class:"response"},Ce=g({__name:"DemoApi",props:{query:{},body:{},type:{}},setup(e){const t=e;let n=b({json:!0}),o=b();async function u(){const s={method:t.type,headers:{"Content-Type":"application/json"},body:JSON.stringify(n.value)};t.type==="GET"&&delete s.body;const i=await fetch(`https://api.mainnet.ultra.io${t.query}`,s).catch(m=>(console.log(m),m));if(!i||!i.ok){o.value=i.toString();return}const r=await i.json();o.value=`
`+JSON.stringify(r,null,2)}return x(()=>{if(t.body)for(let s of t.body)n.value[s.key]=s.value}),(s,i)=>(l(),c(p,null,[re,a("div",le,[a("div",ce,[ue,a("div",pe,h(t.query),1)])]),de,t.body&&t.body.length>=1?(l(),c(p,{key:0},[_e,a("div",me,[(l(!0),c(p,null,w(t.body,r=>(l(),c("div",fe,[a("span",ge,h(r.key),1),I(a("input",{class:"input-mock",id:"api","onUpdate:modelValue":m=>_(n)[r.key]=m},null,8,he),[[M,_(n)[r.key]]])]))),256))]),ye],64)):k("",!0),a("button",{title:"execute",onClick:u},"Execute"),ve,be,_(o)?(l(),c(p,{key:1},[we,a("pre",ke,"            "+h(_(o))+`
        `,1)],64)):k("",!0)],64))}}),Ae=A(Ce,[["__scopeId","data-v-7d6f18a0"]]),Ee=e=>(D("data-v-2665b272"),e=e(),S(),e),Le=Ee(()=>a("div",{class:"spacer"},null,-1)),Pe=g({__name:"Button",props:{align:{}},emits:["onClick"],setup(e,{emit:t}){const n=e,o=t;return(u,s)=>(l(),c(p,null,[a("button",{onClick:s[0]||(s[0]=i=>o("onClick")),style:N([`float: ${n.align}`])},[$(u.$slots,"default",{},void 0,!0)],4),Le],64))}}),Ve=A(Pe,[["__scopeId","data-v-2665b272"]]),xe={class:"tabs"},De=["onClick"],Se={key:0,class:"tab-content"},$e=g({__name:"Tabs",props:{titles:{}},setup(e){const t=e;let n=b(0);return(o,u)=>(l(),c(p,null,[a("div",xe,[(l(!0),c(p,null,w(t.titles,(s,i)=>(l(),c("div",{class:V(["tab",_(n)===i?["active"]:[]]),key:i,onClick:r=>F(n)?n.value=i:n=i},h(s),11,De))),128))]),(l(!0),c(p,null,w(t.titles,(s,i)=>(l(),c(p,null,[i===_(n)?(l(),c("div",Se,[$(o.$slots,s,{},void 0,!0)])):k("",!0)],64))),256))],64))}}),Re=A($e,[["__scopeId","data-v-7d80d9da"]]),Te={...R,Layout:ie,async enhanceApp({app:e,router:t,siteData:n}){e.component("DemoApi",Ae),e.component("Button",Ve),e.component("Tabs",Re),e.component("Mainnet",await v(()=>y(()=>import("./chunks/Mainnet.ECHYRNNQ.js"),__vite__mapDeps([0,1])))),e.component("Staging",await v(()=>y(()=>import("./chunks/Staging.ZfNXtJJD.js"),__vite__mapDeps([2,1])))),e.component("Experimental",await v(()=>y(()=>import("./chunks/Experimental.Eu65g0R8.js"),__vite__mapDeps([3,1])))),se({id:"G-904T1HX43E"})}};function T(e){if(e.extends){const t=T(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const f=T(Te),Oe=g({name:"VitePressApp",setup(){const{site:e}=P();return x(()=>{Y(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),Z(),ee(),te(),f.setup&&f.setup(),()=>ne(f.Layout)}});async function je(){const e=Ie(),t=Be();t.provide(q,e);const n=H(e.route);return t.provide(U,n),t.component("Content",J),t.component("ClientOnly",z),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),f.enhanceApp&&await f.enhanceApp({app:t,router:e,siteData:Q}),{app:t,router:e,data:n}}function Be(){return K(Oe)}function Ie(){let e=C,t;return X(n=>{let o=W(n),u=null;return o&&(e&&(t=o),(e||t===o)&&(o=o.replace(/\.js$/,".lean.js")),u=y(()=>import(o),__vite__mapDeps([]))),C&&(e=!1),u},f.NotFound)}C&&je().then(({app:e,router:t,data:n})=>{t.go().then(()=>{G(t.route,n.site),e.mount("#app")})});export{je as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/Mainnet.ECHYRNNQ.js","assets/chunks/framework.YmJWI2yl.js","assets/chunks/Staging.ZfNXtJJD.js","assets/chunks/Experimental.Eu65g0R8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}