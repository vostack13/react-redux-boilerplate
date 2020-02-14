export interface IThemeColors {
    gray000: string;
    gray050: string;
    gray100: string;
    gray600: string;
    gray700: string;
    gray800: string;

    gray100Op: string;
    gray500Op: string;

    primary200: string;
    primary200Op: string;

    red200: string;

    green200: string;
}

export interface IThemeTypography {
    text50: string;
    text100: string;
    text100Bold: string;
    text200: string;
    text250: string;
    text200Medium: string;
    text200Bold: string;
    text500: string;
    text500Medium: string;
}

export interface IThemeShadow {
    depth100: string;
    depth200: string;
    depth300: string;
    depth400: string;

    depth100Neo: string;
}

export interface IThemeUtils {
    overflowTextEllipsis: string;
}

export interface ITheme {
    colors: IThemeColors;
    typography: IThemeTypography;
    shadow: IThemeShadow;
    utils: IThemeUtils;
}

export {default as lightDefault} from './light-default';
