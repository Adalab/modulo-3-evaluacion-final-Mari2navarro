import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

CharacterCard.propTypes = {
  character: PropTypes.object,
};

export default CharacterCard;