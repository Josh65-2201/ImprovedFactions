"use strict";(self.webpackChunkimproved_factions=self.webpackChunkimproved_factions||[]).push([[4942],{4800:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"commands/base/admin_leave","title":"Admin leave","description":"Module: Base","source":"@site/docs/commands/base/admin_leave.md","sourceDirName":"commands/base","slug":"/commands/base/admin_leave","permalink":"/ImprovedFactions/docs/commands/base/admin_leave","draft":false,"unlisted":false,"editUrl":"https://github.com/ToberoCat/ImprovedFactions/tree/dev/improved-factions-docs/docs/commands/base/admin_leave.md","tags":[{"inline":true,"label":"Base","permalink":"/ImprovedFactions/docs/tags/base"},{"inline":true,"label":"General commands","permalink":"/ImprovedFactions/docs/tags/general-commands"},{"inline":true,"label":"Admin","permalink":"/ImprovedFactions/docs/tags/admin"},{"inline":true,"label":"Leave","permalink":"/ImprovedFactions/docs/tags/leave"}],"version":"current","frontMatter":{"keywords":["Base","General commands","Admin","Leave"],"tags":["Base","General commands","Admin","Leave"]},"sidebar":"sidebar","previous":{"title":"Admin join","permalink":"/ImprovedFactions/docs/commands/base/admin_join"},"next":{"title":"Admin playerInfo","permalink":"/ImprovedFactions/docs/commands/base/admin_playerInfo"}}');var d=s(4848),i=s(8453);const o={keywords:["Base","General commands","Admin","Leave"],tags:["Base","General commands","Admin","Leave"]},t="Admin leave",c={},a=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"For Console \ud83d\udda5\ufe0f",id:"for-console-\ufe0f",level:3},{value:"Parameters",id:"parameters",level:2},{value:"For Console \ud83d\udda5\ufe0f",id:"for-console-\ufe0f-1",level:3},{value:"Permissions",id:"permissions",level:2},{value:"Responses",id:"responses",level:2}];function l(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"admin-leave",children:"Admin leave"})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Module: Base"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsx)(n.p,{children:"Leave a faction"}),"\n",(0,d.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,d.jsx)(n.h3,{id:"for-console-\ufe0f",children:"For Console \ud83d\udda5\ufe0f"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"/factions admin leave <target>\n"})}),"\n",(0,d.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsx)(n.h3,{id:"for-console-\ufe0f-1",children:"For Console \ud83d\udda5\ufe0f"}),"\n",(0,d.jsxs)(s,{children:[(0,d.jsx)("summary",{children:"View Parameters"}),(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Required"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"target"}),(0,d.jsx)(n.td,{children:"OfflinePlayer"}),(0,d.jsx)(n.td,{children:"Yes"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"The player you want to force to leave the faction"})})]})})]})]}),"\n",(0,d.jsx)(n.h2,{id:"permissions",children:"Permissions"}),"\n",(0,d.jsxs)(n.p,{children:["\ud83d\udd12 ",(0,d.jsx)(n.strong,{children:"Permission Required:"})," ",(0,d.jsx)(n.code,{children:"factions.commands.admin.leave"})]}),"\n",(0,d.jsx)(n.h2,{id:"responses",children:"Responses"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Response Code"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"forceLeaveSuccess"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"{prefix} <green>You've successfully forced the player to leave the faction</green>"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"factionNotFound"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"{prefix} <red>Error: The faction doesn't exist</red>"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"noPermission"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"{prefix} <red>Error: You don't have the required permission</red>"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"ownershipTransferred"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"{prefix} <green>You've successfully transferred the ownership to another player</green>"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"factionDeleted"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"{prefix} <green>You've successfully deleted the faction</green>"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"claimError"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"{prefix} <red>Error: You can't leave this faction</red>"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"missingRequiredArgument"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"{prefix} <red>Error: Missing required argument</red>"})})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>t});var r=s(6540);const d={},i=r.createContext(d);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);