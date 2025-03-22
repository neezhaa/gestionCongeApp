import { CalendarIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const LeaveStats = ({ employee, leaveRequests }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">Solde restant</p>
          <p className="text-3xl font-bold">{employee?.solde_conge || 0} jours</p>
        </div>
        <div className="bg-blue-100 p-3 rounded-lg">
          <CalendarIcon className="w-8 h-8 text-blue-600" />
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">En attente</p>
          <p className="text-3xl font-bold">
            {leaveRequests.filter(req => req.statut === 'en attente').length}
          </p>
        </div>
        <div className="bg-yellow-100 p-3 rounded-lg">
          <ClockIcon className="w-8 h-8 text-yellow-600" />
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">Acceptées</p>
          <p className="text-3xl font-bold">
            {leaveRequests.filter(req => req.statut === 'accepté').length}
          </p>
        </div>
        <div className="bg-green-100 p-3 rounded-lg">
          <CheckCircleIcon className="w-8 h-8 text-green-600" />
        </div>
      </div>
    </div>
  </div>
);

export default LeaveStats;