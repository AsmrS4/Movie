import React from 'react'
import './FavoriteItem.scss'
import image from '../../assets/test-image.png'
import { removeFromFavorites } from '../../services/FavoriteMovie'
import { ErrorToast } from '../../utils/notification/Error'
import SuccessToast from '../../utils/notification/Success'
import FavoriteItemLoader from '../Loaders/FavoriteItemLoader'

const FavoriteItem = (
    {
        loading = true,
        id,
        poster,
        name,
        year,
        country,
        reviews = [],
        genres = [],
        onRemove
    }
) => {

    return (
        <>
            <div className='favorite-card'>
                {loading
                    ?
                    <FavoriteItemLoader />
                    :
                    <>
                        <div className='favorite-card__body'>
                            <div className='favorite-card__img'>
                                <img height={140} src={poster} />
                            </div>
                            <div className='favorite-card__description'>
                                <h3>{name}</h3>
                                <span>{year}</span>
                                <span>{genres.map(genre => { return genre.name + ' ' })}</span>
                                <span>{country}</span>
                            </div>
                        </div>
                        <button className='favorite-card__remove-btn btn btn-danger' value={id} onClick={(e) => {
                            onRemove(e, name)
                        }}>Удалить</button>
                    </>}
            </div>
        </>
    )
}

export default FavoriteItem
