/** @jsx jsx */
import {jsx} from '@emotion/core';
import styles from './styles';
import React from 'react';

export type TButtonVariant = 'fill' | 'outline';
export type TButtonSize = 'm';
export type TButtonColor = 'primary' | 'secondary';

interface IButtonProps {
    variant?: TButtonVariant;
    color?: TButtonColor;
    size?: TButtonSize;
    // children: React.ReactElement | string;
    children: any;
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
    return <button
        css={styles.root({
            variant: props.variant || 'outline',
            size: props.size || 'm',
            color: props.color || 'secondary',
        })}
    >
        {props.children}
    </button>;
};

export default Button;
