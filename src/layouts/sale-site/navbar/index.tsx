import { AUTH, SALE_SITE } from "@/constants/routes";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { listButtonStyles, saleSiteHeaderArray } from "./navbar.data";
import { usePathname } from "next/navigation";
import { BUTTON_STYLES } from "@/styles";
import { INavItem } from "@/interfaces";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <Box display={{ xs: "none", md: "block" }}>
      <Box
        position={"fixed"}
        maxWidth={"xl"}
        width={"100%"}
        left={"50%"}
        zIndex={9}
        sx={{ transform: "translate(-50%)" }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          bgcolor={"grey.50"}
          borderRadius={6}
          mt={2}
          mx={5}
          px={4}
          py={2.5}
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

          <List sx={{ display: "flex", whiteSpace: "nowrap" }}>
            {saleSiteHeaderArray.map((item: INavItem) => (
              <ListItem key={item.id}>
                <ListItemButton sx={listButtonStyles(item.href, pathName)}>
                  <Link href={item.href} style={{ width: "100%" }}>
                    {item.label}
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <Link href={AUTH.SIGN_IN}>
              <Button
                variant={"contained"}
                sx={{
                  ...BUTTON_STYLES,
                  color: "primary.main",
                  borderColor: "common.bgLightTwo",
                  backgroundColor: "common.bgLightTwo",
                  ":hover": {
                    backgroundColor: "common.bgLightTwo",
                  },
                }}
                disableElevation
              >
                Login
              </Button>
            </Link>

            <Link href={AUTH.SIGN_UP}>
              <Button
                variant={"contained"}
                sx={{
                  ...BUTTON_STYLES,
                  color: "grey.50",
                  borderColor: "primary.main",
                  backgroundColor: "primary.main",
                  ":hover": {
                    backgroundColor: "primary.main",
                  },
                }}
                disableElevation
              >
                Sign Up
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
