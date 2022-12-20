/** DATA TABLES */
$(document).ready(function () {
    $('table').DataTable();
});

/** SELECT 2 */
$(document).ready(function () {
    $('#selectAppartment').select2( {
        theme: 'bootstrap-5',
        width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
        placeholder: $(this).data('placeholder'),
    });
});

// VANILLA JS DATEPICKER
document.addEventListener('DOMContentLoaded', function () {
    const elem = document.getElementById('foo');
    const rangepicker = new DateRangePicker(elem, {
        orientation: "bottom left",
        buttonClass: 'btn',
        autoclose: false
    });
});

// easy-time-picker-bootstrap
document.addEventListener('DOMContentLoaded', function () {
    jQuery('#start_time, #end_time').timepicker({});
});

