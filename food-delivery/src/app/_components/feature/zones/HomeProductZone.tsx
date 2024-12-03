import { groupBy } from "lodash";
import { foodData } from "../../data/DataType";
import { ProductRow } from "../parts/ProductRow";
import { Dispatch, SetStateAction } from "react";

type HomeProductZoneProps = {
  foodData?: foodData[];
  quantity?: number;
  setQuantity?: Dispatch<SetStateAction<number>> | undefined;
};

export const HomeProductZone = ({
  foodData,
  quantity,
  setQuantity,
}: HomeProductZoneProps) => {
  const groupedData = groupBy(foodData, (foods) => foods.categoryId?.name);

  return (
    <main>
      <div className="container m-auto">
        <div className="pb-[82px]">
          <div className="flex flex-col gap-20">
            {Object.keys(groupedData).map((categoryName) => {
              return (
                <ProductRow
                  key={categoryName}
                  foodData={groupedData[categoryName]}
                  categoryName={categoryName}
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
