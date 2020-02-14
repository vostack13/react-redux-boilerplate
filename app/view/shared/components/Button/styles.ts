import {css} from '@emotion/core';
import {ITheme} from 'app/view/shared/theme';
import {TButtonAlignContent, TButtonColor, TButtonSize, TButtonVariant} from 'app/view/shared/components/Button/index';

interface IRootProps {
    variant: TButtonVariant;
    size: TButtonSize;
    color: TButtonColor;
    alignContent: TButtonAlignContent;
}

const root = (props: IRootProps) => (t: ITheme) => css`
    display: flex;
    ${variant[props.variant](t)};
    ${color[props.color](t)};
    ${size[props.size](t)};
    ${alignContent[props.alignContent]}
`;

const alignContent = {
    start: css`
        justify-content: flex-start;
    `,

    center: css`
        justify-content: center;
    `,

    end: css`
        justify-content: flex-end;
    `,
};

const variant = {
    fill: (t: ITheme) => css`
        box-shadow: ${t.shadow.depth100};
        border-radius: 4px;
    `,

    outline: (t: ITheme) => css`
        border-radius: 4px;
        border: 1px solid;
    `,
};

const color = {
    // primary: (t: ITheme) => css`
    //     background-color: ${t.colors.primary200};
    //     color: ${t.colors.gray000};
    //     border-color: ${t.colors.primary200};
    // `,

    primary: (t: ITheme) => css`
        color: ${t.colors.gray800};
        background-color: ${t.colors.gray100};
        box-shadow: ${t.shadow.depth100Neo};
    `,

    secondary: (t: ITheme) => css`
        background-color: transparent;
        color: ${t.colors.gray700};
        border-color: ${t.colors.gray600};
    `,
};

const size = {
    m: (t: ITheme) => css`
        ${t.typography.text200};
        padding: 5px 15px;
        height: 36px;

        & > * {
            min-width: 16px;
        }

        & > *:nth-of-type(n+2) {
            margin-left: 8px;
        }
    `,
};

export default {
    root,
};
