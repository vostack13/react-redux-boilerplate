/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';
import styles from './styles';

interface IErrorMessageProps {
    message: string;
}

const ErrorMessage: React.FC<IErrorMessageProps> = (props: IErrorMessageProps) => {
    return <div css={styles.errorMessage}>
        {`Ошибка загрузки задач: ${props.message}`}
    </div>;
};

export default ErrorMessage;
