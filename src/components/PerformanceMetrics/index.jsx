import data from "../../data/performanceMetrics.json";
import { LinkTo } from "../LinkTo";
import { DiagramAccounts } from "../DiagramAccounts";
import {
  ListBox,
  ItemBox,
  Item,
  Title,
  Text1,
  Text2,
  Text3,
  Text4,
  FlexBox3,
  FlexBox4,
  FlexBox2,
  FlexBox1,
  GridBox,
} from "./PerformanceMetricsStyled";

export const PerformanceMetrics = () => {
  if (!data || Object.keys(data).length === 0) {
    return <p>Помилка: дані не завантажені</p>;
  }

  return (
    <FlexBox1>
      <Title>Performance Metrics</Title>
      <GridBox>
        <FlexBox3>
          <FlexBox4>
            <FlexBox2>
              <Text1>Winnability</Text1>
              <ListBox>
                {[1, 2, 3, 4].map((item) => (
                  <Item key={item}>
                    <ItemBox></ItemBox>
                  </Item>
                ))}
              </ListBox>
            </FlexBox2>
            <Text2>{data.winnability}</Text2>
          </FlexBox4>
          <LinkTo text="See all factors" />
        </FlexBox3>

        <FlexBox3>
          <FlexBox4>
            <Text1>Loss Ratio</Text1>
            <Text2>
              {data.LossRatio}
              <Text3> vs 42% target</Text3>
            </Text2>
          </FlexBox4>
          <LinkTo text="View history" />
        </FlexBox3>

        <FlexBox3>
          <FlexBox4>
            <Text1>Premium Growth</Text1>
            <Text2>
              {data.PremiumGrowth}
              <Text3>
                {" "}
                YoY increase<br></br>$123M vs $150M Target
              </Text3>
            </Text2>
          </FlexBox4>
          <LinkTo text="View trend" />
        </FlexBox3>

        <FlexBox3 style={{ gap: "10px", height: "190px", minHeight: "0px" }}>
          <Text1>Exposure Distribution</Text1>
          {data.ExposureDistribution?.length > 0 ? (
            data.ExposureDistribution.map((item) => (
              <FlexBox2 key={item.name}>
                <DiagramAccounts
                  progress={item.percent}
                  height={22}
                  width={234}
                />
                <Text4>
                  {item.name} {item.percent}%
                </Text4>
              </FlexBox2>
            ))
          ) : (
            <p>Немає даних для розподілу</p>
          )}
        </FlexBox3>
      </GridBox>
    </FlexBox1>
  );
};
