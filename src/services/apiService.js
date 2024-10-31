// src/services/apiService.js
import axios from 'axios';

const API_KEY = 'VKS3ER8ECES2WROY';  // Agrega tu clave API
const BASE_URL = 'https://www.alphavantage.co/query';

export const fetchStockData = (symbol) => {
  return axios.get(BASE_URL, {
    params: {
      function: 'TIME_SERIES_DAILY',
      symbol,
      outputsize: 'compact',
      apikey: API_KEY,
    },
  });
};
