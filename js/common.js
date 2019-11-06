/**
 * Created by Dell on 2018/2/26.
 */


function fullYear(currentDt) {
  var yearData  = [];
  var years = currentDt.substr(0,4);
  for(var i=parseInt(years);i<parseInt(years)+10;i++){
    var dataval = {
      id:i,
      value:i
    };
    yearData.push(dataval);
  }
  return yearData;
}
function fullMonth(currentDt) {
  var fullMonths = [];
  var months=parseInt(currentDt.substr(4,2));
  for(var j=1;j<13;j++){
    var dataVal = {
      id:j<10?"0"+j:j,
      value:j<10?"0"+j:j
    };
    fullMonths.push(dataVal);
  }
  return fullMonths;
}
function fullDay(finalDay) {
  var fulldays = [];
  for(var j=0;j<finalDay;j++){
    var dataVal = {};
    dataVal.id=j+1<10?"0"+(j+1):(j+1);
    dataVal.value=j+1<10?"每月0"+(j+1)+"日":"每月"+(j+1)+"日";
    fulldays.push(dataVal);
  }
  return fulldays;
};
/*小数点进行0补全*/
function overFormat(th){
    var v = th.value;
    if(v === ''){
        v = '0.00';
    }else if(v === '0'){
        v = '0.00';
    }else if(v === '0.'){
        v = '0.00';
    }else if(/^0+\d+\.?\d*.*$/.test(v)){
        v = v.replace(/^0+(\d+\.?\d*).*$/, '$1');
        v = inp.getRightPriceFormat(v).val;
    }else if(/^0\.\d$/.test(v)){
        v = v + '0';
    }else if(!/^\d+\.\d{2}$/.test(v)){
        if(/^\d+\.\d{2}.+/.test(v)){
            v = v.replace(/^(\d+\.\d{2}).*$/, '$1');
        }else if(/^\d+$/.test(v)){
            v = v + '.00';
        }else if(/^\d+\.$/.test(v)){
            v = v + '00';
        }else if(/^\d+\.\d$/.test(v)){
            v = v + '0';
        }else if(/^[^\d]+\d+\.?\d*$/.test(v)){
            v = v.replace(/^[^\d]+(\d+\.?\d*)$/, '$1');
        }else if(/\d+/.test(v)){
            v = v.replace(/^[^\d]*(\d+\.?\d*).*$/, '$1');
            ty = false;
        }else if(/^0+\d+\.?\d*$/.test(v)){
            v = v.replace(/^0+(\d+\.?\d*)$/, '$1');
            ty = false;
        }else{
            v = '0.00';
        }
    }
    th.value = v;
}
function amount(th){
    var regStrs = [
        ['^0(\\d+)$', '$1'], //禁止录入整数部分两位以上，但首位为0
        ['[^\\d\\.]+$', ''], //禁止录入任何非数字和点
        ['\\.(\\d?)\\.+', '.$1'], //禁止录入两个以上的点
        ['^(\\d+\\.\\d{2}).+', '$1'] //禁止录入小数点后两位以上
    ];
    for(var i=0; i<regStrs.length; i++){
        var reg = new RegExp(regStrs[i][0]);
        th.value = th.value.replace(reg, regStrs[i][1]);
    }
}
/*获取卡最长有效时间*/
function yearBefore() {
  var getNewYear = new Date().getFullYear();
  //   向后推移10年;
  var num = 10;
  var year = [];
  for(var i=0;i<num;i++){
    var yearObj = {};
    yearObj.id=yearObj.value=getNewYear+i;
    year.push(yearObj);
  }
  return year;
}
/*获取12个月*/
function month() {
  var num = 13;
  var months = [];
  for(var i = 1;i<num;i++){
    var monthObj = {};
    monthObj.id=monthObj.value=(i<10)?(0+String(i)):String(i);
    months.push(monthObj);
  }
  return months;
}
/*卡号提示的mask*/
function tips(txt) {
  var t=document.createElement("p");
  t.className="tips_state";
  t.innerHTML=txt;
  if(!document.querySelector(".tips_state")){
    document.body.appendChild(t);
    setTimeout(function () {
      document.body.removeChild(t);
    },1000)
  }
}
/*模态框的封装*/
function mask(tit,txt,btn1,btn2) {
  var addCreditCard_mask=document.createElement("div");
  addCreditCard_mask.className="addCreditCard_mask";
  var html='<div class="modal-content">' +
    '<div class="tittle">' +
    '<h5>'+tit+'</h5>' +
    '<p>'+txt+'</p>' +
    '</div>' +
    '<div class="button">' +
    '<a class="model_btn_01" href="javascript:void(0)">'+btn1+'</a>'
   if(btn2){
    html+='<a class="model_btn_02" href="javascript:void(0)">'+btn2+'</a>'
   }
   html+='</div>' +
     '</div>';
    addCreditCard_mask.innerHTML=html;
    document.body.appendChild(addCreditCard_mask);
}
function stateTips(txt,boolean) {
    var _el = document.createElement('div');
    _el.className="state_mask";
    var iconEl= document.createElement("i");
    var textP = document.createElement('p');
    textP.innerHTML=txt;
    if(boolean){
        iconEl.className="suc"
    }else{
        iconEl.className="fails"
    }
    _el.appendChild(iconEl);
    _el.appendChild(textP);
    if(!unionpay.option.el.querySelector('.state_mask')){
        unionpay.option.el.appendChild(_el);
        setTimeout(function () {
            unionpay.option.el.removeChild(_el)
        },1500)
    }
}
/*开通账单成功的mask*/
function openScuess(src,txt) {
  var t = creatDom("div",{"class":"tips_state scuess"},[
    creatDom("img",{"src":src}),
    creatDom("p",[txt])]).render();
  document.body.appendChild(t);
  var s = setTimeout(function () {
    document.body.removeChild(t);
  },1000)
}
/*hash 返回指向*/
/*
* @hash:需要返回的hash地址;
* */
function backHash(hash) {
    location.hash=hash;
}
/*自定义方法*/

function type(obj) {
    return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, '');
};
function setAttr(node, key, value) {
    switch (key) {
        case 'style':
            node.style.cssText = value;
            break;
        case 'value':
            var tagName = node.tagName || '';
            tagName = tagName.toLowerCase();
            if (tagName === 'input' || tagName === 'textarea') {
                node.value = value;
            } else {
                node.setAttribute(key, value);
            }
            break;
        default:
            node.setAttribute(key, value);
            break;
    }
}
function isArray(list) {
    return type(list) === 'Array';
}
function eachs(array, fn) {
    for (var i = 0, len = array.length; i < len; i++) {
        fn(array[i], i);
    }
}
function creatDom(tagName,props,children) {
    if(!(this instanceof creatDom)){
        return new creatDom(tagName,props,children);
    }
    if(isArray(props)){
        children=props;
        props={};
    }
    this.tagName=tagName;
    this.props = props || {};
    this.children = children || [];
    var count = 0;
    eachs(this.children,function (child,i) {
        if (child instanceof creatDom) {
            count += child.count;
        } else {
            children[i] = '' + child;
        }
        count++;
    });
    this.count = count;
}
creatDom.prototype.render = function() {
    var el = document.createElement(this.tagName);
    var props = this.props;
    for (var propName in props) {
        var propValue = props[propName];
        setAttr(el, propName, propValue);
    }
    eachs(this.children, function(child) {
        var childEl = (child instanceof creatDom) ? child.render() : document.createTextNode(child);
        el.appendChild(childEl);
    });
    return el;
};