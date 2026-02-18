import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search recipes..."
        onChange={(event) => setSearchTerm(event.target.value)}
        className="border p-2 w-full rounded"
      />
    </div>
  );
};

export default SearchBar;