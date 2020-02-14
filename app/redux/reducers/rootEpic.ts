import {combineEpics} from 'redux-observable';
import {epicTasksGetList} from 'app/redux/reducers/tasks/getList/epics';
import {epicTasksAddTask} from 'app/redux/reducers/tasks/addTask/epics';
import {epicAuthSignIn} from 'app/redux/reducers/auth/signIn/epics';
import {epicAuthRefreshToken} from 'app/redux/reducers/auth/refreshToken/epics';

export default combineEpics(
    epicAuthRefreshToken,
    epicAuthSignIn,
    epicTasksGetList,
    epicTasksAddTask
);
