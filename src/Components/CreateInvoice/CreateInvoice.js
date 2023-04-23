import React, { useState } from 'react'
import Button from '../Button/Button'
import InputArea from '../InputArea/InputArea'

function CreateInvoice() {
  
  const [value, setValue] = useState("");

  const changeValue = (e) => {
    setValue(e.target.value)
  }




  return (
    <div>
        <p>New Invoice</p>
        <p>Bill From</p>
        <InputArea
          inputLabel={"Street Address"}
          value={value}
          onChange={changeValue}>
        </InputArea>
        <div>
          <InputArea
            inputLabel={"City"}
            value={value}
            onChange={changeValue}>
          </InputArea>
          <InputArea
            inputLabel={"Post Code"}
            value={value}
            onChange={changeValue}>
          </InputArea>
          <InputArea
            inputLabel={"Country"}
            value={value}
            onChange={changeValue}>
          </InputArea>
        </div>
        <p>Bill To</p>
        <InputArea
            inputLabel={"Country"}
            value={value}
            onChange={changeValue}>
        </InputArea>
        <InputArea
          inputLabel={"Country"}
          value={value}
          onChange={changeValue}>
        </InputArea>
        <InputArea
          inputLabel={"Country"}
          value={value}
          onChange={changeValue}>
        </InputArea>
    </div>
  )
}

export default CreateInvoice