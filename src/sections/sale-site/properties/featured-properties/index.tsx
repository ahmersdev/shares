import PropertiesCard from "@/components/properties-card";
import { Box, Typography, Grid } from "@mui/material";
import { IProperty } from "@/interfaces/properties";
import useFeaturedProperties from "./use-featured-properties";
import SignInDialog from "@/components/sign-in-dialog";

export default function FeaturedProperties() {
  const { propertiesData, openDialog, setOpenDialog } = useFeaturedProperties();

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={2.4}
        px={2}
        pb={5}
        mt={5}
      >
        <Typography
          variant={"heading1"}
          component={"h1"}
          color={"common.bgDark"}
          textAlign={"center"}
        >
          Featured Properties
        </Typography>
        <Typography variant={"h7"} textAlign={"center"}>
          We only select properties with the highest income potential
        </Typography>

        <Grid container spacing={2.4} maxWidth={"lg"} width={"100%"}>
          {propertiesData.map((property: IProperty) => (
            <Grid item xs={12} sm={6} md={4} key={property.id}>
              <PropertiesCard property={property} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {openDialog && (
        <SignInDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
      )}
    </>
  );
}
