"use cleant";

import * as React from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { FoodProductCard, FoodProductCardPropsArray } from "./FoodProductCard";

export const DialogButton = (props: FoodProductCardPropsArray) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button onClick={handleClickOpen}>
        <FoodProductCard
          image={props.image}
          name={props.name}
          price={props.price}
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
              background: "url('./pizza.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-[500px] h-[500px] bg-center bg-cover"
          ></div>
          <div className="flex flex-col gap-8 justify-center">
            <div className="flex flex-col gap-[2px]">
              <Typography className="!font-Poppins !font-bold !not-italic !text-[28px]">
                {props.name}
              </Typography>
              <Typography className="!font-Poppins !font-semibold !not-italic !text-BrandGreen !text-lg">
                {props.price}₮
              </Typography>
            </div>
            <div className="flex flex-col gap-3">
              <Typography className="!text-lg !font-Poppins !font-semibold !not-italic ">
                Орц
              </Typography>
              <div className="p-2 bg-[#F6F6F6] rounded-lg">
                <p className="text-[#767676]">{props.ingredient}</p>
              </div>
            </div>
            <div>
              <p className="font-Poppins font-semibold not-italic text-lg">
                Тоо
              </p>
            </div>
            <div className="flex justify-between">
              <button className="bg-BrandGreen w-[45px] h-[45px] rounded-[10px]">
                <p className="font-Inter font-black text-xl not-italic text-white">
                  -
                </p>
              </button>
              <div className="px-[30px] py-2  flex items-center justify-center">
                <p className="font-Poppins font-semibold not-italic text-base ">
                  0
                </p>
              </div>
              <button className="bg-BrandGreen w-[45px] h-[45px] rounded-[10px]">
                <p className="font-Inter font-black text-xl not-italic text-white">
                  +
                </p>
              </button>
            </div>
            <div className="">
              <button className="w-full bg-BrandGreen py-2 px-4 rounded-[4px]">
                <p className="font-Poppins text-white">Сагслах</p>
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
};
