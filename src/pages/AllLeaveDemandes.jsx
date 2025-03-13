import axios from 'axios';
import { useEffect, useState } from 'react';

function AllLeaveDemandes() {
  const [notifications, setNotifications] = useState([]);
  const authUser = JSON.parse(localStorage.getItem('authUser')); // Assurez-vous que l'utilisateur est stocké

  useEffect(() => {
    const fetchNotifications = async () => {
        const response = await axios.get('http://localhost:8000/api/notifications', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        });

        

        // Filtrer les notifications pour l'utilisateur actuel
        const userNotifications = response.data.filter(
          (notif) => notif.employe_id === authUser.id
        );

        setNotifications(userNotifications);
        console.log(notifications)

    };

    fetchNotifications();
  }, [authUser.id]);



  return (
<div className="p-4 ml-28">
  <h2 className="text-2xl font-semibold mb-4">Mes Notifications</h2>

  {notifications.length === 0 ? (
    <p>Aucune notification pour le moment.</p>
  ) : (
    <ul className="space-y-3">
      {notifications.map((notif) => {
        const isAccepted = notif.message.includes('acceptée');
        const bgColor = isAccepted ? 'bg-green-100' : 'bg-red-100';
        const textColor = isAccepted ? 'text-green-800' : 'text-red-800';
        const borderColor = isAccepted ? 'border-green-400' : 'border-red-400';

        return (
          <li
            key={notif.id}
            className={`w-1/2 p-4 ${bgColor} ${textColor} border-l-4 ${borderColor} rounded-lg shadow`}
          >
            <p>{notif.message}</p>
            <p className="text-xs text-gray-500">
              Reçu le : {new Date(notif.created_at).toLocaleString()}
            </p>
          </li>
        );
      })}
    </ul>
  )}
</div>

  );
}

export default AllLeaveDemandes;
