import { test, expect } from '@playwright/test';

test('Käyttäjä voi selata keskusteluja Kaikki-sivulla', async ({ page }) => {
  // 1. Siirry Kaikki keskustelut -sivulle
  await page.goto('https://red-pond-0ce91a710.6.azurestaticapps.net/kaikki'); // Muuta URL tarvittaessa

  // 2. Odota, että ainakin yksi keskustelu-item näkyy
  const keskusteluItem = page.locator('.keskustelu-item');  // Etsitään keskusteluitemeitä
  await expect(keskusteluItem.first()).toBeVisible();  // Odotetaan, että ensimmäinen keskustelu-item näkyy

  // 3. Tallenna ensimmäisen keskustelun otsikko
  const ekaOtsikko = await keskusteluItem.first().locator('span').textContent();

  // 4. Klikkaa ensimmäistä keskustelua
  await keskusteluItem.first().click();

  // 5. Varmista, että siirryttiin keskustelusivulle
  await expect(page).toHaveURL(/\/keskustelu\/\d+/);  // URL pitäisi olla muotoa /keskustelu/ID
  
  // 6. Tarkista, että keskustelun otsikko näkyy oikein
  await expect(page.locator('h2.otsikko')).toContainText(ekaOtsikko ?? '');  // Käytetään luokkaa tarkistamiseen
});
