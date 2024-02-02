function SearchComponent({ searchTerm, handleSearchTerm }) {
  return (
    <>
      <label htmlFor="search">Sök: </label>
      <input
        className="searchField"
        value={searchTerm}
        placeholder="Sök här"
        id="search"
        onChange={handleSearchTerm}
        type="text"
      />
    </>
  );
}

export default SearchComponent;
