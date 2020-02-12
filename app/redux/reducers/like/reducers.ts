import {like} from 'app/redux/actions/like';
import {combineReducers} from 'redux';
import {handleAction} from 'app/redux/shared/handleAction';
import {TReduxErrorState} from 'app/redux/shared/types/types';

export type TLikeIsLoading = boolean;
export type TLikeError = TReduxErrorState;

export interface ILikeState {
    isLoading: TLikeIsLoading;
    error: TLikeError;
}

const isLoading = handleAction({
    [like.request.type]: (_action: any) => _action.payload,
}, false);

const error = handleAction({

}, false);

export default combineReducers({
    isLoading,
    error,
});
