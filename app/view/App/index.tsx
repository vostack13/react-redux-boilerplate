/** @jsx jsx */
import {jsx} from '@emotion/core';
import styles from './styles';
import React, {Fragment} from 'react';
import TasksPage from 'app/view/App/TasksPage';
import {Switch, Route, Redirect} from 'react-router-dom';
import LoginPage from 'app/view/App/LoginPage';
import {useDispatch, useSelector} from 'react-redux';
import {_authAuthToken} from 'app/redux/reducers/rootReducer';
import Spinner from 'app/view/shared/components/Spinner';
import Header from 'app/view/App/Header';
import MessagesPage from 'app/view/App/MessagesPage';
import actions from 'app/redux/reducers/actions';

const RequireAuth: React.FC<any> = (props: any) => {
    const authAuthToken = useSelector(_authAuthToken);

    if (authAuthToken.isAuthorized)
        return props.children;

    if (!authAuthToken.isAuthorized && authAuthToken.isLoaded) {
        return <Redirect to='/signin' />;
    }

    return <Spinner />;
};

const Main = () => {
    return <Fragment>
        <Header />

        <main css={styles.main}>
            <Switch>
                <Route path={'/tasks'}>
                    <TasksPage />
                </Route>

                <Route path={'/messages'}>
                    <MessagesPage />
                </Route>
            </Switch>
        </main>
    </Fragment>;
};

const App: React.FC = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(actions.auth.refreshToken.request.dispatch());
    }, []);

    return <Switch>
        <Route exact path='/signin'>
            <LoginPage />
        </Route>

        <Route path='/'>
            <RequireAuth>
                <Main />
            </RequireAuth>
        </Route>

        <Redirect to='/tasks' />
    </Switch>;
};

export default App;
