import { SALE_SITE } from "@/constants/routes";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainRoutesArray, mainStyles } from "./navbar.data";

export default function Navbar() {
  const theme = useTheme<Theme>();
  const pathName = usePathname();

  return (
    <Box
      height={"100%"}
      bgcolor={"grey.50"}
      p={{ md: 1, lg: 2 }}
      display={{ xs: "none", md: "block" }}
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

      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        height={"96%"}
        pt={2}
      >
        <List>
          {mainRoutesArray.map((item) => (
            <ListItem key={item.id} sx={{ px: 0 }}>
              <Link href={item.href} style={{ width: "100%" }}>
                <ListItemButton sx={mainStyles(item.href, pathName, theme)}>
                  <ListItemIcon sx={{ minWidth: { xs: "30px", lg: "40px" } }}>
                    <item.icon
                      fill={
                        pathName.includes(item.href)
                          ? theme.palette.text.heading
                          : theme.palette.text.body
                      }
                    />
                  </ListItemIcon>
                  {item?.label}
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>

        {/* <List>
          <ListItem sx={{ px: 0 }}>
            <Link href={"/coach-settings"} style={{ width: "100%" }}>
              <ListItemButton
                sx={mainStyles("/coach-settings", pathName, theme)}
              >
                <ListItemIcon sx={{ minWidth: { xs: "30px", lg: "40px" } }}>
                  <SettingsIcon
                    fill={
                      "/coach-settings" === pathName
                        ? theme?.palette?.grey?.[100]
                        : theme?.palette?.secondary?.[400]
                    }
                  />
                </ListItemIcon>
                Settings
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemButton
              sx={mainStyles("/sign-in", pathName, theme)}
              onClick={handleLogout}
            >
              <ListItemIcon sx={{ minWidth: { xs: "30px", lg: "40px" } }}>
                <SignOutIcon fill={theme?.palette?.secondary?.[400]} />
              </ListItemIcon>
              Sign Out
            </ListItemButton>
          </ListItem>
        </List> */}
      </Box>
    </Box>
  );
}
