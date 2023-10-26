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
    <div className="flex sm:flex-row flex-col py-5 justify-between gap-4 sm:gap-2 w-full sm:w-auto">
      <div className="flex sm:flex-row flex-col sm:max-xl:flex-col w-full gap-3 sm:gap-0 sm:w-full order-2 sm:order-1">
        <input
          type="text"
          placeholder="Find a repository..."
          className="input flex-1 input-sm py-2 md:py-2 lg:py-2 xl:py-5 md:text-lg w-full"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <FilterButtons />
      </div>
      <div className="flex flex-row order-1 sm:order-2 ">
        <NewRepoButton />
      </div>
    </div>
  );
};

export default SearchBar;
