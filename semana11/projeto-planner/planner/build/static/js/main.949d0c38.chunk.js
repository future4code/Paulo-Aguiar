(this.webpackJsonpplanner=this.webpackJsonpplanner||[]).push([[0],{101:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(7),c=t.n(o),i=(t(81),t(35)),u=t(139),l=t(31),s=t.n(l),f=t(102),m=t(15),p=t(13),d=t(140);function b(){var n=Object(m.a)(["\n  .MuiListItemText-primary {\n    text-decoration: ",";\n  }\n"]);return b=function(){return n},n}function h(){var n=Object(m.a)(["\n  color: ",";\n  text-decoration: ",";\n"]);return h=function(){return n},n}function g(){var n=Object(m.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  h3 {\n    color: red;\n    margin-left: 16px;\n  }\n  section {\n    display: flex;\n    flex-direction: column;\n    height: 500px;\n    width: 200px;\n    border: 1px dotted black;\n  }\n"]);return g=function(){return n},n}var v=p.a.main(g()),x=(p.a.p(h(),(function(n){return n.completa?"green":"none"}),(function(n){return n.completa?"line-through":"none"})),Object(p.a)(d.a)(b(),(function(n){return n.completa?"line-through":"none"})));var j=function(){var n=Object(a.useState)([]),e=Object(i.a)(n,2),t=e[0],o=e[1],c=Object(a.useState)(!0),l=Object(i.a)(c,2),m=l[0],p=l[1];function d(n){t.map((function(e){e.id===n&&function(n){p(!m);var e={completa:m};s.a.put("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-paulo/"+n,e).then((function(n){console.log(m)}))}(n)})),console.log(t)}return Object(a.useEffect)((function(){s.a.get("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-paulo").then((function(n){o(n.data)})).catch((function(n){window.alert(n)}))}),[t]),r.a.createElement(u.b,{injectFirst:!0},r.a.createElement(v,null,["Segunda","Ter\xe7a","Quarta","Quinta","Sexta","S\xe1bado","Domingo"].map((function(n){var e=n;return r.a.createElement("section",{key:n},r.a.createElement("h3",null,n),t.map((function(n){return n.day===e&&r.a.createElement(f.a,{onClick:function(){return d(n.id)},button:!0},r.a.createElement(x,{completa:n.completa,primary:n.text}))})))}))))},E=t(135),w=t(143),O=t(137),y=t(141),k=t(138),S=t(136);function C(){var n=Object(m.a)(["\n    color: #ffffff;\n    background: #FE6B8B;\n    border-radius: 3;\n    border: 0;\n    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);\n    transition: 0.5;\n    :hover {\n      background: #FF8E53;\n    }\n"]);return C=function(){return n},n}function F(){var n=Object(m.a)(["\n  margin-bottom: 15px;\n  width: 150px;\n"]);return F=function(){return n},n}function B(){var n=Object(m.a)(["\n  \n"]);return B=function(){return n},n}function Q(){var n=Object(m.a)(["\n  display: flex;\n  height: 60px;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0px 0px 7px 3px rgba(0,0,0,0.26);\n  section {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    width: 600px;\n  }\n"]);return Q=function(){return n},n}var D=p.a.main(Q()),T=Object(p.a)(y.a)(B()),I=Object(p.a)(k.a)(F()),J=Object(p.a)(S.a)(C());var M=function(){var n=Object(a.useState)(""),e=Object(i.a)(n,2),t=e[0],o=e[1],c=Object(a.useState)(""),l=Object(i.a)(c,2),f=l[0],m=l[1];return r.a.createElement(u.b,{injectFirst:!0},r.a.createElement(D,null,r.a.createElement("section",null,r.a.createElement(T,{onChange:function(n){m(n.target.value)},value:f,label:"nova tarefa",variant:"outlined",size:"small",color:"secondary.main"}),r.a.createElement(E.a,null,r.a.createElement(w.a,null,"Dia da semana"),r.a.createElement(I,{value:t,onChange:function(n){o(n.target.value)}},["Segunda","Ter\xe7a","Quarta","Quinta","Sexta","S\xe1bado","Domingo"].map((function(n){return r.a.createElement(O.a,{key:n,value:n},n)})))),r.a.createElement(J,{onClick:function(){var n={text:f,day:t,completa:!1};s.a.post("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-paulo",n).then((function(n){m(""),window.alert("tarefa criada com sucesso")})).catch((function(n){window.alert(n)}))}},"Criar tarefa"))))};function W(){var n=Object(m.a)(["\n  section {\n    display: flex;\n  }\n"]);return W=function(){return n},n}var z=p.a.main(W());var L=function(){return r.a.createElement(z,null,r.a.createElement(M,null),r.a.createElement("section",null,r.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},76:function(n,e,t){n.exports=t(101)},81:function(n,e,t){}},[[76,1,2]]]);
//# sourceMappingURL=main.949d0c38.chunk.js.map