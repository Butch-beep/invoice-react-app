import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import './InvoiceList.scss'

function InvoiceList() {

  // const [isLoading, setisLoading] = useState(true);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:4000/invoices')
  //     .then((response) => {
  //       setData(response.data);
  //       setisLoading(false);
  //     })
  // }, [])

  const { isLoading, data } = useQuery('invoice', () => {
    return axios.get('http://localhost:4000/invoices')
  }) 

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  console.log(data.data)

  return (
    <div className='invoice-list'>
      {data?.data.map((invoice) => {
        return <p key={invoice.id}>{invoice.id}</p>
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