import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GitHubRepository, GitHubUser } from "../../interfaces/interfaces"; // Import your interfaces

const initialState = {
  repositories: [] as GitHubRepository[],
  user: null as GitHubUser | null, // Store user info
  status: "idle",
  error: null as string | null,
};

export const fetchGitHubData = createAsyncThunk(
  "github/fetchData",
  async (username: string) => {
    // Fetch both the repositories and user info in a single API call
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGitHubData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGitHubData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.repositories = action.payload.repositories;
        state.user = action.payload.user;
      })
      .addCase(fetchGitHubData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export default githubSlice.reducer;
