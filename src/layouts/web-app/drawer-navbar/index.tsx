import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
  Divider,
  CircularProgress,
  Avatar,
  ListItemText,
  Collapse,
} from "@mui/material";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { SALE_SITE, WEB_APP } from "@/constants/routes";
import { lowerRoutesArray, mainRoutesArray, mainStyles } from "../web-app.data";
import { IDrawerNavbarProps } from "./drawer-navbar.interface";
import useDrawerNavbar from "./use-drawer-navbar";
import PersonIcon from "@mui/icons-material/Person";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { getInitials } from "@/utils/avatar";
import { pxToRem } from "@/utils/get-font-value";
import { logOut } from "@/store/auth";
import { HelpAndSupportIcon } from "@/assets/icons";

const DrawerNavbar = (props: IDrawerNavbarProps) => {
  const { open, setOpen } = props;

  const {
    theme,
    pathName,
    data,
    isLoading,
    isFetching,
    isError,
    handleCollapseMenuClick,
    openCollapseMenu,
    dispatch,
  } = useDrawerNavbar();

  return (
    <Drawer
      anchor={"left"}
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{
        style: {
          width: "280px",
          backgroundColor: `${theme.palette.grey[50]}`,
          padding: "20px",
        },
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Link
          href={SALE_SITE.HOME}
          style={{ display: "flex", alignItems: "baseline" }}
        >
          <Typography variant={"logo"}>Shares</Typography>
          <Box
            width={7}
            height={7}
            bgcolor={"primary.main"}
            borderRadius={"50%"}
          />
        </Link>
        <CloseIcon
          sx={{ cursor: "pointer", color: "grey.900" }}
          onClick={() => setOpen(false)}
        />
      </Box>

      <Divider sx={{ my: 3, borderColor: "text.stroke" }} />

      <List>
        {mainRoutesArray.map((item) => (
          <ListItem key={item.id} sx={{ px: 0 }}>
            <Link
              href={item.href}
              style={{ width: "100%" }}
              onClick={() => setOpen(false)}
            >
              <ListItemButton sx={mainStyles(item.href, pathName, theme)}>
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <item.icon
                    fill={
                      pathName.includes(item.href)
                        ? theme.palette.text.heading
                        : theme.palette.text.body
                    }
                  />
                </ListItemIcon>
                {item.label}
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 3, borderColor: "text.stroke" }} />

      {isLoading || isFetching ? (
        <Box textAlign={"center"}>
          <CircularProgress size={30} />
        </Box>
      ) : (
        <List sx={{ p: 0 }}>
          <ListItem sx={{ px: 0 }}>
            <ListItemButton
              onClick={handleCollapseMenuClick}
              sx={{
                background: "transparent",
                color: theme.palette.text.body,
                padding: 0.6,
                fontSize: pxToRem(16),
                fontWeight: 400,
                borderRadius: 2,
                "&:hover": {
                  background: "transparent",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <Avatar
                  alt={"Profile"}
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: "common.bgLight",
                  }}
                >
                  {isError ? (
                    <PersonIcon sx={{ fontSize: 20 }} color={"primary"} />
                  ) : (
                    <Typography
                      variant={"body3"}
                      component={"p"}
                      fontWeight={700}
                      color={"text.heading"}
                    >
                      {getInitials(data?.data?.fullName)}
                    </Typography>
                  )}
                </Avatar>
              </ListItemIcon>
              <ListItemText primary={!isError && data?.data?.fullName} />
              {openCollapseMenu ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>

          <Collapse in={openCollapseMenu} timeout={"auto"} unmountOnExit>
            <List>
              {lowerRoutesArray.map((item) => (
                <ListItem key={item.id} sx={{ px: 0 }}>
                  <Link
                    href={item.href}
                    style={{ width: "100%" }}
                    onClick={() => {
                      handleCollapseMenuClick();
                      setOpen(false);
                      item.id === 3 && dispatch(logOut());
                    }}
                  >
                    <ListItemButton
                      sx={
                        item.id === 3
                          ? {
                              background: "transparent",
                              color: theme.palette.error.main,
                              padding: "10px 8px",
                              fontSize: pxToRem(16),
                              fontWeight: 400,
                              borderRadius: 2,
                              "&:hover": {
                                background: "transparent",
                              },
                            }
                          : mainStyles(item.href, pathName, theme)
                      }
                    >
                      <ListItemIcon sx={{ minWidth: "40px" }}>
                        <item.icon
                          fill={
                            item.id === 3
                              ? undefined
                              : pathName.includes(item.href)
                              ? theme.palette.text.heading
                              : theme.palette.text.body
                          }
                        />
                      </ListItemIcon>
                      {item.label}
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
      )}

      <List sx={{ p: 0 }}>
        <ListItem sx={{ px: 0 }}>
          <Link
            href={WEB_APP.HELP_AND_SUPPORT}
            style={{ width: "100%" }}
            onClick={() => setOpen(false)}
          >
            <ListItemButton
              sx={{
                background: "transparent",
                color: theme.palette.text.body,
                padding: "10px 8px",
                fontSize: pxToRem(16),
                fontWeight: 400,
                borderRadius: 2,
                "&:hover": {
                  background: "transparent",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <HelpAndSupportIcon />
              </ListItemIcon>
              Help And Support
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerNavbar;
