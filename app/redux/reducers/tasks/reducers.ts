import {TASKS_LIST_CANCELED, TASKS_LIST_FAILURE, TASKS_LIST_REQUEST, TASKS_LIST_SUCCESS} from 'app/redux/actions';
import {TReduxErrorState} from 'app/redux/shared/types/types';

export interface ITasksState {
    isLoading: boolean;
    data: Array<any> | undefined;
    error: TReduxErrorState | undefined;
}

const initialState = {
    isLoading: true,
    data: undefined,
    error: undefined,
};

export default (state: ITasksState = initialState, action: {payload?: any, type: string}): ITasksState => {
    switch (action.type) {
        // case TASKS_LIST_REQUEST: return {
        //     ...state,
        //     isLoading: true,
        // };

        case TASKS_LIST_SUCCESS: return {
            ...state,
            isLoading: false,
            data: action.payload,
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
