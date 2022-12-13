!(function ($) {
    /** PASSWORD TOGGLE */
    //eyeOpenClass: 'fa-eye',
    //eyeCloseClass: 'fa-eye-slash',
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


/** DASHBOARD SIDE NAVBAR CLASS MEDIA QUERIE ARRANGEMENT **/
$(document).ready(function () {
    /** MEDIA QUIERY */
    function mdWindowWidth(md) {
        if (md.matches) {
            $('[data-bs-toggle="tooltip"]').tooltip("enable");
        }
    }

    function md_upWindowWidth(md_up) {
        if (md_up.matches) {
            $('[data-bs-toggle="tooltip"]').tooltip("disable");
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

/** TOOLTIP FOR MAIN CONTENT**/
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

