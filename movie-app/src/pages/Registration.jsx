import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { InputField } from '../components/Input/InputField'
import { registerUser } from '../services/Auth';
import { confirmPasswordIsValid } from '../utils/validation';
import { dateIsValid } from '../utils/converter/converter';
import { ErrorToast } from '../utils/notification/Error';

const Registration = () => {
    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [birthDate, setBirthDate] = useState('');

    const handleRegisterForm = async (e) => {
        e.preventDefault();

        if (dateIsValid(birthDate) && confirmPasswordIsValid(password, confirmPassword)) {
            console.log({
                userName: userLogin.replaceAll(' ', ''),
                name: userName,
                email: email,
                password: password,
                birthDate: birthDate,
                gender: 0
            })
            const result = await registerUser(
                {
                    userName: userLogin.replaceAll(' ', ''),
                    name: userName,
                    email: email,
                    password: password,
                    birthDate: birthDate,
                    gender: 0
                }
            )
            if (result) {
                localStorage.setItem('token', result.token);
                navigate('/movies');
            } else {
                ErrorToast(`Email ${email} уже занят`)
            }

        } else {
            if (!dateIsValid(birthDate)) {ErrorToast('Дата рождения не может быть больше текущего дня')};

            if (!confirmPasswordIsValid(password, confirmPassword)) {ErrorToast('Пароли должны совпадать')};
        }
    }

    return (
        <>
            <main className="movie-main">
                <div className='registration-wrapper'>
                    <h2>Регистрация</h2>
                    <form className='registration-form' onSubmit={handleRegisterForm}>
                        <InputField
                            id={'login'}
                            labelText='Логин'
                            inputType={'text'}
                            value={userLogin}
                            onChangeInput={setUserLogin}
                            isRequired
                        />
                        <InputField
                            id={'email'}
                            labelText='Email'
                            inputType={'email'}
                            placeholderText={'example@mail.ru'}
                            value={email}
                            onChangeInput={setEmail}
                            isRequired
                        />
                        <InputField
                            id={'userName'}
                            labelText='ФИО'
                            inputType={'text'}
                            value={userName}
                            onChangeInput={setUserName}
                            isRequired
                        />
                        <InputField
                            id={'birthdate'}
                            labelText='Дата рождения'
                            inputType={'date'}
                            value={birthDate}
                            onChangeInput={setBirthDate}
                            isRequired
                        />
                        <InputField
                            id={'password'}
                            labelText='Пароль'
                            inputType={'password'}
                            value={password}
                            onChangeInput={setPassword}
                            isRequired
                        />
                        <InputField
                            id={'confirmPassword'}
                            labelText='Повторите пароль'
                            inputType={'password'}
                            value={confirmPassword}
                            onChangeInput={setConfirmPassword}
                            isRequired
                        />
                        <button className='btn btn-primary w-100 mt-3'>Создать профиль</button>
                    </form>
                </div>
                <ToastContainer limit={3}/>
            </main>
        </>
    )
}

export default Registration
