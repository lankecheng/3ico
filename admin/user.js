webpackJsonp([0],{202:function(e,t,a){a(332);var n=a(193)(a(343),a(325),"data-v-463cb364",null);e.exports=n.exports},325:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"hd"},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"昵称"}},[a("el-input",{model:{value:e.query.nickname,callback:function(t){e.query.nickname=t},expression:"query.nickname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机"}},[a("el-input",{model:{value:e.query.phone,callback:function(t){e.query.phone=t},expression:"query.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:e.query.name,callback:function(t){e.query.name=t},expression:"query.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"身份证"}},[a("el-input",{model:{value:e.query.id,callback:function(t){e.query.id=t},expression:"query.id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"余额"}},[a("el-input",{staticStyle:{width:"60px"},model:{value:e.query.id,callback:function(t){e.query.id=t},expression:"query.id"}}),e._v("\n              -\n              "),a("el-input",{staticStyle:{width:"60px"},model:{value:e.query.id,callback:function(t){e.query.id=t},expression:"query.id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"投资"}},[a("el-input",{staticStyle:{width:"60px"},model:{value:e.query.id,callback:function(t){e.query.id=t},expression:"query.id"}}),e._v("\n              -\n              "),a("el-input",{staticStyle:{width:"60px"},model:{value:e.query.id,callback:function(t){e.query.id=t},expression:"query.id"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"}},[e._v("搜索")])],1)],1)],1),e._v(" "),a("el-table",{attrs:{data:e.data,stripe:"",border:""}},[a("el-table-column",{attrs:{prop:"nickname",label:"昵称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"手机"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"身份证"}}),e._v(" "),a("el-table-column",{attrs:{prop:"yue",label:"余额"}}),e._v(" "),a("el-table-column",{attrs:{prop:"tz",label:"投资"}}),e._v(" "),a("el-table-column",{attrs:{width:"180",prop:"created_at",label:"注册日期"}}),e._v(" "),a("el-table-column",{attrs:{width:"100",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("router-link",{attrs:{to:"/asset"}},[e._v("资产流水")])]}}])})],1),e._v(" "),a("el-pagination",{staticClass:"page",attrs:{"current-page":1,"page-sizes":[10,20,30,50],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]}},332:function(e,t){},343:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(195),l=a.n(n),r={page:1,pageSize:10,nickname:"",phone:"",name:"",id:""};t.default={title:"用户列表",data:function(){return{query:l()({},r,this.$route.query)}},computed:{data:function(){return[{nickname:"nickname1",phone:"11111111111",name:"张三",id:"333333333333333333",yue:"22.2",tz:"11.1",created_at:"2017-12-12 12:00"},{nickname:"nickname1",phone:"11111111111",name:"张三",id:"333333333333333333",yue:"22.2",tz:"11.1",created_at:"2017-12-12 12:00"},{nickname:"nickname1",phone:"11111111111",name:"张三",id:"333333333333333333",yue:"22.2",tz:"11.1",created_at:"2017-12-12 12:00"}]}},methods:{handleSizeChange:function(){},handleCurrentChange:function(){}}}}});