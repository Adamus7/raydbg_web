webpackJsonp([21],{177:function(t,a,e){var s=e(0)(e(332),e(646),function(t){e(505)},"data-v-aba5013e",null);t.exports=s.exports},233:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(1),i=(e(3),e(2)),n=e(177),v=e.n(n);App.vm=new s.default({mixins:i.a,render:function(t){return t(v.a)}})},332:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(5),i=e.n(s),n=e(6),v=e.n(n),r=e(8),c=e.n(r),_=e(11),o=e.n(_);a.default={data:function(){return{hang:!0,contract:!1,adopt:!1,overdue:!1,success:!0}},components:{Group:i.a,Cell:v.a,XButton:c.a,XInput:o.a},methods:{},mounted:function(){}}},4:function(t,a){t.exports=vendor_library},505:function(t,a){},646:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-page",[e("div",{staticClass:"main"},[e("div",{staticClass:"riskOverdue"},[t.success?t._e():e("div",[e("div",{staticClass:"none-date"}),t._v(" "),t.hang?e("div",[e("p",[t._v("银行卡未加挂！")]),t._v(" "),e("div",{staticClass:"warmTip"},[t._v("您的手机银行关联的卡中未包含理财签约卡，请通过柜面或财富版网银进行加挂。")])]):t._e(),t._v(" "),t.contract?e("div",[e("p",[t._v("银行卡未签约！")]),t._v(" "),e("div",{staticClass:"warmTip"},[t._v("您的手机银行关联的卡均未办理理财签约，请持有有效身份证件和银行卡到我行任一营业网点办理签约。")])]):t._e(),t._v(" "),t.adopt?e("div",[e("p",[t._v("未通过风险评测！")]),t._v(" "),e("div",{staticClass:"warmTip"},[t._v("首次购买理财应先到我行任一网点进行风险承受能力评估。")])]):t._e(),t._v(" "),t.overdue?e("div",[e("p",[t._v("风险测评已超过有效期！")]),t._v(" "),e("div",{staticClass:"warmTip"},[t._v("您在我行的风险承受能力评估已超过一年有效期，请重新评估后购买")])]):t._e()]),t._v(" "),t.success?e("div",[e("div",{staticClass:"smile"}),t._v(" "),e("p",{staticClass:"smile-text"},[t._v("恭喜您！")]),t._v(" "),e("div",{staticClass:"warmTip-text"},[e("div",{staticClass:"warmTip-title"},[t._v("理财账号: 6223****2541")]),t._v(" "),e("div",[t._v("您的手机银行关联的卡均未办理理财签约，请持有有效身份证件和银行卡到我行任一营业网点办理签约。")])])]):t._e(),t._v(" "),e("div",{staticClass:"btn-area"},[t.hang||t.contract||t.adopt?e("x-button",{attrs:{type:"primary"}},[t._v("附近网点")]):t._e(),t._v(" "),t.hang||t.contract||t.adopt?e("x-button",{attrs:{type:"primary"}},[t._v("确    定")]):t._e(),t._v(" "),t.overdue||t.success?e("x-button",{attrs:{type:"primary"}},[t._v("重新评估")]):t._e()],1)])])])},staticRenderFns:[]}}},[233]);