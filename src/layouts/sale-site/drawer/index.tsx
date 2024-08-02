import { SALE_SITE } from "@/constants/routes";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  useTheme,
  Theme,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";
import { mainStyles, saleSiteDrawerArray } from "./drawer.data";
import { NavItem } from "@/interfaces";
import { DrawerSaleSiteProps } from "./drawer.interface";

export default function DrawerSaleSite({ open, setOpen }: DrawerSaleSiteProps) {
  const theme = useTheme<Theme>();
  const pathName: string = usePathname();

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
        <Link href={SALE_SITE.HOME} onClick={() => setOpen(false)}>
          Shares.
        </Link>
        <CloseIcon
          sx={{ cursor: "pointer", color: "secondary.100" }}
          onClick={() => setOpen(false)}
        />
      </Box>

      <List>
        {saleSiteDrawerArray?.map((item: NavItem) => (
          <ListItem key={item?.id} sx={{ px: 0 }}>
            <Link
              href={item?.href}
              style={{ width: "100%" }}
              onClick={() => setOpen(false)}
            >
              <ListItemButton sx={mainStyles(item?.href, pathName, theme)}>
                {item?.label}
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
