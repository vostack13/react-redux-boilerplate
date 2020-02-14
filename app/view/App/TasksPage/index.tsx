/** @jsx jsx */
import {jsx} from '@emotion/core';
import styles from './styles';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {_tasksListData} from 'app/redux/reducers/rootReducer';
import Loader from 'app/view/shared/components/Loader';
import ErrorMessage from 'app/view/shared/components/ErrorMessage';
import Button from 'app/view/shared/components/Button';
import actions from 'app/redux/reducers/actions';

const TasksPage: React.FC = () => {
    const dispatch = useDispatch();
    const tasksListData = useSelector(_tasksListData);

    const sendLike = React.useCallback((taskId: number) => {
        dispatch(actions.tasks.sendLike.request.dispatch({taskId}));
    }, [tasksListData]);

    const getData = React.useCallback(() => {
        dispatch(actions.tasks.getList.request.dispatch());
    }, [tasksListData]);

    React.useEffect(() => {
        getData();

        return () => {
            dispatch(actions.tasks.getList.canceled.dispatch());
        };
    }, []);

    if (tasksListData.isLoading)
        return <Loader />;

    if (tasksListData.error.message)
        return <ErrorMessage message={tasksListData.error.message} />;

    if (tasksListData.data === undefined)
        return null;

    if (tasksListData.data.length === 0 )
        return <ul css={styles.list}>
            <div css={styles.emptyMessage}>Список задач пуст</div>
        </ul>;

    return <ul css={styles.list}>
        {tasksListData.data.map((task: any) => <li key={task.id} css={styles.item}>
            <div css={styles.itemTitle}>{task.title}</div>
            <div css={styles.itemDesc}>{task.description}</div>
            <div css={styles.itemDate}>{task.createdBy}</div>

            <div css={styles.itemActions}>
                <Button
                    onClick={() => sendLike(task.id)}
                    variant='fill'
                    color='primary'
                    css={styles.likeButton({isLike: task.is_like})}
                >
                    <div>❤️</div>
                </Button>

                <Button variant='fill' color='primary'>
                    <div>👻</div>
                    <div>Изменить</div>
                </Button>

                <Button variant='fill' color='primary'>
                    <div>Удалить</div>
                    <div>😛</div>
                </Button>
            </div>
        </li>)}
    </ul>;
};

export default TasksPage;
