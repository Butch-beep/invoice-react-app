import React from 'react'

function Invoice() {
  return (
    <>
        <div>
            <p>Status</p>
            <div>
                <p>Icon</p>
                <p>Pending</p>
            </div>
            <div>
                <p>Edit</p>
                <p>Delete</p>
                <p>Mark as Paid</p>
            </div>
        </div>
        <div>
            <div>
                <p>Invoice ID Number</p>
                <p>Bill From Address</p>
            </div>
            <div>
                <div>
                    <p>Invoice Date</p>
                    <p>Payment Due</p>
                </div>
                <div>
                    <p>Bill To Name</p>
                    <p>Bill To Address</p>
                </div>
                <p>Sent To Email</p>
            </div>
            <div>
                <div>
                    <p>Item Name</p>
                    <p>QTY.</p>
                    <p>Price</p>
                    <p>Total</p>
                </div>
                <div>
                    <p>Banner Design</p>
                    <p>1</p>
                    <p>156.00</p>
                    <p>156.00</p>
                </div>
                <div>
                    <p>Amount Due</p>
                    <p>556.00</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Invoice