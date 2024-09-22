"use client";

import { Grid } from "@mui/material";
import { propertiesData } from "./client-properties.data";
import { IProperty } from "@/interfaces/properties";
import PropertiesCard from "@/components/properties-card";

export default function ClientProperties() {
  return (
    <Grid container spacing={2.4}>
      {propertiesData.map((property: IProperty) => (
        <Grid item xs={12} sm={6} md={4} key={property.id}>
          <PropertiesCard property={property} />
        </Grid>
      ))}
    </Grid>
  );
}
