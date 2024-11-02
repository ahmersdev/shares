import { Grid } from "@mui/material";
import { useGetAllPropertiesQuery } from "@/services/web-app/properties";
import { PROPERTIES_STATUSES } from "@/constants";
import { SkeletonCard } from "@/components/skeletons";
import ApiErrorState from "@/components/api-error-state";
import NoData from "@/components/no-data";
import { IPropertyBe } from "@/interfaces/properties";
import PropertiesCardBe from "@/components/properties-card-be";

export default function Funded() {
  const { data, isLoading, isFetching, isError } = useGetAllPropertiesQuery(
    { status: PROPERTIES_STATUSES.FUNDED },
    { refetchOnMountOrArgChange: true }
  );

  if (isLoading || isFetching)
    return <SkeletonCard gridSize={{ sm: 6, lg: 4 }} length={6} />;

  if (isError) return <ApiErrorState />;

  return (
    <Grid container spacing={2.4}>
      {!!!data?.data?.length ? (
        <Grid item xs={12}>
          <NoData message={"No Properties Found"} />
        </Grid>
      ) : (
        data?.data?.map((property: IPropertyBe) => (
          <Grid item xs={12} sm={6} lg={4} key={property._id}>
            <PropertiesCardBe property={property} />
          </Grid>
        ))
      )}
    </Grid>
  );
}
