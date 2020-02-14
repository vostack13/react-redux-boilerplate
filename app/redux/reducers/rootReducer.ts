import {combineReducers} from 'redux';
import tasks, {ITasksState} from './tasks/reducers';
import like, {ILikeState, TLikeError, TLikeIsLoading} from './like/reducers';
import auth, {
    IAuthDataState,
    IAuthErrorState,
    IAuthIsLoadingState,
    IAuthState,
    IAuthTokenState
} from './auth/reducers';
import {createSelector} from 'reselect';

export default combineReducers({
    auth,
    tasks,
    like,
});

export interface IAppState {
    auth: IAuthState;
    tasks: ITasksState;
    like: ILikeState;
}

// ---------  auth

export const _authData = (state: IAppState): IAuthDataState => state.auth.signin;
export const _authIsLoading = (state: IAppState): IAuthIsLoadingState => state.auth.isLoading;
export const _authError = (state: IAppState): IAuthErrorState => state.auth.error;
export const _authAuthToken = (state: IAppState): IAuthTokenState => state.auth.authToken;

// ---------  taskList

export const _tasksListData = (state: IAppState): ITasksState => state.tasks;

// ---------  like
export const _likeIsLoading = (state: IAppState): TLikeIsLoading => state.like.isLoading;
export const _likeError = (state: IAppState): TLikeError => state.like.error;

export const _tasksListReselect = createSelector(
    (state: IAppState): ITasksState => state.tasks,

    tasks => tasks
);
