(this["webpackJsonpmain-app"]=this["webpackJsonpmain-app"]||[]).push([[0],{12:function(e,t,n){e.exports={app:"App_app__2uI1G",loader:"App_loader__21oJb",spin:"App_spin__1rzTB"}},16:function(e,t,n){e.exports={card:"Card_card__3RPtr"}},17:function(e,t,n){e.exports={scroll:"Scroll_scroll__1wbG9"}},20:function(e,t,n){e.exports=n(32)},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),c=n.n(o),i=n(6),s=(n(30),n(31),n(12)),l=n.n(s),u=n(16),d=n.n(u);var h=function(e){var t=e.id,n=e.name,r=e.email;return a.a.createElement("div",{className:"tc bg-light-green dib br4 pa3 ma2 grow bw2 shadow-5 ".concat(d.a.card)},a.a.createElement("img",{src:"https://robohash.org/robor".concat(t,"?100x100"),alt:"robot"}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,r)))};var p=function(e){var t=e.robots;return a.a.createElement("div",{className:"pa3"},t.map((function(e){return a.a.createElement(h,Object.assign({key:e.id},e))})))};var E=function(e){var t=e.setSearch,n=e.searchValue;return a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue ma2",type:"search",placeholder:"Search for robofriends",value:n,onChange:function(e){return t(e.target.value)}})},f=n(17),b=n.n(f);var v,g=function(e){return a.a.createElement("div",{style:{height:"75vh"},className:b.a.scroll},e.children)},m=n(4),S=n(5),O=n(8),_=n(7),R=function(e){Object(O.a)(n,e);var t=Object(_.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(S.a)(n,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=this.props.title;return a.a.createElement("div",null,a.a.createElement("h1",{className:"f1"},e))}}]),n}(r.Component),w=function(e){Object(O.a)(n,e);var t=Object(_.a)(n);function n(e){var r;return Object(m.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(S.a)(n,[{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oops, something went wrong"):this.props.children}}]),n}(r.Component);!function(e){e.CHANGE_SEARCH_FIELD="CHANGE_SEARCH_FIELD",e.REQUEST_ROBOTS_PENDING="REQUETS_ROBOTS_PENDIG",e.REQUEST_ROBOTS_SUCCESS="REQUEST_ROBOTS_SUCCESS",e.REQUEST_ROBOTS_FAILED="REQUEST_ROBOTS_FAILED"}(v||(v={}));var y=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(t){return e(function(e){return{type:v.CHANGE_SEARCH_FIELD,payload:e}}(t))},onRequestRobots:function(){return e((function(e){e({type:v.REQUEST_ROBOTS_PENDING}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:v.REQUEST_ROBOTS_SUCCESS,payload:t})})).catch((function(t){return e({type:v.REQUEST_ROBOTS_FAILED,payload:t})}))}))}}}))((function(e){var t=e.robots,n=e.isPending,o=e.searchField,c=e.onSearchChange,i=e.onRequestRobots;Object(r.useEffect)((function(){i()}),[i]);var s=t.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return a.a.createElement("div",{className:l.a.app},a.a.createElement(R,{title:"RoboFriends"}),a.a.createElement(E,{setSearch:c,searchValue:o}),a.a.createElement(g,null,a.a.createElement(w,null,n?a.a.createElement("div",{className:l.a.loader}):a.a.createElement(p,{robots:s}))))})),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var j=n(2),A=n(18),N=n(19),U=n(1),F={searchField:""},k={isPending:!1,robots:[],error:""},B=Object(j.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.CHANGE_SEARCH_FIELD:return Object(U.a)(Object(U.a)({},e),{},{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.REQUEST_ROBOTS_PENDING:return Object(U.a)(Object(U.a)({},e),{},{isPending:!0});case v.REQUEST_ROBOTS_SUCCESS:return Object(U.a)(Object(U.a)({},e),{},{robots:t.payload,isPending:!1});case v.REQUEST_ROBOTS_FAILED:return Object(U.a)(Object(U.a)({},e),{},{error:t.payload,isPending:!0});default:return e}}}),I=[N.a,A.logger],P=Object(j.d)(B,j.a.apply(void 0,I));c.a.render(a.a.createElement(i.a,{store:P},a.a.createElement(y,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/RoboFriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/RoboFriends","/service-worker.js");C?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):T(t,e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.5cb3eb63.chunk.js.map