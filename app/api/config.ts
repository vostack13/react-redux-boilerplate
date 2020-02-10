import axios, {AxiosRequestConfig} from 'axios';
import {generateError} from 'app/api/errors';
import Cookies from 'js-cookie';

export const config = {
    // baseURL: 'https://t3s3o.sse.codesandbox.io',
    // baseURL: 'http://localhost:8032',
    baseURL: 'http://192.168.0.106:8032',

    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    },
};

export const axiosInstanceGlobal = axios.create(config);

const applicationAccessToken = {
    token: '',
    tokenExp: 0,
    isFetching: false,

    setToken(token: string, tokenExp: number) {
        this.token = token;
        this.tokenExp = tokenExp;
    },

    tokenResolved() {
        return new Promise((resolve, reject) => {
            if (!this.isFetching) {
                const timer = setInterval(() => {
                    if (!this.isFetching) {
                        clearInterval(timer);
                        resolve();
                    }
                }, 200);
            } else {
                resolve();
            }

        });
    },
};

axiosInstanceGlobal.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        await applicationAccessToken.tokenResolved();

        if (!applicationAccessToken.token || !applicationAccessToken.tokenExp) {
            const refreshData = await refreshToken()
                .then((r: any) => r)
                .catch((e: any) => e);

            if (refreshData.typeError !== undefined)
                return Promise.reject({response : {status: 401}});
        }

        const currentTime = Math.floor(Date.now() / 1000);

        if (currentTime >= applicationAccessToken.tokenExp - 30) {
            const refreshData = await refreshToken()
                .then((r: any) => r)
                .catch((e: any) => e);

            if (refreshData.typeError !== undefined) {
                return Promise.reject({response : {status: 401}});
            }
        }

        return {
            ...config,

            headers: {
                'Authorization': `Bearer ${applicationAccessToken.token}`,
            },
        };
    },

    error => Promise.reject(error)
);

axiosInstanceGlobal.interceptors.response.use(
    (response: any) => response,
    error => Promise.reject(error)
);

export const getResources = (props: AxiosRequestConfig) => new Promise((resolve, reject) => {
    axiosInstanceGlobal(props)
        .then((res) => resolve({data: res.data}))
        .catch(err => reject(generateError(err)));
});

export const sendLogin = (props: AxiosRequestConfig) => new Promise((resolve, reject) => {
    axios({...config, ...props})
        .then((res) => {
            const {accessToken, accessToken_exp, refreshToken, refreshToken_exp, ...otherData} = res.data;

            applicationAccessToken.setToken(accessToken, accessToken_exp);
            Cookies.set('refreshToken', refreshToken);
            Cookies.set('refreshToken_exp', refreshToken_exp);

            return resolve({data: otherData});
        })

        .catch(err => reject(generateError(err)));
});

export const refreshToken = (): any => new Promise((resolve, reject) => {
    const refreshToken = Cookies.get('refreshToken');
    const refreshTokenExp = Cookies.get('refreshToken_exp');

    if (!refreshToken || !refreshTokenExp) {
        return reject(generateError({response : {status: 403}}));
    }

    applicationAccessToken.isFetching = true;

    axios({...config, url: 'refresh', method: 'post', data: {refreshToken}})
        .then((res) => {
            const {accessToken, accessToken_exp, refreshToken, refreshToken_exp} = res.data;

            applicationAccessToken.setToken(accessToken, accessToken_exp);
            Cookies.set('refreshToken', refreshToken);
            Cookies.set('refreshToken_exp', refreshToken_exp);
            applicationAccessToken.isFetching = false;
            return resolve({});
        })

        .catch(err => {
            Cookies.remove('refreshToken');
            Cookies.remove('refreshToken_exp');
            applicationAccessToken.isFetching = false;
            return reject(generateError(err));
        });
});
