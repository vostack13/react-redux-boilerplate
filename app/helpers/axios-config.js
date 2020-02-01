import axios from 'axios';

export const config = {
    baseURL: 'https://localhost:3000',

    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    },
};

export const axiosInstanceGlobal = axios.create(config);
