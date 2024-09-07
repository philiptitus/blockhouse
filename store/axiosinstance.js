import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/', // Your Django backend URL
});

export default axiosInstance;
