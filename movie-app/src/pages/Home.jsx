import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';

import MovieCard from '../components/Card';
import Pagination from '../components/Pagination';
import { getMovies } from '../services/MovieService';
import { ErrorToast } from '../utils/notification/Error';


//TODO: добавить скелетоны для загрузки
const Home = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState([]);

    useEffect(() => {
        const getResult = async () => {
            const result = await getMovies(page);
            if (result) {
                setMovies(result.movies);
                setPages(result.pageInfo);
            } else {
                ErrorToast('Не удалось получить данные')
            }
        }
        getResult();
    }, [page])

    return (
        <>
            <main className="movie-main">
                <div className="main-wrapper">
                    <section className="movie-slider"></section>
                    <section className="movie-content">
                        {/* <div className="movie-content__search">
              <div className="search-block">
                <input className="search-block__search-input" type="text" />
              </div>
            </div> */}
                        <div className="movie-content__movie-holder">
                            {movies.map(movie => {
                                return (
                                    <MovieCard
                                        {...movie}
                                    />)
                            })}
                        </div>
                    </section>
                    <Pagination onClickPage={setPage} pageCount={pages.pageCount} currentPage={pages.currentPage} />
                </div>
            </main>
            <ToastContainer limit={1}/>
        </>
    )
}

export default Home
