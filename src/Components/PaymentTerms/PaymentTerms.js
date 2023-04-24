import React from 'react'

function PaymentTerms() {

    const terms = ['Net 1 Day', 'Net 7 Days', 'Net 14 Days', 'Net 30 Days']

  return (
    <div>
        <label>
            Issue Date
            <br />
            <input type="text" list="terms" />
            <datalist id="terms">
                {terms.map((terms) => <option value={terms} />)}
            </datalist>
        </label>
    </div>
  )
}

export default PaymentTerms