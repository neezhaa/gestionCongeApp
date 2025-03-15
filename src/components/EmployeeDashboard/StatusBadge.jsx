import { ClockIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

const StatusBadge = ({ status }) => {
  const statusStyles = {
    'en attente': 'bg-yellow-100 text-yellow-800',
    'accepté': 'bg-green-100 text-green-800',
    'refusé': 'bg-red-100 text-red-800'
  };
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${statusStyles[status]}`}>
      {status === 'en attente' && <ClockIcon className="w-4 h-4 mr-1" />}
      {status === 'accepté' && <CheckCircleIcon className="w-4 h-4 mr-1" />}
      {status === 'refusé' && <XCircleIcon className="w-4 h-4 mr-1" />}
      {status}
    </span>
  );
};

export default StatusBadge;