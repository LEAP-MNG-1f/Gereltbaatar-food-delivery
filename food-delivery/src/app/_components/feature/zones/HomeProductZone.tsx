import { Food } from "../../data/DataType";
import { ProductRow } from "../parts/ProductRow";

type HomeProductZoneProps = {
  // Data?: groupedDatas{};
};

export const HomeProductZone = ({}: HomeProductZoneProps) => {
  return (
    <main>
      <div className="container m-auto">
        <div className="pb-[82px]">
          <div className="flex flex-col gap-20">
            <ProductRow />
          </div>
        </div>
      </div>
    </main>
  );
};
