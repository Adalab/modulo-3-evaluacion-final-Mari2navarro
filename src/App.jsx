import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // Estado para guardar personajes
  const [characters, setCharacters] = useState([]);

  // Estado para guardar el texto del input
  const [searchName, setSearchName] = useState('');

  //Estado para guardar casas
  const [house, setHouse] = useState('gryffindor');

  // useEffect se ejecuta cuando carga la página
  useEffect(() => {
    fetch(`https://hp-api.onrender.com/api/characters/house/${house}`)
      .then((response) => response.json())
      .then((data) => {
    
        // Guardamos los datos en el estado
        setCharacters(data);
      });
  }, [house]);

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

        <select
            value={house}
            onChange={(ev) => setHouse(ev.target.value)}
        >
            <option value="gryffindor">Gryffindor</option>
            <option value="slytherin">Slytherin</option>
            <option value="ravenclaw">Ravenclaw</option>
            <option value="hufflepuff">Hufflepuff</option>
        </select>

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