/** @jsx jsx */
import {jsx} from '@emotion/core';
import styles from './styles';
import React from 'react';

interface ISpinnerProps {
    size?: number;
}

const Spinner: React.FC<ISpinnerProps> = (props: ISpinnerProps) => {
    return <div>
        <svg css={styles.spinner({size: props.size || 16})} viewBox='0 0 50 50'>
            <circle css={styles.path} cx='25' cy='25' r='20' fill='none' strokeWidth='5' />
        </svg>
    </div>;
};

export default Spinner;
