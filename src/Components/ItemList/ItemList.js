import React, { useState } from 'react'
import CreateInvoiceNewitem from '../CreateInvoiceItem/CreateInvoiceItem'


function ItemList() {

  const [keys, setKeys] = useState(['0'])

  const handleAddItem = () => {
    setKeys([...keys, keys.length + 1])
  }

  const deleteItem = (e) => {
    console.log(e.target)
  }

  return (
    <div className='new-invoice-item new-invoice-item__container container--main'>
        <h2 className='new-invoice__text text--item-list'>Item List</h2>
  </div>
  )
}

export default ItemList