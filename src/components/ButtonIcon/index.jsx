import { StyledButton, StyledSvg, Text } from "./ButtonIconStyled";
export const ButtonIcon = ({ icon, text, onClick, isActive }) => {
  return (
    <StyledButton onClick={onClick} $active={isActive}>
      <StyledSvg>
        <use href={icon} />
      </StyledSvg>
      <Text>{text}</Text>
    </StyledButton>
  );
};
