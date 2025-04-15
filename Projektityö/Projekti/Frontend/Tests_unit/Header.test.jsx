import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../src/Components/Header';

// Apufunktio renderöintiin routerin kanssa
const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('Header-komponentti', () => {
  it('renderöityy ilman kaatumista ja näyttää otsikon', () => {
    renderWithRouter(<Header />);
    expect(screen.getByText(/Lumouksen Lukijat/i)).toBeInTheDocument();
  });

  it('näyttää linkit Suosituimmat, Uusimmat ja Kaikki', () => {
    renderWithRouter(<Header />);
    expect(screen.getAllByText(/Suosituimmat/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/Uusimmat/i)).toBeInTheDocument();
    expect(screen.getByText(/Kaikki/i)).toBeInTheDocument();
  });

  it('avaa hampurilaisvalikon ja näyttää dropdown-linkit', () => {
    renderWithRouter(<Header />);

    // Klikkaa hampurilaisikonia (kuva jolla alt="Valikko")
    const menuIcon = screen.getByAltText(/Valikko/i);
    fireEvent.click(menuIcon);

    // Nyt dropdown-linkkien pitäisi näkyä
    expect(screen.getByText(/Aloita keskustelu/i)).toBeInTheDocument();
    expect(screen.getByText(/Meistä/i)).toBeInTheDocument();
  });
});
