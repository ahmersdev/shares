import { Box, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function TimelineTab() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={3}>
      <Typography variant={"h5"} fontWeight={800} color={"text.heading"}>
        Property Timeline
      </Typography>

      <Timeline
        sx={{
          p: 0,
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
              sx={{ p: 0.8, mb: 0, bgcolor: "primary.main", boxShadow: "none" }}
            />
            <TimelineConnector sx={{ bgcolor: "primary.main" }} />
          </TimelineSeparator>
          <TimelineContent>Property Timeline</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}
