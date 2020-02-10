/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';
import styles from './styles';
import {useSelector} from 'react-redux';
import {IAppState} from 'app/redux/reducers/rootReducer';

interface IErrorMessageProps {
    selector: any;
}

const ErrorMessage: React.FC<IErrorMessageProps> = (props: IErrorMessageProps) => {
    const error = useSelector<IAppState, any>(props.selector);

    return error.message
        ? <div css={styles.errorMessage}>
            {`Ошибка загрузки задач: ${error.message}`}
        </div>

        : null;
};

export default ErrorMessage;
