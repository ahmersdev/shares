import {
  FooterDribbleIcon,
  FooterFacebookIcon,
  FooterFigmaIcon,
  FooterWhatsappIcon,
  FooterYoutubeIcon,
} from "@/assets/icons";
import { SALE_SITE } from "@/constants/routes";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { footerNavDataArray, listButtonStyles } from "./footer-nav.data";
import { INavItem } from "@/interfaces";
import { usePathname } from "next/navigation";
import { IFooterNavDataArray } from "./footer-nav.interface";

export default function FooterNav() {
  const theme = useTheme<Theme>();
  const pathName = usePathname();

  return (
    <Box
      maxWidth={"lg"}
      width={"100%"}
      my={5}
      display={"flex"}
      justifyContent={"space-between"}
      flexWrap={"wrap"}
      gap={2}
    >
      <Box display={"flex"} flexDirection={"column"} gap={3}>
        <Link
          href={SALE_SITE.HOME}
          style={{ display: "flex", alignItems: "baseline" }}
        >
          <Typography variant={"logo"}>Shares</Typography>
          <Box
            width={8}
            height={8}
            bgcolor={"primary.main"}
            borderRadius={"50%"}
          />
        </Link>

        <Typography
          variant={"body2"}
          maxWidth={theme.breakpoints.values.sm - 180}
          width={"100%"}
        >
          We utilize our expertise and network to find properties with the
          greatest investment potential for you.
        </Typography>

        <Box display={"flex"} gap={0.8}>
          <FooterFacebookIcon />
          <FooterYoutubeIcon />
          <FooterDribbleIcon />
          <FooterFigmaIcon />
          <FooterWhatsappIcon />
        </Box>
      </Box>

      <Box display={"flex"} gap={8} flexWrap={"wrap"}>
        {footerNavDataArray.map((parent: IFooterNavDataArray) => (
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            key={parent.id}
          >
            <Typography variant={"body1"} fontWeight={700}>
              {parent.title}
            </Typography>
            <List sx={{ pt: 0 }}>
              {parent.navItems.map((item: INavItem, index: number) => (
                <ListItem
                  key={item.id}
                  sx={{ pl: 0, pt: index === 0 ? 0 : "default" }}
                >
                  <ListItemButton sx={listButtonStyles(item.href, pathName)}>
                    <Link href={item.href} style={{ width: "100%" }}>
                      {item.label}
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
