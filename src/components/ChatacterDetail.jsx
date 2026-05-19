import { Link, useParams } from 'react-router-dom';

function CharacterDetail({ characters }) {
  const params = useParams();

  const foundCharacter = characters.find(
    (character) => 
      character.name === decodeURIComponent(params.name)
  );

  if (!foundCharacter) {
    return <p>Character not found</p>;
  }

  return (
    <>
      <h2>{foundCharacter.name}</h2>

      <img
        src={foundCharacter.image}
        alt={foundCharacter.name}
      />

      <p>Species: {foundCharacter.species}</p>

      <p>House: {foundCharacter.house}</p>

      <p>Gender: {foundCharacter.gender}</p>

      <Link to="/">Volver</Link>
    </>
  );
}

export default CharacterDetail;