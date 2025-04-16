# Vaihe 2 - Perusrunko ja päätoiminnallisuudet

Projektin Vaihe 2:ssa esitellään valmis tuote eli nettisivut. Projektin aiheena on rakentaa kesksutelupalsta, jonne käyttäjät voivat aloittaa keskusteluja, kommentoida keskusteluja ja selata keskusteluja suosituimmat- ja uusimmat kategorioiden mukaan. 

## Ympäristö

Tässä projektissa sovellus koostuu kahdesta pääosasta: frontendistä ja backendistä, jotka on sijoitettu eri ympäristöihin Microsoft Azuren palveluissa. Versionhallinta ja julkaisuprosessi hoidetaan GitHubin avulla.

### Frontend – Azure Static Web Apps

Linkki sovellukseeen: https://red-pond-0ce91a710.6.azurestaticapps.net

Sovelluksen käyttöliittymä (frontend) on toteutettu Reactilla ja julkaistu Microsoft Azuren Static Web Apps -palveluun. Static Web Apps mahdollistaa nykyaikaisen frontend-sovelluksen helpon ja nopean julkaisun sekä automaattiset CI/CD-päivitykset GitHubin kautta. Projektissa hyödynnetään Azure Static Web Appsin ominaisuuksia, kuten:

- automaattinen build ja deploy GitHub-repositorion main-haaraan tehtyjen muutosten perusteella
- käyttäjän tekemien pyyntöjen uudelleenohjaus React-sovellukselle staticwebapp.config.json-tiedoston avulla

### Backend – Azure App Service

Linkki backendiin: https://projekti-backend-ezg5g3cwengphuby.centralus-01.azurewebsites.net/

Sovelluksen taustajärjestelmä (backend) on Node.js-pohjainen palvelin, joka ajetaan Azuren App Service -ympäristössä. Backendin yhteydessä sijaitsee SQLite-tietokanta, joka tallennetaan palvelimen tiedostojärjestelmään. 

Backendin rajapintaa hyödynnetään esimerkiksi keskustelujen hallintaan. Sovellus on konfiguroitu niin, että frontendin tekemät API-kutsut osoittavat App Servicessä pyörivään backend-palvelimeen.

### Versionhallinta ja CI/CD – GitHub

Linkki versioon: https://github.com/SaijaSs/Web-kehitt-misen-jatkokurssi/tree/Ver10.01

Projektityö löytyy polusta Projektityö/Projekti

*(Huom! Repon versiosta Ver10.01 puuttuu dokumentaation viimeisimmät versiot - nämä jaan ItsLearningin kautta Ver11.0!)*



Projektissa hyödynnetään GitHubia versionhallintaan sekä jatkuvan integraation (CI) ja jatkuvan julkaisun (CD) automatisointiin. GitHub Actions -toiminnallisuuden avulla on määritelty kaksi erillistä workflow-tiedostoa: toinen frontendille ja toinen backendille. Frontendin julkaisu tapahtuu automaattisesti Azure Static Web Apps -palveluun aina, kun muutoksia tehdään main-haaraan. Vastaavasti Node.js-pohjainen backend julkaistaan automaattisesti Azure App Serviceen main_projekti-backend.yml-tiedoston määrittämän työnkulun kautta

## Käyttöliittymä / Front-end

Projektin käyttöliittymä on toteutettu Reactilla, joka tarjoaa komponenttipohjaisen arkkitehtuurin. Frontendissä on käytetty useita komponentteja, joita renderöidään eri sivuilla reityksen kautta. 

Kaikki sivut on yhdistetty App.jsx:ssä, jossa määritellään reitit react-router-dom-kirjaston avulla. 

Frontendin ja backendin välinen kommunikointi hoidetaan api.jsx-tiedoston avulla. Tiedosto sisältää kaikki fetch-kutsut REST-rajapintaan:

- Hae kaikki keskustelut: getThreads

- Hae suosituimmat: getPopularThreads

- Hae yksittäinen keskustelu ja sen kommentit: getThreadById

- Lisää uusi keskustelu: createThread

- Lisää kommentti keskusteluun: addCommentToThread

Tässä linkki koodiin: 
https://github.com/SaijaSs/Web-kehitt-misen-jatkokurssi/tree/Ver10.01/Projektity%C3%B6/Projekti/Frontend

Alla tarkemmin linkit front-endin eri osiin.

- **Komponetit**: Frontend/src/Components <br>
https://github.com/SaijaSs/Web-kehitt-misen-jatkokurssi/tree/Ver10.01/Projektity%C3%B6/Projekti/Frontend/src/Components
- **Sivut**: Frontend/src/pages<br>
https://github.com/SaijaSs/Web-kehitt-misen-jatkokurssi/tree/Ver10.01/Projektity%C3%B6/Projekti/Frontend/src/pages
- **Api.jsx**: Frontend/src/api/api.jsx<br>
https://github.com/SaijaSs/Web-kehitt-misen-jatkokurssi/blob/Ver10.01/Projektity%C3%B6/Projekti/Frontend/src/api/api.jsx
- **Tyylitiedostot**: Frontend/src/styles<br>
https://github.com/SaijaSs/Web-kehitt-misen-jatkokurssi/tree/Ver10.01/Projektity%C3%B6/Projekti/Frontend/src/styles
- **App.jsx**: Frontend/src<br>
https://github.com/SaijaSs/Web-kehitt-misen-jatkokurssi/blob/Ver10.01/Projektity%C3%B6/Projekti/Frontend/src/App.jsx



## Taustajärjestelmä / Back-end

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
<br>

Tässä linkki koodiin: https://github.com/SaijaSs/Web-kehitt-misen-jatkokurssi/tree/Ver10.01/Projektity%C3%B6/Projekti/Backend

Tarkemmin server.js -tiedostoon: 
https://github.com/SaijaSs/Web-kehitt-misen-jatkokurssi/blob/Ver10.01/Projektity%C3%B6/Projekti/Backend/server.js

## Tietokanta

Tietokantaa tässä projektissa tarvittiin keskustelujen ja kommenttien tallentamiseen sekä sivuston sivujen "Suosituimmat", "Uusimmat" ja "Kaikki" rakentamiseen. 

 Tässä projektissa frontendin (React) ja tietokannan välissä välikerroksena käytettiin Expressiä. 

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

- Etusivu

  - Etusivulla käyttäjälle näytetään karuselli suosituimmista kesksuteluista ja navigointimahdollisuudet muihin osiin sovellusta.

- Uusien keskustelujen aloittaminen

  - Käyttäjä voi aloittaa uuden keskustelun täyttämällä lomakkeen, jossa syötetään otsikko ja sisältö. Uusi keskustelu tallennetaan tietokantaan, ja se näkyy automaattisesti etusivulla ja soveltuvissa keskustelulistoissa.

- Kaikki keskustelut -näkymä
  - Täällä käyttäjä voi selata kaikkia keskusteluja, jotka haetaan backendistä aikajärjestyksessä uusimmat ensin.

- Suosituimmat keskustelut
  - Näyttää listan keskusteluista, joilla on eniten kommentteja. Tämä tieto lasketaan backendissä SQL-kyselyn avulla ja palautetaan frontendille.

- Uusimmat keskustelut 
  - Näyttää listan keskusteluista, jotka on viimeisimpänä lisätty sivustolle. Tämä tieto lasketaan bacnendissä SQL-kyselyn avulla ja palautetaan frontendille.

- Keskustelun tarkastelu
  - Käyttäjä voi klikata keskustelua ja siirtyä keskustelusivulle, jossa näkyy keskustelun otsikko ja sisältö sekä kaikki siihen liittyvät kommentit.

- Kommentin lisääminen
  - Käyttäjä voi lisätä uuden kommentin yksittäiseen keskusteluun. Kommentti tallennetaan tietokantaan, ja sen jälkeen se päivittyy näkyviin ilman sivun uudelleenlatausta.

- Navigointi ja sivut
  - Sovelluksessa on eri sivut, kuten:

  - Kaikki keskustelut

  - Suosituimmat

  - Uusimmat

  - Meistä-sivu, jossa esitellään projektin taustaa

  - Aloita keskustelu -sivu uuden keskustelun lisäämiseen

## Koodin laatu ja dokumentointi

Projektissa koodin laatimisessa on käytetty apuna ChatGPT:tä. 

Fronendissä on käytetty Reactia ja pyritty rakentamaan selkeä projekti käyttämällä komponentteja, komponenttikohtaisia tyylitiedostoja ja rakennettu sivustot omaan kansioon. Koodia pyritty kommentoimaan ChatGPT:n avulla. 

Backendissä yksinkertainen rakenne ja pyritty kommentoimaan koodia tarvittavin osin. 

Versionhallintaa ylläpidetty GitHubissa ja luotu riittävästi tageja/julkaisuja projektin eri vaiheissa versionhallinnan ja virhetilanteiden hallitsemiseksi. 

## Testaus ja virheenkästitely

Sovellukselle toteutettiin testikattaus hyödyntäen sekä yksikkötestausta että päätekäyttäjän näkökulmasta tehtäviä end-to-end (E2E) testejä. Testauksen tavoitteena oli varmistaa tärkeimpien komponenttien oikea toiminta, virheiden asianmukainen käsittely ja käyttöliittymän luotettavuus eri käyttötilanteissa.

### Yksikkötestaus 

https://github.com/SaijaSs/Web-kehitt-misen-jatkokurssi/tree/Ver10.01/Projektity%C3%B6/Projekti/Frontend/Tests_unit

Yksikkötestit toteutettiin Vitest- ja React Testing Library -kirjastoilla.
- Aloita: Lomake toimii oikein; virheet näytetään käyttäjälle.

- Header: Renderöityy ja valikko toimii.

- Homepage: Kaikki osat renderöityvät; valikko toimii.

- KommenttiLomake: Lähetys päivittää tilan; virhe tulostuu konsoliin.

- Suositkeskustelu: Fetch toimii; virheet käsitellään siististi.

### End-to-End (E2E) testaus

https://github.com/SaijaSs/Web-kehitt-misen-jatkokurssi/tree/Ver10.01/Projektity%C3%B6/Projekti/Frontend/Tests_e2e

E2E-testit tehtiin Playwrightin avulla, jotta voitiin varmistaa koko käyttöliittymän toimivuus oikeassa selainympäristössä. Testeissä simuloitiin käyttäjän vuorovaikutuksia kuten:

- Keskustelun luominen: 
  - Käyttäjä täyttää lomakkeen, lähettää uuden keskustelun ja varmistaa, että se näkyy uudella sivulla.

- Keskustelujen selaus: 
  - Käyttäjä navigoi keskustelulistaan, avaa keskustelun ja tarkistaa, että otsikko ja sisältö näkyvät oikein.

- Kommentin lisääminen: 
  - Käyttäjä täyttää kommenttikentän, lähettää kommentin ja tarkistaa sen näkyvyyden keskustelunäkymässä.

### Virheenkäsittely

  Sovelluksen virheenkäsittelyä testattiin yksikkö- ja E2E-testeissä tarkoituksellisesti aiheuttamalla virhetilanteita. Esimerkiksi:
- API-kutsujen epäonnistumiset (createThread, fetch) tuottavat informatiivisia virheilmoituksia.
- KommenttiLomake käsittelee fetch-virheitä tulostamalla ne konsoliin, ilman sovelluksen kaatumista.
- Virhetilanteet eivät laukaise vääriä toimintoja, kuten tilapäivityksiä tai navigointia.

## Käyttöliittymä ja vuorovaikutus

Käyttöliittymä perustuu Figmassa tehtyyn protoon: https://www.figma.com/proto/kbhPlCEbCQhmUgvMvTKp0X/Keskustelu?node-id=1-52&p=f&t=3cNSKKlghWWRjCap-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A52

Toteutunut käyttöliittymä vastaa pienin muutoksin suunnitelmaa. Käyttöliittymä on yksinkertainen ja selkeä. Käyttäjäkokemukseen on pyritty vaikuttamaan positiivisesti rauhallisella ja yhteen sointuvalla värimaailmalla ja läpi sovelluksen toistuvilla elementeillä, kuten kuvakkeilla ja muotoilun yhteneväisyydellä eri sivuilla. 

Navigoitavuutta paranettu hampurilaisvalikolla, jossa keskitetysti kaikki sivuston toiminnot sekä yläpalkin/headerin navigointipainikkeilla. Logosta pääsee etusivulle, mikä lisää käytettävyyttä. 

Lomakkeet tarjoavat palautetta käyttäjälle onnistuneesta tai epäonnistuneesta toiminnosta. Epäonnistuneet API-kutsut tuottavat virheilmoituksia joko käyttöliittymässä tai konsolissa, mutta eivät riko käyttöliittymän toimintaa.

Vuorovaikutus on sujuvaa: toiminnot, kuten kommentin lähetys ja keskustelujen lataus, päivittävät tilaa odotetusti. Virhetilanteet on käsitelty niin, etteivät ne estä sovelluksen käyttöä.