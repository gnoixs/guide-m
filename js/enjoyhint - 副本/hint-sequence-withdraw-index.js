
var enjoyhint_instance = new EnjoyHint({});

var enjoyhint_script_steps = [
  { 
    'click .menu-icon-right-menu-logined' : '点击"个人钱包图标"然后展开',
    'showSkip' : false,
    'showNext' : false
  },
  {
    'click .btn_withdraw' : '选择取款',  
    'showSkip' : false,
    'showNext' : false,
  }  
];

enjoyhint_instance.set(enjoyhint_script_steps);
enjoyhint_instance.run();
