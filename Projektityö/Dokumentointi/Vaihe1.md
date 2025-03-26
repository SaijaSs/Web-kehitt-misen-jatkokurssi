# Vaihe 1 

## Nettisivut loppuprojektina Web-kehittämisen jatkokurssilla

Tässä projektissa luon nettisivut hyödyntäen Käyttöliittymät ja käytettävyys -kurssissa mallintamaani sovellusta. Sovellus oli lukupiiri-sovellus, jossa käyttäjät voivat liittyä lukupiiriin, osallistua lukupiirin tapahtumiin sekä keskustella lukupiirissä kirjaan liittyen. Sovelluksessa on lisäksi Omat lukupiirit -sivusto, jonne on koottu lukupiirit, joihin olet liittynyt ja tarkemmin tiedot esim. tapaamisista. 

Tässä projektissa vien sovelluksen sisällön nettisivumuotoiseksi alustaksi. 


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

####  **1. Lukupiirin valinta ja lukupiiriin liittyminen**
<br>

**Käyttäjä:** Rekisteröitynyt verkkosivun käyttäjä <br>
**Tavoite:**  Lukupiirin löytäminen <br>
**Laukaisija:** Lukuharrastus <br><br>
**Käyttötapauksen kulku:**
1. Käyttäjä kirjautuu sisään sivustolle
2. Käyttäjä selaa sivuston tarjolla olevia lukupiirejä
3. Käyttäjä klikkaa auki kiinnostavan kirjan

<br>

#### **2. Lukupiirin valinta ja lukupiiriin liittyminen** 
<br>

**Käyttäjä:** Rekisteröitynyt verkkosivun käyttäjä <br>
**Tavoite:**  Lukupiiriin liittyminen <br>
**Laukaisija:** Lukuharrastus <br><br>
**Käyttötapauksen kulku:**
1. Käyttäjä kirjautuu sisään sivustolle
2. Käyttäjä siirtyy liittymissivulle
3. Käyttäjä valitsee haluamansa lukupiirin
4. Käyttäjä täyttää lisätietoja kenttään
5. Käyttäjä vahvistaa tiedot oikeiksi
6. Käyttäjä klikkaa liity-näppäintä
7. Käyttäjä saa vahvistuksen liittymisestä lukupiiriin

<br>

####  **3.Osallistuminen lukupiirin keskusteluun**
<br>

**Käyttäjä:** Rekisteröitynyt verkkosivun käyttäjä <br>
**Tavoite:** Osallistuminen lukupiirin keskusteluun sivustolla <br>
**Laukaisija:** Lukuharrastus <br><br>
**Käyttötapauksen kulku:**
1. Käyttäjä kirjautuu sisään sivustolle
2. Käyttäjä siirtyy Keskustelut -sivustolle
3. Käyttäjä avaa haluamansa keskustelun
4. Käyttäjä kirjoittaa kommentin
5. Käyttäjä lähettää kommentin keskustelupalstalle 

<br>

####  **4.Osallistuminen lukupiirin tapahtumiin**
<br>

**Käyttäjä:** Rekisteröitynyt verkkosivun käyttäjä <br>
**Tavoite:** Osallistuminen lukupiirin tapahtumiin sivustolla <br>
**Laukaisija:** Lukuharrastus <br><br>
**Käyttötapauksen kulku:**
1. Käyttäjä kirjautuu sisään sivustolle
2. Käyttäjä siirtyy Omat lukupiirit -osioon
3. Käyttäjä avaa kalenterista tulevan tapahtuman, josta siirtyy lukupiirin sivulle
4. Käyttäjä löytää osallistumislinkin sivulta ja klikkaa sitä
5. Käyttäjä osallistuu lukupiirin tapahtumaan 

<br>


<br><br>

### Käyttötilanteet

<br>

#### LUKUPIIRIN ETSIMINEN

**User story:** "Lumouksen lukijat -sivuston rekisteröityneenä käyttäjänä haluan, että pystyn selaamaan sivustolla käynnissä olevia lukupiirejä, jotta saan niistä tietoa ja voin liittyä haluamiini lukupiireihin."
<br>

**Acceptance criteria:** 
- Käyttäjä pääsee kirjautumaan sivustolle
- Käyttäjä näkee käynnissä olevat lukupiirit sivustolla ja voi selata niitä
- Käyttäjä voi lukea lisätietoa kustakin lukupiiristä
<br><br>

#### LUKUPIIRIIN LIITTYMINEN

**User story:** "Lumouksen lukijat -sivuston rekisteröityneenä käyttäjänä haluan, että pystyn liittymään minua kiinnostavaan lukupiiriin, jotta voin osallistua lukupiirin toimintaan."
<br>

**Acceptance criteria:** 
- Käyttäjä pääsee kirjautumaan sivustolle
- Käyttäjä näkee liittymissivuston
- Sivusto tarjoaa käynnissä olevat lukupiirit alasvetovalikkoon
- Käyttäjä voi valita käynnissä olevan lukupiirin alasvetovalikosta
- Käyttäjä voi kirjoittaa lisätiedot kenttään lisätietoa
- Käyttäjä voi täpätä vahvista-näppäimen ja klikata "liity"-nappia
- Sivusto vastaanottaa liittymisen ja lähettää käyttäjälle vahvistusilmoituksen
- Käyttäjä näkee vahvistusilmoituksen
<br><br>

#### KESKUSTELUUN OSALLISTUMINEN SIVUSTOLLA

**User story:** "Lumouksen lukijat -sivuston rekisteröityneenä käyttäjänä haluan, että pystyn osallistumaan keskusteluun lukupiirin kirjaan liittyen, jotta voin jakaa mielipiteeni luettavasta kirjasta."
<br>

**Acceptance criteria:** 
- Käyttäjä pääsee kirjautumaan sivustolle
- Käyttäjä näkee lukupiiriensä keskustelupalstat
- Käyttäjä näkee keskustelupalstan sisällön 
- Käyttäjä voi kirjoittaa kommentin ja lähettää sen
- Sivusto tallentaa käyttäjän kommentin ja näytttää sen muille käyttäjille
<br><br>

#### LUKUPIIRIN TAPAHTUMAAN OSALLISTUMINEN SIVUSTOLLA

**User story:** "Lumouksen lukijat -sivuston rekisteröityneenä käyttäjänä haluan, että pystyn osallistumaan lukupiirin tapahtumiin sivustolla, jotta pystyn jakamaan mielipiteitäni luettavasta kirjasta."
<br>

**Acceptance criteria:** 
- Käyttäjä pääsee kirjautumaan sivustolle
- Käyttäjä näkee lukupiirit, joihin on osallistunut
- Käyttäjä näkee lukupiirin tapahtumat kalenterissaan
- Käyttäjä näkee linkin tapahtumaan
- Käyttäjä voi klikata linkkiä ja osallistua tapahtumaan
- Sivusto tarjoaa tapahtumat käyttäjän kalenteriin
<br><br>



## Käyttöliittymän prototyyppi

Käyttöliittymän prototyypin olen mallintanut Figmassa hyödyntäen osin Käyttöliittymät ja käytettävyys -kurssille mallintamaani protoa. Tässä linkki Lumouksen lukijoiden sivuston protoon: 


## Tietoarkkitehtuuri ja tekninen suunnittelu

## Projektinhallinta ja käyttäjätestaus

