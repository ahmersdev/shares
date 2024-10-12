import { ReactNode } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { INoData } from "../no-data/no-data.interface";

export interface ITanstackTableProps<TData> {
  columns?: ColumnDef<TData, any>[];
  data?: TData[];
  isLoading?: boolean;
  isFetching?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  isPagination?: boolean;
  count?: number;
  pageLimit?: number;
  rowsPerPageOptions?: number[];
  currentPage?: number;
  totalRecords?: number;
  onPageChange?: (page: number) => void;
  setPage?: (page: number) => void;
  setPageLimit?: (limit: number) => void;
  errorChildren?: ReactNode;
  noDataProps?: INoData;
}
