import { Grid } from "@mui/material";
import { IProperty } from "@/interfaces/properties";
import PropertiesCard from "@/components/properties-card";
import { availablePropertiesData } from "./available.data";
import { useGetAllPropertiesQuery } from "@/services/web-app/properties";
import { PROPERTIES_STATUSES } from "@/constants";
import { SkeletonCard } from "@/components/skeletons";
import ApiErrorState from "@/components/api-error-state";
import NoData from "@/components/no-data";

export default function Available() {
  const { data, isLoading, isFetching, isError } = useGetAllPropertiesQuery(
    { status: PROPERTIES_STATUSES.AVAILABLE },
    { refetchOnMountOrArgChange: true }
  );

  if (isLoading || isFetching)
    return <SkeletonCard gridSize={{ sm: 6, md: 4 }} length={6} />;

  if (isError) return <ApiErrorState />;

  return (
    <Grid container spacing={2.4}>
      {!!!data?.data?.length ? (
        <Grid item xs={12}>
          <NoData message={"No Properties Found"} />
        </Grid>
      ) : (
        availablePropertiesData.map((property: IProperty) => (
          <Grid item xs={12} sm={6} md={4} key={property.id}>
            <PropertiesCard property={property} />
          </Grid>
        ))
      )}
    </Grid>
  );
}
