import { GithubState } from "../../interfaces/interfaces";
import { GitHubRepository } from "../../interfaces/interfaces";

const initialState: GithubState = {
  repositories: [],
  status: "idle",
  error: null,
};

type GetReposSuccessAction = {
  type: "GET_REPOS_SUCCESS";
  payload: GitHubRepository[];
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
      return {
        ...state,
        repositories: action.payload,
        status: "succeeded",
      };
    case "GET_REPOS_FAILURE":
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
