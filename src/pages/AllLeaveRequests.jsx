import AdminLeaveRequests from '../components/AdminLeaveRequests/AdminLeaveRequests';

const AllLeaveRequests = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Toutes les demandes</h1>
      <AdminLeaveRequests />
    </div>
  );
};

export default AllLeaveRequests;