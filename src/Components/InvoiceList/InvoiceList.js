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

  const invoiceListHTML = (param) => 
    <button key={param.id} className='invoice-list__container'>
      <p>{param.id}</p>
      <p>{param.paymentDue}</p>
      <p>{param.clientName}</p>
      <p>{param.total}</p>
      <p>{param.status}</p>
      <img src={arrowRight} />
    </button> 

  return (
    <div className='invoice-list'>
      {filter.length === 0 ? 
        data?.data.map((invoice) => {
          return invoiceListHTML(invoice)
          }) 
      : data?.data.map((invoice) => {
          return filter.includes(invoice.status) 
            ? invoiceListHTML(invoice)
            : null})
      } 
    </div>
  )
}

export default InvoiceList