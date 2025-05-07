import { Diagram, GradientBox } from "./DiagramAccountsStyled";

export const DiagramAccounts = ({ width, height, progress }) => {
  return (
    <Diagram width={width} height={height}>
      <GradientBox percent={progress} />
    </Diagram>
  );
};
