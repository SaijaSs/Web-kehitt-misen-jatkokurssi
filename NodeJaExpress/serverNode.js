const http = require('http');
const fs = require('fs');
const path = require('path');

// Määritetään portti
const port = 3000;

// Luodaan palvelin
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Palvellaan singlepagesite.html tiedosto
    const filePath = path.join(__dirname, 'singlepagesite.html');
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Virhe tiedoston lukemisessa.');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    });
  } else {
    // Jos polku ei ole määritelty, palvele 404
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Ei löytynyt');
  }
});

// Palvelimen käynnistys
server.listen(port, () => {
  console.log(`Palvelin käynnistyi portissa ${port}`);
});
