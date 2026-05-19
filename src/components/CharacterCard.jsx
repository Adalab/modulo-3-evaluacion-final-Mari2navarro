import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  return (
    <li>
      <Link to={`/${character.name}`}>
        <h2>{character.name}</h2>

        <p>{character.species}</p>

        <img
          src={character.image}
          alt={character.name}
        />
      </Link>
    </li>
  );
}

export default CharacterCard;