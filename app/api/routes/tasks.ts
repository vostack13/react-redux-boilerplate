import {getResources} from 'app/api';

const getAllList = () => getResources({url: '/tasks', method: 'get'});
const addTaskItem = (data: any) => getResources({url: '/tasks/addItem', method: 'post', data});

export const tasks = {
    getAllList,
    addTaskItem,
};
