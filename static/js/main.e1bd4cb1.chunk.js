(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{16:function(t,e,c){t.exports={item:"TodoItem_item__36DPj",checkbox:"TodoItem_checkbox__2lkaM",textInput:"TodoItem_textInput__ui2n6"}},29:function(t,e,c){},36:function(t,e,c){"use strict";c.r(e);var o=c(0),n=c.n(o),i=c(22),a=c.n(i),r=(c(29),c(20),c(10),c(9)),s=c(1),l=(c(14),c(15),c(16),c(7)),d=function(){return Object(s.jsx)("nav",{className:"navBar",children:Object(s.jsx)("ul",{children:[{id:1,path:"/",text:"Home"},{id:2,path:"/about",text:"About"}].map((function(t){return Object(s.jsx)("li",{children:Object(s.jsx)(l.c,{to:t.path,activeClassName:"active-link",exact:!0,children:t.text})},t.id)}))})})},j=(c(38),c(2)),u=function(){console.log(Object(j.f)());var t=Object(j.f)().slug,e=[{slug:"about-app",title:"About the App",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This app was developed by Ibas Majid, a self-taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic."}].find((function(e){return e.slug===t})),c=e.title,o=e.description;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:c}),Object(s.jsx)("p",{children:o})]})},b=function(t){console.log(t);var e=Object(j.g)(),c=e.url,o=e.path;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"".concat(c,"/about-app"),children:"About App"})}),Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"".concat(c,"/about-author"),children:"About Author"})})]}),Object(s.jsx)(j.a,{path:"".concat(o,"/:slug"),children:Object(s.jsx)(u,{})})]})},h=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("h3",{children:"No match for this page"})})},p=function(){var t=Object(o.useState)(function(){var t=localStorage.getItem("todos");return JSON.parse(t)||[]}()),e=Object(r.a)(t,2),c=e[0];e[1];return Object(o.useEffect)((function(){var t=JSON.stringify(c);localStorage.setItem("todos",t)}),[c]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(d,{}),Object(s.jsxs)(j.c,{children:[Object(s.jsx)(j.a,{exact:!0,path:"/",children:"..."}),Object(s.jsx)(j.a,{path:"/about",children:Object(s.jsx)(b,{})}),Object(s.jsx)(j.a,{path:"*",children:Object(s.jsx)(h,{})})]})]})};a.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(l.a,{children:Object(s.jsx)(p,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.e1bd4cb1.chunk.js.map