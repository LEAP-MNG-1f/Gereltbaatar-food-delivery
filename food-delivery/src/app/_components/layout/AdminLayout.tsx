import { AdminCategoryZone } from "../feature/zones/AdminCategoryZone";
import { Header } from "../feature/parts/Header";
import { AdminHeader } from "../feature/parts/AdminHeader";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <AdminHeader />
      <AdminCategoryZone />
      {children}
    </main>
  );
}
