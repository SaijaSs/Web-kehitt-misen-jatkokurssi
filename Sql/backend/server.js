const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const cors = require('cors');  

const app = express();
const port = 3000;

// Käytetään CORS-tukea
app.use(cors());  // Tämä mahdollistaa pyyntöjen lähettämisen muista domaineista

// Käytetään JSON-middlewarea POST-datan käsittelyyn
app.use(express.json());

// Palvelin tarjoaa staattisia tiedostoja 'public'-kansiosta
app.use(express.static('public'));  // Tämä rivi lisättävä tähän

// Yhdistä SQLite-tietokantaan
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Tietokantavirhe:', err.message);
    } else {
        console.log('Yhteys SQLite-tietokantaan onnistui.');
    }
});

// Luo taulu, jos sitä ei ole olemassa
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT UNIQUE,
  age INTEGER
)`);

// Luo uusi käyttäjä (Create)
app.post('/users', (req, res) => {
    const { name, email, age } = req.body;
    if (!name || !email || age === undefined) {
        return res.status(400).json({ error: 'Nimi, sähköposti ja ikä vaaditaan' });
    }

    const query = `INSERT INTO users (name, email, age) VALUES (?, ?, ?)`;
    db.run(query, [name, email, age], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID, name, email, age });
    });
});

// Hae kaikki käyttäjät (Read)
app.get('/users', (req, res) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Päivitä käyttäjän tiedot (Update)
app.put('/users/:id', (req, res) => {
    const { name, email, age } = req.body;
    const { id } = req.params;

    if (!name || !email || age === undefined) {
        return res.status(400).json({ error: 'Nimi, sähköposti ja ikä vaaditaan' });
    }

    const query = `UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?`;
    db.run(query, [name, email, age, id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Käyttäjää ei löytynyt' });
        }
        res.json({ message: 'Käyttäjän tiedot päivitetty', id });
    });
});

// Poista käyttäjä (Delete)
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    db.run(`DELETE FROM users WHERE id = ?`, id, function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Käyttäjää ei löytynyt' });
        }
        res.json({ message: 'Käyttäjä poistettu', id });
    });
});

// Käynnistä palvelin
app.listen(port, () => {
    console.log(`Palvelin käynnissä osoitteessa http://localhost:${port}`);
});
