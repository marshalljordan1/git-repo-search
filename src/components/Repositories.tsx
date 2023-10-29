import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import StarButton from "./StarButton";
import { fetchGithubData } from "../store/slices/githubSlice";
import { useDateFormat } from "../context/DateFormatContext";

const Repositories: React.FC = () => {
  // Use the `useDateFormat` function from the context to format dates.
  const { formatDateAgo } = useDateFormat();

  // Initialize the useDispatch function to dispatch actions.
  const dispatch: AppDispatch = useDispatch();

  // Access data from the Redux store using useSelector.
  const {
    filteredRepositories,
    repositories,
    isSearchQueryEmpty,
    searchResultsCount,
    userInfo,
    searchTerm,
    searchedUser,
  } = useSelector((state: RootState) => state.github);

  // Fetch GitHub data on component first load or updates.
  useEffect(() => {
    dispatch(fetchGithubData(searchedUser));
  }, [searchedUser, dispatch]);

  // Determine which set of repositories to render.
  const repositoriesToRender =
    filteredRepositories.length > 0 ? filteredRepositories : repositories;

  return (
    <>
      <div className="light-gray-b-border">
        {/* Display search result information if the search query is not empty. */}
        {!isSearchQueryEmpty ? (
          <p className="my-5">
            {searchResultsCount >= 0 ? (
              <div className="flex justify-between">
                <div className="text-lg ">
                  <span className="font-bold">{searchResultsCount}</span>
                  {` results for repositories matching`}{" "}
                  <span className="font-bold">{searchTerm}</span> {`sorted by`}{" "}
                  <span className="font-bold">last updated.</span>
                </div>
              </div>
            ) : null}
          </p>
        ) : null}
      </div>

      {/* Display repositories or a message if no repositories match the query. */}
      {searchResultsCount > 0 || isSearchQueryEmpty ? (
        <div>
          <ul className="flex flex-col mb-10">
            {repositoriesToRender.map((repository) => (
              <li className="py-6 light-gray-b-border " key={repository.id}>
                <div className="flex">
                  <div className="flex flex-col gap-2 w-10/12">
                    <a
                      href={repository.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-link text-2xl font-bold"
                    >
                      {repository.name}
                    </a>
                    <p className="text-light-gray">{repository.description}</p>

                    <div className="flex gap-4">
                      <p className="text-light-gray">{repository.language}</p>
                      <p className="text-light-gray">
                        Updated {formatDateAgo(repository.updated_at)}
                      </p>
                    </div>
                  </div>
                  <div className="sm:mt-5 mt-14 me-2">
                    <StarButton />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-3xl font-bold text-center mt-20 mb-40 sm:mb-0 sm:mt-40">
          {/* Display a message when no repositories match. */}
          {userInfo?.login} doesn’t have any repositories that match.
        </p>
      )}
    </>
  );
};

export default Repositories;
