import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import useTanstackTable from "./use-table";
import { StyledTableCell } from "./table.styles";
import { flexRender } from "@tanstack/react-table";
import { SkeletonTable } from "../skeletons";
import CustomPagination from "../custom-pagination";
import NoData from "../no-data";
import ApiErrorState from "../api-error-state";
import { ITanstackTableProps } from "./table.interface";

const TanstackTable = <TData,>(props: ITanstackTableProps<TData>) => {
  const {
    columns = [],
    data = [],
    isLoading = false,
    isFetching = false,
    isError = false,
    isSuccess = true,
    isPagination,
    count,
    pageLimit,
    rowsPerPageOptions,
    currentPage,
    totalRecords,
    onPageChange,
    setPage,
    setPageLimit,
    errorChildren,
    noDataProps,
  } = props;

  const table = useTanstackTable(data, columns);

  if (isLoading || isFetching) return <SkeletonTable />;

  return (
    <>
      <TableContainer
        sx={{
          border: 1,
          borderColor: "text.bodyLight",
          borderRadius: 4.5,
        }}
      >
        <Table>
          <TableHead>
            {table?.getHeaderGroups()?.map((headerGroup: any, index: any) => (
              <TableRow key={index}>
                {headerGroup?.headers?.map((header: any, index: any) => (
                  <StyledTableCell key={index}>
                    <Box display={"flex"} alignItems={"center"}>
                      {header?.isPlaceholder
                        ? null
                        : flexRender(
                            header?.column?.columnDef?.header,
                            header?.getContext()
                          )}
                    </Box>
                  </StyledTableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>

          <TableBody>
            {isSuccess &&
              !isError &&
              table?.getRowModel()?.rows?.map((row: any, rowIndex: number) => (
                <TableRow key={rowIndex}>
                  {row?.getVisibleCells()?.map((cell: any, index: any) => (
                    <StyledTableCell
                      key={index}
                      sx={{
                        bgcolor: rowIndex % 2 === 0 ? "grey.50" : "initial",
                      }}
                    >
                      {flexRender(
                        cell?.column?.columnDef?.cell,
                        cell?.getContext()
                      )}
                    </StyledTableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
        {isError ? (
          <ApiErrorState>{errorChildren}</ApiErrorState>
        ) : (
          !!!table?.getRowModel()?.rows?.length &&
          isSuccess && <NoData {...noDataProps} />
        )}
      </TableContainer>

      {isPagination && (
        <CustomPagination
          count={count}
          pageLimit={pageLimit}
          rowsPerPageOptions={rowsPerPageOptions}
          currentPage={currentPage}
          totalRecords={totalRecords}
          onPageChange={(page: any) => onPageChange?.(page)}
          setPage={setPage}
          setPageLimit={setPageLimit}
        />
      )}
    </>
  );
};

export default TanstackTable;
