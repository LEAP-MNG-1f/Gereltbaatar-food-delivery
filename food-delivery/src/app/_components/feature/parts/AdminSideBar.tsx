import { useState } from "react";
import { AdminCategoryState } from "../../ui/buttons/AdminCategoryState";
import { AdminCreateCategory } from "../../ui/buttons/AdminCreateCategory";
import { categoryDatas } from "../../data/DataType";

type AdminSideBarProps = {
  categoryDatas?: categoryDatas[];
};

export const AdminSideBar = ({ categoryDatas }: AdminSideBarProps) => {
  const [focus, setFocus] = useState("6746aa0bc4b0fe49cd307e72");

  const handelClikFocus = (button: string | undefined) => {
    if (button !== undefined) {
      setFocus(button);
    } else {
      // console.log("Утга байхгүй байна.");
    }
  };

  return (
    <div className="flex flex-col gap-10 max-w-[302px] w-full h-full bg-white py-[26px] pr-6">
      <p className="font-Poppins font-bold text-[22px] text-[#272727] not-italic leading-[norma]">
        Food menu
      </p>
      <div className="flex flex-col gap-[26px]">
        {categoryDatas?.map((categoryData) => {
          return (
            <button
              key={categoryData._id}
              onClick={() => handelClikFocus(categoryData?._id)}
            >
              <AdminCategoryState
                text={categoryData?.name}
                focus={focus}
                buttonName={categoryData?._id}
              />
            </button>
          );
        })}

        <AdminCreateCategory />
      </div>
    </div>
  );
};
