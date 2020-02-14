/** @jsx jsx */
import {jsx} from '@emotion/core';
import styles from './styles';
import React from 'react';
import Button from 'app/view/shared/components/Button';
import {reducerAddTaskItemRequest, reducerTaskListRequest} from 'app/redux/actions/tasks';
import {useDispatch} from 'react-redux';
import {NavLink} from 'react-router-dom';

const Header: React.FC = () => {
    const dispatch = useDispatch();

    const addTask = React.useCallback(() => {
        dispatch(reducerAddTaskItemRequest({
            title: 'Тестовая задача',
            description: 'Тестируем задачу новую',
        }));

        dispatch(reducerTaskListRequest());
    }, []);

    return <header css={styles.header}>
        <h1 css={styles.headerCaption}>Список задач</h1>

        <nav>
            <ul css={styles.navList}>
                <li><NavLink to={'/tasks'} css={styles.link}>Задачи</NavLink></li>
                <li><NavLink to={'/messages'} css={styles.link}>Чат</NavLink></li>
            </ul>
        </nav>

        <Button variant='fill' color='primary' onClick={addTask}>
            <div>✚</div>
            <div>Добавить задачу</div>
        </Button>
    </header>;
};

export default Header;
