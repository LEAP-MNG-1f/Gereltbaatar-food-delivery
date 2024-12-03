import { useState } from "react";
import { CategoryState } from "../../ui/buttons/CategoryState";
import { Dispatch, SetStateAction } from "react";
import { categoryDatas } from "../../data/DataType";

type CategoryZoneProps = {
  categoryDatas?: categoryDatas[];
  categoryValue?: string;
  setCategoryValue?: Dispatch<SetStateAction<string>> | undefined;
};

export const CategoryZone = ({
  setCategoryValue,
  categoryDatas,
}: CategoryZoneProps) => {
  const [focus, setFocus] = useState("6746aa0bc4b0fe49cd307e72");

  const handelClikFocus = (button: string | undefined) => {
    if (button !== undefined) {
      setCategoryValue?.(button);
      setFocus(button);
    } else {
      // console.log("Утга байхгүй байна.");
    }
  };

  return (
    <main className="pt-[57px]">
      <div className="container m-auto py-8">
        <div className="grid grid-cols-4 items-center justify-between gap-[26px]">
          {categoryDatas?.map((categoryData) => {
            return (
              <button
                key={categoryData?._id}
                onClick={() => handelClikFocus(categoryData?._id)}
              >
                <CategoryState
                  focus={focus}
                  text={categoryData?.name}
                  buttonName={categoryData?._id}
                />
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
};
