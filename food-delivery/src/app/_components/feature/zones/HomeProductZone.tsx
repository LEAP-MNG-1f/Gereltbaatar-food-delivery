import { ProductSeleCol } from "../parts/ProductSeleCol";

export const HomeProductZone = () => {
  return (
    <main>
      <div className="container m-auto">
        <div className="pb-[82px]">
          <div className="flex flex-col gap-20">
            <ProductSeleCol />
          </div>
        </div>
      </div>
    </main>
  );
};
