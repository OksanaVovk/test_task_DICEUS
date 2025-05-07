"use client";
import { NavigationBar } from "@/components/NavigationBar";
import { PageBox } from "../styles";
import { FlexBox1 } from "./styles";
import { CustomBreadcrumbs } from "@/components/CustomBreadcrumbs";
import { MartimeLogo } from "@/components/MartimeLogo";
import { NeedsAttention } from "@/components/NeedsAttention";
import { PerformanceMetrics } from "@/components/PerformanceMetrics";

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
    </PageBox>
  );
};

export default MartimePage;
