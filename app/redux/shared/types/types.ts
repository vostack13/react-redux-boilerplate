export type TAction<T> = {
    type: string;
    dispatch: (props: T) => {payload: T, type: string};
};

export interface IReduxAction {
    [actionName: string]: TAction<any>;
    request?: any;
    success?: any;
    failure?: any;
    canceled?: any;
}

export type TReduxErrorState = {
    message: string;
};
