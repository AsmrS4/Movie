import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { PosterLoader, TitleLoader } from '../components/Loaders/PosterLoader';
import ReviewCard from '../components/Review';
import Span from '../components/Span/Span';
import { addToFavorite, fetchFavorites, removeFromFavorites } from '../services/FavoriteMovie';
import { fetchMovieInfo } from '../services/MovieService';
import { ErrorToast } from '../utils/notification/Error';
import SuccessToast from '../utils/notification/Success';

const FilmPage = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [movieReviews, setReviews] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [favorites, setFavorites] = useState([]);
    const [buttonText, setText] = useState('');

    const isInFavorites = () => {
        return favorites.some((item) => {
            return String(id) === String(item.id);
        });
    };

    const handleBtnClickAdd = async () => {
        const result = await addToFavorite(id);
        if (result.ok) {
            setText('В избранном');
            getFavorites();
            SuccessToast('Фильм добавлен в избранное');
        } else {
            if (result.status === 401) {
                ErrorToast('Вы не авторизированы!');
            }
        }
    };

    const handleBtnClickRemove = async () => {
        const result = await removeFromFavorites(id);
        if (result) {
            setText('Добавить в избранное +');
            getFavorites();
            SuccessToast('Фильм удален из избранного');
        }
    };

    useEffect(() => {
        setText(isInFavorites() ? 'В избранном' : 'Добавить в избранное +');
    }, [favorites]);

    const getFavorites = async () => {
        const result = await fetchFavorites();
        if (result) {
            setFavorites(result.movies);
        }
    };

    useEffect(() => {
        setLoading(true);
        const loadPage = async () => {
            await getFavorites();
            await getMovieInfo();
        };
        const getMovieInfo = async () => {
            const result = await fetchMovieInfo(id);
            if (result) {
                console.log(result);
                setMovieDetails(result);
                setReviews(result.reviews);
                setLoading(false);
            } else {
                ErrorToast('Не удалось загрузить страницу');
            }
        };

        loadPage();
    }, []);

    return (
        <>
            <div className='movie-main'>
                <div className='movie-wrapper'>
                    <div className='movie-container'>
                        <div className='movie-info'>
                            <div className='movie-poster'>
                                {isLoading ? (
                                    <PosterLoader />
                                ) : (
                                    <img src={movieDetails.poster} alt='Постер фильма' />
                                )}
                            </div>
                            <div className='movie-description'>
                                <div>
                                    {isLoading ? (
                                        <>
                                            <TitleLoader />
                                        </>
                                    ) : (
                                        <>
                                            <h2>
                                                {movieDetails.name} {`(${movieDetails.year})`}
                                            </h2>
                                            <p>{movieDetails.description}</p>
                                        </>
                                    )}

                                    {isInFavorites() ? (
                                        <>
                                            <button
                                                className='btn'
                                                disabled={isLoading}
                                                onClick={handleBtnClickRemove}
                                            >
                                                {buttonText}
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                className='btn'
                                                disabled={isLoading}
                                                onClick={handleBtnClickAdd}
                                            >
                                                {buttonText}
                                            </button>
                                        </>
                                    )}
                                </div>
                                <div className='movie-description__info'>
                                    <h4>О фильме</h4>
                                    <div className='description-item'>
                                        <span>Год производства</span>
                                        <span>{movieDetails.year}</span>
                                    </div>
                                    <div className='description-item'>
                                        <span>Страна</span>
                                        <span>{movieDetails.country}</span>
                                    </div>
                                    <div className='description-item'>
                                        <span>Жанры</span>
                                        <span>
                                            {movieDetails?.genres?.map((genre, index) => {
                                                return index !== movieDetails?.genres.length - 1
                                                    ? genre.name + ', '
                                                    : genre.name;
                                            })}
                                        </span>
                                    </div>
                                    <div className='description-item'>
                                        <span>Время</span>
                                        <span>{isLoading ? 0 : movieDetails.time} мин.</span>
                                    </div>

                                    <div className='description-item'>
                                        <span>Режиссер</span>
                                        <span>{movieDetails.director}</span>
                                    </div>
                                    <div className='description-item'>
                                        <span>Бюджет</span>
                                        <span>${isLoading ? 0 : movieDetails.budget}</span>
                                    </div>
                                    <div className='description-item'>
                                        <span>Сборы в мире</span>
                                        <span>${isLoading ? 0 : movieDetails.fees}</span>
                                    </div>
                                    <div className='description-item'>
                                        <span>Возраст</span>
                                        <Span value={`${isLoading ? 0 : movieDetails.ageLimit}+`} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='reviews-wrapper'>
                            <div className='reviews-holder'>
                                {movieReviews.map((review) => {
                                    return <ReviewCard {...review} />;
                                })}
                            </div>
                        </div>
                    </div>
                </div>{' '}
                <ToastContainer />
            </div>
        </>
    );
};

export default FilmPage;
