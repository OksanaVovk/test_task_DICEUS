import { StyledTableCell } from "../CustomTable";
import {
  FlexBoxRow,
  AvatarBox,
  Text1,
  StatusBox,
} from "./WorkQueueTableCellStyled";
import { ButtonEdit } from "../ButtonEdit";
import { AvatarIcon } from "../AvatarIcon";

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
          <StatusBox
            style={{
              background:
                data.status === "New"
                  ? "#3B82F6"
                  : data.status === "Completed"
                  ? "#3BB979"
                  : "#FDD261",
            }}
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
