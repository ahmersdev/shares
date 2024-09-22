import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  useTheme,
  Theme,
  Typography,
  Divider,
} from "@mui/material";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";
import { SALE_SITE } from "@/constants/routes";
import { mainRoutesArray, mainStyles } from "../web-app.data";
import { IDrawerNavbarProps } from "./drawer-navbar.interface";

const DrawerNavbar = (props: IDrawerNavbarProps) => {
  const { open, setOpen } = props;
  const theme = useTheme<Theme>();
  const pathName = usePathname();

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
        },
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
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
        <CloseIcon
          sx={{ cursor: "pointer", color: "grey.900" }}
          onClick={() => setOpen(false)}
        />
      </Box>

      <Divider sx={{ my: 3, borderColor: "text.stroke" }} />

      <List>
        {mainRoutesArray.map((item) => (
          <ListItem key={item.id} sx={{ px: 0 }}>
            <Link
              href={item.href}
              style={{ width: "100%" }}
              onClick={() => setOpen(false)}
            >
              <ListItemButton sx={mainStyles(item.href, pathName, theme)}>
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <item.icon
                    fill={
                      pathName.includes(item.href)
                        ? theme.palette.text.heading
                        : theme.palette.text.body
                    }
                  />
                </ListItemIcon>
                {item.label}
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default DrawerNavbar;
