function getData(url, id) {
    $.ajax({
        method: 'GET',
        url: url + id,
        dataType: 'JSON',
        contentType: "application/json",
        async: false,
        success: function (response) {
            if (response.status === 'OK') {
                result = response.data;
                // console.log(result);
            }
        },
        fail: function () {
            // console.log('error');
        },
    });
    return result;
}

function displayConstructorData(results) {
    var consName = "{{ name }}" ;
    var consNumber = "{{ phoneNumber }}";
    var consProducts = "{{#product}} {{.}} / {{/product}}";
    var consAddress = "{{ address }}";
    var consIntro = "{{ introduction }}";

    $('.consName').text(Mustache.render(consName, results))
    $('.consNumber').text(Mustache.render(consNumber, results))
    $('.consProducts').text(Mustache.render(consProducts, results))
    $('.consAddress').text(Mustache.render(consAddress, results))
    $('.consIntro').text(Mustache.render(consIntro, results))
}

function displayConstructorImg (results) {
    // var consProfileImgSrc = JSON.stringify("{{ storage }}");
    // var consProfileImgName = "{{ name }}";

    // $('.consProfileImg').attr('src', (Mustache.render(consProfileImgSrc, results)))
    // $('.consProfileImg').attr('alt', (Mustache.render(consProfileImgName, results)))
}


function getExhibitionData() {
    $('#createexposition_table').DataTable({
        'ajax': {
            "url": 'http://210.99.223.38:8081/api/exhibition/constructor/list',
            "type": 'GET',
            "dataType": "json",
        },
        "columns": [
            { "data": "id" },
            { "data": "exhibitionId" },
            { "data": "videoLink" },
            { "data": "constructorId" },
            { "data": "constructorContent" },
            { "data": "tag" },
            { "data": "constructorName" },
            { "data": "constructorPhoneNumber" },
            { "render": function () { return '<input type ="checkbox">'; } },
        ]
    });


    
}

// function displayExhibitionList(results) {
//     $('#createexposition_table').DataTable();
// }


$('#createexposition_table').DataTable({

});

// $.ajax({
//     method: 'GET',
//     url: 'http://210.99.223.38:8081/api/exhibition',
//     dataType: 'JSON',
//     contentType: "application/json",
//     async: false,
//     // data: JSON.stringify({
//     //     "constructorId": "c9bc0a5a-047b-4b54-be79-0675bd84c759"
//     // }),
//     success: function (responses) {
//         $.each(responses, function (i, response) {
//             result = responses;


//             // $('#createexposition_table').DataTable();
//             // console.log(responses);

//         })
//         console.log(responses);
//     }
// });
// return result;