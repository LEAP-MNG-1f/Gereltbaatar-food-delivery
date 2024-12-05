import { AdminHeader } from "../feature/parts/AdminHeader";

export default function AdminLayoutDash({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <AdminHeader />
      {children}
    </main>
  );
}
