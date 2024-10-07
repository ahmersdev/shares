import { Box, Button, CircularProgress, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerNavbar from "../drawer-navbar";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { headerTitle } from "./header.data";
import { useGetUserDetailsQuery } from "@/services/web-app/settings";
import { OnBoardingHeaderIcon } from "@/assets/icons";
import { HeaderStyles } from "./header.styles";
import Link from "next/link";
import { BUTTON_STYLES } from "@/styles";

const Header = () => {
  const pathName = usePathname();

  const [open, setOpen] = useState(false);

  const { data, isLoading, isFetching, isError } = useGetUserDetailsQuery(
    null,
    { refetchOnMountOrArgChange: true }
  );

  return (
    <>
      {isLoading || isFetching ? (
        <Box sx={HeaderStyles.boxContainerStyles}>
          <CircularProgress size={30} />
        </Box>
      ) : isError ? (
        <Box sx={HeaderStyles.boxContainerStyles}>
          <Typography variant={"h6"} color={"error.main"}>
            Something Went Wrong!
          </Typography>
        </Box>
      ) : (
        <>
          {!data?.isContactAdded &&
            !data?.isFullyRegistered &&
            !data?.isKYCVerified && (
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                flexWrap={"wrap"}
                bgcolor={"common.bgOnBoarding"}
                p={1.5}
                gap={2}
              >
                <Box display={"flex"} flexWrap={"wrap"} gap={1}>
                  <OnBoardingHeaderIcon />
                  <Box display={"flex"} flexDirection={"column"}>
                    <Typography
                      variant={"body2"}
                      fontWeight={700}
                      color={"text.heading"}
                    >
                      Complete Onboarding
                    </Typography>
                    <Typography variant={"body3"} component={"p"}>
                      Local Regulations Require All Investors To Complete
                      Onboarding Before They Can Invest.
                    </Typography>
                  </Box>
                </Box>

                <Box display={"flex"} alignItems={"center"} gap={1.2}>
                  <Link href={"/"}>
                    <Button
                      variant={"outlined"}
                      size={"small"}
                      sx={{
                        ...BUTTON_STYLES,
                        p: 1,
                        color: "text.heading",
                        borderColor: "text.disabled",
                        ":hover": {
                          borderColor: "text.disabled",
                        },
                      }}
                      disableElevation
                    >
                      Complete Onboarding
                    </Button>
                  </Link>

                  <Button
                    variant={"outlined"}
                    size={"small"}
                    sx={{
                      ...BUTTON_STYLES,
                      p: 1,
                      color: "text.heading",
                      borderColor: "text.disabled",
                      ":hover": {
                        borderColor: "text.disabled",
                      },
                    }}
                    disableElevation
                  >
                    Learn More
                  </Button>
                </Box>
              </Box>
            )}
        </>
      )}

      <Box p={{ xs: 1, md: 2.4 }} pb={{ xs: 0, md: 0 }}>
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <MenuIcon
            sx={{
              cursor: "pointer",
              color: "common.black",
              display: { xs: "block", md: "none" },
            }}
            onClick={() => setOpen(true)}
          />
          <Typography variant={"h4"} color={"common.black"}>
            {headerTitle(pathName)}
          </Typography>
        </Box>
      </Box>

      {open && <DrawerNavbar setOpen={setOpen} open={open} />}
    </>
  );
};

export default Header;
