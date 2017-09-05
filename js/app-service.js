var _AccountService = {};
var AppService = {};

var username = "";
var csrf = "";

(function () {

    _AccountService.setCsrf = function (val) {
        console.log('val', val);
        csrf = val;
    }

    _AccountService.setUsername = function (val) {
        username = val;
    }

    _AccountService.getUsername = function () {
        return username;
    }

    _AccountService.getCsrf = function () {
        return csrf;
    }

    _AccountService.isLogon = function () {
        return _AccountService.getUsername().length > 5;
    }

    AppService.reload = function () {
        location.reload()
    }

    AppService.checkIsLogin = function () {
        _AccountService.refreshCsrf(function (csrf) {
            if (_AccountService.isLogon()) {
                console.log("isLogon")
            } else {
                if (typeof android !== 'undefined') {
                    android.loginExpireTab('start');
                }
            }
        });
    }
    
    if (typeof android !== 'undefined') {
        $(document).on('click', function (ev) {
            _AccountService.refreshCsrf(function (csrf) {
                if (_AccountService.isLogon()) {
                    console.log("isLogon")
                } else {
                    if (typeof android !== 'undefined') {
                        android.loginExpire('start');
                    }
                }
            });
        });
    }

    AppService.logout = function () {

        _AccountService.refreshCsrf(function (csrf) { 

            $.post("/logout",
                {
                    _csrf: csrf
                }, function (data, status) {
                    if (status === "success") {
                        if (typeof android !== 'undefined') {
                            android.hideLoading('end');
                        }
                        // location.reload()
                        window.isLoggedOn = false;
                    } else {
                        if (typeof android !== 'undefined') {
                            android.hideLoading('end');
                        }
                        window.isLoggedOn = true;
                    }
                }
            );

        });

    }



    AppService.login = function (_username, _password, _reset) {

        //refresh Csrf 
        // for testing when server down

        /*
            if (!csrf || csrf == "") {
                            
                if (typeof android !== 'undefined') {
                    // android.systemFail('系统已下线');
                }

                if (_username == "vgtrock" && _password == "123456a") {

                    console.log("login")

                    if (_reset) {
                        if (typeof android !== 'undefined') {
                            android.firstLoginSuccess('登入成功');
                        }
                        if (typeof window.webkit !== 'undefined') {
                            if(typeof window.webkit.messageHandlers !== 'undefined'){
                                window.webkit.messageHandlers.bridge.postMessage('loginSuccess')
                                window.webkit.messageHandlers.bridge.postMessage('finishload')
                            }
                        }

                    } else {

                        if (typeof android !== 'undefined') {
                            android.loginSuccess('登入成功');
                        }
                        if (typeof window.webkit !== 'undefined') {
                            if(typeof window.webkit.messageHandlers !== 'undefined'){
                                window.webkit.messageHandlers.bridge.postMessage('loginSuccess')
                                window.webkit.messageHandlers.bridge.postMessage('finishload')
                            }
                        }

                    }

                } else {
                    if (typeof android !== 'undefined') {
                        android.loginFail('账户名或密码有错，请重新输入');
                    }
                    if (typeof window.webkit !== 'undefined') {
                        if(typeof window.webkit.messageHandlers !== 'undefined'){
                            window.webkit.messageHandlers.bridge.postMessage('loginFail')
                            window.webkit.messageHandlers.bridge.postMessage('finishload')
                        }
                    }
                }
            }
        */

        _AccountService.refreshCsrf(function (csrf) {
            $.post("/login",
                {
                    username: _username,
                    password: _password,
                    _csrf: csrf

                }, function (data, status) {

                    if (status === "success") {

                        var errSplit = data.split('_errorMsg"');
                        if (errSplit.length > 1) {

                            var errorMsg = errSplit[1].match(/ value="([a-zA-Z ]+)"/)[1];
                            if (errorMsg === 'ip lock') {
                                if (typeof android !== 'undefined') {
                                    android.loginFail('阁下网路位址已被锁定，请稍后再试');
                                }
                                if (typeof window.webkit !== 'undefined') {
                                    if (typeof window.webkit.messageHandlers !== 'undefined') {
                                        window.webkit.messageHandlers.bridge.postMessage('loginFail')
                                    }
                                }
                            } else if (errorMsg === 'In Maintenance') {
                                if (typeof android !== 'undefined') {
                                    android.loginFail('系统维护中');
                                }
                                if (typeof window.webkit !== 'undefined') {
                                    if (typeof window.webkit.messageHandlers !== 'undefined') {
                                        window.webkit.messageHandlers.bridge.postMessage('loginFail')
                                    }
                                }
                            } else if (errorMsg === 'Username or password incorrect') {
                                if (typeof android !== 'undefined') {
                                    android.loginFail('账户名或密码有错，请重新输入');
                                }
                                if (typeof window.webkit !== 'undefined') {
                                    if (typeof window.webkit.messageHandlers !== 'undefined') {
                                        window.webkit.messageHandlers.bridge.postMessage('loginFail')
                                    }
                                }
                            } else if (errorMsg === 'User Account Locked') {
                                if (typeof android !== 'undefined') {
                                    android.loginFail('阁下已被锁定，请与客服联系');
                                }
                                if (typeof window.webkit !== 'undefined') {
                                    if (typeof window.webkit.messageHandlers !== 'undefined') {
                                        window.webkit.messageHandlers.bridge.postMessage('loginFail')
                                    }
                                }
                            }

                            $('#loginPanel').show();
                            $('#login-progress').hide();

                        } else {
                            
                            //refresh Csrf again
                            if (_reset) {

                                if (typeof android !== 'undefined') {
                                    console.log("loginSuccess")
                                    android.firstLoginSuccess('登入成功');
                                    android.hideLoading('end');
                                    location.reload();
                                }

                                if (typeof window.webkit !== 'undefined') {
                                    if (typeof window.webkit.messageHandlers !== 'undefined') {
                                        window.webkit.messageHandlers.bridge.postMessage('loginSuccess')
                                    }
                                }

                            } else {

                                if (typeof android !== 'undefined') {
                                    console.log("loginSuccess no reset")
                                    android.loginSuccess('登入成功');
                                    android.hideLoading('end');
                                    location.reload();
                                }

                                if (typeof window.webkit !== 'undefined') {
                                    if (typeof window.webkit.messageHandlers !== 'undefined') {
                                        window.webkit.messageHandlers.bridge.postMessage('loginSuccess')
                                        window.webkit.messageHandlers.bridge.postMessage('finishload')
                                        window.webkit.messageHandlers.bridge.postMessage('reloadNow')
                                    }
                                }

                            }
                            _AccountService.refreshCsrf();

                        }

                        window.isLoggedOn = true;

                    } else {

                        if (typeof android !== 'undefined') {
                            android.loginFail('系统维护中');
                        }

                        if (typeof window.webkit !== 'undefined') {
                            if (typeof window.webkit.messageHandlers !== 'undefined') {
                                window.webkit.messageHandlers.bridge.postMessage('systemFail')
                            }
                        }

                    }
                }
            );
        });
    }

    _AccountService.refreshCsrf = function (callback) {

        $.get("/csrf", function (data, status) {
            var csrf = data.split('_csrf')[1].split('"')[2],
                username = data.split('_username')[1].split('"')[2];

            _AccountService.setCsrf(csrf);
            _AccountService.setUsername(username);

            if (typeof callback === 'function') {
                callback(csrf);
            }
        });

    }
})()