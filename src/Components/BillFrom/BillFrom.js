import React, { useState } from 'react'
import './BillFrom.scss'

function BillFrom() {

  const [street, setStreet] = useState()
  const [city, setCity] = useState()
  const [postCode, setPostCode] = useState()
  const [country, setCountry] = useState()

  const handleStreet = (e) => {
    setStreet(e.target.value)
  }

  const handleCity = (e) => {
    setCity(e.target.value)
  }

  const handlePostCode = (e) => {
    setPostCode(e.target.value)
  }

  const handleCountry = (e) => {
    setCountry(e.target.value)
  }


  return (
    <div className='bill-from bill-from__container container--main'>
        <h2 className='new-invoice__text text--from-h2'>Bill From</h2>
        <label className='bill-from__label label--street-address'>
          Street Address
          <input className='bill-from__input input--street-address' name='from.street' type='text' value={street} onChange={handleStreet} required />
        </label>
        <div className='bill-from__container bill-from__container--city-code-country'>
          <label className='bill-from__label label--city'>
            City
            <input className='bill-from__input bill-from__input--city' name='from.city' type='text' value={city} onChange={handleCity} required />
          </label>
          <label className='bill-from__label label--post-code'>
            Post Code
            <input className='bill-from__input input--country' name='from.postCode' type='text' value={postCode} onChange={handlePostCode}  required/>
          </label>
          <label className='bill-from__label label--country'>
            Country
            <input className='bill-from__input input--country' name='from.country' type='text' value={country} onChange={handleCountry} required/>
          </label>
        </div>  
    </div>
  )
}

export default BillFrom