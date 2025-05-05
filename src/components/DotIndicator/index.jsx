import { DotBox } from "./DotindicatorStyled";

export const DotIndicator = ({ width, height, background, marginRight }) => {
  return (
    <DotBox
      width={width}
      height={height}
      background={background}
      marginRight={marginRight}
    ></DotBox>
  );
};
