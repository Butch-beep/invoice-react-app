import React from 'react'

const option = [
  {value: 'Draft'},
  {value: 'Pending'},
  {value: 'Paid'}
]

function InvoiceFilter() {
  return (
    <div>
      {option.map((item) => <option value={item.value}>{item.value}</option>)}
    </div>
  )
}

export default InvoiceFilter