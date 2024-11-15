"use client";

import { Grid } from "@mui/material";
import { IPropertyBe } from "@/interfaces/properties";
import { useGetAccountSettingsDetailsQuery } from "@/services/web-app/settings";
import { SkeletonCard } from "@/components/skeletons";
import ApiErrorState from "@/components/api-error-state";
import PropertiesCardBe from "@/components/properties-card-be";
import NoData from "@/components/no-data";

export default function ClientBookmarks() {
  const { data, isLoading, isFetching, isError } =
    useGetAccountSettingsDetailsQuery(null, {
      refetchOnMountOrArgChange: true,
    });

  if (isLoading || isFetching)
    return <SkeletonCard gridSize={{ sm: 6, lg: 4 }} length={6} />;

  if (isError) return <ApiErrorState />;

  return (
    <Grid container spacing={2.4}>
      {!!!data?.data?.bookmarkProperties?.length ? (
        <Grid item xs={12}>
          <NoData message={"No Bookmarked Properties"} />
        </Grid>
      ) : (
        data?.data?.bookmarkProperties?.map((property: IPropertyBe) => (
          <Grid item xs={12} sm={6} lg={4} key={property._id}>
            <PropertiesCardBe property={property} />
          </Grid>
        ))
      )}
    </Grid>
  );
}
