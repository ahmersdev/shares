import { Box, Skeleton } from "@mui/material";
import { ISkeletonsProps } from "../skeletons.interface";

export default function SkeletonTable(props: ISkeletonsProps) {
  const { length = 4 } = props;

  return (
    <Box
      border={1}
      borderColor={"grey.400"}
      borderRadius={3}
      overflow={"hidden"}
    >
      <Skeleton
        variant="rounded"
        width={"100%"}
        height={50}
        sx={{
          bgcolor: "grey.400",
        }}
      />
      {Array.from({ length })?.map((item: any, id: any) => (
        <Box key={item ?? `skeleton+${id}`} borderColor={"grey.400"} p={1}>
          <Skeleton
            animation="wave"
            variant="rounded"
            width={"95%"}
            height={50}
            sx={{
              bgcolor: "grey.300",
              margin: "auto",
            }}
          />
        </Box>
      ))}
    </Box>
  );
}
