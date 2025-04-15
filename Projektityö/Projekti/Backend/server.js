const express = require('express');
const cors = require('cors'); 
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

// Jos haluat rajoittaa pyyntöjen lähteet, käytä tätä vaihtoehtoa
app.use(cors({
    origin: 'http://localhost:5173',  // Frontendin osoite
 }));

// Middleware
app.use(express.json());

// SQLite3-tietokannan määrittely
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Tietokannan avaaminen epäonnistui:', err.message);
  } else {
    console.log('Tietokanta yhdistetty.');
  }
});

// Perusreitti
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Käynnistä palvelin
app.listen(port, () => {
  console.log(`Serveri käynnissä portissa ${port}`);
});

// Luo taulut tietokantaan, jos niitä ei ole olemassa
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS threads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      thread_id INTEGER,
      content TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(thread_id) REFERENCES threads(id)
    );
  `);
});


// Hae kaikki keskustelut (uusimmat ensin)
app.get('/threads', (req, res) => {
    db.all('SELECT * FROM threads ORDER BY created_at DESC', [], (err, rows) => {
      if (err) {
        return console.error(err.message);
      }
      res.json(rows);  // Palautetaan keskustelut aikajärjestyksessä uusimmat ensin
    });
  });

// Hae suosituimmat keskustelut (eniten kommentteja)
app.get('/threads/popular', (req, res) => {
  const query = `
    SELECT threads.id, threads.title, COUNT(comments.id) as comment_count
    FROM threads
    LEFT JOIN comments ON threads.id = comments.thread_id
    GROUP BY threads.id
    ORDER BY comment_count DESC
    LIMIT 5;
  `;

  db.all(query, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    res.json(rows);  // Palautetaan suosituimmat keskustelut
  });
});

// Hae yksittäinen keskustelu ja kommentit
app.get('/threads/:id', (req, res) => {
  const { id } = req.params;

  console.log("Hakemassa keskustelua ID:llä:", id); // Lisää tämä rivi

  db.get('SELECT * FROM threads WHERE id = ?', [id], (err, thread) => {
    if (err) {
      return console.error(err.message);
    }
    if (!thread) {
      return res.status(404).send('Keskustelua ei löytynyt');
    }

    // Hae kommentit
    db.all('SELECT * FROM comments WHERE thread_id = ? ORDER BY created_at DESC', [id], (err, comments) => {
      if (err) {
        return console.error(err.message);
      }
      res.json({ thread, comments });
    });
  });
});

// Lisää uusi keskustelu
app.post('/threads', (req, res) => {
  const { title, content } = req.body;
  db.run('INSERT INTO threads (title, content) VALUES (?, ?)', [title, content], function (err) {
    if (err) {
      return console.error(err.message);
    }
    
    res.status(201).json({ id: this.lastID, title, content });
  });
});

// Lisää kommentti keskusteluun
app.post('/threads/:id/comments', (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  db.run('INSERT INTO comments (thread_id, content) VALUES (?, ?)', [id, content], function (err) {
    if (err) {
      return console.error(err.message);
    }
    res.status(201).json({ id: this.lastID, thread_id: id, content });
  });
});

// Hae kommentit tietyltä keskustelulta
app.get('/threads/:id/comments', (req, res) => {
  const { id } = req.params;

  // Hae kommentit keskustelulle
  db.all('SELECT * FROM comments WHERE thread_id = ? ORDER BY created_at DESC', [id], (err, comments) => {
    if (err) {
      return console.error(err.message);
    }
    res.json(comments);  // Palautetaan kommentit
  });
});