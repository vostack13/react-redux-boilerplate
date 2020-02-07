import {TASKS_LIST_REQUEST, TASKS_LIST_SUCCESS} from 'app/redux/actions';

export type ITasksDataState = any;
export type ITasksIsLoadingState = boolean;
export type ITasksErrorState = string;

export interface ITasksState {
    isLoading: ITasksIsLoadingState;
    data: ITasksDataState;
    error: ITasksErrorState;
}

const initialState = {
    isLoading: true,
    data: {},
    error: '',
};

export default (state: ITasksState = initialState, action: {payload?: any, type: string}): ITasksState => {
    switch (action.type) {
        case TASKS_LIST_REQUEST: return {
            ...state,
            isLoading: true,
        };

        case TASKS_LIST_SUCCESS: return {
            ...state,
            isLoading: false,
            data: action.payload,
            error: '',
        };

        default: return state;

    }
};
