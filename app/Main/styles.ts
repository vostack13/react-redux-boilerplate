import {css} from '@emotion/core';
import {ITheme} from 'app/common/theme';

const wrapper = (t: ITheme) => css`
    background-color: ${t.colors.gray050};
    width: 100%;
    height: 100%;
`;

const list = css`
    display: grid;
    padding: 16px;
    grid-row-gap: 16px;
    grid-auto-columns: minmax(280px, 720px);
    justify-content: center;
`;

const item = (t: ITheme) => css`
    min-height: 80px;
    width: 100%;
    padding: 16px 12px;
    border-radius: 4px;
    box-shadow: ${t.shadow.depth100};
    background-color: ${t.colors.gray000};
    display: grid;
    grid-row-gap: 8px;
`;

const itemDate = (t: ITheme) => css`
    ${t.typography.text100};
    color: ${t.colors.gray600};
`;

const itemTitle = (t: ITheme) => css`
    ${t.typography.text250};
    color: ${t.colors.gray800};
`;

const itemDesc = (t: ITheme) => css`
    ${t.typography.text200};
    color: ${t.colors.gray700};
`;

const itemActions = (t: ITheme) => css`
    display: flex;

    & > *:nth-child(n+2) {
        margin-left: 8px;
    }
`;

export default {
    wrapper,
    list,
    item,
    itemTitle,
    itemDesc,
    itemDate,
    itemActions,
};
