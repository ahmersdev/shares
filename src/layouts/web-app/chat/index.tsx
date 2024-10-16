import { Box, Fab, Theme, useTheme } from "@mui/material";
import { CustomTooltip } from "@/components/custom-tooltip";
import { HelpAndSupportIcon } from "@/assets/icons";

export default function Chat() {
  const theme = useTheme<Theme>();

  return (
    <>
      <CustomTooltip title={"Help And Support"} placement={"top-end"}>
        <Box position={"fixed"} bottom={16} right={16}>
          <Fab color={"primary"} aria-label={"chat"}>
            <HelpAndSupportIcon fill={theme.palette.grey[50]} />
          </Fab>
        </Box>
      </CustomTooltip>
    </>
  );
}
