import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#252A3D",
    color: "#94A3B8",
    borderBottom: "none",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: "transparent", // Прозорий фон клітинки
    color: "#E5E7EB", // (за потреби)
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
  return (
    <TableContainer
      component={Paper}
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead sx={{ backgroundColor: "#252A3D", boxShadow: "none" }}>
          <TableRow sx={{ backgroundColor: "#252A3D", boxShadow: "none" }}>
            <StyledTableCell align="left">
              Dessert (100g serving)
            </StyledTableCell>
            <StyledTableCell align="left">Calories</StyledTableCell>
            <StyledTableCell align="left">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="left">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="left">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
              <StyledTableCell align="left">{row.fat}</StyledTableCell>
              <StyledTableCell align="left">{row.carbs}</StyledTableCell>
              <StyledTableCell align="left">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
