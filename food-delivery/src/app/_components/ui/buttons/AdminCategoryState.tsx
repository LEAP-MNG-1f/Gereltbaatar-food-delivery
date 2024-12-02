import { MorevertBlack } from "../svg/MorevertBlack";
import { MorevertWhite } from "../svg/MorevertWhite";

type AdminCategoryStateType = {
  text?: string;
  focus?: string;
  buttonName?: string;
};

export const AdminCategoryState = ({
  text,
  focus,
  buttonName,
}: AdminCategoryStateType) => {
  return (
    <div
      className={`group border  hover:border-BrandGreen duration-300 py-2 px-4 rounded-lg flex justify-between items-center ${
        focus === buttonName
          ? "bg-BrandGreen text-white border-BrandGreen"
          : "bg-white text-black border-[#D6D8DB]"
      }`}
    >
      <p className="font-Inter font-[500] not-italic text-lg tracking-[-0.396px]">
        {text}
      </p>
      {focus === buttonName ? <MorevertWhite /> : <MorevertBlack />}
    </div>
  );
};
