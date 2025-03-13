import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [result, setResult] = useState('');

  // Funktio käyttäjien tietojen hakemiseen
  const getUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setResult('Virhe käyttäjien hakemisessa');
    }
  };

  // Funktio uuden käyttäjän lisäämiseen
  const addUser = async () => {
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, age }),
      });

      if (response.ok) {
        const data = await response.json();
        setResult(`Uusi käyttäjä lisätty: ${JSON.stringify(data)}`);
        setName('');
        setEmail('');
        setAge('');
        getUsers();  // Päivitä käyttäjät
      } else {
        setResult('Virhe käyttäjän lisäämisessä');
      }
    } catch (error) {
      setResult('Virhe käyttäjän lisäämisessä');
    }
  };

  return (
    <div className="App container mt-5">
      <h1 className="text-center">Käyttäjätiedot</h1>

      {/* Lomake uuden käyttäjän lisäämiseen */}
      <h2>Lisää uusi käyttäjä</h2>
      <form onSubmit={(e) => { e.preventDefault(); addUser(); }} className="mb-4">
        <div className="form-group">
          <label>Nimi: </label>
          <input 
            type="text" 
            className="form-control" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Sähköposti: </label>
          <input 
            type="email" 
            className="form-control" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Ikä: </label>
          <input 
            type="number" 
            className="form-control" 
            value={age} 
            onChange={(e) => setAge(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Lisää käyttäjä</button>
      </form>

      {/* Näytä tulokset */}
      <h2>Tulokset</h2>
      <pre>{result}</pre>

      {/* Käyttäjien lista */}
      <h2>Käyttäjät</h2>
      <button onClick={getUsers} className="btn btn-secondary mb-3">Hae käyttäjät</button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nimi</th>
            <th>Sähköposti</th>
            <th>Ikä</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
