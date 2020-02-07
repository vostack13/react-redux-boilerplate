import {css, keyframes} from '@emotion/core';
import {ITheme} from 'app/view/shared/theme';

const rotate = keyframes`
    100% {
            transform: rotate(360deg);
    }
`;

const dash = keyframes`
    0% {
        stroke-dasharray: 1, 150;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -35;
    }
    100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -124;
    }
`;

const spinner = (props: {size: number}) => () => css`
    animation: ${rotate} 2s linear infinite;
    width: ${props.size}px;
    height: ${props.size}px;
`;

const path = (t: ITheme) => css`
    stroke: ${t.colors.gray600};
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
`;

export default {
    spinner,
    path,
};
