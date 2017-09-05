
var isiosBridgeExist = false;

if (window.webkit &&
    window.webkit.messageHandlers &&
    window.webkit.messageHandlers.bridge
) {
    isiosBridgeExist = true;
}

function showLoading() {
    document.getElementById("loading").style.display = "block";
    if (typeof android !== 'undefined') {
        _AccountService.onoff();
        android.showLoading('start');
    }
    if (isiosBridgeExist) {
        window.webkit.messageHandlers.bridge.postMessage('startload')
    }
}

function hideLoading() {
    setTimeout(function () {
        document.getElementById("loading").style.display = "none";
        if (typeof android !== 'undefined') {
            android.hideLoading('end');
        }
        if (isiosBridgeExist) {
            window.webkit.messageHandlers.bridge.postMessage('startload')
        }
    }, 640);
}

var fetching = false;

function getFetching() {
    return fetching;
}

function setFetching(val) {
    fetching = val;
}

function getLoadingStatus() {
    return document.getElementById("loading").style.display;
}

function setMenuBackground(id) {
    if (document.getElementById(id)) document.getElementById(id).style.display = "block";
    if (document.getElementById(id)) document.getElementById(id).onclick = function () {
        hideMenu("rightMenu");
        rightMenuAction.close();
    };
}

function hideMenuBackground(id) {
    if (document.getElementById(id)) document.getElementById(id).style.display = "none";
}

function showMenu(id) {
    //alert('showMenu:' + id);
    if (id === "rightMenu") {
        setMenuBackground("rightMenuBackground");
        setMenuBackground("rightMenuBackgroundLogout");
    }
    document.getElementById(id).style.display = "block";
}

function hideMenu(id) {
    //alert('hideMenu:' + id);
    if (id === "rightMenu") {
        hideMenuBackground("rightMenuBackground");
        hideMenuBackground("rightMenuBackgroundLogout");
        rightMenuAction.close();
    }
    document.getElementById(id).style.display = "none";
}

function scrollTopWhenLoad() {
    {/****    for both new and old browsers     ****/ }
    window.pageYOffset = 0;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    jQuery(document).ready(function () {
        jQuery(window).scrollTop(0);
    });

}

function scrollToPositionWhenLoad(height) {
    {/****    for both new and old browsers     ****/ }
    window.pageYOffset = height;
    document.documentElement.scrollTop = height;
    document.body.scrollTop = height;
    jQuery(document).ready(function () {
        jQuery(window).scrollTop(height);
    });

}

function getScrollHeight() {
    /****    for both new and old browsers     ****/
    return document.body.scrollTop;
}

var betFormAction = {};
(function () {
    var lastScrollTop = 0;
    betFormAction.open = function () {
        lastScrollTop = document.body.scrollTop;
        document.body.classList.add('noscrolling');
    }

    betFormAction.close = function () {
        document.body.classList.remove('noscrolling');
        document.body.scrollTop = lastScrollTop;
    }
})();

function leftMenuRegister() {
    jQuery(document).ready(function () {
        jQuery(".left-menu-item").on("click", function () {
            jQuery(".left-menu-item").removeClass("left-menu-item-chosen");
            jQuery(this).addClass("left-menu-item-chosen");
        });
    });
}


var leftMenuAction = {};
(function () {
    var lastScrollTop = 0;
    leftMenuAction.open = function () {
        lastScrollTop = document.body.scrollTop;
        document.body.style.overflowY = "hidden";
        document.body.style.position = "fixed";
        document.body.style.marginTop = "-" + lastScrollTop + "px";
        document.getElementById('leftMenuBackgroundId').ontouchmove = function (e) { e.preventDefault() };
        leftMenuRegister();
    }

    leftMenuAction.close = function () {
        document.body.style.overflowY = "scroll";
        document.body.style.position = "";
        document.body.style.marginTop = "0";
        document.body.scrollTop = lastScrollTop;
    }
})();

var rightMenuAction = {};
(function () {
    var lastScrollTop = 0;
    rightMenuAction.open = function () {
        document.body.classList.add('noscrolling');
    }

    rightMenuAction.close = function () {
        document.body.classList.remove('noscrolling');
    }
})();

function changeBetFormBettingValueFrame(frameNameNum, frameNameId, focusStatus) {
    var frameName = '.betform-Duck' + frameNameNum + frameNameId;
    var canWinText = '.betform-Turtle' + frameNameNum + frameNameId;
    console.log(frameName);
    console.log(canWinText);
    if (focusStatus) {
        jQuery(document).ready(function () {
            jQuery('.betting-value').parent(frameName).addClass('betform-betting-value-frame-color');
            jQuery(canWinText).addClass('betform-betting-value-text-color');
        });
    } else {
        jQuery(document).ready(function () {
            jQuery('.betting-value').parent(frameName).removeClass('betform-betting-value-frame-color');
            jQuery(canWinText).removeClass('betform-betting-value-text-color');
        });
    }
}

var topMenuAction = {};
(function () {
    topMenuAction.open = function () {
        if (document.getElementById("sportTopMenu")) document.getElementById("sportTopMenu").style.top = '104px';
        if (document.getElementById("mobileTopMenuGameApiFrame")) document.getElementById("mobileTopMenuGameApiFrame").style.visibility = 'visible';
        if (document.getElementById("mobileTopMenuGameApiFrame")) document.getElementById("mobileTopMenuGameApiFrame").style.marginTop = '-51px';
        if (document.getElementById("mobileTopMenuGameApiFrame")) document.getElementById("mobileTopMenuGameApiFrame").style.marginBottom = '50px';
        if (document.getElementById("mobileSpace1")) document.getElementById("mobileSpace1").style.height = '106px';
        if (document.getElementById("mobileSpace2")) document.getElementById("mobileSpace2").style.height = '0px';
        if (document.getElementById("sportTopMenu")) $("#sportTopMenu").addClass("sport-topmenu-login");
        if (document.getElementById("mainSportTopMenu")) $("#mainSportTopMenu").removeClass("mainSport-topmenu-height");
    }
    topMenuAction.close = function () {
        if (document.getElementById("mobileTopMenuGameApiFrame")) document.getElementById("mobileTopMenuGameApiFrame").style.visibility = 'hidden';
        if (document.getElementById("mobileTopMenuGameApiFrame")) document.getElementById("mobileTopMenuGameApiFrame").style.marginTop = '';
        if (document.getElementById("mobileTopMenuGameApiFrame")) document.getElementById("mobileTopMenuGameApiFrame").style.marginBottom = '';
        if (document.getElementById("mobileSpace1")) document.getElementById("mobileSpace1").style.height = '0px';
        if (document.getElementById("mobileSpace2")) document.getElementById("mobileSpace2").style.height = '54px';
        if (document.getElementById("sportTopMenu")) $("#sportTopMenu").removeClass("sport-topmenu-login");
        if (document.getElementById("mainSportTopMenu")) $("#mainSportTopMenu").addClass("mainSport-topmenu-height");

    }
})();

/* begin: disable double click to zoom */
// function placeHolderFunction() {
//     jQuery(document).ready(function () {
//     });
//     return;
// }
//
// function loadEmptyFunction() {
//
//     jQuery(document).ready(function () {
//         jQuery("*").on('touchstart', function () {
//             placeHolderFunction();
//
//         });
//     });
// }
//
// /* run once when page loads */
// loadEmptyFunction();
//
//
// function placeHolderFunctionBetForm() {
//     jQuery(document).ready(function () {
//     });
//     return;
// }
//
// function loadEmptyFunctionInBetForm() {
//     jQuery(document).ready(function () {
//         jQuery(".disable-doubleClickZoom").on('touchstart click', function () {
//             placeHolderFunctionBetForm();
//         });
//     });
// }
/* end: disable double click to zoom */




/* begins: time utils */

function getHKCurrentTime() {
    var nowTimeStr = new Date().toLocaleString("en-US", { timeZone: "Asia/Hong_Kong" });
    return new Date(nowTimeStr);
}

function appendHKTimeOffset(str) {
    return str + '+08:00';
}

/* ends:  time utils*/


function scrollDownIdentifier1Offset() {
    if (jQuery("#scrollDownIdentifier1").length) {
        return jQuery("#scrollDownIdentifier1").offset().top;
    } else {
        return false;
    }
}

function hideLeftRightAnimationArrow() {
    if (jQuery("#fbdAnimation").length) {
        var insideAnimation = jQuery('#fbdAnimation').contents();
        insideAnimation.find(".bg-pager-left-arrow").css("position", "fixed");
        insideAnimation.find(".bg-pager-left-arrow").css("width", "1px");
        insideAnimation.find(".bg-pager-left-arrow").css("height", "1px");
        insideAnimation.find(".bg-pager-left-arrow").css("overflow", "hidden");
        insideAnimation.find(".bg-pager-right-arrow").css("position", "fixed");
        insideAnimation.find(".bg-pager-right-arrow").css("width", "1px");
        insideAnimation.find(".bg-pager-right-arrow").css("height", "1px");
        insideAnimation.find(".bg-pager-right-arrow").css("overflow", "hidden");
        insideAnimation.find("body").css("-webkit-tap-highlight-color", "rgba(255, 255, 255, 0.0)");

    }
    return;
}

function restoreLeftRightAnimationArrow() {
    if (jQuery("#fbdAnimation").length) {
        var insideAnimation = jQuery('#fbdAnimation').contents();
        insideAnimation.find(".bg-pager-left-arrow").css("position", "absolute");
        insideAnimation.find(".bg-pager-left-arrow").css("width", "44px");
        insideAnimation.find(".bg-pager-left-arrow").css("height", "188px");
        insideAnimation.find(".bg-pager-left-arrow").css("overflow", "visible");
        insideAnimation.find(".bg-pager-right-arrow").css("position", "absolute");
        insideAnimation.find(".bg-pager-right-arrow").css("width", "44px");
        insideAnimation.find(".bg-pager-right-arrow").css("height", "188px");
        insideAnimation.find(".bg-pager-right-arrow").css("overflow", "visible");

    }
    return;
}


function fbdResizableBoxRestore() {
    jQuery(document).ready(function () {
        if (jQuery("#fbdResizableBox").length) {
            jQuery("#fbdResizableBox").removeClass("fbd-resizableBox");
            jQuery("#fbdResizableBox").removeClass("fbd-resizableBox-fullwidth");
            jQuery("#fbdResizableBox").removeClass("fbd-resizableBox-restoreWidth");
            jQuery("#fbdResizableBox").addClass("fbd-resizableBox-first");
            jQuery("#fbdResizableBox").css("background-color", "rgb(45, 45, 45)");

            restoreLeftRightAnimationArrow();
        }
    });

}


function fbdResizableBoxRestoreWidth(w) {
    jQuery(document).ready(function () {
        if (jQuery("#fbdResizableBox").length) {
            jQuery("#fbdResizableBox").removeClass("fbd-resizableBox");
            jQuery("#fbdResizableBox").addClass("fbd-resizableBox-restoreWidth");
            jQuery("#fbdResizableBox").css("background-color", "rgb(45, 45, 45)");

            restoreLeftRightAnimationArrow();
        }
    });

}


function fbdResizableBoxFullWidth() {
    jQuery(document).ready(function () {

        if (jQuery("#fbdResizableBox").length) {
            jQuery("#fbdAnimation").addClass("fbd-animation");
            jQuery("#fbdResizableBox").removeClass("fbd-resizableBox-first");
            jQuery("#fbdResizableBox").addClass("fbd-resizableBox-fullwidth");
            jQuery("#fbdResizableBox").css("background-color", "rgb(45, 45, 45)");

            hideLeftRightAnimationArrow();
        }
    });
}

function fbdResizableBoxShrinks() {
    jQuery(document).ready(function () {
        if (jQuery("#fbdResizableBox").length) {
            jQuery("#fbdAnimation").addClass("fbd-animation");
            jQuery("#fbdResizableBox").removeClass("fbd-resizableBox-first");
            jQuery("#fbdResizableBox").removeClass("fbd-resizableBox-fullwidth");
            jQuery("#fbdResizableBox").css("height", "");
            jQuery("#fbdResizableBox").addClass("fbd-resizableBox");
            jQuery("#fbdResizableBox").css("background-color", "rgb(45, 45, 45)");

            hideLeftRightAnimationArrow();
        }
    });
}


function fbdResizableBoxDefault() {

    jQuery(document).ready(function () {
        if (jQuery("#fbdResizableBox").length) {
            jQuery("#fbdAnimation").removeClass("fbd-animation");
            jQuery("#fbdResizableBox").removeClass("fbd-resizableBox");
            jQuery("#fbdResizableBox").removeClass("fbd-resizableBox-fullwidth");
            jQuery("#fbdResizableBox").addClass("fbd-resizableBox-first");
            jQuery("#fbdAnimation").css("margin-top", "-2px");
            jQuery('#fbdAnimation').contents().find('body').css("background-color", "rgb(55, 54, 54)");
            jQuery('#fbdAnimation').contents().find('#main').css("background-color", "rgb(55, 54, 54)");
            jQuery('#fbdAnimation').contents().find('.bg-dec-tab').on("click", function () {
                jQuery('#fbdAnimation').contents().find('body').css("background-color", "rgb(55, 54, 54)");
                jQuery('#fbdAnimation').contents().find('#main').css("background-color", "rgb(55, 54, 54)");
                jQuery('#fbdAnimation').contents().find('.bg-dec-tab').css("background-color", "rgb(55, 54, 54)");
                jQuery('#fbdAnimation').contents().find('ul').css("background-color", "rgb(55, 54, 54)");
                jQuery('#fbdAnimation').contents().find('li').css("background-color", "rgb(55, 54, 54)");
                jQuery('#fbdAnimation').css("border-bottom", "25px solid rgb(55, 54, 54)");
            });

            restoreLeftRightAnimationArrow();
        }
    });
}

function resetIconTextColor(id) {
    if (jQuery(id).length) {
        jQuery(id).css("color", "#b4b4b4");
    }

}

function colorIconText(id) {
    jQuery(document).ready(function () {
        resetIconTextColor('#subMenuSportIconText');
        resetIconTextColor('#subMenuLiveCasinoIconText');
        resetIconTextColor('#subMenuCasinoIconText');
    });

}


function listenRightMenuRow2() {
    jQuery(".right-menu-row2").on('touchstart click', function () {
        jQuery(".right-menu-row3").css("border-bottom", "");
        jQuery(this).find(".right-menu-row3").css("border-bottom", "2px solid #ff9200");
        jQuery(".right-menu-row2").removeClass('right-menu-item-chosen');
        jQuery(this).addClass('right-menu-item-chosen');
    });
}

function nx00a0() {
    /* debug only */
    /* leave me empty */
}

function setOverlayClicked() {
    jQuery(document).ready(function () {
        jQuery("body").append("<div id='front-index-overlay' class='front-index-overlay'>&#00a0</div>");
        jQuery("#front-index-overlay").on('click', function () {
            jQuery("#front-index-overlay").css('display', 'none');
            window.location.href = '/front-index';
        });

    });
}

jQuery(document).ready(function () {
    jQuery(".front-small-box").on('click', function () {
        window.setOverlayClicked();
    });
    jQuery(".front-big-box").on('click', function () {
        window.setOverlayClicked();
    });

});

var betFormPop = false;

function getBetFormPop() {
    return betFormPop;
}

function setBetFormPop(val) {
    betFormPop = val;
}

function tutorialClick(id) {
    jQuery(document).ready(function () {
        if (jQuery('#' + id).length) {
            jQuery('#' + id).toggleClass('tutorial-display');
        }
        if (jQuery('#' + id + 'Text').length) {
            var tempTextTutorial = jQuery('#' + id + 'Text').text();
            jQuery('#' + id + 'Text').html('');
            if (tempTextTutorial.substring(0, 1) === '+') {
                jQuery('#' + id + 'Text').text(tempTextTutorial.replace('+', '-'));
                jQuery('#' + id + 'Text').addClass('tutorial-text-color');
            }
            if (tempTextTutorial.substring(0, 1) === '-') {
                jQuery('#' + id + 'Text').text(tempTextTutorial.replace('-', '+'));
                jQuery('#' + id + 'Text').removeClass('tutorial-text-color');
            }
        }
    });
}

function getZeroIfNotPosNum(val){
    if ((val < 0) || (val === null) || (val === undefined) ||
         isNaN(val) || (val === '') ){
               return 0;
    }
    return val;
}
