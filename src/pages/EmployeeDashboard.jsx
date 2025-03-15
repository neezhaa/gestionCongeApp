import { useAuth } from '../context/AuthContext';
import { useLeaveContext } from '../context/LeaveContext';
import LeaveStats from '../components/EmployeeDashboard/LeaveStats';
import LeaveRequests from '../components/EmployeeDashboard/LeaveRequests';
import LeaveForm from '../components/EmployeeDashboard/LeaveForm';
import Notifications from '../components/EmployeeDashboard/Notifications';
import { useState } from 'react';

const Dashboard = () => {
  const { auth } = useAuth();
  const { employees, leaveRequests, loading } = useLeaveContext();
  const [isFormOpen, setIsFormOpen] = useState(false);

  if (!auth) {
    window.location.href = '/login';
    return null;
  }

  return (
    <div className="min-h-screen pl-[5.5rem] bg-gray-50 p-6">
      <LeaveStats 
        employee={employees.find(e => e.id === auth.user.id)} 
        leaveRequests={leaveRequests}
      />

      <LeaveRequests 
        leaveRequests={leaveRequests.filter(r => r.employe_id === auth.user.id)}
        onNewRequest={() => setIsFormOpen(true)}
        loading={loading}
      />

      <Notifications />

      <LeaveForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        employeeId={auth.user.id}
      />
    </div>
  );
};

export default Dashboard;