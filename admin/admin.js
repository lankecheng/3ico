webpackJsonp([7],{198:function(t,i,a){a(354);var e=a(195)(a(358),a(343),"data-v-710ad406",null);t.exports=e.exports},343:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("div",{staticClass:"hd"},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleAdd}},[t._v("新增")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.loading,expression:"loading",modifiers:{body:!0}}],attrs:{data:t.admins,stripe:"",border:""}},[a("el-table-column",{attrs:{prop:"nick",label:"昵称",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"pwd",label:"密码",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"create_time",label:"创建日期"}}),t._v(" "),a("el-table-column",{attrs:{width:"180",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(i){return[a("el-button-group",[a("el-button",{attrs:{size:"small"},on:{click:function(a){t.handleEdit(i)}}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(a){t.handleDel(i)}}},[t._v("删除")])],1)]}}])})],1),t._v(" "),a("el-dialog",{attrs:{size:"tiny",title:"管理员设置",visible:t.dialog.show,"modal-append-to-body":!1},on:{"update:visible":function(i){t.dialog.show=i}}},[a("el-form",{ref:"form",attrs:{model:t.dialog.data,rules:t.dialog.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"用户名",prop:"nick"}},[t.dialog.isEdit?a("span",[t._v(t._s(t.dialog.data.nick))]):a("el-input",{model:{value:t.dialog.data.nick,callback:function(i){t.dialog.data.nick=i},expression:"dialog.data.nick"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"密码",prop:"pwd"}},[a("el-input",{attrs:{type:"password"},model:{value:t.dialog.data.pwd,callback:function(i){t.dialog.data.pwd=i},expression:"dialog.data.pwd"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"确认密码",prop:"checkPwd"}},[a("el-input",{attrs:{type:"password"},model:{value:t.dialog.data.checkPwd,callback:function(i){t.dialog.data.checkPwd=i},expression:"dialog.data.checkPwd"}})],1)],1),t._v(" "),a("div",{slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("确认")]),t._v(" "),a("el-button",{on:{click:function(i){t.dialog.show=!1}}},[t._v("取消")])],1)],1)],1)},staticRenderFns:[]}},354:function(t,i){},358:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=a(24),n=a.n(e),l=a(12);i.default={title:"项目管理员",data:function(){var t=this;return{loading:!0,dialog:{show:!1,isEdit:!1,data:{nick:"",pwd:"",checkPwd:""},rules:{nick:[{required:!0,message:"请输入昵称",trigger:"blur"},{min:4,max:20,message:"长度在 4 到 20 个字符",trigger:"blur"},{validator:function(t,i,a){i.match(/^[\u4E00-\u9FA5a-z0-9]+$/)?a():a(new Error("昵称由小写英文字母、中文、数字组成!"))},trigger:"blur"}],pwd:[{required:!0,message:"请输入密码",trigger:"blur"},{validator:function(i,a,e){a.match(/^[A-Za-z0-9~!@#$%^&*_-]+$/)?""!==t.dialog.data.checkPwd&&t.$refs.form.validateField("checkPwd"):e(new Error("密码由英文字母、数字、符号组成!")),e()},trigger:"blur"},{min:6,max:16,message:"长度在 6 到 16 个字符",trigger:"blur"}],checkPwd:[{required:!0,message:"请再次输入密码",trigger:"blur"},{validator:function(i,a,e){a!==t.dialog.data.pwd?e(new Error("两次输入密码不一致!")):e()},trigger:"blur"},{min:6,max:16,message:"长度在 6 到 16 个字符",trigger:"blur"}]}}}},computed:n()({},a.i(l.mapState)({admins:"admins"})),methods:n()({},a.i(l.mapActions)({getAdmins:"getAdmins",createAdmin:"createAdmin"}),{handleDialog:function(){this.$refs.form&&this.$refs.form.resetFields(),this.dialog.show=!0},handleAdd:function(){this.dialog.isEdit=!1,this.handleDialog(),this.dialog.data.nick=""},handleEdit:function(t){this.dialog.isEdit=!0,this.handleDialog(),this.dialog.data.nick=t.row.nick},handleDel:function(t){console.log(t),this.$confirm("确认删除?",{type:"warning"}).then(function(){})},handleSubmit:function(){var t=this,i=this.dialog.data;this.$refs.form.validate(function(a){a&&t.createAdmin({nick:i.nick,pwd:i.pwd}).then(function(i){t.$message("新增成功"),t.dialog.show=!1,t.initList()}).catch(function(){t.dialog.show=!1})})},initList:function(){var t=this;this.loading=!0,this.getAdmins().then(function(){t.loading=!1}).catch(function(){t.loading=!1})}}),created:function(){this.initList()}}}});