//--------------------------[Import zone]--------------------------//

import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

//--------------------------[Import zone]--------------------------//

//--------------------------[Props type zone]--------------------------//

type FoodProductCardProbs = {
  imgUrl?: string;
  productTitle?: string;
  productPrice?: number;
};

//--------------------------[Props type zone]--------------------------//

export const FoodProductCard = (props: FoodProductCardProbs) => {
  return (
    <div className="flex flex-col gap-[14px]">
      <div className="">
        <CardMedia
          component="img"
          className="!rounded-2xl !max-h-[189px] h-[189px] border "
          image={`${props.imgUrl}`}
        />
      </div>
      <CardContent className="!p-0">
        <Typography
          gutterBottom
          className="!font-Poppins !font-semibold !not-italic !text-lg !mb-0"
          component="div"
        >
          {props.productTitle}
        </Typography>
        <Typography className="!font-Poppins !font-semibold !not-italic !text-lg !text-BrandGreen">
          {props.productPrice}₮
        </Typography>
      </CardContent>
    </div>
  );
};
