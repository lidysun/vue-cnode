(function(t){function a(a){for(var s,r,o=a[0],l=a[1],c=a[2],p=0,_=[];p<o.length;p++)r=o[p],n[r]&&_.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(a);while(_.length)_.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],s=!0,o=1;o<e.length;o++){var l=e[o];0!==n[l]&&(s=!1)}s&&(i.splice(a--,1),t=r(r.s=e[0]))}return t}var s={},n={app:0},i=[];function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)r.d(e,s,function(a){return t[a]}.bind(null,s));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var u=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"18f6":function(t,a,e){"use strict";var s=e("389c"),n=e.n(s);n.a},"389c":function(t,a,e){},"4fb1":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);var s=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("top-header"),e("div",{staticClass:"main",attrs:{id:"main"}},[e("router-view",{attrs:{name:"sidebar"}}),e("router-view",{attrs:{name:"main"}})],1)],1)},i=[],r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header"},[s("router-link",{staticClass:"logo",attrs:{to:{name:"root"}}},[s("img",{attrs:{src:e("d686"),alt:"vue cnode"}})]),s("ul",[s("li",[s("router-link",{staticClass:"logo",attrs:{to:{name:"root"}}},[t._v("首页")])],1),t._m(0),t._m(1),t._m(2),t._m(3),s("li",[s("router-link",{attrs:{to:{name:"login"}}},[t._v("登录")])],1)])],1)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{attrs:{href:"#"}},[t._v("新手入门")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{attrs:{href:"#"}},[t._v("API")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{attrs:{href:"#"}},[t._v("关于")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{attrs:{href:"#"}},[t._v("注册")])])}],l={name:"top-header"},c=l,u=(e("18f6"),e("2877")),p=Object(u["a"])(c,r,o,!1,null,"1188ebea",null),_=p.exports,f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.isLoading?e("div",{staticClass:"loading"}):t._e(),e("div",{staticClass:"list"},[e("ul",[t._m(0),t._l(t.posts,function(a){return e("li",[e("router-link",{attrs:{to:{name:"user_info",params:{name:a.author.loginname}}}},[e("img",{attrs:{src:a.author.avatar_url,alt:""}})]),e("span",{staticClass:"text"},[e("span",{staticClass:"reply_count"},[t._v(t._s(a.reply_count)+"/")]),e("span",{staticClass:"visit_count"},[t._v(t._s(a.visit_count))])]),e("span",{class:[{top:!0===a.top},{good:!0===a.good},{tab:!0!==a.top&&!0!==a.good}]},[t._v("\n                    "+t._s(t._f("tabFormatter")(a))+"\n                ")]),e("router-link",{staticClass:"title",attrs:{to:{name:"post_count",params:{id:a.id,name:a.author.loginname}}}},[t._v(t._s(a.title))]),e("span",{staticClass:"last-time"},[t._v(t._s(t._f("forTimeDate")(a.last_reply_at)))])],1)}),e("li",{staticClass:"button"},[e("Pagination",{on:{handleList:t.renderList}})],1)],2)])])},v=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav"},[e("span",{staticClass:"active"},[t._v("全部")]),e("span",[t._v("精华")]),e("span",[t._v("分享")]),e("span",[t._v("问答")]),e("span",[t._v("招聘")]),e("span",[t._v("客户端测试")])])}],d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pagination"},[e("button",{staticClass:"btn-direction",on:{click:t.changeBtn}},[t._v("<<")]),t._l(t.pagebtns,function(a){return e("button",{class:[{currentPage:a===t.currentPage},"pagebtn"],on:{click:function(e){t.changeBtn(a)}}},[t._v(t._s(a))])}),e("button",{staticClass:"btn-direction",on:{click:t.changeBtn}},[t._v(">>")])],2)},m=[],g={name:"Pagination",data(){return{pagebtns:[1,2,3,4,5,"..."],currentPage:1}},methods:{changeBtn(t){if("number"!==typeof t&&"string"!==typeof t){var a=t.currentTarget.innerHTML;switch(a){case"&lt;&lt;":this.currentPage--;break;case"&gt;&gt;":this.currentPage++;break}}else{if("string"===typeof t)return!1;this.currentPage=t}this.currentPage===this.pagebtns[1]&&this.pagebtns.splice(0,1,1),this.currentPage===this.pagebtns.length-1&&this.pagebtns.splice(0,1,"..."),this.currentPage<2&&(console.log(this.pagebtns),this.currentPage=1),this.currentPage>this.pagebtns.length-2&&(this.currentPage=this.pagebtns.length-1),this.$emit("handleList",this.currentPage)}}},h=g,b=(e("91a4"),Object(u["a"])(h,d,m,!1,null,"01ea41f2",null)),C=b.exports,k={name:"PostList",data(){return{isLoading:!0,posts:[],postPage:1}},components:{Pagination:C},methods:{getData(){this.$axios.get("https://cnodejs.org/api/v1/topics",{params:{page:this.postPage,limit:20}}).then(t=>{this.posts=t.data.data,this.isLoading=!1},t=>{console.log(t)})},renderList(t){this.postPage=t,this.getData()}},beforeMount(){this.getData()}},P=k,$=(e("f1cb"),Object(u["a"])(P,f,v,!1,null,"71542b31",null)),y=$.exports,w={name:"App",components:{topHeader:_,PostList:y}},T=w,x=(e("5c0b"),Object(u["a"])(T,n,i,!1,null,null,null)),j=x.exports,L=e("8c4f"),D=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.isLoading?e("div",{staticClass:"loading"}):e("div",{staticClass:"post_content",attrs:{id:"content"}},[e("div",{staticClass:"panel"},[e("div",{staticClass:"header"},[e("div",{staticClass:"title"},[t._v(t._s(t.post.title))]),e("ul",[e("li",[t._v("• 发布于"+t._s(t._f("forTimeDate")(t.post.create_at))+" ")]),e("li",[t._v("• 作者\n                        "),e("router-link",{attrs:{to:{name:"user_info",params:{name:t.post.author.loginname}}}},[t._v("\n                            "+t._s(t.post.author.loginname)+" \n                        ")])],1),e("li",[t._v("• "+t._s(t.post.visit_count)+"次浏览 ")]),e("li",[t._v("• 来自 "+t._s(t._f("tabFormatter")(t.post)))])])]),e("div",{staticClass:"content"},[e("div",{domProps:{innerHTML:t._s(t.post.content)}})]),t.post.replies.length>0?e("div",{staticClass:"reply-wrapper"},[e("div",{staticClass:"num"},[t._v(t._s(t.post.replies.length)+" 回复")]),t._l(t.post.replies,function(a,s){return e("div",{staticClass:"reply"},[e("div",{staticClass:"user-wrapper"},[e("router-link",{attrs:{to:{name:"user_info",params:{name:"reply.author.loginname"}}}},[e("img",{attrs:{src:a.author.avatar_url,alt:""}})]),e("span",{staticClass:"name"},[t._v(t._s(a.author.loginname))]),e("span",{staticClass:"time"},[t._v(t._s(s+1)+"楼• "+t._s(t._f("forTimeDate")(a.create_at)))])],1),e("p",{domProps:{innerHTML:t._s(a.content)}})])})],2):t._e()])])])},O=[],E={name:"Articles",data(){return{isLoading:!0,post:{}}},methods:{getData(){this.$axios.get("https://cnodejs.org/api/v1/topic/"+this.$route.params.id).then(t=>{this.post=t.data.data,this.isLoading=!1},t=>{console.log(t)})}},beforeMount(){this.getData()},watch:{$route(t,a){this.getData()}}},M=E,I=(e("720e"),Object(u["a"])(M,D,O,!1,null,null,null)),S=I.exports,B=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"userinfo"},[t.isLoading?e("div",{staticClass:"loading"}):e("div",{staticClass:"userinfo-main"},[e("div",{staticClass:"user-wrapper"},[e("router-link",{attrs:{to:{name:"root"}}},[e("p",{staticClass:"to-root"},[t._v("主页 /")])]),e("div",[e("img",{attrs:{src:t.userinfo.avatar_url,alt:""}}),e("span",[t._v("  "+t._s(t.userinfo.loginname))]),e("p",{staticClass:"num"},[t._v(t._s(t.userinfo.scrore))]),e("p",{staticClass:"time"},[t._v("注册时间 "+t._s(t._f("forTimeDate")(t.userinfo.create_at)))])])],1),e("p",{staticClass:"bar"},[t._v("最近创建的话题")]),e("div",{staticClass:"topics"},[e("ul",t._l(t.userinfo.recent_topics,function(a,s){return s<=4?e("li",[e("img",{attrs:{src:a.author.avatar_url,alt:""}}),e("router-link",{attrs:{to:{name:"post_count",params:{id:a.id}}}},[e("span",{staticClass:"title"},[t._v(t._s(a.title))])]),e("span",{staticClass:"last-time"},[t._v(t._s(t._f("forTimeDate")(a.last_reply_at)))])],1):t._e()}))]),e("p",{staticClass:"bar"},[t._v("最近参与的话题")]),e("div",{staticClass:"replies"},[e("ul",t._l(t.userinfo.recent_replies,function(a,s){return e("li",[e("router-link",{attrs:{to:{name:"user_info",params:{name:a.author.loginname}}}},[e("img",{attrs:{src:a.author.avatar_url,alt:""}})]),e("router-link",{attrs:{to:{name:"post_count",params:{id:a.id}}}},[e("span",{staticClass:"title"},[t._v(t._s(a.title))])]),e("span",{staticClass:"last-time"},[t._v(t._s(t._f("forTimeDate")(a.last_reply_at)))])],1)}))])])])},H=[],A={name:"UserInfo",data(){return{isLoading:!0,userinfo:{}}},methods:{getData(){this.$axios.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`).then(t=>{this.userinfo=t.data.data,this.isLoading=!1},t=>{console.log(t)})}},beforeMount(){this.getData()},watch:{$route(t,a){this.getData()}}},F=A,J=(e("6c52"),Object(u["a"])(F,B,H,!1,null,"26ffcc37",null)),N=J.exports,U=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"userinfo",attrs:{id:"sidebar"}},[t.isLoading?e("div"):t._e(),e("div",{staticClass:"user-wrapper"},[e("div",{staticClass:"bar"},[t._v("个人信息")]),e("div",{staticClass:"user"},[e("router-link",{attrs:{to:{name:"user_info",params:{name:t.userinfo.loginname}}}},[e("img",{attrs:{src:t.userinfo.avatar_url,alt:""}})]),e("span",{staticClass:"name"},[t._v(t._s(t.userinfo.loginname))]),e("p",[t._v("积分"+t._s(t.userinfo.score))])],1)]),e("div",{staticClass:"topics"},[e("div",{staticClass:"bar"},[t._v("作者最近主题")]),e("ul",t._l(t.userinfo.recent_topics,function(a,s){return e("li",[e("router-link",{attrs:{to:{name:"post_count",params:{id:a.id,name:a.author.loginname}}}},[t._v("\n                    "+t._s(a.title)+"\n                ")])],1)}))]),e("div",{staticClass:"replies"},[e("div",{staticClass:"bar"},[t._v("作者最近回复")]),e("ul",t._l(t.userinfo.recent_replies,function(a){return e("li",[e("router-link",{attrs:{to:{name:"post_count",params:{id:a.id,name:a.author.loginname}}}},[t._v("\n                    "+t._s(a.title)+"\n                ")])],1)}))])])},q=[],z={name:"Sidebar",data(){return{userinfo:{},isLoading:!0}},methods:{getData(){this.$axios.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`).then(t=>{this.userinfo=t.data.data,this.isLoading=!1},t=>{console.log(t)})}},beforeMount(){this.getData()}},G=z,K=(e("9ca9"),Object(u["a"])(G,U,q,!1,null,"1d3770bd",null)),Q=K.exports,R=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"login"},[e("div",{staticClass:"nav"},[e("ul",{staticClass:"nav_list"},[e("li",[e("router-link",{attrs:{to:{name:"root"}}},[t._v("\n                    主页\n                ")])],1),e("li",[t._v(" / ")]),e("li",[t._v("登录")])])]),e("div",{staticClass:"main_page"},[e("div",{staticClass:"input_wrapper"},[e("label",{staticClass:"input_main",attrs:{for:""}},[t._v("\n                accessToken "),e("br"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accessToken,expression:"accessToken"}],attrs:{type:"password"},domProps:{value:t.accessToken},on:{input:function(a){a.target.composing||(t.accessToken=a.target.value)}}})])]),e("div",{staticClass:"button_wrapper"},[e("button",{on:{click:t.login}},[t._v("登录")])])])])},V=[],W={name:"login",data(){return{accessToken:""}},methods:{login(){var t=this.$axios.post("https://cnodejs.org/api/v1/accesstoken",{accesstoken:this.accessToken}).then(t=>{this.$router.push({name:"root"}).catch(()=>{alert("accessToken错误！")})});console.log(t)}}},X=W,Y=(e("fd34"),Object(u["a"])(X,R,V,!1,null,"8b6f1e7e",null)),Z=Y.exports;s["a"].use(L["a"]);var tt=new L["a"]({routes:[{name:"root",path:"/",components:{main:y}},{name:"post_count",path:"/topic/:id&author=:name",components:{main:S,sidebar:Q}},{name:"user_info",path:"/userinfo/:name",components:{main:N}},{name:"login",path:"/login",components:{main:Z}}]}),at=e("bc3a"),et=e.n(at);s["a"].prototype.$axios=et.a,s["a"].config.productionTip=!1,s["a"].filter("forTimeDate",t=>{if(!t)return"";let a=new Date(t).getTime(),e=(new Date).getTime()-a;return e<0?"":e/1e3<30?"刚刚":e/1e3<60?parseInt(e/1e3)+"秒前":e/6e4<60?parseInt(e/6e4)+"分钟前":e/36e5<24?parseInt(e/36e5)+"小时前":e/864e5<31?parseInt(e/864e5)+"天前":e/2592e6<12?parseInt(e/2592e6)+"月前":parseInt(e/31104e6)+"年前"}),s["a"].filter("tabFormatter",function(t){return 1==t.top?"置顶":1==t.goog?"精华":"ask"==t.tab?"问答":"share"==t.tab?"分享":"招聘"}),new s["a"]({router:tt,render:t=>t(j)}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var s=e("b19e"),n=e.n(s);n.a},"6c52":function(t,a,e){"use strict";var s=e("ed4a"),n=e.n(s);n.a},"720e":function(t,a,e){"use strict";var s=e("7885"),n=e.n(s);n.a},7885:function(t,a,e){},"91a4":function(t,a,e){"use strict";var s=e("da8c"),n=e.n(s);n.a},"9ca9":function(t,a,e){"use strict";var s=e("4fb1"),n=e.n(s);n.a},aa9f:function(t,a,e){},b19e:function(t,a,e){},d686:function(t,a,e){t.exports=e.p+"assets/img/cnodejs_light.86f6a7c2.svg"},da8c:function(t,a,e){},ed4a:function(t,a,e){},f02a:function(t,a,e){},f1cb:function(t,a,e){"use strict";var s=e("f02a"),n=e.n(s);n.a},fd34:function(t,a,e){"use strict";var s=e("aa9f"),n=e.n(s);n.a}});
//# sourceMappingURL=app.ed19e362.js.map