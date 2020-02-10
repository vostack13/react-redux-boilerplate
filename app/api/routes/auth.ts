import {sendLogin} from 'app/api/config';

export const signin = (data: any) => sendLogin({url: '/sign-in', method: 'post', data});
