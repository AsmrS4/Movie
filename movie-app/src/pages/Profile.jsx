import React, { useEffect, useState } from 'react'
import { InputField } from '../components/Input/InputField'
import { editUserProfile, getUserProfile } from '../services/UserService'
import avatar from '../assets/userAvatar.jpg';
import SuccessToast from '../utils/notification/Success';
import { ToastContainer } from 'react-toastify';
import { ErrorToast } from '../utils/notification/Error';

const Profile = () => {
    const [userId, setId] = useState('');
    const [userLogin, setUserLogin] = useState('');
    const [profileImg, setImg] = useState(null);
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [birthdate, setBirthDate] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    //todo: добавить скелетоны для инпутов и фото профиля

    useEffect(()=> {
        setIsLoading(true);
        const getProfile = async() => {
            const result = await getUserProfile();
            if(result) {
                setEmail(result.email);
                setUserName(result.name);
                setUserLogin(result.nickName);
                setImg(result.avatarLink);
                setBirthDate(result.birthdate);
                setId(result.id);
                setIsLoading(false);
            }
            console.log(result)
        }
        getProfile()
    }, [])

    const handleProfile = async(e) => {
        e.preventDefault();

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

        if(result) {
            await getUserProfile();
            SuccessToast('Профиль успешно обновлен');
        } else {
            ErrorToast('Что-то пошло не так! Проверьте введенные данные')
        }
    }

    return (
        <>
            <main className="movie-main">
                <div className='profile-wrapper'>
                    <div className='profile-container'>
                        <div className='profile-container__img'>
                            <img src={profileImg? profileImg: avatar} alt='Фото профиля' />
                            <h5>{userLogin}</h5>
                        </div>
                        <form onSubmit={handleProfile} className='profile-container__form'>
                            <InputField
                                id={'email'}
                                labelText='Email'
                                inputType={'email'}
                                value={email}
                                placeholderText={'example@mail.ru'}
                                onChangeInput = {setEmail}
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
                            <button className='btn'>Редактировать</button>
                        </form>
                    </div>
                </div>
                <ToastContainer limit={3} />
            </main>
        </>
    )
}

export default Profile
