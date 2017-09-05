/* DaTouWang URL: www.datouwang.com */
var enjoyhint_instance = new EnjoyHint({});

var enjoyhint_script_steps = [
  {
  	'click .mobile_icon_atm' : '选取支付方式，进入“存款”进入下一步',
  	'showSkip' : false
//	'nextButton' : {className: "myNext", text: "可以"},
//	'skipButton' : {className: "mySkip", text: "不了!"}
  },
  {
  	'click .gsbank' : '选取支付银行，进入交易支付页面',
  	'showSkip' : false
  },
  {
  	'click #nexttable' : '确定汇款账户资料,填写汇款信息表格',
  	'showSkip' : false
  },
  {
  	'click #tjbtn' : '确定汇款方式,金额,时间,提交交易单',
  	'showSkip' : false
  },
  {
  	'next .topmenu-main-menu-icon' : '您的反馈将不胜感激。',
  	'shape': 'circle',
  	'radius': 70,
  	'showSkip' : false,
  	'nextButton' : {className: "myNext", text: "正式开始"}
  }
//{
//	'key #mySearchButton' : "请输入关键词搜索，并按“Enter”进去下一步",
//	'keyCode' : 13
//},
//{
//	'click .btn' : '点击这个按钮，切换下拉菜单，进入下一步'
//},
//{
//	'next .about' : '检查可用的所有功能的列表',
//	'shape': 'circle'
//},
//{
//	'next .contact' : '您的反馈将不胜感激。',
//	'shape': 'circle',
//	'radius': 70,
//	'showSkip' : false,
//	'nextButton' : {className: "myNext", text: "知道了!"}
//}

];

enjoyhint_instance.set(enjoyhint_script_steps);
enjoyhint_instance.run();
