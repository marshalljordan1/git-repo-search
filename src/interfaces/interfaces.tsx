export interface GitHubRepository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  updated_at: string;
  language: string;
}

export interface GitHubUser {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
}

export interface GithubState {
  repositories: GitHubRepository[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
