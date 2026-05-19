import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // Estado para guardar personajes
  const [characters, setCharacters] = useState([]);

  // Estado para guardar el texto del input
  const [searchName, setSearchName] = useState('');

  // useEffect se ejecuta cuando carga la página
  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
      .then((response) => response.json())
      .then((data) => {
    
        // Guardamos los datos en el estado
        setCharacters(data);
      });
  }, []);

  //Filtramos personajes según el texto escrito
  const filteredCharacters = characters.filter((character) =>
  character.name.toLowerCase().includes(searchName.toLowerCase())
);
  return (
    <>
      <h1>Harry Potter Characters</h1>


        {/*Input de búsqueda */}
        <input
            type="text"
            placeholder="Search character"
            value={searchName}
            onChange={(ev) => setSearchName(ev.target.value)}
        />

        {/* Listado de personajes */}
      <ul>
        {filteredCharacters.map((character) => (
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