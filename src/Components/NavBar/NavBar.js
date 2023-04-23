import React from 'react'
import styled from 'styled-components'
import MainLogo from '../../assets/header-logo.svg'
import DarkModeLogo from '../../assets/icon-moon.svg'
import Avatar from '../../assets/image-avatar.jpg'
import Button from '../Button/Button'

const StyledDiv = styled.div`
display: flex;
justify-content: space-between;

`



function NavBar() {
  return (
    <StyledDiv>
      <Button style={{ backgroundImage: `url(${MainLogo})` }}/>
      <div>
        <Button />
        <Button />
      </div>
    </StyledDiv>
  )
}

export default NavBar