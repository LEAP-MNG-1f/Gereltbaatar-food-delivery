import { useState } from "react";
import { CategoryState } from "../../ui/buttons/CategoryState";
import { Dispatch, SetStateAction } from "react";

type CategoryZoneProps = {
  categoryValue?: string;
  setCategoryValue?: Dispatch<SetStateAction<string>> | undefined;
};

export const CategoryZone = ({ setCategoryValue }: CategoryZoneProps) => {
  const [focus, setFocus] = useState("Breakfast");

  const handelClikFocus = (button: string) => {
    setFocus(button);
    // setCategoryValue();
  };

  return (
    <main className="pt-[57px]">
      <div className="container m-auto py-8">
        <div className="grid grid-cols-4 items-center justify-between gap-[26px]">
          <button onClick={() => handelClikFocus("Breakfast")}>
            <CategoryState
              focus={focus}
              text="Breakfast"
              buttonName="Breakfast"
            />
          </button>
          <button onClick={() => handelClikFocus("Soup")}>
            <CategoryState focus={focus} text="Soup" buttonName="Soup" />
          </button>
          <button onClick={() => handelClikFocus("Main Course")}>
            <CategoryState
              focus={focus}
              text="Main Course"
              buttonName="Main Course"
            />
          </button>
          <button onClick={() => handelClikFocus("Dessert")}>
            <CategoryState focus={focus} text="Dessert" buttonName="Dessert" />
          </button>
        </div>
      </div>
    </main>
  );
};
