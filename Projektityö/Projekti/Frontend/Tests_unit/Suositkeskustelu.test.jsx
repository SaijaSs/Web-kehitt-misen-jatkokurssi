import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Suositkeskustelu from '../src/Components/Suositkeskustelu';

// Mockataan globaali fetch ennen jokaista testiä
beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([
        { id: 1, title: 'Ensimmäinen suosikki' },
        { id: 2, title: 'Toinen suosikki' },
      ]),
    })
  );
});

describe('Suositkeskustelu-komponentti', () => {
  it('näyttää suositut keskustelut, kun fetch onnistuu', async () => {
    render(
      <BrowserRouter>
        <Suositkeskustelu />
      </BrowserRouter>
    );

    // Odotetaan, että keskustelut renderöidään
    await waitFor(() => {
      expect(screen.getByText('Ensimmäinen suosikki')).toBeInTheDocument();
      expect(screen.getByText('Toinen suosikki')).toBeInTheDocument();
    });

    // Varmistetaan, että linkit ovat oikein
    expect(screen.getByText('Ensimmäinen suosikki').closest('a')).toHaveAttribute('href', '/keskustelu/1');
    expect(screen.getByText('Toinen suosikki').closest('a')).toHaveAttribute('href', '/keskustelu/2');
  });



  it('käsittelee virheen, jos fetch epäonnistuu', async () => {
    // Mockataan console.error jotta ei sotketa testitulostetta
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  
    // Tehdään fetchistä virheellinen
    global.fetch = vi.fn(() => Promise.reject('Verkkovirhe!'));
  
    render(
      <BrowserRouter>
        <Suositkeskustelu />
      </BrowserRouter>
    );
  
    // Odotetaan että virhekäsittely ehtii tapahtua
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Virhe haettaessa suosituimpia keskusteluja:', 'Verkkovirhe!');
    });
  
    // Varmistetaan, ettei keskusteluja ole näkyvissä
    expect(screen.queryByText('Ensimmäinen suosikki')).not.toBeInTheDocument();
    expect(screen.queryByText('Toinen suosikki')).not.toBeInTheDocument();
  
    consoleSpy.mockRestore(); // Palautetaan alkuperäinen console.error
  });
  


});
