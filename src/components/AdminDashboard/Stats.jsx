import { CheckIcon, DocumentCheckIcon, UserGroupIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { useLeaveContext } from '../../context/LeaveContext';

function AdminDashboard() {
    const { employees, leaveRequests } = useLeaveContext();

    return (

        <div className="flex-1 overflow-x-hidden overflow-y-auto">
            <div className="container mx-auto px-6 pt-8 pb-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <div className='bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                            <UserGroupIcon className="w-6 h-6 text-gray-700" />
                        </div>
                        <h2 className="text-xl font-bold mb-4">Total Employees</h2>
                        <p className="text-3xl font-bold mt-2">{employees.length}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className='bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                            <CheckIcon className="w-6 h-6 text-gray-700" />
                        </div>
                        <h2 className="text-xl font-bold mb-4">Pending Leave Requests</h2>
                        <p className="text-3xl font-bold mt-2">{leaveRequests.filter(req => req.statut === 'en attente').length}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className='bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                            <DocumentCheckIcon className="w-6 h-6 text-gray-700" />
                        </div>
                        <h2 className="text-xl font-bold mb-4">Approved Leave Requests</h2>
                        <p className="text-3xl font-bold mt-2">{leaveRequests.filter(req => req.statut === 'accepté').length}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className='bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                            <XCircleIcon className="w-6 h-6 text-gray-700" />
                        </div>
                        <h2 className="text-xl font-bold mb-4">Rejected Leave Requests</h2>
                        <p className="text-3xl font-bold  mt-2">{leaveRequests.filter(req => req.statut === 'refusé').length}</p>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default AdminDashboard;