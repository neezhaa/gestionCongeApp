import LeaveRequestsChart from '../components/LeaveRequestsChart';
import AdminLeaveRequests from '../components/AdminLeaveRequests/AdminLeaveRequests';
import Stats from '../components/Stats';
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { auth } = useAuth();
  return auth.user.is_admin ? 
    (
      <div className="h-screen bg-[#f0f5f9]">
        <Stats/>
        <div className="mt-6">
            <div className="flex sm:flex-col lg:flex-row md:flex-row gap-1 p-6 min-h-screen">
                <div className="w-full md:w-[60%] lg:w-[60%] pr-0 md:pr-2">
                    <AdminLeaveRequests  maxItems={4} />
                </div>
                <div className="w-full md:w-[40%] lg:w-[40%]">
                    <LeaveRequestsChart />
                </div>
            </div>
        </div>
      </div>
    ) 
    : (
    <h1>Hello employee</h1>

    );
}

export default Dashboard