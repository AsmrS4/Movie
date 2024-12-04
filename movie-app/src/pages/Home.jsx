import React, { useEffect, useState } from 'react'
import MovieCard from '../components/Card';
import { getMovies } from '../services/MovieService';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(4);

    useEffect(() => {
        const getResult = async () => {
            const result = await getMovies(page);
            console.log(result.movies)
            setMovies(result.movies)
        }
        getResult();
    }, [])

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
                    <div className='movie-pagination'></div>
                </div>
            </main>

        </>
    )
}

export default Home
