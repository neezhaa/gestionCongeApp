import AdminLeaveRequests from '../components/AdminDashboard/AdminLeaveRequests';

const AllLeaveRequests = () => {
  return (
    <div className="pl-14 pt-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Toutes les demandes</h1>
      <AdminLeaveRequests />
    </div>
  );
};

export default AllLeaveRequests;