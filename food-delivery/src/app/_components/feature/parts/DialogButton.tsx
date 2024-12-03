import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { FoodProductCard } from "../../ui/cards/FoodProductCard";
import { PlusIcon } from "../../ui/svg/PlusIcon";
import { MinusIcon } from "../../ui/svg/MinusIcon";
import { useState } from "react";
import { foodData } from "../../data/DataType";
import { Dispatch, SetStateAction } from "react";

type DialogButtonProps = {
  product?: foodData;
  quantity?: number | undefined;
  setQuantity?: Dispatch<SetStateAction<number>> | undefined;
};
//----------------------------------------------------------------------------->>

export const DialogButton = ({
  product,
  quantity,
  setQuantity,
}: DialogButtonProps) => {
  const [open, setOpen] = useState(false);

  const handleQuantityPlus = (plus: number) => {
    if (quantity !== undefined) {
      setQuantity?.(quantity + plus);
    }
  };

  const handleQuantityMinus = (plus: number) => {
    if (quantity !== undefined && quantity > 0) {
      setQuantity?.(quantity - plus);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setQuantity?.(1);
  };

  //----------------------------------------------------------------------------->>

  let drawerItems = JSON.parse(localStorage.getItem("items") || "[]");

  // //----------------------------------------------------------------------------->>

  const handleOnSbmit = (
    product?: foodData, // _id биш, product-г ашиглана
    quantity?: number | undefined
  ) => {
    if (product?._id !== undefined && quantity !== undefined) {
      // Өмнө хадгалагдсан бүтээгдэхүүнүүдийг шалгах
      const existingItems = drawerItems.filter(
        (drawerItem: { product: foodData; quantity: number }) =>
          drawerItem.product._id === product?._id // _id-ийг ашиглах
      );

      if (existingItems.length > 0) {
        const itemToUpdateId = existingItems[0].product._id; // Бүтээгдэхүүний _id
        const newQuantity = existingItems[0].quantity + quantity; // Шинэ тоо хэмжээ

        // Бүтээгдэхүүний тоо хэмжээг шинэчлэх
        drawerItems = drawerItems.map(
          (drawerItem: { product: foodData; quantity: number }) =>
            drawerItem.product._id === itemToUpdateId
              ? { ...drawerItem, quantity: newQuantity } // Тоо хэмжээг нэмэх
              : drawerItem
        );

        localStorage.setItem("items", JSON.stringify(drawerItems));
      } else {
        const newItem = {
          product, // Бүтээгдэхүүний мэдээлэл
          quantity: quantity, // Тоо хэмжээ
        };
        drawerItems.push(newItem); // Шинэ бүтээгдэхүүн нэмэх

        localStorage.setItem("items", JSON.stringify(drawerItems));
      }
    }
    setQuantity?.(1); // Тоо хэмжээг анхны утганд тохируулах
    setOpen(false); // Таглах
    // localStorage.removeItem("items");
  };
  //----------------------------------------------------------------------------->>

  return (
    <>
      <button onClick={handleClickOpen}>
        <FoodProductCard
          image={product?.image}
          name={product?.name}
          price={product?.price}
        />
      </button>
      <Dialog
        fullWidth
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 18,
            top: 20,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <div className="flex gap-[33px] p-8 rounded-2xl bg-white">
          <div
            style={{
              background: `url('${product?.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-[500px] h-[500px] bg-center bg-cover flex items-center justify-center"
          >
            {/* <img
              src={image}
              alt=""
              className="flex items-center justify-center"
            /> */}
          </div>
          <div className="flex flex-col gap-8 justify-center">
            <div className="flex flex-col gap-[2px]">
              <Typography className="!font-Poppins !font-bold !not-italic !text-[28px]">
                {product?.name}
              </Typography>
              <Typography className="!font-Poppins !font-semibold !not-italic !text-BrandGreen !text-lg">
                {product?.price}₮
              </Typography>
            </div>
            <div className="flex flex-col gap-3">
              <Typography className="!text-lg !font-Poppins !font-semibold !not-italic ">
                Орц
              </Typography>
              <div className="p-2 bg-[#F6F6F6] rounded-lg leading-[normal] font-normal">
                <p className="text-[#767676]">{product?.ingredient}</p>
              </div>
            </div>
            <div>
              <p className="font-Poppins font-semibold not-italic text-lg">
                Тоо
              </p>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => handleQuantityMinus(1)}
                className="flex items-center justify-center bg-BrandGreen w-[45px] h-[45px] rounded-[10px]"
              >
                <MinusIcon />
              </button>
              <div className="px-[30px] py-2  flex items-center justify-center">
                <p className="font-Poppins font-semibold not-italic text-base ">
                  {quantity}
                </p>
              </div>
              <button
                onClick={() => handleQuantityPlus(1)}
                className="flex items-center justify-center  bg-BrandGreen w-[45px] h-[45px] rounded-[10px]"
              >
                <PlusIcon />
              </button>
            </div>
            <div className="">
              <button
                onClick={() => handleOnSbmit(product, quantity)}
                className="w-full bg-BrandGreen py-2 px-4 rounded-[4px]"
              >
                <p className="font-Poppins text-white">Сагслах</p>
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};
