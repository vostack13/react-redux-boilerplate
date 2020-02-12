import {like} from 'app/redux/actions/like';

export type IReduxErrorState = {
    message: string;
};

export interface ILikeState {
    isLoading: boolean;
    error: IReduxErrorState;
}

const initialState = {
    isLoading: false,

    error: {
        message: '',
    },
};

export default (state: ILikeState = initialState, action: {payload?: any, type: string}): ILikeState => {
    switch (action.type) {
        case like.request.type:
            return {
                ...state,
                isLoading: true,
            };
        case like.success.type:
            return {
                ...state,
                isLoading: false,
                error: initialState.error,
            };
        case like.failure.type:
            return {
                ...state,
                isLoading: false,

                error: {
                    message: action.payload,
                },
            };
        case like.canceled.type:
            return {
                ...initialState,
            };

        default: return state;

    }
};
