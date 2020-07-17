(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["member_login"],{1508:function(t,e,a){},"5db4":function(t,e,a){"use strict";var l=a("1508"),s=a.n(l);s.a},a569:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"member_login"}},[a("h1",{staticClass:"text-center mt-4 mb-4"},[t._v("會員專區")]),a("form",[a("fieldset",{staticClass:"p-2 fieldset m-2 m-lg-5"},[a("legend",{staticClass:"legend"},[t._v("訂位")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col d-flex flex-wrap justify-content-center"},[a("div",{staticClass:"col-12 col-lg-6 d-flex flex-wrap justify-content-center mt-3 align-items-center"},[a("label",{staticClass:"col-12 col-lg-4 text",attrs:{for:"name"}},[t._v("姓名：")]),a("b-form-input",{staticClass:"col-12 col-lg-8 p-lg-2",attrs:{id:"name",state:t.nameState,placeholder:"請輸入姓名",trim:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("b-form-text",{staticClass:"col-6"}),a("b-form-invalid-feedback",{staticClass:"col-6"},[t._v("未輸入姓名")])],1),a("div",{staticClass:"col-12 col-lg-6 d-flex flex-wrap justify-content-center mt-3 align-items-center"},[a("label",{staticClass:"col-12 col-lg-4 text",attrs:{for:"phone"}},[t._v("電話：")]),a("b-form-input",{staticClass:"col-12 col-lg-8 p-lg-2",attrs:{id:"phone",state:t.phoneState,type:"number",placeholder:"請輸入至少8個字",trim:""},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),a("b-form-text",{staticClass:"col-6"}),a("b-form-invalid-feedback",{staticClass:"col-6"},[t._v("電話格式不符")])],1)])]),a("div",{staticClass:"row "},[a("div",{staticClass:"col-12 col-lg-6 d-flex align-items-center flex-wrap"},[t._m(0),a("div",{staticClass:"col-12 col-lg-8 text mt-2"},[a("v-date-picker",{model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)]),a("div",{staticClass:"col-12 col-lg-6 d-flex align-items-center flex-wrap"},[t._m(1),a("div",{staticClass:"col-12 col-lg-8 pl-4"},[a("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown-1",text:t.peoplecount}},[a("b-dropdown-item",{on:{click:function(e){return t.changepeoplecount("1")}}},[t._v("1人")]),a("b-dropdown-item",{on:{click:function(e){return t.changepeoplecount("2")}}},[t._v("2人")]),a("b-dropdown-item",{on:{click:function(e){return t.changepeoplecount("3")}}},[t._v("3人")]),a("b-dropdown-item",{on:{click:function(e){return t.changepeoplecount("4")}}},[t._v("4人")]),a("b-dropdown-item",{on:{click:function(e){return t.changepeoplecount("5")}}},[t._v("5人")]),a("b-dropdown-item",{on:{click:function(e){return t.changepeoplecount("6")}}},[t._v("6人")]),a("b-dropdown-item",{on:{click:function(e){return t.changepeoplecount("7")}}},[t._v("7人")]),a("b-dropdown-item",{on:{click:function(e){return t.changepeoplecount("8")}}},[t._v("8人")]),a("b-dropdown-item",{on:{click:function(e){return t.changepeoplecount("9")}}},[t._v("8人以上")])],1)],1)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-6 d-flex align-items-center flex-wrap"},[t._m(2),a("div",{staticClass:"col-12 col-lg-8 text mt-2"},[a("b-form-timepicker",{attrs:{locale:"tw"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}}),a("div",{staticClass:"mt-2"},[t._v(t._s(t.time))])],1)]),a("div",{staticClass:"col-12 col-lg-6 d-flex align-items-center flex-wrap"},[t._m(3),a("div",{staticClass:"col-12 col-lg-8 text mt-2"},[a("b-form-textarea",{attrs:{id:"textarea",placeholder:"請輸入備註...",rows:"3","max-rows":"6"},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1)])]),t._m(4)])]),a("form",[a("fieldset",{staticClass:"p-2 fieldset m-2 m-lg-5"},[a("legend",{staticClass:"legend"},[t._v("查詢")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 pl-5 pt-4 "},[a("p",{staticClass:"text"},[t._v("姓名："+t._s(t.name))]),a("p",{staticClass:"text"},[t._v("電話："+t._s(t.phone))]),a("p",{staticClass:"text"},[t._v("人數："+t._s(t.peoplecount))]),a("p",{staticClass:"text"},[t._v("日期："+t._s(t.date))]),a("p",{staticClass:"text"},[t._v("時間："+t._s(t.time))]),a("p",{staticClass:"text"},[t._v("備註："+t._s(t.textarea))])])]),a("div",{staticClass:"row mt-3 justify-content-center align-items-center flex-nowrap"},[a("div",{staticClass:"col-lg-2 text-center"},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"btn btn-danger"},[t._v("取消訂位")]),a("b-modal",{attrs:{id:"modal-1",title:"取消訂位"}},[a("p",{staticClass:"my-4"},[t._v("確定要取消訂位?")])])],1)])])]),t._m(5)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 col-lg-4 mt-2"},[a("p",{staticClass:"text col"},[t._v("日期：")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 col-lg-4 mt-3 p-lg-0"},[a("p",{staticClass:"text col"},[t._v("人數：")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 col-lg-4 mt-2"},[a("p",{staticClass:"text col"},[t._v("時間：")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 col-lg-4 mt-2"},[a("p",{staticClass:"text"},[t._v("備註：")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mt-5 justify-content-center align-items-center flex-nowrap"},[a("div",{staticClass:"col-lg-2 text-right"},[a("button",{staticClass:"btn btn-primary"},[t._v("確認")])]),a("div",{staticClass:"col-lg-2 text-left"},[a("button",{staticClass:"btn btn-danger"},[t._v("重寫")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("fieldset",{staticClass:"p-2 fieldset m-2 m-lg-5"},[a("legend",{staticClass:"legend"},[t._v("徵才")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col p-5"},[a("h1",[t._v("徵才資訊")]),a("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur architecto optio facere natus eveniet repellat magnam autem soluta non cumque sint placeat assumenda minima, dolorem exercitationem voluptas amet rerum atque.")])])])])}],c=(a("b0c0"),{data:function(){return{date:new Date,name:"",phone:"",peoplecount:"",time:"",textarea:""}},methods:{changepeoplecount:function(t){this.peoplecount=t,9===t&&(this.peoplecount="8人以上")}},computed:{nameState:function(){return this.name.length>0},phoneState:function(){return this.phone.length>0}}}),n=c,i=(a("5db4"),a("2877")),o=Object(i["a"])(n,l,s,!1,null,null,null);e["default"]=o.exports},b0c0:function(t,e,a){var l=a("83ab"),s=a("9bf2").f,c=Function.prototype,n=c.toString,i=/^\s*function ([^ (]*)/,o="name";l&&!(o in c)&&s(c,o,{configurable:!0,get:function(){try{return n.call(this).match(i)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=member_login.88881858.js.map