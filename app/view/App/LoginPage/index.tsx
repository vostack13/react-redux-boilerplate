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

    const {formControls, formErrors, changeValue, validationForm, setRef, isChangeForm} = useFormState({
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

        if (validationForm()) {
            dispatch(actions.auth.signIn.request.dispatch(formControls));
        }
    }, [formData, formControls]);

    if (authAuthToken.isAuthorized)
        return <Redirect to='/tasks' />;

    return <main css={styles.main}>
        {!authAuthToken.isLoaded
            ? <Spinner/>

            : <section css={styles.section}>
                <h1 css={styles.sectionTitle}>Добро пожаловать!</h1>

                <form css={styles.sectionForm} onSubmit={submitForm}>
                    <TextField
                        inputProps={{
                            tabIndex: 1,
                            ref: setRef,
                        }}
                        // required
                        label='Логин'
                        name='login'
                        value={formControls.login}
                        onChange={changeValue}
                        error={!!formErrors.login}
                        helperText={formErrors.login}
                        variant='outlined'
                    />

                    <TextField
                        inputProps={{
                            tabIndex: 1,
                            ref: setRef,
                        }}
                        // required
                        label='Пароль'
                        name='password'
                        type='password'
                        value={formControls.password}
                        onChange={changeValue}
                        error={!!formErrors.password}
                        helperText={formErrors.password}
                        variant='outlined'
                    />

                    {/*<label>*/}
                    {/*    <input*/}
                    {/*        type='password'*/}
                    {/*        name='password'*/}
                    {/*        placeholder={'Введи пароль'}*/}
                    {/*        value={formData.password}*/}
                    {/*        onChange={changeFormData}*/}
                    {/*    />*/}
                    {/*</label>*/}

                    <Button
                        tabIndex={1}
                        type='submit'
                        color='primary'
                        variant='contained'
                        disabled={!isChangeForm}
                    >Войти</Button>

                    {/*<Button type='submit' color='primary' variant='fill'>Войти</Button>*/}
                </form>
            </section>}
        </main >;
};

export default LoginPage;
