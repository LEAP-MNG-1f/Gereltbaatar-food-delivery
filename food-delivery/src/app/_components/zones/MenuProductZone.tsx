"use client";

type FoodProductCardProps = {
  products?: FoodProductCardPropsArray[];
};

import {
  FoodProductCard,
  FoodProductCardPropsArray,
} from "../parts/FoodProductCard";

export const MenuProductZone = (props: FoodProductCardProps) => {
  return (
    <div className="container m-auto py-[54px]">
      <div className="grid grid-cols-4 gap-[26px]">
        {props.products?.map((product, productIndex) => {
          return (
            <FoodProductCard
              key={productIndex}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
};
