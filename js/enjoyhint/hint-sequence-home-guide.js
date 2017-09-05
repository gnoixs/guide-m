
var enjoyhint_instance = new EnjoyHint({});

var enjoyhint_script_steps = [ 
{
  'next .menu-icon-right-menu-logined' : "存取款、转账、账户记录等在这个菜单下",
  'showSkip' : false,
  'showNext' : false
},   
 
{
  'next .topmenu-sub-menu-sport' : "想投注“体育赛事”，来这里",
  'showSkip' : false,
  'showNext' : false
},   
 
{
  'next .topmenu-sub-menu-liveCasino-over' : "想玩“真人荷官”游戏，来这里",
  'showSkip' : false,
  'showNext' : false
},   
 
{
  'next .slotGame' : "想玩“老虎机”游戏，来这里",
  'showSkip' : false,
  'showNext' : false
},   
  
 
{
  'next .nav-cp' : "想下几注“彩票”，来这里",
  'showSkip' : false,
  'showNext' : false
},   
  
 
{
  'next .nav-promo' : "经常性的优惠信息活动在这里",
  'showSkip' : false,
  'showNext' : false
}, 
{
  'next .nav-download' : "这里下载客户端app",
  'showSkip' : false,
  'showNext' : false
}, 
{
  'next .promotion' : '具体的优惠活动都会在这',
  'showSkip' : false
},
{
  'click .topmenu-sub-menu-sport' : "点击继续体育赛事页面介绍",
  'showSkip' : false
}, 
];

enjoyhint_instance.set(enjoyhint_script_steps);
enjoyhint_instance.run();
