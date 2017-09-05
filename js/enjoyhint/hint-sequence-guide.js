/*
*  投注页面引导介绍
*/
var enjoyhint_instance = new EnjoyHint({});

var enjoyhint_script_steps = [ 
{
  'next #step1' : '点击这里切换更多游戏',
  'showSkip' : false,
},
{
  'next #step2' : '如果你有投注，这里能看到投注的记录',
  'showSkip' : false
},
{
  'next #step3' : '点击能滑出左边菜单栏，里面可以选择不同的球类',
  'showSkip' : false
},
{
  'next #step4' : '滚球盘，能分类列出每个球类的滚球盘口',
  'showSkip' : false
},
{ 
  'next #step5' : '能列出每个球类的即将开赛的盘口',
  'showSkip' : false
},
{ 
  'next #step6' : '列出每个球类的今天的赛事',
  'showSkip' : false
},
{ 
  'next #step7' : '能分类列出每个球类最近一周的赛事',
  'showSkip' : false
},
{ 
  'next #step8' : '这里可以继续切换不同球类以及其他游戏和赛果',
  'showSkip' : false
},
{ 
  'next #step9' : '滚球盘内赛事',
  'showSkip' : false
},
{ 
  'next #step10' : '主客队的比分，上面是主队，下面是客队',
  'showSkip' : false
},
{ 
  'next #step11' : '主客队名字，上面是主队，下面是客队',
  'showSkip' : false
},
{ 
  'next #step12' : '比赛进行的时间和上下半场',
  'showSkip' : false
},
{
  'click #step13' : '<span class="rowSecond">演示完毕，谢谢观看！</span>',
  'showSkip' : true, 
  'showNext' : false
}








];

enjoyhint_instance.set(enjoyhint_script_steps);
enjoyhint_instance.run();
