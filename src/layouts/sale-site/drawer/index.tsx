import { SALE_SITE } from "@/constants/routes";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { mainStyles } from "./drawer.data";
import { INavItem } from "@/interfaces";
import { IDrawerSaleSiteProps } from "./drawer.interface";
import useDrawer from "./use-drawer";

export default function DrawerSaleSite({
  open,
  setOpen,
}: IDrawerSaleSiteProps) {
  const { theme, pathName, saleSiteDrawerArray } = useDrawer();

  return (
    <Drawer
      anchor={"left"}
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{
        style: {
          width: "280px",
          backgroundColor: `${theme.palette.grey[50]}`,
          padding: "20px",
          borderRadius: "0px 24px 24px 0px",
        },
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box onClick={() => setOpen(false)}>
          <Link
            href={SALE_SITE.HOME}
            style={{ display: "flex", alignItems: "baseline" }}
          >
            <Typography variant={"logo"}>Shares</Typography>
            <Box
              width={7}
              height={7}
              bgcolor={"primary.main"}
              borderRadius={"50%"}
            />
          </Link>
        </Box>
        <CloseIcon
          sx={{ cursor: "pointer", color: "secondary.100" }}
          onClick={() => setOpen(false)}
        />
      </Box>

      <List>
        {saleSiteDrawerArray.map((item: INavItem) => (
          <ListItem key={item.id} sx={{ px: 0 }}>
            <Link
              href={item.href}
              style={{ width: "100%" }}
              onClick={() => setOpen(false)}
            >
              <ListItemButton sx={mainStyles(item.href, pathName, theme)}>
                {item.label}
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
