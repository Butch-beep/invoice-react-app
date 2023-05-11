import React, { useState } from 'react'
import { useQuery } from 'react-query'
import BillFrom from '../BillFrom/BillFrom'
import BillTo from '../BillTo/BillTo'
import GoodsInfo from '../GoodsInfo/GoodsInfo'
import CreateInvoiceNewitem from '../CreateInvoiceItem/CreateInvoiceItem'
import ItemList from '../ItemList/ItemList'
import './CreateInvoice.scss'
import axios from 'axios'

function CreateInvoice() {

  const [inputValue, setInputValue] = useState("")
  const [itemCount, setItemCount] = useState(0)

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const { data } = useQuery('invoice', () => {
    return axios.get('http://localhost:4000/invoices')
  }) 


  const getFromAddressKeys = (obj) => {
    const keysArr = Object.keys(obj)
    const regex = /from(?=.)/
    const getFrom = keysArr.filter(key => regex.test(key))
    const slicedArr = getFrom.map(key => key.slice(5))
    const senderAddress = Object.fromEntries(
        slicedArr.map((key, index) => [key, obj[getFrom[index]]])
      )
    return senderAddress
  }

  const getToAddressKeys = (obj) => {
    const keysArr = Object.keys(obj)
    const regex = /to(?=.)/
    const getTo = keysArr.filter(key => regex.test(key))
    const slicedArr = getTo.map(key => key.slice(3))
    const clientAddress = Object.fromEntries(
        slicedArr.map((key, index) => [key, obj[getTo[index]]])
      )
    return clientAddress
  }

  const getItems = (obj) => {
    const keysArr = Object.keys(obj)
    const regex = /items(?=.)/
    const getItems = keysArr.filter(key => regex.test(key))
    const slicedArr = getItems.map(key => key.slice(6))
    const items = Object.fromEntries(
        slicedArr.map((key, index) => [key, obj[getItems[index]]])
      )
    return items
  }

  const deleteFromAddress = (obj) => {
    const arr = ["from.street", "from.city", "from.postCode", "from.country"]
    arr.map(key => delete obj[key])
  }

  const deleteToAddress = (obj) => {
    const arr = ["to.street", "to.city", "to.postCode", "to.country"]
    arr.map(key => delete obj[key])
  }

  const deleteItems = (obj) => {
    const arr = ["items.name", "items.quantity", "items.price", "items.total"]
    arr.map(key => delete obj[key])
  }

  const randomLetter = () => {
    return String.fromCharCode(65+Math.floor(Math.random() * 26))
  }

  const randomNumber = () => {
    return Math.floor(Math.random() * 10)
  }

  const createId = () => {
    const firstLetter = randomLetter()
    const secondLetter = randomLetter()
    const firstNumber = randomNumber()
    const secondNumber = randomNumber()
    const thirdNumber = randomNumber()
    const fourthNumber = randomNumber()
    const id = `${firstLetter}${secondLetter}${firstNumber}${secondNumber}${thirdNumber}${fourthNumber}`

    if (checkIdDuplicate(id)) {
      return createId()
    } else {
      return id
    }
  }

  const checkIdDuplicate = (param) => {
    const arr = data.data.map(item => item["id"])
    return arr.includes(param)
  }

  const handleSubmit = (e) => {

    //Prevents default
    e.preventDefault()

    //Returns key/value pair of inputs
    const form = e.target
    const formData = new FormData(form)
    const formDataObj = Object.fromEntries(formData.entries())
    console.log(e)

    //Add address of sender
    formDataObj.senderAddress = getFromAddressKeys(formDataObj)

    //Add address of client
    formDataObj.clientAddress = getToAddressKeys(formDataObj)

    //Add items 
    formDataObj.items = [getItems(formDataObj)]

    //Delete name attributes that starts with "from"
    deleteFromAddress(formDataObj)

    //Delete name attributes that starts with "to"
    deleteToAddress(formDataObj)

    //Delete items
    deleteItems(formDataObj)

    //Push id 
    formDataObj.id = createId()
    

    console.log(formDataObj)

    fetch('http://localhost:4000/invoices/', {  
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify()
  })
}

  const handleAddItem = () => {
    setItemCount(itemCount + 1)
  }


  return (
    <div className='new-invoice new-invoice__container container--main'>
      <form method='post' onSubmit={handleSubmit}>
        <button className='new-invoice__button button--go-back'>Go back</button>
          <h1 className='new-invoice__text text--h1'>New Invoice</h1>
          <BillFrom />
          <BillTo />
          <GoodsInfo />
          <CreateInvoiceNewitem />
          <div className='new-invoice__container new-invoice__container--buttons'>
            <button className='new-invoice__btn new-invoice__btn--discard'>Discard</button> 
            <button className='new-invoice__btn btn--draft'>Save as Draft</button> 
            <button className='new-invoice__btn btn--save-send' type='submit'>Save & Send</button>
          </div>
      </form>
    </div>
  )
}

export default CreateInvoice