import axios from 'axios';
import {getToken} from './auth';

const api = axios.create({
  baseURL: 'http://localhost:8080/',
});

const token = getToken();
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export {api};
