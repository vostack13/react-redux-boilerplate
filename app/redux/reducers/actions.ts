import signIn from './auth/signIn';
import refreshToken from './auth/refreshToken';
import getList from './tasks/getList';
import addTask from './tasks/addTask';
import sendLike from './tasks/sendLike';

const actions = {
    auth: {
        signIn: signIn.actions,
        refreshToken: refreshToken.actions,
    },

    tasks: {
        getList: getList.actions,
        addTask: addTask.actions,
        sendLike: sendLike.actions,
    },
};

export default actions;
