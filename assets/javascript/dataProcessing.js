function getData(url, id) {
    // console.log('im here');
    $.ajax({
        method: 'GET',
        url: url + id,
        dataType: 'JSON',
        contentType: "application/json",
        async: false,
        success: function (response) {
            if (response.status === 'OK') {
                results = response.data;
                // console.log(results);
            }
        },
        fail: function () {
            // console.log('error');
        },
    });
    return results;
}

function displayConstructorData(results) {
    var consName = "{{ name }}" ;
    var consNumber = "{{ phoneNumber }}";
    var consProducts = "{{#product}} {{.}} / {{/product}}";
    var consAddress = "{{ address }}";
    var consIntro = "{{ introduction }}";

    $('.consName').text(Mustache.render(consName, results));
    $('.consNumber').text(Mustache.render(consNumber, results));
    $('.consProducts').text(Mustache.render(consProducts, results));
    $('.consAddress').text(Mustache.render(consAddress, results));
    $('.consIntro').text(Mustache.render(consIntro, results));
}

function displayConstructorImg () {
    var src = 'http://210.99.223.38:8081/api/constructor/image?constructorId=' + session;
    // var consProfileImgSrc = "{{ storage }}";
    // var consProfileImgName = "{{ name }}";

    // console.log(consProfileImgSrc);
    $('.consProfileImg').attr('src', src)
    // $('.consProfileImg').attr('alt', (Mustache.render(consProfileImgName, results)))
}


function getExhibitionData(url) {
    $.ajax({
        method: 'GET',
        url: url,
        dataType: 'JSON',
        contentType: "application/json",
        async: false,
        success: function (response) {
            if (response.status === 'OK') {
                results = response.data;
                // console.log(results);
                // $.each(response.data, function (i, result) {

                //     // console.log(response.data);
                //     var category = result['exhibitionCategory']['name'];

                //     var constructor = result['constructorName'];
                //     var contact = result['constructorPhoneNumber'];
                //     var answer = result['answer'];
                //     var pay = result['pay'];
                //     var video = result['videoLink'];
                //     var tag = result['tag'];

                //     // console.log(category);
                //     var template = "" +
                //         "<tr>" +
                //             "<td> {{ category }} </td>" +
                //             "<td> {{ constructor }} </td>" +
                //             "<td> {{ contact }} </td>" +
                //             "<td>" +
                //                 "<div class='switch-div>" +
                //                     "<label class='switch'>" +
                //                     "{{ #answer }}" +
                //                     "<input class='switch-input' type='checkbox' checked />" +
                //                     "{{ /answer }}" +
                //                 "</div>" +
                //             "</td>" +
                //             "<td> {{ category }} </td>" +
                //             "<td> {{ constructor }} </td>" +
                //             "<td> {{ contact }} </td>" +
                //             "<td> {{ category }} </td>" +
                //         "</tr>"
                //         ;

                //     console.log($('#createexposition_table_body').append(Mustache.render(template, result)))
                //     // var category = results['exhibitionCategory']['name'];
                //     // console.log(constructor);
                // });
            }
        },
        fail: function () {
            // console.log('error');
        },
    });
    return results;
}

function displayExhibitionList(results) {
    // console.log(results);
    $.each(results, function (i, result){
        var category = result.exhibitionCategory['name'];
        var constructor = result.constructorName;
        var contact = result.constructorPhoneNumber;
        var answer = result.answer;
        var pay = result.pay;
        var content = result.constructorContent;
        var video = result.videoLink;
        var tag = result.tag;

        function check_answer(answer) {
            if(answer === true) {
                return 'checked';
            } else if (answer === false) {
                return;
            }
        }

        function check_pay(pay) {
            if (pay === true) {
                return 'checked';
            } else if (pay === false) {
                return;
            }
        }

        var template = "" +
            "<tr>" +
                "<td>" + category + "</td>" +
                "<td>" + constructor + "</td>" +
                "<td>" + contact + "</td>" +
                "<td>" +
                    "<div class='switch-div'>" +
                        "<label class='switch'>" +
                        "<input class='switch-input' type='checkbox'" + check_answer(answer) +"/>" +
                        "<span class='switch-label'  data-off='NO' data-on='YES'></span>" +
                        "<span class='switch-handle'></span>" +
                    "</div>" +
                "</td>" +
                "<td>" + 
                    "<div class='switch-div'>" +
                        "<label class='switch'>" +
                        "<input class='switch-input' type='checkbox'" + check_pay(pay) + "/>" +
                        "<span class='switch-label'  data-off='NO' data-on='YES'></span>" +
                        "<span class='switch-handle'></span>" +
                    "</div>" +
                "</td>" +
                "<td>" + 
                    "<button type='button' class='btn btn-sm link-dark' data-bs-trigger='focus' data-bs-toggle='popover' data-bs-placement='bottom' title='회사이름' data-bs-content='"+ content +"'>" +
                        "<i class='fa-solid fa-share'></i>" +
                    "</button>" +
                "</td>" +
                "<td>" + video +"</td>" +
                "<td>" + tag + "</td>" +
                "<td> x </td>" +
            "</tr>"
            ;

        $('#createexposition_table_body').append(template)

        // console.log(template);
    });
}


{/* <tr>
    <td> 브랜드가구 </td>
    <td> 시공사이름 </td>
    <td> 010-0000-0000 </td>
    <td>
        <div class='switch-div'>
            <label class='switch'>
                <input class='switch-input' type='checkbox' />
                <span class='switch-label' data-off='NO' data-on='YES'></span>
                <span class='switch-handle'></span>
            </label>
        </div>
    </td>
    <td>
        <div class='switch-div'>
            <label class='switch'>
                <input class='switch-input' type='checkbox' />
                <span class='switch-label' data-off='NO' data-on='YES'></span>
                <span class='switch-handle'></span>
            </label>
        </div>
    </td>
    <td>
        <button type='button' class='btn btn-sm link-dark' data-bs-trigger='focus' data-bs-toggle='popover' data-bs-placement='bottom' title='회사이름' data-bs-content='회사소개회사소개회사소개회사소개회사소개회사소개회사 회사소개회사소개회사소개회사소개회사소개회사소개회사 '>
            <i class='fa-solid fa-share'></i>
        </button>
    </td>
    <td> <a href='#'>www.youtube.co.kr</a>  </td>
    <td>
        <div class='d-flex justify-content-between align-items-center flow-row flex-nowrap'>
            <ul class='m-0 p-0 d-inline-flex list-unstyled flex-grow-1'>
                <li class='link-primary mx-1 cursor-pointer'>  #단열필름 </li>
                <li class='link-primary mx-1 cursor-pointer'>  #3M </li>
                <li class='link-primary mx-1 cursor-pointer'>  #보온스마트플 </li>
                <li class='link-primary mx-1 cursor-pointer'>  ... </li>
            </ul>
            <button type='button' class='btn btn-close btn-sm flex-grow-0'> </button>
        </div>
    </td>
</tr> */}