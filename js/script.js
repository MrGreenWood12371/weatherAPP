let xhr = new XMLHttpRequest();
xhr.addEventListener('load', function(){
    console.log(xhr.responseText);
});
xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=bb0046ad5ed31db33977d4585d68b286');
xhr.send();

