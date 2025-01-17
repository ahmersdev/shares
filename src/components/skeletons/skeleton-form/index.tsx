import { Box, Grid, Skeleton } from "@mui/material";
import { ISkeletonsProps } from "../skeletons.interface";

export default function SkeletonForm(props: ISkeletonsProps) {
  const { length = 4, gridSize } = props;

  return (
    <Grid container spacing={2.4}>
      {Array?.from({ length })?.map((item: any, id: any) => (
        <Grid key={item ?? `skeleton+${id}`} item xs={12} {...gridSize}>
          <Skeleton
            animation="wave"
            variant="rounded"
            width={"30%"}
            height={20}
            sx={{
              bgcolor: "grey.400",
              border: 1,
              borderColor: "grey.400",
            }}
          />
          <Box
            border={1}
            borderColor={"text.bodyLight"}
            p={1}
            mt={0.5}
            borderRadius={3}
          >
            <Skeleton
              animation="wave"
              variant="rounded"
              width={"100%"}
              height={30}
              sx={{
                bgcolor: "grey.400",
                border: 1,
                borderColor: "grey.400",
              }}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
