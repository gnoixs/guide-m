
var enjoyhint_instance = new EnjoyHint({});

var enjoyhint_script_steps = [ 
 
  { 
    'next #playerBankAccount' : "输入银行卡号，并按“下一步”继续", 
    'showSkip' : false,
    'showNext' : false
  },
  {
    'click #playerBankName' : '选择要提款的银行',
    'showSkip' : false,
    'showNext' : false
  },
  {
    'next #withdrawAmount' : "输入提款金额，并按“下一步”继续", 
    'showSkip' : false,
    'showNext' : false,
  },
  {
    'next #withdrawPw' : "输入提款密码，并按“下一步”继续", 
    'showSkip' : false,
    'showNext' : false
  }, 
  {
    'click .next-step' : '确认无误，点击“下一步”按钮',
    'showSkip' : false,
    'showNext' : false,
  } 
 
];

enjoyhint_instance.set(enjoyhint_script_steps);
enjoyhint_instance.run();
