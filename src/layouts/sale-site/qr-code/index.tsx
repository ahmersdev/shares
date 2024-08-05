import { QRCodeImg } from "@/assets/images";
import { Avatar, Box, Typography } from "@mui/material";

export default function QRCode() {
  return (
    <Box display={{ xs: "none", md: "block" }}>
      <Box
        position={"fixed"}
        width={"fit-content"}
        zIndex={9}
        bottom={100}
        right={50}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          bgcolor={"grey.50"}
          borderRadius={4}
          p={2}
          pr={4}
          gap={2}
        >
          <Box bgcolor={"opacity.qrCode"} p={1} borderRadius={2}>
            <Avatar
              src={QRCodeImg.src}
              variant={"square"}
              alt={"QR Code"}
              sx={{ width: 78, height: 78 }}
            />
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={1}>
            <Typography variant={"body2"} color={"grey.800"} fontWeight={900}>
              Shares
              <Typography
                variant={"body2"}
                component={"span"}
                color={"primary.main"}
                fontWeight={900}
              >
                .
              </Typography>
            </Typography>
            <Typography variant={"body2"} color={"grey.800"} fontWeight={600}>
              Scan the QR Code
            </Typography>
            <Typography variant={"subtitle2"}>
              Download Directly On Your Phone
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
