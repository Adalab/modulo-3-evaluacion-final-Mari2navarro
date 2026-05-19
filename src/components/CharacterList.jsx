import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';

function CharacterList({
  characters,
  searchName,
}) {
  if (characters.length === 0) {
    return (
      <p>
        No se encontraron coincidencias con "{searchName}"
      </p>
    );
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

CharacterList.propTypes = {
  characters: PropTypes.array,
};

export default CharacterList;