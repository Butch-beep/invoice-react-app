import React from 'react'
import './InputArea.scss'

function InputArea({ inputLabel, type, onChange, value, className, placeholder }) {
  return (
    <div className='input-area'>
        <label className='input-area__label'>
            {inputLabel}
            <br />
            <input className={`input-area__input ${className}`} type={type} onChange={onChange} value={value} placeholder={placeholder} />    
        </label>
    </div>
  )
}

export default InputArea