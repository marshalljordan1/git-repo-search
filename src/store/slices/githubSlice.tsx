import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GithubState } from "../../interfaces/interfaces";

const initialState: GithubState = {
  repositories: [],
  user: null,
  status: "idle",
  error: null,
  searchTerm: "",
  filteredRepositories: [],
};

export const fetchGithubData = createAsyncThunk(
  "github/fetchData",
  async (username: string) => {
    const [reposResponse, userResponse] = await Promise.all([
      axios.get(`https://api.github.com/users/${username}/repos`),
      axios.get(`https://api.github.com/users/${username}`),
    ]);

    const repositories = reposResponse.data;
    const user = userResponse.data;

    console.log(user);

    return { repositories, user };
  }
);

const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    filterRepositories: (state) => {
      if (!state.searchTerm) {
        state.filteredRepositories = state.repositories;
      } else {
        state.filteredRepositories = state.repositories.filter((repository) =>
          repository.name.toLowerCase().includes(state.searchTerm.toLowerCase())
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGithubData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGithubData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.repositories = action.payload.repositories;
        state.user = action.payload.user;
      })
      .addCase(fetchGithubData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export const { setSearchTerm, filterRepositories } = githubSlice.actions;

export default githubSlice.reducer;
