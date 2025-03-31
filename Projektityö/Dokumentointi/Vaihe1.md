# Vaihe 1 

## Nettisivut loppuprojektina Web-kehittämisen jatkokurssilla

Tässä projektissa luon nettisivut hyödyntäen Käyttöliittymät ja käytettävyys -kurssissa mallintamaani sovellusta. Sovellus oli lukupiiri-sovellus. Tästä sovelluksesta hyödynnän tässä työssä ulkoasua ja osittain ideaa. Luon tässä projektissa keskustelupalsta-nettisivut, joka on tarkoitettu fantasiakirjallisuudesta keskustelemiseen. Käyttäjät voivat kommentoida ja luoda keskusteluja sivustolla. Keskusteluja on mahdollista selata "uusimmat", "suosituimmat" ja "kaikki keskustelut" osioiden avulla.


## Käyttäjäpersoonat

### Jenna
- 24 vuotta
- Työskentelee markkinoinnin parissa
- Harrastaa lukemista ja leipomista
- Haluaa jakaa kokemuksiaan lukemistaan kirjoista muiden kanssa, mutta lähipiirissä ei muita lukuintoilijoita

![Jenna](./kuvat/Jenna.png)

### Sara
- 28 vuotta
- Graafinen suunnittelija
- Rakastaa lukemista, erityisesti fantasiakirjallisuutta
- Etsii yhteisöä, jossa voi keskustella romaaneista 
- Arvostaa esteettistä, visuaalisesti miellyttäviä sivustoja

![Sara](./kuvat/Sara.png)

### Tomi 
- 45 vuotta
- Opettaja
- Nauttii fiktiokirjallisuudesta, erityisesti historiallisesta fantasiasta
- Arvostaa syvällisiä keskusteluja, kirja-arvosteluja ja suosituksia

![Tomi](./kuvat/Tomi.png)




## Käyttötapaukset ja -tilanteet


### Käyttötapaukset
<br>

####  **1. Keskusteluun osallistuminen**
<br>

**Käyttäjä:** Verkkosivuston käyttäjä <br>
**Tavoite:** Fantasiakirjallisuuteen liittyvään keskusteluun osallistuminen<br>
**Laukaisija:** Lukuharrastus <br><br>
**Käyttötapauksen kulku:**
1. Käyttäjä selaa sivustolla olevia keskusteluja
2. Käyttäjä valitsee haluamansa keskustelun 
3. Käyttäjä lukee muiden käyttäjien kommentteja
4. Käyttäjä kommentoi keskustelupalstalle

<br>

#### **2. Keskustelun aloittaminen** 
<br>

**Käyttäjä:** Verkkosivun käyttäjä <br>
**Tavoite:**  Keskustelun aloittaminen fantasiakirjallisuudesta <br>
**Laukaisija:** Lukuharrastus <br><br>
**Käyttötapauksen kulku:**
1. Käyttäjä siirtyy tekemään uuden keskustelun
2. Käyttäjä kirjoittaa keskustelun aiheen
3. Käyttäjä kirjoittaa keskusteluun ensimmäisen kommentin
4. Käyttäjä julkaisee uuden keskustelun

<br>

### Käyttötilanteet

<br>

#### OSALLISTUMINEN KESKUSTELUUN KOMMENTOIMALLA

**User story:** "Lumouksen lukijat -sivuston käyttäjänä haluan, että pystyn selaamaan sivustolla olevia keskusteluja ja kommentoimaan niitä, jotta voin osallistua käytyyn keskusteluun."
<br>

**Acceptance criteria:** 
- Käyttäjä pääsee sivustolle
- Käyttäjä näkee aloitetut keskustelut sivustolla ja voi selata niitä
- Käyttäjä näkee muiden käyttäjien kommentit
- Käyttäjä voi komentoida keskusteluihin
- Sivusto tallentaa kommentin oikeaan keskusteluun ja oikeaan järjestykseen
<br><br>

#### KESKUSTELUN ALOITTAMINEN

**User story:** "Lumouksen lukijat -sivuston käyttäjänä haluan, että pystyn aloittamaan keskusteluja minua kiinnostavista aiheista fantasiakirjallisuuteen liittyen, jotta voin jakaa kokemuksiani muiden kanssa."
<br>

**Acceptance criteria:** 
- Käyttäjä pääsee sivustolle
- Käyttäjä näkee aloita keskustelu -osion
- Käyttäjä voi valita keskustelulle aiheen ja lisätä ensimmäisen kommentin
- Käyttäjä voi lisätä keskustelun keskustelupalstalle
- Sivusto tallentaa uuden keskustelun ja asettaa sen sivustolle näkyville 
<br><br>

## Käyttöliittymän prototyyppi

Käyttöliittymän prototyypin olen mallintanut Figmassa hyödyntäen osin Käyttöliittymät ja käytettävyys -kurssille mallintamaani protoa. Tässä linkki Lumouksen lukijoiden sivuston protoon: 


## Tietoarkkitehtuuri ja tekninen suunnittelu

### Tietoarkkitehtuuri 

**Keskeiset tietomallit ja tietokanta** <br>
Sivuston tietokantana toimii SQLite-pohjainen relaatiotietokanta. SQLite valikoitui tietokannan pohjaksi, sillä se sopii pienen mittakaavan projekteihin. 

ChatGPT:n kanssa käydyn keskustelun perusteella esittelen tietomalleja ja tietokantaa ER (Entity-Relationship) -kaaavioiden avulla seuraavasti:

ENTITEETI JA RELAATIOT 

![Entiteetit ja relaatiot](./kuvat/ER.png)

Selitys relaatioille:<br>
Threads (Keskustelut)
- Tallentaa keskustelut (otsikko, luontiaika).
- Jokainen keskustelu voi sisältää useita kommentteja.

Comments (Kommentit)
- Tallentaa anonyymien käyttäjien kommentit.
- Jokainen kommentti liittyy tiettyyn keskusteluun (thread_id FK).
- guest_name tallennetaan anonyymille kommentoijalle.

Views (Näyttökerrat)
- Tallentaa keskustelujen katselumäärät.
- Jokainen näyttökerta liittyy tiettyyn keskusteluun (thread_id FK).
- Tämä mahdollistaa keskustelujen järjestämisen uusimmat ja suosituimmat -osioihin.
<br>

SQL-MALLIT: 

Alla on tietokannan rakenteen SQL-mallit, jotka määrittävät keskustelupalstan keskeiset tietorakenteet. 

![SQL-mallit](./kuvat/sql.png)

Taulujen selitykset:<br>
Threads (Keskustelut)
- Tallentaa keskustelut, joita käyttäjät aloittavat.
- thread_id: Automaattisesti kasvava yksilöllinen tunniste jokaiselle keskustelulle.
- title: Keskustelun otsikko.
- created_at: Keskustelun luomisaika, tallentuu automaattisesti.

Comments (Kommentit)
- Tallentaa keskusteluihin lisätyt kommentit.
- comment_id: Automaattisesti kasvava yksilöllinen tunniste jokaiselle kommentille.
- thread_id: Viittaa keskusteluun, johon kommentti kuuluu.
- guest_name: Käyttäjän itse antama nimimerkki.
- content: Kommentin sisältö.
- created_at: Kommentin luomisaika, tallentuu automaattisesti.
- FOREIGN KEY (thread_id): Jos keskustelu poistetaan, siihen liittyvät kommentit poistuvat myös.

Views (Näyttökerrat)
- Tallentaa, milloin keskusteluja katsotaan.
- view_id: Automaattisesti kasvava yksilöllinen tunniste jokaiselle katselukerralle.
- thread_id: Viittaa keskusteluun, jota katsottiin.
- view_time: Tallentaa katseluhetken automaattisesti.
- FOREIGN KEY (thread_id): Yhteys keskustelutauluun.

Tietokantakyselyjen selitykset:

Kaikki keskustelut: Näyttää kaikki keskustelut uusimmasta vanhimpaan.

Uusimmat keskustelut: Listaa 10 uusinta keskustelua.

Suosituimmat keskustelut: Näyttää keskustelut, joissa on eniten kommentteja, järjestettynä suosion mukaan.

### Tekninen suunnittelu

**Front-endin** toteutuksessa käytän projektissani seuraavia teknologioita: 
- HTML/CSS
- JavaScript
- React
- Bootstrap (mahdollisesti)

**Back-endin** toteutuksessa käytän projektissani seuraavia teknologioita:
- Node.js + Express

**Tietokannan** toteutuksessa käytän projektissani seuraavia teknologioita:
- SQLite

**Isännoinnin** toteutuksessa käytän projektissani seuraavia teknologioita:
- Azure App Service

## Projektinhallinta ja käyttäjätestaus

