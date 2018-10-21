'use strict';

var HttpClient = function HttpClient() {
    this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200) aCallback(anHttpRequest.responseText);
        };

        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
    };
};

var client = new HttpClient();

var idChannel = 'UCVswRUcKC-M35RzgPRv8qUg';
var partChannel = 'statistics,brandingSettings';

var titleChannel = document.querySelector('#titleChannel');
var descriptionChannel = document.querySelector('#descriptionChannel');
var count = document.querySelector('#count');
var imageChannel = document.querySelector('#imageChannel');
var countWiews = document.querySelector('#countWiews');
var subs = document.querySelector('#colRemaind1000000');

var form = document.querySelector('form');

var showStat = function showStat(Id) {
    client.get('https://www.googleapis.com/youtube/v3/channels?part=' + partChannel + '&id=' + Id + '&key=AIzaSyAk-6HA611Wq9Or9dELINuHLd2Thj5JN1Q', function (response) {
        //    console.log(JSON.parse(response).items[0]);
        var info = JSON.parse(response).items[0];
        console.log(info);

        titleChannel.innerText = info.brandingSettings.channel.title;
        descriptionChannel.innerText = info.brandingSettings.channel.description;
        count.innerText = info.statistics.subscriberCount;
        imageChannel.src = info.brandingSettings.image.bannerMobileMediumHdImageUrl;
        countWiews.innerText = info.statistics.viewCount;
        var colRemaind1000000 = 1000000 - info.statistics.subscriberCount;
        subs.innerText = colRemaind1000000;
    });
};

form.addEventListener('submit', function (event) {
    event.defaultPrevented;
    var nameChannel = document.querySelector('#nameChannel').value;
    searchStat(nameChannel);
});

var searchStat = function searchStat(nameChannel) {
    client.get('https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&maxResults=1&q=' + nameChannel + '&key=AIzaSyAk-6HA611Wq9Or9dELINuHLd2Thj5JN1Q', function (response) {
        var info = JSON.parse(response).items[0].snippet.channelId;
        showStat(info);
    });
};

showStat(idChannel);

/* 
   // 1. Создаём новый объект XMLHttpRequest
   var xhr = new XMLHttpRequest();
     // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
   xhr.open('GET', 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=AIzaSyAk-6HA611Wq9Or9dELINuHLd2Thj5JN1Q', false);
     // 3. Отсылаем запрос
   xhr.send();
     // 4. Если код ответа сервера не 200, то это ошибка
   if (xhr.status != 200) {
       // обработать ошибку
       console.log(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
   } else {
       var subsCount = JSON.parse(xhr.responseText).items[0].statistics.subscriberCount;
       document.querySelector('#count').innerHTML = subsCount;
   } */