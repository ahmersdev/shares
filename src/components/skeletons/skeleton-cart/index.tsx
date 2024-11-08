import { Box, Grid, Skeleton } from "@mui/material";
import { ISkeletonsProps } from "../skeletons.interface";
import { Fragment } from "react";

export default function SkeletonCart(props: ISkeletonsProps) {
  const { length = 2 } = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Box
          bgcolor={"grey.50"}
          border={1}
          borderColor={"text.stroke"}
          borderRadius={3}
          p={1.2}
        >
          {Array?.from({ length })?.map((item: any, id: any) => (
            <Box mb={2} key={item ?? `skeleton+${id}`} display={"flex"} gap={2}>
              <Skeleton variant={"rounded"} width={106} height={70} />
              <Box
                width={"100%"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-between"}
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
            </Box>
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box
          bgcolor={"grey.50"}
          border={1}
          borderColor={"text.stroke"}
          borderRadius={3}
          p={1.6}
        >
          <Skeleton
            animation={"wave"}
            variant={"rounded"}
            width={"100%"}
            height={30}
            sx={{
              bgcolor: "grey.400",
              border: 1,
              borderColor: "grey.400",
            }}
          />
          <Skeleton
            animation={"wave"}
            variant={"rounded"}
            width={"100%"}
            height={30}
            sx={{
              bgcolor: "grey.400",
              border: 1,
              mt: 1,
              borderColor: "grey.400",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
