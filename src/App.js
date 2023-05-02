import React, { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query'
import './App.scss'
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header'
import InvoiceList from './components/InvoiceList/InvoiceList';
import Invoice from './components/Invoice/Invoice'


const queryClient = new QueryClient()

function App() {

  const [filter, setFilter] = useState([]);

  const handleFilter = (e) => {
    if (e.target.checked) {
      setFilter([...filter, e.target.value])
    } else {
      setFilter(filter.filter((stat) => stat !== e.target.value))
    }
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <NavBar />
        <main className='App__container'>
          {/* <Header onClick={handleFilter}/>
          <InvoiceList filter={filter}/> */}
          <Invoice />
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;