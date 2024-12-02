import { AddGreenIcon } from "../../ui/svg/AddGreenIcon";
import { CreateNewFood } from "./CreateNewFood";

export const AdminContent = () => {
  return (
    <div className="flex flex-col gap-8 w-full pt-6">
      <div className="flex items-center justify-between py-4">
        <p className="font-Poppins font-bold text-[22px] text-[#272727] not-italic leading-[norma]">
          Breakfast
        </p>
        <CreateNewFood />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-8">
          <AddGreenIcon />
          <p className="text-[#808080] text-center text-base not-italic font-normal leading-normal">
            Уучлаарай, Таны меню хоосон байна.
          </p>
        </div>
      </div>
    </div>
  );
};
