import {
    AUTH_SIGNIN_CANCELED,
    AUTH_SIGNIN_FAILURE,
    AUTH_SIGNIN_REQUEST,
    AUTH_SIGNIN_SUCCESS, AUTH_TOKEN_FAILURE,
} from 'app/redux/actions/index';

// --------- Sign In

export const reducerSignInRequest = (data: any) => ({
    payload: data,
    type: AUTH_SIGNIN_REQUEST,
});

export const reducerSignInSuccess = (data: any) => ({
    payload: data,
    type: AUTH_SIGNIN_SUCCESS,
});

export const reducerSignInFailure = (error: string) => ({
    payload: error,
    type: AUTH_SIGNIN_FAILURE,
});

export const reducerSignInCanceled = () => ({
    type: AUTH_SIGNIN_CANCELED,
});

export const reducerAuthTokenFailure = () => ({
    type: AUTH_TOKEN_FAILURE,
});
