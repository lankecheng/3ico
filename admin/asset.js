webpackJsonp([5],{205:function(e,t,l){l(378);var a=l(7)(l(381),l(369),"data-v-7a554127",null);e.exports=a.exports},369:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticClass:"hd"},[l("el-form",{attrs:{inline:!0}},[l("el-form-item",{attrs:{label:"昵称"}},[l("el-input",{model:{value:e.query.nickname,callback:function(t){e.query.nickname=t},expression:"query.nickname"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"手机"}},[l("el-input",{model:{value:e.query.phone,callback:function(t){e.query.phone=t},expression:"query.phone"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"姓名"}},[l("el-input",{model:{value:e.query.name,callback:function(t){e.query.name=t},expression:"query.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"身份证"}},[l("el-input",{model:{value:e.query.id,callback:function(t){e.query.id=t},expression:"query.id"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"变动类型"}},[l("el-select",{model:{value:e.query.type,callback:function(t){e.query.type=t},expression:"query.type"}},[l("el-option",{attrs:{label:"类型1",value:"1"}}),e._v(" "),l("el-option",{attrs:{label:"类型2",value:"2"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"变动项目"}},[l("el-input",{model:{value:e.query.project,callback:function(t){e.query.project=t},expression:"query.project"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"变动额"}},[l("el-input",{staticStyle:{width:"60px"},model:{value:e.query.id,callback:function(t){e.query.id=t},expression:"query.id"}}),e._v("\n              -\n              "),l("el-input",{staticStyle:{width:"60px"},model:{value:e.query.id,callback:function(t){e.query.id=t},expression:"query.id"}})],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary"}},[e._v("搜索")])],1)],1)],1),e._v(" "),l("el-table",{attrs:{data:e.data,stripe:"",border:""}},[l("el-table-column",{attrs:{prop:"nickname",label:"昵称"}}),e._v(" "),l("el-table-column",{attrs:{prop:"phone",label:"手机"}}),e._v(" "),l("el-table-column",{attrs:{prop:"name",label:"姓名"}}),e._v(" "),l("el-table-column",{attrs:{prop:"id",label:"身份证"}}),e._v(" "),l("el-table-column",{attrs:{width:"120",prop:"type",label:"变动类型"}}),e._v(" "),l("el-table-column",{attrs:{prop:"project",label:"项目"}}),e._v(" "),l("el-table-column",{attrs:{prop:"bde",label:"变动额"}}),e._v(" "),l("el-table-column",{attrs:{prop:"bdq",label:"变动前"}}),e._v(" "),l("el-table-column",{attrs:{prop:"bdh",label:"变动后"}}),e._v(" "),l("el-table-column",{attrs:{width:"180",prop:"created_at",label:"变动日期"}})],1),e._v(" "),l("el-pagination",{staticClass:"page",attrs:{"current-page":1,"page-sizes":[10,20,30,50],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]}},378:function(e,t){},381:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(203),n=l.n(a),r={page:1,pageSize:10,nickname:"",phone:"",name:"",id:"",type:"1",project:""};t.default={title:"资产流水",data:function(){return{query:n()({},r,this.$route.query)}},computed:{data:function(){return[{nickname:"nickname1",phone:"11111111111",name:"张三",id:"333333333333333333",type:"类型",project:"项目1",bde:"10.00",bdq:"0.00",bdh:"10.00",created_at:"2017-12-12 12:00"}]}},methods:{handleSizeChange:function(){},handleCurrentChange:function(){}}}}});