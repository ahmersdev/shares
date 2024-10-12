import { Tooltip } from "@mui/material";
import { ICustomTooltipProps } from "./custom-tooltip.interface";

export const CustomTooltip = (props: ICustomTooltipProps) => {
  const {
    title = "",
    children,
    placement = "top",
    isCapital,
    maxWidth = 400,
    ...others
  } = props;

  return (
    <Tooltip
      title={title}
      placement={placement}
      arrow
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: "primary.main",
            color: "common.white",
            borderRadius: 1,
            fontWeight: 700,
            textTransform: isCapital ? "capitalize" : "none",
            maxWidth: maxWidth,
          },
        },
        arrow: {
          sx: {
            color: "primary.main",
          },
        },
      }}
      {...others}
    >
      {children}
    </Tooltip>
  );
};
