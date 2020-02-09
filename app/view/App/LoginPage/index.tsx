/** @jsx jsx */
import {jsx} from '@emotion/core';
import styles from './styles';
import React from 'react';
import Button from 'app/view/shared/components/Button';

const LoginPage: React.FC = () => {

    const submitForm = React.useCallback((event: React.FormEvent) => {
        event.preventDefault();
    }, []);

    return <main >
        <section>
            <h1>Добро пожаловать!</h1>
            <h2>Войдите в приложение</h2>

            <form css={styles.form} onSubmit={submitForm}>
                <label>
                    <input placeholder={'Введите логин'}/>
                </label>

                <label>
                    <input placeholder={'Введи пароль'}/>
                </label>

                <Button type='submit' color='primary' variant='fill'>Войти</Button>
            </form>
        </section>
    </main>;
};

export default LoginPage;
