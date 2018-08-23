webpackJsonp([4],{384:function(e,r,t){"use strict";function s(e){n||t(406)}Object.defineProperty(r,"__esModule",{value:!0});var a=t(391),o=t(407),n=!1,i=t(141),u=s,l=i(a.a,o.a,!1,u,null,null);l.options.__file="src/views/admin/login.vue",r.default=l.exports},391:function(e,r,t){"use strict";var s=t(95),a=t.n(s),o=t(142);r.a={data:function(){return{loading:!1,form:{username:"",password:""},rules:{username:[{required:!0,message:"账号不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}]}}},methods:{handleSubmit:function(){var e=this;this.$refs.loginForm.validate(function(r){if(r){e.loading=!0;var t=e.form,s=t.username,n=t.password;o.a.ajax.post("/v1/user/login",{userAccount:s,password:n}).then(function(r){var t=r.data,s=t.errorCode,n=t.data;0!==s?e.$Message.error("登录失败"):(a.a.set("authorization",n.authorization,{expires:1}),a.a.set("userId",n.userId,{expires:1}),a.a.set("userName",n.userAccount,{expires:1}),o.a.ajax.defaults.headers.common.Authorization=n.authorization,e.$router.push({path:"/admin/news"})),e.loading=!1}).catch(function(r){e.$Message.error("登录失败"),e.loading=!1})}})}},created:function(){a.a.remove("userInfo")}}},406:function(e,r){},407:function(e,r,t){"use strict";var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login",on:{keydown:function(r){return"button"in r||!e._k(r.keyCode,"enter",13,r.key,"Enter")?e.handleSubmit(r):null}}},[t("div",{staticClass:"login-con"},[t("Card",{attrs:{bordered:!1}},[t("p",{attrs:{slot:"title"},slot:"title"},[t("Icon",{attrs:{type:"log-in"}}),e._v("\n        基金后台管理\n      ")],1),e._v(" "),t("div",{staticClass:"form-con"},[t("Form",{ref:"loginForm",attrs:{model:e.form,rules:e.rules}},[t("FormItem",{attrs:{prop:"username"}},[t("Input",{attrs:{placeholder:"请输入用户名"},model:{value:e.form.username,callback:function(r){e.$set(e.form,"username",r)},expression:"form.username"}},[t("span",{attrs:{slot:"prepend"},slot:"prepend"},[t("Icon",{attrs:{size:16,type:"person"}})],1)])],1),e._v(" "),t("FormItem",{attrs:{prop:"password"}},[t("Input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}},[t("span",{attrs:{slot:"prepend"},slot:"prepend"},[t("Icon",{attrs:{size:14,type:"locked"}})],1)])],1),e._v(" "),t("FormItem",[t("Button",{attrs:{loading:e.loading,type:"primary",long:""},on:{click:e.handleSubmit}},[e._v("登录")])],1)],1),e._v(" "),t("p",{staticClass:"login-tip"},[e._v("输入用户名、密码登录")])],1)])],1)])},a=[];s._withStripped=!0;var o={render:s,staticRenderFns:a};r.a=o}});