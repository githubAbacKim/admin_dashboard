
// $(document).ready(function () {
//     $('.complex').on('click', function () {
//         $(this).parent().remove();
//     });



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

// VANILLA JS DATEPICKER
// document.addEventListener('DOMContentLoaded', function () {
//     const elem = document.getElementById('daterange');
//     const daterange = new DateRangePicker(elem, {
//         orientation: "bottom left",
//         buttonClass: 'btn',
//         clearBtn: true,
//         language: 'ko',
//         todayHighlight: true,
//     });
// });

/** SELECT 2 */
$(document).ready(function () {
    $('#viewallcontracts_selectapartmentcomplex01').select2({
        theme: 'bootstrap-5',
        width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
        placeholder: $(this).data('placeholder'),
    });

    $('#viewallcontracts_selectapartmentcomplex02').select2({
        theme: 'bootstrap-5',
        width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
        placeholder: $(this).data('placeholder'),
    });

    $('#cardusagehistory_card02').select2({
        theme: 'bootstrap-5',
        width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
        placeholder: $(this).data('placeholder'),
    });

    $('#cardusagehistory_account03').select2({
        theme: 'bootstrap-5',
        width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
        placeholder: $(this).data('placeholder'),
    });

    $('#selectAppartment').select2({
        theme: 'bootstrap-5',
        width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
        placeholder: $(this).data('placeholder'),
    });

    $('#superadmin_selectcategory').select2({
        theme: "bootstrap-5",
        width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
        placeholder: $(this).data('placeholder'),
    });

    $('#superadmin_selectcontrator').select2({
        theme: "bootstrap-5",
        width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
        placeholder: $(this).data('placeholder'),
    });
    $('#onlinefair1').select2({
        theme: "bootstrap-5",
        width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
        placeholder: $(this).data('placeholder'),
    });
    $('#onlinefair2').select2({
        theme: "bootstrap-5",
        width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
        placeholder: $(this).data('placeholder'),
    });
});

/** customize data tables */
$(document).ready(function () {
    // var viewallcontracts = $('#viewallcontractsbyac_table').DataTable();
    // var first_row = $('#viewallcontractsbyac_table_wrapper .row:first-child');
    // first_row.addClass('justify-content-between align-items-center flex-row flex-wrap');
    // first_row.append($(".apartmentcomplexfilter"));
    // first_row.children('.col-md-6').removeClass('col-md-6').addClass('col-lg-6').addClass('col-xl-4').addClass('viewallcontactsfilters').addClass('border border-danger');

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
    $('#subscribermanagement_table').DataTable();

    $('#contractwriting_table').DataTable();
    var second_row = $('#contractwriting_table_wrapper .row:nth-child(2)');
    second_row.prepend('<div class="hr-2 bg-dark mt-2"></div>');
    second_row.append('<div class="hr-2 bg-dark mt-3 mb-2"></div>');
    

    $('#cardusagehistorybydate_table').DataTable();
    $('#cardusagehistorybycard_table').DataTable();
    $('#cardusagehistorybyaccount_table').DataTable();
    

});


$(document).ready(function () { 

    $('#login_form').on('submit', function (e) {
        e.preventDefault();
        
        var formData = new FormData(this)

        const login_user = $('#login_username').val();
        const login_pass = $('#login_password').val();

        // console.log(formData);
    
        $.ajax({
            type: 'POST',
            url: 'http://210.99.223.38:8081/api/login?ID=' + login_user + '&Password=' + login_pass,
            // data: login_user + login_pass,
            dataType: 'JSON',
            success: function (response) {
                console.log(response.data);
            }
        });
    });


});





















