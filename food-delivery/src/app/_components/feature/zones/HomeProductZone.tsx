import { groupBy } from "lodash";
import { foodData } from "../../data/DataType";
import { ProductRow } from "../parts/ProductRow";

type HomeProductZoneProps = {
  foodDatas?: foodData[];
};

export const HomeProductZone = ({ foodDatas }: HomeProductZoneProps) => {
  const groupedData = groupBy(foodDatas, (foods) => foods.categoryId?.name);
  console.log("qwdqwdaw", Object.keys(groupedData));

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
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
