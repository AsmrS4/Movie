import React, { useState } from 'react';
import './Header.scss';
import logo from '../../assets/cinema.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        <>
            <header className="movie-header">
                <nav className="navbar fixed-top">
                    <div className="movie-header__left-child">
                        <Link to='/'>
                            <div className="movie-logo">
                                <img width={40} src={logo}></img>
                                <h4><strong>Кино</strong>мания</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="movie-header__center-child">
                        <Link to='/' className='active'>Фильмы</Link>
                        <Link to='/favorites'>Избранное</Link>
                        <Link to='/profile'>Профиль</Link>
                    </div>
                    <div className="movie-header__right-child">
                        <div className="d-flex flex-row">
                            <Link to='/login' ><span>Войти</span></Link>
                            <Link to='/registration' ><span>Регистрация</span></Link>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Header
