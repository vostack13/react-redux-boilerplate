import {getResources} from 'app/api';

const getAllList = async () => {
    return await getResources({url: '/tasks', method: 'get'});
};

export const tasks = {
    getAllList,
};
