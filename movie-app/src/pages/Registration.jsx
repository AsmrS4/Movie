import React from 'react'
import { InputField } from '../components/Input/InputField'

const Registration = () => {
    return (
        <>
            <main className="movie-main">
                <div className='registration-wrapper'>
                    <h2>Регистрация</h2>
                    <form className='registration-form'>
                        <InputField
                            fieldId={'login'}
                            labelText='Логин'
                            inputType={'text'}
                            isRequired
                        />
                        <InputField
                            fieldId={'email'}
                            labelText='Email'
                            inputType={'email'}
                            placeholderText={'example@mail.ru'}
                            isRequired
                        />
                        <div className='input-field row row-cols-2'>
                            <div className='col'>
                                <label for="gender" class="form-label">Пол</label>
                                <select class="form-control" id="gender" required>
                                    <option value={'Male'}>Мужской</option>
                                    <option value={'Female'}>Женский</option>
                                </select>
                            </div>
                            <div className='col'>
                                <InputField
                                    fieldId={'birthdate'}
                                    labelText='Дата рождения'
                                    inputType={'date'}
                                />
                            </div>
                        </div>
                        <InputField
                            fieldId={'password'}
                            labelText='Пароль'
                            inputType={'password'}
                            isRequired
                        />
                        <InputField
                            fieldId={'confirmPassword'}
                            labelText='Повторите пароль'
                            inputType={'password'}
                            isRequired
                        />
                        <button className='btn btn-primary w-100 mt-3'>Создать профиль</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Registration
