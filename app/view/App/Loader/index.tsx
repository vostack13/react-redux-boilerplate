/** @jsx jsx */
import {jsx} from '@emotion/core';
import styles from './styles';
import React from 'react';
import Spinner from 'app/view/shared/components/Spinner';
import {useSelector} from 'react-redux';

interface ILoaderProps {
    selector: any;
}

const Loader: React.FC<ILoaderProps> = (props: ILoaderProps) => {
    const isLoading = useSelector(props.selector);
    console.log('Loader render', isLoading );

    return isLoading
        ? <div css={styles.loadingPanel}>
            <Spinner size={24}/>
        </div>

        : null;
};

export default Loader;
