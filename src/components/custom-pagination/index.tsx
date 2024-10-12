import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  IconButton,
  Pagination,
  TablePagination,
  Theme,
  useTheme,
} from "@mui/material";
import { styles } from "./custom-pagination.style";
import { ICustomPaginationProps } from "./custom-pagination.interface";
import { pxToRem } from "@/utils/get-font-value";

const CustomPagination = (props: ICustomPaginationProps) => {
  const {
    count = 1,
    rowsPerPageOptions = [5, 10, 15, 20],
    pageLimit = 10,
    currentPage = 1,
    onPageChange,
    setPage,
    setPageLimit,
    totalRecords = 0,
  } = props;

  const theme = useTheme<Theme>();

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
        gap={2}
        mt={2}
      >
        <TablePagination
          component="div"
          count={totalRecords}
          page={currentPage - 1}
          onPageChange={(_: any, page) => {
            if (onPageChange) {
              onPageChange?.(page);
            }
          }}
          rowsPerPage={pageLimit}
          onRowsPerPageChange={(event: any) => {
            const newPageLimit = parseInt(event.target.value, 10);
            const newPage =
              Math.floor(((currentPage - 1) * pageLimit) / newPageLimit) + 1;

            setPageLimit && setPageLimit(newPageLimit);
            setPage && setPage(newPage);
          }}
          rowsPerPageOptions={rowsPerPageOptions}
          sx={styles.tablePaginationStyle}
        />

        <Box
          display={"flex"}
          border={"1px solid"}
          borderColor={"text.bodyLight"}
          borderRadius={2}
        >
          <IconButton
            disabled={currentPage === 1}
            onClick={() => {
              setPage && setPage(currentPage - 1);
            }}
          >
            <ArrowBackIcon sx={{ color: "text.body" }} />
          </IconButton>

          <Pagination
            count={count}
            page={currentPage}
            boundaryCount={1}
            siblingCount={0}
            onChange={(_: any, page) => {
              onPageChange && onPageChange(page);
            }}
            hidePrevButton
            hideNextButton
            sx={{
              ".MuiPaginationItem-root": {
                width: 40,
                height: 40,
                borderRadius: 0,
                fontSize: pxToRem(14),
                color: "grey.50",
                backgroundColor: `${theme.palette.primary.main} !important`,
              },
            }}
          />

          <IconButton
            disabled={currentPage === count}
            onClick={() => {
              setPage && setPage(currentPage + 1);
            }}
          >
            <ArrowForwardIcon sx={{ color: "text.body" }} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default CustomPagination;
