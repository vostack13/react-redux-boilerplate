import {css} from '@emotion/core';
import {ITheme} from 'app/view/shared/theme';

const list = css`
    display: grid;
    grid-row-gap: 24px;
    grid-auto-columns: minmax(280px, 720px);
    justify-content: center;
    padding-left: 16px;
    padding-right: 16px;
`;

const item = css`
    min-height: 80px;
    width: 100%;
    padding: 16px 12px;
    border-radius: 4px;
    display: grid;
    grid-row-gap: 8px;
`;

const emptyMessage = (t: ITheme) => css`
    ${t.typography.text200};
    color: ${t.colors.gray600};
    text-align: center;
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

const itemActions = css`
    display: flex;

    & > *:nth-of-type(n+2) {
        margin-left: 8px;
    }
`;

const likeButton = (props: {isLike: boolean}) => (t: ITheme) => css`
    background-color: ${props.isLike && t.colors.primary200};
`;

export default {
    list,
    item,
    itemTitle,
    itemDesc,
    itemDate,
    itemActions,
    emptyMessage,
    likeButton,
};
