import { Box, Typography } from "@mui/material";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { IApiErrorState } from "./api-error-state.interface";

export default function ApiErrorState(props: IApiErrorState) {
  const {
    height = "50vh",
    textColor = "text.heading",
    message = "Something Went Wrong!",
    children,
  } = props;

  return (
    <Box
      sx={{
        height,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 0.6,
      }}
    >
      <ErrorOutlineRoundedIcon
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
