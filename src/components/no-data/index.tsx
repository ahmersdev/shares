import { Box, Typography } from "@mui/material";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

export default function NoData(props: any) {
  const {
    height = "50vh",
    textColor = "text.heading",
    message = "No Data Found!",
    children,
  } = props;

  return (
    <Box
      height={height}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={0.6}
    >
      <AccessTimeRoundedIcon
        sx={{ color: "text.heading" }}
        fontSize={"large"}
      />
      <Typography variant={"body3"} color={textColor}>
        {message}
      </Typography>
      {children}
    </Box>
  );
}
