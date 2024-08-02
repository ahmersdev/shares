import { SALE_SITE } from "@/constants/routes";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";
import { mainStyles, saleSiteDrawerArray } from "./drawer.data";

export default function DrawerSaleSite({ open, setOpen }: any) {
  const theme: any = useTheme();
  const pathName: any = usePathname();

  return (
    <Drawer
      anchor={"left"}
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{
        style: {
          width: "280px",
          backgroundColor: `${theme?.palette?.grey?.light}`,
          padding: "20px",
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
        {saleSiteDrawerArray?.map((item: any) => (
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
