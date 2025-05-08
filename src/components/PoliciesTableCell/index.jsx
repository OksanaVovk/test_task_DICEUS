import { StyledTableCell } from "../CustomTable";
import {
  FlexBoxRow,
  StyledSvg,
  IconBox,
  Text,
  ColumnBox,
  LossRatioBox,
} from "./PoliciesTableCellStyled";
import { DotIndicator } from "../DotIndicator";
import { ButtonEdit } from "../ButtonEdit";

export const PoliciesTableCell = ({ data }) => {
  const getColorByLine = (line) => {
    switch (line) {
      case "Marine Cargo":
        return "#3B82F6";
      case "General Liability":
        return "#3BB979";
      case "Workers Comp":
        return "#6A3BF6";
      case "Umbrella":
        return "#B93B3B";
      default:
        return "#3B82F6";
    }
  };
  return (
    <>
      <StyledTableCell sx={{ verticalAlign: "top" }} component="th" scope="row">
        <ColumnBox>
          <FlexBoxRow style={{ gap: "5px" }}>
            <IconBox color={getColorByLine(data.line)}>
              <StyledSvg>
                <use href={data.icon} />
              </StyledSvg>
            </IconBox>
            <p>{data.line}</p>
          </FlexBoxRow>
          <Text>{data.id}</Text>
        </ColumnBox>
      </StyledTableCell>
      <StyledTableCell sx={{ verticalAlign: "top" }} align="left">
        <p>{data.EFFdate}</p>
      </StyledTableCell>
      <StyledTableCell sx={{ verticalAlign: "top" }} align="left">
        {data.EXRdate}
      </StyledTableCell>
      <StyledTableCell sx={{ verticalAlign: "top" }} align="left">
        <FlexBoxRow>
          <DotIndicator
            background={data.status === "Active" ? "#3BB979" : "#FDD261"}
            marginRight={5}
          />
          <p>{data.status}</p>
        </FlexBoxRow>
      </StyledTableCell>
      <StyledTableCell sx={{ verticalAlign: "top" }} align="left">
        ${data.exTech}
      </StyledTableCell>
      <StyledTableCell sx={{ verticalAlign: "top" }} align="left">
        ${data.exPremium}
      </StyledTableCell>
      <StyledTableCell sx={{ verticalAlign: "top" }} align="left">
        ${data.renewalToTech}
      </StyledTableCell>
      <StyledTableCell sx={{ verticalAlign: "top" }} align="left">
        ${data.renewalTech}
      </StyledTableCell>
      <StyledTableCell sx={{ verticalAlign: "top" }} align="left">
        ${data.renewalPremium}
      </StyledTableCell>
      <StyledTableCell sx={{ verticalAlign: "top" }} align="left">
        <p
          style={{
            color: (data.rate === 6.1 || data.rate === 10) && "#B93B3B",
          }}
        >
          {data.rate === "N/A" ? data.rate : `${data.rate}%`}
        </p>
      </StyledTableCell>
      <StyledTableCell sx={{ verticalAlign: "top" }} align="left">
        <LossRatioBox
          style={{
            color:
              data.lossRatio < 50 && data.lossRatio > 70
                ? "#ffffff"
                : data.lossRatio === "N/A"
                ? "#E5E7EB"
                : "#1E2233",
            background:
              data.lossRatio < 50
                ? "#3BB979"
                : data.lossRatio < 70
                ? "#FDD261"
                : data.lossRatio === "N/A"
                ? "transparent"
                : "#B93B3B",
          }}
        >
          {data.lossRatio === "N/A" ? data.lossRatio : `${data.lossRatio}%`}
        </LossRatioBox>
      </StyledTableCell>
      <StyledTableCell sx={{ verticalAlign: "top" }} align="left">
        <ButtonEdit />
      </StyledTableCell>
    </>
  );
};
