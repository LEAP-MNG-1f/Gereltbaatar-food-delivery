import { GetOutIcon } from "../svg/GetOutIcon";

export const CartDrawerContent = () => {
  return (
    <div className="max-w-[586px] w-[586px] h-full">
      <div className="flex flex-col justify-between gap-10 h-full">
        <div className="flex justify-between py-[26px] px-6 items-center">
          <GetOutIcon />
          <p className="font-Poppins text-xl font-black">Таны сагс</p>
          <div></div>
        </div>
        <div className="grid grid-cols-2 items-center justify-between py-[10px] px-8 h-[172px] shadow-black shadow-2xl">
          <div className="">
            <p className="font-Poppins text-lg text-[#5E6166]">
              Нийт төлөх дүн
            </p>
            <p className="text-lg font-bold">34,800₮</p>
          </div>
          <div className="flex items-center justify-center bg-BrandGreen py-2 px-4 flex-[1_0_0] rounded-[4px]">
            <p className="font-Poppins text-white">Захиалах</p>
          </div>
        </div>
      </div>
    </div>
  );
};
