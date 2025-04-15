# Vaihe 2 - Perusrunko ja päätoiminnallisuudet

## Ympäristö

## Käyttöliittymä / Front-end

Tässä linkki koodiin: 

- Komponetit: Frontend/src/Components
- Sivut: Frontend/src/pages
- Api.jsx: Frontend/src/api
- Tyylitiedostot: Frontend/src/styles
- App.jsx: Frontend/src

Projektin käyttöliittymä on toteutettu Reactilla, joka tarjoaa komponenttipohjaisen arkkitehtuurin. Frontendissä on käytetty useita komponentteja, joita renderöidään eri sivuilla reityksen kautta. 

Kaikki sivut on yhdistetty App.jsx:ssä, jossa määritellään reitit react-router-dom-kirjaston avulla. 

Frontendin ja backendin välinen kommunikointi hoidetaan api.jsx-tiedoston avulla. Tiedosto sisältää kaikki fetch-kutsut REST-rajapintaan:

- Hae kaikki keskustelut: getThreads

- Hae suosituimmat: getPopularThreads

- Hae yksittäinen keskustelu ja sen kommentit: getThreadById

- Lisää uusi keskustelu: createThread

- Lisää kommentti keskusteluun: addCommentToThread

## Taustajärjestelmä / Back-end

Tässä linkki koodiin: 

Projektissa taustajärjestelmä on toteutettu Node.js:n päällä käyttäen Express.js-kirjastoa HTTP-palvelumen rakentamiseen ja SQLite3-tietokantaa tietojen tallennukseen. Backend toimii välikerroksena frontendin ja tietokannan välillä. 

Backend käynnistää Express-palvelimen ja määrittelee REST-rajapintoja (GET ja POST) joiden avulla frontend voi kommunikoida tietokannan kanssa.

Backendin tärkeimmät reitit:

| Reitti	|HTTP|	Kuvaus|
|----|-----|-----|
|/threads	|GET|	Hakee kaikki keskustelut tietokannasta|
|/threads/popular|	GET|	Hakee keskustelut, joilla on eniten kommentteja|
|/threads/:id	|GET	|Hakee yksittäisen keskustelun ja sen kommentit|
|/threads|	POST	|Lisää uuden keskustelun|
|/threads/:id/comments	|POST|	Lisää uuden kommentin tiettyyn keskusteluun|
|threads/:id/comments|	GET	|Hakee kaikki kommentit tietystä keskustelusta||



## Tietokanta

Tässä linkki koodiin: 

Tietokantaa tässä projektissa tarvittiin keskustelujen ja kommenttien tallentamiseen sekä sivuston sivujen "Suosituimmat", "Uusimmat" ja "Kaikki" rakentamiseen. 

Projektissa on rakennettu tietokanta käyttämällä SQLite-tietokantaa, joka tallennetaan tiedostoon database.db. Tietokannassa on kaksi taulua: keskustelut (threads) ja kommentit (comments). Nämä alla: 


CREATE TABLE IF NOT EXISTS threads ( <br>
      id INTEGER PRIMARY KEY AUTOINCREMENT, <br>
      title TEXT NOT NULL, <br>
      content TEXT NOT NULL, <br>
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP<br>
    );

CREATE TABLE IF NOT EXISTS comments ( <br>
      id INTEGER PRIMARY KEY AUTOINCREMENT, <br>
      thread_id INTEGER, <br>
      content TEXT NOT NULL, <br>
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP, <br>
      FOREIGN KEY(thread_id) REFERENCES threads(id) <br>
    );

 Threads-taulu:
 - keskustlun otsikon 
 - keskustelun sisällön
 - aikaleiman
 - jokaisella kesksutelulla on yksilöllinen id

 Comments-taulu :
 - kommentin sisällön
 - aikaleiman
 - viittaa kesksuteluun (thread_id)   

 #### Yhteys front-endin ja tietokannan välillä

 Tässä projektissa frontendin (React) ja tietokannan välissä välikerroksena käytettiin Expressiä. Tässä linkki api.jsx:n koodiin, jossa funktiot HTTP-pyyntöjen tekemiseen: 


## Perusrunko ja arkkitehtuuri

Sovellus on rakennettu selkeästi kahteen pääosaan: frontend ja backend. Nämä toimivat yhdessä REST-rajapinnan avulla.

 ### Frontend (React)
Käyttöliittymä on toteutettu Reactilla, joka on komponenttipohjainen JavaScript-kirjasto. Frontend sisältää useita uudelleenkäytettäviä komponentteja, jotka on jaettu loogisesti omiin tiedostoihinsa. Reititys on toteutettu react-router-dom-kirjastolla, mikä mahdollistaa monisivuisen SPA-rakenteen (Single Page Application).

### Backend (Node.js + Express)
Taustajärjestelmä on toteutettu Node.js:llä ja Expressillä. Se tarjoaa REST-rajapinnan, jonka kautta frontend voi hakea ja lähettää tietoa. Backend käsittelee pyynnöt, suorittaa tarvittavat tietokantakyselyt ja palauttaa vastaukset JSON-muodossa.

### Tietokanta (SQLite)
Tietokantana toimii SQLite, joka säilyttää keskustelut ja kommentit. Tietokanta alustetaan automaattisesti ja sen rakenne koostuu kahdesta päätaulusta: threads ja comments.

### Kommunikointi ja rakenne
Frontend käyttää fetch-kutsuja tai erillistä api.jsx-tiedostoa viestiäkseen backendin kanssa. Tämä rakenne mahdollistaa selkeän erottelun käyttöliittymän ja palvelinlogiikan välillä, sekä helpottaa projektin jatkokehitystä.

Koko sovellus on helposti siirrettävissä pilviympäristöön, kuten Azure App Serviceen, missä portit ja asetukset voidaan määrittää ympäristömuuttujien kautta.

## Toiminnallisuudet

Sivuston tarkoituksena on tarjota yksinkertainen keskustelualusta, jossa käyttäjät voivat tarkastella, aloittaa ja kommentoida keskusteluja. Projektin vaihe 2:ssa toteutettiin vaihe 1:ssä suunnitellut toiminnallisuudet. 

### Etusivu
Etusivulla käyttäjälle näytetään karuselli suosituimmista kesksuteluista ja navigointimahdollisuudet muihin osiin sovellusta.

### Uusien keskustelujen aloittaminen
Käyttäjä voi aloittaa uuden keskustelun täyttämällä lomakkeen, jossa syötetään otsikko ja sisältö. Uusi keskustelu tallennetaan tietokantaan, ja se näkyy automaattisesti etusivulla ja soveltuvissa keskustelulistoissa.

### Kaikki keskustelut -näkymä
Täällä käyttäjä voi selata kaikkia keskusteluja, jotka haetaan backendistä aikajärjestyksessä uusimmat ensin.

### Suosituimmat keskustelut
Näyttää listan keskusteluista, joilla on eniten kommentteja. Tämä tieto lasketaan backendissä SQL-kyselyn avulla ja palautetaan frontendille.

### Uusimmat kesksutelut 
Näyttää listan keskusteluista, jotka on viimeisimpänä lisätty sivustolle. Tämä tieto lasketaan bacnendissä SQL-kyselyn avulla ja palautetaan frontendille.

### Keskustelun tarkastelu
Käyttäjä voi klikata keskustelua ja siirtyä keskustelusivulle, jossa näkyy keskustelun otsikko ja sisältö sekä kaikki siihen liittyvät kommentit.

### Kommentin lisääminen
Käyttäjä voi lisätä uuden kommentin yksittäiseen keskusteluun. Kommentti tallennetaan tietokantaan, ja sen jälkeen se päivittyy näkyviin ilman sivun uudelleenlatausta.

### Navigointi ja sivut
Sovelluksessa on eri sivut, kuten:

- Kaikki keskustelut

- Suosituimmat

- Uusimmat

- Meistä-sivu, jossa esitellään projektin taustaa

- Aloita keskustelu -sivu uuden keskustelun lisäämiseen

## Koodin laatu ja dokumentointi

## Testaus ja virheenkästitely

## Käyttöliittymä ja vuorovaikutus