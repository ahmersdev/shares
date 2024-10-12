export const transactionsTableColumns = [
  {
    accessorFn: (row: any) => row?.time,
    id: "time",
    header: "Time",
    cell: (info: any) => info.getValue(),
  },
  {
    accessorFn: (row: any) => row?.status,
    id: "status",
    header: "Status",
    cell: (info: any) => info.getValue(),
  },
  {
    accessorFn: (row: any) => row?.date,
    id: "date",
    header: "Date",
    cell: (info: any) => info.getValue(),
  },
  {
    accessorFn: (row: any) => row?.wallet,
    id: "wallet",
    header: "Wallet",
    cell: (info: any) => info.getValue(),
  },
  {
    accessorFn: (row: any) => row?.amount,
    id: "amount",
    header: "Amount",
    cell: (info: any) => info.getValue(),
  },
];
