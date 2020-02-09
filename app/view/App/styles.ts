import {css} from '@emotion/core';
import {ITheme} from 'app/view/shared/theme';

const wrapper = (t: ITheme) => css`
    position: relative;
    background-color: ${t.colors.gray050};
    min-height: 100vh;
    padding-top: 64px;
`;

export default {
    wrapper,
};
