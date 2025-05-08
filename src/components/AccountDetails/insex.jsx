import data from "../../data/winability.json";
import {
  Title,
  Text1,
  RowBox,
  Text2,
  TextBox,
  ColumnBox2,
  ColumnBox1,
  FlexBox2,
  FlexBox1,
  Box,
} from "./AccountDetailsStyled";
import { Winnability } from "../Winnability";

export const AccountDetails = () => {
  return (
    <Box>
      <Title>Account Details</Title>
      <FlexBox1>
        <FlexBox2>
          <ColumnBox1>
            <RowBox>
              <Text1>Desicion Support</Text1>
              <TextBox style={{ border: "2px solid #E5E7EB" }}>
                {data.desicionSupport}
              </TextBox>
            </RowBox>
            <ColumnBox2>
              <Text2 style={{ color: "#3B82F6" }}>Winnability</Text2>
              <Text2>Exposure Review & Suggested Covarage</Text2>
              <Text2>Portfolio Strategy Alignment</Text2>
              <Text2>Briker Analytics</Text2>
            </ColumnBox2>
          </ColumnBox1>
          <ColumnBox2
            style={{ gap: "30px", maxWidth: "346px", padding: "25px 30px" }}
          >
            <RowBox>
              <Text1>Risk Assessment</Text1>
              <TextBox>{data.risk}</TextBox>
            </RowBox>
            <RowBox>
              <Text1>Documents and compliance</Text1>
              <TextBox>{data.documents}</TextBox>
            </RowBox>
          </ColumnBox2>
        </FlexBox2>
        <Winnability />
      </FlexBox1>
    </Box>
  );
};
