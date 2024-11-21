import TanstackTable from "@/components/table";
import { Box, Typography } from "@mui/material";
import { transactionsTableColumns } from "./transactions.data";
import { useGetListOfAllTransactionsQuery } from "@/services/web-app/wallet";
import { BrowserProvider, Contract } from "ethers";
import RealEstateSPVABI from "@/json/RealEstateSPVABI.json";
import { CONTRACT_ADDRESS } from "@/constants";
import { useEffect } from "react";

const getListOfAllTransactionsFromCrypto = async (contract: Contract) => {
  try {
    const filter = contract.filters.InvestmentMade();
    contract.on(filter, (investor, amount, time, event) => {
      console.log("Investment Made:", { investor, amount, time, event });
    });
  } catch (error) {
    console.error("Error setting up event listener:", error);
  }
};

export default function Transactions() {
  const { data, isLoading, isFetching, isError, isSuccess } =
    useGetListOfAllTransactionsQuery(null, {
      refetchOnMountOrArgChange: true,
    });

  useEffect(() => {
    const setupContractListener = async () => {
      if (typeof window !== "undefined" && (window as any)?.ethereum) {
        const provider = new BrowserProvider((window as any)?.ethereum);
        const contract = new Contract(
          CONTRACT_ADDRESS,
          RealEstateSPVABI,
          provider
        );

        await getListOfAllTransactionsFromCrypto(contract);
      }
    };

    setupContractListener();
  }, []);

  return (
    <Box display={"flex"} flexDirection={"column"} gap={1.6}>
      <Typography variant={"body1"} fontWeight={600} color={"text.heading"}>
        Transactions
      </Typography>

      <TanstackTable
        columns={transactionsTableColumns}
        data={data?.transactions}
        noDataProps={{ height: "20vh", message: "No Transactions Yet!" }}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
      />
    </Box>
  );
}
