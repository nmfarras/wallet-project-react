import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard/Dashboard.container';
import WalletPage from './pages/WalletPage/WalletPage.container';
import Header from './components/Header/Header.component';
import TransactionPage from './pages/TransactionPage/TransactionPage.container';

import './App.css';

function App() {

  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/wallets" element={<WalletPage />} />
          <Route path="/transactions" element={<TransactionPage />} />
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
