import React from 'react';
import './Header.scss';
import logo from '../../assets/cinema.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className="movie-header">
                <div className="movie-header__left-child">
                    <div className="movie-logo">
                        <img width={40} src={logo}></img>
                        <h4><strong>Кино</strong>мания</h4>
                    </div>
                </div>
                <div className="movie-header__center-child">
                    <a className='active'>Фильмы</a>
                    <a>Избранное</a>
                    <a>Профиль</a>
                </div>
                <div className="movie-header__right-child">
                    <div className="d-flex flex-row">
                        <span>Войти</span>
                        <span>Регистрация</span>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header
