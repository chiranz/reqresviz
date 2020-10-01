import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export default function CenteredTableCell({ children }) {
  return (
    <TableBody>
      <TableRow>
        <TableCell align="center" colSpan={16}>
          {children}
        </TableCell>
      </TableRow>
    </TableBody>
  );
}
