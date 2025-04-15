// api.jsx
const BASE_URL = 'https//projekti-backend-ezg5g3cwengphuby.centralus-01.azurewebsites.net'; // Backendin osoite

// Hae kaikki keskustelut (uusimmat)
export const getThreads = async () => {
  try {
    const response = await fetch(`${BASE_URL}/threads`);
    if (!response.ok) {
      throw new Error('Virhe haettaessa keskusteluja');
    }
    return await response.json();
  } catch (error) {
    console.error('Virhe haettaessa keskusteluja:', error);
    throw error;
  }
};

// Hae suosituimmat keskustelut (eniten kommentteja)
export const getPopularThreads = async () => {
  try {
    const response = await fetch(`${BASE_URL}/threads/popular`);
    if (!response.ok) {
      throw new Error('Virhe haettaessa suosituimpia keskusteluja');
    }
    return await response.json();
  } catch (error) {
    console.error('Virhe haettaessa suosituimpia keskusteluja:', error);
    throw error;
  }
};

// Hae yksittäinen keskustelu ja siihen liittyvät kommentit
export const getThreadById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/threads/${id}`);
    if (!response.ok) {
      throw new Error('Virhe haettaessa keskustelua');
    }
    return await response.json();
  } catch (error) {
    console.error('Virhe haettaessa keskustelua:', error);
    throw error;
  }
};

// Lisää uusi keskustelu
export const createThread = async (title, content) => {
  try {
    const response = await fetch(`${BASE_URL}/threads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });
    if (!response.ok) {
      throw new Error('Virhe lisättäessä keskustelua');
    }
    return await response.json();
  } catch (error) {
    console.error('Virhe lisättäessä keskustelua:', error);
    throw error;
  }
};

// Lisää kommentti keskusteluun
export const addCommentToThread = async (threadId, content) => {
  try {
    const response = await fetch(`${BASE_URL}/threads/${threadId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });
    if (!response.ok) {
      throw new Error('Virhe lisättäessä kommenttia');
    }
    return await response.json();
  } catch (error) {
    console.error('Virhe lisättäessä kommenttia:', error);
    throw error;
  }
};
