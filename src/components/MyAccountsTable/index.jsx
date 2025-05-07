import { ButtonFilter } from "../ButtonFilter";
import { ButtonBlue } from "../ButtonBlue";
import tableData from "../../data/myAccounts.json";
import { CustomTable } from "../CustomTable";
import { MyAccountTableCell } from "../MyAccountsTableCell";
import {
  Box,
  FlexBox,
  Title,
  SearchBox,
  FlexBoxLarge,
} from "./MyAccountsTableStyled";
import { SearchField } from "../SearchField";

const headData = [
  "account name/type",
  "line",
  "broker",
  "renewal date",
  "premium",
  "rated premium",
  "loss ratio",
  "appetite",
  "status",
  "triage",
  "winnability",
  "",
];

export const MyAccountTable = () => {
  return (
    <Box>
      <FlexBoxLarge>
        <Title>My accounts</Title>
        <SearchBox>
          <SearchField background="#232838" />
        </SearchBox>
        <FlexBox>
          <ButtonFilter width={99} height={27} text="Filter" />
          <ButtonFilter width={99} height={27} text="Sort" />
          <ButtonFilter width={99} height={27} text="Group" />
          <ButtonBlue text="+ New" width={100} height={28} />
        </FlexBox>
      </FlexBoxLarge>
      <CustomTable
        headData={headData}
        tableData={tableData}
        CustomTableCell={MyAccountTableCell}
      />
    </Box>
  );
};
