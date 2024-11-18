import { ProductDessert } from "../parts/ProductDessert";
import { ProductMainDish } from "../parts/ProductMainDish";
import { ProductSaladsSnacks } from "../parts/ProductSaladsSnacks";
import { ProductSeleCol } from "../parts/ProductSeleCol";

export const HomeProductZone = () => {
  return (
    <main>
      <div className="container m-auto">
        <div className="pb-[82px]">
          <div className="flex flex-col gap-20">
            <ProductSeleCol />
            <ProductMainDish />
            <ProductSaladsSnacks />
            <ProductDessert />
          </div>
        </div>
      </div>
    </main>
  );
};
