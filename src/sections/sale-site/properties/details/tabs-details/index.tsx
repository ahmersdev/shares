import { HorizontalTabs } from "@/components/tabs";
import { Box } from "@mui/material";
import { tabsDataArray } from "./tabs-details.data";
import Details from "./details";
import Market from "./market";
import TimelineTab from "./timeline";

export default function TabsDetails() {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box maxWidth={"lg"} width={"100%"}>
        <HorizontalTabs
          tabsDataArray={tabsDataArray}
          indicatorDisplay={"none"}
          tabStyle={{
            bgcolor: "common.bgLight",
            borderRadius: 100,
            "&.Mui-selected": {
              color: "grey.50",
              bgcolor: "primary.main",
            },
          }}
          typographyStyle={{ fontWeight: 400, px: 2.4 }}
        >
          <Details />
          <>Financials</>
          <>Documents</>
          <Market />
          <TimelineTab />
        </HorizontalTabs>
      </Box>
    </Box>
  );
}
