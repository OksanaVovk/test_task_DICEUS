"use client";
import { NavigationBar } from "@/components/NavigationBar";
import tableData1 from "../data/workQueue.json";
import tableData2 from "../data/myAccounts.json";
import { CustomTable } from "@/components/CustomTable";
import { WorkQueueTableCell } from "@/components/WorkQueueTableCell";
import { MyAccountTableCell } from "@/components/MyAccountsTableCell";
import { HomePageBox } from "./styles";
import { QuickActions } from "@/components/QuickActions";
import { MarketIntelligence } from "@/components/MarketIntelligence";

const headData1 = [
  "originator",
  "client/line",
  "type",
  "status",
  "created",
  "",
];
const headData2 = [
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

export default function Home() {
  return (
    <HomePageBox>
      <NavigationBar />
      <div
        style={{
          marginTop: "30px",
          padding: "25px 22px ",
          backgroundColor: "#1E2233",
          borderRadius: "15px",
          border: "1px solid #313B54",
          marginBottom: "30px",
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>Table</h1>
        <CustomTable
          headData={headData1}
          tableData={tableData1}
          CustomTableCell={WorkQueueTableCell}
        />
      </div>
      <QuickActions />
      <MarketIntelligence />
      <div
        style={{
          marginTop: "30px",
          padding: "25px 22px ",
          backgroundColor: "#1E2233",
          borderRadius: "15px",
          border: "1px solid #313B54",
          maxWidth: "1656px",
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>Table2</h1>
        <CustomTable
          headData={headData2}
          tableData={tableData2}
          CustomTableCell={MyAccountTableCell}
        />
      </div>
    </HomePageBox>
  );
}
