import { SALE_SITE } from "@/constants/routes";
import { Box } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerSaleSite from "../drawer";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Box display={{ xs: "block", md: "none" }}>
      <Box
        position={"fixed"}
        width={"100%"}
        left={"50%"}
        zIndex={1}
        sx={{ transform: "translate(-50%)" }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          bgcolor={"grey.50"}
          borderRadius={6}
          m={2}
          p={2}
          position={"relative"}
        >
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <MenuIcon
              sx={{
                cursor: "pointer",
                color: "grey.900",
              }}
              onClick={() => setOpen(true)}
            />
            <Link href={SALE_SITE.HOME}>Shares.</Link>
          </Box>
        </Box>
      </Box>

      {open && <DrawerSaleSite setOpen={setOpen} open={open} />}
    </Box>
  );
}
