(function(t){function e(e){for(var a,o,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);m&&m(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={app:0},r={app:0},s=[];function i(t){return c.p+"js/"+({back:"back",location:"location",member:"member",member_login:"member_login","menu~story":"menu~story",menu:"menu",story:"story",news:"news"}[t]||t)+"."+{back:"faca62a3",location:"8a5dd799",member:"b0b705c0",member_login:"21848f0c","menu~story":"a6859d71",menu:"9aa7a08d",story:"320711e1",news:"4397f3d1"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={back:1,member:1,member_login:1,menu:1,story:1,news:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({back:"back",location:"location",member:"member",member_login:"member_login","menu~story":"menu~story",menu:"menu",story:"story",news:"news"}[t]||t)+"."+{back:"6ff7315f",location:"31d6cfe0",member:"34444efe",member_login:"34444efe","menu~story":"31d6cfe0",menu:"0dac18e7",story:"f3ba2584",news:"8a4adcb2"}[t]+".css",r=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===a||u===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var a=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete o[t],m.parentNode.removeChild(m),n(s)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){o[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1a11":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"Status"}},[n("span",{staticClass:"m-3"},[t._v(" Hi~ "),0!=t.name.length?n("span",[t._v(t._s(t.name))]):n("span",[t._v("遊客")])]),0!=t.name.length?n("b-button",{attrs:{variant:"dark"},on:{click:t.logout}},[t._v("登出")]):t._e()],1),n("div",[n("Slide",{staticClass:"position-absoulte",attrs:{id:"sidebar",closeOnNavigation:!0,width:(t.screenWidth-50).toString()}},[n("router-link",{attrs:{to:"/"}},[n("span",[t._v("凡妮莎")])]),n("router-link",{attrs:{to:"/menu"}},[n("span",[t._v("菜單")])]),n("router-link",{attrs:{to:"/story"}},[n("span",[t._v("關於我們")])]),n("router-link",{attrs:{to:"/news"}},[n("span",[t._v("最新消息")])]),n("router-link",{attrs:{to:"/location"}},[n("span",[t._v("店家資訊")])]),n("router-link",{attrs:{to:"/member"}},[n("span",[t._v("會員專區")])]),n("router-link",{attrs:{to:"/member_login"}},[n("span",[t._v("會員服務")])]),n("router-link",{attrs:{to:"/back"}},[n("span",[t._v("後臺管理")])]),n("b-navbar",{staticClass:"bottomnav"},[n("b-navbar-brand",[t.screenWidth>768?n("span",[t._v("聯絡我們")]):t._e()]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{href:"https://lin.ee/efWwSJs"}},[n("font-awesome-icon",{staticClass:"icon",attrs:{color:"white",size:"lg",icon:["fab","line"]}})],1),t.screenWidth>768?n("b-nav-item",{attrs:{href:"https://facebook.com/vanessacafe.tw/"}},[n("font-awesome-icon",{staticClass:"icon",attrs:{color:"white",size:"lg",icon:["fab","facebook"]}})],1):t._e(),t.screenWidth<768?n("b-nav-item",{attrs:{href:"https://m.facebook.com/vanessacafe.tw/"}},[n("font-awesome-icon",{staticClass:"icon",attrs:{color:"white",size:"lg",icon:["fab","facebook"]}})],1):t._e(),n("b-nav-item",{attrs:{href:"https://instagram.com/vanessa_restaurant?igshid=mvou4tklg3rm"}},[n("font-awesome-icon",{staticClass:"icon",attrs:{color:"white",size:"lg",icon:["fab","instagram"]}})],1)],1)],1)],1)],1)],1),n("vue-page-transition",{attrs:{name:"fade-in-up"}},[n("router-view")],1)],1)},r=[],s=(n("b0c0"),n("db0f")),i={data:function(){return{screenWidth:document.documentElement.clientWidth}},methods:{logout:function(){this.$store.commit("logout"),this.$swal("登出","已順利登出","success"),this.$router.push("/member")}},computed:{name:function(){return this.$store.getters.name}},watch:{screenWidth:function(t){return t=parseInt(t),this.$store.commit("getScreenWidth",t),this.$store.getters.screenWidth-50},name:function(t){return this.$store.getters.name}},mounted:function(){var t=this;window.onresize=function(){t.screenWidth=document.documentElement.clientWidth}},components:{Slide:s["Slide"]}},c=i,l=(n("f6c1"),n("2877")),u=Object(l["a"])(c,o,r,!1,null,"7a9b4aac",null),d=u.exports,m=n("5f5b"),f=n("b1e0"),b=n("9483");Object(b["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var p=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.mainstyle,attrs:{id:"main"},on:{mousedown:t.mousedown,mouseup:t.mouseup,touchstart:t.touchstart,touchend:t.touchend}},[n("div",{style:t.boxstyle,attrs:{id:"all"}},[n("div",{staticClass:"box a",staticStyle:{background:"url('./images/others/box.png') center/cover"}}),n("div",{staticClass:"box b",staticStyle:{background:"url('./images/others/box.png') center/cover"}}),n("div",{staticClass:"box c",staticStyle:{background:"url('./images/others/box.png') center/cover"}}),n("div",{staticClass:"box d",staticStyle:{background:"url('./images/others/box.png') center/cover"}}),n("div",{staticClass:"box e",staticStyle:{background:"url('./images/others/box.png') center/cover"}}),n("div",{staticClass:"box f",staticStyle:{background:"url('./images/others/box.png') center/cover"}})]),n("button",{staticClass:"explore btn btn-dark text-center",on:{click:t.rand}},[t._v("explore")]),n("div",{staticClass:"container",attrs:{id:"text"}},[n("transition",{attrs:{name:"fade"}},[0===t.style?n("div",{staticClass:"aa"},[n("h1",{domProps:{textContent:t._s(t.styledetail[0].title)}}),n("p",{domProps:{textContent:t._s(t.styledetail[0].description)}})]):t._e()]),n("transition",{attrs:{name:"fade"}},[1===t.style?n("div",{staticClass:"bb"},[n("h1",{domProps:{textContent:t._s(t.styledetail[1].title)}}),n("p",{domProps:{textContent:t._s(t.styledetail[1].description)}})]):t._e()]),n("transition",{attrs:{name:"fade"}},[2===t.style?n("div",{staticClass:"cc"},[n("h1",{domProps:{textContent:t._s(t.styledetail[2].title)}}),n("p",{domProps:{textContent:t._s(t.styledetail[2].description)}})]):t._e()]),n("transition",{attrs:{name:"fade"}},[3===t.style?n("div",{staticClass:"dd"},[n("h1",{domProps:{textContent:t._s(t.styledetail[3].title)}}),n("p",{domProps:{textContent:t._s(t.styledetail[3].description)}})]):t._e()]),n("transition",{attrs:{name:"fade"}},[4===t.style?n("div",{staticClass:"ee"},[n("h1",{domProps:{textContent:t._s(t.styledetail[4].title)}}),n("p",{domProps:{textContent:t._s(t.styledetail[4].description)}})]):t._e()]),n("transition",{attrs:{name:"fade"}},[5===t.style?n("div",{staticClass:"ff"},[n("h1",{domProps:{textContent:t._s(t.styledetail[5].title)}}),n("p",{domProps:{textContent:t._s(t.styledetail[5].description)}})]):t._e()])],1)])},g=[],y=(n("99af"),n("ac1f"),n("1276"),{data:function(){return{style:0,boxstyle:{},mainstyle:{transition:"1s"},styledetail:[{title:"A tavola non s’invecchia",description:"「只要待在餐桌旁，年華即不會逝去」",background:"url('./images/atmosphere/1446024551-3704374595.jpg')no-repeat center/cover"},{title:"與您相約，戀上幸福好味道",description:"選用多種經認證的有機栽種生菜，搭配水果、堅果及清爽的酸甜醬汁",background:"url('./images/meal/1446024564-728212007.jpg')no-repeat center/cover"},{title:"Vanessa-神聖與美好",description:"也是本餐廳所追求的意念所在，用最真的一顆心，給予所有客人一如南歐花園的繽紛美好感受",background:"url('./images/meal/1446024566-2550922969.jpg')no-repeat center/cover"},{title:"品嘗的不只是氛圍",description:"以南歐花園為空間設計的發想，在細節處打造甜蜜浪漫的迷人氛圍",background:"url('./images/atmosphere/1446024546-1984352169.jpg')no-repeat center/cover"},{title:"堅持，原味的美味",description:"嚴選新鮮頂級的食材，採用自然原味的料理手法，為您呈現一道道兼顧健康美味的歐法風味料理。",background:"url('./images/meal/10623342_711455995602630_7133017122918877083_o.jpg')no-repeat center/cover"},{title:"是餐廳，也是家",description:"優質的服務團隊，重視每個貴賓用餐的環節，專業之外更在意與客人間的體貼互動",background:"url('./images/atmosphere/12010577_909593355788892_5778526372011856134_o.jpg')no-repeat center/cover"}],boxmove:{xs:0,ys:0,x:0,y:0,xf:0,yf:0}}},methods:{rand:function(){var t=this,e=function(){return 3*Math.random()-1},n=360*Math.random();this.boxstyle={transform:"rotate3d(".concat(e(),",").concat(e(),",").concat(e(),", ").concat(n,"deg)")},setTimeout((function(){var e=t.boxstyle.transform.split(",");e[3]=Math.abs(parseInt(e[3]));var n=e[3]%360;e[0]=e[0].split("(")[1];var a=e[0]%1.4;a>.2&&a<.5?(t.mainstyle.background=t.styledetail[0].background,t.style=0):a>.5&&a<.8?(t.mainstyle.background=t.styledetail[1].background,t.style=1):n>45&&n<135?(t.mainstyle.background=t.styledetail[2].background,t.style=2):n>135&&n<225?(t.mainstyle.background=t.styledetail[3].background,t.style=3):n>225&&n<315?(t.mainstyle.background=t.styledetail[4].background,t.style=4):(t.mainstyle.background=t.styledetail[5].background,t.style=5)}),500)},mousedown:function(t){this.xs=t.clientX,this.ys=t.clientY},mouseup:function(t){var e=this;this.x=t.clientX,this.y=t.clientY,this.xf=(this.x-this.xs)/300,this.yf=(this.y-this.ys)/300,this.boxstyle={transform:"rotate3d(".concat(Math.abs(this.yf),",").concat(Math.abs(this.xf),",0, ").concat(200*(this.xf+this.yf),"deg)")},setTimeout((function(){var t=e.boxstyle.transform.split(",");t[3]=Math.abs(parseInt(t[3]));var n=t[3]%360;t[0]=t[0].split("(")[1];var a=t[0]%1.4;a>.2&&a<.5?(e.mainstyle.background=e.styledetail[0].background,e.style=0):a>.5&&a<.8?(e.mainstyle.background=e.styledetail[1].background,e.style=1):n>45&&n<135?(e.mainstyle.background=e.styledetail[2].background,e.style=2):n>135&&n<225?(e.mainstyle.background=e.styledetail[3].background,e.style=3):n>225&&n<315?(e.mainstyle.background=e.styledetail[4].background,e.style=4):(e.mainstyle.background=e.styledetail[5].background,e.style=5)}),500)},touchstart:function(){this.xs=event.changedTouches[0].clientX,this.ys=event.changedTouches[0].clientY},touchend:function(){var t=this;this.x=event.changedTouches[0].clientX,this.y=event.changedTouches[0].clientY,this.xf=(this.x-this.xs)/300,this.yf=(this.y-this.ys)/300,this.boxstyle={transform:"rotate3d(".concat(Math.abs(this.yf),",").concat(Math.abs(this.xf),",0, ").concat(150*(this.xf+this.yf),"deg)")},setTimeout((function(){var e=t.boxstyle.transform.split(",");e[3]=Math.abs(parseInt(e[3]));var n=e[3]%360;e[0]=e[0].split("(")[1];var a=e[0]%1.4;a>.2&&a<.5?(t.mainstyle.background=t.background[0],t.style=0):a>.5&&a<.8?(t.mainstyle.background=t.background[1],t.style=1):n>45&&n<135?(t.mainstyle.background=t.background[2],t.style=2):n>135&&n<225?(t.mainstyle.background=t.background[3],t.style=3):n>225&&n<315?(t.mainstyle.background=t.background[4],t.style=4):(t.mainstyle.background=t.background[5],t.style=5)}),500)}}}),v=y,k=(n("72b9"),Object(l["a"])(v,h,g,!1,null,"5af8cdd3",null)),_=k.exports,x=n("2f62"),w=n("0e44");a["default"].use(x["a"]);var C=new x["a"].Store({state:{screenWidth:0,name:"",account:""},getters:{screenWidth:function(t){return t.screenWidth},name:function(t){return t.name},account:function(t){return t.account}},mutations:{getScreenWidth:function(t,e){return t.screenWidth=e,t.screenWidth},login:function(t,e){t.name=e[0],t.account=e[1]},logout:function(t,e){t.name="",t.account=""}},actions:{},modules:{},plugins:[Object(w["a"])()]});a["default"].use(p["a"]);var S=[{path:"/",name:"main",component:_,meta:{transition:"fade-in-up",login:!1,title:"首頁"}},{path:"/menu",name:"menu",component:function(){return Promise.all([n.e("menu~story"),n.e("menu")]).then(n.bind(null,"f127"))},meta:{transition:"fade-in-up",login:!1,title:"菜單"}},{path:"/story",name:"story",component:function(){return Promise.all([n.e("menu~story"),n.e("story")]).then(n.bind(null,"cd9e"))},meta:{transition:"fade-in-up",login:!1,title:"關於我們"}},{path:"/news",name:"news",component:function(){return n.e("news").then(n.bind(null,"1474"))},meta:{transition:"fade-in-up",login:!1,title:"最新消息"}},{path:"/location",name:"location",component:function(){return n.e("location").then(n.bind(null,"4900"))},meta:{transition:"fade-in-up",login:!1,title:"店家資訊"}},{path:"/member",name:"member",component:function(){return n.e("member").then(n.bind(null,"4903"))},meta:{transition:"fade-in-up",login:!1,title:"會員專區"}},{path:"/member_login",name:"member_login",component:function(){return n.e("member_login").then(n.bind(null,"a569"))},meta:{transition:"fade-in-up",login:!0,title:"會員服務"}},{path:"/back",name:"back",component:function(){return n.e("back").then(n.bind(null,"43df"))},meta:{transition:"fade-in-up",login:"control",title:"後臺管理"}}],P=new p["a"]({routes:S});P.beforeEach((function(t,e,n){"control"!==t.meta.login?t.meta.login&&0===C.state.name.length?(a["default"].swal("未登入","請先登入","error"),n("/member")):n():"user1234"===C.state.account?(a["default"].swal("歡迎","老大歡迎","success"),n()):(a["default"].swal("權限不足","使用者管理權限不足","error"),n("/member"))}));var j=P,W=n("5887"),O=n.n(W),E=n("fb9a"),T=n.n(E),M=n("f0eb"),A=n("bc3a"),$=n.n(A),N=n("a7fe"),z=n.n(N),I=n("5886"),L=n("ecee"),B=n("ad3d"),X=n("f2d1");n("f9e3"),n("2dd8"),n("df2d"),n("04f2"),n("4413");L["c"].add(X["a"],X["c"],X["b"]),a["default"].use(m["a"]),a["default"].use(f["a"]),a["default"].use(O.a),a["default"].use(T.a),a["default"].use(M["default"]),a["default"].use(z.a,$.a),a["default"].use(I["a"]),a["default"].component("font-awesome-icon",B["a"]),a["default"].config.productionTip=!1,new a["default"]({router:j,store:C,render:function(t){return t(d)}}).$mount("#app")},"72b9":function(t,e,n){"use strict";var a=n("1a11"),o=n.n(a);o.a},9930:function(t,e,n){},df2d:function(t,e,n){},f6c1:function(t,e,n){"use strict";var a=n("9930"),o=n.n(a);o.a}});
//# sourceMappingURL=app.3ff32c6f.js.map