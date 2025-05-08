import { GradientBox } from "./DiagramWinnabilityStyle";

export const DiagramWinnability = ({ percent, height, background }) => {
  const width = Number(percent) * 11;
  return (
    <GradientBox
      height={height}
      width={width}
      background={background}
    ></GradientBox>
  );
};
