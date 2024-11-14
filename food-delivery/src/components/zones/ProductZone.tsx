import { ProductDessert } from "../parts/ProductDessert";
import { ProductMainDish } from "../parts/ProductMainDish";
import { ProductSaladsSnacks } from "../parts/ProductSaladsSnacks";
import { ProductSeleCol } from "../parts/ProductSeleCol";

export const ProductZone = () => {
  return (
    <main>
      <div className="container m-auto">
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
