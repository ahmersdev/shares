import {
  useState,
  Children,
  cloneElement,
  ChangeEvent,
  ReactElement,
} from "react";
import {
  Tabs,
  Tab,
  Typography,
  Box,
  Card,
  useTheme,
  Theme,
} from "@mui/material";
import { IBottomTabData, IBottomTabsProps } from "../tabs.interface";

const BottomTabs = ({
  tabsDataArray = [],
  children,
  setActiveTab = () => {},
  variant = "scrollable",
  defaultValue = 0,
  margin = "unset",
  indicatorDisplay = "default",
  tabStyle = {},
  typographyStyle = {},
  mainTabStyleProps = {},
}: IBottomTabsProps) => {
  const theme = useTheme<Theme>();

  const [value, setValue] = useState(defaultValue);
  const handleChange = (_: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const arrayChildren = Children.toArray(children);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Content above the tabs */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
        }}
      >
        {arrayChildren.map((child, index) => (
          <Box key={index} sx={{ display: value === index ? "block" : "none" }}>
            {cloneElement(child as ReactElement<any>, { setValue })}
          </Box>
        ))}
      </Box>

      {/* Tabs at the bottom of the dialog */}
      <Card
        sx={{
          position: "sticky",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          bgcolor: "common.white",
          py: 1.2,
        }}
      >
        <Tabs
          selectionFollowsFocus
          orientation={"horizontal"}
          variant={variant}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          allowScrollButtonsMobile
          sx={{
            width: "fit-content",
            minHeight: 50,
            "& .MuiTabs-scroller": {
              height: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            "& .MuiTabScrollButton-root": {
              display: "none",
            },
            "&.MuiTabs-root": {
              margin: margin,
            },
            "& .MuiTabs-indicator": {
              display: indicatorDisplay,
            },
            ...mainTabStyleProps,
          }}
        >
          {tabsDataArray.map((tabData: IBottomTabData, index: number) => (
            <Tab
              wrapped
              sx={{
                color: "text.body",
                "&.Mui-selected": {
                  color: "primary.main",
                },
                ...tabStyle,
              }}
              key={tabData.title}
              onClick={() => {
                setActiveTab ? setActiveTab(tabData.title) : null;
              }}
              icon={
                <Box>
                  {value === index ? tabData.activeIcon : tabData.inactiveIcon}
                </Box>
              }
              iconPosition="top"
              label={
                <Typography
                  variant={"caption"}
                  sx={{ fontWeight: 600, ...typographyStyle }}
                >
                  {tabData.title}
                </Typography>
              }
            />
          ))}
        </Tabs>
      </Card>
    </Box>
  );
};

export default BottomTabs;
