
var enjoyhint_instance = new EnjoyHint({});

var enjoyhint_script_steps = [ 
{
  'click .component-competition-title' : '请点击选择“参赛表”，“赛事”，“冠军盘口”',
  'showSkip' : false,
  'showNext' : false
}, 
{
  'click .choosed-component-league-selector-group' : '请选择联赛',
  'showSkip' : false,
  'showNext' : false
} 
];

enjoyhint_instance.set(enjoyhint_script_steps);
enjoyhint_instance.run();
