$(function () {
    // LOGOUT BTN
    $('#logout_btn').on('click', function () {
        localStorage.clear();
        Login_Session();
    });


    // LOGIN FORM
    $('#login_form').on('submit', function (e) {
        e.preventDefault();
        var username = $('#login_username').val();
        var password = $('#login_password').val();

        const mgs = Login_Validate(username, password);

        if (mgs != 'Login successfully.') {
            check_errLogin();
            $('#errLogin').text(mgs);
        }
        else if (mgs === 'Login successfully.') {
            var constructorId = (Login_GetAllData(username, password)['data']['constructorId']);
            localStorage.setItem('LoginSession', constructorId);
            Login_Session();
        }
    });


    function check_errLogin() {
        if (($('#errLogin').hasClass('d-none'))) {
            $('#errLogin').removeClass('d-none').addClass('d-block');
        }
        else if (($('#errLogin').hasClass('d-block'))) {
            // no nothing
        }
    }

    function Login_Validate(username, password) {
        if ((username === '' || username === null) && (password === '' || password === null)) {
            return 'All Fields is required.';
        }
        else if (username === '' || username === null) {
            return 'Username is required.';
        }
        else if (password === '' || password === null) {
            return 'Password is required.';
        }
        else if ((username != '' || username != null) && (password != '' || password != null)) {
            var mgs = ((Login_GetAllData(username, password))['message']);
            return Login_MessageResult(mgs);
        }
    }


    function Login_GetAllData(username, password) {
        var result = null;
        $.ajax({
            method: 'POST',
            url: 'http://210.99.223.38:8081/api/login',
            dataType: 'JSON',
            contentType: "application/json",
            async: false,
            data: JSON.stringify({
                username: username,
                password: password
            }),
            success: function (responses) {
                $.each(responses, function (i, response) {
                    result = responses;
                })
            }
        });
        return result;
    }

    function Login_MessageResult(mgs) {
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


    function Login_Session() {
        if (session === null) {
            window.location.href = 'login.html';
        } else {
            window.location.href = 'index.html';
        }
    }

});