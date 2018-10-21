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

   let showStat = () => {
       client.get('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=AIzaSyAk-6HA611Wq9Or9dELINuHLd2Thj5JN1Q', (response) => {
           console.log(JSON.parse(response).items[0].statistics.subscriberCount);
       })
       client.get('https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCVswRUcKC-M35RzgPRv8qUg&key=AIzaSyAk-6HA611Wq9Or9dELINuHLd2Thj5JN1Q', (response) => {
           console.log(JSON.parse(response).items[0].snippet.description);
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