import { Box, Grid, Skeleton, Stack } from "@mui/material";

export default function SkeletonDetails() {
  return (
    <Stack spacing={2.4}>
      <Skeleton
        variant={"rounded"}
        animation={"wave"}
        width={"100%"}
        height={50}
        sx={{
          bgcolor: "grey.400",
        }}
      />

      <Skeleton
        variant={"rounded"}
        animation={"wave"}
        width={"100%"}
        height={300}
        sx={{
          bgcolor: "grey.400",
        }}
      />

      <Box>
        <Grid container spacing={2.4}>
          <Grid item xs={12} md={8}>
            <Skeleton
              variant={"rounded"}
              animation={"wave"}
              width={"100%"}
              height={300}
              sx={{
                bgcolor: "grey.400",
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Skeleton
              variant={"rounded"}
              animation={"wave"}
              width={"100%"}
              height={300}
              sx={{
                bgcolor: "grey.400",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
