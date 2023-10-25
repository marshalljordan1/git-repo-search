import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import StarButton from "./StarButton";
import { fetchGithubData } from "../store/slices/githubSlice";
import { useDateFormat } from "../context/DateFormatContext";

const Repositories: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const filteredRepositories = useSelector(
    (state: RootState) => state.github.filteredRepositories
  );

  const { formatDateAgo } = useDateFormat();

  useEffect(() => {
    dispatch(fetchGithubData("marshalljordan1"));
  }, [dispatch]);

  return (
    <>
      <div>
        <ul className="flex flex-col mb-10">
          {filteredRepositories.map((repository) => (
            <li className="py-6 border-b" key={repository.id}>
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
