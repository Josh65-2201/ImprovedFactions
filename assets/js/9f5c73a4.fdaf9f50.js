"use strict";(self.webpackChunkimproved_factions=self.webpackChunkimproved_factions||[]).push([[4487],{5894:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>c});const d=JSON.parse('{"id":"commands/base/admin_disband","title":"Admin disband","description":"Module: Base","source":"@site/docs/commands/base/admin_disband.md","sourceDirName":"commands/base","slug":"/commands/base/admin_disband","permalink":"/ImprovedFactions/docs/commands/base/admin_disband","draft":false,"unlisted":false,"editUrl":"https://github.com/ToberoCat/ImprovedFactions/tree/dev/improved-factions-docs/docs/commands/base/admin_disband.md","tags":[{"inline":true,"label":"Base","permalink":"/ImprovedFactions/docs/tags/base"},{"inline":true,"label":"Admin commands","permalink":"/ImprovedFactions/docs/tags/admin-commands"},{"inline":true,"label":"Admin","permalink":"/ImprovedFactions/docs/tags/admin"},{"inline":true,"label":"Disband","permalink":"/ImprovedFactions/docs/tags/disband"}],"version":"current","frontMatter":{"keywords":["Base","Admin commands","Admin","Disband"],"tags":["Base","Admin commands","Admin","Disband"]},"sidebar":"sidebar","previous":{"title":"Admin claim","permalink":"/ImprovedFactions/docs/commands/base/admin_claim"},"next":{"title":"Admin join","permalink":"/ImprovedFactions/docs/commands/base/admin_join"}}');var i=s(4848),r=s(8453);const o={keywords:["Base","Admin commands","Admin","Disband"],tags:["Base","Admin commands","Admin","Disband"]},a="Admin disband",t={},c=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"For Console \ud83d\udda5\ufe0f",id:"for-console-\ufe0f",level:3},{value:"Parameters",id:"parameters",level:2},{value:"For Console \ud83d\udda5\ufe0f",id:"for-console-\ufe0f-1",level:3},{value:"Permissions",id:"permissions",level:2},{value:"Responses",id:"responses",level:2}];function l(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"admin-disband",children:"Admin disband"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Module: Base"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Disband a faction"}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.h3,{id:"for-console-\ufe0f",children:"For Console \ud83d\udda5\ufe0f"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"/factions admin disband <faction>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(n.h3,{id:"for-console-\ufe0f-1",children:"For Console \ud83d\udda5\ufe0f"}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"View Parameters"}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"faction"}),(0,i.jsx)(n.td,{children:"Faction"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"The faction you want to disband"})})]})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"permissions",children:"Permissions"}),"\n",(0,i.jsxs)(n.p,{children:["\ud83d\udd12 ",(0,i.jsx)(n.strong,{children:"Permission Required:"})," ",(0,i.jsx)(n.code,{children:"factions.commands.admin.disband"})]}),"\n",(0,i.jsx)(n.h2,{id:"responses",children:"Responses"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Response Code"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"factionDisbanded"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"{prefix} <green>The faction has been disbanded</green>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"missingRequiredArgument"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"{prefix} <red>Error: Missing required argument</red>"})})]})]})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var d=s(6540);const i={},r=d.createContext(i);function o(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);