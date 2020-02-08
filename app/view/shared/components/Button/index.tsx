/** @jsx jsx */
import {jsx} from '@emotion/core';
import styles from './styles';
import React from 'react';

export type TButtonVariant = 'fill' | 'outline';
export type TButtonSize = 'm';
export type TButtonColor = 'primary' | 'secondary';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant?: TButtonVariant;
    color?: TButtonColor;
    size?: TButtonSize;
    children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
    const {children, variant, size, color, ...otherProps} = props;

    return <button
        css={styles.root({
            variant: variant || 'outline',
            size: size || 'm',
            color: color || 'secondary',
        })}

        {...otherProps}
    >
        {children}
    </button>;
};

export default Button;
