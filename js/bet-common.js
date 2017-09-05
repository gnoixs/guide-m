/**
 **   引导demo
 **/
$(function(){
    // 存款弹窗
    $(".menu-icon-right-menu-logined").css("z-indx","9999");
    $(".menu-icon-right-menu-logined").click(function(){
        $("#rightMenu,.rightMenuBackground").toggle();
    });
 
    // 展开银行卡付款
    $(".deposit-by-bankCard").on("click",function(){ 
        $(this).next(".deposit-bank-options").show(); 
    }) 

    //  银行卡选择跳转
    $(".deposit-bank-options .bank-select").on("click",function(){ 
        window.location.href="info.html"; 
    })

    //  支付宝跳转
    $(".deposit-by-aliPay").on("click",function(){  
        window.location.href="alipay.html"; 
    })
    //  银行卡选择跳转
    $(".fill-form").on("click",function(){ 
        window.location.href="transfer.html"; 
    })

    //  银行卡选择跳转
    $(".step-submit").on("click",function(){   
        $(".step-01").hide(); 
        $(".deposit-success-info").show(); 
        $(".deposit-step-tick").css("background","#ff9200");
        $(".moneyTranfer").text($("#amount").val());
        return false;
    })

    // 快捷按钮
    $(".ali-money-btn .amount-button").on("click",function(){ 
        $("#amount").val($(this).text()); 
    })
    // 快捷按钮
    $(".ali-submit-btn").on("click",function(){ 
        $(".alipay-form").hide(); 
        $(".deposit-payment-process").show();       
        return false;   
    })
    // 下注表格
    $(".betFormShowFloatScreen,.odds-65w").on("click",function(){ 
        $(".BetForm").show();  
    }) 
    // 下注订单 
    $(".bet-submit").on("click",function(){ 
        $(".BetForm").hide();  
        $(".BetOrder").show();  
    }) 

    // 关闭注单  component-league-selector-group
    $(".betForm-TigerClose,.formBtnT2,.closeOrder").on("click",function(){ 
        $(".BetForm,.BetOrder").hide();  
    }) 

    // 复试过关跳转  
    $(".component-league-selector-group").on("click",function(){ 
        window.location.href="guoguan-bet.html";          
    }) 

    // 取款密码
    $(".withdraw-button-password").each(function(){
        $(this).on("click",function(){
     
            var n = $(this).text();
            var inputVal = $("#withdrawPw").val();
            if (inputVal.length == '') {
                $("#withdrawPw").val(n);
            } else {
                if(inputVal.length <=6){
                    $("#withdrawPw").val(inputVal+n); 
                }
            }
            
        })
    })



    // 下一页  
    $('.topmenu-sub-menu').on("click",function(){
        window.location.href="main-guide.html"; 
    });

    // 下注 
    $(".fb-KangarooBackground").append('<div class="white-overlay"></div>');
    $(".fb-KangarooBackground").on("click",function(){  
        $(".white-overlay").remove();
    });
    $(".odds-65w").on("click",function(){ 
        $(this).css({
            "background":"orange",
            "border-color":"orange",
            "color":"#fff"
        });  
        var odds2 = $(this).find(".odds2").text();
        var odds3 = $(this).find(".odds3").text();
        var teamA = $(this).parents('.fb-KangarooBackground').children(".fb-match-team:eq(0)").find(".fb-match-team-name strong").html();
        var teamB = $(this).parents('.fb-KangarooBackground').children(".fb-match-team:eq(1)").find(".fb-match-team-name strong").html();
    
        // console.log(odds2)
        // console.log(teamA)
        // console.log(teamB)

        odds2 = odds2.replace('U','小');
        odds2 = odds2.replace('O','大');

        // console.log(odds3)
         
        $(".betFormTitleTextLeft").text('');
        $(".betFormTitleTextRight").text(odds2);
        $(".betFormTitleTextRight3").text(odds3);
        $(".betFormSubTitle").html(teamA +'&nbsp;<b class="odd-color ">vs</b>&nbsp;'+ teamB);


        // 快捷按钮
        $(".noPanelLine-Cow .typeNo-Cow").on("click",function(){ 
            var txt = $(this).text();
            $("#betMoney,.betMoney").text(txt);  

            var sum = 0;
            sum = odds3*txt;
            sum = returnFloat(sum);  
            
            $(".betform-Turtle1o1825475640,.canWin").text(sum);
        }) 
        // 快捷按钮
        $(".numberPanelsmall .noPanelBtn").each(function(i){
            var txt=0;
            var sum = 0;
            $(this).on("click",function(){ 
                if (i==0) {
                    txt = 100;
                } else if (i==2) {
                    txt = 1000;
                } else if (i==4) {
                    txt = 10000;
                }      
                $("#betMoney,.betMoney").text(txt);  

                sum = odds3*txt;
                sum = returnFloat(sum);  
                
                $(".betform-Turtle1o1825475640,.canWin").text(sum);
            })
        })  
    }); 

});
function returnFloat(value){  // 计算数字
    var value=Math.round(parseFloat(value)*100)/100;
    var xsd=value.toString().split(".");
    if(xsd.length==1){
        value=value.toString()+".00";
        return value;
    }
    if(xsd.length>1){
        if(xsd[1].length<2){
            value=value.toString()+"0";
        }
        return value;
    }
}
