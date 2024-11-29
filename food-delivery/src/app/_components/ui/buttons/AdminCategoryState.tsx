import { MorevertBlack } from "../svg/morevertBlack";
import { MorevertWhite } from "../svg/morevertWhite";

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
      className={`group border border-[#D6D8DB] hover:border-BrandGreen duration-300 py-2 px-4 rounded-lg flex justify-between items-center ${
        focus === buttonName
          ? "bg-BrandGreen text-white "
          : "bg-white text-black"
      }`}
    >
      <p className="font-Inter font-[500] not-italic text-lg tracking-[-0.396px]">
        {text}
      </p>
      {focus === buttonName ? <MorevertWhite /> : <MorevertBlack />}
    </div>
  );
};

// MorevertWhite

// MorevertBlack
