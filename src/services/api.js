import axios from 'axios';

const api = axios.create({
  // baseURL: "http://3.89.88.182:8080/"
  baseURL: "http://localhost:8080/"
});

export default api;