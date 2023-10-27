/**
 * Represents a GitHub repository.
 */
export interface GithubRepository {
  id: number; // Unique identifier for the repository.
  name: string; // Name of the repository.
  html_url: string; // URL to access the repository on GitHub.
  description: string; // Description of the repository.
  updated_at: string; // Date and time when the repository was last updated.
  language: string; // Programming language used in the repository.
}

/**
 * Represents a GitHub user.
 */
export interface GithubUser {
  name: string; // Full name of the GitHub user.
  login: string; // GitHub username.
  avatar_url: string; // URL of the user's avatar (profile picture).
  bio: string; // User's bio or profile description.
  followers: number; // Number of followers the user has.
  following: number; // Number of other users the user is following.
  public_repos: number; // Number of public repositories owned by the user.
}

/**
 * Represents the overall state of GitHub-related data.
 */
export interface GithubState {
  repositories: GithubRepository[]; // List of GitHub repositories.
  user: GithubUser | null; // GitHub user information or null if not available.
  status: "idle" | "loading" | "succeeded" | "failed"; // Status of data fetching.
  error: string | null; // Error message if data fetching fails.
  searchTerm: string; // Search term used to filter repositories.
  filteredRepositories: GithubRepository[]; // List of repositories filtered by the search term.
  searchResultsCount: number; // Number of search results.
  isSearchQueryEmpty: boolean; // Whether the search query is empty.
}
