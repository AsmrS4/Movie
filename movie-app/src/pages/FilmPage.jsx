import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Span from '../components/Span';
import { fetchMovieInfo } from '../services/MovieService';
import { ErrorToast } from '../utils/notification/Error';

const FilmPage = () => {

    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const getMovieInfo = async () => {
            const result = await fetchMovieInfo(id)
            if (result) {
                console.log(result)
                setMovieDetails(result)
                setLoading(false)

            } else {
                ErrorToast('Не удалось загрузить страницу')
            }
        }
        getMovieInfo();
        console.log(movieDetails)
    }, [])

    return (
        <>
            <div className='movie-main'>
                <div className="movie-wrapper">
                    <div className='movie-container'>
                        <div className='movie-info'>
                            <img src={movieDetails.poster} alt="Постер фильма" />
                            <div className='movie-description'>
                                <div>
                                    <h2>{movieDetails.name} {`(${movieDetails.year})`}</h2>
                                    <p>{movieDetails.description}</p>
                                    <button className='btn'>Добавить в избранное +</button>
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
                                                return index !== movieDetails?.genres.length - 1 ? genre.name + ', ' : genre.name
                                            })}
                                        </span>
                                    </div>
                                    <div className='description-item'>
                                        <span>Время</span>
                                        <span>{movieDetails.time} мин.</span>
                                    </div>
                                    <div className='description-item'>
                                        <span>Слоган</span>
                                        <span>{movieDetails.tagline}</span>
                                    </div>
                                    <div className='description-item'>
                                        <span>Режиссер</span>
                                        <span>{movieDetails.director}</span>
                                    </div>
                                    <div className='description-item'>
                                        <span>Бюджет</span>
                                        <span>${movieDetails.budget}</span>
                                    </div>
                                    <div className='description-item'>
                                        <span>Сборы в мире</span>
                                        <span>${movieDetails.fees}</span>
                                    </div>
                                    <div className='description-item'>
                                        <span>Возраст</span>
                                        <Span value={`${movieDetails.ageLimit}+`} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='reviews-wrapper'>
                            <div className='reviews-my'></div>
                            <div className='reviews-holder'>
                                <div className='review-card'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilmPage
