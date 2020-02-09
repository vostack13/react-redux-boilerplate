import {combineEpics} from 'redux-observable';
import {epicAddTaskItem, epicTasksList} from 'app/redux/reducers/tasks/epics';
import {epicAuthToken, epicSignIn} from 'app/redux/reducers/auth/epics';

export default combineEpics(
    epicAuthToken,
    epicSignIn,
    epicTasksList,
    epicAddTaskItem
);
