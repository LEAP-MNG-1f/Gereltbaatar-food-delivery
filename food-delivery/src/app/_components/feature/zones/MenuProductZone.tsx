import { DialogButton } from "../parts/DialogButton";
import { foodData } from "../../data/DataType";

type FoodProductCardProps = {
  products?: foodData[];
};

export const MenuProductZone = ({ products }: FoodProductCardProps) => {
  return (
    <div className="container m-auto py-[54px]">
      <div className="grid grid-cols-4 gap-[26px]">
        {products?.map((product, productIndex) => {
          return (
            <DialogButton
              key={productIndex}
              image={product.image}
              name={product.name}
              price={product.price}
              ingredient={product.ingredient}
            />
          );
        })}
      </div>
    </div>
  );
};

//DialogButton
