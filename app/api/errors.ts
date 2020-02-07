export const TYPE_ERROR = 'TYPE_ERROR';
export const TYPE_NOR_FOUND_ERROR = 'TYPE_NOR_FOUND_ERROR';
export const TYPE_SERVER_ERROR = 'TYPE_SERVER_ERROR';

export const genarateError = (errorResponse: any) => {
    if (errorResponse.response === undefined) {
        return {
            error: errorResponse,
            typeError: TYPE_SERVER_ERROR,
            textError: 'Ошибка 50x. Повторите попытку позже.',
        };
    }

    if (errorResponse.response.status === 404)
        return {
            error: errorResponse.response,
            typeError: TYPE_NOR_FOUND_ERROR,
            textError: 'Ресурс не найден.',
        };

    return {
        error: errorResponse.response,
        typeError: TYPE_ERROR,
        textError: 'Ошибка 4xx. Повторите попытку позже.',
    };
};
