import axios from 'axios';

const api = axios.create({
  baseURL: VITE_API_URL

});


api.interceptors.request.use(config => {
  const token = localStorage.getItem('token'); // pega o token salvo no login
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});



export default api
