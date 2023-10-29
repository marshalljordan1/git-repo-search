import { GithubState } from "../../interfaces/interfaces";
import { GithubRepository } from "../../interfaces/interfaces";

/**
 * Defines the initial state for the GithubState.
 */
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

/**
 * Defines the action type for successful repository retrieval.
 */
type GetReposSuccessAction = {
  type: "GET_REPOS_SUCCESS";
  payload: GithubRepository[];
};

/**
 * Defines the action type for repository retrieval failure.
 */
type GetReposFailureAction = {
  type: "GET_REPOS_FAILURE";
  payload: string;
};

/**
 * Defines a union type for all possible Github actions.
 */
type GithubAction = GetReposSuccessAction | GetReposFailureAction;

/**
 * Defines the githubReducer function.
 * @param state - The current state of the Github data.
 * @param action - The action dispatched to modify the state.
 * @returns The new state based on the action type.
 */
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
      // Default case, return the current state for unknown actions.
      return state;
  }
};

export default githubReducer;
