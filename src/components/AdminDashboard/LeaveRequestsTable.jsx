import { format } from 'date-fns';
import { 
  BellAlertIcon,
  ArrowRightIcon,
  XMarkIcon,
  CheckIcon 
} from "@heroicons/react/24/outline";
import { useLeaveContext } from '../../context/LeaveContext';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LeaveRequestsTable = ({ maxItems }) => {
  const { t, i18n } = useTranslation();
  const { 
    leaveRequests, 
    handleAction, 
    exitingIds, 
    loading,
    employees 
  } = useLeaveContext();

  // Check if leaveRequests is an array
  if (!Array.isArray(leaveRequests)) {
    console.error('leaveRequests must be an array', leaveRequests);
    return (
      <div className="bg-white h-[316px] rounded-xl shadow-lg m-[2px_0px_0px_6px] p-6 text-red-500">
        {t('leaveRequestsTable.error')}
      </div>
    );
  }

  // Filter pending requests
  const pendingRequests = leaveRequests.filter(request => request.statut === 'en attente');

  // Sort and limit
  const sortedRequests = [...pendingRequests]
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, maxItems || pendingRequests.length);

  const shouldShowLink = maxItems && pendingRequests.length > maxItems;

  if (loading) return (
    <div className="bg-white h-[316px] rounded-lg border shadow-lg mt-[2px] ml-[6px]">
      <div className="h-3 m-6 w-64 animate-pulse rounded-full bg-gray-200"></div>
      {[...Array(maxItems || 4)].map((_, i) => (
        <div key={i} className="flex animate-pulse space-x-6 px-8 py-2 border-t border-gray-200">
          <div className="size-12 rounded-full bg-gray-200"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 rounded-full bg-gray-200 w-3/4"></div>
            <div className="h-3 rounded-full bg-gray-200 w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-white h-[316px] rounded-xl shadow-lg m-[2px_0px_0px_6px] relative">
      <div className="flex justify-between items-center px-5 py-2">
        <p className="font-semibold text-xl">{t('leaveRequestsTable.title')}</p>
        {shouldShowLink && (
          <Link 
            to="/all-requests" 
            className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
          >
            {t('leaveRequestsTable.viewAll')}
            <ArrowRightIcon className={`${i18n.dir() === 'rtl' ? 'mr-1' : 'ml-1'} w-4 h-4`} />
          </Link>
        )}
      </div>

      <div className="overflow-y-auto max-h-[600px]">
        {sortedRequests.map((request) => {
          const employee = employees.find(emp => emp.id === request.employe_id);
          return (
            <div
              key={request.id}
              className={`border-t border-gray-100 flex justify-evenly items-center p-2 hover:bg-gray-50 transition-colors duration-500 ${
                exitingIds.includes(request.id) 
                ? 'opacity-0 translate-x-full' 
                : 'opacity-100 translate-x-0'
              }`}
            >
              {/* Employee Info */}
              <div className="flex items-center w-1/4">
                <img
                  className="h-9 mr-2.5"
                  src="https://img.freepik.com/premium-vector/office-worker-wearing-glasses_277909-81.jpg" 
                  alt="profile"
                />
                <div className="ml-2">
                  <p className="font-medium">{employee?.nom} {employee?.prenom}</p>
                  <p className="font-normal text-xs text-[#00000078] -mt-1">
                    {employee?.poste || t('leaveRequestsTable.employee.position')}
                  </p>
                </div>
              </div>
              
              {/* Leave Type */}
              <div className="flex items-center w-1/4">
                <BellAlertIcon className="h-5 w-5 mr-2.5 text-gray-600" />
                <div>
                  <p className="font-medium text-sm capitalize">{request.motif_conge}</p>
                  <p className="text-xs text-[#00000094] -mt-1 font-medium">
                    {request.nbr_jours_demandes} {t('leaveRequestsTable.leave.days')}
                  </p>
                </div>
              </div>

              {/* Dates */}
              <div className="flex items-center justify-center w-1/4">
                <div className="min-w-14 border-2 border-[#00000030] flex flex-col items-center rounded  py-1">
                  <p className="text-lg font-semibold">
                    {format(new Date(request.date_debut), 'dd')}
                  </p>
                  <p className="text-[10px] font-bold text-[#00000066] -mt-1">
                    {format(new Date(request.date_debut), 'MMM dd')}
                  </p>
                </div>
                <ArrowRightIcon className="h-5 w-5 mx-1 text-gray-500" />
                <div className="min-w-14 border-2 border-[#00000030] flex flex-col items-center rounded py-1">
                  <p className="text-lg font-semibold">
                    {format(new Date(request.date_fin), 'dd')}
                  </p>
                  <p className="text-[10px] font-bold text-[#00000066] -mt-1">
                    {format(new Date(request.date_fin), 'MMM dd')}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex w-fit space-x-2">
                <button 
                  onClick={() => handleAction(request.id, 'reject')}
                  className="flex justify-center items-center border-2 border-[#FF2626] p-2 rounded-full w-10 h-10 hover:scale-110 transition-transform cursor-pointer hover:shadow-md"
                  aria-label={t('leaveRequestsTable.actions.reject')}
                >
                  <XMarkIcon className="w-7 h-7 stroke-[#FF2626] stroke-[2px]" />
                </button>
                <button 
                  onClick={() => handleAction(request.id, 'approve')}
                  className="border-2 border-[#4CFF67] p-2 rounded-full w-10 h-10 hover:scale-110 transition-transform cursor-pointer hover:shadow-md flex items-center justify-center"
                  aria-label={t('leaveRequestsTable.actions.approve')}
                >
                  <CheckIcon className="w-7 h-6 stroke-[#4CFF67] stroke-[2px]" />
                </button>
              </div>
            </div>
          );
        })}
        {sortedRequests.length === 0 && !loading && (
          <div className="pt-20 text-center text-gray-500">
            {t('leaveRequestsTable.noRequests')}
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaveRequestsTable;