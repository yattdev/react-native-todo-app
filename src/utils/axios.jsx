import axios from 'axios';
import {BASE_URL} from '../settings';

const instanceAxios = axios.create({
  baseURL: BASE_URL,
});

instanceAxios.defaults.headers.get['Content-Type'] = 'application/json';

export default instanceAxios;
