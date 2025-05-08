import { StyledTableCell } from "../CustomTable";
import { FlexBoxRow } from "./PoliciesTableCellStyled";
import { DotIndicator } from "../DotIndicator";
import { ButtonEdit } from "../ButtonEdit";
export const PoliciesTableCell = ({ data }) => {
  return (
    <>
      <StyledTableCell component="th" scope="row">
        <div>
          <div>
            <svg>
              <use href={data.icon} />
            </svg>
            <p>{data.line}</p>
          </div>
          <p>{data.id}</p>
        </div>
      </StyledTableCell>
      <StyledTableCell align="left">
        <p>{data.EFFdate}</p>
      </StyledTableCell>
      <StyledTableCell align="left">{data.EXRdate}</StyledTableCell>
      <StyledTableCell align="left">
        <FlexBoxRow>
          <DotIndicator
            background={data.status === "Active" ? "#3BB979" : "#FDD261"}
            marginRight={5}
          />
          <p>{data.status}</p>
        </FlexBoxRow>
      </StyledTableCell>
      <StyledTableCell align="left">${data.exTech}</StyledTableCell>
      <StyledTableCell align="left">${data.exPremium}</StyledTableCell>
      <StyledTableCell align="left">${data.renewalToTech}</StyledTableCell>
      <StyledTableCell align="left">${data.renewalTech}</StyledTableCell>
      <StyledTableCell align="left">${data.renewalPremium}</StyledTableCell>
      <StyledTableCell align="left">{data.rate}%</StyledTableCell>
      <StyledTableCell align="left">{data.lossRatio}%</StyledTableCell>
      <StyledTableCell align="left">
        <ButtonEdit />
      </StyledTableCell>
    </>
  );
};
