import { StyledTableCell, StyledTableRow } from "../CustomTable";
import { LossRatioBox } from "../PoliciesTableCell/PoliciesTableCellStyled";

export const PolociesTableTotal = ({ data }) => {
  function sumNumbersOnly(arr) {
    return arr.reduce((sum, item) => {
      return typeof item === "number" && Number.isFinite(item)
        ? sum + item
        : sum;
    }, 0);
  }

  function averageOfNumbersOnly(arr) {
    const numbers = arr.filter(
      (item) => typeof item === "number" && Number.isFinite(item)
    );
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return (sum / numbers.length).toFixed(1);
  }

  const averageLossRatio = averageOfNumbersOnly(
    data.map((item) => item.lossRatio)
  );

  return (
    <StyledTableRow>
      <StyledTableCell align="left"></StyledTableCell>
      <StyledTableCell align="left"></StyledTableCell>
      <StyledTableCell align="left"></StyledTableCell>
      <StyledTableCell align="left">TOTAL ({data.length})</StyledTableCell>
      <StyledTableCell align="left">
        ${sumNumbersOnly(data.map((item) => item.exTech))}
      </StyledTableCell>
      <StyledTableCell align="left">
        ${sumNumbersOnly(data.map((item) => item.exPremium))}
      </StyledTableCell>
      <StyledTableCell align="left">
        ${sumNumbersOnly(data.map((item) => item.renewalToTech))}
      </StyledTableCell>
      <StyledTableCell align="left">
        ${sumNumbersOnly(data.map((item) => item.renewalTech))}
      </StyledTableCell>
      <StyledTableCell align="left">
        ${sumNumbersOnly(data.map((item) => item.renewalPremium))}
      </StyledTableCell>
      <StyledTableCell align="left">
        {averageOfNumbersOnly(data.map((item) => item.rate))}%
      </StyledTableCell>
      <StyledTableCell align="left">
        <LossRatioBox
          style={{
            color:
              averageLossRatio < 50 && averageLossRatio > 70
                ? "#ffffff"
                : averageLossRatio === "N/A"
                ? "#E5E7EB"
                : "#1E2233",
            background:
              averageLossRatio < 50
                ? "#3BB979"
                : averageLossRatio < 70
                ? "#FDD261"
                : averageLossRatio === "N/A"
                ? "transparent"
                : "#B93B3B",
          }}
        >
          {averageLossRatio}%
        </LossRatioBox>
      </StyledTableCell>
    </StyledTableRow>
  );
};
