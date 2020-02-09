import {css} from '@emotion/core';
import {ITheme} from 'app/view/shared/theme';

const main = css`
    min-height: 100vh;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const section = (t: ITheme) => css`
    padding: 40px 24px;
    background-color: ${t.colors.gray000};
    border-radius: 4px;
    border: 1px solid ${t.colors.gray100};
`;

const sectionTitle = (t: ITheme) => css`
    ${t.typography.text500Medium};
    color: ${t.colors.gray800};
`;

const sectionForm = () => css`
    margin-top: 24px;
    display: grid;
    grid-row-gap: 16px;
    grid-auto-columns: minmax(160px, 280px);
`;

export default {
    main,
    section,
    sectionTitle,
    sectionForm,
};
