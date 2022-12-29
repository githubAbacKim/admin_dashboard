
/** PASSWORD TOGGLE */
!(function ($) {
    "use strict";
    $(function () {
        $('[data-toggle="password"]').each(function () {
            var input = $(this);
            var eye_btn = $(this).parent().find(".input-group-text");
            eye_btn.css("cursor", "pointer").addClass("input-password-hide");
            eye_btn.on("click", function () {
                if (eye_btn.hasClass("input-password-hide")) {
                    eye_btn
                        .removeClass("input-password-hide")
                        .addClass("input-password-show");
                    eye_btn.find(".fa").removeClass("fa-eye").addClass("fa-eye-slash");
                    input.attr("type", "text");
                } else {
                    eye_btn
                        .removeClass("input-password-show")
                        .addClass("input-password-hide");
                    eye_btn.find(".fa").removeClass("fa-eye-slash").addClass("fa-eye");
                    input.attr("type", "password");
                }
            });
        });
    });
})(window.jQuery);

/** TEXTAREA AUTO CHANGE HEIGHT **/
$(document).ready(function () {
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
$(document).ready(function () {
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
$(document).ready(function () {
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
$(document).ready(function () {
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
$(document).ready(function () {
    $('[data-bs-toggle="tooltip-progress"]').tooltip("enable");
});


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

$(document).ready(function () {
    $('.profile-lists a:last-child').addClass('pe-4');
});


/** SIDEBAR BUTTON FUNCTIONS  **/
$(document).ready(function () {
    // HOME PAGE
    $("#home_btn").click(function () {
        if ($("#home_page").hasClass("d-none")) {
            $("#home_page").addClass("d-block").removeClass("d-none");

            // check_home_page();
            check_profile_page();
            check_viewallcontracts_page();
            check_contractwriting_page();
            check_orderstatus_page();
            check_ordermanagement_page();
            check_filemanagement_page();
            check_onlinefair_page();
            check_fairmanagement_page();
            check_paymentrequestmanagement_page();
            check_servicemanagement_page();
            check_sendphotos_page();
            check_technicianmanagement_page();
            check_contract_page();
            check_consulting_page();
            check_cardusagehistory_page();
            check_master_page();
            check_superadmin_page();
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // PROFILE PAGE
    $("#profile_btn").click(function () {
        if ($("#profile_page").hasClass("d-none")) {
            $("#profile_page").addClass("d-block").removeClass("d-none");

            check_home_page();
            // check_profile_page();
            check_viewallcontracts_page();
            check_contractwriting_page();
            check_orderstatus_page();
            check_ordermanagement_page();
            check_filemanagement_page();
            check_onlinefair_page();
            check_fairmanagement_page();
            check_paymentrequestmanagement_page();
            check_servicemanagement_page();
            check_sendphotos_page();
            check_technicianmanagement_page();
            check_contract_page();
            check_consulting_page();
            check_cardusagehistory_page();
            check_master_page();
            check_superadmin_page();
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // VIEW ALL CONTRACTS PAGE
    $("#viewallcontracts_btn").click(function () {
        if ($("#viewallcontracts_page").hasClass("d-none")) {
            $("#viewallcontracts_page").addClass("d-block").removeClass("d-none");
            $("#viewallcontracts_btn").addClass('active');

            check_home_page();
            check_profile_page();
            // check_viewallcontracts_page();
            check_contractwriting_page();
            check_orderstatus_page();
            check_ordermanagement_page();
            check_filemanagement_page();
            check_onlinefair_page();
            check_fairmanagement_page();
            check_paymentrequestmanagement_page();
            check_servicemanagement_page();
            check_sendphotos_page();
            check_technicianmanagement_page();
            check_contract_page();
            check_consulting_page();
            check_cardusagehistory_page();
            check_master_page();
            check_superadmin_page();
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // CONTRACT WRITING PAGE
    $("#contractwriting_btn").click(function () {
        if ($("#contractwriting_page").hasClass("d-none")) {
            $("#contractwriting_page").addClass("d-block").removeClass("d-none");
            $("#contractwriting_btn").addClass('active');

            check_home_page();
            check_profile_page();
            check_viewallcontracts_page();
            // check_contractwriting_page();
            check_orderstatus_page();
            check_ordermanagement_page();
            check_filemanagement_page();
            check_onlinefair_page();
            check_fairmanagement_page();
            check_paymentrequestmanagement_page();
            check_servicemanagement_page();
            check_sendphotos_page();
            check_technicianmanagement_page();
            check_contract_page();
            check_consulting_page();
            check_cardusagehistory_page();
            check_master_page();
            check_superadmin_page();
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // ORDER STATUS PAGE
    $("#orderstatus_btn").click(function () {
        if ($("#orderstatus_page").hasClass("d-none")) {
            $("#orderstatus_page").addClass("d-block").removeClass("d-none");
            $("#orderstatus_btn").addClass('active');

            check_home_page();
            check_profile_page();
            check_viewallcontracts_page();
            check_contractwriting_page();
            // check_orderstatus_page();
            check_ordermanagement_page();
            check_filemanagement_page();
            check_onlinefair_page();
            check_fairmanagement_page();
            check_paymentrequestmanagement_page();
            check_servicemanagement_page();
            check_sendphotos_page();
            check_technicianmanagement_page();
            check_contract_page();
            check_consulting_page();
            check_cardusagehistory_page();
            check_master_page();
            check_superadmin_page();
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // ORDER MANAGEMENT PAGE
    $("#ordermanagement_btn").click(function () {
        if ($("#ordermanagement_page").hasClass("d-none")) {
            $("#ordermanagement_page").addClass("d-block").removeClass("d-none");
            $("#ordermanagement_btn").addClass('active');

            check_home_page();
            check_profile_page();
            check_viewallcontracts_page();
            check_contractwriting_page();
            check_orderstatus_page();
            // check_ordermanagement_page();
            check_filemanagement_page();
            check_onlinefair_page();
            check_fairmanagement_page();
            check_paymentrequestmanagement_page();
            check_servicemanagement_page();
            check_sendphotos_page();
            check_technicianmanagement_page();
            check_contract_page();
            check_consulting_page();
            check_cardusagehistory_page();
            check_master_page();
            check_superadmin_page();
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // FILE MANAGEMENT PAGE
    $("#filemanagement_btn").click(function () {
        if ($("#filemanagement_page").hasClass("d-none")) {
            $("#filemanagement_page").addClass("d-block").removeClass("d-none");
            $("#filemanagement_btn").addClass('active');

            check_home_page();
            check_profile_page();
            check_viewallcontracts_page();
            check_contractwriting_page();
            check_orderstatus_page();
            check_ordermanagement_page();
            // check_filemanagement_page();
            check_onlinefair_page();
            check_fairmanagement_page();
            check_paymentrequestmanagement_page();
            check_servicemanagement_page();
            check_sendphotos_page();
            check_technicianmanagement_page();
            check_contract_page();
            check_consulting_page();
            check_cardusagehistory_page();
            check_master_page();
            check_superadmin_page();
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // ONLINE FAIR PAGE
    $("#onlinefair_btn").click(function () {
        if ($("#onlinefair_page").hasClass("d-none")) {
            $("#onlinefair_page").addClass("d-block").removeClass("d-none");
            $("#onlinefair_btn").addClass('active');

            check_home_page();
            check_profile_page();
            check_viewallcontracts_page();
            check_contractwriting_page();
            check_orderstatus_page();
            check_ordermanagement_page();
            check_filemanagement_page();
            // check_onlinefair_page();
            check_fairmanagement_page();
            check_paymentrequestmanagement_page();
            check_servicemanagement_page();
            check_sendphotos_page();
            check_technicianmanagement_page();
            check_contract_page();
            check_consulting_page();
            check_cardusagehistory_page();
            check_master_page();
            check_superadmin_page();
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // FAIR MANAGEMENT PAGE
    $("#fairmanagement_btn").click(function () {
        if ($("#fairmanagement_page").hasClass("d-none")) {
            $("#fairmanagement_page").addClass("d-block").removeClass("d-none");
            $("#fairmanagement_btn").addClass('active');

            check_home_page();
            check_profile_page();
            check_viewallcontracts_page();
            check_contractwriting_page();
            check_orderstatus_page();
            check_ordermanagement_page();
            check_filemanagement_page();
            check_onlinefair_page();
            // check_fairmanagement_page();
            check_paymentrequestmanagement_page();
            check_servicemanagement_page();
            check_sendphotos_page();
            check_technicianmanagement_page();
            check_contract_page();
            check_consulting_page();
            check_cardusagehistory_page();
            check_master_page();
            check_superadmin_page();
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();

            setDefault_fairmanagement();
        }
    })

    // PAYMENT REQUEST MANAGEMENT PAGE
    $("#paymentrequestmanagement_btn").click(function () {
        if ($("#paymentrequestmanagement_page").hasClass("d-none")) {
            $("#paymentrequestmanagement_page").addClass("d-block").removeClass("d-none");
            $("#paymentrequestmanagement_btn").addClass('active');

            check_home_page();
            check_profile_page();
            check_viewallcontracts_page();
            check_contractwriting_page();
            check_orderstatus_page();
            check_ordermanagement_page();
            check_filemanagement_page();
            check_onlinefair_page();
            check_fairmanagement_page();
            // check_paymentrequestmanagement_page();
            check_servicemanagement_page();
            check_sendphotos_page();
            check_technicianmanagement_page();
            check_contract_page();
            check_consulting_page();
            check_cardusagehistory_page();
            check_master_page();
            check_superadmin_page();
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // SERVICE MANAGEMENT PAGE
    $("#servicemanagement_btn").click(function () {
        if ($("#servicemanagement_page").hasClass("d-none")) {
            $("#servicemanagement_page").addClass("d-block").removeClass("d-none");
            $("#servicemanagement_btn").addClass('active');

            check_home_page();
            check_profile_page();
            check_viewallcontracts_page();
            check_contractwriting_page();
            check_orderstatus_page();
            check_ordermanagement_page();
            check_filemanagement_page();
            check_onlinefair_page();
            check_fairmanagement_page();
            check_paymentrequestmanagement_page();
            // check_servicemanagement_page();
            check_sendphotos_page();
            check_technicianmanagement_page();
            check_contract_page();
            check_consulting_page();
            check_cardusagehistory_page();
            check_master_page();
            check_superadmin_page();
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // SEND PHOTOS PAGE
    $("#sendphotos_btn").click(function () {
        if ($("#sendphotos_page").hasClass("d-none")) {
            $("#sendphotos_page").addClass("d-block").removeClass("d-none");
            $("#sendphotos_btn").addClass('active');

            check_home_page();
            check_profile_page();
            check_viewallcontracts_page();
            check_contractwriting_page();
            check_orderstatus_page();
            check_ordermanagement_page();
            check_filemanagement_page();
            check_onlinefair_page();
            check_fairmanagement_page();
            check_paymentrequestmanagement_page();
            check_servicemanagement_page();
            // check_sendphotos_page();
            check_technicianmanagement_page();
            check_contract_page();
            check_consulting_page();
            check_cardusagehistory_page();
            check_master_page();
            check_superadmin_page();
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // TECHNICIAN MANAGEMENT PAGE
    $("#technicianmanagement_btn").click(function () {
        if ($("#technicianmanagement_page").hasClass("d-none")) {
            $("#technicianmanagement_page").addClass("d-block").removeClass("d-none");
            $("#technicianmanagement_btn").addClass('active');

            check_home_page();
            check_profile_page();
            check_viewallcontracts_page();
            check_contractwriting_page();
            check_orderstatus_page();
            check_ordermanagement_page();
            check_filemanagement_page();
            check_onlinefair_page();
            check_fairmanagement_page();
            check_paymentrequestmanagement_page();
            check_servicemanagement_page();
            check_sendphotos_page();
            // check_technicianmanagement_page();
            check_contract_page();
            check_consulting_page();
            check_cardusagehistory_page();
            check_master_page();
            check_superadmin_page();
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // CONTRACT PAGE
    $("#contract_btn").click(function () {
        if ($("#contract_page").hasClass("d-none")) {
            $("#contract_page").addClass("d-block").removeClass("d-none");
            $("#contract_btn").addClass('active');

            check_home_page();
            check_profile_page();
            check_viewallcontracts_page();
            check_contractwriting_page();
            check_orderstatus_page();
            check_ordermanagement_page();
            check_filemanagement_page();
            check_onlinefair_page();
            check_fairmanagement_page();
            check_paymentrequestmanagement_page();
            check_servicemanagement_page();
            check_sendphotos_page();
            check_technicianmanagement_page();
            // check_contract_page();
            check_consulting_page();
            check_cardusagehistory_page();
            check_master_page();
            check_superadmin_page();
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // CONSULTING PAGE
    $("#consulting_btn").click(function () {
        if ($("#consulting_page").hasClass("d-none")) {
            $("#consulting_page").addClass("d-block").removeClass("d-none");
            $("#consulting_btn").addClass('active');

            check_home_page();
            check_profile_page();
            check_viewallcontracts_page();
            check_contractwriting_page();
            check_orderstatus_page();
            check_ordermanagement_page();
            check_filemanagement_page();
            check_onlinefair_page();
            check_fairmanagement_page();
            check_paymentrequestmanagement_page();
            check_servicemanagement_page();
            check_sendphotos_page();
            check_technicianmanagement_page();
            check_contract_page();
            // check_consulting_page();
            check_cardusagehistory_page();
            check_master_page();
            check_superadmin_page();
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // CARD USAGE HISTORY PAGE
    $("#cardusagehistory_btn").click(function () {
        if ($("#cardusagehistory_page").hasClass("d-none")) {
            $("#cardusagehistory_page").addClass("d-block").removeClass("d-none");
            $("#cardusagehistory_btn").addClass('active');

            check_home_page();
            check_profile_page();
            check_viewallcontracts_page();
            check_contractwriting_page();
            check_orderstatus_page();
            check_ordermanagement_page();
            check_filemanagement_page();
            check_onlinefair_page();
            check_fairmanagement_page();
            check_paymentrequestmanagement_page();
            check_servicemanagement_page();
            check_sendphotos_page();
            check_technicianmanagement_page();
            check_contract_page();
            check_consulting_page();
            // check_cardusagehistory_page();
            check_master_page();
            check_superadmin_page();
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // MASTER PAGE
    $("#master_btn").click(function () {
        if ($("#master_page").hasClass("d-none")) {
            $("#master_page").addClass("d-block").removeClass("d-none");
            $("#master_btn").addClass('active');

            check_home_page();
            check_profile_page();
            check_viewallcontracts_page();
            check_contractwriting_page();
            check_orderstatus_page();
            check_ordermanagement_page();
            check_filemanagement_page();
            check_onlinefair_page();
            check_fairmanagement_page();
            check_paymentrequestmanagement_page();
            check_servicemanagement_page();
            check_sendphotos_page();
            check_technicianmanagement_page();
            check_contract_page();
            check_consulting_page();
            check_cardusagehistory_page();
            // check_master_page();
            check_superadmin_page();
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })
});


// navigations with the pages
$(document).ready(function () {
    // 1.1
    $("#viewallcontracts-01_btn").click(function () {
        if ($("#viewallcontracts-01_div").hasClass("d-none")) {
            $("#viewallcontracts-01_div").addClass("d-flex").removeClass("d-none");
            $("#viewallcontracts-01_btn").addClass("active");
            $("#viewallcontracts_selectapartmentcomplex01_div").addClass("d-block").removeClass("d-none");
            check_viewallcontracts02_div();
            check_viewallcontracts03_div();
        }
    })

    // 1.2
    $("#viewallcontracts-02_btn").click(function () {
        if ($("#viewallcontracts-02_div").hasClass("d-none")) {
            $("#viewallcontracts-02_div").addClass("d-flex").removeClass("d-none");
            $("#viewallcontracts-02_btn").addClass("active");
            $("#viewallcontracts_selectapartmentcomplex02_div").addClass("d-block").removeClass("d-none");
            check_viewallcontracts01_div();
            check_viewallcontracts03_div();
        }
    })

    // 1.3
    $("#viewallcontracts-03_btn").click(function () {
        if ($("#viewallcontracts-03_div").hasClass("d-none")) {
            $("#viewallcontracts-03_div").addClass("d-flex").removeClass("d-none");
            $("#viewallcontracts-03_btn").addClass("active");
            check_viewallcontracts01_div();
            check_viewallcontracts02_div();
        }
    })

    // 5.1
    $("#fairmanagement-01_btn").click(function () {
        if ($("#fairmanagement-01_div").hasClass("d-none")) {
            $("#fairmanagement-01_div").addClass("d-flex").removeClass("d-none");
            $("#fairmanagement-01_btn").addClass("active");
            $('#fairmanagement-01_title').addClass("d-block").removeClass("d-none");
            check_fairmanagement02_div();
        }
    })

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
            check_fairmanagement01_div();
        }
    });

    // 5.2.1
    $('#tenantmanagement_div_btn').click(function () {
        $('#tenantmanagement_form_div').addClass('d-flex').removeClass('d-none');
        $('#tenantmanagement_div').addClass('d-none').removeClass('d-flex');
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

    $("#superadmin_btn").click(function () {
        if ($("#superadmin_page").hasClass('d-none')) {
            $('#superadmin_page').removeClass('d-none').addClass('d-block');
            
            check_master_page();
            check_menu_accordion();

            if ($('#master-01-card2').hasClass('d-flex')) {
                $('#master-01-card2').removeClass('d-flex').addClass('d-none');
                
            } else if ($('#master-01-card2').hasClass('d-none')) {
                // do nothing
            }
        }
    });

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


// $(window).resize(function () {
//     if ($(window).width() < 992) {
//         $('#master_page > .card-main').css("{min-height: 'calc(100vh - 250px)'}");
//     }
// })

