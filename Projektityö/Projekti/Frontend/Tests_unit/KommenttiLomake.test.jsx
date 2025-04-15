import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import KommenttiLomake from '../src/Components/KommenttiLomake';

// Luo mock-funktio, jolla seurataan setKommentit-kutsua
const mockSetKommentit = vi.fn();

// Mockaa fetch-globaali funktio
beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ id: 1, content: 'Testikommentti' }),
    })
  );
  mockSetKommentit.mockClear(); // Tyhjennetään mahdolliset aiemmat kutsut
});

describe('KommenttiLomake-komponentti', () => {
  it('lähettää kommentin ja kutsuu setKommentit', async () => {
    // Renderöidään komponentti testiin
    render(<KommenttiLomake id="123" setKommentit={mockSetKommentit} />);

    // Haetaan textarea syötettä varten
    const textarea = screen.getByPlaceholderText('Kirjoita kommentti...');
    // Haetaan nappi
    const button = screen.getByRole('button', { name: /lähetä/i });

    // Simuloidaan käyttäjän kirjoittama kommentti
    fireEvent.change(textarea, { target: { value: 'Tämä on testikommentti' } });

    // Simuloidaan lomakkeen lähetys
    fireEvent.click(button);

    // Odotetaan, että fetch ja setKommentit kutsutaan
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(mockSetKommentit).toHaveBeenCalledTimes(1);
    });

    // Varmistetaan että fetch-kutsu lähetettiin oikealla URLilla
    expect(global.fetch).toHaveBeenCalledWith(
      'http://localhost:3000/threads/123/comments',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: 'Tämä on testikommentti' }),
      })
    );
  });


  it('käsittelee virheen oikein, jos fetch epäonnistuu', async () => {
    // Mockataan console.error, ettei se tulosta testin aikana
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  
    // Mockataan fetch epäonnistumaan
    global.fetch = vi.fn(() => Promise.reject('Verkkovirhe'));
  
    render(<KommenttiLomake id="123" setKommentit={mockSetKommentit} />);
  
    // Syötetään testikommentti
    fireEvent.change(screen.getByPlaceholderText('Kirjoita kommentti...'), {
      target: { value: 'Testivirhe' },
    });
  
    // Klikataan lähetä-nappia
    fireEvent.click(screen.getByRole('button', { name: /lähetä/i }));
  
    // Odotetaan että virhekäsittely ehtii tapahtua
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(
        'Kommentin lisääminen epäonnistui:',
        'Verkkovirhe'
      );
    });
  
    // Varmistetaan, että setKommentit EI kutsuta
    expect(mockSetKommentit).not.toHaveBeenCalled();
  
    consoleSpy.mockRestore(); // Palautetaan alkuperäinen console.error
  });
  

});
