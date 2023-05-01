import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import axios from 'axios';
import './InvoiceList.scss'
import arrowRight from '../../assets/icon-arrow-right.svg';

function InvoiceList({ filter }) {


  const { isLoading, data } = useQuery('invoice', () => {
    return axios.get('http://localhost:4000/invoices')
  }) 

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  const isActiveFilter = () => filter.every((stat) => {
    console.log(stat)
    //  console.log(['draft', 'pending', 'paid'].includes(stat))
  })

  console.log(isActiveFilter())
  // console.log(['draft', 'pending', 'paid'].includes([]))

  return (
    <div className='invoice-list'>
      {isActiveFilter 
      ? data?.data.map((invoice) => {
        return filter.includes(invoice.status) 
          ? <button key={invoice.id} className='invoice-list__container'>
              <p>{invoice.id}</p>
              <p>{invoice.paymentDue}</p>
              <p>{invoice.clientName}</p>
              <p>{invoice.total}</p>
              <p>{invoice.status}</p>
              <img src={arrowRight} />
            </button> 
          : null
      })
      : data?.data.map((invoice) => {
          <button key={invoice.id} className='invoice-list__container'>
            <p>{invoice.id}</p>
            <p>{invoice.paymentDue}</p>
            <p>{invoice.clientName}</p>
            <p>{invoice.total}</p>
            <p>{invoice.status}</p>
            <img src={arrowRight} />
          </button> 
      })}
      {/* <p className='invoice-list__id'>Invoice ID</p>
      <p className='invoice-list__payment-due'>Payment Due</p>
      <p className='invoice-list__bill-to'>Bill To Name</p>
      <p className='invoice-list__amount-due'>Total Amount Due</p>
      <p className='invoice-list__status'>Status</p> */}
    </div>
  )
}

export default InvoiceList