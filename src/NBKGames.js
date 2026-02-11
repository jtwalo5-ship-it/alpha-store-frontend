import React, { useEffect, useState } from 'react';

function NBKGames() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/nbk-games`)
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>NBK Games</h2>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading Solana connection...</p>
      )}
    </div>
  );
}

export default NBKGames;
