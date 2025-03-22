import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';
import api from '../services/api';

const LeaveContext = createContext();

export const LeaveProvider = ({ children }) => {
  const [state, setState] = useState({
    employees: [],
    leaveRequests: [],
    notifications: [],
    exitingIds: [],
    loading: true
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [employeesRes, leaveRequestsRes, notificationsRes] = await Promise.all([
          api.get('/employes'),
          api.get('/conges'),
          api.get('/notifications')
        ]);

        setState({
          employees: employeesRes.data,
          leaveRequests: leaveRequestsRes.data.data,
          notifications: notificationsRes.data,
          exitingIds: [],
          loading: false
        });
      } catch (error) {
        toast.error('Erreur de chargement des données');
        setState(prev => ({ ...prev, loading: false }));
      }
    };

    fetchData();
  }, []);

  const handleCreateRequest = async (employeeId, data) => {
    try {
      const response = await api.post('/conges', {
        ...data,
        employe_id: employeeId,
        statut: 'en attente'
      });

      setState(prev => ({
        ...prev,
        leaveRequests: [...prev.leaveRequests, response.data],
        notifications: [...prev.notifications, {
          ...response.data,
          type: 'nouvelle_demande',
          message: 'Nouvelle demande créée'
        }]
      }));

      toast.success('Demande créée avec succès');
      return true;
    } catch (error) {
      toast.error("Échec de la création de la demande");
      return false;
    }
  };

  const handleAction = async (requestId, action) => {
    try {
      setState(prev => ({ ...prev, exitingIds: [...prev.exitingIds, requestId] }));
      
      const request = state.leaveRequests.find(r => r.id === requestId);
      if (action === 'approve') {
        await api.put(`employes/${request.employe_id}`, {
          solde_conge: request.employe.solde_conge - request.nbr_jours_demandes
        });
      }

      await api.post('notifications', {
        employe_id: request.employe_id,
        type: 'reponse_demande',
        message: `Demande ${action === 'approve' ? 'acceptée' : 'rejetée'}`,
        demande_conge_id: requestId
      });

      setState(prev => ({
        ...prev,
        leaveRequests: prev.leaveRequests.filter(r => r.id !== requestId),
        exitingIds: prev.exitingIds.filter(id => id !== requestId)
      }));
      
      toast.success(`Demande ${action === 'approve' ? 'acceptée' : 'rejetée'}`);
    } catch (error) {
      toast.error('Erreur lors du traitement');
      setState(prev => ({
        ...prev,
        exitingIds: prev.exitingIds.filter(id => id !== requestId)
      }));
    }
  };

  return (
    <LeaveContext.Provider value={{ 
      ...state, 
      handleAction,
      handleCreateRequest 
    }}>
      {children}
    </LeaveContext.Provider>
  );
};

<<<<<<< HEAD
export const useLeaveContext = () => {
  const context = useContext(LeaveContext);
  if (!context) {
    throw new Error('useLeaveContext must be used within a LeaveProvider');
  }
  return context;
};


=======
export const useLeaveContext = () => useContext(LeaveContext);
>>>>>>> 67cd6c12c99e5d98102b8fdb900934e1d477fc21
