(function(t){function a(a){for(var r,o,i=a[0],c=a[1],l=a[2],u=0,p=[];u<i.length;u++)o=i[u],n[o]&&p.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(a);while(p.length)p.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],r=!0,o=1;o<e.length;o++){var c=e[o];0!==n[c]&&(r=!1)}r&&(s.splice(a--,1),t=i(i.s=e[0]))}return t}var r={},n={app:0},s=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b8cabc56"}[t]+".js"}function i(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.e=function(t){var a=[],e=n[t];if(0!==e)if(e)a.push(e[2]);else{var r=new Promise(function(a,r){e=n[t]=[a,r]});a.push(e[2]=r);var s,c=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(t),s=function(a){l.onerror=l.onload=null,clearTimeout(u);var e=n[t];if(0!==e){if(e){var r=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src,o=new Error("Loading chunk "+t+" failed.\n("+r+": "+s+")");o.type=r,o.request=s,e[1](o)}n[t]=void 0}};var u=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,c.appendChild(l)}return Promise.all(a)},i.m=t,i.c=r,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)i.d(e,r,function(a){return t[a]}.bind(null,r));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=a,c=c.slice();for(var u=0;u<c.length;u++)a(c[u]);var d=l;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var r=e("c21b"),n=e.n(r);n.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("097d");var r=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[t._m(0),e("div",{staticClass:"container"},[e("router-view")],1)])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Navbar")]),e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})]),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item active"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Home "),e("span",{staticClass:"sr-only"},[t._v("(current)")])])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Link")])]),e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Dropdown\n          ")]),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),e("div",{staticClass:"dropdown-divider"}),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link disabled",attrs:{href:"#"}},[t._v("Disabled")])])]),e("form",{staticClass:"form-inline my-2 my-lg-0"},[e("input",{staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"}}),e("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"}},[t._v("Search")])])])])}],o=(e("034f"),e("2877")),i={},c=Object(o["a"])(i,n,s,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,u=e("8c4f"),d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("div",{staticClass:"row"},t._l(t.products,function(a){return e("div",{staticClass:"col-md-4"},[e("h1",[t._v(t._s(a.name))]),e("h3",[t._v(t._s(a.formatted.price))]),e("div",{staticClass:"card",staticStyle:{width:"18rem"}},[e("img",{staticClass:"card-img-top",attrs:{src:a.default_image_url,alt:a.name}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(a.name))]),e("p",{staticClass:"card-text"},[t._v(t._s(a.description))]),e("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Go somewhere")])])])])}))])},p=[],f=e("bc3a"),v={data:function(){return{products:[{formatted:{},images:[{url:"",alt:""}]}]}},created:function(){var t=this;f.get("/api/products").then(function(a){console.log(a.data),t.products=a.data})},methods:{},computed:{}},b=v,m=(e("cccb"),Object(o["a"])(b,d,p,!1,null,null,null));m.options.__file="Home.vue";var h=m.exports;r["a"].use(u["a"]);var g=new u["a"]({routes:[{path:"/",name:"home",component:h},{path:"/about",name:"about",component:function(){return e.e("about").then(e.bind(null,"f820"))}}]}),_=e("bc3a"),C=e.n(_);C.a.defaults.baseURL="https://dreadful-pumpkin-66761.herokuapp.com",r["a"].config.productionTip=!1,new r["a"]({router:g,render:function(t){return t(l)}}).$mount("#app")},"8f59":function(t,a,e){},c21b:function(t,a,e){},cccb:function(t,a,e){"use strict";var r=e("8f59"),n=e.n(r);n.a}});
//# sourceMappingURL=app.374e48b7.js.map