// AuthService.js
const baseURL = 'http://localhost:5000';

const AuthService = {
  login: async (username, password) => {
    try {
      const response = await fetch(`${baseURL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error during login:', error.message);
      return null;
    }
  },
};

export default AuthService;
