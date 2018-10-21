   var HttpClient = function() {
       this.get = function(aUrl, aCallback) {
           let anHttpRequest = new XMLHttpRequest();
           anHttpRequest.onreadystatechange = function() {
               if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                   aCallback(anHttpRequest.responseText);
           }

           anHttpRequest.open("GET", aUrl, true);
           anHttpRequest.send(null);
       }
   }

   let client = new HttpClient();

   let idChannel = 'UCVswRUcKC-M35RzgPRv8qUg';
   let partChannel = 'statistics,brandingSettings';

   let nameChannel = document.querySelector('#nameChannel');
   let descriptionChannel = document.querySelector('#descriptionChannel');
   let count = document.querySelector('#count');
   let imageChannel = document.querySelector('#imageChannel');


   let showStat = () => {
       client.get(`https://www.googleapis.com/youtube/v3/channels?part=${partChannel}&id=${idChannel}&key=AIzaSyAk-6HA611Wq9Or9dELINuHLd2Thj5JN1Q`, (response) => {
           //    console.log(JSON.parse(response).items[0]);
           let info = JSON.parse(response).items[0];
           console.log(info);

           nameChannel.innerText = info.brandingSettings.channel.title;
           descriptionChannel.innerText = info.brandingSettings.channel.description;
           count.innerText = info.statistics.subscriberCount;
           imageChannel.src = info.brandingSettings.image.bannerMobileMediumHdImageUrl;
       })
   }

   showStat();




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