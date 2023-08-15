import axios from 'axios';

export const MovieAPI = axios.create({
    baseURL: `http://www.omdbapi.com/`,
})