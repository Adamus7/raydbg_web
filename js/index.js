SPA_RESOLVE_INIT = function(transition) {
    unionpay.register('index',function () {
        var self = this;
        var userMesg = this.option.userMesg;
        console.log(userMesg);
        var sameChStInfo=userMesg.sameChSt=="1"?"仅支持还本人信用卡":"支持还本人和亲友信用卡";
        var indexHeader = creatDom("header",{"class":"clearfix headers"},[
            creatDom("div",{"class":"header-tip fl"},[
                creatDom("h2",{"class":"f18 c000"},["亲爱的用户"]),
                creatDom("p",{"class":"f14 c666 mt_5"},[sameChStInfo])
            ]),
            creatDom("div",{"class":"header-func fr text-c"},[
                creatDom("a",{"class":"fl","href":"#/help"},[
                    creatDom("i",{"class":"icon icon_help"}),
                    creatDom("p",{"class":"c007 f12"},["使用帮助"])
                ]),
                creatDom("a",{"class":"fl ml_10","href":"#/record?url=getByUserId"},[
                    creatDom("i",{"class":"icon icon_record"}),
                    creatDom("p",{"class":"c007 f12"},["还款记录"])
                ])
            ])
        ]).render();
        var indexMain = creatDom("section",{"class":"index_main","id":"indexApp"}).render();
        var indexFooter = creatDom("footer",{"class":"f12 c999 footer text-c"},["©本服务由XX和中国银联联合提供"]).render();
        self.option.el.appendChild(indexHeader);
        self.option.el.appendChild(indexMain);
        self.option.el.appendChild(indexFooter);
        var cardContainer = creatDom("div",{"class":"card_item_container"},[
            creatDom("ul",{"class":"card_list","id":"cardItemUl"}),
            creatDom("div",{"class":"add_card"},[
                creatDom("a",{"class":"f18 text-c btn block"},["+添加信用卡"])
            ])
        ]).render();
        var addCardNo = creatDom("div",{"class":"add_card_top"},[
            creatDom("a",{"class":"f14 c666 text-c add_card_btn"},["+添加信用卡"]),
            creatDom("div",{"class":"flex text-c"},[
                creatDom("a",{"class":"flex-1"},[
                    creatDom("i",{"class":"icon icon_search"}),
                    creatDom("p",{"class":"f12 c666"},["账单查询"])
                ]),
                creatDom("a",{"class":"flex-1"},[
                    creatDom("i",{"class":"icon icon_paytips"}),
                    creatDom("p",{"class":"f12 c666"},["还款提醒"])
                ]),
                creatDom("a",{"class":"flex-1"},[
                    creatDom("i",{"class":"icon icon_payment"}),
                    creatDom("p",{"class":"f12 c666"},["信用卡还款"])
                ]),
                creatDom("a",{"class":"flex-1"},[
                    creatDom("i",{"class":"icon icon_rule"}),
                    creatDom("p",{"class":"f12 c666"},["信用卡管理"])
                ])
            ])
        ]).render();
        var appContainer = document.querySelector('#indexApp');
        $.ajax({
            type:"GET",
            contentType : "application/json",
            url : baseUrl+"entry/loadIndex",
            crossDomain : true,
            dataType : 'jsonp',
            data:{"data":JSON.stringify(userMesg)},
            jsonp: "jsonpCallback",
            timeout  : 100000,
            success:function (data) {
            	console.log(data);
                if(data.code =="00"){
                    self.uid=data.initData.uid;
                    self.sameChSt=data.initData.sameChSt;
                    self.usrName=data.initData.usrName;
                    self.token=data.token;
                    var cardList=data.initData.cardInfoList;
                    if(cardList.length===0){
                        appContainer.appendChild(addCardNo);
                        var addLink=document.querySelector(".add_card_btn");
                        addLink.href="#/addCard?uid="+self.uid+"&sameChSt="+self.sameChSt+"&usrName="+self.usrName+"&token="+self.token;
                    }else{
                        appContainer.appendChild(cardContainer);
                        var cardItem = appContainer.querySelector('#cardItemUl');
                        cardItem.innerHTML="";
                        for(var i=0;i<cardList.length;i++){
                            var openBillStr='',cardHref,cardColors;
                            if(cardList[i].cardBillQuerySt ==="0"||cardList[i].cardBillQuerySt ==="4"){
                                openBillStr="可开通账单自动查询";
                            }else if(cardList[i].cardBillQuerySt ==="1" && (cardList[i].cardAutoPaySt == "0" || cardList[i].cardAutoPaySt == "2")){
                                openBillStr="可开通自动还款";
                            }/*else if(cardList[i].cardBillQuerySt ==="1" && cardList[i].cardAutoPaySt == "1"){
                                openBillStr="已开通自动还款";
                            }*/
                            if(data.initData.sameChSt === "0"){
                                cardHref = "#/repayment?chAuthCd="+cardList[i].chAuthCd+"&token="+self.token;
                                cardColors=cardList[i].cardColor;
                            }else if(data.initData.sameChSt ==="1"){
                                if(data.initData.usrName === cardList[i].cardUsrName){
                                    cardHref = "#/repayment?chAuthCd="+cardList[i].chAuthCd+"&token="+self.token;
                                    cardColors=cardList[i].cardColor;
                                }else{
                                    cardHref="javascript:void(0)";
                                    cardColors="#cccccc";
                                }
                            }
                            var item = creatDom("li",{"class":"card_item"},[
                                creatDom("a",{"class":"block","href":cardHref},[
                                    creatDom("div",{"class":"item_card_info clearfix"},[
                                        creatDom("div",{"class":"fl card_name_end flex flex-align-center"},[
                                            creatDom("div",{"class":"card_logo flex-1"},[
                                                creatDom("img",{"src":cardList[i].bankLogo})
                                            ]),
                                            creatDom("div",{"class":"card_name fl"},[
                                                creatDom("h4",{"class":"f16 cfff"},[cardList[i].bankName]),
                                                creatDom("p",{"class":"f12 ceb"},[
                                                    creatDom("span",[cardList[i].cardUsrName+" | 尾号 "]),
                                                    creatDom("span",[cardList[i].cardNoEnd])
                                                ])
                                            ])
                                        ])
                                    ]),
                                    creatDom("div",{"class":"card_open_state cfff clearfix"},[
                                        creatDom("p",{"class":"fl f12"},[openBillStr]),
                                        creatDom("p",{"class":"fr f12 card_remind"},[cardList[i].cardRemindInf])
                                    ])
                                ])
                            ]).render();
                            item.querySelector('a').style.backgroundColor=cardColors;
                            if(data.initData.sameChSt==="1" && cardList[i].cardUsrName !==data.initData.usrName){
                                var chAuthCd = cardList[i].chAuthCd;
                                item.addEventListener("click",function () {
                                    mask("提示","根据本客户端的最新风险要求，即日起本服务不在支持他人信用卡，已添加的他人信用卡所有服务已失效，建议进一步删除该信用卡。","取消","删除");
                                    var btn1=document.querySelector(".model_btn_01");
                                    var btn2=document.querySelector(".model_btn_02");
                                    var addCreditCard_mask=document.querySelector(".addCreditCard_mask");
                                    btn1.addEventListener("click",function () {
                                        document.body.removeChild(addCreditCard_mask);
                                    });
                                    btn2.addEventListener("click",function () {
                                        document.body.removeChild(addCreditCard_mask);
                                        $.ajax({
                                            type:"GET",
                                            contentType : "application/json",
                                            url : baseUrl+"index/del",
                                            crossDomain : true,
                                            dataType : 'jsonp',
                                            data:{"chAuthId":chAuthCd},
                                            jsonp: "jsonpCallback",
                                            timeout : 1000000,
                                            success:function (info){
                                                if(info.code=="00"){
                                                    self.option.el.innerHTML="";

                                                    self.callPage("index")
                                                }else{
                                                    tips(info.msg+","+info.code)
                                                }
                                            }
                                        });
                                    })
                                })
                            }
                           if(cardList[i].cardBillQuerySt ==="1"){
                                var amountContent = creatDom("div",{"class":"fr item_card_amount text-r"},[
                                    creatDom("h4",{"class":"f16 cfff"},[
                                        creatDom("div",{"class":"loader"},[
                                            creatDom("span",{"class":"loading"},[
                                                creatDom("span",{"class":"bar1"}),
                                                creatDom("span",{"class":"bar2"}),
                                                creatDom("span",{"class":"bar3"}),
                                                creatDom("span",{"class":"bar4"}),
                                                creatDom("span",{"class":"bar5"}),
                                                creatDom("span",{"class":"bar6"}),
                                                creatDom("span",{"class":"bar7"}),
                                                creatDom("span",{"class":"bar8"}),
                                                creatDom("span",{"class":"bar9"}),
                                                creatDom("span",{"class":"bar10"}),
                                                creatDom("span",{"class":"bar11"}),
                                                creatDom("span",{"class":"bar12"})
                                            ])
                                        ])
                                    ]),
                                    creatDom("p",{"class":"f12 ceb"},["剩余应还"]),
                                ]).render();
                                item.querySelector(".item_card_info").appendChild(amountContent);
                                ;(function (j,t) {
                                    $.ajax({
                                            type:"GET",
                                            contentType : "application/json",
                                            url : baseUrl+"entry/loadBillInf",
                                            crossDomain : true,
                                            dataType : 'jsonp',
                                            data:{
                                            	"chAuthCd":cardList[j].chAuthCd,
                                            	"token":self.token
                                            },
                                            jsonp: "jsonpCallback",
                                            timeout  : 100000,
                                            success:function (amount) {
                                                if(t.querySelector('.item_card_amount')){
                                                    t.querySelector('.item_card_amount h4').innerHTML=amount.cardBillInfo;
                                                    t.querySelector('.card_open_state .card_remind').innerHTML=amount.cardRemindInf
                                                    if(amount.cardRemineSt =='0'){
                                                        t.querySelector('.item_card_amount p').innerHTML="";
                                                    }else if(amount.cardRemineSt =='2'){
                                                    	t.querySelector('.item_card_amount p').innerHTML="";
                                                    	var classVar = t.querySelector('.item_card_amount h4').getAttribute("class");
                                                    	classVar = classVar.replace("f16", "f12");
                                                    	t.querySelector('.item_card_amount h4').setAttribute("class", classVar);
                                                    	t.querySelector('.item_card_amount h4').classList.add('text-multi');
                                                    }
                                                }
                                            }
                                        })
                                })(i,item);
                            }else{
                            	  (function (k,items) {
                            		  console.log(items);
                            		  $.ajax({
		                            		  type: "GET",
		                            		  contentType: "application/json",
		                            		  url: baseUrl + "entry/showBillInf",
		                            		  crossDomain: true,
		                            		  dataType: 'jsonp',
		                            		  data: {
		                            			  "chAuthCd": cardList[k].chAuthCd,
		                            			  "token":self.token
		                            		  },
		                            		  jsonp: "jsonpCallback",
		                            		  timeout: 100000,
		                            		  success: function (datas) {
		                            			  console.log(datas);
		                            			  if(datas.code =="00"){
		                            				  if(datas.hasFailTransFlow == '1'){
		                            					  var failsDoc = creatDom("div",{"class":"fr item_card_amount text-r"},[
		                            					      creatDom("h4",{"class":"f12 cfff text-multi"},[])]).render();
		                            					  items.querySelector(".item_card_info").appendChild(failsDoc);
		                            					  items.querySelector(".text-multi").innerHTML=datas.cardBillInfo;
		                            				  }
		                            			  }
		                            		  }
                            		  		});
                            	})(i,item);
                            }
                            cardItem.appendChild(item);
                        }
                        initScroll.refresh();
                        //initScroll.maxScrollY-=91;
                        var addLink=document.querySelector(".add_card a");
                        addLink.href="#/addCard?uid="+self.uid+"&sameChSt="+self.sameChSt+"&usrName="+self.usrName+"&token="+self.token;
                    }
                }
            }
        });

    });
    unionpay.callPage('index');
    function _back() {
        if(location.hash==""){
//        	alert(navigator.appCodeName + '--' + navigator.appVersion);
        	if(typeof unionpay.option.closeWeb ==='function'){
        		unionpay.option.closeWeb();
        	}else{
        		var userAgent = navigator.userAgent;
                if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") !=-1) {
                   window.location.href="about:blank";
                   window.close();
                }else if(userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1){
                   window.opener=null;window.open('about:blank','_self','').close();
                }else {
                   window.opener = null;
                   window.open("about:blank", "_self");
                   window.close();
                }
        	}
            
        }
        
        window.removeEventListener("popstate",_back,false);
    }
    window.addEventListener("popstate",_back,false);
};
