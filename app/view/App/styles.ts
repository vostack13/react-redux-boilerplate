import {css} from '@emotion/core';
import {ITheme} from 'app/view/shared/theme';

const wrapper = (t: ITheme) => css`
    position: relative;
    background-color: ${t.colors.gray050};
    min-height: 100vh;
    padding-top: 64px;
`;

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
    padding-top: 32px;
    padding-bottom: 32px;
`;

const headerCaption = (t: ITheme) => css`
    ${t.typography.text500Medium};
    color: ${t.colors.gray800};
`;

export default {
    wrapper,
    header,
    headerCaption,
    main,
};
