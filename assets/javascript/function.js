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
        $("#threewordssec").hasClass("d-block") ||
        $("#mastersec").hasClass("d-block")) {
        // do nothing
    }
    else if ($("#fairsec").hasClass("d-none") ||
        $("#fairmanagementsec").hasClass("d-none") ||
        $("#contractsec").hasClass("d-none") ||
        $("#threewordssec").hasClass("d-none") ||
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
        // $("#setbtn").addClass('collapsed');
        // $("#set-collapse").removeClass('show');
    }
}

// 4.2
function check_servicemanagementsec() {
    if ($("#servicemanagementsec").hasClass("d-block")) {
        $("#servicemanagementsec").addClass("d-none");
        $("#servicemanagementsec").removeClass("d-block");
        $("#servicemanagementbtn").removeClass('active');
        // $("#setbtn").addClass('collapsed');
        // $("#set-collapse").removeClass('show');
    }
}

// 4.3
function check_ordermanagementsec() {
    if ($("#ordermanagementsec").hasClass("d-block")) {
        $("#ordermanagementsec").addClass("d-none");
        $("#ordermanagementsec").removeClass("d-block");
        $("#ordermanagementbtn").removeClass('active');
        // $("#setbtn").addClass('collapsed');
        // $("#set-collapse").removeClass('show');
    }
}

// 4.4
function check_sendphotosec() {
    if ($("#sendphotosec").hasClass("d-block")) {
        $("#sendphotosec").addClass("d-none");
        $("#sendphotosec").removeClass("d-block");
        $("#sendphotobtn").removeClass('active');
        // $("#setbtn").addClass('collapsed');
        // $("#set-collapse").removeClass('show');
    }
}

// 4.5
function check_technicianmanagementsec () {
    if ($("#technicianmanagementsec").hasClass("d-block")) {
        $("#technicianmanagementsec").addClass("d-none");
        $("#technicianmanagementsec").removeClass("d-block");
        $("#technicianmanagementbtn").removeClass('active');
        // $("#setbtn").addClass('collapsed');
        // $("#set-collapse").removeClass('show');
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
        // $("#menubtn").addClass('collapsed');
        // $("#menu-collapse").removeClass('show');
    }
}

// 5.3
function check_contractsec() {
    if ($("#contractsec").hasClass("d-block")) {
        $("#contractsec").addClass("d-none");
        $("#contractsec").removeClass("d-block");
        $("#contractbtn").removeClass('active');
        // $("#menubtn").addClass('collapsed');
        // $("#menu-collapse").removeClass('show');
    }
}

// 5.2
function check_threewordssec() {
    if ($("#threewordssec").hasClass("d-block")) {
        $("#threewordssec").addClass("d-none");
        $("#threewordssec").removeClass("d-block");
        $("#threewordsbtn").removeClass('active');
        // $("#menubtn").addClass('collapsed');
        // $("#menu-collapse").removeClass('show');
    }
}

// 5.1
function check_mastersec() {
    if ($("#mastersec").hasClass("d-block")) {
        $("#mastersec").addClass("d-none");
        $("#mastersec").removeClass("d-block");
        $("#masterbtn").removeClass('active');
        // $("#menubtn").addClass('collapsed');
        // $("#menu-collapse").removeClass('show');
    }
}