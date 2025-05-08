import { CustomTable } from "../CustomTable";
import { PoliciesTableCell } from "../PoliciesTableCell";
import tableData from "../../data/policiesTable.json";

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
      <CustomTable
        headData={headData}
        tableData={tableData}
        CustomTableCell={PoliciesTableCell}
      />
    </div>
  );
};
