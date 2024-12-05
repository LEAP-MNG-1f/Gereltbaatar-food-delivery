import { DashboardIcon } from "../svg/DashboardIcon";
import { usePathname } from "next/navigation";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

export const DashboardBadgeButton = () => {
  const pathname = usePathname();
  return (
    <main>
      <Stack spacing={4} direction="row" sx={{ color: "customColor" }}>
        <ThemeProvider theme={theme}>
          <Badge
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: theme.palette.customColor,
                color: "white",
              },
            }}
            badgeContent={2}
          >
            <DashboardIcon pathname={pathname} path="/admin/dashboard" />
          </Badge>
        </ThemeProvider>
      </Stack>
    </main>
  );
};
