import React, { useEffect, useState } from 'react';

import './Card.scss';
import Rating from '../Rating';
import CardLoader from '../Loaders/CardLoader';

const MovieCard = ({
    loading = true,
    id,
    poster,
    year,
    name,
    country,
    genres = [],
    reviews = []
}) => {

    return (
        <>
            <div style={{ backgroundImage: `url(${poster})` }} className="movie-card">
                {loading
                    ?
                    <CardLoader />
                    :
                    <>
                        <div className='movie-card__rating'>
                            <Rating reviews={reviews} />
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
                    </>}
            </div>
        </>
    )
}

export default MovieCard
