function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search your course..."
      className="w-full p-4 rounded-xl border shadow-sm outline-none"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;