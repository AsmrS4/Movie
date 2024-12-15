import React from 'react';
import ContentLoader from 'react-content-loader';

export const PosterLoader = () => (
    <ContentLoader
        speed={2}
        viewBox='0 0 300 450'
        backgroundColor='#7d7d7d'
        foregroundColor='#d1d1d1'
        className='loader'
    >
        <rect x='0' y='0' rx='5' ry='5' width='300' height='450' />
    </ContentLoader>
);

export const TitleLoader = ({ width = 320, height = 50 }) => (
    <ContentLoader
        speed={2}
        viewBox={`0 0 ${width} ${height}`}
        backgroundColor='#7d7d7d'
        foregroundColor='#d1d1d1'
        className='loader'
    >
        <rect x='0' y='0' rx='5' ry='5' width={width} height={height} />
    </ContentLoader>
);
