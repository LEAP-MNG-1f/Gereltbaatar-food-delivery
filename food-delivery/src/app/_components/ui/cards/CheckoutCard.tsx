export const CheckoutCard = () => {
  return (
    <div className="border border-[#D6D8DB] border-x-0 w-full p-3 grid grid-cols-2 gap-4">
      <div className="h-full w-full bg-slate-500"> </div>
      <div className="w-full flex flex-col gap-2">
        <div className="flex flex-col gap-[2px]">
          <p className="ont-Poppins text-lg not-italic font-semibold leading-[normal]">
            Main Pizza
          </p>
          <p className="font-Poppins text-lg text-BrandGreen not-italic font-semibold leading-[normal]">
            34,800<span>₮</span>
          </p>
        </div>
        <p className="font-normal text-base text-[#767676] not-italic leading-[normal]">
          Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
        </p>
      </div>
    </div>
  );
};
