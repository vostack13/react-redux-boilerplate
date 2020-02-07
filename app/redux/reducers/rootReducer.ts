import {combineReducers} from 'redux';
import tasks, {ITasksDataState, ITasksErrorState, ITasksIsLoadingState, ITasksState} from './tasks/reducers';

export default combineReducers({
    tasks,
});

export interface IAppState {
    tasks: ITasksState;
}

export const _tasksListData = (state: IAppState): ITasksDataState => state.tasks.data;
export const _tasksListIsLoading = (state: IAppState): ITasksIsLoadingState => state.tasks.isLoading;
export const _tasksListError = (state: IAppState): ITasksErrorState => state.tasks.error;
