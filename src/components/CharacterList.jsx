import CharacterCard from './CharacterCard';

function CharacterList({ characters }) {
  if (characters.length === 0) {
  return <p>No characters found</p>;
}
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