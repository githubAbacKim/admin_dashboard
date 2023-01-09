session = localStorage.getItem('LoginSession');
results = null;

$(function () {
    displayConstructorData(getData('http://210.99.223.38:8081/api/constructor?constructorId=', session));
    // displayConstructorImg(getData('http://210.99.223.38:8081/api/constructor/image?constructorId=', session));
    // getData('http://210.99.223.38:8081/api/constructor/image?constructorId=', session)

    displayConstructorImg(); 
    // displayExhibitionList(getExhibitionData('http://210.99.223.38:8081/api/exhibition/constructor?constructorId=' + session));
    // displayExhibitionList(getExhibitionData(results)) ;
});