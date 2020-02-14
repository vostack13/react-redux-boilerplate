import {css} from '@emotion/core';
import {ITheme} from 'app/view/shared/theme';

const root = (t: ITheme) => css`
    :root {
      overflow-y: scroll;
    }

    :root,
    body {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: sans-serif;
        min-width: 320px;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
        background-color: ${t.colors.gray100};
    }

    #root {
    }

    * {
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    button {
        border: none;
        outline: none;
        cursor: pointer;
        font-family: sans-serif;
    }

    select {
        border: 0;
        background: 0;
        font-family: sans-serif;
    }

    input {
        outline: none;
    }
`;

export default {
    root,
};
