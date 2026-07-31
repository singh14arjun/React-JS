import axios from 'axios';

// Creating an industry-standard Axios instance
const apiClient = axios.create({
    // Fallback to fakestoreapi for demo purposes since the project is named FakeStore
    baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.escuelajs.co/api/v1',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor: useful for adding auth tokens in real-time
apiClient.interceptors.request.use(
    (config) => {
        // e.g., const token = localStorage.getItem('token');
        // if (token) { config.headers.Authorization = `Bearer ${token}` }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor: useful for global error handling
apiClient.interceptors.response.use(
    (response) => {
        // You can process the response data directly here if needed
        return response.data;
    },
    (error) => {
        // Handle specific status codes (e.g., 401 Unauthorized, 500 Server Error)
        if (error.response) {
            console.error('API Error:', error.response.status, error.response.data);
        } else if (error.request) {
            console.error('Network Error: No response received');
        }
        return Promise.reject(error);
    }
);

export default apiClient;
