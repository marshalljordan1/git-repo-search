import { useDispatch } from "react-redux";
import { useState, FormEvent } from "react";
import { setSearchedUser, fetchGithubData } from "../store/slices/githubSlice";

const SearchUser: React.FC = () => {
  // Initialize the search query state and Redux dispatch function.
  const [searchUser, setSearchUser] = useState<string>("");
  const dispatch = useDispatch();

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Dispatch the search user to Redux using setSearchedUser action.
    dispatch(setSearchedUser(searchUser));
    // Dispatch the search user to Redux when fetching Github data.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch(fetchGithubData(searchUser) as any);
  };

  const handleSearchUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUser(event.target.value); // Update the input value
  };

  return (
    <div>
      <div>
        {/* Search input for finding repositories. */}
        <form className="flex" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Search a new user..."
            className="input flex-1 input-sm py-2 md:py-2 lg:py-2 xl:py-5 md:text-lg w-full"
            value={searchUser}
            onChange={handleSearchUser}
          />
          <button
            className="btn btn-xs sm:btn-sm flex bg-gray-btn normal-case light-gray-border shadow mt-1 ms-2"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchUser;
