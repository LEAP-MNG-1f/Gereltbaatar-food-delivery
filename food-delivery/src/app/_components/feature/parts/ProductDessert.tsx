import { GreenStarIcon } from "../../ui/svg/GreenStarIcon";
import { FoodProductCard } from "./FoodProductCard";

export const ProductDessert = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-6">
        <div className="py-4">
          <div className="flex items-center gap-1">
            <GreenStarIcon />
            <p className="font-Poppins font-bold not-italic text-[22px]">
              Салад ба зууш
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <FoodProductCard
            image="./FoodImg.png"
            name="Өглөөний хоол"
            price={24800}
          />
          <FoodProductCard
            image="./FoodImg.png"
            name="Өглөөний хоол"
            price={24800}
          />
          <FoodProductCard
            image="./FoodImg.png"
            name="Өглөөний хоол"
            price={24800}
          />
          <FoodProductCard
            image="./FoodImg.png"
            name="Өглөөний хоол"
            price={24800}
          />
        </div>
      </div>
    </div>
  );
};
