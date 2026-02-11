import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NBKGames from './NBKGames';
import ExchangeRates from './ExchangeRates';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/nbk-games">NBK Games</Link> |{" "}
        <Link to="/exchange-rates">Exchange Rates</Link>
      </nav>
      <Routes>
        <Route path="/nbk-games" element={<NBKGames />} />
        <Route path="/exchange-rates" element={<ExchangeRates />} />
        <Route path="/" element={<h1>Welcome to AlphaStore</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
