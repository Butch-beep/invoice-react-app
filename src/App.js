import React, { useState, useEffect } from 'react';
import './App.scss'
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header'
import InvoiceList from './components/InvoiceList/InvoiceList';
import Invoice from './components/Invoice/Invoice'
import { Routes, Route } from 'react-router-dom';
import CreateInvoice from './components/CreateInvoice/CreateInvoice';

function App() {

  const [filter, setFilter] = useState([]);
  const [data, setData] = useState([])

  useEffect(() => {

    fetch("http://localhost:4000/invoices")
    .then(response => response.json())
    .then(data =>setData(data))
  }, [])

  const handleFilter = (e) => {
    if (e.target.checked) {
      setFilter([...filter, e.target.value])
    } else {
      setFilter(filter.filter((stat) => stat !== e.target.value))
    }
  }

  return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route index element={
            <main className='App__container'>
              <Header onClick={handleFilter}/>
              <InvoiceList filter={filter} data={data}/>
            </main>} />
          <Route path=':invoiceId' element={ <Invoice data={data}/> } />
        </Routes>
      {/* <CreateInvoice /> */}
      </div>
  );
}

export default App;