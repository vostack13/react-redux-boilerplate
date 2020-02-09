import {
    AUTH_SIGNIN_CANCELED,
    AUTH_SIGNIN_FAILURE,
    AUTH_SIGNIN_REQUEST,
    AUTH_SIGNIN_SUCCESS, AUTH_TOKEN_CANCELED, AUTH_TOKEN_FAILURE, AUTH_TOKEN_REQUEST, AUTH_TOKEN_SUCCESS,
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

// --------- Auth token

export const reducerAuthTokenRequest = () => ({
    type: AUTH_TOKEN_REQUEST,
});

export const reducerAuthTokenSuccess = () => ({
    type: AUTH_TOKEN_SUCCESS,
});

export const reducerAuthTokenFailure = () => ({
    type: AUTH_TOKEN_FAILURE,
});

export const reducerAuthTokenCanceled = () => ({
    type: AUTH_TOKEN_CANCELED,
});
