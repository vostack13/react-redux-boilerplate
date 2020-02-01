import {css} from '@emotion/core';

const root = css`
    :root,
    body {
        height: 100vh;
        width: 100vw;
        margin: 0;
        padding: 0;
    }

    :root {
        line-height: 1.15;
    }

    body {
        font-family: sans-serif;
        min-width: 320px;
        display: block;
        padding-right: 0 !important;
        overflow: auto hidden;
    }

    body > #root {
        height: 100%;
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
