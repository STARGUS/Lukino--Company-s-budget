(this.webpackJsonptext=this.webpackJsonptext||[]).push([[0],[,,,,function(e,t,c){},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(5),i=c.n(a),l=(c(10),c(11),c(2)),r=(c(12),c(13),c(0));function d(e){var t=e.showon,c=e.Text,n=e.tops;return Object(r.jsx)("div",{className:"alert",children:t&&Object(r.jsx)("div",{style:{top:"".concat(n)},className:"alert-show",children:c||"\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0432\u0430\u0448 \u0437\u0430\u043a\u0430\u0437! \n \u0414\u0430\u043d\u043d\u044b\u0435 \u0443\u0436\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b!"})})}c(15);function j(e){var t=e.data,c=e.setMaskString,s=void 0===c?Function.prototype:c,a=Object(n.useState)(!1),i=Object(l.a)(a,2),d=i[0],j=i[1],b=Object(n.useRef)();return Object(r.jsxs)("div",{className:d?" selectric-wrapper selectric-js-select-time selectric-belowselectric-open selectric-focus ":"selectric-wrapper selectric-js-select-time selectric-below",onBlur:function(){return j(!1)},children:[Object(r.jsxs)("div",{className:"inputFormRequest",children:[Object(r.jsx)("textarea",{tabIndex:"-1",ref:b,type:"text",className:"textarea",placeholder:"\u0417\u0430\u043f\u0440\u043e\u0441...",name:"inputFormRequest",onChange:function(){return s(b.current.value)}},"input"),Object(r.jsx)("b",{onClick:function(){return j(!d)},className:"button",children:"\u25be"})]}),d&&Object(r.jsx)("div",{className:"selectric-items",style:{display:"block",zIndex:"29",width:"100%"},children:Object(r.jsx)("div",{className:"selectric-scroll",style:{height:"3rem"},children:Object(r.jsx)("ul",{tabIndex:"0",children:t.map((function(e,t){return Object(r.jsx)("li",{"data-index":t+1,onClick:function(t){b.current.value+="".concat(e.data,", "),s(b.current.value)},children:e.data},"li"+t)}))})})})]})}c(4),c(16);function b(e){var t=e.data,c=Object(n.useRef)(),s=Object(n.useState)(document.documentElement.clientWidth),a=Object(l.a)(s,2),i=a[0],d=a[1];return window.addEventListener("resize",(function(){return d(document.documentElement.clientWidth)})),Object(n.useEffect)((function(){c.current.focus()}),[t]),i>560?Object(r.jsxs)("table",{className:"report--table",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"col",children:"#"}),Object(r.jsx)("th",{scope:"col",children:"\u041f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044c \u043f\u043b\u0430\u0442\u0435\u0436\u0430"}),Object(r.jsx)("th",{scope:"col",children:"\u0414\u0430\u0442\u0430"}),Object(r.jsx)("th",{scope:"col",children:"\u0421\u0443\u043c\u043c\u0430"}),Object(r.jsx)("th",{scope:"col",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(r.jsx)("th",{scope:"col",children:"\u041a\u0440\u0430\u0439\u043d\u044f\u044f \u0434\u0430\u0442\u0430"}),Object(r.jsx)("th",{scope:"col",children:"\u0418\u041f/\u041a\u0430\u0441\u0441\u0430"}),Object(r.jsx)("th",{scope:"col",children:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043f\u043b\u0430\u0442\u0435\u0436\u0430"}),Object(r.jsx)("th",{scope:"col",children:"\u0421\u0442\u0430\u0442\u044c\u044f \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432"})]})}),Object(r.jsx)("tbody",{ref:c,children:t.map((function(e,t){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"row",children:e.id}),Object(r.jsx)("td",{children:e.datapaymentRecipient}),Object(r.jsx)("td",{children:e.date}),Object(r.jsx)("td",{children:e.price}),Object(r.jsx)("td",{children:e.description}),Object(r.jsx)("td",{children:e.deadlineDate}),Object(r.jsx)("td",{children:e.boxOffice}),Object(r.jsx)("td",{children:e.deadlineDate}),Object(r.jsx)("td",{children:e.itemExpenditure})]},"tr"+t)}))})]}):Object(r.jsx)("form",{action:"http://file",children:Object(r.jsx)("input",{style:{cursor:"pointer",marginLeft:"2rem",marginBottom:"3rem",border:"2px solid #85c469"},className:"btn btn-secondary",type:"submit",value:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443"})})}function o(){var e=new Date,t=(e.getDate(),e.getMonth(),e.getFullYear(),Object(n.useState)("")),c=Object(l.a)(t,2),s=c[0],a=(c[1],Object(n.useState)(!1)),i=Object(l.a)(a,2),o=i[0],h=(i[1],Object(n.useState)("5rem")),u=Object(l.a)(h,2),m=u[0],O=u[1],x=Object(n.useState)(),p=Object(l.a)(x,2),f=(p[0],p[1],Object(n.useRef)()),v=Object(n.useRef)(),y=Object(n.useRef)(),N=(Object(n.useRef)(),Object(n.useState)([])),w=Object(l.a)(N,2),k=w[0],g=w[1],S=Object(n.useState)(""),E=Object(l.a)(S,2),F=E[0],R=E[1],B=Object(n.useState)(""),C=Object(l.a)(B,2),L=(C[0],C[1]),z=Object(n.useState)(""),D=Object(l.a)(z,2),M=(D[0],D[1]),V=Object(n.useState)(""),W=Object(l.a)(V,2),I=(W[0],W[1]),U=Object(n.useState)([]),_=Object(l.a)(U,2),A=_[0],Y=_[1],q=Object(n.useState)(document.documentElement.clientWidth),J=Object(l.a)(q,2),T=J[0],G=J[1];window.addEventListener("resize",(function(){return G(document.documentElement.clientWidth)})),Object(n.useEffect)((function(){T<=768?(O("4.5rem"),T<=540&&O("4rem")):O("5rem")}),[T]);var H=[{id:1,datapaymentRecipient:"\u0418\u041f \u0410\u043a\u0431\u0438\u0440\u043e\u0432. \u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a \u0431\u0443\u043c\u0430\u0436\u043d\u044b\u0445 \u0440\u0443\u0447\u0435\u043a",date:"20.07.2021",price:"3500",description:"\u0420\u0443\u0447\u043a\u0430 \u0448\u0430\u0440\u0438\u043a\u043e\u0432\u0430\u044f \u0431\u0443\u043c\u0430\u0436\u043d\u0430\u044f",deadlineDate:"21.07.2021",paymentStatus:"\u043e\u043f\u043b\u0430\u0447\u0435\u043d",boxOffice:"\u041a\u0430\u0441\u0441\u0430",itemExpenditure:"\u0410\u0433\u0440\u043e\u0442\u0443\u0440\u0438\u0437\u043c / \u041f\u0440\u043e\u0447\u0435\u0435"},{id:2,datapaymentRecipient:"\u0418\u041f \u0421\u0443\u0440\u0430\u0432\u0446\u043e\u0432. \u0414\u0435\u0437\u0438\u043d\u0441\u0435\u043a\u0446\u0438\u044f",date:"17.10.2020",price:"4200",description:"\u0420\u0443\u0447\u043a\u0430 \u0448\u0430\u0440\u0438\u043a\u043e\u0432\u0430\u044f",paymentStatus:"\u043e\u0442\u043c\u0435\u043d\u0435\u043d",boxOffice:"\u0418\u041f"},{id:3,datapaymentRecipient:"\u0418\u041f \u0410\u043a\u0431\u0438\u0440\u043e\u0432. \u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a \u0431\u0443\u043c\u0430\u0436\u043d\u044b\u0445 \u0440\u0443\u0447\u0435\u043a",date:"20.07.2021",price:"3500",description:"\u0420\u0443\u0447\u043a\u0430 \u0448\u0430\u0440\u0438\u043a\u043e\u0432\u0430\u044f \u0431\u0443\u043c\u0430\u0436\u043d\u0430\u044f",deadlineDate:"21.07.2021",paymentStatus:"\u043e\u043f\u043b\u0430\u0447\u0435\u043d",boxOffice:"\u041a\u0430\u0441\u0441\u0430",itemExpenditure:"\u0410\u0433\u0440\u043e\u0442\u0443\u0440\u0438\u0437\u043c / \u041f\u0440\u043e\u0447\u0435\u0435"},{id:4,datapaymentRecipient:"\u0418\u041f \u0421\u0443\u0440\u0430\u0432\u0446\u043e\u0432. \u0414\u0435\u0437\u0438\u043d\u0441\u0435\u043a\u0446\u0438\u044f",date:"17.10.2020",price:"4200",description:"\u0420\u0443\u0447\u043a\u0430 \u0448\u0430\u0440\u0438\u043a\u043e\u0432\u0430\u044f",paymentStatus:"\u043e\u0442\u043c\u0435\u043d\u0435\u043d",boxOffice:"\u0418\u041f"},{id:5,datapaymentRecipient:"\u0418\u041f \u0410\u043a\u0431\u0438\u0440\u043e\u0432. \u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a \u0431\u0443\u043c\u0430\u0436\u043d\u044b\u0445 \u0440\u0443\u0447\u0435\u043a",date:"20.07.2021",price:"3500",description:"\u0420\u0443\u0447\u043a\u0430 \u0448\u0430\u0440\u0438\u043a\u043e\u0432\u0430\u044f \u0431\u0443\u043c\u0430\u0436\u043d\u0430\u044f",deadlineDate:"21.07.2021",paymentStatus:"\u043e\u043f\u043b\u0430\u0447\u0435\u043d",boxOffice:"\u041a\u0430\u0441\u0441\u0430",itemExpenditure:"\u0410\u0433\u0440\u043e\u0442\u0443\u0440\u0438\u0437\u043c / \u041f\u0440\u043e\u0447\u0435\u0435"},{id:6,datapaymentRecipient:"\u0418\u041f \u0421\u0443\u0440\u0430\u0432\u0446\u043e\u0432. \u0414\u0435\u0437\u0438\u043d\u0441\u0435\u043a\u0446\u0438\u044f",date:"17.10.2020",price:"4200",description:"\u0420\u0443\u0447\u043a\u0430 \u0448\u0430\u0440\u0438\u043a\u043e\u0432\u0430\u044f",paymentStatus:"\u043e\u0442\u043c\u0435\u043d\u0435\u043d",boxOffice:"\u0418\u041f"}];return Object(n.useEffect)((function(){var e=F.replace(/\./g,", ").replace(/\//g,", ").split(", ");g([e]),console.log(k)}),[F]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{tops:m,Text:s,showon:o}),Object(r.jsxs)("div",{className:"costItem_content",children:[Object(r.jsx)("div",{className:"label--left",children:"\u0424\u043e\u0440\u043c\u0430 \u043f\u043e\u0438\u0441\u043a\u0430"}),Object(r.jsxs)("div",{style:{marginBottom:"5vw"},children:[Object(r.jsx)("div",{className:"label--sm",children:"\u041e\u0442\u0447\u0435\u0442 \u0441\u0442\u0430\u0442\u0435\u0439 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432 \u043f\u043e \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c."}),Object(r.jsx)(j,{data:[{id:0,data:"\u21161"},{id:1,data:"\u21162"},{id:2,data:"\u21163"},{id:3,data:"\u21164"},{id:4,data:"\u21165"},{id:5,data:"\u21166"},{id:6,data:"\u21167"},{id:7,data:"\u21168"},{id:8,data:"\u21169"}],setMaskString:R},"1")]}),Object(r.jsxs)("div",{className:"label--left label--left--load",children:["\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",Object(r.jsx)("div",{className:"item--add--open item--add",children:"\u2039"})]}),Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"settings",children:[Object(r.jsxs)("div",{className:"settings--inputElement",children:[Object(r.jsx)("label",{className:"label",htmlFor:"dateFrom",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u0443\u044e \u0434\u0430\u0442\u0443 \u043f\u043b\u0430\u0442\u0435\u0436\u0430"}),Object(r.jsx)("input",{ref:f,type:"date",className:"input",placeholder:"\u0421",pattern:"",name:"dateFrom",id:"dateFrom",onChange:function(){return L(f.current.value)}})]}),Object(r.jsxs)("div",{className:"settings--inputElement",children:[Object(r.jsx)("label",{className:"label",htmlFor:"dateBy",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043d\u0435\u0447\u043d\u0443\u044e \u0434\u0430\u0442\u0443 \u043f\u043b\u0430\u0442\u0435\u0436\u0430"}),Object(r.jsx)("input",{ref:v,type:"date",className:"input",placeholder:"\u041f\u043e",name:"dateBy",id:"dateBy",onChange:function(){return M(v.current.value)}})]}),Object(r.jsxs)("div",{className:"settings--inputElement",children:[Object(r.jsx)("label",{className:"label",htmlFor:"paymentAmount",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u043f\u043b\u0430\u0442\u0435\u0436\u0430"}),Object(r.jsx)("input",{ref:y,type:"number",className:"input",placeholder:"\u0421\u0443\u043c\u043c\u0430",title:"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c",name:"paymentAmount",id:"paymentAmount",onChange:function(){return I(y.current.value)}})]}),Object(r.jsxs)("div",{className:"settings--inputElement",children:[Object(r.jsx)("label",{className:"label",htmlFor:"keywords",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0432 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0438"}),Object(r.jsx)("input",{type:"text",className:"input",placeholder:"\u0412\u0432\u043e\u0434 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e ' , '",title:"\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430, \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e ,",name:"keywords",id:"keywords"})]}),Object(r.jsxs)("div",{className:"checkbox",children:[Object(r.jsx)("label",{className:"label",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u043f\u043b\u0430\u0442\u0435\u0436\u0430"}),Object(r.jsx)("input",{type:"checkbox",name:"checkUser",id:"check1"}),Object(r.jsx)("label",{htmlFor:"check1",children:"\u0418\u041f"}),Object(r.jsx)("input",{type:"checkbox",name:"checkUser",id:"check2"}),Object(r.jsx)("label",{htmlFor:"check2",children:"\u041a\u0430\u0441\u0441\u0430"})]}),Object(r.jsxs)("div",{className:"checkbox",children:[Object(r.jsx)("label",{className:"label",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441 \u043f\u043b\u0430\u0442\u0435\u0436\u0430"}),Object(r.jsx)("input",{type:"checkbox",name:"checkUser",id:"check3"}),Object(r.jsx)("label",{htmlFor:"check3",children:"\u041e\u043f\u043b\u0430\u0447\u0435\u043d"}),Object(r.jsx)("input",{type:"checkbox",name:"checkUser",id:"check4"}),Object(r.jsx)("label",{htmlFor:"check4",children:"\u041e\u0442\u043b\u043e\u0436\u0435\u043d"}),Object(r.jsx)("input",{type:"checkbox",name:"checkUser",id:"check5"}),Object(r.jsx)("label",{htmlFor:"check5",children:"\u041e\u0442\u043c\u0435\u043d\u0435\u043d"})]}),Object(r.jsxs)("div",{className:"settings--inputElement",children:[Object(r.jsx)("label",{className:"label",htmlFor:"keywords1",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0432 \u043c\u0430\u0441\u043a\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044f \u043f\u043b\u0430\u0442\u0435\u0436\u0430"}),Object(r.jsx)("input",{type:"text",className:"input",placeholder:"\u0412\u0432\u043e\u0434 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e ' , '",title:"\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430, \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e ,",name:"keywords1",id:"keywords1"})]})]})}),Object(r.jsx)("div",{className:"label--left"}),Object(r.jsx)("div",{children:Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:function(){Y(H)},style:{marginBottom:"1rem"},className:"btn btn-primary",children:Object(r.jsx)("span",{children:"\u0421\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443"})})})})]}),Object(r.jsx)(b,{data:A},"repo")]})}c(17);function h(){var e=Object(n.useState)(document.documentElement.clientWidth),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),i=Object(l.a)(a,2),d=i[0],j=i[1];return window.addEventListener("resize",(function(){return s(document.documentElement.clientWidth)})),Object(n.useEffect)((function(){j(""),window.pageYOffset>=16?j("header--shut"):j(""),window.onscroll=function(){window.pageYOffset>=16?j("header--shut"):j("")}}),[c]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{onClick:function(){return console.log(c)},className:d?d+" header":" header",children:Object(r.jsx)("div",{className:"header--inner",children:Object(r.jsx)("a",{href:"https://lukino.ru/",children:Object(r.jsx)("img",{className:"header--img",src:"logowhite.png",alt:"a"})})})}),Object(r.jsxs)("div",{className:"header--nav",children:[Object(r.jsx)("div",{className:"header--breadcrumbs",children:Object(r.jsxs)("ul",{className:"breadcrumbs",children:[Object(r.jsx)("li",{className:"breadcrumbs__item",children:Object(r.jsx)("a",{href:"https://lukino.ru/",title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",children:Object(r.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlnsa:"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/",x:"0px",y:"0px",width:"1rem",height:"0.8rem",viewBox:"0 0 228.6 187.5",style:{enableBackground:"new 0 0 228.6 187.5"},xmlSpace:"preserve",children:[Object(r.jsx)("defs",{}),Object(r.jsx)("path",{d:"M174.7,163.5h-26v-62.1H79.9v62.1h-26V77.4l60.4-47l60.4,47V163.5z M103.9,125.5h20.8v34.4h-20.8V125.5z M228.6,89L114.3,0 L65.8,37.8v-20h-24v38.7L0,89l14.7,18.9l15.2-11.8v91.4h168.8V96.1l15.2,11.8L228.6,89z"})]})})}),Object(r.jsx)("li",{className:"breadcrumbs__item",children:Object(r.jsx)("a",{href:"!#",children:"\u0411\u044e\u0434\u0436\u0435\u0442 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"})})]})}),Object(r.jsx)("div",{className:"label",children:"\u0411\u044e\u0434\u0436\u0435\u0442 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"})]})]})}c(18),c(19),c(20),c(21);function u(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(h,{}),Object(r.jsx)(o,{})]})}var m=function(){return Object(r.jsx)(u,{})};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.884d7f15.chunk.js.map