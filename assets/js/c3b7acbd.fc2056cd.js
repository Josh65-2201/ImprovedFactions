"use strict";(self.webpackChunkimproved_factions=self.webpackChunkimproved_factions||[]).push([[6270],{3257:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"commands/power-raids/power","title":"Power","description":"Module: Power-raids","source":"@site/docs/commands/power-raids/power.md","sourceDirName":"commands/power-raids","slug":"/commands/power-raids/power","permalink":"/ImprovedFactions/docs/commands/power-raids/power","draft":false,"unlisted":false,"editUrl":"https://github.com/ToberoCat/ImprovedFactions/tree/dev/improved-factions-docs/docs/commands/power-raids/power.md","tags":[{"inline":true,"label":"Power-raids","permalink":"/ImprovedFactions/docs/tags/power-raids"},{"inline":true,"label":"Power commands","permalink":"/ImprovedFactions/docs/tags/power-commands"},{"inline":true,"label":"Power","permalink":"/ImprovedFactions/docs/tags/power"}],"version":"current","frontMatter":{"keywords":["Power-raids","Power commands","Power"],"tags":["Power-raids","Power commands","Power"]},"sidebar":"sidebar","previous":{"title":"Sethome","permalink":"/ImprovedFactions/docs/commands/home/sethome"},"next":{"title":"Power add","permalink":"/ImprovedFactions/docs/commands/power-raids/power_add"}}');var n=o(4848),d=o(8453);const i={keywords:["Power-raids","Power commands","Power"],tags:["Power-raids","Power commands","Power"]},t="Power",c={},l=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"For Player \ud83d\udc64",id:"for-player-",level:3},{value:"For Console \ud83d\udda5\ufe0f",id:"for-console-\ufe0f",level:3},{value:"Parameters",id:"parameters",level:2},{value:"For Console \ud83d\udda5\ufe0f",id:"for-console-\ufe0f-1",level:3},{value:"Permissions",id:"permissions",level:2},{value:"Responses",id:"responses",level:2}];function a(e){const r={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components},{Details:o}=r;return o||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"power",children:"Power"})}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Module: Power-raids"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(r.p,{children:"View the power of a faction"}),"\n",(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r.h3,{id:"for-player-",children:"For Player \ud83d\udc64"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"/factions power\n"})}),"\n",(0,n.jsx)(r.h3,{id:"for-console-\ufe0f",children:"For Console \ud83d\udda5\ufe0f"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"/factions power <faction>\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(r.h3,{id:"for-console-\ufe0f-1",children:"For Console \ud83d\udda5\ufe0f"}),"\n",(0,n.jsxs)(o,{children:[(0,n.jsx)("summary",{children:"View Parameters"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"faction"}),(0,n.jsx)(r.td,{children:"Faction"}),(0,n.jsx)(r.td,{children:"Yes"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"The faction you want to get the power of"})})]})})]})]}),"\n",(0,n.jsx)(r.h2,{id:"permissions",children:"Permissions"}),"\n",(0,n.jsxs)(r.p,{children:["\ud83d\udd12 ",(0,n.jsx)(r.strong,{children:"Permission Required:"})," ",(0,n.jsx)(r.code,{children:"factions.commands.power"})]}),"\n",(0,n.jsx)(r.h2,{id:"responses",children:"Responses"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Response Code"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"powerHeader"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"{prefix} <yellow><b><----|</b> Power <b>|----\x3e</b></yellow>"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"powerDetail"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"{prefix} <gold>\xc2\xbb</gold> <yellow>{powerType}</yellow> <aqua>{power}</aqua>"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"notInFaction"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"{prefix} <red>Error: You're not in a faction</red>"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"noPermission"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"{prefix} <red>Error: You don't have the required permission</red>"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"missingRequiredArgument"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"{prefix} <red>Error: Missing required argument</red>"})})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,r,o)=>{o.d(r,{R:()=>i,x:()=>t});var s=o(6540);const n={},d=s.createContext(n);function i(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);