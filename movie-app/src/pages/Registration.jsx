import React from 'react'

const Registration = () => {
    return (
        <>
            <main className="movie-main">
                <div className='registration-wrapper'>
                    <h2>Регистрация</h2>
                    <form className='registration-form'>
                        <div className='input-field'>
                            <label for="loginField" class="form-label">Логин</label>
                            <input type="text" class="form-control" id="loginField" />
                        </div>
                        <div className='input-field'>
                            <label for="emailField" class="form-label">Email</label>
                            <input type="email" class="form-control" id="emailField" placeholder="example@mail.ru" />
                        </div>
                        <div className='input-field row row-cols-2'>
                            <div className='col'>
                                <label for="gender" class="form-label">Пол</label>
                                <select class="form-control" id="gender">
                                    <option value={'Male'}>Мужской</option>
                                    <option value={'Female'}>Женский</option>
                                </select>
                            </div>
                            <div className='col'>
                                <label for="birthdate" class="form-label">Дата рождения</label>
                                <input type='date' class="form-control" id="birthdate" />
                            </div>
                        </div>

                        <div className='input-field row row-cols-2'>
                            <div className='col'>
                                <label for="passwordField" class="form-label">Пароль</label>
                                <input type="password" class="form-control" id="passwordField" />
                            </div>
                            <div className='col'>
                                <label for="confirmPasswordField" class="form-label">Подтвердить пароль</label>
                                <input type="password" class="form-control" id="confirmPasswordField" />
                            </div>
                        </div>
                        <button className='btn btn-primary w-100 mt-3'>Создать профиль</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Registration
