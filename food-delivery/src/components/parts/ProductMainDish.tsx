import { GreenStarIcon } from "../svg/GreenStarIcon";
import { FoodProductCard } from "./FoodProductCard";

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
        <div className="grid grid-cols-4 gap-6">
          <FoodProductCard
            imgUrl="./FoodImg.png"
            productTitle="Өглөөний хоол"
            productPrice={24800}
          />
          <FoodProductCard
            imgUrl="./FoodImg.png"
            productTitle="Өглөөний хоол"
            productPrice={24800}
          />
          <FoodProductCard
            imgUrl="./FoodImg.png"
            productTitle="Өглөөний хоол"
            productPrice={24800}
          />
          <FoodProductCard
            imgUrl="./FoodImg.png"
            productTitle="Өглөөний хоол"
            productPrice={24800}
          />
        </div>
      </div>
    </div>
  );
};
