import { test, expect } from '@playwright/test';

test('Käyttäjä voi lisätä kommentin keskusteluun', async ({ page }) => {
  // 1. Mene keskustelujen listaan, esim. "Kaikki keskustelut" -sivulle
  await page.goto('http://localhost:5173/kaikki'); // Muokkaa oikea URL

  // 2. Valitse keskustelu listalta, esim. ensimmäinen keskustelu
  const ekaKeskustelu = page.locator('.keskustelu-item').first();  // Etsi ensimmäinen keskustelu
  const ekaOtsikko = await ekaKeskustelu.textContent();
  await ekaKeskustelu.click();  // Klikkaa keskustelua

  // 3. Odota, että keskustelu-sivu latautuu ja kommenttilomake näkyy
  const kommenttiLomake = page.locator('form.kommentti-lomake');
  await expect(kommenttiLomake).toBeVisible();  // Varmista että lomake on näkyvissä

  // 4. Täytä kommenttikenttä
  const kommenttiKentta = page.locator('textarea[placeholder="Kirjoita kommentti..."]');
  const kommenttiTeksti = 'Tämä on uusi kommentti!';
  await kommenttiKentta.fill(kommenttiTeksti);

  // 5. Lähetä kommentti
  const submitButton = page.locator('button[type="submit"]');
  await submitButton.click();

  // 6. Odota, että kommentti on lisätty keskusteluun
  const kommenttiLista = page.locator('.kommentti-lista');
  const uusiKommentti = kommenttiLista.locator('.kommentti-sisalto', { hasText: kommenttiTeksti });

  await expect(uusiKommentti).toBeVisible();  // Varmistetaan, että uusi kommentti on näkyvissä

  // 7. (Valinnainen) Varmista, että lomake tyhjenee lähetettyään
  const lomakeKentta = page.locator('textarea');
  await expect(lomakeKentta).toHaveValue('');  // Lomakkeen kenttä on tyhjä
});
