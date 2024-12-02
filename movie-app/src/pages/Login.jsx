import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { InputField } from '../components/Input/InputField'
import { loginUser } from '../services/Auth';
import { ErrorToast } from '../utils/notification/Error';

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLoginForm = async (e) => {
        e.preventDefault();
        const result = await loginUser({ username: login, password: password });
        if (result) {
            localStorage.setItem('token', result.token);
            navigate('/movies');
        } else {
            return ErrorToast('Неверный логин или пароль');
        }
    }

    return (
        <>
            <main className="movie-main">
                <div className='login-wrapper'>
                    <h2>Авторизация</h2>
                    <form className='login-form' onSubmit={handleLoginForm}>
                        <InputField
                            id={'login'}
                            labelText='Логин'
                            inputType={'text'}
                            value={login}
                            isRequired
                            onChangeInput={setLogin}
                        />
                        <InputField
                            id={'password'}
                            labelText='Пароль'
                            inputType={'password'}
                            value={password}
                            isRequired
                            onChangeInput={setPassword}
                        />
                        <button type='submit' className='btn mt-3 w-100'>Войти</button>
                    </form>
                </div>
                <ToastContainer limit={3} />
            </main>
        </>
    )
}

export default Login
