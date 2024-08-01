import { SALE_SITE } from "@/constants/routes";
import { Box, Button, List, ListItem, ListItemButton } from "@mui/material";
import Link from "next/link";
import { listButtonStyles, saleSiteHeaderArray } from "./navbar.data";
import { usePathname } from "next/navigation";
import { BUTTON_STYLES } from "@/styles";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <Box display={{ xs: "none", md: "block" }}>
      <Box
        position={"fixed"}
        maxWidth={"xl"}
        width={"100%"}
        left={"50%"}
        sx={{ transform: "translate(-50%)" }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          bgcolor={"grey.light"}
          borderRadius={6}
          mt={2}
          mx={5}
          px={4}
          py={2.5}
        >
          <Link href={SALE_SITE.HOME}>Shares.</Link>

          <List sx={{ display: "flex", whiteSpace: "nowrap" }}>
            {saleSiteHeaderArray?.map((item: any) => (
              <ListItem key={item?.id}>
                <ListItemButton sx={listButtonStyles(item?.href, pathName)}>
                  <Link href={item?.href} style={{ width: "100%" }}>
                    {item?.label}
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <Button
              variant={"contained"}
              sx={{
                ...BUTTON_STYLES,
                color: "text.heading",
                borderColor: "text.stroke",
                background: "transparent",
                ":hover": {
                  backgroundColor: "text.stroke",
                },
              }}
              disableElevation
            >
              Login
            </Button>
            <Button
              variant={"contained"}
              sx={{
                ...BUTTON_STYLES,
                color: "grey.light",
                borderColor: "common.bgDark",
                backgroundColor: "common.bgDark",
                ":hover": {
                  backgroundColor: "common.bgDark",
                },
              }}
              disableElevation
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
