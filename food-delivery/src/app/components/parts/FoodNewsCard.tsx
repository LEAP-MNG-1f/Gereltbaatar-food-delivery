"use client";

import * as React from "react";

export const FoodNewsCard = () => {
  return (
    <>
      <div className="container m-auto py-[122px]">
        <div className="grid grid-cols-4 gap-[47px]">
          <div className="flex flex-col gap-[15px] p-4 border rounded-2xl shadow-lg">
            <div className="p-[15px]">
              <img src="./BookImg.png" alt="" width={30} height={30} />
            </div>
            <div className="flex flex-col gap-1">
              <p className="not-italic font-Poppins font-bold text-TextSecondary text-lg">
                Хүргэлтийн төлөв хянах
              </p>
              <p className="not-italic font-normal text-sm opacity-[0.75]">
                Захиалга бэлтгэлийн явцыг хянах
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[15px] p-4 border rounded-2xl shadow-lg">
            <div className="p-[15px]">
              <img src="./O'clocklImg.png" alt="" width={30} height={30} />
            </div>
            <div className="flex flex-col gap-1">
              <p className="not-italic font-Poppins font-bold text-TextSecondary text-lg">
                Шуурхай хүргэлт
              </p>
              <p className="not-italic font-normal text-sm opacity-[0.75]">
                Захиалга бэлтгэлийн явцыг хянах
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[15px] p-4 border rounded-2xl shadow-lg">
            <div className="p-[15px]">
              <img
                src="./FoodIngredientsImg.png"
                alt=""
                width={30}
                height={30}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="not-italic font-Poppins font-bold text-TextSecondary text-lg">
                Эрүүл, баталгаат орц
              </p>
              <p className="not-italic font-normal text-sm opacity-[0.75]">
                Захиалга бэлтгэлийн явцыг хянах
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[15px] p-4 border rounded-2xl shadow-lg">
            <div className="p-[15px]">
              <img src="./BookImg.png" alt="" width={30} height={30} />
            </div>
            <div className="flex flex-col gap-1">
              <p className="not-italic font-Poppins font-bold text-TextSecondary text-lg">
                Хоолны өргөн сонголт
              </p>
              <p className="not-italic font-normal text-sm opacity-[0.75]">
                Захиалга бэлтгэлийн явцыг хянах
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
