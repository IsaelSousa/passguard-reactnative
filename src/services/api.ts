import axios from 'axios';
import {getToken} from './auth';

const api = axios.create({
  baseURL: 'http://192.168.0.106:8080/',
});

api.interceptors.request.use(async (config: any) => {
  const token = await getToken();
  if (config) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export {api};
