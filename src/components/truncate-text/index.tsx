import { Box } from "@mui/material";
import { CustomTooltip } from "../custom-tooltip";
import { truncateText } from "@/utils/avatar";
import { ITruncateTextProps } from "./truncate-text.interface";

export const TruncateText = (props: ITruncateTextProps) => {
  const {
    retainTextLeft,
    retainTextRight,
    text = "---",
    customTooltipProps,
    boxProps,
    size = 20,
    isCapital = true,
  } = props;

  return (
    <CustomTooltip
      title={text?.length > size ? text : ""}
      isCapital={isCapital}
      {...customTooltipProps}
    >
      <Box {...boxProps} textTransform={isCapital ? "capitalize" : "none"}>
        {retainTextLeft}
        {truncateText(text, size)}
        {retainTextRight}
      </Box>
    </CustomTooltip>
  );
};
