import { CategoryState } from "../parts/CategoryState";

export const CategoryZone = () => {
  return (
    <main className="pt-[57px]">
      <div className="container m-auto py-8">
        <div className="grid grid-cols-4 items-center justify-between gap-[26px]">
          <CategoryState text="Breakfast" />
          <CategoryState text="Soup" />
          <CategoryState text="Main Course" />
          <CategoryState text="Dessert" />
        </div>
      </div>
    </main>
  );
};
