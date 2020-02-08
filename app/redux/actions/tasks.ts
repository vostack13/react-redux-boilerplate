import {
    TASKS_ADD_ITEM_CANCELED,
    TASKS_ADD_ITEM_FAILURE,
    TASKS_ADD_ITEM_REQUEST, TASKS_ADD_ITEM_SUCCESS,
    TASKS_LIST_CANCELED,
    TASKS_LIST_FAILURE,
    TASKS_LIST_REQUEST,
    TASKS_LIST_SUCCESS
} from 'app/redux/actions/index';

// --------- GET TASKS LIST

export const reducerTaskListRequest = () => ({
    type: TASKS_LIST_REQUEST,
});

export const reducerTaskListSuccess = (data: any) => ({
    payload: data,
    type: TASKS_LIST_SUCCESS,
});

export const reducerTaskListFailure = (error: string) => ({
    payload: error,
    type: TASKS_LIST_FAILURE,
});

export const reducerTaskListCanceled = () => ({
    type: TASKS_LIST_CANCELED,
});

// --------- ADD Task ITEM

export const reducerAddTaskItemRequest = (data: any) => ({
    payload: data,
    type: TASKS_ADD_ITEM_REQUEST,
});

export const reducerAddTaskItemSuccess = (data: any) => ({
    payload: data,
    type: TASKS_ADD_ITEM_SUCCESS,
});

export const reducerAddTaskItemFailure = (error: string) => ({
    payload: error,
    type: TASKS_ADD_ITEM_FAILURE,
});

export const reducerAddTaskItemCanceled = () => ({
    type: TASKS_ADD_ITEM_CANCELED,
});
