import AdminLayoutDash from "@/app/_components/layout/AdminLayounDash";
import AdminLayout from "@/app/_components/layout/AdminLayout";
import DashboardPage from "@/app/_components/pages/DashboardPage";

const Dashboard = () => {
  return (
    <main>
      <AdminLayoutDash>
        <DashboardPage />
      </AdminLayoutDash>
    </main>
  );
};

export default Dashboard;
