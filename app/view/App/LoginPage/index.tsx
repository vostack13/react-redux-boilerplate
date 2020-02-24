/** @jsx jsx */
import {jsx} from '@emotion/core';
import styles from './styles';
import React from 'react';
// import Button from 'app/view/shared/components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {_authAuthToken} from 'app/redux/reducers/rootReducer';
import {Redirect} from 'react-router-dom';
import Spinner from 'app/view/shared/components/Spinner';
import actions from 'app/redux/reducers/actions';
import {useFormState} from 'app/view/App/LoginPage/useForm';
import {Button, TextField} from '@material-ui/core';

const LoginPage: React.FC = () => {
    const dispatch = useDispatch();
    const authAuthToken = useSelector(_authAuthToken);

    const {formControls, formErrors, changeValue, onBlur} = useFormState({
        login: {value: '', validators: ['email', 'required']},
        password: {value: '', validators: ['required']},
    });

    const [formData, setFormData] = React.useState({
        login: '',
        password: '',
    });

    const changeFormData = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData( {...formData, [event.target.name]: event.target.value});
    }, [formData]);

    const submitForm = React.useCallback((event: React.FormEvent) => {
        event.preventDefault();
        dispatch(actions.auth.signIn.request.dispatch(formData));
    }, [formData]);

    if (authAuthToken.isAuthorized)
        return <Redirect to='/tasks' />;

    return <main css={styles.main}>
        {!authAuthToken.isLoaded
            ? <Spinner/>

            : <section css={styles.section}>
                <h1 css={styles.sectionTitle}>Добро пожаловать!</h1>

                <form css={styles.sectionForm} onSubmit={submitForm}>
                    <TextField
                        required
                        label='Логин'
                        name='login'
                        value={formControls.login.value}
                        onChange={changeValue}
                        error={!!formErrors.login}
                        helperText={formErrors.login}
                        onBlur={onBlur}
                        variant='outlined'
                    />

                    <label>
                        <input
                            type='password'
                            name='password'
                            placeholder={'Введи пароль'}
                            value={formData.password}
                            onChange={changeFormData}
                        />
                    </label>

                    <Button
                        type='submit'
                        color='primary'
                        variant='contained'
                        disabled={true}
                    >Войти</Button>

                    {/*<Button type='submit' color='primary' variant='fill'>Войти</Button>*/}
                </form>
            </section>}
        </main >;
};

export default LoginPage;
