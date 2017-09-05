/* DaTouWang URL: www.datouwang.com */
var enjoyhint_instance = new EnjoyHint({});

var enjoyhint_script_steps = [
  {
  	'next .topmenu-main-menu-icon' : '点击个人中心图标，选择“存款”进入下一步',
  	'showSkip' : false
  },
  {
  	'click .right-menu-top-deposit' : "点击存款按钮，进入存款页面",
  	'showSkip' : false
  }
];

enjoyhint_instance.set(enjoyhint_script_steps);
enjoyhint_instance.run();
