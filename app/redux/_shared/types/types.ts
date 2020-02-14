export type TAction<T> = {
    type: string;
    dispatch: (props: T) => {payload: T, type: string};
};

export interface IReduxAction {
    request?: any;
    success?: any;
    failure?: any;
    canceled?: any;
    [actionName: string]: any;
}

export type TReduxErrorState = {
    message: string;
};
