import {
  DiagramLargeBox,
  Diagram,
  GradientBox,
  Text,
  TextPercent,
} from "./DiagramDashboardStyled";

export const DiagramDashboard = ({
  current = "",
  total = "",
  width,
  height,
  progress,
}) => {
  return (
    <DiagramLargeBox>
      <Diagram width={width} height={height}>
        <GradientBox percent={progress}>
          <Text>{current}</Text>
        </GradientBox>
        <TextPercent percent={progress}>{progress}%</TextPercent>
      </Diagram>
      <Text>{total}</Text>
    </DiagramLargeBox>
  );
};
