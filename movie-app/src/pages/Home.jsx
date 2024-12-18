import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import MovieCard from '../components/Card';
import Pagination from '../components/Pagination';
import { getMovies } from '../services/MovieService';
import { ErrorToast } from '../utils/notification/Error';
import bannerImg from '../assets/cinema.svg';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [currPage, setPage] = useState(1);
    const [pages, setPages] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const getResult = async () => {
            setLoading(true);
            const result = await getMovies(currPage);
            if (result) {
                setMovies(result.movies);
                setPages(result.pageInfo);
                setLoading(false);
            } else {
                ErrorToast('Не удалось получить данные');
            }
        };
        getResult();
    }, [currPage]);

    return (
        <>
            <main className='movie-main'>
                <div className='main-wrapper'>
                    <section className='movie-content'>
                        <div className='movie-content__movie-holder'>
                            {(isLoading ? [...Array(6)] : movies).map((movie, index) => {
                                return <MovieCard key={index} loading={isLoading} {...movie} />;
                            })}
                        </div>
                    </section>
                    <Pagination
                        onClickPage={setPage}
                        pageCount={pages.pageCount}
                        currentPage={pages.currentPage}
                        loading={isLoading}
                    />
                </div>
            </main>
            <ToastContainer limit={1} />
        </>
    );
};

export default Home;
