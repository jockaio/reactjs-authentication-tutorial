import axios from 'axios';
import { getAccessToken } from './AuthService';

const BASE_URL = process.env.BASE_URL;

export {getTranslation};

function getTranslation(queryString) {
    const url = `${BASE_URL}/api/word?queryString=${queryString}`;
    return axios.get(url, { headers: { Authorization: `Bearer ${getAccessToken()}` }}).then(response => response.data);
  }