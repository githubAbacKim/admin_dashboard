// 2 PAGE ACCORDION
function check_accordion2 (page1, page2, btn, accordion) {
    if ($("#" + page1).hasClass("d-block") ||
        $("#" + page2).hasClass("d-block")) {
        // do nothing
    }
    else if ($("#" + page1).hasClass("d-none") ||
        $("#" + page2).hasClass("d-none")) {
        $("#" + btn).addClass('collapsed');
        $("#" + accordion).removeClass('show');
    }
}

// 4 PAGE ACCORDION
function check_accordion4 (page1, page2, page3, page4, btn, accordion) {
    if ($("#" + page1).hasClass("d-block") ||
        $("#" + page2).hasClass("d-block") ||
        $("#" + page3).hasClass("d-block") ||
        $("#" + page4).hasClass("d-block")) {
        // do nothing
    }
    else if ($("#" + page1).hasClass("d-none") ||
        $("#" + page2).hasClass("d-none") ||
        $("#" + page3).hasClass("d-none") ||
        $("#" + page4).hasClass("d-none")) {
        $("#" + btn).addClass('collapsed');
        $("#" + accordion).removeClass('show');
    }
}

// NO BUTTON PAGE
function check_page1(page) {
    if ($("#" + page).hasClass("d-block")) {
        $("#" + page).addClass("d-none").removeClass("d-block");
    }
}

// HAS BUTTON PAGE
function check_page2(page, btn) {
    if ($("#" + page).hasClass("d-block")) {
        $("#" + page).addClass("d-none").removeClass("d-block");
        $("#" + btn).removeClass('active');
    }
} 

function check_div(div, btn, addon) {
    if ($("#" + div).hasClass("d-flex")) {
        $("#" + div).addClass("d-none").removeClass("d-flex");
        $("#" + btn).removeClass("active");
        $("#" + addon).addClass("d-none").removeClass("d-block");
    }
}


// 3.3
function check_viewallcontracts03_div() {
    if ($("#viewallcontracts-03_div").hasClass("d-flex")) {
        $("#viewallcontracts-03_div").addClass("d-none").removeClass("d-flex");
        $("#viewallcontracts-03_btn").removeClass("active");
    }
}



// 17.1
function check_master01div() {
    if ($("#master-01_div").hasClass("d-block")) {
        $("#master-01_div").addClass("d-none").removeClass("d-block");
        // $("#master-01-card1").addClass("d-none");
        $("#master-01-card2").addClass("d-none").removeClass("d-flex");
        $("#master-01_btn").removeClass("active");
    }
}

// 17.2
function check_master02div() {
    if ($("#master-02_div").hasClass("d-block")) {
        $("#master-02_div").addClass("d-none").removeClass("d-block");
        $("#master-02_btn").removeClass("active");
    }
}

// 17.3
function check_master03div() {
    if ($("#master-03_div").hasClass("d-block")) {
        $("#master-03_div").addClass("d-none").removeClass("d-block");
        $("#master-03_btn").removeClass("active");
    }
}

// 1
function setDefault_viewallcontracts() {
    if ($('#viewallcontracts-01_div').hasClass('d-none')) {
        $('#viewallcontracts-01_btn').addClass('active');
        $('#viewallcontracts-01_div').addClass('d-flex').removeClass('d-none');
        $('#viewallcontracts_selectapartmentcomplex01_div').addClass('d-block').removeClass('d-none');
    }

    if ($('#viewallcontracts-02_div').hasClass('d-flex')) {
        $('#viewallcontracts-02_btn').removeClass('active');
        $('#viewallcontracts-02_div').removeClass('d-flex').addClass('d-none');
        $('#viewallcontracts_selectapartmentcomplex02_div').removeClass('d-block').addClass('d-none');

        $('#viewallcontracts-01_btn').addClass('active');
        $('#viewallcontracts-01_div').addClass('d-flex').removeClass('d-none');
        $('#viewallcontracts_selectapartmentcomplex01_div').addClass('d-block').removeClass('d-none');
    }

    if ($('#viewallcontracts-03_div').hasClass('d-flex')) {
        $('#viewallcontracts-03_btn').removeClass('active');
        $('#viewallcontracts-03_div').removeClass('d-flex').addClass('d-none');
        // $('#viewallcontracts_selectapartmentcomplex02_div').removeClass('d-block').addClass('d-none');

        $('#viewallcontracts-01_btn').addClass('active');
        $('#viewallcontracts-01_div').addClass('d-flex').removeClass('d-none');
        $('#viewallcontracts_selectapartmentcomplex01_div').addClass('d-block').removeClass('d-none');
    }
}

// 6
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


// 16
function setDefault_cardusagehistory() {
    if ($('#cardusagehistory-01_div').hasClass('d-none')) {
        $('#cardusagehistory-01_btn').addClass('active');
        $('#cardusagehistory-01_div').addClass('d-flex').removeClass('d-none');
        $('#cardusagehistory_date01_div').addClass('d-block').removeClass('d-none');
    }

    if ($('#cardusagehistory-02_div').hasClass('d-flex')) {
        $('#cardusagehistory-02_btn').removeClass('active');
        $('#cardusagehistory-02_div').removeClass('d-flex').addClass('d-none');
        $('#cardusagehistory_card02_div').removeClass('d-block').addClass('d-none');

        $('#cardusagehistory-01_btn').addClass('active');
        $('#cardusagehistory-01_div').addClass('d-flex').removeClass('d-none');
        $('#cardusagehistory_date01_div').addClass('d-block').removeClass('d-none');
    }

    if ($('#cardusagehistory-03_div').hasClass('d-flex')) {
        $('#cardusagehistory-03_btn').removeClass('active');
        $('#cardusagehistory-03_div').removeClass('d-flex').addClass('d-none');
        $('#cardusagehistory_account03_div').removeClass('d-block').addClass('d-none');

        $('#cardusagehistory-01_btn').addClass('active');
        $('#cardusagehistory-01_div').addClass('d-flex').removeClass('d-none');
        $('#cardusagehistory_date01_div').addClass('d-block').removeClass('d-none');
    }
}

// 17 not yet done
function setDefault_master() {
    if ($('#master-01_div').hasClass('d-none')) {
        $('#master-01_btn').addClass('active');
        $('#master-01_div').addClass('d-block').removeClass('d-none');
        $('#master_selectapartmentcomplex01_div').addClass('d-block').removeClass('d-none');
    }

    if ($('#master-02_div').hasClass('d-flex')) {
        $('#master-02_btn').removeClass('active');
        $('#master-02_div').removeClass('d-flex').addClass('d-none');
        $('#master_selectapartmentcomplex02_div').removeClass('d-block').addClass('d-none');

        $('#master-01_btn').addClass('active');
        $('#master-01_div').addClass('d-flex').removeClass('d-none');
        $('#master_selectapartmentcomplex01_div').addClass('d-block').removeClass('d-none');
    }

    if ($('#master-03_div').hasClass('d-flex')) {
        $('#master-03_btn').removeClass('active');
        $('#master-03_div').removeClass('d-flex').addClass('d-none');
        // $('#master_selectapartmentcomplex02_div').removeClass('d-block').addClass('d-none');

        $('#master-01_btn').addClass('active');
        $('#master-01_div').addClass('d-flex').removeClass('d-none');
        $('#master_selectapartmentcomplex01_div').addClass('d-block').removeClass('d-none');
    }
}


function increment(id) {
    document.querySelector('[data-id="' + id + '"]').stepUp();
}

function decrement(id) {
    document.querySelector('[data-id="' + id + '"]').stepDown();
}

function check_errLogin() {
    if (($('#errLogin').hasClass('d-none'))){
        $('#errLogin').removeClass('d-none').addClass('d-block');
    } 
    else if (($('#errLogin').hasClass('d-block'))) {
        // no nothing
    }
}

function login_session() {
    var session = localStorage.getItem('loginsess');
    if (session === null) {
        window.location.href = 'login.html';
    }
}

function loginmgs(mgs) {
    if (mgs === 'no user') {
        return 'Username does not exists.';
    }
    else if (mgs === 'password is not matched') {
        return 'Password is incorrect.';
    } 
    else if (mgs === 'login success') {
        return 'Login successfully.';
    };
}

// VALIDATE LOGIN
function validateLogin(username, password) {
    if((username === '' || username === null) && (password === '' || password === null)) {
        return 'All Fields is required.';
    } 
    else if (username === '' || username === null) {
        return 'Username is required.';
    } 
    else if (password === '' || password === null) {
        return 'Password is required.';
    } 
    else if (username != '' && password != '') {
        // console.log(authLogin(username, password));
        return authLoginGetMsg(username, password);
    } 
}

function authLoginGetMsg (usernameVal, passwordVal) {
    var mgs = null;
    $.ajax({
        method: 'POST',
        url: 'http://210.99.223.38:8081/api/login',
        dataType: 'JSON',
        contentType: "application/json",
        async: false,
        data: JSON.stringify({
            username: usernameVal,
            password: passwordVal
        }),
        success: function (response) {
            mgs = loginmgs(response.message);
        }
    });
    return mgs;
}

function authLoginGetMsg(usernameVal, passwordVal) {
    var mgs = null;
    $.ajax({
        method: 'POST',
        url: 'http://210.99.223.38:8081/api/login',
        dataType: 'JSON',
        contentType: "application/json",
        async: false,
        data: JSON.stringify({
            username: usernameVal,
            password: passwordVal
        }),
        success: function (response) {
            mgs = loginmgs(response.message);
        }
    });
    return mgs;
}

function authLoginForSession(usernameVal, passwordVal) {
    var mgs = null;
    $.ajax({
        method: 'POST',
        url: 'http://210.99.223.38:8081/api/login',
        dataType: 'JSON',
        contentType: "application/json",
        async: false,
        data: JSON.stringify({
            username: usernameVal,
            password: passwordVal
        }),
        success: function (response) {
            mgs = response.data;
        }
    });
    return mgs;
}

