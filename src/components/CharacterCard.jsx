import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  return (
    <li>
      <Link to={`/${encodeURIComponent(character.name)}`}>
        <h2>{character.name}</h2>

        <p>{character.species}</p>

        <img
          src={
           character.image
            ? character.image
            : 'https://dummyimage.com/210x295/ffffff/656565.png&text=Harry+Potter'
}
          alt={character.name}
        />
      </Link>
    </li>
  );
}

export default CharacterCard;