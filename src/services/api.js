import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('authToken')}`
  }
});

// Employees
export const getEmployees = () => api.get('/employes');
export const updateEmployee = (id, data) => api.put(`/employes/${id}`, data);
export const deleteEmployee = (id) => api.delete(`/employes/${id}`);

// Leave Requests
export const getLeaveRequests = () => api.get('/conges');
export const createLeaveRequest = (data) => api.post('/conges', data);

// Notifications
export const getNotifications = () => api.get('/notifications');
export const createNotification = (data) => api.post('/notifications', data);

export default api;