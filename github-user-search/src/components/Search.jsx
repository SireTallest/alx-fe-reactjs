import { useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://api.github.com";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY; // optional token for higher rate limit
const headers = API_KEY ? { Authorization: `Bearer ${API_KEY}` } : {};

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      // Build search query
      let query = "";
      if (username) query += `${username} in:login`;
      if (location) query += ` location:${location}`;
      if (minRepos) query += ` repos:>=${minRepos}`;

      // Search users
      const searchRes = await axios.get(
        `${API_BASE_URL}/search/users?q=${encodeURIComponent(query)}`,
        { headers }
      );

      const items = searchRes.data.items;

      if (!items || items.length === 0) {
        throw new Error("Looks like we can't find the user");
      }

      // Fetch full user info for each result (includes bio)
      const fullUsers = await Promise.all(
        items.map(async (u) => {
          const detail = await axios.get(`${API_BASE_URL}/users/${u.login}`, { headers });
          return detail.data;
        })
      );

      setUsers(fullUsers);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Advanced GitHub User Search
      </h2>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="username" className="text-sm font-medium text-gray-700 mb-1">
            GitHub Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="e.g. torvalds"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="location" className="text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            id="location"
            type="text"
            placeholder="e.g. Nigeria"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="minRepos" className="text-sm font-medium text-gray-700 mb-1">
            Minimum Repositories
          </label>
          <input
            id="minRepos"
            type="number"
            placeholder="e.g. 10"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-200"
        >
          Search
        </button>
      </form>

      {/* Loading/Error */}
      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-center text-red-500">{error}</p>}

      {/* Users Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-gray-50 p-4 rounded-lg shadow text-center"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full mx-auto"
            />
            <h3 className="mt-2 font-bold">{user.name || user.login}</h3>
            {user.bio && <p className="text-gray-600 text-sm mt-1">{user.bio}</p>}
            <p className="text-gray-500 text-sm mt-1">{user.location && user.location}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 block"
            >
              GitHub Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;

// fetchUserData
