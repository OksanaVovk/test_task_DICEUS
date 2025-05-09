import data from "../../data/winability.json";
import Image from "next/image";
import { FactorsBox } from "../FactorsBox";
import { ButtonBackground } from "../ButtonBackground";
import { WinnabilityBox } from "../WinnabilityBox";
import { DiagramAccounts } from "../DiagramAccounts";
import {
  Title,
  Text1,
  Text2,
  RowBox2,
  ItemBox,
  FlexBox2,
  StyledSvg,
  ColumnBox,
  FlexBox1,
  RowBox1,
  ButtonBox,
} from "./WinnabilityStyled";

export const Winnability = () => {
  return (
    <div>
      <Title>Winnability</Title>
      <FlexBox1>
        <ItemBox style={{ gridArea: "left", flex: 1 }}>
          <Text1>Overall Score</Text1>
          <RowBox1>
            <Text1 style={{ fontSize: "40px" }}>{data.overallScore}</Text1>
            <WinnabilityBox text={data.winnability} />
          </RowBox1>
        </ItemBox>
        <ItemBox
          style={{ gridArea: "right", flex: 1, justifyContent: "flex-start" }}
        >
          <Text1 style={{ marginBottom: "25px" }}>Historical trend</Text1>
          <Image
            src="/Graph_1x.webp"
            alt="graph"
            width={308}
            height={75}
            srcSet="/Graph_1x.webp 1x,/Graph_2x.webp 2x"
            style={{ width: "100%", height: "auto" }}
          />
        </ItemBox>
        <ItemBox style={{ gridArea: "center" }}>
          <Text1>Position</Text1>
          {data.position.map((item) => (
            <RowBox1 key={item.name}>
              <DiagramAccounts
                progress={item.percent}
                height={20}
                width={190}
              />
              <Text2
                isHighlighted={item.name === "Your score"}
                style={{ fontSize: "14px" }}
              >
                {item.name}: {item.percent}%
              </Text2>
            </RowBox1>
          ))}
        </ItemBox>
      </FlexBox1>

      <FlexBox2>
        <ColumnBox>
          <RowBox1>
            <StyledSvg>
              <use href="/icons.svg#icon-button-up" />
            </StyledSvg>
            <Text1>Increasing Winnability</Text1>
          </RowBox1>

          {data.increasing.map((item, index) => (
            <FactorsBox
              key={item.name}
              index={index + 1}
              name={item.name}
              percent={item.percent}
              percentText={item.percent}
              border="#FDD261"
              gradient="linear-gradient(to right, rgba(59, 185, 121, 0) 0%, #3BB979 100%)"
            />
          ))}
        </ColumnBox>

        <ColumnBox>
          <RowBox1>
            <StyledSvg>
              <use href="/icons.svg#icon-button-down" />
            </StyledSvg>
            <Text1 style={{ color: "#E5E7EB" }}>Decreasing Winnability</Text1>
          </RowBox1>
          {data.decreasing.map((item, index) => (
            <FactorsBox
              key={item.name}
              index={index + 1}
              name={item.name}
              percent={item.percent}
              percentText={`-${item.percent}`}
              border="#FDD261"
              gradient="linear-gradient(to right, rgba(253, 210, 97, 0) 0%, #FDD261 100%)"
            />
          ))}
        </ColumnBox>
      </FlexBox2>

      <ColumnBox>
        <RowBox1>
          <StyledSvg>
            <use href="/icons.svg#icon-rocket" />
          </StyledSvg>
          <Text1 style={{ color: "#3BB979" }}>Al-Powered Recommendations</Text1>
        </RowBox1>
        {data.recommendations.map((item) => (
          <RowBox2 key={item.title}>
            <div>
              <Text2 isHighlighted>{item.title}</Text2>
              <Text2>{item.text}</Text2>
            </div>
            <ButtonBox>
              <ButtonBackground
                text="Applay"
                bg="#3BB979"
                cl="#1D2125"
                clH="#1D2125"
                bgH="#1D8852"
              />
            </ButtonBox>
          </RowBox2>
        ))}
      </ColumnBox>
    </div>
  );
};
