const express = require('express');
const app = express();

// NBK Games route
app.get('/nbk-games', (req, res) => {
  res.json({
    game: "Solana",
    status: "active",
    players: 1200
  });
});

// Exchange Rates route
app.get('/exchange-rates', (req, res) => {
  res.json({
    usd: 1,
    eur: 0.92,
    gbp: 0.81,
    ngn: 1500
  });
});

// Default route
app.get('/', (req, res) => {
  res.send('AlphaStore backend is running');
});

// Port setup
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
