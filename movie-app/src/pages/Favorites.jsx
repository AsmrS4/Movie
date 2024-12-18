import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import FavoriteItem from '../components/FavoriteItem';
import { fetchFavorites } from '../services/FavoriteMovie';
import { ErrorToast } from '../utils/notification/Error';
import SuccessToast from '../utils/notification/Success';
import { removeFromFavorites } from '../services/FavoriteMovie';
import { delay } from '../utils/delay';
import { EmptyContent } from '../components/Content';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getFavorites = async () => {
        await delay(1000);
        const result = await fetchFavorites();
        if (result) {
            setFavorites(result.movies);
            setLoading(false);
        } else {
            ErrorToast('Не удалось получить данные');
        }
    };

    useEffect(() => {
        setLoading(true);
        getFavorites();
    }, []);

    const handleRemove = async (e, name) => {
        const result = await removeFromFavorites(e.target.value);

        if (result) {
            SuccessToast(`Фильм "${name}" был удален из избранного`);
            getFavorites();
        } else {
            ErrorToast('Не удалось выполнить запрос');
        }
    };

    return (
        <>
            <main className='movie-main'>
                <div className='favorites-wrapper'>
                    <div className='favorite-holder '>
                        {isLoading ? (
                            [...Array(3)].map((item, index) => {
                                return (
                                    <FavoriteItem
                                        key={index}
                                        loading={isLoading}
                                        {...item}
                                        onRemove={handleRemove}
                                    />
                                );
                            })
                        ) : favorites.length !== 0 ? (
                            favorites.map((item, index) => {
                                return (
                                    <FavoriteItem
                                        key={index}
                                        loading={isLoading}
                                        {...item}
                                        onRemove={handleRemove}
                                    />
                                );
                            })
                        ) : (
                            <EmptyContent title='Список пуст' />
                        )}
                    </div>
                </div>
            </main>
            <ToastContainer limit={1} />
        </>
    );
};

export default Favorites;
