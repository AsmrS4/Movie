import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Content.scss';
import defaultImage from '../../assets/not-found.png';

export const ErrorContent = ({ message = '', code = 0, imageSrc = null }) => {
    const navigate = useNavigate();
    const handleBtnClick = () => {
        navigate('/movies');
    };
    return (
        <>
            <div className='content-container'>
                <div className='content'>
                    <div className='content__message-wrapper'>
                        <div className='image-wrapper'>
                            <img
                                height={70}
                                width={70}
                                src={imageSrc ? imageSrc : defaultImage}
                                alt='Картинка'
                            />
                        </div>
                        <h1>{code}</h1>
                        <h2>{message}</h2>
                    </div>

                    <button className='btn' onClick={handleBtnClick}>
                        {'Вернуться на главную страницу'}
                    </button>
                </div>
            </div>
        </>
    );
};

export const EmptyContent = ({ title = '', imageSrc = null }) => {
    return (
        <>
            <div className='content-container'>
                <div className='content'>
                    <div className='content__message-wrapper'>
                        <h2>{title}</h2>
                    </div>
                </div>
            </div>
        </>
    );
};
