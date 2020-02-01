import {ITheme} from 'app/common/theme/index';

export const lightDefault: ITheme = {
    colors: {
        gray000: '#ffffff',
        gray050: '#FBFBFD',
        gray100: '#E5E5E5',
        gray600: '#9498A2',
        gray700: '#6B6C6F',
        gray800: '#333333',

        grayOp100: 'rgba(85, 88, 90, .07)',
        grayOp500: 'rgba(0, 0, 0, .65)',

        primary200: '#2967E8',
        primaryOp200: 'rgba(44, 152, 240, .07)',
        red200: '#F14336',
        green200: '#5CAF56',
    },

    typography: {
        text50: `
            font-family: Roboto, sans-serif;
            font-size: 10px;
            line-height: 14px;
            font-weight: 400;
        `,

        text100: `
            font-family: Roboto, sans-serif;
            font-size: 12px;
            line-height: 16px;
            font-weight: 400;
        `,

        textBold100: `
            font-family: Roboto, sans-serif;
            font-size: 12px;
            line-height: 16px;
            font-weight: 600;
        `,

        text200: `
            font-family: Roboto, sans-serif;
            font-size: 14px;
            line-height: 22px;
            font-weight: 400;
        `,

        textMedium200: `
            font-family: Roboto, sans-serif;
            font-size: 14px;
            line-height: 22px;
            font-weight: 500;
        `,

        textBold200: `
            font-family: Roboto, sans-serif;
            font-size: 14px;
            line-height: 22px;
            font-weight: 600;
        `,

        text500: `
            font-family: Roboto, sans-serif;
            font-size: 24px;
            line-height: 32px;
            font-weight: 400;
        `,

        textMedium500: `
            font-family: Roboto, sans-serif;
            font-size: 24px;
            line-height: 32px;
            font-weight: 500;
        `,
    },

    utils: {
        overflowTextEllipsis: `
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        `,
    },
};
