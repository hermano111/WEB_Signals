// src/components/IndicatorSettings.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const IndicatorSettings = ({ stockData, indicators }) => {
  const data = {
    labels: stockData.map(data => data.date),
    datasets: [
      {
        label: 'Price',
        data: stockData.map(data => data.close),
        borderColor: 'blue',
        borderWidth: 2,
      },
      // Añadir más conjuntos de datos para SMA, EMA, etc.
    ],
  };

  return (
    <div>
      <h2>Price Chart with Indicators</h2>
      <Line data={data} />
    </div>
  );
};

export default IndicatorSettings;
