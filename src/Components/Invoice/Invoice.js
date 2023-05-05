import React from 'react'
import { useParams } from 'react-router'
import { useQuery } from 'react-query'
import axios from 'axios'
import './Invoice.scss'

function Invoice() {

    const params = useParams()
    const invoiceId = params.invoiceId

    let promise = new Promise(function(resolve, reject) {
        let data = fetch('http://localhost:4000/invoices')
    
        if (data) {
            resolve(data)
        }
    })

    promise.then(response => response.json()).then(data => console.log(data))


    // const { isLoading, data } = useQuery('invoice', () => {
    //     return axios.get('http://localhost:4000/invoices')
    // }) 

    // const invoice = (param) => {
    //     if (data) {
    //         const index = invoiceIndex();
    //         return data.data[index][`${param}`];
    //     }
    // }

    // const invoiceIndex = () => {
    //     if (data) {
    //         const fetchResult = data.data
    //         const index = fetchResult.findIndex(invoice => invoice.id === invoiceId)
    //         return index
    //     }
    // }

    // let promise  = new Promise(function(resolve, reject) {
    //     let data = fetch('http://localhost:4000/invoices')
    //     if (data !== undefined) {
    //         return resolve(data)
    //     }
    // })


    // const isInvoiceIdExist = () => {
    //     if (data.statusText) {
    //         const arrInvoice = data.data.map((invoice) => invoice.id)
    //         if (arrInvoice.includes(invoiceId)) {
    //             console.log('hey')
    //             return data.data[1].id
    //         }
    //     }
    // }




    // const invoiceIndex = () => {
    //     return isInvoiceIdExist().findIndex((invoice) => invoice.id === invoiceId)
    // } 

    // console.log(invoiceIndex())

    // const invoice = () => {
    //     const invoiceIndex = () => {
    //         return isInvoiceIdExist().findIndex((invoice) => invoice.id === invoiceId)
    //     } 

    //     console.log(isInvoiceIdExist()[invoiceIndex])
    // } 

    // console.log(invoice())

    // if (isInvoiceIdExist() === false)  {
    //     return <div>No Invoice with Invoice ID of {invoiceId} was found</div>
    // }

  return (
    <div className='invoice'>
        <div className='invoice__container invoice__container--header'>
            <div className='invoice__container invoice__container--status'>
                <p className='invoice__text invoice__text--status'>Status</p>
                <span className='invoice__symbol'>Icon</span>
                <p className='invoice__text'>Pending</p>
            </div>
            <div className='invoice__container invoice__container--updator'>
                <p className='invoice__updator invoice__updator--edit'>Edit</p>
                <p className='invoice__updator invoice__updator--delete'>Delete</p>
                <p className='invoice__updator invoice__updator-paid'>Mark as Paid</p>
            </div>
        </div>
        <div className='invoice__container invoice__container--body'>
            <div className='invoice__container invoice__container--bill-from'>
                <p className='invoice__text invoice__text--from-id-number'></p>
                <p className='invoice__text invoice__text--from-address'>Bill From Address</p>
            </div>
            <div className='invoice__container invoice__container--bill-to'>
                <div className='invoice__container invoice__container--dates'>
                    <p className='invoice__text invoice__text--invoice-date'>Invoice Date</p>
                    <p className='invoice__text invoice__text--payment-due'>Payment Due</p>
                </div>
                <div className='invoice__container invoice__container--name-address'>
                    <p className='invoice__text invoice__text--to-name'>Bill To Name</p>
                    <p className='invoice__text invoice__text--to-address'>Bill To Address</p>
                </div>
                <p className='invoice__text invoice__text--sent-to'>Sent To Email</p>
            </div>
            <div className='invoice__container invoice__container--invoice-summary'>
                <div className='invoice__container invoice__container--computation'>
                    <div className='invoice__container--particular-name'>
                        <p className='invoice__text invoice__text--item-name'>Item Name</p>
                        <p className='invoice__text invoice__text--quantity'>QTY.</p>
                        <p className='invoice__text invoice__text--price'>Price</p>
                        <p className='invoice__text invoice__text--total'>Total</p>
                    </div>
                    <div className='invoice__container--particular-value'>
                        <p className='invoice__text invoice__text--item-name-value'>Brand Guidelines</p>
                        <p className='invoice__text invoice__text--quantity-value'>1</p>
                        <p className='invoice__text invoice__text--price-value'>1,800.90</p>
                        <p className='invoice__text invoice__text--total-value'>1,800.90</p>
                    </div>

                </div>
                <div className='invoice__container--grand-total'>
                    <p className='invoice__text invoice__text--grand-total'>Amount Due</p>
                    <p className='invoice__number invoice__number--grant-total'>Grand Total Number</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Invoice