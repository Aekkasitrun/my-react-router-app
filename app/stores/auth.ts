// app/store/auth.ts
import { create } from 'zustand';

// Define the shape of your authentication state
interface AuthState {
  isAuthenticated: boolean;
  user: { username: string } | null; // You might expand this with more user details
  token: string | null;
  isLoading: boolean; // Added isLoading state
  error: string | null; // Added error state

  login: (username: string, token: string, userDetails?: { username: string }) => void; // Updated login to potentially take user details
  logout: () => void;
  initializeAuth: () => void;
  // You might add an async login function here for API calls
  // loginUser: (credentials: { username: string; password: string }) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({ // Added 'get'
  // Initial state
  isAuthenticated: false,
  user: null,
  token: null,
  isLoading: true, // Set to true initially while checking localStorage
  error: null,

  // Action to log in a user
  // Added optional userDetails parameter to align with potential API responses
  login: (username: string, token: string, userDetails?: { username: string }) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(userDetails || { username })); // Store user details
    set({
      isAuthenticated: true,
      user: userDetails || { username },
      token,
      isLoading: false, // Set loading to false on successful login
      error: null,
    });
  },

  // Action to log out a user
  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user'); // Also remove user details
    set({
      isAuthenticated: false,
      user: null,
      token: null,
      isLoading: false, // Set loading to false on logout
      error: null,
    });
  },

  // A function to initialize the auth state from local storage on app load
  initializeAuth: () => {
    const storedToken = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        set({
          isAuthenticated: true,
          user: parsedUser,
          token: storedToken,
          isLoading: false, // Done loading
          error: null,
        });
      } catch (e) {
        console.error("Failed to parse stored user or token, logging out:", e);
        get().logout(); // Logout if data is corrupted
        set({ isLoading: false, error: "Failed to load session" }); // Done loading, set error
      }
    } else {
      set({ isLoading: false, error: null }); // No token found, so not authenticated, done loading
    }
  },

  // Example of an async login function that might interact with your API
  // You would call this from your login form's onSubmit handler
  /*
  loginUser: async (credentials: { username: string; password: string }) => {
    set({ isLoading: true, error: null }); // Start loading, clear previous errors
    try {
      const response = await axios.post('http://10.128.76.212:3000/api/auth/login', credentials);
      const { token, user } = response.data; // Assuming your API returns token and user info ({ username: '...' })

      // Update state with received data
      set({
        isAuthenticated: true,
        user: user, // Use the actual user object from API
        token,
        isLoading: false,
        error: null,
      });
      localStorage.setItem('authToken', token); // Save token
      localStorage.setItem('user', JSON.stringify(user)); // Save user details

      console.log('Login successful via API');
    } catch (error: any) {
      console.error('Login failed via API:', error);
      // Handle error, e.g., show error message to user
      set({
        isAuthenticated: false,
        user: null,
        token: null,
        isLoading: false,
        error: error.response?.data?.message || 'Login failed', // Set the error message
      });
      throw error; // Re-throw to allow component to handle it (e.g., in login page)
    }
  },
  */
}));

// Initial check for authentication when the store is created
// This ensures that if a token exists in localStorage on page load,
// the user is automatically logged in.
// This line should ideally be placed where the store is initialized at application startup,
// which in Vite/React Router setup is often in main.tsx or a root layout component,
// rather than directly at the bottom of the store file itself to avoid re-runs
// if the file is hot-reloaded by Fast Refresh.
// However, for initial setup, this is fine.
// A more robust approach might involve calling initializeAuth in a useEffect in your root component.
(useAuthStore.getState() as AuthState & { initializeAuth: () => void }).initializeAuth();
