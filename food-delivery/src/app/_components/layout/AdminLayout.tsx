import { AdminCategoryZone } from "../feature/parts/AdminCategoryZone";
import { Header } from "../feature/parts/Header";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      <AdminCategoryZone />
      {children}
    </main>
  );
}
