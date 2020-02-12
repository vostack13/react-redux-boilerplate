/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';
import styles from './styles';
import Button from 'app/view/shared/components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {_tasksListData} from 'app/redux/reducers/rootReducer';
import {like} from 'app/redux/actions/like';

const TasksList: React.FC = () => {
    const dispatch = useDispatch();
    const tasksListData = useSelector(_tasksListData);

    if (tasksListData.isLoaded && tasksListData.data.length === 0 )
        return <ul css={styles.list}>
            <div css={styles.emptyMessage}>Список задач пуст</div>
        </ul>;

    const sendLike = React.useCallback((taskId: number) => {
        dispatch(like.request.dispatch({taskId}));
    }, [tasksListData]);

    return <ul css={styles.list}>
        {tasksListData.data.map((task: any) => <li key={task.id} css={styles.item}>
            <div css={styles.itemTitle}>{task.title}</div>
            <div css={styles.itemDesc}>{task.description}</div>
            <div css={styles.itemDate}>{task.createdBy}</div>

            <div css={styles.itemActions}>
                <Button onClick={() => sendLike(task.id)}>
                    <div>❤️</div>
                </Button>

                <Button variant='fill'>
                    <div>👻</div>
                    <div>Изменить</div>
                </Button>

                <Button>
                    <div>Удалить</div>
                    <div>😛</div>
                </Button>
            </div>
        </li>)}
    </ul>;
};

export default TasksList;
