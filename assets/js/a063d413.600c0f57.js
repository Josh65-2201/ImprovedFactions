"use strict";(self.webpackChunkimproved_factions=self.webpackChunkimproved_factions||[]).push([[2401],{8034:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>t});const r=JSON.parse('{"id":"commands/base/admin_claim","title":"Admin claim","description":"Module: Base","source":"@site/docs/commands/base/admin_claim.md","sourceDirName":"commands/base","slug":"/commands/base/admin_claim","permalink":"/ImprovedFactions/docs/commands/base/admin_claim","draft":false,"unlisted":false,"editUrl":"https://github.com/ToberoCat/ImprovedFactions/tree/dev/improved-factions-docs/docs/commands/base/admin_claim.md","tags":[{"inline":true,"label":"Base","permalink":"/ImprovedFactions/docs/tags/base"},{"inline":true,"label":"General commands","permalink":"/ImprovedFactions/docs/tags/general-commands"},{"inline":true,"label":"Admin","permalink":"/ImprovedFactions/docs/tags/admin"},{"inline":true,"label":"Claim","permalink":"/ImprovedFactions/docs/tags/claim"}],"version":"current","frontMatter":{"keywords":["Base","General commands","Admin","Claim"],"tags":["Base","General commands","Admin","Claim"]},"sidebar":"sidebar","previous":{"title":"Admin bypass","permalink":"/ImprovedFactions/docs/commands/base/admin_bypass"},"next":{"title":"Admin disband","permalink":"/ImprovedFactions/docs/commands/base/admin_disband"}}');var d=s(4848),i=s(8453);const c={keywords:["Base","General commands","Admin","Claim"],tags:["Base","General commands","Admin","Claim"]},o="Admin claim",l={},t=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"For Player \ud83d\udc64",id:"for-player-",level:3},{value:"For Console \ud83d\udda5\ufe0f",id:"for-console-\ufe0f",level:3},{value:"Parameters",id:"parameters",level:2},{value:"For Player \ud83d\udc64",id:"for-player--1",level:3},{value:"For Console \ud83d\udda5\ufe0f",id:"for-console-\ufe0f-1",level:3},{value:"Permissions",id:"permissions",level:2},{value:"Responses",id:"responses",level:2}];function a(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"admin-claim",children:"Admin claim"})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Module: Base"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsx)(n.p,{children:"Claim a chunk"}),"\n",(0,d.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,d.jsx)(n.h3,{id:"for-player-",children:"For Player \ud83d\udc64"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"/factions admin claim <faction>\n"})}),"\n",(0,d.jsx)(n.h3,{id:"for-console-\ufe0f",children:"For Console \ud83d\udda5\ufe0f"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"/factions admin claim <faction> <world> <blockX> <blockZ>\n"})}),"\n",(0,d.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsx)(n.h3,{id:"for-player--1",children:"For Player \ud83d\udc64"}),"\n",(0,d.jsxs)(s,{children:[(0,d.jsx)("summary",{children:"View Parameters"}),(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Required"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"faction"}),(0,d.jsx)(n.td,{children:"Faction"}),(0,d.jsx)(n.td,{children:"Yes"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"The faction you want to claim the chunk for"})})]})})]})]}),"\n",(0,d.jsx)(n.h3,{id:"for-console-\ufe0f-1",children:"For Console \ud83d\udda5\ufe0f"}),"\n",(0,d.jsxs)(s,{children:[(0,d.jsx)("summary",{children:"View Parameters"}),(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Required"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"faction"}),(0,d.jsx)(n.td,{children:"Faction"}),(0,d.jsx)(n.td,{children:"Yes"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"The faction you want to claim the chunk for"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"world"}),(0,d.jsx)(n.td,{children:"World"}),(0,d.jsx)(n.td,{children:"Yes"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"The world you want to claim the chunk for"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"blockX"}),(0,d.jsx)(n.td,{children:"Int"}),(0,d.jsx)(n.td,{children:"Yes"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"The X coordinate of the block you want to claim"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"blockZ"}),(0,d.jsx)(n.td,{children:"Int"}),(0,d.jsx)(n.td,{children:"Yes"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"The Z coordinate of the block you want to claim"})})]})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"permissions",children:"Permissions"}),"\n",(0,d.jsxs)(n.p,{children:["\ud83d\udd12 ",(0,d.jsx)(n.strong,{children:"Permission Required:"})," ",(0,d.jsx)(n.code,{children:"factions.commands.admin.claim"})]}),"\n",(0,d.jsx)(n.h2,{id:"responses",children:"Responses"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Response Code"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"factionClaimed"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"{prefix} <green>You've successfully claimed the chunk</green>"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"claimError"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"{prefix} <red>Error: You can't claim this chunk</red>"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"factionNotFound"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"{prefix} <red>Error: The faction doesn't exist</red>"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"noPermission"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"{prefix} <red>Error: You don't have the required permission</red>"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"missingRequiredArgument"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"{prefix} <red>Error: Missing required argument</red>"})})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var r=s(6540);const d={},i=r.createContext(d);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);