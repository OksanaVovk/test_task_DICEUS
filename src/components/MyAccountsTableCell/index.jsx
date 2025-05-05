import { StyledTableCell } from "../CustomTable";
import {
  FlexBoxRow,
  Text1,
  StatusBox,
  LossRatioBox,
  TriageBox,
  Text2,
} from "./MyAccountsTableCellStyled";
import { ButtonEdit } from "../ButtonEdit";
import { WinnabilityBox } from "../WinnabilityBox";

export const MyAccountTableCell = ({ data }) => {
  return (
    <>
      <StyledTableCell component="th" scope="row">
        <p>{data.accountName}</p>
        <Text1>{data.type}</Text1>
      </StyledTableCell>
      <StyledTableCell align="left">{data.line}</StyledTableCell>
      <StyledTableCell align="left">{data.broker}</StyledTableCell>
      <StyledTableCell align="left">{data.renewalDate}</StyledTableCell>
      <StyledTableCell align="right">
        <FlexBoxRow>
          <p>$</p>
          <p>{data.premium}</p>
        </FlexBoxRow>
      </StyledTableCell>
      <StyledTableCell align="right">
        <FlexBoxRow>
          <p>$</p>
          <p>{data.ratedPremium}</p>
        </FlexBoxRow>
      </StyledTableCell>
      <StyledTableCell align="left">
        <LossRatioBox
          style={{
            color:
              data.lossRatio > 35 && data.lossRatio < 60
                ? "#041B2E"
                : "#ffffff",
            background:
              data.lossRatio < 35
                ? "#3BB979"
                : data.lossRatio < 60
                ? "#FDD261"
                : "#B93B3B",
          }}
        >
          <p>{data.lossRatio}%</p>
        </LossRatioBox>
      </StyledTableCell>
      <StyledTableCell align="right">
        <Text2>{data.appetite}</Text2>
      </StyledTableCell>
      <StyledTableCell align="left">
        <FlexBoxRow>
          <StatusBox
            style={{
              background: data.status === "Active" ? "#3BB979" : "#1E40AF",
            }}
          />
          <p>{data.status}</p>
        </FlexBoxRow>
      </StyledTableCell>
      <StyledTableCell align="left">
        <TriageBox>
          <p>{data.triage}</p>
        </TriageBox>
      </StyledTableCell>
      <StyledTableCell align="left">
        <WinnabilityBox text={data.winnability} />
      </StyledTableCell>
      <StyledTableCell align="left">
        <ButtonEdit />
      </StyledTableCell>
    </>
  );
};
