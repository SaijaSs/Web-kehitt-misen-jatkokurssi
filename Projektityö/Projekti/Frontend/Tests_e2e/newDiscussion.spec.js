import { test, expect } from '@playwright/test';

test('Käyttäjä voi luoda uuden keskustelun', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Klikkaa "Uusi keskustelu" -nappia
  const aloitaButton = page.getByRole('button', { name: 'Uusi keskustelu' });
  await aloitaButton.scrollIntoViewIfNeeded();
  await aloitaButton.click();

  // Täytä lomake
  await page.fill('input[name="aihe"]', 'Testiaihe');
  await page.fill('textarea[name="kommentti"]', 'Tämä on testikommentti');

  await page.check('input[type="checkbox"]');
  await page.click('button:has-text("Aloita")');

  // Odota että siirrytään keskusteluun
  await expect(page).toHaveURL(/\/keskustelu\/\d+/);

  // 🔍 Tarkista että keskustelun otsikko näkyy oikein
  await expect(page.locator('h2.otsikko')).toContainText('Testiaihe');

  // 🔍 Tarkista että kommentti näkyy divissä, jossa class="kommentti-sisalto"
  await expect(page.locator('.kommentti-sisalto')).toContainText('Tämä on testikommentti');
});
