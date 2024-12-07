import React, { useEffect, useState } from 'react';
import { HandySvg } from 'handy-svg';

import arrowLeft from '../../assets/arrow_left.svg';
import arrowRight from '../../assets/arrow_right.svg';
import PaginationLoader from '../Loaders/PaginationLoader';
import './Pagination.scss'

const ArrowIcon = ({iconSrc}) => {
    return (
        <HandySvg
            src={iconSrc}
            className="icon"
            width="22"
            height="22"
        />
    )
}

const Pagination = ({ onClickPage, pageCount, currentPage, loading = true }) => {
    const [activePage, setActivePage] = useState(1);

    const prevPage = () => {
        setActivePage(activePage - 1 > 0 ? activePage - 1 : 1);
    }

    const nextPage = () => {
        setActivePage(activePage + 1 <= pageCount ? activePage + 1 : pageCount);
    }

    const slicePages = () => {
        let [start, end] = [Math.max(1, currentPage - 1), Math.min(pageCount, currentPage + 1)];
        const pages = []
        if (start === 1) {
            end = start + 2
        }

        if (end === pageCount) {
            start = end - 2
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    }

    const handlePage = (e) => {
        setActivePage(e.target.getAttribute('value'));
    }

    useEffect(() => {
        onClickPage(activePage)
    }, [activePage])

    useEffect(() => {
        slicePages();
    }, [pageCount, currentPage])

    return (
        <>
            <section className='movie-pagination'>
                {loading ?
                    [...Array(5)].map(item => {
                        return (<div className='pagination-item loading'><PaginationLoader /></div>)
                    })
                    :
                    <>
                        <div className='pagination-item' onClick={prevPage}><ArrowIcon iconSrc={arrowLeft}/>
                        </div>
                        {slicePages().map(page => {
                            return <div className={page === currentPage ? 'pagination-item active' : 'pagination-item'}
                                value={page} onClick={handlePage}>{page}</div>
                        })}
                        <div className='pagination-item' onClick={nextPage}><ArrowIcon iconSrc={arrowRight}/></div>
                    </>}
            </section>
        </>
    )
}

export default Pagination
