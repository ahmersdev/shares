import { Box, Button, Typography } from "@mui/material";
import { CryptoWalletIcon, DeleteIcon } from "@/assets/icons";
import { BUTTON_STYLES } from "@/styles";
import AddIcon from "@mui/icons-material/Add";
import useCryptoWallet from "./use-crypto-wallet";

export default function CryptoWallet() {
  const {
    WalletIcon,
    walletAddress,
    walletName,
    disconnectWallet,
    connectWallet,
  } = useCryptoWallet();

  return (
    <>
      <Typography variant={"body1"} fontWeight={600} color={"text.heading"}>
        Crypto Wallet
      </Typography>

      <Box
        bgcolor={"grey.50"}
        borderRadius={3}
        border={1}
        borderColor={"text.stroke"}
        p={2}
        mt={1.6}
        display={"flex"}
        flexDirection={"column"}
        gap={2}
      >
        <Box display={"flex"} alignItems={"center"} gap={0.6}>
          <CryptoWalletIcon />
          <Typography variant={"caption"}>
            Add a crypto wallet to deposit from anywhere in the world
          </Typography>
        </Box>

        {walletAddress ? (
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={0.6}
            border={1}
            borderRadius={3}
            borderColor={"text.disabled"}
            px={1.6}
            py={0.8}
          >
            <Box display={"flex"} alignItems={"center"} gap={0.6}>
              <Box
                borderRadius={1}
                border={1}
                borderColor={"text.stroke"}
                display={"flex"}
                p={0.6}
              >
                <WalletIcon />
              </Box>

              <Box
                color={"text.heading"}
                display={"flex"}
                flexDirection={"column"}
              >
                <Typography variant={"body3"} fontWeight={600}>
                  {walletName}
                </Typography>
                <Typography variant={"caption"} fontWeight={600}>
                  Wallet Address: {walletAddress}
                </Typography>
              </Box>
            </Box>

            <Box onClick={disconnectWallet} sx={{ cursor: "pointer" }}>
              <DeleteIcon />
            </Box>
          </Box>
        ) : (
          <Button
            variant={"outlined"}
            size={"small"}
            startIcon={<AddIcon />}
            sx={{
              ...BUTTON_STYLES,
              p: 1,
              color: "text.disabled",
              borderColor: "text.disabled",
              ":hover": {
                borderColor: "text.disabled",
              },
            }}
            disableElevation
            onClick={connectWallet}
          >
            Connect Wallet
          </Button>
        )}
      </Box>
    </>
  );
}
