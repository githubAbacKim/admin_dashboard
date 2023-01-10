session = localStorage.getItem('LoginSession');

$(function () {
    var urlConstructorData = 'http://210.99.223.38:8081/api/constructor?constructorId=';

    displayConstructorData(getData(urlConstructorData, session));
    



});