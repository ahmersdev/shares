import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { contentData } from "../../faqs.data";
import { IAccordionData, IContentData } from "../../faqs.interface";

export default function useMainSearch({ search, setSearchTerm }: any) {
  const router = useRouter();

  const [filteredArray, setFilteredArray] = useState<IAccordionData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);

    if (contentData) {
      const filtered: IAccordionData[] = contentData
        .flatMap((content: IContentData) => content.accordions || [])
        .filter((accordion: IAccordionData) => {
          return (
            accordion.summary.toLowerCase().includes(search.toLowerCase()) ||
            accordion.details.toLowerCase().includes(search.toLowerCase())
          );
        });

      setFilteredArray(filtered);
    }

    setLoading(false);
  }, [search]);

  const onBackClickHandler = () => {
    const params = new URLSearchParams(window.location.search);
    params.delete("title");
    params.delete("search");
    setSearchTerm("");
    router.push(`?${params.toString()}`);
  };

  return { onBackClickHandler, loading, filteredArray };
}
