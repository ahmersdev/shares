import { Theme, useTheme } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { IContentData, IContentProps } from "../faqs.interface";

export default function useContent({ contentData }: IContentProps) {
  const theme = useTheme<Theme>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const search = searchParams.get("search");

  const handleClick = (title: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set("title", title);
    router.push(`?${params.toString()}`);
  };

  const singleFaq = contentData.filter(
    (faq: IContentData) => faq.title === title
  );

  return { theme, handleClick, singleFaq, search };
}
