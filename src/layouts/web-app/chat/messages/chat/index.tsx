import { Avatar, Box, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import { IChatProps } from "./chat.interface";
import { useEffect, useRef } from "react";

export default function Chat(props: IChatProps) {
  const { messages } = props;
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <Grid container spacing={1}>
      {messages.map((item, index) => (
        <Grid
          item
          xs={12}
          key={item?._id}
          sx={{
            display: "flex",
            justifyContent: item.sender === "user" ? "flex-end" : "flex-start",
          }}
          ref={index === messages.length - 1 ? lastMessageRef : undefined}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "flex-start",
              flexDirection: item.sender === "user" ? "row-reverse" : "row",
              width: "100%",
            }}
          >
            <Avatar
              src={"#"}
              alt={item.sender === "user" ? "User" : "Admin"}
              sx={{
                width: 40,
                height: 40,
                bgcolor: item.sender === "user" ? "primary.main" : "primary.50",
              }}
            />
            <Box textAlign={item.sender === "user" ? "end" : "start"}>
              <Typography
                variant={"body3"}
                component={"p"}
                sx={{
                  bgcolor:
                    item.sender === "user" ? "primary.main" : "primary.50",
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  color: "common.white",
                }}
              >
                {item.message}
              </Typography>
              <Typography variant={"caption"}>
                {dayjs(item.timestamp).format("HH:MM")}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
