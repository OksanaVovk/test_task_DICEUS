import { StyledButton, Text } from "./ButtonFilterStyled";
export const ButtonFilter = ({ text, onClick, width, height }) => {
  return (
    <StyledButton onClick={onClick} width={width} height={height}>
      <Text>{text}</Text>
    </StyledButton>
  );
};
