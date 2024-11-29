"use client";

import { AdminPageZone } from "../feature/zones/AdminPageZone";
import AdminLayout from "../layout/AdminLayout";

const AdminPage = () => {
  return (
    <main className="h-screen bg-[#F7F7F8]">
      <AdminLayout>
        <AdminPageZone />
      </AdminLayout>
    </main>
  );
};

export default AdminPage;
