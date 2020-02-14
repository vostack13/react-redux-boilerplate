import {css} from '@emotion/core';
import {ITheme} from 'app/view/shared/theme';

const header = (t: ITheme) => css`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 64px;
    padding: 16px 12px;
    box-shadow: ${t.shadow.depth100Neo};
    background-color: ${t.colors.gray100};
`;

const headerCaption = (t: ITheme) => css`
    ${t.typography.text500Medium};
    color: ${t.colors.gray800};
`;

const navList = css`
   display: flex;

   & > li:nth-of-type(n+2) {
      margin-left: 16px;
   }
`;

const link = (t: ITheme) => css`
    ${t.typography.text200};
    color: ${t.colors.gray600};
    padding-top: 4px;
    padding-bottom: 4px;
    border-bottom: 2px solid transparent;

    &.active {
        color: ${t.colors.primary200};
        border-bottom: 2px solid ${t.colors.primary200};
    }
`;

export default {
    header,
    headerCaption,
    navList,
    link,
};
