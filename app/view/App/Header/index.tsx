/** @jsx jsx */
import {jsx} from '@emotion/core';
import styles from './styles';
import React from 'react';
import Button from 'app/view/shared/components/Button';
import {useDispatch} from 'react-redux';
import {NavLink} from 'react-router-dom';
import actions from 'app/redux/reducers/actions';

const Header: React.FC = () => {
    const dispatch = useDispatch();

    const addTask = React.useCallback(() => {
        dispatch(actions.tasks.addTask.request.dispatch({
            title: 'Тестовая задача',
            description: 'Тестируем задачу новую',
            is_like: false,
        }));

        dispatch(actions.tasks.getList.request.dispatch({}));
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
