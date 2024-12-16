import { Box, Typography } from "@mui/material";
import { IChatProps } from "../chat.interface";
import CloseIcon from "@mui/icons-material/Close";
import SendUsAMessage from "../globals/send-us-a-message";

export default function Home(props: IChatProps) {
  const { handleClose } = props;

  return (
    <>
      <Box
        sx={{
          px: 1.6,
          py: 2.4,
          bgcolor: "common.bgChat",
          height: { xs: "40vh", sm: "35vh" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "baseline" }}>
            <Typography variant={"logo"} color={"common.bgLight"}>
              Shares
            </Typography>
            <Box
              width={7}
              height={7}
              bgcolor={"primary.main"}
              borderRadius={"50%"}
            />
          </Box>
          <CloseIcon
            sx={{ color: "text.body", cursor: "pointer" }}
            onClick={() => handleClose()}
          />
        </Box>

        <Box sx={{ mt: { xs: "10vh", sm: "8vh" } }}>
          <Typography variant={"h5"} color={"text.body"}>
            Hi Ahmer
          </Typography>
          <Typography variant={"h5"} color={"common.white"} mb={2.4}>
            How Can We Help You?
          </Typography>
          <SendUsAMessage
            sxProps={{
              ".MuiInputBase-root": {
                bgcolor: "common.white",
                borderRadius: 3,
                borderColor: "text.bodyLight",
                "& ::placeholder": {
                  color: "text.disabled",
                },
              },
            }}
          />
        </Box>

        <Box
          sx={{
            height: { xs: "35vh", sm: "30vh" },
            border: 1,
            mt: 1,
            borderRadius: 3,
            borderColor: "text.stroke",
            bgcolor: "common.white",
            p: 1,
            overflow: "auto",
          }}
        >
          faqs
        </Box>
      </Box>
    </>
  );
}
