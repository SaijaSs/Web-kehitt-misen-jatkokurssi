// Tests/Homepage.test.jsx
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Tuodaan BrowserRouter
import Homepage from '../src/Pages/Homepage';  // Oletetaan, että tämä on oikea polku

describe('Homepage-komponentti', () => {
  // Varmistetaan, että ennen jokaista testiä tehdään mockit tarvittaessa
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renderöityy ilman kaatumista', () => {
    // Renderöidään Homepage-komponentti BrowserRouterin sisällä
    render(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    );

    // Varmistetaan, että komponentti renderöidytään ilman virheitä
    expect(screen.getByText(/Suosituimmat keskustelut/i)).toBeInTheDocument();  // Esimerkki, jos sivu sisältää tämän tekstin
  });

  it('näyttää "Meistä" hampurilaisvalikossa, kun valikko avataan', async () => {
    render(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    );

    // Käytetään alt-tekstiä hampurilaisikonin löytämiseen
    const menuIcon = screen.getByAltText(/valikko/i);
    fireEvent.click(menuIcon); // Simuloidaan klikkaus

    // Odotetaan että "Meistä" tulee näkyviin
    await waitFor(() => {
      expect(screen.getByText(/meistä/i)).toBeInTheDocument();
    });
  });

  it('näyttää "Lue lisää" Karusellin kortissa', async () => {
    render(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    );

    // Etsitään "Lue lisää" -teksti karusellista
    await waitFor(() => {
        expect(screen.getAllByText(/Lue lisää/i).length).toBeGreaterThan(0);
    });
  });

  it('renderöi Header, Karuselli, Uusikeskustelu ja Footer -komponentit oikein', () => {
    render(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    );

    // Varmistetaan, että komponentit ovat näkyvissä sivulla
    expect(screen.getByText(/Kaikki/i)).toBeInTheDocument();
    expect(screen.getByText(/keskustelut/i)).toBeInTheDocument();
    expect(screen.getByText(/Aloita/i)).toBeInTheDocument();
    expect(screen.getByText(/ystäville/i)).toBeInTheDocument();
  });
});
