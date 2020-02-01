import React from 'react';
import axios from 'axios';
import {config} from 'app/helpers/axios-config';
import Cookies from 'js-cookie';

interface UseAxiosProps {
    config: object;
    callbackRes?: any;
    callbackError?: any;
}

const useAxios = (props: UseAxiosProps) => {
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const fetching = () => setIsLoading(true);

    React.useEffect(() => {
        const cancelSource = axios.CancelToken.source();

        if (isLoading) {
            setError(null);

            axios.request({
                ...config,

                headers: {
                    Authorization: `Bearer ${Cookies.get('access_key')}`,
                },

                cancelToken: cancelSource.token,
                ...props.config,
            })
                .then((res: any) => {
                    setIsLoading(false);
                    props.callbackRes ? props.callbackRes(res.data) : setData(res.data);
                })

                .catch((error: any) => {
                    setIsLoading(false);
                    props.callbackError ? props.callbackError(error) : setError(error);
                });
        }

        return () => cancelSource.cancel();

    }, [isLoading]);

    return {data, error, isLoading, fetching};
};

export default useAxios;
