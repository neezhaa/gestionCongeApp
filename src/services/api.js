import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getEmployees = () => api.get('/employes');
export const getLeaveRequests = () => api.get('/conges', {
    headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` }
  });
export const getNotifications = () => api.get('/notifications');

export default api;