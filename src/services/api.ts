import axios from 'axios';
import {getToken} from './auth';

const api = axios.create({
  baseURL: 'http://localhost:8080/',
});

api.interceptors.request.use(async (config: any) => {
  const token = await getToken();
  console.log(token);
  if (config) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export {api};
