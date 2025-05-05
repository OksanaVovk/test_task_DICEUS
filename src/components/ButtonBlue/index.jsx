import { StyledButton } from "./ButtonBlueStyled";
export const ButtonBlue = ({ text, onClick, width, height }) => {
  return (
    <StyledButton onClick={onClick} width={width} height={height}>
      {text}
    </StyledButton>
  );
};
