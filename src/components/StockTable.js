// src/components/StockTable.js
import React, { useState, useEffect } from 'react';
import { fetchStockData } from '../services/apiService';

const StockTable = ({ stockSymbols }) => {
  const [data, setData] = useState([]);
  const [parameters, setParameters] = useState({
    smaPeriod: 20,
    emaPeriod: 20,
    rsiThreshold: 30,
    adxWindow: 14,
  });

  useEffect(() => {
    const loadStockData = async () => {
      const promises = stockSymbols.map(symbol => fetchStockData(symbol));
      const results = await Promise.all(promises);
      setData(results.map(res => res.data));
    };
    loadStockData();
  }, [stockSymbols, parameters]);

  const handleParameterChange = (e) => {
    const { name, value } = e.target;
    setParameters(prevParams => ({ ...prevParams, [name]: value }));
  };

  return (
    <div>
      <h1>Stock Signals</h1>
      <div>
        <label>SMA Period: </label>
        <input type="number" name="smaPeriod" value={parameters.smaPeriod} onChange={handleParameterChange} />
        
        <label>EMA Period: </label>
        <input type="number" name="emaPeriod" value={parameters.emaPeriod} onChange={handleParameterChange} />
        
        <label>RSI Threshold: </label>
        <input type="number" name="rsiThreshold" value={parameters.rsiThreshold} onChange={handleParameterChange} />
        
        <label>ADX Window: </label>
        <input type="number" name="adxWindow" value={parameters.adxWindow} onChange={handleParameterChange} />
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Stock</th>
            <th>SMA Signal</th>
            <th>EMA Signal</th>
            <th>RSI Signal</th>
            <th>ADX Signal</th>
          </tr>
        </thead>
        <tbody>
          {data.map(stock => (
            <tr key={stock['Meta Data']['2. Symbol']}>
              <td>{stock['Meta Data']['2. Symbol']}</td>
              {/* Indicadores de señal de compra/venta */}
              <td>{/* Lógica para señal SMA */}</td>
              <td>{/* Lógica para señal EMA */}</td>
              <td>{/* Lógica para señal RSI */}</td>
              <td>{/* Lógica para señal ADX */}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
