import React from 'react'
import MovieCard from '../components/Card';

const Home = () => {
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
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                        </div>
                    </section>
                    <div className='movie-pagination'></div>
                </div>
            </main>

        </>
    )
}

export default Home
