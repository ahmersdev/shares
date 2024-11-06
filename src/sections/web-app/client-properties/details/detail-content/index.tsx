import { Box } from "@mui/material";

export default function DetailContent(props: any) {
  const { dataToDisplay } = props;

  return (
    <Box
      border={1}
      borderColor={"text.stroke"}
      bgcolor={"grey.50"}
      borderRadius={3}
      p={2.4}
      maxHeight={"600px"}
      height={"100%"}
      overflow={"auto"}
    >
      1
    </Box>
  );
}
