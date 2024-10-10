import { Grid } from "@mui/material";
import { IProperty } from "@/interfaces/properties";
import PropertiesCard from "@/components/properties-card";
import { availablePropertiesData } from "./available.data";

export default function Available() {
  return (
    <Grid container spacing={2.4}>
      {availablePropertiesData.map((property: IProperty) => (
        <Grid item xs={12} sm={6} md={4} key={property.id}>
          <PropertiesCard property={property} />
        </Grid>
      ))}
    </Grid>
  );
}
