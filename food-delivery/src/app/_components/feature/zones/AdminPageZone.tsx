import { AdminContent } from "../parts/AdminContent";
import { AdminSideBar } from "../parts/AdminSideBar";
import { categoryDatas } from "../../data/DataType";

type AdminPageZoneProps = {
  categoryDatas?: categoryDatas[];
};

export const AdminPageZone = ({ categoryDatas }: AdminPageZoneProps) => {
  return (
    <main>
      <div className="w-full fixed z-40 h-full">
        <div className="container m-auto pt-[57px] h-full">
          <div className="flex gap-8 w-full h-full">
            <AdminSideBar categoryDatas={categoryDatas} />
            <AdminContent />
          </div>
        </div>
      </div>
    </main>
  );
};

//CategoryState
