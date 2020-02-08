import {css} from '@emotion/core';
import {ITheme} from 'app/view/shared/theme';

const errorMessage = (t: ITheme) => css`
    ${t.typography.text200};
    color: ${t.colors.gray600};
    margin-left: auto;
    margin-right: auto;
    padding: 40px 16px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export default {
    errorMessage,
};
