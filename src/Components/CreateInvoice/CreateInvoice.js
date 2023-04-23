import React, { useState } from 'react'
import Button from '../Button/Button'
import InputArea from '../InputArea/InputArea'
import styles from './CreateInvoice.module.scss'

function CreateInvoice() {
  
  const [value, setValue] = useState("");

  const changeValue = (e) => {
    setValue(e.target.value)
  }

  const fieldName = {
    client: ["Client's Name", "Client's Email"],
    address: ["Street Address",
              ["City", "Post Code", "Country"]
             ]
  }

  const AddressField = fieldName["address"][1].map((label) => {
    return (
      <InputArea
        inputLabel={label}
        value={value}
        onChange={changeValue}>
      </InputArea>    
    )
  })

  const clientField = fieldName.client.map((label) => {
    return (
      <InputArea
        inputLabel={label}
        value={value}
        onChange={changeValue}>
      </InputArea> 
    )
  })

  const streetAddress = (
    <InputArea
      inputLabel={"Street Address"}
      value={value}
      onChange={changeValue}>
    </InputArea>
  )

  return (
    <div className='new-invoice'>
        <p className={styles.red}>Hello</p>
        <p className={styles.new-invoice__text}>New Invoice</p>
        <p className='new-invoice__text--violet'>Bill From</p>
        { streetAddress }
        <div className='new-invoice__container--row'>
          { AddressField }
        </div>
        <p className='new-invoice__text--violet'>Bill To</p>
        { clientField }
        { streetAddress }
        <div className='new-invoice__container--row'>
          { AddressField }
        </div>
    </div>
  )
}

export default CreateInvoice