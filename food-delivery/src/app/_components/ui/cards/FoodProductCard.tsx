//--------------------------[Import zone]--------------------------//

import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

//--------------------------[Import zone]--------------------------//

//--------------------------[Props type zone]--------------------------//

export type foodDatas = {
  _id?: string;
  name?: string;
  image?: string;
  ingredient?: string;
  price?: number;
};

//--------------------------[Props type zone]--------------------------//

export const FoodProductCard = (props: foodDatas) => {
  return (
    <div className="flex flex-col gap-[14px]">
      <div className="">
        <CardMedia
          component="img"
          className="!rounded-2xl !max-h-[189px]"
          image={props.image}
        />
      </div>
      <CardContent className="!p-0">
        <Typography
          gutterBottom
          className="!text-start !font-Poppins !font-semibold !not-italic !text-lg !mb-0"
          component="div"
        >
          {props.name}
        </Typography>
        <Typography className="!text-start !font-Poppins !font-semibold !not-italic !text-lg !text-BrandGreen">
          {props.price}₮
        </Typography>
      </CardContent>
    </div>
  );
};
