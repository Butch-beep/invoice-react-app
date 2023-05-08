import React, { useState } from 'react'
import './BillTo.scss'

function BillTo() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [street, setStreet] = useState()
  const [city, setCity] = useState()
  const [postCode, setPostCode] = useState()
  const [country, setCountry] = useState()

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

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
    <div className='bill-to bill-to__container bill-to__container--main'>
        <h2 className='new-invoice__text text--to-h2'>Bill To</h2>
        <label className='bill-to__label label--client-name'>
          Client's Name
          <input className='bill-to__input input--client-name' name='clientName'type='text' value={name} onChange={handleName} required/>
        </label>      
        <label className='bill-to__label label--client-email'>
          Client's Email
          <input className='bill-to__input input--client-email' name="clientEmail{name}" type='text' value={email} onChange={handleEmail} required/>
        </label>
        <label className='bill-to__label label--street-address'>
          Street Address
          <input className='bill-to__input input--street-address' name="to.street" type='text' value={street} onChange={handleStreet} />
        </label>
        <div className='bill-to__container bill-to__container--city-code-country'>
          <label className='bill-to__label label--city'>
            City
            <input className='bill-to__input input--city' name="to.city" type='text' value={city} onChange={handleCity} required/>
          </label>
          <label className='bill-to__label label--post-code'>
            Post Code
            <input className='bill-to__input input--country' name="to.postCode" type='text' value={postCode} onChange={handlePostCode} />
          </label>
          <label className='bill-to__label label--country'>
            Country
            <input className='bill-to__input input--country' name="to.country" type='text' value={country} onChange={handleCountry} required/>
          </label>
        </div>  
    </div>
  )
}

export default BillTo