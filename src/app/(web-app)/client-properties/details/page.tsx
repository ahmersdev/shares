import { SkeletonDetails } from "@/components/skeletons";
import { PropertiesDetails } from "@/sections/web-app";
import { Suspense } from "react";

export default function PropertiesDetailsPage() {
  return (
    <Suspense fallback={<SkeletonDetails />}>
      <PropertiesDetails />
    </Suspense>
  );
}
