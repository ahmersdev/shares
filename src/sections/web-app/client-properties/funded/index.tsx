import { Grid } from "@mui/material";
import { IProperty } from "@/interfaces/properties";
import PropertiesCard from "@/components/properties-card";
import { fundedPropertiesData } from "./funded.data";

export default function Funded() {
  return (
    <Grid container spacing={2.4}>
      {fundedPropertiesData.map((property: IProperty) => (
        <Grid item xs={12} sm={6} md={4} key={property.id}>
          <PropertiesCard property={property} />
        </Grid>
      ))}
    </Grid>
  );
}
