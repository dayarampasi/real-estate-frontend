import axios from 'axios';

const API = axios.create({
    baseURL: process.env.NODE_ENV === 'production' 
        ? 'https://your-backend-url.onrender.com/api' 
        : 'http://localhost:5000/api',
    withCredentials: true
});

export const login = (credentials) => API.post('/auth/login', credentials);
export const checkAuth = () => API.get('/auth/check');
export const logout = () => API.post('/auth/logout');
export const getAllContent = () => API.get('/content/all');
export const updateContent = (section, data) => API.post(`/content/update/${section}`, { data });

export default API;