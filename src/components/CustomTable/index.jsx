import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#252A3D",
    fontSize: "9px",
    color: "#94A3B8",
    borderBottom: "none",
    textTransform: "uppercase",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "12px",
    fontStyle: "normal",
    backgroundColor: "transparent",
    color: "#E5E7EB",
    borderBottom: "1px solid #313B54",
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "transparent",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#252A3D",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const CustomTable = ({ headData, CustomTableCell, tableData }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headData.map((data) => (
              <StyledTableCell key={data} align="left">
                {data}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((dataItem, index) => (
            <StyledTableRow key={dataItem.id}>
              <CustomTableCell data={dataItem} />
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
