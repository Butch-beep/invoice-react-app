import React, { useState } from 'react'
import Button from '../Button/Button'
import InputArea from '../InputArea/InputArea'
import IssueDate from '../IssueDate/IssueDate';
import './CreateInvoice.scss'
import PaymentTerms from '../PaymentTerms/PaymentTerms';
import ItemList from '../ItemList/ItemList';
import BillFrom from '../BillFrom/BillFrom';

function CreateInvoice() {
  


  // const fieldName = {
  //   client: ["Client's Name", "Client's Email"],
  //   address: ["Street Address",
  //             ["City", "Post Code", "Country"]]
             
  // }

  // const AddressField = fieldName["address"][1].map((label) => {
  //   return (
  //     <InputArea
  //       type='text'
  //       inputLabel={label}
  //       value={value}
  //       onChange={changeValue}>
  //     </InputArea>    
  //   )
  // })

  // const clientField = fieldName.client.map((label) => {
  //   return (
  //     <InputArea
  //       type='text'
  //       inputLabel={label}
  //       value={value}
  //       onChange={changeValue}>
  //     </InputArea> 
  //   )
  // })



  return (
    <div className={'new-invoice'}>
        <p className={'red'}>Hello</p>
        <p className={'new-invoice__text'}>New Invoice</p>
        <BillFrom />
        <p className={'new-invoice__text new-invoice__text--violet'}>Bill To</p>
        {/* { clientField } */}
        <div className={'new-invoice__container--row'}>
          {/* { AddressField } */}
        </div>
        <div className={'new-invoice__container-row'}>
          <IssueDate />
          <PaymentTerms />
        </div>
        {/* <InputArea type='text' inputLabel='Project Description' value={value} onChange={changeValue}>
        </InputArea> */}
        <ItemList />
        <Button child='+ Add New Item' />
    </div>
  )
}

export default CreateInvoice