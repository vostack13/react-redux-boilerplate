import {css} from '@emotion/core';
import {ITheme} from 'app/view/shared/theme';

const header = (t: ITheme) => css`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 64px;
    padding: 16px 12px;
    box-shadow: ${t.shadow.depth100};
    background-color: ${t.colors.gray000};
`;

const main = css`
    margin-top: 64px;
    padding-top: 32px;
    padding-bottom: 32px;
`;

const headerCaption = (t: ITheme) => css`
    ${t.typography.text500Medium};
    color: ${t.colors.gray800};
`;

export default {
    header,
    headerCaption,
    main,
};
