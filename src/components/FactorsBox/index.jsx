import { DiagramWinnability } from "../DiagramWinnability";
import {
  Text1,
  Text2,
  CircleBox,
  RowBox,
  ColumnBox,
} from "./FactorsBockStyled";

export const FactorsBox = ({
  index,
  name,
  percent,
  gradient,
  percentText,
  border,
}) => {
  return (
    <RowBox>
      <CircleBox border={border}>
        <Text1 style={{ color: { border } }}>{index}</Text1>
      </CircleBox>
      <ColumnBox>
        <Text2 isHighlighted>{name}</Text2>

        <RowBox>
          <DiagramWinnability percent={percent} background={gradient} />
          <Text2>{percentText}%</Text2>
        </RowBox>
      </ColumnBox>
    </RowBox>
  );
};
