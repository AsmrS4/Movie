import React, { useEffect, useState } from 'react'

const Rating = ({ totalRating }) => {

    const [color, setColor] = useState('')

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
