type TActionApiTypes = 'REQUEST' | 'SUCCESS' | 'FAILURE' | 'CANCELED';

interface ICreatorAction {
    type: string;
    dispatch: (payload?: any) => {payload?: any, type: string};
}

const createAction = (nameModule: string, nameType: string, nameApiType?: TActionApiTypes): ICreatorAction => {
    const type = `[${nameModule}] ${nameType}${nameApiType ? '_' + nameApiType : ''}`;

    const dispatch = (payload?: any) => payload ? {payload, type} : {type};

    return {type, dispatch};
};

export default createAction;
