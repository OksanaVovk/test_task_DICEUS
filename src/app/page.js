"use client";
import { NavigationBar } from "@/components/NavigationBar";
import { HomePageBox, Box1, Box2, Box3 } from "./styles";
import { QuickActions } from "@/components/QuickActions";
import { MarketIntelligence } from "@/components/MarketIntelligence";
import { PortfolioGoals } from "@/components/PortfolioGoals";
import { WorkQueueTable } from "@/components/WorkQueueTable";
import { MyAccountTable } from "@/components/MyAccountsTable";

export default function Home() {
  return (
    <HomePageBox>
      <NavigationBar />
      <Box1>
        <WorkQueueTable />
        <Box2>
          <PortfolioGoals />
          <Box3>
            <QuickActions />
            <MarketIntelligence />
          </Box3>
        </Box2>
      </Box1>
      <MyAccountTable />
    </HomePageBox>
  );
}
