// import {getObjects} from './components/load.js';
import {onSuccess, onError} from './components/data.js';

const DATA_URL = `http://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&appid=bb0046ad5ed31db33977d4585d68b286`;
const cityType = document.querySelector(`.city-search__select`);

const renderWeather = (url) => {
  const loadData = fetch(url);

  loadData.then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Произошла ошибка со статусом: ${response.status} ${response.statusText}`);
  })
    .then(onSuccess)
    .catch(onError);
};

cityType.addEventListener(`change`, () => {
  const weatherInfo = document.querySelector(`.main-info`);
  weatherInfo.remove();
  renderWeather(`http://api.openweathermap.org/data/2.5/weather?q=${cityType.value}&units=metric&appid=bb0046ad5ed31db33977d4585d68b286`);
});

renderWeather(DATA_URL);
