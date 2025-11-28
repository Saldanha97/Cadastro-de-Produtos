import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}` // ou onde estiver guardando o token
  }
});

export default api
