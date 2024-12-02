import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { DrawerCartCard } from "../../ui/cards/DrawerCartCard";
import { CartIcon } from "../../ui/svg/CartIcon";
import { MouseEvent, KeyboardEvent, useState } from "react";
import { GetOutIcon } from "../../ui/svg/GetOutIcon";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "next/link";

//----------------------[MUI - change customr color]----------------------//

declare module "@mui/material/styles" {
  interface PaletteOptions {
    customColor?: string;
  }
  interface Palette {
    customColor?: string;
  }
}

const theme = createTheme({
  palette: {
    customColor: "#18BA51",
  },
});

//----------------------[MUI - change customr color]----------------------//

type Anchor = "right";

export const CartDrawer = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      setState({ ...state, [anchor]: open });
    };

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <div key={anchor}>
          <button
            className="flex items-center gap-2 px-4 py-2"
            onClick={toggleDrawer(anchor, true)}
          >
            <Stack spacing={4} direction="row" sx={{ color: "customColor" }}>
              <ThemeProvider theme={theme}>
                <Badge
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: theme.palette.customColor,
                      color: "white",
                    },
                  }}
                  badgeContent={21}
                >
                  <CartIcon />
                </Badge>
              </ThemeProvider>
            </Stack>
            <p className="font-bold text-sm tracking-[-0.3px]">Сагс</p>
          </button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <div className="max-w-[586px] w-[586px] h-full">
              <div className="flex flex-col justify-between h-full">
                <div className="">
                  <div className="flex justify-between py-[26px] px-6 items-center">
                    <button onClick={toggleDrawer(anchor, false)}>
                      <GetOutIcon />
                    </button>
                    <p className="font-Poppins text-xl font-black">Таны сагс</p>
                    <div></div>
                  </div>
                  <div className="2xl:h-[745px] xl:h-[600px] h-[840px] px-6 overflow-scroll scrollbar-none">
                    <DrawerCartCard />
                    <DrawerCartCard />
                    <DrawerCartCard />
                    <DrawerCartCard />
                  </div>
                </div>
                <div className="grid grid-cols-2 items-center justify-between py-[10px] px-8 h-[172px] shadow-black shadow-2xl">
                  <div className="">
                    <p className="font-Poppins text-lg text-[#5E6166]">
                      Нийт төлөх дүн
                    </p>
                    <p className="text-lg font-bold">34,800₮</p>
                  </div>
                  <Link href={"/checkout"} className="w-full">
                    <button className="w-full flex items-center justify-center bg-BrandGreen py-2 px-4 flex-[1_0_0] rounded-[4px]">
                      <p className="font-Poppins text-white">Захиалах</p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwipeableDrawer>
        </div>
      ))}
    </div>
  );
};
