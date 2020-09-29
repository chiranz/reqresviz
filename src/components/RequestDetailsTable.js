import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import ClickableTableRow from "./ClickableTableRow";
import CenteredLoading from "./CenteredLoading";

const useStyles = makeStyles((theme) => ({
  tableContainer: { marginTop: "2rem" },
  table: {
    minWidth: 650,
  },
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  cell: {
    color: theme.palette.common.white,
  },
}));

export default function RequestDetailsTable({ tableData }) {
  const classes = useStyles();

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell className={classes.cell}>Request Type</TableCell>
            <TableCell className={classes.cell} align="right">
              Api Path
            </TableCell>
            <TableCell className={classes.cell} align="right">
              Response Code
            </TableCell>
            <TableCell className={classes.cell} align="right">
              Timestamp
            </TableCell>
          </TableRow>
        </TableHead>
        {tableData.length > 0 ? (
          <TableBody>
            {tableData.map((data, i) => (
              <ClickableTableRow
                key={i}
                method={data.type}
                path={data.reqpath}
                responseCode={data.statusCode}
                timestamp={data.timestamps}
                header={data.header}
                queryParams={data.queryParams}
                response={data.response}
              />
            ))}
          </TableBody>
        ) : (
          <TableBody>
            <TableRow>
              <TableCell colSpan={16}>
                <CenteredLoading />
              </TableCell>
            </TableRow>
          </TableBody>
        )}
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={16}
              count={15}
              rowsPerPage={5}
              page={0}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              // onChangePage={handleChangePage}
              // onChangeRowsPerPage={handleChangeRowsPerPage}
              // ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
