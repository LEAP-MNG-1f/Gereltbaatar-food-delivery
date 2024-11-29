import { AddGreenIcon } from "../../ui/svg/AddGreenIcon";

export const AdminContent = () => {
  return (
    <div className="flex flex-col gap-8 w-full pt-6">
      <div className="flex items-center justify-between py-4">
        <p className="font-Poppins font-bold text-[22px] text-[#272727] not-italic leading-[norma]">
          Breakfast
        </p>
        <button>
          <div className="flex items-center justify-center bg-BrandGreen py-2 px-4 rounded-[4px]">
            <p className="text-white text-center font-Poppins text-base font-normal leading-normal">
              add new food
            </p>
          </div>
        </button>
      </div>
      <div className="border border-black">
        <div className="">
          <AddGreenIcon />
        </div>
      </div>
    </div>
  );
};
