import ProfilePage from './components/ProfilePage.jsx'
import UserContext from './components/UserContext.js';

function App() {
  const userData = {
    name: "Oladepo Abdulbaki",
    email: "abdoladepo@gmail.com"
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;