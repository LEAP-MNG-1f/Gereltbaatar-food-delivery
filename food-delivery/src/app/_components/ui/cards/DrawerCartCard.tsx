import Image from "next/image";
import { CloseIcon } from "../svg/CloseIcon";
import { MinusIcon } from "../svg/MinusIcon";
import { PlusIcon } from "../svg/PlusIcon";

//-----------------------------------------------------[ type ]------->>

type DrawerCartCardProps = {
  _id?: string;
  name?: string;
  image?: string;
  ingredient?: string;
  price?: string;
  quantity?: number;
};

export const DrawerCartCard = ({
  name,
  image,
  ingredient,
  price,
  quantity,
  _id,
}: DrawerCartCardProps) => {
  const handleDelete = (_id: string | undefined) => {
    const savedItems = JSON.parse(localStorage.getItem("items") || "[]");

    const updatedItems = savedItems.filter(
      (item: { product: { _id: string } }) => item.product._id !== _id
    );

    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  return (
    <div className="border border-[#D6D8DB] border-x-0">
      <div className="py-6">
        <div className="grid grid-cols-2 gap-4 p-4">
          <div
            style={{
              background: `url('${image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-full h-full"
          ></div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-[2px]">
                <p className="font-Poppins font-semibold text-lg not-italic">
                  {name}
                </p>
                <p className="font-Poppins font-semibold text-lg text-BrandGreen not-italic ">
                  {price}
                  <span>₮</span>
                </p>
              </div>
              <button
                onClick={() => handleDelete(_id)}
                className="flex items-center justify-center p-[5px] w-[38px] h-[38px]"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="">
              <p className="text-[#767676] not-italic font-normal leading-[normal]">
                {ingredient}
              </p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center justify-center bg-BrandGreen w-[45px] h-[40px] rounded-[10px]">
                <MinusIcon />
              </button>
              <div className="px-[30px] py-2 w-[45px] h-[40px] flex items-center justify-center">
                <p className="font-Poppins font-semibold not-italic text-base ">
                  {quantity}
                </p>
              </div>
              <button className="flex items-center justify-center  bg-BrandGreen w-[45px] h-[40px] rounded-[10px]">
                <PlusIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
