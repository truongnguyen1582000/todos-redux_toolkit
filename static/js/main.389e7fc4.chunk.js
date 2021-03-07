(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(0),l=n.n(c),o=n(6),a=n.n(o),i=(n(18),n(4)),s=(n(19),n(2)),r=n(7),u=n(13),d=n.n(u),f=Object(r.b)({name:"todos",initialState:JSON.parse(localStorage.getItem("data"))||[],reducers:{addTodo:function(e,t){e.push({id:d.a.generate(),title:t.payload,isComplete:!1}),localStorage.setItem("data",JSON.stringify(e))},deleteTodo:function(e,t){var n=e.findIndex((function(e){return e.id===t.payload}));e.splice(n,1),localStorage.setItem("data",JSON.stringify(e))},setComplete:function(e,t){var n=e.findIndex((function(e){return e.id===t.payload}));e[n].isComplete=!e[n].isComplete,localStorage.setItem("data",JSON.stringify(e))},completeAll:function(e,t){e.filter((function(e){return!0===e.isComplete})).length===e.length?e.map((function(e){return e.isComplete=!1})):e.map((function(e){return e.isComplete=!0})),localStorage.setItem("data",JSON.stringify(e))},deleteAllCompleteTodo:function(e,t){e.filter((function(e){return!1===e.isComplete})),localStorage.setItem("data",JSON.stringify(e))}}}),j=f.reducer,m=f.actions,b=m.addTodo,p=m.deleteTodo,O=m.setComplete,h=m.completeAll,v=m.deleteAllCompleteTodo,C=j,g=(n(34),n(1));var x=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),l=n[0],o=n[1],a=Object(s.c)((function(e){return e.todos})),r=Object(s.b)(),u=a.filter((function(e){return!0===e.isComplete})).length===a.length;return Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l.trim()?(r(b(l)),o("")):o("")},children:[Object(g.jsx)("i",{className:"fas fa-check-double complete-all",onClick:function(){return r(h())},style:{opacity:u?"1":"0.4"}}),Object(g.jsx)("input",{type:"text",placeholder:"What needs to be done?",onChange:function(e){o(e.target.value)},value:l})]})};n(36);var N=function(e){var t=e.todos,n=Object(s.b)();return Object(g.jsx)("div",{className:"todo",children:Object(g.jsxs)("ul",{className:"todo__list",children:[t.map((function(e){return Object(g.jsxs)("li",{className:"todo__list-item",children:[e.isComplete?Object(g.jsx)("i",{className:"fas fa-check-square check-btn",onClick:function(){return n(O(e.id))}}):Object(g.jsx)("i",{className:"far fa-check-square check-btn",onClick:function(){return n(O(e.id))}}),Object(g.jsx)("span",{className:e.isComplete?"active todo-title":"todo-title",children:e.title}),Object(g.jsx)("i",{className:"fas fa-trash-alt delete-btn",onClick:function(){return n(p(e.id))}})]},e.id)})),!t.length&&Object(g.jsx)("h2",{className:"empty-list",children:"EMPTY !"})]})})};n(37);var S=function(e){var t=Object(s.c)((function(e){return e.todos}));return Object(g.jsx)("div",{children:Object(g.jsxs)("p",{className:"counter",children:[t.filter((function(e){return!1===e.isComplete})).length," items left"]})})};n(38);var k=function(e){var t=e.selectAll,n=e.selectActive,c=e.selectComplete,l=e.status;return Object(g.jsxs)("div",{className:"selector",children:[Object(g.jsx)("h2",{className:"all"===l?"btn btn-active":"btn",onClick:function(){t(),localStorage.setItem("status","all")},children:"All"}),Object(g.jsx)("h2",{className:"active"===l?"btn btn-active":"btn",onClick:function(){n(),localStorage.setItem("status","active")},children:"Active"}),Object(g.jsx)("h2",{className:"completed"===l?"btn btn-active":"btn",onClick:function(){c(),localStorage.setItem("status","completed")},children:"Completed"})]})};n(39);var I=function(e){var t=Object(s.b)();return Object(g.jsx)("div",{className:"clear-completed",children:Object(g.jsx)("p",{className:"btn",onClick:function(){return t(v())},children:"Clear completed"})})};var y=function(){var e=Object(s.c)((function(e){return e.todos})),t=Object(c.useState)([]),n=Object(i.a)(t,2),l=n[0],o=n[1],a=Object(c.useState)(localStorage.getItem("status")||"all"),r=Object(i.a)(a,2),u=r[0],d=r[1];Object(c.useEffect)((function(){f()}),[e,u]);var f=function(){switch(u){case"completed":o(e.filter((function(e){return!0===e.isComplete})));break;case"active":o(e.filter((function(e){return!1===e.isComplete})));break;default:o(e)}};return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("h2",{className:"app-name",children:"todos"}),Object(g.jsx)(x,{}),Object(g.jsx)(N,{todos:l}),Object(g.jsxs)("div",{className:"select",children:[Object(g.jsx)(S,{}),Object(g.jsx)(k,{selectAll:function(){return d("all")},selectActive:function(){return d("active")},selectComplete:function(){return d("completed")},status:u})]}),0!==e.filter((function(e){return e.isComplete})).length&&Object(g.jsx)(I,{})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,l=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),l(e),o(e),a(e)}))},T=(n(40),Object(r.a)({reducer:{todos:C}}));a.a.render(Object(g.jsx)(s.a,{store:T,children:Object(g.jsx)(l.a.StrictMode,{children:Object(g.jsx)(y,{})})}),document.getElementById("root")),A()}},[[41,1,2]]]);
//# sourceMappingURL=main.389e7fc4.chunk.js.map