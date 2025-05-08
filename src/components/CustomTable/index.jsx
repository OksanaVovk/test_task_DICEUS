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
    fontSize: "12px",
    color: "#94A3B8",
    borderBottom: "none",
    textTransform: "uppercase",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "14px",
    padding: "5px",
    fontStyle: "normal",
    backgroundColor: "transparent",
    color: "#E5E7EB",
    borderBottom: "1px solid #313B54",
  },
}));

export const StyledTableRow = styled(TableRow)(() => ({
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

export const CustomTable = ({
  headData,
  CustomTableCell,
  tableData,
  CustomTableTotal,
}) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        overflowX: "auto",
        maxWidth: "100%",
      }}
    >
      <Table
        sx={{ width: "100%", minWidth: 700 }}
        aria-label="customized table"
      >
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
          {CustomTableTotal && <CustomTableTotal data={tableData} />}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
