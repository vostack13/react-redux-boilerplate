import {getResources} from 'app/api/config';

export const getAllList = () => getResources({url: '/tasks', method: 'get'});
export const addTaskItem = (data: any) => getResources({url: '/task', method: 'post', data});
