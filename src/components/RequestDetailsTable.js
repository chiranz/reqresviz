import React, { useState } from "react";
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
import { useQuery } from "react-query";
import Typography from "@material-ui/core/Typography";
import CenteredTableCell from "./CenteredTableCell";
import Axios from "axios";

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

export default function RequestDetailsTable({ hostId }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  async function loadData(hostId, page, limit) {
    const res = await Axios.get(
      `/generate-host/${hostId}?page=${page}&limit=${limit}`
    );
    const { data } = res;
    const result = [];

    for (let i = 0; i < data.length; i++) {
      const currData = data[i];
      let {
        type,
        response,
        reqpath,
        response: { statusCode },
        timestamps,
        header,
        queryParams,
      } = currData;
      const formattedData = {
        type,
        response,
        reqpath,
        statusCode,
        timestamps,
        header,
        queryParams,
      };
      result.push(formattedData);
    }

    return result;
  }

  const { data, isLoading, error } = useQuery(
    [page, rowsPerPage],
    async () => await loadData(hostId, page + 1, rowsPerPage)
  );

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };
  const classes = useStyles();
  console.log(page);

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
        {data && data.length ? (
          <TableBody>
            {data.map((d, i) => (
              <ClickableTableRow
                key={i}
                method={d.type}
                path={d.reqpath}
                responseCode={d.statusCode}
                timestamp={d.timestamps}
                header={d.header}
                queryParams={d.queryParams}
                response={d.response}
              />
            ))}
          </TableBody>
        ) : isLoading ? (
          <CenteredTableCell>
            <CenteredLoading />
          </CenteredTableCell>
        ) : error ? (
          <CenteredTableCell>
            <Typography variant="h6" color="initial">
              Opps!! Error Occured
            </Typography>
          </CenteredTableCell>
        ) : (
          <CenteredTableCell>
            <Typography variant="h6" color="initial">
              No Data
            </Typography>
          </CenteredTableCell>
        )}
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              colSpan={16}
              // TODO: get data from server and change tabledata count
              count={100}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              onChangePage={(_, newPage) => setPage(newPage)}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
