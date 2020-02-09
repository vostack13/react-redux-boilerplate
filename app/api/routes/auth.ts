import {sendLogin} from 'app/api/config';

export const signin = (data: any) => sendLogin({url: '/signin', method: 'post', data});
export const refreshToken = (data: any) => sendLogin({url: '/signin', method: 'post', data});
