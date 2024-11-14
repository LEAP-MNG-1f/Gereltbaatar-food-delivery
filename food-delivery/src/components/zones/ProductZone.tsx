import { ProductSeleCol } from "../parts/ProductSeleCol";

export const ProductZone = () => {
  return (
    <main>
      <div className="container m-auto">
        <div className="flex flex-col gap-20">
          <ProductSeleCol />
          <div>main dish</div>
        </div>
      </div>
    </main>
  );
};
