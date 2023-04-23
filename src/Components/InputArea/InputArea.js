import React from 'react'

function InputArea({ inputLabel, type, onChange, value }) {
  return (
    <div>
        <label>
            {inputLabel}
            <br />
            <input
                type="text"
                onChange={onChange}
                value={value}>    
            </input>
        </label>
    </div>
  )
}

export default InputArea