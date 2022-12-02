import axios from 'axios';

/** Api Call For Get Logger Data */
export function getLoogerData() {
    return axios.get(`https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f`);
};