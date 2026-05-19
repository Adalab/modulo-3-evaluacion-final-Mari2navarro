import CharacterCard from './CharacterCard';

function CharacterList({ characters }) {
  return (
    <ul>
      {characters.map((character) => (
        <CharacterCard
          key={character.name}
          character={character}
        />
      ))}
    </ul>
  );
}

export default CharacterList;