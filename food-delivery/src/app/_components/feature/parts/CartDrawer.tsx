import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import { DrawerCartComponent } from "./DrawerCartComponent";
import { CartIcon } from "../../ui/svg/CartIcon";
import { GetOutIcon } from "../../ui/svg/GetOutIcon";

type Anchor = "right";

export const CartDrawer = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      setState({ ...state, [anchor]: open });
    };

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <button
            className="flex items-center gap-2 px-4 py-2"
            onClick={toggleDrawer(anchor, true)}
          >
            <CartIcon />
            <p className="font-bold text-sm tracking-[-0.3px]">Сагс</p>
          </button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <div className="max-w-[586px] w-[586px] h-full">
              <div className="flex flex-col justify-between gap-10 h-full">
                <div className="">
                  <div className="flex justify-between py-[26px] px-6 items-center">
                    <button onClick={toggleDrawer(anchor, false)}>
                      <GetOutIcon />
                    </button>
                    <p className="font-Poppins text-xl font-black">Таны сагс</p>
                    <div></div>
                  </div>
                  <div className="h-full px-6">
                    <DrawerCartComponent />
                  </div>
                </div>
                <div className="grid grid-cols-2 items-center justify-between py-[10px] px-8 h-[172px] shadow-black shadow-2xl">
                  <div className="">
                    <p className="font-Poppins text-lg text-[#5E6166]">
                      Нийт төлөх дүн
                    </p>
                    <p className="text-lg font-bold">34,800₮</p>
                  </div>
                  <div className="flex items-center justify-center bg-BrandGreen py-2 px-4 flex-[1_0_0] rounded-[4px]">
                    <p className="font-Poppins text-white">Захиалах</p>
                  </div>
                </div>
              </div>
            </div>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

// CartDrawer
