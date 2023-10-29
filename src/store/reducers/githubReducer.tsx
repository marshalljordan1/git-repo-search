import { GithubState } from "../../interfaces/interfaces";
import { GithubRepository } from "../../interfaces/interfaces";

const initialState: GithubState = {
  repositories: [],
  userInfo: null,
  searchedUser: "",
  status: "idle",
  error: null,
  searchTerm: "",
  filteredRepositories: [],
  searchResultsCount: 0,
  isSearchQueryEmpty: false,
};

type GetReposSuccessAction = {
  type: "GET_REPOS_SUCCESS";
  payload: GithubRepository[];
};

type GetReposFailureAction = {
  type: "GET_REPOS_FAILURE";
  payload: string;
};

type GithubAction = GetReposSuccessAction | GetReposFailureAction;

const githubReducer = (
  state = initialState,
  action: { type: string; payload?: GithubAction }
) => {
  switch (action.type) {
    case "GET_REPOS_SUCCESS":
      // Handle the action when repositories are successfully retrieved.
      return {
        ...state,
        repositories: action.payload,
        status: "succeeded",
      };
    case "GET_REPOS_FAILURE":
      // Handle the action when repository retrieval fails.
      return {
        ...state,
        error: action.payload,
        status: "failed",
      };
    default:
      return state;
  }
};

export default githubReducer;
