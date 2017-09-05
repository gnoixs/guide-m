
var enjoyhint_instance = new EnjoyHint({});

var enjoyhint_script_steps = [ 
{
  'click .fill-form' : '填写汇款信息',
  'showSkip' : false,
  'showNext' : false,
}
];

enjoyhint_instance.set(enjoyhint_script_steps);
enjoyhint_instance.run();
