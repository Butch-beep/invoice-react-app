import React from 'react';
import './App.scss'
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header'
import InvoiceList from './components/InvoiceList/InvoiceList';
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <NavBar />
        <Header />
        <InvoiceList />
      </div>
    </QueryClientProvider>
  );
}

export default App;