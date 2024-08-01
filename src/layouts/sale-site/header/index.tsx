import { Box } from "@mui/material";

export default function Header() {
  return (
    <Box
      display={{ xs: "flex", md: "none" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      bgcolor={"grey.black"}
      m={1}
      borderRadius={6}
      px={1}
      py={3}
    >
      Mobile Header
    </Box>
  );
}
