(this["webpackJsonpreact-todo-list"]=this["webpackJsonpreact-todo-list"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),r=n.n(o),a=n(7),i=n.n(a),d=(n(15),n(9)),l=n(5),s=n(2),u=function(e){var t=e.color,n=e.text,o=e.onClick;return Object(c.jsx)("div",{children:Object(c.jsx)("button",{style:{backgroundColor:t},onClick:o,className:"btn",children:n})})};u.defaultProps={color:"black",text:"Button"};var j=u,b=function(e){var t=e.title,n=e.onAdd,o=e.showAddTodo;return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("h1",{children:t}),Object(c.jsx)(j,{color:o?"red":"green",text:o?"Close":"Add",onClick:n})]})};b.defaultProps={title:"To-Do Tracker"};var h=b,O=n(8),x=function(e){var t=e.todo,n=e.onDelete,o=e.onToggle;return Object(c.jsxs)("div",{className:"todo ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return o(t.id)},children:[Object(c.jsxs)("h3",{children:[t.text," ",Object(c.jsx)(O.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(c.jsx)("p",{children:t.date})]})},f=function(e){var t=e.todos,n=e.onDelete,o=e.onToggle;return Object(c.jsx)("div",{children:t.map((function(e){return Object(c.jsx)(x,{todo:e,onDelete:n,onToggle:o},e.id)}))})},m=function(e){var t=e.onAdd,n=Object(o.useState)(""),r=Object(s.a)(n,2),a=r[0],i=r[1],d=Object(o.useState)(""),l=Object(s.a)(d,2),u=l[0],j=l[1],b=Object(o.useState)(!1),h=Object(s.a)(b,2),O=h[0],x=h[1];return Object(c.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,date:u,reminder:O}),i(""),j(""),x(!1)):alert("Please add a to-do item.")},children:[Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{children:"To-do:"}),Object(c.jsx)("input",{type:"text",placeholder:"Required",value:a,onChange:function(e){return i(e.target.value)}})]}),Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{children:"Date:"}),Object(c.jsx)("input",{type:"text",placeholder:"Not Required",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(c.jsxs)("div",{className:"form-control form-control-check",children:[Object(c.jsx)("label",{children:"Highlight:"}),Object(c.jsx)("input",{type:"checkbox",checked:O,value:O,onChange:function(e){return x(e.currentTarget.checked)}})]}),Object(c.jsx)("input",{type:"submit",value:"Save",className:"btn btn-block"})]})};var g=function(){var e=new Date,t=e.getDate(),n=e.toLocaleString("default",{month:"long"}),r=e.getFullYear(),a="".concat(n," ").concat(t,", ").concat(r),i=Object(o.useState)([{id:0,text:"Click the green 'Add' button to add a to-do item.",date:a,reminder:!1},{id:1,text:"Click the red 'x' remove a to-do item.",date:a,reminder:!1},{id:2,text:"Double click the to-do item to toggle the highlight function.",date:a,reminder:!1}]),u=Object(s.a)(i,2),j=u[0],b=u[1],O=Object(o.useState)(j.length),x=Object(s.a)(O,2),g=x[0],v=x[1],p=Object(o.useState)(!1),k=Object(s.a)(p,2),C=k[0],D=k[1];return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(h,{onAdd:function(){return D(!C)},showAddTodo:C}),C?Object(c.jsx)(m,{onAdd:function(e){var t=g;v(g+1);var n=Object(l.a)({id:t},e);b([].concat(Object(d.a)(j),[n]))}}):"",Object(c.jsx)(f,{todos:j,onDelete:function(e){b(j.filter((function(t){return t.id!==e})))},onToggle:function(e){b(j.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{reminder:!t.reminder}):t})))}})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),r(e),a(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.de9fa82d.chunk.js.map