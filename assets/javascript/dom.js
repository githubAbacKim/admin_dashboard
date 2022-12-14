
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

/** SIDEBAR BUTTON FUNCTIONS  **/
$(document).ready(function () {
    $("#profilebtn").click(function () {
        if ($("#profilesec").hasClass("d-none")) {
            $("#profilesec").addClass("d-block");
            $("#profilesec").removeClass("d-none");

            if ($("#mainsec").hasClass("d-block")) {
                $("#mainsec").addClass("d-none");
                $("#mainsec").removeClass("d-block");
                $("#mainbtn").removeClass('active');
            }

            if ($("#cardusagesec").hasClass("d-block")) {
                $("#cardusagesec").addClass("d-none");
                $("#cardusagesec").removeClass("d-block");
                $("#cardusagebtn").removeClass('active');
            }

            if ($("#orderstatussec").hasClass("d-block")) {
                $("#orderstatussec").addClass("d-none");
                $("#orderstatussec").removeClass("d-block");
                $("#orderstatusbtn").removeClass('active');
            }

            if ($("#paymentrequestsec").hasClass("d-block")) {
                $("#paymentrequestsec").addClass("d-none");
                $("#paymentrequestsec").removeClass("d-block");
                $("#paymentrequestbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#servicemanagementsec").hasClass("d-block")) {
                $("#servicemanagementsec").addClass("d-none");
                $("#servicemanagementsec").removeClass("d-block");
                $("#servicemanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#ordermanagementsec").hasClass("d-block")) {
                $("#ordermanagementsec").addClass("d-none");
                $("#ordermanagementsec").removeClass("d-block");
                $("#ordermanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#sendphotosec").hasClass("d-block")) {
                $("#sendphotosec").addClass("d-none");
                $("#sendphotosec").removeClass("d-block");
                $("#sendphotobtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#technicianmanagementsec").hasClass("d-block")) {
                $("#technicianmanagementsec").addClass("d-none");
                $("#technicianmanagementsec").removeClass("d-block");
                $("#technicianmanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#fairsec").hasClass("d-block")) {
                $("#fairsec").addClass("d-none");
                $("#fairsec").removeClass("d-block");
                $("#fairbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#fairmanagementsec").hasClass("d-block")) {
                $("#fairmanagementsec").addClass("d-none");
                $("#fairmanagementsec").removeClass("d-block");
                $("#fairmanagementbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#contractsec").hasClass("d-block")) {
                $("#contractsec").addClass("d-none");
                $("#contractsec").removeClass("d-block");
                $("#contractbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#threewordssec").hasClass("d-block")) {
                $("#threewordssec").addClass("d-none");
                $("#threewordssec").removeClass("d-block");
                $("#threewordsbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#mastersec").hasClass("d-block")) {
                $("#mastersec").addClass("d-none");
                $("#mastersec").removeClass("d-block");
                $("#masterbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }
        }
    })

    $("#mainbtn").click(function () {
        if ($("#mainsec").hasClass("d-none")) {
            $("#mainsec").addClass("d-block");
            $("#mainsec").removeClass("d-none");
            $("#mainbtn").addClass('active');

            if ($("#profilesec").hasClass("d-block")) {
                $("#profilesec").addClass("d-none");
                $("#profilesec").removeClass("d-block");
                // $("#mainbtn").removeClass('active');
            }

            if ($("#cardusagesec").hasClass("d-block")) {
                $("#cardusagesec").addClass("d-none");
                $("#cardusagesec").removeClass("d-block");
                $("#cardusagebtn").removeClass('active');
            }

            if ($("#orderstatussec").hasClass("d-block")) {
                $("#orderstatussec").addClass("d-none");
                $("#orderstatussec").removeClass("d-block");
                $("#orderstatusbtn").removeClass('active');
            }

            if ($("#paymentrequestsec").hasClass("d-block")) {
                $("#paymentrequestsec").addClass("d-none");
                $("#paymentrequestsec").removeClass("d-block");
                $("#paymentrequestbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#servicemanagementsec").hasClass("d-block")) {
                $("#servicemanagementsec").addClass("d-none");
                $("#servicemanagementsec").removeClass("d-block");
                $("#servicemanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#ordermanagementsec").hasClass("d-block")) {
                $("#ordermanagementsec").addClass("d-none");
                $("#ordermanagementsec").removeClass("d-block");
                $("#ordermanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#sendphotosec").hasClass("d-block")) {
                $("#sendphotosec").addClass("d-none");
                $("#sendphotosec").removeClass("d-block");
                $("#sendphotobtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#technicianmanagementsec").hasClass("d-block")) {
                $("#technicianmanagementsec").addClass("d-none");
                $("#technicianmanagementsec").removeClass("d-block");
                $("#technicianmanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#fairsec").hasClass("d-block")) {
                $("#fairsec").addClass("d-none");
                $("#fairsec").removeClass("d-block");
                $("#fairbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#fairmanagementsec").hasClass("d-block")) {
                $("#fairmanagementsec").addClass("d-none");
                $("#fairmanagementsec").removeClass("d-block");
                $("#fairmanagementbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#contractsec").hasClass("d-block")) {
                $("#contractsec").addClass("d-none");
                $("#contractsec").removeClass("d-block");
                $("#contractbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#threewordssec").hasClass("d-block")) {
                $("#threewordssec").addClass("d-none");
                $("#threewordssec").removeClass("d-block");
                $("#threewordsbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#mastersec").hasClass("d-block")) {
                $("#mastersec").addClass("d-none");
                $("#mastersec").removeClass("d-block");
                $("#masterbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }
        }
    })

    $("#cardusagebtn").click(function () {
        if ($("#cardusagesec").hasClass("d-none")) {
            $("#cardusagesec").addClass("d-block");
            $("#cardusagesec").removeClass("d-none");
            $("#cardusagebtn").addClass('active');

            if ($("#profilesec").hasClass("d-block")) {
                $("#profilesec").addClass("d-none");
                $("#profilesec").removeClass("d-block");
                // $("#mainbtn").removeClass('active');
            }

            if ($("#mainsec").hasClass("d-block")) {
                $("#mainsec").addClass("d-none");
                $("#mainsec").removeClass("d-block");
                $("#mainbtn").removeClass('active');
            }

            if ($("#orderstatussec").hasClass("d-block")) {
                $("#orderstatussec").addClass("d-none");
                $("#orderstatussec").removeClass("d-block");
                $("#orderstatusbtn").removeClass('active');
            }

            if ($("#paymentrequestsec").hasClass("d-block")) {
                $("#paymentrequestsec").addClass("d-none");
                $("#paymentrequestsec").removeClass("d-block");
                $("#paymentrequestbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#servicemanagementsec").hasClass("d-block")) {
                $("#servicemanagementsec").addClass("d-none");
                $("#servicemanagementsec").removeClass("d-block");
                $("#servicemanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#ordermanagementsec").hasClass("d-block")) {
                $("#ordermanagementsec").addClass("d-none");
                $("#ordermanagementsec").removeClass("d-block");
                $("#ordermanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#sendphotosec").hasClass("d-block")) {
                $("#sendphotosec").addClass("d-none");
                $("#sendphotosec").removeClass("d-block");
                $("#sendphotobtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#technicianmanagementsec").hasClass("d-block")) {
                $("#technicianmanagementsec").addClass("d-none");
                $("#technicianmanagementsec").removeClass("d-block");
                $("#technicianmanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#fairsec").hasClass("d-block")) {
                $("#fairsec").addClass("d-none");
                $("#fairsec").removeClass("d-block");
                $("#fairbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#fairmanagementsec").hasClass("d-block")) {
                $("#fairmanagementsec").addClass("d-none");
                $("#fairmanagementsec").removeClass("d-block");
                $("#fairmanagementbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#contractsec").hasClass("d-block")) {
                $("#contractsec").addClass("d-none");
                $("#contractsec").removeClass("d-block");
                $("#contractbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#threewordssec").hasClass("d-block")) {
                $("#threewordssec").addClass("d-none");
                $("#threewordssec").removeClass("d-block");
                $("#threewordsbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#mastersec").hasClass("d-block")) {
                $("#mastersec").addClass("d-none");
                $("#mastersec").removeClass("d-block");
                $("#masterbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }
        }
    })

    $("#orderstatusbtn").click(function () {
        if ($("#orderstatussec").hasClass("d-none")) {
            $("#orderstatussec").addClass("d-block");
            $("#orderstatussec").removeClass("d-none");
            $("#orderstatusbtn").addClass('active');

            if ($("#profilesec").hasClass("d-block")) {
                $("#profilesec").addClass("d-none");
                $("#profilesec").removeClass("d-block");
                // $("#mainbtn").removeClass('active');
            }

            if ($("#mainsec").hasClass("d-block")) {
                $("#mainsec").addClass("d-none");
                $("#mainsec").removeClass("d-block");
                $("#mainbtn").removeClass('active');
            }

            if ($("#cardusagesec").hasClass("d-block")) {
                $("#cardusagesec").addClass("d-none");
                $("#cardusagesec").removeClass("d-block");
                $("#cardusagebtn").removeClass('active');
            }

            if ($("#paymentrequestsec").hasClass("d-block")) {
                $("#paymentrequestsec").addClass("d-none");
                $("#paymentrequestsec").removeClass("d-block");
                $("#paymentrequestbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');

            }

            if ($("#servicemanagementsec").hasClass("d-block")) {
                $("#servicemanagementsec").addClass("d-none");
                $("#servicemanagementsec").removeClass("d-block");
                $("#servicemanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#ordermanagementsec").hasClass("d-block")) {
                $("#ordermanagementsec").addClass("d-none");
                $("#ordermanagementsec").removeClass("d-block");
                $("#ordermanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#sendphotosec").hasClass("d-block")) {
                $("#sendphotosec").addClass("d-none");
                $("#sendphotosec").removeClass("d-block");
                $("#sendphotobtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#technicianmanagementsec").hasClass("d-block")) {
                $("#technicianmanagementsec").addClass("d-none");
                $("#technicianmanagementsec").removeClass("d-block");
                $("#technicianmanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#fairsec").hasClass("d-block")) {
                $("#fairsec").addClass("d-none");
                $("#fairsec").removeClass("d-block");
                $("#fairbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#fairmanagementsec").hasClass("d-block")) {
                $("#fairmanagementsec").addClass("d-none");
                $("#fairmanagementsec").removeClass("d-block");
                $("#fairmanagementbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#contractsec").hasClass("d-block")) {
                $("#contractsec").addClass("d-none");
                $("#contractsec").removeClass("d-block");
                $("#contractbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#threewordssec").hasClass("d-block")) {
                $("#threewordssec").addClass("d-none");
                $("#threewordssec").removeClass("d-block");
                $("#threewordsbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#mastersec").hasClass("d-block")) {
                $("#mastersec").addClass("d-none");
                $("#mastersec").removeClass("d-block");
                $("#masterbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }
        }
    })

    $("#paymentrequestbtn").click(function () {
        if ($("#paymentrequestsec").hasClass("d-none")) {
            $("#paymentrequestsec").addClass("d-block");
            $("#paymentrequestsec").removeClass("d-none");
            $("#paymentrequestbtn").addClass('active');

            if ($("#profilesec").hasClass("d-block")) {
                $("#profilesec").addClass("d-none");
                $("#profilesec").removeClass("d-block");
                // $("#mainbtn").removeClass('active');
            }

            if ($("#mainsec").hasClass("d-block")) {
                $("#mainsec").addClass("d-none");
                $("#mainsec").removeClass("d-block");
                $("#mainbtn").removeClass('active');
            }

            if ($("#cardusagesec").hasClass("d-block")) {
                $("#cardusagesec").addClass("d-none");
                $("#cardusagesec").removeClass("d-block");
                $("#cardusagebtn").removeClass('active');
            }

            if ($("#orderstatussec").hasClass("d-block")) {
                $("#orderstatussec").addClass("d-none");
                $("#orderstatussec").removeClass("d-block");
                $("#orderstatusbtn").removeClass('active');
            }

            if ($("#servicemanagementsec").hasClass("d-block")) {
                $("#servicemanagementsec").addClass("d-none");
                $("#servicemanagementsec").removeClass("d-block");
                $("#servicemanagementbtn").removeClass('active');
            }

            if ($("#ordermanagementsec").hasClass("d-block")) {
                $("#ordermanagementsec").addClass("d-none");
                $("#ordermanagementsec").removeClass("d-block");
                $("#ordermanagementbtn").removeClass('active');
            }

            if ($("#sendphotosec").hasClass("d-block")) {
                $("#sendphotosec").addClass("d-none");
                $("#sendphotosec").removeClass("d-block");
                $("#sendphotobtn").removeClass('active');
            }

            if ($("#technicianmanagementsec").hasClass("d-block")) {
                $("#technicianmanagementsec").addClass("d-none");
                $("#technicianmanagementsec").removeClass("d-block");
                $("#technicianmanagementbtn").removeClass('active');
            }

            if ($("#fairsec").hasClass("d-block")) {
                $("#fairsec").addClass("d-none");
                $("#fairsec").removeClass("d-block");
                $("#fairbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#fairmanagementsec").hasClass("d-block")) {
                $("#fairmanagementsec").addClass("d-none");
                $("#fairmanagementsec").removeClass("d-block");
                $("#fairmanagementbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#contractsec").hasClass("d-block")) {
                $("#contractsec").addClass("d-none");
                $("#contractsec").removeClass("d-block");
                $("#contractbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#threewordssec").hasClass("d-block")) {
                $("#threewordssec").addClass("d-none");
                $("#threewordssec").removeClass("d-block");
                $("#threewordsbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#mastersec").hasClass("d-block")) {
                $("#mastersec").addClass("d-none");
                $("#mastersec").removeClass("d-block");
                $("#masterbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }
        }
    })

    $("#servicemanagementbtn").click(function () {
        if ($("#servicemanagementsec").hasClass("d-none")) {
            $("#servicemanagementsec").addClass("d-block");
            $("#servicemanagementsec").removeClass("d-none");
            $("#servicemanagementbtn").addClass('active');

            if ($("#profilesec").hasClass("d-block")) {
                $("#profilesec").addClass("d-none");
                $("#profilesec").removeClass("d-block");
                // $("#mainbtn").removeClass('active');
            }

            if ($("#mainsec").hasClass("d-block")) {
                $("#mainsec").addClass("d-none");
                $("#mainsec").removeClass("d-block");
                $("#mainbtn").removeClass('active');
            }

            if ($("#cardusagesec").hasClass("d-block")) {
                $("#cardusagesec").addClass("d-none");
                $("#cardusagesec").removeClass("d-block");
                $("#cardusagebtn").removeClass('active');
            }

            if ($("#orderstatussec").hasClass("d-block")) {
                $("#orderstatussec").addClass("d-none");
                $("#orderstatussec").removeClass("d-block");
                $("#orderstatusbtn").removeClass('active');
            }

            if ($("#paymentrequestsec").hasClass("d-block")) {
                $("#paymentrequestsec").addClass("d-none");
                $("#paymentrequestsec").removeClass("d-block");
                $("#paymentrequestbtn").removeClass('active');
            }

            if ($("#ordermanagementsec").hasClass("d-block")) {
                $("#ordermanagementsec").addClass("d-none");
                $("#ordermanagementsec").removeClass("d-block");
                $("#ordermanagementbtn").removeClass('active');
            }

            if ($("#sendphotosec").hasClass("d-block")) {
                $("#sendphotosec").addClass("d-none");
                $("#sendphotosec").removeClass("d-block");
                $("#sendphotobtn").removeClass('active');
            }

            if ($("#technicianmanagementsec").hasClass("d-block")) {
                $("#technicianmanagementsec").addClass("d-none");
                $("#technicianmanagementsec").removeClass("d-block");
                $("#technicianmanagementbtn").removeClass('active');
            }

            if ($("#fairsec").hasClass("d-block")) {
                $("#fairsec").addClass("d-none");
                $("#fairsec").removeClass("d-block");
                $("#fairbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#fairmanagementsec").hasClass("d-block")) {
                $("#fairmanagementsec").addClass("d-none");
                $("#fairmanagementsec").removeClass("d-block");
                $("#fairmanagementbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#contractsec").hasClass("d-block")) {
                $("#contractsec").addClass("d-none");
                $("#contractsec").removeClass("d-block");
                $("#contractbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#threewordssec").hasClass("d-block")) {
                $("#threewordssec").addClass("d-none");
                $("#threewordssec").removeClass("d-block");
                $("#threewordsbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#mastersec").hasClass("d-block")) {
                $("#mastersec").addClass("d-none");
                $("#mastersec").removeClass("d-block");
                $("#masterbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }
        }
    })

    $("#ordermanagementbtn").click(function () {
        if ($("#ordermanagementsec").hasClass("d-none")) {
            $("#ordermanagementsec").addClass("d-block");
            $("#ordermanagementsec").removeClass("d-none");
            $("#ordermanagementbtn").addClass('active');

            if ($("#profilesec").hasClass("d-block")) {
                $("#profilesec").addClass("d-none");
                $("#profilesec").removeClass("d-block");
                // $("#mainbtn").removeClass('active');
            }

            if ($("#mainsec").hasClass("d-block")) {
                $("#mainsec").addClass("d-none");
                $("#mainsec").removeClass("d-block");
                $("#mainbtn").removeClass('active');
            }

            if ($("#cardusagesec").hasClass("d-block")) {
                $("#cardusagesec").addClass("d-none");
                $("#cardusagesec").removeClass("d-block");
                $("#cardusagebtn").removeClass('active');
            }

            if ($("#orderstatussec").hasClass("d-block")) {
                $("#orderstatussec").addClass("d-none");
                $("#orderstatussec").removeClass("d-block");
                $("#orderstatusbtn").removeClass('active');
            }

            if ($("#paymentrequestsec").hasClass("d-block")) {
                $("#paymentrequestsec").addClass("d-none");
                $("#paymentrequestsec").removeClass("d-block");
                $("#paymentrequestbtn").removeClass('active');
            }

            if ($("#servicemanagementsec").hasClass("d-block")) {
                $("#servicemanagementsec").addClass("d-none");
                $("#servicemanagementsec").removeClass("d-block");
                $("#servicemanagementbtn").removeClass('active');
            }

            if ($("#sendphotosec").hasClass("d-block")) {
                $("#sendphotosec").addClass("d-none");
                $("#sendphotosec").removeClass("d-block");
                $("#sendphotobtn").removeClass('active');
            }

            if ($("#technicianmanagementsec").hasClass("d-block")) {
                $("#technicianmanagementsec").addClass("d-none");
                $("#technicianmanagementsec").removeClass("d-block");
                $("#technicianmanagementbtn").removeClass('active');
            }

            if ($("#fairsec").hasClass("d-block")) {
                $("#fairsec").addClass("d-none");
                $("#fairsec").removeClass("d-block");
                $("#fairbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#fairmanagementsec").hasClass("d-block")) {
                $("#fairmanagementsec").addClass("d-none");
                $("#fairmanagementsec").removeClass("d-block");
                $("#fairmanagementbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#contractsec").hasClass("d-block")) {
                $("#contractsec").addClass("d-none");
                $("#contractsec").removeClass("d-block");
                $("#contractbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#threewordssec").hasClass("d-block")) {
                $("#threewordssec").addClass("d-none");
                $("#threewordssec").removeClass("d-block");
                $("#threewordsbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#mastersec").hasClass("d-block")) {
                $("#mastersec").addClass("d-none");
                $("#mastersec").removeClass("d-block");
                $("#masterbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }
        }
    })

    $("#sendphotobtn").click(function () {
        if ($("#sendphotosec").hasClass("d-none")) {
            $("#sendphotosec").addClass("d-block");
            $("#sendphotosec").removeClass("d-none");
            $("#sendphotobtn").addClass('active');

            if ($("#profilesec").hasClass("d-block")) {
                $("#profilesec").addClass("d-none");
                $("#profilesec").removeClass("d-block");
                // $("#mainbtn").removeClass('active');
            }

            if ($("#mainsec").hasClass("d-block")) {
                $("#mainsec").addClass("d-none");
                $("#mainsec").removeClass("d-block");
                $("#mainbtn").removeClass('active');
            }

            if ($("#cardusagesec").hasClass("d-block")) {
                $("#cardusagesec").addClass("d-none");
                $("#cardusagesec").removeClass("d-block");
                $("#cardusagebtn").removeClass('active');
            }

            if ($("#orderstatussec").hasClass("d-block")) {
                $("#orderstatussec").addClass("d-none");
                $("#orderstatussec").removeClass("d-block");
                $("#orderstatusbtn").removeClass('active');
            }

            if ($("#paymentrequestsec").hasClass("d-block")) {
                $("#paymentrequestsec").addClass("d-none");
                $("#paymentrequestsec").removeClass("d-block");
                $("#paymentrequestbtn").removeClass('active');
            }

            if ($("#servicemanagementsec").hasClass("d-block")) {
                $("#servicemanagementsec").addClass("d-none");
                $("#servicemanagementsec").removeClass("d-block");
                $("#servicemanagementbtn").removeClass('active');
            }

            if ($("#ordermanagementsec").hasClass("d-block")) {
                $("#ordermanagementsec").addClass("d-none");
                $("#ordermanagementsec").removeClass("d-block");
                $("#ordermanagementbtn").removeClass('active');
            }

            if ($("#technicianmanagementsec").hasClass("d-block")) {
                $("#technicianmanagementsec").addClass("d-none");
                $("#technicianmanagementsec").removeClass("d-block");
                $("#technicianmanagementbtn").removeClass('active');
            }

            if ($("#fairsec").hasClass("d-block")) {
                $("#fairsec").addClass("d-none");
                $("#fairsec").removeClass("d-block");
                $("#fairbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#fairmanagementsec").hasClass("d-block")) {
                $("#fairmanagementsec").addClass("d-none");
                $("#fairmanagementsec").removeClass("d-block");
                $("#fairmanagementbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#contractsec").hasClass("d-block")) {
                $("#contractsec").addClass("d-none");
                $("#contractsec").removeClass("d-block");
                $("#contractbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#threewordssec").hasClass("d-block")) {
                $("#threewordssec").addClass("d-none");
                $("#threewordssec").removeClass("d-block");
                $("#threewordsbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#mastersec").hasClass("d-block")) {
                $("#mastersec").addClass("d-none");
                $("#mastersec").removeClass("d-block");
                $("#masterbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }
        }
    })

    $("#technicianmanagementbtn").click(function () {
        if ($("#technicianmanagementsec").hasClass("d-none")) {
            $("#technicianmanagementsec").addClass("d-block");
            $("#technicianmanagementsec").removeClass("d-none");
            $("#technicianmanagementbtn").addClass('active');

            if ($("#profilesec").hasClass("d-block")) {
                $("#profilesec").addClass("d-none");
                $("#profilesec").removeClass("d-block");
                // $("#mainbtn").removeClass('active');
            }

            if ($("#mainsec").hasClass("d-block")) {
                $("#mainsec").addClass("d-none");
                $("#mainsec").removeClass("d-block");
                $("#mainbtn").removeClass('active');
            }

            if ($("#cardusagesec").hasClass("d-block")) {
                $("#cardusagesec").addClass("d-none");
                $("#cardusagesec").removeClass("d-block");
                $("#cardusagebtn").removeClass('active');
            }

            if ($("#orderstatussec").hasClass("d-block")) {
                $("#orderstatussec").addClass("d-none");
                $("#orderstatussec").removeClass("d-block");
                $("#orderstatusbtn").removeClass('active');
            }

            if ($("#paymentrequestsec").hasClass("d-block")) {
                $("#paymentrequestsec").addClass("d-none");
                $("#paymentrequestsec").removeClass("d-block");
                $("#paymentrequestbtn").removeClass('active');
            }

            if ($("#servicemanagementsec").hasClass("d-block")) {
                $("#servicemanagementsec").addClass("d-none");
                $("#servicemanagementsec").removeClass("d-block");
                $("#servicemanagementbtn").removeClass('active');
            }

            if ($("#ordermanagementsec").hasClass("d-block")) {
                $("#ordermanagementsec").addClass("d-none");
                $("#ordermanagementsec").removeClass("d-block");
                $("#ordermanagementbtn").removeClass('active');
            }

            if ($("#sendphotosec").hasClass("d-block")) {
                $("#sendphotosec").addClass("d-none");
                $("#sendphotosec").removeClass("d-block");
                $("#sendphotobtn").removeClass('active');
            }

            if ($("#fairsec").hasClass("d-block")) {
                $("#fairsec").addClass("d-none");
                $("#fairsec").removeClass("d-block");
                $("#fairbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#fairmanagementsec").hasClass("d-block")) {
                $("#fairmanagementsec").addClass("d-none");
                $("#fairmanagementsec").removeClass("d-block");
                $("#fairmanagementbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#contractsec").hasClass("d-block")) {
                $("#contractsec").addClass("d-none");
                $("#contractsec").removeClass("d-block");
                $("#contractbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#threewordssec").hasClass("d-block")) {
                $("#threewordssec").addClass("d-none");
                $("#threewordssec").removeClass("d-block");
                $("#threewordsbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            if ($("#mastersec").hasClass("d-block")) {
                $("#mastersec").addClass("d-none");
                $("#mastersec").removeClass("d-block");
                $("#masterbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }
        }
    })

    $("#fairbtn").click(function () {
        if ($("#fairsec").hasClass("d-none")) {
            $("#fairsec").addClass("d-block");
            $("#fairsec").removeClass("d-none");
            $("#fairbtn").addClass('active');

            if ($("#profilesec").hasClass("d-block")) {
                $("#profilesec").addClass("d-none");
                $("#profilesec").removeClass("d-block");
                // $("#mainbtn").removeClass('active');
            }

            if ($("#mainsec").hasClass("d-block")) {
                $("#mainsec").addClass("d-none");
                $("#mainsec").removeClass("d-block");
                $("#mainbtn").removeClass('active');
            }

            if ($("#cardusagesec").hasClass("d-block")) {
                $("#cardusagesec").addClass("d-none");
                $("#cardusagesec").removeClass("d-block");
                $("#cardusagebtn").removeClass('active');
            }

            if ($("#orderstatussec").hasClass("d-block")) {
                $("#orderstatussec").addClass("d-none");
                $("#orderstatussec").removeClass("d-block");
                $("#orderstatusbtn").removeClass('active');
            }

            if ($("#paymentrequestsec").hasClass("d-block")) {
                $("#paymentrequestsec").addClass("d-none");
                $("#paymentrequestsec").removeClass("d-block");
                $("#paymentrequestbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#servicemanagementsec").hasClass("d-block")) {
                $("#servicemanagementsec").addClass("d-none");
                $("#servicemanagementsec").removeClass("d-block");
                $("#servicemanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#ordermanagementsec").hasClass("d-block")) {
                $("#ordermanagementsec").addClass("d-none");
                $("#ordermanagementsec").removeClass("d-block");
                $("#ordermanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#sendphotosec").hasClass("d-block")) {
                $("#sendphotosec").addClass("d-none");
                $("#sendphotosec").removeClass("d-block");
                $("#sendphotobtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#technicianmanagementsec").hasClass("d-block")) {
                $("#technicianmanagementsec").addClass("d-none");
                $("#technicianmanagementsec").removeClass("d-block");
                $("#technicianmanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#fairmanagementsec").hasClass("d-block")) {
                $("#fairmanagementsec").addClass("d-none");
                $("#fairmanagementsec").removeClass("d-block");
                $("#fairmanagementbtn").removeClass('active');
            }

            if ($("#contractsec").hasClass("d-block")) {
                $("#contractsec").addClass("d-none");
                $("#contractsec").removeClass("d-block");
                $("#contractbtn").removeClass('active');
            }

            if ($("#threewordssec").hasClass("d-block")) {
                $("#threewordssec").addClass("d-none");
                $("#threewordssec").removeClass("d-block");
                $("#threewordsbtn").removeClass('active');
            }

            if ($("#mastersec").hasClass("d-block")) {
                $("#mastersec").addClass("d-none");
                $("#mastersec").removeClass("d-block");
                $("#masterbtn").removeClass('active');
            }
        }
    })

    $("#fairmanagementbtn").click(function () {
        if ($("#fairmanagementsec").hasClass("d-none")) {
            $("#fairmanagementsec").addClass("d-block");
            $("#fairmanagementsec").removeClass("d-none");
            $("#fairmanagementbtn").addClass('active');

            if ($("#profilesec").hasClass("d-block")) {
                $("#profilesec").addClass("d-none");
                $("#profilesec").removeClass("d-block");
                // $("#mainbtn").removeClass('active');
            }

            if ($("#mainsec").hasClass("d-block")) {
                $("#mainsec").addClass("d-none");
                $("#mainsec").removeClass("d-block");
                $("#mainbtn").removeClass('active');
            }

            if ($("#cardusagesec").hasClass("d-block")) {
                $("#cardusagesec").addClass("d-none");
                $("#cardusagesec").removeClass("d-block");
                $("#cardusagebtn").removeClass('active');
            }

            if ($("#orderstatussec").hasClass("d-block")) {
                $("#orderstatussec").addClass("d-none");
                $("#orderstatussec").removeClass("d-block");
                $("#orderstatusbtn").removeClass('active');
            }

            if ($("#paymentrequestsec").hasClass("d-block")) {
                $("#paymentrequestsec").addClass("d-none");
                $("#paymentrequestsec").removeClass("d-block");
                $("#paymentrequestbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#servicemanagementsec").hasClass("d-block")) {
                $("#servicemanagementsec").addClass("d-none");
                $("#servicemanagementsec").removeClass("d-block");
                $("#servicemanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#ordermanagementsec").hasClass("d-block")) {
                $("#ordermanagementsec").addClass("d-none");
                $("#ordermanagementsec").removeClass("d-block");
                $("#ordermanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#sendphotosec").hasClass("d-block")) {
                $("#sendphotosec").addClass("d-none");
                $("#sendphotosec").removeClass("d-block");
                $("#sendphotobtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#technicianmanagementsec").hasClass("d-block")) {
                $("#technicianmanagementsec").addClass("d-none");
                $("#technicianmanagementsec").removeClass("d-block");
                $("#technicianmanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#fairsec").hasClass("d-block")) {
                $("#fairsec").addClass("d-none");
                $("#fairsec").removeClass("d-block");
                $("#fairbtn").removeClass('active');
            }

            if ($("#contractsec").hasClass("d-block")) {
                $("#contractsec").addClass("d-none");
                $("#contractsec").removeClass("d-block");
                $("#contractbtn").removeClass('active');
            }

            if ($("#threewordssec").hasClass("d-block")) {
                $("#threewordssec").addClass("d-none");
                $("#threewordssec").removeClass("d-block");
                $("#threewordsbtn").removeClass('active');
            }

            if ($("#mastersec").hasClass("d-block")) {
                $("#mastersec").addClass("d-none");
                $("#mastersec").removeClass("d-block");
                $("#masterbtn").removeClass('active');
            }
        }
    })

    $("#contractbtn").click(function () {
        if ($("#contractsec").hasClass("d-none")) {
            $("#contractsec").addClass("d-block");
            $("#contractsec").removeClass("d-none");
            $("#contractbtn").addClass('active');

            if ($("#profilesec").hasClass("d-block")) {
                $("#profilesec").addClass("d-none");
                $("#profilesec").removeClass("d-block");
                // $("#mainbtn").removeClass('active');
            }

            if ($("#mainsec").hasClass("d-block")) {
                $("#mainsec").addClass("d-none");
                $("#mainsec").removeClass("d-block");
                $("#mainbtn").removeClass('active');
            }

            if ($("#cardusagesec").hasClass("d-block")) {
                $("#cardusagesec").addClass("d-none");
                $("#cardusagesec").removeClass("d-block");
                $("#cardusagebtn").removeClass('active');
            }

            if ($("#orderstatussec").hasClass("d-block")) {
                $("#orderstatussec").addClass("d-none");
                $("#orderstatussec").removeClass("d-block");
                $("#orderstatusbtn").removeClass('active');
            }

            if ($("#paymentrequestsec").hasClass("d-block")) {
                $("#paymentrequestsec").addClass("d-none");
                $("#paymentrequestsec").removeClass("d-block");
                $("#paymentrequestbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#servicemanagementsec").hasClass("d-block")) {
                $("#servicemanagementsec").addClass("d-none");
                $("#servicemanagementsec").removeClass("d-block");
                $("#servicemanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#ordermanagementsec").hasClass("d-block")) {
                $("#ordermanagementsec").addClass("d-none");
                $("#ordermanagementsec").removeClass("d-block");
                $("#ordermanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#sendphotosec").hasClass("d-block")) {
                $("#sendphotosec").addClass("d-none");
                $("#sendphotosec").removeClass("d-block");
                $("#sendphotobtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#technicianmanagementsec").hasClass("d-block")) {
                $("#technicianmanagementsec").addClass("d-none");
                $("#technicianmanagementsec").removeClass("d-block");
                $("#technicianmanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#fairsec").hasClass("d-block")) {
                $("#fairsec").addClass("d-none");
                $("#fairsec").removeClass("d-block");
                $("#fairbtn").removeClass('active');
            }

            if ($("#fairmanagementsec").hasClass("d-block")) {
                $("#fairmanagementsec").addClass("d-none");
                $("#fairmanagementsec").removeClass("d-block");
                $("#fairmanagementbtn").removeClass('active');
            }

            if ($("#threewordssec").hasClass("d-block")) {
                $("#threewordssec").addClass("d-none");
                $("#threewordssec").removeClass("d-block");
                $("#threewordsbtn").removeClass('active');
            }

            if ($("#mastersec").hasClass("d-block")) {
                $("#mastersec").addClass("d-none");
                $("#mastersec").removeClass("d-block");
                $("#masterbtn").removeClass('active');
            }
        }
    })

    $("#threewordsbtn").click(function () {
        if ($("#threewordssec").hasClass("d-none")) {
            $("#threewordssec").addClass("d-block");
            $("#threewordssec").removeClass("d-none");
            $("#threewordsbtn").addClass('active');

            if ($("#profilesec").hasClass("d-block")) {
                $("#profilesec").addClass("d-none");
                $("#profilesec").removeClass("d-block");
                // $("#mainbtn").removeClass('active');
            }

            if ($("#mainsec").hasClass("d-block")) {
                $("#mainsec").addClass("d-none");
                $("#mainsec").removeClass("d-block");
                $("#mainbtn").removeClass('active');
            }

            if ($("#cardusagesec").hasClass("d-block")) {
                $("#cardusagesec").addClass("d-none");
                $("#cardusagesec").removeClass("d-block");
                $("#cardusagebtn").removeClass('active');
            }

            if ($("#orderstatussec").hasClass("d-block")) {
                $("#orderstatussec").addClass("d-none");
                $("#orderstatussec").removeClass("d-block");
                $("#orderstatusbtn").removeClass('active');
            }

            if ($("#paymentrequestsec").hasClass("d-block")) {
                $("#paymentrequestsec").addClass("d-none");
                $("#paymentrequestsec").removeClass("d-block");
                $("#paymentrequestbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#servicemanagementsec").hasClass("d-block")) {
                $("#servicemanagementsec").addClass("d-none");
                $("#servicemanagementsec").removeClass("d-block");
                $("#servicemanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#ordermanagementsec").hasClass("d-block")) {
                $("#ordermanagementsec").addClass("d-none");
                $("#ordermanagementsec").removeClass("d-block");
                $("#ordermanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#sendphotosec").hasClass("d-block")) {
                $("#sendphotosec").addClass("d-none");
                $("#sendphotosec").removeClass("d-block");
                $("#sendphotobtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#technicianmanagementsec").hasClass("d-block")) {
                $("#technicianmanagementsec").addClass("d-none");
                $("#technicianmanagementsec").removeClass("d-block");
                $("#technicianmanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#fairsec").hasClass("d-block")) {
                $("#fairsec").addClass("d-none");
                $("#fairsec").removeClass("d-block");
                $("#fairbtn").removeClass('active');
            }

            if ($("#fairmanagementsec").hasClass("d-block")) {
                $("#fairmanagementsec").addClass("d-none");
                $("#fairmanagementsec").removeClass("d-block");
                $("#fairmanagementbtn").removeClass('active');
            }

            if ($("#contractsec").hasClass("d-block")) {
                $("#contractsec").addClass("d-none");
                $("#contractsec").removeClass("d-block");
                $("#contractbtn").removeClass('active');
            }

            if ($("#mastersec").hasClass("d-block")) {
                $("#mastersec").addClass("d-none");
                $("#mastersec").removeClass("d-block");
                $("#masterbtn").removeClass('active');
            }
        }
    })

    $("#masterbtn").click(function () {
        if ($("#mastersec").hasClass("d-none")) {
            $("#mastersec").addClass("d-block");
            $("#mastersec").removeClass("d-none");
            $("#masterbtn").addClass('active');

            if ($("#profilesec").hasClass("d-block")) {
                $("#profilesec").addClass("d-none");
                $("#profilesec").removeClass("d-block");
                // $("#mainbtn").removeClass('active');
            }

            if ($("#mainsec").hasClass("d-block")) {
                $("#mainsec").addClass("d-none");
                $("#mainsec").removeClass("d-block");
                $("#mainbtn").removeClass('active');
            }

            if ($("#cardusagesec").hasClass("d-block")) {
                $("#cardusagesec").addClass("d-none");
                $("#cardusagesec").removeClass("d-block");
                $("#cardusagebtn").removeClass('active');
            }

            if ($("#orderstatussec").hasClass("d-block")) {
                $("#orderstatussec").addClass("d-none");
                $("#orderstatussec").removeClass("d-block");
                $("#orderstatusbtn").removeClass('active');
            }

            if ($("#paymentrequestsec").hasClass("d-block")) {
                $("#paymentrequestsec").addClass("d-none");
                $("#paymentrequestsec").removeClass("d-block");
                $("#paymentrequestbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#servicemanagementsec").hasClass("d-block")) {
                $("#servicemanagementsec").addClass("d-none");
                $("#servicemanagementsec").removeClass("d-block");
                $("#servicemanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#ordermanagementsec").hasClass("d-block")) {
                $("#ordermanagementsec").addClass("d-none");
                $("#ordermanagementsec").removeClass("d-block");
                $("#ordermanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#sendphotosec").hasClass("d-block")) {
                $("#sendphotosec").addClass("d-none");
                $("#sendphotosec").removeClass("d-block");
                $("#sendphotobtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#technicianmanagementsec").hasClass("d-block")) {
                $("#technicianmanagementsec").addClass("d-none");
                $("#technicianmanagementsec").removeClass("d-block");
                $("#technicianmanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            if ($("#fairsec").hasClass("d-block")) {
                $("#fairsec").addClass("d-none");
                $("#fairsec").removeClass("d-block");
                $("#fairbtn").removeClass('active');
            }

            if ($("#fairmanagementsec").hasClass("d-block")) {
                $("#fairmanagementsec").addClass("d-none");
                $("#fairmanagementsec").removeClass("d-block");
                $("#fairmanagementbtn").removeClass('active');
            }

            if ($("#contractsec").hasClass("d-block")) {
                $("#contractsec").addClass("d-none");
                $("#contractsec").removeClass("d-block");
                $("#contractbtn").removeClass('active');
            }

            if ($("#threewordssec").hasClass("d-block")) {
                $("#threewordssec").addClass("d-none");
                $("#threewordssec").removeClass("d-block");
                $("#threewordsbtn").removeClass('active');
            }
        }
    })
});

$(document).ready(function () {
    $('[data-bs-toggle="tooltip-progress"]').tooltip("enable");
});

