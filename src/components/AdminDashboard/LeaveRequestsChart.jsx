import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { parseISO, startOfYear, eachMonthOfInterval, format as dfnsFormat } from 'date-fns';
import { useLeaveContext } from '../../context/LeaveContext';
import { useTranslation } from 'react-i18next';

const useProcessLeaveData = () => {
  const { t } = useTranslation();
  const { leaveRequests } = useLeaveContext();

  // Check if leaveRequests is an array
  if (!Array.isArray(leaveRequests)) {
    console.error("Leave requests must be an array", leaveRequests);
    return [];
  }

  const currentYear = new Date().getFullYear();
  const months = eachMonthOfInterval({
    start: startOfYear(new Date(currentYear, 0, 1)),
    end: new Date(currentYear, 11, 31)
  });

  const monthlyData = months.map(month => ({
    name: dfnsFormat(month, 'MMM'),
    [t('leaveChart.status.pending')]: 0,
    [t('leaveChart.status.approved')]: 0,
    [t('leaveChart.status.rejected')]: 0,
    Total: 0,
    monthNumber: month.getMonth()
  }));

  leaveRequests.forEach(request => {
    if (!request?.created_at) return;
    const requestMonth = parseISO(request.created_at).getMonth();
    const monthData = monthlyData.find(m => m.monthNumber === requestMonth);

    if (monthData) {
      switch (request.statut) {
        case 'en attente':
          monthData[t('leaveChart.status.pending')]++;
          break;
        case 'accepté':
          monthData[t('leaveChart.status.approved')]++;
          break;
        case 'refusé':
          monthData[t('leaveChart.status.rejected')]++;
          break;
      }
      monthData.Total++;
    }
  });

  return monthlyData.sort((a, b) => a.monthNumber - b.monthNumber);
};

const LeaveRequestsChart = () => {
  const { t } = useTranslation();
  const chartData = useProcessLeaveData();

  return (
    <div className="">
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h2 className="text-xl font-bold mb-4 text-gray-700">
          📊 {t('leaveChart.title')}
        </h2>
        <div className="h-[224px]">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar 
                dataKey={t('leaveChart.status.pending')} 
                name={t('leaveChart.status.pending')} 
                fill="#f59e0b" 
              />
              <Bar 
                dataKey={t('leaveChart.status.approved')} 
                name={t('leaveChart.status.approved')} 
                fill="#10b981" 
              />
              <Bar 
                dataKey={t('leaveChart.status.rejected')} 
                name={t('leaveChart.status.rejected')} 
                fill="#ef4444" 
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default LeaveRequestsChart;