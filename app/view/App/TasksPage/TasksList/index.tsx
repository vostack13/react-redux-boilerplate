/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';
import styles from './styles';
import Button from 'app/view/shared/components/Button';
import {useSelector} from 'react-redux';
import {_tasksListData} from 'app/redux/reducers/rootReducer';

const TasksList: React.FC = () => {
    const tasksListData = useSelector(_tasksListData);

    if (tasksListData.isLoaded && tasksListData.data.length === 0 )
        return <ul css={styles.list}>
            <div css={styles.emptyMessage}>Список задач пуст</div>
        </ul>;

    return <ul css={styles.list}>
        {tasksListData.data.map((task: any) => <li key={task.id} css={styles.item}>
            <div css={styles.itemTitle}>{task.title}</div>
            <div css={styles.itemDesc}>{task.description}</div>
            <div css={styles.itemDate}>{task.createdBy}</div>

            <div css={styles.itemActions}>
                <Button>
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
