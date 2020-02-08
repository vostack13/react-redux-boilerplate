import {combineEpics} from 'redux-observable';
import {epicAddTaskItem, epicTasksList} from 'app/redux/reducers/tasks/epics';

export default combineEpics(
    epicTasksList,
    epicAddTaskItem
);
