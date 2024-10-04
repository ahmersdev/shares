import { SALE_SITE } from "@/constants/routes";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
  Divider,
  Avatar,
  CircularProgress,
  Menu,
  MenuItem,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { mainRoutesArray, mainStyles } from "../web-app.data";
import PersonIcon from "@mui/icons-material/Person";
import { getInitials } from "@/utils/avatar";
import { NextIcon, ProfileIcon } from "@/assets/icons";
import useNavbar from "./use-navbar";

export default function Navbar() {
  const {
    pathName,
    theme,
    isLoading,
    isFetching,
    isError,
    data,
    open,
    handleClick,
    anchorEl,
    handleClose,
    navbarMenuData,
  } = useNavbar();

  return (
    <Box
      height={"100%"}
      bgcolor={"grey.50"}
      p={{ md: 1, lg: 2 }}
      display={{ xs: "none", md: "block" }}
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

      <Divider sx={{ my: 3, borderColor: "text.stroke" }} />

      <List>
        {mainRoutesArray.map((item) => (
          <ListItem key={item.id} sx={{ px: 0 }}>
            <Link href={item.href} style={{ width: "100%" }}>
              <ListItemButton sx={mainStyles(item.href, pathName, theme)}>
                <ListItemIcon sx={{ minWidth: { xs: "30px", lg: "40px" } }}>
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
        <Box
          display={"flex"}
          alignItems={"center"}
          sx={{ cursor: "pointer" }}
          id="basic-box"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
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
          <Typography
            variant={"body2"}
            color={"text.heading"}
            textTransform={"capitalize"}
            ml={1}
          >
            {data?.data?.fullName}
          </Typography>

          <NextIcon />
        </Box>
      )}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-box",
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: 3,
            minWidth: 280,
          },
        }}
      >
        {navbarMenuData.map((menu) => (
          <MenuItem
            key={menu.id}
            onClick={menu.onClick}
            sx={{ mb: menu.id === 3 ? 0 : 1 }}
          >
            <ListItemIcon>
              <menu.icon />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                color: "text.disabled",
                fontWeight: "normal",
                variant: "body2",
              }}
            >
              {menu.title}
            </ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
