import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';

import { InputField } from '../components/Input/InputField'
import { editUserProfile, getUserProfile } from '../services/UserService'
import avatar from '../assets/userAvatar.jpg';
import SuccessToast from '../utils/notification/Success';

import { ErrorToast } from '../utils/notification/Error';
import { sliceDate } from '../utils/converter/converter';
import { dateIsValid } from '../utils/converter/converter';
import ImageLoader from '../components/Loaders/ImageLoader';
import InputLoader from '../components/Loaders/InputLoader';
import { delay } from '../utils/delay';

const Profile = () => {
    const [userId, setId] = useState('');
    const [userLogin, setUserLogin] = useState('');
    const [profileImg, setImg] = useState(null);
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [birthdate, setBirthDate] = useState('');
    const [isLoading, setIsLoading] = useState(true);//общий state - redux

    useEffect(() => {
        setIsLoading(true);
        const getProfile = async () => {
            await delay(1000)
            const result = await getUserProfile();
            if (result) {
                setEmail(result.email);
                setUserName(result.name);
                setUserLogin(result.nickName);
                setImg(result.avatarLink);
                setBirthDate(sliceDate(result.birthDate));
                setId(result.id);

                setIsLoading(false);
            }
        }
        getProfile()
    }, [])

    const handleProfile = async (e) => {
        e.preventDefault();
        if (dateIsValid(birthdate)) {
            const result = await editUserProfile(
                {
                    id: userId,
                    nickName: userLogin,
                    email: email,
                    avatarLink: profileImg,
                    name: username,
                    birthdate: birthdate
                }
            )

            if (result) {
                await getUserProfile();
                SuccessToast('Профиль успешно обновлен');
            } else {
                ErrorToast('Что-то пошло не так! Проверьте введенные данные');
            }

        } else {
            if (!dateIsValid(birthdate)) ErrorToast('Дата рождения не может быть больше текущего дня');
        }

    }

    return (
        <>
            <main className="movie-main">
                <div className='profile-wrapper'>
                    <div className='profile-container'>
                        <div className='profile-container__img'>
                            {isLoading
                                ?
                                <ImageLoader />
                                :
                                <>
                                    <img src={profileImg ? profileImg : avatar} alt='Фото профиля' />
                                    <h5>{userLogin}</h5>
                                </>}
                        </div>
                        <form onSubmit={handleProfile} className='profile-container__form'>
                            {isLoading
                                ?
                                [...Array(4)].map((input, index) => {
                                    return <InputLoader key={index}/>
                                })
                                :
                                <>
                                    <InputField
                                        id={'email'}
                                        labelText='Email'
                                        inputType={'email'}
                                        value={email}
                                        placeholderText={'example@mail.ru'}
                                        onChangeInput={setEmail}
                                        isRequired
                                    />
                                    <InputField
                                        id={'userName'}
                                        labelText='ФИО'
                                        inputType={'text'}
                                        value={username}
                                        onChangeInput={setUserName}
                                        isRequired
                                    />
                                    <InputField
                                        id={'avatarLink'}
                                        labelText='URL-картинки'
                                        value={profileImg}
                                        inputType={'text'}
                                        onChangeInput={setImg}
                                    />
                                    <InputField
                                        id={'birthdate'}
                                        labelText='Дата рождения'
                                        inputType={'date'}
                                        value={birthdate}
                                        onChangeInput={setBirthDate}
                                        required
                                    />
                                </>}
                            <button className='btn' disabled={isLoading}>Редактировать</button>
                        </form>
                    </div>
                </div>
                <ToastContainer limit={3} />
            </main>
        </>
    )
}

export default Profile
