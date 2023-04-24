import React, { useState } from 'react'
import { streetAddress } from '../../uti/streetAddress'
import InputArea from '../InputArea/InputArea';
import './BillFrom.scss'

function BillFrom() {
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [country, setCountry] = useState("");

  const changeStreetAddress = (e) => {
    setStreetAddress(e.target.value)
  }

  const changeCity = (e) => {
    setCity(e.target.value)
  }

  const changePostCode = (e) => {
    setPostCode(e.target.value)
  }

  const changeCountry = (e) => {
    setCountry(e.target.value)
  }

  return (
    <div className='bill-from'>
      <p className='bill-from__title'>Bill From</p>
        <InputArea className='bill-from__ address bill-from__address--street' type='text' inputLabel={"Street Address"} value={streetAddress} onChange={changeStreetAddress} />
      <div className='bill-from__container'>
        <InputArea className='bill-from__ address bill-from__address--city' type='text' inputLabel='City' value={city} onChange={changeCity} />
        <InputArea className='bill-from__ address bill-from__address--postCode' type='text' inputLabel='Post Code' value={postCode} onChange={changePostCode} />
        <InputArea className='bill-from__ address bill-from__address--country' type='text' inputLabel='Country' value={country} onChange={changeCountry} />
      </div>
    </div>

  )
}

export default BillFrom