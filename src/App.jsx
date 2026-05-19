import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // Estado para guardar personajes
  const [characters, setCharacters] = useState([]);

  // Se ejecuta cuando carga la página
  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        // Guardamos los datos
        setCharacters(data);
      });
  }, []);

  return (
    <>
      <h1>Harry Potter Characters</h1>

      <ul>
        {characters.map((character) => (
          <li key={character.name}>
            <h2>{character.name}</h2>
            <p>{character.species}</p>

            <img
              src={character.image}
              alt={character.name}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;