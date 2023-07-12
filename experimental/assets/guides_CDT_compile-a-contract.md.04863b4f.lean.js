import{_ as r,c as i,I as e,E as a,V as n,J as o,o as C,C as l,a as s}from"./chunks/framework.281622bf.js";const k=JSON.parse('{"title":"Compile a Contract","description":"","frontmatter":{"title":"Compile a Contract","deploy":["staging","mainnet"],"order":-99997,"oultine":[0,4]},"headers":[],"relativePath":"guides/CDT/compile-a-contract.md","lastUpdated":1689149152000}'),y={name:"guides/CDT/compile-a-contract.md"},d=n("",9),A=l("div",{class:"language-shell"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"shell"),l("pre",{class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"$"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"mkdir"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"build")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"$"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"cd"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"build")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"$"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"eosio-cpp"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-abigen"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"../src/hello.cpp"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-o"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"hello.wasm"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-I"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"../include/")])])])],-1),h=l("div",{class:"language-shell"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"shell"),l("pre",{class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"$"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"mkdir"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"build")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"$"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"cd"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"build")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"$"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"eosio-cpp"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-abigen"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"../src/hello.cpp"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-o"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"hello.wasm"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-I"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"../include/")])])])],-1),D=l("div",{class:"language-shell"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"shell"),l("pre",{class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"$"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"mkdir"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"build")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"$"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"cd"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"build")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"$"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"cdt-cpp"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-abigen"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"../src/hello.cpp"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-o"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"hello.wasm"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-I"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"../include/")])])])],-1),m=n("",13);function u(_,F,E,g,b,f){const t=o("Staging"),p=o("Mainnet"),c=o("Experimental");return C(),i("div",null,[d,e(t,null,{default:a(()=>[A]),_:1}),e(p,null,{default:a(()=>[h]),_:1}),e(c,null,{default:a(()=>[D]),_:1}),m])}const x=r(y,[["render",u]]);export{k as __pageData,x as default};