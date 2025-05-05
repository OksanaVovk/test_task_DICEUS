import { FlexBoxRow, Item, ItemBox, ListBox } from "./WinabilityBoxDtyled";
export const WinnabilityBox = ({ text }) => {
  return (
    <FlexBoxRow>
      <ListBox>
        {[1, 2, 3, 4].map((item) => (
          <Item key={item}>
            <ItemBox></ItemBox>
          </Item>
        ))}
      </ListBox>
      <p>{text}</p>
    </FlexBoxRow>
  );
};
