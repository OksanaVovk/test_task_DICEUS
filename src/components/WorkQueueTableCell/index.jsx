import { StyledTableCell } from "../CustomTable";
import { FlexBoxRow, AvatarBox, Text1 } from "./WorkQueueTableCellStyled";
import { ButtonEdit } from "../ButtonEdit";
import { AvatarIcon } from "../AvatarIcon";
import { DotIndicator } from "../DotIndicator";

export const WorkQueueTableCell = ({ data }) => {
  return (
    <>
      <StyledTableCell component="th" scope="row">
        <FlexBoxRow>
          <AvatarBox>
            <AvatarIcon
              text={data.originator}
              width={32}
              height={32}
              fontSize={13}
            />
          </AvatarBox>
          <p> {data.originator}</p>
        </FlexBoxRow>
      </StyledTableCell>
      <StyledTableCell align="left">
        <div>
          <p>{data.client}</p>
          <Text1>{data.line}</Text1>
        </div>
      </StyledTableCell>
      <StyledTableCell align="left">{data.type}</StyledTableCell>
      <StyledTableCell align="left">
        <FlexBoxRow>
          <DotIndicator
            background={
              data.status === "New"
                ? "#3B82F6"
                : data.status === "Completed"
                ? "#3BB979"
                : "#FDD261"
            }
            marginRight={5}
          />
          <p>{data.status}</p>
        </FlexBoxRow>
      </StyledTableCell>
      <StyledTableCell align="left">{data.created}</StyledTableCell>
      <StyledTableCell align="left">
        <ButtonEdit />
      </StyledTableCell>
    </>
  );
};
