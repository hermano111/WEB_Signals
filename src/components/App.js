// src/App.js
import React from 'react';
import StockTable from './components/StockTable';
import IndicatorSettings from './components/IndicatorSettings';

const App = () => {
  const stockSymbols = ['TSLA', 'AAPL', 'GOOGL'];  // Ejemplo, agrega los símbolos necesarios

  return (
    <div className="App">
      <StockTable stockSymbols={stockSymbols} />
      <IndicatorSettings />
    </div>
  );
};

export default App;
