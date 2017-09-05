
var enjoyhint_instance = new EnjoyHint({});

var enjoyhint_script_steps = [ 
{
  'click #depositMethod' : '选择转账方式，点击“下一步”按钮',
  'showSkip' : false,
  'showNext' : false,
},
{
  'next #amount' : "请输入金额，点击“下一步”按钮",
  'showSkip' : false,
  'showNext' : true,
  'keyCode' : 13
}, 
{
  'next .deposit-time' : '选择存款时间，点击“下一步”按钮',
  'showSkip' : false,
},
{
  'click .step-submit' : '确认无误，点击提交',
  'showSkip' : false,
  'nextButton' : {className: "", text: ""}
},
{
  'click .deposit-success-info' : '恭喜完成银行卡入款演示',
  'showSkip' : true, 
  'showNext' : false,
  'skipButton' : {className: "mySkip", text: "确定"}
}



/*{
	'key #mySearchButton' : "请输入关键词搜索，并按“Enter”进去下一步",
	'keyCode' : 13
},
{
	'click .btn' : '点击这个按钮，切换下拉菜单，进入下一步'
},
{
	'next .about' : '检查可用的所有功能的列表',
	'shape': 'circle'
},
{
	'next .contact' : '您的反馈将不胜感激。',
	'shape': 'circle',
	'radius': 70,
	'showSkip' : false,
	'nextButton' : {className: "myNext", text: "知道了!"}
}*/

];

enjoyhint_instance.set(enjoyhint_script_steps);
enjoyhint_instance.run();
