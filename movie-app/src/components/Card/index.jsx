import React, { useEffect, useState } from 'react';

import './Card.scss';
import Rating from '../Rating';

const MovieCard = ({
    id,
    poster,
    year,
    name,
    country,
    genres = [],
    reviews = []
}) => {

    const [totalRating, setRating] = useState(0);

    const handleRating = () => {
        setRating((reviews.reduce((sum, item) => sum + item.rating, 0) / reviews.length).toFixed(1))
    }

    useEffect(() => {
        handleRating()
    }, [])

    return (
        <>
            <div style={{ backgroundImage: `url(${poster})` }} className="movie-card">
                <div className='movie-card__rating'>
                    <Rating totalRating={totalRating}/>
                </div>
                <div className='movie-card__info'>
                    <div className='movie-card__info-left'>
                        <span>{name}</span>
                        <div className='description'>
                            <span className='overlow-hidden'>{genres.map(genre => { return genre.name + ' ' })}</span>
                            <div>
                                <span className='ms-2'>{year}</span>
                                <span className='ms-2 overlow-hidden'>{country}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieCard
