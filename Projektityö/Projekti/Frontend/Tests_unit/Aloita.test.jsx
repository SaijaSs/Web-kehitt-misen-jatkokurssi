// Aloita.test.jsx
import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Aloita from '../src/Components/Aloita';
import * as api from '../src/api/api'; // Tuodaan koko moduuli mockattavaksi


// Apufunktio renderöintiin routerin kanssa
const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};


describe('Aloita-komponentti', () => {

  beforeEach(() => {
    vi.clearAllMocks(); // Nollataan mockit joka testin alussa
  });


  it('lähettää lomakkeen oikein ja kutsuu API-funktioita', async () => {
    // Mockataan API-funktiot
    const createThreadMock = vi.spyOn(api, 'createThread').mockResolvedValue({ id: '123' });
    const addCommentMock = vi.spyOn(api, 'addCommentToThread').mockResolvedValue({ id: '456' });

    renderWithRouter(<Aloita />);

    // Täytetään kentät
    fireEvent.change(screen.getByLabelText(/Keskustelun aihe/i), {
      target: { value: 'Testiaihe' },
    });
    fireEvent.change(screen.getByLabelText(/Aloituskommenttisi/i), {
      target: { value: 'Testikommentti' },
    });
    fireEvent.click(screen.getByLabelText(/Olen tarkastanut/i));

    // Klikataan "Aloita"-nappia
    fireEvent.click(screen.getByRole('button', { name: /Aloita/i }));

    // Odotetaan että funktiot on varmasti kutsuttu
    await waitFor(() => {
      expect(createThreadMock).toHaveBeenCalledWith('Testiaihe', 'Testikommentti');
      expect(addCommentMock).toHaveBeenCalledWith('123', 'Testikommentti');
    });
  });


  it('näyttää virheilmoituksen, jos lomake ei ole oikein täytetty', async () => {
    const createThreadMock = vi.spyOn(api, 'createThread');
    const addCommentMock = vi.spyOn(api, 'addCommentToThread');

    renderWithRouter(<Aloita />);

    // Täytetään vain osa kentistä (ei checkboxia!)
    fireEvent.change(screen.getByLabelText(/Keskustelun aihe/i), {
      target: { value: 'Testiaihe' },
    });
    fireEvent.change(screen.getByLabelText(/Aloituskommenttisi/i), {
      target: { value: 'Testikommentti' },
    });

    // Klikataan "Aloita"-nappia
    fireEvent.click(screen.getByRole('button', { name: /Aloita/i }));

    // Odotetaan hetki varmistaaksemme ettei mockeja kutsuttu
    await waitFor(() => {
      expect(createThreadMock).not.toHaveBeenCalled();
      expect(addCommentMock).not.toHaveBeenCalled();
    });
  });


  it('näyttää virheilmoituksen, jos createThread epäonnistuu', async () => {
    // Mockataan createThread epäonnistumaan
    const createThreadMock = vi.spyOn(api, 'createThread').mockRejectedValue(new Error('API-virhe'));
    const addCommentMock = vi.spyOn(api, 'addCommentToThread');
  
    renderWithRouter(<Aloita />);
  
    // Täytetään kentät normaalisti
    fireEvent.change(screen.getByLabelText(/Keskustelun aihe/i), {
      target: { value: 'Testiaihe' },
    });
    fireEvent.change(screen.getByLabelText(/Aloituskommenttisi/i), {
      target: { value: 'Testikommentti' },
    });
    fireEvent.click(screen.getByLabelText(/Olen tarkastanut/i));
  
    // Klikataan "Aloita"-nappia
    fireEvent.click(screen.getByRole('button', { name: /Aloita/i }));
  
    // Odotetaan että virheilmoitus ilmestyy
    await waitFor(() => {
      expect(screen.getByText(/Tapahtui virhe keskustelua luotaessa/i)).toBeInTheDocument();
    });
  
    // Varmistetaan että addCommentToThread ei kutsuta, koska createThread failasi
    expect(addCommentMock).not.toHaveBeenCalled();
  });
  
  


});
