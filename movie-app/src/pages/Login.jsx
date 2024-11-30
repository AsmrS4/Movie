import React from 'react'

const Login = () => {
    return (
        <>
            <main className="movie-main">
                <div className='login-wrapper'>
                    <h2>Авторизация</h2>
                    <form className='login-form'>
                        <div className='input-field'>
                            <label for="loginField" class="form-label">Логин</label>
                            <input type="text" class="form-control" id="loginField" />
                        </div>
                        <div className='input-field'>
                            <label for="passwordField" class="form-label">Пароль</label>
                            <input type="password" class="form-control" id="passwordField" />
                        </div>
                        <button className='btn  mt-3 w-100'>Войти</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Login
