import {combineReducers} from 'redux';
import {ITasksSendLikeState} from './tasks/sendLike';

import tasks, {ITasksState} from 'app/redux/reducers/tasks/reducers';
import {ITasksGetListState} from 'app/redux/reducers/tasks/getList';
import {ITasksAddTaskState} from 'app/redux/reducers/tasks/addTask';
import auth, {IAuthState} from 'app/redux/reducers/auth/reducers';
import {IAuthRefreshTokenState} from 'app/redux/reducers/auth/refreshToken';
// import {createSelector} from 'reselect';

export default combineReducers({
    auth,
    tasks,
});

export interface IAppState {
    auth: IAuthState;
    tasks: ITasksState;
}

// ---------  auth

export const _authAuthToken = (state: IAppState): IAuthRefreshTokenState => state.auth.refreshToken;

// ---------  tasks

export const _tasksListData = (state: IAppState): ITasksGetListState => state.tasks.getList;
export const _tasksAddTaskData = (state: IAppState): ITasksAddTaskState => state.tasks.addTask;
export const _sendLike = (state: IAppState): ITasksSendLikeState => state.tasks.sendLike;

// export const _tasksListReselect = createSelector(
//     (state: IAppState): ITasksState => state.tasks,
//
//     tasks => tasks
// );
