webpackJsonp([17],{148:function(t,s,a){var e=a(0)(a(291),a(574),function(t){a(424),a(425)},"data-v-0cc5b025",null);t.exports=e.exports},204:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(1),n=(a(3),a(2)),o=a(148),c=a.n(o);App.vm=new e.default({mixins:n.a,render:function(t){return t(c.a)}})},291:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(10),n=a.n(e),o=a(5),c=a.n(o),i=a(6),m=a.n(i),r=a(8),l=a.n(r),p=a(13),_=a(9),d=a(12),v=a.n(d),C=App.parseQueryString().prdCde;App.parseQueryString().templateCode;s.default={data:function(){var t;return(t={list:null,templateCode:"",prdTerm:"",firstCycleMark:"",prdStatus:"",estDate:""}).prdTerm="",t},computed:{ifFourthPeriod:function(){return function(t){if(t.netValIssueDt&&this.estDate){var s=t.netValIssueDt.substr(0,8).replace(/(\d{4})(\d{2})(\d{2})/,"$1-$2-$3"),a=this.estDate.substr(0,8).replace(/(\d{4})(\d{2})(\d{2})/,"$1-$2-$3"),e=Date.parse(s)-Date.parse(a);if(0<e){var n=e/1e3/60/60/24;return("1306"===this.templateCode?parseFloat(this.prdTerm):7)<=n}}return!1}}},components:{Group:c.a,Cell:m.a,XButton:l.a,noData:v.a},filters:_.a,methods:n()({},p.a),mounted:function(){var s=this;App.Native.rpc({operationType:"com.MB800002",data:{prdCode:C,cycleRangeMark:"0"}}).then(function(t){s.list=t.data.cycleNetValList,s.templateCode=t.data.templateCode,s.prdTerm=t.data.prdTerm,s.firstCycleMark=t.data.firstCycleMark,s.prdStatus=t.data.prdStatus,s.estDate=t.data.estDate,s.prdTerm=t.data.prdTerm}),App.remoteLog("lc-lsyj-01"),App.on("back",function(){App.remoteLog("lc-lsyj-02")}),App.on("subtitleClick",function(t){App.remoteLog("lc-lsyj-03")})}}},4:function(t,s){t.exports=vendor_library},424:function(t,s){},425:function(t,s){},574:function(t,s){t.exports={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-page",[e("div",{staticClass:"main"},[null!==this.list&&0===this.list.length?e("no-data",{attrs:{words:"对不起，没有满足条件的查询数据！"}}):a._e(),a._v(" "),null!==this.list&&0<this.list.length?e("group",{staticClass:"account"},a._l(a.list,function(t,s){return e("cell",{key:s,staticClass:"cells",attrs:{title:""}},[e("div",{attrs:{slot:"title"},slot:"title"},["1306"==a.templateCode?e("div",[e("div",[e("span",{staticClass:"common-text"},[a._v("产品名称")]),e("span",{staticClass:"common-content common-special"},[a._v(a._s(t.prdName))])]),a._v(" "),e("div",[e("span",{staticClass:"common-text"},[a._v("日期")]),e("span",{staticClass:"common-content"},[a._v(a._s(a._f("formatDate")(t.netValIssueDt)))])]),a._v(" "),e("div",[e("span",{staticClass:"common-text"},[a._v("单位净值")]),e("span",{staticClass:"common-content"},[a._v(a._s(t.cycleNetVal))])]),a._v(" "),e("div",[e("span",{staticClass:"common-text"},[a._v("累计净值")]),e("span",{staticClass:"common-content"},[a._v(a._s(t.prdTotNetVal))])]),a._v(" "),a.ifFourthPeriod(t)?e("div",[e("span",{staticClass:"common-text"},[a._v("近"+a._s(a.prdTerm)+"天年化收益")]),e("span",{staticClass:"common-content",domProps:{innerHTML:a._s(a.myformatprofitRate(t.cyclYearIncomeRate))}})]):a._e(),a._v(" "),e("div",[e("span",{staticClass:"common-text"},[a._v("年化业绩基准")]),e("span",{staticClass:"common-content",domProps:{innerHTML:a._s(a.myformatprofitRate(t.beachMark))}})]),a._v(" "),t.describe?e("div",[e("span",{staticClass:"common-text"},[a._v("备注")]),e("span",{staticClass:"common-content"},[a._v("有分红（"+a._s(t.describe)+"元/份）")])]):a._e()]):"1307"==a.templateCode?e("div",[e("div",[e("span",{staticClass:"common-text"},[a._v("产品名称")]),e("span",{staticClass:"common-content common-special"},[a._v(a._s(t.prdName))])]),a._v(" "),e("div",[e("span",{staticClass:"common-text"},[a._v("日期")]),e("span",{staticClass:"common-content"},[a._v(a._s(a._f("formatDate")(t.netValIssueDt)))])]),a._v(" "),a.ifFourthPeriod(t)?e("div",[e("span",{staticClass:"common-text"},[a._v("7日年化收益")]),e("span",{staticClass:"common-content",domProps:{innerHTML:a._s(a.myformatprofitRate(t.yieldProfitRate))}})]):a._e(),a._v(" "),e("div",[e("span",{staticClass:"common-text"},[a._v("万份收益")]),e("span",{staticClass:"common-content"},[a._v(a._s(t.incmUnit?t.incmUnit:"——"))])])]):"P920"==a.templateCode?e("div",[e("div",[e("span",{staticClass:"common-text"},[a._v("产品名称")]),e("span",{staticClass:"common-content common-special"},[a._v(a._s(t.prdName))])]),a._v(" "),e("div",[e("span",{staticClass:"common-text"},[a._v("日期")]),e("span",{staticClass:"common-content"},[a._v(a._s(a._f("formatDate")(t.netValIssueDt)))])]),a._v(" "),e("div",[e("span",{staticClass:"common-text"},[a._v("单位净值")]),e("span",{staticClass:"common-content"},[a._v(a._s(t.cycleNetVal))])]),a._v(" "),e("div",[e("span",{staticClass:"common-text"},[a._v("累计净值")]),e("span",{staticClass:"common-content"},[a._v(a._s(t.prdTotNetVal))])]),a._v(" "),e("div",[e("span",{staticClass:"common-text"},[a._v("上日年化收益")]),e("span",{staticClass:"common-content",domProps:{innerHTML:a._s(a.myformatprofitRate(t.incomeRate))}})]),a._v(" "),t.describe?e("div",[e("span",{staticClass:"common-text"},[a._v("备注")]),e("span",{staticClass:"common-content"},[a._v("有分红（"+a._s(t.describe)+"元/份）")])]):a._e()]):e("div",[e("div",[e("span",{staticClass:"common-text"},[a._v("产品名称")]),e("span",{staticClass:"common-content common-special"},[a._v(a._s(t.prdName))])]),a._v(" "),e("div",[e("span",{staticClass:"common-text"},[a._v("发布日期")]),e("span",{staticClass:"common-content"},[a._v(a._s(a._f("formatDate")(t.netValIssueDt)))])]),a._v(" "),e("div",[e("span",{staticClass:"common-text"},[a._v("投资周期")]),e("span",{staticClass:"common-content",staticStyle:{"font-size":"0.26rem"}},[a._v(a._s(a._f("formatDate")(t.cycleStartDt))+"~"+a._s(a._f("formatDate")(t.cycleEndDt)))])]),a._v(" "),e("div",[e("span",{staticClass:"common-text"},[a._v("单位净值")]),e("span",{staticClass:"common-content"},[a._v(a._s(t.cycleNetVal))])]),a._v(" "),e("div",[e("span",{staticClass:"common-text"},[a._v("参考年化收益率")]),e("span",{staticClass:"common-content",domProps:{innerHTML:a._s(a.formatGuestRateNew(t.cyclYearIncomeRate,"0"))}})]),a._v(" "),t.describe?e("div",[e("span",{staticClass:"common-text"},[a._v("备注")]),e("span",{staticClass:"common-content"},[a._v("有分红（"+a._s(t.describe)+"元/份）")])]):a._e()])])])})):a._e()],1)])},staticRenderFns:[]}}},[204]);