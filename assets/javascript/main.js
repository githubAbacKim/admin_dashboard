
// $(document).ready(function () {
//     $('.complex').on('click', function () {
//         $(this).parent().remove();
//     });
// })


$(document).ready(function () {
    $('.addpartcons').on('click', function (e) {
        e.preventDefault();
        const contractor = $('#partcontractor').val();
        const partconslist = '<li class="btn btn-outline-primary rounded-pill"> <p>' + contractor + '</p><i class="partconsbtn fa-regular fa-xmark"></i></li >';
 
        if (contractor.length == '') {
            // do nothing
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

// FILE UPLOAD INITIALIZED WITH FILEPOND
$(document).ready(function () {

    // First register any plugins
    $.fn.filepond.registerPlugin(
        FilePondPluginImagePreview,
        FilePondPluginImageResize,
        FilePondPluginImageTransform
    );

    
    // Turn input element into a pond
    $('.my-pond').filepond();
    
    // remove the credits section & override css styles
    $('.filepond--credits').remove();
    $('.filepond--drop-label').addClass('bg-light rounded');
    $('.filepond--drop-label > label').addClass('bg-light text-secondary fw-bold cursor-pointer');
 
    // Set allowMultiple property to true
    $('.my-pond').filepond('allowMultiple', true);

    // Listen for addfile event
    $('.my-pond').on('FilePond:addfile', function (e) {
        console.log('file added event', e);
    });

    // Manually add a file using the addfile method
    // $('.my-pond').first().filepond('addFile', 'index.html').then(function (file) {
    //     console.log('file added', file);
    // });

});

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

/** DATA TABLES */
$(document).ready(function () {
    var viewallcontractsbyac = $('#viewallcontractsbyac_table').DataTable();
    $('#apartmentcomplexfilter01').on('change', function () {
        viewallcontractsbyac.search(this.value).draw();
    });
    
    var viewallcontractsbyar = $('#viewallcontractsbyar_table').DataTable();
    $('#apartmentcomplexfilter02').on('change', function () {
        viewallcontractsbyar.search(this.value).draw();
    });


    $('#createexposition_table').DataTable();
    $('#tenantmanagement_table').DataTable();
    $('#orderstatus_table').DataTable();
});





