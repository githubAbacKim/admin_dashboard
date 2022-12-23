/** SIDEBAR BUTTON FUNCTIONS  **/
$(document).ready(function () {
    // 0
    $("#profilebtn").click(function () {
        if ($("#profilesec").hasClass("d-none")) {
            $("#profilesec").addClass("d-block");
            $("#profilesec").removeClass("d-none");

            check_mainsec();
            check_cardusagesec();
            check_orderstatussec();
            check_paymentrequestsec();
            check_servicemanagementsec();
            check_ordermanagementsec();
            check_sendphotosec();
            check_technicianmanagementsec();
            check_fairsec();
            check_fairmanagementsec();
            check_contractsec();
            check_counsellingsec();
            check_mastersec();
            set_accordion();
            menu_accordion();
        }
    })

    // 1
    $("#mainbtn").click(function () {
        if ($("#mainsec").hasClass("d-none")) {
            $("#mainsec").addClass("d-block");
            $("#mainsec").removeClass("d-none");
            $("#mainbtn").addClass('active');

            check_profilesec();
            check_cardusagesec();
            check_orderstatussec();
            check_paymentrequestsec();
            check_servicemanagementsec();
            check_ordermanagementsec();
            check_sendphotosec();
            check_technicianmanagementsec();
            check_fairsec();
            check_fairmanagementsec();
            check_contractsec();
            check_counsellingsec();
            check_mastersec();
            set_accordion();
            menu_accordion();
        }
    })

    // 2
    $("#cardusagebtn").click(function () {
        if ($("#cardusagesec").hasClass("d-none")) {
            $("#cardusagesec").addClass("d-block");
            $("#cardusagesec").removeClass("d-none");
            $("#cardusagebtn").addClass('active');

            check_profilesec();
            check_mainsec();
            check_orderstatussec();
            check_paymentrequestsec();
            check_servicemanagementsec();
            check_ordermanagementsec();
            check_sendphotosec();
            check_technicianmanagementsec();
            check_fairsec();
            check_fairmanagementsec();
            check_contractsec();
            check_counsellingsec();
            check_mastersec();
            set_accordion();
            menu_accordion();
        }
    })

    // 3
    $("#orderstatusbtn").click(function () {
        if ($("#orderstatussec").hasClass("d-none")) {
            $("#orderstatussec").addClass("d-block");
            $("#orderstatussec").removeClass("d-none");
            $("#orderstatusbtn").addClass('active');

            check_profilesec();
            check_mainsec();
            check_cardusagesec();
            check_paymentrequestsec();
            check_servicemanagementsec();
            check_ordermanagementsec();
            check_sendphotosec();
            check_technicianmanagementsec();
            check_fairsec();
            check_fairmanagementsec();
            check_contractsec();
            check_counsellingsec();
            check_mastersec();
            set_accordion();
            menu_accordion();
        }
    })

    // 4.1
    $("#paymentrequestbtn").click(function () {
        if ($("#paymentrequestsec").hasClass("d-none")) {
            $("#paymentrequestsec").addClass("d-block");
            $("#paymentrequestsec").removeClass("d-none");
            $("#paymentrequestbtn").addClass('active');

            check_profilesec();
            check_mainsec();
            check_cardusagesec();
            check_orderstatussec();
            check_servicemanagementsec();
            check_ordermanagementsec();
            check_sendphotosec();
            check_technicianmanagementsec();
            check_fairsec();
            check_fairmanagementsec();
            check_contractsec();
            check_counsellingsec();
            check_mastersec();
            set_accordion();
            menu_accordion();
        }
    })

    // 4.2
    $("#servicemanagementbtn").click(function () {
        if ($("#servicemanagementsec").hasClass("d-none")) {
            $("#servicemanagementsec").addClass("d-block");
            $("#servicemanagementsec").removeClass("d-none");
            $("#servicemanagementbtn").addClass('active');

            check_profilesec();
            check_mainsec();
            check_cardusagesec();
            check_orderstatussec();
            check_paymentrequestsec();
            check_ordermanagementsec();
            check_sendphotosec();
            check_technicianmanagementsec();
            check_fairsec();
            check_fairmanagementsec();
            check_contractsec();
            check_counsellingsec();
            check_mastersec();
            set_accordion();
            menu_accordion();
        }
    })

    // 4.3
    $("#ordermanagementbtn").click(function () {
        if ($("#ordermanagementsec").hasClass("d-none")) {
            $("#ordermanagementsec").addClass("d-block");
            $("#ordermanagementsec").removeClass("d-none");
            $("#ordermanagementbtn").addClass('active');

            check_profilesec();
            check_mainsec();
            check_cardusagesec();
            check_orderstatussec();
            check_paymentrequestsec();
            check_servicemanagementsec();
            check_sendphotosec();
            check_technicianmanagementsec();
            check_fairsec();
            check_fairmanagementsec();
            check_contractsec();
            check_counsellingsec();
            check_mastersec();
            set_accordion();
            menu_accordion();
        }
    })

    // 4.4
    $("#sendphotobtn").click(function () {
        if ($("#sendphotosec").hasClass("d-none")) {
            $("#sendphotosec").addClass("d-block");
            $("#sendphotosec").removeClass("d-none");
            $("#sendphotobtn").addClass('active');

            check_profilesec();
            check_mainsec();
            check_cardusagesec();
            check_orderstatussec();
            check_paymentrequestsec();
            check_servicemanagementsec();
            check_ordermanagementsec();
            check_technicianmanagementsec();
            check_fairsec();
            check_fairmanagementsec();
            check_contractsec();
            check_counsellingsec();
            check_mastersec();
            set_accordion();
            menu_accordion();
        }
    })

    // 4.5
    $("#technicianmanagementbtn").click(function () {
        if ($("#technicianmanagementsec").hasClass("d-none")) {
            $("#technicianmanagementsec").addClass("d-block");
            $("#technicianmanagementsec").removeClass("d-none");
            $("#technicianmanagementbtn").addClass('active');

            check_profilesec();
            check_mainsec();
            check_cardusagesec();
            check_orderstatussec();
            check_paymentrequestsec();
            check_servicemanagementsec();
            check_ordermanagementsec();
            check_sendphotosec();
            check_fairsec();
            check_fairmanagementsec();
            check_contractsec();
            check_counsellingsec();
            check_mastersec();
            set_accordion();
            menu_accordion();
        }
    })

    // 5.5
    $("#fairbtn").click(function () {
        if ($("#fairsec").hasClass("d-none")) {
            $("#fairsec").addClass("d-block");
            $("#fairsec").removeClass("d-none");
            $("#fairbtn").addClass('active');

            check_profilesec();
            check_mainsec();
            check_cardusagesec();
            check_orderstatussec();
            check_paymentrequestsec();
            check_servicemanagementsec();
            check_ordermanagementsec();
            check_sendphotosec();
            check_technicianmanagementsec();
            check_fairmanagementsec();
            check_contractsec();
            check_counsellingsec();
            check_mastersec();
            set_accordion();
            menu_accordion();
        }
    })

    // 5.4
    $("#fairmanagementbtn").click(function () {
        if ($("#fairmanagementsec").hasClass("d-none")) {
            $("#fairmanagementsec").addClass("d-block");
            $("#fairmanagementsec").removeClass("d-none");
            $("#fairmanagementbtn").addClass('active');

            check_profilesec();
            check_mainsec();
            check_cardusagesec();
            check_orderstatussec();
            check_paymentrequestsec();
            check_servicemanagementsec();
            check_ordermanagementsec();
            check_sendphotosec();
            check_technicianmanagementsec();
            check_fairsec();
            check_contractsec();
            check_counsellingsec();
            check_mastersec();
            set_accordion();
            menu_accordion();
        }
    })

    // 5.3
    $("#contractbtn").click(function () {
        if ($("#contractsec").hasClass("d-none")) {
            $("#contractsec").addClass("d-block");
            $("#contractsec").removeClass("d-none");
            $("#contractbtn").addClass('active');


            check_profilesec();
            check_mainsec();
            check_cardusagesec();
            check_orderstatussec();
            check_paymentrequestsec();
            check_servicemanagementsec();
            check_ordermanagementsec();
            check_sendphotosec();
            check_technicianmanagementsec();
            check_fairsec();
            check_fairmanagementsec();
            check_counsellingsec();
            check_mastersec();
            set_accordion();
            menu_accordion();
        }
    })

    // 5.2
    $("#counsellingbtn").click(function () {
        if ($("#counsellingsec").hasClass("d-none")) {
            $("#counsellingsec").addClass("d-block");
            $("#counsellingsec").removeClass("d-none");
            $("#counsellingbtn").addClass('active');

            check_profilesec();
            check_mainsec();
            check_cardusagesec();
            check_orderstatussec();
            check_paymentrequestsec();
            check_servicemanagementsec();
            check_ordermanagementsec();
            check_sendphotosec();
            check_technicianmanagementsec();
            check_fairsec();
            check_fairmanagementsec();
            check_contractsec();
            check_mastersec();
            set_accordion();
            menu_accordion();
        }
    })

    // 5.1
    $("#masterbtn").click(function () {
        if ($("#mastersec").hasClass("d-none")) {
            $("#mastersec").addClass("d-block");
            $("#mastersec").removeClass("d-none");
            $("#masterbtn").addClass('active');

            check_profilesec();
            check_mainsec();
            check_cardusagesec();
            check_orderstatussec();
            check_paymentrequestsec();
            check_servicemanagementsec();
            check_ordermanagementsec();
            check_sendphotosec();
            check_technicianmanagementsec();
            check_fairsec();
            check_fairmanagementsec();
            check_contractsec();
            check_counsellingsec();
            set_accordion();
            menu_accordion();
        }
    })
});


/** BUTTONS OF MASTER PAGE */
$(document).ready(function () {
    // 1
    $("#master-01_btn").click(function () {
        if ($("#master-01_div").hasClass("d-none")) {
            $("#master-01_div").addClass("d-block");
            $("#master-01_div").removeClass("d-none");
            $("#master-01-card1").addClass("");
            $("#master-01-card2").addClass("d-flex");
            $("#master-01-card2").removeClass("d-none");
            $("#master-01_btn").addClass("active");

            check_master02div();
            check_master03div();
        }
    })

    // 2
    $("#master-02_btn").click(function () {
        if ($("#master-02_div").hasClass("d-none")) {
            $("#master-02_div").addClass("d-block");
            $("#master-02_div").removeClass("d-none");
            $("#master-02_btn").addClass("active");

            check_master01div();
            check_master03div();
        }
    })

    // 3
    $("#master-03_btn").click(function () {
        if ($("#master-03_div").hasClass("d-none")) {
            $("#master-03_div").addClass("d-block");
            $("#master-03_div").removeClass("d-none");
            $("#master-03_btn").addClass("active");

            check_master01div();
            check_master02div();
        }
    })
});


/** BUTTONS OF CARD USAGE */
$(document).ready(function () {
    // 1
    $("#cardusage-01_btn").click(function () {
        if ($("#cardusage-01_div").hasClass("d-none")) {
            $("#cardusage-01_div").addClass("d-block");
            $("#cardusage-01_div").removeClass("d-none");
            $("#cardusage-01_btn").addClass("active");
            check_cardusage02div();
            check_cardusage03div();
        }
    })

    // 2
    $("#cardusage-02_btn").click(function () {
        if ($("#cardusage-02_div").hasClass("d-none")) {
            $("#cardusage-02_div").addClass("d-block");
            $("#cardusage-02_div").removeClass("d-none");
            $("#cardusage-02_btn").addClass("active");

            check_cardusage01div();
            check_cardusage03div();
        }
    })

    // 3
    $("#cardusage-03_btn").click(function () {
        if ($("#cardusage-03_div").hasClass("d-none")) {
            $("#cardusage-03_div").addClass("d-block");
            $("#cardusage-03_div").removeClass("d-none");
            $("#cardusage-03_btn").addClass("active");

            check_cardusage01div();
            check_cardusage02div();
        }
    })
});

/** BUTTONS OF ORDER STATUS */
$(document).ready(function () {
    // 1
    $("#orderstatus-01_btn").click(function () {
        if ($("#orderstatus-01_div").hasClass("d-none")) {
            $("#orderstatus-01_div").addClass("d-block");
            $("#orderstatus-01_div").removeClass("d-none");
            $("#orderstatus-01_btn").addClass("active");
            check_orderstatus02div();
            check_orderstatus03div();
        }
    })

    // 2
    $("#orderstatus-02_btn").click(function () {
        if ($("#orderstatus-02_div").hasClass("d-none")) {
            $("#orderstatus-02_div").addClass("d-block");
            $("#orderstatus-02_div").removeClass("d-none");
            $("#orderstatus-02_btn").addClass("active");

            check_orderstatus01div();
            check_orderstatus03div();
        }
    })

    // 3
    $("#orderstatus-03_btn").click(function () {
        if ($("#orderstatus-03_div").hasClass("d-none")) {
            $("#orderstatus-03_div").addClass("d-block");
            $("#orderstatus-03_div").removeClass("d-none");
            $("#orderstatus-03_btn").addClass("active");

            check_orderstatus01div();
            check_orderstatus02div();
        }
    })
});

/** BUTTONS OF FAIR MANAGEMENT */
$(document).ready(function () {
    // 1
    $("#fairmanagement-01_btn").click(function () {
        if ($("#fairmanagement-01_div").hasClass("d-none")) {
            $("#fairmanagement-01_div").removeClass("d-none");
            $("#fairmanagement-01_div").addClass("d-block");
            $("#fairmanagement-01_btn").addClass("active");
            check_fairmanagement02div();
        }
    })

    // 2
    $("#fairmanagement-02_btn").click(function () {
        if ($("#fairmanagement-02_div").hasClass("d-none")) {
            $("#fairmanagement-02_div").removeClass("d-none");
            $("#fairmanagement-02_div").addClass("d-block");
            $("#fairmanagement-02_btn").addClass("active");
            check_fairmanagement01div();
        }
    })
});