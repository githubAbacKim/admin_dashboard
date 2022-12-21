
$(document).ready(function () {
    $('.complex').on('click', function () {
        $(this).parent().remove();
    });
})


$(document).ready(function () {
    $('.addpartcons').on('click', function (e) {
        e.preventDefault();
        const contractor = $('#partcontractor').val();
        const partconslist = '<li class="btn btn-outline-primary rounded-pill"> <p>' + contractor + '</p><i class="partconsbtn fa-regular fa-xmark"></i></li >';
 
        if (contractor.length == '') {

        } else {
            $('#partconslists').append(partconslist);
            $('#partcontractor').val('');
        }

        $('.partconsbtn').on('click', function () {
            $(this).parent().remove();
        });
    });
})


$(document).ready(function () {
    $('.partconsbtn').on('click', function () {
        $(this).parent().remove();
    });
})