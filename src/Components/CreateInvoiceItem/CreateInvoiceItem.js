import React, { useEffect, useState } from 'react'
import deleteLogo from '../../assets/icon-delete.svg'
import './CreateInvoiceItem.scss'

function NewInvoiceItemList({ onClick }) {

  const [items, setItems] = useState([{
    name: "",
    quantity: "",
    price: "",
    total: ""
  }])

  const handleChangeName = (e, index) => {
    const itemsCopy = [...items]
    itemsCopy[index].name = e.target.value
    setItems(itemsCopy)
  }

  const handleChangeQuantity = (e, index) => {
    const itemsCopy = [...items]
    itemsCopy[index].quantity = e.target.value
    setItems(itemsCopy)
  }

  const handleChangePrice = (e, index) => {
    const itemsCopy = [...items]
    itemsCopy[index].price = e.target.value
    setItems(itemsCopy)
  }

  const handleAddItem = () => {
    const itemsCopy = [...items, [{
      name: "",
      quantity: "",
      price: "",
      total: ""
    }]]
    setItems(itemsCopy)
  }

  const handleDeleteItem = (index) => {
    const itemsCopy = [...items]
    itemsCopy.splice(index, 1)
    setItems(itemsCopy)
  }

  return (
    <div className='new-invoice-item new-invoice-item__container container--main'>
      <h2 className='new-invoice__text text--item-list'>Item List</h2>
    {
      items.map((item, index) => (
      <>
        <label className='new-invoice__label label--item-name'>
        Item Name
        <input className='new-invoice__input input--item-name' name="items.name" type='text' 
        value={item.name} onChange={(e) => handleChangeName(e, index)} required />
      </label>
      <div className='new-invoice__container container--item-info'>
        <label className='new-invoice__label label--quantity'>
          Quantity
          <input className='new-invoice__input input--quantity' name="items.quantity" type='text' value={item.quantity} onChange={(e) => handleChangeQuantity(e, index)} required />
        </label>
        <label className='new-invoice__label label--price'>
          Price
          <input className='new-invoice__input input--price' name="items.price" type='text' value={item.price} onChange={(e) => handleChangePrice(e, index)} required />
        </label>
        <label className='new-invoice__label label--total'>
          Total
          <input className='new-invoice__input input--total' name="items.total" type='text' value={item.total} disabled />
        </label>
        <button className='new-invoice__btn btn--delete' onClick={() => handleDeleteItem(index)}>
          <img className='new-invoice__img img--delete' src={deleteLogo} />
        </button>
      </div>
      </>))
    }
    <button onClick={handleAddItem}>Add Item</button>
    </div>
  )
}

export default NewInvoiceItemList