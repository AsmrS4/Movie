import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Card.scss';
import Rating from '../Span/Rating';
import CardLoader from '../Loaders/CardLoader';

const MovieCard = ({
    loading = true,
    id,
    poster,
    year,
    name,
    country,
    genres = [],
    reviews = [],
}) => {
    const navigate = useNavigate();

    const onClickCard = () => {
        navigate(`/movie/${id}`);
    };

    return (
        <>
            <div
                style={{ backgroundImage: `url(${poster})` }}
                className='movie-card'
                onClick={loading ? null : onClickCard}
            >
                {loading ? (
                    <CardLoader />
                ) : (
                    <>
                        <div className='movie-card__rating'>
                            <Rating
                                value={(
                                    reviews.reduce((sum, item) => sum + item.rating, 0) /
                                    reviews.length
                                ).toFixed(1)}
                            />
                        </div>
                        <div className='movie-card__info'>
                            <div className='movie-card__info-left'>
                                <span>{name}</span>
                                <div className='description'>
                                    <span className='overlow-hidden'>
                                        {genres.map((genre, index) => {
                                            return index !== genres.length - 1
                                                ? genre.name + ', '
                                                : genre.name;
                                        })}
                                    </span>
                                    <div>
                                        <span className='ms-2'>{year}</span>
                                        <span className='ms-2 overlow-hidden'>{country}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default MovieCard;
