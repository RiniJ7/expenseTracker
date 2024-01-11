import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

// import  GlobalProvider from './context/GlobalState';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth/index";
import { ExpenseTracker } from "./pages/expense-tracker/index";
import './App.css';

function App() {
  return (
    <>
    <div className="App">
<Router>
  <Routes>
    <Route path="/"  element={<Auth />} />
    <Route path="/expense-tracker"  element={<ExpenseTracker />} />

  </Routes>
</Router>
    </div>
    {/* <GlobalProvider> */}
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    {/* </GlobalProvider> */}
    </>
  );
}

export default App;