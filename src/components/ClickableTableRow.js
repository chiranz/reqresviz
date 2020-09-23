import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core";
import RequestResponseDetails from "./RequestResponseDetails";
import dayjs from "dayjs";

const useStyles = makeStyles((theme) => ({
  tableRow: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#efefef",
    },
  },
}));

export default function ClickableTableRow({
  method,
  path,
  responseCode,
  timestamp,
}) {
  const [showDetails, setShowDetails] = useState(false);

  const handleRowClick = () => {
    setShowDetails(!showDetails);
  };
  const getFormattedTime = (timeinunix) => {
    const time = dayjs(timeinunix);
    return time.format("dddd MMMM D YYYY");
  };

  const classes = useStyles();
  return (
    <>
      <TableRow onClick={handleRowClick} className={classes.tableRow}>
        <TableCell>{method}</TableCell>
        <TableCell align="right">{path}</TableCell>
        <TableCell align="right">{responseCode}</TableCell>
        <TableCell align="right">{getFormattedTime(timestamp)}</TableCell>
      </TableRow>
      {showDetails ? (
        <TableRow>
          <TableCell colSpan={16}>
            <RequestResponseDetails />
          </TableCell>
        </TableRow>
      ) : null}
    </>
  );
}
