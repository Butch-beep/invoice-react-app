import React, { useState } from 'react'
import './GoodsInfo.scss'

function GoodsInfo() {

  const [description, setDescription] = useState()
  const [term, setTerm] = useState()

  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleTerm = (e) => {
    setTerm(e.target.value)
  }

  const maxDate = () => { 
    const today = new Date().toLocaleDateString('en-ph').split('/')
    return today[2] + '-0' + today[0] + '-0' + today[1]
  }

  return (
    <div className='goods-info goods-info__container'>
        <label className='goods-info__label goods-info__label--invoice-date'>
            Invoice Date
            <input className='goods-info__input input--invoice-date' type='date' max={maxDate()}/>
        </label>
        <label className='goods-info__label goods-info__label--payment-terms'>
          Payment Terms
          <select className='goods-info__select-terms' name='selectedTerm' defaultValue={'30'}>
            <option className='goods-info__option option--terms-one' value='1'>Net 1 Day</option>
            <option className='goods-info__option option--terms-seven' value='7'>Net 7 Day</option>
            <option className='goods-info__option option--terms-fourteen' value='14'>Net 14 Day</option>
            <option className='goods-info__option option--terms-thirty' value='30'>Net 30 Day</option>
          </select>
        </label>
        <label className='goods-info__label goods-info__label--project-description'>
            Project Description
            <input className='goods-info__input input--project-description' type='text' value={description} onChange={handleDescription}/>
        </label>
    </div>
  )
}

export default GoodsInfo