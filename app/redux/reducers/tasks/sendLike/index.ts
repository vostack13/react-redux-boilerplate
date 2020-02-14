import {combineReducers} from 'redux';
import {handleAction} from 'app/redux/_shared/handleAction';
import {TAction, TReduxErrorState} from 'app/redux/_shared/types/types';
import createAction from 'app/redux/_shared/createAction';

const actionName = 'LIKE_SEND';

const actions = {
    request: createAction(actionName, 'REQUEST_API') as TAction<{taskId: number}>,
    success: createAction(actionName, 'SUCCESS_API'),
    failure: createAction(actionName, 'FAILURE_API'),
    canceled: createAction(actionName, 'CANCELED_API'),
    send: createAction(actionName, 'FAILURE_API'),
};

export interface ITasksSendLikeState {
    isLoading: boolean;
    error: TReduxErrorState;
}

const reducers = combineReducers({
    isLoading: handleAction(true, {
        [actions.request.type]: () => true,
        [actions.success.type]: () => false,
        [actions.failure.type]: () => false,
        [actions.canceled.type]: () => false,
    }),

    error: handleAction({}, {
        [actions.failure.type]: (_action: any) => ({message: _action.payload}),
    }),
});

export default {actions, reducers};
