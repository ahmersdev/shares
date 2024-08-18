import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { IAccordionsDetailsProps } from "../../faqs.interface";

export default function useAccordionsDetails({
  setSearchTerm,
  singleFaq,
}: IAccordionsDetailsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search")?.toLowerCase();

  const [filteredArray, setFilteredArray] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const singleFaqDetails = singleFaq[0];

  useEffect(() => {
    setLoading(true);
    if (singleFaqDetails.accordions) {
      const filtered = singleFaqDetails.accordions.filter(
        (accordion) =>
          accordion.summary?.toLowerCase().includes(search ?? "") ||
          accordion.details?.toLowerCase().includes(search ?? "")
      );
      setFilteredArray(filtered);
    }
    setLoading(false);
  }, [search, singleFaqDetails]);

  const onBackClickHandler = () => {
    const params = new URLSearchParams(window.location.search);
    params.delete("title");
    params.delete("search");
    setSearchTerm("");
    router.push(`?${params.toString()}`);
  };

  return { onBackClickHandler, singleFaqDetails, loading, filteredArray };
}
