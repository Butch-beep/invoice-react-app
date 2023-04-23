import React from 'react';
import './Button.module.css'

function Button({ onClick, child, style }) {
  return (
    <button 
        onClick={onClick}
        style={style}>
            {child}
    </button>
  )
}

export default Button