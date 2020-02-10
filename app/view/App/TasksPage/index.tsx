/** @jsx jsx */
import {jsx} from '@emotion/core';
import styles from './styles';
import React, {Fragment} from 'react';
import Button from 'app/view/shared/components/Button';
import Loader from 'app/view/shared/components/Loader';
import {_tasksListError, _tasksListIsLoading} from 'app/redux/reducers/rootReducer';
import ErrorMessage from 'app/view/shared/components/ErrorMessage';
import TasksList from 'app/view/App/TasksPage/TasksList';
import {useDispatch} from 'react-redux';
import {reducerAddTaskItemRequest, reducerTaskListCanceled, reducerTaskListRequest} from 'app/redux/actions/tasks';

interface ITasksPageProps {}

const TasksPage: React.FC<ITasksPageProps> = (props: ITasksPageProps) => {
    const dispatch = useDispatch();

    const addTask = React.useCallback(() => {
        dispatch(reducerAddTaskItemRequest({
            title: 'Тестовая задача',
            description: 'Тестируем задачу новую',
        }));

        dispatch(reducerTaskListRequest());
    }, []);

    React.useEffect(() => {
        dispatch(reducerTaskListRequest());

        return () => {
            dispatch(reducerTaskListCanceled());
        };
    }, []);

    return <Fragment>
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
    </Fragment>;
};

export default TasksPage;
