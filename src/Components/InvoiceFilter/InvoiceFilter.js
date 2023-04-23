import React from 'react'
import styled from 'styled-components'

const StyledSelect = styled.select`

`

const option = [
  {value: 'Draft'},
  {value: 'Pending'},
  {value: 'Paid'}
]

function InvoiceFilter() {
  return (
    <StyledSelect>
      {option.map((item) => <option value={item.value}>{item.value}</option>)}
    </StyledSelect>
  )
}

export default InvoiceFilter