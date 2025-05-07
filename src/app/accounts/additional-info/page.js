"use client";
import { NavigationBar } from "@/components/NavigationBar";
import { PageBox } from "../styles";
import { CustomBreadcrumbs } from "@/components/CustomBreadcrumbs";

const InfoPage = () => {
  return (
    <PageBox>
      <NavigationBar />
      <CustomBreadcrumbs name="Additional Info" />
    </PageBox>
  );
};

export default InfoPage;
