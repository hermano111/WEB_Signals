// src/components/SignalChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const SignalChart = ({ stockData, indicators }) => {
  const data = {
    labels: stockData.map(data => data.date),
    datasets: [
      {
        label: 'Precio',
        data: stockData.map(data => data.close),
        borderColor: 'blue',
        borderWidth: 2,
      },
      // Añadir datasets para SMA, EMA, etc.
    ],
  };

  return (
    <div>
      <h2>Gráfico de Precio con Indicadores</h2>
      <Line data={data} />
    </div>
  );
};

export default SignalChart;
