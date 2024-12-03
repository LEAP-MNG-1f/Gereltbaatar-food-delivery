import { DialogButton } from "../parts/DialogButton";
import { foodData } from "../../data/DataType";
import { Dispatch, SetStateAction } from "react";

type FoodProductCardProps = {
  quantity?: number;
  products?: foodData[];
  setQuantity?: Dispatch<SetStateAction<number>> | undefined;
};

export const MenuProductZone = ({
  products,
  quantity,
  setQuantity,
}: FoodProductCardProps) => {
  return (
    <div className="container m-auto py-[54px]">
      <div className="grid grid-cols-4 gap-[26px]">
        {products?.map((product) => {
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
  );
};

//DialogButton
