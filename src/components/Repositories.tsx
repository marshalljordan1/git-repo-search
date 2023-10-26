import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import StarButton from "./StarButton";
import { fetchGithubData } from "../store/slices/githubSlice";
import { useDateFormat } from "../context/DateFormatContext";

const Repositories: React.FC = () => {
  const { formatDateAgo } = useDateFormat();

  const dispatch: AppDispatch = useDispatch();

  const filteredRepositories = useSelector(
    (state: RootState) => state.github.filteredRepositories
  );
  const repositories = useSelector(
    (state: RootState) => state.github.repositories
  );
  const isSearchQueryEmpty = useSelector(
    (state: RootState) => state.github.isSearchQueryEmpty
  );
  const searchResultsCount = useSelector(
    (state: RootState) => state.github.searchResultsCount
  );
  const user = useSelector((state: RootState) => state.github.user);
  const searchTerm = useSelector((state: RootState) => state.github.searchTerm);

  useEffect(() => {
    dispatch(fetchGithubData("vicenlu"));
  }, [dispatch]);

  const repositoriesToRender =
    filteredRepositories.length > 0 ? filteredRepositories : repositories;

  return (
    <>
      <div className="light-gray-b-border ">
        {!isSearchQueryEmpty ? (
          <p className="my-5">
            {searchResultsCount >= 0 ? (
              <div className="flex justify-between">
                <div className="mt-3 text-lg">
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
                    <p>{repository.description}</p>

                    <div className="flex gap-4">
                      <p>{repository.language}</p>
                      <p>Updated {formatDateAgo(repository.updated_at)}</p>
                    </div>
                  </div>
                  <div className="mt-5">
                    <StarButton />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-3xl font-bold text-center mt-40">
          {user?.login} doesn’t have any repositories that match.
        </p>
      )}
    </>
  );
};

export default Repositories;
