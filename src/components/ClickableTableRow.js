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
  tableCell: {
    padding: "10px",
  },
}));

export default function ClickableTableRow({
  method,
  path,
  responseCode,
  timestamp,
  header,
  queryParams,
  response,
  body,
}) {
  const [showDetails, setShowDetails] = useState(false);

  const handleRowClick = () => {
    setShowDetails(!showDetails);
  };
  const getFormattedTime = (timeinunix) => {
    const time = dayjs(timeinunix);
    return time.format("dddd MMMM D YYYY");
  };
  const getBackgroundColor = (statusCode) => {
    const codeType = statusCode.toString().slice(0, 1);
    const colors = {
      blue: "#007BFF",
      green: "#5CA846",
      red: "#DD4B44",
      orange: "#F8C107",
      default: "#ffffff",
    };
    if (codeType === "2" || codeType === "3") {
      return colors.green;
    } else if (codeType === "4") {
      return colors.orange;
    } else if (codeType === "5") {
      return colors.red;
    }
    return colors.default;
  };
  const getTextColor = (statusCode) => {
    const codeType = statusCode.toString().slice(0, 1);
    const textColors = {
      light: "#ffffff",
      dark: "#000000",
    };
    if (codeType === "2" || codeType === "3" || codeType === "5") {
      return textColors.light;
    }
    return textColors.dark;
  };

  const classes = useStyles();
  return (
    <>
      <TableRow
        padding="none"
        style={{ backgroundColor: getBackgroundColor(responseCode) }}
        onClick={handleRowClick}
        className={classes.tableRow}
      >
        <TableCell
          className={classes.tableCell}
          style={{ color: getTextColor(responseCode) }}
        >
          {method}
        </TableCell>
        <TableCell
          padding="none"
          align="right"
          style={{ color: getTextColor(responseCode) }}
          className={classes.tableCell}
        >
          {path}
        </TableCell>
        <TableCell
          padding="none"
          align="right"
          className={classes.tableCell}
          style={{ color: getTextColor(responseCode) }}
        >
          {responseCode}
        </TableCell>
        <TableCell
          padding="none"
          className={classes.tableCell}
          align="right"
          style={{ color: getTextColor(responseCode), paddingRight: "10px" }}
        >
          {getFormattedTime(timestamp)}
        </TableCell>
      </TableRow>
      {showDetails ? (
        <TableRow>
          <TableCell colSpan={16}>
            <RequestResponseDetails
              header={header}
              queryParams={queryParams}
              response={response}
              body={body}
            />
          </TableCell>
        </TableRow>
      ) : null}
    </>
  );
}
