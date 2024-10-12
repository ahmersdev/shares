import TanstackTable from "@/components/table";
import { Box, Typography } from "@mui/material";
import { transactionsTableColumns } from "./transactions.data";

export default function Transactions() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={1.6}>
      <Typography variant={"body1"} fontWeight={600} color={"text.heading"}>
        Transactions
      </Typography>

      <TanstackTable
        columns={transactionsTableColumns}
        data={[]}
        noDataProps={{ height: "20vh", message: "No Transactions Yet!" }}
      />
    </Box>
  );
}
