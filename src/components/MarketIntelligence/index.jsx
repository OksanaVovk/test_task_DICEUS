import { DotIndicator } from "../DotIndicator";
import { Box, Text, List, Item, Title } from "./MarketIntelligenceStyled";
export const MarketIntelligence = () => {
  return (
    <Box>
      <Title>MarketIntelligence</Title>
      <List>
        <Item>
          <DotIndicator
            background={"#B93B3B"}
            marginRight={7}
            height={16}
            width={16}
          />
          <Text>Rate hardering in Cyber market-+15% YoY</Text>
        </Item>
        <Item>
          <DotIndicator
            background={"#FDD261"}
            marginRight={7}
            height={16}
            width={16}
          />
          <Text>New capacity entering Marine market</Text>
        </Item>
        <Item>
          <DotIndicator
            background={"#1E40AF"}
            marginRight={7}
            height={16}
            width={16}
          />
          <Text>Environmental regulatory changes in CA</Text>
        </Item>
      </List>
    </Box>
  );
};
