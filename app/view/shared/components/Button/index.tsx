/** @jsx jsx */
import {jsx} from '@emotion/core';
import styles from './styles';
import React from 'react';

export type TButtonVariant = 'fill' | 'outline';
export type TButtonSize = 'm';
export type TButtonColor = 'primary' | 'secondary';
export type TButtonAlignContent = 'start' | 'center' | 'end';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: TButtonVariant;
    color?: TButtonColor;
    size?: TButtonSize;
    alignContent?: TButtonAlignContent;
    children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
    const {children, variant, size, color, alignContent, ...otherProps} = props;

    return <button
        css={styles.root({
            variant: variant || 'outline',
            size: size || 'm',
            color: color || 'secondary',
            alignContent: alignContent || 'center',
        })}

        {...otherProps}
    >
        {children}
    </button>;
};

export default Button;
