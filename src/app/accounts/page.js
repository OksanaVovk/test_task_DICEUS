"use client";
import { NavigationBar } from "@/components/NavigationBar";
import { CustomBreadcrumbs } from "@/components/CustomBreadcrumbs";

import { PageBox, StyledParagraph, StyledLink } from "./styles";

const AccountPage = () => {
  return (
    <PageBox>
      <NavigationBar />
      <CustomBreadcrumbs />
      <StyledParagraph>Go to link:</StyledParagraph>
      <StyledLink href="/accounts/maritime-logistics-corp">
        Maritime Logistics Corp
      </StyledLink>
    </PageBox>
  );
};

export default AccountPage;
