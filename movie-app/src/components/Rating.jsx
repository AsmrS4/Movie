import React, { useEffect, useState } from 'react'

const Rating = ({ reviews }) => {

    const [color, setColor] = useState('')
    const [totalRating, setRating] = useState(0);
    const handleRating = () => {
        setRating((reviews.reduce((sum, item) => sum + item.rating, 0) / reviews.length).toFixed(1))
    }

    useEffect(() => {
        if(totalRating >= 7.5) {
            setColor('bg-success')
        } 
        if((totalRating >= 5.0) && (totalRating < 7.5)) {
            setColor('bg-warning')
        }
        if(totalRating < 5.0) {
            setColor('bg-danger')
        }
        
        handleRating();
    }, [totalRating])

    return (
        <>
            <span className={`rating-span ${color}`}>
                {totalRating}
            </span>
        </>
    )
}

export default Rating
