// import 'core-js';
// import 'regenerator-runtime/runtime';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from 'app/redux/store';
import App from 'app/view/App';
import {ThemeProvider} from 'emotion-theming';
import {Global} from '@emotion/core';
import styles from './styles';
import {lightDefault} from 'app/view/shared/theme';

ReactDOM['render'](
    <Provider store={store()}>
        <BrowserRouter>
            <ThemeProvider theme={lightDefault}>
                <Global styles={styles.root} />
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </Provider>,

    document.getElementById('root')
);
