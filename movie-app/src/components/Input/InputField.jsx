import React from 'react'

export const InputField = (
    {
        fieldId,
        labelText,
        inputType,
        placeholderText = '',
        isRequired = false
    }
) => {
    return (
        <>
            <div className='input-field'>
                <label for={fieldId} class="form-label">{labelText}</label>
                <input type={inputType} class="form-control" placeholder={placeholderText} id={fieldId} required={isRequired} />
            </div>
        </>
    )
}

