export const TYPE_ERROR = 'TYPE_ERROR';
export const TYPE_NOT_FOUND_ERROR = 'TYPE_NOT_FOUND_ERROR';
export const TYPE_AUTH_ERROR = 'TYPE_AUTH_ERROR';
export const TYPE_SERVER_ERROR = 'TYPE_SERVER_ERROR';

export const generateError = (errorResponse: any) => {
    if (errorResponse.response === undefined) {
        return {
            error: errorResponse,
            typeError: TYPE_SERVER_ERROR,
            textError: 'Ошибка 50x. Повторите попытку позже.',
        };
    }

    if (errorResponse.response.status === 401 || errorResponse.response.status === 403)
        return {
            typeError: TYPE_AUTH_ERROR,
            textError: 'Ошибка аутентификации.',
        };

    if (errorResponse.response.status === 404)
        return {
            error: errorResponse.response,
            typeError: TYPE_NOT_FOUND_ERROR,
            textError: 'Ресурс не найден.',
        };

    return {
        error: errorResponse.response,
        typeError: TYPE_ERROR,
        textError: 'Ошибка 4xx. Повторите попытку позже.',
    };
};
