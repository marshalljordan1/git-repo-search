export interface GitHubRepository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  updated_at: string;
}

export interface GithubState {
  repositories: GitHubRepository[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
