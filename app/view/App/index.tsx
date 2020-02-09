/** @jsx jsx */
import {jsx} from '@emotion/core';
import styles from './styles';
import React from 'react';
import TasksPage from 'app/view/App/TasksPage';
import {Switch, Route, Redirect} from 'react-router-dom';
import LoginPage from 'app/view/App/LoginPage';

const App: React.FC = () => {

    return <div css={styles.wrapper}>
        <Switch>
            <Route path={'/tasks'}>
                <TasksPage />
            </Route>

            <Route exact path='/signin'>
                <LoginPage />
            </Route>

            <Redirect to='/tasks' />
        </Switch>
    </div>;
};

export default App;
