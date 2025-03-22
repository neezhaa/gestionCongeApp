import { useEffect, useState } from 'react';
import { BellIcon, CheckCircleIcon, DocumentTextIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useLeaveContext } from '../../context/LeaveContext';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'sonner';

const Notifications = () => {
  const { auth } = useAuth();
  const { leaveRequests } = useLeaveContext();
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simuler la récupération des notifications depuis le contexte
    const employeeNotifications = leaveRequests
      .filter(req => req.employe_id === auth?.user?.id)
      .map(req => ({
        id: req.id,
        message: `Demande de congé (${req.motif_conge}) - ${req.statut}`,
        created_at: new Date().toISOString(),
        type: req.statut === 'en attente' ? 'nouvelle_demande' : 'reponse_demande'
      }));
    
    setNotifications(employeeNotifications);
  }, [leaveRequests, auth?.user?.id]);

  const handleDeleteNotification = (notificationId) => {
    setNotifications(prev => prev.filter(n => n.id !== notificationId));
    toast.success('Notification supprimée');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 mt-6">
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-lg font-semibold flex items-center">
          <BellIcon className="w-5 h-5 mr-2 text-gray-500" />
          Notifications
        </h2>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
          {notifications.length}
        </span>
      </div>
      
      <ul className="divide-y divide-gray-200">
        {notifications.map((notification) => (
          <li 
            key={notification.id}
            className="px-6 py-4 hover:bg-gray-50 flex items-start group relative"
          >
            <div className={`flex-shrink-0 p-2 rounded-lg ${
              notification.type === 'nouvelle_demande' 
                ? 'bg-blue-100' 
                : 'bg-green-100'
            }`}>
              {notification.type === 'nouvelle_demande' ? (
                <DocumentTextIcon className="w-5 h-5 text-blue-600" />
              ) : (
                <CheckCircleIcon className="w-5 h-5 text-green-600" />
              )}
            </div>

            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-900">
                {notification.message}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {new Date(notification.created_at).toLocaleDateString('fr-FR')}
              </p>
            </div>

            <button
              onClick={() => handleDeleteNotification(notification.id)}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded-lg ml-4"
            >
              <XMarkIcon className="w-5 h-5 text-gray-400 hover:text-gray-600" />
            </button>
          </li>
        ))}
        
        {notifications.length === 0 && (
          <li className="px-6 py-4 text-center text-gray-500">
            Aucune notification
          </li>
        )}
      </ul>
    </div>
  );
};

export default Notifications;