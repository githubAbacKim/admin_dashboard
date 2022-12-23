
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

/** DATA TABLES */
// $(document).ready(function () {
//     $('table').DataTable();
// });

$(document).ready(function () {
    // var viewallcontracts = $('#viewallcontractsbyac_table').DataTable();
    // var first_row = $('#viewallcontractsbyac_table_wrapper .row:first-child');
    // first_row.children('.col-md-6').removeClass('col-md-6').addClass('col-lg-6').addClass('col-xl-4').addClass('viewallcontactsfilters');
    // first_row.append($(".apartmentcomplexfilter"));

    // $("#viewallcontracts_table_filter.dataTables_filter").append($("#apartmentcomplexfilter"));

    // var categoryIndex = 0;
    // $("#viewallcontracts_table th").each(function (i) {
    //     if ($($(this)).html() == "Category") {
    //         categoryIndex = i; return false;
    //     }
    // });
});


$(document).ready(function () {
    var viewallcontractsbyac = $('#viewallcontractsbyac_table').DataTable();
    $('#apartmentcomplexfilter01').on('change', function () {
        viewallcontractsbyac.search(this.value).draw();
    });
    
    var viewallcontractsbyar = $('#viewallcontractsbyar_table').DataTable();
    $('#apartmentcomplexfilter02').on('change', function () {
        viewallcontractsbyar.search(this.value).draw();
    });
});

