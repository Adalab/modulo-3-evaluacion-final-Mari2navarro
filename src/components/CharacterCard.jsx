import { Link } from 'react-router-dom';

function CharacterCard({ character }) {
  const {
    name = 'Unknown character',
    species = 'Unknown species',
    image,
  } = character;

  return (
    <li>
      <Link to={`/${encodeURIComponent(name)}`}>
        <h2>{name}</h2>

        <p>{species}</p>

        <img
          src={
            image
              ? image
              : 'https://dummyimage.com/210x295/ffffff/656565.png&text=Harry+Potter'
          }
          alt={name}
        />
      </Link>
    </li>
  );
}

export default CharacterCard;