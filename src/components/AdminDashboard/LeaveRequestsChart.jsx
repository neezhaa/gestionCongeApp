import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { parseISO, startOfYear, eachMonthOfInterval, format as dfnsFormat } from 'date-fns';
import { useLeaveContext } from '../../context/LeaveContext';

const processLeaveData = () => {

  const { leaveRequests } = useLeaveContext();
  const currentYear = new Date().getFullYear();
  const months = eachMonthOfInterval({
    start: startOfYear(new Date(currentYear, 0, 1)),
    end: new Date(currentYear, 11, 31)
  });

  const monthlyData = months.map(month => ({
    name: dfnsFormat(month, 'MMM'),
    Pending: 0,
    Approved: 0,
    Rejected: 0,
    Total: 0,
    monthNumber: month.getMonth()
  }));

  leaveRequests?.forEach(request => {
    if (!request?.created_at) return;
    const requestMonth = parseISO(request.created_at).getMonth();
    const monthData = monthlyData.find(m => m.monthNumber === requestMonth);
    
    if (monthData) {
      switch (request.statut) {
        case 'en attente':
          monthData.Pending++;
          break;
        case 'accepté':
          monthData.Approved++;
          break;
        case 'refusé':
          monthData.Rejected++;
          break;
      }
      monthData.Total++;
    }
  });

  return monthlyData.sort((a, b) => a.monthNumber - b.monthNumber);
};

const LeaveRequestsChart = () => {
  const { leaveRequests } = useLeaveContext();
  const chartData = processLeaveData(leaveRequests);

  return (
    <div className=''>
      {/* Premier graphique - Détails par statut */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-xl font-bold mb-4 text-gray-700">📊 Répartition mensuelle</h2>
            <div className="h-[224px]">

                <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Pending" name="En attente" fill="#f59e0b" />
                        <Bar dataKey="Approved" name="Approuvées" fill="#10b981" />
                        <Bar dataKey="Rejected" name="Rejetées" fill="#ef4444" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

    {/* Deuxième graphique - Total par mois */}

    
        {/* <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-xl font-bold mb-4 text-gray-700">📈 Évolution des demandes</h2>
            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar 
                        dataKey="Total" 
                        name="Total des demandes" 
                        fill="#3b82f6" 
                        radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div> */}
    </div>
  );
};

export default LeaveRequestsChart;