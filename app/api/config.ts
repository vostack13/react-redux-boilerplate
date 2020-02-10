import axios, {AxiosRequestConfig} from 'axios';
import {genarateError} from 'app/api/errors';
import Cookies from 'js-cookie';

export const config = {
    // baseURL: 'https://t3s3o.sse.codesandbox.io',
    // baseURL: 'http://localhost:8032',
    baseURL: 'http://192.168.0.101:8032',

    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    },
};

export const axiosInstanceGlobal = axios.create(config);

const applicationAccessToken = {
    token: '',

    getToken() {
        return this.token;
    },

    setToken(token: string) {
        this.token = token;
    },
};

axiosInstanceGlobal.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        console.log('ПРОВЕРКА ПЕРЕД ЗАПРОСОМ');
        console.log('ACCESS TOKEN', applicationAccessToken.token);

        if (!applicationAccessToken.token) {
            console.log('ACCESS TOKEN — ОТСУТСТВУЕТ');

            const refreshToken = Cookies.get('refreshToken');

            console.log('ПРОБУЕМ REFRESH TOKEN', refreshToken);

            if (!refreshToken) {
                console.log('REFRESH TOKEN — ОТСУТСТВУЕТ');

                return Promise.reject({response : {status: 403}});
            }
        }

        return {
            ...config,

            headers: {
                'Authorization': `Bearer ${applicationAccessToken.token}`,
            },
        };
    },

    error => {

        return Promise.reject(error);
    }
);

axiosInstanceGlobal.interceptors.response.use(
    (response: any) => {
        console.log('INTERCEPTORS SUCCESS', response);

        return response;
    },
    error => {
        console.log('INTERCEPTORS ERROR', error);

        return Promise.reject(error);
    }
);

export const getResources = (props: AxiosRequestConfig) => new Promise((resolve, reject) => {
    axiosInstanceGlobal(props)
        .then((res) => resolve({data: res.data}))
        .catch(err => reject(genarateError(err)));
});

export const sendLogin = (props: AxiosRequestConfig) => new Promise((resolve, reject) => {
    axios({...config, ...props})
        .then((res) => {
            const {accessToken, refreshToken, ...otherData} = res.data;

            console.log('LOGINED ACCESS TOKEN', accessToken);
            console.log('LOGINED REFRESH TOKEN', refreshToken);

            applicationAccessToken.setToken(accessToken);
            Cookies.set('refreshToken', refreshToken);

            return resolve({data: otherData});
        })

        .catch(err => reject(genarateError(err)));
});

export const refreshToken = () => new Promise((resolve, reject) => {
    const refreshToken = Cookies.get('refreshToken');

    if (!refreshToken) {
        return reject(genarateError({response : {status: 403}}));
    }

    axios({...config, url: 'refresh', method: 'post', data: {refreshToken}})
        .then((res) => {
            const {accessToken, refreshToken} = res.data;

            applicationAccessToken.setToken(accessToken);
            Cookies.set('refreshToken', refreshToken);

            resolve();
        })

        .catch(err => reject(genarateError(err)));
});
