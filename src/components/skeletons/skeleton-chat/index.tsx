import { Box, Grid, Skeleton } from "@mui/material";
import { ISkeletonsProps } from "../skeletons.interface";

export default function SkeletonChat(props: ISkeletonsProps) {
  const { length = 8 } = props;

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {Array.from({ length }).map((_, index) => (
          <Grid
            item
            xs={12}
            key={index}
            sx={{
              display: "flex",
              justifyContent: index % 2 === 0 ? "flex-end" : "flex-start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                flexDirection: index % 2 === 0 ? "row-reverse" : "row",
                width: "100%",
              }}
            >
              <Skeleton
                variant={"circular"}
                width={40}
                height={40}
                sx={{
                  bgcolor: "grey.400",
                  border: 1,
                  borderColor: "grey.400",
                }}
              />
              <Skeleton
                variant={"rounded"}
                width={"50%"}
                height={40}
                sx={{
                  borderRadius: 10,
                  bgcolor: "grey.400",
                  border: 1,
                  borderColor: "grey.400",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
