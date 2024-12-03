import { GreenStarIcon } from "../../ui/svg/GreenStarIcon";
import { foodData } from "../../data/DataType";
import { Dispatch, SetStateAction } from "react";
import { DialogButton } from "./DialogButton";

type foodsDataProps = {
  foodData?: foodData[];
  quantity?: number;
  setQuantity?: Dispatch<SetStateAction<number>> | undefined;
  categoryName?: string;
};

export const ProductRow = ({
  foodData,
  categoryName,
  quantity,
  setQuantity,
}: foodsDataProps) => {
  return (
    <div className="">
      <div className="flex flex-col gap-6">
        <div className="py-4">
          <div className="flex items-center gap-1">
            <GreenStarIcon />
            <p className="font-Poppins font-bold not-italic text-[22px]">
              {categoryName}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {foodData?.map((product) => {
            return (
              <DialogButton
                key={product?._id}
                product={product}
                quantity={quantity}
                setQuantity={setQuantity}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
