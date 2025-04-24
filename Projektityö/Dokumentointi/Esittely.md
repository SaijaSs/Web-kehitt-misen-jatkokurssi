# Vaihe 4 - Lumouksen lukijat -nettisivujen esittely

Projektin vaiheessa 4 esitellään projektia kokonaisuudessaan alusta loppuun. 

## Projektin yleiskatsaus

Projekti oli osa Web-kehittämisen jatkokurssia. Projektin tarkoituksen oli luoda toimivat verkkosivut. Projekti oli jaettu neljään vaiheeseen. Vaihe 1 sisälsi nettisivujen suunnittelun, kuten käyttötapausten ja -tilanteiden suunnittelu, käyttäjäpersoonien määrittely ja mm. teknologioiden valinta. Vaihe 2 sisälsi itse nettisivujen rakentamisen ja tämän vaiheen dokumentoinnin. Vaihe 3 oli vapaaehtoinen jatkokehityksen pohtimiseen tarkoitettu. Vaiheessa 4 esitellään valmis projekti ja sen kehitysprosessi ja reflektoidaan lopputulosta. 

Alla linkit aiempiin, toteutuneisiin vaiheisiin:

[Vaihe 1](./Vaihe1.md) <br>
[Vaihe 2](./Vaihe%202.md)

Tässä projektissa aiheeksi valikoitui keskustelupalstan rakentaminen, joka on suunnattu fantasiakirjallisuuden ystäville. Ajankäytöllisistä syistä sivuston toiminnallisuudet rajattiin vielä kapeiksi jo suunnitteluvaiheessa ja päätoiminnallisuuksina on keskustelun lisääminen ja niiden kommentointi sekä keskustelujen selaaminen. 

## Käyttötapaukset projektissa

Tässä kappaleessa käsitellään käyttötapauksia, jotka määriteltiin vaiheessa 1 - mitkä käyttötapaukset toteutettiin?

Alla linkki määriteltyihin käyttötapauksiin:

[Käyttötapaukset](./Vaihe1.md#käyttötapaukset-ja--tilanteet)

Projektin suunnitteluvaiheessa määriteltiin kaksi käyttötapausta ja -tilannetta, jotka molemmat toteutuivat valmiissa projektissa.

| Käyttötapaus | Toteutus | 
|-----|-----|
 | Keskusteluun osallistuminen | Kyllä | 
 | Keskustelun aloittaminen | Kyllä | 


 ### Keskusteluun osallistuminen

| Toiminto | Videolla | 
|-----|-----| 
|Keskustelujen selaaminen, avaaminen ja kommenttien lukeminen| 0.00 - 0.47 |
|Kommentointi | 0.47 - 1.55 |

 Sivustolla käyttäjä pystyy selaamaan aloitettuja keskusteluja kategorioiden "Kaikki", "Suosituimmat" ja "Uusimmat" mukaan. Hän pystyy avaamaan aloitetut keskutelut, näkee jo jätetyt kommentit aiheeseen ja voi lisätä itse kommentin mihin tahansa keskusteluun. Kommentti tallentuu keskusteluun oikeaan järjestykseen ja näkyy kaikille sivuston käyttäjille.

### Keskustelun aloittaminen

| Toiminto | Videolla | 
|-----|-----| 
| Keskustelun aloittaminen | 1.55 - 2.28|
| Keskustelun tallentuminen "Uusimmat" ja "Kaikki" -katergorioihin | 2.28 - 2.44 |


Sivustolla käytättäjä voi aloittaa uuden keskustelun, jonne hän voi navigoida etusivulta "Uusi keskustelu" osiosta tai hampurilaisvalikosta "Aloita keskustelu"-kohdasta. Täältä avautuu lomake, jonne käyttäjä kirjoittaa keskustelun aiheen ja ensimmäisen kommentin keskusteluun. Käyttäjä vahvistaa tiedot oikeiksi ja tallentaa keskustelun, jolloin hän ohjautuu aloittamansa keskustelun sivulle. Keskustelu tallentuu sivustolle "Kaikki"-osioon sekä "Uusimmat" osioon. 


## Tekninen toteutus

Tässä kappaleessa käydään läpi projektissa käytetyt teknologiat, arkkitehtuuri ja keskeisten ominaisuuksien toteutus. 

#### Frontend

Käyttöliittymän rakentamisessa on käytetty Reactia ja komponenttipohjaista kehitystä. Koska frontend on rakennettu pieniin, itsenäisiin komponentteihin, on sovelluksen helpommin hallittava ja skaalautuva. Esimerkiksi keskustelut, kommentit ja lomakkeet on toteutettu omilla komponenteillaan. 

Sovelluksen frontend on tuotu **Azure Static Web Apps** -palveluun. Koodin hallinta on integroitu GitHubiin, ja Azure Static Web Apps huolehtii jatkuvasta sovelluksen toimituksesta ja käytöstä. 

#### Backend

Backendissä on käytetty Node.js -ympäristössä käyttäen Express.js-kehystä. API on rakennettu REST-periaatteiden mukaan. API:lle on selkeästi määritellyt reitit keskustelujen ja kommenttien hakemiseen, lisäämiseen ja päivittämiseen. 

Backendin palvelin on sijoitettu **Azure App Serviceen** ja koodi on liitetty GitHubiin, jolloin käyttöönottoprosessi on automatisoitu ja helppo hallita GitHub Actionsin avulla. 

Backend toimii CORS-middlewarella, joka suojaa API:ta siten, että vain määritellyt frontend-osoitteet voivat käyttää sitä. 

#### Tietokanta

Sovelluksessa käytetään SQLite3-tietokantaa. Tämä valikoitui siksi, että käyttö on yksinkertaista ja soveltuu pienille ja keskikokoisille projekteille. Tietokanta on integroitu Node.js-sovellukseen SQLite3-kirjaston avulla ja siihen tallennetaan keskusteluja ja kommentteja. Tietokannassa on kaksi päätaulua: 
- **threads:** Taulu, jossa säilytetään keskustelujen tiedot.
- **comments:** Taulu, jossa säilytetään kommenttien tiedot.

#### Frontend- ja Backend-rajapinta
Sovelluksen frontend ja backend kommunikoivat REST-rajapinnan kautta. Käyttöliittymä tekee HTTP-pyyntöjä (GET ja POST) backendille keskustelujen ja kommenttien hakemiseksi, lisäämiseksi ja päivittämiseksi. Esimerkiksi, kun käyttäjä lisää kommentin, frontend lähettää POST-pyynnön, jossa se välittää kommentin sisällön backendille. Backend puolestaan käsittelee tämän pyynnön ja tallentaa kommentin tietokantaan.

#### Keskeisten ominaisuuksien toteutus

- **Keskustelujen ja kommenttien hallinta:** Käyttäjät voivat aloittaa uusia keskusteluja, kommentoida ja lukea muiden kommentteja
    - Frontend: Käyttäjä voi luoda uuden keskustelun lomakkeella, joka lähettää POST-pyynnön backendille. Tämän jälkeen keskustelu lisätään tietokantaan ja näkyy käyttöliittymässä
    - Backend: Backend käsittelee keskustelujen ja kommenttien lisäämisen ja hakemisen. 
        - GET /threads: Hakee kaikki keskustelut.

        - GET /threads/:id/comments: Hakee kommentit tietylle keskustelulle.

        - POST /threads/:id/comments: Lisää kommentin tietylle keskustelulle.

- **Suosituimmat keskustelut:** Toiminnallisuus, joka näyttää suosituimmat keskustelut eniten kommentteja saaneiden perusteella.
    - SQL-kysely, joka yhdistää kesksutelut ja kommentit tietokannassa
    - Backend: Keskustelut haetaan /threads/popular -reitillä

- **Uusimmat keskustelut:** Toiminnallisuus, joka näyttää uusimmat keskustelut
    - Backend: Hakee keskustelut ja järjestää ne luomisajankohdan mukaan
        - GET /threads -reitti
    - Frontend: Näyttää viisi uusinta keskustelua
- **Keskustelun ja kommentin lisääminen:** Käyttäjä voi kirjoittaa kommentin keskustelun kommenttikenttään ja lähettää sen
    - Backend: Kommentti lisätään comments-tauluun tietokannassa POST /threads/:id/comments-reitillä. Tämä mahdollistaa keskusteluun osallistumisen ja sen ajantasaisen päivittämisen.

## Kehitysprosessi

### Vaihe 1 - Suunnittelu

Tässä vaiheessa suurimmat päätökset liittyi käyttötapauksiin ja rakennettaviin toiminnallisuuksiin. Alkuun suunnittelin nettisivuihin enemmän toiminnallisuuksia, kuten kirjautumismahdollisuuksia, jolloin olisi mahdollist tallentaa omat keskustelut ja identifioida kommentoijia jne. Käyttötapaukset kuitenkin rajautuivat sitten ajankäyttöä suunnitellessa ja lopputuloksesta tuli realistinen - suunnitellut toiminnallisuudet tulivat osaksi lopullista projektia. 

Jälkikäteen ymmärsin, että projektin kannalta ei olisi haitannut, vaikka suunnitelmassa olisikin ollut toiminnallisuuksia, jotka ei tulekaan lopulliseen projektiin. Olen kuitenkin lopulta tyytyväinen siihen, että osasin suunnitella työn ajankäytön rajoissa ja ymmärsin rajata projektia jo siinä vaiheessa, sillä aika ei tosiasiassa olisi riittänyt alkuperäiseen suunnitelmaan alkuunkaan. 

Teknologioiden valinta oli alkuun hankalaa, sillä asiat on itselle uusia ja outoja. Tavoitteenani oli kuitenkin panostaa projektiin ja halusin opetella yleisesti käytössä olevia teknologioita, joten tästä syystä päädyin Reactiin ja mm. Noden käyttöön. Tietokannan osalta SQLite oli tutumpi luennoilta ja se soveltui projektiin, joten se tuntui sopivalta valinnalta. 

Tässä vaiheessa projektia suunnittelin myös proton nettisivulle, jossa hyödynsin aiemmassa opintojaksossa rakentamaani Figman protoa pohjana. Protossa fantasia-teema näkyy mm. kuvakkeissa ja värimaailma on suunniteltu yhteensointuvaksi ja rauhalliseksi. Halusin pitää proton yksinkertaisena ja selkeänä käyttömukavuuden lisäämiseksi. 

### Vaihe 2 - Toteutus

Tämä vaihe alkoi sillä, että perehdyin eri teknologioihin tarkemmin ChatGPT:n, Copilotin ja luentomateriaalien avulla. Rakensin ajatusta siitä, mistä kannattaa lähteä liikkeelle. Perehtymisen jälkeen sivujen rakentaminen alkoi frontendin rakentamisella ja tarkemmin Reactin komponenttien tekemisellä.

Alkuun hahmottelin, miten koodin rakenne kannattaisi lähteä toteuttamaan, esim. komponenttien sijoitus kansiorakenteeseen, tyylitiedostojen sijoittaminen jne. Projektin alustamisen jälkeen (Vite-työkalulla), lähdin rakentamaan tarvittavia komponentteja suunnitelman mukaisesti ChatGPT:tä apuna käyttäen. Haasteita matkan varrella ilmeni siinä, että React on itselle uusi asia ja kerran jouduin aloittamaan komponenttien tekemisen uudestaan. Projektin edetessä Reactin rakenne ja toimintatapa tuli kuitenkin tutummaksi ja tarvittavat komponentit rakentuivat ja toteutuivat sillä tavalla, kuten halusinkin. Komponenttien ohella loin yleisen tyylitiedoston ja komponenttikohtaiset tyylitiedostot käyttäen mallina laatimaani protoa. Samalla rakensin komponenttimuotoisina sivuja sekä liitin komponentit ja sivut toisiinsa Reactin BrowserRouter-työkalun avulla App.jsx-tiedostoon. 

Tämän jälkeen rakensin backendiä ja tietokantaa. Rakensin backendin REST-rajapinnan ja tietokantayhteyden sekä yhdistin frontendin ja backendin välisen kommunikoinnin. Backend rakentui Node.js ympäristössä Expressiä käyttäen. Backendin kehitysympäristö alustettiin Node.js-projektina, johon asennettiin Express-, SQLite3- ja CORS-kirjastot. Tämän jälkeen rakensin server.js-tiedoston, jossa määriteltiin CORS-middleware käyttöön ja määriteltiin SQLite-tietokannan taulut ja rakennettiin API-reitit keskustelujen ja kommenttien käsittelyyn. Tämän jälkeen luotiin frontendille api.jsx-tiedosto ja sinne tarvittavat funktiot backendin reittien hakemiseen. 

Seuraavana oli testauksen toteuttaminen. Suunnitelmaan oli laadittu yksikkötestausta, E2E-testausta ja käyttäjätestausta. Projektissa toteutui yksikkötestaus komponenteille ja sivuille sekä E2E-testaus. Käyttäjätestaus ei toteutunut ajankäytöllisistä syistä. Alkuun rakensin testauksen paikallisessa ympäristössä, sillä olin projektia paikallisesti kehittänyt tähän asti. Projektin lopussa kokeilin vielä testejä uudestaan ja ne eivät toimineet. Ongelmanratkaisun jälkeen ymmärsin, että täytyi tehdä muutoksia testitiedostoihin, kun projekti oli siirtynyt Azuren ympäristöön ja frontendin ja backendin osoitteet olivat muuttuneet. 

Lopuksi vein projektin Azuren ympäristöihin. Tässä vaiheessa kävin keskustelua ChatGPT:n kanssa, jotta osaisin valita sopivimmat teknologiat Azurelta. Tämän keskustelun perusteella päädyin yhdistämään Azuren Static Web Apps - ja App Service -palvelut, sillä halusin nettisivut kokonaisuudessaan pilviympäristöön. 

Aluksi vein frontendin Azuren Static Web Apps -palveluun ja yhdistin tämän GitHubin repositorioon. Tämän jälkeen lähdin rakentamaan backendia App Serviceen ja yhdistämään koodia GitHubin kautta. Tämä vaihe vaati muutoksia API-reittien suhteen, sillä sivustojen osoitteet oli muuttuneet sekä aikaa vei yhteyksien toimimaan saaminen Gitistä Azurelle sekä tietokannan saaminen pilveen. 

### Vaihe 4

Tässä projektin vaiheessa laadin tämän dokumentaation ja esittelyvideon projektille. 


## Reflektio ja jatkokehitys

Koin projektin itseä haastavaksi ja osittain työssä oli jyrkkäkin oppimiskäyrä, sillä web-kehittäminen on itselle tuttua vain perusteet-kurssilta. Olen tyytyväinen saavutettuun lopputulokseen ja huomasin itseltäni vahvuuden jaksaa pakertaa vaikeidenkin pulmien parissa, kunnes ne ratkeaa. 

Työssä opin hyödyntämään tekoälyä tehokkaasti. Käytin ChatGPT:tä lähes jatkuvana tukena projektin aikana, erityisesti vaiheessa 2 aina koodin rakentamisesta mm. Azuren-palvelujen käyttöönottoon. Koen, että vaikka tekoäly olikin tiiviinä tukena projektissa, opin silti paljon web-kehittämisestä ja voin sanoa, että osaan asiasta paljon enemmän kuin ennen projektin alkua. Projektin aikana opin paljon web-kehittämisen rakentumisesta (frontend, backend, tietokanta, eri palvelinympäristöt jne.) sekä myös esim. Reactin rakentamisesta komponenttimuodossa. Pohdinkin projektin aikana sitä, että mikä on odotus ja vaade nykyisessä työelämässä - onko tärkeämpää osata rakentaa koodia rivi riviltä itse vai ymmärtää laajemmin kokonaisuuksia ja osata hyödyntää tiedonhankintaa tilanteissa, jossa tarvitsee spesifimpää tietoa aiheesta. 

Huomasin projektissa myös sen, että tekoäly ei ole ratkaisu kaikkeen. Useissa vaiheissa projektissa, mm. Azuren ympäristöjen määrittelyssä täytyi itse osata tutkia tiedostoja ja kerätä tietoa sen toiminnasta, jotta osasi ratkaista ongelman tai esim. kysyä oikeita kysymyksiä ChatGPT:ltä ongelman ratkaisemiseksi. Myös frontendin rakentamisen kanssa pelkän tekoälyn avuin ei olisi tullut toimivaa nettisivua, sillä kokonaisuuden hahmottaminen ei aina tekoälyltä onnistu isommissa projekteissa. 

 Nettisivujen toimintavarmuus on välillä puutteellista - esimerkkinä eilen toiminut nettisivu ei toisena päivänä toiminutkaan ja jotkut aiemmin toimineet ominaisuudet välillä lakkasivat toimimasta, vaikka mitään muutoksia ei oltu tehty ja vaativat lisärukkausta toimiakseen jälleen. Osin tähän vaikuttanee Azuren yhteyksien pulmallisuudet, esim. backend lakkasi tätä raporttia laatiessani yllättäen toimimasta ja vaatikin Azurelle CORS-asetusten muuttamista, vaikka aikaisemmin toimi ilman tätä asetusta. Olen oppinut, että web-kehittämisessä tulee pitkin matkaa yllättäviä pulmia vastaan ja asioiden ratkaiseminen ei usein ole suoraviivaista ja vaatii pitkäjänteisyyttä.

 Koen, että lopputulos vastaa hyvin suunnitelmaa niin verkkosivujen toiminnallisuuksien, käytettyjen teknologioiden kuin käyttöliittymänkin osalta. 

**Jatkokehitys**

Projektin jatkokehitys voisi liittyä rekisteröitymistoiminnallisuuden lisäämiseen, mikä edistäisi käyttäjäkokemusta. Myös keskustelujen hakutoiminto olisi hyvä jatkokehitysidea käyttömukavuuden lisäämiseksi. Sivustolle voisi lisätä myös tykkäys-toiminnon kommenteille ja mahdollisuuden poistaa omia keskusteluja ja kommentteja.

Lisäksi voisi pohtia tietokannan muuttamista soveltuvampaan ympäristöön ja myös tietokantaan. Nykyisellä ratkaisulla (SQLite + App Service) voi tuoda ongelmia skaalautuvuuden suhteen ja tietokannan sijoittaminen App Serviceen voi johtaa siihen, että esim. päivityksen yhteydessä tietokannan tiedot katoavat. Mahdollisia vaihtoehtoja voisi olla ChatGPT:n avulla valittuna mm. Azure SQL Database, joka on skaalautuva ja varmuuskopioitu. 


## Tuntiseuranta

Alla koko projektin tuntiseuranta. Yhteensä projektiin kului aikaa 51 h 20 min. 

**VAIHE 1**

| Date   | Used time | Subject                | Outcome |
|:--------|:-----------:|:------------------------:|---------:|
| 20.3.25| 2 h 30 min   | Dokumentoinnin luominen, ohjeisiin perehtyminen ja ideointi | Tuntiseuranta- ja Vaihe 1-dokumentit, suunniteltu alustavasti nettisivujen sisältöä, käyttäjäprofiilien luomista  |
|26.3.25| 2 h 30 min |Käyttötapaukset ja -tilanteet, prototyyppi |Käyttötapauksien ja -tilanteisiin perehtyminen, niiden kirjoittaminen, prototyypin työstäminen |
|31.3.25| 5 h 45 min| Proto, käyttötapaukset ja -tilanteet, tietoarkkitehtuuri ja tekninen suunnittelu | Proto valmis, käyttötapaukset ja -tilanteet valmiita. Perehdytty tietoarkkitehtuuriin ja tekniseen suunnitteluun ja laadittu suunnitelmaa nettisivuille |
|1.4.25| 1 h 30 min |Projektinhallinta ja käyttäjätestaus |Projektinhallinta ja käyttäjä- ja sovellustestaussuunnitelmat valmiit |

Used time: 12 h 15 min

**VAIHE 2**
| Date   | Used time | Subject                | Outcome |
|:--------|:-----------:|:------------------------:|---------:|
|1.4.25| 15 min | Dokumentoinnin luominen, ohjeisiin perehtyminen | Vaihe 2-dokumentti luotu |
|4.4.25| 3 h|Reactin aloittaminen | luotu komponentteja ja tyylisivuja |
|7.4.25 | 5 h | Reactin uudelleenaloitus, etusivu | Luotu yleiset muotoilut ja etusivu komponentteineen ja komponenttikohtaiset tyylisivut |
|8.4.25. | 4 h 25 min | Sivujen ja tyylien luomista | Suosituimmat, Uusimmat, Aloita keskustelu, Meistä sivut valmiit muotoiluineen| 
|12.4.25| 2 h | Backendin aloittaminen, tietokannan ja API:n luonti | Tietokanta luotu, luotu server.js, api.jsx ja API-pyynnöt komponentteihin |
|12.4.25| 2 h | Backendin jatkaminen ja keskustelu-sivun luominen | Keskustelusivusto luotu ja kommenttitoimintoa rukattu |
|13.4.25| 1 h 30 min| Keskustelusivun ja kommenttitoiminnan rakentaminen | Keskustelusivu ja kommenttitoiminto valmis, muotoilut tehty |
|14.4.25| 3 h 30 min | Raportin ja testauksen aloitus | Raportista valmiina osia ja Aloita.test.jsx valmis |
|15.4.25| 2 h 40 min | Testauksen rakentamista | Unit-testaus valmis ja E2E-testaus valmis |
|15.4.25| 4 h 30 min | Ympäristön rakentamista | Static Web App luotu frontendille, Backendiä yritetty rakentaa App servicelle, vielä kesken |
|16.4.25| 4 h | Ympäritön rakentamista ja raportin kirjoittaminen | App servicelle saatu backend deployattua ja toimintaan, raportti valmis |

Used time: 32 h 50 min

**VAIHE 4**
| Date   | Used time | Subject                | Outcome |
|:--------|:-----------:|:------------------------:|---------:|
|23.4.25| 4 h 15 min |Dokumentoinnin aloitus| Dokumentointi pääosin valmis, vielä videon lisäys ja pari muutosta kesken|
|24.4.25| 2 h | Dokumentoinnin viimeistely, esittelyvideon kuvaus ja lisäys | Raportti valmis |

Used time: 6 h 15 min


## Esittelyvideo

Tässä linkki videoon:

[Esittelyvideo](./Esittely.mp4)



| Toiminto | Videolla | 
|-----|-----| 
|Keskustelujen selaaminen, avaaminen ja kommenttien lukeminen| 0.00 - 0.47 |
|Kommentointi | 0.47 - 1.55 |
| Keskustelun aloittaminen | 1.55 - 2.28|
| Keskustelun tallentuminen "Uusimmat" ja "Kaikki" -katergorioihin | 2.28 - 2.44 |
| Keskustelun siirtyminen "Suosittu"-kategoriaan | 2.44 - 3.29 |
| Hampurilaisvalikon esittely | 3.29 - 4.07 |
