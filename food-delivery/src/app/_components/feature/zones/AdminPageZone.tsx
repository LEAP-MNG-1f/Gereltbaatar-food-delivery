import { AdminContent } from "../parts/AdminContent";
import { AdminSideBar } from "../parts/AdminSideBar";

export const AdminPageZone = () => {
  return (
    <main>
      <div className="w-full fixed z-40 h-full">
        <div className="container m-auto pt-[57px] h-full">
          <div className="flex gap-8 w-full h-full">
            <AdminSideBar />
            <AdminContent />
          </div>
        </div>
      </div>
    </main>
  );
};

//CategoryState
