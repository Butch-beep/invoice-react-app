import React, { useState } from 'react'
import deleteLogo from '../../assets/icon-delete.svg'
import './CreateInvoiceItem.scss'

function NewInvoiceItemList() {

  const [name, setName] = useState()
  const [quantity, setQuantity] = useState()
  const [price, setPrice] = useState()
  const [total, setTotal] = useState()

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleQuantity = (e) => {
    setQuantity(e.target.value)
  }

  const handlePrice = (e) => {
    setPrice(e.target.value)
  }

  const handleTotal = (e) => {
    setTotal(e.target.value)
  }

  return (
    <div className='new-invoice-item new-invoice-item__container container--main'>
      <h2 className='new-invoice__text text--item-list'>Item List</h2>
      <label className='new-invoice__label label--item-name'>
        Item Name
        <input className='new-invoice__input input--item-name' name="items.name" type='text' value={name} onChange={handleName} required/>
      </label>
      <div className='new-invoice__container container--item-info'>
        <label className='new-invoice__label label--quantity'>
          Quantity
          <input className='new-invoice__input input--quantity'  name="items.quantity" type='text' value={quantity} onChange={handleQuantity} required/>
        </label>      
        <label className='new-invoice__label label--price'>
            Price
            <input className='new-invoice__input input--price'  name="items.price" type='text' value={price} onChange={handlePrice} required/>
        </label> 
        <label className='new-invoice__label label--total'>
          Total
          <input className='new-invoice__input input--total'  name="items.total" type='text' value={total} disabled />
        </label>
      <button className='new-invoice__btn btn--delete'>
        <img className='new-invoice__img img--delete' src={deleteLogo} />
      </button>   
      </div>
      <button className='new-invoice__btn btn--add-item'>
        <p className='new-invoice__text text--add-item'>+ Add New Item</p>
      </button>
    </div>
  )
}

export default NewInvoiceItemList