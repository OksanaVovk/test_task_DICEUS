import { LinkTo } from "../LinkTo";
import {
  Box,
  SmallBox,
  StyledSvg,
  RowBox,
  Text,
  Title,
} from "./ComplianceDocumentationStyled";
const arr = [
  "KYC verification",
  "Regulatory approval",
  "Required Documentation",
  "Financial Verification",
];
export const ComplianceDocumentation = () => {
  return (
    <Box>
      <RowBox style={{ alignItems: "flex-end" }}>
        <Title>Compliance & Documentation</Title>
        <LinkTo text="See history" />
      </RowBox>
      <SmallBox>
        {arr.map((item) => (
          <RowBox key={item}>
            <StyledSvg>
              <use href="/icons.svg#icon-button-check" />
            </StyledSvg>
            <Text>{item}</Text>
          </RowBox>
        ))}
      </SmallBox>
    </Box>
  );
};
