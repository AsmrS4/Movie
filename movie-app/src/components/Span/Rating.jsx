import React, { useEffect, useState } from 'react';

import './Rating.scss';

const Rating = ({ value = 0 }) => {
    const [color, setColor] = useState('');
    const [totalRating, setRating] = useState(0);
    const handleRating = () => {
        setRating(value);
    };

    useEffect(() => {
        if (totalRating >= 7.5) {
            setColor('bg-success');
        }
        if (totalRating >= 5.0 && totalRating < 7.5) {
            setColor('bg-warning');
        }
        if (totalRating < 5.0) {
            setColor('bg-danger');
        }

        handleRating();
    }, [totalRating]);

    return (
        <>
            <span className={`rating-span ${color}`}>{totalRating}</span>
        </>
    );
};

export default Rating;
