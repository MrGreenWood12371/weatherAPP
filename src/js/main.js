import {getObjects} from './components/load.js';
import {onSuccess, onError} from './components/data.js';

const DATA_URL = `http://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&appid=bb0046ad5ed31db33977d4585d68b286`;

getObjects(onSuccess, onError, DATA_URL);
