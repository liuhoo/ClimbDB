(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports={maintable:"RankList_maintable__3KKN9"}},24:function(e,t,n){e.exports={img:"MainPage_img__YWnNg"}},25:function(e,t,n){e.exports=n(55)},50:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(23),c=n.n(l),u=n(6),o=n(0),s=n(2),i=n.n(s),m=n(5),E=n(3),f=n(4),d=n.n(f),p=function(){var e=Object(a.useContext)(L),t=Object(a.useState)(""),n=Object(E.a)(t,2),l=n[0],c=n[1],u=Object(a.useState)(""),o=Object(E.a)(u,2),s=o[0],f=o[1],p=function(){var t=Object(m.a)(i.a.mark(function t(n){var a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,d.a.post("http://localhost:4000/auth/gettoken",{username:l,password:s});case 3:a=t.sent,e.setToken({token:a.data.token,username:a.data.username});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return e.valid?r.a.createElement("button",{onClick:function(){return e.setToken({username:"",token:"nottesttoken"})}},"Logout"):r.a.createElement("div",null,r.a.createElement("h1",null,"Enter Login Information"),r.a.createElement("form",{onSubmit:p},r.a.createElement("div",null,r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"text",placeholder:"Username",onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",onChange:function(e){return f(e.target.value)}})),r.a.createElement("button",{className:"button is-primary",type:"submit"},"Login")))},b=(n(50),function(){var e=Object(a.useContext)(L),t=Object(a.useState)([]),n=Object(E.a)(t,2),l=n[0],c=n[1];Object(a.useEffect)(function(){o(),console.log(l)},[]);var o=function(){var e=Object(m.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("http://localhost:4000/climbers");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(m.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.delete("http://localhost:4000/climbers/".concat(t));case 2:o();case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"No"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Hometown"),e.valid?r.a.createElement("th",null,"Actions"):null)),r.a.createElement("tbody",null,l.map(function(t,n){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.id),r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.hometown),e.valid?r.a.createElement("td",null,r.a.createElement(u.b,{to:"/climbers/edit/".concat(t.id),className:"button is-small is-info"},"Edit"),r.a.createElement("button",{onClick:function(){return s(t.id)},className:"button is-small is-danger"},"Delete")):null)}))))}),v=function(){var e=Object(a.useContext)(L),t=Object(a.useState)(""),n=Object(E.a)(t,2),l=n[0],c=n[1],u=Object(a.useState)(""),s=Object(E.a)(u,2),f=s[0],b=s[1],v=Object(o.f)(),h=function(){var e=Object(m.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,d.a.post("http://localhost:4000/climbers",{name:l,hometown:f});case 3:v("/");case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return e.valid?r.a.createElement("div",null,r.a.createElement("form",{onSubmit:h},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Name"),r.a.createElement("input",{className:"input",type:"text",placeholder:"Name",value:l,onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",null,"Hometown"),r.a.createElement("input",{type:"text",placeholder:"Hometown",onChange:function(e){return b(e.target.value)}})),r.a.createElement("div",{className:"field"},r.a.createElement("button",{className:"button is-primary"},"Save")))):r.a.createElement(p,null)},h=function(){var e=Object(a.useContext)(L),t=Object(a.useState)(""),n=Object(E.a)(t,2),l=n[0],c=n[1],u=Object(a.useState)(""),s=Object(E.a)(u,2),f=s[0],b=s[1],v=Object(o.f)(),h=Object(o.g)().id,O=function(){var e=Object(m.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,d.a.patch("http://localhost:4000/climbers/".concat(h),{name:l,hometown:f});case 3:v("/climbers");case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)(function(){k()},[]);var k=function(){var e=Object(m.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("http://localhost:4000/climbers/".concat(h));case 2:t=e.sent,c(t.data.name),b(t.data.hometown);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return e.valid?r.a.createElement("div",null,r.a.createElement("form",{onSubmit:O},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Name"),r.a.createElement("input",{className:"input",type:"text",placeholder:"Name",value:l,onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",null,"Hometown"),r.a.createElement("input",{type:"text",placeholder:"Hometown",value:f,onChange:function(e){return b(e.target.value)}})),r.a.createElement("div",{className:"field"},r.a.createElement("button",{className:"button is-primary"},"Save")))):r.a.createElement(p,null)},O=n(24),k=n.n(O),j=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:"Titlepage.png",className:k.a.img}))},g=function(){var e=Object(a.useContext)(L);return e.valid?r.a.createElement("a",null,r.a.createElement(u.b,{to:"login"},e.username)):r.a.createElement("a",null,r.a.createElement(u.b,{to:"login"},"Login"))},w=n(9),x=n.n(w),N=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:x.a.title},r.a.createElement("a",null," ",r.a.createElement(u.b,{to:"/"},"Climb DB"))),r.a.createElement("div",{className:x.a.mid},r.a.createElement("ul",{className:x.a.nav},r.a.createElement("li",null,r.a.createElement(u.b,{to:"/climbers"},"Climbers")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/events"},"Events")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/results"},"Results")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/wr"},"World Records")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/ranks"},"Ranking")))),r.a.createElement("div",{className:x.a.right},r.a.createElement(g,null)))},y=function(){var e=Object(a.useContext)(L),t=Object(a.useState)([]),n=Object(E.a)(t,2),l=n[0],c=n[1];Object(a.useEffect)(function(){u()},[]);var u=function(){var e=Object(m.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("http://localhost:4000/events");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(m.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.delete("http://localhost:4000/events/".concat(t));case 2:u();case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("table",{className:"table is-striped is-fullwidth"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Event ID"),r.a.createElement("th",null,"Location"),r.a.createElement("th",null,"Time"),e.valid?r.a.createElement("th",null,"Actions"):null)),r.a.createElement("tbody",null,l.map(function(t,n){return r.a.createElement("tr",{key:t.WCC_ID},r.a.createElement("td",null,t.id),r.a.createElement("td",null,t.location),r.a.createElement("td",null,t.eventTime),e.valid?r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return o(t.id)},className:"button is-small is-danger"},"Delete")):null)}))))},C=n(11),S=n.n(C),_=0,D=2021,P=function(){var e=Object(a.useState)([]),t=Object(E.a)(e,2),n=t[0],l=t[1];function c(e,t){return e.Points<t.Points?1:e.Points>t.Points?-1:1}function u(e,t){return e.Points<t.Points?-1:(e.Points,t.Points,1)}function o(e){e!=D&&(_=2),_=1==_||0==_?2:1,s(e)}Object(a.useEffect)(function(){s(2021),console.log(n)},[]);var s=function(){var e=Object(m.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return D=t,e.next=3,d.a.get("http://localhost:4000/ranks/".concat(t));case 3:n=e.sent,1==_?(n.data.sort(c),l(n.data)):2==_?(n.data.sort(u),l(n.data)):l(n.data),console.log(n.data);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return o(2017)}},"2017"),r.a.createElement("button",{onClick:function(){return o(2018)}},"2018"),r.a.createElement("button",{onClick:function(){return o(2019)}},"2019"),r.a.createElement("button",{onClick:function(){return o(2021)}},"2021"),r.a.createElement("table",{className:S.a.maintable},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{onClick:function(){return o(D)}},"Ranking"),r.a.createElement("th",null,"Climber Name"),r.a.createElement("th",{onClick:function(){return o(D)}},"# Points"))),r.a.createElement("tbody",null,n.map(function(e,t){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,_<2?t+1:50-t),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.Points))}))))},T=function(){var e=function(){var e=sessionStorage.getItem("username");try{return e||""}catch(t){return""}},t=function(){var t=Object(m.a)(i.a.mark(function t(n){var a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.post("http://localhost:4000/auth/validate",{token:n,username:e()});case 2:return a=t.sent,t.abrupt("return",a.data.valid);case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),n=Object(a.useState)(function(){var e=sessionStorage.getItem("token");try{return e||""}catch(t){return"nottesttoken"}}()),r=Object(E.a)(n,2),l=r[0],c=r[1],u=Object(a.useState)(e()),o=Object(E.a)(u,2),s=o[0],f=o[1],p=Object(a.useState)(t(l)),b=Object(E.a)(p,2),v=b[0],h=b[1],O=function(){var e=Object(m.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("http://localhost:4000/auth/validate",{token:t});case 2:n=e.sent,h(n.data.valid);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(m.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:sessionStorage.setItem("token",t.token),sessionStorage.setItem("username",t.username),c(t.token),f(t.username);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){O(l)},[l]),{setToken:k,token:l,valid:v,username:s}},I=function(){var e=Object(a.useContext)(L),t=Object(a.useState)([]),n=Object(E.a)(t,2),l=n[0],c=n[1];Object(a.useEffect)(function(){u(),console.log(l)},[]);var u=function(){var e=Object(m.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("http://localhost:4000/results");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(m.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.delete("http://localhost:4000/results/".concat(t));case 2:u();case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("table",{className:"table is-striped is-fullwidth"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Instance"),r.a.createElement("th",null,"Event Location"),r.a.createElement("th",null,"Climber ID"),r.a.createElement("th",null,"Ranking"),r.a.createElement("th",null,"Qualification"),r.a.createElement("th",null,"Semi-Final"),r.a.createElement("th",null,"Final"),r.a.createElement("th",null,"Event Type"),e.vald?r.a.createElement("th",null,"Actions"):null)),r.a.createElement("tbody",null,l.map(function(t,n){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,n+1),r.a.createElement("td",null,t.WCC_ID),r.a.createElement("td",null,t.Climber_ID),r.a.createElement("td",null,t.ClimberRank),r.a.createElement("td",null,t.Qualification),r.a.createElement("td",null,t.SemiFinal),r.a.createElement("td",null,t.Final),r.a.createElement("td",null,t.EventType),e.valid?r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return o(t.id)}},"Delete")):null)}))))},R=function(){var e=Object(a.useState)([]),t=Object(E.a)(e,2),n=t[0],l=t[1];Object(a.useEffect)(function(){c(),console.log(n)},[]);var c=function(){var e=Object(m.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("http://localhost:4000/wr");case 2:t=e.sent,l(t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("center",null,"WORLD RECORDS "),r.a.createElement("table",{className:S.a.maintable},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Climber Name"),r.a.createElement("th",null,"Time (secs)"),r.a.createElement("th",null," DATE "))),r.a.createElement("tbody",null,n.map(function(e,t){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.Final),r.a.createElement("td",null,e.eventTime.split(" ")[0]))}))))},L=r.a.createContext();var B=function(){var e=T(),t={token:e.token,valid:e.valid,username:e.username,setToken:e.setToken};return r.a.createElement(L.Provider,{value:t},r.a.createElement(u.a,null,r.a.createElement(N,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-half is-offset-one-quarter"},r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",element:r.a.createElement(j,null)}),r.a.createElement(o.a,{exact:!0,path:"/climbers",element:r.a.createElement(b,null)}),r.a.createElement(o.a,{path:"/climbers/add",element:r.a.createElement(v,null)}),r.a.createElement(o.a,{path:"/climbers/edit/:id",element:r.a.createElement(h,null)}),r.a.createElement(o.a,{path:"/events",element:r.a.createElement(y,null)}),r.a.createElement(o.a,{path:"/ranks",element:r.a.createElement(P,null)}),r.a.createElement(o.a,{path:"/login",element:r.a.createElement(p,null)}),r.a.createElement(o.a,{path:"/results",element:r.a.createElement(I,null)}),r.a.createElement(o.a,{path:"/wr",element:r.a.createElement(R,null)})))))))};c.a.render(r.a.createElement(B,null),document.getElementById("root"))},9:function(e,t,n){e.exports={nav:"NavBar_nav__39q_a",right:"NavBar_right__OMbZ2",mid:"NavBar_mid__1dlkq",title:"NavBar_title__3VzEo"}}},[[25,2,1]]]);
//# sourceMappingURL=main.7c0ac544.chunk.js.map