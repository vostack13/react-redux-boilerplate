/** @jsx jsx */
import {jsx} from '@emotion/core';
import styles from './styles';
import React from 'react';
import Spinner from 'app/view/shared/components/Spinner';

const Loader: React.FC = () => {
    return <div css={styles.loadingPanel}>
        <Spinner size={24}/>
    </div>;
};

export default Loader;
