
(function () {
    /*========================*/
    function unionpay(option) {
        this.option=option||{};
        this.page={};
        this.uid=null;

    }
    unionpay.prototype={
        register:function (pageName,callback) {
            if (callback && Object.prototype.toString.call(callback) === '[object Function]'){
                this.page[pageName]={callback:callback};
            }
        },
        callPage:function (pageName) {
            this.page[pageName].callback.call(this)
        }
    };
    window.unionpay =new unionpay();
})();
/*禁止滑动*/
function isPassive() {
    var supportsPassiveOption = false;
    try {
        addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get: function () {
                supportsPassiveOption = true;
            }
        }));
    } catch(e) {}
    return supportsPassiveOption;
}
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
    capture: false,
    passive: false
} : false);
var initScroll = new IScroll("body",{
    probeType:2,
    preventDefault:false,
    bounce:false
});
spaRouters.map('/index',function(transition){
    spaRouters.asyncFun(baseUrl+'JS/index.js',transition)
});
spaRouters.map('/toIndex',function(transition){
    spaRouters.asyncFun(baseUrl+'JS/toIndex.js',transition)
});
spaRouters.map("/addCard",function (transition) {
    spaRouters.asyncFun(baseUrl+'JS/addCard.js',transition)
});
spaRouters.map("/help",function (transition) {
    spaRouters.asyncFun(baseUrl+'JS/help.js',transition)
});
spaRouters.map("/record",function (transition) {
    spaRouters.asyncFun(baseUrl+'JS/record.js',transition)
});
spaRouters.map("/repayment",function (transition) {
    spaRouters.asyncFun(baseUrl+'JS/repayment.js',transition)
});
spaRouters.map("/repaymentState",function (transition) {
    spaRouters.asyncFun(baseUrl+'JS/repaymentState.js',transition)
});
spaRouters.map("/setting",function (transition) {
    spaRouters.asyncFun(baseUrl+'JS/setting.js',transition)
});
spaRouters.map("/details",function (transition) {
    spaRouters.asyncFun(baseUrl+'JS/details.js',transition)
});
spaRouters.map("/autoRepayment",function (transition) {
    spaRouters.asyncFun(baseUrl+'JS/autoRepayment.js',transition)
});
spaRouters.map("/openBill",function (transition) {
    spaRouters.asyncFun(baseUrl+'JS/openBill.js',transition)
});
spaRouters.beforeEach(function(transition){
    if(document.querySelector(".ios-select-widget-box")){
        document.querySelector("body").removeChild(document.querySelector(".ios-select-widget-box"))
    }
    if(document.querySelector(".addCreditCard_mask")){
        document.body.removeChild(document.querySelector(".addCreditCard_mask"))
    }
    if(unionpay.option.el){
    	unionpay.option.el.innerHTML='';
    	unionpay.option.el.style.minHeight="100%";
    }
    // initScroll.on("scrollEnd",null);
    // setTimeout(function(){
        //模拟切换之前延迟，比如说做个异步登录信息验证
        transition.next();
    // },100)
});
spaRouters.afterEach(function(transition){

    // console.log("切换之后dosomething")
});
//spaRouters.init();




