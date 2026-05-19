import { useEffect, useState } from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import CharacterList from './components/CharacterList';
import Filters from './components/Filters';
import CharacterDetail from './components/ChatacterDetail';

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
  <Routes>
  <Route
    path="/"
    element={
      <>
        <h1>La Biblioteca de Howarts 🪄</h1>

        <Filters
          searchName={searchName}
          setSearchName={setSearchName}
          house={house}
          setHouse={setHouse}
        />

        <CharacterList 
          characters={filteredCharacters}
          searchName={searchName} 
        />
      </>
    }
  />

  <Route
    path="/:name"
    element={<CharacterDetail characters={characters} />}
  />
</Routes>
  );
}
export default App;