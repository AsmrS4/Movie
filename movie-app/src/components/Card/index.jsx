import React from 'react';
import './Card.scss';
import cardImage from '../../assets/test-image.png';

const MovieCard = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${cardImage})` }} className="movie-card">
                <div className='movie-card__rating'>
                    <span className='rating-span'>
                        7.6
                    </span>
                </div>
                <div className='movie-card__info'>
                    <div className='movie-card__info-left'>
                        <span>Мандалорец</span>
                        <div className='description'>
                            <span>Драма</span>
                            <span className='ms-2'>2023</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieCard
