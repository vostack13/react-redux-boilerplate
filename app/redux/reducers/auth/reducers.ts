import {AUTH_SIGNIN_CANCELED, AUTH_SIGNIN_FAILURE, AUTH_SIGNIN_REQUEST, AUTH_SIGNIN_SUCCESS, AUTH_TOKEN_FAILURE} from 'app/redux/actions';

export type IAuthIsLoadingState = boolean;
export type IAuthIsAuthorizedState = boolean;

export type IAuthDataState = {
    isLoaded: boolean;
    data: any
};

export type IAuthErrorState = {
    message: string;
};

export interface IAuthState {
    isLoading: IAuthIsLoadingState;
    isAuthorized: IAuthIsAuthorizedState;
    signin: IAuthDataState;
    error: IAuthErrorState;
}

const initialState = {
    isLoading: false,
    isAuthorized: false,

    signin: {
        isLoaded: false,
        data: {},
    },

    error: {
        message: '',
    },
};

export default (state: IAuthState = initialState, action: {payload?: any, type: string}): IAuthState => {
    switch (action.type) {
        case AUTH_SIGNIN_REQUEST: return {
            ...state,
            isLoading: true,
        };

        case AUTH_SIGNIN_SUCCESS: return {
            ...state,
            isLoading: false,
            isAuthorized: true,

            signin: {
                isLoaded: true,
                data: action.payload,
            },
            error: initialState.error,
        };

        case AUTH_SIGNIN_FAILURE: return {
            ...state,
            isLoading: false,
            isAuthorized: false,

            error: {
                message: action.payload,
            },
        };

        case AUTH_SIGNIN_CANCELED: return {
            ...state,
            isLoading: false,
        };

        case AUTH_TOKEN_FAILURE: return {
            ...state,
            isAuthorized: false,
        };

        default: return state;

    }
};
