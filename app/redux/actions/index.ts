import {like} from 'app/redux/actions/like';

export * from './notifications';

export default {
    like,
};

// --------- notifications

export const NOTIFICATION_ADD_ITEM = '[NOTIFICATIONS] ADD_ITEM';
export const NOTIFICATION_REMOVE_ITEM = '[NOTIFICATIONS] REMOVE_ITEM';

// --------- tasks

export const TASKS_LIST_REQUEST = '[TASKS] LIST_REQUEST';
export const TASKS_LIST_SUCCESS = '[TASKS] LIST_SUCCESS';
export const TASKS_LIST_FAILURE = '[TASKS] LIST_FAILURE';
export const TASKS_LIST_CANCELED = '[TASKS] LIST_CANCELED';

export const TASKS_ADD_ITEM_REQUEST = '[TASKS] ADD_ITEM_REQUEST';
export const TASKS_ADD_ITEM_SUCCESS = '[TASKS] ADD_ITEM_SUCCESS';
export const TASKS_ADD_ITEM_FAILURE = '[TASKS] ADD_ITEM_FAILURE';
export const TASKS_ADD_ITEM_CANCELED = '[TASKS] ADD_ITEM_CANCELED';

// --------- auth

export const AUTH_SIGNIN_REQUEST = '[AUTH] SIGNIN_REQUEST';
export const AUTH_SIGNIN_SUCCESS = '[AUTH] SIGNIN_SUCCESS';
export const AUTH_SIGNIN_FAILURE = '[AUTH] SIGNIN_FAILURE';
export const AUTH_SIGNIN_CANCELED = '[AUTH] SIGNIN_CANCELED';

export const AUTH_TOKEN_REQUEST = '[AUTH] TOKEN_REQUEST';
export const AUTH_TOKEN_SUCCESS = '[AUTH] TOKEN_SUCCESS';
export const AUTH_TOKEN_FAILURE = '[AUTH] TOKEN_FAILURE';
export const AUTH_TOKEN_CANCELED = '[AUTH] TOKEN_CANCELED';
