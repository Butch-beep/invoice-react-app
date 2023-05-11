import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useQuery } from 'react-query'
import axios from 'axios'
import './Invoice.scss'

function Invoice({ data }) {

    const params = useParams()
    const invoiceId = params.invoiceId
    console.log(data)

    const index = data.findIndex(invoice => invoice.id === invoiceId)


    const toDate = (date) =>  {
        if (date) {
            const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
            const dateSplit = date.split('-')
            const monthNum = removeZero(dateSplit[1])
            return `${dateSplit[2]} ${month[monthNum]} ${dateSplit[0]}`
        }
    }

    const removeZero = (num) => {
        const arr = num.split('')
        return arr[1]
    }

    const upperCaseFirstLetter = (string) => {
        if (string) {
            return string.charAt(0).toUpperCase() + string.slice(1)
        }
    }

    const getStatus = (status) => {
        if (data) {
            switch (status) {
                case 'paid':
                    return 'green'
                    break;
                case 'pending':
                    return 'orange'
                    break;
                case 'draft':
                    return 'white'
                    break;
            }
        }
    } 


  return (
    <div className='invoice'>
        <div className='invoice__container invoice__container--header'>
            <div className='invoice__container invoice__container--status'>
                <p className='invoice__text invoice__text--status' >Status</p>
                <span className={`invoice__symbol--${getStatus(data[index].status)}`}>Icon</span>
                <p className='invoice__text' name="status">{upperCaseFirstLetter(data[index].status)}</p>
            </div>
            <div className='invoice__container invoice__container--updator'>
                <button className='invoice__updator invoice__updator--edit' type='button'>Edit</button>
                <button className='invoice__updator invoice__updator--delete' type='button'>Delete</button>
                <button className={`invoice__updator invoice__updator--paid${data[index].status === 'paid' ? '--invisible' : ''}`} type='button'>Mark as Paid</button>
            </div>
        </div>
        <div className='invoice__container invoice__container--body'>
            <div className='invoice__container invoice__container--bill-from'>
                <div className='invoice__container container--id-description'>
                    <p className='invoice__text invoice__text--from-id-number'>{data[index].id}</p>
                    <p className='invoice__text invoice__text--from-description'>{data[index].description}</p>
                </div>
                <div className='invoice__container container--from-address'>
                    <p className='invoice--address address--from-street'>{data[index].senderAddress.street}</p>
                    <p className='invoice--address address--from-city'>{data[index].senderAddress.city}</p>
                    <p className='invoice--address address--from-post-code'>{data[index].senderAddress.postCode}</p>
                    <p className='invoice--address address--from-country'>{data[index].senderAddress.country}</p>
                </div>
            </div>
            <div className='invoice__container invoice__container--bill-to'>
                <div className='invoice__container invoice__container--dates'>
                    <p className='invoice__text invoice__text--invoice-date'>Invoice Date</p>
                    <p className='invoice__text invoice__text--invoice-date-value'>{toDate(data[index].createdAt)}</p>
                    <p className='invoice__text invoice__text--payment-due'>Payment Date</p>
                    <p className='invoice__text invoice__text--invoice-date-value'>{toDate(data[index].createdAt)}</p>
                </div>
                <div className='invoice__container invoice__container--name-address'>
                    <p className='invoice__text invoice__text--bill-to'>Bill To</p>
                    <p className='invoice__text invoice__text--to-name'>{data[index].clientName}</p>
                    <div className='invoice__container container--from-address'>
                        <p className='invoice--address address--from-street'>{data[index].clientAddress.street}</p>
                        <p className='invoice--address address--from-city'>{data[index].clientAddress.city}</p>
                        <p className='invoice--address address--from-post-code'>{data[index].clientAddress.postCode}</p>
                        <p className='invoice--address address--from-country'>{data[index].clientAddress.country}</p>
                    </div>
                </div>
                <div className='invoice__container container--sent-to'>
                    <p className='invoice__text invoice__text--client-email'>Client Email</p>
                    <p className='invoice__text invoice__text--sent-to'>{data[index].clientEmail}</p>
                </div>
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
                        <p className='invoice__text invoice__text--item-name-value'>{data[index].items[0].name}</p>
                        <p className='invoice__text invoice__text--quantity-value'>{data[index].items[0].quantity}</p>
                        <p className='invoice__text invoice__text--price-value'>{data[index].items[0].price}</p>
                        <p className='invoice__text invoice__text--total-value'>{data[index].items[0].total}</p>
                    </div>

                </div>
                <div className='invoice__container--grand-total'>
                    <p className='invoice__text invoice__text--grand-total'>Amount Due</p>
                    <p className='invoice__number invoice__number--grant-total'>{data[index].total}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Invoice