function CharacterCard({ character }) {
  return (
    <li>
      <h2>{character.name}</h2>

      <p>{character.species}</p>

      <img
        src={character.image}
        alt={character.name}
      />
    </li>
  );
}

export default CharacterCard;