import React from 'react';
import { useNavigate } from 'react-router-dom';

import './FavoriteItem.scss';
import FavoriteItemLoader from '../Loaders/FavoriteItemLoader';

const FavoriteItem = ({
    loading = true,
    id,
    poster,
    name,
    year,
    country,
    reviews = [],
    genres = [],
    onRemove,
}) => {
    const navigate = useNavigate();

    const onClickCard = () => {
        navigate(`/movie/${id}`);
    };

    return (
        <>
            <div className='favorite-card'>
                {loading ? (
                    <FavoriteItemLoader />
                ) : (
                    <>
                        <div className='favorite-card__body'>
                            <div className='favorite-card__img'>
                                <img height={140} src={poster} />
                            </div>
                            <div className='favorite-card__description' onClick={onClickCard}>
                                <h3>{name}</h3>
                                <span>{year}</span>
                                <span>
                                    {genres.map((genre, index) => {
                                        return index !== genres.length - 1
                                            ? genre.name + ', '
                                            : genre.name;
                                    })}
                                </span>
                                <span>{country}</span>
                            </div>
                        </div>
                        <button
                            className='favorite-card__remove-btn btn btn-danger'
                            value={id}
                            onClick={(e) => {
                                onRemove(e, name);
                            }}
                        >
                            Удалить
                        </button>
                    </>
                )}
            </div>
        </>
    );
};

export default FavoriteItem;
