session = localStorage.getItem('LoginSession');
results = null;

$(function () {
    displayConstructorData(getData('http://210.99.223.38:8081/api/constructor?constructorId=', session));
    displayConstructorImg(getData('http://210.99.223.38:8081/api/constructor/image?constructorId=', session));

    getExhibitionData();
    // displayExhibitionList(getExhibitionData(results)) ;
});