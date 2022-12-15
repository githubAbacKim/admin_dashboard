
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

/** SIDEBAR BUTTON FUNCTIONS  **/
$(document).ready(function () {
    // 0
    $("#profilebtn").click(function () {
        if ($("#profilesec").hasClass("d-none")) {
            $("#profilesec").addClass("d-block");
            $("#profilesec").removeClass("d-none");

            // 1
            if ($("#mainsec").hasClass("d-block")) {
                $("#mainsec").addClass("d-none");
                $("#mainsec").removeClass("d-block");
                $("#mainbtn").removeClass('active');
            }

            
            // 2
            if ($("#cardusagesec").hasClass("d-block")) {
                $("#cardusagesec").addClass("d-none");
                $("#cardusagesec").removeClass("d-block");
                $("#cardusagebtn").removeClass('active');
            }

            // 3
            if ($("#orderstatussec").hasClass("d-block")) {
                $("#orderstatussec").addClass("d-none");
                $("#orderstatussec").removeClass("d-block");
                $("#orderstatusbtn").removeClass('active');
            }

            // 4.1
            if ($("#paymentrequestsec").hasClass("d-block")) {
                $("#paymentrequestsec").addClass("d-none");
                $("#paymentrequestsec").removeClass("d-block");
                $("#paymentrequestbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.2
            if ($("#servicemanagementsec").hasClass("d-block")) {
                $("#servicemanagementsec").addClass("d-none");
                $("#servicemanagementsec").removeClass("d-block");
                $("#servicemanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.3
            if ($("#ordermanagementsec").hasClass("d-block")) {
                $("#ordermanagementsec").addClass("d-none");
                $("#ordermanagementsec").removeClass("d-block");
                $("#ordermanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.4
            if ($("#sendphotosec").hasClass("d-block")) {
                $("#sendphotosec").addClass("d-none");
                $("#sendphotosec").removeClass("d-block");
                $("#sendphotobtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.5
            if ($("#technicianmanagementsec").hasClass("d-block")) {
                $("#technicianmanagementsec").addClass("d-none");
                $("#technicianmanagementsec").removeClass("d-block");
                $("#technicianmanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 5.1
            if ($("#fairsec").hasClass("d-block")) {
                $("#fairsec").addClass("d-none");
                $("#fairsec").removeClass("d-block");
                $("#fairbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.2
            if ($("#fairmanagementsec").hasClass("d-block")) {
                $("#fairmanagementsec").addClass("d-none");
                $("#fairmanagementsec").removeClass("d-block");
                $("#fairmanagementbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.3
            if ($("#contractsec").hasClass("d-block")) {
                $("#contractsec").addClass("d-none");
                $("#contractsec").removeClass("d-block");
                $("#contractbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.4
            if ($("#threewordssec").hasClass("d-block")) {
                $("#threewordssec").addClass("d-none");
                $("#threewordssec").removeClass("d-block");
                $("#threewordsbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.5
            if ($("#mastersec").hasClass("d-block")) {
                $("#mastersec").addClass("d-none");
                $("#mastersec").removeClass("d-block");
                $("#masterbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }
        }
    })

    // 1
    $("#mainbtn").click(function () {
        if ($("#mainsec").hasClass("d-none")) {
            $("#mainsec").addClass("d-block");
            $("#mainsec").removeClass("d-none");
            $("#mainbtn").addClass('active');


            // 0
            if ($("#profilesec").hasClass("d-block")) {
                $("#profilesec").addClass("d-none");
                $("#profilesec").removeClass("d-block");
                // $("#mainbtn").removeClass('active');
            }

            // 2
            if ($("#cardusagesec").hasClass("d-block")) {
                $("#cardusagesec").addClass("d-none");
                $("#cardusagesec").removeClass("d-block");
                $("#cardusagebtn").removeClass('active');
            }

            // 3
            if ($("#orderstatussec").hasClass("d-block")) {
                $("#orderstatussec").addClass("d-none");
                $("#orderstatussec").removeClass("d-block");
                $("#orderstatusbtn").removeClass('active');
            }

            // 4.1
            if ($("#paymentrequestsec").hasClass("d-block")) {
                $("#paymentrequestsec").addClass("d-none");
                $("#paymentrequestsec").removeClass("d-block");
                $("#paymentrequestbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.2
            if ($("#servicemanagementsec").hasClass("d-block")) {
                $("#servicemanagementsec").addClass("d-none");
                $("#servicemanagementsec").removeClass("d-block");
                $("#servicemanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.3
            if ($("#ordermanagementsec").hasClass("d-block")) {
                $("#ordermanagementsec").addClass("d-none");
                $("#ordermanagementsec").removeClass("d-block");
                $("#ordermanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.4
            if ($("#sendphotosec").hasClass("d-block")) {
                $("#sendphotosec").addClass("d-none");
                $("#sendphotosec").removeClass("d-block");
                $("#sendphotobtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.5
            if ($("#technicianmanagementsec").hasClass("d-block")) {
                $("#technicianmanagementsec").addClass("d-none");
                $("#technicianmanagementsec").removeClass("d-block");
                $("#technicianmanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 5.1
            if ($("#fairsec").hasClass("d-block")) {
                $("#fairsec").addClass("d-none");
                $("#fairsec").removeClass("d-block");
                $("#fairbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.2
            if ($("#fairmanagementsec").hasClass("d-block")) {
                $("#fairmanagementsec").addClass("d-none");
                $("#fairmanagementsec").removeClass("d-block");
                $("#fairmanagementbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.3
            if ($("#contractsec").hasClass("d-block")) {
                $("#contractsec").addClass("d-none");
                $("#contractsec").removeClass("d-block");
                $("#contractbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.4
            if ($("#threewordssec").hasClass("d-block")) {
                $("#threewordssec").addClass("d-none");
                $("#threewordssec").removeClass("d-block");
                $("#threewordsbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.5
            if ($("#mastersec").hasClass("d-block")) {
                $("#mastersec").addClass("d-none");
                $("#mastersec").removeClass("d-block");
                $("#masterbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }
        }
    })

    // 2
    $("#cardusagebtn").click(function () {
        if ($("#cardusagesec").hasClass("d-none")) {
            $("#cardusagesec").addClass("d-block");
            $("#cardusagesec").removeClass("d-none");
            $("#cardusagebtn").addClass('active');

            // 0
            if ($("#profilesec").hasClass("d-block")) {
                $("#profilesec").addClass("d-none");
                $("#profilesec").removeClass("d-block");
                // $("#mainbtn").removeClass('active');
            }

            // 1
            if ($("#mainsec").hasClass("d-block")) {
                $("#mainsec").addClass("d-none");
                $("#mainsec").removeClass("d-block");
                $("#mainbtn").removeClass('active');
            }

            // 3
            if ($("#orderstatussec").hasClass("d-block")) {
                $("#orderstatussec").addClass("d-none");
                $("#orderstatussec").removeClass("d-block");
                $("#orderstatusbtn").removeClass('active');
            }

            // 4.1
            if ($("#paymentrequestsec").hasClass("d-block")) {
                $("#paymentrequestsec").addClass("d-none");
                $("#paymentrequestsec").removeClass("d-block");
                $("#paymentrequestbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.2
            if ($("#servicemanagementsec").hasClass("d-block")) {
                $("#servicemanagementsec").addClass("d-none");
                $("#servicemanagementsec").removeClass("d-block");
                $("#servicemanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.3
            if ($("#ordermanagementsec").hasClass("d-block")) {
                $("#ordermanagementsec").addClass("d-none");
                $("#ordermanagementsec").removeClass("d-block");
                $("#ordermanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.4
            if ($("#sendphotosec").hasClass("d-block")) {
                $("#sendphotosec").addClass("d-none");
                $("#sendphotosec").removeClass("d-block");
                $("#sendphotobtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.5
            if ($("#technicianmanagementsec").hasClass("d-block")) {
                $("#technicianmanagementsec").addClass("d-none");
                $("#technicianmanagementsec").removeClass("d-block");
                $("#technicianmanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 5.1
            if ($("#fairsec").hasClass("d-block")) {
                $("#fairsec").addClass("d-none");
                $("#fairsec").removeClass("d-block");
                $("#fairbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.2
            if ($("#fairmanagementsec").hasClass("d-block")) {
                $("#fairmanagementsec").addClass("d-none");
                $("#fairmanagementsec").removeClass("d-block");
                $("#fairmanagementbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.3
            if ($("#contractsec").hasClass("d-block")) {
                $("#contractsec").addClass("d-none");
                $("#contractsec").removeClass("d-block");
                $("#contractbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.4
            if ($("#threewordssec").hasClass("d-block")) {
                $("#threewordssec").addClass("d-none");
                $("#threewordssec").removeClass("d-block");
                $("#threewordsbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.5
            if ($("#mastersec").hasClass("d-block")) {
                $("#mastersec").addClass("d-none");
                $("#mastersec").removeClass("d-block");
                $("#masterbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }
        }
    })

    // 3
    $("#orderstatusbtn").click(function () {
        if ($("#orderstatussec").hasClass("d-none")) {
            $("#orderstatussec").addClass("d-block");
            $("#orderstatussec").removeClass("d-none");
            $("#orderstatusbtn").addClass('active');

            // 0
            if ($("#profilesec").hasClass("d-block")) {
                $("#profilesec").addClass("d-none");
                $("#profilesec").removeClass("d-block");
                // $("#mainbtn").removeClass('active');
            }

            // 1
            if ($("#mainsec").hasClass("d-block")) {
                $("#mainsec").addClass("d-none");
                $("#mainsec").removeClass("d-block");
                $("#mainbtn").removeClass('active');
            }

            // 2
            if ($("#cardusagesec").hasClass("d-block")) {
                $("#cardusagesec").addClass("d-none");
                $("#cardusagesec").removeClass("d-block");
                $("#cardusagebtn").removeClass('active');
            }

            // 4.1
            if ($("#paymentrequestsec").hasClass("d-block")) {
                $("#paymentrequestsec").addClass("d-none");
                $("#paymentrequestsec").removeClass("d-block");
                $("#paymentrequestbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');

            }

            // 4.2
            if ($("#servicemanagementsec").hasClass("d-block")) {
                $("#servicemanagementsec").addClass("d-none");
                $("#servicemanagementsec").removeClass("d-block");
                $("#servicemanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.3
            if ($("#ordermanagementsec").hasClass("d-block")) {
                $("#ordermanagementsec").addClass("d-none");
                $("#ordermanagementsec").removeClass("d-block");
                $("#ordermanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.4
            if ($("#sendphotosec").hasClass("d-block")) {
                $("#sendphotosec").addClass("d-none");
                $("#sendphotosec").removeClass("d-block");
                $("#sendphotobtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.5
            if ($("#technicianmanagementsec").hasClass("d-block")) {
                $("#technicianmanagementsec").addClass("d-none");
                $("#technicianmanagementsec").removeClass("d-block");
                $("#technicianmanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 5.1
            if ($("#fairsec").hasClass("d-block")) {
                $("#fairsec").addClass("d-none");
                $("#fairsec").removeClass("d-block");
                $("#fairbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.2
            if ($("#fairmanagementsec").hasClass("d-block")) {
                $("#fairmanagementsec").addClass("d-none");
                $("#fairmanagementsec").removeClass("d-block");
                $("#fairmanagementbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.3
            if ($("#contractsec").hasClass("d-block")) {
                $("#contractsec").addClass("d-none");
                $("#contractsec").removeClass("d-block");
                $("#contractbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.4
            if ($("#threewordssec").hasClass("d-block")) {
                $("#threewordssec").addClass("d-none");
                $("#threewordssec").removeClass("d-block");
                $("#threewordsbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.5
            if ($("#mastersec").hasClass("d-block")) {
                $("#mastersec").addClass("d-none");
                $("#mastersec").removeClass("d-block");
                $("#masterbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }
        }
    })

    // 4.1
    $("#paymentrequestbtn").click(function () {
        if ($("#paymentrequestsec").hasClass("d-none")) {
            $("#paymentrequestsec").addClass("d-block");
            $("#paymentrequestsec").removeClass("d-none");
            $("#paymentrequestbtn").addClass('active');

            // 0
            if ($("#profilesec").hasClass("d-block")) {
                $("#profilesec").addClass("d-none");
                $("#profilesec").removeClass("d-block");
                // $("#mainbtn").removeClass('active');
            }

            // 1
            if ($("#mainsec").hasClass("d-block")) {
                $("#mainsec").addClass("d-none");
                $("#mainsec").removeClass("d-block");
                $("#mainbtn").removeClass('active');
            }

            // 2
            if ($("#cardusagesec").hasClass("d-block")) {
                $("#cardusagesec").addClass("d-none");
                $("#cardusagesec").removeClass("d-block");
                $("#cardusagebtn").removeClass('active');
            }

            // 3
            if ($("#orderstatussec").hasClass("d-block")) {
                $("#orderstatussec").addClass("d-none");
                $("#orderstatussec").removeClass("d-block");
                $("#orderstatusbtn").removeClass('active');
            }

            // 4.2
            if ($("#servicemanagementsec").hasClass("d-block")) {
                $("#servicemanagementsec").addClass("d-none");
                $("#servicemanagementsec").removeClass("d-block");
                $("#servicemanagementbtn").removeClass('active');
            }

            // 4.3
            if ($("#ordermanagementsec").hasClass("d-block")) {
                $("#ordermanagementsec").addClass("d-none");
                $("#ordermanagementsec").removeClass("d-block");
                $("#ordermanagementbtn").removeClass('active');
            }

            // 4.4
            if ($("#sendphotosec").hasClass("d-block")) {
                $("#sendphotosec").addClass("d-none");
                $("#sendphotosec").removeClass("d-block");
                $("#sendphotobtn").removeClass('active');
            }

            // 4.5
            if ($("#technicianmanagementsec").hasClass("d-block")) {
                $("#technicianmanagementsec").addClass("d-none");
                $("#technicianmanagementsec").removeClass("d-block");
                $("#technicianmanagementbtn").removeClass('active');
            }

            // 5.1
            if ($("#fairsec").hasClass("d-block")) {
                $("#fairsec").addClass("d-none");
                $("#fairsec").removeClass("d-block");
                $("#fairbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.2
            if ($("#fairmanagementsec").hasClass("d-block")) {
                $("#fairmanagementsec").addClass("d-none");
                $("#fairmanagementsec").removeClass("d-block");
                $("#fairmanagementbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.3
            if ($("#contractsec").hasClass("d-block")) {
                $("#contractsec").addClass("d-none");
                $("#contractsec").removeClass("d-block");
                $("#contractbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.4
            if ($("#threewordssec").hasClass("d-block")) {
                $("#threewordssec").addClass("d-none");
                $("#threewordssec").removeClass("d-block");
                $("#threewordsbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.5
            if ($("#mastersec").hasClass("d-block")) {
                $("#mastersec").addClass("d-none");
                $("#mastersec").removeClass("d-block");
                $("#masterbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }
        }
    })

    // 4.2
    $("#servicemanagementbtn").click(function () {
        if ($("#servicemanagementsec").hasClass("d-none")) {
            $("#servicemanagementsec").addClass("d-block");
            $("#servicemanagementsec").removeClass("d-none");
            $("#servicemanagementbtn").addClass('active');

            // 0
            // 0
            if ($("#profilesec").hasClass("d-block")) {
                $("#profilesec").addClass("d-none");
                $("#profilesec").removeClass("d-block");
                // $("#mainbtn").removeClass('active');
            }

            // 1
            if ($("#mainsec").hasClass("d-block")) {
                $("#mainsec").addClass("d-none");
                $("#mainsec").removeClass("d-block");
                $("#mainbtn").removeClass('active');
            }

            // 2
            if ($("#cardusagesec").hasClass("d-block")) {
                $("#cardusagesec").addClass("d-none");
                $("#cardusagesec").removeClass("d-block");
                $("#cardusagebtn").removeClass('active');
            }

            // 3
            if ($("#orderstatussec").hasClass("d-block")) {
                $("#orderstatussec").addClass("d-none");
                $("#orderstatussec").removeClass("d-block");
                $("#orderstatusbtn").removeClass('active');
            }


            // 4.1
            if ($("#paymentrequestsec").hasClass("d-block")) {
                $("#paymentrequestsec").addClass("d-none");
                $("#paymentrequestsec").removeClass("d-block");
                $("#paymentrequestbtn").removeClass('active');
            }


            // 4.3
            if ($("#ordermanagementsec").hasClass("d-block")) {
                $("#ordermanagementsec").addClass("d-none");
                $("#ordermanagementsec").removeClass("d-block");
                $("#ordermanagementbtn").removeClass('active');
            }


            // 4.4
            if ($("#sendphotosec").hasClass("d-block")) {
                $("#sendphotosec").addClass("d-none");
                $("#sendphotosec").removeClass("d-block");
                $("#sendphotobtn").removeClass('active');
            }


            // 4.5
            if ($("#technicianmanagementsec").hasClass("d-block")) {
                $("#technicianmanagementsec").addClass("d-none");
                $("#technicianmanagementsec").removeClass("d-block");
                $("#technicianmanagementbtn").removeClass('active');
            }


            // 5.1
            if ($("#fairsec").hasClass("d-block")) {
                $("#fairsec").addClass("d-none");
                $("#fairsec").removeClass("d-block");
                $("#fairbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }


            // 5.2
            if ($("#fairmanagementsec").hasClass("d-block")) {
                $("#fairmanagementsec").addClass("d-none");
                $("#fairmanagementsec").removeClass("d-block");
                $("#fairmanagementbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }


            // 5.3
            if ($("#contractsec").hasClass("d-block")) {
                $("#contractsec").addClass("d-none");
                $("#contractsec").removeClass("d-block");
                $("#contractbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }


            // 5.4
            if ($("#threewordssec").hasClass("d-block")) {
                $("#threewordssec").addClass("d-none");
                $("#threewordssec").removeClass("d-block");
                $("#threewordsbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }


            // 5.5
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

            // 0
            if ($("#profilesec").hasClass("d-block")) {
                $("#profilesec").addClass("d-none");
                $("#profilesec").removeClass("d-block");
                // $("#mainbtn").removeClass('active');
            }

            // 1
            if ($("#mainsec").hasClass("d-block")) {
                $("#mainsec").addClass("d-none");
                $("#mainsec").removeClass("d-block");
                $("#mainbtn").removeClass('active');
            }

            // 2
            if ($("#cardusagesec").hasClass("d-block")) {
                $("#cardusagesec").addClass("d-none");
                $("#cardusagesec").removeClass("d-block");
                $("#cardusagebtn").removeClass('active');
            }

            // 3
            if ($("#orderstatussec").hasClass("d-block")) {
                $("#orderstatussec").addClass("d-none");
                $("#orderstatussec").removeClass("d-block");
                $("#orderstatusbtn").removeClass('active');
            }

            // 4.1
            if ($("#paymentrequestsec").hasClass("d-block")) {
                $("#paymentrequestsec").addClass("d-none");
                $("#paymentrequestsec").removeClass("d-block");
                $("#paymentrequestbtn").removeClass('active');
            }

            // 4.2
            if ($("#servicemanagementsec").hasClass("d-block")) {
                $("#servicemanagementsec").addClass("d-none");
                $("#servicemanagementsec").removeClass("d-block");
                $("#servicemanagementbtn").removeClass('active');
            }

            // 4.4
            if ($("#sendphotosec").hasClass("d-block")) {
                $("#sendphotosec").addClass("d-none");
                $("#sendphotosec").removeClass("d-block");
                $("#sendphotobtn").removeClass('active');
            }

            // 4.5
            if ($("#technicianmanagementsec").hasClass("d-block")) {
                $("#technicianmanagementsec").addClass("d-none");
                $("#technicianmanagementsec").removeClass("d-block");
                $("#technicianmanagementbtn").removeClass('active');
            }

            // 5.1
            if ($("#fairsec").hasClass("d-block")) {
                $("#fairsec").addClass("d-none");
                $("#fairsec").removeClass("d-block");
                $("#fairbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.2
            if ($("#fairmanagementsec").hasClass("d-block")) {
                $("#fairmanagementsec").addClass("d-none");
                $("#fairmanagementsec").removeClass("d-block");
                $("#fairmanagementbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.3
            if ($("#contractsec").hasClass("d-block")) {
                $("#contractsec").addClass("d-none");
                $("#contractsec").removeClass("d-block");
                $("#contractbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.4
            if ($("#threewordssec").hasClass("d-block")) {
                $("#threewordssec").addClass("d-none");
                $("#threewordssec").removeClass("d-block");
                $("#threewordsbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.5
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

            // 0
            if ($("#profilesec").hasClass("d-block")) {
                $("#profilesec").addClass("d-none");
                $("#profilesec").removeClass("d-block");
                // $("#mainbtn").removeClass('active');
            }

            // 1
            if ($("#mainsec").hasClass("d-block")) {
                $("#mainsec").addClass("d-none");
                $("#mainsec").removeClass("d-block");
                $("#mainbtn").removeClass('active');
            }

            // 2
            if ($("#cardusagesec").hasClass("d-block")) {
                $("#cardusagesec").addClass("d-none");
                $("#cardusagesec").removeClass("d-block");
                $("#cardusagebtn").removeClass('active');
            }

            // 3
            if ($("#orderstatussec").hasClass("d-block")) {
                $("#orderstatussec").addClass("d-none");
                $("#orderstatussec").removeClass("d-block");
                $("#orderstatusbtn").removeClass('active');
            }

            // 4.1
            if ($("#paymentrequestsec").hasClass("d-block")) {
                $("#paymentrequestsec").addClass("d-none");
                $("#paymentrequestsec").removeClass("d-block");
                $("#paymentrequestbtn").removeClass('active');
            }

            // 4.2
            if ($("#servicemanagementsec").hasClass("d-block")) {
                $("#servicemanagementsec").addClass("d-none");
                $("#servicemanagementsec").removeClass("d-block");
                $("#servicemanagementbtn").removeClass('active');
            }

            // 4.3
            if ($("#ordermanagementsec").hasClass("d-block")) {
                $("#ordermanagementsec").addClass("d-none");
                $("#ordermanagementsec").removeClass("d-block");
                $("#ordermanagementbtn").removeClass('active');
            }

            // 4.5
            if ($("#technicianmanagementsec").hasClass("d-block")) {
                $("#technicianmanagementsec").addClass("d-none");
                $("#technicianmanagementsec").removeClass("d-block");
                $("#technicianmanagementbtn").removeClass('active');
            }

            // 5.1
            if ($("#fairsec").hasClass("d-block")) {
                $("#fairsec").addClass("d-none");
                $("#fairsec").removeClass("d-block");
                $("#fairbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.2
            if ($("#fairmanagementsec").hasClass("d-block")) {
                $("#fairmanagementsec").addClass("d-none");
                $("#fairmanagementsec").removeClass("d-block");
                $("#fairmanagementbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.3
            if ($("#contractsec").hasClass("d-block")) {
                $("#contractsec").addClass("d-none");
                $("#contractsec").removeClass("d-block");
                $("#contractbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.4
            if ($("#threewordssec").hasClass("d-block")) {
                $("#threewordssec").addClass("d-none");
                $("#threewordssec").removeClass("d-block");
                $("#threewordsbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.5
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

            // 0
            if ($("#profilesec").hasClass("d-block")) {
                $("#profilesec").addClass("d-none");
                $("#profilesec").removeClass("d-block");
                // $("#mainbtn").removeClass('active');
            }

            // 1
            if ($("#mainsec").hasClass("d-block")) {
                $("#mainsec").addClass("d-none");
                $("#mainsec").removeClass("d-block");
                $("#mainbtn").removeClass('active');
            }

            // 2
            if ($("#cardusagesec").hasClass("d-block")) {
                $("#cardusagesec").addClass("d-none");
                $("#cardusagesec").removeClass("d-block");
                $("#cardusagebtn").removeClass('active');
            }

            // 3
            if ($("#orderstatussec").hasClass("d-block")) {
                $("#orderstatussec").addClass("d-none");
                $("#orderstatussec").removeClass("d-block");
                $("#orderstatusbtn").removeClass('active');
            }

            // 4.1
            if ($("#paymentrequestsec").hasClass("d-block")) {
                $("#paymentrequestsec").addClass("d-none");
                $("#paymentrequestsec").removeClass("d-block");
                $("#paymentrequestbtn").removeClass('active');
            }

            // 4.2
            if ($("#servicemanagementsec").hasClass("d-block")) {
                $("#servicemanagementsec").addClass("d-none");
                $("#servicemanagementsec").removeClass("d-block");
                $("#servicemanagementbtn").removeClass('active');
            }

            // 4.3
            if ($("#ordermanagementsec").hasClass("d-block")) {
                $("#ordermanagementsec").addClass("d-none");
                $("#ordermanagementsec").removeClass("d-block");
                $("#ordermanagementbtn").removeClass('active');
            }

            // 4.4
            if ($("#sendphotosec").hasClass("d-block")) {
                $("#sendphotosec").addClass("d-none");
                $("#sendphotosec").removeClass("d-block");
                $("#sendphotobtn").removeClass('active');
            }

            // 5.1
            if ($("#fairsec").hasClass("d-block")) {
                $("#fairsec").addClass("d-none");
                $("#fairsec").removeClass("d-block");
                $("#fairbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.2
            if ($("#fairmanagementsec").hasClass("d-block")) {
                $("#fairmanagementsec").addClass("d-none");
                $("#fairmanagementsec").removeClass("d-block");
                $("#fairmanagementbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.3
            if ($("#contractsec").hasClass("d-block")) {
                $("#contractsec").addClass("d-none");
                $("#contractsec").removeClass("d-block");
                $("#contractbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.4
            if ($("#threewordssec").hasClass("d-block")) {
                $("#threewordssec").addClass("d-none");
                $("#threewordssec").removeClass("d-block");
                $("#threewordsbtn").removeClass('active');
                $("#menubtn").addClass('collapsed');
                $("#menu-collapse").removeClass('show');
            }

            // 5.5
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

            // 0
            if ($("#profilesec").hasClass("d-block")) {
                $("#profilesec").addClass("d-none");
                $("#profilesec").removeClass("d-block");
                // $("#mainbtn").removeClass('active');
            }

            // 1
            if ($("#mainsec").hasClass("d-block")) {
                $("#mainsec").addClass("d-none");
                $("#mainsec").removeClass("d-block");
                $("#mainbtn").removeClass('active');
            }

            // 2
            if ($("#cardusagesec").hasClass("d-block")) {
                $("#cardusagesec").addClass("d-none");
                $("#cardusagesec").removeClass("d-block");
                $("#cardusagebtn").removeClass('active');
            }

            // 3
            if ($("#orderstatussec").hasClass("d-block")) {
                $("#orderstatussec").addClass("d-none");
                $("#orderstatussec").removeClass("d-block");
                $("#orderstatusbtn").removeClass('active');
            }

            // 4.1
            if ($("#paymentrequestsec").hasClass("d-block")) {
                $("#paymentrequestsec").addClass("d-none");
                $("#paymentrequestsec").removeClass("d-block");
                $("#paymentrequestbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.2
            if ($("#servicemanagementsec").hasClass("d-block")) {
                $("#servicemanagementsec").addClass("d-none");
                $("#servicemanagementsec").removeClass("d-block");
                $("#servicemanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.3
            if ($("#ordermanagementsec").hasClass("d-block")) {
                $("#ordermanagementsec").addClass("d-none");
                $("#ordermanagementsec").removeClass("d-block");
                $("#ordermanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.4
            if ($("#sendphotosec").hasClass("d-block")) {
                $("#sendphotosec").addClass("d-none");
                $("#sendphotosec").removeClass("d-block");
                $("#sendphotobtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.5
            if ($("#technicianmanagementsec").hasClass("d-block")) {
                $("#technicianmanagementsec").addClass("d-none");
                $("#technicianmanagementsec").removeClass("d-block");
                $("#technicianmanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 5.2
            if ($("#fairmanagementsec").hasClass("d-block")) {
                $("#fairmanagementsec").addClass("d-none");
                $("#fairmanagementsec").removeClass("d-block");
                $("#fairmanagementbtn").removeClass('active');
            }

            // 5.3
            if ($("#contractsec").hasClass("d-block")) {
                $("#contractsec").addClass("d-none");
                $("#contractsec").removeClass("d-block");
                $("#contractbtn").removeClass('active');
            }

            // 5.4
            if ($("#threewordssec").hasClass("d-block")) {
                $("#threewordssec").addClass("d-none");
                $("#threewordssec").removeClass("d-block");
                $("#threewordsbtn").removeClass('active');
            }

            // 5.5
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

            // 0
            if ($("#profilesec").hasClass("d-block")) {
                $("#profilesec").addClass("d-none");
                $("#profilesec").removeClass("d-block");
                // $("#mainbtn").removeClass('active');
            }

            // 1
            if ($("#mainsec").hasClass("d-block")) {
                $("#mainsec").addClass("d-none");
                $("#mainsec").removeClass("d-block");
                $("#mainbtn").removeClass('active');
            }

            // 2
            if ($("#cardusagesec").hasClass("d-block")) {
                $("#cardusagesec").addClass("d-none");
                $("#cardusagesec").removeClass("d-block");
                $("#cardusagebtn").removeClass('active');
            }

            // 3
            if ($("#orderstatussec").hasClass("d-block")) {
                $("#orderstatussec").addClass("d-none");
                $("#orderstatussec").removeClass("d-block");
                $("#orderstatusbtn").removeClass('active');
            }

            // 4.1
            if ($("#paymentrequestsec").hasClass("d-block")) {
                $("#paymentrequestsec").addClass("d-none");
                $("#paymentrequestsec").removeClass("d-block");
                $("#paymentrequestbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.2
            if ($("#servicemanagementsec").hasClass("d-block")) {
                $("#servicemanagementsec").addClass("d-none");
                $("#servicemanagementsec").removeClass("d-block");
                $("#servicemanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.3
            if ($("#ordermanagementsec").hasClass("d-block")) {
                $("#ordermanagementsec").addClass("d-none");
                $("#ordermanagementsec").removeClass("d-block");
                $("#ordermanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.4
            if ($("#sendphotosec").hasClass("d-block")) {
                $("#sendphotosec").addClass("d-none");
                $("#sendphotosec").removeClass("d-block");
                $("#sendphotobtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.5
            if ($("#technicianmanagementsec").hasClass("d-block")) {
                $("#technicianmanagementsec").addClass("d-none");
                $("#technicianmanagementsec").removeClass("d-block");
                $("#technicianmanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 5.1
            if ($("#fairsec").hasClass("d-block")) {
                $("#fairsec").addClass("d-none");
                $("#fairsec").removeClass("d-block");
                $("#fairbtn").removeClass('active');
            }

            // 5.3
            if ($("#contractsec").hasClass("d-block")) {
                $("#contractsec").addClass("d-none");
                $("#contractsec").removeClass("d-block");
                $("#contractbtn").removeClass('active');
            }

            // 5.4
            if ($("#threewordssec").hasClass("d-block")) {
                $("#threewordssec").addClass("d-none");
                $("#threewordssec").removeClass("d-block");
                $("#threewordsbtn").removeClass('active');
            }

            // 5.5
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

            // 0
            if ($("#profilesec").hasClass("d-block")) {
                $("#profilesec").addClass("d-none");
                $("#profilesec").removeClass("d-block");
                // $("#mainbtn").removeClass('active');
            }

            // 1
            if ($("#mainsec").hasClass("d-block")) {
                $("#mainsec").addClass("d-none");
                $("#mainsec").removeClass("d-block");
                $("#mainbtn").removeClass('active');
            }

            // 2
            if ($("#cardusagesec").hasClass("d-block")) {
                $("#cardusagesec").addClass("d-none");
                $("#cardusagesec").removeClass("d-block");
                $("#cardusagebtn").removeClass('active');
            }

            // 3
            if ($("#orderstatussec").hasClass("d-block")) {
                $("#orderstatussec").addClass("d-none");
                $("#orderstatussec").removeClass("d-block");
                $("#orderstatusbtn").removeClass('active');
            }

            // 4.1
            if ($("#paymentrequestsec").hasClass("d-block")) {
                $("#paymentrequestsec").addClass("d-none");
                $("#paymentrequestsec").removeClass("d-block");
                $("#paymentrequestbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.2
            if ($("#servicemanagementsec").hasClass("d-block")) {
                $("#servicemanagementsec").addClass("d-none");
                $("#servicemanagementsec").removeClass("d-block");
                $("#servicemanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.3
            if ($("#ordermanagementsec").hasClass("d-block")) {
                $("#ordermanagementsec").addClass("d-none");
                $("#ordermanagementsec").removeClass("d-block");
                $("#ordermanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.4
            if ($("#sendphotosec").hasClass("d-block")) {
                $("#sendphotosec").addClass("d-none");
                $("#sendphotosec").removeClass("d-block");
                $("#sendphotobtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.5
            if ($("#technicianmanagementsec").hasClass("d-block")) {
                $("#technicianmanagementsec").addClass("d-none");
                $("#technicianmanagementsec").removeClass("d-block");
                $("#technicianmanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 5.1
            if ($("#fairsec").hasClass("d-block")) {
                $("#fairsec").addClass("d-none");
                $("#fairsec").removeClass("d-block");
                $("#fairbtn").removeClass('active');
            }

            // 5.2
            if ($("#fairmanagementsec").hasClass("d-block")) {
                $("#fairmanagementsec").addClass("d-none");
                $("#fairmanagementsec").removeClass("d-block");
                $("#fairmanagementbtn").removeClass('active');
            }

            // 5.4
            if ($("#threewordssec").hasClass("d-block")) {
                $("#threewordssec").addClass("d-none");
                $("#threewordssec").removeClass("d-block");
                $("#threewordsbtn").removeClass('active');
            }

            // 5.5
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

            // 0
            if ($("#profilesec").hasClass("d-block")) {
                $("#profilesec").addClass("d-none");
                $("#profilesec").removeClass("d-block");
                // $("#mainbtn").removeClass('active');
            }

            // 1
            if ($("#mainsec").hasClass("d-block")) {
                $("#mainsec").addClass("d-none");
                $("#mainsec").removeClass("d-block");
                $("#mainbtn").removeClass('active');
            }

            // 2
            if ($("#cardusagesec").hasClass("d-block")) {
                $("#cardusagesec").addClass("d-none");
                $("#cardusagesec").removeClass("d-block");
                $("#cardusagebtn").removeClass('active');
            }

            // 3
            if ($("#orderstatussec").hasClass("d-block")) {
                $("#orderstatussec").addClass("d-none");
                $("#orderstatussec").removeClass("d-block");
                $("#orderstatusbtn").removeClass('active');
            }

            // 4.1
            if ($("#paymentrequestsec").hasClass("d-block")) {
                $("#paymentrequestsec").addClass("d-none");
                $("#paymentrequestsec").removeClass("d-block");
                $("#paymentrequestbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.2
            if ($("#servicemanagementsec").hasClass("d-block")) {
                $("#servicemanagementsec").addClass("d-none");
                $("#servicemanagementsec").removeClass("d-block");
                $("#servicemanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.3
            if ($("#ordermanagementsec").hasClass("d-block")) {
                $("#ordermanagementsec").addClass("d-none");
                $("#ordermanagementsec").removeClass("d-block");
                $("#ordermanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.4
            if ($("#sendphotosec").hasClass("d-block")) {
                $("#sendphotosec").addClass("d-none");
                $("#sendphotosec").removeClass("d-block");
                $("#sendphotobtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.5
            if ($("#technicianmanagementsec").hasClass("d-block")) {
                $("#technicianmanagementsec").addClass("d-none");
                $("#technicianmanagementsec").removeClass("d-block");
                $("#technicianmanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 5.1
            if ($("#fairsec").hasClass("d-block")) {
                $("#fairsec").addClass("d-none");
                $("#fairsec").removeClass("d-block");
                $("#fairbtn").removeClass('active');
            }

            // 5.2
            if ($("#fairmanagementsec").hasClass("d-block")) {
                $("#fairmanagementsec").addClass("d-none");
                $("#fairmanagementsec").removeClass("d-block");
                $("#fairmanagementbtn").removeClass('active');
            }

            // 5.3
            if ($("#contractsec").hasClass("d-block")) {
                $("#contractsec").addClass("d-none");
                $("#contractsec").removeClass("d-block");
                $("#contractbtn").removeClass('active');
            }

            // 5.5
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

            // 0
            if ($("#profilesec").hasClass("d-block")) {
                $("#profilesec").addClass("d-none");
                $("#profilesec").removeClass("d-block");
                // $("#mainbtn").removeClass('active');
            }

            // 1
            if ($("#mainsec").hasClass("d-block")) {
                $("#mainsec").addClass("d-none");
                $("#mainsec").removeClass("d-block");
                $("#mainbtn").removeClass('active');
            }

            // 2
            if ($("#cardusagesec").hasClass("d-block")) {
                $("#cardusagesec").addClass("d-none");
                $("#cardusagesec").removeClass("d-block");
                $("#cardusagebtn").removeClass('active');
            }

            // 3
            if ($("#orderstatussec").hasClass("d-block")) {
                $("#orderstatussec").addClass("d-none");
                $("#orderstatussec").removeClass("d-block");
                $("#orderstatusbtn").removeClass('active');
            }

            // 4.1
            if ($("#paymentrequestsec").hasClass("d-block")) {
                $("#paymentrequestsec").addClass("d-none");
                $("#paymentrequestsec").removeClass("d-block");
                $("#paymentrequestbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.2
            if ($("#servicemanagementsec").hasClass("d-block")) {
                $("#servicemanagementsec").addClass("d-none");
                $("#servicemanagementsec").removeClass("d-block");
                $("#servicemanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.3
            if ($("#ordermanagementsec").hasClass("d-block")) {
                $("#ordermanagementsec").addClass("d-none");
                $("#ordermanagementsec").removeClass("d-block");
                $("#ordermanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.4
            if ($("#sendphotosec").hasClass("d-block")) {
                $("#sendphotosec").addClass("d-none");
                $("#sendphotosec").removeClass("d-block");
                $("#sendphotobtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 4.5
            if ($("#technicianmanagementsec").hasClass("d-block")) {
                $("#technicianmanagementsec").addClass("d-none");
                $("#technicianmanagementsec").removeClass("d-block");
                $("#technicianmanagementbtn").removeClass('active');
                $("#setbtn").addClass('collapsed');
                $("#set-collapse").removeClass('show');
            }

            // 5.1
            if ($("#fairsec").hasClass("d-block")) {
                $("#fairsec").addClass("d-none");
                $("#fairsec").removeClass("d-block");
                $("#fairbtn").removeClass('active');
            }

            // 5.2
            if ($("#fairmanagementsec").hasClass("d-block")) {
                $("#fairmanagementsec").addClass("d-none");
                $("#fairmanagementsec").removeClass("d-block");
                $("#fairmanagementbtn").removeClass('active');
            }

            // 5.3
            if ($("#contractsec").hasClass("d-block")) {
                $("#contractsec").addClass("d-none");
                $("#contractsec").removeClass("d-block");
                $("#contractbtn").removeClass('active');
            }

            // 5.4
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

