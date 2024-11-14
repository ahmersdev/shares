import TanstackTable from "@/components/table";
import { Box, Typography } from "@mui/material";
import { transactionsTableColumns } from "./transactions.data";
import { useGetListOfAllTransactionsQuery } from "@/services/web-app/wallet";

export default function Transactions() {
  const { data, isLoading, isFetching, isError, isSuccess } =
    useGetListOfAllTransactionsQuery(null, {
      refetchOnMountOrArgChange: true,
    });

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
