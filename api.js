// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-backend-url.com', // Replace with your backend URL
});

export default api;
//Create an api.js file to manage your HTTP requests. This will allow us to easily use Axios and set the base URL for API calls.