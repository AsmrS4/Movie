import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.scss';
import { logoutUser } from '../../services/Auth';

const Header = () => {
    const location = useLocation();

    const logout = async () => {
        await logoutUser();
    };
    let token = localStorage.getItem('token');
    return (
        <>
            <header className='movie-header'>
                <nav className='navbar fixed-top'>
                    <div>
                        <div className='movie-header__left-child'>
                            <Link to='/movies'>
                                <div className='movie-logo'>
                                    <h4>
                                        <strong>Кино</strong>мания
                                    </h4>
                                </div>
                            </Link>
                        </div>
                        <div className='movie-header__center-child'>
                            <Link
                                to='/movies'
                                className={location.pathname.includes('/movies') ? 'active' : ''}
                            >
                                Фильмы
                            </Link>
                            {!token ? (
                                <></>
                            ) : (
                                <>
                                    <Link
                                        to='/favorites'
                                        className={
                                            location.pathname.includes('/favorites') ? 'active' : ''
                                        }
                                    >
                                        Избранное
                                    </Link>
                                    <Link
                                        to='/profile'
                                        className={
                                            location.pathname.includes('/profile') ? 'active' : ''
                                        }
                                    >
                                        Профиль
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                    <div className='movie-header__right-child'>
                        <div className='d-flex flex-row'>
                            {!token ? (
                                <>
                                    <Link to='/login'>
                                        <span>Войти</span>
                                    </Link>
                                    <Link to='/registration'>
                                        <span>Регистрация</span>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link>
                                        <span onClick={logout}>Выйти</span>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
