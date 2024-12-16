import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IChatProps } from "../chat.interface";
import ApiErrorState from "@/components/api-error-state";
import { SkeletonChat } from "@/components/skeletons";
import { ChatMessagesActiveIcon } from "@/assets/icons";
import Chat from "./chat";
import SendUsAMessage from "../globals/send-us-a-message";
import { useGetAllChatQuery } from "@/services/web-app/chat";

export default function Messages(props: IChatProps) {
  const { handleClose } = props;

  const { data, isLoading, isFetching, isError } = useGetAllChatQuery(null, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 1.6,
          py: 2.4,
          bgcolor: "common.bgChat",
        }}
      >
        <Box />
        <Typography variant={"body1"} fontWeight={700} color={"common.white"}>
          Messages
        </Typography>
        <CloseIcon
          sx={{ color: "text.body", cursor: "pointer" }}
          onClick={() => handleClose()}
        />
      </Box>

      {isError ? (
        <ApiErrorState height={{ xs: "60vh", sm: "55vh" }} />
      ) : isLoading || isFetching ? (
        <SkeletonChat />
      ) : (
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              height: {
                xs: "50vh",
                sm: "45vh",
              },
              overflow: "auto",
            }}
          >
            {!!!data?.chat?.messages.length ? (
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ChatMessagesActiveIcon />
                <Typography
                  variant={"caption"}
                  color={"text.heading"}
                  fontWeight={600}
                >
                  Messages
                </Typography>
                <Typography variant={"caption"} textAlign={"center"}>
                  Messages From the Team Will Be Shown Here
                </Typography>
              </Box>
            ) : (
              <Chat messages={data?.chat?.messages} />
            )}
          </Box>

          <SendUsAMessage />
        </Box>
      )}
    </>
  );
}
