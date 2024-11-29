import { useState } from "react";
import { AdminCategoryState } from "../../ui/buttons/AdminCategoryState";

export const AdminSideBar = () => {
  const [focus, setFocus] = useState("Breakfast");

  const handelClikFocus = (button: string) => {
    setFocus(button);
  };

  return (
    <div className="flex flex-col gap-10 max-w-[302px] w-full h-full bg-white py-[26px] px-6">
      <p className="font-Poppins font-bold text-[22px] text-[#272727] not-italic leading-[norma]">
        Food menu
      </p>
      <div className="flex flex-col gap-[26px]">
        <button onClick={() => handelClikFocus("Breakfast")}>
          <AdminCategoryState
            text="Breakfast"
            focus={focus}
            buttonName="Breakfast"
          />
        </button>
        <button onClick={() => handelClikFocus("Soup")}>
          <AdminCategoryState buttonName="Soup" focus={focus} text="Soup" />
        </button>
        <button onClick={() => handelClikFocus("Main course")}>
          <AdminCategoryState
            buttonName="Main course"
            focus={focus}
            text="Main course"
          />
        </button>
        <button onClick={() => handelClikFocus("Desserts")}>
          <AdminCategoryState
            buttonName="Desserts"
            focus={focus}
            text="Desserts"
          />
        </button>
      </div>
    </div>
  );
};
