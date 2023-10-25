import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GitHubRepository } from "../../interfaces/interfaces";

const initialState = {
  repositories: [] as GitHubRepository[],
  status: "idle",
  error: null as string | null,
};

export const fetchGitHubRepositories = createAsyncThunk(
  "github/fetchRepositories",
  async (username: string) => {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    return response.data;
  }
);

const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGitHubRepositories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGitHubRepositories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.repositories = action.payload;
      })
      .addCase(fetchGitHubRepositories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export default githubSlice.reducer;
