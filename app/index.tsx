// import 'core-js';
// import 'regenerator-runtime/runtime';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from 'app/redux/store';
import Main from 'app/Main';
import {ThemeProvider} from 'emotion-theming';
import {Global} from '@emotion/core';
import styles from './styles';
import {lightDefault} from 'app/common/theme';

ReactDOM['render'](
    <Provider store={store()}>
        <BrowserRouter>
            <ThemeProvider theme={lightDefault}>
                <Global styles={styles.root} />
                <Main />
            </ThemeProvider>
        </BrowserRouter>
    </Provider>,

    document.getElementById('root')
);
