import React from 'react'

function InputArea({ inputLabel }) {
  return (
    <div>
        <label>
            {inputLabel}
            <input
                type={type}
                onChange={onChange}
                value={value}>    
            </input>
        </label>
    </div>
  )
}

export default InputArea