import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function AllLeaveDemandes() {
  const { t, i18n } = useTranslation();
  const [notifications, setNotifications] = useState([]);
  const authUser = JSON.parse(localStorage.getItem('authUser'));

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/notifications', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        });

        const userNotifications = response.data.filter(
          (notif) => notif.employe_id === authUser.id
        );

        setNotifications(userNotifications);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, [authUser.id]);

  // Format date based on current language
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString(i18n.language);
  };

  return (
    <div className={`p-4 ${i18n.dir() === 'rtl' ? 'mr-28' : 'ml-28'}`}>
      <h2 className="text-2xl font-semibold mb-4">{t('notifications.title')}</h2>

      {notifications.length === 0 ? (
        <p>{t('notifications.empty')}</p>
      ) : (
        <ul className="space-y-3">
          {notifications.map((notif) => {
            const isAccepted = notif.message.includes(t('notifications.status.approved'));
            const bgColor = isAccepted ? 'bg-green-100' : 'bg-red-100';
            const textColor = isAccepted ? 'text-green-800' : 'text-red-800';
            const borderColor = isAccepted ? 'border-green-400' : 'border-red-400';

            return (
              <li
                key={notif.id}
                className={`${i18n.dir() === 'rtl' ? 'border-r-4' : 'border-l-4'} w-1/2 p-4 ${bgColor} ${textColor} ${borderColor} rounded-lg shadow`}
                dir={i18n.dir()}
              >
                <p>{notif.message}</p>
                <p className="text-xs text-gray-500">
                  {t('notifications.received')} {formatDate(notif.created_at)}
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