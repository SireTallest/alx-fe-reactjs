import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './components/Search';
import {fetchUserData} from './services/githubService';

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0)
  const handleSearch = async (username) =>{
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className = "App">
      <h1>GitHub User Finder</h1>
      <Search onSearch = {handleSearch}/>

      {loading && <p>Loading...</p>}
      {error && < p>Looks like we can't find the user, img</p>}
      {userData && (
        <div className ="user-info">
          <img src={userData.avatar_url} alt={userData.name} />
          <h2>{userData.name || userData.login}</h2>
          <p>@{userData.login}</p>
          <a href = {userData.html_url} target="_blank" rel="noopener noreferrer">View Github Profile</a>
        </div>
      )}
    </div>
      <div>
        <h1>Github User Finder</h1>
        <Search onSearch = {handleSearch}/>
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App
