export interface ITheme {
    colors: {
        gray000: string,
        gray050: string,
        gray100: string,
        gray600: string,
        gray700: string,
        gray800: string,

        grayOp100: string,
        grayOp500: string,

        primary200: string,
        primaryOp200: string,

        red200: string,

        green200: string
    };

    typography: {
        text50: string,
        text100: string,
        text200: string,
        textBold100: string,
        textMedium200: string,
        textBold200: string,
        text500: string,
        textMedium500: string,
    };

    utils: {
        overflowTextEllipsis: string,
    };
}

export {lightDefault} from './light-default';
