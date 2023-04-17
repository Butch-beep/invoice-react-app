import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
background: none;
color: inherit;
border: none;
padding: 0;
font: inherit;
cursor: pointer;
outline: inherit;
background-color: ${props => props.backgroundColor}
`

function Button({ onClick, child, backgroundColor }) {
  return (
    <StyledButton 
        onClick={onClick}
        backgroundColor={backgroundColor}>
            {child}
    </StyledButton>
  )
}

export default Button