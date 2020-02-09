import {combineReducers} from 'redux';
import tasks, {ITasksDataState, ITasksErrorState, ITasksIsLoadingState, ITasksState} from './tasks/reducers';
import auth, {
    IAuthDataState,
    IAuthErrorState,
    IAuthIsAuthorizedState,
    IAuthIsLoadingState,
    IAuthState,
    IAuthTokenState
} from './auth/reducers';

export default combineReducers({
    auth,
    tasks,
});

export interface IAppState {
    auth: IAuthState;
    tasks: ITasksState;
}

// ---------  auth

export const _authData = (state: IAppState): IAuthDataState => state.auth.signin;
export const _authIsLoading = (state: IAppState): IAuthIsLoadingState => state.auth.isLoading;
export const _authError = (state: IAppState): IAuthErrorState => state.auth.error;
export const _authAuthToken = (state: IAppState): IAuthTokenState => state.auth.authToken;

// ---------  taskList

export const _tasksListData = (state: IAppState): ITasksDataState => state.tasks.taskList;
export const _tasksListIsLoading = (state: IAppState): ITasksIsLoadingState => state.tasks.isLoading;
export const _tasksListError = (state: IAppState): ITasksErrorState => state.tasks.error;
