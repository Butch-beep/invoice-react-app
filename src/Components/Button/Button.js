import React from 'react';
import { StyledButton } from './Button.style';

function Button({ onClick, child, style }) {
  return (
    <StyledButton 
        onClick={onClick}
        style={style}>
            {child}
    </StyledButton>
  )
}

export default Button