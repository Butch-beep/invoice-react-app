import React, { useState } from 'react'
import arrowDown from '../../assets/icon-arrow-down.svg'
import arrowUp from '../../assets/icon-arrow-down.svg'
import './Header.scss'

function Header( {onClick} ) {

  const [dropDown, setDropDown] = useState(false);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  }

  const handleInputDraft = (e) => {
    console.log('draft')
  }

  const handleInputPending = () => {
    console.log('pending')
  }

  const handleInputPaid = () => {
    console.log('paid')
  }

  return (
    <div className='header'>
        <div className='header__container--title'>
            <p className='header__text--heading'>Invoices</p>
            <p className='header__text--sub-heading'>There are # total invoices</p>
        </div>
        <div className='header__container--filter'>
          <button className='header__button--filter' type='button' onClick={handleDropDown}>
            Filter by Status
            <img className='header__img--arrow-down' src={arrowDown} />
            <img className='header__img--arrow-up' src={arrowUp} />
          </button>
          <div className={`header__container--filter-option${dropDown ? '--visible' : '--invisible'}`}>
                <label>
                  <input className='header__checkbox--draft' type='checkbox' value='draft' onClick={(e) => {onClick(e); handleInputDraft()}} />
                  Draft
                </label>
                <label>
                  <input className='header__checkbox--pending' type='checkbox' value='pending' onClick={(e) => {onClick(e); handleInputPending()}} />
                  Pending
                </label>
                <label>
                  <input className='header__checkbox--paid' type='checkbox' value='paid' onClick={(e) => {onClick(e); handleInputPaid()}} />
                  Paid
                </label>
          </div>
        </div>
        <button className='header__button--new-invoice'>New Invoice</button>

    </div>
  )
}

export default Header