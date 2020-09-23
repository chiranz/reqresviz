import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { requestData } from "../constant";
import ClickableTableRow from "./ClickableTableRow";

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

export default function RequestDetailsTable() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead autoCapitalize className={classes.head}>
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
        <TableBody>
          {requestData.map((request, i) => (
            <ClickableTableRow
              key={i}
              method={request.method}
              path={request.path}
              responseCode={request.responseCode}
              timestamp={request.timeStamp}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
