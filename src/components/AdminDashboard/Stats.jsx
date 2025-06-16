import { ClockIcon, CheckCircleIcon, UserGroupIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { useLeaveContext } from '../../context/LeaveContext';
import { useTranslation } from 'react-i18next';

function Stats() {
    const { employees, leaveRequests, notifications } = useLeaveContext();
    const { t } = useTranslation();

    const stats = [
        {
            icon: <UserGroupIcon className="w-6 h-6 text-gray-700" />,
            title: t('stats.totalEmployees'),
            value: employees.length,
            bgColor: 'bg-blue-100',
        },
        {
            icon: <ClockIcon className="w-6 h-6 text-gray-700" />,
            title: t('stats.pendingRequests'),
            value: leaveRequests.filter(req => req.statut === 'en attente').length,
            bgColor: 'bg-yellow-100',
        },
        {
            icon: <CheckCircleIcon className="w-6 h-6 text-gray-700" />,
            title: t('stats.approvedRequests'),
            value: notifications.filter(req => req.message === 'Demande acceptée').length,
            bgColor: 'bg-green-100',
        },
        {
            icon: <XCircleIcon className="w-6 h-6 text-gray-700" />,
            title: t('stats.rejectedRequests'),
            value: notifications.filter(req => req.message === 'Demande rejetée').length,
            bgColor: 'bg-red-100',
        },
    ];

    return (
        <div className="flex-1 overflow-x-hidden overflow-y-auto">
            <div className="container mx-auto px-6 pt-8 pb-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                            <div className={`${stat.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                                {stat.icon}
                            </div>
                            <h2 className="text-xl font-bold mb-2">{stat.title}</h2>
                            <p className="text-3xl font-bold">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Stats;
