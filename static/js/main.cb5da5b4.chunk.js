(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{35:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(24),a=c(8),i=c(2),s=c(0),r=c.n(s),d=(c(33),c(34),c(35),c(17)),b=c.n(d),l=c(3),j=function(e){var t=e.directTo,c=e.children;return Object(l.jsx)(a.b,{to:t,className:function(e){var t=e.isActive;return b()("navbar-item",{"is-active":t})},children:c})},o=function(){return Object(l.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(j,{directTo:"/",children:"Home"}),Object(l.jsx)(j,{directTo:"/tabs",children:"Tabs"})]})})})},h=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o,{}),Object(l.jsx)("div",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(i.b,{})})})]})},u=function(){return Object(l.jsx)("h1",{className:"title",children:"Home page"})},x=function(e,t){var c;return null===(c=e.find((function(e){return e.id===t})))||void 0===c?void 0:c.content},O=function(e){var t=e.tabs,c=e.selectedTabId;return Object(l.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.title,i=c===t;return Object(l.jsx)("li",{className:b()({"is-active":i}),"data-cy":"Tab",children:Object(l.jsx)(a.a,{to:t,"data-cy":"TabLink",onClick:function(){return!i},children:n})},t)}))})}),Object(l.jsx)("div",{className:"block","data-cy":"TabContent",children:c?x(t,c):Object(l.jsx)("p",{children:"Please select a tab"})})]})},m=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],v=function(){var e=Object(i.q)().tabId,t=e;return e&&(t=function(e,t){var c;return null===(c=e.find((function(e){return e.id===t})))||void 0===c?void 0:c.id}(m,e)),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"Tabs page"}),Object(l.jsx)(O,{selectedTabId:t,tabs:m})]})},f=function(){return Object(l.jsx)("h1",{className:"title",children:"Page not found"})},p=Object(a.c)([{path:"/",element:Object(l.jsx)(h,{}),children:[{index:!0,element:Object(l.jsx)(u,{})},{path:"tabs",element:Object(l.jsx)(v,{}),children:[{path:":tabId"}]},{path:"home",element:Object(l.jsx)(i.a,{to:"/",replace:!0})},{path:"*",element:Object(l.jsx)(f,{})}]}]);Object(n.createRoot)(document.getElementById("root")).render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(i.d,{router:p})}))}},[[37,1,2]]]);
//# sourceMappingURL=main.cb5da5b4.chunk.js.map