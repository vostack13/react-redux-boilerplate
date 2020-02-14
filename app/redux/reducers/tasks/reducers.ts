import getList, {ITasksGetListState} from './getList';
import addTask, {ITasksAddTaskState} from './addTask';
import sendLike, {ITasksSendLikeState} from './sendLike';
import {combineReducers} from 'redux';

export interface ITasksState {
    getList: ITasksGetListState;
    addTask: ITasksAddTaskState;
    sendLike: ITasksSendLikeState;
}

const tasks = combineReducers({
    getList: getList.reducers,
    addTask: addTask.reducers,
    sendLike: sendLike.reducers,
});

export default tasks;
