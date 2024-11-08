import { CellContext } from "@tanstack/react-table";
import { ITransactionTableColumn } from "./transactions.interface";

export const transactionsTableColumns = [
  {
    accessorFn: (row: ITransactionTableColumn) => row?.time,
    id: "time",
    header: "Time",
    cell: (info: CellContext<ITransactionTableColumn, any>) => info.getValue(),
  },
  {
    accessorFn: (row: ITransactionTableColumn) => row?.status,
    id: "status",
    header: "Status",
    cell: (info: CellContext<ITransactionTableColumn, any>) => info.getValue(),
  },
  {
    accessorFn: (row: ITransactionTableColumn) => row?.date,
    id: "date",
    header: "Date",
    cell: (info: CellContext<ITransactionTableColumn, any>) => info.getValue(),
  },
  {
    accessorFn: (row: ITransactionTableColumn) => row?.wallet,
    id: "wallet",
    header: "Wallet",
    cell: (info: CellContext<ITransactionTableColumn, any>) => info.getValue(),
  },
  {
    accessorFn: (row: ITransactionTableColumn) => row?.amount,
    id: "amount",
    header: "Amount",
    cell: (info: CellContext<ITransactionTableColumn, any>) => info.getValue(),
  },
];
