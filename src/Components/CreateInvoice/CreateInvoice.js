import React from 'react'
import BillFrom from '../BillFrom/BillFrom'
import BillTo from '../BillTo/BillTo'
import GoodsInfo from '../GoodsInfo/GoodsInfo'
import CreateInvoiceNewitem from '../CreateInvoiceItem/CreateInvoiceItem'
import './CreateInvoice.scss'

function CreateInvoice() {

  const handlePost = () => {

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    fetch("http://localhost:4000/invoices", { method: form.method, body: formData });
    // fetch('http://localhost:4000/invoices', {
    //   method: 'POST',
    //   headers: 
    //   {
    //   Accept: "application/json",
    //   "Content-Type": "application/json"
      
    //   },
    //   body:JSON.stringify(formData)
    // })
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
          <p>NewInvoiceError</p>
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