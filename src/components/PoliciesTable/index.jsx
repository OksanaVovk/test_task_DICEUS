import { CustomTable } from "../CustomTable";
import { PoliciesTableCell } from "../PoliciesTableCell";
import tableData from "../../data/policiesTable.json";
import { PolociesTableTotal } from "../PoliciesTableTotal";
import { SearchField } from "../SearchField";
import { ButtonFilter } from "../ButtonFilter";
import { SearchBox, RowBox, Title, ColumnBox } from "./PoliciesTableStyle";

const headData = [
  "line",
  "EFF.DATE",
  "EXP.DATE",
  "status",
  "expiring tech",
  "expiring premium",
  "renewal to tech",
  "renewal tech",
  "reneval premium",
  "rate change",
  "loss ratio",
  "",
];

export const PoliciesTable = () => {
  return (
    <div>
      <Title>Policies</Title>
      <ColumnBox>
        <RowBox>
          <SearchBox>
            <SearchField background="#232838" />
          </SearchBox>
          <ButtonFilter width={99} height={27} text="Filter" />
          <ButtonFilter width={99} height={27} text="Group" />
        </RowBox>
        <CustomTable
          headData={headData}
          tableData={tableData}
          CustomTableCell={PoliciesTableCell}
          CustomTableTotal={PolociesTableTotal}
        />
      </ColumnBox>
    </div>
  );
};
