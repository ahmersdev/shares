import { HeroBannerBgImg } from "@/assets/images";
import {
  Box,
  InputAdornment,
  TextField,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { pxToRem } from "@/utils/get-font-value";
import { SearchIcon } from "@/assets/icons";
import { IHeroBannerProps } from "../faqs.interface";

export default function HeroBanner({
  searchTerm,
  handleInputChange,
}: IHeroBannerProps) {
  const theme = useTheme<Theme>();

  return (
    <Box position={"relative"} px={2}>
      <Box
        position={"absolute"}
        top={0}
        left={0}
        zIndex={-1}
        borderRadius={"0px 0px 64px 64px"}
        width={"100%"}
        height={"50vh"}
        sx={{
          backgroundImage: `url(${HeroBannerBgImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "top left",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
        height={"50vh"}
        gap={4}
        pt={10}
      >
        <Typography
          variant={"heading1"}
          component={"h1"}
          fontWeight={800}
          color={"grey.900"}
          textAlign={"center"}
        >
          Need Answers? Explore Our FAQs
        </Typography>

        <Box maxWidth={"md"} width={"100%"}>
          <TextField
            variant={"outlined"}
            placeholder={"Search For Articles"}
            value={searchTerm}
            onChange={handleInputChange}
            fullWidth
            inputProps={{
              style: {
                color: theme.palette.text.body,
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ pr: { xs: 0, md: 2 } }}>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              mt: 0.5,
              ".MuiInputBase-root": {
                px: { xs: 2, md: 5 },
                borderRadius: 6,
                border: 1,
                height: 80,
                fontWeight: 500,
                fontSize: pxToRem(20),
                bgcolor: theme.palette.grey[50],
                borderColor: theme.palette.primary[5],
                "&:hover fieldset": {
                  borderColor: theme.palette.primary[5],
                  border: 1,
                },
                "& fieldset": {
                  borderColor: theme.palette.primary[5],
                  border: 1,
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme.palette.primary[5],
                  border: 1,
                },
                "& ::placeholder": {
                  color: theme.palette.text.body,
                },
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
