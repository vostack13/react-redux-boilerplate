import axios, {AxiosRequestConfig} from 'axios';
import {genarateError} from 'app/api/errors';
import Cookies from 'js-cookie';

export const config = {
    baseURL: 'https://t3s3o.sse.codesandbox.io',

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
        console.log('SET access token', applicationAccessToken.token);

        if (!applicationAccessToken.token) {
            const refreshToken = Cookies.get('refreshToken');

            if (!refreshToken) {
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
    axiosInstanceGlobal(props)
        .then((res) => {
            const {accessToken, refreshToken, ...otherData} = res.data;
            console.log('LOGINED ACCESS TOKEN', accessToken);
            console.log('LOGINED REFRESH TOKEN', refreshToken);
            applicationAccessToken.setToken(accessToken);

            return resolve({data: otherData});
        })

        .catch(err => reject(genarateError(err)));
});
