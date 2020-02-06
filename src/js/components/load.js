// let xhr = new XMLHttpRequest();
// xhr.addEventListener('load', function(){
//     console.log(xhr.responseText);
// });
// xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=bb0046ad5ed31db33977d4585d68b286');
// xhr.send();

const TIMEOUT = 10000;
const STATUS_OK = 200;

const getData = (onLoad, onError) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = `json`;
  xhr.timeout = TIMEOUT;

  xhr.addEventListener(`load`, function () {
    if (xhr.status === STATUS_OK) {
      onLoad(xhr.response);
    } else {
      onError(`Статус ответа: ` + xhr.status + ` ` + xhr.statusText);
    }
  });

  xhr.addEventListener(`error`, function () {
    onError(`Произошла ошибка соединения`);
  });

  xhr.addEventListener(`timeout`, function () {
    onError(`Запрос не успел выполниться за ` + xhr.timeout + `мс`);
  });

  return xhr;
};

export const getObjects = function (onLoad, onError, url) {
  const xhr = getData(onLoad, onError);
  xhr.open(`GET`, url);
  xhr.send();
};
