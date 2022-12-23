
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
            $("#side-navbar").removeClass("min");
            $("#side-navbar").addClass("max");

            $("#header").removeClass("min");
            $("#header").addClass("max");

            $("#main-content").removeClass("min");
            $("#main-content").addClass("max");

            $("#icon-collapse").removeClass("fa-chevron-right");
            $("#icon-collapse").addClass("fa-chevron-left");

            $("#btn-toggle-collapse").removeClass("min");
            $("#btn-toggle-collapse").addClass("max");

            $('[data-bs-toggle="tooltip"]').tooltip("disable");

        } else if ($("#side-navbar").hasClass("max")) {
            $("#side-navbar").removeClass("max");
            $("#side-navbar").addClass("min");

            $("#header").removeClass("max");
            $("#header").addClass("min");

            $("#main-content").removeClass("max");
            $("#main-content").addClass("min");

            $("#icon-collapse").removeClass("fa-chevron-left");
            $("#icon-collapse").addClass("fa-chevron-right");

            $("#btn-toggle-collapse").removeClass("max");
            $("#btn-toggle-collapse").addClass("min");

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

/** SELECT 2 */
$(document).ready(function () {
    $('#selectAppartment').select2({
        theme: 'bootstrap-5',
        width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
        placeholder: $(this).data('placeholder'),
    });
});

// VANILLA JS DATEPICKER
document.addEventListener('DOMContentLoaded', function () {
    const elem = document.getElementById('daterange');
    const daterange = new DateRangePicker(elem, {
        orientation: "bottom left",
        buttonClass: 'btn',
        clearBtn: true,
        language: 'ko',
        todayHighlight: true,
    });
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


/** DATA TABLES */
// $(document).ready(function () {
//     $('table').DataTable();
// });

/** SIDEBAR BUTTON FUNCTIONS  **/
$(document).ready(function () {
    // HOME PAGE
    $("#home_btn").click(function () {
        if ($("#home_page").hasClass("d-none")) {
            $("#home_page").addClass("d-block");
            $("#home_page").removeClass("d-none");

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
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // PROFILE PAGE
    $("#profile_btn").click(function () {
        if ($("#profile_page").hasClass("d-none")) {
            $("#profile_page").addClass("d-block");
            $("#profile_page").removeClass("d-none");

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
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // VIEW ALL CONTRACTS PAGE
    $("#viewallcontracts_btn").click(function () {
        if ($("#viewallcontracts_page").hasClass("d-none")) {
            $("#viewallcontracts_page").addClass("d-block");
            $("#viewallcontracts_page").removeClass("d-none");
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
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // CONTRACT WRITING PAGE
    $("#contractwriting_btn").click(function () {
        if ($("#contractwriting_page").hasClass("d-none")) {
            $("#contractwriting_page").addClass("d-block");
            $("#contractwriting_page").removeClass("d-none");
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
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // ORDER STATUS PAGE
    $("#orderstatus_btn").click(function () {
        if ($("#orderstatus_page").hasClass("d-none")) {
            $("#orderstatus_page").addClass("d-block");
            $("#orderstatus_page").removeClass("d-none");
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
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // ORDER MANAGEMENT PAGE
    $("#ordermanagement_btn").click(function () {
        if ($("#ordermanagement_page").hasClass("d-none")) {
            $("#ordermanagement_page").addClass("d-block");
            $("#ordermanagement_page").removeClass("d-none");
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
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // FILE MANAGEMENT PAGE
    $("#filemanagement_btn").click(function () {
        if ($("#filemanagement_page").hasClass("d-none")) {
            $("#filemanagement_page").addClass("d-block");
            $("#filemanagement_page").removeClass("d-none");
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
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // ONLINE FAIR PAGE
    $("#onlinefair_btn").click(function () {
        if ($("#onlinefair_page").hasClass("d-none")) {
            $("#onlinefair_page").addClass("d-block");
            $("#onlinefair_page").removeClass("d-none");
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
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // FAIR MANAGEMENT PAGE
    $("#fairmanagement_btn").click(function () {
        if ($("#fairmanagement_page").hasClass("d-none")) {
            $("#fairmanagement_page").addClass("d-block");
            $("#fairmanagement_page").removeClass("d-none");
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
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // PAYMENT REQUEST MANAGEMENT PAGE
    $("#paymentrequestmanagement_btn").click(function () {
        if ($("#paymentrequestmanagement_page").hasClass("d-none")) {
            $("#paymentrequestmanagement_page").addClass("d-block");
            $("#paymentrequestmanagement_page").removeClass("d-none");
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
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // SERVICE MANAGEMENT PAGE
    $("#servicemanagement_btn").click(function () {
        if ($("#servicemanagement_page").hasClass("d-none")) {
            $("#servicemanagement_page").addClass("d-block");
            $("#servicemanagement_page").removeClass("d-none");
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
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // SEND PHOTOS PAGE
    $("#sendphotos_btn").click(function () {
        if ($("#sendphotos_page").hasClass("d-none")) {
            $("#sendphotos_page").addClass("d-block");
            $("#sendphotos_page").removeClass("d-none");
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
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // TECHNICIAN MANAGEMENT PAGE
    $("#technicianmanagement_btn").click(function () {
        if ($("#technicianmanagement_page").hasClass("d-none")) {
            $("#technicianmanagement_page").addClass("d-block");
            $("#technicianmanagement_page").removeClass("d-none");
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
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // CONTRACT PAGE
    $("#contract_btn").click(function () {
        if ($("#contract_page").hasClass("d-none")) {
            $("#contract_page").addClass("d-block");
            $("#contract_page").removeClass("d-none");
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
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // CONSULTING PAGE
    $("#consulting_btn").click(function () {
        if ($("#consulting_page").hasClass("d-none")) {
            $("#consulting_page").addClass("d-block");
            $("#consulting_page").removeClass("d-none");
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
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })

    // CARD USAGE HISTORY PAGE
    $("#cardusagehistory_btn").click(function () {
        if ($("#cardusagehistory_page").hasClass("d-none")) {
            $("#cardusagehistory_page").addClass("d-block");
            $("#cardusagehistory_page").removeClass("d-none");
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
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })


    // MASTER PAGE
    $("#master_btn").click(function () {
        if ($("#master_page").hasClass("d-none")) {
            $("#master_page").addClass("d-block");
            $("#master_page").removeClass("d-none");
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
            check_order_accordion();
            check_fair_accordion();
            check_settings_accordion();
            check_menu_accordion();
        }
    })


});