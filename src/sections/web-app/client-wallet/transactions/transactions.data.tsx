import { CellContext } from "@tanstack/react-table";
import { ITransactionTableColumn } from "./transactions.interface";
import dayjs from "dayjs";
import { Typography } from "@mui/material";

export const transactionsTableColumns = [
  {
    accessorFn: (row: ITransactionTableColumn) => row?.createdAt,
    id: "date",
    header: "Date",
    cell: (info: CellContext<ITransactionTableColumn, any>) =>
      dayjs(info.getValue()).format("YYYY-MM-DD THH:mm"),
  },
  {
    accessorFn: (row: ITransactionTableColumn) => row?.status,
    id: "status",
    header: "Status",
    cell: (info: CellContext<ITransactionTableColumn, any>) => (
      <Typography variant={"caption"} textTransform={"capitalize"}>
        {info.getValue()}
      </Typography>
    ),
  },
  {
    accessorFn: (row: ITransactionTableColumn) => row?.paymentType,
    id: "wallet",
    header: "Wallet",
    cell: (info: CellContext<ITransactionTableColumn, any>) => (
      <Typography variant={"caption"} textTransform={"capitalize"}>
        {info.getValue()}
      </Typography>
    ),
  },
  {
    accessorFn: (row: ITransactionTableColumn) => row?.amount,
    id: "amount",
    header: "Amount",
    cell: (info: CellContext<ITransactionTableColumn, any>) => info.getValue(),
  },
];
