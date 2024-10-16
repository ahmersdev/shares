import { Box, Grid, Skeleton } from "@mui/material";
import { ISkeletonsProps } from "../skeletons.interface";

export default function SkeletonCard(props: ISkeletonsProps) {
  const { length = 4, gridSize } = props;

  return (
    <Grid container spacing={2.4}>
      {Array?.from({ length })?.map((item: any, id: any) => (
        <Grid key={item ?? `skeleton+${id}`} item xs={12} {...gridSize}>
          <Box
            border={1}
            borderColor={"primary.main"}
            borderRadius={6}
            overflow={"hidden"}
            display={"flex"}
            flexDirection={"column"}
            gap={1}
          >
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={"100%"}
              height={312}
              sx={{
                bgcolor: "grey.400",
                border: 1,
                borderColor: "grey.400",
              }}
            />

            <Skeleton
              animation="wave"
              variant="rounded"
              width={"50%"}
              height={20}
              sx={{
                bgcolor: "grey.400",
                border: 1,
                borderColor: "grey.400",
                mx: 1,
              }}
            />

            <Skeleton
              animation="wave"
              variant="rounded"
              height={20}
              sx={{
                bgcolor: "grey.400",
                border: 1,
                borderColor: "grey.400",
                mx: 1,
              }}
            />

            <Skeleton
              animation="wave"
              variant="rounded"
              height={110}
              sx={{
                bgcolor: "grey.400",
                border: 1,
                borderColor: "grey.400",
                m: 1,
              }}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
