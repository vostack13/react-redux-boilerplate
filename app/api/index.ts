import axios, {AxiosRequestConfig} from 'axios';
import {tasks} from './routes/tasks';
import {genarateError} from 'app/api/errors';

export const config = {
    baseURL: 'https://t3s3o.sse.codesandbox.io',

    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    },
};

export const axiosInstanceGlobal = axios.create(config);

// axiosInstanceGlobal.interceptors.response.use(function (response) {
//     console.log('INTERCEPTORS SUCCESS', response);
//
//     return response;
// }, function (error) {
//     console.log('INTERCEPTORS ERROR', error);
//
//     return Promise.resolve(error);
// });

export const getResources = (props: AxiosRequestConfig) => new Promise((resolve, reject) => {
    axiosInstanceGlobal(props)
        .then((res) => resolve({data: res.data}))
        .catch(err => reject(genarateError(err)));
});

export default {
    tasks,
};
