import axios, {AxiosRequestConfig} from 'axios';
import {tasks} from './routes/tasks';
import {genarateError} from 'app/api/errors';

export const config = {
    baseURL: 'https://slrjb.sse.codesandbox.io',

    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    },
};

export const axiosInstanceGlobal = axios.create(config);

export const getResources = async (props: AxiosRequestConfig) => {
    return await axiosInstanceGlobal({
        method: props.method,
        url: props.url,
    })
        .then((res) => ({data: res.data}))
        .catch(err => genarateError(err));
};

export default {
    tasks,
};
