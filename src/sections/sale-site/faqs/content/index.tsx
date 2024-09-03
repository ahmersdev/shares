import { Box, Grid, Typography } from "@mui/material";
import { IContentData, IContentProps } from "../faqs.interface";
import useContent from "./use-content";
import AccordionsDetails from "./accordions-details";
import MainSearch from "./main-search";

export default function Content({ contentData, setSearchTerm }: IContentProps) {
  const { theme, handleClick, singleFaq, search } = useContent({ contentData });

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} px={2}>
      {singleFaq.length ? (
        <Box maxWidth={theme.breakpoints.values.lg + 40} width={"100%"}>
          <AccordionsDetails
            setSearchTerm={setSearchTerm}
            singleFaq={singleFaq}
          />
        </Box>
      ) : !singleFaq.length && search ? (
        <Box maxWidth={theme.breakpoints.values.lg + 40} width={"100%"}>
          <MainSearch search={search} setSearchTerm={setSearchTerm} />
        </Box>
      ) : (
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
                borderColor={"primary.main"}
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
      )}
    </Box>
  );
}
