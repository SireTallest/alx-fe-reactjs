import {useState} from 'react';
const Search = ({onSearch})=>{
    const [username, setUsername] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim()) {
            onSearch(username);
            setUsername('');
        }
       
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter GitHub username"
            />
            <button type="submit" disabled = {!username.trim()}>Search</button>
        </form>
    );
};

export default Search;
