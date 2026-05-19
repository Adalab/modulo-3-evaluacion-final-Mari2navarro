import PropTypes from "prop-types";

function Filters({
  searchName,
  setSearchName,
  house,
  setHouse,
}) {

  const handleSubmit = (ev) => {
  ev.preventDefault();
};

  return (
    <form 
    className="filters"
    onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search character"
        value={searchName}
        onChange={(ev) => setSearchName(ev.target.value)}
      />

      <select
        value={house}
        onChange={(ev) => setHouse(ev.target.value)}
      >
        <option value="gryffindor">Gryffindor</option>
        <option value="slytherin">Slytherin</option>
        <option value="ravenclaw">Ravenclaw</option>
        <option value="hufflepuff">Hufflepuff</option>
      </select>
    </form>
  );
}

Filters.propTypes = {
  searchName: PropTypes.string,
  setSearchName: PropTypes.func,
  house: PropTypes.string,
  setHouse: PropTypes.func,
};

export default Filters;