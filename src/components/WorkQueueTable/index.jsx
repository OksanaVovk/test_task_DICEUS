import tableData from "../../data/workQueue.json";
import { WorkQueueTableCell } from "../WorkQueueTableCell";
import { ButtonBlack } from "../ButtonBlack";
import { CustomTable } from "../CustomTable";
import { Box, FlexBox, Title } from "./WorkQueueTableStyled";

const headData = ["originator", "client/line", "type", "status", "created", ""];

export const WorkQueueTable = () => {
  return (
    <Box>
      <Title>WorkQueue</Title>
      <FlexBox>
        <ButtonBlack text="Assigned to me (12)" isActive={true} />
        <ButtonBlack text="Pending Review (8)" />
        <ButtonBlack text="Referrals (3)" />
      </FlexBox>
      <CustomTable
        headData={headData}
        tableData={tableData}
        CustomTableCell={WorkQueueTableCell}
      />
    </Box>
  );
};
