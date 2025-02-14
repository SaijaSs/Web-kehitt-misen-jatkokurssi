const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Palvellaan staattiset tiedostot (CSS ja JS)
app.use(express.static(__dirname));

// Reitti, joka palvelee index.html tiedoston
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Käynnistetään palvelin
app.listen(port, () => {
  console.log(`Palvelin käynnistyi portissa ${port}`);
});
