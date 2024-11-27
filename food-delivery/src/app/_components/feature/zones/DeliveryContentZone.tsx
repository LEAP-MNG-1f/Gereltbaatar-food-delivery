import { GreenStarIcon } from "../../ui/svg/GreenStarIcon";

export const DeliveryContentZone = () => {
  return (
    <main>
      <div className="container m-auto pt-[57px]">
        <div className="flex flex-col gap-10">
          <div className="mt-[61px] w-full max-h-[616px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119144.83940302734!2d106.75185959468295!3d47.88639843539851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96929f21c4c285%3A0xfefdd7f982c0df3f!2sUlaanbaatar%2C%20Mongolia!5e0!3m2!1sen!2smn!4v1693145957697!5m2!1sen!2smn"
              loading="lazy"
              height={616}
              className="w-full h-[616px]"
            />
          </div>
          <div className="flex flex-col gap-[22px]">
            <div className="flex items-center py-4">
              <div className="flex items-center justify-center w-8 h-8">
                <GreenStarIcon />
              </div>
              <p className="text-[#272727] font-Poppins text-[22px] font-bold not-italic leading-[normal]">
                Хүргэлтийн бүс дэх хаягууд
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-[45px]">
              <div className="flex flex-col gap-4 w-full shadow-customShadow p-6  rounded-2xl">
                <p className="py-4 border border-solid border-BrandGreen border-x-0 border-t-0">
                  А бүс
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-4">
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      Нархан хотхон
                    </p>
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      26-р байр
                    </p>
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      26-р байр
                    </p>
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      45-р байр
                    </p>
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      3-р байр
                    </p>
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      Хоймор хотхон
                    </p>
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      Хоймор хотхон
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      Нархан хотхон
                    </p>
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      26-р байр
                    </p>
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      26-р байр
                    </p>
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      45-р байр
                    </p>
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      3-р байр
                    </p>
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      Хоймор хотхон
                    </p>
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      Хоймор хотхон
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full shadow-customShadow p-6  rounded-2xl">
                <p className="py-4 border border-solid border-BrandGreen border-x-0 border-t-0">
                  Б бүс
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-4">
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      Нархан хотхон
                    </p>
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      26-р байр
                    </p>
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      26-р байр
                    </p>
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      45-р байр
                    </p>
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      3-р байр
                    </p>
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      Хоймор хотхон
                    </p>
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      Хоймор хотхон
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      Нархан хотхон
                    </p>
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      26-р байр
                    </p>
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      26-р байр
                    </p>
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      45-р байр
                    </p>
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      3-р байр
                    </p>
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      Хоймор хотхон
                    </p>
                    <p className="text-black text-base font-normal not-italic leading-[normal]">
                      Хоймор хотхон
                    </p>
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
