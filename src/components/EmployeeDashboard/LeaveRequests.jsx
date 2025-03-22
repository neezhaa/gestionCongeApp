import { DocumentTextIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import StatusBadge from './StatusBadge';

const LeaveRequests = ({ leaveRequests, onNewRequest, loading }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8">
    <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
      <h2 className="text-lg font-semibold flex items-center">
        <DocumentTextIcon className="w-5 h-5 mr-2 text-gray-500" />
        Mes demandes
      </h2>
      <button
        onClick={onNewRequest}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center transition-all"
      >
        <PlusCircleIcon className="w-5 h-5 mr-2" />
        Nouvelle demande
      </button>
    </div>
    
    {loading ? (
      <div className="p-6 text-center">Chargement...</div>
    ) : (
      <div className="overflow-x-auto">
        <table className="w-full">
            <thead className="bg-gray-50">
            <tr>
                {['Début', 'Fin', 'Jours', 'Motif', 'Statut'].map((header) => (
                <th 
                    key={header} 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                    {header}
                </th>
                ))}
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
            {leaveRequests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{new Date(request.date_debut).toLocaleDateString('fr-FR')}</td>
                <td className="px-6 py-4 whitespace-nowrap">{new Date(request.date_fin).toLocaleDateString('fr-FR')}</td>
                <td className="px-6 py-4 whitespace-nowrap">{request.nbr_jours_demandes}</td>
                <td className="px-6 py-4 whitespace-nowrap capitalize">{request.motif_conge}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={request.statut} />
                </td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    )}
  </div>
);

export default LeaveRequests;