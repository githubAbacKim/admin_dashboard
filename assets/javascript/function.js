function set_accordion() {
    if ($("#paymentrequestsec").hasClass("d-block") ||
        $("#servicemanagementsec").hasClass("d-block") ||
        $("#ordermanagementsec").hasClass("d-block") ||
        $("#sendphotosec").hasClass("d-block") ||
        $("#technicianmanagementsec").hasClass("d-block")) {
        // do nothing
    }
    else if ($("#paymentrequestsec").hasClass("d-none") ||
        $("#servicemanagementsec").hasClass("d-none") ||
        $("#ordermanagementsec").hasClass("d-none") ||
        $("#sendphotosec").hasClass("d-none") ||
        $("#technicianmanagementsec").hasClass("d-none")) {

            $("#setbtn").addClass('collapsed');
            $("#set-collapse").removeClass('show');
        }
}

function menu_accordion() {
    if ($("#fairsec").hasClass("d-block") ||
        $("#fairmanagementsec").hasClass("d-block") ||
        $("#contractsec").hasClass("d-block") ||
        $("#counsellingsec").hasClass("d-block") ||
        $("#mastersec").hasClass("d-block")) {
        // do nothing
    }
    else if ($("#fairsec").hasClass("d-none") ||
        $("#fairmanagementsec").hasClass("d-none") ||
        $("#contractsec").hasClass("d-none") ||
        $("#counsellingsec").hasClass("d-none") ||
        $("#mastersec").hasClass("d-none")) {

            $("#menubtn").addClass('collapsed');
            $("#menu-collapse").removeClass('show');
    }
}

// 0
function check_profilesec() {
    if ($("#profilesec").hasClass("d-block")) {
        $("#profilesec").addClass("d-none");
        $("#profilesec").removeClass("d-block");
    }
}

// 1
function check_mainsec() {
    if ($("#mainsec").hasClass("d-block")) {
        $("#mainsec").addClass("d-none");
        $("#mainsec").removeClass("d-block");
        $("#mainbtn").removeClass('active');
    }
}

// 2
function check_cardusagesec() {
    if ($("#cardusagesec").hasClass("d-block")) {
        $("#cardusagesec").addClass("d-none");
        $("#cardusagesec").removeClass("d-block");
        $("#cardusagebtn").removeClass('active');
    }
}

// 3
function check_orderstatussec() {
    if ($("#orderstatussec").hasClass("d-block")) {
        $("#orderstatussec").addClass("d-none");
        $("#orderstatussec").removeClass("d-block");
        $("#orderstatusbtn").removeClass('active');
    }
}

// 4.1
function check_paymentrequestsec() {
    if ($("#paymentrequestsec").hasClass("d-block")) {
        $("#paymentrequestsec").addClass("d-none");
        $("#paymentrequestsec").removeClass("d-block");
        $("#paymentrequestbtn").removeClass('active');
    }
}

// 4.2
function check_servicemanagementsec() {
    if ($("#servicemanagementsec").hasClass("d-block")) {
        $("#servicemanagementsec").addClass("d-none");
        $("#servicemanagementsec").removeClass("d-block");
        $("#servicemanagementbtn").removeClass('active');
    }
}

// 4.3
function check_ordermanagementsec() {
    if ($("#ordermanagementsec").hasClass("d-block")) {
        $("#ordermanagementsec").addClass("d-none");
        $("#ordermanagementsec").removeClass("d-block");
        $("#ordermanagementbtn").removeClass('active');
    }
}

// 4.4
function check_sendphotosec() {
    if ($("#sendphotosec").hasClass("d-block")) {
        $("#sendphotosec").addClass("d-none");
        $("#sendphotosec").removeClass("d-block");
        $("#sendphotobtn").removeClass('active');
    }
}

// 4.5
function check_technicianmanagementsec () {
    if ($("#technicianmanagementsec").hasClass("d-block")) {
        $("#technicianmanagementsec").addClass("d-none");
        $("#technicianmanagementsec").removeClass("d-block");
        $("#technicianmanagementbtn").removeClass('active');
    }
}

// 5.5
function check_fairsec() {
    if ($("#fairsec").hasClass("d-block")) {
        $("#fairsec").addClass("d-none");
        $("#fairsec").removeClass("d-block");
        $("#fairbtn").removeClass('active');  
    }
}

// 5.4
function check_fairmanagementsec() {
    if ($("#fairmanagementsec").hasClass("d-block")) {
        $("#fairmanagementsec").addClass("d-none");
        $("#fairmanagementsec").removeClass("d-block");
        $("#fairmanagementbtn").removeClass('active');
    }
}

// 5.3
function check_contractsec() {
    if ($("#contractsec").hasClass("d-block")) {
        $("#contractsec").addClass("d-none");
        $("#contractsec").removeClass("d-block");
        $("#contractbtn").removeClass('active');
    }
}

// 5.2
function check_counsellingsec() {
    if ($("#counsellingsec").hasClass("d-block")) {
        $("#counsellingsec").addClass("d-none");
        $("#counsellingsec").removeClass("d-block");
        $("#counsellingbtn").removeClass('active');
    }
}

// 5.1
function check_mastersec() {
    if ($("#mastersec").hasClass("d-block")) {
        $("#mastersec").addClass("d-none");
        $("#mastersec").removeClass("d-block");
        $("#masterbtn").removeClass('active');
    }
}


// 5.1.1
function check_master01div() {
    if ($("#master-01_div").hasClass("d-block")) {
        $("#master-01_div").addClass("d-none");
        $("#master-01_div").removeClass("d-block");
        $("#master-01-card1").addClass("d-none");
        $("#master-01-card2").addClass("d-none");
        $("#master-01-card2").removeClass("d-flex");
        $("#master-01_btn").removeClass("active");
    }
}

// 5.1.2
function check_master02div() {
    if ($("#master-02_div").hasClass("d-block")) {
        $("#master-02_div").addClass("d-none");
        $("#master-02_div").removeClass("d-block");
        $("#master-02_btn").removeClass("active");
    }
}

// 5.1.3
function check_master03div() {
    if ($("#master-03_div").hasClass("d-block")) {
        $("#master-03_div").addClass("d-none");
        $("#master-03_div").removeClass("d-block");
        $("#master-03_btn").removeClass("active");
    }
}

// 2.1
function check_cardusage01div() {
    if ($("#cardusage-01_div").hasClass("d-block")) {
        $("#cardusage-01_div").addClass("d-none");
        $("#cardusage-01_div").removeClass("d-block");
        $("#cardusage-01_btn").removeClass("active");
    }
}

// 2.2
function check_cardusage02div() {
    if ($("#cardusage-02_div").hasClass("d-block")) {
        $("#cardusage-02_div").addClass("d-none");
        $("#cardusage-02_div").removeClass("d-block");
        $("#cardusage-02_btn").removeClass("active");
    }
}

// 2.3
function check_cardusage03div() {
    if ($("#cardusage-03_div").hasClass("d-block")) {
        $("#cardusage-03_div").addClass("d-none");
        $("#cardusage-03_div").removeClass("d-block");
        $("#cardusage-03_btn").removeClass("active");
    }
}

// 3.1
function check_orderstatus01div() {
    if ($("#orderstatus-01_div").hasClass("d-block")) {
        $("#orderstatus-01_div").addClass("d-none");
        $("#orderstatus-01_div").removeClass("d-block");
        $("#orderstatus-01_btn").removeClass("active");
    }
}

// 3.2
function check_orderstatus02div() {
    if ($("#orderstatus-02_div").hasClass("d-block")) {
        $("#orderstatus-02_div").addClass("d-none");
        $("#orderstatus-02_div").removeClass("d-block");
        $("#orderstatus-02_btn").removeClass("active");
    }
}

// 3.3
function check_orderstatus03div() {
    if ($("#orderstatus-03_div").hasClass("d-block")) {
        $("#orderstatus-03_div").addClass("d-none");
        $("#orderstatus-03_div").removeClass("d-block");
        $("#orderstatus-03_btn").removeClass("active");
    }
}