import React from 'react';
import TasksPage from 'app/view/App/TasksPage';
import {Switch, Route, Redirect} from 'react-router-dom';
import LoginPage from 'app/view/App/LoginPage';
import {useDispatch, useSelector} from 'react-redux';
import {reducerAuthTokenRequest} from 'app/redux/actions/auth';
import {_authAuthToken} from 'app/redux/reducers/rootReducer';
import Spinner from 'app/view/shared/components/Spinner';

const RequireAuth: React.FC<any> = (props: any) => {
    const authAuthToken = useSelector(_authAuthToken);

    if (authAuthToken.isLoading)
        return <Spinner />;

    if (!authAuthToken.isAuthorized && !authAuthToken.isLoading) {
        return <Redirect to='/signin' />;
    }

    return props.children;
};

const App: React.FC = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(reducerAuthTokenRequest());
    }, []);

    return <Switch>
        <RequireAuth >
            <Route path={'/tasks'}>
                <TasksPage />
            </Route>
        </RequireAuth>

        <Route exact path='/signin'>
            <LoginPage />
        </Route>

        <Redirect to='/tasks' />
    </Switch>;
};

export default App;
