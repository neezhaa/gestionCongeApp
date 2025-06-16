import { ClockIcon, CheckCircleIcon, UserGroupIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { useLeaveContext } from '../../context/LeaveContext';

function Stats() {
    const { employees, leaveRequests, notifications } = useLeaveContext();

    return (
        <div className="flex-1 overflow-x-hidden overflow-y-auto">
            <div className="container mx-auto px-6 pt-8 pb-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <div className='bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                            <UserGroupIcon className="w-6 h-6 text-gray-700" />
                        </div>
                        <h2 className="text-xl font-bold mb-4">Total des Employés</h2>
                        <p className="text-3xl font-bold mt-2">{employees.length}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className='bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                            <ClockIcon className="w-6 h-6 text-gray-700" />
                        </div>
                        <h2 className="text-xl font-bold mb-4">Demandes en Attente</h2>
                        <p className="text-3xl font-bold mt-2">{leaveRequests.filter(req => req.statut === 'en attente').length}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className='bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                            <CheckCircleIcon className="w-6 h-6 text-gray-700" />
                        </div>
                        <h2 className="text-xl font-bold mb-4">Demandes Approuvées</h2>
                        <p className="text-3xl font-bold mt-2">{notifications.filter(req => req.message === 'Demande acceptée').length}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className='bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                            <XCircleIcon className="w-6 h-6 text-gray-700" />
                        </div>
                        <h2 className="text-xl font-bold mb-4">Demandes Rejetées</h2>
                        <p className="text-3xl font-bold mt-2">{notifications.filter(req => req.message === 'Demande rejetée').length}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;