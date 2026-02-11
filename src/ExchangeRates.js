import React, { useEffect, useState } from 'react';

function ExchangeRates() {
  const [rates, setRates] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/exchange-rates`)
      .then(res => res.json())
      .then(setRates)
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Exchange Rates (Base EUR)</h2>
      {rates ? (
        <table border="1">
          <thead>
            <tr>
              <th>Currency</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(rates.rates).map(([currency, rate]) => (
              <tr key={currency}>
                <td>{currency}</td>
                <td>{rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading exchange rates...</p>
      )}
    </div>
  );
}

export default ExchangeRates;
