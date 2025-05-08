"use client";
import { NavigationBar } from "@/components/NavigationBar";
import { PageBox } from "../styles";
import { FlexBox1, FlexBox2 } from "./styles";
import { CustomBreadcrumbs } from "@/components/CustomBreadcrumbs";
import { MartimeLogo } from "@/components/MartimeLogo";
import { NeedsAttention } from "@/components/NeedsAttention";
import { PerformanceMetrics } from "@/components/PerformanceMetrics";
import { Policies } from "@/components/Policies";
import { AccountsStatus } from "@/components/AccountStatus";
import { ComplianceDocumentation } from "@/components/ComplianceDocumentation";
import { AccountDetails } from "@/components/AccountDetails/insex";

const MartimePage = () => {
  return (
    <PageBox>
      <NavigationBar />
      <CustomBreadcrumbs name="Maritime Logistics Corp" />
      <FlexBox1>
        <MartimeLogo />
        <NeedsAttention />
      </FlexBox1>
      <PerformanceMetrics />
      <Policies />
      <FlexBox2>
        <AccountsStatus />
        <ComplianceDocumentation />
      </FlexBox2>
      <AccountDetails />
    </PageBox>
  );
};

export default MartimePage;
