import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GithubState } from "../../interfaces/interfaces";

const initialState: GithubState = {
  repositories: [],
  userInfo: null,
  searchedUser: "marshalljordan1",
  status: "idle",
  error: null,
  searchTerm: "",
  filteredRepositories: [],
  searchResultsCount: 0,
  isSearchQueryEmpty: true,
};

export const fetchGithubData = createAsyncThunk(
  "github/fetchData", // A unique string identifier for the action
  async (username: string) => {
    console.log(username);

    // Use async/await to fetch data from the GitHub API
    const [reposResponse, userResponse] = await Promise.all([
      axios.get(`https://api.github.com/users/${username}/repos`), // Fetch user's repositories
      axios.get(`https://api.github.com/users/${username}`), // Fetch user's information
    ]);

    const repositories = reposResponse.data; // Extract repositories data
    const user = userResponse.data; // Extract user data

    // Return an object containing both repositories and user data
    return { repositories, user };
  }
);

/**
 * A slice of the Redux store for the Github data.
 *
 * @remarks
 * This slice includes reducers for setting the search term and filtering repositories.
 * It also handles the pending, fulfilled, and rejected states of the async thunk.
 *
 * @typedef {Slice} GithubSlice
 */
const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    /**
     * Set the search term and update the flag indicating if the search query is empty.
     *
     * @param {GithubState} state - The current state.
     * @param {PayloadAction<string>} action - The action with the payload containing the search term.
     */
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.isSearchQueryEmpty = !action.payload;
    },
    setSearchedUser: (state, action) => {
      state.searchedUser = action.payload;
    },
    /**
     * Filter repositories based on the search term and update search results count.
     *
     * @param {GithubState} state - The current state.
     */
    filterRepositories: (state) => {
      if (!state.searchTerm) {
        state.isSearchQueryEmpty = !state.searchTerm;
        state.filteredRepositories = state.repositories;
        state.searchResultsCount = 0;
      } else {
        state.filteredRepositories = state.repositories.filter((repository) =>
          repository.name.toLowerCase().includes(state.searchTerm.toLowerCase())
        );
        state.searchResultsCount = state.filteredRepositories.length;
      }
    },
  },
  extraReducers: (builder) => {
    // Handle the pending, fulfilled, and rejected states of the async thunk.
    builder
      .addCase(fetchGithubData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGithubData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.repositories = action.payload.repositories;
        state.userInfo = action.payload.user;
      })
      .addCase(fetchGithubData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

/**
 * Export the Github slice reducer.
 *
 * @typedef {Reducer<GithubState>} GithubReducer
 */
export const { setSearchTerm, filterRepositories, setSearchedUser } =
  githubSlice.actions;

export default githubSlice.reducer;
