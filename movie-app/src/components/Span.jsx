import React, { useEffect, useState } from 'react'

const Span = ({ value = 0 }) => {

    const [defaultColor, setColor] = useState('bg-secondary');
    
    return (
        <>
            <span className={`span ${defaultColor}`}>
                {value}
            </span>
        </>
    )
}

export default Span
