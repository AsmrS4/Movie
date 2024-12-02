import React from 'react'
import { InputField } from '../components/Input/InputField'

const Login = () => {
    return (
        <>
            <main className="movie-main">
                <div className='login-wrapper'>
                    <h2>Авторизация</h2>
                    <form className='login-form'>
                        <InputField
                            fieldId={'login'}
                            labelText='Логин'
                            inputType={'text'}
                            isRequired
                        />
                        <InputField
                            fieldId={'password'}
                            labelText='Пароль'
                            inputType={'password'}
                            isRequired
                        />
                        <button className='btn  mt-3 w-100'>Войти</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Login
