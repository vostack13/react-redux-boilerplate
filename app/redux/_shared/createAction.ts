type TActionApiTypes = 'REQUEST_API'
    | 'SUCCESS_API'
    | 'FAILURE_API'
    | 'CANCELED_API'
    | string
;

interface ICreatorAction {
    type: string;
    dispatch: any;
}

const createAction = (actionName: string, actionType: TActionApiTypes): ICreatorAction => {
    const type = `[${actionName}] ${actionType}`;
    const dispatch = (payload?: any) => payload ? {payload, type} : {type};

    return {type, dispatch};
};

export default createAction;
