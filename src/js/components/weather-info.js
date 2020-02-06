const cardTemplate = document.querySelector(`#weather-info-main`).content.querySelector(`.main-info`);

export const renderWeatherInfo = (object) => {
  const cardElement = cardTemplate.cloneNode(true);
  const mainTemperature = cardElement.querySelector(`.main-info__temperature`);
  const temperatureFeeling = cardElement.querySelector(`.main-info__feels-like`);
  const minTemperature = cardElement.querySelector(`.main-info__min`);
  const maxTemperture = cardElement.querySelector(`.main-info__max`);
  const pressureInfo = cardElement.querySelector(`.main-info__pressure`);
  const humidityInfo = cardElement.querySelector(`.main-info__humidity`);

  mainTemperature.textContent = `Температура: ${object.main.temp} градусов`;
  temperatureFeeling.textContent = `Ощущается как: ${object.main.feels_like} градусов`;
  minTemperature.textContent = `Минимальная температура: ${object.main.temp_min} градусов`;
  maxTemperture.textContent = `Максимальная температура: ${object.main.temp_max} градусов`;
  pressureInfo.textContent = `Давление: ${object.main.pressure} мм. рт. ст.`;
  humidityInfo.textContent = `Влажность: ${object.main.humidity}%`;

  return cardElement;
};
