import {TAction, TReduxErrorState} from 'app/redux/_shared/types/types';
import {handleAction} from 'app/redux/_shared/handleAction';
import createAction from 'app/redux/_shared/createAction';
import {combineReducers} from 'redux';

const actionName = 'AUTH SIGN IN';

const actions = {
    request: createAction(actionName, 'REQUEST_API') as TAction<{login: string, password: string}>,
    success: createAction(actionName, 'SUCCESS_API'),
    failure: createAction(actionName, 'FAILURE_API') as TAction<{error: string}>,
    canceled: createAction(actionName, 'CANCELED_API'),
};

export interface IAuthSignInState {
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
