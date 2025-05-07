import data from "../../data/policies.json";
import {
  ItemBox,
  RowBox,
  StyledSvg,
  Text1,
  Text2,
  FlexBox,
  Title,
  PoliciesBox,
} from "./PoliciesStyled";
export const Policies = () => {
  if (!data || Object.keys(data).length === 0) {
    return <p>Помилка: дані не завантажені</p>;
  }
  return (
    <PoliciesBox>
      <Title>Policies</Title>
      <FlexBox>
        {data.map((item) => (
          <ItemBox key={item.line}>
            <RowBox>
              <StyledSvg>
                <use href={item.icon} />
              </StyledSvg>
              <Text1>{item.line}</Text1>
            </RowBox>
            <Text2>Premium: ${item.premium}</Text2>
            <Text2>Eff.Date: {item.date}</Text2>
          </ItemBox>
        ))}
      </FlexBox>
    </PoliciesBox>
  );
};
