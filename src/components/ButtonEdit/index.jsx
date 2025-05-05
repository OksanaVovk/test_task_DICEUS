import { Button, StyledSvg } from "./ButtonEditStyled";
export const ButtonEdit = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <StyledSvg>
        <use href="/icons.svg#icon-group-button" />
      </StyledSvg>
    </Button>
  );
};
