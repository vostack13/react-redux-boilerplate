import React from 'react';
import TasksPage from 'app/view/App/TasksPage';
import {Switch, Route, Redirect} from 'react-router-dom';
import LoginPage from 'app/view/App/LoginPage';

const App: React.FC = () => {

    return <Switch>
        <Route path={'/tasks'}>
            <TasksPage />
        </Route>

        <Route exact path='/signin'>
            <LoginPage />
        </Route>

        <Redirect to='/tasks' />
    </Switch>;
};

export default App;
