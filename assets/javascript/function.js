function check_order_accordion () {
    if ($("#orderstatus_page").hasClass("d-block") ||
        $("#ordermanagement_page").hasClass("d-block")) {
        // do nothing
    }
    else if ($("#orderstatus_page").hasClass("d-none") ||
        $("#ordermanagement_page").hasClass("d-none")) {
        $("#order_btn").addClass('collapsed');
        $("#order_collapse").removeClass('show');
    }
}

function check_fair_accordion() {
    if ($("#onlinefair_page").hasClass("d-block") ||
        $("#fairmanagement_page").hasClass("d-block")) {
        // do nothing
    }
    else if ($("#onlinefair_page").hasClass("d-none") ||
        $("#fairmanagement_page").hasClass("d-none")) {
        $("#fair_btn").addClass('collapsed');
        $("#fair_collapse").removeClass('show');
    }
}

function check_settings_accordion() {
    if ($("#paymentrequestmanagement_page").hasClass("d-block") ||
        $("#servicemanagement_page").hasClass("d-block") ||
        $("#sendphotos_page").hasClass("d-block") ||
        $("#technicianmanagement_page").hasClass("d-block")) {
        // do nothing
    }
    else if ($("#paymentrequestmanagement_page").hasClass("d-none") ||
        $("#servicemanagement_page").hasClass("d-none") ||
        $("#sendphotos_page").hasClass("d-none") ||
        $("#technicianmanagement_page").hasClass("d-none")) {
        $("#settings_btn").addClass('collapsed');
        $("#settings_collapse").removeClass('show');
    }
}

function check_menu_accordion() {
    if ($("#contract_page").hasClass("d-block") ||
        $("#consulting_page").hasClass("d-block") ||
        $("#cardusagehistory_page").hasClass("d-block") ||
        $("#master_page").hasClass("d-block")) {
        // do nothing
    }
    else if ($("#contract_page").hasClass("d-none") ||
        $("#consulting_page").hasClass("d-none") ||
        $("#cardusagehistory_page").hasClass("d-none") ||
        $("#master_page").hasClass("d-none")) {
        $("#menu_btn").addClass('collapsed');
        $("#menu_collapse").removeClass('show');
    }
}

function check_home_page() {
    if ($("#home_page").hasClass("d-block")) {
        $("#home_page").addClass("d-none").removeClass("d-block");
    }
}

function check_profile_page() {
    if ($("#profile_page").hasClass("d-block")) {
        $("#profile_page").addClass("d-none").removeClass("d-block");
    }
}

function check_viewallcontracts_page() {
    if ($("#viewallcontracts_page").hasClass("d-block")) {
        $("#viewallcontracts_page").addClass("d-none").removeClass("d-block");
        $("#viewallcontracts_btn").removeClass('active');
    }
} 

function check_contractwriting_page() {
    if ($("#contractwriting_page").hasClass("d-block")) {
        $("#contractwriting_page").addClass("d-none").removeClass("d-block");
        $("#contractwriting_btn").removeClass('active');
    }
} 

function check_orderstatus_page() {
    if ($("#orderstatus_page").hasClass("d-block")) {
        $("#orderstatus_page").addClass("d-none").removeClass("d-block");
        $("#orderstatus_btn").removeClass('active');
    }
} 

function check_ordermanagement_page() {
    if ($("#ordermanagement_page").hasClass("d-block")) {
        $("#ordermanagement_page").addClass("d-none").removeClass("d-block");
        $("#ordermanagement_btn").removeClass('active');
    }
}

function check_filemanagement_page() {
    if ($("#filemanagement_page").hasClass("d-block")) {
        $("#filemanagement_page").addClass("d-none").removeClass("d-block");
        $("#filemanagement_btn").removeClass('active');
    }
}

function check_onlinefair_page() {
    if ($("#onlinefair_page").hasClass("d-block")) {
        $("#onlinefair_page").addClass("d-none").removeClass("d-block");
        $("#onlinefair_btn").removeClass('active');
    }
}

function check_fairmanagement_page() {
    if ($("#fairmanagement_page").hasClass("d-block")) {
        $("#fairmanagement_page").addClass("d-none").removeClass("d-block");
        $("#fairmanagement_btn").removeClass('active');
    }
}

function check_paymentrequestmanagement_page() {
    if ($("#paymentrequestmanagement_page").hasClass("d-block")) {
        $("#paymentrequestmanagement_page").addClass("d-none").removeClass("d-block");
        $("#paymentrequestmanagement_btn").removeClass('active');
    }
}

function check_servicemanagement_page() {
    if ($("#servicemanagement_page").hasClass("d-block")) {
        $("#servicemanagement_page").addClass("d-none").removeClass("d-block");
        $("#servicemanagement_btn").removeClass('active');
    }
}

function check_sendphotos_page() {
    if ($("#sendphotos_page").hasClass("d-block")) {
        $("#sendphotos_page").addClass("d-none").removeClass("d-block");
        $("#sendphotos_btn").removeClass('active');
    }
}

function check_technicianmanagement_page() {
    if ($("#technicianmanagement_page").hasClass("d-block")) {
        $("#technicianmanagement_page").addClass("d-none").removeClass("d-block");
        $("#technicianmanagement_btn").removeClass('active');
    }
}

function check_contract_page() {
    if ($("#contract_page").hasClass("d-block")) {
        $("#contract_page").addClass("d-none").removeClass("d-block");
        $("#contract_btn").removeClass('active');
    }
}

function check_consulting_page() {
    if ($("#consulting_page").hasClass("d-block")) {
        $("#consulting_page").addClass("d-none").removeClass("d-block");
        $("#consulting_btn").removeClass('active');
    }
}

function check_cardusagehistory_page() {
    if ($("#cardusagehistory_page").hasClass("d-block")) {
        $("#cardusagehistory_page").addClass("d-none").removeClass("d-block");
        $("#cardusagehistory_btn").removeClass('active');
    }
}

function check_master_page() {
    if ($("#master_page").hasClass("d-block")) {
        $("#master_page").addClass("d-none").removeClass("d-block");
        $("#master_btn").removeClass('active');
    }
}


function check_viewallcontracts01_div () {
    if ($("#viewallcontracts-01_div").hasClass("d-flex")) {
        $("#viewallcontracts-01_div").addClass("d-none").removeClass("d-flex");
        $("#viewallcontracts-01_btn").removeClass("active");
        $("#apartmentcomplexfilterselect01").addClass("d-none").removeClass("d-flex");
    }
}

function check_viewallcontracts02_div() {
    if ($("#viewallcontracts-02_div").hasClass("d-flex")) {
        $("#viewallcontracts-02_div").addClass("d-none").removeClass("d-flex");
        $("#viewallcontracts-02_btn").removeClass("active");
        $("#apartmentcomplexfilterselect02").addClass("d-none").removeClass("d-flex");
    }
}

function check_viewallcontracts03_div() {
    if ($("#viewallcontracts-03_div").hasClass("d-flex")) {
        $("#viewallcontracts-03_div").addClass("d-none").removeClass("d-flex");
        $("#viewallcontracts-03_btn").removeClass("active");
    }
}

function check_fairmanagement01_div() {
    if ($("#fairmanagement-01_div").hasClass("d-flex")) {
        $("#fairmanagement-01_div").addClass("d-none").removeClass("d-flex");
        $("#fairmanagement-01_btn").removeClass("active"); 
        $('#fairmanagement-01_title').addClass("d-none").removeClass("d-block");
    }
}

function check_fairmanagement02_div() {
    if ($("#fairmanagement-02_div").hasClass("d-flex")) {
        $("#fairmanagement-02_div").addClass("d-none").removeClass("d-flex");
        $("#fairmanagement-02_btn").removeClass("active");
        $('#fairmanagement-02_title').addClass("d-none").removeClass("d-block");
    }
}

// 5.1.2
function check_master01div() {
    if ($("#master-01_div").hasClass("d-block")) {
        $("#master-01_div").addClass("d-none").removeClass("d-block");
        // $("#master-01-card1").addClass("d-none");
        $("#master-01-card2").addClass("d-none").removeClass("d-flex");
        $("#master-01_btn").removeClass("active");
    }
}

// 5.1.2
function check_master02div() {
    if ($("#master-02_div").hasClass("d-block")) {
        $("#master-02_div").addClass("d-none").removeClass("d-block");
        $("#master-02_btn").removeClass("active");
    }
}

// 5.1.3
function check_master03div() {
    if ($("#master-03_div").hasClass("d-block")) {
        $("#master-03_div").addClass("d-none").removeClass("d-block");
        $("#master-03_btn").removeClass("active");
    }
}


function setDefault_fairmanagement() {
    if ($('#fairmanagement-01_div').hasClass('d-none')) {
        $('#fairmanagement-01_btn').addClass('active');
        $('#fairmanagement-01_div').addClass('d-flex').removeClass('d-none');
        $('#fairmanagement-01_title').addClass('d-block').removeClass('d-none');
    } 

    if ($('#fairmanagement-02_div').hasClass('d-flex')) {
        $('#fairmanagement-02_btn').removeClass('active');
        $('#fairmanagement-02_div').removeClass('d-flex').addClass('d-none');
        $('#fairmanagement-02_title').removeClass('d-block').addClass('d-none');

        $('#fairmanagement-01_btn').addClass('active');
        $('#fairmanagement-01_div').addClass('d-flex').removeClass('d-none');
        $('#fairmanagement-01_title').addClass('d-block').removeClass('d-none');
    }
}
function check_cardusage01_div () {
    if ($("#cardusage-01_div").hasClass("d-flex")) {
        $("#cardusage-01_div").addClass("d-none").removeClass("d-flex");
        $("#cardusage-01_btn").removeClass("active");
    }
}

function check_cardusage02_div() {
    if ($("#cardusage-02_div").hasClass("d-flex")) {
        $("#cardusage-02_div").addClass("d-none").removeClass("d-flex");
        $("#cardusage-02_btn").removeClass("active");
        $("#cardusageapartmentcomplexfilterselect01").addClass("d-none").removeClass("d-flex");
    }
}

function check_cardusage03_div() {
    if ($("#cardusage-03_div").hasClass("d-flex")) {
        $("#cardusage-03_div").addClass("d-none").removeClass("d-flex");
        $("#cardusage-03_btn").removeClass("active");
        $("#cardusageapartmentcomplexfilterselect02").addClass("d-none").removeClass("d-flex");
    }
}
