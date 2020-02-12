import createAction from 'app/redux/shared/createAction';

export const like = {
    request: createAction('LIKE', 'SEND', 'REQUEST'),
    success: createAction('LIKE', 'SEND', 'SUCCESS'),
    failure: createAction('LIKE', 'SEND', 'FAILURE'),
    canceled: createAction('LIKE', 'SEND', 'CANCELED'),
};
