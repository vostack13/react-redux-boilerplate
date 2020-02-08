/** @jsx jsx */
import {jsx} from '@emotion/core';
import styles from './styles';
import React from 'react';
import {formatDate} from 'app/logic/shared/formate-data';
import Button from 'app/view/shared/components/Button';
import Spinner from 'app/view/shared/components/Spinner';
import {useDispatch, useSelector} from 'react-redux';
import {reducerAddTaskItemRequest, reducerTaskListCanceled, reducerTaskListRequest} from 'app/redux/actions/tasks';
import {_tasksListData, _tasksListError, _tasksListIsLoading} from 'app/redux/reducers/rootReducer';
import Loader from 'app/view/App/Loader';
import ErrorMessage from 'app/view/App/ErrorMessage';
import TasksList from 'app/view/App/TasksList';

interface IDataItem {
    [index: string]: {
        title: string;
        description: string;
        createdBy: string;
    };
}

const App: React.FC = () => {
    const dispatch = useDispatch();

    const addTask = React.useCallback(() => {
        dispatch(reducerAddTaskItemRequest({
            title: 'Тестовая задача',
            description: 'Тестируем задачу новую',
        }));
    }, []);

    React.useEffect(() => {
        dispatch(reducerTaskListRequest());

        return () => {
            dispatch(reducerTaskListCanceled());
        };
    }, []);

    console.log('APP render' );

    return <div css={styles.wrapper}>
        <header css={styles.header}>
            <h1 css={styles.headerCaption}>Список задач</h1>

            <Button variant='fill' color='primary' onClick={addTask}>
                <div>✚</div>
                <div>Добавить задачу</div>
            </Button>
        </header>

        <main css={styles.main}>
            <Loader selector={_tasksListIsLoading} />
            <ErrorMessage selector={_tasksListError} />
            <TasksList />
        </main>

    </div>;
};

export default App;
