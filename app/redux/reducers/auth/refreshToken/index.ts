import {TAction, TReduxErrorState} from 'app/redux/_shared/types/types';
import {handleAction} from 'app/redux/_shared/handleAction';
import createAction from 'app/redux/_shared/createAction';
import {combineReducers} from 'redux';
import signIn from 'app/redux/reducers/auth/signIn';

const actionName = 'AUTH REFRESH TOKEN';

const actions = {
    request: createAction(actionName, 'REQUEST_API'),
    success: createAction(actionName, 'SUCCESS_API'),
    failure: createAction(actionName, 'FAILURE_API') as TAction<{error: string}>,
    canceled: createAction(actionName, 'CANCELED_API'),
};

export interface IAuthRefreshTokenState {
    isAuthorized: boolean;
    isLoading: boolean;
    isLoaded: boolean;
    error: TReduxErrorState;
}

const reducers = combineReducers({
    isLoading: handleAction(false, {
        [actions.request.type]: () => true,
        [actions.success.type]: () => false,
        [actions.failure.type]: () => false,
        [actions.canceled.type]: () => false,
    }),

    isLoaded: handleAction(false, {
        [actions.request.type]: () => false,
        [actions.success.type]: () => true,
        [actions.failure.type]: () => true,
        [actions.canceled.type]: () => false,
    }),

    isAuthorized: handleAction(false, {
        [actions.success.type]: () => true,
        [actions.failure.type]: () => false,

        [signIn.actions.success.type]: () => true,
        [signIn.actions.failure.type]: () => false,
    }),

    error: handleAction({}, {
        [actions.failure.type]: (_action: any) => ({message: _action.payload}),
    }),
});

export default {actions, reducers};
