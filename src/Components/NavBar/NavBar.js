import React from 'react'
import mainLogo from '../../assets/header-logo.svg'
import darkMode from '../../assets/icon-moon.svg'
import './NavBar.scss'

function NavBar() {
  return (
    <div className='nav-bar'>
        <img className='nav-bar__main-logo' src={mainLogo} />
        <button className='nav-bar__dark-mode' type='button'/>
        <div className='nav-bar__vertical-break' />
        <button className='nav-bar__account-setting' type='button' />
    </div>
  )
}

export default NavBar