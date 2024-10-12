import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Slider,
  Typography,
} from "@mui/material";
import { investingPlaningSliderMarks } from "./investing-planing.data";
import { BUTTON_STYLES } from "@/styles";
import { LoadingButton } from "@mui/lab";
import { pxToRem } from "@/utils/get-font-value";
import DoneIcon from "@mui/icons-material/Done";
import { IInvestingPlaningProps } from "./investing-planing.interface";
import useInvestingPlaning from "./use-investing-planing";

export default function InvestingPlaning(props: IInvestingPlaningProps) {
  const { handleNextStep, sliderValue } = props;

  const { theme, handleChange, listToDisplay } = useInvestingPlaning(props);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      p={2}
      maxWidth={theme.breakpoints.values.sm - 150}
      width={"100%"}
      margin={"auto"}
      gap={3.2}
      maxHeight={"calc(100vh - 140px)"}
      height={"100%"}
    >
      <Typography variant={"h3"} color={"text.heading"}>
        Investing Planning
      </Typography>

      <Typography variant={"body2"} color={"text.body"}>
        How Much Do You Plan To Invest In the Next 12 Month?
      </Typography>

      <Slider
        value={sliderValue}
        onChange={handleChange}
        step={null}
        min={500}
        max={75_000}
        marks={investingPlaningSliderMarks}
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => value.toLocaleString()}
        sx={{
          height: 6,
          color: "text.stroke",
          "& .MuiSlider-thumb": {
            display: "none",
          },
          "& .MuiSlider-mark": {
            height: 16,
            width: 16,
            borderRadius: "50%",
            backgroundColor: "text.stroke",
          },
          "& .MuiSlider-markActive": {
            backgroundColor: "common.white",
            border: 4,
            borderColor: "primary.main",
          },
        }}
      />

      <Box
        border={1}
        borderColor={"text.stroke"}
        borderRadius={3}
        bgcolor={"common.white"}
        boxShadow={"4px 4px 16px 0px #00000017"}
        p={2.4}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
      >
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
        <Typography variant={"caption"} color={"text.body"}>
          Invest From
        </Typography>
        <Typography variant={"body1"} fontWeight={700} color={"text.heading"}>
          USD {sliderValue.toLocaleString()}
        </Typography>

        <List>
          {listToDisplay.map((item) => (
            <ListItem sx={{ pl: 0 }} key={item}>
              <ListItemIcon sx={{ minWidth: pxToRem(30) }}>
                <DoneIcon color={"primary"} />
              </ListItemIcon>
              <ListItemText
                primary={item}
                sx={{
                  color: "common.body",
                  ".MuiTypography-root": {
                    fontSize: pxToRem(12),
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <LoadingButton
        variant={"contained"}
        fullWidth
        sx={{
          ...BUTTON_STYLES,
          color: "grey.50",
          borderColor: "primary.main",
          backgroundColor: "primary.main",
          ":hover": {
            backgroundColor: "primary.main",
          },
        }}
        disableElevation
        type={"submit"}
        onClick={handleNextStep}
      >
        Proceed
      </LoadingButton>
    </Box>
  );
}
