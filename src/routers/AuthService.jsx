// AuthService.js
const baseURL = 'http://localhost:5000';

const AuthService = {
  authenticate: async (username, password) => {
    try {
      const response = await fetch(`${baseURL}/login?username=${username}&password=${password}`);
  
      if (!response.ok) {
        throw new Error('Authentication failed');
      }
  
      const data = await response.json();
  
      if (data.length === 1) {
        // Authentication successful
        
        return data[0];

      } else {
        throw new Error('Authentication failed');
      }
    } catch (error) {
      console.error('Error during authentication:', error.message);
      return null;
    }
  },
};

export default AuthService;