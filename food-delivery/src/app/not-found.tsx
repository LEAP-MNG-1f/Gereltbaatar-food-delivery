import MainLayout from "./_components/layout/MainLayout";
import NotFoundPage from "./_components/pages/NotFoundPage";

export default function NotFound() {
  return (
    <main className="h-screen">
      <MainLayout>
        <NotFoundPage />
      </MainLayout>
    </main>
  );
}
