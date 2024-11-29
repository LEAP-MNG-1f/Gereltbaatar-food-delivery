import { GreenStarIcon } from "../../ui/svg/GreenStarIcon";
import { FoodProductCard } from "../../ui/cards/FoodProductCard";
import { foodData } from "../../data/DataType";

type foodsDataProps = {
  foodData?: foodData[];
  categoryName?: string;
};

export const ProductRow = ({ foodData, categoryName }: foodsDataProps) => {
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
              <FoodProductCard
                key={product?._id}
                image={product?.image}
                name={product?.name}
                price={product?.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
