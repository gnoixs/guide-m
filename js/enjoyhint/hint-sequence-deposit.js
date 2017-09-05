
var enjoyhint_instance = new EnjoyHint({});

var enjoyhint_script_steps = [ 
{
  'next .deposit-by-aliPay' : '点击"支付宝图标"<br><span class="rowSecond">或点击“下一步”选择银行卡付款演示</span>',
  'showSkip' : false,
  'showNext' : true
},  
{
  'click .deposit-by-bankCard' : '点击"银行卡汇款"然后展开',
  'showSkip' : false,
  'showNext' : false
},  
{
  'next .style0' : '选择要入款的银行',  
  'showSkip' : false,
  'showNext' : false,
}

];

enjoyhint_instance.set(enjoyhint_script_steps);
enjoyhint_instance.run();
