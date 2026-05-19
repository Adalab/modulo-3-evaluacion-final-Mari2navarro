function Filters({
  searchName,
  setSearchName,
  house,
  setHouse,
}) {
  return (
    <>
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
    </>
  );
}

export default Filters;