import axios from "axios";

const API_BASE_URL = "https://api.github.com";
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

const headers = API_KEY ? { Authorization: `Bearer ${API_KEY}` } : {};

// Search users
export const searchUsers = async ({ username, location, minRepos }) => {
  let query = "";
  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(
    `${API_BASE_URL}/search/users?q=${encodeURIComponent(query)}`,
    { headers }
  );

  const users = response.data.items;

  // Fetch full info for each user
  const fullUsers = await Promise.all(
    users.map(async (u) => {
      const detail = await axios.get(`${API_BASE_URL}/users/${u.login}`, { headers });
      return detail.data; // this now includes bio, followers, repos, etc.
    })
  );

  return fullUsers;
};


// "https://api.github.com/search/users?q"