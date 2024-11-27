// SelectKhoroo
"use client";

import { useState } from "react";
import { LocationIcon } from "../svg/LocationIcon";
import { DownArrowWhite } from "../svg/DownArrowWhite";
import { DownArrow } from "../svg/DownArrow";
import { LocationIconWhite } from "../svg/LocationIconWhite";

type District = {
  district: string;
};

export const districts = [
  { district: "Багануур дүүрэг" },
  { district: "Багахангай дүүрэг" },
  { district: "Баянгол дүүрэг" },
  { district: "Баянзүрх дүүрэг" },
  { district: "Налайх дүүрэг" },
  { district: "Сонгинохайрхан дүүрэг" },
  { district: "Сүхбаатар дүүрэг" },
  { district: "Хан-Уул дүүрэг" },
  { district: "Чингэлтэй дүүрэг" },
];

export const SelectDistrict = () => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<District | null>(null);

  const toggling = () => setOpen(!open);

  const onOptionClicked = (value: District) => () => {
    setSelectedOption(value);
    setOpen(false);
  };

  return (
    <>
      <div className="w-full cursor-pointer relative">
        <div
          onClick={toggling}
          tabIndex={0}
          className={`h-12 w-full px-4 py-2 rounded-[4px] border border-[#ECEDF0] flex items-center gap-1 
            ${selectedOption ? "bg-[#18BA51]" : "bg-[#F7F7F8]"}`}
        >
          <div className="w-6 h-6">
            {selectedOption ? <LocationIconWhite /> : <LocationIcon />}
          </div>
          <p
            className={`w-full font-sans text-base font-normal leading-[19px] 
                ${selectedOption ? "text-white" : "text-[#8B8E95]"}`}
          >
            {selectedOption?.district || "Дүүрэг сонгоно уу"}
          </p>
          <div className="w-6 h-6">
            {selectedOption ? <DownArrowWhite /> : <DownArrow />}
          </div>
        </div>
        {open && (
          <div className="absolute top-[100%] left-0 max-w-[384px] w-full max-h-[240px] overflow-y-scroll rounded-[4px]  bg-white z-[1]">
            {districts.map((value) => {
              return (
                <button
                  type="button"
                  key={value.district}
                  onClick={onOptionClicked(value)}
                  className="hover:bg-[#F7F7F8] w-full px-4 py-2 h-12 flex gap-1 items-center  text-[#373737] font-sans text-base font-normal leading-[19px]"
                >
                  <LocationIcon />
                  {value.district}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
