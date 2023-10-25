import FilterButtons from "./FilterButtons";
import NewRepoButton from "./NewRepoButton";

const SearchBar = () => {
  return (
    <div className="flex border-b pb-6 gap-5">
      <input
        type="text"
        placeholder="Find a repository..."
        className="input input-sm w-3/6 p-5 md:text-lg"
      />
      <FilterButtons />
      <NewRepoButton />
    </div>
  );
};

export default SearchBar;
