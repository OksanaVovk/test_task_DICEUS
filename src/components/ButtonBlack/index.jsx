import { StyledButton, Text } from "./ButtonBlackStyled";
export const ButtonBlack = ({ text, onClick, isActive }) => {
  return (
    <StyledButton onClick={onClick} $active={isActive}>
      <Text>{text}</Text>
    </StyledButton>
  );
};
