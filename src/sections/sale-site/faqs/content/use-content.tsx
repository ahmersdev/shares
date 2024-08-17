import { Theme, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";

export default function useContent() {
  const theme = useTheme<Theme>();
  const router = useRouter();

  const handleClick = (title: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set("title", title);
    router.push(`?${params.toString()}`);
  };

  return { theme, handleClick };
}
