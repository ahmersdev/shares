"use client";

import CustomHeroBanner from "@/components/custom-hero-banner";
import { IChildrenProps, INavItem } from "@/interfaces";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import { LEGAL_PAGES, legalHeaderTitle } from "./legal.data";
import { pxToRem } from "@/utils/get-font-value";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Legal({ children }: IChildrenProps) {
  const pathName = usePathname();

  return (
    <Stack direction={"column"} spacing={5}>
      <CustomHeroBanner title={legalHeaderTitle(pathName)} />

      <Box display={"flex"} justifyContent={"center"} px={2} pb={5}>
        <Box position={"relative"} maxWidth={"lg"} width={"100%"}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Box>
                <Typography
                  variant={"caption"}
                  fontWeight={700}
                  color={"text.heading"}
                >
                  LEGAL
                </Typography>
                <List>
                  {LEGAL_PAGES.map((item: INavItem, index: number) => (
                    <ListItem
                      key={item.id}
                      sx={{ pl: 0, pt: index === 0 ? 0 : "default" }}
                    >
                      <ListItemButton
                        sx={{
                          fontSize: pxToRem(14),
                          background: "transparent",
                          p: 0,
                          "&:hover": {
                            background: "transparent",
                            color: "text.bodyLight",
                          },
                        }}
                      >
                        <Link href={item.href} style={{ width: "100%" }}>
                          {item.label}
                        </Link>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} md={9}>
              {children}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Stack>
  );
}
