import { ProductDessert } from "../parts/ProductDessert";
import { ProductMainDish } from "../parts/ProductMainDish";
import { ProductSaladsSnacks } from "../parts/ProductSaladsSnacks";
import { ProductSeleCol } from "../parts/ProductSeleCol";

export const ProductZone = () => {
  return (
    <main>
      <div className="container m-auto max-w-[1200px]">
        <div className="flex flex-col gap-20">
          <ProductSeleCol />
          <ProductMainDish />
          <ProductSaladsSnacks />
          <ProductDessert />
        </div>
      </div>
    </main>
  );
};
