export interface GithubRepository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  updated_at: string;
  language: string;
}

export interface GithubUser {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
}

export interface GithubState {
  repositories: GithubRepository[];
  user: GithubUser | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  searchTerm: string;
  filteredRepositories: GithubRepository[];
}
