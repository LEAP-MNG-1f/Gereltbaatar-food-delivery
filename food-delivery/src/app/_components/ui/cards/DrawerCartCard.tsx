import { CloseIcon } from "../svg/CloseIcon";
import { MinusIcon } from "../svg/MinusIcon";
import { PlusIcon } from "../svg/PlusIcon";

export const DrawerCartCard = () => {
  return (
    <div className="border border-[#D6D8DB] border-x-0">
      <div className="py-6">
        <div className="grid grid-cols-2 gap-4 p-4">
          <div className="">
            <img src="./PizzaDrawer.png" alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-[2px]">
                <p className="font-Poppins font-semibold text-lg not-italic">
                  Main Pizza
                </p>
                <p className="font-Poppins font-semibold text-lg text-BrandGreen not-italic ">
                  34,800₮
                </p>
              </div>
              <div className="flex items-center justify-center p-[5px] w-[38px] h-[38px]">
                <CloseIcon />
              </div>
            </div>
            <div className="">
              <p className="text-[#767676] not-italic font-normal leading-[normal]">
                Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
              </p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center justify-center bg-BrandGreen w-[45px] h-[40px] rounded-[10px]">
                <MinusIcon />
              </button>
              <div className="px-[30px] py-2 w-[45px] h-[40px] flex items-center justify-center">
                <p className="font-Poppins font-semibold not-italic text-base ">
                  0
                </p>
              </div>
              <button className="flex items-center justify-center  bg-BrandGreen w-[45px] h-[40px] rounded-[10px]">
                <PlusIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
