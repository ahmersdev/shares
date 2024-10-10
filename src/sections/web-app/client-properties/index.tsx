"use client";

import { Theme, useTheme } from "@mui/material";
import { HorizontalTabs } from "@/components/tabs";
import Available from "./available";
import Funded from "./funded";
import Exited from "./exited";

export default function ClientProperties() {
  const theme = useTheme<Theme>();

  return (
    <>
      <HorizontalTabs
        tabsDataArray={[
          { title: "Available" },
          { title: "Funded" },
          { title: "Exited" },
        ]}
        mainTabStyleProps={{
          background: theme.palette.common.white,
          px: 1.2,
          py: 0.8,
          borderRadius: "100px",
        }}
        tabStyle={{
          px: 4,
          "&.Mui-selected": {
            color: "grey.50",
            bgcolor: "primary.main",
            borderRadius: "100px",
          },
        }}
        indicatorDisplay={"none"}
      >
        <Available />
        <Funded />
        <Exited />
      </HorizontalTabs>
    </>
  );
}
