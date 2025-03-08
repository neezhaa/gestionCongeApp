// LeaveContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import api from '../services/api';

const LeaveContext = createContext();

export const LeaveProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [exitingIds, setExitingIds] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const [employeesRes, leaveRequestsRes] = await Promise.all([
          axios.get('http://localhost:8000/api/employes'),
          axios.get('http://localhost:8000/api/conges', 
          { headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` }}
          )
        ]);
        
        setEmployees(employeesRes.data);
        setLeaveRequests(leaveRequestsRes.data);
      } catch (error) {
        toast.error('Erreur de chargement des données');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  // Handle approve/reject actions
  const handleAction = async (requestId, action) => {
    try {
        setExitingIds(prev => [...prev, requestId]);
        const request = leaveRequests.find(r => r.id === requestId);
      
        // Update request status
        await api.put(`/conges/${requestId}`, 
            { statut: action === 'approve' ? 'accepté' : 'refusé'}, 
            { headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` }}
        );

        // Send notification
        await api.post('/notifications',
            {
                employe_id: request.employe_id,
                type: 'reponse_demande',
                message: `Demande ${action === 'approve' ? 'acceptée' : 'rejetée'}`,
                demande_conge_id: requestId
            }, 
            { headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` }}
        );

        // Update local state
        setLeaveRequests(prev => prev.filter(r => r.id !== requestId));
        toast.success(`Demande ${action === 'approve' ? 'acceptée' : 'rejetée'}`);
      
    } catch (error) {
      toast.error('Erreur lors du traitement de la demande');
      setExitingIds(prev => prev.filter(id => id !== requestId));
    }
  };


  const handleEditEmployee = async (employeeId, updatedData) => {
    try {
      const response = await api.put(`/employes/${employeeId}`, updatedData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` }
      });
      
      setEmployees(prev => 
        prev.map(emp => 
          emp.id === employeeId ? { ...emp, ...response.data } : emp
        )
      );
      toast.success('Employee updated successfully');
      return true;
    } catch (error) {
      toast.error('Error updating employee');
      return false;
    }
  };

  const handleDeleteEmployee = async (employeeId) => {
    try {
      await api.delete(`/employes/${employeeId}`, 
        {  headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` }
      });
      
      setEmployees(prev => prev.filter(emp => emp.id !== employeeId));
      toast.success('Employee deleted successfully');
      return true;
    } catch (error) {
      toast.error('Error deleting employee');
      return false;
    }
  };


  // Context value
  const value = {
    employees,
    leaveRequests,
    exitingIds,
    loading,
    handleAction,
    handleEditEmployee,
    handleDeleteEmployee
  };

  return (
    <LeaveContext.Provider value={value}>
      {children}
    </LeaveContext.Provider>
  );
};

export const useLeaveContext = () => {
  const context = useContext(LeaveContext);
  if (!context) {
    throw new Error('useLeaveContext must be used within a LeaveProvider');
  }
  return context;
};