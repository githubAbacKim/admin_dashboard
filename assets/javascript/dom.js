// POP OVER
document.addEventListener('DOMContentLoaded', function () {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
});

// easy-time-picker-bootstrap
// document.addEventListener('DOMContentLoaded', function () {
//     jQuery('#start_time, #end_time').timepicker({});
// });

/** PASSWORD TOGGLE */
$(function () {
    var input = $('#login_password');
    var icon = $('#password_icon');
    var btn = $('#password_toggle');

    btn.on('click', function (){
        if (icon.hasClass('fa-eye')) {
            icon.removeClass('fa-eye').addClass('fa-eye-slash');
            input.attr("type", "text");
        } else if (icon.hasClass('fa-eye-slash')) {
            icon.removeClass('fa-eye-slash').addClass('fa-eye');
            input.attr("type", "password");
        }
    })
});

/** TEXTAREA AUTO CHANGE HEIGHT **/
$(function () {
    $("textarea")
    .each(function () {
        this.setAttribute(
            "style",
            "height:" + this.scrollHeight + "px;overflow-y:hidden;"
        );
    })
    .on("input", function () {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
    });
});

/** DASHBOARD SIDE NAVBAR CLASS MEDIA QUERY TOOLTIP ARRANGEMENT **/
$(function () {
    /** MEDIA QUIERY */
    function mdWindowWidth(md) {
        if (md.matches) {
            $('[data-bs-toggle="tooltip"]').tooltip("enable");
            $('#btn-toggle-collapse').addClass('d-none');
            $('#btn-toggle-collapse').removeClass('d-flex');
        }
    }

    function md_upWindowWidth(md_up) {
        if (md_up.matches) {
            $('[data-bs-toggle="tooltip"]').tooltip("disable");
            $('#btn-toggle-collapse').addClass('d-flex');
            $('#btn-toggle-collapse').removeClass('d-none');
        }
    }
    var md = window.matchMedia("(max-width: 768px)");
    var md_up = window.matchMedia("(min-width: 769px)");

    mdWindowWidth(md); // Call listener function at run time
    md_upWindowWidth(md_up); // Call listener function at run time

    md.addListener(mdWindowWidth); // Attach listener function on state changes
    md_up.addListener(md_upWindowWidth); // Attach listener function on state changes
});

/** DASHBOARD MENU TOGGLE MIN-MAX **/
$(function () {
    $("#btn-toggle-collapse").click(function () {
        if ($("#side-navbar").hasClass("min")) {
            $("#side-navbar").removeClass("min").addClass("max");
            $("#header").removeClass("min").addClass("max");
            $("#main-content").removeClass("min").addClass("max");
            $("#icon-collapse").removeClass("fa-chevron-right").addClass("fa-chevron-left");
            $("#btn-toggle-collapse").removeClass("min").addClass("max");

            $('[data-bs-toggle="tooltip"]').tooltip("disable");

        } else if ($("#side-navbar").hasClass("max")) {
            $("#side-navbar").removeClass("max").addClass("min");
            $("#header").removeClass("max").addClass("min");
            $("#main-content").removeClass("max").addClass("min");
            $("#icon-collapse").removeClass("fa-chevron-left").addClass("fa-chevron-right");
            $("#btn-toggle-collapse").removeClass("max").addClass("min");
            $('[data-bs-toggle="tooltip"]').tooltip("enable");
        }
    });

});

/** TOOLTIP FOR SIDE BAR BUTTONS**/
$(function () {
    function tooltips() {
        if (($("#side-navbar").hasClass("max")) && ($("#main-content").hasClass("max"))) {
            $('[data-bs-toggle="tooltip"]').tooltip("disable");
            
        } 
        else if (($("#side-navbar").hasClass("min")) && ($("#main-content").hasClass("min"))) {
            $('[data-bs-toggle="tooltip"]').tooltip("enable");
        }
    }
    tooltips(); // Call listener function at run time
});

/** TOOLTIP FOR PROGRESS BAR */
$(function () {
    $('[data-bs-toggle="tooltip-progress"]').tooltip("enable");
});




$(function () {
    $('.profile-lists a:last-child').addClass('pe-4');
});


/** SIDEBAR BUTTON FUNCTIONS  **/
$(function () {
    // HOME PAGE
    $("#home_btn").click(function () {
        if ($("#home_page").hasClass("d-none")) {
            $("#home_page").addClass("d-block").removeClass("d-none");

            // check_page1('home_page');
            check_page1('profile_page');
            check_page2('viewallcontracts_page','viewallcontracts_btn');
            check_page2('contractwriting_page', 'contractwriting_btn');
            check_page2('orderstatus_page', 'orderstatus_btn');
            check_page2('ordermanagement_page', 'ordermanagement_btn');
            check_page2('filemanagement_page', 'filemanagement_btn');
            check_page2('onlinefair_page', 'onlinefair_btn');
            check_page2('fairmanagement_page', 'fairmanagement_btn');
            check_page2('paymentrequestmanagement_page', 'paymentrequestmanagement_btn');
            check_page2('servicemanagement_page', 'servicemanagement_btn');
            check_page2('sendphotos_page', 'sendphotos_btn');
            check_page2('technicianmanagement_page', 'technicianmanagement_btn');
            check_page2('contract_page', 'contract_btn');
            check_page2('consulting_page', 'consulting_btn');
            check_page2('cardusagehistory_page', 'cardusagehistory_btn');
            check_page2('master_page', 'master_btn');
            check_page1('superadmin_page');
            check_accordion2('orderstatus_page', 'ordermanagement_page', 'order_btn', 'order_collapse');
            check_accordion2('onlinefair_page', 'fairmanagement_page', 'fair_btn', 'fair_collapse');
            check_accordion4('paymentrequestmanagement_page', 'servicemanagement_page', 'sendphotos_page', 'technicianmanagement_page', 'settings_btn', 'settings_collapse');
            check_accordion4('contract_page', 'consulting_page', 'cardusagehistory_page', 'master_page', 'menu_btn', 'menu_collapse');
        }
    })

    // PROFILE PAGE
    $("#profile_btn").click(function () {
        if ($("#profile_page").hasClass("d-none")) {
            $("#profile_page").addClass("d-block").removeClass("d-none");

            check_page1('home_page');
            // check_page1('profile_page');
            check_page2('viewallcontracts_page', 'viewallcontracts_btn');
            check_page2('contractwriting_page', 'contractwriting_btn');
            check_page2('orderstatus_page', 'orderstatus_btn');
            check_page2('ordermanagement_page', 'ordermanagement_btn');
            check_page2('filemanagement_page', 'filemanagement_btn');
            check_page2('onlinefair_page', 'onlinefair_btn');
            check_page2('fairmanagement_page', 'fairmanagement_btn');
            check_page2('paymentrequestmanagement_page', 'paymentrequestmanagement_btn');
            check_page2('servicemanagement_page', 'servicemanagement_btn');
            check_page2('sendphotos_page', 'sendphotos_btn');
            check_page2('technicianmanagement_page', 'technicianmanagement_btn');
            check_page2('contract_page', 'contract_btn');
            check_page2('consulting_page', 'consulting_btn');
            check_page2('cardusagehistory_page', 'cardusagehistory_btn');
            check_page2('master_page', 'master_btn');
            check_page1('superadmin_page');
            check_accordion2('orderstatus_page', 'ordermanagement_page', 'order_btn', 'order_collapse');
            check_accordion2('onlinefair_page', 'fairmanagement_page', 'fair_btn', 'fair_collapse');
            check_accordion4('paymentrequestmanagement_page', 'servicemanagement_page', 'sendphotos_page', 'technicianmanagement_page', 'settings_btn', 'settings_collapse');
            check_accordion4('contract_page', 'consulting_page', 'cardusagehistory_page', 'master_page', 'menu_btn', 'menu_collapse');
        }
    })

    // VIEW ALL CONTRACTS PAGE
    $("#viewallcontracts_btn").click(function () {
        if ($("#viewallcontracts_page").hasClass("d-none")) {
            $("#viewallcontracts_page").addClass("d-block").removeClass("d-none");
            $("#viewallcontracts_btn").addClass('active');

            check_page1('home_page');
            check_page1('profile_page');
            // check_page2('viewallcontracts_page', 'viewallcontracts_btn');
            check_page2('contractwriting_page', 'contractwriting_btn');
            check_page2('orderstatus_page', 'orderstatus_btn');
            check_page2('ordermanagement_page', 'ordermanagement_btn');
            check_page2('filemanagement_page', 'filemanagement_btn');
            check_page2('onlinefair_page', 'onlinefair_btn');
            check_page2('fairmanagement_page', 'fairmanagement_btn');
            check_page2('paymentrequestmanagement_page', 'paymentrequestmanagement_btn');
            check_page2('servicemanagement_page', 'servicemanagement_btn');
            check_page2('sendphotos_page', 'sendphotos_btn');
            check_page2('technicianmanagement_page', 'technicianmanagement_btn');
            check_page2('contract_page', 'contract_btn');
            check_page2('consulting_page', 'consulting_btn');
            check_page2('cardusagehistory_page', 'cardusagehistory_btn');
            check_page2('master_page', 'master_btn');
            check_page1('superadmin_page');
            check_accordion2('orderstatus_page', 'ordermanagement_page', 'order_btn', 'order_collapse');
            check_accordion2('onlinefair_page', 'fairmanagement_page', 'fair_btn', 'fair_collapse');
            check_accordion4('paymentrequestmanagement_page', 'servicemanagement_page', 'sendphotos_page', 'technicianmanagement_page', 'settings_btn', 'settings_collapse');
            check_accordion4('contract_page', 'consulting_page', 'cardusagehistory_page', 'master_page', 'menu_btn', 'menu_collapse');
            setDefault_viewallcontracts();
        }
    })

    // CONTRACT WRITING PAGE
    $("#contractwriting_btn").click(function () {
        if ($("#contractwriting_page").hasClass("d-none")) {
            $("#contractwriting_page").addClass("d-block").removeClass("d-none");
            $("#contractwriting_btn").addClass('active');

            check_page1('home_page');
            check_page1('profile_page');
            check_page2('viewallcontracts_page', 'viewallcontracts_btn');
            // check_page2('contractwriting_page', 'contractwriting_btn');
            check_page2('orderstatus_page', 'orderstatus_btn');
            check_page2('ordermanagement_page', 'ordermanagement_btn');
            check_page2('filemanagement_page', 'filemanagement_btn');
            check_page2('onlinefair_page', 'onlinefair_btn');
            check_page2('fairmanagement_page', 'fairmanagement_btn');
            check_page2('paymentrequestmanagement_page', 'paymentrequestmanagement_btn');
            check_page2('servicemanagement_page', 'servicemanagement_btn');
            check_page2('sendphotos_page', 'sendphotos_btn');
            check_page2('technicianmanagement_page', 'technicianmanagement_btn');
            check_page2('contract_page', 'contract_btn');
            check_page2('consulting_page', 'consulting_btn');
            check_page2('cardusagehistory_page', 'cardusagehistory_btn');
            check_page2('master_page', 'master_btn');
            check_page1('superadmin_page');
            check_accordion2('orderstatus_page', 'ordermanagement_page', 'order_btn', 'order_collapse');
            check_accordion2('onlinefair_page', 'fairmanagement_page', 'fair_btn', 'fair_collapse');
            check_accordion4('paymentrequestmanagement_page', 'servicemanagement_page', 'sendphotos_page', 'technicianmanagement_page', 'settings_btn', 'settings_collapse');
            check_accordion4('contract_page', 'consulting_page', 'cardusagehistory_page', 'master_page', 'menu_btn', 'menu_collapse');
        }
    })

    // ORDER STATUS PAGE
    $("#orderstatus_btn").click(function () {
        if ($("#orderstatus_page").hasClass("d-none")) {
            $("#orderstatus_page").addClass("d-block").removeClass("d-none");
            $("#orderstatus_btn").addClass('active');

            check_page1('home_page');
            check_page1('profile_page');
            check_page2('viewallcontracts_page', 'viewallcontracts_btn');
            check_page2('contractwriting_page', 'contractwriting_btn');
            // check_page2('orderstatus_page', 'orderstatus_btn');
            check_page2('ordermanagement_page', 'ordermanagement_btn');
            check_page2('filemanagement_page', 'filemanagement_btn');
            check_page2('onlinefair_page', 'onlinefair_btn');
            check_page2('fairmanagement_page', 'fairmanagement_btn');
            check_page2('paymentrequestmanagement_page', 'paymentrequestmanagement_btn');
            check_page2('servicemanagement_page', 'servicemanagement_btn');
            check_page2('sendphotos_page', 'sendphotos_btn');
            check_page2('technicianmanagement_page', 'technicianmanagement_btn');
            check_page2('contract_page', 'contract_btn');
            check_page2('consulting_page', 'consulting_btn');
            check_page2('cardusagehistory_page', 'cardusagehistory_btn');
            check_page2('master_page', 'master_btn');
            check_page1('superadmin_page');
            check_accordion2('orderstatus_page', 'ordermanagement_page', 'order_btn', 'order_collapse');
            check_accordion2('onlinefair_page', 'fairmanagement_page', 'fair_btn', 'fair_collapse');
            check_accordion4('paymentrequestmanagement_page', 'servicemanagement_page', 'sendphotos_page', 'technicianmanagement_page', 'settings_btn', 'settings_collapse');
            check_accordion4('contract_page', 'consulting_page', 'cardusagehistory_page', 'master_page', 'menu_btn', 'menu_collapse');
        }
    })

    // ORDER MANAGEMENT PAGE
    $("#ordermanagement_btn").click(function () {
        if ($("#ordermanagement_page").hasClass("d-none")) {
            $("#ordermanagement_page").addClass("d-block").removeClass("d-none");
            $("#ordermanagement_btn").addClass('active');

            check_page1('home_page');
            check_page1('profile_page');
            check_page2('viewallcontracts_page', 'viewallcontracts_btn');
            check_page2('contractwriting_page', 'contractwriting_btn');
            check_page2('orderstatus_page', 'orderstatus_btn');
            // check_page2('ordermanagement_page', 'ordermanagement_btn');
            check_page2('filemanagement_page', 'filemanagement_btn');
            check_page2('onlinefair_page', 'onlinefair_btn');
            check_page2('fairmanagement_page', 'fairmanagement_btn');
            check_page2('paymentrequestmanagement_page', 'paymentrequestmanagement_btn');
            check_page2('servicemanagement_page', 'servicemanagement_btn');
            check_page2('sendphotos_page', 'sendphotos_btn');
            check_page2('technicianmanagement_page', 'technicianmanagement_btn');
            check_page2('contract_page', 'contract_btn');
            check_page2('consulting_page', 'consulting_btn');
            check_page2('cardusagehistory_page', 'cardusagehistory_btn');
            check_page2('master_page', 'master_btn');
            check_page1('superadmin_page');
            check_accordion2('orderstatus_page', 'ordermanagement_page', 'order_btn', 'order_collapse');
            check_accordion2('onlinefair_page', 'fairmanagement_page', 'fair_btn', 'fair_collapse');
            check_accordion4('paymentrequestmanagement_page', 'servicemanagement_page', 'sendphotos_page', 'technicianmanagement_page', 'settings_btn', 'settings_collapse');
            check_accordion4('contract_page', 'consulting_page', 'cardusagehistory_page', 'master_page', 'menu_btn', 'menu_collapse');
        }
    })

    // FILE MANAGEMENT PAGE
    $("#filemanagement_btn").click(function () {
        if ($("#filemanagement_page").hasClass("d-none")) {
            $("#filemanagement_page").addClass("d-block").removeClass("d-none");
            $("#filemanagement_btn").addClass('active');

            check_page1('home_page');
            check_page1('profile_page');
            check_page2('viewallcontracts_page', 'viewallcontracts_btn');
            check_page2('contractwriting_page', 'contractwriting_btn');
            check_page2('orderstatus_page', 'orderstatus_btn');
            check_page2('ordermanagement_page', 'ordermanagement_btn');
            // check_page2('filemanagement_page', 'filemanagement_btn');
            check_page2('onlinefair_page', 'onlinefair_btn');
            check_page2('fairmanagement_page', 'fairmanagement_btn');
            check_page2('paymentrequestmanagement_page', 'paymentrequestmanagement_btn');
            check_page2('servicemanagement_page', 'servicemanagement_btn');
            check_page2('sendphotos_page', 'sendphotos_btn');
            check_page2('technicianmanagement_page', 'technicianmanagement_btn');
            check_page2('contract_page', 'contract_btn');
            check_page2('consulting_page', 'consulting_btn');
            check_page2('cardusagehistory_page', 'cardusagehistory_btn');
            check_page2('master_page', 'master_btn');
            check_page1('superadmin_page');
            check_accordion2('orderstatus_page', 'ordermanagement_page', 'order_btn', 'order_collapse');
            check_accordion2('onlinefair_page', 'fairmanagement_page', 'fair_btn', 'fair_collapse');
            check_accordion4('paymentrequestmanagement_page', 'servicemanagement_page', 'sendphotos_page', 'technicianmanagement_page', 'settings_btn', 'settings_collapse');
            check_accordion4('contract_page', 'consulting_page', 'cardusagehistory_page', 'master_page', 'menu_btn', 'menu_collapse');
        }
    })

    // ONLINE FAIR PAGE
    $("#onlinefair_btn").click(function () {
        if ($("#onlinefair_page").hasClass("d-none")) {
            $("#onlinefair_page").addClass("d-block").removeClass("d-none");
            $("#onlinefair_btn").addClass('active');

            check_page1('home_page');
            check_page1('profile_page');
            check_page2('viewallcontracts_page', 'viewallcontracts_btn');
            check_page2('contractwriting_page', 'contractwriting_btn');
            check_page2('orderstatus_page', 'orderstatus_btn');
            check_page2('ordermanagement_page', 'ordermanagement_btn');
            check_page2('filemanagement_page', 'filemanagement_btn');
            // check_page2('onlinefair_page', 'onlinefair_btn');
            check_page2('fairmanagement_page', 'fairmanagement_btn');
            check_page2('paymentrequestmanagement_page', 'paymentrequestmanagement_btn');
            check_page2('servicemanagement_page', 'servicemanagement_btn');
            check_page2('sendphotos_page', 'sendphotos_btn');
            check_page2('technicianmanagement_page', 'technicianmanagement_btn');
            check_page2('contract_page', 'contract_btn');
            check_page2('consulting_page', 'consulting_btn');
            check_page2('cardusagehistory_page', 'cardusagehistory_btn');
            check_page2('master_page', 'master_btn');
            check_page1('superadmin_page');
            check_accordion2('orderstatus_page', 'ordermanagement_page', 'order_btn', 'order_collapse');
            check_accordion2('onlinefair_page', 'fairmanagement_page', 'fair_btn', 'fair_collapse');
            check_accordion4('paymentrequestmanagement_page', 'servicemanagement_page', 'sendphotos_page', 'technicianmanagement_page', 'settings_btn', 'settings_collapse');
            check_accordion4('contract_page', 'consulting_page', 'cardusagehistory_page', 'master_page', 'menu_btn', 'menu_collapse');
        }
    })

    // FAIR MANAGEMENT PAGE
    $("#fairmanagement_btn").click(function () {
        if ($("#fairmanagement_page").hasClass("d-none")) {
            $("#fairmanagement_page").addClass("d-block").removeClass("d-none");
            $("#fairmanagement_btn").addClass('active');

            // getConstructorData();
            // var url = 'http://210.99.223.38:8081/api/constructor/image';
            // getData(url)

            // getExhibitionData();

            check_page1('home_page');
            check_page1('profile_page');
            check_page2('viewallcontracts_page', 'viewallcontracts_btn');
            check_page2('contractwriting_page', 'contractwriting_btn');
            check_page2('orderstatus_page', 'orderstatus_btn');
            check_page2('ordermanagement_page', 'ordermanagement_btn');
            check_page2('filemanagement_page', 'filemanagement_btn');
            check_page2('onlinefair_page', 'onlinefair_btn');
            // check_page2('fairmanagement_page', 'fairmanagement_btn');
            check_page2('paymentrequestmanagement_page', 'paymentrequestmanagement_btn');
            check_page2('servicemanagement_page', 'servicemanagement_btn');
            check_page2('sendphotos_page', 'sendphotos_btn');
            check_page2('technicianmanagement_page', 'technicianmanagement_btn');
            check_page2('contract_page', 'contract_btn');
            check_page2('consulting_page', 'consulting_btn');
            check_page2('cardusagehistory_page', 'cardusagehistory_btn');
            check_page2('master_page', 'master_btn');
            check_page1('superadmin_page');
            check_accordion2('orderstatus_page', 'ordermanagement_page', 'order_btn', 'order_collapse');
            check_accordion2('onlinefair_page', 'fairmanagement_page', 'fair_btn', 'fair_collapse');
            check_accordion4('paymentrequestmanagement_page', 'servicemanagement_page', 'sendphotos_page', 'technicianmanagement_page', 'settings_btn', 'settings_collapse');
            check_accordion4('contract_page', 'consulting_page', 'cardusagehistory_page', 'master_page', 'menu_btn', 'menu_collapse');

            setDefault_fairmanagement();
        }
    })

    // PAYMENT REQUEST MANAGEMENT PAGE
    $("#paymentrequestmanagement_btn").click(function () {
        if ($("#paymentrequestmanagement_page").hasClass("d-none")) {
            $("#paymentrequestmanagement_page").addClass("d-block").removeClass("d-none");
            $("#paymentrequestmanagement_btn").addClass('active');

            check_page1('home_page');
            check_page1('profile_page');
            check_page2('viewallcontracts_page', 'viewallcontracts_btn');
            check_page2('contractwriting_page', 'contractwriting_btn');
            check_page2('orderstatus_page', 'orderstatus_btn');
            check_page2('ordermanagement_page', 'ordermanagement_btn');
            check_page2('filemanagement_page', 'filemanagement_btn');
            check_page2('onlinefair_page', 'onlinefair_btn');
            check_page2('fairmanagement_page', 'fairmanagement_btn');
            // check_page2('paymentrequestmanagement_page', 'paymentrequestmanagement_btn');
            check_page2('servicemanagement_page', 'servicemanagement_btn');
            check_page2('sendphotos_page', 'sendphotos_btn');
            check_page2('technicianmanagement_page', 'technicianmanagement_btn');
            check_page2('contract_page', 'contract_btn');
            check_page2('consulting_page', 'consulting_btn');
            check_page2('cardusagehistory_page', 'cardusagehistory_btn');
            check_page2('master_page', 'master_btn');
            check_page1('superadmin_page');
            check_accordion2('orderstatus_page', 'ordermanagement_page', 'order_btn', 'order_collapse');
            check_accordion2('onlinefair_page', 'fairmanagement_page', 'fair_btn', 'fair_collapse');
            check_accordion4('paymentrequestmanagement_page', 'servicemanagement_page', 'sendphotos_page', 'technicianmanagement_page', 'settings_btn', 'settings_collapse');
            check_accordion4('contract_page', 'consulting_page', 'cardusagehistory_page', 'master_page', 'menu_btn', 'menu_collapse');
        }
    })

    // SERVICE MANAGEMENT PAGE
    $("#servicemanagement_btn").click(function () {
        if ($("#servicemanagement_page").hasClass("d-none")) {
            $("#servicemanagement_page").addClass("d-block").removeClass("d-none");
            $("#servicemanagement_btn").addClass('active');

            check_page1('home_page');
            check_page1('profile_page');
            check_page2('viewallcontracts_page', 'viewallcontracts_btn');
            check_page2('contractwriting_page', 'contractwriting_btn');
            check_page2('orderstatus_page', 'orderstatus_btn');
            check_page2('ordermanagement_page', 'ordermanagement_btn');
            check_page2('filemanagement_page', 'filemanagement_btn');
            check_page2('onlinefair_page', 'onlinefair_btn');
            check_page2('fairmanagement_page', 'fairmanagement_btn');
            check_page2('paymentrequestmanagement_page', 'paymentrequestmanagement_btn');
            // check_page2('servicemanagement_page', 'servicemanagement_btn');
            check_page2('sendphotos_page', 'sendphotos_btn');
            check_page2('technicianmanagement_page', 'technicianmanagement_btn');
            check_page2('contract_page', 'contract_btn');
            check_page2('consulting_page', 'consulting_btn');
            check_page2('cardusagehistory_page', 'cardusagehistory_btn');
            check_page2('master_page', 'master_btn');
            check_page1('superadmin_page');
            check_accordion2('orderstatus_page', 'ordermanagement_page', 'order_btn', 'order_collapse');
            check_accordion2('onlinefair_page', 'fairmanagement_page', 'fair_btn', 'fair_collapse');
            check_accordion4('paymentrequestmanagement_page', 'servicemanagement_page', 'sendphotos_page', 'technicianmanagement_page', 'settings_btn', 'settings_collapse');
            check_accordion4('contract_page', 'consulting_page', 'cardusagehistory_page', 'master_page', 'menu_btn', 'menu_collapse');
        }
    })

    // SEND PHOTOS PAGE
    $("#sendphotos_btn").click(function () {
        if ($("#sendphotos_page").hasClass("d-none")) {
            $("#sendphotos_page").addClass("d-block").removeClass("d-none");
            $("#sendphotos_btn").addClass('active');

            check_page1('home_page');
            check_page1('profile_page');
            check_page2('viewallcontracts_page', 'viewallcontracts_btn');
            check_page2('contractwriting_page', 'contractwriting_btn');
            check_page2('orderstatus_page', 'orderstatus_btn');
            check_page2('ordermanagement_page', 'ordermanagement_btn');
            check_page2('filemanagement_page', 'filemanagement_btn');
            check_page2('onlinefair_page', 'onlinefair_btn');
            check_page2('fairmanagement_page', 'fairmanagement_btn');
            check_page2('paymentrequestmanagement_page', 'paymentrequestmanagement_btn');
            check_page2('servicemanagement_page', 'servicemanagement_btn');
            // check_page2('sendphotos_page', 'sendphotos_btn');
            check_page2('technicianmanagement_page', 'technicianmanagement_btn');
            check_page2('contract_page', 'contract_btn');
            check_page2('consulting_page', 'consulting_btn');
            check_page2('cardusagehistory_page', 'cardusagehistory_btn');
            check_page2('master_page', 'master_btn');
            check_page1('superadmin_page');
            check_accordion2('orderstatus_page', 'ordermanagement_page', 'order_btn', 'order_collapse');
            check_accordion2('onlinefair_page', 'fairmanagement_page', 'fair_btn', 'fair_collapse');
            check_accordion4('paymentrequestmanagement_page', 'servicemanagement_page', 'sendphotos_page', 'technicianmanagement_page', 'settings_btn', 'settings_collapse');
            check_accordion4('contract_page', 'consulting_page', 'cardusagehistory_page', 'master_page', 'menu_btn', 'menu_collapse');
        }
    })

    // TECHNICIAN MANAGEMENT PAGE
    $("#technicianmanagement_btn").click(function () {
        if ($("#technicianmanagement_page").hasClass("d-none")) {
            $("#technicianmanagement_page").addClass("d-block").removeClass("d-none");
            $("#technicianmanagement_btn").addClass('active');

            check_page1('home_page');
            check_page1('profile_page');
            check_page2('viewallcontracts_page', 'viewallcontracts_btn');
            check_page2('contractwriting_page', 'contractwriting_btn');
            check_page2('orderstatus_page', 'orderstatus_btn');
            check_page2('ordermanagement_page', 'ordermanagement_btn');
            check_page2('filemanagement_page', 'filemanagement_btn');
            check_page2('onlinefair_page', 'onlinefair_btn');
            check_page2('fairmanagement_page', 'fairmanagement_btn');
            check_page2('paymentrequestmanagement_page', 'paymentrequestmanagement_btn');
            check_page2('servicemanagement_page', 'servicemanagement_btn');
            check_page2('sendphotos_page', 'sendphotos_btn');
            // check_page2('technicianmanagement_page', 'technicianmanagement_btn');
            check_page2('contract_page', 'contract_btn');
            check_page2('consulting_page', 'consulting_btn');
            check_page2('cardusagehistory_page', 'cardusagehistory_btn');
            check_page2('master_page', 'master_btn');
            check_page1('superadmin_page');
            check_accordion2('orderstatus_page', 'ordermanagement_page', 'order_btn', 'order_collapse');
            check_accordion2('onlinefair_page', 'fairmanagement_page', 'fair_btn', 'fair_collapse');
            check_accordion4('paymentrequestmanagement_page', 'servicemanagement_page', 'sendphotos_page', 'technicianmanagement_page', 'settings_btn', 'settings_collapse');
            check_accordion4('contract_page', 'consulting_page', 'cardusagehistory_page', 'master_page', 'menu_btn', 'menu_collapse');
        }
    })

    // CONTRACT PAGE
    $("#contract_btn").click(function () {
        if ($("#contract_page").hasClass("d-none")) {
            $("#contract_page").addClass("d-block").removeClass("d-none");
            $("#contract_btn").addClass('active');

            check_page1('home_page');
            check_page1('profile_page');
            check_page2('viewallcontracts_page', 'viewallcontracts_btn');
            check_page2('contractwriting_page', 'contractwriting_btn');
            check_page2('orderstatus_page', 'orderstatus_btn');
            check_page2('ordermanagement_page', 'ordermanagement_btn');
            check_page2('filemanagement_page', 'filemanagement_btn');
            check_page2('onlinefair_page', 'onlinefair_btn');
            check_page2('fairmanagement_page', 'fairmanagement_btn');
            check_page2('paymentrequestmanagement_page', 'paymentrequestmanagement_btn');
            check_page2('servicemanagement_page', 'servicemanagement_btn');
            check_page2('sendphotos_page', 'sendphotos_btn');
            check_page2('technicianmanagement_page', 'technicianmanagement_btn');
            // check_page2('contract_page', 'contract_btn');
            check_page2('consulting_page', 'consulting_btn');
            check_page2('cardusagehistory_page', 'cardusagehistory_btn');
            check_page2('master_page', 'master_btn');
            check_page1('superadmin_page');
            check_accordion2('orderstatus_page', 'ordermanagement_page', 'order_btn', 'order_collapse');
            check_accordion2('onlinefair_page', 'fairmanagement_page', 'fair_btn', 'fair_collapse');
            check_accordion4('paymentrequestmanagement_page', 'servicemanagement_page', 'sendphotos_page', 'technicianmanagement_page', 'settings_btn', 'settings_collapse');
            check_accordion4('contract_page', 'consulting_page', 'cardusagehistory_page', 'master_page', 'menu_btn', 'menu_collapse');
        }
    })

    // CONSULTING PAGE
    $("#consulting_btn").click(function () {
        if ($("#consulting_page").hasClass("d-none")) {
            $("#consulting_page").addClass("d-block").removeClass("d-none");
            $("#consulting_btn").addClass('active');

            check_page1('home_page');
            check_page1('profile_page');
            check_page2('viewallcontracts_page', 'viewallcontracts_btn');
            check_page2('contractwriting_page', 'contractwriting_btn');
            check_page2('orderstatus_page', 'orderstatus_btn');
            check_page2('ordermanagement_page', 'ordermanagement_btn');
            check_page2('filemanagement_page', 'filemanagement_btn');
            check_page2('onlinefair_page', 'onlinefair_btn');
            check_page2('fairmanagement_page', 'fairmanagement_btn');
            check_page2('paymentrequestmanagement_page', 'paymentrequestmanagement_btn');
            check_page2('servicemanagement_page', 'servicemanagement_btn');
            check_page2('sendphotos_page', 'sendphotos_btn');
            check_page2('technicianmanagement_page', 'technicianmanagement_btn');
            check_page2('contract_page', 'contract_btn');
            // check_page2('consulting_page', 'consulting_btn');
            check_page2('cardusagehistory_page', 'cardusagehistory_btn');
            check_page2('master_page', 'master_btn');
            check_page1('superadmin_page');
            check_accordion2('orderstatus_page', 'ordermanagement_page', 'order_btn', 'order_collapse');
            check_accordion2('onlinefair_page', 'fairmanagement_page', 'fair_btn', 'fair_collapse');
            check_accordion4('paymentrequestmanagement_page', 'servicemanagement_page', 'sendphotos_page', 'technicianmanagement_page', 'settings_btn', 'settings_collapse');
            check_accordion4('contract_page', 'consulting_page', 'cardusagehistory_page', 'master_page', 'menu_btn', 'menu_collapse');
        }
    })

    // CARD USAGE HISTORY PAGE
    $("#cardusagehistory_btn").click(function () {
        if ($("#cardusagehistory_page").hasClass("d-none")) {
            $("#cardusagehistory_page").addClass("d-block").removeClass("d-none");
            $("#cardusagehistory_btn").addClass('active');

            check_page1('home_page');
            check_page1('profile_page');
            check_page2('viewallcontracts_page', 'viewallcontracts_btn');
            check_page2('contractwriting_page', 'contractwriting_btn');
            check_page2('orderstatus_page', 'orderstatus_btn');
            check_page2('ordermanagement_page', 'ordermanagement_btn');
            check_page2('filemanagement_page', 'filemanagement_btn');
            check_page2('onlinefair_page', 'onlinefair_btn');
            check_page2('fairmanagement_page', 'fairmanagement_btn');
            check_page2('paymentrequestmanagement_page', 'paymentrequestmanagement_btn');
            check_page2('servicemanagement_page', 'servicemanagement_btn');
            check_page2('sendphotos_page', 'sendphotos_btn');
            check_page2('technicianmanagement_page', 'technicianmanagement_btn');
            check_page2('contract_page', 'contract_btn');
            check_page2('consulting_page', 'consulting_btn');
            // check_page2('cardusagehistory_page', 'cardusagehistory_btn');
            check_page2('master_page', 'master_btn');
            check_page1('superadmin_page');
            check_accordion2('orderstatus_page', 'ordermanagement_page', 'order_btn', 'order_collapse');
            check_accordion2('onlinefair_page', 'fairmanagement_page', 'fair_btn', 'fair_collapse');
            check_accordion4('paymentrequestmanagement_page', 'servicemanagement_page', 'sendphotos_page', 'technicianmanagement_page', 'settings_btn', 'settings_collapse');
            check_accordion4('contract_page', 'consulting_page', 'cardusagehistory_page', 'master_page', 'menu_btn', 'menu_collapse');
        }
    })

    // MASTER PAGE
    $("#master_btn").click(function () {
        if ($("#master_page").hasClass("d-none")) {
            $("#master_page").addClass("d-block").removeClass("d-none");
            $("#master_btn").addClass('active');

            check_page1('home_page');
            check_page1('profile_page');
            check_page2('viewallcontracts_page', 'viewallcontracts_btn');
            check_page2('contractwriting_page', 'contractwriting_btn');
            check_page2('orderstatus_page', 'orderstatus_btn');
            check_page2('ordermanagement_page', 'ordermanagement_btn');
            check_page2('filemanagement_page', 'filemanagement_btn');
            check_page2('onlinefair_page', 'onlinefair_btn');
            check_page2('fairmanagement_page', 'fairmanagement_btn');
            check_page2('paymentrequestmanagement_page', 'paymentrequestmanagement_btn');
            check_page2('servicemanagement_page', 'servicemanagement_btn');
            check_page2('sendphotos_page', 'sendphotos_btn');
            check_page2('technicianmanagement_page', 'technicianmanagement_btn');
            check_page2('contract_page', 'contract_btn');
            check_page2('consulting_page', 'consulting_btn');
            check_page2('cardusagehistory_page', 'cardusagehistory_btn');
            // check_page2('master_page', 'master_btn');
            check_page1('superadmin_page');
            check_accordion2('orderstatus_page', 'ordermanagement_page', 'order_btn', 'order_collapse');
            check_accordion2('onlinefair_page', 'fairmanagement_page', 'fair_btn', 'fair_collapse');
            check_accordion4('paymentrequestmanagement_page', 'servicemanagement_page', 'sendphotos_page', 'technicianmanagement_page', 'settings_btn', 'settings_collapse');
            check_accordion4('contract_page', 'consulting_page', 'cardusagehistory_page', 'master_page', 'menu_btn', 'menu_collapse');
        }
    })

    // SUPER ADMIN PAGE
    $("#superadmin_btn").click(function () {
        if ($("#superadmin_page").hasClass('d-none')) {
            $('#superadmin_page').removeClass('d-none').addClass('d-block');

            check_page2('master_page', 'master_btn');
            check_accordion4('contract_page', 'consulting_page', 'cardusagehistory_page', 'master_page', 'menu_btn', 'menu_collapse');

            if ($('#master-01-card2').hasClass('d-flex')) {
                $('#master-01-card2').removeClass('d-flex').addClass('d-none');

            } else if ($('#master-01-card2').hasClass('d-none')) {
                // do nothing
            }
        }
    });
});

// navigations with the pages
$(function () {
    // 1.1
    $("#viewallcontracts-01_btn").click(function () {
        if ($("#viewallcontracts-01_div").hasClass("d-none")) {
            $("#viewallcontracts-01_div").addClass("d-flex").removeClass("d-none");
            $("#viewallcontracts-01_btn").addClass("active");
            $("#viewallcontracts_selectapartmentcomplex01_div").addClass("d-block").removeClass("d-none");

            check_div('viewallcontracts-02_div', 'viewallcontracts-02_btn', 'viewallcontracts_selectapartmentcomplex02_div');
            // check_div('viewallcontracts-02_div', 'viewallcontracts-02_btn', 'viewallcontracts_selectapartmentcomplex02_div');
            check_viewallcontracts03_div();
        }
    });

    // 1.2
    $("#viewallcontracts-02_btn").click(function () {
        if ($("#viewallcontracts-02_div").hasClass("d-none")) {
            $("#viewallcontracts-02_div").addClass("d-flex").removeClass("d-none");
            $("#viewallcontracts-02_btn").addClass("active");
            $("#viewallcontracts_selectapartmentcomplex02_div").addClass("d-block").removeClass("d-none");

            check_div('viewallcontracts-01_div', 'viewallcontracts-01_btn', 'viewallcontracts_selectapartmentcomplex01_div');
            check_viewallcontracts03_div();
        }
    });

    // 1.3
    $("#viewallcontracts-03_btn").click(function () {
        if ($("#viewallcontracts-03_div").hasClass("d-none")) {
            $("#viewallcontracts-03_div").addClass("d-flex").removeClass("d-none");
            $("#viewallcontracts-03_btn").addClass("active");

            check_div('viewallcontracts-01_div', 'viewallcontracts-01_btn', 'viewallcontracts_selectapartmentcomplex01_div');
            check_div('viewallcontracts-02_div', 'viewallcontracts-02_btn', 'viewallcontracts_selectapartmentcomplex02_div');
        }
    });

    // 5.1
    $("#fairmanagement-01_btn").click(function () {
        if ($("#fairmanagement-01_div").hasClass("d-none")) {
            $("#fairmanagement-01_div").addClass("d-flex").removeClass("d-none");
            $("#fairmanagement-01_btn").addClass("active");
            $('#fairmanagement-01_title').addClass("d-block").removeClass("d-none");

            check_div('fairmanagement-02_div', 'fairmanagement-02_btn', 'fairmanagement-02_title');
        }
    });

    // 5.1.1
    $("#switch_onlinefair").click(function () {
        if ($(this).is(":checked")) {
            $('#switch_label_top').removeClass('d-xxl-block').addClass('d-lg-block');
            $('#switch_onlinefair_time').removeClass('d-none').addClass('d-block');
        } else {
            $('#switch_label_top').removeClass('d-lg-block').addClass('d-xxl-block');
            $('#switch_onlinefair_time').removeClass('d-block').addClass('d-none');
        }
    });


    // 5.2
    $("#fairmanagement-02_btn").click(function () {
        if ($("#fairmanagement-02_div").hasClass("d-none")) {
            $("#fairmanagement-02_div").addClass("d-flex").removeClass("d-none");
            $("#fairmanagement-02_btn").addClass("active");
            $('#fairmanagement-02_title').addClass("d-block").removeClass("d-none");

            check_div('fairmanagement-01_div', 'fairmanagement-01_btn', 'fairmanagement-01_title');
        }
    });

    // 5.2.1
    $('#tenantmanagement_div_btn').click(function () {
        $('#tenantmanagement_form_div').addClass('d-flex').removeClass('d-none');
        $('#tenantmanagement_div').addClass('d-none').removeClass('d-flex');
    });

    // 6.1
    $("#cardusagehistory-01_btn").click(function () {
        if ($("#cardusagehistory-01_div").hasClass("d-none")) {
            $("#cardusagehistory-01_div").addClass("d-flex").removeClass("d-none");
            $("#cardusagehistory-01_btn").addClass("active");
            $("#cardusagehistory_date01_div").addClass("d-block").removeClass("d-none");

            check_div('cardusagehistory-02_div', 'cardusagehistory-02_btn', 'cardusagehistory_card02_div');
            check_div('cardusagehistory-03_div', 'cardusagehistory-03_btn', 'cardusagehistory_account03_div');
        }
    });

    // 6.2
    $("#cardusagehistory-02_btn").click(function () {
        if ($("#cardusagehistory-02_div").hasClass("d-none")) {
            $("#cardusagehistory-02_div").addClass("d-flex").removeClass("d-none");
            $("#cardusagehistory-02_btn").addClass("active");
            $("#cardusagehistory_card02_div").addClass("d-block").removeClass("d-none");
            check_div('cardusagehistory-01_div', 'cardusagehistory-01_btn', 'cardusagehistory_date01_div');
            check_div('cardusagehistory-03_div', 'cardusagehistory-03_btn', 'cardusagehistory_account03_div');
        }
    });

    // 6.3
    $("#cardusagehistory-03_btn").click(function () {
        if ($("#cardusagehistory-03_div").hasClass("d-none")) {
            $("#cardusagehistory-03_div").addClass("d-flex").removeClass("d-none");
            $("#cardusagehistory-03_btn").addClass("active");
            $("#cardusagehistory_account03_div").addClass("d-block").removeClass("d-none");
            check_div('cardusagehistory-01_div', 'cardusagehistory-01_btn', 'cardusagehistory_date01_div');
            check_div('cardusagehistory-02_div', 'cardusagehistory-02_btn', 'cardusagehistory_card02_div');
        }
    });


    // 7.1.1
    $("#master-01_btn").click(function () {
        if ($("#master-01_div").hasClass("d-none")) {
            $("#master-01_div").addClass("d-block").removeClass("d-none");
            $("#master-01-card2").addClass("d-flex").removeClass("d-none");
            $("#master-01_btn").addClass("active");
            check_master02div();
            check_master03div();
        }
    });

    // 7.1.2
    $("#master-02_btn").click(function () {
        if ($("#master-02_div").hasClass("d-none")) {
            $("#master-02_div").addClass("d-block").removeClass("d-none");
            $("#master-02_btn").addClass("active");
            check_master01div();
            check_master03div();
        }
    });

    // 7.1.3
    $("#master-03_btn").click(function () {
        if ($("#master-03_div").hasClass("d-none")) {
            $("#master-03_div").addClass("d-block").removeClass("d-none");
            $("#master-03_btn").addClass("active");
            check_master01div();
            check_master02div();
        }
    });
    
    $("#techmanagement_frame2_view").click(function () {
        $("#technician-01-card2").toggle();
    });

    // superadmin_page

    

    $("#cardusage-01_btn").click(function () {
        if ($("#cardusage-01_div").hasClass("d-none")) {
            $("#cardusage-01_div").addClass("d-flex").removeClass("d-none");
            $("#cardusage-01_btn").addClass("active");
            check_cardusage02_div();
            check_cardusage03_div();
        }
    })

    // 1.2
    $("#cardusage-02_btn").click(function () {
        if ($("#cardusage-02_div").hasClass("d-none")) {
            $("#cardusage-02_div").addClass("d-flex").removeClass("d-none");
            $("#cardusage-02_btn").addClass("active");
            $("#cardusageapartmentcomplexfilterselect01").addClass("d-flex").removeClass("d-none");
            check_cardusage01_div();
            check_cardusage03_div();
        }
    })

    // 1.3
    $("#cardusage-03_btn").click(function () {
        if ($("#cardusage-03_div").hasClass("d-none")) {
            $("#cardusage-03_div").addClass("d-flex").removeClass("d-none");
            $("#cardusage-03_btn").addClass("active");
            $("#cardusageapartmentcomplexfilterselect02").addClass("d-flex").removeClass("d-none");
            check_cardusage01_div();
            check_cardusage02_div();
        }
    })

})


$(function () {
    $("#consAddress_btn").click(function () {
        $('.consAddress').prop('disabled', function (i, v) { return !v; });
        // $('.consAddress').toggle(prop, 'disabled');
        // if ($('.consAddress').prop('disabled')) {
        //     $('.consAddress').attr('disabled',false);
        //     $('#consAddress_btn').addClass('active').blur();
        // } else {
        //     $('.consAddress').attr('disabled', true);
        //     $('#consAddress_btn').removeClass('active').focusout();
        // }
    })

    $("#consIntro_btn").click(function () {
        $('.consIntro').prop('disabled', function (i, v) { return !v; });
        // if ($('.consIntro').prop('disabled')) {
        //     $('.consIntro').attr('disabled', false);
        // } else {
        //     $('.consIntro').attr('disabled', true);
        // }
    })

})