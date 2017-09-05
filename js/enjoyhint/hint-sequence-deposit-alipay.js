
var enjoyhint_instance = new EnjoyHint({});

var enjoyhint_script_steps = [ 
{
  'click .ali-money-btn' : "请点击快捷金额按钮",
  'showSkip' : false,
  'showNext' : false
},  
{
  'click .ali-submit-btn ' : '确认无误，点击提交',
  'showSkip' : false,
  'nextButton' : {className: "", text: ""}
},
{
  'click .deposit-ok' : '手机支付宝（微信、QQ）扫码即可完成支付',
  'showSkip' : true, 
  'showNext' : false,
  'skipButton' : {className: "mySkip", text: "确定"}
}
 

];

enjoyhint_instance.set(enjoyhint_script_steps);
enjoyhint_instance.run();
