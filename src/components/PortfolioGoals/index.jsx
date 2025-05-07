import Image from "next/image";
import { Box, Title, Text, ImageBox, GridBox } from "./PortfolioGoalsStyled";
import { DiagramDashboard } from "../DiagramDashboard";
import data from "../../data/target.json";

export const PortfolioGoals = () => {
  return (
    <Box>
      <Title>Portfolio goals</Title>
      <Text>Portfolio loss ratio target</Text>
      <ImageBox>
        <Image
          src="/Diagram1_1x.webp"
          alt="diagram"
          width={238}
          height={51}
          srcSet="/Diagram1_1x.webp 1x,/Diagram1_2x.webp 2x"
          style={{ width: "100%", height: "auto" }}
        />
      </ImageBox>
      <Text>Renewal retention</Text>
      <ImageBox>
        <Image
          src="/Diagram2_1x.webp"
          alt="diagram"
          width={238}
          height={36}
          srcSet="/Diagram2_1x.webp 1x, /Diagram2_2x.webp 2x"
          style={{ width: "100%", height: "auto" }}
        />
      </ImageBox>
      {data ? (
        <GridBox>
          {data.map((item) => (
            <div key={item.title}>
              <Text style={{ marginBottom: "5px" }}>{item.title}</Text>
              <DiagramDashboard
                current={item.current}
                total={item.total}
                progress={item.progress}
              />
            </div>
          ))}
        </GridBox>
      ) : null}
    </Box>
  );
};
