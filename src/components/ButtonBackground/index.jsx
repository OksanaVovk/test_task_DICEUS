import { StyledButton } from "./ButtonBackgroundStyled";
export const ButtonBackground = ({
  text,
  onClick,
  width,
  height,
  bg,
  cl,
  bgH,
  clH,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      width={width}
      height={height}
      bg={bg}
      cl={cl}
      bgH={bgH}
      clH={clH}
    >
      {text}
    </StyledButton>
  );
};
