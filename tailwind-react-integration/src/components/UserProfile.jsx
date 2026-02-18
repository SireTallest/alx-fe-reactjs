
import '../index.css';
import react from '../assets/react.svg'

function UserProfile() {
  return (
    <div className="bg-gray-100 p-8 sm:p-4 md:p-8 md:max-w-sm max-w-xs mx-auto my-20 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-xl">
      <img src={ react } alt="User" className="rounded-full w-36 h-36 mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36" />
      <h1 className="text-xl sm:text-lg md:text-xl text-blue-800 my-4 text-center hover:text-blue-500">John Doe</h1>
      <p className="text-gray-600 sm:text-sm  md:text-base text-center">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;