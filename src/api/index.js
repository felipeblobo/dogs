import axios from 'axios'

const api = axios.create({
  baseURL: 'https://dogsapi.origamid.dev/json',
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(async config => {
  const token = window.localStorage.getItem("dogToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;