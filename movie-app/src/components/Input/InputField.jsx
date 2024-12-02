import React, { useState } from 'react'

export const InputField = (
    {
        id,
        labelText,
        inputType,
        placeholderText = '',
        isRequired = false,
        value = '',
        onChangeInput
    }
) => {
    const handleInput = (e) => {
        onChangeInput(e.target.value);
    }

    return (
        <>
            <div className='input-field'>
                <label htmlFor={id} className="form-label">{labelText}</label>
                <input type={inputType} className="form-control" onChange={handleInput} value={value} placeholder={placeholderText} id={id} required={isRequired} />
            </div>
        </>
    )
}

