import { Box, Grid, Typography } from "@mui/material";
import { IContentData, IContentProps } from "../faqs.interface";
import useContent from "./use-content";

export default function Content({ contentData }: IContentProps) {
  const { theme, handleClick } = useContent();

  return (
    <Box display={"flex"} justifyContent={"center"} px={2}>
      <Grid
        container
        spacing={4}
        maxWidth={theme.breakpoints.values.lg + 80}
        width={"100%"}
      >
        {contentData.map((parent: IContentData) => (
          <Grid item xs={12} sm={6} md={4} key={parent.parentId}>
            <Box
              width={"100%"}
              height={"100%"}
              border={1}
              borderColor={"text.stroke"}
              bgcolor={"grey.50"}
              borderRadius={6}
              textAlign={"center"}
              overflow={"hidden"}
              sx={{ cursor: "pointer" }}
              onClick={() => handleClick(parent.title)}
            >
              <Box width={"100%"} bgcolor={"primary.5"} p={2.4}>
                <parent.icon />
              </Box>
              <Typography
                variant={"h5"}
                color={"text.heading"}
                mt={1.5}
                px={2.4}
              >
                {parent.title}
              </Typography>
              <Typography variant={"body1"} p={2.4}>
                {parent.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
