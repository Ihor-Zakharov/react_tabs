(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),i=n(4),s=n(1),d=n.n(s),o=(n(9),n(10),n(11),n(0)),r=function(t){var e=t.id,n=t.title,c=t.onSelect,a=t.selected;return Object(o.jsx)("li",{"data-cy":"Tab",className:a?"is-active":"",children:Object(o.jsx)("a",{href:"#".concat(e),"data-cy":"TabLink",onClick:a?void 0:c,children:n})})},l=function(t){var e=t.tabs,n=t.selectedTabId,c=t.onTabSelected,a=d.a.useMemo((function(){var t;return null!==(t=e.find((function(t){return t.id===n})))&&void 0!==t?t:e[0]}),[e,n]);return Object(o.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(o.jsx)("div",{className:"tabs is-boxed",children:Object(o.jsx)("ul",{children:e.map((function(t){return Object(o.jsx)(r,{id:t.id,title:t.title,onSelect:function(){return c(t)},selected:t===a})}))})}),Object(o.jsx)("div",{className:"block","data-cy":"TabContent",children:a.content})]})},b=function(){var t,e=d.a.useState("tab-1"),n=Object(i.a)(e,2),c=n[0],a=n[1],s=d.a.useMemo((function(){return[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]}),[]);return Object(o.jsxs)("div",{className:"section",children:[Object(o.jsxs)("h1",{className:"title",children:["Selected tab is"," ",null===(t=s.find((function(t){return t.id===c})))||void 0===t?void 0:t.title]}),Object(o.jsx)(l,{tabs:s,selectedTabId:c,onTabSelected:function(t){return a(t.id)}})]})};a.a.render(Object(o.jsx)(b,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.3ba0ed10.chunk.js.map