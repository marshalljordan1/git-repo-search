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
    // Use async/await to fetch data from the GitHub API
    const [reposResponse, userResponse] = await Promise.all([
      axios.get(`https://api.github.com/users/${username}/repos`, {}), // Fetch user's repositories with the access token
      axios.get(`https://api.github.com/users/${username}`, {}), // Fetch user's information with the access token
    ]);

    const repositories = reposResponse.data; // Extract repositories data
    const user = userResponse.data; // Extract user data

    // Return an object containing both repositories and user data
    return { repositories, user };
  }
);

const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.isSearchQueryEmpty = !action.payload;
    },
    setSearchedUser: (state, action) => {
      state.searchedUser = action.payload;
    },
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
        state.error = null;
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
