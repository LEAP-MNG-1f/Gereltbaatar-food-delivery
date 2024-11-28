import { GreenStarIcon } from "../svg/GreenStarIcon";
import { FoodProductCard } from "./FoodProductCard";

export type TProduct = {
  _id: string;
  name: string;
  price: number;
  image: string;
  categoryId: {
    _id: string;
    name: string;
    __v: number;
  };
  ingredient: string;
  __v: number;
};

type TProductSeleColProps = {
  foodDatas: TProduct[];
  categoryName: string;
};

export const ProductSeleCol = ({
  foodDatas,
  categoryName,
}: TProductSeleColProps) => {
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
          {foodDatas?.map((foodData) => {
            return (
              <FoodProductCard
                key={foodData?._id}
                image={foodData?.image}
                name={foodData?.name}
                price={foodData?.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
