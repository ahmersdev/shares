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
import { pxToRem } from "@/utils/get-font-value";
import { IHorizontalTabsProps, ITabData } from "./horizontal-tabs.interface";

const HorizontalTabs = ({
  tabsDataArray = [],
  children,
  setActiveTab = () => {},
  variant = "scrollable",
  defaultValue = 0,
  margin = "unset",
}: IHorizontalTabsProps) => {
  const theme = useTheme<Theme>();

  const [value, setValue] = useState(defaultValue);
  const handleChange = (_: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const arrayChildren = Children.toArray(children);

  return (
    <Card sx={{ bgcolor: "initial", boxShadow: 0, border: 0 }}>
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
        }}
      >
        {tabsDataArray.map((tabData: ITabData, index: number) => (
          <Tab
            wrapped
            sx={{
              color: "text.body",
              fontSize: pxToRem(20),
              fontWeight: 600,
              borderRadius: 0,
              "&.Mui-selected": {
                color: "primary.main",
              },
            }}
            key={tabData?.title}
            onClick={() => {
              setActiveTab ? setActiveTab(tabData?.title) : null;
            }}
            icon={
              tabData.icon && (
                <tabData.icon
                  fill={
                    value === index
                      ? theme.palette.primary.main
                      : theme.palette.text.body
                  }
                />
              )
            }
            iconPosition="start"
            label={
              <Typography
                variant="body1"
                component="span"
                fontWeight={600}
                ml={0.5}
              >
                {tabData?.title}
              </Typography>
            }
          />
        ))}
      </Tabs>
      <Box sx={{ py: 3 }}>
        {arrayChildren.map((child, index) => (
          <Box key={index}>
            {value === index &&
              cloneElement(child as ReactElement<any>, { setValue })}
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default HorizontalTabs;
