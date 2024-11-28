import { DialogButton } from "../parts/DialogButton";
import { foodDatas } from "../../data/DataType";

type FoodProductCardProps = {
  products?: foodDatas[];
};

export const MenuProductZone = (props: FoodProductCardProps) => {
  return (
    <div className="container m-auto py-[54px]">
      <div className="grid grid-cols-4 gap-[26px]">
        {props.products?.map((product, productIndex) => {
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
