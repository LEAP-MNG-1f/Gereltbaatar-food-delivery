"use client";

import { useState } from "react";
import { CheckToggleB } from "../../ui/buttons/CheckToggleB";
import { CircleBlueToggle } from "../../ui/buttons/CircleBlueToggle";
import { LocationIcon } from "../../ui/svg/LocationIcon";
import { CheckoutCard } from "../../ui/cards/CheckoutCard";

export const CheckoutContentZone = () => {
  const [toggleOne, setToggleOne] = useState(true);
  const [toggleTwo, setToggleTwo] = useState(true);

  const HandleToogleOne = () => {
    setToggleOne(!toggleOne);
  };

  const HandleToogleTwo = () => {
    setToggleTwo(!toggleTwo);
  };

  return (
    <main>
      <div className="container m-auto pt-[57px] pb-[80px]">
        <div className="grid grid-cols-2 gap-[180px]">
          <div className="w-full flex justify-end">
            <div className="flex flex-col gap-6 max-w-[432px] w-full">
              <div className="flex gap-6 items-center py-4 px-6">
                <button onClick={HandleToogleOne}>
                  {toggleOne ? <CircleBlueToggle /> : <CheckToggleB />}
                </button>
                <div className="flex flex-col gap-1">
                  <p className="text-[#8B8E95] text-sm font-normal leading-[normal] self-stretch">
                    Алхам 1
                  </p>
                  <p className="text-black text-lg font-normal leading-[normal] self-stretch">
                    Хаягийн мэдээлэл оруулах
                  </p>
                  <p
                    className={`${
                      toggleOne ? "text-BrandBlue" : "text-BrandGreen"
                    } text-base font-normal leading-[normal] self-stretch`}
                  >
                    {toggleOne ? "Хүлээгдэж байна" : "Оруулсан"}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10 p-6 rounded-2xl shadow-customShadow">
                <div className="flex flex-col gap-4">
                  <p className="text-start  text-sm font-normal leading-[normal]">
                    Хаяг аа оруулна уу
                  </p>
                  <div className="py-2 px-4 bg-[#F7F7F8] border border-solid border-[#ECEDF0] rounded">
                    <LocationIcon />
                  </div>
                  <div className="py-2 px-4 bg-[#F7F7F8] border border-solid border-[#ECEDF0] rounded">
                    <LocationIcon />
                  </div>
                  <div className="py-2 px-4 bg-[#F7F7F8] border border-solid border-[#ECEDF0] rounded">
                    <LocationIcon />
                  </div>
                </div>
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-1">
                    <p className="text-start  text-sm font-normal leading-[normal]">
                      Нэмэлт мэдээлэл
                    </p>
                    <textarea
                      placeholder="Орц, давхар, орцны код ..."
                      className="px-4 py-2 w-full h-28 bg-[#F7F7F8] resize-none outline-none text-[#8B8E95] border border-solid border-[#ECEDF0] rounded"
                    ></textarea>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-start  text-sm font-normal leading-[normal]">
                      Нэмэлт мэдээлэл
                    </p>
                    <input
                      className="text-[#8B8E95] bg-[#F7F7F8] py-2 px-4 border border-solid border-[#ECEDF0] rounded outline-none"
                      type="text"
                      placeholder="Утасны дугаараа оруулна уу"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-start  text-sm font-normal leading-[normal]">
                      Төлбөр төлөх
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="flex gap-2">
                        <input
                          className="bg-white text-black"
                          type="checkbox"
                          name="Бэлнээр"
                          id="Бэлнээр"
                        />
                        <p className="text-start  text-sm font-normal leading-[normal] text-[#8B8E95]">
                          Бэлнээр
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <input
                          className="bg-white text-black"
                          type="checkbox"
                          name="Бэлнээр"
                          id="Бэлнээр"
                        />
                        <p className="text-start  text-sm font-normal leading-[normal] text-[#8B8E95]">
                          Картаар
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-start">
            <div className="flex flex-col gap-6 max-w-[432px] w-full">
              <div className="flex gap-6 items-center py-4 px-6">
                <button onClick={HandleToogleTwo}>
                  {toggleTwo ? <CircleBlueToggle /> : <CheckToggleB />}
                </button>
                <div className="flex flex-col gap-1">
                  <p className="text-[#8B8E95] text-sm font-normal leading-[normal] self-stretch">
                    Алхам 2
                  </p>
                  <p className="text-black text-lg font-normal leading-[normal] self-stretch">
                    Захиалга баталгаажуулах
                  </p>
                  <p
                    className={`${
                      toggleTwo ? "text-BrandBlue" : "text-BrandGreen"
                    } text-base font-normal leading-[normal] self-stretch`}
                  >
                    {toggleTwo ? "Хүлээгдэж байна" : "Оруулсан"}
                  </p>
                </div>
              </div>
              <div className="p-6 w-full h-full rounded-2xl shadow-customShadow">
                <div className="flex flex-col items-stretch h-full">
                  <div className="h-[477px] overflow-scroll scrollbar-none ">
                    <CheckoutCard />
                  </div>
                  <div className="grid grid-cols-2 gap-[10px] items-center">
                    <div>
                      <p className="text-[#5E6166] font-Poppins text-lg font-normal not-italic leading-[normal]">
                        Нийт төлөх дүн
                      </p>
                      <p className="text-[#121316] font-Poppins text-ld font-bold not-italic leading-[normal]">
                        34,800₮
                      </p>
                    </div>
                    <button
                      className={` ${
                        toggleOne ? "bg-[#EEEFF2]" : "bg-BrandGreen"
                      } flex items-center justify-center rounded h-12 py-2 px-4`}
                    >
                      <p
                        className={`${
                          toggleOne ? "text-[#1C20243D]" : "text-white"
                        }`}
                      >
                        Захиалах
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
