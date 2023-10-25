import FilterButtons from "./FilterButtons";
import NewRepoButton from "./NewRepoButton";
import { useDispatch } from "react-redux";
import { useEffect, useState, ChangeEvent } from "react";
import { setSearchTerm, filterRepositories } from "../store/slices/githubSlice";

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useDispatch();

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    dispatch(setSearchTerm(query));
  };

  useEffect(() => {
    dispatch(filterRepositories());
  }, [searchQuery, dispatch]);

  return (
    <div className="flex border-b pb-6 gap-5">
      <input
        type="text"
        placeholder="Find a repository..."
        className="input input-sm w-3/6 p-5 md:text-lg"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <FilterButtons />
      <NewRepoButton />
    </div>
  );
};

export default SearchBar;
