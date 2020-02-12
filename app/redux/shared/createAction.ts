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

const createAction = (nameModule: string, nameType: TActionApiTypes): ICreatorAction => {
    const type = `[${nameModule}] ${nameType}`;
    const dispatch = (payload?: any) => payload ? {payload, type} : {type};

    return {type, dispatch};
};

export default createAction;
