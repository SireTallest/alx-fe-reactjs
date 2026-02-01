import axios from 'axios';

const API_URL = import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com';

export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`${API_URL}/users/${username}`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            throw new Error('User not found');
        }
        throw new Error('Failed to fetch user data');
    }
};