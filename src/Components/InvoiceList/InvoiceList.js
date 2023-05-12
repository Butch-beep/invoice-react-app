import { useNavigate } from 'react-router';
import './InvoiceList.scss'
import arrowRight from '../../assets/icon-arrow-right.svg';

function InvoiceList({ filter, data }) {
  const navigate = useNavigate()

  const invoiceListHTML = (param) => 
    <button key={param.id} className='invoice-list__container' onClick={() => navigate(`${param.id}`)}>
      <p>{param.id}</p>
      <p>{param.paymentDue}</p>
      <p>{param.clientName}</p>
      <p>{param.total}</p>
      <p>{param.status}</p>
      <img src={arrowRight} />
    </button> 

  return (
    <div className='invoice-list'>
      {filter.length === 0 ? 
        data.map((invoice) => {
          return invoiceListHTML(invoice)
          }) 
      : data.map((invoice) => {
          return filter.includes(invoice.status) 
            ? invoiceListHTML(invoice)
            : null})
      } 
    </div>
  )
}

export default InvoiceList