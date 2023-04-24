import React from 'react'
import InputArea from '../InputArea/InputArea'
import './ItemList.scss'

function ItemList() {



  return (
    <div className='list'>
        <p className='list__title'>Item List</p>
        <div className='list__container'>
            <InputArea className='list__item--name' type='text' inputLabel='Item Name' />
            <InputArea className='list__item--quantity' type='text' inputLabel='Qty.' />
            <InputArea className='list__item--price' type='text' inputLabel='Price' />
            <InputArea className='list__item--total' type='text' inputLabel='Total' />   
        </div>
    </div>
  )
}

export default ItemList