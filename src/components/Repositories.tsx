import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import StarButton from "./StarButton";
import { fetchGitHubRepositories } from "../store/slices/githubSlice";

const Repositories: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const repositories = useSelector(
    (state: RootState) => state.github.repositories
  );

  useEffect(() => {
    // Dispatch the action to fetch GitHub repositories
    dispatch(fetchGitHubRepositories("marshalljordan1")); // Provide the username
  }, [dispatch]);

  return (
    <>
      <div>
        <ul className="flex flex-col mb-10">
          {repositories.map((repository) => (
            <li className="py-6 border-b" key={repository.id}>
              <div className="flex">
                <div className="flex flex-col gap-2 w-10/12">
                  <a
                    href={repository.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repository.name}
                  </a>
                  <p>{repository.description}</p>

                  <div className="flex gap-4">
                    <p>Typescript</p>
                    <p>Updated {repository.updated_at}</p>
                  </div>
                </div>
                <div>
                  <StarButton />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Repositories;
