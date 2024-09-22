import { Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerNavbar from "../drawer-navbar";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { headerTitle } from "./header.data";

const Header = () => {
  const pathName = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <>
      <Box p={{ xs: 1, md: 2.4 }} pb={{ xs: 0, md: 0 }}>
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <MenuIcon
            sx={{
              cursor: "pointer",
              color: "common.black",
              display: { xs: "block", md: "none" },
            }}
            onClick={() => setOpen(true)}
          />
          <Typography variant={"h4"} color={"common.black"}>
            {headerTitle(pathName)}
          </Typography>
        </Box>
      </Box>

      {open && <DrawerNavbar setOpen={setOpen} open={open} />}
    </>
  );
};

export default Header;
