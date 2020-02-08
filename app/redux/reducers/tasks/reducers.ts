import {TASKS_LIST_CANCELED, TASKS_LIST_FAILURE, TASKS_LIST_REQUEST, TASKS_LIST_SUCCESS} from 'app/redux/actions';

export type ITasksIsLoadingState = boolean;

export type ITasksDataState = {
    isLoaded: boolean;
    data: Array<any>
};

export type ITasksErrorState = {
    message: string;
};

export interface ITasksState {
    isLoading: ITasksIsLoadingState;
    taskList: ITasksDataState;
    error: ITasksErrorState;
}

const initialState = {
    isLoading: false,

    taskList: {
        isLoaded: false,
        data: [],
    },

    error: {
        message: '',
    },
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

            taskList: {
                isLoaded: true,
                data: action.payload,
            },
            error: initialState.error,
        };

        case TASKS_LIST_FAILURE: return {
            ...state,
            isLoading: false,

            error: {
                message: action.payload,
            },
        };

        case TASKS_LIST_CANCELED: return {
            ...state,
            isLoading: false,
        };

        default: return state;

    }
};
