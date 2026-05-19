import CharacterCard from './CharacterCard';

function CharacterList({ characters }) {
  if (characters.length === 0) {
  return <p>No characters found</p>;
}
  return (
    <ul>
      {characters.map((character, index) => (
        <CharacterCard
          key={index}
          character={character}
        />
      ))}
    </ul>
  );
}

export default CharacterList;