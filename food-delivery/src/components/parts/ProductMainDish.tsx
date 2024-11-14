import { GreenStarIcon } from "../svg/GreenStarIcon";

export const ProductMainDish = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-6">
        <div className="py-4">
          <div className="flex items-center gap-1">
            <GreenStarIcon />
            <p className="font-Poppins font-bold not-italic text-[22px]">
              Үндсэн хоол
            </p>
          </div>
        </div>
        <div className="">product card</div>
      </div>
    </div>
  );
};
