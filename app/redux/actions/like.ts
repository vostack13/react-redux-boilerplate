import createAction from 'app/redux/shared/createAction';
import {IReduxAction, TAction} from 'app/redux/shared/types/types';

interface IActionLike extends IReduxAction {
    request: TAction<{taskId: number}>;
    success: TAction<{}>;
    failure: TAction<{}>;
    canceled: TAction<{}>;
}

export const like: IActionLike = {
    request: createAction('LIKE_SEND', 'REQUEST_API'),
    success: createAction('LIKE_SEND', 'SUCCESS_API'),
    failure: createAction('LIKE_SEND', 'FAILURE_API'),
    canceled: createAction('LIKE_SEND', 'CANCELED_API'),
    send: createAction('LIKE_SEND', 'FAILURE_API'),
};
