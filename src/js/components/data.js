import {renderWeatherInfo} from './weather-info.js';

const cardFragment = document.createDocumentFragment();
const weatherInfoList = document.querySelector(`.weather-info`);
let node = document.querySelector(`#error`).content.querySelector(`.error`).cloneNode(true);
let closeButton = node.querySelector(`.error__button`);

export const onSuccess = (obj) => {

  cardFragment.appendChild(renderWeatherInfo(obj));
  weatherInfoList.appendChild(cardFragment);
};

const onErrorButtonClick = () => {
  closeButton.removeEventListener(`click`, onErrorButtonClick);
  node.remove();
};

const onErrorEscPress = (evt) => {
  if (evt.keyCode === window.util.ESC_KEYCODE) {
    closeButton.removeEventListener(`click`, onErrorButtonClick);
    document.removeEventListener(`keydown`, onErrorEscPress);
    window.removeEventListener(`click`, onErrorWindowClick);
    node.remove();
  }
};

function onErrorWindowClick() {
  window.removeEventListener(`click`, onErrorWindowClick);
  closeButton.removeEventListener(`click`, onErrorButtonClick);
  document.removeEventListener(`keydown`, onErrorEscPress);
  node.remove();
}

const onErrorOpen = () => {
  closeButton.addEventListener(`click`, onErrorButtonClick);
  document.addEventListener(`keydown`, onErrorEscPress);
  window.addEventListener(`click`, onErrorWindowClick);
};

export const onError = (errorMessage) => {
  let nodeText = node.querySelector(`p`);
  nodeText.textContent = errorMessage;
  document.body.insertAdjacentElement(`afterbegin`, node);
  onErrorOpen();
};
