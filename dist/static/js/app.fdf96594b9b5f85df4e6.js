webpackJsonp([0],[,,function(t,e,n){"use strict";var r=n(1),a=n(33),i=n(25),s=n.n(i);r.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Home",component:s.a}],mode:"history"})},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(1),a=n(35);r.a.use(a.a);var i=new a.a.Store({state:{drawer:{clipped:!1,model:!1,items:[{icon:"home",title:"Home",to:"/"}],miniVariant:!1,right:!0,rightDrawer:!1},footer:{fixed:!1},title:"WiCS - Ryerson",name:"WiCS",page:{}},mutations:{},actions:{},getters:{drawer:function(t){return t.drawer},footer:function(t){return t.footer},title:function(t){return t.title},name:function(t){return t.name}}})},function(t,e,n){function r(t){n(17)}var a=n(0)(n(7),n(30),r,null,null);t.exports=a.exports},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),a=n(5),i=n.n(a),s=n(4),o=n.n(s),c=n(2),u=n(3);r.a.use(i.a),r.a.config.productionTip=!1,new r.a({el:"#app",router:c.a,store:u.a,render:function(t){return t(o.a)}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(22),a=n.n(r),i=n(24),s=n.n(i),o=n(23),c=n.n(o);e.default={computed:{title:function(){return this.$store.getters.title},drawer:function(){return this.$store.getters.drawer}},components:{"wics-nav-drawer":a.a,"wics-toolbar":s.a,"wics-footer":c.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},props:{color:{type:String,default:"accent"},width:{type:String,default:"xs12"}},computed:{cardHeight:function(){return{"min-height":"xs12"===this.width?"auto":"500px","max-height":"xs12"===this.width?"auto":"500px"}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{items:[{src:"/static/images/events/cnc.png"},{src:"/static/images/events/img1.jpg"},{src:"/static/images/events/event2.jpg"}]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{drawer:function(){return this.$store.getters.drawer}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{name:function(){return this.$store.getters.name},footer:function(){return this.$store.getters.footer}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{drawer:function(){return this.$store.getters.drawer}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(20),a=n.n(r),i=n(21),s=n.n(i);e.default={components:{"wics-card":a.a,"wics-carousel":s.a}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){function r(t){n(16)}var a=n(0)(n(8),n(29),r,"data-v-5020a088",null);t.exports=a.exports},function(t,e,n){function r(t){n(19)}var a=n(0)(n(9),n(32),r,null,null);t.exports=a.exports},function(t,e,n){function r(t){n(14)}var a=n(0)(n(10),n(26),r,"data-v-00da2fad",null);t.exports=a.exports},function(t,e,n){var r=n(0)(n(11),n(27),null,null,null);t.exports=r.exports},function(t,e,n){function r(t){n(18)}var a=n(0)(n(12),n(31),r,"data-v-65c0fb25",null);t.exports=a.exports},function(t,e,n){function r(t){n(15)}var a=n(0)(n(13),n(28),r,"data-v-325040ba",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{persistent:"","mini-variant":t.drawer.miniVariant,clipped:t.drawer.clipped},model:{value:t.drawer.model,callback:function(e){t.drawer.model=e},expression:"drawer.model"}},[n("v-list",t._l(t.drawer.items,function(e,r){return n("v-list-tile",{key:r,attrs:{value:"true",to:e.to}},[n("v-list-tile-action",[n("v-icon",{attrs:{light:""},domProps:{innerHTML:t._s(e.icon)}})],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{fixed:t.footer.fixed}},[n("span",[t._v(t._s(t.name)+" 2017")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("v-card",[n("div",{staticClass:"landing card__media",attrs:{"data-v-325040ba":""}},[n("div",{staticClass:"card__media__background",staticStyle:{"background-image":"url(/static/images/events/laptop.jpg)","background-size":"cover","background-position":"center center","background-repeat":"no-repeat no-repeat"}}),t._v(" "),n("div",{staticClass:"card__media__content"},[n("v-container",{staticClass:"mt-3",staticStyle:{padding:"10px"}},[n("v-layout",{staticStyle:{margin:"0 auto","max-width":"900px"},attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"mb-3",staticStyle:{position:"relative","min-height":"250px"},attrs:{xs12:"",md6:""}},[n("wics-carousel",[n("div",{staticClass:"wics-logo"},[n("v-card-media",{staticClass:"center",attrs:{src:"/static/images/favicon.jpg",height:"40px",contain:"",absolute:""}})],1)])],1),t._v(" "),n("v-flex",{staticClass:"mb-3",attrs:{xs12:"",md6:""}},[n("wics-card",{attrs:{width:"md-6"}},[n("v-flex",{attrs:{xs12:""}},[n("h3",{staticClass:"black--text mt-3"},[t._v("RYERSON WOMEN IN COMPUTER SCIENCE")]),t._v(" "),n("blockquote",[t._v("\n                    WiCS is a student group run by undergraduate\n                    Computer Science students at Ryerson University.\n                  ")])]),t._v(" "),n("v-spacer",{slot:"actions"}),t._v(" "),n("v-btn",{attrs:{icon:""},slot:"actions"},[n("v-icon",[t._v("favorite")])],1),t._v(" "),n("v-btn",{attrs:{icon:""},slot:"actions"},[n("v-icon",[t._v("bookmark")])],1),t._v(" "),n("v-btn",{attrs:{icon:""},slot:"actions"},[n("v-icon",[t._v("share")])],1)],1)],1),t._v(" "),n("v-flex",{staticClass:"mb-3",attrs:{xs12:""}},[n("wics-card",{attrs:{color:"primary"}},[n("v-flex",{attrs:{xs12:""}},[n("h4",{staticClass:"white--text"},[t._v("Who are we?")]),t._v(" "),n("blockquote",{staticClass:"dark mb-2"},[t._v("\n                    Women in Computer Science (WiCS) is run by undergraduate students in the Computer Science program at Ryerson University. We want to provide a safe space and support for groups that are traditionally marginalized in the field of computer science.\n                  ")])]),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("h4",{staticClass:"white--text"},[t._v("Our goals")]),t._v(" "),n("blockquote",{staticClass:"dark"},[t._v("Our goal is to encourage current students to continue learning computer science with confidence; foster retention of women and marginalized individuals through mentoring. We want to bring students together allowing them to network and socialize through events and provide opportunities for students to network with women professionals in the industry. Recruiting is also a priority to get prospective students interested in going to the STEM field. ")])])],1)],1)],1)],1)],1)])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{class:t.color},[t._t("media"),t._v(" "),n("v-card-title",[n("v-container",{staticStyle:{margin:"0"},attrs:{fluid:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[t._t("default")],2)],1)],1),t._v(" "),n("v-card-actions",{class:t.color+"--darken-2"},[t._t("actions")],2)],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{light:""}},[n("wics-nav-drawer"),t._v(" "),n("wics-toolbar"),t._v(" "),n("main",[n("router-view")],1),t._v(" "),n("wics-footer")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{attrs:{fixed:""}},["permanent"!==t.drawer.type?n("v-toolbar-side-icon",{attrs:{light:""},on:{click:function(e){e.stopPropagation(),t.drawer.model=!t.drawer.model}}}):t._e(),t._v(" "),n("v-spacer")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{position:"absolute",top:"0",left:"4px",right:"4px",bottom:"0",height:"100%"}},[n("v-carousel",{staticStyle:{height:"100%"},attrs:{icon:"stop",cycle:"",interval:5e3,dark:""}},[t._t("default"),t._v(" "),t._l(t.items,function(t,e){return n("v-carousel-item",{key:e,attrs:{src:t.src}})})],2)],1)},staticRenderFns:[]}}],[6]);
//# sourceMappingURL=app.fdf96594b9b5f85df4e6.js.map