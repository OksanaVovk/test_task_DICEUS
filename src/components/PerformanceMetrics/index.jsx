import data from "../../data/performanceMetrics.json";
import { LinkTo } from "../LinkTo";
import { DiagramAccounts } from "../DiagramAccounts";
import {
  ListBox,
  ItemBox,
  ItemBox1,
  ItemDiv,
  Item,
  Title,
  Text1,
  Text2,
  Text3,
  Text4,
  TextBox,
  RowBox,
  PerformanceBox,
  GridBox,
} from "./PerformanceMetricsStyled";

export const PerformanceMetrics = () => {
  if (!data || Object.keys(data).length === 0) {
    return <p>Помилка: дані не завантажені</p>;
  }

  return (
    <PerformanceBox>
      <Title>Performance Metrics</Title>
      <GridBox style={{ overflowX: "auto", width: "100%" }}>
        <ItemBox>
          <TextBox>
            <RowBox>
              <Text1>Winnability</Text1>
              <ListBox>
                {[1, 2, 3, 4].map((item) => (
                  <Item key={item}>
                    <ItemDiv></ItemDiv>
                  </Item>
                ))}
              </ListBox>
            </RowBox>
            <Text2>{data.winnability}</Text2>
          </TextBox>
          <LinkTo text="See all factors" />
        </ItemBox>

        <ItemBox>
          <TextBox>
            <Text1>Loss Ratio</Text1>
            <Text2>
              {data.LossRatio}
              <Text3> vs 42% target</Text3>
            </Text2>
          </TextBox>
          <LinkTo text="View history" />
        </ItemBox>

        <ItemBox>
          <TextBox>
            <Text1>Premium Growth</Text1>
            <Text2>
              {data.PremiumGrowth}
              <Text3>
                {" "}
                YoY increase<br></br>$123M vs $150M Target
              </Text3>
            </Text2>
          </TextBox>
          <LinkTo text="View trend" />
        </ItemBox>

        <ItemBox1>
          <Text1>Exposure Distribution</Text1>
          {data.ExposureDistribution?.length > 0 ? (
            data.ExposureDistribution.map((item) => (
              <RowBox key={item.name}>
                <DiagramAccounts
                  progress={item.percent}
                  height={22}
                  width={190}
                />
                <Text4>
                  {item.name} {item.percent}%
                </Text4>
              </RowBox>
            ))
          ) : (
            <p>Немає даних для розподілу</p>
          )}
        </ItemBox1>
      </GridBox>
    </PerformanceBox>
  );
};
