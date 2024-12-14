import {
  Box,
  Dialog,
  DialogContent,
  Fab,
  Theme,
  useTheme,
} from "@mui/material";
import { CustomTooltip } from "@/components/custom-tooltip";
import {
  ChatMessagesActiveIcon,
  ChatMessagesInactiveIcon,
  HelpAndSupportIcon,
} from "@/assets/icons";
import { useState } from "react";
import { BottomTabs } from "@/components/tabs";
import { ChatHomeActiveIcon, ChatHomeInactiveIcon } from "@/assets/icons";

export default function Chat() {
  const theme = useTheme<Theme>();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CustomTooltip title={"Help And Support"} placement={"top-end"}>
        <Box position={"fixed"} bottom={16} right={16}>
          <Fab color={"primary"} aria-label={"chat"} onClick={handleOpen}>
            <HelpAndSupportIcon fill={theme.palette.grey[50]} />
          </Fab>
        </Box>
      </CustomTooltip>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            position: "fixed",
            bottom: 80,
            right: 16,
            m: 0,
            width: { xs: "90vw", sm: 400 },
            height: { xs: "80vh", sm: "70vh" },
            overflow: "auto",
            borderRadius: 6,
            bgcolor: "common.bgLight",
          },
        }}
      >
        <DialogContent sx={{ p: 0 }}>
          <BottomTabs
            indicatorDisplay={"none"}
            tabsDataArray={[
              {
                title: "Home",
                activeIcon: <ChatHomeActiveIcon />,
                inactiveIcon: <ChatHomeInactiveIcon />,
              },
              {
                title: "Messages",
                activeIcon: <ChatMessagesActiveIcon />,
                inactiveIcon: <ChatMessagesInactiveIcon />,
              },
              {
                title: "Help",
                activeIcon: <ChatHomeActiveIcon />,
                inactiveIcon: <ChatHomeInactiveIcon />,
              },
            ]}
            margin={"auto"}
          >
            <>Home</>
            <>Chat</>
            <>Help</>
          </BottomTabs>
        </DialogContent>
      </Dialog>
    </>
  );
}
